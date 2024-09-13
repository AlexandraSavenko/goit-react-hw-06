import { useDispatch, useSelector } from "react-redux";
import { setFilteredContacts } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filter);

  const handleFilterChange = (e) =>
    dispatch(setFilteredContacts(e.target.value));
  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}
