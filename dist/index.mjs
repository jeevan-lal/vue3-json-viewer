import { openBlock as o, createElementBlock as s, createElementVNode as l, createStaticVNode as je, defineComponent as we, ref as g, computed as D, watch as xe, resolveComponent as Be, normalizeClass as T, normalizeStyle as be, createBlock as U, unref as f, withDirectives as Q, withKeys as H, vModelText as Y, toDisplayString as K, Fragment as Z, vModelDynamic as Ae, withModifiers as ke, createCommentVNode as u, createVNode as $, renderList as _e, nextTick as re, onMounted as Je, createTextVNode as ge } from "vue";
const v = (y, r) => {
  const n = y.__vccOpts || y;
  for (const [h, C] of r)
    n[h] = C;
  return n;
}, Oe = {}, Te = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ee(y, r) {
  return o(), s("svg", Te, r[0] || (r[0] = [
    l("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }, null, -1),
    l("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "21"
    }, null, -1),
    l("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "3"
    }, null, -1)
  ]));
}
const Ie = /* @__PURE__ */ v(Oe, [["render", Ee]]), Me = {}, Ve = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ke(y, r) {
  return o(), s("svg", Ve, r[0] || (r[0] = [
    l("polyline", { points: "16,18 22,12 16,6" }, null, -1),
    l("polyline", { points: "8,6 2,12 8,18" }, null, -1)
  ]));
}
const De = /* @__PURE__ */ v(Me, [["render", Ke]]), Le = {}, He = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ue(y, r) {
  return o(), s("svg", He, r[0] || (r[0] = [
    l("polyline", { points: "7,13 12,18 17,13" }, null, -1),
    l("polyline", { points: "7,6 12,11 17,6" }, null, -1)
  ]));
}
const $e = /* @__PURE__ */ v(Le, [["render", Ue]]), Fe = {}, qe = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function ze(y, r) {
  return o(), s("svg", qe, r[0] || (r[0] = [
    l("polyline", { points: "17,11 12,6 7,11" }, null, -1),
    l("polyline", { points: "17,18 12,13 7,18" }, null, -1)
  ]));
}
const Ce = /* @__PURE__ */ v(Fe, [["render", ze]]), Qe = {}, Pe = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Re(y, r) {
  return o(), s("svg", Pe, r[0] || (r[0] = [
    l("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }, null, -1),
    l("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }, null, -1)
  ]));
}
const Xe = /* @__PURE__ */ v(Qe, [["render", Re]]), Ge = {}, We = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ye(y, r) {
  return o(), s("svg", We, r[0] || (r[0] = [
    l("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }, null, -1),
    l("polyline", { points: "17,21 17,13 7,13 7,21" }, null, -1),
    l("polyline", { points: "7,3 7,8 15,8" }, null, -1)
  ]));
}
const Ze = /* @__PURE__ */ v(Ge, [["render", Ye]]), en = {}, nn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function tn(y, r) {
  return o(), s("svg", nn, r[0] || (r[0] = [
    l("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }, null, -1),
    l("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }, null, -1),
    l("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    }, null, -1)
  ]));
}
const on = /* @__PURE__ */ v(en, [["render", tn]]), ln = {}, sn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function rn(y, r) {
  return o(), s("svg", sn, r[0] || (r[0] = [
    l("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2"
    }, null, -1),
    l("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }, null, -1)
  ]));
}
const an = /* @__PURE__ */ v(ln, [["render", rn]]), dn = {}, cn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function un(y, r) {
  return o(), s("svg", cn, r[0] || (r[0] = [
    l("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, null, -1),
    l("polyline", { points: "7,10 12,15 17,10" }, null, -1),
    l("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }, null, -1)
  ]));
}
const yn = /* @__PURE__ */ v(dn, [["render", un]]), hn = {}, pn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function fn(y, r) {
  return o(), s("svg", pn, r[0] || (r[0] = [
    l("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }, null, -1),
    l("path", { d: "M21 21l-4.35-4.35" }, null, -1)
  ]));
}
const vn = /* @__PURE__ */ v(hn, [["render", fn]]), kn = {}, gn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function _n(y, r) {
  return o(), s("svg", gn, r[0] || (r[0] = [
    l("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }, null, -1),
    l("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }, null, -1)
  ]));
}
const mn = /* @__PURE__ */ v(kn, [["render", _n]]), bn = {}, wn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function xn(y, r) {
  return o(), s("svg", wn, r[0] || (r[0] = [
    l("polyline", { points: "9,18 15,12 9,6" }, null, -1)
  ]));
}
const $n = /* @__PURE__ */ v(bn, [["render", xn]]), Cn = {}, Nn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Sn(y, r) {
  return o(), s("svg", Nn, r[0] || (r[0] = [
    l("polyline", { points: "6,9 12,15 18,9" }, null, -1)
  ]));
}
const jn = /* @__PURE__ */ v(Cn, [["render", Sn]]), Bn = {}, An = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Jn(y, r) {
  return o(), s("svg", An, r[0] || (r[0] = [
    l("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }, null, -1),
    l("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }, null, -1)
  ]));
}
const On = /* @__PURE__ */ v(Bn, [["render", Jn]]), Tn = {}, En = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function In(y, r) {
  return o(), s("svg", En, r[0] || (r[0] = [
    l("polyline", { points: "3,6 5,6 21,6" }, null, -1),
    l("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1),
    l("line", {
      x1: "10",
      y1: "11",
      x2: "10",
      y2: "17"
    }, null, -1),
    l("line", {
      x1: "14",
      y1: "11",
      x2: "14",
      y2: "17"
    }, null, -1)
  ]));
}
const Mn = /* @__PURE__ */ v(Tn, [["render", In]]), Vn = {}, Kn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Dn(y, r) {
  return o(), s("svg", Kn, r[0] || (r[0] = [
    l("polyline", { points: "20,6 9,17 4,12" }, null, -1)
  ]));
}
const Ln = /* @__PURE__ */ v(Vn, [["render", Dn]]), Hn = {}, Un = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Fn(y, r) {
  return o(), s("svg", Un, r[0] || (r[0] = [
    l("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }, null, -1),
    l("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }, null, -1)
  ]));
}
const qn = /* @__PURE__ */ v(Hn, [["render", Fn]]), zn = {}, Qn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Pn(y, r) {
  return o(), s("svg", Qn, r[0] || (r[0] = [
    l("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
  ]));
}
const Rn = /* @__PURE__ */ v(zn, [["render", Pn]]), Xn = {}, Gn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Wn(y, r) {
  return o(), s("svg", Gn, r[0] || (r[0] = [
    je('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
  ]));
}
const Yn = /* @__PURE__ */ v(Xn, [["render", Wn]]), Zn = {
  key: 0,
  class: "expand-icon"
}, et = {
  key: 1,
  class: "expand-placeholder"
}, nt = { class: "node-value" }, tt = ["type"], ot = {
  key: 2,
  class: "node-controls"
}, lt = ["title"], st = {
  key: 0,
  class: "children"
}, rt = {
  key: 0,
  class: "add-form"
}, at = {
  key: 1,
  class: "colon"
}, it = { class: "add-controls" }, dt = /* @__PURE__ */ we({
  __name: "JsonNode",
  props: {
    node: {},
    editable: { type: Boolean, default: !1 },
    searchQuery: { default: "" }
  },
  emits: ["node-click", "node-expand", "node-collapse", "value-change", "key-change", "node-delete", "node-add"],
  setup(y, { emit: r }) {
    const n = y, h = r, C = g(!1), j = g(!1), E = g(""), N = g(""), A = g(!1), J = g(""), p = g(""), L = g(), I = g(), M = D(() => n.node.type === "object" || n.node.type === "array"), ee = D(() => n.node.level > 0), ae = D(() => n.node.level === 0 ? n.node.type === "array" ? "Array" : "Object" : de() === "array" ? `[${n.node.key}]` : `"${n.node.key}"`), ie = D(() => {
      if (!n.searchQuery)
        return !1;
      const t = n.searchQuery.toLowerCase(), i = n.node.key.toLowerCase().includes(t), k = typeof n.node.value == "string" && n.node.value.toLowerCase().includes(t);
      return i || k;
    }), ne = D(() => !n.node.children || !n.searchQuery ? n.node.children || [] : n.node.children.filter((t) => {
      const i = n.searchQuery.toLowerCase(), k = t.key.toLowerCase().includes(i), m = typeof t.value == "string" && t.value.toLowerCase().includes(i), q = P(t, i);
      return k || m || q;
    })), de = () => n.node.path.length <= 1 ? null : "object", ce = () => n.node.type === "array" ? `Array[${Array.isArray(n.node.value) ? n.node.value.length : 0}]` : n.node.type === "object" ? `Object{${n.node.value && typeof n.node.value == "object" ? Object.keys(n.node.value).length : 0}}` : "", ue = (t) => t === null ? "null" : typeof t == "string" ? `"${t}"` : typeof t == "boolean" || typeof t == "number" ? t.toString() : String(t), te = () => {
      switch (n.node.type) {
        case "number":
          return "number";
        case "boolean":
          return "checkbox";
        default:
          return "text";
      }
    }, P = (t, i) => t.children ? t.children.some((k) => {
      const m = k.key.toLowerCase().includes(i), q = typeof k.value == "string" && k.value.toLowerCase().includes(i), _ = P(k, i);
      return m || q || _;
    }) : !1, ye = () => {
      M.value && oe(), h("node-click", n.node);
    }, oe = () => {
      n.node.expanded ? h("node-collapse", n.node) : h("node-expand", n.node);
    }, he = () => {
      !n.editable || !ee.value || (E.value = n.node.key, C.value = !0, re(() => {
        var t, i;
        (t = L.value) == null || t.focus(), (i = L.value) == null || i.select();
      }));
    }, le = () => {
      E.value !== n.node.key && h("key-change", {
        node: n.node,
        oldKey: n.node.key,
        newKey: E.value
      }), R();
    }, R = () => {
      C.value = !1, E.value = "";
    }, pe = () => {
      if (!(!n.editable || M.value)) {
        if (n.node.type === "boolean") {
          h("value-change", {
            node: n.node,
            value: !n.node.value
          });
          return;
        }
        N.value = n.node.type === "string" ? n.node.value : String(n.node.value), j.value = !0, re(() => {
          var t, i;
          (t = I.value) == null || t.focus(), (i = I.value) == null || i.select();
        });
      }
    }, X = () => {
      let t = N.value;
      try {
        switch (n.node.type) {
          case "number":
            if (t = parseFloat(N.value), isNaN(t)) {
              alert("Invalid number format");
              return;
            }
            break;
          case "boolean":
            t = N.value === "true";
            break;
          case "string":
            t = N.value;
            break;
          default:
            t = JSON.parse(N.value);
        }
        h("value-change", { node: n.node, value: t });
      } catch (i) {
        console.error(i);
        return;
      }
      F();
    }, F = () => {
      j.value = !1, N.value = "";
    }, se = () => {
      confirm("Are you sure you want to delete this item?") && h("node-delete", n.node);
    }, fe = () => {
      A.value = !0, J.value = "", p.value = "", n.node.type === "array" ? re(() => {
        const t = document.querySelector(".add-form .value-input");
        t == null || t.focus();
      }) : re(() => {
        const t = document.querySelector(".add-form .key-input");
        t == null || t.focus();
      });
    }, G = () => {
      var t;
      try {
        let i = J.value, k = p.value;
        if (n.node.type === "object" && !i.trim()) {
          alert("Key is required for object properties");
          return;
        }
        n.node.type === "array" && (i = (((t = n.node.children) == null ? void 0 : t.length) || 0).toString());
        try {
          k = JSON.parse(p.value);
        } catch {
          p.value === "true" || p.value === "false" ? k = p.value === "true" : !isNaN(Number(p.value)) && p.value.trim() !== "" ? k = Number(p.value) : p.value === "null" ? k = null : k = p.value;
        }
        h("node-add", { parent: n.node, key: i, value: k }), z();
      } catch (i) {
        console.error(i);
      }
    }, z = () => {
      A.value = !1, J.value = "", p.value = "";
    };
    return xe(() => n.searchQuery, (t) => {
      t && M.value && P(n.node, t.toLowerCase()) && h("node-expand", n.node);
    }), (t, i) => {
      const k = Be("JsonNode", !0);
      return o(), s("div", {
        class: T(["json-node", `level-${t.node.level}`])
      }, [
        l("div", {
          class: T(["node-header", {
            expandable: M.value,
            expanded: t.node.expanded,
            highlighted: ie.value
          }]),
          onClick: ye
        }, [
          l("div", {
            class: "indentation",
            style: be({ width: `${t.node.level * 20}px` })
          }, null, 4),
          M.value ? (o(), s("div", Zn, [
            t.node.expanded ? (o(), U(f(jn), { key: 1 })) : (o(), U(f($n), { key: 0 }))
          ])) : (o(), s("div", et)),
          l("span", {
            class: T(["node-key", { editable: t.editable && ee.value }])
          }, [
            C.value ? Q((o(), s("input", {
              key: 0,
              "onUpdate:modelValue": i[0] || (i[0] = (m) => E.value = m),
              onBlur: le,
              onKeydown: [
                H(le, ["enter"]),
                H(R, ["escape"])
              ],
              class: "key-input",
              ref_key: "keyInput",
              ref: L
            }, null, 544)), [
              [Y, E.value]
            ]) : (o(), s("span", {
              key: 1,
              onDblclick: he
            }, K(ae.value), 33))
          ], 2),
          i[11] || (i[11] = l("span", { class: "colon" }, ":", -1)),
          l("div", nt, [
            M.value ? (o(), s("span", {
              key: 1,
              class: T(["value-summary", `value-${t.node.type}`])
            }, K(ce()), 3)) : (o(), s(Z, { key: 0 }, [
              j.value ? Q((o(), s("input", {
                key: 0,
                "onUpdate:modelValue": i[1] || (i[1] = (m) => N.value = m),
                type: te(),
                onBlur: X,
                onKeydown: [
                  H(X, ["enter"]),
                  H(F, ["escape"])
                ],
                class: T(["value-input", `value-${t.node.type}`]),
                ref_key: "valueInput",
                ref: I
              }, null, 42, tt)), [
                [Ae, N.value]
              ]) : (o(), s("span", {
                key: 1,
                class: T(["value-display", `value-${t.node.type}`, { editable: t.editable }]),
                onDblclick: pe
              }, K(ue(t.node.value)), 35))
            ], 64))
          ]),
          t.editable ? (o(), s("div", ot, [
            M.value ? (o(), s("button", {
              key: 0,
              onClick: ke(oe, ["stop"]),
              class: "control-icon",
              title: t.node.expanded ? "Collapse" : "Expand"
            }, [
              t.node.expanded ? (o(), U(f(Ce), { key: 0 })) : (o(), U(f($e), { key: 1 }))
            ], 8, lt)) : u("", !0),
            t.node.type === "object" || t.node.type === "array" ? (o(), s("button", {
              key: 1,
              onClick: ke(fe, ["stop"]),
              class: "control-icon add-icon",
              title: "Add Item"
            }, [
              $(f(On))
            ])) : u("", !0),
            l("button", {
              onClick: ke(se, ["stop"]),
              class: "control-icon delete-icon",
              title: "Delete"
            }, [
              $(f(Mn))
            ])
          ])) : u("", !0)
        ], 2),
        M.value && t.node.expanded && t.node.children ? (o(), s("div", st, [
          (o(!0), s(Z, null, _e(ne.value, (m, q) => (o(), U(k, {
            key: `${m.path.join(".")}-${q}`,
            node: m,
            editable: t.editable,
            "search-query": t.searchQuery,
            onNodeClick: i[2] || (i[2] = (_) => t.$emit("node-click", _)),
            onNodeExpand: i[3] || (i[3] = (_) => t.$emit("node-expand", _)),
            onNodeCollapse: i[4] || (i[4] = (_) => t.$emit("node-collapse", _)),
            onValueChange: i[5] || (i[5] = (_) => t.$emit("value-change", _)),
            onKeyChange: i[6] || (i[6] = (_) => t.$emit("key-change", _)),
            onNodeDelete: i[7] || (i[7] = (_) => t.$emit("node-delete", _)),
            onNodeAdd: i[8] || (i[8] = (_) => t.$emit("node-add", _))
          }, null, 8, ["node", "editable", "search-query"]))), 128)),
          A.value ? (o(), s("div", rt, [
            l("div", {
              class: "indentation",
              style: be({ width: `${(t.node.level + 1) * 20}px` })
            }, null, 4),
            i[12] || (i[12] = l("div", { class: "expand-placeholder" }, null, -1)),
            t.node.type === "object" ? Q((o(), s("input", {
              key: 0,
              "onUpdate:modelValue": i[9] || (i[9] = (m) => J.value = m),
              placeholder: "Key",
              class: "key-input",
              onKeydown: [
                H(G, ["enter"]),
                H(z, ["escape"])
              ]
            }, null, 544)), [
              [Y, J.value]
            ]) : u("", !0),
            t.node.type === "object" ? (o(), s("span", at, ":")) : u("", !0),
            Q(l("input", {
              "onUpdate:modelValue": i[10] || (i[10] = (m) => p.value = m),
              placeholder: "Value",
              class: "value-input",
              onKeydown: [
                H(G, ["enter"]),
                H(z, ["escape"])
              ]
            }, null, 544), [
              [Y, p.value]
            ]),
            l("div", it, [
              l("button", {
                onClick: G,
                class: "add-btn",
                title: "Add"
              }, [
                $(f(Ln))
              ]),
              l("button", {
                onClick: z,
                class: "cancel-btn",
                title: "Cancel"
              }, [
                $(f(qn))
              ])
            ])
          ])) : u("", !0)
        ])) : u("", !0)
      ], 2);
    };
  }
});
const ct = /* @__PURE__ */ v(dt, [["__scopeId", "data-v-f06c026c"]]), ut = {
  key: 0,
  class: "menu-bar"
}, yt = {
  key: 0,
  class: "mode-switcher"
}, ht = { key: 0 }, pt = { key: 0 }, ft = {
  key: 1,
  class: "tree-controls"
}, vt = { key: 0 }, kt = { key: 0 }, gt = {
  key: 2,
  class: "edit-controls"
}, _t = { key: 0 }, mt = { key: 0 }, bt = { key: 0 }, wt = { class: "additional-controls" }, xt = { key: 0 }, $t = ["title"], Ct = { class: "view-area" }, Nt = {
  key: 0,
  class: "search-bar"
}, St = {
  key: 1,
  class: "tree-view"
}, jt = {
  key: 2,
  class: "text-view"
}, Bt = {
  key: 1,
  class: "json-display-container"
}, At = {
  key: 0,
  class: "line-numbers"
}, Jt = { class: "json-display" }, Ot = ["innerHTML"], Tt = {
  key: 0,
  class: "json-error-message"
}, Et = {
  key: 1,
  class: "footer"
}, It = { class: "footer-info" }, Mt = { class: "info-item" }, Vt = { class: "info-item" }, Kt = {
  key: 0,
  class: "info-item"
}, Dt = /* @__PURE__ */ we({
  __name: "JsonViewer",
  props: {
    data: {},
    editable: { type: Boolean, default: !0 },
    theme: { default: "light" },
    defaultMode: { default: "tree" },
    showLineNumbers: { type: Boolean, default: !1 },
    maxDepth: { default: 3 },
    hideActionText: { type: Boolean, default: !1 },
    hideHeader: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    hideModeSwitcher: { type: Boolean, default: !1 },
    hideTreeControls: { type: Boolean, default: !1 },
    hideEditControls: { type: Boolean, default: !1 },
    hideSearchButton: { type: Boolean, default: !1 },
    hideCopyButton: { type: Boolean, default: !1 },
    hideDownloadButton: { type: Boolean, default: !1 },
    hideThemeButton: { type: Boolean, default: !1 }
  },
  emits: ["update:data", "node-click", "node-expand", "node-collapse", "key-change", "edit-start", "edit-save", "edit-cancel", "theme-change"],
  setup(y, { emit: r }) {
    const n = y, h = r, C = g(n.defaultMode), j = g(!1), E = g(""), N = g(!1), A = g(""), J = g(null), p = g(!1), L = g(""), I = g([]), M = D(() => JSON.stringify(n.data).length), ee = D(() => {
      const e = (a) => {
        let d = a.length;
        return a.forEach((c) => {
          c.children && (d += e(c.children));
        }), d;
      };
      return e(I.value);
    }), ae = D(() => {
      if (!n.data)
        return "";
      const e = JSON.stringify(n.data, null, 2);
      return fe(e);
    }), ie = D(() => {
      if (!n.data || !n.showLineNumbers)
        return [];
      const a = JSON.stringify(n.data, null, 2).split(`
`);
      return Array.from({ length: a.length }, (d, c) => c + 1);
    }), ne = (e) => {
      C.value = e;
    }, de = () => {
      j.value ? te() : ce();
    }, ce = () => {
      J.value = JSON.parse(JSON.stringify(n.data)), A.value = JSON.stringify(n.data, null, 2), j.value = !0, h("edit-start");
    }, ue = () => {
      if (C.value === "text") {
        if (p.value) {
          alert("Please fix JSON errors before saving");
          return;
        }
        try {
          const e = JSON.parse(A.value);
          h("update:data", e);
        } catch {
          alert("Invalid JSON format");
          return;
        }
      }
      j.value = !1, J.value = null, h("edit-save", n.data);
    }, te = () => {
      J.value && (h("update:data", J.value), A.value = JSON.stringify(J.value, null, 2)), j.value = !1, J.value = null, p.value = !1, L.value = "", h("edit-cancel");
    }, P = () => {
      const e = (a) => {
        a.forEach((d) => {
          (d.type === "object" || d.type === "array") && (d.expanded = !0, d.children && e(d.children));
        });
      };
      e(I.value);
    }, ye = () => {
      const e = (a) => {
        a.forEach((d) => {
          (d.type === "object" || d.type === "array") && (d.expanded = !1, d.children && e(d.children));
        });
      };
      e(I.value);
    }, oe = async () => {
      try {
        const e = JSON.stringify(n.data, null, 2);
        await navigator.clipboard.writeText(e);
        const a = document.querySelector(".copy-btn");
        a && (a.classList.add("copied"), setTimeout(() => {
          a.classList.remove("copied");
        }, 1500));
      } catch (e) {
        console.error("Failed to copy to clipboard:", e);
      }
    }, he = () => {
      const e = JSON.stringify(n.data, null, 2), a = new Blob([e], { type: "application/json" }), d = URL.createObjectURL(a), c = document.createElement("a");
      c.href = d, c.download = "data.json", document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(d);
    }, le = () => {
      const e = n.theme === "light" ? "dark" : "light";
      h("theme-change", e);
    }, R = () => {
      N.value = !N.value, N.value || (E.value = "");
    }, pe = () => {
      try {
        JSON.parse(A.value), p.value = !1, L.value = "";
      } catch (e) {
        p.value = !0, L.value = e.message;
      }
    }, X = (e, a = [], d = 0, c) => {
      if (e === null)
        return [{
          key: "",
          value: null,
          type: "null",
          path: a,
          level: d
        }];
      if (d === 0 && (Array.isArray(e) || typeof e == "object" && e !== null)) {
        const x = Array.isArray(e) ? "array" : "object", S = c && c[0], b = S ? S.expanded : !0;
        return [{
          key: x === "array" ? "Array" : "Object",
          value: e,
          type: x,
          path: [],
          level: 0,
          expanded: b,
          children: F(e, [], 1, S == null ? void 0 : S.children)
        }];
      }
      return F(e, a, d, c);
    }, F = (e, a = [], d = 0, c) => {
      const x = [], S = (b, w) => {
        if (b)
          return b.find(
            (O) => O.path.length === w.length && O.path.every((V, B) => V === w[B])
          );
      };
      return Array.isArray(e) ? e.forEach((b, w) => {
        const O = [...a, w.toString()], V = se(b), B = S(c, O), ve = B ? B.expanded : d < n.maxDepth, W = {
          key: w.toString(),
          value: b,
          type: V,
          path: O,
          level: d,
          expanded: ve
        };
        (V === "object" || V === "array") && (W.children = F(b, O, d + 1, B == null ? void 0 : B.children)), x.push(W);
      }) : typeof e == "object" && e !== null && Object.entries(e).forEach(([b, w]) => {
        const O = [...a, b], V = se(w), B = S(c, O), ve = B ? B.expanded : d < n.maxDepth, W = {
          key: b,
          value: w,
          type: V,
          path: O,
          level: d,
          expanded: ve
        };
        (V === "object" || V === "array") && (W.children = F(w, O, d + 1, B == null ? void 0 : B.children)), x.push(W);
      }), x;
    }, se = (e) => e === null ? "null" : Array.isArray(e) ? "array" : typeof e == "object" ? "object" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : "string", fe = (e) => e.replace(/("[\w\s]*")\s*:/g, '<span class="json-key">$1</span>:').replace(/:\s*(".*?")/g, ': <span class="json-string">$1</span>').replace(/:\s*(true|false)/g, ': <span class="json-boolean">$1</span>').replace(/:\s*(null)/g, ': <span class="json-null">$1</span>').replace(/:\s*(\d+\.?\d*)/g, ': <span class="json-number">$1</span>'), G = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`, z = (e) => {
      h("node-click", e);
    }, t = (e) => {
      e.expanded = !0, h("node-expand", e);
    }, i = (e) => {
      e.expanded = !1, h("node-collapse", e);
    }, k = (e) => {
      const a = JSON.parse(JSON.stringify(n.data));
      Ne(a, e.node.path, e.value), h("update:data", a);
    }, m = (e) => {
      const a = JSON.parse(JSON.stringify(n.data)), d = e.node.path.slice(0, -1), c = me(a, d);
      if (c && typeof c == "object" && !Array.isArray(c)) {
        const x = Object.keys(c), S = x.map((w) => c[w]), b = x.indexOf(e.oldKey);
        if (b !== -1) {
          x[b] = e.newKey;
          for (const w of Object.keys(c))
            delete c[w];
          x.forEach((w, O) => {
            c[w] = S[O];
          }), e.node.path[e.node.path.length - 1] = e.newKey;
        }
      }
      h("update:data", a);
    }, q = (e) => {
      const a = JSON.parse(JSON.stringify(n.data));
      Se(a, e.path), h("update:data", a);
    }, _ = (e) => {
      const a = JSON.parse(JSON.stringify(n.data)), d = e.parent.path, c = me(a, d);
      Array.isArray(c) ? c.push(e.value) : typeof c == "object" && (c[e.key] = e.value), h("update:data", a);
    }, Ne = (e, a, d) => {
      const c = a[a.length - 1], x = a.slice(0, -1).reduce((S, b) => S[b], e);
      x[c] = d;
    }, Se = (e, a) => {
      const d = a[a.length - 1], c = a.slice(0, -1).reduce((x, S) => x[S], e);
      Array.isArray(c) ? c.splice(parseInt(d), 1) : delete c[d];
    }, me = (e, a) => a.reduce((d, c) => d[c], e);
    return xe(() => n.data, (e) => {
      I.value = X(e, [], 0, I.value), A.value = JSON.stringify(e, null, 2);
    }, { deep: !0, immediate: !0 }), Je(() => {
      I.value = X(n.data), A.value = JSON.stringify(n.data, null, 2);
    }), (e, a) => (o(), s("div", {
      class: T(["json-viewer", `theme-${e.theme}`, { "no-header": e.hideHeader, "no-footer": e.hideFooter }])
    }, [
      e.hideHeader ? u("", !0) : (o(), s("div", ut, [
        e.hideModeSwitcher ? u("", !0) : (o(), s("div", yt, [
          l("button", {
            class: T(["mode-btn", { active: C.value === "tree" }]),
            onClick: a[0] || (a[0] = (d) => ne("tree"))
          }, [
            $(f(Ie)),
            e.hideActionText ? u("", !0) : (o(), s("span", ht, "Tree"))
          ], 2),
          l("button", {
            class: T(["mode-btn", { active: C.value === "text" }]),
            onClick: a[1] || (a[1] = (d) => ne("text"))
          }, [
            $(f(De)),
            e.hideActionText ? u("", !0) : (o(), s("span", pt, "Text"))
          ], 2)
        ])),
        !e.hideTreeControls && C.value === "tree" ? (o(), s("div", ft, [
          l("button", {
            class: "control-btn",
            onClick: P,
            title: "Expand All"
          }, [
            $(f($e)),
            e.hideActionText ? u("", !0) : (o(), s("span", vt, "Expand All"))
          ]),
          l("button", {
            class: "control-btn",
            onClick: ye,
            title: "Collapse All"
          }, [
            $(f(Ce)),
            e.hideActionText ? u("", !0) : (o(), s("span", kt, "Collapse All"))
          ])
        ])) : u("", !0),
        e.hideEditControls ? u("", !0) : (o(), s("div", gt, [
          l("button", {
            class: T(["control-btn", { active: j.value }]),
            onClick: de,
            title: "Toggle Edit Mode"
          }, [
            $(f(Xe)),
            e.hideActionText ? u("", !0) : (o(), s("span", _t, K(j.value ? "Exit Edit" : "Edit"), 1))
          ], 2),
          j.value ? (o(), s(Z, { key: 0 }, [
            l("button", {
              class: "control-btn save-btn",
              onClick: ue,
              title: "Save Changes"
            }, [
              $(f(Ze)),
              e.hideActionText ? u("", !0) : (o(), s("span", mt, "Save"))
            ]),
            l("button", {
              class: "control-btn cancel-btn",
              onClick: te,
              title: "Cancel Changes"
            }, [
              $(f(on)),
              e.hideActionText ? u("", !0) : (o(), s("span", bt, "Cancel"))
            ])
          ], 64)) : u("", !0)
        ])),
        l("div", wt, [
          e.hideSearchButton ? u("", !0) : (o(), s("button", {
            key: 0,
            class: "control-btn",
            onClick: R,
            title: "Search JSON"
          }, [
            $(f(vn)),
            e.hideActionText ? u("", !0) : (o(), s("span", xt, "Search"))
          ])),
          e.hideCopyButton ? u("", !0) : (o(), s("button", {
            key: 1,
            class: "control-btn copy-btn",
            onClick: oe,
            title: "Copy JSON"
          }, [
            $(f(an))
          ])),
          e.hideDownloadButton ? u("", !0) : (o(), s("button", {
            key: 2,
            class: "control-btn",
            onClick: he,
            title: "Download JSON"
          }, [
            $(f(yn))
          ])),
          e.hideThemeButton ? u("", !0) : (o(), s("button", {
            key: 3,
            class: "control-btn",
            onClick: le,
            title: n.theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"
          }, [
            n.theme === "light" ? (o(), U(f(Rn), {
              key: 0,
              class: "theme-icon"
            })) : (o(), U(f(Yn), {
              key: 1,
              class: "theme-icon"
            }))
          ], 8, $t))
        ])
      ])),
      l("div", Ct, [
        N.value ? (o(), s("div", Nt, [
          Q(l("input", {
            "onUpdate:modelValue": a[2] || (a[2] = (d) => E.value = d),
            type: "text",
            placeholder: "Search JSON...",
            class: "search-input"
          }, null, 512), [
            [Y, E.value]
          ]),
          l("button", {
            class: "search-btn",
            onClick: R
          }, [
            $(f(mn))
          ])
        ])) : u("", !0),
        C.value === "tree" ? (o(), s("div", St, [
          (o(!0), s(Z, null, _e(I.value, (d, c) => (o(), U(ct, {
            key: `${d.path.join(".")}-${c}`,
            node: d,
            editable: j.value,
            "search-query": E.value,
            onNodeClick: z,
            onNodeExpand: t,
            onNodeCollapse: i,
            onValueChange: k,
            onKeyChange: m,
            onNodeDelete: q,
            onNodeAdd: _
          }, null, 8, ["node", "editable", "search-query"]))), 128))
        ])) : (o(), s("div", jt, [
          l("div", {
            class: T(["text-editor", { "with-line-numbers": e.showLineNumbers }])
          }, [
            j.value ? Q((o(), s("textarea", {
              key: 0,
              "onUpdate:modelValue": a[3] || (a[3] = (d) => A.value = d),
              class: T(["json-textarea", { error: p.value }]),
              onInput: pe
            }, null, 34)), [
              [Y, A.value]
            ]) : (o(), s("div", Bt, [
              e.showLineNumbers ? (o(), s("div", At, [
                (o(!0), s(Z, null, _e(ie.value, (d) => (o(), s("span", {
                  key: d,
                  class: "line-number"
                }, K(d), 1))), 128))
              ])) : u("", !0),
              l("pre", Jt, [
                l("code", { innerHTML: ae.value }, null, 8, Ot)
              ])
            ]))
          ], 2),
          p.value ? (o(), s("div", Tt, " Invalid JSON: " + K(L.value), 1)) : u("", !0)
        ]))
      ]),
      e.hideFooter ? u("", !0) : (o(), s("div", Et, [
        l("div", It, [
          l("span", Mt, [
            a[4] || (a[4] = ge(" Mode: ", -1)),
            l("strong", null, K(C.value), 1)
          ]),
          l("span", Vt, [
            a[5] || (a[5] = ge(" Size: ", -1)),
            l("strong", null, K(G(M.value)), 1)
          ]),
          C.value === "tree" ? (o(), s("span", Kt, [
            a[6] || (a[6] = ge(" Nodes: ", -1)),
            l("strong", null, K(ee.value), 1)
          ])) : u("", !0)
        ])
      ]))
    ], 2));
  }
});
const Ht = /* @__PURE__ */ v(Dt, [["__scopeId", "data-v-6c5bc92a"]]);
export {
  ct as JsonNode,
  Ht as JsonViewer,
  Ht as default
};
