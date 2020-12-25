import theme from '@theme'
import styled from '@emotion/styled'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Container: styled.div`
    width: 100%;
    height: 420px;
    background-color: ${theme.surface};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ImageContainer: styled.img`
    width: 100%;
    height: 300px;
    background-color: grey;
    border-radius: 20px 20px 0 0;
  `
}
  
