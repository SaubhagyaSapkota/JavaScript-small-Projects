import { Input } from "./components/input";

const App = () => {
  return (
    <div className="m-10">
      <Input
        status="default"
        inputsize="sm"
        placeholder="placeholder"
        label="Label"
        helpertext="Helper Text"
        textstatus="default"
      />
      <Input
        status="error"
        inputsize="md"
        placeholder="placeholder"
        label="Label"
        helpertext="Helper Text"
        textstatus="error"
      />
      <Input
        status="success"
        inputsize="lg"
        placeholder="placeholder"
        label="Label"
        helpertext="Helper Text"
        textstatus="success"
      />
    </div>
  );
};

export default App;
