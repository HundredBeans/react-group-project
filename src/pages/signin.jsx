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
        store.setState({cekFotoStatus:false})
        let inputUrl = ''
        console.log('cek usernameInput',this.props.userNameInput)
        console.log('cek agung login', this.props.agungIsLogin)
        console.log('cek url 1 input', self.inputUrl)
        console.log('cek url 1', this.props.agung[1])
        console.log('cek url 2', this.props.fotoUrlInput)
        if (this.props.userNameInput==='agung'){
            self.inputUrl = this.props.agung[1]
            store.setState({agungIsLogin : true})
        }
        else if (this.props.userNameInput==='daffa'){
            self.inputUrl = this.props.daffa[1]
            store.setState({daffaIsLogin : true})
        }
        else if (this.props.userNameInput==='pipit'){
            self.inputUrl = this.props.pipit[1]
            store.setState({pipitIsLogin : true})
        }
        else if (this.props.userNameInput==='hedy'){
            self.inputUrl = this.props.hedy[1]
            store.setState({hedyIsLogin : true})
        }
        console.log('cekLogin', this.props.agungIsLogin)
        
        Axios
            .post(`${url}&image_url1=${self.inputUrl}&image_url2=${this.props.fotoUrlInput}`)
            .then(function(response){
                if (response.data.confidence < 80){
                    store.setState({
                        agungIsLogin : false,
                        daffaIsLogin : false,
                        pipitIsLogin : false,
                        hedyIsLogin : false,
                    })
                    alert("face didn't match")
                }else{
                    alert("login success")
                    self.props.history.push("/profile")               
                }
            })
            .catch(function(error){
                alert("login failed")
            })

    }
    cekFoto = () => {
        store.setState({cekFotoStatus:true})
    }
    render(){
        return(
            <div className='container'>
                <form onSubmit={e=> e.preventDefault(e)}>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-4 col-form-label">Username</label>
                        <div className="col-sm-8">
                        <input type="text" name='userNameInput' onChange={e=>this.handleMasukan(e)} className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-4 col-form-label">Foto</label>
                        <div className="col-sm-8">
                        <input type="text" name='fotoUrlInput' onChange={e=>this.handleMasukan(e)} className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                        <button type="submit" onClick={this.cekFoto} className="btn btn-primary btn-block" >Cek Foto</button>
                        </div>
                        <div className="col-sm-12 py-1">
                        <button type="submit" onClick={this.handleLogin} className="btn btn-primary btn-block">Login</button>
                        </div>
                    </div>
                    {this.props.cekFotoStatus ? 
                    (<div className="col-sm-12">
                        <img src={this.props.fotoUrlInput} width={"100%"}/>
                    </div>) : (<div></div>)
                    }
                </form>
            </div>
        )
    }
}
export default connect('agung, daffa, hedy, pipit, userNameInput, fotoUrlInput, agungIsLogin, daffaIsLogin, hedyIsLogin, pipitIsLogin, cekFotoStatus'
)(withRouter(SignIn))