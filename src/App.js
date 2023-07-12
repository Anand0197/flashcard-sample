import { useState } from 'react';

const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2002,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
  },
];

export default function App() {
  return <CardList />;
}

function CardList() {
  const [selectId, setSelectId] = useState(null);

  function handleToggle(id) {
    if (id !== selectId) {
      setSelectId(id);
    } else {
      setSelectId(null);
    }
  }
  return (
    <div className="container">
      {questions.map((question) => (
        <Card
          title={question.question}
          id={question.id}
          answer={question.answer}
          key={question.id}
          onToggle={handleToggle}
          selectId={selectId}
        />
      ))}
    </div>
  );
}
function Card({ title, answer, id, onToggle, selectId }) {
  return (
    <div
      className={id === selectId ? `card ans` : 'card'}
      onClick={() => onToggle(id)}
    >
      <p>{id === selectId ? answer : title}</p>
    </div>
  );
}
