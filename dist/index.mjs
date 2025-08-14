import { openBlock as l, createElementBlock as r, createElementVNode as t, createStaticVNode as be, defineComponent as _e, ref as g, computed as V, watch as ge, resolveComponent as we, normalizeClass as S, normalizeStyle as fe, createBlock as H, unref as h, withDirectives as z, withKeys as M, vModelText as X, toDisplayString as T, Fragment as G, vModelDynamic as $e, withModifiers as ye, createCommentVNode as v, createVNode as m, renderList as he, nextTick as te, onMounted as Ce, createTextVNode as ve } from "vue";
const f = (u, s) => {
  const o = u.__vccOpts || u;
  for (const [p, b] of s)
    o[p] = b;
  return o;
}, Ne = {}, Se = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function je(u, s) {
  return l(), r("svg", Se, s[0] || (s[0] = [
    t("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }, null, -1),
    t("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    }, null, -1)
  ]));
}
const Je = /* @__PURE__ */ f(Ne, [["render", je]]), Ae = {}, Ie = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Oe(u, s) {
  return l(), r("svg", Ie, s[0] || (s[0] = [
    t("polyline", { points: "16,18 22,12 16,6" }, null, -1),
    t("polyline", { points: "8,6 2,12 8,18" }, null, -1)
  ]));
}
const Te = /* @__PURE__ */ f(Ae, [["render", Oe]]), Ve = {}, Ee = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Me(u, s) {
  return l(), r("svg", Ee, s[0] || (s[0] = [
    t("polyline", { points: "7,13 12,18 17,13" }, null, -1),
    t("polyline", { points: "7,6 12,11 17,6" }, null, -1)
  ]));
}
const ke = /* @__PURE__ */ f(Ve, [["render", Me]]), Be = {}, De = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Le(u, s) {
  return l(), r("svg", De, s[0] || (s[0] = [
    t("polyline", { points: "17,11 12,6 7,11" }, null, -1),
    t("polyline", { points: "17,18 12,13 7,18" }, null, -1)
  ]));
}
const me = /* @__PURE__ */ f(Be, [["render", Le]]), Ke = {}, Ue = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function He(u, s) {
  return l(), r("svg", Ue, s[0] || (s[0] = [
    t("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }, null, -1),
    t("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }, null, -1)
  ]));
}
const ze = /* @__PURE__ */ f(Ke, [["render", He]]), qe = {}, Qe = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Fe(u, s) {
  return l(), r("svg", Qe, s[0] || (s[0] = [
    t("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }, null, -1),
    t("polyline", { points: "17,21 17,13 7,13 7,21" }, null, -1),
    t("polyline", { points: "7,3 7,8 15,8" }, null, -1)
  ]));
}
const Pe = /* @__PURE__ */ f(qe, [["render", Fe]]), Re = {}, Xe = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ge(u, s) {
  return l(), r("svg", Xe, s[0] || (s[0] = [
    t("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }, null, -1),
    t("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }, null, -1),
    t("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    }, null, -1)
  ]));
}
const We = /* @__PURE__ */ f(Re, [["render", Ge]]), Ye = {}, Ze = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function en(u, s) {
  return l(), r("svg", Ze, s[0] || (s[0] = [
    t("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2"
    }, null, -1),
    t("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }, null, -1)
  ]));
}
const nn = /* @__PURE__ */ f(Ye, [["render", en]]), tn = {}, on = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function ln(u, s) {
  return l(), r("svg", on, s[0] || (s[0] = [
    t("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, null, -1),
    t("polyline", { points: "7,10 12,15 17,10" }, null, -1),
    t("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }, null, -1)
  ]));
}
const sn = /* @__PURE__ */ f(tn, [["render", ln]]), rn = {}, an = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function dn(u, s) {
  return l(), r("svg", an, s[0] || (s[0] = [
    be('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
  ]));
}
const cn = /* @__PURE__ */ f(rn, [["render", dn]]), un = {}, pn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function yn(u, s) {
  return l(), r("svg", pn, s[0] || (s[0] = [
    t("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }, null, -1),
    t("path", { d: "M21 21l-4.35-4.35" }, null, -1)
  ]));
}
const vn = /* @__PURE__ */ f(un, [["render", yn]]), hn = {}, fn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function _n(u, s) {
  return l(), r("svg", fn, s[0] || (s[0] = [
    t("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }, null, -1),
    t("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }, null, -1)
  ]));
}
const gn = /* @__PURE__ */ f(hn, [["render", _n]]), kn = {}, mn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function xn(u, s) {
  return l(), r("svg", mn, s[0] || (s[0] = [
    t("polyline", { points: "9,18 15,12 9,6" }, null, -1)
  ]));
}
const bn = /* @__PURE__ */ f(kn, [["render", xn]]), wn = {}, $n = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Cn(u, s) {
  return l(), r("svg", $n, s[0] || (s[0] = [
    t("polyline", { points: "6,9 12,15 18,9" }, null, -1)
  ]));
}
const Nn = /* @__PURE__ */ f(wn, [["render", Cn]]), Sn = {}, jn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Jn(u, s) {
  return l(), r("svg", jn, s[0] || (s[0] = [
    t("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }, null, -1),
    t("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }, null, -1)
  ]));
}
const An = /* @__PURE__ */ f(Sn, [["render", Jn]]), In = {}, On = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Tn(u, s) {
  return l(), r("svg", On, s[0] || (s[0] = [
    t("polyline", { points: "3,6 5,6 21,6" }, null, -1),
    t("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1),
    t("line", {
      x1: "10",
      y1: "11",
      x2: "10",
      y2: "17"
    }, null, -1),
    t("line", {
      x1: "14",
      y1: "11",
      x2: "14",
      y2: "17"
    }, null, -1)
  ]));
}
const Vn = /* @__PURE__ */ f(In, [["render", Tn]]), En = {}, Mn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Bn(u, s) {
  return l(), r("svg", Mn, s[0] || (s[0] = [
    t("polyline", { points: "20,6 9,17 4,12" }, null, -1)
  ]));
}
const Dn = /* @__PURE__ */ f(En, [["render", Bn]]), Ln = {}, Kn = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Un(u, s) {
  return l(), r("svg", Kn, s[0] || (s[0] = [
    t("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }, null, -1),
    t("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }, null, -1)
  ]));
}
const Hn = /* @__PURE__ */ f(Ln, [["render", Un]]), zn = {
  key: 0,
  class: "expand-icon"
}, qn = {
  key: 1,
  class: "expand-placeholder"
}, Qn = { class: "node-value" }, Fn = ["type"], Pn = {
  key: 2,
  class: "node-controls"
}, Rn = ["title"], Xn = {
  key: 0,
  class: "children"
}, Gn = {
  key: 0,
  class: "add-form"
}, Wn = {
  key: 1,
  class: "colon"
}, Yn = { class: "add-controls" }, Zn = /* @__PURE__ */ _e({
  __name: "JsonNode",
  props: {
    node: {},
    editable: { type: Boolean, default: !1 },
    searchQuery: { default: "" }
  },
  emits: ["node-click", "node-expand", "node-collapse", "value-change", "node-delete", "node-add"],
  setup(u, { emit: s }) {
    const o = u, p = s, b = g(!1), $ = g(!1), j = g(""), w = g(""), C = g(!1), N = g(""), y = g(""), E = g(), J = g(), A = V(() => o.node.type === "object" || o.node.type === "array"), W = V(() => o.node.level > 0), oe = V(() => o.node.level === 0 ? o.node.type === "array" ? "Array" : "Object" : se() === "array" ? `[${o.node.key}]` : `"${o.node.key}"`), le = V(() => {
      if (!o.searchQuery)
        return !1;
      const n = o.searchQuery.toLowerCase(), a = o.node.key.toLowerCase().includes(n), _ = typeof o.node.value == "string" && o.node.value.toLowerCase().includes(n);
      return a || _;
    }), Y = V(() => !o.node.children || !o.searchQuery ? o.node.children || [] : o.node.children.filter((n) => {
      const a = o.searchQuery.toLowerCase(), _ = n.key.toLowerCase().includes(a), k = typeof n.value == "string" && n.value.toLowerCase().includes(a), D = q(n, a);
      return _ || k || D;
    })), se = () => o.node.path.length <= 1 ? null : "object", re = () => o.node.type === "array" ? `Array[${Array.isArray(o.node.value) ? o.node.value.length : 0}]` : o.node.type === "object" ? `Object{${o.node.value && typeof o.node.value == "object" ? Object.keys(o.node.value).length : 0}}` : "", ae = (n) => n === null ? "null" : typeof n == "string" ? `"${n}"` : typeof n == "boolean" || typeof n == "number" ? n.toString() : String(n), Z = () => {
      switch (o.node.type) {
        case "number":
          return "number";
        case "boolean":
          return "checkbox";
        default:
          return "text";
      }
    }, q = (n, a) => n.children ? n.children.some((_) => {
      const k = _.key.toLowerCase().includes(a), D = typeof _.value == "string" && _.value.toLowerCase().includes(a), x = q(_, a);
      return k || D || x;
    }) : !1, ie = () => {
      A.value && ee(), p("node-click", o.node);
    }, ee = () => {
      o.node.expanded ? p("node-collapse", o.node) : p("node-expand", o.node);
    }, de = () => {
      !o.editable || !W.value || (j.value = o.node.key, b.value = !0, te(() => {
        var n, a;
        (n = E.value) == null || n.focus(), (a = E.value) == null || a.select();
      }));
    }, ne = () => {
      j.value !== o.node.key && p("value-change", {
        node: { ...o.node, key: j.value },
        value: o.node.value
      }), Q();
    }, Q = () => {
      b.value = !1, j.value = "";
    }, ce = () => {
      if (!(!o.editable || A.value)) {
        if (o.node.type === "boolean") {
          p("value-change", {
            node: o.node,
            value: !o.node.value
          });
          return;
        }
        w.value = o.node.type === "string" ? o.node.value : String(o.node.value), $.value = !0, te(() => {
          var n, a;
          (n = J.value) == null || n.focus(), (a = J.value) == null || a.select();
        });
      }
    }, B = () => {
      let n = w.value;
      try {
        switch (o.node.type) {
          case "number":
            if (n = parseFloat(w.value), isNaN(n)) {
              alert("Invalid number format");
              return;
            }
            break;
          case "boolean":
            n = w.value === "true";
            break;
          case "string":
            n = w.value;
            break;
          default:
            n = JSON.parse(w.value);
        }
        p("value-change", { node: o.node, value: n });
      } catch {
        alert("Invalid value format");
        return;
      }
      F();
    }, F = () => {
      $.value = !1, w.value = "";
    }, ue = () => {
      confirm("Are you sure you want to delete this item?") && p("node-delete", o.node);
    }, pe = () => {
      C.value = !0, N.value = "", y.value = "", o.node.type === "array" ? te(() => {
        const n = document.querySelector(".add-form .value-input");
        n == null || n.focus();
      }) : te(() => {
        const n = document.querySelector(".add-form .key-input");
        n == null || n.focus();
      });
    }, P = () => {
      var n;
      try {
        let a = N.value, _ = y.value;
        if (o.node.type === "object" && !a.trim()) {
          alert("Key is required for object properties");
          return;
        }
        o.node.type === "array" && (a = (((n = o.node.children) == null ? void 0 : n.length) || 0).toString());
        try {
          _ = JSON.parse(y.value);
        } catch {
          y.value === "true" || y.value === "false" ? _ = y.value === "true" : !isNaN(Number(y.value)) && y.value.trim() !== "" ? _ = Number(y.value) : y.value === "null" ? _ = null : _ = y.value;
        }
        p("node-add", { parent: o.node, key: a, value: _ }), U();
      } catch {
        alert("Invalid value format");
      }
    }, U = () => {
      C.value = !1, N.value = "", y.value = "";
    };
    return ge(() => o.searchQuery, (n) => {
      n && A.value && q(o.node, n.toLowerCase()) && p("node-expand", o.node);
    }), (n, a) => {
      const _ = we("JsonNode", !0);
      return l(), r("div", {
        class: S(["json-node", `level-${n.node.level}`])
      }, [
        t("div", {
          class: S(["node-header", {
            expandable: A.value,
            expanded: n.node.expanded,
            highlighted: le.value
          }]),
          onClick: ie
        }, [
          t("div", {
            class: "indentation",
            style: fe({ width: `${n.node.level * 20}px` })
          }, null, 4),
          A.value ? (l(), r("div", zn, [
            n.node.expanded ? (l(), H(h(Nn), { key: 1 })) : (l(), H(h(bn), { key: 0 }))
          ])) : (l(), r("div", qn)),
          t("span", {
            class: S(["node-key", { editable: n.editable && W.value }])
          }, [
            b.value ? z((l(), r("input", {
              key: 0,
              "onUpdate:modelValue": a[0] || (a[0] = (k) => j.value = k),
              onBlur: ne,
              onKeydown: [
                M(ne, ["enter"]),
                M(Q, ["escape"])
              ],
              class: "key-input",
              ref_key: "keyInput",
              ref: E
            }, null, 544)), [
              [X, j.value]
            ]) : (l(), r("span", {
              key: 1,
              onDblclick: de
            }, T(oe.value), 33))
          ], 2),
          a[10] || (a[10] = t("span", { class: "colon" }, ":", -1)),
          t("div", Qn, [
            A.value ? (l(), r("span", {
              key: 1,
              class: S(["value-summary", `value-${n.node.type}`])
            }, T(re()), 3)) : (l(), r(G, { key: 0 }, [
              $.value ? z((l(), r("input", {
                key: 0,
                "onUpdate:modelValue": a[1] || (a[1] = (k) => w.value = k),
                type: Z(),
                onBlur: B,
                onKeydown: [
                  M(B, ["enter"]),
                  M(F, ["escape"])
                ],
                class: S(["value-input", `value-${n.node.type}`]),
                ref_key: "valueInput",
                ref: J
              }, null, 42, Fn)), [
                [$e, w.value]
              ]) : (l(), r("span", {
                key: 1,
                class: S(["value-display", `value-${n.node.type}`, { editable: n.editable }]),
                onDblclick: ce
              }, T(ae(n.node.value)), 35))
            ], 64))
          ]),
          n.editable ? (l(), r("div", Pn, [
            A.value ? (l(), r("button", {
              key: 0,
              onClick: ye(ee, ["stop"]),
              class: "control-icon",
              title: n.node.expanded ? "Collapse" : "Expand"
            }, [
              n.node.expanded ? (l(), H(h(me), { key: 0 })) : (l(), H(h(ke), { key: 1 }))
            ], 8, Rn)) : v("", !0),
            n.node.type === "object" || n.node.type === "array" ? (l(), r("button", {
              key: 1,
              onClick: ye(pe, ["stop"]),
              class: "control-icon add-icon",
              title: "Add Item"
            }, [
              m(h(An))
            ])) : v("", !0),
            t("button", {
              onClick: ye(ue, ["stop"]),
              class: "control-icon delete-icon",
              title: "Delete"
            }, [
              m(h(Vn))
            ])
          ])) : v("", !0)
        ], 2),
        A.value && n.node.expanded && n.node.children ? (l(), r("div", Xn, [
          (l(!0), r(G, null, he(Y.value, (k, D) => (l(), H(_, {
            key: `${k.path.join(".")}-${D}`,
            node: k,
            editable: n.editable,
            "search-query": n.searchQuery,
            onNodeClick: a[2] || (a[2] = (x) => n.$emit("node-click", x)),
            onNodeExpand: a[3] || (a[3] = (x) => n.$emit("node-expand", x)),
            onNodeCollapse: a[4] || (a[4] = (x) => n.$emit("node-collapse", x)),
            onValueChange: a[5] || (a[5] = (x) => n.$emit("value-change", x)),
            onNodeDelete: a[6] || (a[6] = (x) => n.$emit("node-delete", x)),
            onNodeAdd: a[7] || (a[7] = (x) => n.$emit("node-add", x))
          }, null, 8, ["node", "editable", "search-query"]))), 128)),
          C.value ? (l(), r("div", Gn, [
            t("div", {
              class: "indentation",
              style: fe({ width: `${(n.node.level + 1) * 20}px` })
            }, null, 4),
            a[11] || (a[11] = t("div", { class: "expand-placeholder" }, null, -1)),
            n.node.type === "object" ? z((l(), r("input", {
              key: 0,
              "onUpdate:modelValue": a[8] || (a[8] = (k) => N.value = k),
              placeholder: "Key",
              class: "key-input",
              onKeydown: [
                M(P, ["enter"]),
                M(U, ["escape"])
              ]
            }, null, 544)), [
              [X, N.value]
            ]) : v("", !0),
            n.node.type === "object" ? (l(), r("span", Wn, ":")) : v("", !0),
            z(t("input", {
              "onUpdate:modelValue": a[9] || (a[9] = (k) => y.value = k),
              placeholder: "Value",
              class: "value-input",
              onKeydown: [
                M(P, ["enter"]),
                M(U, ["escape"])
              ]
            }, null, 544), [
              [X, y.value]
            ]),
            t("div", Yn, [
              t("button", {
                onClick: P,
                class: "add-btn",
                title: "Add"
              }, [
                m(h(Dn))
              ]),
              t("button", {
                onClick: U,
                class: "cancel-btn",
                title: "Cancel"
              }, [
                m(h(Hn))
              ])
            ])
          ])) : v("", !0)
        ])) : v("", !0)
      ], 2);
    };
  }
});
const et = /* @__PURE__ */ f(Zn, [["__scopeId", "data-v-5472ec5d"]]), nt = { class: "menu-bar" }, tt = { class: "menu-section" }, ot = { class: "mode-switcher" }, lt = { key: 0 }, st = { key: 0 }, rt = { class: "menu-section" }, at = {
  key: 0,
  class: "tree-controls"
}, it = { key: 0 }, dt = { key: 0 }, ct = { class: "edit-controls" }, ut = { key: 0 }, pt = { key: 0 }, yt = { key: 0 }, vt = { class: "menu-section" }, ht = { class: "additional-controls" }, ft = { class: "view-area" }, _t = {
  key: 0,
  class: "search-bar"
}, gt = {
  key: 1,
  class: "tree-view"
}, kt = {
  key: 2,
  class: "text-view"
}, mt = {
  key: 1,
  class: "json-display-container"
}, xt = {
  key: 0,
  class: "line-numbers"
}, bt = { class: "json-display" }, wt = ["innerHTML"], $t = {
  key: 0,
  class: "error-message"
}, Ct = { class: "footer" }, Nt = { class: "footer-info" }, St = { class: "info-item" }, jt = { class: "info-item" }, Jt = {
  key: 0,
  class: "info-item"
}, At = { class: "footer-actions" }, It = { key: 0 }, Ot = /* @__PURE__ */ _e({
  __name: "JsonViewer",
  props: {
    data: {},
    editable: { type: Boolean, default: !0 },
    theme: { default: "light" },
    defaultMode: { default: "tree" },
    showLineNumbers: { type: Boolean, default: !1 },
    maxDepth: { default: 3 },
    hideActionText: { type: Boolean, default: !1 }
  },
  emits: ["update:data", "node-click", "node-expand", "node-collapse", "edit-start", "edit-save", "edit-cancel", "theme-change"],
  setup(u, { emit: s }) {
    const o = u, p = s, b = g(o.defaultMode), $ = g(!1), j = g(""), w = g(!1), C = g(""), N = g(null), y = g(!1), E = g(""), J = g([]), A = V(() => JSON.stringify(o.data).length), W = V(() => {
      const e = (i) => {
        let d = i.length;
        return i.forEach((c) => {
          c.children && (d += e(c.children));
        }), d;
      };
      return e(J.value);
    }), oe = V(() => {
      if (!o.data)
        return "";
      const e = JSON.stringify(o.data, null, 2);
      return ue(e);
    }), le = V(() => {
      if (!o.data || !o.showLineNumbers)
        return [];
      const i = JSON.stringify(o.data, null, 2).split(`
`);
      return Array.from({ length: i.length }, (d, c) => c + 1);
    }), Y = (e) => {
      b.value = e;
    }, se = () => {
      $.value ? Z() : re();
    }, re = () => {
      N.value = JSON.parse(JSON.stringify(o.data)), C.value = JSON.stringify(o.data, null, 2), $.value = !0, p("edit-start");
    }, ae = () => {
      if (b.value === "text") {
        if (y.value) {
          alert("Please fix JSON errors before saving");
          return;
        }
        try {
          const e = JSON.parse(C.value);
          p("update:data", e);
        } catch {
          alert("Invalid JSON format");
          return;
        }
      }
      $.value = !1, N.value = null, p("edit-save", o.data);
    }, Z = () => {
      N.value && (p("update:data", N.value), C.value = JSON.stringify(N.value, null, 2)), $.value = !1, N.value = null, y.value = !1, E.value = "", p("edit-cancel");
    }, q = () => {
      const e = (i) => {
        i.forEach((d) => {
          (d.type === "object" || d.type === "array") && (d.expanded = !0, d.children && e(d.children));
        });
      };
      e(J.value);
    }, ie = () => {
      const e = (i) => {
        i.forEach((d) => {
          (d.type === "object" || d.type === "array") && (d.expanded = !1, d.children && e(d.children));
        });
      };
      e(J.value);
    }, ee = async () => {
      try {
        const e = JSON.stringify(o.data, null, 2);
        await navigator.clipboard.writeText(e);
      } catch (e) {
        console.error("Failed to copy to clipboard:", e);
      }
    }, de = () => {
      const e = JSON.stringify(o.data, null, 2), i = new Blob([e], { type: "application/json" }), d = URL.createObjectURL(i), c = document.createElement("a");
      c.href = d, c.download = "data.json", document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(d);
    }, ne = () => {
      const e = o.theme === "light" ? "dark" : "light";
      p("theme-change", e);
    }, Q = () => {
      w.value = !w.value, w.value || (j.value = "");
    }, ce = () => {
      try {
        JSON.parse(C.value), y.value = !1, E.value = "";
      } catch (e) {
        y.value = !0, E.value = e.message;
      }
    }, B = (e, i = [], d = 0) => {
      const c = [];
      return e === null ? [{
        key: "",
        value: null,
        type: "null",
        path: i,
        level: d
      }] : (Array.isArray(e) ? e.forEach((I, O) => {
        const L = [...i, O.toString()], K = F(I), R = {
          key: O.toString(),
          value: I,
          type: K,
          path: L,
          level: d,
          expanded: d < o.maxDepth
        };
        (K === "object" || K === "array") && (R.children = B(I, L, d + 1)), c.push(R);
      }) : typeof e == "object" && Object.entries(e).forEach(([I, O]) => {
        const L = [...i, I], K = F(O), R = {
          key: I,
          value: O,
          type: K,
          path: L,
          level: d,
          expanded: d < o.maxDepth
        };
        (K === "object" || K === "array") && (R.children = B(O, L, d + 1)), c.push(R);
      }), c);
    }, F = (e) => e === null ? "null" : Array.isArray(e) ? "array" : typeof e == "object" ? "object" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : "string", ue = (e) => e.replace(/("[\w\s]*")\s*:/g, '<span class="json-key">$1</span>:').replace(/:\s*(".*?")/g, ': <span class="json-string">$1</span>').replace(/:\s*(true|false)/g, ': <span class="json-boolean">$1</span>').replace(/:\s*(null)/g, ': <span class="json-null">$1</span>').replace(/:\s*(\d+\.?\d*)/g, ': <span class="json-number">$1</span>'), pe = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`, P = (e) => {
      p("node-click", e);
    }, U = (e) => {
      e.expanded = !0, p("node-expand", e);
    }, n = (e) => {
      e.expanded = !1, p("node-collapse", e);
    }, a = (e) => {
      const i = JSON.parse(JSON.stringify(o.data));
      D(i, e.node.path, e.value), p("update:data", i);
    }, _ = (e) => {
      const i = JSON.parse(JSON.stringify(o.data));
      x(i, e.path), p("update:data", i);
    }, k = (e) => {
      const i = JSON.parse(JSON.stringify(o.data)), d = e.parent.path, c = xe(i, d);
      Array.isArray(c) ? c.push(e.value) : typeof c == "object" && (c[e.key] = e.value), p("update:data", i);
    }, D = (e, i, d) => {
      const c = i[i.length - 1], I = i.slice(0, -1).reduce((O, L) => O[L], e);
      I[c] = d;
    }, x = (e, i) => {
      const d = i[i.length - 1], c = i.slice(0, -1).reduce((I, O) => I[O], e);
      Array.isArray(c) ? c.splice(parseInt(d), 1) : delete c[d];
    }, xe = (e, i) => i.reduce((d, c) => d[c], e);
    return ge(() => o.data, (e) => {
      J.value = B(e), C.value = JSON.stringify(e, null, 2);
    }, { deep: !0, immediate: !0 }), Ce(() => {
      J.value = B(o.data), C.value = JSON.stringify(o.data, null, 2);
    }), (e, i) => (l(), r("div", {
      class: S(["json-viewer", `theme-${e.theme}`])
    }, [
      t("div", nt, [
        t("div", tt, [
          t("div", ot, [
            t("button", {
              class: S(["mode-btn", { active: b.value === "tree" }]),
              onClick: i[0] || (i[0] = (d) => Y("tree"))
            }, [
              m(h(Je)),
              e.hideActionText ? v("", !0) : (l(), r("span", lt, "Tree"))
            ], 2),
            t("button", {
              class: S(["mode-btn", { active: b.value === "text" }]),
              onClick: i[1] || (i[1] = (d) => Y("text"))
            }, [
              m(h(Te)),
              e.hideActionText ? v("", !0) : (l(), r("span", st, "Text"))
            ], 2)
          ])
        ]),
        t("div", rt, [
          b.value === "tree" ? (l(), r("div", at, [
            t("button", {
              class: "control-btn",
              onClick: q,
              title: "Expand All"
            }, [
              m(h(ke)),
              e.hideActionText ? v("", !0) : (l(), r("span", it, "Expand All"))
            ]),
            t("button", {
              class: "control-btn",
              onClick: ie,
              title: "Collapse All"
            }, [
              m(h(me)),
              e.hideActionText ? v("", !0) : (l(), r("span", dt, "Collapse All"))
            ])
          ])) : v("", !0),
          t("div", ct, [
            t("button", {
              class: S(["control-btn", { active: $.value }]),
              onClick: se,
              title: "Toggle Edit Mode"
            }, [
              m(h(ze)),
              e.hideActionText ? v("", !0) : (l(), r("span", ut, T($.value ? "Exit Edit" : "Edit"), 1))
            ], 2),
            $.value ? (l(), r(G, { key: 0 }, [
              t("button", {
                class: "control-btn save-btn",
                onClick: ae,
                title: "Save Changes"
              }, [
                m(h(Pe)),
                e.hideActionText ? v("", !0) : (l(), r("span", pt, "Save"))
              ]),
              t("button", {
                class: "control-btn cancel-btn",
                onClick: Z,
                title: "Cancel Changes"
              }, [
                m(h(We)),
                e.hideActionText ? v("", !0) : (l(), r("span", yt, "Cancel"))
              ])
            ], 64)) : v("", !0)
          ])
        ]),
        t("div", vt, [
          t("div", ht, [
            t("button", {
              class: "control-btn",
              onClick: ee,
              title: "Copy JSON"
            }, [
              m(h(nn))
            ]),
            t("button", {
              class: "control-btn",
              onClick: de,
              title: "Download JSON"
            }, [
              m(h(sn))
            ]),
            t("button", {
              class: "control-btn",
              onClick: ne,
              title: "Toggle Theme"
            }, [
              m(h(cn))
            ])
          ])
        ])
      ]),
      t("div", ft, [
        w.value ? (l(), r("div", _t, [
          z(t("input", {
            "onUpdate:modelValue": i[2] || (i[2] = (d) => j.value = d),
            type: "text",
            placeholder: "Search JSON...",
            class: "search-input"
          }, null, 512), [
            [X, j.value]
          ]),
          t("button", {
            class: "search-btn",
            onClick: Q
          }, [
            m(h(gn))
          ])
        ])) : v("", !0),
        b.value === "tree" ? (l(), r("div", gt, [
          (l(!0), r(G, null, he(J.value, (d, c) => (l(), H(et, {
            key: `${d.path.join(".")}-${c}`,
            node: d,
            editable: $.value,
            "search-query": j.value,
            onNodeClick: P,
            onNodeExpand: U,
            onNodeCollapse: n,
            onValueChange: a,
            onNodeDelete: _,
            onNodeAdd: k
          }, null, 8, ["node", "editable", "search-query"]))), 128))
        ])) : (l(), r("div", kt, [
          t("div", {
            class: S(["text-editor", { "with-line-numbers": e.showLineNumbers }])
          }, [
            $.value ? z((l(), r("textarea", {
              key: 0,
              "onUpdate:modelValue": i[3] || (i[3] = (d) => C.value = d),
              class: S(["json-textarea", { error: y.value }]),
              onInput: ce
            }, null, 34)), [
              [X, C.value]
            ]) : (l(), r("div", mt, [
              e.showLineNumbers ? (l(), r("div", xt, [
                (l(!0), r(G, null, he(le.value, (d) => (l(), r("span", {
                  key: d,
                  class: "line-number"
                }, T(d), 1))), 128))
              ])) : v("", !0),
              t("pre", bt, [
                t("code", { innerHTML: oe.value }, null, 8, wt)
              ])
            ]))
          ], 2),
          y.value ? (l(), r("div", $t, " Invalid JSON: " + T(E.value), 1)) : v("", !0)
        ]))
      ]),
      t("div", Ct, [
        t("div", Nt, [
          t("span", St, [
            i[4] || (i[4] = ve(" Mode: ", -1)),
            t("strong", null, T(b.value), 1)
          ]),
          t("span", jt, [
            i[5] || (i[5] = ve(" Size: ", -1)),
            t("strong", null, T(pe(A.value)), 1)
          ]),
          b.value === "tree" ? (l(), r("span", Jt, [
            i[6] || (i[6] = ve(" Nodes: ", -1)),
            t("strong", null, T(W.value), 1)
          ])) : v("", !0)
        ]),
        t("div", At, [
          t("button", {
            class: "footer-btn",
            onClick: Q
          }, [
            m(h(vn)),
            e.hideActionText ? v("", !0) : (l(), r("span", It, "Search"))
          ])
        ])
      ])
    ], 2));
  }
});
const Vt = /* @__PURE__ */ f(Ot, [["__scopeId", "data-v-5611f639"]]);
export {
  et as JsonNode,
  Vt as JsonViewer,
  Vt as default
};
