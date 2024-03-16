import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return(
        <div className="flex w-full justify-center">
            <input type="text" className="p-2 rounded-lg outline-none text-[16px] text-customBlue-500 w-[50%]" />

            <button className="relative bg-white p-2 rounded-lg right-10">
                <IoSearch />
            </button>
        </div>
    )
};

export default SearchBar;