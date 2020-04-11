import React from 'react'
import './index.css'
import {HashRouter,Route} from 'react-router-dom'
import MenuList from '../menu/menu'
import Welcome from '../Module/welcome'
import Welcome2 from '../Module/welcome2'
function Index() {
  return (
    <div className="index">
       <div className="menuBox">
          <MenuList />
        </div>
        <div className="menuCont">
          {/* <Welcome /> */}
          <HashRouter>
            <Route path='/welcome' component={Welcome}/>                    
            <Route path='/welcome2' component={Welcome2}/>
          </HashRouter>
        </div>
    </div>
  );
}

export default Index;
