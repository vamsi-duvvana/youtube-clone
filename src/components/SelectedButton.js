const SelectedButton = ({ name }) => {
    return (
        <div className='px-3 mx-1 text-sm font-semibold rounded-2xl py-1 whitespace-nowrap text-white bg-gray-700'>
            <button>{name}</button>
        </div>
    )
}

export default SelectedButton
