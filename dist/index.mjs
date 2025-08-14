import { openBlock as o, createElementBlock as s, createElementVNode as l, createStaticVNode as xe, defineComponent as ke, ref as k, computed as I, watch as _e, resolveComponent as $e, normalizeClass as B, normalizeStyle as ge, createBlock as V, unref as f, withDirectives as F, withKeys as E, vModelText as X, toDisplayString as O, Fragment as G, vModelDynamic as Ce, withModifiers as he, createCommentVNode as u, createVNode as b, renderList as fe, nextTick as ne, onMounted as Ne, createTextVNode as pe } from "vue";
const v = (y, r) => {
  const t = y.__vccOpts || y;
  for (const [h, w] of r)
    t[h] = w;
  return t;
}, Se = {}, Be = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function je(y, r) {
  return o(), s("svg", Be, r[0] || (r[0] = [
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
const Je = /* @__PURE__ */ v(Se, [["render", je]]), Ae = {}, Te = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Oe(y, r) {
  return o(), s("svg", Te, r[0] || (r[0] = [
    l("polyline", { points: "16,18 22,12 16,6" }, null, -1),
    l("polyline", { points: "8,6 2,12 8,18" }, null, -1)
  ]));
}
const Ie = /* @__PURE__ */ v(Ae, [["render", Oe]]), Me = {}, Ee = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ve(y, r) {
  return o(), s("svg", Ee, r[0] || (r[0] = [
    l("polyline", { points: "7,13 12,18 17,13" }, null, -1),
    l("polyline", { points: "7,6 12,11 17,6" }, null, -1)
  ]));
}
const me = /* @__PURE__ */ v(Me, [["render", Ve]]), Ke = {}, De = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Le(y, r) {
  return o(), s("svg", De, r[0] || (r[0] = [
    l("polyline", { points: "17,11 12,6 7,11" }, null, -1),
    l("polyline", { points: "17,18 12,13 7,18" }, null, -1)
  ]));
}
const be = /* @__PURE__ */ v(Ke, [["render", Le]]), He = {}, Ue = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Fe(y, r) {
  return o(), s("svg", Ue, r[0] || (r[0] = [
    l("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }, null, -1),
    l("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }, null, -1)
  ]));
}
const qe = /* @__PURE__ */ v(He, [["render", Fe]]), ze = {}, Pe = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Qe(y, r) {
  return o(), s("svg", Pe, r[0] || (r[0] = [
    l("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }, null, -1),
    l("polyline", { points: "17,21 17,13 7,13 7,21" }, null, -1),
    l("polyline", { points: "7,3 7,8 15,8" }, null, -1)
  ]));
}
const Re = /* @__PURE__ */ v(ze, [["render", Qe]]), Xe = {}, Ge = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function We(y, r) {
  return o(), s("svg", Ge, r[0] || (r[0] = [
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
const Ye = /* @__PURE__ */ v(Xe, [["render", We]]), Ze = {}, et = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function tt(y, r) {
  return o(), s("svg", et, r[0] || (r[0] = [
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
const nt = /* @__PURE__ */ v(Ze, [["render", tt]]), ot = {}, lt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function st(y, r) {
  return o(), s("svg", lt, r[0] || (r[0] = [
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
const rt = /* @__PURE__ */ v(ot, [["render", st]]), at = {}, it = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function dt(y, r) {
  return o(), s("svg", it, r[0] || (r[0] = [
    l("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }, null, -1),
    l("path", { d: "M21 21l-4.35-4.35" }, null, -1)
  ]));
}
const ct = /* @__PURE__ */ v(at, [["render", dt]]), ut = {}, yt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function ht(y, r) {
  return o(), s("svg", yt, r[0] || (r[0] = [
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
const pt = /* @__PURE__ */ v(ut, [["render", ht]]), ft = {}, vt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function gt(y, r) {
  return o(), s("svg", vt, r[0] || (r[0] = [
    l("polyline", { points: "9,18 15,12 9,6" }, null, -1)
  ]));
}
const kt = /* @__PURE__ */ v(ft, [["render", gt]]), _t = {}, mt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function bt(y, r) {
  return o(), s("svg", mt, r[0] || (r[0] = [
    l("polyline", { points: "6,9 12,15 18,9" }, null, -1)
  ]));
}
const wt = /* @__PURE__ */ v(_t, [["render", bt]]), xt = {}, $t = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ct(y, r) {
  return o(), s("svg", $t, r[0] || (r[0] = [
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
const Nt = /* @__PURE__ */ v(xt, [["render", Ct]]), St = {}, Bt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function jt(y, r) {
  return o(), s("svg", Bt, r[0] || (r[0] = [
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
const Jt = /* @__PURE__ */ v(St, [["render", jt]]), At = {}, Tt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ot(y, r) {
  return o(), s("svg", Tt, r[0] || (r[0] = [
    l("polyline", { points: "20,6 9,17 4,12" }, null, -1)
  ]));
}
const It = /* @__PURE__ */ v(At, [["render", Ot]]), Mt = {}, Et = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Vt(y, r) {
  return o(), s("svg", Et, r[0] || (r[0] = [
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
const Kt = /* @__PURE__ */ v(Mt, [["render", Vt]]), Dt = {}, Lt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ht(y, r) {
  return o(), s("svg", Lt, r[0] || (r[0] = [
    l("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
  ]));
}
const Ut = /* @__PURE__ */ v(Dt, [["render", Ht]]), Ft = {}, qt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function zt(y, r) {
  return o(), s("svg", qt, r[0] || (r[0] = [
    xe('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
  ]));
}
const Pt = /* @__PURE__ */ v(Ft, [["render", zt]]), Qt = {
  key: 0,
  class: "expand-icon"
}, Rt = {
  key: 1,
  class: "expand-placeholder"
}, Xt = { class: "node-value" }, Gt = ["type"], Wt = {
  key: 2,
  class: "node-controls"
}, Yt = ["title"], Zt = {
  key: 0,
  class: "children"
}, en = {
  key: 0,
  class: "add-form"
}, tn = {
  key: 1,
  class: "colon"
}, nn = { class: "add-controls" }, on = /* @__PURE__ */ ke({
  __name: "JsonNode",
  props: {
    node: {},
    editable: { type: Boolean, default: !1 },
    searchQuery: { default: "" }
  },
  emits: ["node-click", "node-expand", "node-collapse", "value-change", "key-change", "node-delete", "node-add"],
  setup(y, { emit: r }) {
    const t = y, h = r, w = k(!1), $ = k(!1), j = k(""), x = k(""), C = k(!1), N = k(""), p = k(""), M = k(), J = k(), A = I(() => t.node.type === "object" || t.node.type === "array"), W = I(() => t.node.level > 0), oe = I(() => t.node.level === 0 ? t.node.type === "array" ? "Array" : "Object" : se() === "array" ? `[${t.node.key}]` : `"${t.node.key}"`), le = I(() => {
      if (!t.searchQuery)
        return !1;
      const n = t.searchQuery.toLowerCase(), i = t.node.key.toLowerCase().includes(n), g = typeof t.node.value == "string" && t.node.value.toLowerCase().includes(n);
      return i || g;
    }), Y = I(() => !t.node.children || !t.searchQuery ? t.node.children || [] : t.node.children.filter((n) => {
      const i = t.searchQuery.toLowerCase(), g = n.key.toLowerCase().includes(i), m = typeof n.value == "string" && n.value.toLowerCase().includes(i), D = q(n, i);
      return g || m || D;
    })), se = () => t.node.path.length <= 1 ? null : "object", re = () => t.node.type === "array" ? `Array[${Array.isArray(t.node.value) ? t.node.value.length : 0}]` : t.node.type === "object" ? `Object{${t.node.value && typeof t.node.value == "object" ? Object.keys(t.node.value).length : 0}}` : "", ae = (n) => n === null ? "null" : typeof n == "string" ? `"${n}"` : typeof n == "boolean" || typeof n == "number" ? n.toString() : String(n), Z = () => {
      switch (t.node.type) {
        case "number":
          return "number";
        case "boolean":
          return "checkbox";
        default:
          return "text";
      }
    }, q = (n, i) => n.children ? n.children.some((g) => {
      const m = g.key.toLowerCase().includes(i), D = typeof g.value == "string" && g.value.toLowerCase().includes(i), _ = q(g, i);
      return m || D || _;
    }) : !1, ie = () => {
      A.value && ee(), h("node-click", t.node);
    }, ee = () => {
      t.node.expanded ? h("node-collapse", t.node) : h("node-expand", t.node);
    }, de = () => {
      !t.editable || !W.value || (j.value = t.node.key, w.value = !0, ne(() => {
        var n, i;
        (n = M.value) == null || n.focus(), (i = M.value) == null || i.select();
      }));
    }, te = () => {
      j.value !== t.node.key && h("key-change", {
        node: t.node,
        oldKey: t.node.key,
        newKey: j.value
      }), z();
    }, z = () => {
      w.value = !1, j.value = "";
    }, ce = () => {
      if (!(!t.editable || A.value)) {
        if (t.node.type === "boolean") {
          h("value-change", {
            node: t.node,
            value: !t.node.value
          });
          return;
        }
        x.value = t.node.type === "string" ? t.node.value : String(t.node.value), $.value = !0, ne(() => {
          var n, i;
          (n = J.value) == null || n.focus(), (i = J.value) == null || i.select();
        });
      }
    }, K = () => {
      let n = x.value;
      try {
        switch (t.node.type) {
          case "number":
            if (n = parseFloat(x.value), isNaN(n)) {
              alert("Invalid number format");
              return;
            }
            break;
          case "boolean":
            n = x.value === "true";
            break;
          case "string":
            n = x.value;
            break;
          default:
            n = JSON.parse(x.value);
        }
        h("value-change", { node: t.node, value: n });
      } catch {
        alert("Invalid value format");
        return;
      }
      P();
    }, P = () => {
      $.value = !1, x.value = "";
    }, ue = () => {
      confirm("Are you sure you want to delete this item?") && h("node-delete", t.node);
    }, ye = () => {
      C.value = !0, N.value = "", p.value = "", t.node.type === "array" ? ne(() => {
        const n = document.querySelector(".add-form .value-input");
        n == null || n.focus();
      }) : ne(() => {
        const n = document.querySelector(".add-form .key-input");
        n == null || n.focus();
      });
    }, Q = () => {
      var n;
      try {
        let i = N.value, g = p.value;
        if (t.node.type === "object" && !i.trim()) {
          alert("Key is required for object properties");
          return;
        }
        t.node.type === "array" && (i = (((n = t.node.children) == null ? void 0 : n.length) || 0).toString());
        try {
          g = JSON.parse(p.value);
        } catch {
          p.value === "true" || p.value === "false" ? g = p.value === "true" : !isNaN(Number(p.value)) && p.value.trim() !== "" ? g = Number(p.value) : p.value === "null" ? g = null : g = p.value;
        }
        h("node-add", { parent: t.node, key: i, value: g }), U();
      } catch {
        alert("Invalid value format");
      }
    }, U = () => {
      C.value = !1, N.value = "", p.value = "";
    };
    return _e(() => t.searchQuery, (n) => {
      n && A.value && q(t.node, n.toLowerCase()) && h("node-expand", t.node);
    }), (n, i) => {
      const g = $e("JsonNode", !0);
      return o(), s("div", {
        class: B(["json-node", `level-${n.node.level}`])
      }, [
        l("div", {
          class: B(["node-header", {
            expandable: A.value,
            expanded: n.node.expanded,
            highlighted: le.value
          }]),
          onClick: ie
        }, [
          l("div", {
            class: "indentation",
            style: ge({ width: `${n.node.level * 20}px` })
          }, null, 4),
          A.value ? (o(), s("div", Qt, [
            n.node.expanded ? (o(), V(f(wt), { key: 1 })) : (o(), V(f(kt), { key: 0 }))
          ])) : (o(), s("div", Rt)),
          l("span", {
            class: B(["node-key", { editable: n.editable && W.value }])
          }, [
            w.value ? F((o(), s("input", {
              key: 0,
              "onUpdate:modelValue": i[0] || (i[0] = (m) => j.value = m),
              onBlur: te,
              onKeydown: [
                E(te, ["enter"]),
                E(z, ["escape"])
              ],
              class: "key-input",
              ref_key: "keyInput",
              ref: M
            }, null, 544)), [
              [X, j.value]
            ]) : (o(), s("span", {
              key: 1,
              onDblclick: de
            }, O(oe.value), 33))
          ], 2),
          i[11] || (i[11] = l("span", { class: "colon" }, ":", -1)),
          l("div", Xt, [
            A.value ? (o(), s("span", {
              key: 1,
              class: B(["value-summary", `value-${n.node.type}`])
            }, O(re()), 3)) : (o(), s(G, { key: 0 }, [
              $.value ? F((o(), s("input", {
                key: 0,
                "onUpdate:modelValue": i[1] || (i[1] = (m) => x.value = m),
                type: Z(),
                onBlur: K,
                onKeydown: [
                  E(K, ["enter"]),
                  E(P, ["escape"])
                ],
                class: B(["value-input", `value-${n.node.type}`]),
                ref_key: "valueInput",
                ref: J
              }, null, 42, Gt)), [
                [Ce, x.value]
              ]) : (o(), s("span", {
                key: 1,
                class: B(["value-display", `value-${n.node.type}`, { editable: n.editable }]),
                onDblclick: ce
              }, O(ae(n.node.value)), 35))
            ], 64))
          ]),
          n.editable ? (o(), s("div", Wt, [
            A.value ? (o(), s("button", {
              key: 0,
              onClick: he(ee, ["stop"]),
              class: "control-icon",
              title: n.node.expanded ? "Collapse" : "Expand"
            }, [
              n.node.expanded ? (o(), V(f(be), { key: 0 })) : (o(), V(f(me), { key: 1 }))
            ], 8, Yt)) : u("", !0),
            n.node.type === "object" || n.node.type === "array" ? (o(), s("button", {
              key: 1,
              onClick: he(ye, ["stop"]),
              class: "control-icon add-icon",
              title: "Add Item"
            }, [
              b(f(Nt))
            ])) : u("", !0),
            l("button", {
              onClick: he(ue, ["stop"]),
              class: "control-icon delete-icon",
              title: "Delete"
            }, [
              b(f(Jt))
            ])
          ])) : u("", !0)
        ], 2),
        A.value && n.node.expanded && n.node.children ? (o(), s("div", Zt, [
          (o(!0), s(G, null, fe(Y.value, (m, D) => (o(), V(g, {
            key: `${m.path.join(".")}-${D}`,
            node: m,
            editable: n.editable,
            "search-query": n.searchQuery,
            onNodeClick: i[2] || (i[2] = (_) => n.$emit("node-click", _)),
            onNodeExpand: i[3] || (i[3] = (_) => n.$emit("node-expand", _)),
            onNodeCollapse: i[4] || (i[4] = (_) => n.$emit("node-collapse", _)),
            onValueChange: i[5] || (i[5] = (_) => n.$emit("value-change", _)),
            onKeyChange: i[6] || (i[6] = (_) => n.$emit("key-change", _)),
            onNodeDelete: i[7] || (i[7] = (_) => n.$emit("node-delete", _)),
            onNodeAdd: i[8] || (i[8] = (_) => n.$emit("node-add", _))
          }, null, 8, ["node", "editable", "search-query"]))), 128)),
          C.value ? (o(), s("div", en, [
            l("div", {
              class: "indentation",
              style: ge({ width: `${(n.node.level + 1) * 20}px` })
            }, null, 4),
            i[12] || (i[12] = l("div", { class: "expand-placeholder" }, null, -1)),
            n.node.type === "object" ? F((o(), s("input", {
              key: 0,
              "onUpdate:modelValue": i[9] || (i[9] = (m) => N.value = m),
              placeholder: "Key",
              class: "key-input",
              onKeydown: [
                E(Q, ["enter"]),
                E(U, ["escape"])
              ]
            }, null, 544)), [
              [X, N.value]
            ]) : u("", !0),
            n.node.type === "object" ? (o(), s("span", tn, ":")) : u("", !0),
            F(l("input", {
              "onUpdate:modelValue": i[10] || (i[10] = (m) => p.value = m),
              placeholder: "Value",
              class: "value-input",
              onKeydown: [
                E(Q, ["enter"]),
                E(U, ["escape"])
              ]
            }, null, 544), [
              [X, p.value]
            ]),
            l("div", nn, [
              l("button", {
                onClick: Q,
                class: "add-btn",
                title: "Add"
              }, [
                b(f(It))
              ]),
              l("button", {
                onClick: U,
                class: "cancel-btn",
                title: "Cancel"
              }, [
                b(f(Kt))
              ])
            ])
          ])) : u("", !0)
        ])) : u("", !0)
      ], 2);
    };
  }
});
const ln = /* @__PURE__ */ v(on, [["__scopeId", "data-v-9f60c056"]]), sn = {
  key: 0,
  class: "menu-bar"
}, rn = {
  key: 0,
  class: "mode-switcher"
}, an = { key: 0 }, dn = { key: 0 }, cn = {
  key: 1,
  class: "tree-controls"
}, un = { key: 0 }, yn = { key: 0 }, hn = {
  key: 2,
  class: "edit-controls"
}, pn = { key: 0 }, fn = { key: 0 }, vn = { key: 0 }, gn = { class: "additional-controls" }, kn = { key: 0 }, _n = ["title"], mn = { class: "view-area" }, bn = {
  key: 0,
  class: "search-bar"
}, wn = {
  key: 1,
  class: "tree-view"
}, xn = {
  key: 2,
  class: "text-view"
}, $n = {
  key: 1,
  class: "json-display-container"
}, Cn = {
  key: 0,
  class: "line-numbers"
}, Nn = { class: "json-display" }, Sn = ["innerHTML"], Bn = {
  key: 0,
  class: "json-error-message"
}, jn = {
  key: 1,
  class: "footer"
}, Jn = { class: "footer-info" }, An = { class: "info-item" }, Tn = { class: "info-item" }, On = {
  key: 0,
  class: "info-item"
}, In = /* @__PURE__ */ ke({
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
    const t = y, h = r, w = k(t.defaultMode), $ = k(!1), j = k(""), x = k(!1), C = k(""), N = k(null), p = k(!1), M = k(""), J = k([]), A = I(() => JSON.stringify(t.data).length), W = I(() => {
      const e = (a) => {
        let d = a.length;
        return a.forEach((c) => {
          c.children && (d += e(c.children));
        }), d;
      };
      return e(J.value);
    }), oe = I(() => {
      if (!t.data)
        return "";
      const e = JSON.stringify(t.data, null, 2);
      return ue(e);
    }), le = I(() => {
      if (!t.data || !t.showLineNumbers)
        return [];
      const a = JSON.stringify(t.data, null, 2).split(`
`);
      return Array.from({ length: a.length }, (d, c) => c + 1);
    }), Y = (e) => {
      w.value = e;
    }, se = () => {
      $.value ? Z() : re();
    }, re = () => {
      N.value = JSON.parse(JSON.stringify(t.data)), C.value = JSON.stringify(t.data, null, 2), $.value = !0, h("edit-start");
    }, ae = () => {
      if (w.value === "text") {
        if (p.value) {
          alert("Please fix JSON errors before saving");
          return;
        }
        try {
          const e = JSON.parse(C.value);
          h("update:data", e);
        } catch {
          alert("Invalid JSON format");
          return;
        }
      }
      $.value = !1, N.value = null, h("edit-save", t.data);
    }, Z = () => {
      N.value && (h("update:data", N.value), C.value = JSON.stringify(N.value, null, 2)), $.value = !1, N.value = null, p.value = !1, M.value = "", h("edit-cancel");
    }, q = () => {
      const e = (a) => {
        a.forEach((d) => {
          (d.type === "object" || d.type === "array") && (d.expanded = !0, d.children && e(d.children));
        });
      };
      e(J.value);
    }, ie = () => {
      const e = (a) => {
        a.forEach((d) => {
          (d.type === "object" || d.type === "array") && (d.expanded = !1, d.children && e(d.children));
        });
      };
      e(J.value);
    }, ee = async () => {
      try {
        const e = JSON.stringify(t.data, null, 2);
        await navigator.clipboard.writeText(e);
        const a = document.querySelector(".copy-btn");
        a && (a.classList.add("copied"), setTimeout(() => {
          a.classList.remove("copied");
        }, 1500));
      } catch (e) {
        console.error("Failed to copy to clipboard:", e);
      }
    }, de = () => {
      const e = JSON.stringify(t.data, null, 2), a = new Blob([e], { type: "application/json" }), d = URL.createObjectURL(a), c = document.createElement("a");
      c.href = d, c.download = "data.json", document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(d);
    }, te = () => {
      const e = t.theme === "light" ? "dark" : "light";
      h("theme-change", e);
    }, z = () => {
      x.value = !x.value, x.value || (j.value = "");
    }, ce = () => {
      try {
        JSON.parse(C.value), p.value = !1, M.value = "";
      } catch (e) {
        p.value = !0, M.value = e.message;
      }
    }, K = (e, a = [], d = 0) => {
      const c = [];
      return e === null ? [{
        key: "",
        value: null,
        type: "null",
        path: a,
        level: d
      }] : (Array.isArray(e) ? e.forEach((S, T) => {
        const L = [...a, T.toString()], H = P(S), R = {
          key: T.toString(),
          value: S,
          type: H,
          path: L,
          level: d,
          expanded: d < t.maxDepth
        };
        (H === "object" || H === "array") && (R.children = K(S, L, d + 1)), c.push(R);
      }) : typeof e == "object" && Object.entries(e).forEach(([S, T]) => {
        const L = [...a, S], H = P(T), R = {
          key: S,
          value: T,
          type: H,
          path: L,
          level: d,
          expanded: d < t.maxDepth
        };
        (H === "object" || H === "array") && (R.children = K(T, L, d + 1)), c.push(R);
      }), c);
    }, P = (e) => e === null ? "null" : Array.isArray(e) ? "array" : typeof e == "object" ? "object" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : "string", ue = (e) => e.replace(/("[\w\s]*")\s*:/g, '<span class="json-key">$1</span>:').replace(/:\s*(".*?")/g, ': <span class="json-string">$1</span>').replace(/:\s*(true|false)/g, ': <span class="json-boolean">$1</span>').replace(/:\s*(null)/g, ': <span class="json-null">$1</span>').replace(/:\s*(\d+\.?\d*)/g, ': <span class="json-number">$1</span>'), ye = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`, Q = (e) => {
      h("node-click", e);
    }, U = (e) => {
      e.expanded = !0, h("node-expand", e);
    }, n = (e) => {
      e.expanded = !1, h("node-collapse", e);
    }, i = (e) => {
      const a = JSON.parse(JSON.stringify(t.data));
      _(a, e.node.path, e.value), h("update:data", a);
    }, g = (e) => {
      const a = JSON.parse(JSON.stringify(t.data)), d = e.node.path.slice(0, -1), c = ve(a, d);
      if (c && typeof c == "object") {
        const S = c[e.oldKey];
        delete c[e.oldKey], c[e.newKey] = S, e.node.path[e.node.path.length - 1] = e.newKey;
      }
      h("update:data", a);
    }, m = (e) => {
      const a = JSON.parse(JSON.stringify(t.data));
      we(a, e.path), h("update:data", a);
    }, D = (e) => {
      const a = JSON.parse(JSON.stringify(t.data)), d = e.parent.path, c = ve(a, d);
      Array.isArray(c) ? c.push(e.value) : typeof c == "object" && (c[e.key] = e.value), h("update:data", a);
    }, _ = (e, a, d) => {
      const c = a[a.length - 1], S = a.slice(0, -1).reduce((T, L) => T[L], e);
      S[c] = d;
    }, we = (e, a) => {
      const d = a[a.length - 1], c = a.slice(0, -1).reduce((S, T) => S[T], e);
      Array.isArray(c) ? c.splice(parseInt(d), 1) : delete c[d];
    }, ve = (e, a) => a.reduce((d, c) => d[c], e);
    return _e(() => t.data, (e) => {
      J.value = K(e), C.value = JSON.stringify(e, null, 2);
    }, { deep: !0, immediate: !0 }), Ne(() => {
      J.value = K(t.data), C.value = JSON.stringify(t.data, null, 2);
    }), (e, a) => (o(), s("div", {
      class: B(["json-viewer", `theme-${e.theme}`, { "no-header": e.hideHeader, "no-footer": e.hideFooter }])
    }, [
      e.hideHeader ? u("", !0) : (o(), s("div", sn, [
        e.hideModeSwitcher ? u("", !0) : (o(), s("div", rn, [
          l("button", {
            class: B(["mode-btn", { active: w.value === "tree" }]),
            onClick: a[0] || (a[0] = (d) => Y("tree"))
          }, [
            b(f(Je)),
            e.hideActionText ? u("", !0) : (o(), s("span", an, "Tree"))
          ], 2),
          l("button", {
            class: B(["mode-btn", { active: w.value === "text" }]),
            onClick: a[1] || (a[1] = (d) => Y("text"))
          }, [
            b(f(Ie)),
            e.hideActionText ? u("", !0) : (o(), s("span", dn, "Text"))
          ], 2)
        ])),
        !e.hideTreeControls && w.value === "tree" ? (o(), s("div", cn, [
          l("button", {
            class: "control-btn",
            onClick: q,
            title: "Expand All"
          }, [
            b(f(me)),
            e.hideActionText ? u("", !0) : (o(), s("span", un, "Expand All"))
          ]),
          l("button", {
            class: "control-btn",
            onClick: ie,
            title: "Collapse All"
          }, [
            b(f(be)),
            e.hideActionText ? u("", !0) : (o(), s("span", yn, "Collapse All"))
          ])
        ])) : u("", !0),
        e.hideEditControls ? u("", !0) : (o(), s("div", hn, [
          l("button", {
            class: B(["control-btn", { active: $.value }]),
            onClick: se,
            title: "Toggle Edit Mode"
          }, [
            b(f(qe)),
            e.hideActionText ? u("", !0) : (o(), s("span", pn, O($.value ? "Exit Edit" : "Edit"), 1))
          ], 2),
          $.value ? (o(), s(G, { key: 0 }, [
            l("button", {
              class: "control-btn save-btn",
              onClick: ae,
              title: "Save Changes"
            }, [
              b(f(Re)),
              e.hideActionText ? u("", !0) : (o(), s("span", fn, "Save"))
            ]),
            l("button", {
              class: "control-btn cancel-btn",
              onClick: Z,
              title: "Cancel Changes"
            }, [
              b(f(Ye)),
              e.hideActionText ? u("", !0) : (o(), s("span", vn, "Cancel"))
            ])
          ], 64)) : u("", !0)
        ])),
        l("div", gn, [
          e.hideSearchButton ? u("", !0) : (o(), s("button", {
            key: 0,
            class: "control-btn",
            onClick: z,
            title: "Search JSON"
          }, [
            b(f(ct)),
            e.hideActionText ? u("", !0) : (o(), s("span", kn, "Search"))
          ])),
          e.hideCopyButton ? u("", !0) : (o(), s("button", {
            key: 1,
            class: "control-btn copy-btn",
            onClick: ee,
            title: "Copy JSON"
          }, [
            b(f(nt))
          ])),
          e.hideDownloadButton ? u("", !0) : (o(), s("button", {
            key: 2,
            class: "control-btn",
            onClick: de,
            title: "Download JSON"
          }, [
            b(f(rt))
          ])),
          e.hideThemeButton ? u("", !0) : (o(), s("button", {
            key: 3,
            class: "control-btn",
            onClick: te,
            title: t.theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"
          }, [
            t.theme === "light" ? (o(), V(f(Ut), {
              key: 0,
              class: "theme-icon"
            })) : (o(), V(f(Pt), {
              key: 1,
              class: "theme-icon"
            }))
          ], 8, _n))
        ])
      ])),
      l("div", mn, [
        x.value ? (o(), s("div", bn, [
          F(l("input", {
            "onUpdate:modelValue": a[2] || (a[2] = (d) => j.value = d),
            type: "text",
            placeholder: "Search JSON...",
            class: "search-input"
          }, null, 512), [
            [X, j.value]
          ]),
          l("button", {
            class: "search-btn",
            onClick: z
          }, [
            b(f(pt))
          ])
        ])) : u("", !0),
        w.value === "tree" ? (o(), s("div", wn, [
          (o(!0), s(G, null, fe(J.value, (d, c) => (o(), V(ln, {
            key: `${d.path.join(".")}-${c}`,
            node: d,
            editable: $.value,
            "search-query": j.value,
            onNodeClick: Q,
            onNodeExpand: U,
            onNodeCollapse: n,
            onValueChange: i,
            onKeyChange: g,
            onNodeDelete: m,
            onNodeAdd: D
          }, null, 8, ["node", "editable", "search-query"]))), 128))
        ])) : (o(), s("div", xn, [
          l("div", {
            class: B(["text-editor", { "with-line-numbers": e.showLineNumbers }])
          }, [
            $.value ? F((o(), s("textarea", {
              key: 0,
              "onUpdate:modelValue": a[3] || (a[3] = (d) => C.value = d),
              class: B(["json-textarea", { error: p.value }]),
              onInput: ce
            }, null, 34)), [
              [X, C.value]
            ]) : (o(), s("div", $n, [
              e.showLineNumbers ? (o(), s("div", Cn, [
                (o(!0), s(G, null, fe(le.value, (d) => (o(), s("span", {
                  key: d,
                  class: "line-number"
                }, O(d), 1))), 128))
              ])) : u("", !0),
              l("pre", Nn, [
                l("code", { innerHTML: oe.value }, null, 8, Sn)
              ])
            ]))
          ], 2),
          p.value ? (o(), s("div", Bn, " Invalid JSON: " + O(M.value), 1)) : u("", !0)
        ]))
      ]),
      e.hideFooter ? u("", !0) : (o(), s("div", jn, [
        l("div", Jn, [
          l("span", An, [
            a[4] || (a[4] = pe(" Mode: ", -1)),
            l("strong", null, O(w.value), 1)
          ]),
          l("span", Tn, [
            a[5] || (a[5] = pe(" Size: ", -1)),
            l("strong", null, O(ye(A.value)), 1)
          ]),
          w.value === "tree" ? (o(), s("span", On, [
            a[6] || (a[6] = pe(" Nodes: ", -1)),
            l("strong", null, O(W.value), 1)
          ])) : u("", !0)
        ])
      ]))
    ], 2));
  }
});
const En = /* @__PURE__ */ v(In, [["__scopeId", "data-v-bbe167f2"]]);
export {
  ln as JsonNode,
  En as JsonViewer,
  En as default
};
