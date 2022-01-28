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
            font-size: 1.6rem;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                margin-right: 5px;
            }
        }
    }
`;

export default StyledMovies;
