const Comment = ({ data }) => {

    const { name, text } = data;

    return (
        <div className="flex shadow-lg bg-gray-300 p-2 rounded-lg my-2">
            <img
                className="w-11 h-11"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p className="">{text}</p>
            </div>
        </div>
    )
}

export default Comment
