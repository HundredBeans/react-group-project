import React from 'react';
import '../styles/bootstrap.min.css';
import axios from "axios";
import {store, actions} from '../store';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'unistore/react';
import Header from '../component/header';

class Profile extends React.Component{
    assignProfile() {
        if(this.props.agungIsLogin === true){
            store.setState({fullName: this.props.agung[2]});
        }
        else if(this.props.daffaIsLogin === true){
            store.setState({fullName: this.props.daffa[2]});
        }
        else if(this.props.hedyIsLogin === true){
            store.setState({fullName: this.props.hedy[2]});
        }
        else if(this.props.pipitIsLogin === true){
            store.setState({fullName: this.props.pipit[2]});
        }
    }
    componentDidMount = () => {
        this.assignProfile();
    };
    render(){
        console.warn("ini cek state", this.props.textAudio, this.props.linkAudio, "hehe")
        if (this.props.agungIsLogin===true || this.props.daffaIsLogin===true || this.props.hedyIsLogin===true || this.props.pipitIsLogin===true){
            return(
                <div>
                    <Header/>
                    <div className="container text-center">
                        <div className="row align-items-center text-center pt-5 pb-5">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h3 className="text-center">
                                        Profile
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row align-tems-center" >
                            <div className="col-md-2">
    
                            </div>
                            <div className="col-md-8" style={{"border": "2px #ececec solid"}}>
                                <div className="row align-items-center">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-3">
                                        <div>
                                            <img src={this.props.fotoUrlInput} alt="" style={{"width": "100%", "border-radius": "50%"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-7">
                                        <div className="row align-items-center">
                                            <div className="col-md-5">
                                                <p>Username</p>
                                            </div>
                                            <div className="col-md-1">
                                                <p>:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.props.userNameInput}</p>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            alert("You are not logged in")
            return <Redirect to={{ pathname: "/" }} />;
        }
    }
}
export default connect('agung, daffa, hedy, pipit, userNameInput, fotoUrlInput, agungIsLogin, daffaIsLogin, hedyIsLogin, pipitIsLogin, textAudio, linkAudio, fullName, isLoading', actions
)(withRouter(Profile));