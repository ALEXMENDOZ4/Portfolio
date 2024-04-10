import { css, styled } from 'styled-components';
import { fontweight } from '../../styles/fontweight';
import { colors } from '../../styles/colors';
import { sizes } from '../../styles/sizes';

interface Iheader{
    $issticky: boolean;
    $icon: boolean;
}

const flexSpaceBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Header = styled.header<Iheader>`
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    padding: 40px 16%;
    ${flexSpaceBetween};
    background-color: transparent;
    transition: all .50s ease;
    background-color: ${({ $issticky }) => $issticky ? `${colors.bgColor}` : ""};
    box-shadow: ${({ $issticky }) => $issticky ? `0 .1rem 1rem rgba(0,0,0,.2)` : ""};
    padding:  ${({ $issticky }) => $issticky ? `16px 16%` : ""};

    .logo{
        font-size: 36px;
        color: ${colors.textColor};
        font-weight: ${fontweight[600]};
    }

    span{
        color: ${colors.mainColor};
        margin-left: .5rem;
    }

    .navList{
        display: flex;
    }

    .navList a{
        font-size: ${sizes.p};
        font-weight: ${fontweight[500]};
        color: ${colors.otherColor};
        margin-left: 40px;
        transition: all .50s ease;
    }

    .navList a:hover{
        color: ${colors.mainColor};
        text-shadow: 3px 3px 20px ${colors.mainColor}, -2px 1px 30px ${colors.textColor};
    }

    .contactme{
        margin: 0 1rem;
        white-space: nowrap;
    }

    .menu-icon{
        font-size: 35px;
        z-index: 10001;
        cursor: pointer;
        display: none;
    }

    .h-btn{
        display: inline-block;
        padding: 11px 26px;
        background-color: transparent;
        color: ${colors.mainColor};
        border: 2px solid ${colors.mainColor};
        border-radius: 8px;
        font-size: 15px;
        font-weight: ${fontweight[600]};
        transition: all .50s ease;
    }


    .h-btn:hover{
        background-color: ${colors.mainColor};
        color: ${colors.bgColor};
        box-shadow: 0 0 20px ${colors.mainColor};
        transform:  scale(1.1);
    } 

    //media queries
    @media(max-width: 480px){
        display: flex;
        flex-direction: column;
        white-space: nowrap;
    }

    //media queries
    @media(max-width: 1700px){
        padding: 20px 8%;
        padding: ${({$issticky}) => $issticky ? "14px 8%": ""};

        .logo{
            font-size: 28px;
        }
    }

    @media(max-width: 1380px){
        padding: 20px 5%;
        padding: ${({$issticky}) => $issticky ? "14px 5%": ""};
    }

    @media(max-width: 950px){
        .menu-icon{
            display: block;
        }

        .navList{
            position: absolute;
            top: 100%;
            right: ${({$icon}) => $icon ? "0" : "-100%"};
            width: 255px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background-color: ${colors.bgColor};
            transition: all .5s ease;
        }

        .navList a{
            display: block;
            padding: 17px;
            font-size: 22px;
        }

        .navList.active{
            right: 0;
        }
    }
`;