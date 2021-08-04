import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import AllUsers from './components/AllUsers';

import Home from './pages/Home';

function App() {
 
  return (
    <div className='h-screen w-screen'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={AllUsers} />
      </Switch>
    </div>
  );
}

export default App;
