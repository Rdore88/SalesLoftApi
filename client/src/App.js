import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import ConnectedAllPersonList from './containers/allPeopleList/ConnectedAllPersonList'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
        <Route exact path="/" component={ConnectedAllPersonList}/>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App
