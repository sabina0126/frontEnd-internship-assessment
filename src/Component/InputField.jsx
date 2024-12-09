import React from "react";

const InputField = ({ label, type, placeholder, options, required }) => {
  return (
    <div>
      <label className="block text-sm font-normal text-gray-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "select" ? (
        <select
          className="mt-1 w-full px-4 py-2 text-md text-gray-400 border border-gray-300 rounded-md focus:ring-blue-500"
        >
          {options?.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`mt-1 w-full px-4 ${
            type === "textarea" ? "pt-2 pb-14" : "py-2"
          } border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      )}
    </div>
  );
};


export default InputField;
