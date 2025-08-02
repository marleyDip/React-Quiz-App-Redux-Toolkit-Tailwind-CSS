export const sampleQuestions = [
  {
    id: 1,
    question: "What is the virtual DOM in React?",
    options: [
      "A physical representation of the DOM",
      "A lightweight JavaScript representation of the DOM",
      "A database for storing DOM elements",
      "A CSS framework for styling",
    ],
    correctAnswer: 1,
    explanation:
      "The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM by libraries like React.",
  },
  {
    id: 2,
    question: "What is JSX?",
    options: [
      "A JavaScript library",
      "A syntax extension that lets you write HTML in JavaScript",
      "A CSS preprocessor",
      "A server-side rendering engine",
    ],
    correctAnswer: 1,
    explanation:
      "JSX is a syntax extension for JavaScript used with React to describe UI components. It allows you to write HTML-like code inside JavaScript.",
  },
  {
    id: 3,
    question: "Which hook is used to manage state in a functional component?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    correctAnswer: 0,
    explanation:
      "The useState hook lets you add state to functional components.",
  },
  {
    id: 4,
    question: "What does the useEffect hook do?",
    options: [
      "It manages styles",
      "It returns the component's JSX",
      "It runs side effects in a component",
      "It creates a context provider",
    ],
    correctAnswer: 2,
    explanation:
      "useEffect is used to perform side effects like data fetching, setting up subscriptions, or manually changing the DOM.",
  },
  {
    id: 5,
    question: "What is the purpose of keys in React lists?",
    options: [
      "To secure list items",
      "To identify which items have changed, added, or removed",
      "To sort items alphabetically",
      "To store list item data",
    ],
    correctAnswer: 1,
    explanation:
      "Keys help React identify which items in a list are changed, added, or removed, improving performance and accuracy when re-rendering.",
  },
  {
    id: 6,
    question: "How can you lift state up in React?",
    options: [
      "By using Redux",
      "By moving the state to a common parent component",
      "By wrapping the component in a div",
      "By using localStorage",
    ],
    correctAnswer: 1,
    explanation:
      "Lifting state up means moving the shared state to a common ancestor component so it can be shared among multiple children.",
  },
  {
    id: 7,
    question: "What does the useRef hook return?",
    options: [
      "An object with a current property",
      "A function that resets state",
      "An array of refs",
      "A DOM snapshot",
    ],
    correctAnswer: 0,
    explanation:
      "useRef returns a mutable object with a .current property that persists between renders. It's often used to reference DOM elements.",
  },
  {
    id: 8,
    question: "What is a controlled component in React?",
    options: [
      "A component controlled by Redux",
      "A component that controls user input through refs",
      "A component whose form data is handled by the component state",
      "A component that doesn't have state",
    ],
    correctAnswer: 2,
    explanation:
      "In controlled components, form input values are handled by React state instead of the DOM.",
  },
  {
    id: 9,
    question:
      "Which method is used to pass data from a parent to a child component?",
    options: ["props", "state", "context", "ref"],
    correctAnswer: 0,
    explanation:
      "Props are the primary way to pass data from a parent component to a child component in React.",
  },
  {
    id: 10,
    question: "What is the Context API used for?",
    options: [
      "Managing state across unrelated components",
      "Styling components with CSS",
      "Making API calls",
      "Optimizing rendering performance",
    ],
    correctAnswer: 0,
    explanation:
      "The Context API allows you to share values like theme or auth data across your app without passing props manually at every level.",
  },
  {
    id: 11,
    question: "What is the default behavior of React when the state changes?",
    options: [
      "It reloads the page",
      "It updates the affected DOM elements directly",
      "It re-renders the entire component",
      "It compiles the JSX again",
    ],
    correctAnswer: 2,
    explanation:
      "When state changes, React re-renders the component to reflect the updated data. It then uses the virtual DOM to apply minimal changes to the real DOM.",
  },
];
