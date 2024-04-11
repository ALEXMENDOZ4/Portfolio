import styled from "styled-components";
import { colors } from "../../styles/colors";
import {
  sizesResponsive1240,
  sizesResponsive470,
  sizesResponsive950,
} from "../../styles/sizes";

export const Footer = styled.div`
  padding: 22px 16%;
  background-color: ${colors.secondBgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .copyright p {
    font-size: 15px;
    font-weight: 400;
    color: ${colors.otherColor};
  }

  .scroll-top {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #075fe4;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    color: ${colors.textColor};
    font-size: 20px;
  }

  //media queries
  @media (max-width: 1700px) {
    padding: 18px 8%;
  }

  @media (max-width: 1380px) {
    padding: 18px 5%;
  }

  @media (max-width: 1240px) {
    h1 {
      font-size: ${sizesResponsive1240.h1} !important;
    }

    h2 {
      font-size: ${sizesResponsive1240.h2} !important;
    }

    p {
      font-size: ${sizesResponsive1240.p} !important;
    }
  }

  @media (max-width: 950px) {
    h1 {
      font-size: ${sizesResponsive950.h1} !important;
    }
  }

  @media (max-width: 470px) {
    h1 {
      font-size: ${sizesResponsive470.h1} !important;
    }

    h2 {
      font-size: ${sizesResponsive470.h2} !important;
    }
  }

  @media (max-width: 320px) {
    .scroll-top{
        height: 45px;
        width: 54px;
    }
  }
`;