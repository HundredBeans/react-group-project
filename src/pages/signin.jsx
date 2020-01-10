import React from 'react';
import Axios from 'axios'
import {store} from '../store'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'

const url = 'https://api-us.faceplusplus.com/facepp/v3/compare?api_key=sDYn4R45akhLki48Uy5xVzdqdq9qMqqK&api_secret=3jsLZXkF3HdBDEniCXCnjrOoL-ZfPuTe'
class SignIn extends React.Component{
    handleMasukan = (e) =>{
        const self = this
        store.setState({[e.target.name] : e.target.value})
    }
    handleLogin = () =>{
        const self = this
        let inputUrl = ''
        console.log('cek usernameInput',this.props.userNameInput)
        
        console.log('cek url 1 input', this.inputUrl)
        console.log('cek url 1', this.props.agung[1])
        console.log('cek url 2', this.props.fotoUrlInput)
        if (this.props.userNameInput==='agung'){
            this.inputUrl = this.props.agung[1]
            store.setState({agungIsLogin : true})
        }
        else if (this.props.userNameInput==='daffa'){
            this.inputUrl = this.props.daffa[1]
            store.setState({daffaIsLogin : true})
        }
        else if (this.props.userNameInput==='pipit'){
            this.inputUrl = this.props.pipit.fotoUrl
            store.setState({pipitIsLogin : true})
        }
        else if (this.props.userNameInput==='hedy'){
            this.inputUrl = this.props.hedy.fotoUrl
            store.setState({hedyIsLogin : true})
        }
        console.log('cekLogin', this.props.agungIsLogin)
        
        Axios
            .post(`${url}&image_url1=${this.inputUrl}&image_url2=${this.props.fotoUrlInput}`)
            .then(function(response){
                if (response.data.confidence < 80){
                    store.setState({
                        agungIsLogin : false,
                        daffaIsLogin : false,
                        pipitIsLogin : false,
                        hedyIsLogin : false,
                    })
                }else{
                    self.props.history.push("/profile")               
                }
            })
            .catch(function(error){
            })

    }
    render(){
        return(
            <div className='container mt-5 pl5 pr-5'>
                <form onSubmit={e=> e.preventDefault(e)}>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                        <input type="text" name='userNameInput' onChange={e=>this.handleMasukan(e)} className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Foto</label>
                        <div className="col-sm-10">
                        <input type="text" name='fotoUrlInput' onChange={e=>this.handleMasukan(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" onClick={this.handleLogin} className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect('agung, daffa, hedy, pipit, userNameInput, fotoUrlInput, agungIsLogin, daffaIsLogin, hedyIsLogin, pipitIsLogin'
)(withRouter(SignIn))