export {};

declare global {

    interface Window extends MCUI.Window {
        vtexjs: MVJS.Namespace;
        vtex: MCUI.Namespace;
        vtexid: MVID.Namespace;
    }

    export const vtex: MCUI.Namespace;
    export const vtexjs: MVJS.Namespace;
    export const vtexid: MVID.Namespace;

}
