import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
export default function useKeyPress(targetKeyCode, callback) {
    function onKeyPress({ keyCode }) {
        if (keyCode === targetKeyCode) {
            callback();
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', onKeyPress);

        return () => {
            window.removeEventListener('keyup', onKeyPress);
        };
    }, [callback]);
}
/* eslint-enable react-hooks/exhaustive-deps */
