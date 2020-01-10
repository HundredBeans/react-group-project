import React from 'react';

class Article extends React.Component{
    render(){
        return(
            <div className="container">
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
        )
    }
}
export default Article