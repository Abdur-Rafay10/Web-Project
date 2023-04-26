import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function LogIn() {
  return (
    <>
        <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="loginModalLabel">Log in</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
        <main className="form-signin w-100 m-auto">
          <div className="container">
          <form>

            <center><img className="mb-4" src="https://freepngimg.com/download/youtube/62644-profile-account-google-icons-computer-user-iconfinder.png" alt="" width="72" height="57"/></center>
          <center><h1 className="h3 mb-3 fw-normal">Please Log in</h1></center>
        
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control my-4" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>
        
            <div className="checkbox mb-3 my-3">
              <label>
                <input type="checkbox" value="admin"/> Admin
              </label>
              <label className="mx-4">
                <input type="checkbox" value="user"/> User
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
         
          </form>
        </div>
        </main>
      </div>
      <div className="modal-footer">
        <button type="button"   className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
