require("../main.css");
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

library.add(faPhone, faEnvelope);
dom.watch();
