import { assignableProxyHandler } from "../base/assignableProxyHandler.js";

class htjsProxyHandler extends assignableProxyHandler {
    constructor(assignable) {
        super(assignable);
    }
}

export { htjsProxyHandler };