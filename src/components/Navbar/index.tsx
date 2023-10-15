import React from 'react'

import LoadingGif from '../../assets/images/Loading.gif';

import { Container, Loading, PageTitle } from './styles'
import { useNavigation } from 'react-router-dom';

const Navbar = (props: React.PropsWithChildren) => {
    const navigation = useNavigation();
    const { children, ...rest } = props
    return (
    <Container {...rest}>
        <PageTitle>Podcaster</PageTitle>
        {navigation.state === 'loading' ? <Loading src={LoadingGif} /> : ""}
        {children}
    </Container>)
}

export default Navbar