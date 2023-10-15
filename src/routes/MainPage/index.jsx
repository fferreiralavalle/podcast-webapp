
import PodcastMini from '../../components/PodcastMini';
import { Container, ElementAmount, Filter, FilterContainer } from './styles';
import { useMemo, useState } from 'react';
import Section from '../../components/Section';
import getRoute from '../../utils/getRoute';
import routes from '../../constants/routes';
import { useLoaderData } from 'react-router-dom';

const filterByTitleAuthor = (entries, filter) => {
    if (filter === '') return entries
    return entries?.filter(e => 
        e.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        e.artist.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
}

const MainPage = () => {
    const data = useLoaderData()
    const [filter, setFilter] = useState('')

    const filteredData = useMemo(()=> filterByTitleAuthor(data, filter), [data, filter])

    return (
        <Section>
            <FilterContainer>
                <ElementAmount>{filteredData?.length}</ElementAmount>
                <Filter value={filter} onChange={({ target }) => setFilter(target.value)} />
            </FilterContainer>
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
        </Section>
    )
}

export default MainPage;