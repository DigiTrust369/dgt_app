import cn from "classnames";
import { useState } from "react";
import {
  Area,
  AreaChart,
  // ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styles from "./KassAreaChart.module.scss";

interface IKassAreaChartProp {
  data?: any;
  chartColor?: string;
  isChartOnly?: boolean;
}

const KassAreaChart = (props: IKassAreaChartProp) => {
  const { data, chartColor = "#E843C4", isChartOnly = false } = props;
  const [activePayload, setActivePayload] = useState(data[data.length - 1]);

  return (
    <div className={cn("flex flex-col gap-4", styles.root)}>
      {!isChartOnly && activePayload && (
        <div className="flex flex-col gap-0.5">
          <div className="text-xl font-semibold">${activePayload?.price}</div>
          <div className="text-sm text-light text-slate-500">
            {activePayload?.name}
          </div>
        </div>
      )}
      <AreaChart
        width={750}
        height={250}
        data={data}
        margin={{ top: 0, left: -57, right: 4, bottom: 0 }}
        onMouseMove={(data: any) => {
          if (data?.activePayload) {
            setActivePayload(data.activePayload[0]?.payload);
          }
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={chartColor} stopOpacity="0.3"></stop>
            <stop offset="100%" stopColor={chartColor} stopOpacity="0"></stop>
          </linearGradient>
        </defs>

        <XAxis dataKey="name" hide />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={-28}
          hide={isChartOnly}
        />
        <Area
          type="monotone"
          dataKey="price"
          stroke={chartColor}
          fill="url(#colorUv)"
        />
        {!isChartOnly && (
          <Tooltip
            active={false}
            cursor={{ fill: chartColor, stroke: "#fff", strokeWidth: 2 }}
          />
        )}
      </AreaChart>
    </div>
  );
};

export default KassAreaChart;
