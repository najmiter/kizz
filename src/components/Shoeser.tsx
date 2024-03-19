import React from "react";

export default function Shoeser({ dispatch, is_last }) {
    return (
        <div className="shoeser">
            <div className="btn timer">05:00</div>
            <div
                className="btn next-btn"
                onClick={() => {
                    dispatch({ type: is_last ? "finish" : "next" });
                }}
            >
                {is_last ? "Finish" : "Next"}
            </div>
        </div>
    );
}
