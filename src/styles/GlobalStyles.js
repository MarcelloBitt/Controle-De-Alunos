import styled, { createGlobalStyle } from "styled-components";
import * as color from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  :root{
    --toastify-icon-color-success: white;
    --toastify-icon-color-error: white;
  }

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: ${color.primaryDarkColor};
  background: ${color.primaryDarkColor}
}

html, body, #root {
  height: 100%
}

button {
  cursor: pointer;
  background: ${color.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700
}

a {
  text-decoration: none;
  color: ${color.primaryDarkColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background: ${color.errorColor};
  color: white
}

body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background: ${color.sucessColor};
  color: white;
}
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
