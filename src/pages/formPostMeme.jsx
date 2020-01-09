import React from 'react';
import '../styles/bootstrap.min.css';
// import axios from "axios";

class FormPostMeme extends React.Component{
    state = {
        isLoading: true,
        linkAvatar : "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png",
        linkMeme: "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png",
        textAudio: "hello world",
        linkAudio: ""
    };
    render(){
        // console.warn("ini cek state", this.state.textAudio, this.state.linkAudio, "hehe")
        // this.axiosVoice;
        return(
            <div className="container text-center">
                <div className="row align-items-center text-center pt-5 pb-5">
                    <div className="col-md-12">
                        <div className="text-center">
                            <h3 className="text-center">
                                Post Meme
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row align-tems-center">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-5" style={{"border": "2px #ececec solid"}}>
                        <div className="row align-items-center">
                            ini gambar
                        </div>
                    </div>
                    <div className="col md-3">
                        ini dropdown
                    </div>
                </div>
            </div>
        )
    }
}
export default FormPostMeme;