import ContactForm from "./components/ContactForm";
import EventHandling from "./components/EventHandling";
import FocusInput from "./components/FocusInput";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 bg-slate-600 text-white">
      <FocusInput />
      <h2>open console</h2>
      <ContactForm />
      <EventHandling />
    </div>
  );
}

export default App;

