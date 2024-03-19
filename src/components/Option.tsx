import React from "react";

export default function Option({ options, dispatch, answer }) {
    return (
        <div className="options">
            {options.map((option: string, idx: Number) => (
                <button
                    disabled={answer !== null}
                    className={`options-item ${answer === idx ? "selected" : ""}`}
                    key={option}
                    onClick={() => {
                        dispatch({ type: "choose_opt", data: idx });
                    }}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
