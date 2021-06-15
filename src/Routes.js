import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

    // Browser Router -- rename as --> Router (since its too long) 
        // Browser Router , switch, route is imported from react-route-dom


import Test from './Test'

import Home from './pages/Home'

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/> 
                    <Route exact path="/gallery" component={Test}/> 
                
                </Switch>
            </Router>
        </>
    )
}

export default Routes
