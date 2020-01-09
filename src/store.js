import createStore from 'unistore';

const initialState = {
    agung:[
        {username:""},
        {fotoUrl:""},
        {fullName:""},
        {email:""},
        {isLogin:false}
    ],
    daffa:[
        {username:""},
        {fotoUrl:""},
        {fullName:""},
        {email:""},
        {isLogin:false}
    ],
    hedy:[
        {username:""},
        {fotoUrl:""},
        {fullName:""},
        {email:""},
        {isLogin:false}
    ],
    pipit:[
        {username:""},
        {fotoUrl:""},
        {fullName:""},
        {email:""},
        {isLogin:false}
    ]
}
export const store = createStore(initialState)