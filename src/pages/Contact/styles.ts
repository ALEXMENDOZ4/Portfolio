import styled from "styled-components";
import { colors } from "../../styles/colors";
import { sizes, sizesResponsive1240, sizesResponsive470, sizesResponsive950 } from "../../styles/sizes";
import { fontweight } from "../../styles/fontweight";

export const Contact = styled.section`
  padding: 5rem 15rem;

  .center-text {
    text-align: center;

    span {
      color: ${colors.mainColor};
    }
  }

  .center-text h2 {
    font-size: ${sizes.h2};
  }

  .contact-form{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4.2rem;
  }

  .contact-form form{
    position: relative;
    width: 600px;
  }

  form input,form textarea{
    width: 100%;
    padding: 20px;
    border: none;
    outline: none;
    box-shadow: 0 0 5px ${colors.mainColor};
    background-color: #2d343f;
    color: ${colors.textColor};
    margin-bottom: 20px;
    border-radius: 8px;
  }

  form input::placeholder,form textarea::placeholder{
    color: ${colors.otherColor};
    font-size: 15px;
  }

  form .send-btn{
    display: inline-block;
    padding: 11px 26px;
    background-color: ${colors.mainColor};
    color: ${colors.bgColor};
    border: 2px solid ${colors.mainColor};
    border-radius: 8px;
    font-size: 15px;
    font-weight: ${fontweight[600]};
    transition: all 0.5s ease;
    width: 30%;
  }

  form .send-btn:hover{
    background-color: transparent;
    color: ${colors.mainColor};
    box-shadow: 0 0 20px ${colors.mainColor};
    cursor: pointer;
  }

  //media queries
  @media(max-width: 1700px){
    padding: 90px 8% 80px;
  }

  @media(max-width: 1380px){
    padding: 90px 5% 80px;
  }

  @media(max-width: 1240px){

    h1{
      font-size: ${sizesResponsive1240.h1} !important;
    }

    h2{
      font-size: ${sizesResponsive1240.h2} !important;
    }

    p{
      font-size: ${sizesResponsive1240.p} !important;
    }
  }

  @media(max-width: 950px){
    h1{
      font-size: ${sizesResponsive950.h1} !important;
    }
  }

  @media(max-width: 470px){
    h1{
      font-size: ${sizesResponsive470.h1} !important;
    }

    h2{
      font-size: ${sizesResponsive470.h2} !important;
    }
  }
`;


/* Loading */

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .2);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;