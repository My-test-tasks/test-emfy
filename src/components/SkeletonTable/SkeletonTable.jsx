import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { LinearProgress, Skeleton, Stack } from "@mui/material";
import { DealsTableHead } from "../DealsTable/DealsTableHead";
import { SKELETON } from "@/const/skeleton"; //TODO SKELETON.NUMBER_OF_LINES = LIMIT
import { DealsTableTitle } from "../DealsTable/DealsTableTitle";

const skeleton = Array(SKELETON.NUMBER_OF_LINES).fill(SKELETON.FILLER);

export const SkeletonTable = () => {
  return (
    <TableContainer component={Stack} spacing={2}>
      <LinearProgress />

      <DealsTableTitle />

      <Stack direction="row" spacing={2}>
        <Skeleton variant="rounded" width={210} height={40} />
        <Skeleton variant="rounded" width={210} height={40} />
      </Stack>

      <Table sx={{ minWidth: 650 }}>
        <DealsTableHead />
        <TableBody>
          {skeleton.map((_, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell align="right">
                <Skeleton animation="wave" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
