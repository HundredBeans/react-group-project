import createStore from 'unistore';

const initialState = {
    agung:{
        username:"agung",
        fotoUrl:"https://i.ibb.co/5nQKgBC/Agung.png",
        fullName:"",
        email:"",
        isLogin:false
    },
    daffa:{
        username:"daffa",
        fotoUrl:"https://i.ibb.co/HqkGnsZ/Daffa.png",
        fullName:"",
        email:"",
        isLogin:false
    },
    hedy:{
        username:"hedy",
        fotoUrl:"https://i.ibb.co/5x2LtM3/Hedi.png",
        fullName:"",
        email:"",
        isLogin:false
    },
    pipit:{
        username:"pipit",
        fotoUrl:"https://i.ibb.co/5jK4kWg/Pipit.png",
        fullName:"",
        email:"",
        isLogin:false
    },
    fotoUrlInput : '',
    userNameInput : ''
}
export const store = createStore(initialState)