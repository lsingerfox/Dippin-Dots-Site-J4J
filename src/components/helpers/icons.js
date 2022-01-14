import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faStore,
    faCalendarAlt,
    faEnvelope,
    faLock,
    faIdCard,
    faSignOutAlt
} from "@fortawesome/fontawesome-free-solid";

const Icons = () => {
    return library.add (
        faStore,
        faCalendarAlt,
        faEnvelope,
        faLock,
        faIdCard,
        faSignOutAlt
    );
};

export default Icons;