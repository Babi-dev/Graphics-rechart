import React from "react";

import BarComponent from "../../components/Graphics/BarComponent/BarComponent";
import DowndloadTable from "../../components/CSVLinkComponent/CSVLinkComponent";

function Graphics({dataBar, columnsBar, dataCSV, onClickCSV, headersCSV}){
  
  return(
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
        <button
          className="btn"
          onClick={onClickCSV}
        >
          Download Image
        </button>
        <DowndloadTable
          Data={dataCSV}
          Headers={headersCSV}
          FileName={"Graphic-csv.csv"}
        />
      </div>
      </>
  );
}

export default Graphics;