import React from "react";
import Progress from "./Progress";

export default function Main({ solved_count, total_questions, children }) {
    return (
        <main className="main">
            <Progress value={solved_count} max={total_questions} />
            {children}
        </main>
    );
}
