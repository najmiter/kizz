import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

import QuestionCard from "./components/QuestionCard";
import Loading from "./components/Loading";

const initial_state = {
    questions: [],
    status: "loading",

    solved_count: 0,
    answer: null,
};
function reducer(state, action) {
    switch (action.type) {
        case "data_recieved":
            return { ...state, questions: action.data, status: "ready" };
        case "data_failed":
            return { ...state, status: "failed" };
    }
}

function App() {
    const [{ questions, status, answer, solved_count }, dispatch] = useReducer(
        reducer,
        initial_state
    );

    const total_questions = questions.length;

    useEffect(function () {
        fetch("./kizz.json")
            .then((jwb) => jwb.json())
            .then((questions) =>
                dispatch({ type: "data_recieved", data: questions })
            )
            .catch((_) => dispatch({ type: "data_failed" }));
    }, []);

    return (
        <>
            <Header />
            {status === "loading" && <Loading />}
            {status === "ready" && (
                <Main
                    solved_count={solved_count}
                    total_questions={total_questions}
                >
                    <QuestionCard questions={questions} />
                </Main>
            )}
        </>
    );
}

export default App;
