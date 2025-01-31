import Accordion from './components/Accordion'

const App = () => {
  const accordionItems = [
    {
      id: 1,
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and is used for developing single-page applications."
    },
    {
      id: 2,
      title: "Why use React?",
      content: "React allows developers to build complex UIs from small, isolated pieces of code called ‘components’. It's fast, flexible, and has a strong community."
    },
    {
      id: 3,
      title: "How does React work?",
      content: "React creates a virtual DOM, which is a lightweight representation of the actual DOM. This allows React to efficiently update the UI by only changing the parts that need to be updated."
    },
    {
      id: 4,
      title: "What are React Hooks?",
      content: "React Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, and useContext."
    },
    {
      id: 5,
      title: "What is JSX?",
      content: "JSX stands for JavaScript XML. It’s a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files."
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-800 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;