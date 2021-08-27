import React, {
  useState,
  useEffect,
  useCallback,
} from 'react'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

import {
  View,
  FlatList
} from 'react-native'

import { useCurrentUser } from '../../models/User'

import collectionNames from '../../constants/Firestore'
import Screens from '../../constants/Screens'

import PageConainter from '../../components/PageConainter'
import Header from '../../components/Header'
import JobAdvertisementItem from '../JobAdvertisementPage/JobAdvertisementItem'

import styles from './styles'

function JobAdvertisementListPage() {
  const [user] = useCurrentUser()
  const navigation = useNavigation()

  const [jobAdvertisements, setJobAdvertisements] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [mount, setMount] = useState(false)

  const handleNavigationToJobAdvertisementDetailsPage = (item) => {
    navigation.navigate(Screens.JobAdvertisementDetailsPage, { item })
  }

  const jobAdvertisementsRef = firestore().collection(collectionNames.JOBADVERTISEMENTS)

  const loadJobAdvertisements = useCallback(async () => {
    try {
      setIsLoading(true)
      // eslint-disable-next-line prefer-const
      let filters = []

      const snapshot = await jobAdvertisementsRef
        .where('ownerId', '==', user.id)
        .get()

      if (!snapshot.empty) {
        // eslint-disable-next-line no-loops/no-loops, no-plusplus
        for (let i = 0; i < snapshot.docs.length; i++) {
          const jobAdvertisement = {
            ...snapshot.docs[i].data(),
            id: snapshot.docs[i].id
          }

          filters.push(jobAdvertisement)
        }
      } 

      setJobAdvertisements(filters)
      setIsLoading(false)
    } catch (err) {
      console.log(`${err}`)
    }
  }, [])

  useEffect(() => {
    if (!mount) {
      loadJobAdvertisements()
      setMount(!mount)
    }
    return () => {}
  }, [loadJobAdvertisements, mount])

  return (
    <PageConainter>
      <Header backButton title="Meus anúncios" />

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
      />
    </PageConainter>
  )
}

export default JobAdvertisementListPage