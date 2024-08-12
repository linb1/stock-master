import { useGetDashboardMetricsQuery } from "@/state/api";
import React, { useState } from "react";

const CardSalesSummary = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const saleData = data?.salesSummary || [];
  const [timeframe, setTimeframe] = useState("weekly");

  if (isError) {
    return <div className="m-5">Failed to fetch data</div>;
  }

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {isLoading ? <div className="m-5">Loading...</div> : <></>}
    </div>
  );
};

export default CardSalesSummary;
