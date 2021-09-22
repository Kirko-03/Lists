import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Posts from "../Posts/Posts"
import { Navbar } from "../UI/Navbar/Navbar"
import { About } from "./About"
import ErrorSite from "./Error"


const App = () =>{
return <BrowserRouter>
<Navbar/>
<Switch>
<Route path='/about'>
<About/>
</Route>
<Route path='/posts'>
<Posts/>
</Route>
<Route path='/error'>
<ErrorSite/>
</Route>
<Redirect to='/error'/>
</Switch>
</BrowserRouter>
}
export default App