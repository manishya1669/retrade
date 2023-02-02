import React from "react";

const Spinner = () => {
  return (
    <div class="flex justify-center items-center">
      <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      />
    </div>
  );
};

export default Spinner;
