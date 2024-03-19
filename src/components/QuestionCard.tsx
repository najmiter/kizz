import React from "react";
import Question from "./Question";
import Option from "./Option";

export default function QuestionCard({
    questions,
    dispatch,
    answer,
    solved_count,
}) {
    return (
        <>
            <Question question={questions.at(solved_count)} />
            <Option
                dispatch={dispatch}
                options={questions.at(solved_count).options}
                answer={answer}
            />
        </>
    );
}
