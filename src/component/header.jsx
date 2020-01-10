import React, {Component} from 'react';
// import "../style/css-final.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import Modal from '../component/modal'

class Header extends Component{
    postSignout = () => {
        store.setState({"agungIsLogin": false, "pipitIsLogin": false, "hedyIsLogin": false, "daffaIsLogin": false});
        alert("logout succses!!!")
        // localStorage.clear()
        this.props.history.push("/");
    };
    render(){
        return(
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><a class="navbar-brand" href="#"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoM7c7vkyn4itZ5ohFCJs0Z2QmR6JIH92DQAeX4u7LpZJZYmKJ"} alt="logo" width="40px"/>WIKIPEDYA</a></Link>
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
                    <li class="nav-item">
                        <Link to="/blank" class="nav-link"> Post Article</Link>
                    </li>
                </ul>
                {/* <Search {...this.props}/> */}
                <ul class="navbar-nav ml-lg-5">
                  {this.props.agungIsLogin | this.props.hedyIsLogin | this.props.daffaIsLogin | this.props.pipitIsLogin ?
                    (<React.Fragment>
                    <li class="nav-item">
                        <a className="nav-link">Hello, {this.props.userNameInput} |</a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" onClick={this.postSignout}>Logout</Link>
                    </li></React.Fragment>):
                    (<li class="nav-item">
                        <a class="nav-link" data-toggle="modal" data-target="#exampleModalCenter" type='button'>Login</a>
                        <Modal/>
                    </li>)
                  }
                </ul>
                </div>
            </nav> 
        </header>
        );
    }
}

export default connect("agungIsLogin, daffaIsLogin, pipitIsLogin, hedyIsLogin, userNameInput", actions)(withRouter(Header));