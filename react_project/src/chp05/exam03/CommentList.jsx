import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "방신실",
        comment: "우승을 축하드립니다.",
        url: "https://avatar.iran.liara.run/username?username=Scott+Wilson"
    },
    {
        name: "홍정민",
        comment: "건강한 모습으로 만나요.",
        url: "https://avatar.iran.liara.run/username?username=James+Taylor&background=f4d9b2&color=FF9800"
    },
    {
        name: "박서현",
        comment: "오랜만에 멋진 모습 좋았습니다.",
        url: "https://avatar.iran.liara.run/username?username=elizabeth&bold=false&length=1"
    }
];

function CommentList() {
    return(
        <div>
            {
                comments.map((comment) => {
                    return(
                      <Comment name={comment.name} comment={comment.comment} url={comment.url} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;