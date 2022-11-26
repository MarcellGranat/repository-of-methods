function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script
          crossorigin
          src="https://unpkg.com/react@16/umd/react.development.js"
        ></script>
        <script
          crossorigin
          src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
        ></script>
        <script src="{{ $app.RelPermalink }}"></script>
        <p></p>
      </header>
    </div>
  );
}

export default App;
