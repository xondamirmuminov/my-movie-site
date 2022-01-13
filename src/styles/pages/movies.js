import styledComponents from "styled-components";

const StyledMovies = styledComponents.section`
    background: var(--bg);
    padding-bottom: 100px;

    .movie__search {
        width: 90%;
        height: 160px;
        margin: auto;
        column-gap: 15px;
        padding: 32px;
        transform: translate( 0, -70px);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background: #001529;

        input {
            width: 70%;
            height: 47px;
            border-radius: 10px;
            border: 0;
            padding: 15px;
        }
        button {
            width: 20%;
            height: 47px;
            border: 0; 
            border-radius: 10px;
            cursor: pointer;
            background: var(--red);
            color: white;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                margin-right: 5px;
            }
        }
    }
    .movie__switch {
        display: flex;
        column-gap: 20px;
        margin-bottom: 30px;

        h2 {
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
        bottom -60px !important;
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
`;

export default StyledMovies;
