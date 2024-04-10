import styled from "styled-components";
import { sizes, sizesResponsive1240, sizesResponsive470, sizesResponsive950 } from "../../styles/sizes";
import { colors } from "../../styles/colors";
import { fontweight } from "../../styles/fontweight";

export const Services = styled.section`
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

  .services-content {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    align-items: center;
    gap: 2.3rem;
    margin-top: 4.2rem;
  }

  .box {
    padding: 80px 40px 66px;
    background-color: #2d343f;
    border-radius: 28px;
    border: 1px solid transparent;
    box-shadow: 0 0 5px ${colors.mainColor};
    transition: all 0.5s ease;
    cursor: pointer;
  }

  .box img {
    margin-bottom: 20px;
  }

  .box h3 {
    font-size: 30px;
    font-weight: ${fontweight[700]};
    margin-bottom: 10px;
  }

  .box p {
    font-size: ${sizes.p};
    font-weight: 400;
    color: ${colors.otherColor};
    line-height: 30px;
    margin-bottom: 20px;
  }

  .box a {
    display: inline-block;
    font-size: 22px;
    line-height: 1.273rem;
    font-weight: ${fontweight[700]};
    padding: 7px 0;
    color: ${colors.textColor};
    border-bottom: 2px solid #5d6c83;
    transition: all 0.5s ease;
  }

  .box svg {
    vertical-align: middle;
    font-size: 25px;
    color: ${colors.mainColor};
    margin-left: 5px;
  }

  .box a:hover {
    border-bottom: 2px solid ${colors.mainColor};
  }

  .box:hover {
    border: 1px solid ${colors.mainColor};
    transform: translateY(-5px) scale(1.03);
  }

  .technologies{

    svg{
      font-size: 3rem;
      margin: 0 .3rem;
      transition: all ease-in-out .3s;
      margin-bottom: 1rem;
    }
    svg:nth-child(1){
      color: #f1c40f;
    }
    svg:nth-child(3){
      color: #d63031;
    }
    svg:nth-child(5){
      color: #0984e3;
    }
    svg:nth-child(6){
      color: #f5f6fa;
    }

    svg:hover{
      opacity: .7;
      transform: translateY(-10px) scale(1.03);
    }
  }

  //media queries
  @media(max-width: 1700px){
    padding: 90px 8% 80px;
  }

  @media(max-width: 1380px){
    padding: 90px 5% 80px;
  }
  

  @media(max-width: 1290px){
    .box{
      padding: 40px 40px 46px;
    }

    .box img{
      width: 100%;
      height: 60px;
      max-width: 60px;
    }

    .box h3{
      font-size: 21px;
    }
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