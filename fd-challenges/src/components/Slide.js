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
                                                        <h4>ZmyHome</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label>Frontend</label>
                                                                <label className="nd">Yii2</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <a href="">
                                                        <img src="/images/portfolio/the9.png" alt="" />
                                                </a>
                                                <figcaption>
                                                        <h4>The Nine Rama9</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label title="HTML, SCSS, JS">Frontend</label>
                                                                <label className="nd">PHP</label>
                                                                <label className="th">Design</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/forest.png" alt="" />
                                                <figcaption>
                                                        <h4>The Forest Patong</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label className="th">WordPress</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/tgm.png" alt="" />
                                                <figcaption>
                                                        <h4>TGM E-Commerce</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label title="HTML, SCSS, JS">Frontend</label>
                                                                <label className="nd">PHP</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/the-city-hatyai.png" alt="" />
                                                <figcaption>
                                                        <h4>The City Hatyai</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label className="th">WordPress</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/sea-life.png" alt="" />
                                                <figcaption>
                                                        <h4>The Message Sea life</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label title="HTML, SCSS, JS">Frontend</label>
                                                                <label className="nd">PHP</label>
                                                                <label className="th">Design</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/pai-kin-kao.png" alt="" />
                                                <figcaption>
                                                        <h4>Pai Kin Kao</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label title="HTML, SCSS, JS">Frontend</label>
                                                                <label className="nd">PHP</label>
                                                                <label className="th">Design</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/nbt.png" alt="" />
                                                <figcaption>
                                                        <h4>Nissin</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label className="th">WordPress</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                                <li className="slide-items">
                                        <figure>
                                                <img src="/images/portfolio/tour_club.png" alt="" />
                                                <figcaption>
                                                        <h4>Tourkrub's Campaign</h4>
                                                        <p>Detaildetaildetaildetaildetaildetaildetaildetaildetail</p>
                                                        <div className="meta-port">
                                                                <label title="HTML, SCSS, JS">Frontend</label>
                                                                <label className="nd">PHP</label>
                                                                <label className="th">Design</label>
                                                        </div>
                                                </figcaption>
                                        </figure>
                                </li>
                        </ul>
                );
        }
}

export default Slide;

