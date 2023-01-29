import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {


    

    return (
        <nav className="navbar bg-body-tertiary">
            <div className='container-fluid'>
                {/* {
                    <Link className="navbar-brand fw-bold" to='/'>Welcome To the Kekembas Blog</Link>
                } */}
                
                    {props.loggedIn ? (
                        <>
                        <Link className="navbar-brand fw-bold" to='/'>Welcome back, feel free to explore!</Link>
                        {/* <Link className='nav-link fw-bold text-primary' to="/buttons">View Posts</Link> */}
                        {/* <Link className='nav-link fw-bold text-primary' to="/standings">Standings</Link> */}
                        <Link className='nav-link fw-bold text-primary' to="/create">Create Post</Link>
                        <Link className='nav-link fw-bold text-dark' to="/" onClick={props.logUserOut}>Log Out</Link>
                        </>
                    ) : (
                        <>
                        <Link className="navbar-brand fw-bold" to='/'>Welcome To the Kekembas Blog!</Link>
                        <Link className='nav-link fw-bold text-primary' to="/register">Register</Link>
                        <Link className='nav-link fw-bold text-dark' to="/login">Log In</Link>
                        </>
                    )}
                    <Link className='nav-link fw-bold text-success' to="/">Home</Link>

            </div>
        </nav>
    )
}