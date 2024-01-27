import React from 'react'

const ShimmerUi = () => {
    return (
        <div className='flex justify-evenly px-2 flex-wrap ml-6'>
            {Array(20).fill("").map((e, index) => (
                <div key={index}>
                    <div className="p-2 m-2 w-80 ">
                        <div className='w-72 h-36 bg-gray-300 rounded-lg'></div>
                        <ul className='p-2'>
                            <li className="mt-2 bg-gray-300 w-72 h-6"></li>
                            <li className="mt-2 bg-gray-300 w-60 h-4"></li>
                            <li className="mt-2 bg-gray-300 w-60 h-4"></li>
                        </ul>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default ShimmerUi