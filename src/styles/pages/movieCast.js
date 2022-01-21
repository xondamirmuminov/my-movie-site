import styledComponents from "styled-components";

const StyledCast = styledComponents.section`
    background: var(--bg); 
    color: #ffffffd1;

    .cast__movie {
        min-height: 200px;
        background: #2C2D2B; 

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
            h2, h2 a {
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
        .container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            column-gap: 40px;
        }
        
    }
`;

export default StyledCast;
