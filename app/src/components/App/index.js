import React, { Component, Fragment } from 'react';
import Routes from 'src/routes';
import SideMenu from '../SideMenu';
import Header from '../Header';

class App extends Component {
state = { load: false };

render() {
  return (
    <Fragment>
      <Header />
      <main>
        <SideMenu />
        <div className="App-content">
          <Routes />
        </div>
      </main>
    </Fragment>
  );
}
}

export default App;
