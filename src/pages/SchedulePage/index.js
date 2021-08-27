// #region 
import React, {
  useState,
  useEffect,
  useCallback,
} from 'react'
import firestore from '@react-native-firebase/firestore'

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Agenda, LocaleConfig } from 'react-native-calendars'
// #endregion

import collectionNames from '../../constants/Firestore'

import PageContainer from '../../components/PageConainter'
import SheduleHeader from './SheduleHeader'

function SchedulePage() {
  // const [items, setItems] = useState({})
  // const [mount, setMount] = useState(false)

  // const renderDay = (item) => (
  //   <TouchableOpacity>
  //     <View>
  //       <Text>
  //         {item.name}
  //       </Text>
  //     </View>
  //   </TouchableOpacity>
  // )

  // const jobAdvertisementsRef = firestore().collection(collectionNames.JOBADVERTISEMENTS)

  // const loadJobsAdvertisements = useCallback(async () => {
  //   try {
  //     const filters = []
      
  //     const snapshot = await jobAdvertisementsRef.get()

  //     if (!snapshot.empty) {
  //       // eslint-disable-next-line no-loops/no-loops, no-plusplus
  //       for (let i = 0; i < snapshot.docs.length; i++) {
  //         const jobAdvertisement = {
  //           ...snapshot.docs[i].data(),
  //           id: snapshot.docs[i].id
  //         }

  //         filters.push(jobAdvertisement)
  //       }
  //     }

  //     // console.log(filters)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  // useEffect(() => {
  //   LocaleConfig.locales['pt-BR'] = {
  //     monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outrubro', 'Novembro', 'Dezembro'],
  //     monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out.', 'Nov', 'Dez'],
  //     dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  //     dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  //     today: 'Hoje'
  //   }

  //   LocaleConfig.defaultLocale = 'pt-BR'

  //   if (!mount) {
  //     loadJobsAdvertisements()
  //     setMount(!mount)
  //   }
  //   return () => {}
  // }, [loadJobsAdvertisements, mount])

  return (
    <PageContainer>
      <SheduleHeader />
      {/* <Agenda
        items={{
          '2021-04-22': [{ name: 'item 1 - any js object' }],
          '2021-04-23': [{ name: 'item 2 - any js object', height: 80 }],
          '2021-04-24': [],
          '2021-04-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
        }}
        selected="2021-04-20"
        renderItem={renderDay}
      /> */}
    </PageContainer>
  )
}

export default SchedulePage