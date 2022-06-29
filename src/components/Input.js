import React, { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
export const Input = () => {
  const [data, setData] = useState("");
  const [data2, setData2] = useState([]);

  const change = (e) => {
    setData(e.target.value);
  };
  const added = () => {
    data !== ""
      ? setData2((res) => {
          return [...res, data];
        })
      :null;
    setData("");
  };
  const deleteion = (a) => {
    let filtered = data2.filter((item, index) => {
      return a !== index;
    });
    setData2(filtered);
  };
  const editable = (a) => {
    let replace = data2.splice(a, 1, setData(data2[a]));
    deleteion(a)
  };
  return (
    <>
      <div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={change}
            value={data}
          ></textarea>
          <div className="text-center">
            <button
              type="button"
              class="btn btn-outline-success my-3"
              onClick={added}
            >
              <AddCircleIcon type="submit"></AddCircleIcon>
            </button>
          </div>
        </div>
      </div>
      <div>
        {data2.reverse().map((item, index) => {
          return (
            <li key={index}>
              <ol>
                {item}
                <button
                  type="button"
                  class="btn btn-outline-danger mx-4"
                  onClick={() => deleteion(index)}
                >
                  <DeleteOutlineIcon></DeleteOutlineIcon>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger mx-4"
                  onClick={() => editable(index)}
                >
                  <EditIcon></EditIcon>
                </button>
              </ol>
            </li>
          );
        })}
      </div>
    </>
  );
};
