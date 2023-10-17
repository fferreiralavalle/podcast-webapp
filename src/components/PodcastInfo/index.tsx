import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Link } from 'react-router-dom'
import { Description, DescriptionTitle, LeftContent, PodcastImage, Title, TitleDescription } from './styles';
import getRoute from '../../utils/getRoute';
import routes from '../../constants/routes';

const PodacastInfo = ({ podcast, ...props}) => {

    return (
        <LeftContent {...props}>
            <Link to={getRoute(routes.podcast, { podcastId: podcast?.id})}>
                <PodcastImage src={podcast?.image}/>
                <TitleDescription>
                    <Title>{podcast?.title}</Title>
                    <Description>By {podcast?.artist}</Description>
                </TitleDescription>
            </Link>
            <DescriptionTitle>Description</DescriptionTitle>
            <Description>{podcast?.summary ? HTMLReactParser(podcast?.summary) : ''}</Description>
        </LeftContent>
    )
}

export default PodacastInfo;