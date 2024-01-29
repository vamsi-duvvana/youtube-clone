import { useEffect, useRef } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { pushMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();
    const messages = useSelector(store => store.liveChat.messages);
    let typedMessage = useRef(null);

    const handleSend = () => {
        console.log(typedMessage.current.value);
        dispatch(pushMessages({
            name: "Vamsi Duvvana",
            message: typedMessage.current.value
        }))
        typedMessage.current.value = ""
    }

    useEffect(() => {
        const i = setInterval(() => {
            // API Pooling
            // console.log("API Pooling");
            dispatch(pushMessages({
                name: generateRandomName(),
                message: makeRandomMessage(10)
            }))
        }, 1500)

        return () => clearInterval(i);
    }, [])

    return (
        <div>
            <div className="ml-2 p-2 border border-black w-full h-[500px] rounded-lg bg-slate-200 overflow-y-scroll flex flex-col-reverse">
                {messages.map((data, index) => (
                    <ChatMessage key={index} name={data.name} message={data.message} />
                ))}
            </div>
            <form className="ml-2 p-2 flex justify-between shadow-lg" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input ref={typedMessage} className="w-full outline-none" type="text" placeholder="Type your message ..." />
                <button className="px-2 mx-2 bg-gray-700 text-white rounded-lg" onClick={() => handleSend()}>Send</button>
            </form>
        </div>

    )
}

export default LiveChat
