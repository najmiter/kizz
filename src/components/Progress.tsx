import React from "react";

export default function Progress({ value, max }) {
    const style = {
        width: `${(value / max) * 100}%`,
    };

    return (
        <div className="progress">
            <div style={style} className="progress-fill"></div>
        </div>
    );
}
