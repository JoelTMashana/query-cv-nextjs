"use client";

import { SheetSide } from "../chatBox/sheet-side";

const StickyNavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md ">
      <div className=" mx-auto px-4 py-2 flex justify-between items-center w-11/12 md:w-5/6 lg:w-5/12 ">
        <h1 className="text-xl font-semibold">Talent Trove</h1>
        <SheetSide />
      </div>
    </div>
  );
};

export default StickyNavBar;
