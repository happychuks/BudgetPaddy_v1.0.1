import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function BarChartDashboard({ budgetList }) {
  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-bold text-lg flex justify-center items-center">Activities</h2>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          data={budgetList}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" stackId="a" fill="#4845d2" />
          <Bar dataKey="totalSpend" stackId="a" fill="#c3c2ff" />          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;
