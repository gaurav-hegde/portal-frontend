import React from "react";

export default function PrimaryButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue text-white p-3 px-4 sm:p-3 sm:px-6 rounded"
    >
      {label}
    </button>
  );
}
