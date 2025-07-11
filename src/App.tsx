import { Input } from "./components/input";

const App = () => {
  return (
    <div className="m-10">
      <Input
        status="error"
        inputsize="sm"
        placeholder="Name..."
        label="UserName"
        helpertext="Enter user name."
        textstatus="error"
      />
      <Input
        status="success"
        inputsize="md"
        placeholder="email..."
        label="Email"
        helpertext="Enter your email."
        textstatus="success"
      />
      <Input
        status="default"
        inputsize="lg"
        placeholder="password..."
        label="Password"
        helpertext="Enter Your Password."
        textstatus="default"
        type="password"
      />
    </div>
  );
};

export default App;
