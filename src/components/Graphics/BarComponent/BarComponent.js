import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

const BarComponent = ({
  width,
  height,
  onClick = () => {},
  grid,
  Data,
  dataKeyName,
  Columns,
  Id
}) => {
  return (
    <>
      <BarChart width={width} height={height} data={Data} onClick={onClick}>
        {grid && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey={dataKeyName} />
        <YAxis />
        <Tooltip />
        <Legend />
        {Columns &&
          Columns.map((barItem, index) => {
            return (
              <Bar
                key={index}
                dataKey={barItem.dataIndex}
                fill={barItem.fill}
              />
            );
          })}
      </BarChart>
    </>
  );
};

export default BarComponent;
