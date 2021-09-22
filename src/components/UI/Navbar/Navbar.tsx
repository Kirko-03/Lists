import { NavLink } from "react-router-dom"

const style = require('./Navbar.module.css')

export const Navbar = () =>{
    return <div className={style.navbar}>
        <NavLink to='/about'>About</NavLink>
        <br/>
        <NavLink to='/posts' >Posts</NavLink>
    </div>
}