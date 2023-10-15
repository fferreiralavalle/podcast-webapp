import React from 'react'

import { Section as SectionStyled } from './styles'
import Navbar from '../Navbar'

const Section = (props: React.PropsWithChildren) => {
    const { children, ...rest } = props
    return (
        <SectionStyled {...rest}>
            <Navbar />
            {children}
        </SectionStyled>
    )
}

export default Section