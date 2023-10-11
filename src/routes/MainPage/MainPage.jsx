
import useFetch from '../../hooks/useFetch';
import { getTopPodcastUrl } from '../../services/itunes';
import PodcastMini from '../../components/PodcastMini';
import { Container, Section } from './styles';

const MainPage = () => {
    const { data, error, loading } = useFetch(getTopPodcastUrl(100));

    return (
        <Section>
            {loading ? 'Loading...' : (
                <Container>
                    {data && data.feed?.entry?.map((entry => (
                        <PodcastMini
                            title={entry.title.label} 
                            author={entry['im:artist'].label}
                            image={entry['im:image'][0].label}
                        />
                    )))}
                </Container>
            )}
        </Section>
    )
}

export default MainPage;