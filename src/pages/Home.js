import { useEffect, useState } from "react";
import Button from "../components/Button";
import CheckItem from "../components/CheckItem";
import { toast } from "react-toastify";

const Home = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [pages, setPages] = useState([
    { id: 1, label: "Page 1", checked: false },
    { id: 2, label: "Page 2", checked: false },
    { id: 3, label: "Page 3", checked: false },
    { id: 4, label: "Page 4", checked: false },
    { id: 5, label: "Page 5", checked: false },
    { id: 6, label: "Page 6", checked: false },
  ]);

  // Handle checkbox toggle for individual pages
  const togglePageChecked = (id) => {
    setPages((prevPages) => {
      const updatedPages = prevPages.map((page) =>
        page.id === id ? { ...page, checked: !page.checked } : page
      );

      // Update "Check All" state based on individual checkboxes
      const allChecked = updatedPages.every((page) => page.checked);
      setCheckAll(allChecked);

      return updatedPages;
    });
  };

  // Handle checkbox toggle for All pages
  const toggleAllPagesChecked = (checked) => {
    setCheckAll(checked);
    setPages((prevPages) => prevPages.map((page) => ({ ...page, checked })));
  };

  // Save to localStorage
  const saveToLocalStorage = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    localStorage.setItem("ellyPages", JSON.stringify(pages));
    toast.success("Saved Successfully");
  };

  // Load saved data from localStorage
  useEffect(() => {
    const savedPages = localStorage.getItem("ellyPages");
    if (savedPages) {
      const parsedPages = JSON.parse(savedPages);
      setPages(parsedPages);

      // Check if all pages are selected
      const allChecked = parsedPages.every((page) => page.checked);
      setCheckAll(allChecked);
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <form className="home__main" onSubmit={saveToLocalStorage}>
        <div className="home__main__top">
          <CheckItem
            label="All pages"
            checked={checkAll}
            handleChange={(e) => toggleAllPagesChecked(e.target.checked)}
          />
        </div>

        <ul className="home__main__pages">
          {pages?.map((page) => {
            return (
              <CheckItem
                key={page?.id}
                label={page?.label}
                checked={page?.checked}
                handleChange={() => togglePageChecked(page?.id)}
              />
            );
          })}
        </ul>

        <div className="home__main__btn">
          <Button>Done</Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
