import { type Dispatch, type MutableRefObject, type SetStateAction, useEffect, useState } from "react";

/**
 * Hook to keep track of dropdowns and when to show them
 * will close on click outside
 * @param elementRef MutableObjectRef<null | HTMLElement>
 * @returns [boolean, Dispatch<SetStateAction<boolean>>]
 */
export const useDropdown = (elementRef: MutableRefObject<null | HTMLElement>): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [showElement, setShowElement] = useState<boolean>(false);

    // Configure click outside logic
    useEffect(() => {
        const handleClick = (event: MouseEvent | TouchEvent): void => {
            if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
                setShowElement(false)
            }
        }
        window.addEventListener('click', handleClick)
        return () => window.removeEventListener('click', handleClick)
    })

    return [
        showElement,
        setShowElement,
    ]
};
