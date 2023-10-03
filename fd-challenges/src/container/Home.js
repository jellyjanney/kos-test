import React, { Component } from "react";
import axios from "axios";
import Slide from "../components/Slide";


const url = 'http://localhost:3001/User';

axios.get(url).then((response) => {
        // handle success
        console.log(response);
})
.catch((error) => {
        // handle errors
});


class Home extends Component {
        constructor(props) {
                super(props);
        }
        
        render() { 
                const { firstName, lastName, introduct } = this.props.user;
                
                return(
                        <section id="home" className="home container-fluid">
                                <div className="row">
                                        <figure className="hero">
                                                <img alt="" src="/images/about-me/iam-2.JPG" />
                                                <figcaption className="">
                                                        <div className="caption">
                                                                <h1 className="caption--title">
                                                                        <ul className="caption--subtitle__introduct">
                                                                                <li>~5 Years experience</li>
                                                                                <li>3.6 Years in Web designer</li>
                                                                                <li>2.4 Years in Frontend developer</li>
                                                                        </ul>
                                                                        {firstName} {lastName}
                                                                </h1>
                                                                <p className="caption--detail">
                                                                        {introduct}
                                                                </p>
                                                        </div>
                                                        
                                                        <ul className="caption__social">
                                                                <li className="caption__social-list">
                                                                        <button className="caption__social-list__btn--primary">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                                                </svg>
                                                                                Download Resume
                                                                        </button>
                                                                </li>
                                                                <li className="caption__social-list">
                                                                        <button className="caption__social-list__btn">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                                                                </svg>
                                                                                Contact me
                                                                        </button>
                                                                </li>
                                                        </ul>
                                                </figcaption>        
                                        </figure>
                                </div>
                                <div className="row">
                                        <h2 className="title">Portfolio</h2>
                                        <Slide></Slide>
                                </div>
                        </section>
                );        
        }
        
};

export default Home;