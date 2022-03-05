import styled from "styled-components";

const StyledProfile = styled.section`
  background: var(--bg);
  color: #ffffffb3;

  .ant-image-mask {
    border-radius: 50%;
  }
  .profile__inner {
    background: var(--bg);
  }
  .profile__home {
    padding: 40px 0;
    background: #0e2a47;
    background-repeat: no-repeat;
    background-size: cover;

    .home-inner {
      display: flex;
      align-items: center;
      column-gap: 40px;
    }
    h1 {
      font-size: 3.2rem;
      font-weight: bold;
      color: white;
    }
  }
  .profile__stats {
    padding: 40px 0;

    h2 {
      font-size: 2.4rem;
      color: white;
    }
    .profile__stats-inner {
      display: flex;
      flex-wrap: wrap;
      column-gap: 15px;
      justify-content: space-between;

      p {
        margin: 0;
        font-size: 1.7rem;
      }
      h2 {
        font-size: 5rem;
        font-weight: bold;
        color: var(--red);
      }
    }
  }
  .card-inner {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;

    .card {
      width: 98%;
      min-height: 200px;
      display: flex;
      align-items: center;
      column-gap: 25px;
      border-radius: 8px;
      box-shadow: 2px 2px 10px #393939;
      background: var(--bg-detail);
    }
    .card__block {
      padding-right: 10px;
    }
    img {
      width: 133px;
      border-radius: 8px 0 0 8px;
    }
    h2 {
      margin-bottom: 5px;
      font-size: 2.2rem;
    }
    a {
      color: white;
    }
    p {
      color: #ffffffb3;
    }
    .card__text {
      max-height: 90px;
      overflow-y: hidden;
    }
  }
  .ant-tabs-tab-btn {
    color: #f0f0f0e6;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--red);
  }
  .ant-tabs-ink-bar {
    background: var(--red);
  }
  .anticon-ellipsis {
    svg {
      color: white;
    }
  }

  @media (max-width: 380px) {
    .card__text {
      max-height: 60px !important;
    }
  }
`;

export default StyledProfile;
