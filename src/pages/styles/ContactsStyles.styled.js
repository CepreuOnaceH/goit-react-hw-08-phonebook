import styled from 'styled-components';

export const ContactsStyles = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  .container {
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 100vh;
    height: 100%;

    .page-link {
      width: 30px;
      height: 30px;
      background-color: green;
      display: block;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .pagination {
      display: flex;
      column-gap: 10px;
      justify-content: center;
      margin-top: 20px;
      list-style: none;
    }

    .active .page-link {
      background-color: blue;
      color: white;
    }
  }
`;
