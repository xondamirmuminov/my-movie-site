import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    $animation-speed: .3s;
    $animation-function: ease-out;
    $backdrop-color: rgba(0, 0, 0, .5);

    @keyframes modal-video {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes modal-video-inner {
        from {
            transform: translate(0, 100px);
        }

        to {
            transform: translate(0, 0);
        }
    }

    .modal-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $backdrop-color;
        background: #00000099;
        z-index: 1000000;
        cursor: pointer;
        opacity: 1;
        animation-timing-function: $animation-function;
        animation-duration: $animation-speed;
        animation-name: modal-video;
        -webkit-transition: opacity $animation-speed $animation-function;
        -moz-transition: opacity $animation-speed $animation-function;
        -ms-transition: opacity $animation-speed $animation-function;
        -o-transition: opacity $animation-speed $animation-function;
        transition: opacity $animation-speed $animation-function;
    }

    .modal-video-effect-exit {
        opacity: 0;

        & .modal-video-movie-wrap {
            -webkit-transform: translate(0, 100px);
            -moz-transform: translate(0, 100px);
            -ms-transform: translate(0, 100px);
            -o-transform: translate(0, 100px);
            transform: translate(0, 100px);
        }
    }

    .modal-video-body {
        max-width: 960px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 0 10px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
    }

    .modal-video-inner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        @media (orientation: landscape) {
            padding: 10px 60px;
            box-sizing: border-box;
        }
    }

    .modal-video-movie-wrap {
        width: 100%;
        height: 0;
        position: relative;
        padding-bottom: 56.25%;
        background-color: #333;
        animation-timing-function: $animation-function;
        animation-duration: $animation-speed;
        animation-name: modal-video-inner;
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
        -webkit-transition: -webkit-transform $animation-speed $animation-function;
        -moz-transition: -moz-transform $animation-speed $animation-function;
        -ms-transition: -ms-transform $animation-speed $animation-function;
        -o-transition: -o-transform $animation-speed $animation-function;
        transition: transform $animation-speed $animation-function;

        & iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    .modal-video-close-btn {
        position: absolute;
        z-index: 2;
        top: -45px;
        right: 0px;
        display: inline-block;
        width: 35px;
        height: 35px;
        overflow: hidden;
        border: none;
        background: transparent;

        @media (orientation: landscape) {
            top: 0;
            right: -45px;
        }

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }

        &:before,
        &:after {
            content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            top: 50%;
            left: 0;
            margin-top: -1px;
            background: #fff;
            border-radius: 5px;
            margin-top: -6px;
        }
    }
    &::-webkit-scrollbar {
        height: 8px;
        width: 10px;
    }
                  
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 6px; 
    }
    
    &::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 0; 
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
        border-radius: 0; 
    }
    .movie__switch {
        display: flex;
        align-items: center;
        column-gap: 20px;
        margin-bottom: 30px;

        h2 {
            margin: 0;
            font-size: 2.4rem;
            color: white;
        }
        .react-switch-selector-wrapper {
            width: 200px;
            height: 35px;

            &::before {
                width: 50%;
                height: calc(100% - -1px);
            }
        }
    }
    .slick-next, .slick-prev {
        bottom: -60px !important;
        top: inherit;
    }
    .slick-next {
        right: 40px;
    }
    .slick-prev {
        left: inherit;
        right: 90px;
        margin-right: 15px;
    }
    .slick-next:before, .slick-prev:before {
        line-height: 1;
        background: #000000b5;
        border-radius: 50%;
        padding: 10px 15px;
    }
    .ant-popover-inner {
        background-color: #001529 !important;
    }
    .ant-popover-arrow-content {
        background-color: #000000b5;
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

export default GlobalStyles;
