import Button from "./components/button";

const App = () => {
  return (
    <div className="button-container">
      <Button variant="primary" size="sm">
        Primary
      </Button>

      <Button variant="secondary" size="sm">
        Secondary
      </Button>

      <Button variant="outline" size="lg">
        Outline
      </Button>

      <Button variant="text" size="sm">
        Text
      </Button>

      <Button variant="rounded" size="lg">
        Rounded
      </Button>

      <Button variant="squared" size="md">
        Squared
      </Button>

      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
};

export default App;
