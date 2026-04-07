import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #1A202C;
  padding-bottom: 40px;
`;

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin-top: 40px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 28px;
`;

export const NewTicketButton = styled.button`
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #27ae60;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1000px;
  margin-top: 20px;
  background-color: 171923;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #2D3748;
    color: #E2E8F0;
  }

  th {
    background-color: #2D3748;
    color: white;
    font-weight: bold;
  }

  tr:hover {
    background-color: #2A3342;
  }
`;

export const StatusBadge = styled.span`
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${(props) =>
    props.status === "Aberto" ? "#e74c3c" :
      props.status === "Em Andamento" ? "#f39c12" :
        "#2ecc71"
  };
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #2980b9;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: #1A202C;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  position: relative;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
  
  h3 { color: white; margin-bottom: 20px; font-size: 24px; }
  p { color: #E2E8F0; margin-bottom: 10px; font-size: 16px; line-height: 1.5; }
  strong { color: #3498db; }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  color: #E2E8F0;
  font-size: 24px;
  cursor: pointer;
  
  &:hover {
    color: #e74c3c;
  }
`;
