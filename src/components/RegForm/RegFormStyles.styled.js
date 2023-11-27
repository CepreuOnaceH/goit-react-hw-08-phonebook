import styled from 'styled-components';

export const RegFormStyles = styled.form`
  padding-top: 40px;
  padding-bottom: 20px;
  row-gap: 40px;
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
  /* label {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
  } */
  .label-container {
    width: 180px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: inline-block;
  }

  label {
    position: absolute;
    left: 8px;
    bottom: 50%;
    transition: 250ms linear;
    transform: translate(0, 50%);
    font-size: 14px;
    color: blue;
  }

  input:focus + label {
    transform: translateY(-100%);
  }

  input:not(:placeholder-shown) + label {
    transform: translateY(-100%);
  }

  input {
    border-radius: 8px;
    padding-left: 10px;
    height: 20px;
  }

  input::placeholder {
    opacity: 0;
  }

  button {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    padding: 8px 12px;
    background-color: green;
    color: white;
    transition: 250ms linear;
    column-gap: 8px;
  }

  button:hover,
  button:focus {
    background-color: blue;
  }

  button[disabled] {
    background-color: gray;
  }
`;
