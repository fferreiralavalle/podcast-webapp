import React from 'react'

import { Section as SectionStyled } from './styles'

const Section = (props: React.PropsWithChildren) => {
    const { children, ...rest } = props
    return (
    <SectionStyled {...rest}>
        {children}
    </SectionStyled>)
}

export default Section