import React from 'react'
import Section from '../../components/Section';
import { useLoaderData } from 'react-router-dom';
import { Container, EpisodePreview, MainContent, MainEpisodeSummary, MainTitle } from './styles';
import PodacastInfo from '../../components/PodcastInfo';
import { PodcastEpisodeView } from '../../services/itunes';

const PodacastEpisode = () => {
    
    const data = useLoaderData() as PodcastEpisodeView
    const { podcast, episode } = data || {}

    return (
        <Section>
            <Container>
                <PodacastInfo podcast={podcast}/>
                <MainContent>
                    <MainTitle>{episode?.title}</MainTitle>
                    <MainEpisodeSummary>{episode?.summary}</MainEpisodeSummary>
                    <EpisodePreview controls>
                        <source src={episode?.preview} type="audio/ogg" />
                        Your browser does not support the audio element.
                    </EpisodePreview>
                </MainContent>
            </Container>
        </Section>
    )
}

export default PodacastEpisode;