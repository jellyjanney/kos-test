import React, { Component } from "react";
import axios from "axios";


class Slide extends Component{
        
        
        render() {
                return (
                        <ul className="slide">
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/zmyhome.png" alt="" />
                                                <figcaption>
                                                        <h4>Untitle</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label>HTML</label><label>SCSS</label><label>JS</label><label>Yii2</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/forest.png" alt="" />
                                                <figcaption>
                                                        <h4>Untitle</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label>WordPress</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                        </ul>
                );
        }
}

export default Slide;

