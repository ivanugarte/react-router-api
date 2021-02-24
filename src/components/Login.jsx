import React from 'react';
import '../assets/css/Login.css';
import logo from '../assets/img/logo.jpg';
import { Apiurl } from '../services/apirest';
import axios from 'axios';

class Login extends React.Component {

  state = {
    form: {
      "usuario": "",
      "password": ""
    },
    error: false,
    errorMsg: ""
  }

  manejadorSubmit = evento => {
    evento.preventDefault();
  }

  manejadorChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    // console.log(this.state.form)
  }

  manejarBoton=()=>{
    let url = Apiurl;
    axios.get(url,this.state.form)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <br /><br />
              <img src={logo} width="100px" alt="User Icon" />
              <br /><br />
            </div>
            <form onSubmit={this.manejadorSubmit}>
              <input type="text" className="fadeIn second" name="usuario" placeholder="usuario" onChange={this.manejadorChange} />
              <input type="password" className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange} />
              <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejarBoton} />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;