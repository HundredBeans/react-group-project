import React from 'react';
import logo from '../logo.svg';
import Header from "../component/header";
import WikiBody from "../component/wiki-body";
import Article from "../component/article";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import Axios from 'axios';

class Home extends React.Component{
    handleSearchKeyword = async e => {
        await store.setState({searchKeyword:e.target.value})
        this.props.getArticle(this.props.searchKeyword)
        console.log(this.props.searchKeyword)
        console.log(e.target)
        }
    searchKeyword = () => {
        this.props.getArticle(this.props.searchKeyword)
        console.log(this.props.isiArticle)
        console.log(this.props.judulArticle)
    }
    handleRandomArticle = async() => {
        this.props.getRandomArticle();
        // await this.getRandomJoke();
        console.log("iiiiiiinnnnnnnniiiiiiii fungsi random article", this.props.textAudio);
    }
    getRandomJoke = async () => {
        store.setState({isLoading:true})
        console.log("iiiiiiinnnnnnnniiiiiiii fungsi randomjoke");
        await Axios
            .get("https://sv443.net/jokeapi/category/programming")
            .then(function(response){
                store.setState({isLoading: false})
                store.setState({textAudio:response.data.joke})
                store.setState({linkAudio:`http://api.voicerss.org/?key=1b382e51653b4956ae35f117746377cd&hl=en-us&src=${response.data.joke}`})
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
        this.playAudio();
    }
    playAudio() {
        const audioEl = document.getElementsByClassName("myAudio")[0]
        audioEl.play()
    }
    render(){
        console.log("iiiiiiniiiiiii dari home", this.props.textAudio)
        return(
            <body>
                <Header {...this.props}/>
                <WikiBody 
                    handleSearchKeyword={e => this.handleSearchKeyword(e)}
                    handleRandomArticle={this.handleRandomArticle}
                    searchKeyword={this.searchKeyword}
                    getRandomJoke={this.getRandomJoke}
                />
                <Article 
                    isiArticle={this.props.isiArticle}
                    judulArticle={this.props.judulArticle} 
                    textAudio={this.props.textAudio}
                    linkAudio={this.props.linkAudio}
                    getRandomJoke={this.getRandomJoke}
                />
            </body>
        )
    }
}
export default connect("searchKeyword, isiArticle, judulArticle, isLoading, textAudio, linkAudio", actions)(withRouter(Home));