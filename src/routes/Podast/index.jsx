import { useMemo, useState } from 'react';
import usePodcast from '../../hooks/usePodcast';
import Section from '../../components/Section';
import { useParams } from 'react-router-dom';

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

    console.log({ data })
    return (
        <Section>
            {loading ? 'Loading' : 'Hello!'}
        </Section>
    )
}

export default Podacast;