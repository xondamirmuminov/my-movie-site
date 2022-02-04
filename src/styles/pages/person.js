import styled from "styled-components";

const StyledPerson = styled.section`
  background: var(--bg);
  color: #ffffffc1;
  padding-top: 40px;

  .person__inner {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 40px;

    .person__block--sm {
      min-width: 30%;
      flex: 1;

      .ant-image-img,
      ant-image-mask {
        border-radius: 15px;
      }
      .social {
        margin: 20px 0;
        display: flex;
        align-items: center;
        column-gap: 10px;
      }
      .personal {
        h1 {
          color: white;
          font-size: 2.2rem;
        }
        h3 {
          color: white;
          font-size: 1.6rem;
        }
        p {
          font-size: 1.6rem;
          margin: 0;
        }
      }
    }
    .person__block--lg {
      min-width: 67%;
      flex: 1;

      h1 {
        margin-bottom: 0;
        color: white;
        font-size: 3.4rem;
        font-weight: bolder;
      }
      h3 {
        margin-top: 20px;
        color: #ffffffbc;
        font-size: 1.8rem;
      }
      .text {
        color: #ffffffc7;
        font-size: 1.5rem;
      }
      h2 {
        margin-top: 30px;
        color: #ffffffbc;
      }
      .card-inner {
        display: flex;
        column-gap: 25px;
        overflow-x: auto;

        .card {
          min-width: 180px;
          flex: 1;

          img {
            width: 100%;
            height: 185px;
            object-fit: cover;
            border-radius: 15px;
          }
          h3 {
            margin: 0;
            margin-top: 8px;

            a {
              display: block;
              color: white;
              font-size: 1.6rem;
            }
          }
        }
      }
      .acting {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        margin-bottom: 25px;
      }
      .acting-item {
        display: flex;
        align-items: center;
        column-gap: 15px;

        img {
          width: 80px;
          border-radius: 10px;
        }
        p {
          margin: 0;
        }
        h3 {
          margin: 0;

          a {
            color: white;
          }
        }
      }
    }
  }
`;

export default StyledPerson;
