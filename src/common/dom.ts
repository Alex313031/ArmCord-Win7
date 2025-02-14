import fetch from "cross-fetch";

export function addStyle(styleString: string): void {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
}

export function addScript(scriptString: string): void {
    let script = document.createElement("script");
    script.textContent = scriptString;
    document.body.append(script);
}
export async function injectJS(inject: string): Promise<void> {
    const js = await (await fetch(`${inject}`)).text();

    const el = document.createElement("script");

    el.appendChild(document.createTextNode(js));

    document.body.appendChild(el);
}
