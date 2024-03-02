import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPageLimit } from "../../../store/limit/actions";

export const DealsTableLimit = () => {
  const limit = useSelector((state) => state.limit.value);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setPageLimit(event.target.value));
  };

  return (
    <FormControl variant="outlined" sx={{ m: 1, width: 210 }} size="small">
      <InputLabel id="limit-select-label" size="small">
        Сделок на страницу
      </InputLabel>
      <Select
        labelId="limit-select-label"
        value={limit}
        onChange={handleChange}
        label="Сделок на страницу"
      >
        <MenuItem value={2}>Две</MenuItem>
        <MenuItem value={5}>Пять</MenuItem>
        <MenuItem value={10}>Десять</MenuItem>
        <MenuItem value={0}>Все</MenuItem>
      </Select>
    </FormControl>
  );
};
