import React from 'react'

import { Section as SectionStyled } from './styles'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollTopRouter'

const Section = (props: React.PropsWithChildren) => {
    const { children, ...rest } = props
    return (
        <SectionStyled {...rest}>
            {/* We want all section to start at top */}
            <ScrollToTop />
            <Navbar />
            {children}
        </SectionStyled>
    )
}

export default Section