import React from "react";
import { CSVLink } from "react-csv";

const DowndloadTable = ({ Data, Headers, FileName }) => (
  <CSVLink
    className="btn btn-primary"
    data={Data}
    headers={Headers}
    filename={FileName}
  >
    Download CSV
  </CSVLink>
);

export default DowndloadTable;
