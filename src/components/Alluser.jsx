import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./context";

const Alluser=()=>{

    const {posts , load} = useContext(AppContext)
    
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