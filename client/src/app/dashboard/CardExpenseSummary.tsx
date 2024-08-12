import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";

const colors = ["#00C49F", "0088FE", "FFBB28"];

const CardExpenseSummary = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className="row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Expense Summary
            </h2>
            <hr />
          </div>
        </>
      )}
    </div>
  );
};

export default CardExpenseSummary;
