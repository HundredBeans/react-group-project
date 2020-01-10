import React from 'react'
import SignIn from '../pages/signin'

class Modal extends React.Component{
    render(){
        return(
            // <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title align-content-center" id="exampleModalLongTitle">Please Login to Continue</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <SignIn/>
                </div>
                </div>
            </div>
            </div>
                    )
                }
}
export default Modal