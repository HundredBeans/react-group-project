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
    axiosVoice = async() => {
        const self = this;
        await axios
            .get(`http://api.voicerss.org/?key=1b382e51653b4956ae35f117746377cd&hl=en-us&src=${store.state.textAudio}`)
            .then(function(response){
                store.setState({isLoading: false});
                store.setState({linkAudio: `http://api.voicerss.org/?key=1b382e51653b4956ae35f117746377cd&r=-5&zh-tw-tw&src=${store.state.textAudio}`});
            })
            .catch(function(error){
                store.setState({isLoading: false});
            });
        return this.playAudio();
    }
    playAudio() {
        const audioEl = document.getElementsByClassName("myAudio")[0]
        audioEl.play()
    }
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
                                        <div className="pb-3 pt-3">
                                            <h3>
                                                {this.props.fullName}
                                            </h3>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-md-5">
                                                <p>Username</p>
                                                <p>Atribut</p>
                                                <p>Atribut</p>
                                                <p>Atribut</p>
                                                <p>Atribut</p>
                                                <p>Atribut</p>
                                            </div>
                                            <div className="col-md-1">
                                                <p>:</p>
                                                <p>:</p>
                                                <p>:</p>
                                                <p>:</p>
                                                <p>:</p>
                                                <p>:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.props.userNameInput}</p>
                                                <p>Value</p>
                                                <p>Value</p>
                                                <p>Value</p>
                                                <p>Value</p>
                                                <p>Value</p>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12 text-center">
                                <div className="pt-5 pb-5">
                                    <p> Voice </p>
                                </div>
                                <div>
                                    <img onClick={this.axiosVoice} src={this.props.linkMeme} alt="" style={{"width": "200px", "height": "200px"}}/>
                                </div>
                                <div>
                                    <audio src={this.props.linkAudio} className="myAudio">
                                        <source src="" type="audio/wav"/>
                                    </audio>
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