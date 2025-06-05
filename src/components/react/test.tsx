// Test component to verify React imports work
import { useState } from 'react';

function TestComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default TestComponent;
