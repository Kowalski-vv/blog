(function () {
  var e = {
      3906: function (e, n, i) {
        "use strict";
        var t = i(5130),
          o = (i(4114), i(6768)),
          r = i(2888),
          a = {
            __name: "App",
            setup(e) {
              const n = new r.lgM({
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 16777215,
                resolution: window.devicePixelRatio || 1,
                antialias: !0,
              });
              document.body.appendChild(n.view);
              const i = new r.mcf();
              n.stage.addChild(i);
              const t = n.screen.width,
                a = n.screen.height,
                s = a / 1.3,
                l = r.t5M.from("./textures/dino2.png"),
                c = new r.gPd(l, new r.M_G(75, 8, 88, 88)),
                d = new r.kxk(c);
              d.scale.set(1.5),
                d.position.set(t / 2 - 88, s - 88),
                i.addChild(d);
              const u = [];
              for (let o = 0; o < 2; o++)
                u.push(new r.gPd(l, new r.M_G(1682 + 88 * (o + 2), 6, 81, 87)));
              const w = new r.Dl5(u);
              (w.animationSpeed = 0.1),
                w.play(),
                (w.visible = !1),
                (w.x = 60),
                (w.y = s - 100),
                w.scale.set(1.5),
                i.addChild(w);
              const f = [];
              for (let o = 0; o < 2; o++)
                f.push(
                  new r.gPd(l, new r.M_G(2210 + 118 * (o + 0), 40, 110, 52))
                );
              const v = new r.Dl5(f);
              (v.animationSpeed = 0.1),
                v.play(),
                (v.visible = !1),
                (v.x = 60),
                (v.y = s - 52),
                v.scale.set(1.5),
                i.addChild(v);
              const p = new r.gPd(l, new r.M_G(1682, 6, 81, 87)),
                h = new r.kxk(p);
              (h.visible = !1),
                (h.x = 60),
                (h.y = s - 88),
                h.scale.set(1.5),
                i.addChild(h);
              const b = new r.gPd(l, new r.M_G(1770, 6, 81, 87)),
                g = new r.kxk(b);
              (g.visible = !1), g.scale.set(1.5), i.addChild(g);
              const k = new r.gPd(l, new r.M_G(2, 104, 2400, 22)),
                x = new r.t9Q(k);
              (x.width = t),
                (x.height = 22),
                x.position.set(0, s),
                x.scale.set(1.5),
                i.addChild(x);
              const m = new r.gPd(l, new r.M_G(448, 4, 30, 66)),
                y = new r.kxk(m);
              y.position.set(t, s - 66), y.scale.set(1.5), i.addChild(y);
              const C = new r.EYj("开始游戏", {
                fontFamily: "Arial",
                fontSize: 44,
                fill: "#222",
                align: "center",
              });
              C.anchor.set(0.5, 0.5),
                C.position.set(t / 2, a / 3),
                i.addChild(C),
                (C.interactive = !0),
                C.on("click", () => {
                  const e = setInterval(() => {
                    (d.x -= 15),
                      d.x < 0 &&
                        ((d.visible = !1), (d.x = 100), clearInterval(e), F());
                  }, 10);
                });
              const _ = [];
              for (let o = 0; o < 10; o++)
                _.push(new r.gPd(l, new r.M_G(1294 + 20 * o, 2, 18, 21)));
              const S = new r.Dl5(_);
              (S.animationSpeed = 0.1),
                (S.visible = !1),
                (S.x = t / 1.5),
                (S.y = a / 3),
                i.addChild(S);
              let M = !1,
                P = !1,
                A = 0,
                O = 9,
                j = 0.2,
                G = 5,
                E = G + 5,
                D = G - 3,
                L = G;
              function F() {
                (M = !0),
                  (P = !1),
                  (S.visible = !0),
                  S.gotoAndPlay(0),
                  y.position.set(t + 100 * Math.random(), s - 66),
                  (w.visible = !0)/*,
                  console.log("开始游戏");*/
              }
              function R() {
                P = !0;
                const e = new r.EYj("游戏结束了\n得分:" + A, {
                  fontFamily: "Arial",
                  fontSize: 44,
                  fill: "#222",
                  align: "center",
                });
                e.anchor.set(0.5),
                  e.position.set(t / 2, a / 3),
                  i.addChild(e),
                  (e.interactive = !0),
                  e.on("click", () => {
                    (e.visible = !1), (C.visible = !0);
                  }),
                  (A = 0);
              }
              n.ticker.add(() => {
                P ||
                  (M &&
                    ((C.visible = !1),
                    (x.tilePosition.x -= G / 1.5),
                    (y.x -= G),
                    y.x <= -30 && ((y.x = t + 300 * Math.random()), (A += 10))),
                  h.visible &&
                    ((O -= j),
                    (h.y -= O),
                    h.y + 88 >= s &&
                      ((h.visible = !1),
                      (h.y = s - 88),
                      (O = 9),
                      (j = 0.2),
                      z ? (v.visible = !0) : (w.visible = !0))),
                  h.y > y.y - 88 &&
                    h.x > y.x - 87 &&
                    h.x < y.x + 30 &&
                    (S.stop(), R()));
              });
              let z = !1;
              return (
                window.addEventListener("keydown", (e) => {
                  switch (e.code) {
                    case "Space":
                      (h.visible = !0), (w.visible = !1), (v.visible = !1);
                      break;
                    case "ArrowUp":
                      (h.visible = !0), (w.visible = !1), (v.visible = !1);
                      break;
                    case "ArrowDown":
                      h.visible
                        ? (j = 0.5)
                        : ((z = !0), (w.visible = !1), (v.visible = !0));
                      break;
                    case "ArrowRight":
                      (G = E),
                        (w.animationSpeed = 0.3),
                        (v.animationSpeed = 0.3);
                      break;
                    case "ArrowLeft":
                      (G = D),
                        (w.animationSpeed = 0.03),
                        (v.animationSpeed = 0.03);
                      break;
                  }
                }),
                window.addEventListener("keyup", (e) => {
                  switch (e.code) {
                    case "Space":
                      break;
                    case "ArrowDown":
                      h.visible
                        ? (j = 1)
                        : ((z = !1), (w.visible = !0), (v.visible = !1));
                      break;
                    case "ArrowRight":
                      (G = L),
                        (w.animationSpeed = 0.1),
                        (v.animationSpeed = 0.1);
                      break;
                    case "ArrowLeft":
                      (G = L),
                        (w.animationSpeed = 0.1),
                        (v.animationSpeed = 0.1);
                      break;
                  }
                }),
                (e, n) => ((0, o.uX)(), (0, o.CE)("div"))
              );
            },
          };
        const s = a;
        var l = s;
        (0, t.Ef)(l).mount("#app");
      },
      2634: function () {},
    },
    n = {};
  function i(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var r = (n[t] = { id: t, loaded: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.loaded = !0), r.exports;
  }
  (i.m = e),
    (function () {
      var e = [];
      i.O = function (n, t, o, r) {
        if (!t) {
          var a = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (t = e[d][0]), (o = e[d][1]), (r = e[d][2]);
            for (var s = !0, l = 0; l < t.length; l++)
              (!1 & r || a >= r) &&
              Object.keys(i.O).every(function (e) {
                return i.O[e](t[l]);
              })
                ? t.splice(l--, 1)
                : ((s = !1), r < a && (a = r));
            if (s) {
              e.splice(d--, 1);
              var c = o();
              void 0 !== c && (n = c);
            }
          }
          return n;
        }
        r = r || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
        e[d] = [t, o, r];
      };
    })(),
    (function () {
      i.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return i.d(n, { a: n }), n;
      };
    })(),
    (function () {
      i.d = function (e, n) {
        for (var t in n)
          i.o(n, t) &&
            !i.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
      };
    })(),
    (function () {
      i.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      i.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      };
    })(),
    (function () {
      i.nmd = function (e) {
        return (e.paths = []), e.children || (e.children = []), e;
      };
    })(),
    (function () {
      var e = { 524: 0 };
      i.O.j = function (n) {
        return 0 === e[n];
      };
      var n = function (n, t) {
          var o,
            r,
            a = t[0],
            s = t[1],
            l = t[2],
            c = 0;
          if (
            a.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (o in s) i.o(s, o) && (i.m[o] = s[o]);
            if (l) var d = l(i);
          }
          for (n && n(t); c < a.length; c++)
            (r = a[c]), i.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return i.O(d);
        },
        t = (self["webpackChunk_01_pixi"] = self["webpackChunk_01_pixi"] || []);
      t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
    })();
  var t = i.O(void 0, [504], function () {
    return i(3906);
  });
  t = i.O(t);
})();
//# sourceMappingURL=app.13e9beae.js.map
