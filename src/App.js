import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Nav from './Component/Nav'
import Home from './Component/Home'
import About from './Component/About'


import Services from './Component/Services';
import Footer from './Component/Footer';


function App(){
    return(
        <>
        <Nav/>
       
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/About' component={About}/>
            <Route path='/services' component={Services}/>
           
        </Switch>
        <Footer/>
        </>
    )
}
export default App;