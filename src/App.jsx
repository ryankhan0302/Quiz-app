import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("Rs 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "All the ______ countries likely to have Constitution ?",
      answers: [
        {
          text: "democratic",
          correct: true,
        },
        {
          text: "oligarchic",
          correct: false,
        },
        {
          text: " communist",
          correct: false,
        },
        {
          text: "totalitarian",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which is largest island in the world?",
      answers: [
        {
          text: "New Guinea",
          correct: false,
        },
        {
          text: "Andaman Nicobar",
          correct: false,
        },
        {
          text: "Greenland",
          correct: true,
        },
        {
          text: "Hawaii",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "Rs 100" },
        { id: 2, amount: "Rs 200" },
        { id: 3, amount: "Rs 300" },
        { id: 4, amount: "Rs 500" },
        { id: 5, amount: "Rs 1.000" },
        { id: 6, amount: "Rs 2.000" },
        { id: 7, amount: "Rs 4.000" },
        { id: 8, amount: "Rs 8.000" },
        { id: 9, amount: "Rs 16.000" },
        { id: 10, amount: "Rs 32.000" },
        { id: 11, amount: "Rs 64.000" },
        { id: 12, amount: "Rs 125.000" },
        { id: 13, amount: "Rs 250.000" },
        { id: 14, amount: "Rs 500.000" },
        { id: 15, amount: "Rs 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
