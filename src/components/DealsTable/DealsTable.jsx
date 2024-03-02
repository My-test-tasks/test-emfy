import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { Stack } from "@mui/material";
import { DealsTableTitle } from "./DealsTableTitle";
import { DealsTableHead } from "./DealsTableHead";
import { DealsTableBody } from "./DealsTableBody";
import { DealsPagination } from "../DealsPagination/DealsPagination";
import { DealsTableLimit } from "./DealsTableLimit/DealsTableLimit";
import { DealsTableSort } from "./DealsTableSort";
// import { useSelector } from "react-redux";
// import { selectProducts } from "@/store/productsSlice";

export const DealsTable = () => {
  // const products = useSelector(selectProducts);

  return (
    <TableContainer component={Stack} spacing={2}>
      <DealsTableTitle />

      <Stack direction="row" spacing={2}>
        <DealsTableLimit />
        <DealsTableSort />
      </Stack>

      <Table sx={{ minWidth: 650 }}>
        <DealsTableHead />
        <DealsTableBody />
      </Table>
      <DealsPagination />
    </TableContainer>
  );
};
