import React from "react";

export default function Option({ options, dispatch, answer }) {
    return (
        <div className="options">
            {options.map((option: string, idx: Number) => (
                <button
                    disabled={answer}
                    className="options-item"
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
