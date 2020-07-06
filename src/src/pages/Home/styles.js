import styled from 'styled-components';

export const Payment = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  grid-template-areas:
    'header header'
    'header header'
    'main sidebar';

  .cards {
    grid-area: header;
  }

  .save-card {
    display: flex;

    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
    font-size: 13px;
    color: #ffffff;

    input {
      margin-right: 5px;
    }
  }

  .form-area {
    grid-area: main;
    & > label,
    div.group label {
      display: block;
      color: #87868b;
      font-size: 14px;
      font-weight: bold;
    }

    & > input,
    div.group input {
      width: 100%;
      background: #19181f;
      border: 2px solid #25242c;
      border-radius: 5px;
      padding: 15px 21px;
      margin-top: 8px;
      font-size: 14px;
      margin-bottom: 15px;
      color: #ffffff;
    }

    .group {
      width: 100%;
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 20px;

      div {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .credit-card {
    display: flex;
    align-items: center;
    grid-area: sidebar;
  }
`;