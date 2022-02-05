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
  .ant-pagination {
    margin: 40px 0;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
  }
  .ant-pagination-item-active {
    border-color: var(--red) !important;
    font-weight: bold;
    font-size: 1.6rem;
  }
  .ant-pagination-item:hover {
    border-color: var(--red) !important;
    font-weight: bold;

    a {
      color: var(--red) !important;
    }
  }
  .ant-pagination-jump-prev
    .ant-pagination-item-container
    .ant-pagination-item-ellipsis,
  .ant-pagination-jump-next
    .ant-pagination-item-container
    .ant-pagination-item-ellipsis {
    color: #ffffffd3;
  }
  .ant-pagination-prev:focus-visible .ant-pagination-item-link,
  .ant-pagination-next:focus-visible .ant-pagination-item-link,
  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    color: var(--red);
    border-color: var(--red);
  }
  .ant-pagination-jump-prev
    .ant-pagination-item-container
    .ant-pagination-item-link-icon,
  .ant-pagination-jump-next
    .ant-pagination-item-container
    .ant-pagination-item-link-icon {
    color: var(--red);
  }
  .ant-pagination-item-active a {
    color: var(--red) !important;
  }
`;

export default StyledMovie;
