import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import {
  View,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native'

import { useChats } from '../../../models/Chat'

import { MessageService } from '../../../models/Message'
import { useCurrentUser } from '../../../models/User'

import ScrollableModal from '../../Modal/ScrollableModal'
import TextButton from '../TextButton'
import IconButton from '../IconButton'
import Typography from '../../Typography'
import ShareCheckedItem from './ShareCheckedItem'
import { palette } from '../../Theme'

import styles from './styles'

function ShareButton({ advertiseJob }) {
  const chats = useChats()
  const [user] = useCurrentUser()

  const [open, setOpen] = useState(false)
  const [group, setGroup] = useState([])

  const { height: deviceHeight } = useWindowDimensions()

  const modalHeight = useMemo(() => deviceHeight - (64 + getStatusBarHeight()),
    [getStatusBarHeight, deviceHeight])
    
  const handleOnChecked = (item) => {
    if (item.checked) {
      const groups = [
        ...group,
        item
      ]

      setGroup(groups)
    } else {
      const groups = group.filter((i) => i.id !== item.id)
 
      setGroup(groups)
    }

    // console.log(item.checked)
  }

  const handleSharedItems = async () => {
    if (group.length > 0) {
      // eslint-disable-next-line no-loops/no-loops, no-plusplus
      for (let i = 0; i < group.length; i++) {
        MessageService
          .sendSharedJobAdvertise(advertiseJob, user, group[i].id)
      } 
      setOpen(false)
    }
  }

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <MaterialIcon name="share" size={26} color="#000" />
      </TouchableOpacity>
      <ScrollableModal
        open={open}
        onClose={() => setOpen(false)}
        height={modalHeight}
      >
        <View style={styles.modalRoot}>
          <View style={styles.selectHeader}>
            <IconButton
              onPress={() => setOpen(false)}
              style={styles.closeButton}
            >
              <MaterialIcon name="close" size={24} color="#000" />
            </IconButton>
            <Typography variant="inputLabel">
              Compartilhar
            </Typography> 
            <TextButton
              color={palette.primary.main}
              size="sm"
              title="Enviar"
              style={styles.clearButton}
              onPress={handleSharedItems}
            />
          </View>

          <ScrollView>
            <View style={{ marginBottom: 100 }}>
              {chats.map((item) => (
                <ShareCheckedItem 
                  key={item.id} 
                  item={item} 
                  changeCheckedChats={value => handleOnChecked(value)} 
                />
                // <TouchableOpacity 
                //   key={item.id} 
                //   style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }} 
                //   onPress={() => setValue(item.id)}
                // >
                //   <CheckBox 
                //     value={toggleCheckBox} 
                //     onValueChange={(newValue) => setToggleCheckBox(newValue)} 
                //   />
                //   <Text>{item.title}</Text>
                // </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

        </View>
      </ScrollableModal>
    </>
  )
}

ShareButton.propTypes = {
  advertiseJob: PropTypes.object.isRequired,
}

export default ShareButton