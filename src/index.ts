import { useEffect } from 'react';
import useCallbackRef from '@jdthornton/usecallbackref';

type CallbackType = () => void

export default function useInterval (
  callback: CallbackType = () => {},
  delay: number | null
) {
  const savedCallback = useCallbackRef(callback)

  useEffect(() => {
    if(delay !== null){
      const tick = () => savedCallback.current && savedCallback.current(),
            id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}
