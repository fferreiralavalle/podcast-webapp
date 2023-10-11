import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainPage from './routes/MainPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
