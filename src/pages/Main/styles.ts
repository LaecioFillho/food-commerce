import styled from 'styled-components'

export const Container = styled.section`

  height: 100vh;
  display: flex;

  > section{
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 0.5rem 1.875rem;


    .logo{
      width: 170px;
      height: 120px;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 8rem;

    }
  }
`
