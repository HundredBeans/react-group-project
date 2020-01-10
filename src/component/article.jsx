import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

class Article extends React.Component{
    render(){
        return(
            <React.Fragment>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
                <div className="modal-dialog modal-lg" role="document">
                    <div clasName="modal-content" style={{backgroundColor:"#F7F7F7"}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Article</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {/* CONTENT */}
                        {this.props.isLoading ? <div className="text-center">Loading...</div> : <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-justify pt-3">
                                    <h1>{this.props.judulArticle}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-justify py-1">
                                    <p>{this.props.isiArticle}</p>
                                </div>
                            </div>
                        </div>}
                        {/* CONTENT */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            Joke:
                        </p>
                        <p>
                            {this.props.textAudio}
                        </p>
                        <p>
                            {this.props.linkAudio}
                        </p>
                    </div>
                </div>
            </div>

        </React.Fragment>
        )
    }
}
export default connect("isLoading")(withRouter(Article));