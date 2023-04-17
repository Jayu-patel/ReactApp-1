import React from "react";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import User from "./Users";

const Alluser=()=>{

    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get(`https://dummyjson.com/users`).then(
            res => {
                setPosts(res.data.users)
            }
        ).catch((e)=>{
            console.log("User not found",e)
        })
    },[posts])
    // "/users/jay"
    return (
      <div className="user-box use">
        {posts.map((e) => (
          <Link to={"/user/"+e.id} key={e.id}>
            <div
              className="all-user"
              key={e.id}
            >
              <div className="user-detail-image">
                <img src={e.image} key={e.id} alt="" />
              </div>
              <div className="user-detail">
                <h2>
                  {e.firstName} {e.lastName}
                </h2>
                <p className="email">{e.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
}

export default Alluser