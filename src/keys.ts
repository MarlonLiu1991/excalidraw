export const isDarwin = /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

export const KEYS = {
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CTRL_OR_CMD: isDarwin ? "metaKey" : "ctrlKey",
  DELETE: "Delete",
  ENTER: "Enter",
  EQUAL: "Equal",
  ESCAPE: "Escape",
  MINUS: "Minus",
  NUM_ADD: "NumpadAdd",
  NUM_SUBTRACT: "NumpadSubtract",
  NUM_ZERO: "Numpad0",
  ONE: "Digit1",
  TAB: "Tab",
  ZERO: "Digit0",

  SPACE: " ",
  QUESTION_MARK_KEY: "?",
  QUOTE_KEY: "'",

  A_KEY: "KeyA",
  C_KEY: "KeyC",
  D_KEY: "KeyD",
  F_KEY: "KeyF",
  G_KEY: "KeyG",
  H_KEY: "KeyH",
  Q_KEY: "KeyQ",
  S_KEY: "KeyS",
  V_KEY: "KeyV",
  Z_KEY: "KeyZ",
} as const;

export type Key = keyof typeof KEYS;

export const isArrowKey = (key: string) =>
  key === KEYS.ARROW_LEFT ||
  key === KEYS.ARROW_RIGHT ||
  key === KEYS.ARROW_DOWN ||
  key === KEYS.ARROW_UP;

export const getResizeCenterPointKey = (event: MouseEvent | KeyboardEvent) =>
  event.altKey;

export const getResizeWithSidesSameLengthKey = (event: MouseEvent) =>
  event.shiftKey;

export const getRotateWithDiscreteAngleKey = (event: MouseEvent) =>
  event.shiftKey;
