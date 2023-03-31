import React, { useState, useEffect } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = () => {

const[blogs,setBlogs] = useState([]);

useEffect(()=>{
    fetch('fakedb.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
},[])

    return (
        <div className='cart-container'>
            <div className='cart-items'>
{
    blogs.map((b,i)=> <Blog key={i} b={b} ></Blog>)
}
            </div>
            <div className='output'>
            <h1>Results are here</h1>
            </div>
            
        </div>
    );
};

export default Blogs;