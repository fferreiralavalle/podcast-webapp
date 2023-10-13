import usePodcast from '../../hooks/usePodcast';
import Section from '../../components/Section';
import { useParams } from 'react-router-dom';
import { Container, Description, DescriptionTitle, Episodes, LeftContent, MainContent, PodcastImage, TableContainer, Title } from './styles';
import TableOfEpisodes from '../../components/TableOfEpisodes';
import usePodcastEpisodes from '../../hooks/usePodcastEpisode';

const Podacast = () => {
    let { podcastId } = useParams();
    
    const { data, loading } = usePodcast(podcastId);
    const { data: dataEpisodes, loading: loadingEpisodes } = usePodcastEpisodes(podcastId)

    return (
        <Section>
            {loading ? 'Loading' : (
                <Container>
                    <LeftContent>
                        <PodcastImage src={data?.image}/>
                        <Title>{data.title}</Title>
                        <Description>By {data.artist}</Description>
                        <DescriptionTitle>Description</DescriptionTitle>
                        <Description>{data.summary}</Description>
                    </LeftContent>
                    <MainContent>
                        {loadingEpisodes ? 'Loading...' : (
                            <>
                                <Episodes>{`Episodes: ${dataEpisodes?.length}`}</Episodes>
                                <TableContainer>
                                    <TableOfEpisodes episodes={dataEpisodes} />
                                </TableContainer>
                            </>
                        )}
                    </MainContent>
                </Container>
            )}
        </Section>
    )
}

export default Podacast;