import styled from "styled-components";
import keys from "../../configs";

const StyledCollection = styled.section`
  background: var(--bg);
  color: #ffffffb3;

  .collection__home {
    background-image: linear-gradient(
        to right,
        rgba(10.59%, 8.63%, 8.63%, 1) 150px,
        rgba(10.59%, 8.63%, 8.63%, 0.84) 100%
      ),
      url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;

    .container {
      min-height: 60vh;
      padding-top: 40px;
      padding-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      column-gap: 40px;
    }
    .ant-image-img {
      border-radius: 15px;
    }
    .collection__home-block {
      flex: 1;

      h1 {
        font-size: 3.2rem;
        font-weight: bolder;
        color: white;
      }
      h3 {
        font-size: 2rem;
        color: #ffffffd8;
      }
      p {
        font-size: 1.6rem;
      }
    }
  }
  .collection__movies {
    padding: 40px 0;

    h2 {
      font-size: 2.2rem;
      color: #ffffffd8;
      margin-bottom: 20px;
    }
  }
  .card-inner {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    .card {
      display: flex;
      align-items: center;
      column-gap: 25px;
      border-radius: 8px;
      box-shadow: 2px 2px 10px #393939;
      background: var(--bg-detail);
    }
    img {
      width: 94px;
      border-radius: 8px 0 0 8px;
    }
    h2 {
      margin-bottom: 10px;
    }
    a {
      color: white;
    }
  }
  @media (max-width: 670px) {
    .collection__home {
      text-align: center;
      .container {
        flex-direction: column;

        .collection__home-block {
          margin-top: 20px;
        }
      }
    }
  }
`;

export default StyledCollection;
