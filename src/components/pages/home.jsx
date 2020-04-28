import React from 'react'

import {HashRouter,Route} from 'react-router-dom'
import PageOne from './pageOne'
import PageTwo from './pageTwo'
function Home() {
  return (
        <HashRouter>
            <Route path='/PageOne' component={PageOne}/>                    
            <Route path='/PageTwo' component={PageTwo}/>
        </HashRouter>
  );
}

export default Home;



