import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { fetchDealsRequest } from "../../store/deals/actions";

const PaginationRoot = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationCont = styled.div`
  display: flex;
  gap: 3px;
`;

const PaginationItem = styled(({ visible, currentPage, ...rest }) => (
  <button {...rest} />
))`
  display: ${({ visible = true }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: ${({ currentPage }) =>
    currentPage ? "#1976d2" : "rgba(0, 0, 0, 0.87)"};
  border: ${({ currentPage }) =>
    currentPage
      ? "1px solid rgba(25, 118, 210, 0.5)"
      : "1px solid rgba(0, 0, 0, 0.23)"};
  background-color: ${({ currentPage }) =>
    currentPage ? "rgba(25, 118, 210, 0.12)" : "transparent"};

  &:hover {
    cursor: ${({ currentPage }) => (currentPage ? "default" : "pointer")};
    background-color: ${({ currentPage }) =>
      currentPage ? "transparent" : "rgba(0, 0, 0, 0.04)"};
  }
`;

export const DealsPagination = () => {
  const { first, prev, page, next } = useSelector((state) => state.pagination);
  const limit = useSelector((state) => state.limit.value);

  const dispatch = useDispatch();

  const handleFirstPage = () => {
    dispatch(fetchDealsRequest({ limit, page: 1 }));
  };

  const handlePrevPage = () => {
    dispatch(fetchDealsRequest({ limit, page: page - 1 }));
  };

  const handleNextPage = () => {
    dispatch(fetchDealsRequest({ limit, page: page + 1 }));
  };

  return (
    <>
      <PaginationRoot>
        <PaginationCont>
          <PaginationItem
            visible={first}
            name="first"
            title="Первая"
            onClick={handleFirstPage}
          >
            <FirstPageIcon fontSize="small" />
          </PaginationItem>

          <PaginationItem
            visible={prev}
            name="prev"
            title="Предыдущая"
            onClick={handlePrevPage}
          >
            <NavigateBeforeIcon fontSize="small" />
          </PaginationItem>

          {limit !== 0 && (
            <PaginationItem currentPage name="page">
              {page}
            </PaginationItem>
          )}

          <PaginationItem
            visible={next}
            name="next"
            title="Следующая"
            onClick={handleNextPage}
          >
            <NavigateNextIcon fontSize="small" />
          </PaginationItem>
        </PaginationCont>
      </PaginationRoot>
    </>
  );
};
