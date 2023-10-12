import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from './routes/MainPage'
import Podacast from './routes/Podast';

export const routes = {
  home: '/',
  podcast: '/podcast/:podcastId'
}

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <MainPage />,
  },
  {
    path: routes.podcast,
    element: <Podacast />,
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
