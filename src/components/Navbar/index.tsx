import React from 'react'
import { Link } from 'react-router-dom'

import LoadingGif from '../../assets/images/Loading.gif';

import { Container, Loading, PageTitle } from './styles'
import { useNavigation } from 'react-router-dom';
import getRoute from '../../utils/getRoute';
import routes from '../../constants/routes';

const Navbar = (props: React.PropsWithChildren) => {
    const navigation = useNavigation();
    const { children, ...rest } = props
    return (
    <Container {...rest}>
        <Link to={getRoute(routes.home)}>
            <PageTitle>Podcaster</PageTitle>
        </Link>
        {navigation.state === 'loading' ? <Loading src={LoadingGif} /> : ""}
        {children}
    </Container>)
}

export default Navbar