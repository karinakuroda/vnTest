/*
 AngularJS v1.4.4
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (E, s, X) {
    'use strict'; function sa(a, b, c) { if (!a) throw ngMinErr("areq", b || "?", c || "required"); return a } function ta(a, b) { if (!a && !b) return ""; if (!a) return b; if (!b) return a; Y(a) && (a = a.join(" ")); Y(b) && (b = b.join(" ")); return a + " " + b } function Da(a) { var b = {}; a && (a.to || a.from) && (b.to = a.to, b.from = a.from); return b } function U(a, b, c) { var d = ""; a = Y(a) ? a : a && O(a) && a.length ? a.split(/\s+/) : []; l(a, function (a, w) { a && 0 < a.length && (d += 0 < w ? " " : "", d += c ? b + a : a + b) }); return d } function Ea(a) {
        if (a instanceof J) switch (a.length) {
            case 0: return [];
            case 1: if (1 === a[0].nodeType) return a; break; default: return J(ia(a))
        } if (1 === a.nodeType) return J(a)
    } function ia(a) { if (!a[0]) return a; for (var b = 0; b < a.length; b++) { var c = a[b]; if (1 == c.nodeType) return c } } function Fa(a, b, c) { l(b, function (b) { a.addClass(b, c) }) } function Ga(a, b, c) { l(b, function (b) { a.removeClass(b, c) }) } function R(a) { return function (b, c) { c.addClass && (Fa(a, b, c.addClass), c.addClass = null); c.removeClass && (Ga(a, b, c.removeClass), c.removeClass = null) } } function ha(a) {
        a = a || {}; if (!a.$$prepared) {
            var b = a.domOperation ||
            G; a.domOperation = function () { a.$$domOperationFired = !0; b(); b = G }; a.$$prepared = !0
        } return a
    } function da(a, b) { ua(a, b); va(a, b) } function ua(a, b) { b.from && (a.css(b.from), b.from = null) } function va(a, b) { b.to && (a.css(b.to), b.to = null) } function S(a, b, c) {
        var d = (b.addClass || "") + " " + (c.addClass || ""), e = (b.removeClass || "") + " " + (c.removeClass || ""); a = Ha(a.attr("class"), d, e); c.preparationClasses && (b.preparationClasses = V(c.preparationClasses, b.preparationClasses), delete c.preparationClasses); d = b.domOperation !== G ? b.domOperation :
        null; wa(b, c); d && (b.domOperation = d); b.addClass = a.addClass ? a.addClass : null; b.removeClass = a.removeClass ? a.removeClass : null; return b
    } function Ha(a, b, c) {
        function d(a) { O(a) && (a = a.split(" ")); var b = {}; l(a, function (a) { a.length && (b[a] = !0) }); return b } var e = {}; a = d(a); b = d(b); l(b, function (a, b) { e[b] = 1 }); c = d(c); l(c, function (a, b) { e[b] = 1 === e[b] ? null : -1 }); var w = { addClass: "", removeClass: "" }; l(e, function (b, c) { var d, e; 1 === b ? (d = "addClass", e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]); e && (w[d].length && (w[d] += " "), w[d] += c) });
        return w
    } function D(a) { return a instanceof s.element ? a[0] : a } function xa(a, b, c) { var d = ""; b && (d = U(b, "ng-", !0)); c.addClass && (d = V(d, U(c.addClass, "-add"))); c.removeClass && (d = V(d, U(c.removeClass, "-remove"))); d.length && (c.preparationClasses = d, a.addClass(d)) } function $(a, b) { var c = b ? "-" + b + "s" : ""; ea(a, [fa, c]); return [fa, c] } function ja(a, b) { var c = b ? "paused" : "", d = W + "PlayState"; ea(a, [d, c]); return [d, c] } function ea(a, b) { a.style[b[0]] = b[1] } function V(a, b) { return a ? b ? a + " " + b : a : b } function ya(a, b, c) {
        var d = Object.create(null),
        e = a.getComputedStyle(b) || {}; l(c, function (a, b) { var c = e[a]; if (c) { var F = c.charAt(0); if ("-" === F || "+" === F || 0 <= F) c = Ia(c); 0 === c && (c = null); d[b] = c } }); return d
    } function Ia(a) { var b = 0; a = a.split(/\s*,\s*/); l(a, function (a) { "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)); a = parseFloat(a) || 0; b = b ? Math.max(a, b) : a }); return b } function ka(a) { return 0 === a || null != a } function za(a, b) { var c = K, d = a + "s"; b ? c += "Duration" : d += " linear all"; return [c, d] } function Aa() {
        var a = Object.create(null); return {
            flush: function () { a = Object.create(null) },
            count: function (b) { return (b = a[b]) ? b.total : 0 }, get: function (b) { return (b = a[b]) && b.value }, put: function (b, c) { a[b] ? a[b].total++ : a[b] = { total: 1, value: c } }
        }
    } var G = s.noop, wa = s.extend, J = s.element, l = s.forEach, Y = s.isArray, O = s.isString, la = s.isObject, Ja = s.isUndefined, Ka = s.isDefined, Ba = s.isFunction, ma = s.isElement, K, na, W, oa; E.ontransitionend === X && E.onwebkittransitionend !== X ? (K = "WebkitTransition", na = "webkitTransitionEnd transitionend") : (K = "transition", na = "transitionend"); E.onanimationend === X && E.onwebkitanimationend !==
    X ? (W = "WebkitAnimation", oa = "webkitAnimationEnd animationend") : (W = "animation", oa = "animationend"); var pa = W + "Delay", qa = W + "Duration", fa = K + "Delay"; E = K + "Duration"; var La = { transitionDuration: E, transitionDelay: fa, transitionProperty: K + "Property", animationDuration: qa, animationDelay: pa, animationIterationCount: W + "IterationCount" }, Ma = { transitionDuration: E, transitionDelay: fa, animationDuration: qa, animationDelay: pa }; s.module("ngAnimate", []).provider("$$body", function () { this.$get = ["$document", function (a) { return J(a[0].body) }] }).directive("ngAnimateChildren",
    [function () { return function (a, b, c) { a = c.ngAnimateChildren; s.isString(a) && 0 === a.length ? b.data("$$ngAnimateChildren", !0) : c.$observe("ngAnimateChildren", function (a) { b.data("$$ngAnimateChildren", "on" === a || "true" === a) }) } }]).factory("$$rAFMutex", ["$$rAF", function (a) { return function () { var b = !1; a(function () { b = !0 }); return function (c) { b ? c() : a(c) } } }]).factory("$$AnimateRunner", ["$q", "$$rAFMutex", function (a, b) {
        function c(a) { this.setHost(a); this._doneCallbacks = []; this._runInAnimationFrame = b(); this._state = 0 } c.chain =
        function (a, b) { function c() { if (H === a.length) b(!0); else a[H](function (a) { !1 === a ? b(!1) : (H++, c()) }) } var H = 0; c() }; c.all = function (a, b) { function c(w) { u = u && w; ++H === a.length && b(u) } var H = 0, u = !0; l(a, function (a) { a.done(c) }) }; c.prototype = {
            setHost: function (a) { this.host = a || {} }, done: function (a) { 2 === this._state ? a() : this._doneCallbacks.push(a) }, progress: G, getPromise: function () { if (!this.promise) { var b = this; this.promise = a(function (a, c) { b.done(function (b) { !1 === b ? c() : a() }) }) } return this.promise }, then: function (a, b) {
                return this.getPromise().then(a,
                b)
            }, "catch": function (a) { return this.getPromise()["catch"](a) }, "finally": function (a) { return this.getPromise()["finally"](a) }, pause: function () { this.host.pause && this.host.pause() }, resume: function () { this.host.resume && this.host.resume() }, end: function () { this.host.end && this.host.end(); this._resolve(!0) }, cancel: function () { this.host.cancel && this.host.cancel(); this._resolve(!1) }, complete: function (a) { var b = this; 0 === b._state && (b._state = 1, b._runInAnimationFrame(function () { b._resolve(a) })) }, _resolve: function (a) {
                2 !==
                this._state && (l(this._doneCallbacks, function (b) { b(a) }), this._doneCallbacks.length = 0, this._state = 2)
            }
        }; return c
    }]).provider("$$animateQueue", ["$animateProvider", function (a) {
        function b(a, b, c, l) { return d[a].some(function (a) { return a(b, c, l) }) } function c(a, b) { a = a || {}; var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length; return b ? c && d : c || d } var d = this.rules = { skip: [], cancel: [], join: [] }; d.join.push(function (a, b, d) { return !b.structural && c(b.options) }); d.skip.push(function (a, b, d) {
            return !b.structural &&
            !c(b.options)
        }); d.skip.push(function (a, b, c) { return "leave" == c.event && b.structural }); d.skip.push(function (a, b, c) { return c.structural && 2 === c.state && !b.structural }); d.cancel.push(function (a, b, c) { return c.structural && b.structural }); d.cancel.push(function (a, b, c) { return 2 === c.state && b.structural }); d.cancel.push(function (a, b, c) { a = b.options; c = c.options; return a.addClass && a.addClass === c.removeClass || a.removeClass && a.removeClass === c.addClass }); this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$body",
        "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (d, w, H, u, F, B, N, z, Na, t, Oa) {
            function s(a, b) { var c = D(a), f = [], h = r[b]; h && l(h, function (a) { a.node.contains(c) && f.push(a.callback) }); return f } function I(a, b, c, f) { d(function () { l(s(b, a), function (a) { a(b, c, f) }) }) } function n(a, h, m) {
                function d(b, c, f, h) { I(c, a, f, h); b.progress(c, f, h) } function r(b) {
                    var c = a, f = m; f.preparationClasses && (c.removeClass(f.preparationClasses), f.preparationClasses = null); f.activeClasses && (c.removeClass(f.activeClasses),
                    f.activeClasses = null); Ca(a, m); da(a, m); m.domOperation(); q.complete(!b)
                } var g, n; if (a = Ea(a)) g = D(a), n = a.parent(); m = ha(m); var q = new z; Y(m.addClass) && (m.addClass = m.addClass.join(" ")); m.addClass && !O(m.addClass) && (m.addClass = null); Y(m.removeClass) && (m.removeClass = m.removeClass.join(" ")); m.removeClass && !O(m.removeClass) && (m.removeClass = null); m.from && !la(m.from) && (m.from = null); m.to && !la(m.to) && (m.to = null); if (!g) return r(), q; var e = [g.className, m.addClass, m.removeClass].join(" "); if (!A(e)) return r(), q; var l =
                0 <= ["enter", "move", "leave"].indexOf(h), F = !M || x.get(g), e = !F && v.get(g) || {}, t = !!e.state; F || t && 1 == e.state || (F = !ca(a, n, h)); if (F) return r(), q; l && y(a); n = { structural: l, element: a, event: h, close: r, options: m, runner: q }; if (t) {
                    if (b("skip", a, n, e)) { if (2 === e.state) return r(), q; S(a, e.options, m); return e.runner } if (b("cancel", a, n, e)) if (2 === e.state) e.runner.end(); else if (e.structural) e.close(); else return S(a, e.options, n.options), e.runner; else if (b("join", a, n, e)) if (2 === e.state) S(a, m, {}); else return xa(a, l ? h : null, m), h =
                    n.event = e.event, m = S(a, e.options, n.options), e.runner
                } else S(a, m, {}); (t = n.structural) || (t = "animate" === n.event && 0 < Object.keys(n.options.to || {}).length || c(n.options)); if (!t) return r(), f(a), q; xa(a, l ? h : null, m); $(g, 9999); var B = (e.counter || 0) + 1; n.counter = B; k(a, 1, n); w.$$postDigest(function () {
                    var b = v.get(g), y = !b, b = b || {}, A = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || c(b.options)); if (y || b.counter !== B || !A) { y && (Ca(a, m), da(a, m)); if (y || l && b.event !== h) m.domOperation(), q.end(); A || f(a) } else h = !b.structural &&
                    c(b.options, !0) ? "setClass" : b.event, k(a, 2), b = N(a, h, b.options, function (a) { Oa(); $(D(a), !1) }), b.done(function (b) { r(!b); (b = v.get(g)) && b.counter === B && f(D(a)); d(q, h, "close", {}) }), q.setHost(b), d(q, h, "start", {})
                }); return q
            } function y(a) { a = D(a).querySelectorAll("[data-ng-animate]"); l(a, function (a) { var b = parseInt(a.getAttribute("data-ng-animate")), c = v.get(a); switch (b) { case 2: c.runner.end(); case 1: c && v.remove(a) } }) } function f(a) { a = D(a); a.removeAttribute("data-ng-animate"); v.remove(a) } function g(a, b) {
                return D(a) ===
                D(b)
            } function ca(a, b, c) { c = g(a, F) || "HTML" === a[0].nodeName; var f = g(a, H), h = !1, r; for ((a = a.data("$ngAnimatePin")) && (b = a) ; b && b.length;) { f || (f = g(b, H)); a = b[0]; if (1 !== a.nodeType) break; var d = v.get(a) || {}; h || (h = d.structural || x.get(a)); if (Ja(r) || !0 === r) a = b.data("$$ngAnimateChildren"), Ka(a) && (r = a); if (h && !1 === r) break; f || (f = g(b, H), f || (a = b.data("$ngAnimatePin")) && (b = a)); c || (c = g(b, F)); b = b.parent() } return (!h || r) && f && c } function k(a, b, c) {
                c = c || {}; c.state = b; a = D(a); a.setAttribute("data-ng-animate", b); c = (b = v.get(a)) ? wa(b,
                c) : c; v.put(a, c)
            } var v = new B, x = new B, M = null, h = w.$watch(function () { return 0 === Na.totalPendingRequests }, function (a) { a && (h(), w.$$postDigest(function () { w.$$postDigest(function () { null === M && (M = !0) }) })) }), r = {}, q = a.classNameFilter(), A = q ? function (a) { return q.test(a) } : function () { return !0 }, Ca = R(t); return {
                on: function (a, b, c) { b = ia(b); r[a] = r[a] || []; r[a].push({ node: b, callback: c }) }, off: function (a, b, c) {
                    function f(a, b, c) { var h = ia(b); return a.filter(function (a) { return !(a.node === h && (!c || a.callback === c)) }) } var h = r[a]; h &&
                    (r[a] = 1 === arguments.length ? null : f(h, b, c))
                }, pin: function (a, b) { sa(ma(a), "element", "not an element"); sa(ma(b), "parentElement", "not an element"); a.data("$ngAnimatePin", b) }, push: function (a, b, c, f) { c = c || {}; c.domOperation = f; return n(a, b, c) }, enabled: function (a, b) { var c = arguments.length; if (0 === c) b = !!M; else if (ma(a)) { var f = D(a), h = x.get(f); 1 === c ? b = !h : (b = !!b) ? h && x.remove(f) : x.put(f, !0) } else b = M = !!a; return b }
            }
        }]
    }]).provider("$$animation", ["$animateProvider", function (a) {
        function b(a) { return a.data("$$animationRunner") }
        var c = this.drivers = []; this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", function (a, e, w, H, u) {
            function F(a) {
                function b(a) { if (a.processed) return a; a.processed = !0; var d = a.domNode, f = d.parentNode; e.put(d, a); for (var g; f;) { if (g = e.get(f)) { g.processed || (g = b(g)); break } f = f.parentNode } (g || c).children.push(a); return a } var c = { children: [] }, d, e = new u; for (d = 0; d < a.length; d++) { var I = a[d]; e.put(I.domNode, a[d] = { domNode: I.domNode, fn: I.fn, children: [] }) } for (d = 0; d < a.length; d++) b(a[d]); return function (a) {
                    var b =
                    [], c = [], d; for (d = 0; d < a.children.length; d++) c.push(a.children[d]); a = c.length; var e = 0, k = []; for (d = 0; d < c.length; d++) { var v = c[d]; 0 >= a && (a = e, e = 0, b = b.concat(k), k = []); k.push(v.fn); l(v.children, function (a) { e++; c.push(a) }); a-- } k.length && (b = b.concat(k)); return b
                }(c)
            } var B = [], N = R(a); return function (z, u, t, s) {
                function G(a) { a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]"); var b = []; l(a, function (a) { var c = a.getAttribute("ng-animate-ref"); c && c.length && b.push(a) }); return b } function I(a) {
                    var b =
                    [], c = {}; l(a, function (a, f) { var h = D(a.element), d = 0 <= ["enter", "move"].indexOf(a.event), h = a.structural ? G(h) : []; if (h.length) { var e = d ? "to" : "from"; l(h, function (a) { var b = a.getAttribute("ng-animate-ref"); c[b] = c[b] || {}; c[b][e] = { animationID: f, element: J(a) } }) } else b.push(a) }); var f = {}, d = {}; l(c, function (c, e) {
                        var k = c.from, y = c.to; if (k && y) {
                            var g = a[k.animationID], v = a[y.animationID], q = k.animationID.toString(); if (!d[q]) {
                                var x = d[q] = {
                                    beforeStart: function () { g.beforeStart(); v.beforeStart() }, close: function () { g.close(); v.close() },
                                    classes: n(g.classes, v.classes), from: g, to: v, anchors: []
                                }; x.classes.length ? b.push(x) : (b.push(g), b.push(v))
                            } d[q].anchors.push({ out: k.element, "in": y.element })
                        } else k = k ? k.animationID : y.animationID, y = k.toString(), f[y] || (f[y] = !0, b.push(a[k]))
                    }); return b
                } function n(a, b) { a = a.split(" "); b = b.split(" "); for (var c = [], f = 0; f < a.length; f++) { var d = a[f]; if ("ng-" !== d.substring(0, 3)) for (var k = 0; k < b.length; k++) if (d === b[k]) { c.push(d); break } } return c.join(" ") } function y(a, b) {
                    for (var f = c.length - 1; 0 <= f; f--) {
                        var d = c[f]; if (w.has(d) &&
                        (d = w.get(d)(a, b))) return d
                    }
                } function f(a, c) { a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c) } function g() { var a = b(z); !a || "leave" === u && t.$$domOperationFired || a.end() } function ca(b) { z.off("$destroy", g); z.removeData("$$animationRunner"); N(z, t); da(z, t); t.domOperation(); M && a.removeClass(z, M); z.removeClass("ng-animate"); v.complete(!b) } t = ha(t); var k = 0 <= ["enter", "move", "leave"].indexOf(u), v = new H({ end: function () { ca() }, cancel: function () { ca(!0) } }); if (!c.length) return ca(),
                v; z.data("$$animationRunner", v); var x = ta(z.attr("class"), ta(t.addClass, t.removeClass)), M = t.tempClasses; M && (x += " " + M, t.tempClasses = null); B.push({ element: z, classes: x, event: u, structural: k, options: t, beforeStart: function () { z.addClass("ng-animate"); M && a.addClass(z, M) }, close: ca }); z.on("$destroy", g); if (1 < B.length) return v; e.$$postDigest(function () {
                    var a = []; l(B, function (c) { var f = c.element; b(f) && D(f).parentNode ? a.push(c) : c.close() }); B.length = 0; var c = I(a), d = []; l(c, function (a) {
                        d.push({
                            domNode: D(a.from ? a.from.element :
                            a.element), fn: function () { a.beforeStart(); var c, d = a.close; if (b(a.anchors ? a.from.element || a.to.element : a.element)) { var h = y(a, s); h && (c = h.start) } c ? (c = c(), c.done(function (a) { d(!a) }), f(a, c)) : d() }
                        })
                    }); l(F(d), function (a) { a() })
                }); return v
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function (a) {
        var b = Aa(), c = Aa(); this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAF", function (a, e, w, H, u, F, B) {
            function N(a, b) {
                var c = a.parentNode; return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey =
                ++E)) + "-" + a.getAttribute("class") + "-" + b
            } function z(y, f, g, n) { var k; 0 < b.count(g) && (k = c.get(g), k || (f = U(f, "-stagger"), e.addClass(y, f), k = ya(a, y, n), k.animationDuration = Math.max(k.animationDuration, 0), k.transitionDuration = Math.max(k.transitionDuration, 0), e.removeClass(y, f), c.put(g, k))); return k || {} } function s(a) { I && I(); n.push(a); I = B(function () { I = null; b.flush(); c.flush(); for (var a = u(), d = 0; d < n.length; d++) n[d](a); n.length = 0 }) } function t(c, f, e) {
                f = b.get(e); f || (f = ya(a, c, La), "infinite" === f.animationIterationCount &&
                (f.animationIterationCount = 1)); b.put(e, f); c = f; e = c.animationDelay; f = c.transitionDelay; c.maxDelay = e && f ? Math.max(e, f) : e || f; c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration); return c
            } var G = R(e), E = 0, I, n = []; return function (a, c) {
                function d() { k() } function n() { k(!0) } function k(b) { if (!(B || ra && u)) { B = !0; u = !1; c.$$skipPreparationClasses || e.removeClass(a, Z); e.removeClass(a, X); ja(h, !1); $(h, !1); l(r, function (a) { h.style[a[0]] = "" }); G(a, c); da(a, c); if (c.onDone) c.onDone(); m && m.complete(!b) } }
                function v(a) { p.blockTransition && $(h, a); p.blockKeyframeAnimation && ja(h, !!a) } function x() { m = new w({ end: d, cancel: n }); k(); return { $$willAnimate: !1, start: function () { return m }, end: d } } function I() {
                    function b() {
                        if (!B) {
                            v(!1); l(r, function (a) { h.style[a[0]] = a[1] }); G(a, c); e.addClass(a, X); if (p.recalculateTimingStyles) { ga = h.className + " " + Z; aa = N(h, ga); C = t(h, ga, aa); Q = C.maxDelay; J = Math.max(Q, 0); L = C.maxDuration; if (0 === L) { k(); return } p.hasTransitions = 0 < C.transitionDuration; p.hasAnimations = 0 < C.animationDuration } if (p.applyTransitionDelay ||
                            p.applyAnimationDelay) { Q = "boolean" !== typeof c.delay && ka(c.delay) ? parseFloat(c.delay) : Q; J = Math.max(Q, 0); var g; p.applyTransitionDelay && (C.transitionDelay = Q, g = [fa, Q + "s"], r.push(g), h.style[g[0]] = g[1]); p.applyAnimationDelay && (C.animationDelay = Q, g = [pa, Q + "s"], r.push(g), h.style[g[0]] = g[1]) } O = 1E3 * J; R = 1E3 * L; if (c.easing) { var q = c.easing; p.hasTransitions && (g = K + "TimingFunction", r.push([g, q]), h.style[g] = q); p.hasAnimations && (g = W + "TimingFunction", r.push([g, q]), h.style[g] = q) } C.transitionDuration && x.push(na); C.animationDuration &&
                            x.push(oa); n = Date.now(); a.on(x.join(" "), m); H(d, O + 1.5 * R, !1); va(a, c)
                        }
                    } function d() { k() } function m(a) { a.stopPropagation(); var b = a.originalEvent || a; a = b.$manualTimeStamp || b.timeStamp || Date.now(); b = parseFloat(b.elapsedTime.toFixed(3)); Math.max(a - n, 0) >= O && b >= L && (ra = !0, k()) } if (!B) if (h.parentNode) {
                        var n, x = [], g = function (a) { if (ra) u && a && (u = !1, k()); else if (u = !a, C.animationDuration) if (a = ja(h, u), u) r.push(a); else { var b = r, c = b.indexOf(a); 0 <= a && b.splice(c, 1) } }, q = 0 < V && (C.transitionDuration && 0 === T.transitionDuration ||
                        C.animationDuration && 0 === T.animationDuration) && Math.max(T.animationDelay, T.transitionDelay); q ? H(b, Math.floor(q * V * 1E3), !1) : b(); E.resume = function () { g(!0) }; E.pause = function () { g(!1) }
                    } else k()
                } var h = D(a); if (!h || !h.parentNode) return x(); c = ha(c); var r = [], q = a.attr("class"), A = Da(c), B, u, ra, m, E, J, O, L, R; if (0 === c.duration || !F.animations && !F.transitions) return x(); var ba = c.event && Y(c.event) ? c.event.join(" ") : c.event, S = "", P = ""; ba && c.structural ? S = U(ba, "ng-", !0) : ba && (S = ba); c.addClass && (P += U(c.addClass, "-add")); c.removeClass &&
                (P.length && (P += " "), P += U(c.removeClass, "-remove")); c.applyClassesEarly && P.length && (G(a, c), P = ""); var Z = [S, P].join(" ").trim(), ga = q + " " + Z, X = U(Z, "-active"), q = A.to && 0 < Object.keys(A.to).length; if (!(0 < (c.keyframeStyle || "").length || q || Z)) return x(); var aa, T; 0 < c.stagger ? (A = parseFloat(c.stagger), T = { transitionDelay: A, animationDelay: A, transitionDuration: 0, animationDuration: 0 }) : (aa = N(h, ga), T = z(h, Z, aa, Ma)); c.$$skipPreparationClasses || e.addClass(a, Z); c.transitionStyle && (A = [K, c.transitionStyle], ea(h, A), r.push(A));
                0 <= c.duration && (A = 0 < h.style[K].length, A = za(c.duration, A), ea(h, A), r.push(A)); c.keyframeStyle && (A = [W, c.keyframeStyle], ea(h, A), r.push(A)); var V = T ? 0 <= c.staggerIndex ? c.staggerIndex : b.count(aa) : 0; (ba = 0 === V) && !c.skipBlocking && $(h, 9999); var C = t(h, ga, aa), Q = C.maxDelay; J = Math.max(Q, 0); L = C.maxDuration; var p = {}; p.hasTransitions = 0 < C.transitionDuration; p.hasAnimations = 0 < C.animationDuration; p.hasTransitionAll = p.hasTransitions && "all" == C.transitionProperty; p.applyTransitionDuration = q && (p.hasTransitions && !p.hasTransitionAll ||
                p.hasAnimations && !p.hasTransitions); p.applyAnimationDuration = c.duration && p.hasAnimations; p.applyTransitionDelay = ka(c.delay) && (p.applyTransitionDuration || p.hasTransitions); p.applyAnimationDelay = ka(c.delay) && p.hasAnimations; p.recalculateTimingStyles = 0 < P.length; if (p.applyTransitionDuration || p.applyAnimationDuration) L = c.duration ? parseFloat(c.duration) : L, p.applyTransitionDuration && (p.hasTransitions = !0, C.transitionDuration = L, A = 0 < h.style[K + "Property"].length, r.push(za(L, A))), p.applyAnimationDuration && (p.hasAnimations =
                !0, C.animationDuration = L, r.push([qa, L + "s"])); if (0 === L && !p.recalculateTimingStyles) return x(); null == c.duration && 0 < C.transitionDuration && (p.recalculateTimingStyles = p.recalculateTimingStyles || ba); O = 1E3 * J; R = 1E3 * L; c.skipBlocking || (p.blockTransition = 0 < C.transitionDuration, p.blockKeyframeAnimation = 0 < C.animationDuration && 0 < T.animationDelay && 0 === T.animationDuration); ua(a, c); p.blockTransition || p.blockKeyframeAnimation ? v(L) : c.skipBlocking || $(h, !1); return {
                    $$willAnimate: !0, end: d, start: function () {
                        if (!B) return E =
                        { end: d, cancel: n, resume: null, pause: null }, m = new w(E), s(I), m
                    }
                }
            }
        }]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateCssDriver"); this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$$body", "$sniffer", "$$jqLite", function (a, c, d, e, w, H, u) {
            function F(a) { return a.replace(/\bng-\S+\b/g, "") } function B(a, b) { O(a) && (a = a.split(" ")); O(b) && (b = b.split(" ")); return a.filter(function (a) { return -1 === b.indexOf(a) }).join(" ") } function N(c, e, u) {
                function f(a) {
                    var b =
                    {}, c = D(a).getBoundingClientRect(); l(["width", "height", "top", "left"], function (a) { var d = c[a]; switch (a) { case "top": d += t.scrollTop; break; case "left": d += t.scrollLeft } b[a] = Math.floor(d) + "px" }); return b
                } function g() { var c = F(u.attr("class") || ""), d = B(c, v), c = B(v, c), d = a(k, { to: f(u), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 }); return d.$$willAnimate ? d : null } function N() { k.remove(); e.removeClass("ng-animate-shim"); u.removeClass("ng-animate-shim") } var k = J(D(e).cloneNode(!0)), v = F(k.attr("class") ||
                ""); e.addClass("ng-animate-shim"); u.addClass("ng-animate-shim"); k.addClass("ng-anchor"); E.append(k); var x; c = function () { var c = a(k, { addClass: "ng-anchor-out", delay: !0, from: f(e) }); return c.$$willAnimate ? c : null }(); if (!c && (x = g(), !x)) return N(); var M = c || x; return { start: function () { function a() { c && c.end() } var b, c = M.start(); c.done(function () { c = null; if (!x && (x = g())) return c = x.start(), c.done(function () { c = null; N(); b.complete() }), c; N(); b.complete() }); return b = new d({ end: a, cancel: a }) } }
            } function z(a, b, c, f) {
                var e = s(a,
                G), u = s(b, G), k = []; l(f, function (a) { (a = N(c, a.out, a["in"])) && k.push(a) }); if (e || u || 0 !== k.length) return { start: function () { function a() { l(b, function (a) { a.end() }) } var b = []; e && b.push(e.start()); u && b.push(u.start()); l(k, function (a) { b.push(a.start()) }); var c = new d({ end: a, cancel: a }); d.all(b, function (a) { c.complete(a) }); return c } }
            } function s(c, d) {
                var e = c.element, f = c.options || {}; f.$$skipPreparationClasses = !0; f.skipBlocking = !0; c.structural && (f.event = c.event, "leave" === c.event && (f.onDone = f.domOperation)); d(e); K(e, f);
                f.preparationClasses && (f.event = V(f.event, f.preparationClasses)); e = a(e, f); return e.$$willAnimate ? e : null
            } if (!H.animations && !H.transitions) return G; var t = D(w); c = D(e); var E = J(t.parentNode === c ? t : c), K = R(u); return function (a, b) { return a.from && a.to ? z(a.from, a.to, a.classes, a.anchors) : s(a, b) }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function (a) {
        this.$get = ["$injector", "$$AnimateRunner", "$$rAFMutex", "$$jqLite", function (b, c, d, e) {
            function w(c) {
                c = Y(c) ? c : c.split(" "); for (var d = [], e = {}, l = 0; l < c.length; l++) {
                    var w =
                    c[l], s = a.$$registeredAnimations[w]; s && !e[w] && (d.push(b.get(s)), e[w] = !0)
                } return d
            } var s = R(e); return function (a, b, d, e) {
                function z() { e.domOperation(); s(a, e) } function D(a, b, d, e, f) { switch (d) { case "animate": b = [b, e.from, e.to, f]; break; case "setClass": b = [b, J, I, f]; break; case "addClass": b = [b, J, f]; break; case "removeClass": b = [b, I, f]; break; default: b = [b, f] } b.push(e); if (a = a.apply(a, b)) if (Ba(a.start) && (a = a.start()), a instanceof c) a.done(f); else if (Ba(a)) return a; return G } function t(a, b, d, e, f) {
                    var g = []; l(e, function (e) {
                        var l =
                        e[f]; l && g.push(function () { var e, f, h = !1, g = function (a) { h || (h = !0, (f || G)(a), e.complete(!a)) }; e = new c({ end: function () { g() }, cancel: function () { g(!0) } }); f = D(l, a, b, d, function (a) { g(!1 === a) }); return e })
                    }); return g
                } function E(a, b, d, e, f) {
                    var g = t(a, b, d, e, f); if (0 === g.length) { var q, n; "beforeSetClass" === f ? (q = t(a, "removeClass", d, e, "beforeRemoveClass"), n = t(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (q = t(a, "removeClass", d, e, "removeClass"), n = t(a, "addClass", d, e, "addClass")); q && (g = g.concat(q)); n && (g = g.concat(n)) } if (0 !==
                    g.length) return function (a) { var b = []; g.length && l(g, function (a) { b.push(a()) }); b.length ? c.all(b, a) : a(); return function (a) { l(b, function (b) { a ? b.cancel() : b.end() }) } }
                } 3 === arguments.length && la(d) && (e = d, d = null); e = ha(e); d || (d = a.attr("class") || "", e.addClass && (d += " " + e.addClass), e.removeClass && (d += " " + e.removeClass)); var J = e.addClass, I = e.removeClass, n = w(d), y, f; if (n.length) {
                    var g, K; "leave" == b ? (K = "leave", g = "afterLeave") : (K = "before" + b.charAt(0).toUpperCase() + b.substr(1), g = b); "enter" !== b && "move" !== b && (y = E(a, b, e,
                    n, K)); f = E(a, b, e, n, g)
                } if (y || f) return { start: function () { function b(c) { l = !0; z(); da(a, e); h.complete(c) } var d, g = []; y && g.push(function (a) { d = y(a) }); g.length ? g.push(function (a) { z(); a(!0) }) : z(); f && g.push(function (a) { d = f(a) }); var l = !1, h = new c({ end: function () { l || ((d || G)(void 0), b(void 0)) }, cancel: function () { l || ((d || G)(!0), b(!0)) } }); c.chain(g, b); return h } }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateJsDriver"); this.$get = ["$$animateJs", "$$AnimateRunner", function (a,
        c) { function d(c) { return a(c.element, c.event, c.classes, c.options) } return function (a) { if (a.from && a.to) { var b = d(a.from), s = d(a.to); if (b || s) return { start: function () { function a() { return function () { l(d, function (a) { a.end() }) } } var d = []; b && d.push(b.start()); s && d.push(s.start()); c.all(d, function (a) { e.complete(a) }); var e = new c({ end: a(), cancel: a() }); return e } } } else return d(a) } }]
    }])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map