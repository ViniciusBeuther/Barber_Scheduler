import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex w-full justify-center">
      <input
        type="text"
        className="w-[50%] rounded-lg p-2 text-[16px] text-customBlue-500 outline-none"
      />

      <button className="relative right-10 rounded-lg bg-white p-2">
        <IoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
