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
                            margin: 0;
                            margin-top: 5px;
                            font-size: 1.6rem;

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
            .cast {
                margin: 30px 0;
                padding-bottom: 30px;
                display: block;
                color: #ffffffc7;
                font-size: 1.8rem;
                border-bottom: 1px solid #ffffff21;
            }
            .media {
                position: relative;

                h2 {
                    position: absolute;
                    left: 0;
                    margin: 0;
                    top: 10px;
                    color: #ffffffc7;
                }
                .card {
                    position: relative;
                    
                    button {
                        position: absolute;
                        left: 44%;
                        top: 35%;
                        background: transparent;
                        border: 0;
                        cursor: pointer;
                    }
                    
                    &::before {
                        content: '';
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: #000000ed;
                        border-radius: 9px;
                    }

                }
                img {
                    border-radius: 10px;
                }
            }
            .ant-tabs-tabpane {
                height: 300px;
                padding-bottom: 10px;
                display: flex;
                column-gap: 15px;
                overflow-x: auto;
            }
            .ant-tabs-nav {
                margin-left: 100px;
            }
            .ant-tabs-tab-btn {
               color: #ffffff96;
            }
            .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before {
                border-bottom: 1px solid #ffffff96;
            }
            .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
                color: white !important;
            }
            .ant-tabs-ink-bar {
                background: white;
            }
        }
        .collection {
            height: 260px;
            margin-top: 50px;
            padding: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            border-radius: 10px;
            background: linear-gradient(to right, rgba(3,37,65,1) 0%, rgba(3,37,65,0.6) 100%), url(${(
              props
            ) => props?.collectionBg});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

            h1 {
                margin: 0;
                color: white;
                font-size: 2.6rem;
            }
            p {
                font-size: 1.6rem;
            }
            a {
                padding: 8px 16px;
                border-radius: 6px;
                background: transparent;
                border: 1px solid var(--red);
                color: var(--red);
                font-size: 16px;

                &:hover {
                    background: var(--red);
                    color: white;
                }
            }
        }
    }
`;

export default StyledMovieDetails;
