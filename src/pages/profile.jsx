import React from 'react';
import '../styles/bootstrap.min.css';
import axios from "axios";

class Profile extends React.Component{
    state = {
        isLoading: true,
        linkAudio: "",
        linkAvatar : "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png",
        linkMeme: "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png",
        textAudio: "Indonesia tanah airku Tanah tumpah darahku Disanalah aku berdiri Jadi pandu ibuku Indonesia kebangsaanku Bangsa dan Tanah Airku Marilah kita berseru Indonesia bersatu",
        nestedState : {
            key1: "",
            key2: ""
        }
    };
    axiosVoice = async() => {
        const self = this;
        const someProperty = {...self.state.nestedState};
        await axios
            .get(`http://api.voicerss.org/?key=1b382e51653b4956ae35f117746377cd&hl=en-us&src=${self.state.textAudio}`)
            .then(function(response){
                self.setState({isLoading: false});
                self.setState({linkAudio: `http://api.voicerss.org/?key=1b382e51653b4956ae35f117746377cd&r=-5&zh-tw-tw&src=${self.state.textAudio}`});
                console.warn(response, "ini response dari axiosvoice");
                console.warn("iniiiiiiiiiiiiiiiiiiiii batas atas");
                someProperty.key1 = "value1";
                self.setState({nestedState: someProperty});
                // self.setState({nestedState.key1: "value1"});
                console.warn("ini coba edit setstate nsted state", self.state);
                console.warn("iniiiiiiiiiiiiiiii batas bawah");
            })
            .catch(function(error){
                self.setState({isLoading: false});
            });
        return this.playAudio();
    }
    playAudio() {
        const audioEl = document.getElementsByClassName("myAudio")[0]
        audioEl.play()
    }
    render(){
        console.warn("ini cek state", this.state.textAudio, this.state.linkAudio, "hehe")
        return(
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
                                    <img src={this.state.linkAvatar} alt="" style={{"width": "100%", "border-radius": "50%"}}/>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-7">
                                <div className="pb-3 pt-3">
                                    <h3>
                                        (Nama)
                                    </h3>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <p>Username</p>
                                        <p>Password</p>
                                        <p>Username</p>
                                        <p>Username</p>
                                        <p>Username</p>
                                        <p>Username</p>
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
                                        <p>Value Username</p>
                                        <p>Value Password</p>
                                        <p>Value Username</p>
                                        <p>Value Username</p>
                                        <p>Value Username</p>
                                        <p>Value Username</p>
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
                            <img onClick={this.axiosVoice} src={this.state.linkMeme} alt="" style={{"width": "200px", "height": "200px"}}/>
                        </div>
                        <div>
                            <audio src={this.state.linkAudio} className="myAudio">
                                <source src="" type="audio/wav"/>
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;