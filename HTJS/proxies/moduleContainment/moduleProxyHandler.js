import { moduleProxy } from "./moduleProxy.js";
import { lazyImport } from "../../helpers/lazyImport.js";
import { request } from "../../helpers/request.js";

let moduleList = "/modules/assignable";
let packageList = null;

class htjsModules {
    constructor() {
    }

    get(target, property, proxy) {
        let throwError = true;
        if (property.startsWith("&")) {
            throwError = false;
            property = property.substring(1);
        }
        if (property.startsWith("_")) {
            return target[property];
        }
        else if (target[property]) {
            return target[property];
        }
        else if (property !== "then") {
            return null;
        }
    }

    set(target, property, value) {
        if (property.startsWith("_")) {
            target[property] = value;
        }
        else if (value instanceof moduleProxy) {
            target[property] = value;
        }
        return true;
    }

    //Todo: Hardcode this
    static new() {
        let modulesTarget = new moduleProxy();
        modulesTarget.prepopulate = async function () {
            if (!modulesTarget.loaded) {
                modulesTarget.loaded = true;
                let modulesList = [
                    {name: "ui", url: "/HTJS/assignable/uiAssignable.js"},
                    {name: "bind", url: "/HTJS/bindings/bind.js"},
                    {name: "model", url: "/HTJS/bindings/model.js"},
                    {name: "event", url: "/HTJS/bindings/event.js"},
                    {name: "disabled", url: "/HTJS/bindings/disabled.js"},
                    {name: "hide", url: "/HTJS/bindings/hide.js"},
                    {name: "options", url: "/HTJS/bindings/options.js"},
                    {name: "show", url: "/HTJS/bindings/show.js"},
                    {name: "style", url: "/HTJS/bindings/style.js"},
                    {name: "attribute", url: "/HTJS/bindings/attribute.js"},
                    {name: "repeat", url: "/HTJS/bindings/repeat.js"},
                    {name: "view", url: "/HTJS/bindings/view.js"},
                    {name: "location", url: "/HTJS/bindings/location.js"},
                    {name: "watch", url: "/HTJS/bindings/watch.js"},
                    {name: "class", url: "/HTJS/bindings/class.js"},
                    {name: "viewModel", url: "/HTJS/bindings/viewModel.js"},
                    {name: "subModule", url: "/HTJS/assignable/viewModule.js"}
                ];
                let promises = modulesList.map(packageDetails => {
                    let module = lazyImport(packageDetails.url);
                    module.then(data => modulesTarget[packageDetails.name] = data.component);
                    return module;
                });
                await Promise.all(promises);
            }
        }
        return new Proxy(modulesTarget, new htjsModules());
    }

}

let moduleContainer = htjsModules.new();

export { moduleContainer };