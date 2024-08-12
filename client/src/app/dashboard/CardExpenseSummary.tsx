import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";

const CardExpenseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  return <div className="row-span-3 bg-gray-500">CardExpenseSummary</div>;
};

export default CardExpenseSummary;
