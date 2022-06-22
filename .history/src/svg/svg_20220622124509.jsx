const Svg = ({ id }) => {
  switch (id) {
    case "house":
      return (
        <svg
          width="23"
          height="22"
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
    default:
      return <svg></svg>;
  }
};
