import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import Login from "./components/Login";
import Navbar from './components/Navbar';
import ViewPost from './components/ViewPost';
import Register from './components/Register';


export default function App() {

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);
    

    const now = new Date();
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) > now))



    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    }

    function logUserIn(){
        setLoggedIn(true)
    }

    function logUserOut(){
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExp');
        flashMessage(`You have logged out`, "primary");
    }




    return (
        <>
            <Navbar loggedIn={loggedIn} logUserOut={logUserOut}/>
            <div className="container">
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
                { <Routes>
                    <Route path="/" element={<Home loggedIn={loggedIn}/>} />
                    <Route path="/viewpost" element={<ViewPost />} />
                    <Route path="/register" element={<Register flashMessage={flashMessage} />} />
                    <Route path="/login" element={<Login flashMessage={flashMessage} logUserIn={logUserIn} />} />
                    <Route path="/create" element={<CreatePost loggedIn={loggedIn} flashMessage={flashMessage} />} />
                    <Route path="/create" element={<CreatePost loggedIn={loggedIn} flashMessage={flashMessage} />} />
                </Routes>
                }
            </div>
        </>
        
        
    )
    }
