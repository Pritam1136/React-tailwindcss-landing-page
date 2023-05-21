import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

function AboutMe() {
  let chartdata = [
    {
      date: "Jan 15 2021",
      Sales: 2.23,
      Profit: 0.98,
    },
    {
      date: "May 15 2021",
      Sales: 3.45,
      Profit: 1.73,
    },
    {
      date: "Oct 15 2021",
      Sales: 5.89,
      Profit: 2.19,
    },
    {
      date: "Jan 15 2022",
      Sales: 3.56,
      Profit: 1.8,
    },
    {
      date: "May 15 2022",
      Sales: 4.98,
      Profit: 1.36,
    },
    {
      date: "Oct 15 2022",
      Sales: 6.49,
      Profit: 2.95,
    },
    {
      date: "Jan 15 2023",
      Sales: 5.91,
      Profit: 2.23,
    },
  ];

  const dataFormatter = (number) => {
    return "₹ " + Intl.NumberFormat("en-IN").format(number).toString();
  };
  return (
    <div>
      <div className="body-font bg-gray-900 px-5 py-24 text-gray-400">
        <Card>
          <Title>
            Our revenue and Sales over time (2021- 2023) in INR (in Lakhs)
          </Title>
          <AreaChart
            className="mt-4 h-96"
            data={chartdata}
            index="date"
            categories={["Sales", "Profit"]}
            colors={["indigo", "cyan"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </div>
    </div>
  );
}

export default AboutMe;
