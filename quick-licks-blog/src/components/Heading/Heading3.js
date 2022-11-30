import React from 'react'
import { BaseHeading } from './BaseHeading'

const Heading1 = props => 
    <BaseHeading as='h3' fontSize={[1,2,3]} {...props} />

export { Heading1 as H3 }