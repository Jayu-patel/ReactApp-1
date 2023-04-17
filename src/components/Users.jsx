import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const User=()=>{
    const [post, setPost] = useState({})
    const params = useParams()
    const {id} = params


    useEffect(()=>{
        axios.get(`https://dummyjson.com/users/${id}`).then(
            res => {
                setPost(res.data)
            }
        ).catch((e)=>{
            console.log("User not found",e)
        })
    },[id])
    
    return(
        <div className="user-box ind-user">
            <div className="sec1">
            <NavLink to="/user">
                <button><i className="fa-solid fa-arrow-left"></i> Back</button>
            </NavLink>
                <div className="image">{
                    post ? <img src={post.image} alt="" /> : <div>j</div>
                }
                </div>
                <h1>{post.firstName} {post.lastName}</h1>
                <h4>{post.email}</h4>
            </div>
            <div className="sec2">
                <div className="details">
                    <h2>Name :  {post.firstName}  {post.maidenName}  {post.lastName}</h2>
                    <h2>Gender :  {post.gender}</h2>
                    <h2>Age :  {post.age}</h2>
                    <h2>Username -  {post.username}</h2>
                    <h2>Address : {post.address?.address}, {post.address?.city}</h2>
                    <h2>Company :  {post.company?.name}</h2>
                    <h2>Department :  {post.company?.department}</h2>
                </div>
            </div>
        </div>
    )
}

export default User