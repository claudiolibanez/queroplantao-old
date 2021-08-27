import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import IconFeather from 'react-native-vector-icons/Feather'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { fontFamily } from '../Theme'
import { IconButton } from '../Button'

const styles = StyleSheet.create({
  root: {
    height: 56,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16
  },
  left: {
    flexWrap: 'nowrap',
    width: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  middle: {
    flexWrap: 'nowrap',
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 12
  },
  right: {
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontFamily: fontFamily.PromptBold,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 4
  },
  backButton: {
    minWidth: 28,
    minHeight: 28,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

function Header({ title, left, right, backButton, barStyle }) {
  const { goBack } = useNavigation()
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        {backButton ? (
          <IconButton onPress={goBack}>
            <IconFeather name="arrow-left" size={26} color={barStyle} />
          </IconButton>
        ) : left}
      </View>
      <View style={styles.middle}>
        {title && (
          <Text style={styles.title}>
            {title}
          </Text>
        )}
      </View>
      <View style={styles.right}>
        {right}
      </View>
    </View>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
  backButton: PropTypes.bool,
  barStyle: PropTypes.string,
}

Header.defaultProps = {
  title: null,
  left: null,
  right: null,
  backButton: false,
  barStyle: '#000'
}

export default Header