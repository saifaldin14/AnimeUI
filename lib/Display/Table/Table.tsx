import React from "react";
import { getAnimePaperVars, getAnimeVars } from "../../shared";

type TableProps = {
  headers: string[];
  data: Array<Record<string, any>>;
  striped?: boolean;
  hoverable?: boolean;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  striped = false,
  hoverable = false,
  fromColor = "#f472b6",
  toColor = "#c084fc",
  textColor = "#4b5563",
  className = "",
  style,
}) => {
  const panelVars = getAnimeVars({
    fromColor,
    toColor,
    textColor: "#ffffff",
    radius: "1.5rem",
  });
  const paperVars = getAnimePaperVars({
    fromColor,
    toColor,
    textColor,
    radius: "1.4rem",
  });

  return (
    <div
      className={`anime-manga-paper overflow-x-auto ${className}`}
      style={{ ...paperVars, ...style }}
    >
      <table className="min-w-full" role="table">
        {/* Table Header */}
        <thead>
          <tr className="anime-manga-panel" style={panelVars}>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: "#ffffff" }}
                scope="col"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="divide-y divide-[#241335]/10 bg-white/60">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                striped && rowIndex % 2 === 0 ? "bg-pink-50/60" : ""
              } ${hoverable ? "hover:bg-white/90" : ""} transition-colors`}
            >
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#241335]"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
