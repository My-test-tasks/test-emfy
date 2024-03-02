import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealsRequest } from "@/store/deals/actions";
import { SkeletonTable } from "@/components/SkeletonTable/SkeletonTable";
import { DealsTable } from "@/components/DealsTable/DealsTable";

export const Deals = () => {
  const pending = useSelector((store) => store.deals.pending);
  const { page } = useSelector((state) => state.pagination);
  const limit = useSelector((state) => state.limit.value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDealsRequest({ limit, page }));
  }, [limit, page]);

  if (pending) {
    return <SkeletonTable />;
  }

  return <DealsTable />;
};
