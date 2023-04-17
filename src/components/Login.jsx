import React from "react";

export const Login=()=>{
    return(
        <div className="userbox user-box home-box">
            <h1>Login Page</h1>
            <form>
                <div>
                <label>Username</label>
                <input type="text" placeholder="Enter username"/>
                </div>

                <div>
                <label>Email</label>
                <input type="email" placeholder="Enter email"/>
                </div>

                <div>
                <label>Password</label>
                <input type="passowrd" placeholder="Enter password"/>
                </div>

                <button id="last3">Submit</button>
            </form >
        </div>
    )
}