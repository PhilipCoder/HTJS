import { assignableProxyHandler } from "/HTJS/proxies/base/assignableProxyHandler.js";

class uiProxyHandler extends assignableProxyHandler {
    constructor(parentProxy,parentProperty,assignable) {
        super(assignable);
    }
}

export { uiProxyHandler };