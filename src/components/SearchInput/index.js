import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RNCSearchInput from 'react-native-search-filter'

import {
  View,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    marginRight: 8
  }
})

function SearchInput({ placeholder, onSearch, autoFocus }) {
  return (
    <View style={styles.root}>
      <Icon name="search" size={24} style={styles.icon} />
      <RNCSearchInput
        autoFocus={autoFocus}
        onChangeText={(term) => onSearch(term)} 
        style={styles.searchInput}
        placeholder={placeholder}
      />
    </View>
  )
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool
}

SearchInput.defaultProps = {
  autoFocus: false
}

export default SearchInput