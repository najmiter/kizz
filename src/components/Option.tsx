import React from "react";

export default function Option({ options, dispatch, answered }) {
    return (
        <div className="options">
            {options.map((option: string, idx: Number) => (
                <button
                    disabled={answered}
                    className="options-item"
                    key={option}
                    onClick={() => {
                        dispatch({ type: "progress", data: idx });
                    }}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
