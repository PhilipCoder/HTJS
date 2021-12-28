import { htjsProxy } from "./ui.js"
import {init} from "../app.js";
(async () => {
    let proyxyIntance = await htjsProxy.new();
    init(proyxyIntance);
})();