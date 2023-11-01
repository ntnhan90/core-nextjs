import React from "react";

const Header = () => {
  return (
    <div
      className="row shadow-sm border-primary-subtle d-flex align-items-center text-dark"
      style={{
        backgroundColor: "#eeece1",
        minHeight: "50px",
        borderBottom: "1px solid ",
      }}
    >
      <div className="col-2 text-center p-0 ">BANANLINK</div>
      <div className="col-10 d-flex justify-content-between p-0 align-items-center">
        <div className="ps-3">URL : https://treetown/asdfasdf</div>
        <div className="pe-5 d-flex gap-3 align-items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-chat-left mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
