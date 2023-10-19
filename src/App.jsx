import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import routes from './constants/routes';
import MainPage from './routes/MainPage'
import Podacast from './routes/Podcast';
import PodacastEpisode from './routes/PodcastEpisode';
import { fetchPodcastData, fetchPodcastEpisodeData, fetchTopPodcastsData } from './services/itunes';

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <MainPage />,
    loader: async () => fetchTopPodcastsData(100)
  },
  {
    path: routes.PODCAST,
    element: <Podacast />,
    loader: async ({ params }) => fetchPodcastData(params.podcastId)
  },
  {
    path: routes.PODCAST_EPISODE,
    element: <PodacastEpisode />,
    loader: async ({ params }) => fetchPodcastEpisodeData(params.podcastId, params.episodeId)
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
