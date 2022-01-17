import styledComponents from "styled-components";

const StyledCard = styledComponents.div`
    min-width: 200px;
    position: relative;
    flex: 1;
    margin-right: 25px; 
    
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 100; 
        border-radius: 6px;
        background: ${(props) => props.bg}; 
        transition: .3s;
        ${(props) =>
          props.bg != "none" ? "display: block;" : "display: none;"}
    }

    .card__more {
        width: 30px;
        height: 30px;
        z-index: 100;
        position: absolute;
        right: 5%;
        top: 2%;
        background: #808080ba;
        border-radius: 50%;
        border: 0;
        line-height: 1;
        cursor: pointer;
    }
    img {
        width: 100%;
        height: 270px;
        border-radius: 6px;
        margin-bottom: 20px;
        object-fit: cover;
    }
    .card__dropdown {
        z-index: 100;
        position: absolute;
        top: 12%;
        right: 18%;
        opacity: 1;
        background: white;
        border-radius: 6px;
        transition: .5s;

        .card__dropdown-item {
            padding: 8px 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px solid rgba(33,37,41,0.15);

            &:hover {
                background: #032541;
                color: white;
            }
            p {
                margin: 0 0 0 5px;
            }
        }
    }
    .none {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .ant-progress {
        position: absolute;
        bottom: 16%;
        left: 5%;
        z-index: 10;
    }    
    .content {
        padding-left: 15px;

        h2, p {
            width: 180px;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: white;
        }
        h2 {
            font-size: 18px;
            font-weight: bolder;
        }
        p {
            font-size: 14px;
        }
    }
`;

export default StyledCard;
