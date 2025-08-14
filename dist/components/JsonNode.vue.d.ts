interface JsonNodeType {
    key: string;
    value: any;
    type: "string" | "number" | "boolean" | "object" | "array" | "null";
    path: string[];
    level: number;
    expanded?: boolean;
    children?: JsonNodeType[];
}
interface Props {
    node: JsonNodeType;
    editable?: boolean;
    searchQuery?: string;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    editable: boolean;
    searchQuery: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "node-click": (node: JsonNodeType) => void;
    "node-expand": (node: JsonNodeType) => void;
    "node-collapse": (node: JsonNodeType) => void;
    "value-change": (event: {
        node: JsonNodeType;
        value: any;
    }) => void;
    "node-delete": (node: JsonNodeType) => void;
    "node-add": (event: {
        parent: JsonNodeType;
        key: string;
        value: any;
    }) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    editable: boolean;
    searchQuery: string;
}>>> & Readonly<{
    "onNode-click"?: ((node: JsonNodeType) => any) | undefined;
    "onNode-expand"?: ((node: JsonNodeType) => any) | undefined;
    "onNode-collapse"?: ((node: JsonNodeType) => any) | undefined;
    "onValue-change"?: ((event: {
        node: JsonNodeType;
        value: any;
    }) => any) | undefined;
    "onNode-delete"?: ((node: JsonNodeType) => any) | undefined;
    "onNode-add"?: ((event: {
        parent: JsonNodeType;
        key: string;
        value: any;
    }) => any) | undefined;
}>, {
    editable: boolean;
    searchQuery: string;
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
