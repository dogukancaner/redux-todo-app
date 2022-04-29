import { createStore } from "redux";
import reducers from "../reducers";

function configuteStore(preloadedSrtate) {
  const store = createStore(reducers, preloadedSrtate);

  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
const store = configuteStore();
export { store };
