import React from "react";
interface matrixProps{
    matrix: number[][];
    setMatrix: (matrix:number[][]) => void;
};

export default function Matrix({matrix, setMatrix}:matrixProps){
    const handleChange = (value: string, row: number, col: number)=>{
        const newMatrix = [...matrix];
        newMatrix[row][col] = Number(value);
        setMatrix(newMatrix);
    };


    
    return(
        <div className="space-y-2">
      {matrix.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((value, j) => (
            <input
              key={j}
              type="number"
              value={value}
              onChange={(e) => handleChange(e.target.value, i, j)}
              className="w-16 border p-1"
            />
          ))}
        </div>
      ))}
    </div>
    );
};