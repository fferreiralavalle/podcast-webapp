import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { Table } from './styles'
import { PodcastEpisodeItem } from '../../services/itunes';
import truncateString from '../../utils/truncateString';
import getRoute from '../../utils/getRoute';
import routes from '../../constants/routes';

interface PropTypes extends PropsWithChildren {
    episodes: Array<PodcastEpisodeItem>
    podcastId: string
}

const TableOfEpisodes = (props: PropTypes) => {
    const { episodes, podcastId, ...rest } = props;
    return (
        <Table {...rest}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {episodes?.map(episode => (
                    <tr>
                        <td><Link to={
                            getRoute(routes.PODCAST_EPISODE,
                            { episodeId: episode.id, podcastId })}
                        >
                            {truncateString(episode.title, 60)}
                        </Link></td>
                        <td>{episode?.date.toLocaleDateString()}</td>
                        <td>{episode.duration}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TableOfEpisodes