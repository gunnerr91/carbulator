import { useState } from "react";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

const ItemList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchForItem } = useActions();
  const { data, loading, error } = useTypedSelector((state) => state.items);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    searchForItem(searchQuery);
    setSearchQuery("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <label>name: </label>
                {item.name}
              </div>
              <div>
                <label>carbs: </label>
                {item.carbohydrates_total_g}
              </div>
              <div>
                <label>calories: </label>
                {item.calories}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
