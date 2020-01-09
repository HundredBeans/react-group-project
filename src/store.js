import createStore from 'unistore';

const initialState = {
    agung:{
        username:"",
        fotoUrl:"",
        fullName: ""
    },
    hedy:{
        username:"",
        fotoUrl:"",
        fullName: ""
    },
    daffa:{
        username:"",
        fotoUrl:"",
        fullName: ""
    },
    pipit:{
        username:"",
        fotoUrl:"",
        fullName: ""
    },
}
export const store = createStore(initialState)