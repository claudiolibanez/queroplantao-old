import React, { useState, useEffect, useCallback } from 'react'
import firestore from '@react-native-firebase/firestore'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Text,
  FlatList,
  RefreshControl, 
  ActivityIndicator,
  TextInput,
  // TouchableOpacity,   
} from 'react-native'

import collectionNames from '../../constants/Firestore'
import Screens from '../../constants/Screens'

import { useCurrentUser } from '../../models/User'

import PageContainer from '../../components/PageConainter'
import JobAdvertisementHeader from './JobAdvertisementHeader'
// import AdvancedSearchModal from './AdvancedSearchModal'

import { styles } from './styles'
import JobAdvertisementItem from './JobAdvertisementItem'

function JobAdvertisementPage() {
  const [user] = useCurrentUser()

  const navigation = useNavigation()

  let onEndReachedCalledDuringMomentum = false

  const [isLoading, setIsLoading] = useState(false)
  const [isMoreLoading, setIsMoreLoading] = useState(false)
  const [mount, setMount] = useState(false)
  const [lastDoc, setLastDoc] = useState(null)
  const [jobAdvertisements, setJobAdvertisements] = useState([])
  const [searchJobAdvertisements, setSearchJobAdvertisements] = useState([])
  const [search, setSearch] = useState('')
  // const [open, setOpen] = useState(false)

  const jobAdvertisementsRef = firestore().collection(collectionNames.JOBADVERTISEMENTS)

  const loadJobAdvertisements = useCallback(async () => {
    try {
      setIsLoading(true)
      // eslint-disable-next-line prefer-const
      let filters = []

      const snapshot = await jobAdvertisementsRef
        .orderBy('createdAt', 'desc')
        .limit(10)
        .get()

      if (!snapshot.empty) {
        setLastDoc(snapshot.docs[snapshot.docs.length - 1])
      
        // eslint-disable-next-line no-loops/no-loops, no-plusplus
        for (let i = 0; i < snapshot.docs.length; i++) {
          const jobAdvertisement = {
            ...snapshot.docs[i].data(),
            id: snapshot.docs[i].id
          }

          filters.push(jobAdvertisement)
        }
      } 

      // filters = filters.filter(jobAdvertisement => jobAdvertisement.ownerId !== user.id)

      setJobAdvertisements(filters)
      setIsLoading(false)
    } catch (err) {
      console.log(`${err}`)
    }
  }, [])

  const onRefresh = () => {
    loadJobAdvertisements()
  }

  const renderFooter = () => {
    if (!isMoreLoading) return true

    return (
      <ActivityIndicator 
        size="large"
        color="#cacaca"
        style={{ marginBottom: 10 }}
      />
    )
  }

  const getMore = async () => {
    if (lastDoc) {
      setIsMoreLoading(true)

      // eslint-disable-next-line prefer-const
      let snapshot = await jobAdvertisementsRef
        .orderBy('createdAt', 'desc')
        .startAfter(lastDoc.data().createdAt)
        .limit(5)
        .get()

      if (!snapshot.empty) {
        // eslint-disable-next-line prefer-const
        let filters = jobAdvertisements

        setLastDoc(snapshot.docs[snapshot.docs.length - 1])

        // eslint-disable-next-line no-loops/no-loops, no-plusplus
        for (let i = 0; i < snapshot.docs.length; i++) {
          const jobAdvertisement = {
            ...snapshot.docs[i].data(),
            id: snapshot.docs[i].id
          }

          filters.push(jobAdvertisement)
        }

        filters = filters.filter(jobAdvertisement => jobAdvertisement.ownerId !== user.id)

        setJobAdvertisements(filters)

        if (snapshot.docs.length < 5) {
          setLastDoc(null)
        }
      } else {  
        setLastDoc(null)
      }

      setIsMoreLoading(false)
    }

    onEndReachedCalledDuringMomentum = true
  }

  useEffect(() => {
    if (!mount) {
      loadJobAdvertisements()
      setMount(!mount)
    }
    return () => {}
  }, [loadJobAdvertisements, mount])

  // const handleOpenModal = () => {
  //   setOpen(true)
  //   // setAdvertiseJob(item)
  // }

  const handleChangeText = async (value) => {
    setSearch(value)
    setSearchJobAdvertisements([])

    try {
      setIsLoading(true)

      // eslint-disable-next-line prefer-const
      let filters = []

      const locations = await jobAdvertisementsRef
        .where('location.city', '>=', value.toLowerCase())
        .where('location.city', '<=', `${value.toLowerCase()}\uf8ff`)
        .get()

      const specialties = await jobAdvertisementsRef
        .where('specialty.title', '>=', value.toLowerCase())
        .where('specialty.title', '<=', `${value.toLowerCase()}\uf8ff`)
        .get()

      if (!locations.empty) {
        // eslint-disable-next-line no-loops/no-loops, no-plusplus
        for (let i = 0; i < locations.docs.length; i++) {
          const location = {
            ...locations.docs[i].data(),
            id: locations.docs[i].id
          }

          if (!filters.includes(location)) {
            filters.push(location)
          }
        }
      }

      if (!specialties.empty) {
        // eslint-disable-next-line no-loops/no-loops, no-plusplus
        for (let i = 0; i < specialties.docs.length; i++) {
          const specialty = {
            ...specialties.docs[i].data(),
            id: specialties.docs[i].id
          }

          if (!filters.includes(specialty)) {
            filters.push(specialty)
          }
        }
      }
      
      setSearchJobAdvertisements(filters)

      setIsLoading(false)
    } catch (err) {
      console.log(`${err}`)
    }
  }

  const handleNavigationToJobAdvertisementDetailsPage = (item) => {
    navigation.navigate(Screens.JobAdvertisementDetailsPage, { item })
  }

  return (
    <>
      <PageContainer>
        <JobAdvertisementHeader />

        <View style={styles.searchBar}>
          <View style={styles.root}>
            <Text style={styles.label}>
              Pesquisar
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.input} 
                  placeholder="Digite cidade ou especialidade..." 
                  value={search}
                  onChangeText={handleChangeText}
                />
              </View>
              {/* <TouchableOpacity style={styles.buttonFilter} onPress={handleOpenModal}> 
                <MaterialCommunityIcons name="filter-variant" size={28} color="white" />
              </TouchableOpacity> */}
            </View>
          </View>
        
        </View>
      
        {search !== '' ? (
          <FlatList
            data={searchJobAdvertisements}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <JobAdvertisementItem 
                jobAdvertisement={item} 
                onPress={() => handleNavigationToJobAdvertisementDetailsPage(item)} 
              /> 
            )}
            ListEmptyComponent={() => {
              if (isLoading) {
                return (

                  <View style={{ flex: 1 }}>
                    <ActivityIndicator 
                      size="large"
                      color="#cacaca"
                    />
                  </View>
                )
              }

              return (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>Nada encontrado</Text>
                </View>
              )
            }}
          />
        
        ) : (
          <FlatList 
            data={jobAdvertisements}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <JobAdvertisementItem 
                jobAdvertisement={item} 
                onPress={() => handleNavigationToJobAdvertisementDetailsPage(item)} 
              /> 
            )}
            initialNumToRender={10}
            ListFooterComponent={renderFooter}
            refreshControl={(
              <RefreshControl 
                refreshing={isLoading}
                onRefresh={onRefresh}
              />
            )}
            onEndReachedThreshold={0.5}
            onMomentumScrollBegin={() => { onEndReachedCalledDuringMomentum = false }}
            onEndReached={() => {
              if (!onEndReachedCalledDuringMomentum && !isMoreLoading) {
                getMore()
              }
            }}
          />
        )}

      </PageContainer>
    </>
  )
}

export default JobAdvertisementPage 