import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Login = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  height: 300px;
  width: 400px;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 5px;

  input {
    width: 90%;
    line-height: 45px;
    box-shadow: none;
    color: #2d3038;
    font-size: 14px;
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;

    &:focus {
      outline: none;
      border-color: #87c05e;
    }
  }

  button {
    padding: 10px;
    font-size: 18px;
    width: 104px;
    background: #008529;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  & > * {
    margin-bottom: 16px;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-right: auto;
  padding-left: 9px;
`;
