import { Platform } from 'react-native'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions'

const PLATFORM_MICROPHONE_PERMISSIONS = {
  ios: PERMISSIONS.IOS.MICROPHONE,
  android: PERMISSIONS.ANDROID.RECORD_AUDIO,
}

const PLATFORM_PHOTO_PERMISSIONS = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
}

const REQUEST_PERMISSION_TYPE = {
  microphone: PLATFORM_MICROPHONE_PERMISSIONS,
  photo: PLATFORM_PHOTO_PERMISSIONS,
}

const PERMISSION_TYPE = {
  microphone: 'microphone',
  photo: 'photo',
}

const checkPermission = async (type) => {
  const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]

  if (!permissions) {
    return true
  }

  try {
    const result = await check(permissions)

    if (result === RESULTS.GRANTED) return true

    return requestPermission(permissions)
  } catch (err) {
    return false
  }
}

const requestPermission = async (permissions) => {
  try {
    const result = await request(permissions)
    return result === RESULTS.GRANTED
  } catch (err) {
    return false
  }
}

const requestMultiple = async (types) => {
  const results = []

  // eslint-disable-next-line no-restricted-syntax, no-loops/no-loops
  for (const type of types) {
    const permission = REQUEST_PERMISSION_TYPE[type][Platform.OS]
    if (permission) {
      const result = requestPermission(permission)
      results.push(result)
    }
  } 

  // eslint-disable-next-line no-restricted-syntax, no-loops/no-loops
  for (const result of results) {
    if (!result) {
      return false
    }
  }
  return true
}

export { checkPermission, requestMultiple, PERMISSION_TYPE }