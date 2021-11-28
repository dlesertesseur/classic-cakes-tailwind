import React from "react";

function InputField(props) {
  const { type, name, placeholder, error, textError, data, setData, disabled } = props;

  function onChangeData(event) {
    setData(event.target.value);
  }

  return (
    <div>
      <input
        type={type}
        className={
          disabled 
          ? "block border-2 border-gray-200 bg-gray-100 text-gray-400 w-full p-3 rounded"
          : "block border-2 border-purple-200 bg-purple-100 text-black w-full p-3 rounded"}
        name={name}
        placeholder={placeholder}
        value={data}
        onChange={onChangeData}
        disabled={disabled}
      />
      {error ? (
        <div className="text-sm text-red-500 mb-4">
          <p>{textError}</p>
        </div>
      ) : (
        <div className="mb-4"></div>
      )}
    </div>
  );
}

InputField.defaultProps = { type: "text", error: false };

export default InputField;
