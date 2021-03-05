'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var semanticUiReact = require('semantic-ui-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var img$3 = "data:image/svg+xml,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 499.43 91.43'%3e %3cdefs%3e %3cstyle%3e.cls-1%7bfill:%23274247%3b%7d%3c/style%3e %3c/defs%3e %3ctitle%3eArtboard 1%3c/title%3e %3cpath class='cls-1' d='M117.76%2c36.13l3.22-4a9.19%2c9.19%2c0%2c0%2c0%2c6.78%2c3.41c2.61%2c0%2c3.91-1.19%2c3.91-2.88%2c0-2-1.45-2.72-4.75-3.83-4.1-1.46-8.21-3.37-8.21-8.51%2c0-4.37%2c3.84-7.71%2c8.75-7.78A13.87%2c13.87%2c0%2c0%2c1%2c136.62%2c16l-3.11%2c4.06c-2.26-1.88-4.25-2.68-5.94-2.68-1.88%2c0-3.26%2c1-3.26%2c2.72s1.46%2c2.41%2c4.57%2c3.64c4.71%2c1.84%2c8.43%2c3.07%2c8.43%2c8.32%2c0%2c5.94-5.18%2c8.36-9.62%2c8.36A13.58%2c13.58%2c0%2c0%2c1%2c117.76%2c36.13Z' /%3e %3cpath class='cls-1' d='M142.17%2c34.22V25.55h-2.23V21.41h2.23V15.28l5-.54v6.67h5.1v4.14h-5.1v8c0%2c1.61.5%2c2.37%2c1.65%2c2.37a5.85%2c5.85%2c0%2c0%2c0%2c2.37-.65l1.31%2c4a9.35%2c9.35%2c0%2c0%2c1-5%2c1.15C144.27%2c40.43%2c142.17%2c38.43%2c142.17%2c34.22Z' /%3e %3cpath class='cls-1' d='M173.9%2c21.41V40.12h-4.75V37.86H169a6.74%2c6.74%2c0%2c0%2c1-5.6%2c2.57c-5.17%2c0-8.93-3.84-8.93-9.62s3.8-9.71%2c8.82-9.71a6.88%2c6.88%2c0%2c0%2c1%2c5.48%2c2.42h.12V21.41Zm-4.79%2c9.43c0-3-2-5.25-4.72-5.25s-4.83%2c2-4.83%2c5.25c0%2c3%2c2%2c5.1%2c4.79%2c5.1A4.8%2c4.8%2c0%2c0%2c0%2c169.11%2c30.84Z' /%3e %3cpath class='cls-1' d='M179.68%2c34.22V25.55h-2.23V21.41h2.23V15.28l5-.54v6.67h5.1v4.14h-5.1v8c0%2c1.61.5%2c2.37%2c1.65%2c2.37a5.94%2c5.94%2c0%2c0%2c0%2c2.38-.65l1.3%2c4a9.33%2c9.33%2c0%2c0%2c1-5%2c1.15C181.79%2c40.43%2c179.68%2c38.43%2c179.68%2c34.22Z' /%3e %3cpath class='cls-1' d='M193.51%2c15.7a3.13%2c3.13%2c0%2c1%2c1%2c3.1%2c3.07A3.11%2c3.11%2c0%2c0%2c1%2c193.51%2c15.7Zm.57%2c5.71h5V40.12h-5Z' /%3e %3cpath class='cls-1' d='M203.24%2c37.71l2.45-3.49a7.18%2c7.18%2c0%2c0%2c0%2c5.18%2c2.18c1.46%2c0%2c2.3-.61%2c2.3-1.53s-1-1.3-3.41-2.07c-3.07-1-5.75-2.49-5.75-6.1%2c0-3.37%2c2.91-5.6%2c6.74-5.6a10.46%2c10.46%2c0%2c0%2c1%2c6.83%2c2.34l-2.42%2c3.69a6.69%2c6.69%2c0%2c0%2c0-4.48-2c-.81%2c0-1.84.42-1.84%2c1.42%2c0%2c.77%2c1%2c1.3%2c2.83%2c2%2c4.07%2c1.5%2c6.44%2c2.38%2c6.44%2c6.06%2c0%2c3.34-2.37%2c5.83-7.28%2c5.83A11.38%2c11.38%2c0%2c0%2c1%2c203.24%2c37.71Z' /%3e %3cpath class='cls-1' d='M222.82%2c34.22V25.55H220.6V21.41h2.22V15.28l5-.54v6.67h5.1v4.14h-5.1v8c0%2c1.61.5%2c2.37%2c1.65%2c2.37a5.85%2c5.85%2c0%2c0%2c0%2c2.38-.65l1.3%2c4a9.31%2c9.31%2c0%2c0%2c1-5%2c1.15C224.93%2c40.43%2c222.82%2c38.43%2c222.82%2c34.22Z' /%3e %3cpath class='cls-1' d='M236.65%2c15.7a3.13%2c3.13%2c0%2c1%2c1%2c3.11%2c3.07A3.11%2c3.11%2c0%2c0%2c1%2c236.65%2c15.7Zm.58%2c5.71h5V40.12h-5Z' /%3e %3cpath class='cls-1' d='M246.38%2c37.71l2.46-3.49A7.14%2c7.14%2c0%2c0%2c0%2c254%2c36.4c1.46%2c0%2c2.3-.61%2c2.3-1.53s-.95-1.3-3.41-2.07c-3.06-1-5.75-2.49-5.75-6.1%2c0-3.37%2c2.91-5.6%2c6.75-5.6a10.42%2c10.42%2c0%2c0%2c1%2c6.82%2c2.34l-2.41%2c3.69a6.73%2c6.73%2c0%2c0%2c0-4.49-2c-.8%2c0-1.84.42-1.84%2c1.42%2c0%2c.77%2c1%2c1.3%2c2.84%2c2%2c4.06%2c1.5%2c6.44%2c2.38%2c6.44%2c6.06%2c0%2c3.34-2.38%2c5.83-7.29%2c5.83A11.38%2c11.38%2c0%2c0%2c1%2c246.38%2c37.71Z' /%3e %3cpath class='cls-1' d='M273.09%2c32.68l-2.6%2c3v4.48h-5V11.9h5V29h0l6.7-7.55h5.87l-6.59%2c7.44%2c6.7%2c11.27h-5.59l-4.45-7.44Z' /%3e %3cpath class='cls-1' d='M295.43%2c37.71l2.45-3.49a7.15%2c7.15%2c0%2c0%2c0%2c5.18%2c2.18c1.45%2c0%2c2.29-.61%2c2.29-1.53s-1-1.3-3.41-2.07c-3.06-1-5.75-2.49-5.75-6.1%2c0-3.37%2c2.92-5.6%2c6.75-5.6a10.42%2c10.42%2c0%2c0%2c1%2c6.82%2c2.34l-2.41%2c3.69a6.73%2c6.73%2c0%2c0%2c0-4.49-2c-.8%2c0-1.84.42-1.84%2c1.42%2c0%2c.77%2c1%2c1.3%2c2.84%2c2%2c4.07%2c1.5%2c6.44%2c2.38%2c6.44%2c6.06%2c0%2c3.34-2.37%2c5.83-7.28%2c5.83A11.38%2c11.38%2c0%2c0%2c1%2c295.43%2c37.71Z' /%3e %3cpath class='cls-1' d='M331.68%2c32.38H318.53a4.73%2c4.73%2c0%2c0%2c0%2c4.79%2c3.6%2c5.44%2c5.44%2c0%2c0%2c0%2c4.49-2.11l3.26%2c3A10%2c10%2c0%2c0%2c1%2c323%2c40.43a9.26%2c9.26%2c0%2c0%2c1-9.62-9.7c0-5.68%2c3.94-9.63%2c9.27-9.63%2c5.49%2c0%2c9.16%2c4%2c9.16%2c9.48A8.36%2c8.36%2c0%2c0%2c1%2c331.68%2c32.38Zm-13.11-3.61h8.24a4%2c4%2c0%2c0%2c0-4-3.26A4.14%2c4.14%2c0%2c0%2c0%2c318.57%2c28.77Z' /%3e %3cpath class='cls-1' d='M354.1%2c29V40.12h-5V30.27c0-3.57-1.27-4.68-3.61-4.68-2.53%2c0-4.25%2c1.76-4.25%2c5.1v9.43h-5V21.41h5v2.42h.07a7.74%2c7.74%2c0%2c0%2c1%2c6-2.73C351.3%2c21.1%2c354.1%2c23.25%2c354.1%2c29Z' /%3e %3cpath class='cls-1' d='M359.76%2c34.22V25.55h-2.23V21.41h2.23V15.28l5-.54v6.67h5.1v4.14h-5.1v8c0%2c1.61.5%2c2.37%2c1.65%2c2.37a5.89%2c5.89%2c0%2c0%2c0%2c2.38-.65l1.3%2c4a9.33%2c9.33%2c0%2c0%2c1-5%2c1.15C361.87%2c40.43%2c359.76%2c38.43%2c359.76%2c34.22Z' /%3e %3cpath class='cls-1' d='M385.05%2c21.14v5.45c-.5%2c0-1%2c0-1.3%2c0A4.52%2c4.52%2c0%2c0%2c0%2c379%2c31.42v8.7h-5V21.41h5v2.76h0a6.9%2c6.9%2c0%2c0%2c1%2c5.68-3.07A1%2c1%2c0%2c0%2c1%2c385.05%2c21.14Z' /%3e %3cpath class='cls-1' d='M406.63%2c21.41V40.12h-4.75V37.86h-.12a6.74%2c6.74%2c0%2c0%2c1-5.6%2c2.57c-5.17%2c0-8.93-3.84-8.93-9.62s3.79-9.71%2c8.82-9.71a6.88%2c6.88%2c0%2c0%2c1%2c5.48%2c2.42h.11V21.41Zm-4.79%2c9.43c0-3-2-5.25-4.72-5.25s-4.83%2c2-4.83%2c5.25c0%2c3%2c2%2c5.1%2c4.8%2c5.1A4.79%2c4.79%2c0%2c0%2c0%2c401.84%2c30.84Z' /%3e %3cpath class='cls-1' d='M412.14%2c11.9h5V40.12h-5Z' /%3e %3cpath class='cls-1' d='M442.42%2c30.81c0%2c5.78-3.76%2c9.62-9%2c9.62a6.94%2c6.94%2c0%2c0%2c1-5.72-2.57h-.11v2.26h-4.79V11.9h5V23.52H428a7.16%2c7.16%2c0%2c0%2c1%2c5.64-2.42C438.62%2c21.1%2c442.42%2c25.13%2c442.42%2c30.81Zm-5.1%2c0c0-3.22-2.11-5.25-4.79-5.25a4.93%2c4.93%2c0%2c0%2c0-4.91%2c5.25%2c4.84%2c4.84%2c0%2c0%2c0%2c4.91%2c5.1C435.36%2c35.94%2c437.32%2c33.87%2c437.32%2c30.84Z' /%3e %3cpath class='cls-1' d='M463.15%2c21.41l-10.09%2c26.3h-5.13l3.3-8.74-7.44-17.56H449L453.6%2c33h0l4.29-11.58Z' /%3e %3cpath class='cls-1' d='M477.82%2c21.14v5.45c-.5%2c0-1%2c0-1.31%2c0a4.53%2c4.53%2c0%2c0%2c0-4.79%2c4.87v8.7h-5V21.41h5v2.76h0a6.9%2c6.9%2c0%2c0%2c1%2c5.67-3.07A1.06%2c1.06%2c0%2c0%2c1%2c477.82%2c21.14Z' /%3e %3cpath class='cls-1' d='M499.39%2c21.41V40.12h-4.75V37.86h-.12a6.73%2c6.73%2c0%2c0%2c1-5.59%2c2.57c-5.18%2c0-8.94-3.84-8.94-9.62s3.8-9.71%2c8.82-9.71a6.88%2c6.88%2c0%2c0%2c1%2c5.48%2c2.42h.12V21.41Zm-4.79%2c9.43c0-3-2-5.25-4.71-5.25s-4.84%2c2-4.84%2c5.25a4.74%2c4.74%2c0%2c0%2c0%2c4.8%2c5.1A4.79%2c4.79%2c0%2c0%2c0%2c494.6%2c30.84ZM485.93%2c15.7a4.15%2c4.15%2c0%2c0%2c1%2c8.29%2c0%2c4.15%2c4.15%2c0%2c0%2c1-8.29%2c0Zm2.69%2c0A1.39%2c1.39%2c0%2c0%2c0%2c490%2c17.08a1.44%2c1.44%2c0%2c1%2c0%2c0-2.87A1.44%2c1.44%2c0%2c0%2c0%2c488.62%2c15.66Z' /%3e %3cpath class='cls-1' d='M118.51%2c77.54l1.61-1.89a7.4%2c7.4%2c0%2c0%2c0%2c5.65%2c2.69c2.5%2c0%2c4.17-1.17%2c4.17-3.12%2c0-2.3-1.84-2.91-4.57-3.94-3-1.12-6.09-2.41-6.09-5.94%2c0-3.05%2c2.76-5.37%2c6.23-5.4A10.38%2c10.38%2c0%2c0%2c1%2c132%2c62.32l-1.52%2c2a8%2c8%2c0%2c0%2c0-4.94-2c-1.89%2c0-3.62%2c1-3.62%2c2.95s1.81%2c2.64%2c4.34%2c3.65c3.45%2c1.32%2c6.32%2c2.27%2c6.32%2c6.09s-3.3%2c5.74-6.81%2c5.74A9.83%2c9.83%2c0%2c0%2c1%2c118.51%2c77.54Z' /%3e %3cpath class='cls-1' d='M136.83%2c76.36V68.55h-1.78v-2h1.78V61.78l2.32-.26v5h4.66v2h-4.66V76c0%2c1.66.41%2c2.5%2c1.72%2c2.5a5.07%2c5.07%2c0%2c0%2c0%2c2.36-.72l.63%2c2a6.43%2c6.43%2c0%2c0%2c1-3.39.86C138%2c80.7%2c136.83%2c79.18%2c136.83%2c76.36Z' /%3e %3cpath class='cls-1' d='M160%2c66.54v14h-2.24V78.32h0a6%2c6%2c0%2c0%2c1-4.88%2c2.38A6.69%2c6.69%2c0%2c0%2c1%2c146%2c73.64c0-4.14%2c2.87-7.27%2c6.83-7.27a6.06%2c6.06%2c0%2c0%2c1%2c4.83%2c2.27h0v-2.1Zm-2.24%2c7.1a4.8%2c4.8%2c0%2c0%2c0-4.68-5.11c-2.64%2c0-4.74%2c2-4.74%2c5.11A4.63%2c4.63%2c0%2c0%2c0%2c153%2c78.57%2c4.73%2c4.73%2c0%2c0%2c0%2c157.73%2c73.64Z' /%3e %3cpath class='cls-1' d='M165%2c76.36V68.55h-1.78v-2H165V61.78l2.32-.26v5H172v2h-4.65V76c0%2c1.66.4%2c2.5%2c1.72%2c2.5a5.07%2c5.07%2c0%2c0%2c0%2c2.36-.72l.63%2c2a6.46%2c6.46%2c0%2c0%2c1-3.39.86C166.14%2c80.7%2c165%2c79.18%2c165%2c76.36Z' /%3e %3cpath class='cls-1' d='M175.1%2c62.32A1.67%2c1.67%2c0%2c1%2c1%2c176.77%2c64%2c1.64%2c1.64%2c0%2c0%2c1%2c175.1%2c62.32Zm.49%2c4.22h2.32v14h-2.32Z' /%3e %3cpath class='cls-1' d='M181.79%2c78.69%2c183%2c76.94a5.81%2c5.81%2c0%2c0%2c0%2c4.28%2c1.66c1.66%2c0%2c2.64-.86%2c2.64-1.86%2c0-1.21-1.29-1.61-3.33-2.3-2.27-.8-4.19-1.75-4.19-4.31%2c0-2.15%2c1.95-3.76%2c4.62-3.76a7.27%2c7.27%2c0%2c0%2c1%2c4.79%2c1.72l-1.2%2c1.84a5.59%2c5.59%2c0%2c0%2c0-3.71-1.43c-1.06%2c0-2.15.63-2.15%2c1.63s1.15%2c1.61%2c2.64%2c2.18c3%2c1.15%2c4.91%2c1.64%2c4.88%2c4.4%2c0%2c2.18-1.63%2c4-5%2c4A8%2c8%2c0%2c0%2c1%2c181.79%2c78.69Z' /%3e %3cpath class='cls-1' d='M196.41%2c76.36V68.55h-1.78v-2h1.78V61.78l2.32-.26v5h4.66v2h-4.66V76c0%2c1.66.41%2c2.5%2c1.73%2c2.5a5.06%2c5.06%2c0%2c0%2c0%2c2.35-.72l.63%2c2a6.43%2c6.43%2c0%2c0%2c1-3.39.86C197.56%2c80.7%2c196.41%2c79.18%2c196.41%2c76.36Z' /%3e %3cpath class='cls-1' d='M206.52%2c62.32a1.63%2c1.63%2c0%2c0%2c1%2c1.66-1.63%2c1.64%2c1.64%2c0%2c1%2c1%2c0%2c3.27A1.62%2c1.62%2c0%2c0%2c1%2c206.52%2c62.32Zm.48%2c4.22h2.33v14H207Z' /%3e %3cpath class='cls-1' d='M213.55%2c73.55a6.8%2c6.8%2c0%2c0%2c1%2c7-7.18%2c7.41%2c7.41%2c0%2c0%2c1%2c5.63%2c2.5l-1.61%2c1.41a4.91%2c4.91%2c0%2c0%2c0-3.91-1.75%2c5%2c5%2c0%2c0%2c0%2c0%2c10%2c5.46%2c5.46%2c0%2c0%2c0%2c4-1.66l1.6%2c1.43a7.78%2c7.78%2c0%2c0%2c1-5.77%2c2.36C216.45%2c80.7%2c213.55%2c77.8%2c213.55%2c73.55Z' /%3e %3cpath class='cls-1' d='M228.63%2c78.69l1.2-1.75a5.81%2c5.81%2c0%2c0%2c0%2c4.28%2c1.66c1.66%2c0%2c2.64-.86%2c2.64-1.86%2c0-1.21-1.29-1.61-3.33-2.3-2.27-.8-4.19-1.75-4.19-4.31%2c0-2.15%2c2-3.76%2c4.62-3.76a7.28%2c7.28%2c0%2c0%2c1%2c4.8%2c1.72l-1.21%2c1.84a5.57%2c5.57%2c0%2c0%2c0-3.7-1.43c-1.07%2c0-2.16.63-2.16%2c1.63s1.15%2c1.61%2c2.64%2c2.18c3%2c1.15%2c4.91%2c1.64%2c4.89%2c4.4%2c0%2c2.18-1.64%2c4-5%2c4A8%2c8%2c0%2c0%2c1%2c228.63%2c78.69Z' /%3e %3cpath class='cls-1' d='M268.16%2c60.14V80.53h-2.55L254.18%2c64.45h-.06V80.53h-2.5V60.14h2.47l11.52%2c16.25h.06V60.14Z' /%3e %3cpath class='cls-1' d='M272.53%2c73.55a7.21%2c7.21%2c0%2c1%2c1%2c7.24%2c7.15A7%2c7%2c0%2c0%2c1%2c272.53%2c73.55Zm12.06%2c0a4.86%2c4.86%2c0%2c1%2c0-4.82%2c5A4.77%2c4.77%2c0%2c0%2c0%2c284.59%2c73.55Z' /%3e %3cpath class='cls-1' d='M298.46%2c66.4V69c-.32%2c0-.69%2c0-.92%2c0-2.64%2c0-4.25%2c2-4.25%2c4.85v6.75H291v-14h2.33V69h0a5.3%2c5.3%2c0%2c0%2c1%2c4.56-2.64A3.27%2c3.27%2c0%2c0%2c1%2c298.46%2c66.4Z' /%3e %3cpath class='cls-1' d='M320.65%2c66.54l-4.85%2c14h-2.18l-3.16-10.2h0l-3.19%2c10.2h-2.12l-4.85-14h2.35L306.18%2c77h.06l3.19-10.45h2L314.68%2c77h.06l3.56-10.45Z' /%3e %3cpath class='cls-1' d='M336.38%2c66.54v14h-2.24V78.32h0a6%2c6%2c0%2c0%2c1-4.88%2c2.38%2c6.69%2c6.69%2c0%2c0%2c1-6.87-7.06c0-4.14%2c2.88-7.27%2c6.84-7.27A6.06%2c6.06%2c0%2c0%2c1%2c334%2c68.64h0v-2.1Zm-2.24%2c7.1a4.79%2c4.79%2c0%2c0%2c0-4.68-5.11c-2.64%2c0-4.73%2c2-4.73%2c5.11a4.62%2c4.62%2c0%2c0%2c0%2c4.71%2c4.93A4.73%2c4.73%2c0%2c0%2c0%2c334.14%2c73.64Z' /%3e %3cpath class='cls-1' d='M353.33%2c66.54l-7.9%2c19.67H343l2.5-6.26-5.91-13.41h2.5l4.53%2c10.66h.06l4.22-10.66Z' /%3e %3cpath class='cls-1' d='M50.14%2c53.47%2c88.92%2c31.08A45.63%2c45.63%2c0%2c0%2c0%2c1.17%2c55.77L44.12%2c31Z' /%3e %3cpath class='cls-1' d='M47.29%2c60.34l-6-22.46L2.43%2c60.27A45.63%2c45.63%2c0%2c0%2c0%2c90.18%2c35.58Z' /%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 499.43 91.43'%3e %3cdefs%3e %3cstyle%3e.cls-1%7bfill:white%3b%7d%3c/style%3e %3c/defs%3e %3ctitle%3eArtboard 1%3c/title%3e %3cpath class='cls-1' d='M117.76%2c36.13l3.22-4a9.19%2c9.19%2c0%2c0%2c0%2c6.78%2c3.41c2.61%2c0%2c3.91-1.19%2c3.91-2.88%2c0-2-1.45-2.72-4.75-3.83-4.1-1.46-8.21-3.37-8.21-8.51%2c0-4.37%2c3.84-7.71%2c8.75-7.78A13.87%2c13.87%2c0%2c0%2c1%2c136.62%2c16l-3.11%2c4.06c-2.26-1.88-4.25-2.68-5.94-2.68-1.88%2c0-3.26%2c1-3.26%2c2.72s1.46%2c2.41%2c4.57%2c3.64c4.71%2c1.84%2c8.43%2c3.07%2c8.43%2c8.32%2c0%2c5.94-5.18%2c8.36-9.62%2c8.36A13.58%2c13.58%2c0%2c0%2c1%2c117.76%2c36.13Z' /%3e %3cpath class='cls-1' d='M142.17%2c34.22V25.55h-2.23V21.41h2.23V15.28l5-.54v6.67h5.1v4.14h-5.1v8c0%2c1.61.5%2c2.37%2c1.65%2c2.37a5.85%2c5.85%2c0%2c0%2c0%2c2.37-.65l1.31%2c4a9.35%2c9.35%2c0%2c0%2c1-5%2c1.15C144.27%2c40.43%2c142.17%2c38.43%2c142.17%2c34.22Z' /%3e %3cpath class='cls-1' d='M173.9%2c21.41V40.12h-4.75V37.86H169a6.74%2c6.74%2c0%2c0%2c1-5.6%2c2.57c-5.17%2c0-8.93-3.84-8.93-9.62s3.8-9.71%2c8.82-9.71a6.88%2c6.88%2c0%2c0%2c1%2c5.48%2c2.42h.12V21.41Zm-4.79%2c9.43c0-3-2-5.25-4.72-5.25s-4.83%2c2-4.83%2c5.25c0%2c3%2c2%2c5.1%2c4.79%2c5.1A4.8%2c4.8%2c0%2c0%2c0%2c169.11%2c30.84Z' /%3e %3cpath class='cls-1' d='M179.68%2c34.22V25.55h-2.23V21.41h2.23V15.28l5-.54v6.67h5.1v4.14h-5.1v8c0%2c1.61.5%2c2.37%2c1.65%2c2.37a5.94%2c5.94%2c0%2c0%2c0%2c2.38-.65l1.3%2c4a9.33%2c9.33%2c0%2c0%2c1-5%2c1.15C181.79%2c40.43%2c179.68%2c38.43%2c179.68%2c34.22Z' /%3e %3cpath class='cls-1' d='M193.51%2c15.7a3.13%2c3.13%2c0%2c1%2c1%2c3.1%2c3.07A3.11%2c3.11%2c0%2c0%2c1%2c193.51%2c15.7Zm.57%2c5.71h5V40.12h-5Z' /%3e %3cpath class='cls-1' d='M203.24%2c37.71l2.45-3.49a7.18%2c7.18%2c0%2c0%2c0%2c5.18%2c2.18c1.46%2c0%2c2.3-.61%2c2.3-1.53s-1-1.3-3.41-2.07c-3.07-1-5.75-2.49-5.75-6.1%2c0-3.37%2c2.91-5.6%2c6.74-5.6a10.46%2c10.46%2c0%2c0%2c1%2c6.83%2c2.34l-2.42%2c3.69a6.69%2c6.69%2c0%2c0%2c0-4.48-2c-.81%2c0-1.84.42-1.84%2c1.42%2c0%2c.77%2c1%2c1.3%2c2.83%2c2%2c4.07%2c1.5%2c6.44%2c2.38%2c6.44%2c6.06%2c0%2c3.34-2.37%2c5.83-7.28%2c5.83A11.38%2c11.38%2c0%2c0%2c1%2c203.24%2c37.71Z' /%3e %3cpath class='cls-1' d='M222.82%2c34.22V25.55H220.6V21.41h2.22V15.28l5-.54v6.67h5.1v4.14h-5.1v8c0%2c1.61.5%2c2.37%2c1.65%2c2.37a5.85%2c5.85%2c0%2c0%2c0%2c2.38-.65l1.3%2c4a9.31%2c9.31%2c0%2c0%2c1-5%2c1.15C224.93%2c40.43%2c222.82%2c38.43%2c222.82%2c34.22Z' /%3e %3cpath class='cls-1' d='M236.65%2c15.7a3.13%2c3.13%2c0%2c1%2c1%2c3.11%2c3.07A3.11%2c3.11%2c0%2c0%2c1%2c236.65%2c15.7Zm.58%2c5.71h5V40.12h-5Z' /%3e %3cpath class='cls-1' d='M246.38%2c37.71l2.46-3.49A7.14%2c7.14%2c0%2c0%2c0%2c254%2c36.4c1.46%2c0%2c2.3-.61%2c2.3-1.53s-.95-1.3-3.41-2.07c-3.06-1-5.75-2.49-5.75-6.1%2c0-3.37%2c2.91-5.6%2c6.75-5.6a10.42%2c10.42%2c0%2c0%2c1%2c6.82%2c2.34l-2.41%2c3.69a6.73%2c6.73%2c0%2c0%2c0-4.49-2c-.8%2c0-1.84.42-1.84%2c1.42%2c0%2c.77%2c1%2c1.3%2c2.84%2c2%2c4.06%2c1.5%2c6.44%2c2.38%2c6.44%2c6.06%2c0%2c3.34-2.38%2c5.83-7.29%2c5.83A11.38%2c11.38%2c0%2c0%2c1%2c246.38%2c37.71Z' /%3e %3cpath class='cls-1' d='M273.09%2c32.68l-2.6%2c3v4.48h-5V11.9h5V29h0l6.7-7.55h5.87l-6.59%2c7.44%2c6.7%2c11.27h-5.59l-4.45-7.44Z' /%3e %3cpath class='cls-1' d='M295.43%2c37.71l2.45-3.49a7.15%2c7.15%2c0%2c0%2c0%2c5.18%2c2.18c1.45%2c0%2c2.29-.61%2c2.29-1.53s-1-1.3-3.41-2.07c-3.06-1-5.75-2.49-5.75-6.1%2c0-3.37%2c2.92-5.6%2c6.75-5.6a10.42%2c10.42%2c0%2c0%2c1%2c6.82%2c2.34l-2.41%2c3.69a6.73%2c6.73%2c0%2c0%2c0-4.49-2c-.8%2c0-1.84.42-1.84%2c1.42%2c0%2c.77%2c1%2c1.3%2c2.84%2c2%2c4.07%2c1.5%2c6.44%2c2.38%2c6.44%2c6.06%2c0%2c3.34-2.37%2c5.83-7.28%2c5.83A11.38%2c11.38%2c0%2c0%2c1%2c295.43%2c37.71Z' /%3e %3cpath class='cls-1' d='M331.68%2c32.38H318.53a4.73%2c4.73%2c0%2c0%2c0%2c4.79%2c3.6%2c5.44%2c5.44%2c0%2c0%2c0%2c4.49-2.11l3.26%2c3A10%2c10%2c0%2c0%2c1%2c323%2c40.43a9.26%2c9.26%2c0%2c0%2c1-9.62-9.7c0-5.68%2c3.94-9.63%2c9.27-9.63%2c5.49%2c0%2c9.16%2c4%2c9.16%2c9.48A8.36%2c8.36%2c0%2c0%2c1%2c331.68%2c32.38Zm-13.11-3.61h8.24a4%2c4%2c0%2c0%2c0-4-3.26A4.14%2c4.14%2c0%2c0%2c0%2c318.57%2c28.77Z' /%3e %3cpath class='cls-1' d='M354.1%2c29V40.12h-5V30.27c0-3.57-1.27-4.68-3.61-4.68-2.53%2c0-4.25%2c1.76-4.25%2c5.1v9.43h-5V21.41h5v2.42h.07a7.74%2c7.74%2c0%2c0%2c1%2c6-2.73C351.3%2c21.1%2c354.1%2c23.25%2c354.1%2c29Z' /%3e %3cpath class='cls-1' d='M359.76%2c34.22V25.55h-2.23V21.41h2.23V15.28l5-.54v6.67h5.1v4.14h-5.1v8c0%2c1.61.5%2c2.37%2c1.65%2c2.37a5.89%2c5.89%2c0%2c0%2c0%2c2.38-.65l1.3%2c4a9.33%2c9.33%2c0%2c0%2c1-5%2c1.15C361.87%2c40.43%2c359.76%2c38.43%2c359.76%2c34.22Z' /%3e %3cpath class='cls-1' d='M385.05%2c21.14v5.45c-.5%2c0-1%2c0-1.3%2c0A4.52%2c4.52%2c0%2c0%2c0%2c379%2c31.42v8.7h-5V21.41h5v2.76h0a6.9%2c6.9%2c0%2c0%2c1%2c5.68-3.07A1%2c1%2c0%2c0%2c1%2c385.05%2c21.14Z' /%3e %3cpath class='cls-1' d='M406.63%2c21.41V40.12h-4.75V37.86h-.12a6.74%2c6.74%2c0%2c0%2c1-5.6%2c2.57c-5.17%2c0-8.93-3.84-8.93-9.62s3.79-9.71%2c8.82-9.71a6.88%2c6.88%2c0%2c0%2c1%2c5.48%2c2.42h.11V21.41Zm-4.79%2c9.43c0-3-2-5.25-4.72-5.25s-4.83%2c2-4.83%2c5.25c0%2c3%2c2%2c5.1%2c4.8%2c5.1A4.79%2c4.79%2c0%2c0%2c0%2c401.84%2c30.84Z' /%3e %3cpath class='cls-1' d='M412.14%2c11.9h5V40.12h-5Z' /%3e %3cpath class='cls-1' d='M442.42%2c30.81c0%2c5.78-3.76%2c9.62-9%2c9.62a6.94%2c6.94%2c0%2c0%2c1-5.72-2.57h-.11v2.26h-4.79V11.9h5V23.52H428a7.16%2c7.16%2c0%2c0%2c1%2c5.64-2.42C438.62%2c21.1%2c442.42%2c25.13%2c442.42%2c30.81Zm-5.1%2c0c0-3.22-2.11-5.25-4.79-5.25a4.93%2c4.93%2c0%2c0%2c0-4.91%2c5.25%2c4.84%2c4.84%2c0%2c0%2c0%2c4.91%2c5.1C435.36%2c35.94%2c437.32%2c33.87%2c437.32%2c30.84Z' /%3e %3cpath class='cls-1' d='M463.15%2c21.41l-10.09%2c26.3h-5.13l3.3-8.74-7.44-17.56H449L453.6%2c33h0l4.29-11.58Z' /%3e %3cpath class='cls-1' d='M477.82%2c21.14v5.45c-.5%2c0-1%2c0-1.31%2c0a4.53%2c4.53%2c0%2c0%2c0-4.79%2c4.87v8.7h-5V21.41h5v2.76h0a6.9%2c6.9%2c0%2c0%2c1%2c5.67-3.07A1.06%2c1.06%2c0%2c0%2c1%2c477.82%2c21.14Z' /%3e %3cpath class='cls-1' d='M499.39%2c21.41V40.12h-4.75V37.86h-.12a6.73%2c6.73%2c0%2c0%2c1-5.59%2c2.57c-5.18%2c0-8.94-3.84-8.94-9.62s3.8-9.71%2c8.82-9.71a6.88%2c6.88%2c0%2c0%2c1%2c5.48%2c2.42h.12V21.41Zm-4.79%2c9.43c0-3-2-5.25-4.71-5.25s-4.84%2c2-4.84%2c5.25a4.74%2c4.74%2c0%2c0%2c0%2c4.8%2c5.1A4.79%2c4.79%2c0%2c0%2c0%2c494.6%2c30.84ZM485.93%2c15.7a4.15%2c4.15%2c0%2c0%2c1%2c8.29%2c0%2c4.15%2c4.15%2c0%2c0%2c1-8.29%2c0Zm2.69%2c0A1.39%2c1.39%2c0%2c0%2c0%2c490%2c17.08a1.44%2c1.44%2c0%2c1%2c0%2c0-2.87A1.44%2c1.44%2c0%2c0%2c0%2c488.62%2c15.66Z' /%3e %3cpath class='cls-1' d='M118.51%2c77.54l1.61-1.89a7.4%2c7.4%2c0%2c0%2c0%2c5.65%2c2.69c2.5%2c0%2c4.17-1.17%2c4.17-3.12%2c0-2.3-1.84-2.91-4.57-3.94-3-1.12-6.09-2.41-6.09-5.94%2c0-3.05%2c2.76-5.37%2c6.23-5.4A10.38%2c10.38%2c0%2c0%2c1%2c132%2c62.32l-1.52%2c2a8%2c8%2c0%2c0%2c0-4.94-2c-1.89%2c0-3.62%2c1-3.62%2c2.95s1.81%2c2.64%2c4.34%2c3.65c3.45%2c1.32%2c6.32%2c2.27%2c6.32%2c6.09s-3.3%2c5.74-6.81%2c5.74A9.83%2c9.83%2c0%2c0%2c1%2c118.51%2c77.54Z' /%3e %3cpath class='cls-1' d='M136.83%2c76.36V68.55h-1.78v-2h1.78V61.78l2.32-.26v5h4.66v2h-4.66V76c0%2c1.66.41%2c2.5%2c1.72%2c2.5a5.07%2c5.07%2c0%2c0%2c0%2c2.36-.72l.63%2c2a6.43%2c6.43%2c0%2c0%2c1-3.39.86C138%2c80.7%2c136.83%2c79.18%2c136.83%2c76.36Z' /%3e %3cpath class='cls-1' d='M160%2c66.54v14h-2.24V78.32h0a6%2c6%2c0%2c0%2c1-4.88%2c2.38A6.69%2c6.69%2c0%2c0%2c1%2c146%2c73.64c0-4.14%2c2.87-7.27%2c6.83-7.27a6.06%2c6.06%2c0%2c0%2c1%2c4.83%2c2.27h0v-2.1Zm-2.24%2c7.1a4.8%2c4.8%2c0%2c0%2c0-4.68-5.11c-2.64%2c0-4.74%2c2-4.74%2c5.11A4.63%2c4.63%2c0%2c0%2c0%2c153%2c78.57%2c4.73%2c4.73%2c0%2c0%2c0%2c157.73%2c73.64Z' /%3e %3cpath class='cls-1' d='M165%2c76.36V68.55h-1.78v-2H165V61.78l2.32-.26v5H172v2h-4.65V76c0%2c1.66.4%2c2.5%2c1.72%2c2.5a5.07%2c5.07%2c0%2c0%2c0%2c2.36-.72l.63%2c2a6.46%2c6.46%2c0%2c0%2c1-3.39.86C166.14%2c80.7%2c165%2c79.18%2c165%2c76.36Z' /%3e %3cpath class='cls-1' d='M175.1%2c62.32A1.67%2c1.67%2c0%2c1%2c1%2c176.77%2c64%2c1.64%2c1.64%2c0%2c0%2c1%2c175.1%2c62.32Zm.49%2c4.22h2.32v14h-2.32Z' /%3e %3cpath class='cls-1' d='M181.79%2c78.69%2c183%2c76.94a5.81%2c5.81%2c0%2c0%2c0%2c4.28%2c1.66c1.66%2c0%2c2.64-.86%2c2.64-1.86%2c0-1.21-1.29-1.61-3.33-2.3-2.27-.8-4.19-1.75-4.19-4.31%2c0-2.15%2c1.95-3.76%2c4.62-3.76a7.27%2c7.27%2c0%2c0%2c1%2c4.79%2c1.72l-1.2%2c1.84a5.59%2c5.59%2c0%2c0%2c0-3.71-1.43c-1.06%2c0-2.15.63-2.15%2c1.63s1.15%2c1.61%2c2.64%2c2.18c3%2c1.15%2c4.91%2c1.64%2c4.88%2c4.4%2c0%2c2.18-1.63%2c4-5%2c4A8%2c8%2c0%2c0%2c1%2c181.79%2c78.69Z' /%3e %3cpath class='cls-1' d='M196.41%2c76.36V68.55h-1.78v-2h1.78V61.78l2.32-.26v5h4.66v2h-4.66V76c0%2c1.66.41%2c2.5%2c1.73%2c2.5a5.06%2c5.06%2c0%2c0%2c0%2c2.35-.72l.63%2c2a6.43%2c6.43%2c0%2c0%2c1-3.39.86C197.56%2c80.7%2c196.41%2c79.18%2c196.41%2c76.36Z' /%3e %3cpath class='cls-1' d='M206.52%2c62.32a1.63%2c1.63%2c0%2c0%2c1%2c1.66-1.63%2c1.64%2c1.64%2c0%2c1%2c1%2c0%2c3.27A1.62%2c1.62%2c0%2c0%2c1%2c206.52%2c62.32Zm.48%2c4.22h2.33v14H207Z' /%3e %3cpath class='cls-1' d='M213.55%2c73.55a6.8%2c6.8%2c0%2c0%2c1%2c7-7.18%2c7.41%2c7.41%2c0%2c0%2c1%2c5.63%2c2.5l-1.61%2c1.41a4.91%2c4.91%2c0%2c0%2c0-3.91-1.75%2c5%2c5%2c0%2c0%2c0%2c0%2c10%2c5.46%2c5.46%2c0%2c0%2c0%2c4-1.66l1.6%2c1.43a7.78%2c7.78%2c0%2c0%2c1-5.77%2c2.36C216.45%2c80.7%2c213.55%2c77.8%2c213.55%2c73.55Z' /%3e %3cpath class='cls-1' d='M228.63%2c78.69l1.2-1.75a5.81%2c5.81%2c0%2c0%2c0%2c4.28%2c1.66c1.66%2c0%2c2.64-.86%2c2.64-1.86%2c0-1.21-1.29-1.61-3.33-2.3-2.27-.8-4.19-1.75-4.19-4.31%2c0-2.15%2c2-3.76%2c4.62-3.76a7.28%2c7.28%2c0%2c0%2c1%2c4.8%2c1.72l-1.21%2c1.84a5.57%2c5.57%2c0%2c0%2c0-3.7-1.43c-1.07%2c0-2.16.63-2.16%2c1.63s1.15%2c1.61%2c2.64%2c2.18c3%2c1.15%2c4.91%2c1.64%2c4.89%2c4.4%2c0%2c2.18-1.64%2c4-5%2c4A8%2c8%2c0%2c0%2c1%2c228.63%2c78.69Z' /%3e %3cpath class='cls-1' d='M268.16%2c60.14V80.53h-2.55L254.18%2c64.45h-.06V80.53h-2.5V60.14h2.47l11.52%2c16.25h.06V60.14Z' /%3e %3cpath class='cls-1' d='M272.53%2c73.55a7.21%2c7.21%2c0%2c1%2c1%2c7.24%2c7.15A7%2c7%2c0%2c0%2c1%2c272.53%2c73.55Zm12.06%2c0a4.86%2c4.86%2c0%2c1%2c0-4.82%2c5A4.77%2c4.77%2c0%2c0%2c0%2c284.59%2c73.55Z' /%3e %3cpath class='cls-1' d='M298.46%2c66.4V69c-.32%2c0-.69%2c0-.92%2c0-2.64%2c0-4.25%2c2-4.25%2c4.85v6.75H291v-14h2.33V69h0a5.3%2c5.3%2c0%2c0%2c1%2c4.56-2.64A3.27%2c3.27%2c0%2c0%2c1%2c298.46%2c66.4Z' /%3e %3cpath class='cls-1' d='M320.65%2c66.54l-4.85%2c14h-2.18l-3.16-10.2h0l-3.19%2c10.2h-2.12l-4.85-14h2.35L306.18%2c77h.06l3.19-10.45h2L314.68%2c77h.06l3.56-10.45Z' /%3e %3cpath class='cls-1' d='M336.38%2c66.54v14h-2.24V78.32h0a6%2c6%2c0%2c0%2c1-4.88%2c2.38%2c6.69%2c6.69%2c0%2c0%2c1-6.87-7.06c0-4.14%2c2.88-7.27%2c6.84-7.27A6.06%2c6.06%2c0%2c0%2c1%2c334%2c68.64h0v-2.1Zm-2.24%2c7.1a4.79%2c4.79%2c0%2c0%2c0-4.68-5.11c-2.64%2c0-4.73%2c2-4.73%2c5.11a4.62%2c4.62%2c0%2c0%2c0%2c4.71%2c4.93A4.73%2c4.73%2c0%2c0%2c0%2c334.14%2c73.64Z' /%3e %3cpath class='cls-1' d='M353.33%2c66.54l-7.9%2c19.67H343l2.5-6.26-5.91-13.41h2.5l4.53%2c10.66h.06l4.22-10.66Z' /%3e %3cpath class='cls-1' d='M50.14%2c53.47%2c88.92%2c31.08A45.63%2c45.63%2c0%2c0%2c0%2c1.17%2c55.77L44.12%2c31Z' /%3e %3cpath class='cls-1' d='M47.29%2c60.34l-6-22.46L2.43%2c60.27A45.63%2c45.63%2c0%2c0%2c0%2c90.18%2c35.58Z' /%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91.43 91.43'%3e %3cdefs%3e %3cstyle%3e.cls-1%7bfill:%23274247%3b%7d%3c/style%3e %3c/defs%3e %3ctitle%3eArtboard 1%3c/title%3e %3cpath class='cls-1' d='M50.14%2c53.47%2c88.92%2c31.08A45.63%2c45.63%2c0%2c0%2c0%2c1.17%2c55.77L44.12%2c31Z' /%3e %3cpath class='cls-1' d='M47.29%2c60.34l-6-22.46L2.43%2c60.27A45.63%2c45.63%2c0%2c0%2c0%2c90.18%2c35.58Z' /%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 91.43 91.43'%3e %3cdefs%3e %3cstyle%3e.cls-1%7bfill:white%3b%7d%3c/style%3e %3c/defs%3e %3ctitle%3eArtboard 1%3c/title%3e %3cpath class='cls-1' d='M50.14%2c53.47%2c88.92%2c31.08A45.63%2c45.63%2c0%2c0%2c0%2c1.17%2c55.77L44.12%2c31Z' /%3e %3cpath class='cls-1' d='M47.29%2c60.34l-6-22.46L2.43%2c60.27A45.63%2c45.63%2c0%2c0%2c0%2c90.18%2c35.58Z' /%3e%3c/svg%3e";

const GSIM = {
  LOCALIZED: {
    CODE: 'languageCode',
    TEXT: 'languageText'
  }
};
const getLocalizedGsimObjectText = (languageCode, object) => {
  let localizedText = '-';

  if (Array.isArray(object)) {
    if (object.length !== 0) {
      const localized = object.find(innerObjects => innerObjects[GSIM.LOCALIZED.CODE] === languageCode);

      if (localized !== undefined) {
        localizedText = localized[GSIM.LOCALIZED.TEXT];
      } else {
        if (object[0][GSIM.LOCALIZED.TEXT] !== undefined) {
          localizedText = object[0][GSIM.LOCALIZED.TEXT];
        }
      }
    }
  }

  return localizedText;
};
const getNestedObject = (initialObject, pathToNestedObject) => pathToNestedObject.reduce((object, key) => object && object[key] !== 'undefined' ? object[key] : undefined, initialObject);

const truncateString = (string, length = 32) => {
  if (typeof string === 'string') {
    return string.length > length ? string.substring(0, length) + '...' : string;
  } else {
    return '...';
  }
};

const ERROR = {
  en: 'Error',
  nb: 'Problem'
};
const COMMON_API = {
  ERROR_PATH: ['response', 'data'],
  ERROR_STATUS_PATH: ['response', 'statusText']
};

function ErrorMessage({
  error,
  title,
  language = 'nb'
}) {
  const resolveError = getNestedObject(error, COMMON_API.ERROR_PATH);
  const alternateResolveError = getNestedObject(error, COMMON_API.ERROR_STATUS_PATH);
  return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Message, {
    error: true,
    header: title ? title : ERROR[language],
    content: resolveError === undefined ? alternateResolveError === undefined ? error.toString() : alternateResolveError : resolveError
  });
}

const SSB_COLORS = {
  BACKGROUND: '#f0f8f9',
  BLUE: '#3396D2',
  GREEN: '#00824D',
  GREY: '#909090',
  PURPLE: '#9272FC',
  RED: '#ED5935',
  YELLOW: '#C78800'
};
const SSB_STYLE = {
  background: SSB_COLORS.BACKGROUND
};

function InfoText({
  text
}) {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Icon, {
    name: "info circle",
    style: {
      color: SSB_COLORS.BLUE
    }
  }), text);
}

function InfoPopup({
  text,
  position,
  trigger
}) {
  return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Popup, {
    basic: true,
    flowing: true,
    size: "large",
    position: position,
    trigger: trigger
  }, /*#__PURE__*/React__default['default'].createElement(InfoText, {
    text: text
  }));
}

const APP_VERSION = {
  en: 'App version',
  nb: 'App versjon'
};
const SCROLL_TO_TOP = {
  en: 'Scroll to top',
  nb: 'Gå til toppen'
};
const SSB = {
  en: 'Statistics Norway',
  nb: 'Statistisk sentralbyrå'
};

function SimpleFooter({
  appVersion,
  language = 'nb',
  sourceUrl,
  showScrollToTop = true
}) {
  return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Container, {
    fluid: true
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Segment, {
    basic: true
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Divider, null), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Grid, {
    columns: "equal",
    style: {
      paddingLeft: '1rem',
      paddingRight: '1rem'
    }
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Grid.Column, {
    verticalAlign: "middle"
  }, showScrollToTop && /*#__PURE__*/React__default['default'].createElement(InfoPopup, {
    position: "right center",
    text: SCROLL_TO_TOP[language],
    trigger: /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Icon, {
      link: true,
      size: "large",
      name: "arrow alternate circle up",
      style: {
        color: SSB_COLORS.BLUE
      },
      "data-testid": "dapla-js-utilities-scroll-to-top-button",
      onClick: () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  })), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Grid.Column, {
    textAlign: "center",
    verticalAlign: "middle"
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.List, {
    horizontal: true,
    divided: true,
    link: true,
    size: "small",
    style: {
      marginTop: '3rem',
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.List.Item, {
    as: "a",
    href: `${sourceUrl}`,
    icon: {
      fitted: true,
      name: 'github'
    }
  }), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.List.Item, {
    content: `${APP_VERSION[language]}: ${appVersion}`
  }))), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Grid.Column, {
    textAlign: "right",
    verticalAlign: "middle"
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.List, {
    horizontal: true,
    link: true,
    size: "small",
    style: {
      marginTop: '3rem',
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.List.Item, {
    content: `${SSB[language]} © ${new Date().getFullYear()}`
  }))))));
}

const LANGUAGE = {
  ENGLISH: {
    en: 'English',
    nb: 'English'
  },
  LANGUAGE: {
    en: 'Language',
    nb: 'Språk'
  },
  LANGUAGES: {
    ENGLISH: {
      languageCode: 'en'
    },
    NORWEGIAN: {
      languageCode: 'nb'
    }
  },
  LANGUAGE_CHOICE: {
    en: 'English',
    nb: 'Norsk'
  },
  LOCALE: {
    en: 'en-GB',
    nb: 'nb-NO'
  },
  NORWEGIAN: {
    en: 'Norsk',
    nb: 'Norsk'
  }
};

exports.ErrorMessage = ErrorMessage;
exports.InfoPopup = InfoPopup;
exports.InfoText = InfoText;
exports.LANGUAGE = LANGUAGE;
exports.SSB_COLORS = SSB_COLORS;
exports.SSB_STYLE = SSB_STYLE;
exports.SimpleFooter = SimpleFooter;
exports.getLocalizedGsimObjectText = getLocalizedGsimObjectText;
exports.getNestedObject = getNestedObject;
exports.ssb_logo_no_text_rgb = img$1;
exports.ssb_logo_no_text_white = img;
exports.ssb_logo_rgb = img$3;
exports.ssb_logo_white = img$2;
exports.truncateString = truncateString;
