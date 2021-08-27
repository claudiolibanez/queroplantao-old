import React, { useEffect, useCallback, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import storage from '@react-native-firebase/storage'
import RNFetchBlob from 'rn-fetch-blob'
import RNFS from 'react-native-fs'
 
import AudioRecorderPlayer from 'react-native-audio-recorder-player'

import {
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native'

import MessageBase from '../MessageBase'

import styles from './styles'

const { width } = Dimensions.get('window')

function AudioMessage({ message }) {
  const { url: storagePath } = message
  const [url, setUrl] = useState('')
  const [path, setPath] = useState('')
  const [isExists, setIsExists] = useState(false)
  const [currentPositionSec, setCurrentPositionSec] = useState(0)
  const [currentDurationSec, setCurrentDurationSec] = useState(0)
  const [playTime, setPlayTime] = useState('00:00:00')
  const [duration, setDuration] = useState('00:00:00')

  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current
  const pathToAudioFile = `${RNFS.ExternalDirectoryPath}/audios/${storagePath}`

  let playWidth = (currentPositionSec / currentDurationSec) * (width - 56)

  if (!playWidth) playWidth = 0

  const handleUserPress = () => { }

  const handleFileDownload = useCallback(() => {
    if (url !== '') { 
      RNFetchBlob 
        .config({
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: false,
            mime: 'video/mp4',
            description: 'Downloading Video',
            path: `${RNFS.ExternalDirectoryPath}/audios/${storagePath}`
          }
        })
        .fetch('GET', url)
        .then((res) => {
        // the temp file path
          // console.log('The file saved to ', res.path())
          setPath(res.path())
        })

      setIsExists(true)
    } else {
      console.log('vazio')
    }
  }, [isExists])

  const onStatusPress = async (e) => {
    const touchX = e.nativeEvent.locationX
    console.log(`touchX: ${touchX}`)

    const playWidthA = (currentPositionSec / currentDurationSec) * (width - 56)
    console.log(`currentPlayWidth: ${playWidthA}`)

    const currentPosition = Math.round(currentPositionSec)
    console.log(`currentPosition: ${currentPosition}`)

    if (playWidthA && playWidthA < touchX) {
      const addSecs = Math.round(currentPosition + 1000)
      audioRecorderPlayer.seekToPlayer(addSecs)
      console.log(`addSecs: ${addSecs}`)
    } else {
      const subSecs = Math.round(currentPosition - 1000)
      audioRecorderPlayer.seekToPlayer(subSecs)
      console.log(`subSecs: ${subSecs}`)
    }
  }

  const onStartPlay = async () => {
    console.log('onStartPlay')
    // console.log(path.replace('/storage/emulated/0', 'sdcard'))

    RNFS.exists(pathToAudioFile)
      .then((exists) => console.log(exists))

    // const msg = await audioRecorderPlayer
    // .startPlayer(`sdcard/Android/data/com.procoders.queroplantao/files/audios/${storagePath}`)

    // console.log(RNFetchBlob.fs.dirs)
    // console.log(`file:///${pathToAudioFile}`)

    // const msg = await audioRecorderPlayer
    // .startPlayer(pathToAudioFile.replace('/storage/emulated/0/', 'sdcard'))

    // const aaa = `sdcard/audios/${storagePath}`

    const msg = await audioRecorderPlayer.startPlayer(pathToAudioFile)
    
    audioRecorderPlayer.setVolume(1.0)
    // console.log(msg)

    audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.current_position === e.duration) {
        console.log('finished')
        audioRecorderPlayer.stopPlayer().catch(() => {})
        // setCanPlay(true)
      }
      // this.setState({
      setCurrentPositionSec(e.current_position)
      setCurrentDurationSec(e.duration)

      setPlayTime(audioRecorderPlayer.mmssss(
        Math.floor(e.current_position)
      ))

      setDuration(audioRecorderPlayer.mmssss(
        Math.floor(e.duration)
      ))
    })
  }

  useEffect(() => {
    (async function a() {
      await storage()
        .ref(`audios/${storagePath}`)
        .getDownloadURL()
        .then(resultUrl => setUrl(resultUrl))

      await RNFS.exists(pathToAudioFile)
        .then((exists) => setIsExists(exists))
    }())
  }, [isExists, storagePath])

  return (
    <MessageBase 
      message={message}
      onUserPress={handleUserPress}
    >
      <View style={styles.body}>
        <View style={styles.viewPlayer}>
          <TouchableOpacity 
            style={styles.viewBarWrapper} 
            onPress={onStatusPress}
          >
            <View style={{ margin: 4 }}>
              <TouchableOpacity
                onPress={isExists ? onStartPlay : handleFileDownload}
              >
                {url !== '' ? (
                  <MaterialCommunityIcons 
                    name={isExists ? 'play' : 'download'}
                    size={28}
                    color="#ccc"
                  />
                ) : (
                  <View style={styles.viewLoadingUrl}>
                    <ActivityIndicator size="small" color="#ccc" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
              
            <TouchableOpacity style={styles.viewBar}>
              <View style={[styles.viewBarPlay, { width: playWidth }]} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </MessageBase>
  )
}

AudioMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

export default AudioMessage 