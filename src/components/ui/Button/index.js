import React from 'react'
import * as SC from './styles'

export const Button = ({ children, onClick }) => <SC.Button onClick={onClick}>{children}</SC.Button>
