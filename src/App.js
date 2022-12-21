import "./App.css";

function App() {
  function addMark(event) {
    event.currentTarget.childNodes[0].classList.add("cross");
  }

  return (
    <div class="board">
      <div onClick={addMark}>
        <i></i>
      </div>
      <div onClick={addMark}>
        <i></i>
      </div>
      <div onClick={addMark}>
        <i></i>
      </div>
      <div onClick={addMark}>
        <i></i>
      </div>
      <div onClick={addMark}>
        <i></i>
      </div>
      <div onClick={addMark}>
        <i></i>
      </div>
      <div onClick={addMark}>
        <i></i>
      </div>
      <div onClick={addMark}>
        <i></i>
      </div>
      <div onClick={addMark}>
        <i></i>
      </div>
    </div>
  );
}

export default App;
