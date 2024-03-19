import React from "react";
import Question from "./Question";
import Option from "./Option";

export default function QuestionCard({ questions }) {
    const current = questions.solved_count;

    return (
        <>
            <Question question={questions.at(current)} />
            <Option options={questions.at(current).options} />
        </>
    );
}
