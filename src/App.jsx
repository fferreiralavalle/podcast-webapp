import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from './routes/MainPage'
import Podacast from './routes/Podcast';
import routes from './constants/routes';
import { fetchPodcastData, fetchTopPodcastsData } from './services/itunes';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <MainPage />,
    loader: async () => fetchTopPodcastsData(100)
  },
  {
    path: routes.podcast,
    element: <Podacast />,
    loader: async ({ params }) => fetchPodcastData(params.podcastId)
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
