import React, { Component } from 'react'
import "./css/login.css"
import Api from '../api';
export class Login extends Component {
  render() {
    return (
      <center>

        <div className='container'><br></br>
          <div class="row">
            <div class="col-md loginbox">
              <h2>Login</h2>
              <form>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                </div><br />
                <button type="submit" class="btn btn-primary greenhover">Login</button>
              </form>
              <br />
            </div>
            <div class="col-md ">
              <br/>
            </div>
            <div class="col-md loginbox">
              <h2>Register</h2>
              <form>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className='row'>
                  <div className='col-md'>
                    <div class="form-floating">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                      <label for="floatingPassword">Password</label>
                    </div>
                  </div>
                  <div className='col-md'>
                    <div class="form-floating">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" />
                      <label for="floatingPassword">Confirm Password</label>
                    </div>
                  </div>
                </div>
                <br />
                <div className='row'>
                  <div className='col-md'>
                    <div class="form-floating">
                      <select class="form-select" id="floatingSelect" aria-label="Floating label select example">

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nota">Not to say</option>
                      </select>
                      <label for="floatingSelect">Gender</label>
                    </div><br />
                  </div>
                  <div className='col-md'>
                  <div class="form-floating mb-3">
                  <input type="text"  maxLength="10" pattern='\d*' class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Phone number</label>
                </div>
                  </div>
                </div>

                <br />
                <button type="submit" class="btn btn-primary greenhover">Register</button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </center>
    )
  }
}

export default Login;