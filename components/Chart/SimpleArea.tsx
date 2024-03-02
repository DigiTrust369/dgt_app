import React, { useState } from "react";

import KassAreaChart from "@/components/Chart/KassAreaChart/KassAreaChart";
import useTab from "@/components/Tabbar/useTab";
import Tabs from "@/components/Tabbar/Tabs";
import Tab from "@/components/Tabbar/Tab";

import styles from "./SimpleArea.module.scss";
import HorizontalBarChart from "./HorizontalBarChart";

type Props = {};

const data = [
  {
    name: "23 Nov, 2023",
    price: 7.1,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "24 Nov, 2023",
    price: 10,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "25 Nov, 2023",
    price: 11.2,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: "26 Nov, 2023",
    price: 11,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: "27 Nov, 2023",
    price: 10.9,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: "28 Nov, 2023",
    price: 10.7,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: "29 Nov, 2023",
    price: 9.8,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: "30 Nov, 2023",
    price: 10,
    // pv: 4300,
    // amt: 2100,
  },
];

const ChartSimpleArea = (props: Props) => {
  const [chartSelected, onSelectChartChange] = useTab("price");
  const [periodSelected, onSelectedPeriod] = useTab("day-1D");
  const [chartData, setChartData] = useState(data);

  function handleTabChange(value: any) {
    // TODO: fetch api and change data here
    onSelectChartChange(value);
  }

  function handleChangePeriod(value: any) {
    // TODO: fetch api and change data here
    onSelectedPeriod(value);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-2 justify-between">
        <div>
          <Tabs value={chartSelected} onChange={handleTabChange}>
            <Tab index="price">Price</Tab>
            <Tab index="tvl">TVL</Tab>
            <Tab index="allocation">Allowcation</Tab>
          </Tabs>
        </div>
        <div>
          <Tabs
            className={styles["period-tabs"]}
            value={periodSelected}
            onChange={handleChangePeriod}
          >
            <Tab index="day-1D">1D</Tab>
            <Tab index="day-1W">1W</Tab>
            <Tab index="day-1M">1M</Tab>
            <Tab index="day-3M">3M</Tab>
            <Tab index="day-1Y">1Y</Tab>
          </Tabs>
        </div>
      </div>
      <div>
        <KassAreaChart data={data} />
      </div>
      <div className="flex flex-col gap-4">
        <div>Chart only</div>
        <div>
          <KassAreaChart data={data} isChartOnly />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>HorizontalBarChart</div>
        <div>
          <HorizontalBarChart
            data={[
              { name: "Item 1", color: "blue", percentage: 12 },
              { name: "Item 2", color: "green", percentage: 5 },
              { name: "Item 3", color: "red", percentage: 28 },
              { name: "Item 4", color: "gray", percentage: 5 },
              { name: "Item 5", color: "black", percentage: 25 },
              { name: "Item 6", color: "yellow", percentage: 25 },
            ]}
            height={5}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartSimpleArea;
