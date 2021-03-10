import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import ShowCards from '../src/components/ShowCards';
import CaptureForm from '../src/containers/CaptureForm';

const App = props => {
  return (
    <HashRouter>
    <Switch>
      <Route exact path="/" component={CaptureForm} />
      <Route exact path="/show-cards" component={ShowCards} />
    </Switch>
    </HashRouter>
)
};

export default App;
