import { IoIosSearch } from "react-icons/io";


const Search = () => {
    return (
        <div className="py-2">
            <div className="flex">
                <input className="rounded-l-full w-96 border border-gray-300 px-5 py-1 outline-none" type="text" placeholder="search" />
                <button className="px-3 border border-gray-300 bg-white rounded-r-full" ><IoIosSearch /></button>
            </div>
        </div>
    )
}

export default Search
