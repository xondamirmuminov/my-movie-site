import styled from "styled-components";
import keys from "../../configs";

const StyledHome = styled.section`
  padding: 50px 15px;
  margin: auto;
  background: linear-gradient(180deg, #9400009d, black),
    url(${(props) =>
      props.bg ? keys.IMG_URL + props.bg : "../../assets/home-bg.jpg"});
  height: 60vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .home__inner {
    width: 60%;
  }
  .home__title {
    font-size: 4.2rem;
    font-weight: bolder;
    color: white;
  }
  .home__text {
    color: white;
    font-size: 1.8rem;
  }
  .home__btn {
    padding: 10px 25px;
    border: 0;
    cursor: pointer;
    background: var(--red);
    color: #ffffffe8;
    border-radius: 6px;
  }

  @media (max-width: 1005px) {
    .home__inner {
      width: 100%;
    }
  }
`;

export default StyledHome;
