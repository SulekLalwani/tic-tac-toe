import "./App.css";

function App() {
  let crossTurn = true;

  function addMark(event) {
    if (crossTurn) {
      event.currentTarget.childNodes[0].classList.add("cross");
    } else {
      event.currentTarget.childNodes[0].classList.add("circle");
    }
    crossTurn = crossTurn ? false : true;
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
