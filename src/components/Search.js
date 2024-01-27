import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { SEARCH_API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const dispatch = useDispatch();

    const searchCache = useSelector(store => store.search);

    const getSearchSuggestions = async () => {
        const data = await fetch(SEARCH_API_URL + searchQuery);
        const json = await data.json();
        dispatch(cacheResults(json));
        setSuggestions(json[1]);
    }

    useEffect(() => {
        // API CAll
        // Debouncing :
        // make an api call after every key press
        // but if the difference between 2 API calls is less than 200ms then decline the call.
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions()
            }
            // getSearchSuggestions()
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery])

    return (
        <div className="py-2">
            <div className="flex">
                <input onFocus={onFocus} onBlur={onBlur} className="rounded-l-full w-96 border border-gray-300 px-5 py-1 outline-none focus:border-blue-800" type="text" placeholder="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button className="px-3 border border-gray-300 bg-white rounded-r-full" ><IoIosSearch /></button>
            </div>
            {focused && suggestions.length > 0 && <div className="absolute bg-white py-2 px-5 w-96 shadow-lg rounded-l-lg border-b border-l border-r border-gray-300">
                <ul>
                    {suggestions?.map((suggestion) => (<li key={suggestion} className="py-1 hover:bg-gray-300 px-2 rounded-lg">{suggestion}</li>))}
                </ul>
            </div>}
        </div>
    )
}

export default Search
