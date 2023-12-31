import Section from '../../components/Section';
import { useLoaderData } from 'react-router-dom';
import { Container, Episodes, MainContent, TableContainer } from './styles';
import TableOfEpisodes from '../../components/TableOfEpisodes';
import PodacastInfo from '../../components/PodcastInfo';

const Podacast = () => {
    const data = useLoaderData()

    return (
        <Section>
            <Container>
                {data ? (
                    <><PodacastInfo podcast={data} /><MainContent>
                        <Episodes>{`Episodes: ${data?.episodes?.length}`}</Episodes>
                        <TableContainer>
                            <TableOfEpisodes episodes={data?.episodes} podcastId={data?.id} />
                        </TableContainer>
                    </MainContent></>
                ) : 'Data could not be loaded'}
            </Container>
        </Section>
    )
}

export default Podacast;