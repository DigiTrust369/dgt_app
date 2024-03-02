import React from "react";

const TextInput = (props:any) => {
const {label, name, type, register} = props
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 undefined"
      >
        {label}
      </label>
      <div className="flex flex-col items-start">
        <input
          type={type}
          name={name}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            {...register(name)}
        />
      </div>
    </div>
  );
};

export default TextInput;
