import React from "react";

function App() {
  return (
    <div className="container">
      <div className="card-profile">
        <figure>
          <div className="cover-thumbnail">
            <img src="../images/bg-pattern-card.svg" />
          </div>
          
          <div className="profile-thumbnail">
            <img src="../images/image-victor.jpg" />
          </div>
        </figure>
        <figcaption>
          <h2>Victor Crest <span>26</span></h2>
          <small>London</small>
          <ul className="meta-profile">
            <li>
              <h5>80K</h5>
              <label className="small">Followers</label>
            </li>
            <li>
              <h5>803K</h5>
              <label className="small">Likes</label>
            </li>
            <li>
              <h5>1.4K</h5>
              <label className="small">Photos</label>
            </li>
          </ul>
        </figcaption>
      </div>
    </div>
  );
}

export default App;