import { Provider } from 'react-redux';
import './App.css';
import { Body } from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
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
