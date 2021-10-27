import { useCallback, useEffect } from 'react';

export default function useKeyPress(targetKeyCode, callback) {
    const onKeyPress = useCallback(
        ({ keyCode }) => {
            if (keyCode === targetKeyCode) {
                callback();
            }
        },
        [callback, targetKeyCode]
    );

    useEffect(() => {
        window.addEventListener('keyup', onKeyPress);

        return () => {
            window.removeEventListener('keyup', onKeyPress);
        };
    }, [onKeyPress]);
}
