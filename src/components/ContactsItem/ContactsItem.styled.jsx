import styled from '@emotion/styled';

export const Item = styled.li`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 15px;
  border: 1px solid grey;
  border-radius: 4px;
  height: 100px;

  & p {
    margin: 2px 0;
  }

  & button {
    background-color: #fff;
    border: 1px solid black;
    border-radius: 4px;
    width: 70px;
    height: 50px;
    cursor: pointer;
    transition: 250ms ease;
    height: 25px;
    margin-top: 10px;

    &:hover {
      background-color: greenyellow;
    }
  }
`;
