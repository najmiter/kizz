import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

import Progress from "./components/Progress";
import QuestionCard from "./components/QuestionCard";
import Loading from "./components/Loading";

const initial_state = {
    questions: [],
    status: "loading",

    solved_count: 0,
    total_points_earned: 0,
    answer: null,
};
function reducer(state, action) {
    switch (action.type) {
        case "data_recieved":
            return { ...state, questions: action.data, status: "ready" };
        case "data_failed":
            return { ...state, status: "failed" };
        case "progress":
            return {
                ...state,
                solved_count: state.solved_count + 1,
                total_points_earned:
                    action.data ===
                    state.questions.at(state.solved_count).true_option
                        ? state.total_points_earned +
                          state.questions.at(state.solved_count).points
                        : state.total_points_earned,
                answer: action.data,
            };
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
                <Main>
                    <Progress value={solved_count} max={total_questions} />
                    <QuestionCard
                        questions={questions}
                        dispatch={dispatch}
                        answer={answer}
                    />
                </Main>
            )}
        </>
    );
}

export default App;
