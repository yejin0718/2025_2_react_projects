import React from "react";
import UserInfo from "./UserInfo";
import "./Comment.css"

const users = [
    {
        name: "짱구",
        comment: "test1",
        avatarUrl: "https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_1280.jpg",
    },
    {
        name: "철수",
        comment: "test2",
        avatarUrl: "https://cdn.pixabay.com/photo/2022/12/19/06/31/australian-shepherd-7664795_1280.jpg",
    },
    {
        name: "맹구",
        comment: "test3",
        avatarUrl: "https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_1280.jpg",
    }
];

function Comment(props) {
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user) => {
                    return(
                        <div className="comment">
                            <UserInfo user={user}/>
                            <div className="comment-text">
                                {user.comment}
                            </div>
                            <div className="comment-date">
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Comment;