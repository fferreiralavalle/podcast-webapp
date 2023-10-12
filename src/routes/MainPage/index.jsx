
import useFetch from '../../hooks/useFetch';
import { getTopPodcastUrl, parseEntries } from '../../services/itunes';
import PodcastMini from '../../components/PodcastMini';
import { Container, ElementAmount, Filter, FilterContainer } from './styles';
import { useMemo, useState } from 'react';
import Section from '../../components/Section';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../App';
import getRoute from '../../utils/getRoute';

const filterByTitleAuthor = (entries, filter) => {
    if (filter === '') return entries
    return entries?.filter(e => 
        e.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        e.artist.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
}

const MainPage = () => {
    const navigation = useNavigate();
    const { data, error, loading } = useFetch(getTopPodcastUrl(100));
    const [filter, setFilter] = useState('')

    const parsedData = useMemo(()=> parseEntries(data?.feed?.entry), [data])
    const filteredData = useMemo(()=> filterByTitleAuthor(parsedData, filter), [parsedData, filter])

    return (
        <Section>
            <FilterContainer>
                <Filter value={filter} onChange={({ target }) => setFilter(target.value)} />
                <ElementAmount>{filteredData.length}</ElementAmount>
            </FilterContainer>
            {loading ? 'Loading...' : (
                <Container>
                    {filteredData && filteredData?.map((entry => (
                        <PodcastMini
                            title={entry.title} 
                            author={entry.artist}
                            image={entry.image}
                            key={entry.id}
                            onClick={()=> navigation(
                                getRoute(routes.podcast, { podcastId: entry.id })
                            )}
                        />
                    )))}
                </Container>
            )}
        </Section>
    )
}

export default MainPage;