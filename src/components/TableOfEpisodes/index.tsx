import React, { PropsWithChildren } from 'react'

import { Table } from './styles'
import { PodcastEpisodeItem } from '../../services/itunes';
import truncateString from '../../utils/truncateString';

interface PropTypes extends PropsWithChildren {
    episodes: Array<PodcastEpisodeItem>
}

const TableOfEpisodes = (props: PropTypes) => {
    const { episodes, ...rest } = props;
    return (
        <Table {...rest}>
        <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
        </tr>
        {episodes?.map(episode => (
            <tr>
                <td>{truncateString(episode.title, 60)}</td>
                <td>{episode?.date.toLocaleDateString()}</td>
                <td>{episode.duration}</td>
            </tr>
        ))}
        </Table>
    )
}

export default TableOfEpisodes