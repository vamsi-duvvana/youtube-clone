import { useSelector } from "react-redux"
import { BUTTON_LIST_NAME } from "../utils/constants"
import Button from "./Button"
import SelectedButton from "./SelectedButton";

const ButtonList = () => {

    const selectedButtonIndex = useSelector(store => store.config.selectedButtonIndex);

    return (
        <div className="flex p-2">
            {BUTTON_LIST_NAME.map((name, index) => {
                return (
                    <div key={index}>
                        {(name === BUTTON_LIST_NAME[selectedButtonIndex]) ? (
                            <SelectedButton name={name} index={index} />
                        ) : (
                            <div >
                                <Button name={name} index={index} />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonList
