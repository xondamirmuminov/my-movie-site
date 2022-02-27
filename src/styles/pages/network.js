import styled from "styled-components";

const StyledNetwork = styled.section`
  background: var(--bg);
  color: #ffffffb3;

  .network__movies {
    padding: 40px 0;
  }
  .network__movies-inner {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    .card {
      display: flex;
      align-items: center;
      column-gap: 25px;
      border-radius: 8px;
      box-shadow: 2px 2px 10px #393939;
      background: var(--bg-detail);
    }
    img {
      width: 94px;
      border-radius: 8px 0 0 8px;
      object-fit: cover;
    }
    p {
      margin-bottom: 5px;
    }
    .card__text {
      height: 48px;
      overflow: hidden;
      color: #ffffffde;
    }
    h2 {
      margin-bottom: 10px;
    }
    a {
      color: white;
    }
  }

  .network__home {
    padding: 40px 0;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1309%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M789 57L476 -256' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1209 318L852 -39' stroke-width='8' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1092 470L1362 740' stroke-width='6' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M309 320L-27 -16' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M992 331L1275 614' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M420 267L21 -132' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M429 289L792 652' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M356 490L652 786' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M752 389L893 530' stroke-width='6' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M459 517L267 325' stroke-width='6' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M14 552L263 801' stroke-width='8' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1326 509L1540 723' stroke-width='8' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M211 14L-138 -335' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1408 211L1029 -168' stroke-width='10' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M281 337L-49 7' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1201 381L1355 535' stroke-width='6' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M935 338L636 39' stroke-width='10' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M289 113L111 -65' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1242 151L917 -174' stroke-width='6' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1228 289L866 -73' stroke-width='10' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M1274 154L1421 301' stroke-width='8' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1014 230L809 25' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M446 140L268 -38' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M710 366L910 566' stroke-width='6' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M898 57L513 -328' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M645 240L329 -76' stroke-width='6' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M281 362L61 142' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M356 213L137 -6' stroke-width='6' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1077 393L750 66' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M197 420L-58 165' stroke-width='8' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M901 524L1299 922' stroke-width='6' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1219 537L914 232' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M838 274L593 29' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M435 511L799 875' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M969 402L1125 558' stroke-width='10' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M688 393L944 649' stroke-width='10' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M73 330L480 737' stroke-width='6' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3cpath d='M1181 250L1444 513' stroke-width='8' stroke='url(%23SvgjsLinearGradient1311)' stroke-linecap='round' class='TopLeft'%3e%3c/path%3e%3cpath d='M575 128L237 -210' stroke-width='10' stroke='url(%23SvgjsLinearGradient1310)' stroke-linecap='round' class='BottomRight'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1309'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='0%25' x2='100%25' y2='100%25' id='SvgjsLinearGradient1310'%3e%3cstop stop-color='rgba(191%2c 16%2c 47%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(191%2c 16%2c 47%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1311'%3e%3cstop stop-color='rgba(191%2c 16%2c 47%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(191%2c 16%2c 47%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .home__image {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        height: 60px;
        width: 335px;
        object-fit: contain;
      }
      h1 {
        margin: 0;
        color: white;
        font-size: 34px;
        font-weight: bold;
      }
      h2 {
        margin: 0;
        color: #fffffff0;
        font-size: 24px;
      }
    }
    .home__info {
      margin-top: 60px;
      display: flex;
      align-items: center;
      column-gap: 25px;

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        column-gap: 8px;
        color: #ffffffed;

        a {
          color: #ffffffed;
        }
      }
    }
  }
`;

export default StyledNetwork;
