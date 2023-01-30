import React, { useState, useEffect } from 'react'
import PostCard from './PostCard';

export default function Home(props) {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://responsible-knowledgeable-restaurant.glitch.me/blog/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])

    return (
        <>
        <h1 className="text-center">Welcome to the Blog</h1>
        {props.loggedIn ? (
            <>
            {posts.map( post => <PostCard key={post.id} post={post} />)}
            </>
            ) : (
            <>
            <h3 className="text-center">Sign in or Register for an account to get started!</h3>
            </>
        )}
        </>
    )
}

