import createStore from 'unistore';
import { string } from 'prop-types';

const initialState = {
    agung:[
        "agung",
        "https://i.ibb.co/5nQKgBC/Agung.png",
        "Agung Aji Nugroho",
        "https://i.ibb.co/5nQKgBC/Agung.png",
        "--**agung",
        false
    ],
    hedy:[
        "hedy",
        "https://i.ibb.co/5x2LtM3/Hedi.png",
        "Hedy Gading",
        "https://i.ibb.co/5x2LtM3/Hedi.png",
        "--**hedy",
        false
    ],
    daffa:[
        "daffa",
        "https://i.ibb.co/HqkGnsZ/Daffa.png",
        "Mohammad Daffa",
        "https://i.ibb.co/HqkGnsZ/Daffa.png",
        "--**daffa",
        false
    ],
    pipit:[
        "pipit",
        "https://i.ibb.co/5jK4kWg/Pipit.png",
        "Purnama Syafitri Manurung",
        "https://i.ibb.co/5jK4kWg/Pipit.png",
        "--**pipit",
        false
    ],
    fotoUrlInput: "",
    usernameInput: "",
    listMeme: []
}
// API TWITTER
const Twitter = require('twitter')

const client = new Twitter ({
    consumer_key: 'vx7D7BEHhOoQDJbKLtZFM33Ht',
    consumer_secret: 'Hsw69R5sl5kKB8dkhVkNfKlJavVYOIPH9jZx6uczboUk37hp2t',
    access_token_key: '1134195839251804160-coHFrzd1aeejBPvprx63sUIlJ5VHJd',
    access_token_secret: 'G3JkaTMTbLSDFO31FzYZkewMvVRgtQEkcb3fA7Hzgt9n4'
})

export const store = createStore(initialState)

export const actions = store => ({
    getMemeList: (state) => {
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
          });
    }
})