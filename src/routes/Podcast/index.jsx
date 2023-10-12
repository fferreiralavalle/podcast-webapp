import usePodcast from '../../hooks/usePodcast';
import Section from '../../components/Section';
import { useParams } from 'react-router-dom';
import { Container, LeftContent, MainContent, PodcastImage } from './styles';

const filterByTitleAuthor = (entries, filter) => {
    if (filter === '') return entries
    return entries?.filter(e => 
        e.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        e.artist.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
}

const Podacast = () => {
    let { podcastId } = useParams();
    
    const { data, loading } = usePodcast(podcastId);

    return (
        <Section>
            {loading ? 'Loading' : (
                <Container>
                    <LeftContent>
                        <PodcastImage src={data?.image}/>
                    </LeftContent>
                    <MainContent>

                    </MainContent>
                </Container>
            )}
        </Section>
    )
}

export default Podacast;