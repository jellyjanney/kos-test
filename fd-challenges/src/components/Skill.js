import React, { Component } from "react";

class Skills extends Component{
        render() {
                return (
                        <>
                                <div className="col-md-6 col-12">
                                        <h2 className="title text-start">Education & Experience</h2>
                                        <ol className="timeline">
                                                <li>
                                                        <label>2012</label>
                                                        <h5>MAHA SARAKHAM UNIVERSITY</h5>
                                                        <p>Bachelor's Degree in Information Technology, Faculity of Informatics.</p>
                                                </li>
                                                <li>
                                                        <label>
                                                                2016
                                                        </label>
                                                        <h5></h5>
                                                        <p></p>
                                                </li>
                                        </ol>
                                </div>
                                <ul className="progressbar col-md-6 col-12">
                                        <h2 className="title text-start">My Skills</h2>
                                        <li className="col-6">
                                                <label>Responsive Web Design</label>
                                                <div className="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped" style={{width:"75%"}}>75%</div>
                                                </div>
                                        </li>
                                        <li className="col-6">
                                                <label>HTML CSS</label>
                                                <div className="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped" style={{width:"85%"}}>85%</div>
                                                </div>
                                        </li>
                                        <li className="col-6">
                                                <label>SCSS</label>
                                                <div className="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped" style={{width:"75%"}}>75%</div>
                                                </div>
                                        </li>
                                        <li className="col-6">
                                                <label>JavaScript</label>
                                                <div className="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped" style={{width:"55%"}}>55%</div>
                                                </div>
                                        </li>
                                </ul>
                        </>
                );
        }
}

export default Skills;