import { createGlobalStyle } from "styled-components";
import PermanentMarker from './resources/fonts/PermanentMarker-Regular.ttf';
import CoveredByYourGrace from './resources/fonts/CoveredByYourGrace.ttf';

const FontStyles = createGlobalStyle`

    @font-face {
        font-family: 'Permanent Marker';
        src: url(${PermanentMarker}) format('truetype');
    }

    @font-face {
        font-family: 'Covered By Your Grace';
        src: url(${CoveredByYourGrace}) format('truetype');
    }

`;

export default FontStyles;