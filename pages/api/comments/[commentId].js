import { comments } from "../../../data/comments"

export default function handler(req, res) {
    const { commentId } = req.query
    switch (req.method) {
        case "GET":
            const comment = comments.find(comment => comment.id === parseInt(commentId))
            res.status(200).json(comment)
            break;
        case "DELETE":
            const deleteComment = comments.find(comment => comment.id === parseInt(commentId))
            const index = comments.findIndex(comment => comment.id === parseInt(commentId))
            comments.splice(index, 1)
            res.status(200).json(deleteComment)
            break;
        default:
            break;
    }
}

// export default function Comment({ comment }) {
//     return (
//         <div>{comment.id} {comment.text}</div>
//     )
// }
// export default function getStaticPaths() {
//     return {
//         paths: {
//             params: {
//                 commentId: '1'
//             },
//             params: {
//                 commentId: '2'
//             },
//             params: {
//                 commentId: '3'
//             }
//         },
//         fallback: false
//     }
// }
// export default function getStaticProps(context) {
//     const { params } = context
//     const { commentId } = params
//     const comment = comments.find(comment => comment.id === parseInt(commentId))
//     return {
//         props: {
//             comment
//         }
//     }
// }