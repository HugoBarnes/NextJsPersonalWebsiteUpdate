"use client";

import { useState } from "react";
import Computations from "@/app/components/LinAlgCalculator/Computations";
import Dimensions from "@/app/components/LinAlgCalculator/Dimensions";

const matrixOperations = [
  { name: "Matrix Multiplication", id: "matrixMultiplication" },
  { name: "Dot Product", id: "dotProduct" },
  { name: "Matrix Power", id:"matrixPower" },
  {
    name: (
      <>
        M = (I - Q)
        <sup>-1</sup>
      </>
    ),
    id: "mMatrix",
  },
  {
    name: (
      <>
        A = (I - Q)
        <sup>-1</sup>(S)
      </>
    ),
    id:"absorbingMatrix",
  },
  { name: "Eigenvalues + Eigenvectors", id:"eigenComps" },
  { name: "Generalized Eigenvectors", id:"genEigen" },
  { name: "Null Space", id:"nullSpace" },
  { name: "Column Space", id:"colSpace" },
  { name: "Invert Matrix", id:"invertMatrix"},
];

export default function MatrixPage() {
  const [rows, setRows] = useState<number>(0);
  const [cols, setCols] = useState<number>(0);
  const [computation, setComputation] = useState("matrixMultiplication");

  const handleDimensionChange = (newRows: number, newCols: number) => {
    setRows(newRows);
    setCols(newCols);
  };

  // Choose what to render based on computation
  let computationContent = null;
  switch (computation) {
    case "matrixMultiplication":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">Matrix Multiplication</h2>
          {/* Add a component for matrix multiplication input here */}
        </div>
      );
      break;
    case "dotProduct":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">Dot Product</h2>
          {/* Replace with the actual Dot Product component */}
        </div>
      );
      break;
    case "matrixPower":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">Matrix Power</h2>
          {/* Replace with the actual Matrix Power component */}
        </div>
      );
      break;
    case "mMatrix":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">
            M = (I - Q)<sup>-1</sup>
          </h2>
          {/* Replace with the actual Inverse Matrix component */}
        </div>
      );
      break;
    case "absorbingMatrix":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">
            A = (I - Q)<sup>-1</sup>(S)
          </h2>
          {/* Replace with the actual Absorbing Matrix component */}
        </div>
      );
      break;
    case "eigenComps":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">
            Eigenvalues + Eigenvectors
          </h2>
          {/* Replace with the actual Eigen component */}
        </div>
      );
      break;
    case "genEigen":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">Generalized Eigenvectors</h2>
          {/* Replace with the actual Generalized Eigen component */}
        </div>
      );
      break;
    case "nullSpace":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">Null Space</h2>
          {/* Replace with the actual Null Space component */}
        </div>
      );
      break;
    case "colSpace":
      computationContent = (
        <div>
          <h2 className="text-lg font-bold p-2">Column Space</h2>
          {/* Replace with the actual Column Space component */}
        </div>
      );
      break;
    case "invertMatrix":
        computationContent = (
            <div>
                <h2 className="text-lg font-bold p-2">
                    Invert Matrix
                </h2>
            </div>
        );
        break;
    default:
      computationContent = null;
  }

  return (
    <div>
      <div className="flex flex-wrap p-2">
        {matrixOperations.map((item, index) => (
          <Computations
            key={index}
            comp={item.name}
            onClick={() => setComputation(item.id)}
          />
        ))}
      </div>
      <div className="flex flex-wrap p-2 justify-center">
        <Dimensions rows={rows} cols={cols} onChange={handleDimensionChange} />
      </div>
      <div className="p-4">{computationContent}</div>
    </div>
  );
}
