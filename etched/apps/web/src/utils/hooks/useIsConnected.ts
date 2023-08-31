import { useEffect, useLayoutEffect, useState } from "react";
import { useAccount } from "wagmi";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * @notice Returns true if the user is connected to the wallet
 *
 * @returns {boolean} isConnected
 * @dev This hook exists simply because of hydration issues with the useAccount hook
 */
export function useIsConnected() {
  const [isConnected, setIsConnected] = useState(false);
  const { isConnected: _isConnected } = useAccount();
  useIsomorphicLayoutEffect(() => {
    setIsConnected(_isConnected);
  }, [_isConnected]);

  return isConnected;
}
