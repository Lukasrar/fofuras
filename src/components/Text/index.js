import './style.js';
import React from 'react'
import Styled from './style'
import PropTypes from 'prop-types'
import theme from '@theme'

function Text({children, color, title, bold, fontSize, textAlign, verticalLine, textStyle}) {
  return title ? <Styled.Title style={{ color: theme.on[color], fontWeight: bold ? 'bold' : 'normal', fontSize: fontSize, textAlign: textAlign, borderLeft: verticalLine ? `2px solid ${theme.primaryLight}` : 'none', ...textStyle }}>{children}</Styled.Title> : <Styled.Text style={{ color: theme.on[color], fontWeight: bold ? 'bold' : 'normal', fontSize: fontSize, textAlign: textAlign, borderLeft: verticalLine ? `2px solid ${theme.primaryLight}` : 'none', ...textStyle }}>{children}</Styled.Text>
}

Text.propTypes = {
  color: PropTypes.string,
  title: PropTypes.bool,
  bold: PropTypes.bool,
  textAlign: PropTypes.string,
  verticalLine: PropTypes.bool,
}

Text.defaultProps = {
  color: 'background',
  title: false,
  bold: false,
  textAlign: 'left',
  verticalLine: false
}

export default Text
