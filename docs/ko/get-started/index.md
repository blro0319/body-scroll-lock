# 시작하기

## 설치

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

## 사용법

`disableBodyScroll` 함수를 호출해 스크롤을 잠그고, `enableBodyScroll` 함수를 호출해 스크롤 잠금을 해제할 수 있습니다.

```js
import { disableBodyScroll, enableBodyScroll } from "@blro/body-scroll-lock";

// 스크롤 잠금
disableBodyScroll();

// 스크롤 잠금 해제
enableBodyScroll();
```

`disableBodyScroll` 함수를 여러 번 호출하면, 그 횟수만큼 `enableBodyScroll` 함수를 호출해야 스크롤 잠금이 해제됩니다.

```js
import { disableBodyScroll, enableBodyScroll } from "@blro/body-scroll-lock";

// 두 번 잠금
disableBodyScroll();
disableBodyScroll();

// 잠금 한 번 해제
enableBodyScroll();

// 아직 스크롤이 잠겨 있음

// 한 번 더 해제
enableBodyScroll();

// 이제 스크롤이 잠금 해제 됨
```

또는 `resetBodyScroll` 함수를 호출해 잠금 횟수와 상관없이 스크롤을 잠금 해제할 수 있습니다.

```js
import {
  disableBodyScroll,
  enableBodyScroll,
  resetBodyScroll,
} from "@blro/body-scroll-lock";

// 두 번 잠금
disableBodyScroll();
disableBodyScroll();

// 초기화
resetBodyScroll();

// 스크롤이 활성화 됨
```
