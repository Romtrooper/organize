import React from 'react';
import { Grid } from 'semantic-ui-react';
import SideMenu from '../SideMenu';
import Header from '../Header';

import FormArea from '../Form';
import List from '../List';

class App extends React.Component {
state = { load: false };

render() {
  return (
    <div>
      <Header />
      <main>
        <SideMenu />
        <div className="App-content">
          <Grid>
            <Grid.Row columns={2}>
              <FormArea />
              <List />
            </Grid.Row>
          </Grid>
        </div>
      </main>
    </div>
  );
}
}


/*
 * Export default
 */
export default App;
