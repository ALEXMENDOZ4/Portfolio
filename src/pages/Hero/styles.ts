import { styled } from "styled-components";
import { colors } from "../../styles/colors";
import { sizes, sizesResponsive1240, sizesResponsive470, sizesResponsive950 } from "../../styles/sizes";
import { fontweight } from "../../styles/fontweight";
import photo from '../../images/background.png';

export const Section = styled.section`
  /* padding: 110px 0 90px 16%; */
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  /* background: url(${photo}); */
  background-position: top right;
  background-size: cover;
  width: 100%;
  height: 100vh;

  //con la configuracion de mi foto
  justify-content: space-evenly;

  img{
    height: auto;
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    border-radius: .5rem;
    border: 7px solid ${colors.mainColor};
    box-shadow: 0 0 20px ${colors.mainColor}
  }
  

  span {
    color: ${colors.mainColor};
  }

  .main-btn {
    a:nth-child(2) {
      margin-left: 0.5rem;
    }
  }

  .main-content h4 {
    font-size: 1.6rem;
  }

  .main-content h1 {
    font-size: ${sizes.h1};
    font-weight: ${fontweight[900]};
    margin: 20px 0px 20px;
    line-height: 1.2;
  }

  .main-content p {
    font-size: ${sizes.p};
    font-weight: 400;
    width: 620px;
    max-width: 100%;
    color: ${colors.otherColor};
    line-height: 30px;
    margin-bottom: 15px;
  }

  .social{
    margin-bottom: 40px;
  }

  .social a{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${colors.mainColor};
    border-radius: 50%;
    backdrop-filter: brightness(88%);
    font-size: 20px;
    margin-right: 17px;
    box-shadow: 0 0 20px transparent;
    cursor: pointer;
    transition: all .50s ease;
  }

  .social a:hover{
    transform: scale(1.1);
    box-shadow: 0 0 20px ${colors.mainColor};
  }

  .btn{
    display: inline-block;
    padding: 11px 26px;
    background-color: ${colors.mainColor};
    color: ${colors.bgColor};
    border: 2px solid ${colors.mainColor};
    border-radius: 8px;
    font-size: 15px;
    font-weight: ${fontweight[600]};
    transition: all .50s ease;
  }

  .btn:hover{
    background-color: transparent;
    color: ${colors.mainColor};
    box-shadow: 0 0 20px ${colors.mainColor};
  }

  .btn2{
    background-color: transparent;
    color: ${colors.mainColor};
    border: 2px solid ${colors.mainColor};
    margin-left: 15px;
    transition: all .50s ease;
  }

  .btn2:hover{
    background-color: ${colors.mainColor};
    color: ${colors.bgColor};
  }

  //media queries
  @media(max-width: 1700px){
    padding: 90px 8% 80px;
  }

  @media(max-width: 1380px){

    padding: 90px 5% 80px;

    .hero{
      height: 90vh;
      background-position: center;
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

    padding: 5rem;

    h1{
      font-size: ${sizesResponsive950.h1} !important;
    }

    .social{
      margin-bottom: 20px;
    }
  }

  @media(max-width: 680px){
    .main-content p {
        width: 100%;
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