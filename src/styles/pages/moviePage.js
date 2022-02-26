import styled from "styled-components";

const StyledMovie = styled.section`
  background: var(--bg);
  padding: 40px 0;

  h1 {
    text-align: center;
    color: white;
    font-size: 3.6rem;
  }
  .movie__search {
    margin: 20px 0;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    column-gap: 25px;

    input {
      width: 80%;
      padding: 14px 14px;
      border: 0;
      border-radius: 6px;
      font-size: 1.6rem;
    }
    button {
      width: 18.5%;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 10px;
      font-size: 1.6rem;
      font-weight: 500;
      cursor: pointer;
      color: white;
      background: var(--red);
      border: 0;
      border-radius: 6px;
    }
  }
  .card-inner {
    display: flex;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 35px;

    div {
      margin: 0;
    }
  }
`;

export default StyledMovie;
