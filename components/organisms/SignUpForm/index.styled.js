import styled from 'styled-components';

export const PageWrapper = styled.div`
position: relative;
`;

export const BorderDiv = styled.div`
  width: 350px;
  height: auto;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  padding: 2.5rem 0;
  border-radius: 20px;
  margin: auto auto;
  box-align: center;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
