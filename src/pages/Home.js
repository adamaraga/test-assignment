import { useEffect } from "react";
import Button from "../components/Button";
import CheckItem from "../components/CheckItem";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <form className="home__main">
        <div className="home__main__top">
          <CheckItem label="All pages" />
        </div>

        <ul className="home__main__pages">
          <CheckItem label="Page 1" />
          <CheckItem label="Page 2" />
          <CheckItem label="Page 3" />
          <CheckItem label="Page 4" />
          <CheckItem label="Page 5" />
        </ul>

        <div className="home__main__btn">
          <Button>Done</Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
