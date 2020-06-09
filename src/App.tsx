import React from 'react';
import { NavigationDrawer } from 'react-md';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <NavigationDrawer drawerTitle="Navigation">
        <Main />
      </NavigationDrawer>
    </div>
  );
}

export default App;
