import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Alluser=()=>{

    const [posts, setPosts] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        axios.get(`https://dummyjson.com/users`).then(
            res => {
                setPosts(res.data.users)
                setLoad(true)
            }
        ).catch((e)=>{
            console.log("User not found")
        })
    },[load])
    // "/users/jay"
    return (
      load ? 
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
      </div>: 
      <div className="load">
        <div className="loader">
            <span className="loader__element"></span>
            <span className="loader__element"></span>
            <span className="loader__element"></span>
        </div>
      </div>
    );
}

export default Alluser