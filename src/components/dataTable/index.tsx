// A data table

import * as React from "react";
// import { clsx } from "clsx";

// Component styles
import "./styles.css";

// Component prop types
import { DataTableProps } from "./types";

const DataTable: React.FC<DataTableProps> = ({ children, ...rest }) => {
    return <section {...rest}>{children}</section>;
};

export default DataTable;

DataTable.displayName = "DataTable";
