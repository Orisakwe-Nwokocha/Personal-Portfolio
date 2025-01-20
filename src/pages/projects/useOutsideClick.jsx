import { useEffect } from 'react';

const useOutsideClick = (ref, condition, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target) && condition) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, condition, callback]);
};

export default useOutsideClick;