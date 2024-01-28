import Comment from "./Comment"

const CommentsList = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, index) => (
                <div key={index}>
                    <Comment  data={comment} />
                    {comment?.replies && (<div className="pl-5 border-l border-black ml-5">
                        <CommentsList comments={comment.replies} />
                    </div>)}
                </div>
            ))}
        </div>
    )
}

export default CommentsList
