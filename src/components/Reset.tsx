import React from "react";

export default function Reset({ dispatch }) {
    return (
        <div className="reset">
            <button className="btn" onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
        </div>
    );
}
