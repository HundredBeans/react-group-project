import React from 'react';
import logo from '../logo.svg';
import ListMeme from "../components/list-meme";
import Header from "../component/header";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

// AUTH TWITTER API
const Twitter = require('twitter')

var client = new Twitter ({
    consumer_key: 'vx7D7BEHhOoQDJbKLtZFM33Ht',
    consumer_secret: 'Hsw69R5sl5kKB8dkhVkNfKlJavVYOIPH9jZx6uczboUk37hp2t',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAKD%2FBQEAAAAAlyeDpoJbj0JUuXELzDycRN8qmZU%3DksuulOSCfCnpt4ORFEHeFwuPJ9nGjg6IacjDh9Zq8M3qASGcqi'
})

class Home extends React.Component{
    // run fungsi dan state dari store.js
    componentDidMount(){
        client.get('statuses/user_timeline', {screen_name: 'BotMarzi', count: 1},  function(error, tweet, response) {
            if(error) throw error;
            let listMemeTemp = []
            console.log(tweet[0]['text']);  // Tweet body.
            for (let i = 0; i < tweet.length; i++){
                let stringTweet = tweet[i].text
                // get memeURL and memeUSER by split signature
                let memeUrl = stringTweet.split("--**")[0]
                let memeUser = stringTweet.split("--**")[1]
                let memeId = tweet[i].id
                let publishedAt = tweet[i].created_at
                let profilePicUser = memeUser[1]
                let fullNameUser = memeUser[2]
                listMemeTemp.push({memeUrl:memeUrl, profilePicUser:profilePicUser, fullNameUser:fullNameUser, memeUser:memeUser, memeId:memeId, publishedAt:publishedAt})
                store.setState({listMeme:listMemeTemp})
            }
          })
    }
    render(){
        const loopListMeme = this.props.listMeme.map((value, index) => (
            ListMeme(value.profilPicUser, value.memeUrl, value.fullNameUser, value.memeId, value.publishedAt)
        ))
        return(
            <body>
                <Header />
                <div className="pt-xl-5">
                    {loopListMeme}
                </div>
            </body>
        )
    }
}
export default connect("listMeme", actions)(withRouter(Home))