import { Provider } from 'react-redux';
import './App.css';
import { Body } from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter}/>
      {/*
        Head
        Body
          - Sidebar
            - Menu Item
          - MainContainer
            - Buttons List
            - Video Container
              - Video card
      */}
    </Provider>
  );
}

export default App;
