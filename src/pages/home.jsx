import React from 'react';
import logo from '../logo.svg';
import Header from "../component/header";
import WikiBody from "../component/wiki-body";
import Article from "../component/article";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Home extends React.Component{
    handleSearchKeyword = async e => {
        await store.setState({searchKeyword:e.target.value})
        console.log(this.props.searchKeyword)
        console.log(e.target)
        }
    searchKeyword = () => {
        this.props.getArticle(this.props.searchKeyword)
        console.log(this.props.isiArticle)
        console.log(this.props.judulArticle)
    }
    handleRandomArticle = () => {
        this.props.getRandomArticle()
    }
    render(){
        return(
            <body>
                <Header {...this.props}/>
                <WikiBody 
                handleSearchKeyword={e => this.handleSearchKeyword(e)}
                handleRandomArticle={this.handleRandomArticle}
                searchKeyword={this.searchKeyword}
                />{this.props.isLoading ? <div className="text-center">Loading...</div> :
                (<Article 
                isiArticle={this.props.isiArticle}
                judulArticle={this.props.judulArticle} 
                />)}
            </body>
        )
    }
}
export default connect("searchKeyword, isiArticle, judulArticle, isLoading", actions)(withRouter(Home));