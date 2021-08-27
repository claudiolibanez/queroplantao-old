import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import {
  View,
} from 'react-native'

import FullScreenModal from '../../../../components/Modal/FullScreenModal'
import { IconButton } from '../../../../components/Button'
import Typography from '../../../../components/Typography'

import styles from './styles'

function LocationModal({ open, onClose, onChange }) {
  const getAddress = (addressComponents) => {
    const address = {}
    addressComponents.forEach(value => {
      if (value.types.find(v => v === 'street_number')) {
        address.streetNumber = value.long_name
      }
      if (value.types.find(v => v === 'route')) {
        address.street = value.long_name
        address.streetShort = value.short_name
      }
      if (value.types.find(v => v === 'sublocality_level_1')) {
        address.district = value.long_name
      }
      if (value.types.find(v => v === 'administrative_area_level_2')) {
        address.city = value.long_name
      }
      if (value.types.find(v => v === 'administrative_area_level_1')) {
        address.state = value.long_name
        address.stateShort = value.short_name
      }
      if (value.types.find(v => v === 'postal_code')) {
        address.postalCode = value.long_name
      }
    })

    return address
  }

  const handleSearch = (data, details) => {
    onChange({
      ...getAddress(details.address_components),
      placeId: data.place_id,
      name: details.name,
      description: data.description,
      lat: details.geometry.location.lat,
      lng: details.geometry.location.lng
    })
  }

  return (
    <FullScreenModal
      open={open}
      onClose={onClose}
    >
      <View style={styles.root}>
        <View style={styles.header}>
          <IconButton onPress={onClose} style={styles.iconButton}>
            <Icon name="arrow-back" size={24} />
          </IconButton>
          <View style={styles.titleContainer}>
            <Typography variant="headerTitle" style={styles.title}>
              Localização
            </Typography>
          </View>
        </View>
        <View style={[styles.searchContainer]}>
          <GooglePlacesAutocomplete
            autoFocus
            placeholder="Clínica, hospital, local, cidade, etc..."
            onPress={(data, details = null) => handleSearch(data, details)}
            query={{
              key: 'AIzaSyBrsFIY-Kan52NUZA-JCPgrTGqjA3nUxQM',
              language: 'pt',
              components: 'country:br'
            }}
            styles={{
              textInputContainer: styles.textInputContainer,
              textInput: styles.textInput,
              description: styles.listItemDescription
            }}
            debounce={300}
            fetchDetails
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
            // enablePoweredByContainer={false}
          />
        </View>
      </View>
    </FullScreenModal>
  )
}

LocationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default LocationModal