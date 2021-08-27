import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react'
import { useNavigation } from '@react-navigation/native'
import IconFeather from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore'

import {
  View,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native'

import { useCurrentUser } from '../../models/User'

import collectionNames from '../../constants/Firestore'
import Screens from '../../constants/Screens'

import { IconButton, FabButton } from '../../components/Button'
import Typography from '../../components/Typography'

import MemberSelectedItem from './MemberSelectedItem'
import MemberItem from './MemberItem'

import styles from './styles'

function GroupMembersFormPage() {
  const [user] = useCurrentUser()
  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(false)
  const [mount, setMount] = useState(false)
  const [selectedMemberIds, setSelectedMemberIds] = useState([])
  const [users, setUsers] = useState([])

  const list = useMemo(() => {
    const members = users.map(member => ({
      ...member,
      selected: Boolean(selectedMemberIds.find(key => key === member.id))
    }))

    members.splice(0, 0, {
      ...user,
      selected: true,
      admin: true,
    })

    return members
  }, [selectedMemberIds, users])

  const members = useMemo(() => list.filter(member => member.selected === true), [list])

  const usersRef = firestore().collection(collectionNames.USERS)

  const loadUsers = useCallback(async () => {
    setIsLoading(false)
    try {
      // eslint-disable-next-line prefer-const
      let filters = []

      const snapshot = await usersRef
        .where('isAdmin', '==', false)
        .get()

      if (!snapshot.empty) {
        // eslint-disable-next-line no-loops/no-loops, no-plusplus
        for (let i = 0; i < snapshot.docs.length; i++) {
          const userData = {
            ...snapshot.docs[i].data(),
            id: snapshot.docs[i].id
          }

          filters.push(userData)
        }
      }
      setUsers(filters)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handlePressChat = (member) => {
    const { id, selected } = member
    if (selected) {
      setSelectedMemberIds([...selectedMemberIds.filter(key => key !== id)])
    } else {
      setSelectedMemberIds([...selectedMemberIds, id])
    }
  }

  const handleNavigationToGroupForm = () => {
    navigation.navigate(Screens.GroupFormPage, { members })
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    if (!mount) {
      loadUsers()
      setMount(!mount)
    }
    return () => {}
  }, [loadUsers, mount])

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <IconButton onPress={handleGoBack} style={styles.iconButton}>
          <IconFeather name="arrow-left" size={24} />
        </IconButton>
        <View style={styles.titleContainer}>
          <Typography variant="headerTitle">
            Novo grupo
          </Typography>
          <Typography variant="caption">
            {members.length !== 0 ? `${members.length} de 256 selecionado` : 'Adicionar participantes' }
          </Typography>
        </View>
      </View>
      <View style={styles.content}> 
        <View
          style={{ paddingVertical: members.length !== 0 ? 12 : 0 }}
        >
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {members.map(member => (
              <MemberSelectedItem 
                key={member.id} 
                member={member}
                onPress={() => handlePressChat(member)} 
              />
            ))}
          </ScrollView>

          {members.length !== 0 && (
            <View style={styles.divider} />
          )}

        </View>
        <View style={{ flex: 1 }}>
          <FlatList 
            style={{ flex: 1 }}
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MemberItem 
                member={item} 
                onPress={() => handlePressChat(item)}
              />
            )}
          />
        </View>
        <View style={styles.bottomToolbar}>
          {Boolean(members.length > 0) && (
            <FabButton 
              icon="chevron-right"
              onPress={handleNavigationToGroupForm}
            /> 
          )}
        </View>
      </View>
    </View>
  )
}

export default GroupMembersFormPage  