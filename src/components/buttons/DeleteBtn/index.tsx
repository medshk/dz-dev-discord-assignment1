import React, { useState } from "react";
interface Iprops {
  handleClick: () => void;
}
export default function DeleteBtn({ handleClick }: any) {
  return (
    <>
      <button
        onClick={handleClick}
        className="rounded text-white bg-red-500 py-1 px-2"
      >
        Delete
      </button>
    </>
  );
}
