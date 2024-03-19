import React from "react";

export default function Progress({ value, max }) {
    const style = {
        width: `${((value + 1) / max) * 100}%`,
    };

    return (
        <div className="progress">
            <div
                style={style}
                className="progress-fill"
                aria-valuenow={value + 1}
                aria-valuemax={max}
            ></div>
        </div>
    );
}
