import React from 'react'
import PropTypes from 'prop-types'

import {
  Text,
  StyleSheet
} from 'react-native'

import { palette, fontFamily } from '../Theme'

const styles = StyleSheet.create({
  typography: {
    fontFamily: 'OverpassRegular'
  },
  variantPageTitle: {
    fontFamily: fontFamily.PromptBold,
    fontSize: 24
  },
  headerTitle: {
    fontFamily: 'LatoBold',
    fontSize: 19
  },
  listHeader: {
    fontFamily: 'OverpassBold',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  variantTitle: {
    fontSize: 17,
    color: palette.textPrimary,
    fontFamily: fontFamily.OverpassBold
  },
  subtitle: {
    fontSize: 14,
    color: palette.textPrimary,
    fontFamily: fontFamily.OverpassBold
  },
  variantMessage: {
    fontSize: 16,
    color: palette.textSecondary,
    fontFamily: fontFamily.PromptBold,
  },
  variantSubTitle: {
    fontSize: 15,
    color: palette.textSecondary,
    fontFamily: 'OverpassRegular'
  },
  variantCaption: {
    fontSize: 12,
    color: palette.textSecondary,
    fontFamily: 'OverpassRegular'
  },
  variantInputLabel: {
    fontSize: 15,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.textPrimary
  },
  dateLabel: {
    fontSize: 14,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.textPrimary
  },
  gutterBottom: {
    marginBottom: 8
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.secondary.main,
    marginBottom: 4
  },
  body: {
    fontSize: 16,
    fontFamily: fontFamily.OverpassRegular,
    color: palette.primary.main,
  }
})

function Typography({ children, style, color, variant, gutterBottom, ...others }) {
  const getVariantStyle = () => {
    switch (variant) {
    case 'pageTitle':
      return styles.variantPageTitle
    case 'title':
      return styles.variantTitle
    case 'subtitle':
      return styles.subtitle
    case 'headerTitle':
      return styles.headerTitle
    case 'listHeader':
      return styles.listHeader
    case 'subTitle':
      return styles.variantSubTitle
    case 'titleMessage':
      return styles.variantMessage
    case 'caption':
      return styles.variantCaption
    case 'inputLabel':
      return styles.variantInputLabel
    case 'dateLabel':
      return styles.dateLabel
    case 'label':
      return styles.label
    default:
      return styles.typography
    }
  }
  return (
    <Text
      {...others}
      style={[
        getVariantStyle(),
        gutterBottom && styles.gutterBottom,
        color && { color },
        style,
      ]}
    >
      {children}
    </Text>
  )
}

Typography.propTypes = {
  children: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  variant: PropTypes.string,
  gutterBottom: PropTypes.bool
}

Typography.defaultProps = {
  children: '',
  style: null,
  color: null,
  variant: 'pageTitle',
  gutterBottom: false
}

export default Typography