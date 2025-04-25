

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";


export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        });
        return unsub 
    }, []);
    return{ currentUser}
}