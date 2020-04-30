import React from 'react'
import {
    HashRouter,Route,Switch,Redirect,
    // BrowserRouter as Router,
//   Switch,
//   Route,
//   Link

} from 'react-router-dom'
import App from '../App'
// import Home from '../components/pages/home'
import Login from '../components/login/login'
import PageOne from '../components/pages/pageOne'
import PageTwo from '../components/pages/pageTwo'
import PageThree from '../components/pages/pageThree'

// 
// import NoteList from '../components/pages/pageList'


class RouterConfig extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/' component={Login}/>
                        <Route path='/home' exact render={()=>(
                            <Switch> 
                                {/* <Home> */}
                                    <Route path='/pageOne' component={PageOne}/>
                                    <Route path='/pageTwo' component={pageTwo}/>
                                    {/* <Route path='/pageTwo' exact render={()=>(
                                        <Route path='/noteList' component={NoteList}/>
                                        <Route path='/note' component={note}/>
                                    )}/> */}
                                    <Route path='/PageThree' component={PageThree}/>
                                {/* </Home> */}
                            </Switch>
                        )}/>
                        {/* <Redirect to='/' component={Login}/> */}
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
export default RouterConfig;

// const routes = [
//   {
//     path: "/",
//     // component: Sandwiches
//     component:resolve => require([ '@/components/login/login' ], resolve),
//   },
//   {
//     path: "/home",
//     component:resolve => require([ '@/components/pages/home' ], resolve),
//     routes: [
//       {
//         path: "/home/pageOne",
//         component:resolve => require([ '@/components/pages/pageOne' ], resolve),
//       },
//       {
//         path: "/home/pageTwo",
//         component:resolve => require([ '@/components/pages/pageTwo' ], resolve),
//       }
//     ]
//   }
// ];
// export default routes
