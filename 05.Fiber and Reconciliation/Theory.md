### Virtual DOM:

- The Virtual DOM is a lightweight, in-memory representation of the actual DOM (Document Object Model) tree. It is a JavaScript object that mirrors the structure of the real DOM but is detached from the browser's rendering engine.

- When you update the state or props of a React component, React doesn't immediately update the real DOM. Instead, it first updates the Virtual DOM.

- After updating the Virtual DOM, React performs a process called "reconciliation" to determine the difference between the previous Virtual DOM and the updated one.

- Once React knows which parts of the Virtual DOM need to be updated, it applies these changes to the real DOM in an efficient manner, minimizing the number of DOM manipulations needed.

- The Virtual DOM helps React achieve better performance by reducing the frequency of expensive DOM operations, such as reflows and repaints, resulting in smoother user experiences.



### React Fiber:

- React Fiber is a complete rewrite of React's core algorithm introduced in React 16. It's an implementation of the reconciler algorithm, responsible for how React schedules, prioritizes, and executes updates.

- Fiber allows React to perform work in a more incremental and interruptible manner, enabling features like async rendering, time-slicing, and prioritization of updates.

- With Fiber, React can break down the rendering work into smaller units called fibers, allowing it to pause, abort, or prioritize certain tasks based on their importance and deadlines.

- Fiber's architecture enhances React's ability to handle complex and interactive UIs while maintaining smooth performance, even under heavy workloads or on lower-powered devices.



### Reconciliation:

- Reconciliation is the process through which React updates the real DOM to reflect changes in the Virtual DOM.

- When a component's state or props change, React initiates the reconciliation process by comparing the new Virtual DOM with the previous one.

- React identifies the differences (or "diffs") between the old and new Virtual DOM trees using a heuristic called "tree differencing.

- Once the differences are determined, React applies the necessary updates to the real DOM, efficiently updating only the parts of the UI that have changed.

- Reconciliation ensures that the UI stays in sync with the application state, providing a responsive and interactive user experience while minimizing unnecessary DOM manipulations.

- In summary, the Virtual DOM, React Fiber, and Reconciliation are integral parts of React's rendering process, working together to optimize performance, enable advanced features, and provide a smooth and responsive user experience in React applications.

Read this article: https://github.com/acdlite/react-fiber-architecture