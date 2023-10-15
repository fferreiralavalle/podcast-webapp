import React from 'react'
import { LinkProps } from 'react-router-dom'

import { Container, Description, PodcastImage, Title } from './styles'
import truncateString from '../../utils/truncateString'

interface PropTypes extends LinkProps {
    title: string
    author: string
    image: string
}

const PodcastMini = (props: PropTypes) => {
    const { title, author, image, ...rest } = props;
    return (
    <Container {...rest}>
        <PodcastImage src={image} alt={title} />
        <Title>{truncateString(title, 25)}</Title>
        <Description>Author: {author}</Description>
    </Container>)
}

export default PodcastMini