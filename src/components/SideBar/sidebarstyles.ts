import styled, {css} from "styled-components";

interface ContainerProps{
  isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`

  ${({isMenuOpen}) => {
    return isMenuOpen ? css` width: 16.3rem;` : css` width: 7.75rem;`
  }}

  background-color: ${({theme})=> theme.colors.gray700};
  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;

  button{
    background: none;
    width: 100%;
    border: none;
  }

  nav{
    flex: 1;
    height: 100%;
    width: 100%;

    ul{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li{
      a{
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        padding-top: 20px;

        svg{
          fill: ${({theme}) => theme.colors.white};
          width: 4rem;
          height: 4rem;
          transition: 0.3s;
        }

        span{
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &.active{
          &::after{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({theme}) => theme.colors.yellow};
            width: 5px;
            height: calc(100% + 10px);
            border-radius: 0px 5px 5px 0px;
          }

          svg{
            fill: ${({theme}) => theme.colors.yellow};
          }

          span{
            color: ${({theme}) => theme.colors.yellow};
          }
        }
      }
    }
  }

  //Responsividade em varias telas

  @media (max-width: 720px){
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;

    button{
      display: none;
    }

    nav{
      height: 100%;

      ul{
        align-items: center;
      }

      li{
        display: flex;
        flex-direction: row;

        a{
          flex-direction: column;
          padding: 0px 10px;

          svg{
            width: 3.25rem;
            height: 3.25rem;
          }

          span{
            display: none;
          }

          &.active{
            &::after{
              display: none;
            }
          }
        }
      }
    }
  }
`
