const Svg = ({ id, styles }) => {
  switch (id) {
    case "house":
      return (
        <svg
          className={styles}
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6129 9.77275L12.2944 0.311896C11.8406 -0.103965 11.1578 -0.103965 10.7041 0.311896L0.385564 9.77275C0.0216964 10.1073 -0.0951005 10.618 0.0800948 11.0791C0.25529 11.5402 0.691032 11.8385 1.18068 11.8385H2.82931V21.3174C2.82931 21.6926 3.13029 22 3.50763 22H9.1633C9.53615 22 9.84162 21.6971 9.84162 21.3174V15.5632H13.1658V21.3174C13.1658 21.6926 13.4668 22 13.8442 22H19.4953C19.8682 22 20.1736 21.6971 20.1736 21.3174V11.8385H21.8223C22.3119 11.8385 22.7432 11.5402 22.9229 11.0791C23.0936 10.618 22.9768 10.1073 22.6129 9.77275Z"
            fill="#F38120"
          />
        </svg>
      );
    case "form":
      return (
        <svg
          className={styles}
          viewBox="0 0 374 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1820_633)">
            <path
              d="M187 25H50V129.073C50 138.022 54.4674 146.474 61.913 151.446C84.4155 166.195 128.097 171.332 157.383 172.99C160.857 173.155 164.167 171.332 165.987 168.349C170.289 161.223 178.065 156.417 187 156.417C195.935 156.417 203.711 161.223 208.013 168.349C209.833 171.332 213.142 173.155 216.617 172.99C245.903 171.167 289.585 166.195 312.087 151.446C319.533 146.474 324 138.188 324 129.073V25H187Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1820_633"
              x="0"
              y="0"
              className={styles}
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="25" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1820_633"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1820_633"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "viber":
      return (
        <svg
          className={styles}
          //   width="44"
          //   height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.577148"
            width="43.8462"
            height="43.8462"
            rx="21.9231"
            fill="#976FCC"
          />
          <path
            d="M21.9233 12.8545C16.598 12.8545 12.2771 17.1753 12.2771 22.5007C12.2771 24.633 12.9673 26.5971 14.1345 28.1963L12.9056 31.8326L16.7383 30.6373C18.2365 31.5913 20.0154 32.1468 21.9233 32.1468C27.2486 32.1468 31.5695 27.826 31.5695 22.5007C31.5695 17.1753 27.2486 12.8545 21.9233 12.8545ZM26.3396 27.6745C24.5888 28.3759 22.5013 27.6969 20.2174 25.963C17.9335 24.229 16.4296 21.788 16.3286 19.9755C16.2276 18.163 17.7035 17.2483 18.5059 17.2539C19.3083 17.2595 20.1893 19.824 20.2006 20.2168C20.2118 20.6152 19.2186 21.3222 19.1793 21.6589C19.14 21.9956 20.5316 23.6566 21.1209 24.1056C21.7045 24.5489 22.9109 25.4018 23.5338 25.3232C24.1511 25.2391 24.5607 23.9989 24.9535 23.9204C25.3463 23.8418 27.4899 24.908 27.7031 25.183C27.9164 25.4635 27.8939 27.0572 26.3396 27.6745Z"
            fill="white"
          />
        </svg>
      );
    case "whatsup":
      return (
        <svg
          className={styles}
          //   width="44"
          //   height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.577148"
            width="43.8462"
            height="43.8462"
            rx="21.9231"
            fill="#12C868"
          />
          <path
            d="M24.1356 13.8643H19.7056C15.4171 13.8643 11.9581 16.9773 11.9581 20.8414V23.8316C11.9581 26.5305 13.6775 28.9836 16.3881 30.1306V33.4712C16.3881 33.6396 16.56 33.7944 16.7775 33.7944C16.8635 33.7944 16.9646 33.7625 17.0354 33.7033L20.2366 30.8042H24.1356C28.4291 30.8042 31.8882 27.6911 31.8882 23.827V20.8368C31.8882 16.9773 28.4291 13.8643 24.1356 13.8643ZM27.0485 26.9401L25.941 27.9369C24.7475 28.9791 21.6829 27.7821 18.9723 25.3017C16.2617 22.8212 15.0581 20.0131 16.201 18.9708L17.3085 17.9741C17.7535 17.6054 18.4514 17.6236 18.8914 18.0059L20.4945 19.5079C20.9041 19.9084 20.9041 20.5046 20.4591 20.9051C20.3377 21.0143 20.2012 21.0735 20.0495 21.1372C19.4881 21.292 19.1999 21.779 19.3364 22.2887C19.6095 23.3947 21.157 24.7737 22.3353 25.0468C22.8814 25.1697 23.4428 24.892 23.6299 24.4187C23.817 23.9272 24.4289 23.6541 25.0105 23.8225C25.1824 23.868 25.319 23.9772 25.4555 24.0683L27.0586 25.5702C27.4581 25.9297 27.4581 26.5442 27.0485 26.9401ZM22.9118 18.6022C22.7904 18.6022 22.6893 18.6022 22.5881 18.634C22.401 18.6659 22.1987 18.5248 22.1785 18.3291C22.1583 18.1334 22.2999 17.9786 22.5022 17.9604C22.6387 17.9286 22.7752 17.9286 22.9118 17.9286C24.9549 17.9286 26.5934 19.4305 26.6237 21.2419C26.6237 21.3648 26.6237 21.4877 26.5883 21.6106C26.5529 21.779 26.4012 21.9337 26.1787 21.9018C25.9562 21.87 25.8196 21.7334 25.855 21.5332C25.855 21.424 25.8904 21.3329 25.8904 21.2419C25.8753 19.7991 24.5452 18.6022 22.9118 18.6022ZM25.1268 21.2692C25.0914 21.4376 24.9397 21.5924 24.7172 21.5605C24.5452 21.5286 24.3935 21.4057 24.3935 21.2692C24.3935 20.5501 23.731 19.9493 22.927 19.9493C22.7398 19.9812 22.5376 19.8265 22.5173 19.6444C22.4819 19.476 22.6539 19.2939 22.841 19.2757H22.8916C24.171 19.2757 25.1268 20.1632 25.1268 21.2692ZM27.9537 22.3251C27.9183 22.4935 27.7312 22.6164 27.5441 22.6027C27.357 22.5891 27.2205 22.4025 27.2356 22.2341C27.2356 22.2022 27.2356 22.2022 27.2356 22.1886C27.3216 21.8973 27.357 21.5924 27.357 21.2692C27.357 19.0755 25.3645 17.2823 22.927 17.2823C22.8056 17.2823 22.7044 17.2823 22.6033 17.2823C22.4162 17.3141 22.2139 17.1594 22.2139 16.9773C22.1785 16.8089 22.3504 16.6269 22.5376 16.6269C22.6741 16.6269 22.8106 16.595 22.927 16.595C25.7741 16.595 28.1054 18.6795 28.1054 21.2556C28.0903 21.606 28.0397 21.9883 27.9537 22.3251Z"
            fill="white"
          />
        </svg>
      );
    case "telegram":
      return (
        <svg
          className={styles}
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.577148"
            width="43.8462"
            height="43.8462"
            rx="21.9231"
            fill="#05A0EB"
          />
          <path
            d="M20.0352 24.7309L19.744 28.6472C20.1585 28.6472 20.3401 28.4762 20.5559 28.269L22.5015 26.4835L26.5333 29.318C27.2732 29.7125 27.7939 29.5054 27.9926 28.6636L30.6405 16.757C30.8769 15.7113 30.2466 15.3003 29.5272 15.5601L13.9686 21.2783C12.9067 21.6729 12.9239 22.2417 13.7871 22.4982L17.7641 23.6853L27.0026 18.1348C27.4377 17.8585 27.8316 18.0098 27.5062 18.2893L20.0352 24.7309Z"
            fill="white"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg
          className={styles}
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6775 0.366446L0 18.0439L1.92147 19.9654L19.599 2.28791L17.6775 0.366446Z"
            fill="white"
          />
          <path
            d="M20.0244 9.45652H17.307V2.71739H10.5679V0H20.0244V9.45652Z"
            fill="white"
          />
        </svg>
      );
    case "click":
      return (
        <svg
          width="26"
          height="21"
          viewBox="0 0 26 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.07217 8.24255C6.82297 8.24255 8.24227 6.82325 8.24227 5.07245C8.24227 3.32165 6.82297 1.90234 5.07217 1.90234C3.32137 1.90234 1.90207 3.32165 1.90207 5.07245C1.90207 6.82325 3.32137 8.24255 5.07217 8.24255Z"
            fill="#F38120"
          />
          <path
            opacity="0.25"
            d="M5.07216 10.1443C7.87344 10.1443 10.1443 7.87344 10.1443 5.07216C10.1443 2.27089 7.87344 0 5.07216 0C2.27089 0 0 2.27089 0 5.07216C0 7.87344 2.27089 10.1443 5.07216 10.1443Z"
            fill="#F38120"
          />
          <path
            d="M24.4028 8.08419L20.2166 3.40342C19.3866 2.55865 18.0399 2.55865 17.2048 3.40874C16.9386 3.6797 16.7611 4.00379 16.6672 4.34383C15.832 3.69564 14.6315 3.75939 13.8642 4.54041C13.598 4.81137 13.4205 5.13547 13.3265 5.4755C12.4914 4.82731 11.2909 4.89107 10.5236 5.67208C10.2626 5.93773 10.0851 6.2512 9.99116 6.58592L8.00767 4.58291C7.17773 3.73814 5.83105 3.73814 4.99589 4.58823C4.16596 5.433 4.16596 6.80376 4.99589 7.64853L12.5749 15.3683L8.08074 16.0856C6.86455 16.2609 5.9511 17.3395 5.9511 18.588C5.9511 19.5231 6.70274 20.2882 7.62141 20.2882H18.1235C19.7572 20.2882 21.297 19.64 22.4558 18.4605L24.2096 16.6753C25.3632 15.5012 26 13.9338 26 12.2709C25.9948 10.7248 25.4258 9.23712 24.4028 8.08419ZM23.411 15.8784L21.6572 17.6636C20.7124 18.6252 19.4545 19.1565 18.113 19.1565H7.62141C7.31344 19.1565 7.0629 18.9015 7.0629 18.588C7.0629 17.8973 7.56921 17.3076 8.24777 17.2066L13.8329 16.3141C14.0416 16.2822 14.2087 16.1334 14.2765 15.9315C14.3392 15.7296 14.287 15.5065 14.1408 15.3577L5.78407 6.85157C5.38737 6.44778 5.38737 5.79428 5.78929 5.38518C5.98764 5.18328 6.24862 5.08234 6.50439 5.08234C6.76537 5.08234 7.02114 5.18328 7.21949 5.38518L12.7889 11.0542C13.0081 11.2773 13.3579 11.2773 13.5771 11.0542C13.6867 10.9426 13.7389 10.7991 13.7389 10.6504C13.7389 10.5016 13.6867 10.3582 13.5771 10.2466L11.3013 7.93012C10.9046 7.52633 10.9046 6.87282 11.3065 6.46372C11.7032 6.05993 12.3452 6.05993 12.7419 6.46372L15.0177 8.7802C15.237 9.00335 15.5867 9.00335 15.8059 8.7802C15.9155 8.66863 15.9677 8.52517 15.9677 8.37641C15.9677 8.22764 15.9155 8.08419 15.8059 7.97262L14.6419 6.78782C14.2452 6.38403 14.2452 5.73053 14.6471 5.32142C15.0438 4.91763 15.6859 4.91763 16.0826 5.32142L17.2518 6.51154C17.471 6.72406 17.8155 6.71875 18.0295 6.50091C18.2487 6.27777 18.2487 5.92179 18.0295 5.69865L17.9825 5.65083C17.7894 5.45425 17.685 5.19391 17.685 4.92295C17.685 4.65198 17.7894 4.39164 17.9878 4.18975C18.3844 3.78596 19.0265 3.79127 19.4023 4.1685L23.5728 8.83333C24.4132 9.77373 24.8725 10.9904 24.8725 12.2602C24.8778 13.6363 24.361 14.9167 23.411 15.8784Z"
            fill="#1C1C1C"
          />
        </svg>
      );
    case "cross":
      return (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3588 16.5662L13.1187 10.2029L19.3588 3.83955C20.2137 2.96615 20.2137 1.53695 19.3588 0.663556C18.4927 -0.221185 17.1048 -0.221185 16.2387 0.663556L10.0097 7.02689L3.7696 0.663556C2.90354 -0.209843 1.51561 -0.221185 0.649549 0.663556C-0.205413 1.5483 -0.205413 2.96615 0.649549 3.83955L6.88966 10.2029L0.649549 16.5662C-0.216516 17.4396 -0.216516 18.8688 0.649549 19.7422C1.08258 20.1846 1.64885 20.4001 2.20402 20.4001C2.75919 20.4001 3.33657 20.1846 3.7585 19.7422L10.0097 13.3902L16.2498 19.7536C16.6829 20.1959 17.238 20.4114 17.8043 20.4114C18.3706 20.4114 18.9369 20.1959 19.3588 19.7536C20.2137 18.8688 20.2137 17.4396 19.3588 16.5662Z"
            fill="#A0A0A0"
          />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};

export default Svg;
