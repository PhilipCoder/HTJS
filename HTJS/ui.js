import { htjsProxyHandler } from "./proxies/htjs/htjsProxyHandler.js";
import { baseProxy } from "./proxies/base/baseProxy.js";
import { moduleContainer } from "./proxies/moduleContainment/moduleProxyHandler.js";

/**
 * Proxy class for the main htjs instance.
 */
class htjsProxy extends baseProxy {
    constructor(assignable) {
        super(assignable);
    }
    /**
     * Factory method.
     * @type {InstanceType<htjsProxy>}
     */
    static async new(assignable) {
        await moduleContainer.prepopulate();
        return new Proxy(new htjsProxy(), new htjsProxyHandler(assignable));
    }
}

export { htjsProxy };