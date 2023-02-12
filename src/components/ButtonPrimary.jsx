import React from "react";

export default function ButtonPrimary({ title, clickAction }) {
  return (
    <button
      className="rounded-full bg-green-600 py-3 px-8 transition-all hover:scale-105"
      onClick={clickAction}
    >
      {title}
    </button>
  );
}
