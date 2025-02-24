import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center gap-4">
      <Button
        label="Disabled"
        onClick={() => alert("Clicked")}
        isDisabled={true}
      />
      <Button
        label="Click"
        onClick={() => alert("Clicked")}
        isDisabled={false}
      />
    </div>
  );
}

export default App;