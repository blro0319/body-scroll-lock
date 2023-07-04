# @blro/body-scroll-lock

## Installation

::: code-group

```bash [npm]
npm install @blro/body-scroll-lock
```

```bash [pnpm]
pnpm add @blro/body-scroll-lock
```

```bash [yarn]
yarn add @blro/body-scroll-lock
```

:::

## Usage

You can lock the scroll by calling the `disableBodyScroll` function, and unlock the scroll by calling the `enableBodyScroll` function.

```js
import { disableBodyScroll, enableBodyScroll } from "@blro/body-scroll-lock";

// Lock the scroll
disableBodyScroll();

// Unlock the scroll
enableBodyScroll();
```

If you call the `disableBodyScroll` function multiple times, you must call the `enableBodyScroll` function as many times as you called it to unlock the scroll.

```js
import { disableBodyScroll, enableBodyScroll } from "@blro/body-scroll-lock";

// Lock twice
disableBodyScroll();

// Unlock once
enableBodyScroll();

// Scroll is still locked

// Unlock once more
enableBodyScroll();

// Now the scroll is unlocked
```

Or you can call the `resetBodyScroll` function to unlock the scroll regardless of the number of locks.

```js
import {
  disableBodyScroll,
  enableBodyScroll,
  resetBodyScroll,
} from "@blro/body-scroll-lock";

// Lock twice
disableBodyScroll();
disableBodyScroll();

// Unlock once
enableBodyScroll();

// Scroll is unlocked
```
