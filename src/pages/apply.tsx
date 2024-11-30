import React from "react";

const apply = () => {
  return (
    <div id="apply" className="min-h-full bg-gray-700">
      <div className="flex items-center justify-center h-[80vh] bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] h-[80vh] " />
        <div className="p-10 pr-20 max-w-[1240px] text-white z-[2] mt-[-5rem]">
          <h2 className="text-5xl font-bold">Apply Now !!</h2>
        </div>
      </div>
    </div>
  );
};

export default apply;
