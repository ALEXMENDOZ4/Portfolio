import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fontweight } from "../../styles/fontweight";
import { sizes, sizesResponsive1240, sizesResponsive470, sizesResponsive950 } from "../../styles/sizes";

export const About = styled.section`
  padding: 110px 16% 90px;
  background-color: ${colors.secondBgColor};
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .btn {
    display: inline-block;
    padding: 11px 26px;
    background-color: ${colors.mainColor};
    color: ${colors.bgColor};
    border: 2px solid ${colors.mainColor};
    border-radius: 8px;
    font-size: 15px;
    font-weight: ${fontweight[600]};
    transition: all 0.5s ease;
  }

  .btn:hover {
    background-color: transparent;
    color: ${colors.mainColor};
    box-shadow: 0 0 20px ${colors.mainColor};
  }

  span {
    color: ${colors.mainColor};
    margin-left: 0.5rem;
  }

  .about-img img{
    width: 100%;
    height: 530px;
    max-width: 530px;
    border-radius: 50%;
    object-fit: cover;
    border: 7px solid ${colors.mainColor};
    box-shadow: 0 0 20px ${colors.mainColor}
  }

  .about-text h2{
    font-size: ${sizes.h2};
    line-height: 1.3;
    margin-bottom: 20px;
  }

  .exp-area{
    margin-bottom: 50px;
  }

  .exp-area p{
    color: ${colors.textColor};
    font-weight: ${fontweight[600]};
    font-size: 19px;
    line-height: 42px;
  }

  .exp-area p span{
    color: ${colors.otherColor};
    font-size: ${sizes.p};
    font-weight: ${fontweight[400]};
    margin-left: 8px;
  }

  //media queries
  @media(max-width: 1700px){
    padding: 90px 8% 80px;
  }

  @media(max-width: 1380px){
    padding: 90px 5% 80px;
  }

  @media(max-width: 1240px){
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;

    .about-img img{
      text-align: center;
      width: 100%;
      height: 400px;
      max-width: 400px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto;
    }

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

    .about-img img{
      text-align: center;
      width: 100%;
      height: 300px;
      max-width: 300px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto;
    }
  }
`;