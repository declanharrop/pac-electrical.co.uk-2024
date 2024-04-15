'use client';

import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  :root {
    --light-grey: #dddddd;
    --grey: #bababa;
    --navy: #25466e;
    --navy-75: #25466ebf;
    --navy-50: #25466e7f;
    --navy-25: #25466e3f;
    --neon: #04D2DF;
    --neon-75: #04D2DFbf;
    --neon-50: #04D2DF7f;
    --neon-25: #04D2DF3f;
    --light-green: #61d272;
    --green: #54af61;
    --green-75: #54af61bf;    
    --green-50: #54af617f;
    --green-25: #54af613f;
    --dark-green: #214E34;
    --bs-s: 0px 0px 10px 0px #ffffff87;
    --bs-m: 0px 0px 20px 2px #ffffff87;
    --bs-l: 0px 0px 30px 5px #ffffff4d;
    --bsd-s: 0px 0px 10px 0px #00000087;
    --bsd-m: 0px 0px 20px 2px #00000087;
    --bsd-l: 0px 0px 30px 5px #0000004d;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  * {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  body {
    background: var(--cream);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Urbanist", --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--navy);
  }
  button {
    font-weight: 500;
    font-family: "Urbanist", --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: ease-in-out 0.5s;
    font-size: 1.7rem;
    padding: 14px 20px;
    border: 0;
    background: none;
    color: var(--navy);
    border: 2px solid var(--navy);
    border-radius: 50px;
    letter-spacing: 0.07rem;
    cursor: pointer;
    &:hover {
     background: var(--navy);
     color: white;
    }
  }

  .focus-button {
      color: white;
      background: var(--green);
      border: 2px solid var(--green);
      &:hover {
        background-color: var(--light-green);
        border: 2px solid var(--light-green);
      }
  }

  .secondary-button {
   background: none;
   border: 2px solid white;
   color: white;
   &:hover {
    border: 2px solid var(--green);
    background: var(--green);
   }
  }

  .light-button {
    background: none;
    color: white;
    border: 2px solid white;
    &:hover {
      background: white;
      color: var(--green);
    }
  }

  .buttons {
    display: flex;
    gap: 14px;
  }

  a {
    text-decoration: none;
    color: var(--navy);
  }

  .grid {
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill,  minmax(300px, 1fr));
  }
  
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 20px;
  }
  .divider {
    height: 2px;
    width: calc(100% - 20px);
    background: var(--light-grey);
    margin: 20px 10px;
  }
  .spacer-sm {
    position: relative;
    width: 100%;
    height: 5px;
  }
  .spacer-md {
    position: relative;
    width: 100%;
    height: 15px;
  }
  .spacer-lg {
    position: relative;
    width: 100%;
    height: 30px;
  }
  .buttons-flex {
    margin: 30px 0 0 0;
    padding: 20px 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .contractor-section {
    h2 {
      margin-bottom: 40px;
    }
    p {
      margin: 10px 0;
    }
  }
  // 
  //
  // Animation Styles
  //
  //

  .rotate-scale-down-diag-1 {
    -webkit-animation: rotate-scale-down-diag-1 0.7s linear both;
            animation: rotate-scale-down-diag-1 0.7s linear both;
  }
/**
 * ----------------------------------------
 * animation rotate-scale-down-diag-1
 * ----------------------------------------
 */
@-webkit-keyframes rotate-scale-down-diag-1 {
  0% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
            transform: scale(1) rotate3d(1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
            transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
            transform: scale(1) rotate3d(1, 1, 0, -360deg);
  }
}
@keyframes rotate-scale-down-diag-1 {
  0% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
            transform: scale(1) rotate3d(1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
            transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
            transform: scale(1) rotate3d(1, 1, 0, -360deg);
  }
}



// Forms

  form {
    margin: 50px auto 0;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 20px;
      width: 100%;
    }
    .select-container {
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
    textarea,
    select,
    input {
      padding: 10px;
      font-family: graphie, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      letter-spacing: 0.05rem;
      font-size: 1.6rem;
      border: solid 1px rgb(180, 180, 180, 1);
      border-radius: 5px;
      outline: none;
      width: 100%;
      font-weight: 500;
      color: var(--navy);
    }
    textarea {
      min-height: 140px;
    }
    input::placeholder {
      color: rgb(180, 180, 180, 1);
      font-weight: 400;
    }
    textarea::placeholder {
      color: rgb(180, 180, 180, 1);
      font-weight: 400;
    }
    input:focus {
      border: solid 1px var(--navy);
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    }
    select:focus {
      border: solid 1px var(--navy);
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    }
    textarea:focus {
      border: solid 1px var(--navy);
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    }
    input,
    select {
    }
  }
`;

export default Globalstyle;
