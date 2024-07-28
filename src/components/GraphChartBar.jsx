import "./chart.css";
import CHART_DATA from "../data/APIdata";
import { useMemo } from "react";

const Bar = ({ name, colour, ticketCount, height }) => {
  return (
    <div
      className="bar"
      style={{
        height: `${height}%`,
        backgroundColor: colour,
      }}
    >
      <div className="tooltip">
        {name} : {ticketCount}
      </div>
    </div>
  );
};

export const GraphChartBar = ({ data }) => {
  const maxTicketCount = useMemo(() => {
    return Math.max(...data.map((item) => item.ticketCount));
  }, []);

  return (
    <>
      <div className="container">
        <div className="chart">
          {data.map((item) => {
            return (
              <Bar
                key={item.id}
                height={(item.ticketCount / maxTicketCount) * 100}
                {...item}
              />
            );
          })}
        </div>
        <div className="y-axis-label">
          <p>Number of Tickets</p>
        </div>
        <div className="x-axis-label">
          <p>Departments</p>
        </div>
      </div>
    </>
  );
};
