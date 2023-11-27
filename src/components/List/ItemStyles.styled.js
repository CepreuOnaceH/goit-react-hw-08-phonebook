import styled from 'styled-components';

export const ItemStyles = styled.li`
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  padding: 15px 120px;
  justify-content: space-between;
  background-color: rgb(220 229 226 / 30%);

  .buttons-list {
    display: flex;
    column-gap: 16px;
    list-style: none;
  }

  .button-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .phone {
    background-color: #00ff00;
    color: white;
  }

  .phone,
  .edit,
  .delete {
    transition: 250ms linear;
  }

  .phone:hover,
  .phone:focus,
  .edit:hover,
  .edit:focus,
  .delete:hover,
  .delete:focus {
    scale: 1.3;
  }

  .edit {
    color: blue;
    border: none;
    background-color: rgba(209, 188, 138, 1);
  }
  .delete {
    background-color: red;
    color: white;
    border: none;
  }

  .name {
    color: green;
    text-transform: capitalize;
  }

  .number {
    color: blue;
  }

  .user-container {
    text-align: start;
  }
`;
