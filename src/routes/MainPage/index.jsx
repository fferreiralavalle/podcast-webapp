
import PodcastMini from '../../components/PodcastMini';
import { Container, ElementAmount, Filter, FilterContainer } from './styles';
import { useMemo, useState } from 'react';
import Section from '../../components/Section';
import getRoute from '../../utils/getRoute';
import useTopPodcasts from '../../hooks/useTopPodcasts';
import routes from '../../constants/routes';

const filterByTitleAuthor = (entries, filter) => {
    if (filter === '') return entries
    return entries?.filter(e => 
        e.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        e.artist.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
}

const MainPage = () => {
    const { data, loading } = useTopPodcasts()
    const [filter, setFilter] = useState('')

    const filteredData = useMemo(()=> filterByTitleAuthor(data, filter), [data, filter])

    return (
        <Section>
            <FilterContainer>
                <Filter value={filter} onChange={({ target }) => setFilter(target.value)} />
                <ElementAmount>{filteredData?.length}</ElementAmount>
            </FilterContainer>
            {loading ? 'Loading...' : (
                <Container>
                    {filteredData && filteredData?.map((entry => (
                        <PodcastMini
                            title={entry.title} 
                            author={entry.artist}
                            image={entry.image}
                            key={entry.id}
                            to={getRoute(routes.podcast, { podcastId: entry.id })}
                        />
                    )))}
                </Container>
            )}
        </Section>
    )
}

export default MainPage;