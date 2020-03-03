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

function GraphicsView(){
  const newData = useMemo(() => {
    return dataBase.map(value => ({
      id: value.id,
      "Clientes": value.clients,
      "Funcionários": value.employees
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
      columnsBar={columns}
      dataCSV={dataBase}
      headersCSV={headers} 
      onClickCSV={() => {
        handleSaveClick("01", "graphics-image.png");
      }}
    />
  );
}

export default GraphicsView;