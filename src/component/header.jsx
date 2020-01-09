import React, {Component} from 'react';
// import "../style/css-final.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
// import { withRouter } from "react-router-dom";
// import { connect } from "unistore/react";

class Header extends Component{
    postSignout = () => {
        store.setState({"is_login": false});
        // localStorage.clear()
        this.props.history.push("/");
    };
    render(){
        return(
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><a class="navbar-brand" href="#" onClick={() => this.props.clickFunction("")}><img src={require("../logo.svg")} alt="logo" width="50px"/>KabarKabar</a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                    {/* {headerKategori} */}
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Lainnya
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={`/news-category/kesehatan`}><a class="dropdown-item" href="" onClick={() => this.props.clickFunction("health")}>Kesehatan</a></Link>
                  <Link to={`/news-category/sains`}><a class="dropdown-item" href="" onClick={() => this.props.clickFunction("science")}>Sains</a></Link>
                  <Link to={`/news-category/general`}><a class="dropdown-item" href="" onClick={() => this.props.clickFunction("general")}>General</a></Link>
                  </div>
                </li>
              </ul>
              {/* <Search {...this.props}/> */}
              <ul class="navbar-nav ml-lg-5">
              <li class="nav-item">
                  <Link to="/signin" class="nav-link">Masuk</Link>
                </li>
                <li class="nav-item">
                  <Link to="/profile" class="nav-link"> Profile</Link>
                </li>
                <li class="nav-item">
                  <Link to="/logout" class="nav-link"> Logout</Link>
                </li>
              </ul>
            </div>
          </nav> 
        </header>
        );
    }
}

export default Header;