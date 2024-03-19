import React, { useEffect } from "react";

export default function Shoeser({ dispatch, is_last, answer, time_remaining }) {
    useEffect(
        function () {
            const id = setInterval(function () {
                dispatch({ type: "time_pass" });
            }, 1000);

            return () => clearInterval(id);
        },
        [dispatch]
    );

    const minutes = Math.trunc(time_remaining / 60);
    const seconds = time_remaining % 60;

    return (
        <div className="shoeser">
            <div className={`btn timer ${time_remaining < 30 ? "danger" : ""}`}>
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
            </div>
            {answer !== null && (
                <div
                    className="btn next-btn"
                    onClick={() => {
                        dispatch({ type: is_last ? "finish" : "next" });
                    }}
                >
                    {is_last ? "Finish" : "Next"}
                </div>
            )}
        </div>
    );
}
