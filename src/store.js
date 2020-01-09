import createStore from 'unistore';

const initialState = {
    agung:{
        username:"agung",
        fotoUrl:"https://i.ibb.co/5nQKgBC/Agung.png",
        fullName: "Agung Aji Nugroho",
        fotoProfil: "https://i.ibb.co/5nQKgBC/Agung.png",
        signature: "--**agung",
        isLogin: false
    },
    hedy:{
        username:"hedy",
        fotoUrl:"https://i.ibb.co/5x2LtM3/Hedi.png",
        fullName: "Hedy Gading",
        fotoProfil: "https://i.ibb.co/5x2LtM3/Hedi.png",
        signature: "--**hedy",
        isLogin: false
    },
    daffa:{
        username:"daffa",
        fotoUrl:"https://i.ibb.co/HqkGnsZ/Daffa.png",
        fullName: "Mohammad Daffa",
        fotoProfil: "https://i.ibb.co/HqkGnsZ/Daffa.png",
        signature: "--**daffa",
        isLogin: false
    },
    pipit:{
        username:"pipit",
        fotoUrl:"https://i.ibb.co/5jK4kWg/Pipit.png",
        fullName: "Purnama Syafitri Manurung",
        fotoProfil: "https://i.ibb.co/5jK4kWg/Pipit.png",
        signature: "--**pipit",
        isLogin: false
    },
    fotoUrlInput: "",
    usernameInput: "",
    listMeme: []
}
// API TWITTER
const Twitter = require('twitter')

var client = new Twitter ({
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
            console.log(tweet[0]['text']);  // Tweet body.
            store.setState({listMeme:tweet});
          });
    }
})