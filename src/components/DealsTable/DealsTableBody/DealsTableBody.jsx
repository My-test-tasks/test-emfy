import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { formattedDate } from "../../../utils/formattedDate";

export const DealsTableBody = () => {
  const deals = useSelector((store) => store.displayedDeals.items);

  return (
    <TableBody>
      {deals.map((deal, idx) => (
        <TableRow
          key={idx}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {deal.id}
          </TableCell>
          <TableCell align="right">{deal.name}</TableCell>
          <TableCell align="right">{deal.price}</TableCell>
          <TableCell align="right">{formattedDate(deal.created_at)}</TableCell>
          <TableCell align="right">{formattedDate(deal.updated_at)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
