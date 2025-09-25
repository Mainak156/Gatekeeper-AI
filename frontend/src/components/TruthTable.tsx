interface TruthTableProps {
  headers: string[];
  rows: (string | number)[][];
  title?: string;
}

export const TruthTable = ({ headers, rows, title }: TruthTableProps) => {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      )}
      <div className="truth-table shadow-card">
        <table className="w-full">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex}
                    className={cellIndex === row.length - 1 ? "font-bold text-primary" : ""}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};