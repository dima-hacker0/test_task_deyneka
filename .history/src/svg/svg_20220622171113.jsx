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
          viewBox="0 0 30vw 15vw"
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
    default:
      return <svg></svg>;
  }
};

export default Svg;
