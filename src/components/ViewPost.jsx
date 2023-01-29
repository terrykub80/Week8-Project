import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';

export default function ViewPost({ post }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch(`https://responsible-knowledgeable-restaurant.glitch.me/blog/posts/${posts.id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])


    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{ posts.title }</h5>
                <p className="card-text">{ posts.content }</p>
                <Link className='btn btn-primary' to='/'>Edit</Link>
            </div>
        </div>
    )
}