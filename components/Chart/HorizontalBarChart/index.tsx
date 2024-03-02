import React from "react";

interface BarChartData {
  name: string;
  color: string;
  percentage: number;
}

interface HorizontalBarChartProps {
  data: BarChartData[];
  height: number;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
  height,
}) => {
  const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);

  const topThree = sortedData.slice(0, 3);
  const remainingItems = sortedData.slice(3)?.length;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          {topThree.map((item, index) => (
            <div key={index} className="flex space-x-2">
              <span>{item.name}: </span>
              <span>{item.percentage}%</span>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          ))}
        </div>
        {remainingItems > 0 && (
          <div className="flex space-x-2">
            <span>+{remainingItems}</span>
            <span>more</span>
          </div>
        )}
      </div>
      <div className="flex" style={{ height: `${height}px` }}>
        {sortedData.map((item, index) => (
          <div
            key={index}
            className="flex-none"
            style={{
              width: `${item.percentage}%`,
              backgroundColor: item.color,
            }}
          >
            <span className="text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalBarChart;
