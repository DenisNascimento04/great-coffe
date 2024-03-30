import styled, { keyframes } from 'styled-components';

export const Container = styled.div `
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */

  background: #000000;
  .mobile{
    display: none;
  }
  @media screen and (max-width: 425px){
    .mobile{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      p{
        color: #f2f2f2;
        font-size: 2rem;
        max-width: 60%;
        text-align: center;
      }
      button{
        background-color: #000000;
        border-color: #8257E5;
        border-width: 1px;
        border-radius: 6px;
        padding: 12px 40px;
        color: #FFFFFF;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        cursor: pointer;
      }
    }
  }
`

export const Header = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  z-index: 999;
  gap: 6rem;
  .logo{
    img{
      width: 4rem;
    }
    h2{
      display: none;
    }
  }
  nav{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3.2rem;
    p{
      color: #FFFFFF;
      font-size: 1.8rem;
      hr{
        display: none;
      }
      transition: 500ms ease;
      cursor: pointer;
    }
    p:hover{
      color: #8257E5;
    }
  }
  button.pegar{
    position: relative;
    display: block;
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
    margin: 30px 0;
    border: 2px solid #8257E5;
    padding: 14px 60px;
    text-transform: uppercase;
    overflow: hidden;
    transition: 1s all ease;
    background: transparent;
    border-radius: 1.2rem;
    cursor: pointer;
  }
  button.pegar::before{
    background: #8257E5;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%,-50%) rotate(45deg);
  }
  button.pegar:hover::before{
    height: 720%;
  }
  .menu-mobile{
    display: none;
  }
  @media screen and (max-width: 1440px){
    .logo{
      img{
        width: 3.2rem;
      }
    }
    nav p{
      font-size: 1.6rem;
    }
    button.pegar{
      font-size: 1.4rem;
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 425px){
    justify-content: space-between;
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: 1px solid #29292E;
    z-index: 999;
    .logo{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-left: 1.4rem;
      h2{
        display: block;
        color: #f2f2f2;
        font-size: 1.2rem;
        letter-spacing: .1rem;
      }
    }
    nav{
      flex-direction: column;
      gap: 0;
      position: fixed;
      background-color: #000000;
      width: 100vw;
      height: 100%;
      z-index: 9;
      margin: 0;
      transition: 500ms ease;
      p{
        border-bottom: 1px solid #29292E;
        margin: 0;
        padding: 1.4rem 0;
        padding-left: 1rem;
        width: 100%;
        position: relative;
        hr{
          display: block;
          width: 4rem;
          transform: rotate(90deg);
          position: absolute;
          top: 1.6rem;
          left: -1.9rem;
          border-color: #8257E5;
        }
      }
      p:not(:nth-child(1)){
        color: #A8A8B3;
      }
    }
    img{
      height: 3.2rem;
    }
    button.pegar{
      display: none;
    }
    .menu-mobile{
      display: block;
      background-color: transparent;
      border: 0;
      color: #f2f2f2;
      cursor: pointer;
      margin-right: 1.2rem;
    }
  }
`

export const DivTitulos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  gap: 4rem;
  h1, h2{
    margin: 0;
    font-size: 8rem;
  }
  h1{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    /* line-height: 109px; */
    letter-spacing: -0.03em;
    
    color: #FFFFFF;
    
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h2{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    /* line-height: 109px; */
    letter-spacing: -0.03em;
    background-color: #8257E5;

    margin-top: -50px;

    -webkit-text-stroke: 4px transparent;
    background-clip: text;
    /* border: 2px solid #8257E5; */
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .mobile{
    display: none;
  }
  @media screen and (max-width: 1440px){
    padding-top: 0;
    h1, h2{
      font-size: 4.8rem;
    }
  }
  @media screen and (max-width: 425px){
    padding-top: 1rem;
    gap: 1rem;
    h1, h2{
      font-size: 3rem;
    }
    h1{
      margin-bottom: 4rem;
    }
  }
`
const rotate =  keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Imagens = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* background-color: green; */
  width: 100%;
  height: 100%;
  /* flex: 1; */
  /* padding-top: 20rem; */

  div{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 42rem;
    /* background-color: blue; */
    .grao1, .grao2, .copos{
      z-index: 1;
      /* object-fit: fill; */
    }
    .grao1{
      height: 32rem;
      margin-right: -18rem;
      /* margin-top: 6rem; */
      /* animation: ${rotate} 5s linear infinite; */
    }
    .copos{
      height: 80rem;
      margin-left: 8rem;
      margin-top: 6rem;
      /* background-color: blue; */
      /* margin-top: 6rem; */
    }
    .grao2{
      height: 32rem;
      margin-left: -20rem;
      /* animation: ${rotate} 5s linear infinite; */
    }
  }
  
  @media screen and (max-width: 1440px){
    gap: 1rem;
    div{
      height: 22rem;
      .grao1{
        /* width: 14rem; */
        height: 22em;
      }
      .copos{
        height: 52rem;
        margin-top: -2rem;
      }
      .grao2{
        /* width: 14rem; */
        height: 22em;
        margin-left: -16rem;
      }
    }
  }
  @media screen and (max-width: 425px){
    /* background-color: red; */
    /* flex: 1; */
    div{
      height: 12rem;
      .grao1{
        width: 10rem;
        height: 14rem;
        margin-right: -12rem;
      }
      .copos{
        height: 28rem;
        margin-top: -1rem;
      }
      .grao2{
        width: 10rem;
        height: 14rem;
        margin-left: -8rem;
      }
    }
  }

`

export const Blurs1 = styled.img`
  position: absolute;
  width: 321px;
  height: 321px;
  right: -14rem;
  top: -150px;

  background: #996DFF;
  filter: blur(200px);
  @media screen and (max-width: 425px){
    display: none;
  }
`
export const Blurs2 = styled.img`
  position: absolute;
  width: 321px;
  height: 321px;
  left: -16%;
  bottom: -16%;

  background: #996DFF;
  filter: blur(200px);
  @media screen and (max-width: 425px){
    left: 20%;
    top: 80%;
    z-index: 0;
  }
`
