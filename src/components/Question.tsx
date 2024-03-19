import React from "react";

export default function Question({ question }) {
    return <h1 className="question">Q. {question.question}</h1>;
}
