import React from "react";

import BarComponent from "../../components/Graphics/BarComponent/BarComponent";
import DowndloadTable from "../../components/CSVLinkComponent/CSVLinkComponent";
import PieChartComponent from "../../components/Graphics/PieChartComponent/PieChartComponent";

function Graphics({
  dataBar,
  columnsBar,
  dataCSV,
  onClickCSV,
  headersCSV,
  dataPieChart
}) {
  return (
    <>
      <section id="01" style={{ backgroundColor: "#fff" }}>
        <BarComponent
          Data={dataBar}
          Columns={columnsBar}
          grid={true}
          width={400}
          height={200}
          onClick={e => {
            console.log(e);
          }}
          dataKeyName={"name"}
        />
      </section>

      <div>
        <div id="node-to-convert" />
        <button className="btn" onClick={onClickCSV}>
          Download Image
        </button>
        <DowndloadTable
          Data={dataCSV}
          Headers={headersCSV}
          FileName={"Graphic-csv.csv"}
        />
      </div>

      <PieChartComponent Data={dataPieChart} />
    </>
  );
}

export default Graphics;
