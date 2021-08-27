import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import SelectContainer from '../../../components/TextInput/SelectContainer'
import LocationModal from './LocationModal'

function SelectLocation({ onChange, value, ...others }) {
  const [open, setOpen] = useState(false) 
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (value) {
      const { description } = value
      setInputValue(description)
    } else {
      setInputValue('')
    }
  }, [value])

  const handleChange = (v) => {
    onChange(v)
    setOpen(false)
  }

  return (
    <>
      <SelectContainer 
        {...others}
        label="Localização"
        value={inputValue}
        onPress={() => setOpen(true)}
      />
      <LocationModal 
        open={open}
        onClose={() => setOpen(false)}
        onChange={handleChange}
      />
    </>
  )
}

SelectLocation.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default SelectLocation