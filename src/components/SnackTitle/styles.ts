import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem
  margin-bottom: 3rem;

  font-size: ${({theme}) => theme.fontSize['4xl']};
  font-weigth: 500;

  &::before {
    content: '';
    background: ${({theme}) => theme.colors.white};
    width: 42px;
    heigth: 5px;
    flex-shrink: 0;
    border-radius: 4px;
  }

  @media(max-width: 720px) {
    font-size: ${({theme}) => theme.fontSize['4xl']};
    justfy-content: center;

    &::before {
      display: none;
    }
  }
`
