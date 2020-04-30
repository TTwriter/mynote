import React from 'react'
import './scss/page.css'
import {HashRouter,Route} from 'react-router-dom'
import PageOne from './pageOne'
import PageTwo from './pageTwo'
import PageThree from './pageThree'

function Home() {
  return (
    <div className='pageBox'>
      <HashRouter>
          <Route path='/PageOne' component={PageOne}/>                    
          <Route path='/PageTwo' component={PageTwo}/>
          <Route path='/PageThree' component={PageThree}/>
      </HashRouter>
    </div>
       
  );
}

export default Home;