import React, { useState } from 'react'

const CommentsPage = () => {
    const [allComments, setallComments] = useState([])
    const [comment, setComment] = useState()
    const fetchComments = async () => {
        const resp = await fetch("./api/comments")
        const data = await resp.json()
        setallComments(data)
    }
    const submitComment = async () => {
        const resp = await fetch("./api/comments", {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        setComment(null)
        console.log("data", data);
        fetchComments()
    }
    const deletecomment = async (ind) => {
        const resp = await fetch(`./api/comments/${ind}`, {
            method: "DELETE"
        })
        const data = await resp.json()
        console.log("delete ", data);
        fetchComments()
    }
    return (
        <div>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            {
                allComments.map((comment) => <div>
                    {comment.id} - {comment.text}
                    <button onClick={() => deletecomment(comment.id)}>DELETE</button>
                </div>)

            }
        </div>
    )
}

export default CommentsPage