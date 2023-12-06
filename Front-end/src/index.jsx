import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/index.css';
import Root from './root/root';
import Home from './page/home/home.jsx';
import Build from './page/build/build.jsx';
import Main from './page/main/main.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/build',
        element: <Build />,
      },
      {
        path: '/user/:id',
        element: <Main />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);