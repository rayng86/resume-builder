import React from 'react';
import { NavigationDrawer } from 'react-md';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <NavigationDrawer drawerTitle="Navigation" toolbarTitle="Resume Builder">
        <Main />
      </NavigationDrawer>
    </div>
  );
}

export default App;
