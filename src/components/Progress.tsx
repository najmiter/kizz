import React from "react";

export default function Progress({ value, max }) {
    const style = {
        width: `${((value + 1) / max) * 100}%`,
    };

    return (
        <div className="progress" data-value={value + 1} data-max={max}>
            <div style={style} className="progress-fill"></div>
        </div>
    );
}
