import React from "react";

const AssetFactor = ({icon, factor}:any) => {
  return (
    <div className="px-2 h-full justify-center lg:py-4">
      <div className="flex flex-wrap flex-col lg:bg-white lg:css-factor rounded-lg lg:py-4 h-full">
        <div className="flex flex-row justify-center items-center">
          {icon}
          <p className="ml-[4px] text-xs leading-4 text-center">{factor.name}</p>
        </div>
        <p className="w-full break-words hyphens-auto text-center text-base font-medium">{factor.value}</p>
      </div>
    </div>
  );
};

export default AssetFactor;

