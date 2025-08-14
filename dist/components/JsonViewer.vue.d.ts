export interface JsonNodeType {
    key: string;
    value: any;
    type: "string" | "number" | "boolean" | "object" | "array" | "null";
    path: string[];
    level: number;
    expanded?: boolean;
    children?: JsonNodeType[];
}
export interface Props {
    data: any;
    editable?: boolean;
    theme?: "light" | "dark";
    defaultMode?: "tree" | "text";
    showLineNumbers?: boolean;
    maxDepth?: number;
    hideActionText?: boolean;
    hideHeader?: boolean;
    hideFooter?: boolean;
    hideModeSwitcher?: boolean;
    hideTreeControls?: boolean;
    hideEditControls?: boolean;
    hideSearchButton?: boolean;
    hideCopyButton?: boolean;
    hideDownloadButton?: boolean;
    hideThemeButton?: boolean;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    editable: boolean;
    theme: string;
    defaultMode: string;
    showLineNumbers: boolean;
    maxDepth: number;
    hideActionText: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
    hideModeSwitcher: boolean;
    hideTreeControls: boolean;
    hideEditControls: boolean;
    hideSearchButton: boolean;
    hideCopyButton: boolean;
    hideDownloadButton: boolean;
    hideThemeButton: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "node-click": (node: JsonNodeType) => void;
    "node-expand": (node: JsonNodeType) => void;
    "node-collapse": (node: JsonNodeType) => void;
    "key-change": (event: {
        node: JsonNodeType;
        oldKey: string;
        newKey: string;
    }) => void;
    "update:data": (newData: any) => void;
    "edit-start": () => void;
    "edit-save": (data: any) => void;
    "edit-cancel": () => void;
    "theme-change": (theme: "light" | "dark") => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    editable: boolean;
    theme: string;
    defaultMode: string;
    showLineNumbers: boolean;
    maxDepth: number;
    hideActionText: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
    hideModeSwitcher: boolean;
    hideTreeControls: boolean;
    hideEditControls: boolean;
    hideSearchButton: boolean;
    hideCopyButton: boolean;
    hideDownloadButton: boolean;
    hideThemeButton: boolean;
}>>> & Readonly<{
    "onNode-click"?: ((node: JsonNodeType) => any) | undefined;
    "onNode-expand"?: ((node: JsonNodeType) => any) | undefined;
    "onNode-collapse"?: ((node: JsonNodeType) => any) | undefined;
    "onKey-change"?: ((event: {
        node: JsonNodeType;
        oldKey: string;
        newKey: string;
    }) => any) | undefined;
    "onUpdate:data"?: ((newData: any) => any) | undefined;
    "onEdit-start"?: (() => any) | undefined;
    "onEdit-save"?: ((data: any) => any) | undefined;
    "onEdit-cancel"?: (() => any) | undefined;
    "onTheme-change"?: ((theme: "light" | "dark") => any) | undefined;
}>, {
    editable: boolean;
    theme: "light" | "dark";
    defaultMode: "text" | "tree";
    showLineNumbers: boolean;
    maxDepth: number;
    hideActionText: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
    hideModeSwitcher: boolean;
    hideTreeControls: boolean;
    hideEditControls: boolean;
    hideSearchButton: boolean;
    hideCopyButton: boolean;
    hideDownloadButton: boolean;
    hideThemeButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
