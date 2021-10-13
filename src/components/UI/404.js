import Background from "./Background";

import notfound from "../../assets/404.svg";

const NotFound = () => {
  return (
    <Background>
      <div className="notfound">
        <img src={notfound} alt="page not found" />
        <h5 className="mb-small errortitle">Oops, Page not found</h5>
        <p className="title title-grey mb-small ">
          We can’t seem to find the page you are looking for.
        </p>
        <a
          // type="button"
          href="https://payercoins.com"
          className="button button_primary"
        >
          Go Back Home
        </a>
      </div>
    </Background>
  );
};

export default NotFound;
