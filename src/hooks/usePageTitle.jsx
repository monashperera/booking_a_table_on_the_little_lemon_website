import { useEffect, useState } from "react";

function usePageTitle (initialValue = "Home") {

    const [title, setTitle] = useState(initialValue);
    useEffect(() => {
        document.title = `${title} | Little Lemon Restaurant`;
    },[title]);

    return [setTitle];
};

export default usePageTitle;