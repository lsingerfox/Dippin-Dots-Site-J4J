import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faStore,
    faCalendarAlt,
    faEnvelope,
    faIdCard
} from "@fortawesome/free-solid-svg-icon";

const Icons = () => {
    return library.add (
        faStore,
        faCalendarAlt,
        faEnvelope,
        faIdCard
    );
};

export default Icons;