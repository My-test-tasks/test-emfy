import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SORT } from "@/const/sort";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../../store/sort/actions";

export const DealsTableSort = () => {
  const sort = useSelector((state) => state.sort.type);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSortType(event.target.value));
  };

  return (
    <FormControl variant="outlined" sx={{ m: 1, width: 210 }} size="small">
      <InputLabel id="sort-select-label" size="small">
        Сортировка
      </InputLabel>
      <Select
        labelId="sort-select-label"
        value={sort}
        onChange={handleChange}
        label="Сортировка"
      >
        <MenuItem value={SORT.NAME_ASC}>по Названию А-Я</MenuItem>
        <MenuItem value={SORT.NAME_DESC}>по Названию Я-А</MenuItem>
        <MenuItem value={SORT.PRICE_ASC}>по Бюджету 1-9</MenuItem>
        <MenuItem value={SORT.PRICE_DESC}>по Бюджету 9-1</MenuItem>
        <MenuItem value={SORT.WITHOUT_SORT}>Без сортировки</MenuItem>
      </Select>
    </FormControl>
  );
};
