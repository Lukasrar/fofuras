import theme from '@theme'
import styled from '@emotion/styled'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Container: styled.div`
    width: 100%;
    height: 400px;
    background-color: ${theme.surface};
    border-radius: 20px;
    display: flex;
  `,
  ImageContainer: styled.div`
    width: 100%;
    height: 100%;
    background-color: grey;
    border-radius: 0 20px 20px 0;
  `
}
  
