import styled from "styled-components";
import { colors } from "../../styles/colors";
import { sizes, sizesResponsive1240, sizesResponsive470, sizesResponsive950 } from "../../styles/sizes";

export const PortFolio = styled.section`
  background-color: ${colors.secondBgColor};
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

  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    align-items: center;
    gap: 2.3rem;
    margin-top: 4.2rem;
  }

  .row img {
    height: 200px;
    width: 100%;
    border-radius: 28px;
    margin-bottom: 1.5rem;
  }

  .row {
    background-color: #2d343f;
    border-radius: 28px;
    border: 1px solid transparent;
    box-shadow: 0 0 5px ${colors.mainColor};
    padding: 20px;
    transition: all 0.5s ease;
  }

  .main-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .row h5 {
    font-size: 18px;
    font-weight: 600;
    color: ${colors.otherColor};
  }
  
  .row .row-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    background-color: #075fe4;
    border-radius: 50%;
    font-size: 27px;
    color: ${colors.textColor};
  }

  .row h4 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .row:hover{
    border: 1px solid ${colors.mainColor};
    transform: translate(-5px) scale(1.03);
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
