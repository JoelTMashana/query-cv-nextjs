"use client";
import Link from "next/link";
import { SheetSide } from "../chatBox/sheet-side";

const StickyNavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md ">
      <div className=" mx-auto px-4 py-2 flex justify-between items-center w-11/12 md:w-5/6 lg:w-5/12 ">
      <Link href="/">
        <h1 className="text-xl font-semibold">
          <span className="text-[#678fe6]">Talent</span> <span >Trove</span>
        </h1>
      </Link>
        <SheetSide />
      </div>
    </div>
  );
};

export default StickyNavBar;
