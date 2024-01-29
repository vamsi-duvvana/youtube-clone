import Search from "./Search"
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { IconContext } from "react-icons";
import { LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleHamburger } from "../utils/configSlice";

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className="p-2 m-2 flex justify-between shadow-lg items-center">
            <div className="flex">
                <button className="p-2" onClick={() => dispatch(toggleHamburger())}>
                    <IconContext.Provider value={{ size: 22 }}>
                        <GiHamburgerMenu />
                    </IconContext.Provider>
                </button>
                <a href="/">
                    <img className="p-2 h-14 ml-2 aspect-auto" src={LOGO} alt="logo" />
                </a>
            </div>
            <Search />
            <div>
                <div className="p-3 border border-gray-300 bg-white rounded-full"><CiUser /></div>
            </div>
        </div>
    )
}

export default Header
