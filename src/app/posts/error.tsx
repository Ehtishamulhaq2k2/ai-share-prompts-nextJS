"use client";
import React from "react";

type ErrorProps = {
  message?: string;
};

const Error: React.FC<ErrorProps> = ({
  message = "Something went wrong. Please try again.",
}) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "red" }}>Error</h1>
      <p>{message}</p>
    </div>
  );
};
