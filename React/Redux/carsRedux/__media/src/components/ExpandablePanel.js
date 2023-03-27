import React, { useState } from "react";
import { BsCaretLeftSquare, BsCaretDownSquare } from "react-icons/bs";

export default function ExpandablePanel(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  function expanderHandler() {
    setIsExpanded((prev) => !prev);
  }
  return (
    <div key={props.id} className="mb-3">
      <div className="border-2 border-primary-subtle p-2 d-flex gap-4 align-items-center ">
        {props.header}
        <div className="ms-auto cursor-pointer" onClick={expanderHandler}>
          {isExpanded ? <BsCaretDownSquare /> : <BsCaretLeftSquare />}
        </div>
      </div>
      {isExpanded && (
        <div className=" border-2 border-top-0 p-3 border-primary-subtle">
          {props.children}
        </div>
      )}
    </div>
  );
}
