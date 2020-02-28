import React from "react";
import "./styles.css";
import BarComponent from "./Graphics/BarComponent/BarComponent";

const data = [
  {
    name: "Loja A",
    clientes: 2400,
    funcionarios: 400
  },
  {
    name: "Loja B",
    clientes: 1398,
    funcionarios: 200
  }
];

const columns = [
  {
    dataIndex: "clientes",
    fill: "pink"
  },
  {
    dataIndex: "funcionarios",
    fill: "blue"
  }
];

export default function App() {
  return (
    <div className="App">
      <BarComponent
        Data={data}
        Columns={columns}
        grid={true}
        width={400}
        height={200}
        onClick={e => {
          console.log(e);
        }}
        dataKeyName={"name"}
      />
    </div>
  );
}
