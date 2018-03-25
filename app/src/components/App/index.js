import React, { Component, Fragment } from 'react';
import Routes from 'src/routes';
import SideMenu from '../SideMenu';
import Header from '../Header';

class App extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <Header
          toggleVisibility={this.toggleVisibility}
        />
        <main>
          <SideMenu
            visible={visible}
          />
          <div className="App-content">
            <Routes />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
