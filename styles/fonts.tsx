import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Noir';
        font-style: medium;
        font-weight: 500;
        font-display: swap;
        src: url('../fonts/Noir_medium.otf');
      }

      @font-face {
        font-family: 'Noir';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../fonts/Noir_regular.ttf');
      }
      `}
  />
)

export default Fonts