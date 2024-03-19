import React from "react";

export default function Option({ options }) {
    return (
        <div className="options">
            {options.map((option: string) => (
                <div className="options-item" key={option}>
                    {option}
                </div>
            ))}
        </div>
    );
}
