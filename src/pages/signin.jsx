import React from 'react';
import Axios from 'axios'

cosnt url = 'https://api-us.faceplusplus.com/facepp/v3/compare?api_key=sDYn4R45akhLki48Uy5xVzdqdq9qMqqK&api_secret=3jsLZXkF3HdBDEniCXCnjrOoL-ZfPuTe'
class SignIn extends React.Component{
    handleMasukan = (e) =>{
        const self = this
        store.setState({[e.target.name] : e.target.value})
    }
    handleLogin = () =>{
        const self = this
        Axios

            .post(`${url}&image_url1=${this.props.agung}`)
            .then(function(response){
                if (response.data.api_key !== null){
                    store.setState({
                        fullname : response.data.fullname, 
                        email : response.data.email,
                        status_login : response.data.status_login,
                    })
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
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" name='usernameInput' onChange={e=>this.handleMasukan(e)} className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" name='urlFotoInput' onChange={e=>this.handleMasukan(e)} className="form-control" id="inputPassword3"/>
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
export default connect('agung, daffa, hedi, pipit, userNameInput, fotoUrlInput'
)(withRouter(SignIn))