import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../globalContext";

const Form = () => {
  const { setQuery } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (!query) return;
    setQuery(query);
  };
  return (
    <div>
      <h4 className="title">search high resolution images</h4>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Cat"
          name="search"
          autoComplete="off"
        />
        <button type="submit" className="btn">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Form;
