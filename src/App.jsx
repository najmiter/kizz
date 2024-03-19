import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

import Progress from "./components/Progress";
import QuestionCard from "./components/QuestionCard";
import Loading from "./components/Loading";
import Shoeser from "./components/Shoeser";
import Result from "./components/Result";
import Reset from "./components/Reset";

const initial_state = {
    questions: [],
    status: "loading",

    solved_count: 0,
    time_remaining: 0,
    total_points_earned: 0,
    answer: null,
};

const SECONDS_PER_QUESTION = 30;

function reducer(state, action) {
    switch (action.type) {
        case "ready":
            return {
                ...state,
                questions: action.data,
                status: "ready",
                time_remaining: action.data.length * SECONDS_PER_QUESTION,
            };
        case "failed":
            return { ...state, status: "failed" };
        case "choose_opt":
            return {
                ...state,
                total_points_earned:
                    action.data ===
                    state.questions.at(state.solved_count).true_option
                        ? state.total_points_earned +
                          state.questions.at(state.solved_count).points
                        : state.total_points_earned,
                answer: action.data,
            };

        case "time_pass":
            return {
                ...state,
                time_remaining: state.time_remaining - 1,
                status: state.time_remaining <= 0 ? "finished" : state.status,
            };

        case "next":
            return {
                ...state,
                solved_count: state.solved_count + 1,
                answer: null,
            };

        case "finish":
            return {
                ...state,
                answer: null,
                status: "finished",
            };

        case "reset":
            return {
                ...initial_state,
                questions: state.questions,
                status: "ready",
                time_remaining: state.questions.length * SECONDS_PER_QUESTION,
            };
    }
}

function App() {
    const [
        {
            questions,
            status,
            answer,
            solved_count,
            total_points_earned,
            time_remaining,
        },
        dispatch,
    ] = useReducer(reducer, initial_state);

    const total_questions = questions.length;

    useEffect(
        function () {
            fetch("./kizz.json")
                .then((jwb) => jwb.json())
                .then((questions) =>
                    dispatch({ type: "ready", data: questions })
                )
                .catch(() => dispatch({ type: "failed" }));
        },
        [dispatch]
    );

    return (
        <>
            <Header />
            {status === "loading" && <Loading />}
            <Main>
                {status === "ready" && (
                    <>
                        <Progress value={solved_count} max={total_questions} />
                        <QuestionCard
                            questions={questions}
                            solved_count={solved_count}
                            dispatch={dispatch}
                            answer={answer}
                        />
                        <Shoeser
                            time_remaining={time_remaining}
                            dispatch={dispatch}
                            is_last={solved_count === total_questions - 1}
                            answer={answer}
                        />
                    </>
                )}
                {status === "finished" && (
                    <>
                        <Result
                            total_points_earned={total_points_earned}
                            questions={questions}
                        />
                        <Reset dispatch={dispatch} />
                    </>
                )}
            </Main>
        </>
    );
}

export default App;
