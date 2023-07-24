import { css } from 'styled-components';

const theme = {
  color: {
    green: {
      main: 'hsla(183, 100%, 24%, 1)',
      light: 'hsla(183, 100%, 24%, 0.2)',
      dark: 'hsla(183, 100%, 18%, 1)',
    },
    red: {
      main: 'hsla(344, 100%, 42%, 1)',
      light: 'hsla(344, 100%, 42%, 0.1)',
      dark: 'hsla(344, 100%, 32%, 1)',
      alert: '#cc0000',
    },
    gray: {
      main: 'hsla(0, 0%, 77%, 1)',
      light: 'hsla(0, 0%, 77%, 0.2)',
      dark: 'hsla(0, 0%, 60%, 1)',
    },
    blue: {
      main: '#005CBC',
    },

    black: '#222222',
  },
  font: {
    titleSize: '35px',
    subTitleSize: '30px',
  },
};

const mobileContentWrapper = css`
  box-sizing: border-box;
`;

export { theme, mobileContentWrapper };

// const FOOTER_HEIGHT = 200;
// const TOPBAR_HEIGHT = 80;

// const pcContentWrapper = css`
//   width: 100%;
//   min-height: calc(100vh - ${FOOTER_HEIGHT + TOPBAR_HEIGHT}px);
//   > div {
//     width: 1200px;
//     margin: 0 auto;
//     padding: 56px 0px;
//     box-sizing: border-box;
//   }
// `;
// const Qwe = styled.button`
//   background-color:  ${(props) => props.theme.color.red.dark};
// `

// import styled from "styled-components";
// import { contentWrapper } from "../../Style/theme";
// export const Wrap = styled.div`
//  ${contentWrapper}
// `
