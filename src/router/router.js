import React from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from '../App'
import Login from '../components/login/login'
import PageOne from '../components/pages/pageOne'
import PageTwo from '../components/pages/pageTwo'

class RouterConfig extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/' component={Login}/>
                        <Route path='/home' exact render={()=>(
                            <Switch> 
                                <Route pth='/pageOne' component={PageOne}/>
                                <Route path='/pageTwo' component={PageTwo}/>
                                {/* <Redirect to='/' component={pageOne}/> */}
                            </Switch>
                        )}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
export default RouterConfig;
