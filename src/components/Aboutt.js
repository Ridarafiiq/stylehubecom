import React from 'react';
import styled from "styled-components";

function Aboutt() {
  return (
    <Wrapper>
    <section>
    <div className="container">
  <h1><b>OUR TEAM</b></h1>
  <br></br>
  <div className="row">

    <div className="card" >
      <img src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944" alt="*"></img>
      <h2>Dildar</h2>
      <p className="role">Creative Leader</p>
      <p>dildar@mail.com</p>
      <a href="tel:+880123456789">Call</a>
    </div>

    

    <div className="card" >
      <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="*"></img>
      <h2>Dipjol</h2>
      <p className="role">Web Developer</p>
      <p>dipjol@mail.com</p>
      <a href="tel:+880123456789">Call</a>
    </div>

    <div className="card" >
      <img src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg" alt="*"></img>
      <h2>Dipjol</h2>
      <p className="role">Web Developer</p>
      <p>dipjol@mail.com</p>
      <a href="tel:+880123456789">Call</a>
    </div>

    <div className="card" >
      <img src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944" alt="*"></img>
      <h2>Dipjol</h2>
      <p className="role">Web Developer</p>
      <p>dipjol@mail.com</p>
      <a href="tel:+880123456789">Call</a>
    </div>
    
  </div>
</div>
</section>
</Wrapper>
  )
};

const Wrapper = styled.section`
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
:root {
  --br: 20px;
}
* {
  box-sizing: border-box;
  
}
body {
  min-height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  
  
}
.container {
  text-align: center;
  align-items: center;
  
  
}
.row {
  display: flex;
  gap: 30px;
}
.card {
  width: 440px;
  background: #f6f8fa;
  padding: 45px;
  border-radius: 6%;
  transition: 0.5s;
  --bc: white;
  --btn: black;
  font-family: "Montserrat", sans-serif;
}
.card:hover {
    border-radius: 7%;
    transition: 0.5s;
    --bc: darkblue;
    --btn: darkblue;  
    background: white;   
  box-shadow: 0px 3px 10px 5px #e9e9e9;
}
.card img {
  max-width: 100%;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  border: 4px solid var(--bc, black);
}
h1 {
  margin: 20px 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size:40px;
  text-decoration: underline;
}
h2 {
  margin: 15px 0 5px;
}
.card .role {
  font-size: 80%;
  color: #444;
  margin-bottom: 20px;
}
.card a {
  background: var(--btn, #000);
  color: #fff;
  padding: 10px 15px;
  width: 100%;
  display: block;
  border-radius: var(--br);
  text-decoration: none;
  margin-top: 15px;
}

@media (max-width: 767px) {
  .row {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }

  .card {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 420px) {
  .card {
    flex: 0 0 calc(100% - 20px);
    max-width: calc(100% - 20px);
  }
}

`;

export default Aboutt;