import React, { useMemo } from "react";
import domtoimage from "dom-to-image";
import fileDownload from "js-file-download";

import Graphics from "./Graphics";
import { dataBase } from "./DataBase";

const headers = [
  {
    label: "Nome",
    key: "name"
  },
  {
    label: "Clientes",
    key: "clients"
  },
  {
    label: "Funcionários",
    key: "employees"
  }
];

const columns = [
  {
    dataIndex: "Clientes",
    fill: "pink"
  },
  {
    dataIndex: "Funcionários",
    fill: "blue"
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  console.log(label);
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

function GraphicsView() {
  const newData = useMemo(() => {
    return dataBase.map(value => ({
      id: value.id,
      Clientes: value.clients,
      Funcionários: value.employees
    }));
  }, [dataBase]);

  const dataEmployees = useMemo(() => {
    return dataBase.map(e => ({
      id: e.id,
      name: e.name,
      value: e.employees
    }));
  }, [dataBase]);

  const handleSaveClick = (id, nameImage) => {
    domtoimage.toBlob(document.getElementById(id)).then(function(blob) {
      fileDownload(blob, nameImage);
    });
  };

  return (
    <Graphics
      dataBar={newData}
      dataPieChart={dataEmployees}
      columnsBar={columns}
      dataCSV={dataBase}
      headersCSV={headers}
      ActivePieChart={true}
      ContentPieChart={CustomTooltip}
      onClickCSV={() => {
        handleSaveClick("01", "graphics-image.png");
      }}
    />
  );
}

export default GraphicsView;
