import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="notFound">
      <h1>404</h1>
      <h2>Oops! You're Lost</h2>
      <p style={{ marginBottom: 20 }}>
        The page you are looking for was not found
      </p>

      <Link to="/">
        <button className="btn">Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
