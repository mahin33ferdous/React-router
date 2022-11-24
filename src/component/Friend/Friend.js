import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {name,email,username,id}=friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <h3>email: {email}</h3>
            <h3>username: <Link to={`/friend/${id}`}>{username}</Link></h3>
        </div>
    );
};

export default Friend;