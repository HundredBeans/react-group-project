import createStore from 'unistore';
import { string } from 'prop-types';
import Axios from 'axios';

// const initialState = {
//     agung:{
//         username:"agung",
//         fotoUrl:"https://i.ibb.co/5nQKgBC/Agung.png",
//         fullName:"",
//         email:"",
//         isLogin:false
//     },
//     daffa:{
//         username:"daffa",
//         fotoUrl:"https://i.ibb.co/HqkGnsZ/Daffa.png",
//         fullName:"",
//         email:"",
//         isLogin:false
//     },
//     hedy:{
//         username:"hedy",
//         fotoUrl:"https://i.ibb.co/5x2LtM3/Hedi.png",
//         fullName:"",
//         email:"",
//         isLogin:false
//     },
//     pipit:{
//         username:"pipit",
//         fotoUrl:"https://i.ibb.co/5jK4kWg/Pipit.png",
//         fullName:"",
//         email:"",
//         isLogin:false
//     },
//     fotoUrlInput : '',
//     userNameInput : ''
// }
const initialState = {
    agung:[
        "agung",
        "https://i.ibb.co/5nQKgBC/Agung.png",
        "Agung Aji Nugroho",
        "https://i.ibb.co/5nQKgBC/Agung.png",
        "--**agung",
        false
    ],
    agungIsLogin : false,
    hedy:[
        "hedy",
        "https://i.ibb.co/5x2LtM3/Hedi.png",
        "Hedy Gading",
        "https://i.ibb.co/5x2LtM3/Hedi.png",
        "--**hedy",
        false
    ],
    hedyIsLogin : false,
    daffa:[
        "daffa",
        "https://i.ibb.co/HqkGnsZ/Daffa.png",
        "Mohammad Daffa",
        "https://i.ibb.co/HqkGnsZ/Daffa.png",
        "--**daffa",
        false
    ],
    daffaIsLogin : false,
    pipit:[
        "pipit",
        "https://i.ibb.co/5jK4kWg/Pipit.png",
        "Purnama Syafitri Manurung",
        "https://i.ibb.co/5jK4kWg/Pipit.png",
        "--**pipit",
        false
    ],
    searchKeyword:"",
    isiArticle:"",
    judulArticle:"",
    isLoading:false,
    pipitIsLogin : false,
    fotoUrlInput: "",
    userNameInput: "",
}

export const store = createStore(initialState)

export const actions = store => ({
    getArticle: async (state, searchKeyword) => {
        console.log(initialState.searchKeyword)
        store.setState({isLoading:true})
        await Axios
            .get("https://en.wikipedia.org/api/rest_v1/page/summary/"+searchKeyword)
            .then(function(response){
                store.setState({isiArticle:response.data.extract, judulArticle:response.data.title, isLoading:false})
                console.log(response)
                console.log(initialState.isiArticle)
            })
            .catch(function(error){
                store.setState({isLoading: false})
                console.log(initialState.searchKeyword)
                // handle error
                console.log(error)
            })
    },
    getRandomArticle: async (state) => {
        store.setState({isLoading:true})
        await Axios
            .get("https://en.wikipedia.org/api/rest_v1/page/random/summary")
            .then(function(response){
                store.setState({isiArticle:response.data.extract, judulArticle:response.data.title, isLoading:false})
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
    }
})