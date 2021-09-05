import headerElement from "./header.js";
import mainElement from "./main.js"
import footerElement from "./footer.js";

import { createEventListener } from "../../lib/event.js";
import { cipherInputClass } from "./common.js";
import { autoSelectInput } from "../../lib/utils.js";

import { eventList } from "./event.js";

document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
document.body.appendChild(footerElement);

createEventListener(eventList);

autoSelectInput(`${cipherInputClass}-1`)