import React from "react"
import {Navbar, Button} from 'react-materialize'
import './co-navigation.css'
import logo from './logo.png'

class Navigation extends React.Component {
    render () {
        return (<Navbar className='background'>
            <img  className='avalith' src={logo} alt="Avalith logo"/>
        </Navbar>);
    }
}

export default Navigation;