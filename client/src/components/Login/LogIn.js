// import './styles.css';
// import React, { Component } from 'react';
// import axios from 'axios';
// import { authorize } from '../../utils/authorize'
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
// import { logInUser } from './../../actions/userActions';

// class LogIn extends Component {
//   state = {
//     errormsg: '',
//     error: false
//   }

//   componentDidMount() {
//     const token = localStorage.getItem('access_token');
//     authorize(token).then(result => {
//       if (result.success) {
//         this.props.logInUser(result.user);
//         this.props.history.push('/');
//       }
//       else {
//         if (result.remove) {
//           localStorage.removeItem('access_token');
//         }
//       }
//     });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/api/login', {
//       username: e.target[0].value,
//       password: e.target[1].value
//     })
//       .then(res => {
//         let user = res.data.user;
//         if (res.data.success) {
//           // saving access token in the browser
//           localStorage.setItem('access_token', res.data.token);
//           // adding user to the redux store
//           this.props.logInUser(user);

//           this.props.history.push('/');
//         }
//         else {
//           this.setState({
//             errormsg: res.data.msg,
//             error: true
//           });
//         }
//       });
//   }

//   render() {
//     let msgBlock = this.props.location.state && this.props.location.state.success ? (
//       <div className="alert alert-success">
//         <strong>Success: </strong> {this.props.location.state.msg}
//       </div>
//     ) : (
//         ''
//       );
//     if (this.props.location.state)
//       this.props.location.state.success = false;
//     let errBlock = this.state.error ? (
//       <div className="alert alert-danger">
//         <strong>Error: </strong> {this.state.errormsg}
//       </div>
//     ) : ('');
//     return (
//       <div className="container-login100">
//         {msgBlock}
//         {errBlock}
//         <form className="loginform" onSubmit={this.handleSubmit}>
//           <h1 id="title">Want to sell? Want to Buy?<br />BESit Karo. Lite lo.</h1>
//           <div className="form-group">
//             <div className="wrap-input100 validate-input" data-validate="Enter username">
//               <label htmlFor="Username">Username</label>
//               <input type="text" className="form-control" name="username" aria-describedby="emailHelp" placeholder="Username" />
//               <span className="focus-input100" data-placeholder="&#xf207;"></span>
//             </div>
//             <div className="form-group">
//               <label htmlFor="Password">Password</label>
//               <input type="password" className="form-control" name="password" placeholder="Password" />
//             </div>
//             <button type="submit" className="btn btn-primary" id="index-submit">Submit</button>
//             <span className="psw">Don't have an account? <Link to="/signup" id="forgot"> Register now.</Link></span>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     logInUser: (user) => {
//       dispatch(logInUser(user)); // calling a dispatch action
//     }
//   }
// }

// export default connect(null, mapDispatchToProps)(LogIn);
import './styles.css';
import wave from './img/wave.png';
import avatar from './img/avatar.svg';
import bg from './img/bg.svg';
import React, { Component } from 'react';
import axios from 'axios';
import { authorize } from '../../utils/authorize'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { logInUser } from './../../actions/userActions';

class LogIn extends Component {
  state = {
    errormsg: '',
    error: false
  }

  componentDidMount() {
    const token = localStorage.getItem('access_token');
    authorize(token).then(result => {
      if (result.success) {
        this.props.logInUser(result.user);
        this.props.history.push('/');
      }
      else {
        if (result.remove) {
          localStorage.removeItem('access_token');
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', {
      username: e.target[0].value,
      password: e.target[1].value
    })
      .then(res => {
        let user = res.data.user;
        if (res.data.success) {
          // saving access token in the browser
          localStorage.setItem('access_token', res.data.token);
          // adding user to the redux store
          this.props.logInUser(user);

          this.props.history.push('/');
        }
        else {
          this.setState({
            errormsg: res.data.msg,
            error: true
          });
        }
      });
  }

  render() {
    let msgBlock = this.props.location.state && this.props.location.state.success ? (
      <div className="alert alert-success">
        <strong>Success: </strong> {this.props.location.state.msg}
      </div>
    ) : (
      ''
    );
    if (this.props.location.state)
      this.props.location.state.success = false;
    let errBlock = this.state.error ? (
      <div className="alert alert-danger">
        <strong>Error: </strong> {this.state.errormsg}
      </div>
    ) : ('');
    return (
      <>
        <div>
          {msgBlock}
          {errBlock}
          {/* <form className="loginform" onSubmit={this.handleSubmit}>
          <h1 id="title">Want to sell? Want to Buy?<br />BESit Karo. Lite lo.</h1>
          <div className="form-group">
            <div className="wrap-input100 validate-input" data-validate="Enter username">
              <label htmlFor="Username">Username</label>
              <input type="text" className="form-control" name="username" aria-describedby="emailHelp" placeholder="Username" />
              <span className="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary" id="index-submit">Submit</button>
            <span className="psw">Don't have an account? <Link to="/signup" id="forgot"> Register now.</Link></span>
          </div>
        </form> */}
        </div>


        <img className="wave" alt="" src={wave} />
        <div className="containern" >

          <div className="img">
            <img alt=" " src={bg} />
          </div>
          <div className="login-content">
            <form onSubmit={this.handleSubmit}>
              <img src={avatar} />
              <h2 className="title">Welcome</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  {/* <label htmlFor="Username">Username</label> */}
                  <input type="text" className="input" style={{ color: "white" }} name="username" aria-describedby="emailHelp" placeholder="Username" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  {/* <label htmlFor="Password">Password</label> */}
                  <input type="password" className="input" name="password" placeholder="Password" />
                </div>
              </div>
              <button type=" submit" className="bton" id="index-submit">Login</button>
              <Link to="/signup" id="forgot" style={{ textAlign: 'center' }}>New Here?SignUp</Link>

            </form>
          </div>
        </div>
      </>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => {
      dispatch(logInUser(user)); // calling a dispatch action
    }
  }
}

export default connect(null, mapDispatchToProps)(LogIn);