import React from 'react';

import {
  Navigator
} from 'react-onsenui';

import MainPage from './MainPage';
import ContentPage from './ContentPage';

const mainRoute = {
  component: MainPage,
  key: 'MAIN_PAGE'
};
const contentRoute = {
  component: ContentPage,
  key: 'CONTENT_PAGE'
};
const subjId = localStorage.getItem('currentSubjectId');
const initRoute = (subjId === undefined || subjId === null) ? mainRoute : contentRoute;

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const App = () => (
  <Navigator
    renderPage={renderPage}
    initialRoute={initRoute}
  />
);

export default App;
