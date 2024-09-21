import React from "react";
import { Table } from "./Table";

export default {
  component: Table,
};

const headers = ["Name", "Age", "Email"];
const data = [
  { Name: "Alice", Age: 25, Email: "alice@example.com" },
  { Name: "Bob", Age: 30, Email: "bob@example.com" },
  { Name: "Charlie", Age: 28, Email: "charlie@example.com" },
  { Name: "David", Age: 22, Email: "david@example.com" },
];

export const Default = () => <Table headers={headers} data={data} />;

export const StripedRows = () => (
  <Table headers={headers} data={data} striped={true} />
);

export const HoverableRows = () => (
  <Table headers={headers} data={data} hoverable={true} />
);

export const StripedAndHoverable = () => (
  <Table headers={headers} data={data} striped={true} hoverable={true} />
);

export const LongData = () => {
  const longData = Array.from({ length: 20 }, (_, i) => ({
    Name: `User ${i + 1}`,
    Age: 20 + (i % 10),
    Email: `user${i + 1}@example.com`,
  }));
  return <Table headers={headers} data={longData} />;
};

export const CustomHeaders = () => {
  const customHeaders = ["Product", "Price", "In Stock"];
  const customData = [
    { Product: "Widget A", Price: "$10.99", "In Stock": "Yes" },
    { Product: "Widget B", Price: "$12.99", "In Stock": "No" },
    { Product: "Widget C", Price: "$9.99", "In Stock": "Yes" },
  ];
  return <Table headers={customHeaders} data={customData} />;
};

export const EmptyData = () => <Table headers={headers} data={[]} />;

export const CustomColors = () => (
  <Table
    headers={headers}
    data={data}
    striped={true}
    hoverable={true}
    fromColor="#ffafbd"
    toColor="#ffc3a0"
    textColor="#4b5563"
  />
);
