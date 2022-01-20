import styledComponents from "styled-components";

const StyledMovieDetails = styledComponents.section`
    .home {
        background-image: linear-gradient(to right, rgba(10.59%, 8.63%, 8.63%, 1.00) 150px, rgba(10.59%, 8.63%, 8.63%, 0.84) 100%), url(${(
          props
        ) => props.bg});
        background-repeat: no-repeat;
        background-size: cover;
        color: #ffffffb3;
        
        .container {
            height: 60vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            column-gap: 40px;
        }
        .ant-image-img {
            border-radius: 15px;
        }
        .home__block {
            flex: 1;

            .home__title {
                margin: 0;
                font-size: 3.2rem;
                font-weight: bolder;
                color: white;

                span {
                    font-weight: lighter;
                    color: #ffffffc7;
                }
            }
            .home__inner-date, .home__inner-score {
                display: flex;
                align-items: center;
                column-gap: 8px;

                a {
                    color: #ffffffc1;

                    &:hover {
                        color: white;
                    }
                }
                p {
                    margin: 0;
                }
            }
            .home__inner-score {
                padding: 25px 0;
          
                span {
                    width: 70px;
                }
                .home__inner-btn {
                    display: flex;
                    column-gap: 20px;

                    button {
                        border-radius: 50%;
                        width: 50px;
                        height: 48px;
                        border: 0;
                        line-height: 1;
                        cursor: pointer;
                        background: #001529;
                    }
                }
            }   
            i {
                font-size: 1.8rem;
            }
            .home__overview {
                padding-top: 10px;

                h3 {
                    font-size: 1.9rem;
                    color: white;
                }
                p {
                    color: white;
                }
            }
            .home__jobs {
                padding-top: 5px; 
                display: flex;
                column-gap: 30px;

                h3 {
                    color: white;
                    margin-bottom: 5px;
                }
            }
        }
    }
    .body {
        display: flex;
        column-gap: 30px;
        background: var(--bg);
        color: #ffffffd1;
        padding: 50px 0;

        .body__block--large {
            width: 70%;

            .block__title {
                color: white;
            }
            .card-inner {
                padding: 15px 10px;
                display: flex;
                align-items: center;
                column-gap: 20px;
                overflow-x: scroll;
                
                &::-webkit-scrollbar {
                    height: 8px;
                  }
                  
                  &::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 6px; 
                }
                
                &::-webkit-scrollbar-thumb {
                    background: #888; 
                    border-radius: 6px; 
                }
                
                &::-webkit-scrollbar-thumb:hover {
                    background: #555; 
                    border-radius: 6px; 
                  }

                .card {
                    min-width: 180px;
                    height: 300px;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px #ffffff1a;
                    
                    img {
                        width: 100%;
                        height: 200px;
                        object-fit: cover;
                        border-radius: 8px 8px 0 0;
                    }
                    .card__body {
                        padding: 0 10px;

                        .card__title {
                            font-size: 1.6rem;
                            margin: 0;

                            a {
                                color: white;
                            }
                        }
                        .card__text {
                            font-size: 1.3rem;
                        }
                    }
                }
                .card__view {
                    min-width: 100px;
                    display: flex;
                    align-items: center;
                    column-gap: 3px;
                    color: white; 
                }
            }
        }
    }
`;

export default StyledMovieDetails;
