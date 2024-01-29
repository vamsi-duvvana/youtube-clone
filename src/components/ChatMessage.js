const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center p-2 shadow-md">
            <img
                className="w-7 h-7 "
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <span className="text-gray-600 px-3">{name}</span>
            <span className="">{message}</span>
        </div>
    )
}

export default ChatMessage
