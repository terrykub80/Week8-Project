import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{ post.title }</h5>
                <p className="card-text">{ post.body }</p>
                <Link className='btn btn-primary' to='/ViewPost' title={post.title} content={post.content} id={post.id} >See More</Link>

            </div>
        </div>
    )
}