import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import {
  StyleSheet,
  View,
  ScrollView,
  // FlatList,
  useWindowDimensions
} from 'react-native'

import SelectListItem from './SelectListItem'
import SelectContainer from '../SelectContainer'
import ScrollableModal from '../../Modal/ScrollableModal'
import IconButton from '../../Button/IconButton'
import TextButton from '../../Button/TextButton'
import Typography from '../../Typography'
import { palette } from '../../Theme'

const styles = StyleSheet.create({
  selectHeader: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.hoverOpacity
  },
  closeButton: {
    position: 'absolute',
    left: 2
  },
  clearButton: {
    position: 'absolute',
    right: 2
  }
})

function Select({ 
  label,
  selectLabel,
  value,
  onChange,
  options,
  ...others
}) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { height: deviceHeight } = useWindowDimensions()

  const modalHeight = useMemo(() => deviceHeight - (64 + getStatusBarHeight()),
    [getStatusBarHeight, deviceHeight])

  const internalOptions = useMemo(() => (
    options.map(item => ({ ...item, checked: Boolean(value && item.id === value.id) }))
  ), [value, options])

  const handlePressItem = (item) => {
    setInputValue(item.title)
    onChange(item)
    setOpen(false)
  }

  const handleClear = () => {
    onChange('')
    setInputValue('')
    setTimeout(() => {
      setOpen(false)
    }, 50)
  }

  return (
    <>
      <SelectContainer
        label={label}
        value={inputValue}
        onPress={() => setOpen(true)}
        {...others}
      />
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
              {selectLabel}
            </Typography>
            <TextButton
              color={palette.primary.main}
              size="sm"
              title="Limpar"
              style={styles.clearButton}
              onPress={handleClear}
              disabled={!value}
            />
          </View>
          {/* <FlatList
            nestedScrollEnabled
            data={internalOptions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <SelectListItem
                checked={item.checked}
                title={item.title}
                onPress={() => handlePressItem(item)}
              />
            )}
          /> */}

          <ScrollView>
            {internalOptions.map((item) => (
              <SelectListItem
                key={item.id}
                checked={item.checked}
                title={item.title}
                onPress={() => handlePressItem(item)}
              />
            ))}
          </ScrollView>

        </View>
      </ScrollableModal>
    </>
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLabel: PropTypes.string,
}

Select.defaultProps = {
  selectLabel: 'Selecione'
}

export default Select