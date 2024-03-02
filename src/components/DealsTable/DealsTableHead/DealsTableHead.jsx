import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const DealsTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell align="right">Название</TableCell>
        <TableCell align="right">Бюджет</TableCell>
        <TableCell align="right">Создана</TableCell>
        <TableCell align="right">Изменена</TableCell>
      </TableRow>
    </TableHead>
  );
};
