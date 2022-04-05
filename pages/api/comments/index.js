import { comments } from "../../../data/comments";

export default function Handler(req, res) {
    // if (req.methods === 'GET') {
    //     res.status(200)?.json(comments)
    // }else if (req.method) {
    // }
    switch (req.method) {
        case "GET":
            res.status(200)?.json(comments)
            break;
        case "POST":
            const comment = req.body.comment
            const newComment = {
                id: Date.now(),
                text: comment
            }
            comments.push(newComment)
            res.status(201).json(newComment)
            break;
        default:
            break;
    }

}