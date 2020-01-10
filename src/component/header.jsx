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
                <Link to="/"><a class="navbar-brand" href="#"><img src={require("../logo.svg")} alt="logo" width="50px"/>MEME'gram</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    {/* {headerKategori} */}
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Beranda</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/profile" class="nav-link">Profile</Link>
                    </li>
                </ul>
                {/* <Search {...this.props}/> */}
                <ul class="navbar-nav ml-lg-5">
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">Masuk</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/logout" class="nav-link"> Logout</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/blank" class="nav-link"> daffa</Link>
                    </li>
                </ul>
                </div>
            </nav> 
        </header>
        );
    }
}

export default Header;