"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * False during server render and the first client render, true afterwards.
 *
 * Use it to gate anything that can only be known in the browser — the visitor's
 * clock, their resolved theme — so the initial client render still matches the
 * server markup. Preferred over a `useState` + `useEffect` mounted flag, which
 * triggers a cascading re-render.
 */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
