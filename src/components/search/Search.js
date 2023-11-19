import "./Searchstyle.css";
import clothes1 from "../../assets/images/products/clothes-1.jpg";
const Search = ({ setShowSearch }) => {
  return (
    <>
      <div className="search-result-content">
        <ul>
          <li className="options">
            <div className="search-image-box">
              <img src={clothes1} alt="" className="search-image" />
            </div>
            <div className="prod-option">
              <h4 className="prod-name">product-name</h4>
              <b className="prod-category">in category</b>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Search;
