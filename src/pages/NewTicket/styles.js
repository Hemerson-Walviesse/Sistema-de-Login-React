import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #1A202C;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  color: white;
  margin-top: 40px;
  font-size: 28px;
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin-top: 20px;
  background-color: #171923;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  color: #E2E8F0;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #4A5568;
  background-color: #2D3748;
  color: white;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #3498db;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #4A5568;
  background-color: #2D3748;
  color: white;
  font-size: 16px;
  outline: none;
  min-height: 120px;
  resize: vertical;

  &:focus {
    border-color: #3498db;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
