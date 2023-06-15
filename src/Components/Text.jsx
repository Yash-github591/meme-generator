import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to edit");
  return (
    <div>
      <Draggable>
        <div style={{ cursor: "pointer" }}>
          {editMode ? (
            <input
              value={val}
              onDoubleClick={() => setEditMode(false)}
              onChange={(e) => setVal(e.target.value)}
            />
          ) : (
            <h1 onDoubleClick={() => setEditMode(true)}>{val}</h1>
          )}
        </div>
      </Draggable>
    </div>
  );
};

export default Text;
