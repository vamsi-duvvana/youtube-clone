import CommentsList from "./CommentsList"

const commentsContainer = () => {

    const commentsData = [
        {
            name: "Vamsi",
            text: "Testing comments",
            replies: [
                {
                    name: "Akshay",
                    text: "Hie testing replies"
                },
                {
                    name: "Akshay",
                    text: "Hie testing replies",
                    replies: [
                        {
                            name: "Akshay",
                            text: "Hie testing replies"
                        },
                        {
                            name: "Akshay",
                            text: "Hie testing replies"
                        },
                        {
                            name: "Akshay",
                            text: "Hie testing replies"
                        },
                        {
                            name: "Akshay",
                            text: "Hie testing replies"
                        },
                    ]
                }
            ]
        },
        {
            name: "Vamsi",
            text: "Testing comments",
            replies: [
                {
                    name: "Akshay",
                    text: "Hie testing replies"
                },
                {
                    name: "Akshay",
                    text: "Hie testing replies",
                    replies: [
                        {
                            name: "Akshay",
                            text: "Hie testing replies"
                        },
                        {
                            name: "Akshay",
                            text: "Hie testing replies"
                        },
                        {
                            name: "Akshay",
                            text: "Hie testing replies"
                        },
                        {
                            name: "Akshay",
                            text: "Hie testing replies"
                        },
                    ]
                }
            ]
        },
        {
            name: "Vamsi",
            text: "Testing comments",
            replies: [
                {
                    name: "Akshay",
                    text: "Hie testing replies"
                }
            ]
        },
        {
            name: "Vamsi",
            text: "Testing comments",
            replies: [
                {
                    name: "Akshay",
                    text: "Hie testing replies"
                }
            ]
        }
    ]

    return (
        <div>
            <div className="mr-5 px-5">
                <h1 className="text-2xl first-line:font-semibold">Comments</h1>
            </div>
            <div className="m-5 p-2">
                <CommentsList comments={commentsData} />
            </div>
        </div>
    )
}

export default commentsContainer
