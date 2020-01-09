import React from 'react';

function ListMeme(fotoProfil, meme, fullName, memeId, publishedAt){
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-8 px-lg-5">
                <table class="table table-borderless" style={{border:"solid", borderWidth:"0.1px", borderColor:"silver"}}>
                    <thead class="">
                        <tr>
                            <th class="p-0">
                                <img src={fotoProfil} style={{maxHeight:"35px"}}/>
                                <span className="pl-2">{fullName}</span>
                                <span className="text-right">{memeId}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-0">
                                <div className="col-md-12 py-1 px-0 text-center" >
                                    <img src={meme} style={{backgroundColor:"#F7F7F7", maxHeight:"25%", maxWidth:"100%"}}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="col-md-12 px-0 text-left">
                                    <span>{publishedAt}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListMeme;