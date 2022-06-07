import "./App.css";
import { defineComponent, ref } from "reactivue";

const App = defineComponent(
  () => {
    const count = ref(0);
    return {
      count,
      inc: () => {
        count.value = count.value + 1;
      },
    };
  },
  ({ count, inc }) => {
    return (
      <div>
        <p>Count is {count}.</p>
        <button onClick={inc}>Increment</button>
      </div>
    );
  }
);

export default App;
