import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const MessageBox = (props) => {
  const history = useHistory();
  const { title, text, to } = props;

  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <div className="flex flex-1 text-base">
      <div>
        <div className="bg-pink-500 text-white font-bold rounded-t px-4 py-2">
          {title}
        </div>
        <div className="border border-t-0 border-pink-400 rounded-b bg-pink-100 px-4 py-3 text-pink-700">
          <p>{text}</p>

          {to === undefined ? (
            <button
              onClick={goToPreviousPath}
              className="bg-pink-500 text-white hover:bg-pink-900 rounded-md px-10 py-2 font-semibold mt-4 w-full"
            >
              VOLVER
            </button>
          ) : (
            <Link to={to}>
              <div className="bg-pink-500 text-white hover:bg-pink-900 rounded-md px-10 py-2 font-semibold mt-4 w-full text-center">
                VOLVER
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
