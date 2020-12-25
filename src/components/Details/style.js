import theme from '@theme'
import styled from '@emotion/styled'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Container: styled.div`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${theme.background};
    position: fixed;
    z-index: 99
  `,
  Header: styled.div`
    width: 100%;
    height: 60px;
    border-radius: 0 0 80px 0;
    background-color: ${theme.surface};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
  `
}
  
