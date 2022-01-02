# @jdthornton/useinterval

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/useinterval.svg)](https://www.npmjs.com/package/@jdthornton/useinterval)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/useinterval.svg)](https://www.npmjs.com/package/@jdthornton/useinterval)

React interval hook.

## Install

```
$ npm install @jdthornton/useinterval
```

## Usage

```js
import { useState } from 'react';
import useInterval from "@jdthornton/useinterval";

function App(){
  const [ isCountActive, setIsCountActive ] = useState();
  const [ count, setCount ] = useState(0);
  const handleCountToggle = () => setIsCountActive(prevIsCountActive => !prevIsCountActive)
  useInterval(
    () => setCount(prevCount => prevCount + 1),
    isCountActive ? 1000 : null
  )
  return(
    <div>
      <div>Count: {count}</div>
      <button type="button" onClick={handleCountToggle}>
        {isCountActive ? "Stop" : "Start"}
      </button>
    </div>
  )
}
```
