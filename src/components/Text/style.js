import styled from '@emotion/styled'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Text: styled.p`
    font-size: 15px;

    @media all and (max-width:992px){	
        font-size: 18px;
      }
  `,
  Title: styled.h1`
    font-size: 32px;

    @media all and (max-width:992px){	
        font-size: 20px;
      }
  `
}
  
