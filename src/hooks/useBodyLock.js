import { useEffect } from 'react';

/**
 * Locks `document.body` scroll when `locked` is true.
 */
export function useBodyLock(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
}
