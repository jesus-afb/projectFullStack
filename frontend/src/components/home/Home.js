import React from 'react';
import styled from 'styled-components'

const StyledHome = styled.div`
div{
   background-image: url("/main-bg001.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vh;
  font-size: 50px;
  margin: 0;
  padding: 0;
  height:500px;
  width:100vw;
}
  h1{
    height: 40px;
    color: blue;
    text-align: center;
    padding: 1% 1% 1% 1%;
    margin: 0;
    font-weight: bolder;
  }
  img{
    width: 100px;
  }
`



function Home() {

  

  return (
    <div>

    <StyledHome>
      <h1>AEDIFICIUM LTS</h1>
      <div ></div> 
  </StyledHome>


    </div>
  );
}

export default Home;
