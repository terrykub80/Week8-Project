import React from 'react'
import { Link } from 'react-router-dom';



export default function ViewPost(props) {


    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">{ props.content }</p>
                <Link className='btn btn-primary' to='/'>Edit</Link>
                
                
            </div>
        </div>
    )
}


