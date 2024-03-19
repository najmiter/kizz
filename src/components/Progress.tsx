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
                data-value={value + 1}
                data-max={max}
            ></div>
        </div>
    );
}
