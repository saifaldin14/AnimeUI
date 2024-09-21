import React from "react";

type TableProps = {
  headers: string[];
  data: Array<Record<string, any>>;
  striped?: boolean;
  hoverable?: boolean;
  fromColor?: string; // Start color for gradient
  toColor?: string; // End color for gradient
  textColor?: string; // Text color
};

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  striped = false,
  hoverable = false,
  fromColor = "#f472b6", // Default pink-400
  toColor = "#c084fc", // Default purple-400
  textColor = "#4b5563", // Default gray-700
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        {/* Table Header */}
        <thead>
          <tr
            style={{
              background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
            }}
          >
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-anime uppercase tracking-wider"
                style={{ color: textColor }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="bg-white divide-y divide-pink-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                striped && rowIndex % 2 === 0 ? "bg-pink-50" : ""
              } ${hoverable ? "hover:bg-pink-100" : ""} transition-colors`}
            >
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Anime Vibe Elements */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Hearts */}
          <div className="absolute top-2 left-4 w-4 h-4 transform rotate-45 animate-float">
            <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
            <div className="absolute inset-0 bg-pink-300 rounded-full transform -translate-x-full"></div>
          </div>
          <div className="absolute bottom-4 right-6 w-3 h-3 transform rotate-45 animate-float delay-500">
            <div className="absolute inset-0 bg-purple-300 rounded-full"></div>
            <div className="absolute inset-0 bg-purple-300 rounded-full transform -translate-x-full"></div>
          </div>
          {/* Sparkles */}
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300"></div>
          {/* Floating Stars */}
          <div className="absolute top-6 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-white rounded-full animate-twinkle delay-200"></div>
        </div>
      </div>
      {/* TailwindCSS Custom Animations */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          .animate-twinkle {
            animation: twinkle 2s infinite;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0) rotate(45deg); }
            50% { transform: translateY(-10px) rotate(45deg); }
            100% { transform: translateY(0) rotate(45deg); }
          }
        `}
      </style>
    </div>
  );
};
