export function disableBodyScroll(target: Element) {
  const state = getGlobalState();
  if (!state) return;

  if (state.entries.get(target)) return;
  state.entries.set(target, {});

  // If scroll is already disabled, don't set it again.
  if (state.entries.size > 1) return;

  if (state.isIOS) {
    const html = document.documentElement;
    const body = document.body;

    state.htmlStyles = {
      overflow: html.style.overflow,
      height: html.style.height,
    };
    state.bodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
      height: body.style.height,
    };

    const { scrollX, scrollY } = window;
    state.scrollX = scrollX;
    state.scrollY = scrollY;

    html.style.height = "100%";
    html.style.overflow = "hidden";

    body.style.position = "fixed";
    body.style.top = -scrollY + "px";
    body.style.left = -scrollX + "px";
    body.style.width = "100%";
    body.style.height = "auto";
    body.style.overflow = "hidden";
  } else {
    state.bodyStyles.overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
}

export function enableBodyScroll(target: Element) {
  const state = getGlobalState();
  if (!state) return;

  if (!state.entries.get(target)) return;
  state.entries.delete(target);

  // If there are still entries left, don't restore the scroll.
  if (state.entries.size > 0) return;

  if (state.isIOS) {
    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = state.htmlStyles.overflow;
    html.style.height = state.htmlStyles.height;

    body.style.overflow = state.bodyStyles.overflow;
    body.style.position = state.bodyStyles.position;
    body.style.top = state.bodyStyles.top;
    body.style.left = state.bodyStyles.left;
    body.style.width = state.bodyStyles.width;
    body.style.height = state.bodyStyles.height;

    const { scrollX, scrollY } = state;
    window.scrollTo(scrollX, scrollY);
  } else {
    document.body.style.overflow = state.bodyStyles.overflow;
  }
}

function getGlobalState() {
  if (typeof window === "undefined") return;
  if (!window.__bodyScrollLock) initGlobalState();
  return window.__bodyScrollLock;
}
function initGlobalState() {
  if (typeof window === "undefined") return;
  window.__bodyScrollLock = {
    entries: new Map(),
    htmlStyles: {
      overflow: "",
      height: "",
    },
    bodyStyles: {
      overflow: "",
      position: "",
      top: "",
      left: "",
      width: "",
      height: "",
    },
    scrollX: 0,
    scrollY: 0,
    isIOS: getIsIOS(),
  };
}
function getIsIOS() {
  if (typeof window === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

declare global {
  interface Window {
    __bodyScrollLock?: {
      entries: Map<Element, {}>;
      htmlStyles: {
        overflow: string;
        height: string;
      };
      bodyStyles: {
        overflow: string;
        position: string;
        top: string;
        left: string;
        width: string;
        height: string;
      };
      scrollX: number;
      scrollY: number;
      isIOS: boolean;
    };
  }
}
