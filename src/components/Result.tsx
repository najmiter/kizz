import React from "react";

export default function Result({ total_points_earned, questions }) {
    const total_points = questions.reduce(
        (p: Number, question) => p + question.points,
        0
    );

    return (
        <div className="result">
            <h2>You scored:</h2>
            <div>
                <span className="obtained">{total_points_earned}</span>/
                <span className="total">{total_points}</span>
            </div>
        </div>
    );
}
