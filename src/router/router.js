// import header from '../components/header/header'
import React from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from '../App'
// import Admin from '../Admin'
import Welcome from './components/Module/welcome'
import Welcome2 from './components/Module/welcome2'
import Login from './../components/login'

class RouterConfig extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/' component={Login}/>
                        <Route path='/index' exact render={()=>(
                            <Switch>
                                <Route path='../components/Module/welcome' component={Welcome}/>
                                <Route path='../components/Module/welcome2' component={Welcome2}/>
                                <Redirect to='/' component={Login}/>
                            </Switch>
                        )}/>
                       
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
export default RouterConfig;
