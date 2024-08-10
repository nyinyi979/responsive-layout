import "./Footer.css";
export default function Footer() {
  const link0 = [
    {
      name: "Home",
      value: "/",
    },
    {
      name: "Discovery",
      value: "/discovery",
    },
    {
      name: "Photos",
      value: "/photos",
    },
    {
      name: "Contact",
      value: "/contact",
    },
  ];
  const link1 = [
    {
      name: "About",
      value: "/about",
    },
    {
      name: "Help",
      value: "/help",
    },
    {
      name: "Terms",
      value: "/terms",
    },
    {
      name: "Guideline",
      value: "/guideline",
    },
  ];
  const link2 = [
    {
      name: "Testimonial",
      value: "/testimonial",
    },
    {
      name: "Advertise",
      value: "/advertise",
    },
    {
      name: "Integrations",
      value: "/integrations",
    },
    {
      name: "Careers",
      value: "/careers",
    },
  ];
  return (
    <div className="footer-con">
      <div className="footer flex">
        <div className="left-side flex">
          <div className="logo">
            <img src={"/logo.jpeg"} alt="logo" className="img" />
          </div>
          <div className="links flex-col">
            {link0.map((li) => (
              <span className="link">{li.name}</span>
            ))}
          </div>
          <div className="links flex-col">
            {link1.map((li) => (
              <span className="link">{li.name}</span>
            ))}
          </div>
          <div className="links flex-col">
            {link2.map((li) => (
              <span className="link">{li.name}</span>
            ))}
          </div>
        </div>
        <div className="right-side flex">
          <div className="flex-col input-con">
            <div className="input">
              <input placeholder="Email" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Bnter-Logo--Streamline-Logos"
                height="24"
                width="24"
              >
                <desc>
                  Bnter Logo Streamline Icon: https://streamlinehq.com
                </desc>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M2.4348 20.3133L2.438 20.3079L2.4509 20.279C2.5345 20.0952 2.6083 19.9072 2.6722 19.7156C2.7491 19.4879 2.8218 19.2238 2.8657 18.9491C1.408 18.9234 0.2398 17.7343 0.24 16.2764V5.5855C0.24 4.1093 1.4366 2.9127 2.9127 2.9127H21.0873C22.5633 2.9128 23.76 4.1094 23.76 5.5855V16.2764C23.76 17.7525 22.5634 18.9491 21.0873 18.9491H6.6011C6.347 20.1937 5.2521 21.0875 3.9818 21.0873H2.0478L2.4348 20.3133ZM14.6727 14.0388V14.6727C14.6739 16.3187 12.8928 17.3487 11.4668 16.5267C11.0246 16.2718 10.6881 15.8671 10.5182 15.3858L10.3066 14.7871L14.6727 14.0388ZM5.6186 13.1022C5.6186 13.9507 4.7001 14.481 3.9652 14.0568C3.6242 13.8599 3.4141 13.496 3.4141 13.1022C3.4141 12.2537 4.3327 11.7234 5.0675 12.1477C5.4085 12.3446 5.6186 12.7084 5.6186 13.1022ZM19.4836 14.2045C20.3321 14.2045 20.8625 13.2859 20.4382 12.5511C20.2413 12.2101 19.8774 12 19.4836 12C18.6347 12 18.1042 12.919 18.5286 13.6541C18.7256 13.9953 19.0897 14.2055 19.4836 14.2055Z"
                  clipRule="evenodd"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
            <p>Stay in touch with our latest production</p>
          </div>
          <div className="icons flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Instagram-Logo-2--Streamline-Logos"
              height="24"
              width="24"
            >
              <desc>
                Instagram Logo 2 Streamline Icon: https://streamlinehq.com
              </desc>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M7.5 0.75A6.75 6.75 0 0 0 0.75 7.5v9a6.75 6.75 0 0 0 6.75 6.75h9a6.75 6.75 0 0 0 6.75 -6.75v-9A6.75 6.75 0 0 0 16.5 0.75h-9ZM2.25 7.5c0 -2.9 2.35 -5.25 5.25 -5.25h9c2.9 0 5.25 2.35 5.25 5.25v9c0 2.9 -2.35 5.25 -5.25 5.25h-9a5.25 5.25 0 0 1 -5.25 -5.25v-9ZM19.5 6.25a1.25 1.25 0 1 1 -2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0 -8.5ZM6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1 -11.5 0Z"
                clipRule="evenodd"
                strokeWidth="1"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Twitter-Logo-1--Streamline-Logos"
              height="24"
              width="24"
            >
              <desc>
                Twitter Logo 1 Streamline Icon: https://streamlinehq.com
              </desc>
              <path
                fill="#fff"
                d="M1 19c15.617 6.062 20.038 -5.025 19.905 -10.5C22.173 8.156 23 7.292 23 6.406c-1.048 0.55 -1.595 0.394 -2.119 0 1.128 -0.768 1.071 -1.863 1.071 -2.619 -0.527 0.277 -1.503 0.96 -2.619 1.048 -0.745 -1.166 -2.619 -2.095 -5.238 -1.048 -2.619 1.048 -3.143 3.842 -2.619 5.238 -3.352 0 -7.333 -3.492 -8.905 -5.238 -1.883 2.688 0.5 5.353 1.572 6.286 -0.715 0.214 -1.572 0 -2.095 -0.524 0 2.991 2.619 4.19 3.666 4.715H3.62c0 2.095 2.444 2.968 3.667 3.142 -0.838 0.838 -4.215 1.596 -6.286 1.596Z"
                strokeWidth="1"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Facebook-Logo-2--Streamline-Logos"
              height="24"
              width="24"
            >
              <desc>
                Facebook Logo 2 Streamline Icon: https://streamlinehq.com
              </desc>
              <path
                fill="#fff"
                d="M13.5 1A4.5 4.5 0 0 0 9 5.5V9H6.5a0.5 0.5 0 0 0 -0.5 0.5v4a0.5 0.5 0 0 0 0.5 0.5H9v8.5a0.5 0.5 0 0 0 0.5 0.5h4a0.5 0.5 0 0 0 0.5 -0.5V14h2.5a0.5 0.5 0 0 0 0.485 -0.379l1 -4A0.5 0.5 0 0 0 17.5 9H14V7.5A1.5 1.5 0 0 1 15.5 6h2a0.5 0.5 0 0 0 0.5 -0.5v-4a0.5 0.5 0 0 0 -0.5 -0.5h-4Z"
                strokeWidth="1"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Studen-Circle-Network-Logo--Streamline-Logos"
              height="24"
              width="24"
            >
              <desc>
                Studen Circle Network Logo Streamline Icon:
                https://streamlinehq.com
              </desc>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M23 12c0 6.074 -4.923 10.998 -10.997 11l-0.005 0C5.924 22.999 1 18.074 1 12 1 5.925 5.925 1 12 1s11 4.925 11 11Zm-7.737 9.127a7.27 7.27 0 0 0 0.305 -0.28c1.081 -1.043 1.932 -2.47 1.932 -4.347 0 -3.07 -2.407 -4.577 -4.496 -5.806l-0.315 -0.185c-0.964 -0.564 -1.85 -1.083 -2.526 -1.693C9.433 8.158 9 7.44 9 6.5c0 -1.736 0.714 -2.768 1.58 -3.409 0.815 -0.604 1.792 -0.877 2.508 -0.998C16.923 2.753 20 6.852 20 12c0 4.127 -1.977 7.579 -4.737 9.127Zm-6.111 0.215c0.856 -0.15 2.026 -0.43 3.06 -0.928 1.331 -0.641 2.288 -1.563 2.288 -2.914 0 -0.943 -0.437 -1.695 -1.17 -2.386 -0.749 -0.704 -1.758 -1.3 -2.834 -1.933l-0.029 -0.017c-1.041 -0.613 -2.144 -1.261 -2.982 -2.05C6.625 10.305 6 9.307 6 8c0 -1.573 0.416 -2.823 1.004 -3.804C5.186 6.011 4 8.803 4 12c0 4.33 2.177 7.919 5.152 9.342Z"
                clipRule="evenodd"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
