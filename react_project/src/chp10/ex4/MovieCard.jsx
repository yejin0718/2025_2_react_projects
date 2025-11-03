import React from "react";
import "./MovieCard.css";

const movies = [
    {
        id: 1,
        title: "코렐라인:비밀의 문",
        genre: "애니메이션 / 가족",
        poster: "https://image.tmdb.org/t/p/original/iGp4wBc0ZBVFd2HPicyDgl6Pn1r.jpg",
    },
    {
        id: 2,
        title: "해리포터",
        genre: "판타지",
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8YaP48tVfngbURGldWk1I5odsBK.jpg",
    },
    {
        id: 3,
        title: "헝거게임",
        genre: "액션",
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/iZWZcLJ2NoyM1UoDJexgSWmXOC.jpg",
    },
    {
        id: 4,
        title: "메이즈러너",
        genre: "액션",
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/bL0bBepUCLFcCj2ATFD40FbyDEl.jpg",
    },
    {
        id: 5,
        title: "다이버전트",
        genre: "액션",
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cCLqWIcpko8soE8rW14KpZ6gu3r.jpg",
    },
    {
        id: 6,
        title: "짱구 극장판",
        genre: "애니메이션/가족",
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sqAm04lTqq5ZBWENlpV25ITAiVw.jpg",
    },
    {
        id: 7,
        title: "드래곤 길들이기",
        genre: "판타지/가족/액션",
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/frXkpt1dLKO3iDbmBsjQUKseLiS.jpg",
    },
    {
        id: 8,
        title: "코코",
        genre: "애니메이션",
        poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/pQu93NuwR90AaCULzglVD5Ge4Ml.jpg",
    },
];

function MovieCard() {
    return (
        <div className="movie-container">
            <h2 className="movie-title">내 취향 영화들</h2>
            <br />

            <div className="movie-list">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <div className="movie-info">
                            <h3 className="movie-name">{movie.title}</h3>
                            <p className="movie-genre">{movie.genre}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default MovieCard;
