import { assignable } from "/HTJS/assignable/assignable.js"
import { htjsProxy } from "/HTJS/ui.js";
import { router } from "../logic/router.js";;
import { uiProxy } from "../proxies/ui/uiProxy.js"

let htjsUIInstance = null;

class component extends assignable {
    constructor() {
        super({}, htjsProxy);
        this.router = null;
    }

    static get noValues() {
        return htjsProxy;
    }

    completionResult() {
        htjsUIInstance = uiProxy.new(this.parentProxy, this.propertyName, this);
        return htjsUIInstance;
    }

    completed() {
        this.router = new router(this.parentProxy);
        if (window.location.hash.length === 0) {
            this.router.navigate("/");
        }
    }
}

export { component, htjsUIInstance };