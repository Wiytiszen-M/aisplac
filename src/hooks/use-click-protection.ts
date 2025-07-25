'use client';

import { useState, useCallback } from 'react';

interface UseClickProtectionOptions {
  cooldownMs?: number;
  maxClicksPerSecond?: number;
}

export function useClickProtection(options: UseClickProtectionOptions = {}) {
  const { cooldownMs = 1000, maxClicksPerSecond = 1 } = options;

  const [isProcessing, setIsProcessing] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const executeWithProtection = useCallback(
    async (callback: () => Promise<void> | void) => {
      const now = Date.now();

      // Verificar si está en cooldown
      if (isProcessing) {
        return false;
      }

      // Verificar tiempo mínimo entre clicks
      if (now - lastClickTime < 1000 / maxClicksPerSecond) {
        return false;
      }

      setIsProcessing(true);
      setLastClickTime(now);
      setClickCount((prev) => prev + 1);

      try {
        await callback();
        return true;
      } catch (error) {
        console.error('Error en executeWithProtection:', error);
        return false;
      } finally {
        // Aplicar cooldown
        setTimeout(() => {
          setIsProcessing(false);
        }, cooldownMs);
      }
    },
    [isProcessing, lastClickTime, cooldownMs, maxClicksPerSecond]
  );

  return {
    isProcessing,
    clickCount,
    executeWithProtection,
    canClick: !isProcessing,
  };
}
