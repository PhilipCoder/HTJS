import { assignable } from "/HTJS/assignable/assignable.js"
import { uiProxy } from "../proxies/ui/uiProxy.js"

let htjsUIInstance = null;

class component extends assignable {
    constructor() {
        super({}, uiProxy);
    }

    completionResult() {
        return false;
    }

    completed() {
        this.parentProxy._assignable.parentProxy._viewModuleNames = this.parentProxy._assignable.parentProxy._viewModuleNames || [];
        this.parentProxy._assignable.parentProxy._viewModuleNames.push(this.propertyName);
    }
}

export { component, htjsUIInstance };