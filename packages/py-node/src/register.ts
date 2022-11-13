import pynode from "@fridgerator/pynode";

export function registerPythonHandler() {
    pynode.startInterpreter()

    require.extensions[".py"] = (module, filename) => {
        pynode.call
    }
}