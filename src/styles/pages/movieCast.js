import styled from "styled-components";

const StyledCast = styled.section`
  background: var(--bg);
  color: #ffffffd1;

  .cast__movie {
    min-height: 200px;
    background: #2c2d2b;

    .movie-inner {
      padding: 20px 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 20px;

      img {
        height: 160px;
        border-radius: 6px;
      }
      h2,
      h2 a {
        margin-bottom: 5px;
        color: white;
        font-size: 3.2rem;
        font-weight: bolder;
      }
      .movie__link {
        display: flex;
        font-size: 1.6rem;
        color: #ffffffd1;
      }
    }
  }
  .cast-inner {
    padding-bottom: 40px;

    .container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      column-gap: 50px;
    }
    .cast__block {
      min-width: 45%;
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      h3 {
        margin-top: 15px;
        color: white;
        font-size: 2.2rem;
      }
      .cast__card {
        display: flex;
        align-items: center;
        column-gap: 20px;

        a {
          width: 30%;
        }
        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 10px;
        }
        h4 a {
          color: white;
          font-size: 2rem;
        }
        p {
          color: #ffffffd1;
        }
      }
    }
  }
`;

export default StyledCast;
