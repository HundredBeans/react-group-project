import createStore from 'unistore';

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
    pipitIsLogin : false,
    fotoUrlInput: "",
    userNameInput: "",
    listMeme: []
}
export const store = createStore(initialState)