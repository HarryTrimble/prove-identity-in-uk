! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = oe.type(e);
        return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (he.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return oe.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = we[e] = {};
        return oe.each(e.match(ye) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (pe.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (s(), oe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Te, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? oe.parseJSON(n) : n
                } catch (o) {}
                oe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (oe.acceptData(e)) {
            var o, r, s = oe.expando,
                a = e.nodeType,
                l = a ? oe.cache : e,
                u = a ? e[s] : e[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = a ? e[s] = Y.pop() || oe.guid++ : s), l[u] || (l[u] = a ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = oe.extend(l[u], t) : l[u].data = oe.extend(l[u].data, t)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[oe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[oe.camelCase(t)])) : o = r, o
        }
    }

    function d(e, t, n) {
        if (oe.acceptData(e)) {
            var i, o, r = e.nodeType,
                s = r ? oe.cache : e,
                a = r ? e[oe.expando] : oe.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !u(i) : !oe.isEmptyObject(i)) return
                }(n || (delete s[a].data, u(s[a]))) && (r ? oe.cleanData([e], !0) : ne.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return pe.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = Le.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function m(e, t) {
        var n, i, o = 0,
            r = typeof e.getElementsByTagName !== ke ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ke ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || oe.nodeName(i, t) ? r.push(i) : oe.merge(r, m(i, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], r) : r
    }

    function v(e) {
        ze.test(e.type) && (e.defaultChecked = e.checked)
    }

    function b(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Xe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
    }

    function _(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, i, o, r = oe._data(e),
                s = oe._data(t, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; o > i; i++) oe.event.add(t, n, a[n][i])
            }
            s.data && (s.data = oe.extend({}, s.data))
        }
    }

    function k(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
                o = oe._data(t);
                for (i in o.events) oe.removeEvent(t, i, o.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === n && t.text !== e.text ? (y(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, n) {
        var i, o = oe(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
        return o.detach(), r
    }

    function T(e) {
        var t = pe,
            n = Ze[e];
        return n || (n = C(e, t), "none" !== n && n || (Je = (Je || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Je[0].contentWindow || Je[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Je.detach()), Ze[e] = n), n
    }

    function E(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function D(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = ht.length; o--;)
            if (t = ht[o] + n, t in e) return t;
        return i
    }

    function S(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = oe._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Se(i) && (r[s] = oe._data(i, "olddisplay", T(i.nodeName)))) : (o = Se(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function N(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function z(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += oe.css(e, n + De[r], !0, o)), i ? ("content" === n && (s -= oe.css(e, "padding" + De[r], !0, o)), "margin" !== n && (s -= oe.css(e, "border" + De[r] + "Width", !0, o))) : (s += oe.css(e, "padding" + De[r], !0, o), "padding" !== n && (s += oe.css(e, "border" + De[r] + "Width", !0, o)));
        return s
    }

    function j(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = et(e),
            s = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = tt(e, t, r), (0 > o || null == o) && (o = e.style[t]), it.test(o)) return o;
            i = s && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + z(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function H(e, t, n, i, o) {
        return new H.prototype.init(e, t, n, i, o)
    }

    function P() {
        return setTimeout(function() {
            ft = void 0
        }), ft = oe.now()
    }

    function A(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = De[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function W(e, t, n) {
        for (var i, o = (yt[t] || []).concat(yt["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function L(e, t, n) {
        var i, o, r, s, a, l, u, c, d = this,
            h = {},
            f = e.style,
            p = e.nodeType && Se(e),
            g = oe._data(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = oe.css(e, "display"), c = "none" === u ? oe._data(e, "olddisplay") || T(e.nodeName) : u, "inline" === c && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], gt.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    p = !0
                }
                h[i] = g && g[i] || oe.style(e, i)
            } else u = void 0;
        if (oe.isEmptyObject(h)) "inline" === ("none" === u ? T(e.nodeName) : u) && (f.display = u);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = oe._data(e, "fxshow", {}), r && (g.hidden = !p), p ? oe(e).show() : d.done(function() {
                oe(e).hide()
            }), d.done(function() {
                var t;
                oe._removeData(e, "fxshow");
                for (t in h) oe.style(e, t, h[t])
            });
            for (i in h) s = W(p ? g[i] : 0, i, d), i in g || (g[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function I(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = oe.camelCase(n), o = t[i], r = e[n], oe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function F(e, t, n) {
        var i, o, r = 0,
            s = bt.length,
            a = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = ft || P(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(e, [u, r, n]), 1 > r && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (I(c, u.opts.specialEasing); s > r; r++)
            if (i = bt[r].call(u, e, c, u.opts)) return i;
        return oe.map(c, W, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function M(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(ye) || [];
            if (oe.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function O(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, oe.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            s = e === qt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function R(e, t) {
        var n, i, o = oe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && oe.extend(!0, e, n), e
    }

    function B(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (s in a)
                if (a[s] && a[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function q(e, t, n, i) {
        var o, r, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s)
                for (o in u)
                    if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function $(e, t, n, i) {
        var o;
        if (oe.isArray(t)) oe.each(t, function(t, o) {
            n || Xt.test(e) ? i(e, o) : $(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== oe.type(t)) i(e, t);
        else
            for (o in t) $(e + "[" + o + "]", t[o], n, i)
    }

    function U() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function X(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var Y = [],
        Q = Y.slice,
        G = Y.concat,
        K = Y.push,
        J = Y.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        ie = "1.11.2",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (i in o) e = s[i], n = o[i], s !== n && (u && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, r = e && oe.isArray(e) ? e : []) : r = e && oe.isPlainObject(e) ? e : {}, s[i] = oe.extend(u, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && oe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(ae, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; s > r && (o = t.apply(e[r], i), o !== !1); r++);
                else
                    for (r in e)
                        if (o = t.apply(e[r], i), o === !1) break
            } else if (a)
                for (; s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else
                for (r in e)
                    if (o = t.call(e[r], r, e[r]), o === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (J) return J.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; s > r; r++) o = t(e[r], r, i), null != o && l.push(o);
            else
                for (r in e) o = t(e[r], r, i), null != o && l.push(o);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = Q.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(Q.call(arguments)))
            }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, u, d, f, p, g;
            if ((t ? t.ownerDocument || t : O) !== H && j(t), t = t || H, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && A) {
                if (11 !== a && (o = be.exec(e)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = t.getElementById(s), !r || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && F(t, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && x.getElementsByClassName) return J.apply(n, t.getElementsByClassName(s)), n
                    }
                if (x.qsa && (!W || !W.test(e))) {
                    if (f = d = M, p = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (u = T(e), (d = t.getAttribute("id")) ? f = d.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + h(u[l]);
                        p = ye.test(e) && c(t.parentNode) || t, g = u.join(",")
                    }
                    if (g) try {
                        return J.apply(n, p.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[M] = !0, e
        }

        function o(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = B++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, s) {
                var a, l, u = [R, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[M] || (t[M] = {}), (a = l[i]) && a[0] === R && a[1] === r) return u[2] = a[2];
                            if (l[i] = u, u[2] = e(t, n, s)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }

        function m(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), u && t.push(a));
            return s
        }

        function v(e, t, n, o, r, s) {
            return o && !o[M] && (o = v(o)), r && !r[M] && (r = v(r, s)), i(function(i, s, a, l) {
                var u, c, d, h = [],
                    f = [],
                    p = s.length,
                    v = i || g(t || "*", a.nodeType ? [a] : a, []),
                    b = !e || !i && t ? v : m(v, h, e, a, l),
                    y = n ? r || (i ? e : p || o) ? [] : s : b;
                if (n && n(b, y, a, l), o)
                    for (u = m(y, f), o(u, [], a, l), c = u.length; c--;)(d = u[c]) && (y[f[c]] = !(b[f[c]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = y.length; c--;)(d = y[c]) && u.push(b[c] = d);
                            r(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(d = y[c]) && (u = r ? ee(i, d) : h[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else y = m(y === s ? y.splice(p, y.length) : y), r ? r(null, s, y, l) : J.apply(s, y)
            })
        }

        function b(e) {
            for (var t, n, i, o = e.length, r = _.relative[e[0].type], s = r || _.relative[" "], a = r ? 1 : 0, l = f(function(e) {
                    return e === t
                }, s, !0), u = f(function(e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function(e, n, i) {
                    var o = !r && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, o
                }]; o > a; a++)
                if (n = _.relative[e[a].type]) c = [f(p(c), n)];
                else {
                    if (n = _.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                        for (i = ++a; o > i && !_.relative[e[i].type]; i++);
                        return v(a > 1 && p(c), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > a && b(e.slice(a, i)), o > i && b(e = e.slice(i)), o > i && h(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function y(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, u) {
                    var c, d, h, f = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        b = S,
                        y = i || r && _.find.TAG("*", u),
                        w = R += null == b ? 1 : Math.random() || .1,
                        x = y.length;
                    for (u && (S = s !== H && s); p !== x && null != (c = y[p]); p++) {
                        if (r && c) {
                            for (d = 0; h = e[d++];)
                                if (h(c, s, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (R = w)
                        }
                        o && ((c = !h && c) && f--, i && g.push(c))
                    }
                    if (f += p, o && p !== f) {
                        for (d = 0; h = n[d++];) h(g, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = G.call(l));
                            v = m(v)
                        }
                        J.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (R = w, S = b), g
                };
            return o ? i(s) : s
        }
        var w, x, _, k, C, T, E, D, S, N, z, j, H, P, A, W, L, I, F, M = "sizzle" + 1 * new Date,
            O = e.document,
            R = 0,
            B = 0,
            q = n(),
            $ = n(),
            U = n(),
            V = function(e, t) {
                return e === t && (z = !0), 0
            },
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            K = Q.push,
            J = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(se),
            fe = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            _e = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ke = function() {
                j()
            };
        try {
            J.apply(Q = Z.call(O.childNodes), O.childNodes), Q[O.childNodes.length].nodeType
        } catch (Ce) {
            J = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, j = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : O;
            return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, P = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), A = !C(i), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = o(function(e) {
                return P.appendChild(e).id = M, !i.getElementsByName || !i.getElementsByName(M).length
            }), x.getById ? (_.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && A) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function(e) {
                var t = e.replace(xe, _e);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var t = e.replace(xe, _e);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, _.find.CLASS = x.getElementsByClassName && function(e, t) {
                return A ? t.getElementsByClassName(e) : void 0
            }, L = [], W = [], (x.qsa = ve.test(i.querySelectorAll)) && (o(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && W.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || W.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || W.push("~="), e.querySelectorAll(":checked").length || W.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || W.push(".#.+[+~]")
            }), o(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && W.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), W.push(",.*:")
            })), (x.matchesSelector = ve.test(I = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), L.push("!=", se)
            }), W = W.length && new RegExp(W.join("|")), L = L.length && new RegExp(L.join("|")), t = ve.test(P.compareDocumentPosition), F = t || ve.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return z = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === O && F(O, e) ? -1 : t === i || t.ownerDocument === O && F(O, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return z = !0, 0;
                var n, o = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    u = [t];
                if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                if (r === a) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[o] === u[o];) o++;
                return o ? s(l[o], u[o]) : l[o] === O ? -1 : u[o] === O ? 1 : 0
            }, i) : H
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && j(e), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !A || L && L.test(n) || W && W.test(n))) try {
                var i = I.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && j(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && j(e);
            var n = _.attrHandle[t.toLowerCase()],
                i = n && Y.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== i ? i : x.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (z = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(V), z) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return N = null, e
        }, k = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += k(t);
            return n
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, _e).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, h, f, p, g = r !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            b = !l && !a;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild], s && b) {
                                for (c = m[M] || (m[M] = {}), u = c[e] || [], f = u[0] === R && u[1], h = u[0] === R && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (h = f = 0) || p.pop();)
                                    if (1 === d.nodeType && ++h && d === t) {
                                        c[e] = [R, f, h];
                                        break
                                    }
                            } else if (b && (u = (t[M] || (t[M] = {}))[e]) && u[0] === R) h = u[1];
                            else
                                for (;
                                    (d = ++f && d && d[g] || (h = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (b && ((d[M] || (d[M] = {}))[e] = [R, h]), d !== t)););
                            return h -= o, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[M] ? r(n) : r.length > 1 ? (o = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = E(e.replace(le, "$1"));
                    return o[M] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xe, _e),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, _e).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) _.pseudos[w] = l(w);
        return d.prototype = _.filters = _.pseudos, _.setFilters = new d, T = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, u, c = $[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = _.preFilter; a;) {
                (!i || (o = ue.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (s in _.filter) !(o = pe[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : $(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = U[e + " "];
            if (!r) {
                for (t || (t = T(e)), n = t.length; n--;) r = b(t[n]), r[M] ? i.push(r) : o.push(r);
                r = U(e, y(o, i)), r.selector = e
            }
            return r
        }, D = t.select = function(e, t, n, i) {
            var o, r, s, a, l, u = "function" == typeof e && e,
                d = !i && T(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && A && _.relative[r[1].type]) {
                    if (t = (_.find.ID(s.matches[0].replace(xe, _e), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !_.relative[a = s.type]);)
                    if ((l = _.find[a]) && (i = l(s.matches[0].replace(xe, _e), ye.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && h(r), !e) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || E(e, d))(i, t, !A, n, ye.test(e) && c(t.parentNode) || t), n
        }, x.sortStable = M.split("").sort(V).join("") === M, x.detectDuplicates = !!z, j(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
    var ce = oe.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (oe.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) oe.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ce.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var fe, pe = e.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = oe.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pe, !0)), de.test(n[1]) && oe.isPlainObject(t))
                        for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = pe.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return fe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = pe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    me.prototype = oe.fn, fe = oe(pe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), oe.fn.extend({
        has: function(e) {
            var t, n = oe(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (oe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = ce.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? oe.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, i) {
            var o = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (be[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var ye = /\S+/g,
        we = {};
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || r(e) : oe.extend({}, e);
        var t, n, i, o, s, a, l = [],
            u = !e.once && [],
            c = function(r) {
                for (n = e.memory && r, i = !0, s = a || 0, a = 0, o = l.length, t = !0; l && o > s; s++)
                    if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(t) {
                            oe.each(t, function(t, n) {
                                var i = oe.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = l.length : n && (a = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && oe.each(arguments, function(e, n) {
                        for (var i;
                            (i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, s >= i && s--)
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(t, function(t, r) {
                                var s = oe.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, oe.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = Q.call(arguments),
                s = r.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : oe.Deferred(),
                u = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var xe;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!pe.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (xe.resolveWith(pe, [oe]), oe.fn.triggerHandler && (oe(pe).triggerHandler("ready"), oe(pe).off("ready")))
            }
        }
    }), oe.ready.promise = function(t) {
        if (!xe)
            if (xe = oe.Deferred(), "complete" === pe.readyState) setTimeout(oe.ready);
            else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
        else {
            pe.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && pe.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    s(), oe.ready()
                }
            }()
        }
        return xe.promise(t)
    };
    var _e, ke = "undefined";
    for (_e in oe(ne)) break;
    ne.ownLast = "0" !== _e, ne.inlineBlockNeedsLayout = !1, oe(function() {
            var e, t, n, i;
            n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = pe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), oe.acceptData = function(e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Te = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
                    oe._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, e, t)
            }) : r ? l(r, e, oe.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = oe._queueHooks(e, t),
                s = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"), oe._removeData(e, n)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = oe.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = oe._data(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        De = ["Top", "Right", "Bottom", "Left"],
        Se = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        Ne = oe.access = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (a in n) oe.access(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(oe(e), n)
                })), t))
                for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
        },
        ze = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = pe.createElement("input"),
            t = pe.createElement("div"),
            n = pe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = pe.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var je = /^(?:input|select|textarea)$/i,
        He = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        Ae = /^(?:focusinfocus|focusoutblur)$/,
        We = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, u, c, d, h, f, p, g, m = oe._data(e);
            if (m) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (s = m.events) || (s = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                        return typeof oe === ke || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(ye) || [""], a = t.length; a--;) r = We.exec(t[a]) || [], f = g = r[1], p = (r[2] || "").split(".").sort(), f && (u = oe.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = oe.event.special[f] || {}, d = oe.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, l), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, u.setup && u.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), oe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, u, c, d, h, f, p, g, m = oe.hasData(e) && oe._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(ye) || [""], u = t.length; u--;)
                    if (a = We.exec(t[u]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = oe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) s = h[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(r, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(e, s));
                        l && !h.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || oe.removeEvent(e, f, m.handle), delete c[f])
                    } else
                        for (f in c) oe.event.remove(e, f + t[u], n, i, !0);
                oe.isEmptyObject(c) && (delete m.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, s, a, l, u, c, d, h = [i || pe],
                f = te.call(t, "type") ? t.type : t,
                p = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = c = i = i || pe, 3 !== i.nodeType && 8 !== i.nodeType && !Ae.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), u = oe.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!o && !u.noBubble && !oe.isWindow(i)) {
                    for (l = u.delegateType || f, Ae.test(l + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a), c = a;
                    c === (i.ownerDocument || pe) && h.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (a = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || f, r = (oe._data(a, "events") || {})[t.type] && oe._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && oe.acceptData(a) && (t.result = r.apply(a, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), n) === !1) && oe.acceptData(i) && s && i[f] && !oe.isWindow(i)) {
                    c = i[s], c && (i[s] = null), oe.event.triggered = f;
                    try {
                        i[f]()
                    } catch (g) {}
                    oe.event.triggered = void 0, c && (i[s] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, i, o, r, s = [],
                a = Q.call(arguments),
                l = (oe._data(this, "events") || {})[e.type] || [],
                u = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, r = 0;
                        (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], r = 0; a > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Pe.test(o) ? this.mouseHooks : He.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || pe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || pe, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = pe.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === ke && (e[i] = null), e.detachEvent(i, n))
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !oe.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), oe._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                je.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !je.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = oe._data(i, t);
                o || i.addEventListener(e, n, !0), oe._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = oe._data(i, t) - 1;
                o ? oe._data(i, t, o) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
            }
        }
    }), oe.fn.extend({
        on: function(e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return oe().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ie = / jQuery\d+="(?:null|\d+)"/g,
        Fe = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
        Me = /^\s+/,
        Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Re = /<([\w:]+)/,
        Be = /<tbody/i,
        qe = /<|&#?\w+;/,
        $e = /<(?:script|style|link)/i,
        Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Xe = /^true\/(.*)/,
        Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ge = g(pe),
        Ke = Ge.appendChild(pe.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, oe.extend({
        clone: function(e, t, n) {
            var i, o, r, s, a, l = oe.contains(e.ownerDocument, e);
            if (ne.html5Clone || oe.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(r = Ke.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (i = m(r), a = m(e), s = 0; null != (o = a[s]); ++s) i[s] && k(o, i[s]);
            if (t)
                if (n)
                    for (a = a || m(e), i = i || m(r), s = 0; null != (o = a[s]); s++) _(o, i[s]);
                else _(e, r);
            return i = m(r, "script"), i.length > 0 && x(i, !l && m(e, "script")), i = a = o = null, r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, s, a, l, u, c, d = e.length, h = g(t), f = [], p = 0; d > p; p++)
                if (r = e[p], r || 0 === r)
                    if ("object" === oe.type(r)) oe.merge(f, r.nodeType ? [r] : r);
                    else if (qe.test(r)) {
                for (a = a || h.appendChild(t.createElement("div")), l = (Re.exec(r) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, a.innerHTML = c[1] + r.replace(Oe, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                if (!ne.leadingWhitespace && Me.test(r) && f.push(t.createTextNode(Me.exec(r)[0])), !ne.tbody)
                    for (r = "table" !== l || Be.test(r) ? "<table>" !== c[1] || Be.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) oe.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                for (oe.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = h.lastChild
            } else f.push(t.createTextNode(r));
            for (a && h.removeChild(a), ne.appendChecked || oe.grep(m(f, "input"), v), p = 0; r = f[p++];)
                if ((!i || -1 === oe.inArray(r, i)) && (s = oe.contains(r.ownerDocument, r), a = m(h.appendChild(r), "script"), s && x(a), n))
                    for (o = 0; r = a[o++];) Ve.test(r.type || "") && n.push(r);
            return a = null, h
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, s = 0, a = oe.expando, l = oe.cache, u = ne.deleteExpando, c = oe.event.special; null != (n = e[s]); s++)
                if ((t || oe.acceptData(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u ? delete n[a] : typeof n.removeAttribute !== ke ? n.removeAttribute(a) : n[a] = null, Y.push(o))
                }
        }
    }), oe.fn.extend({
        text: function(e) {
            return Ne(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = b(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = b(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? oe.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || oe.cleanData(m(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ne(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                if (!("string" != typeof e || $e.test(e) || !ne.htmlSerialize && Fe.test(e) || !ne.leadingWhitespace && Me.test(e) || Qe[(Re.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Oe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, oe.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, i, o, r, s, a, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                h = e[0],
                f = oe.isFunction(h);
            if (f || u > 1 && "string" == typeof h && !ne.checkClone && Ue.test(h)) return this.each(function(n) {
                var i = c.eq(n);
                f && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (a = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (r = oe.map(m(a, "script"), y), o = r.length; u > l; l++) i = a, l !== d && (i = oe.clone(i, !0, !0), o && oe.merge(r, m(i, "script"))), t.call(this[l], i, l);
                if (o)
                    for (s = r[r.length - 1].ownerDocument, oe.map(r, w), l = 0; o > l; l++) i = r[l], Ve.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(s, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ye, "")));
                a = n = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = oe(e), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), oe(r[i])[t](n), K.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Je, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = pe.getElementsByTagName("body")[0], n && n.style ? (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        it = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tt = function(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || et(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), it.test(s) && nt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
    }) : pe.documentElement.currentStyle && (et = function(e) {
        return e.currentStyle
    }, tt = function(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || et(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), it.test(s) && !ot.test(t) && (i = a.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    }), ! function() {
        function t() {
            var t, n, i, o;
            n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, o = t.appendChild(pe.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight,
                a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
        }
        var n, i, o, r, s, a, l;
        n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
            reliableHiddenOffsets: function() {
                return null == a && t(), a
            },
            boxSizingReliable: function() {
                return null == s && t(), s
            },
            pixelPosition: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                return null == l && t(), l
            }
        }))
    }(), oe.swap = function(e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o
    };
    var rt = /alpha\([^)]*\)/i,
        st = /opacity\s*=\s*([^)]*)/,
        at = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ee + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + Ee + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ht = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[a] || (oe.cssProps[a] = D(l, a)), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                if (r = typeof n, "string" === r && (o = ut.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || oe.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = D(e.style, a)), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = tt(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? at.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ct, function() {
                    return j(e, t, i)
                }) : j(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && et(e);
                return N(e, n, i ? z(e, t, i, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(r.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(r) ? r.replace(rt, o) : r + " " + o)
        }
    }), oe.cssHooks.marginRight = E(ne.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + De[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, nt.test(e) || (oe.cssHooks[e + t].set = N)
    }), oe.fn.extend({
        css: function(e, t) {
            return Ne(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (oe.isArray(t)) {
                    for (i = et(e), o = t.length; o > s; s++) r[t[s]] = oe.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Se(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = H.prototype.init, oe.fx.step = {};
    var ft, pt, gt = /^(?:toggle|show|hide)$/,
        mt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        bt = [L],
        yt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = mt.exec(t),
                    r = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                    s = (oe.cssNumber[e] || "px" !== r && +i) && mt.exec(oe.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, oe.style(n.elem, e, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    oe.Animation = oe.extend(F, {
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], yt[n] = yt[n] || [], yt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bt.unshift(e) : bt.push(e)
            }
        }), oe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = oe.isEmptyObject(e),
                    r = oe.speed(t, n, i),
                    s = function() {
                        var t = F(this, oe.extend({}, e), r);
                        (o || oe._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = oe.timers,
                        s = oe._data(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && vt.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = oe._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = oe.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, i, o)
            }
        }), oe.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = oe.timers,
                n = 0;
            for (ft = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || oe.fx.stop(), ft = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            pt || (pt = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            clearInterval(pt), pt = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, o;
            t = pe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = pe.createElement("select"), o = n.appendChild(pe.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = o.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = pe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var wt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = oe.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = oe.makeArray(t), s = o.length; s--;)
                        if (i = o[s], oe.inArray(oe.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt, _t, kt = oe.expr.attrHandle,
        Ct = /^(?:checked|selected)$/i,
        Tt = ne.getSetAttribute,
        Et = ne.input;
    oe.fn.extend({
        attr: function(e, t) {
            return Ne(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === ke ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? _t : xt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(ye);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Et && Tt || !Ct.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(Tt ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), _t = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : Et && Tt || !Ct.test(n) ? e.setAttribute(!Tt && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = kt[t] || oe.find.attr;
        kt[t] = Et && Tt || !Ct.test(t) ? function(e, t, i) {
            var o, r;
            return i || (r = kt[t], kt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, kt[t] = r), o
        } : function(e, t, n) {
            return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Et && Tt || (oe.attrHooks.value = {
        set: function(e, t, n) {
            return oe.nodeName(e, "input") ? void(e.defaultValue = t) : xt && xt.set(e, t, n)
        }
    }), Tt || (xt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, kt.id = kt.name = kt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, oe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: xt.set
    }, oe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            xt.set(e, "" === t ? !1 : t, n)
        }
    }, oe.each(["width", "height"], function(e, t) {
        oe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Dt = /^(?:input|select|textarea|button|object)$/i,
        St = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Ne(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, r, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !oe.isXMLDoc(e), r && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Dt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var Nt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ye) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = oe.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ye) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        s = e ? oe.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function(n) {
                oe(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, o = oe(this), r = e.match(ye) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Nt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var zt = oe.now(),
        jt = /\?/,
        Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = oe.trim(t + "");
        return o && !oe.trim(o.replace(Ht, function(e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var Pt, At, Wt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bt = {},
        qt = {},
        $t = "*/".concat("*");
    try {
        At = location.href
    } catch (Ut) {
        At = pe.createElement("a"), At.href = "", At = At.href
    }
    Pt = Rt.exec(At.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At,
            type: "GET",
            isLocal: Ft.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, oe.ajaxSettings), t) : R(oe.ajaxSettings, e)
        },
        ajaxPrefilter: M(Bt),
        ajaxTransport: M(qt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, c, v, b, w, _ = t;
                2 !== y && (y = 2, a && clearTimeout(a), u = void 0, s = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (b = B(d, x, n)), b = q(d, b, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (oe.etag[r] = w)), 204 === e || "HEAD" === d.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = b.state, c = b.data, v = b.error, o = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || _) + "", o ? p.resolveWith(h, [c, _, x]) : p.rejectWith(h, [x, _, v]), x.statusCode(m), m = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? c : v]), g.fireWith(h, [x, _]), l && (f.trigger("ajaxComplete", [x, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, u, c, d = oe.ajaxSetup({}, t),
                h = d.context || d,
                f = d.context && (h.nodeType || h.jquery) ? oe(h) : oe.event,
                p = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                m = d.statusCode || {},
                v = {},
                b = {},
                y = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!c)
                                for (c = {}; t = It.exec(s);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || At) + "").replace(Wt, "").replace(Ot, Pt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(ye) || [""], null == d.crossDomain && (i = Rt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Pt[1] && i[2] === Pt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), O(Bt, d, t, x), 2 === y) return x;
            l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Mt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (jt.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Lt.test(r) ? r.replace(Lt, "$1_=" + zt++) : r + (jt.test(r) ? "&" : "?") + "_=" + zt++)), d.ifModified && (oe.lastModified[r] && x.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && x.setRequestHeader("If-None-Match", oe.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === y)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](d[o]);
            if (u = O(qt, d, t, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    y = 1, u.send(v, n)
                } catch (_) {
                    if (!(2 > y)) throw _;
                    n(-1, _)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, i, o) {
            return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(oe.isFunction(e) ? function(t) {
                oe(this).wrapInner(e.call(this, t))
            } : function() {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    };
    var Vt = /%20/g,
        Xt = /\[\]$/,
        Yt = /\r?\n/g,
        Qt = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, o);
        return i.join("&").replace(Vt, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Gt.test(this.nodeName) && !Qt.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
    } : U;
    var Kt = 0,
        Jt = {},
        Zt = oe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Jt) Jt[e](void 0, !0)
    }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && oe.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, i) {
                    var o, r = e.xhr(),
                        s = ++Kt;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(e.hasContent && e.data || null), t = function(n, o) {
                        var a, l, u;
                        if (t && (o || 4 === r.readyState))
                            if (delete Jt[s], t = void 0, r.onreadystatechange = oe.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                u = {}, a = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && i(a, l, u, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Jt[s] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = pe.head || oe("head")[0] || pe.documentElement;
            return {
                send: function(i, o) {
                    t = pe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || oe.expando + "_" + zt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || oe.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), s && oe.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || pe;
        var i = de.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
    };
    var nn = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = oe.trim(e.slice(a, e.length)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    };
    var on = e.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, u, c = oe.css(e, "position"),
                d = oe(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [r, l]) > -1, u ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== ke && (i = o.getBoundingClientRect()), n = X(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(i, "marginTop", !0),
                    left: t.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || on
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        oe.fn[e] = function(i) {
            return Ne(this, function(e, i, o) {
                var r = X(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = E(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            oe.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Ne(this, function(t, n, i) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var rn = e.jQuery,
        sn = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = sn), t && e.jQuery === oe && (e.jQuery = rn), oe
    }, typeof t === ke && (e.jQuery = e.$ = oe), oe
}),
function(e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var t = e("meta[name=csrf-token]").attr("content"),
                n = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + n + '"]').val(t)
        },
        fire: function(t, n, i) {
            var o = e.Event(n);
            return t.trigger(o, i), o.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        handleRemote: function(i) {
            var o, r, s, a, l, u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    o = i.attr("method"), r = i.attr("action"), s = i.serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), s = i.data("params") || null);
                return u = {
                    type: o || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(e, o) {
                        return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [e, o]) ? void i.trigger("ajax:send", e) : !1
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(r)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), r && (u.url = r), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !n.protocol || !n.host || t.protocol + "//" + t.host != n.protocol + "//" + n.host
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var o = n.href(i),
                r = i.data("method"),
                s = i.attr("target"),
                a = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                u = e('<form method="post" action="' + o + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />';
            l === t || a === t || n.isCrossDomain(o) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
                o = !1;
            return i ? (n.fire(e, "confirm") && (o = n.confirm(i), t = n.fire(e, "confirm:complete", [o])), o && t) : !0
        },
        blankInputs: function(t, n, i) {
            var o, r, s = e(),
                a = n || "input,textarea",
                l = t.find(a);
            return l.each(function() {
                if (o = e(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                    s = s.add(o)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableElement(t)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var o = e(this),
            r = o.data("method"),
            s = o.data("params"),
            a = i.metaKey || i.ctrlKey;
        if (!n.allowAction(o)) return n.stopEverything(i);
        if (!a && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== t) {
            if (a && (!r || "GET" === r) && !s) return !0;
            var l = n.handleRemote(o);
            return l === !1 ? n.enableElement(o) : l.fail(function() {
                n.enableElement(o)
            }), !1
        }
        return r ? (n.handleMethod(o), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return o === !1 ? n.enableFormElement(i) : o.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
        var i = e(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var o, r, s = e(this),
            a = s.data("remote") !== t;
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") == t && (o = n.blankInputs(s, n.requiredInputSelector), o && n.fire(s, "ajax:aborted:required", [o]))) return n.stopEverything(i);
        if (a) {
            if (r = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [r]);
                return l || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var o = i.attr("name"),
            r = o ? {
                name: o,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", r)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
        this == t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    var t = "ui-effects-",
        n = e;
    return e.effects = {
            effect: {}
        },
        function(e, t) {
            function n(e, t, n) {
                var i = d[t.type] || {};
                return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : i.max < e ? i.max : e)
            }

            function i(t) {
                var n = u(),
                    i = n._rgba = [];
                return t = t.toLowerCase(), p(l, function(e, o) {
                    var r, s = o.re.exec(t),
                        a = s && o.parse(s),
                        l = o.space || "rgba";
                    return a ? (r = n[l](a), n[c[l].cache] = r[c[l].cache], i = n._rgba = r._rgba, !1) : void 0
                }), i.length ? ("0,0,0,0" === i.join() && e.extend(i, r.transparent), n) : r[t]
            }

            function o(e, t, n) {
                return n = (n + 1) % 1, 1 > 6 * n ? e + (t - e) * n * 6 : 1 > 2 * n ? t : 2 > 3 * n ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var r, s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                a = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                u = e.Color = function(t, n, i, o) {
                    return new e.Color.fn.parse(t, n, i, o)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                h = u.support = {},
                f = e("<p>")[0],
                p = e.each;
            f.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = f.style.backgroundColor.indexOf("rgba") > -1, p(c, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), u.fn = e.extend(u.prototype, {
                parse: function(o, s, a, l) {
                    if (o === t) return this._rgba = [null, null, null, null], this;
                    (o.jquery || o.nodeType) && (o = e(o).css(s), s = t);
                    var d = this,
                        h = e.type(o),
                        f = this._rgba = [];
                    return s !== t && (o = [o, s, a, l], h = "array"), "string" === h ? this.parse(i(o) || r._default) : "array" === h ? (p(c.rgba.props, function(e, t) {
                        f[t.idx] = n(o[t.idx], t)
                    }), this) : "object" === h ? (o instanceof u ? p(c, function(e, t) {
                        o[t.cache] && (d[t.cache] = o[t.cache].slice())
                    }) : p(c, function(t, i) {
                        var r = i.cache;
                        p(i.props, function(e, t) {
                            if (!d[r] && i.to) {
                                if ("alpha" === e || null == o[e]) return;
                                d[r] = i.to(d._rgba)
                            }
                            d[r][t.idx] = n(o[e], t, !0)
                        }), d[r] && e.inArray(null, d[r].slice(0, 3)) < 0 && (d[r][3] = 1, i.from && (d._rgba = i.from(d[r])))
                    }), this) : void 0
                },
                is: function(e) {
                    var t = u(e),
                        n = !0,
                        i = this;
                    return p(c, function(e, o) {
                        var r, s = t[o.cache];
                        return s && (r = i[o.cache] || o.to && o.to(i._rgba) || [], p(o.props, function(e, t) {
                            return null != s[t.idx] ? n = s[t.idx] === r[t.idx] : void 0
                        })), n
                    }), n
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return p(c, function(n, i) {
                        t[i.cache] && e.push(n)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var i = u(e),
                        o = i._space(),
                        r = c[o],
                        s = 0 === this.alpha() ? u("transparent") : this,
                        a = s[r.cache] || r.to(s._rgba),
                        l = a.slice();
                    return i = i[r.cache], p(r.props, function(e, o) {
                        var r = o.idx,
                            s = a[r],
                            u = i[r],
                            c = d[o.type] || {};
                        null !== u && (null === s ? l[r] = u : (c.mod && (u - s > c.mod / 2 ? s += c.mod : s - u > c.mod / 2 && (s -= c.mod)), l[r] = n((u - s) * t + s, o)))
                    }), this[o](l)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var n = this._rgba.slice(),
                        i = n.pop(),
                        o = u(t)._rgba;
                    return u(e.map(n, function(e, t) {
                        return (1 - i) * o[t] + i * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        n = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        n = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                },
                toHexString: function(t) {
                    var n = this._rgba.slice(),
                        i = n.pop();
                    return t && n.push(~~(255 * i)), "#" + e.map(n, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), u.fn.parse.prototype = u.fn, c.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, n, i = e[0] / 255,
                    o = e[1] / 255,
                    r = e[2] / 255,
                    s = e[3],
                    a = Math.max(i, o, r),
                    l = Math.min(i, o, r),
                    u = a - l,
                    c = a + l,
                    d = .5 * c;
                return t = l === a ? 0 : i === a ? 60 * (o - r) / u + 360 : o === a ? 60 * (r - i) / u + 120 : 60 * (i - o) / u + 240, n = 0 === u ? 0 : .5 >= d ? u / c : u / (2 - c), [Math.round(t) % 360, n, d, null == s ? 1 : s]
            }, c.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    n = e[1],
                    i = e[2],
                    r = e[3],
                    s = .5 >= i ? i * (1 + n) : i + n - i * n,
                    a = 2 * i - s;
                return [Math.round(255 * o(a, s, t + 1 / 3)), Math.round(255 * o(a, s, t)), Math.round(255 * o(a, s, t - 1 / 3)), r]
            }, p(c, function(i, o) {
                var r = o.props,
                    s = o.cache,
                    l = o.to,
                    c = o.from;
                u.fn[i] = function(i) {
                    if (l && !this[s] && (this[s] = l(this._rgba)), i === t) return this[s].slice();
                    var o, a = e.type(i),
                        d = "array" === a || "object" === a ? i : arguments,
                        h = this[s].slice();
                    return p(r, function(e, t) {
                        var i = d["object" === a ? e : t.idx];
                        null == i && (i = h[t.idx]), h[t.idx] = n(i, t)
                    }), c ? (o = u(c(h)), o[s] = h, o) : u(h)
                }, p(r, function(t, n) {
                    u.fn[t] || (u.fn[t] = function(o) {
                        var r, s = e.type(o),
                            l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : i,
                            u = this[l](),
                            c = u[n.idx];
                        return "undefined" === s ? c : ("function" === s && (o = o.call(this, c), s = e.type(o)), null == o && n.empty ? this : ("string" === s && (r = a.exec(o), r && (o = c + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), u[n.idx] = o, this[l](u)))
                    })
                })
            }), u.hook = function(t) {
                var n = t.split(" ");
                p(n, function(t, n) {
                    e.cssHooks[n] = {
                        set: function(t, o) {
                            var r, s, a = "";
                            if ("transparent" !== o && ("string" !== e.type(o) || (r = i(o)))) {
                                if (o = u(r || o), !h.rgba && 1 !== o._rgba[3]) {
                                    for (s = "backgroundColor" === n ? t.parentNode : t;
                                        ("" === a || "transparent" === a) && s && s.style;) try {
                                        a = e.css(s, "backgroundColor"), s = s.parentNode
                                    } catch (l) {}
                                    o = o.blend(a && "transparent" !== a ? a : "_default")
                                }
                                o = o.toRgbaString()
                            }
                            try {
                                t.style[n] = o
                            } catch (l) {}
                        }
                    }, e.fx.step[n] = function(t) {
                        t.colorInit || (t.start = u(t.elem, n), t.end = u(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, u.hook(s), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return p(["Top", "Right", "Bottom", "Left"], function(n, i) {
                        t["border" + i + "Color"] = e
                    }), t
                }
            }, r = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(n),
        function() {
            function t(t) {
                var n, i, o = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    r = {};
                if (o && o.length && o[0] && o[o[0]])
                    for (i = o.length; i--;) n = o[i], "string" == typeof o[n] && (r[e.camelCase(n)] = o[n]);
                else
                    for (n in o) "string" == typeof o[n] && (r[n] = o[n]);
                return r
            }

            function i(t, n) {
                var i, o, s = {};
                for (i in n) o = n[i], t[i] !== o && (r[i] || (e.fx.step[i] || !isNaN(parseFloat(o))) && (s[i] = o));
                return s
            }
            var o = ["add", "remove", "toggle"],
                r = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (n.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(n, r, s, a) {
                var l = e.speed(r, s, a);
                return this.queue(function() {
                    var r, s = e(this),
                        a = s.attr("class") || "",
                        u = l.children ? s.find("*").addBack() : s;
                    u = u.map(function() {
                        var n = e(this);
                        return {
                            el: n,
                            start: t(this)
                        }
                    }), r = function() {
                        e.each(o, function(e, t) {
                            n[t] && s[t + "Class"](n[t])
                        })
                    }, r(), u = u.map(function() {
                        return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                    }), s.attr("class", a), u = u.map(function() {
                        var t = this,
                            n = e.Deferred(),
                            i = e.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    n.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, i), n.promise()
                    }), e.when.apply(e, u.get()).done(function() {
                        r(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), l.complete.call(s[0])
                    })
                })
            }, e.fn.extend({
                addClass: function(t) {
                    return function(n, i, o, r) {
                        return i ? e.effects.animateClass.call(this, {
                            add: n
                        }, i, o, r) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function(t) {
                    return function(n, i, o, r) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: n
                        }, i, o, r) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(t) {
                    return function(n, i, o, r, s) {
                        return "boolean" == typeof i || void 0 === i ? o ? e.effects.animateClass.call(this, i ? {
                            add: n
                        } : {
                            remove: n
                        }, o, r, s) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: n
                        }, i, o, r)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, n, i, o, r) {
                    return e.effects.animateClass.call(this, {
                        add: n,
                        remove: t
                    }, i, o, r)
                }
            })
        }(),
        function() {
            function n(t, n, i, o) {
                return e.isPlainObject(t) && (n = t, t = t.effect), t = {
                    effect: t
                }, null == n && (n = {}), e.isFunction(n) && (o = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (o = i, i = n, n = {}), e.isFunction(i) && (o = i, i = null), n && e.extend(t, n), i = i || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, t.complete = o || n.complete, t
            }

            function i(t) {
                return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.11.4",
                save: function(e, n) {
                    for (var i = 0; i < n.length; i++) null !== n[i] && e.data(t + n[i], e[0].style[n[i]])
                },
                restore: function(e, n) {
                    var i, o;
                    for (o = 0; o < n.length; o++) null !== n[o] && (i = e.data(t + n[o]), void 0 === i && (i = ""), e.css(n[o], i))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(e, t) {
                    var n, i;
                    switch (e[0]) {
                        case "top":
                            n = 0;
                            break;
                        case "middle":
                            n = .5;
                            break;
                        case "bottom":
                            n = 1;
                            break;
                        default:
                            n = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            i = 0;
                            break;
                        case "center":
                            i = .5;
                            break;
                        case "right":
                            i = 1;
                            break;
                        default:
                            i = e[1] / t.width
                    }
                    return {
                        x: i,
                        y: n
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var n = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        i = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        o = {
                            width: t.width(),
                            height: t.height()
                        },
                        r = document.activeElement;
                    try {
                        r.id
                    } catch (s) {
                        r = document.body
                    }
                    return t.wrap(i), (t[0] === r || e.contains(t[0], r)) && e(r).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(n, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, i) {
                        n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(o), i.css(n).show()
                },
                removeWrapper: function(t) {
                    var n = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
                },
                setTransition: function(t, n, i, o) {
                    return o = o || {}, e.each(n, function(e, n) {
                        var r = t.cssUnit(n);
                        r[0] > 0 && (o[n] = r[0] * i + r[1])
                    }), o
                }
            }), e.fn.extend({
                effect: function() {
                    function t(t) {
                        function n() {
                            e.isFunction(r) && r.call(o[0]), e.isFunction(t) && t()
                        }
                        var o = e(this),
                            r = i.complete,
                            a = i.mode;
                        (o.is(":hidden") ? "hide" === a : "show" === a) ? (o[a](), n()) : s.call(o[0], i, n)
                    }
                    var i = n.apply(this, arguments),
                        o = i.mode,
                        r = i.queue,
                        s = e.effects.effect[i.effect];
                    return e.fx.off || !s ? o ? this[o](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : r === !1 ? this.each(t) : this.queue(r || "fx", t)
                },
                show: function(e) {
                    return function(t) {
                        if (i(t)) return e.apply(this, arguments);
                        var o = n.apply(this, arguments);
                        return o.mode = "show", this.effect.call(this, o)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(t) {
                        if (i(t)) return e.apply(this, arguments);
                        var o = n.apply(this, arguments);
                        return o.mode = "hide", this.effect.call(this, o)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(t) {
                        if (i(t) || "boolean" == typeof t) return e.apply(this, arguments);
                        var o = n.apply(this, arguments);
                        return o.mode = "toggle", this.effect.call(this, o)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var n = this.css(t),
                        i = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        n.indexOf(t) > 0 && (i = [parseFloat(n), t])
                    }), i
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
                t[n] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, n) {
                e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                    return 1 - n(1 - e)
                }, e.easing["easeInOut" + t] = function(e) {
                    return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
                }
            })
        }(), e.effects
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./effect"], e) : e(jQuery)
}(function(e) {
    return e.effects.effect.slide = function(t, n) {
        var i, o = e(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height"],
            s = e.effects.setMode(o, t.mode || "show"),
            a = "show" === s,
            l = t.direction || "left",
            u = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            d = {};
        e.effects.save(o, r), o.show(), i = t.distance || o["top" === u ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(o).css({
            overflow: "hidden"
        }), a && o.css(u, c ? isNaN(i) ? "-" + i : -i : i), d[u] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + i, o.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === s && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), n()
            }
        })
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t, i) {
        var o, r, s, a = t.nodeName.toLowerCase();
        return "area" === a ? (o = t.parentNode, r = o.name, t.href && r && "map" === o.nodeName.toLowerCase() ? (s = e("img[usemap='#" + r + "']")[0], !!s && n(s)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !t.disabled : "a" === a ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var n = this.css("position"),
                i = "absolute" === n,
                o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                r = this.parents().filter(function() {
                    var t = e(this);
                    return i && "static" === t.css("position") ? !1 : o.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== n && r.length ? r : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function(n) {
            return t(n, !isNaN(e.attr(n, "tabindex")))
        },
        tabbable: function(n) {
            var i = e.attr(n, "tabindex"),
                o = isNaN(i);
            return (o || i >= 0) && t(n, !o)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, n) {
        function i(t, n, i, r) {
            return e.each(o, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            r = n.toLowerCase(),
            s = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function(t) {
            return void 0 === t ? s["inner" + n].call(this) : this.each(function() {
                e(this).css(r, i(this, t) + "px")
            })
        }, e.fn["outer" + n] = function(t, o) {
            return "number" != typeof t ? s["outer" + n].call(this, t) : this.each(function() {
                e(this).css(r, i(this, t, !0, o) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), i && i.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var n, i, o = e(this[0]); o.length && o[0] !== document;) {
                    if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(o.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    o = o.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, n, i) {
            var o, r = e.ui[t].prototype;
            for (o in i) r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([n, i[o]])
        },
        call: function(e, t, n, i) {
            var o, r = e.plugins[t];
            if (r && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (o = 0; o < r.length; o++) e.options[r[o][0]] && r[o][1].apply(e.element, n)
        }
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    var t = 0,
        n = Array.prototype.slice;
    return e.cleanData = function(t) {
        return function(n) {
            var i, o, r;
            for (r = 0; null != (o = n[r]); r++) try {
                i = e._data(o, "events"), i && i.remove && e(o).triggerHandler("remove")
            } catch (s) {}
            t(n)
        }
    }(e.cleanData), e.widget = function(t, n, i) {
        var o, r, s, a, l = {},
            u = t.split(".")[0];
        return t = t.split(".")[1], o = u + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][o.toLowerCase()] = function(t) {
            return !!e.data(t, o)
        }, e[u] = e[u] || {}, r = e[u][t], s = e[u][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new s(e, t)
        }, e.extend(s, r, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), a = new n, a.options = e.widget.extend({}, a.options), e.each(i, function(t, i) {
            return e.isFunction(i) ? void(l[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    o = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, n = this._super,
                        r = this._superApply;
                    return this._super = e, this._superApply = o, t = i.apply(this, arguments), this._super = n, this._superApply = r, t
                }
            }()) : void(l[t] = i)
        }), s.prototype = e.widget.extend(a, {
            widgetEventPrefix: r ? a.widgetEventPrefix || t : t
        }, l, {
            constructor: s,
            namespace: u,
            widgetName: t,
            widgetFullName: o
        }), r ? (e.each(r._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, s, n._proto)
        }), delete r._childConstructors) : n._childConstructors.push(s), e.widget.bridge(t, s), s
    }, e.widget.extend = function(t) {
        for (var i, o, r = n.call(arguments, 1), s = 0, a = r.length; a > s; s++)
            for (i in r[s]) o = r[s][i], r[s].hasOwnProperty(i) && void 0 !== o && (e.isPlainObject(o) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], o) : e.widget.extend({}, o) : t[i] = o);
        return t
    }, e.widget.bridge = function(t, i) {
        var o = i.prototype.widgetFullName || t;
        e.fn[t] = function(r) {
            var s = "string" == typeof r,
                a = n.call(arguments, 1),
                l = this;
            return s ? this.each(function() {
                var n, i = e.data(this, o);
                return "instance" === r ? (l = i, !1) : i ? e.isFunction(i[r]) && "_" !== r.charAt(0) ? (n = i[r].apply(i, a), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + r + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + r + "'")
            }) : (a.length && (r = e.widget.extend.apply(null, [r].concat(a))), this.each(function() {
                var t = e.data(this, o);
                t ? (t.option(r || {}), t._init && t._init()) : e.data(this, o, new i(r, this))
            })), l
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(n, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, n) {
            var i, o, r, s = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {}, i = t.split("."), t = i.shift(), i.length) {
                    for (o = s[t] = e.widget.extend({}, this.options[t]), r = 0; r < i.length - 1; r++) o[i[r]] = o[i[r]] || {}, o = o[i[r]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
                    o[t] = n
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = n
                }
            return this._setOptions(s), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, n, i) {
            var o, r = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), e.each(i, function(i, s) {
                function a() {
                    return t || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? r[s] : s).apply(r, arguments) : void 0
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? o.delegate(c, u, a) : n.bind(u, a)
            })
        },
        _off: function(t, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, i) {
            var o, r, s = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], r = n.originalEvent)
                for (o in r) o in n || (n[o] = r[o]);
            return this.element.trigger(n, i), !(e.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, o, r) {
            "string" == typeof o && (o = {
                effect: o
            });
            var s, a = o ? o === !0 || "number" == typeof o ? n : o.effect || n : t;
            o = o || {}, "number" == typeof o && (o = {
                duration: o
            }), s = !e.isEmptyObject(o), o.complete = r, o.delay && i.delay(o.delay), s && e.effects && e.effects.effect[a] ? i[t](o) : a !== t && i[a] ? i[a](o.duration, o.easing, r) : i.queue(function(n) {
                e(this)[t](), r && r.call(i[0]), n()
            })
        }
    }), e.widget
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], e) : e(jQuery)
}(function(e) {
    var t, n = "ui-button ui-widget ui-state-default ui-corner-all",
        i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        o = function() {
            var t = e(this);
            setTimeout(function() {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        r = function(t) {
            var n = t.name,
                i = t.form,
                o = e([]);
            return n && (n = n.replace(/'/g, "\\'"), o = i ? e(i).find("[name='" + n + "'][type=radio]") : e("[name='" + n + "'][type=radio]", t.ownerDocument).filter(function() {
                return !this.form
            })), o
        };
    return e.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, o), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var i = this,
                s = this.options,
                a = "checkbox" === this.type || "radio" === this.type,
                l = a ? "" : "ui-state-active";
            null === s.label && (s.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(n).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                s.disabled || this === t && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                s.disabled || e(this).removeClass(l)
            }).bind("click" + this.eventNamespace, function(e) {
                s.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), a && this.element.bind("change" + this.eventNamespace, function() {
                i.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return s.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (s.disabled) return !1;
                e(this).addClass("ui-state-active"), i.buttonElement.attr("aria-pressed", "true");
                var t = i.element[0];
                r(t).not(t).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return s.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, void i.document.one("mouseup", function() {
                    t = null
                }))
            }).bind("mouseup" + this.eventNamespace, function() {
                return s.disabled ? !1 : void e(this).removeClass("ui-state-active");
            }).bind("keydown" + this.eventNamespace, function(t) {
                return s.disabled ? !1 : void((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", s.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, n;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(n + " ui-state-active " + i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(e, t) {
            return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), void(t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? r(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var t = this.buttonElement.removeClass(i),
                n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                o = this.options.icons,
                r = o.primary && o.secondary,
                s = [];
            o.primary || o.secondary ? (this.options.text && s.push("ui-button-text-icon" + (r ? "s" : o.primary ? "-primary" : "-secondary")), o.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + o.primary + "'></span>"), o.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + o.secondary + "'></span>"), this.options.text || (s.push(r ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.11.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function() {
            var t = "rtl" === this.element.css("direction"),
                n = this.element.find(this.options.items),
                i = n.filter(":ui-button");
            n.not(":ui-button").button(), i.button("refresh"), this.buttons = n.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    }), e.ui.button
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], e) : e(jQuery)
}(function(e) {
    var t = !1;
    return e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this,
                    o = 1 === n.which,
                    r = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                return o && !r && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(n) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, n.target === this._mouseDownEvent.target && e.data(n.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(n)), t = !1, !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], e) : e(jQuery)
}(function(e) {
    return e.widget("ui.draggable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(e, t) {
            this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this._blurActiveElement(t), this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(n.iframeFix === !0 ? "iframe" : n.iframeFix), !0) : !1)
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = e(this);
                return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var n = this.document[0];
            if (this.handleElement.is(t.target)) try {
                n.activeElement && "body" !== n.activeElement.nodeName.toLowerCase() && e(n.activeElement).blur()
            } catch (i) {}
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === e(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function(e) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, n) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                var i = this._uiHash();
                if (this._trigger("drag", t, i) === !1) return this._mouseUp({}), !1;
                this.position = i.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var n = this,
                i = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                n._trigger("stop", t) !== !1 && n._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(t) {
            var n = this.options,
                i = e.isFunction(n.helper),
                o = i ? e(n.helper.apply(this.element[0], [t])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
            return o.parents("body").length || o.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), i && o[0] === this.element[0] && this._setPositionRelative(), o[0] === this.element[0] || /(fixed|absolute)/.test(o.css("position")) || o.css("position", "absolute"), o
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(e) {
            return /(html|body)/i.test(e.tagName) || e === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                n = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== n && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var e = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, i, o = this.options,
                r = this.document[0];
            return this.relativeContainer = null, o.containment ? "window" === o.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || r.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void(this.containment = [0, 0, e(r).width() - this.helperProportions.width - this.margins.left, (e(r).height() || r.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void(this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), n = e(o.containment), i = n[0], void(i && (t = /(scroll|auto)/.test(n.css("overflow")), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = n))) : void(this.containment = null)
        },
        _convertPositionTo: function(e, t) {
            t || (t = this.position);
            var n = "absolute" === e ? 1 : -1,
                i = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.offset.scroll.top : i ? 0 : this.offset.scroll.top) * n,
                left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.offset.scroll.left : i ? 0 : this.offset.scroll.left) * n
            }
        },
        _generatePosition: function(e, t) {
            var n, i, o, r, s = this.options,
                a = this._isRootNode(this.scrollParent[0]),
                l = e.pageX,
                u = e.pageY;
            return a && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (i = this.relativeContainer.offset(), n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment, e.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left), e.pageY - this.offset.click.top < n[1] && (u = n[1] + this.offset.click.top), e.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left), e.pageY - this.offset.click.top > n[3] && (u = n[3] + this.offset.click.top)), s.grid && (o = s.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, u = n ? o - this.offset.click.top >= n[1] || o - this.offset.click.top > n[3] ? o : o - this.offset.click.top >= n[1] ? o - s.grid[1] : o + s.grid[1] : o, r = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, l = n ? r - this.offset.click.left >= n[0] || r - this.offset.click.left > n[2] ? r : r - this.offset.click.left >= n[0] ? r - s.grid[0] : r + s.grid[0] : r), "y" === s.axis && (l = this.originalPageX), "x" === s.axis && (u = this.originalPageY)), {
                top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(t, n, i) {
            return i = i || this._uiHash(), e.ui.plugin.call(this, t, [n, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, n, i)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n, i) {
            var o = e.extend({}, n, {
                item: i.element
            });
            i.sortables = [], e(i.options.connectToSortable).each(function() {
                var n = e(this).sortable("instance");
                n && !n.options.disabled && (i.sortables.push(n), n.refreshPositions(), n._trigger("activate", t, o))
            })
        },
        stop: function(t, n, i) {
            var o = e.extend({}, n, {
                item: i.element
            });
            i.cancelHelperRemoval = !1, e.each(i.sortables, function() {
                var e = this;
                e.isOver ? (e.isOver = 0, i.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                    position: e.placeholder.css("position"),
                    top: e.placeholder.css("top"),
                    left: e.placeholder.css("left")
                }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, o))
            })
        },
        drag: function(t, n, i) {
            e.each(i.sortables, function() {
                var o = !1,
                    r = this;
                r.positionAbs = i.positionAbs, r.helperProportions = i.helperProportions, r.offset.click = i.offset.click, r._intersectsWith(r.containerCache) && (o = !0, e.each(i.sortables, function() {
                    return this.positionAbs = i.positionAbs, this.helperProportions = i.helperProportions, this.offset.click = i.offset.click, this !== r && this._intersectsWith(this.containerCache) && e.contains(r.element[0], this.element[0]) && (o = !1), o
                })), o ? (r.isOver || (r.isOver = 1, i._parent = n.helper.parent(), r.currentItem = n.helper.appendTo(r.element).data("ui-sortable-item", !0), r.options._helper = r.options.helper, r.options.helper = function() {
                    return n.helper[0]
                }, t.target = r.currentItem[0], r._mouseCapture(t, !0), r._mouseStart(t, !0, !0), r.offset.click.top = i.offset.click.top, r.offset.click.left = i.offset.click.left, r.offset.parent.left -= i.offset.parent.left - r.offset.parent.left, r.offset.parent.top -= i.offset.parent.top - r.offset.parent.top, i._trigger("toSortable", t), i.dropped = r.element, e.each(i.sortables, function() {
                    this.refreshPositions()
                }), i.currentItem = i.element, r.fromOutside = i), r.currentItem && (r._mouseDrag(t), n.position = r.position)) : r.isOver && (r.isOver = 0, r.cancelHelperRemoval = !0, r.options._revert = r.options.revert, r.options.revert = !1, r._trigger("out", t, r._uiHash(r)), r._mouseStop(t, !0), r.options.revert = r.options._revert, r.options.helper = r.options._helper, r.placeholder && r.placeholder.remove(), n.helper.appendTo(i._parent), i._refreshOffsets(t), n.position = i._generatePosition(t, !0), i._trigger("fromSortable", t), i.dropped = !1, e.each(i.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function(t, n, i) {
            var o = e("body"),
                r = i.options;
            o.css("cursor") && (r._cursor = o.css("cursor")), o.css("cursor", r.cursor)
        },
        stop: function(t, n, i) {
            var o = i.options;
            o._cursor && e("body").css("cursor", o._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n, i) {
            var o = e(n.helper),
                r = i.options;
            o.css("opacity") && (r._opacity = o.css("opacity")), o.css("opacity", r.opacity)
        },
        stop: function(t, n, i) {
            var o = i.options;
            o._opacity && e(n.helper).css("opacity", o._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function(e, t, n) {
            n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)), n.scrollParentNotHidden[0] !== n.document[0] && "HTML" !== n.scrollParentNotHidden[0].tagName && (n.overflowOffset = n.scrollParentNotHidden.offset())
        },
        drag: function(t, n, i) {
            var o = i.options,
                r = !1,
                s = i.scrollParentNotHidden[0],
                a = i.document[0];
            s !== a && "HTML" !== s.tagName ? (o.axis && "x" === o.axis || (i.overflowOffset.top + s.offsetHeight - t.pageY < o.scrollSensitivity ? s.scrollTop = r = s.scrollTop + o.scrollSpeed : t.pageY - i.overflowOffset.top < o.scrollSensitivity && (s.scrollTop = r = s.scrollTop - o.scrollSpeed)), o.axis && "y" === o.axis || (i.overflowOffset.left + s.offsetWidth - t.pageX < o.scrollSensitivity ? s.scrollLeft = r = s.scrollLeft + o.scrollSpeed : t.pageX - i.overflowOffset.left < o.scrollSensitivity && (s.scrollLeft = r = s.scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (t.pageY - e(a).scrollTop() < o.scrollSensitivity ? r = e(a).scrollTop(e(a).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(a).scrollTop()) < o.scrollSensitivity && (r = e(a).scrollTop(e(a).scrollTop() + o.scrollSpeed))), o.axis && "y" === o.axis || (t.pageX - e(a).scrollLeft() < o.scrollSensitivity ? r = e(a).scrollLeft(e(a).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(a).scrollLeft()) < o.scrollSensitivity && (r = e(a).scrollLeft(e(a).scrollLeft() + o.scrollSpeed)))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function(t, n, i) {
            var o = i.options;
            i.snapElements = [], e(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function() {
                var t = e(this),
                    n = t.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function(t, n, i) {
            var o, r, s, a, l, u, c, d, h, f, p = i.options,
                g = p.snapTolerance,
                m = n.offset.left,
                v = m + i.helperProportions.width,
                b = n.offset.top,
                y = b + i.helperProportions.height;
            for (h = i.snapElements.length - 1; h >= 0; h--) l = i.snapElements[h].left - i.margins.left, u = l + i.snapElements[h].width, c = i.snapElements[h].top - i.margins.top, d = c + i.snapElements[h].height, l - g > v || m > u + g || c - g > y || b > d + g || !e.contains(i.snapElements[h].item.ownerDocument, i.snapElements[h].item) ? (i.snapElements[h].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, e.extend(i._uiHash(), {
                snapItem: i.snapElements[h].item
            })), i.snapElements[h].snapping = !1) : ("inner" !== p.snapMode && (o = Math.abs(c - y) <= g, r = Math.abs(d - b) <= g, s = Math.abs(l - v) <= g, a = Math.abs(u - m) <= g, o && (n.position.top = i._convertPositionTo("relative", {
                top: c - i.helperProportions.height,
                left: 0
            }).top), r && (n.position.top = i._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top), s && (n.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: l - i.helperProportions.width
            }).left), a && (n.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: u
            }).left)), f = o || r || s || a, "outer" !== p.snapMode && (o = Math.abs(c - b) <= g, r = Math.abs(d - y) <= g, s = Math.abs(l - m) <= g, a = Math.abs(u - v) <= g, o && (n.position.top = i._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), r && (n.position.top = i._convertPositionTo("relative", {
                top: d - i.helperProportions.height,
                left: 0
            }).top), s && (n.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), a && (n.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: u - i.helperProportions.width
            }).left)), !i.snapElements[h].snapping && (o || r || s || a || f) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, e.extend(i._uiHash(), {
                snapItem: i.snapElements[h].item
            })), i.snapElements[h].snapping = o || r || s || a || f)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function(t, n, i) {
            var o, r = i.options,
                s = e.makeArray(e(r.stack)).sort(function(t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            s.length && (o = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(t) {
                e(this).css("zIndex", o + t)
            }), this.css("zIndex", o + s.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n, i) {
            var o = e(n.helper),
                r = i.options;
            o.css("zIndex") && (r._zIndex = o.css("zIndex")), o.css("zIndex", r.zIndex)
        },
        stop: function(t, n, i) {
            var o = i.options;
            o._zIndex && e(n.helper).css("zIndex", o._zIndex)
        }
    }), e.ui.draggable
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    return function() {
        function t(e, t, n) {
            return [parseFloat(e[0]) * (f.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (f.test(e[1]) ? n / 100 : 1)]
        }

        function n(t, n) {
            return parseInt(e.css(t, n), 10) || 0
        }

        function i(t) {
            var n = t[0];
            return 9 === n.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : e.isWindow(n) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : n.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: n.pageY,
                    left: n.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        e.ui = e.ui || {};
        var o, r, s = Math.max,
            a = Math.abs,
            l = Math.round,
            u = /left|center|right/,
            c = /top|center|bottom/,
            d = /[\+\-]\d+(\.[\d]+)?%?/,
            h = /^\w+/,
            f = /%$/,
            p = e.fn.position;
        e.position = {
                scrollbarWidth: function() {
                    if (void 0 !== o) return o;
                    var t, n, i = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        r = i.children()[0];
                    return e("body").append(i), t = r.offsetWidth, i.css("overflow", "scroll"), n = r.offsetWidth, t === n && (n = i[0].clientWidth), i.remove(), o = t - n
                },
                getScrollInfo: function(t) {
                    var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        o = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
                        r = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                    return {
                        width: r ? e.position.scrollbarWidth() : 0,
                        height: o ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var n = e(t || window),
                        i = e.isWindow(n[0]),
                        o = !!n[0] && 9 === n[0].nodeType;
                    return {
                        element: n,
                        isWindow: i,
                        isDocument: o,
                        offset: n.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: i || o ? n.width() : n.outerWidth(),
                        height: i || o ? n.height() : n.outerHeight()
                    }
                }
            }, e.fn.position = function(o) {
                if (!o || !o.of) return p.apply(this, arguments);
                o = e.extend({}, o);
                var f, g, m, v, b, y, w = e(o.of),
                    x = e.position.getWithinInfo(o.within),
                    _ = e.position.getScrollInfo(x),
                    k = (o.collision || "flip").split(" "),
                    C = {};
                return y = i(w), w[0].preventDefault && (o.at = "left top"), g = y.width, m = y.height, v = y.offset, b = e.extend({}, v), e.each(["my", "at"], function() {
                    var e, t, n = (o[this] || "").split(" ");
                    1 === n.length && (n = u.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = u.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", e = d.exec(n[0]), t = d.exec(n[1]), C[this] = [e ? e[0] : 0, t ? t[0] : 0], o[this] = [h.exec(n[0])[0], h.exec(n[1])[0]]
                }), 1 === k.length && (k[1] = k[0]), "right" === o.at[0] ? b.left += g : "center" === o.at[0] && (b.left += g / 2), "bottom" === o.at[1] ? b.top += m : "center" === o.at[1] && (b.top += m / 2), f = t(C.at, g, m), b.left += f[0], b.top += f[1], this.each(function() {
                    var i, u, c = e(this),
                        d = c.outerWidth(),
                        h = c.outerHeight(),
                        p = n(this, "marginLeft"),
                        y = n(this, "marginTop"),
                        T = d + p + n(this, "marginRight") + _.width,
                        E = h + y + n(this, "marginBottom") + _.height,
                        D = e.extend({}, b),
                        S = t(C.my, c.outerWidth(), c.outerHeight());
                    "right" === o.my[0] ? D.left -= d : "center" === o.my[0] && (D.left -= d / 2), "bottom" === o.my[1] ? D.top -= h : "center" === o.my[1] && (D.top -= h / 2), D.left += S[0], D.top += S[1], r || (D.left = l(D.left), D.top = l(D.top)), i = {
                        marginLeft: p,
                        marginTop: y
                    }, e.each(["left", "top"], function(t, n) {
                        e.ui.position[k[t]] && e.ui.position[k[t]][n](D, {
                            targetWidth: g,
                            targetHeight: m,
                            elemWidth: d,
                            elemHeight: h,
                            collisionPosition: i,
                            collisionWidth: T,
                            collisionHeight: E,
                            offset: [f[0] + S[0], f[1] + S[1]],
                            my: o.my,
                            at: o.at,
                            within: x,
                            elem: c
                        })
                    }), o.using && (u = function(e) {
                        var t = v.left - D.left,
                            n = t + g - d,
                            i = v.top - D.top,
                            r = i + m - h,
                            l = {
                                target: {
                                    element: w,
                                    left: v.left,
                                    top: v.top,
                                    width: g,
                                    height: m
                                },
                                element: {
                                    element: c,
                                    left: D.left,
                                    top: D.top,
                                    width: d,
                                    height: h
                                },
                                horizontal: 0 > n ? "left" : t > 0 ? "right" : "center",
                                vertical: 0 > r ? "top" : i > 0 ? "bottom" : "middle"
                            };
                        d > g && a(t + n) < g && (l.horizontal = "center"), h > m && a(i + r) < m && (l.vertical = "middle"), s(a(t), a(n)) > s(a(i), a(r)) ? l.important = "horizontal" : l.important = "vertical", o.using.call(this, e, l)
                    }), c.offset(e.extend(D, {
                        using: u
                    }))
                })
            }, e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var n, i = t.within,
                            o = i.isWindow ? i.scrollLeft : i.offset.left,
                            r = i.width,
                            a = e.left - t.collisionPosition.marginLeft,
                            l = o - a,
                            u = a + t.collisionWidth - r - o;
                        t.collisionWidth > r ? l > 0 && 0 >= u ? (n = e.left + l + t.collisionWidth - r - o, e.left += l - n) : u > 0 && 0 >= l ? e.left = o : l > u ? e.left = o + r - t.collisionWidth : e.left = o : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = s(e.left - a, e.left)
                    },
                    top: function(e, t) {
                        var n, i = t.within,
                            o = i.isWindow ? i.scrollTop : i.offset.top,
                            r = t.within.height,
                            a = e.top - t.collisionPosition.marginTop,
                            l = o - a,
                            u = a + t.collisionHeight - r - o;
                        t.collisionHeight > r ? l > 0 && 0 >= u ? (n = e.top + l + t.collisionHeight - r - o, e.top += l - n) : u > 0 && 0 >= l ? e.top = o : l > u ? e.top = o + r - t.collisionHeight : e.top = o : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = s(e.top - a, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var n, i, o = t.within,
                            r = o.offset.left + o.scrollLeft,
                            s = o.width,
                            l = o.isWindow ? o.scrollLeft : o.offset.left,
                            u = e.left - t.collisionPosition.marginLeft,
                            c = u - l,
                            d = u + t.collisionWidth - s - l,
                            h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            p = -2 * t.offset[0];
                        0 > c ? (n = e.left + h + f + p + t.collisionWidth - s - r, (0 > n || n < a(c)) && (e.left += h + f + p)) : d > 0 && (i = e.left - t.collisionPosition.marginLeft + h + f + p - l, (i > 0 || a(i) < d) && (e.left += h + f + p))
                    },
                    top: function(e, t) {
                        var n, i, o = t.within,
                            r = o.offset.top + o.scrollTop,
                            s = o.height,
                            l = o.isWindow ? o.scrollTop : o.offset.top,
                            u = e.top - t.collisionPosition.marginTop,
                            c = u - l,
                            d = u + t.collisionHeight - s - l,
                            h = "top" === t.my[1],
                            f = h ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            g = -2 * t.offset[1];
                        0 > c ? (i = e.top + f + p + g + t.collisionHeight - s - r, (0 > i || i < a(c)) && (e.top += f + p + g)) : d > 0 && (n = e.top - t.collisionPosition.marginTop + f + p + g - l, (n > 0 || a(n) < d) && (e.top += f + p + g))
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, n, i, o, s, a = document.getElementsByTagName("body")[0],
                    l = document.createElement("div");
                t = document.createElement(a ? "div" : "body"), i = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, a && e.extend(i, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (s in i) t.style[s] = i[s];
                t.appendChild(l), n = a || document.documentElement, n.insertBefore(t, n.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", o = e(l).offset().left, r = o > 10 && 11 > o, t.innerHTML = "", n.removeChild(t)
            }()
    }(), e.ui.position
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], e) : e(jQuery)
}(function(e) {
    return e.widget("ui.resizable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(e) {
            return parseInt(e, 10) || 0
        },
        _isNumber: function(e) {
            return !isNaN(parseInt(e, 10))
        },
        _hasScroll: function(t, n) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                o = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, o = t[i] > 0, t[i] = 0, o)
        },
        _create: function() {
            var t, n, i, o, r, s = this,
                a = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!a.aspectRatio,
                    aspectRatio: a.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = a.handles || (e(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, n = 0; n < t.length; n++) i = e.trim(t[n]), r = "ui-resizable-" + i, o = e("<div class='ui-resizable-handle " + r + "'></div>"), o.css({
                    zIndex: a.zIndex
                }), "se" === i && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(o);
            this._renderAxis = function(t) {
                var n, i, o, r;
                t = t || this.element;
                for (n in this.handles) this.handles[n].constructor === String ? this.handles[n] = this.element.children(this.handles[n]).first().show() : (this.handles[n].jquery || this.handles[n].nodeType) && (this.handles[n] = e(this.handles[n]), this._on(this.handles[n], {
                    mousedown: s._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = e(this.handles[n], this.element), r = /sw|ne|nw|se|n|s/.test(n) ? i.outerHeight() : i.outerWidth(), o = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(o, r), this._proportionallyResize()), this._handles = this._handles.add(this.handles[n])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
                s.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), s.axis = o && o[1] ? o[1] : "se")
            }), a.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || (e(this).removeClass("ui-resizable-autohide"), s._handles.show())
            }).mouseleave(function() {
                a.disabled || s.resizing || (e(this).addClass("ui-resizable-autohide"), s._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, n = function(t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var n, i, o = !1;
            for (n in this.handles) i = e(this.handles[n])[0], (i === t.target || e.contains(i, t.target)) && (o = !0);
            return !this.options.disabled && o
        },
        _mouseStart: function(t) {
            var n, i, o, r = this.options,
                s = this.element;
            return this.resizing = !0, this._renderProxy(), n = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), r.containment && (n += e(r.containment).scrollLeft() || 0, i += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: n,
                top: i
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            }, this.originalPosition = {
                left: n,
                top: i
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), s.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var n, i, o = this.originalMousePosition,
                r = this.axis,
                s = t.pageX - o.left || 0,
                a = t.pageY - o.top || 0,
                l = this._change[r];
            return this._updatePrevProperties(), l ? (n = l.apply(this, [t, s, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (n = this._updateRatio(n, t)), n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var n, i, o, r, s, a, l, u = this.options,
                c = this;
            return this._helper && (n = this._proportionallyResizeElements, i = n.length && /textarea/i.test(n[0].nodeName), o = i && this._hasScroll(n[0], "left") ? 0 : c.sizeDiff.height, r = i ? 0 : c.sizeDiff.width, s = {
                width: c.helper.width() - r,
                height: c.helper.height() - o
            }, a = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, u.animate || this.element.css(e.extend(s, {
                top: l,
                left: a
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !u.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var e = {};
            return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
        },
        _updateVirtualBoundaries: function(e) {
            var t, n, i, o, r, s = this.options;
            r = {
                minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
                maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
                minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
                maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = r.minHeight * this.aspectRatio, i = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, t > r.minWidth && (r.minWidth = t), i > r.minHeight && (r.minHeight = i), n < r.maxWidth && (r.maxWidth = n), o < r.maxHeight && (r.maxHeight = o)), this._vBoundaries = r
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position,
                n = this.size,
                i = this.axis;
            return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === i && (e.left = t.left + (n.width - e.width), e.top = null), "nw" === i && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries,
                n = this.axis,
                i = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                o = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                r = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                s = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                u = /sw|nw|w/.test(n),
                c = /nw|ne|n/.test(n);
            return r && (e.width = t.minWidth), s && (e.height = t.minHeight), i && (e.width = t.maxWidth), o && (e.height = t.maxHeight), r && u && (e.left = a - t.minWidth), i && u && (e.left = a - t.maxWidth), s && c && (e.top = l - t.minHeight), o && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _getPaddingPlusBorderDimensions: function(e) {
            for (var t = 0, n = [], i = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], o = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) n[t] = parseInt(i[t], 10) || 0, n[t] += parseInt(o[t], 10) || 0;
            return {
                height: n[0] + n[2],
                width: n[1] + n[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var e, t = 0, n = this.helper || this.element; t < this._proportionallyResizeElements.length; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                    height: n.height() - this.outerDimensions.height || 0,
                    width: n.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                n = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++n.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var n = this.originalSize,
                    i = this.originalPosition;
                return {
                    left: i.left + t,
                    width: n.width - t
                }
            },
            n: function(e, t, n) {
                var i = this.originalSize,
                    o = this.originalPosition;
                return {
                    top: o.top + n,
                    height: i.height - n
                }
            },
            s: function(e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function(t, n, i) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, i]))
            },
            sw: function(t, n, i) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, i]))
            },
            ne: function(t, n, i) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, i]))
            },
            nw: function(t, n, i) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, i]))
            }
        },
        _propagate: function(t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), "resize" !== t && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var n = e(this).resizable("instance"),
                i = n.options,
                o = n._proportionallyResizeElements,
                r = o.length && /textarea/i.test(o[0].nodeName),
                s = r && n._hasScroll(o[0], "left") ? 0 : n.sizeDiff.height,
                a = r ? 0 : n.sizeDiff.width,
                l = {
                    width: n.size.width - a,
                    height: n.size.height - s
                },
                u = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                c = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            n.element.animate(e.extend(l, c && u ? {
                top: c,
                left: u
            } : {}), {
                duration: i.animateDuration,
                easing: i.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    o && o.length && e(o[0]).css({
                        width: i.width,
                        height: i.height
                    }), n._updateCache(i), n._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, n, i, o, r, s, a, l = e(this).resizable("instance"),
                u = l.options,
                c = l.element,
                d = u.containment,
                h = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            h && (l.containerElement = e(h), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(h), n = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, i) {
                n[e] = l._num(t.css("padding" + i))
            }), l.containerOffset = t.offset(), l.containerPosition = t.position(), l.containerSize = {
                height: t.innerHeight() - n[3],
                width: t.innerWidth() - n[1]
            }, i = l.containerOffset, o = l.containerSize.height, r = l.containerSize.width, s = l._hasScroll(h, "left") ? h.scrollWidth : r, a = l._hasScroll(h) ? h.scrollHeight : o, l.parentData = {
                element: h,
                left: i.left,
                top: i.top,
                width: s,
                height: a
            }))
        },
        resize: function(t) {
            var n, i, o, r, s = e(this).resizable("instance"),
                a = s.options,
                l = s.containerOffset,
                u = s.position,
                c = s._aspectRatio || t.shiftKey,
                d = {
                    top: 0,
                    left: 0
                },
                h = s.containerElement,
                f = !0;
            h[0] !== document && /static/.test(h.css("position")) && (d = l), u.left < (s._helper ? l.left : 0) && (s.size.width = s.size.width + (s._helper ? s.position.left - l.left : s.position.left - d.left), c && (s.size.height = s.size.width / s.aspectRatio, f = !1), s.position.left = a.helper ? l.left : 0), u.top < (s._helper ? l.top : 0) && (s.size.height = s.size.height + (s._helper ? s.position.top - l.top : s.position.top), c && (s.size.width = s.size.height * s.aspectRatio, f = !1), s.position.top = s._helper ? l.top : 0), o = s.containerElement.get(0) === s.element.parent().get(0), r = /relative|absolute/.test(s.containerElement.css("position")), o && r ? (s.offset.left = s.parentData.left + s.position.left, s.offset.top = s.parentData.top + s.position.top) : (s.offset.left = s.element.offset().left, s.offset.top = s.element.offset().top), n = Math.abs(s.sizeDiff.width + (s._helper ? s.offset.left - d.left : s.offset.left - l.left)), i = Math.abs(s.sizeDiff.height + (s._helper ? s.offset.top - d.top : s.offset.top - l.top)), n + s.size.width >= s.parentData.width && (s.size.width = s.parentData.width - n, c && (s.size.height = s.size.width / s.aspectRatio, f = !1)), i + s.size.height >= s.parentData.height && (s.size.height = s.parentData.height - i, c && (s.size.width = s.size.height * s.aspectRatio, f = !1)), f || (s.position.left = s.prevPosition.left, s.position.top = s.prevPosition.top, s.size.width = s.prevSize.width, s.size.height = s.prevSize.height)
        },
        stop: function() {
            var t = e(this).resizable("instance"),
                n = t.options,
                i = t.containerOffset,
                o = t.containerPosition,
                r = t.containerElement,
                s = e(t.helper),
                a = s.offset(),
                l = s.outerWidth() - t.sizeDiff.width,
                u = s.outerHeight() - t.sizeDiff.height;
            t._helper && !n.animate && /relative/.test(r.css("position")) && e(this).css({
                left: a.left - o.left - i.left,
                width: l,
                height: u
            }), t._helper && !n.animate && /static/.test(r.css("position")) && e(this).css({
                left: a.left - o.left - i.left,
                width: l,
                height: u
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).resizable("instance"),
                n = t.options;
            e(n.alsoResize).each(function() {
                var t = e(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseInt(t.width(), 10),
                    height: parseInt(t.height(), 10),
                    left: parseInt(t.css("left"), 10),
                    top: parseInt(t.css("top"), 10)
                })
            })
        },
        resize: function(t, n) {
            var i = e(this).resizable("instance"),
                o = i.options,
                r = i.originalSize,
                s = i.originalPosition,
                a = {
                    height: i.size.height - r.height || 0,
                    width: i.size.width - r.width || 0,
                    top: i.position.top - s.top || 0,
                    left: i.position.left - s.left || 0
                };
            e(o.alsoResize).each(function() {
                var t = e(this),
                    i = e(this).data("ui-resizable-alsoresize"),
                    o = {},
                    r = t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                e.each(r, function(e, t) {
                    var n = (i[t] || 0) + (a[t] || 0);
                    n && n >= 0 && (o[t] = n || null)
                }), t.css(o)
            })
        },
        stop: function() {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).resizable("instance"),
                n = t.options,
                i = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, n = e(this).resizable("instance"),
                i = n.options,
                o = n.size,
                r = n.originalSize,
                s = n.originalPosition,
                a = n.axis,
                l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                u = l[0] || 1,
                c = l[1] || 1,
                d = Math.round((o.width - r.width) / u) * u,
                h = Math.round((o.height - r.height) / c) * c,
                f = r.width + d,
                p = r.height + h,
                g = i.maxWidth && i.maxWidth < f,
                m = i.maxHeight && i.maxHeight < p,
                v = i.minWidth && i.minWidth > f,
                b = i.minHeight && i.minHeight > p;
            i.grid = l, v && (f += u), b && (p += c), g && (f -= u), m && (p -= c), /^(se|s|e)$/.test(a) ? (n.size.width = f, n.size.height = p) : /^(ne)$/.test(a) ? (n.size.width = f, n.size.height = p, n.position.top = s.top - h) : /^(sw)$/.test(a) ? (n.size.width = f, n.size.height = p, n.position.left = s.left - d) : ((0 >= p - c || 0 >= f - u) && (t = n._getPaddingPlusBorderDimensions(this)), p - c > 0 ? (n.size.height = p, n.position.top = s.top - h) : (p = c - t.height, n.size.height = p, n.position.top = s.top + r.height - p), f - u > 0 ? (n.size.width = f, n.position.left = s.left - d) : (f = u - t.width, n.size.width = f, n.position.left = s.left + r.width - f))
        }
    }), e.ui.resizable
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./button", "./draggable", "./mouse", "./position", "./resizable"], e) : e(jQuery)
}(function(e) {
    return e.widget("ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var n = e(this).css(t).offset().top;
                    0 > n && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var n, i = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    n = this.document[0].activeElement, n && "body" !== n.nodeName.toLowerCase() && e(n).blur()
                } catch (o) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    i._trigger("close", t)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, n) {
            var i = !1,
                o = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +e(this).css("z-index")
                }).get(),
                r = Math.max.apply(null, o);
            return r >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", r + 1), i = !0), i && !n && this._trigger("focus", t), i
        },
        open: function() {
            var t = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function n() {
                var t = this.document[0].activeElement,
                    n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                n || this._focusTabbable()
            }
            t.preventDefault(), n.call(this), this._delay(n)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var n = this.uiDialog.find(":tabbable"),
                            i = n.filter(":first"),
                            o = n.filter(":last");
                        t.target !== o[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                            o.focus()
                        }), t.preventDefault()) : (this._delay(function() {
                            i.focus()
                        }), t.preventDefault())
                    }
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var t = this,
                n = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(n) || e.isArray(n) && !n.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (e.each(n, function(n, i) {
                var o, r;
                i = e.isFunction(i) ? {
                    click: i,
                    text: n
                } : i, i = e.extend({
                    type: "button"
                }, i), o = i.click, i.click = function() {
                    o.apply(t.element[0], arguments)
                }, r = {
                    icons: i.icons,
                    text: i.showText
                }, delete i.icons, delete i.showText, e("<button></button>", i).button(r).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var n = this,
                i = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(i, o) {
                    e(this).addClass("ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", i, t(o))
                },
                drag: function(e, i) {
                    n._trigger("drag", e, t(i))
                },
                stop: function(o, r) {
                    var s = r.offset.left - n.document.scrollLeft(),
                        a = r.offset.top - n.document.scrollTop();
                    i.position = {
                        my: "left top",
                        at: "left" + (s >= 0 ? "+" : "") + s + " top" + (a >= 0 ? "+" : "") + a,
                        of: n.window
                    }, e(this).removeClass("ui-dialog-dragging"), n._unblockFrames(), n._trigger("dragStop", o, t(r))
                }
            })
        },
        _makeResizable: function() {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var n = this,
                i = this.options,
                o = i.resizable,
                r = this.uiDialog.css("position"),
                s = "string" == typeof o ? o : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: s,
                start: function(i, o) {
                    e(this).addClass("ui-dialog-resizing"), n._blockFrames(), n._trigger("resizeStart", i, t(o))
                },
                resize: function(e, i) {
                    n._trigger("resize", e, t(i))
                },
                stop: function(o, r) {
                    var s = n.uiDialog.offset(),
                        a = s.left - n.document.scrollLeft(),
                        l = s.top - n.document.scrollTop();
                    i.height = n.uiDialog.height(), i.width = n.uiDialog.width(), i.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                        of: n.window
                    }, e(this).removeClass("ui-dialog-resizing"), n._unblockFrames(), n._trigger("resizeStop", o, t(r))
                }
            }).css("position", r)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget(), this._focusedElement = e(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                n = e.inArray(this, t); - 1 !== n && t.splice(n, 1)
        },
        _trackingInstances: function() {
            var e = this.document.data("ui-dialog-instances");
            return e || (e = [], this.document.data("ui-dialog-instances", e)), e
        },
        _minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var n = this,
                i = !1,
                o = {};
            e.each(t, function(e, t) {
                n._setOption(e, t), e in n.sizeRelatedOptions && (i = !0), e in n.resizableRelatedOptions && (o[e] = t)
            }), i && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(e, t) {
            var n, i, o = this.uiDialog;
            "dialogClass" === e && o.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), "draggable" === e && (n = o.is(":data(ui-draggable)"), n && !t && o.draggable("destroy"), !n && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (i = o.is(":data(ui-resizable)"), i && !t && o.resizable("destroy"), i && "string" == typeof t && o.resizable("option", "handles", t), i || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var e, t, n, i = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), i.minWidth > i.width && (i.width = i.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: i.width
            }).outerHeight(), t = Math.max(0, i.minHeight - e), n = "number" == typeof i.maxHeight ? Math.max(0, i.maxHeight - e) : "none", "auto" === i.height ? this.element.css({
                minHeight: t,
                maxHeight: n,
                height: "auto"
            }) : this.element.height(Math.max(0, i.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(e) {
                        t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    })
}),
function() {
    window.constants = {
        answerVisible: "Dit antwoord wordt momenteel getoond. Selecteer de vraag om het antwoord weer te sluiten.",
        answerHidden: "Dit antwoord is momenteel verborgen. Selecteer de vraag om het antwoord te openen.",
        information_boxes: {
            aria_labels_close_prefix: "Sluiten"
        },
        spokenSmsMessagesIsEnabled: "<strong>Let op!</strong> U vult een vast telefoonnummer in. DigiD heeft daarom gesproken sms-berichten geactiveerd.",
        regexes: {
            capitals: /[A-Z]/g,
            digits: /\d/g,
            email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/i,
            email_len_to_at_sign: /^.{1,64}@.*$/i,
            idNumber: /^[a-zA-Z]{2}[a-zA-Z0-9]{6}[0-9]$/,
            miniscules: /[a-z]/g,
            specialCharacters: /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]/g,
            only: {
                bsn_format: /^\d{8,9}$/,
                house_number_addition: /^[a-zA-Z0-9]{1,4}$/,
                house_number: /^\d{1,5}$/,
                password: /^[\x21-\x7E]*$/,
                postal_code: /^\d{4} ?[a-zA-Z]{2}$/,
                username: /^[\x21-\x7E]*$/
            }
        },
        actionTexts: {
            cancel_ok: "OK",
            previous: "Vorige",
            cancel: "Annuleren"
        },
        validationMessages: {
            account: {
                adres: {
                    blank: '<strong>U heeft het veld "E-mailadres" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Vul een geldig e-mailadres in.</strong>",
                    tooLong: '<strong>Het veld "E-mailadres" mag maximaal 254 karakters bevatten.</strong>'
                },
                email_attributes: {
                    adres: {
                        blank: '<strong>U heeft het veld "E-mailadres" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                        invalid: "<strong>Vul een geldig e-mailadres in.</strong>",
                        tooLong: '<strong>Het veld "E-mailadres" mag maximaal 254 karakters bevatten.</strong>'
                    }
                },
                gebruikersnaam: {
                    blank: '<strong>U heeft het veld "Gebruikersnaam" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>De gekozen gebruikersnaam bevat karakters die niet zijn toegestaan.</strong> <br />Toegestaan zijn cijfers, letters en leestekens (geen spaties).",
                    tooLong: "<strong>Vul een gebruikersnaam in van minimaal 6 en maximaal 32 karakters.</strong>",
                    tooShort: "<strong>Vul een gebruikersnaam in van minimaal 6 en maximaal 32 karakters.</strong>"
                },
                mobiel_nummer: {
                    blank: '<strong>U heeft het veld "Telefoonnummer" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    tooLong: "<strong>Uw telefoonnummer mag maximaal 30 karakters lang zijn.</strong>",
                    tooShort: "<strong>Uw telefoonnummer moet minstens 10 karakters lang zijn.</strong>",
                    invalid: "<strong>Vul een geldig telefoonnummer in.</strong>"
                },
                password: {
                    blank: '<strong>U heeft het veld "Wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Uw wachtwoord bevat karakters die niet zijn toegestaan. Toegestaan zijn cijfers, letters en leestekens (geen spaties).</strong>",
                    tooFewCapitals: "<strong>Uw wachtwoord moet minimaal 1 hoofdletter bevatten.</strong>",
                    tooFewDigits: "<strong>Uw wachtwoord moet minimaal 1 cijfer bevatten.</strong>",
                    tooFewMinuscules: "<strong>Uw wachtwoord moet minimaal 1 kleine letter bevatten.</strong>",
                    tooFewSpecialCharacters: "<strong>Uw wachtwoord moet minimaal 1 leesteken (!@#$%^...) bevatten.</strong>",
                    tooLong: "<strong>Uw wachtwoord mag maximaal 32 karakters lang zijn.</strong>",
                    tooShort: "<strong>Uw wachtwoord moet minimaal 8 karakters lang zijn.</strong>"
                },
                password_confirmation: {
                    blank: '<strong>U heeft het veld "Herhaal wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    confirmation: "<strong>Vul tweemaal hetzelfde wachtwoord in.</strong>"
                }
            },
            account_to_recover: {
                password: {
                    blank: '<strong>U heeft het veld "Nieuw wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Uw wachtwoord bevat karakters die niet zijn toegestaan. Toegestaan zijn cijfers, letters en leestekens (geen spaties).</strong>",
                    tooFewCapitals: "<strong>Uw wachtwoord moet minimaal 1 hoofdletter bevatten.</strong>",
                    tooFewDigits: "<strong>Uw wachtwoord moet minimaal 1 cijfer bevatten.</strong>",
                    tooFewMinuscules: "<strong>Uw wachtwoord moet minimaal 1 kleine letter bevatten.</strong>",
                    tooFewSpecialCharacters: "<strong>Uw wachtwoord moet minimaal 1 leesteken (!@#$%^...) bevatten.</strong>",
                    tooLong: "<strong>Uw wachtwoord mag maximaal 32 karakters lang zijn.</strong>",
                    tooShort: "<strong>Uw wachtwoord moet minimaal 8 karakters lang zijn.</strong>"
                },
                password_confirmation: {
                    blank: '<strong>U heeft het veld "Herhaal wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    confirmation: "<strong>Vul tweemaal hetzelfde wachtwoord in.</strong>"
                }
            },
            activationcode: {
                activationcode: {
                    blank: "<strong>Dit is een verplicht veld.</strong> <br/>Voer de activeringscode in.",
                    invalid: "<strong>De activeringscode begint met een 'A'.</strong><br />Controleer of u de code juist heeft ingevuld.",
                    tooShort: '<strong>Het veld "Activeringscode" moet minstens 9 karakters bevatten.</strong>'
                }
            },
            authentication: {
                digid_username: {
                    blank: '<strong>U heeft het veld "DigiD gebruikersnaam" niet ingevuld.</strong> <br />Dit is een verplicht veld.'
                },
                wachtwoord: {
                    blank: '<strong>U heeft het veld "Wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.'
                }
            },
            email: {
                address: {
                    blank: '<strong>U heeft het veld "E-mailadres" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Vul een geldig e-mailadres in.</strong>",
                    tooLong: '<strong>Het veld "E-mailadres" mag maximaal 254 karakters bevatten.</strong>'
                }
            },
            email_code: {
                code: {
                    blank: '<strong>U heeft het veld "E-mailcode" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>De e-mailcode begint met een 'E'.</strong> <br />Controleer of u de code juist heeft ingevuld.",
                    tooShort: '<strong>Het veld "E-mailcode" moet minstens 9 karakters bevatten.</strong>'
                }
            },
            password_changing_account: {
                current_password: {
                    blank: '<strong>U heeft het veld "Huidig wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.'
                },
                password: {
                    blank: '<strong>U heeft het veld "Nieuw wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Uw wachtwoord bevat karakters die niet zijn toegestaan. Toegestaan zijn cijfers, letters en leestekens (geen spaties).</strong>",
                    tooFewCapitals: "<strong>Uw wachtwoord moet minimaal 1 hoofdletter bevatten.</strong>",
                    tooFewDigits: "<strong>Uw wachtwoord moet minimaal 1 cijfer bevatten.</strong>",
                    tooFewMinuscules: "<strong>Uw wachtwoord moet minimaal 1 kleine letter bevatten.</strong>",
                    tooFewSpecialCharacters: "<strong>Uw wachtwoord moet minimaal 1 leesteken (!@#$%^...) bevatten.</strong>",
                    tooLong: "<strong>Uw wachtwoord mag maximaal 32 karakters lang zijn.</strong>",
                    tooShort: "<strong>Uw wachtwoord moet minimaal 8 karakters lang zijn.</strong>"
                },
                password_confirmation: {
                    blank: '<strong>U heeft het veld "Herhaal wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    confirmation: "<strong>Vul tweemaal hetzelfde wachtwoord in.</strong>"
                }
            },
            password_verification: {
                password: {
                    invalid: "<strong>Het wachtwoord is onjuist.</strong> <br />Controleer de gegevens.",
                    blank: '<strong>U heeft het veld "Wachtwoord" niet ingevuld.</strong> <br />Dit is een verplicht veld.'
                }
            },
            recover_account: {
                burgerservicenummer: {
                    blank: '<strong>U heeft het veld "Burgerservicenummer" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Geef een geldig Burgerservicenummer (BSN) op.</strong>",
                    invalid_8: "<strong>Een burgerservicenummer (BSN) bestaat uit 8 of 9 cijfers.</strong><br />Als uw BSN uit 8 cijfers bestaat, voeg dan aan het begin een nul toe. Bijvoorbeeld: 12345678 wordt 012345678."
                },
                gebruikersnaam: {
                    blank: '<strong>U heeft het veld "Gebruikersnaam" niet ingevuld.</strong> <br />Dit is een verplicht veld.'
                }
            },
            recovery_code: {
                herstelcode: {
                    blank: '<strong>U heeft het veld "Herstelcode" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>De herstelcode begint met een 'H'.</strong><br/>Controleer of u de code juist heeft ingevuld.",
                    tooShort: '<strong>Het veld "Herstelcode" moet minstens 9 karakters bevatten.</strong>'
                }
            },
            registration: {
                burgerservicenummer: {
                    blank: '<strong>U heeft het veld "Burgerservicenummer" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Geef een geldig Burgerservicenummer (BSN) op.</strong>",
                    invalid_8: "<strong>Een burgerservicenummer (BSN) bestaat uit 8 of 9 cijfers.</strong><br />Als uw BSN uit 8 cijfers bestaat, voeg dan aan het begin een nul toe. Bijvoorbeeld: 12345678 wordt 012345678."
                },
                geboortedatum_dag: {
                    blank: "<strong>Vul een geldige dag in.</strong><br />Is uw geboortedag niet bekend, vul dan 00 in.",
                    invalid: "<strong>Vul een geldige dag in.</strong><br />Is uw geboortedag niet bekend, vul dan 00 in."
                },
                geboortedatum_maand: {
                    blank: "<strong>Vul een geldige maand in.</strong><br />Is uw geboortemaand niet bekend, vul dan 00 in.",
                    invalid: "<strong>Vul een geldige maand in.</strong><br />Is uw geboortemaand niet bekend, vul dan 00 in."
                },
                geboortedatum_jaar: {
                    blank: "<strong>Vul een geldig jaartal in.</strong><br />Is uw geboortejaar niet bekend, vul dan 0000 in.",
                    invalid: "<strong>Vul een geldig jaartal in.</strong><br />Is uw geboortejaar niet bekend, vul dan 0000 in.",
                    invalid_future: "<strong>Een geboortedatum moet in het verleden liggen.</strong>"
                },
                huisnummer: {
                    invalid: "<strong>Huisnummer: vul hier alleen cijfers in.</strong>"
                },
                huisnummertoevoeging: {
                    invalid: "<strong>Huisnummer toevoeging: gebruik alleen letters en cijfers.</strong>"
                },
                postcode: {
                    invalid: "<strong>Vul een geldige postcode in.</strong><br />Een postcode bestaat uit 4 cijfers gevolgd door 2 letters."
                }
            },
            registration_balie: {
                burgerservicenummer: {
                    blank: '<strong>U heeft het veld "Burgerservicenummer" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Geef een geldig Burgerservicenummer (BSN) op.</strong>",
                    invalid_8: "<strong>Een burgerservicenummer (BSN) bestaat uit 8 of 9 cijfers.</strong><br />Als uw BSN uit 8 cijfers bestaat, voeg dan aan het begin een nul toe. Bijvoorbeeld: 12345678 wordt 012345678."
                },
                geboortedatum_dag: {
                    blank: "<strong>Vul een geldige dag in.</strong><br />Is uw geboortedag niet bekend, vul dan 00 in.",
                    invalid: "<strong>Vul een geldige dag in.</strong><br />Is uw geboortedag niet bekend, vul dan 00 in."
                },
                geboortedatum_maand: {
                    blank: "<strong>Vul een geldige maand in.</strong><br />Is uw geboortemaand niet bekend, vul dan 00 in.",
                    invalid: "<strong>Vul een geldige maand in.</strong><br />Is uw geboortemaand niet bekend, vul dan 00 in."
                },
                geboortedatum_jaar: {
                    blank: "<strong>Vul een geldig jaartal in.</strong><br />Is uw geboortejaar niet bekend, vul dan 0000 in.",
                    invalid: "<strong>Vul een geldig jaartal in.</strong><br />Is uw geboortejaar niet bekend, vul dan 0000 in.",
                    invalid_future: "<strong>Een geboortedatum moet in het verleden liggen.</strong>"
                },
                valid_until_day: {
                    blank: "<strong>U heeft geen 'Geldig tot'-dag ingevuld.</strong> <br/>Dit is een verplicht veld.",
                    invalid: "<strong>U heeft een ongeldige dag ingevuld bij de 'geldig tot'-datum van uw paspoort of identiteitskaart.</strong><br/>Vul een geldige dag in."
                },
                valid_until_month: {
                    blank: "<strong>U heeft geen 'Geldig tot'-maand ingevuld.</strong> <br/>Dit is een verplicht veld.",
                    invalid: "<strong>U heeft een ongeldige maand ingevuld bij de 'geldig tot'-datum van uw paspoort of identiteitskaart.</strong><br/>Vul een geldige maand in."
                },
                valid_until_year: {
                    blank: "<strong>U heeft geen 'Geldig tot'-jaar ingevuld.</strong> <br/>Dit is een verplicht veld.",
                    invalid: "<strong>U heeft een ongeldig jaartal ingevuld bij de 'geldig tot'-datum van uw paspoort of identiteitskaart.</strong><br/>Vul een geldig jaartal in.",
                    year_is_in_past: "<strong>De geldigheidsdatum van uw paspoort of identiteitskaart is verstreken.</strong><br/>Controleer de geldigheidsdatum van uw paspoort of identiteitskaart. Vraag eerst een nieuw paspoort of identiteitskaart aan indien de geldigheidsdatum is verstreken."
                },
                id_number: {
                    blank: '<strong>U heeft het veld "Documentnummer Nederlands paspoort of identiteitskaart" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>Geef een geldig documentnummer op van uw Nederlands paspoort of identiteitskaart.</strong>",
                    contains_o: "Een documentnummer bevat nooit de hoofdletter 'O'. Weet u zeker dat er geen cijfer '0' staat?"
                }
            },
            smscode: {
                smscode: {
                    blank: '<strong>U heeft het veld "Sms-code" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "<strong>De sms-code begint met een 'S'.</strong> <br/>Controleer of u de code juist heeft ingevuld.",
                    tooShort: '<strong>Het veld "Sms-code" moet minstens 9 karakters bevatten.</strong>'
                }
            },
            app_activationcode: {
                activationcode: {
                    blank: '<strong>U heeft het veld "Koppelcode" niet ingevuld.</strong> <br />Dit is een verplicht veld.',
                    invalid: "De koppelcode begint met een \u2018K\u2019. Controleer of u de code juist heeft ingevuld.",
                    tooShort: '<strong>Het veld "Koppelcode" moet exact 6 karakters bevatten.</strong>'
                }
            }
        }
    }
}.call(this),
    function() {
        ! function(e) {
            var t, n, i, o;
            return n = function(t) {
                var n, r;
                return n = e(".timeout-dialog"), n.length > 0 ? (n.dialog({
                    autoOpen: !1,
                    minHeight: "auto",
                    modal: !0,
                    resizable: !1,
                    width: window.Math.min(500, e(window.document).width() - 20)
                }), r = t > 0 ? t : n.data("show-after"), i(n, r), o(n, r)) : void 0
            }, i = function(t, n) {
                return e(".actions form:eq(0)", t).on("ajax:complete", function(i, o, r) {
                    return clearTimeout(window.expire_timeout), n = o.getResponseHeader("Next-Timeout-In"), e(".timeout-dialog .block-with-icon--information p").replaceWith(o.getResponseHeader("Popup-Text")), e(".timeout-dialog .actions").replaceWith(o.getResponseHeader("Popup-Buttons")), t.dialog("close"), TimeoutDialog.init(n)
                }), e(".actions form:eq(1)", t).submit(function(e) {
                    return e.preventDefault(), t.dialog("close")
                })
            }, o = function(e, n) {
                return window.setTimeout(function() {
                    return e.dialog("open"), t(e, e.data("expire-warning-delay"))
                }, 1e3 * n)
            }, t = function(t, n) {
                return window.expire_timeout = window.setTimeout(function() {
                    return e(".timeout-dialog .block-with-icon--information p").replaceWith(t.data("expire-warning-content")), e(".timeout-dialog .actions").replaceWith("")
                }, 1e3 * n)
            }, window.TimeoutDialog = {
                init: n
            }
        }(window.jQuery), $(document).on("keydown", function(e) {
            var t;
            return 32 === e.which && (t = $(".extend-session:visible").get(0)) ? ($(t).click(), e.preventDefault()) : void 0
        })
    }.call(this),
    function() {
        ! function(e) {
            var t, n;
            return t = function() {
                return e(":input:visible[data-password-strength]").keyup(function() {
                    var t, i;
                    return t = e(this), i = t.val(), n(0, t, i.match(constants.regexes.miniscules)), n(1, t, i.match(constants.regexes.capitals)), n(2, t, i.match(constants.regexes.digits)), n(3, t, i.match(constants.regexes.specialCharacters) && !i.match(/\s/)), n(4, t, i.length >= 8 && i.length <= 32)
                })
            }, n = function(e, t, n) {
                return t.find("~ .form__item__information > .password-rules > li").eq(e).removeClass(n ? "password-rule--invalid" : "password-rule--valid").addClass(n ? "password-rule--valid" : "password-rule--invalid")
            }, window.PasswordCheck = {
                init: t
            }
        }(window.jQuery)
    }.call(this),
    function() {
        ! function(e) {
            var t, n, i, o, r, s, a, l;
            return t = function(e) {
                return e.match(/^\d+$/) ? window.parseInt(e, 10) : null
            }, n = function(e, t) {
                var n, i;
                return i = e.attr("name"), n = i.match(/^(\w+)\[(\w+)\](\[(\w+)\])?$/), null != n[4] ? r[n[1]][n[2]][n[4]][t] : r[n[1]][n[2]][t]
            }, i = function(e, t) {
                return null != e.data(t)
            }, o = function() {
                return e("form:not([novalidate])").each(function() {
                    var t, n, i;
                    return t = e(this), i = !1, n = e("fieldset", t), e('input[type="submit"]', t).mousedown(function() {
                        return i = !0
                    }).mouseup(function() {
                        return i = !1
                    }).not("[formnovalidate]").click(function() {
                        var t, i;
                        return i = !0, n.each(function() {
                            a(e(this), !0) || (i = !1)
                        }), t = e(".form__item--error"), t.length > 0 && e(t[0]).find("> :input").first().focus(), i
                    }), e("a", t).mousedown(function() {
                        return i = !0
                    }).mouseup(function() {
                        return i = !1
                    }), n.each(function() {
                        var t;
                        return t = e(this), e(":input:visible", t).blur(function(e) {
                            var n;
                            return n = e.currentTarget, document.activeElement === n || i ? void 0 : a(t, !1)
                        })
                    })
                })
            }, r = constants.validationMessages, s = function(t, n) {
                return e(".form__item__errors", t).remove(), n ? (t.filter(".form__item").removeClass("form__item").addClass("form__item--error"), t.append('<ul class="form__item__errors">' + n + "</ul>")) : t.filter(".form__item--error").removeClass("form__item--error").addClass("form__item")
            }, a = function(t, n) {
                var o;
                return o = "", e(":input:visible", t).each(function() {
                    var t, r, s, a, u, c;
                    t = e(this), u = [];
                    for (s in l) l.hasOwnProperty(s) ? (r = n && "required" === s, i(t, s) && (r || "" !== t.val()) ? (c = l[s], a = c(t, t.val(), t.data(s)), null != a ? u.push(o += "<li>" + a + "</li>") : u.push(void 0)) : u.push(void 0)) : u.push(void 0);
                    return u
                }), s(t, o), "" === o
            }, l = {
                bsn8: function(e, t) {
                    return t.match(/^\d{8}$/) ? n(e, "invalid_8") : void 0
                },
                "bsn-format": function(e, t) {
                    return t.match(constants.regexes.only.bsn_format) ? void 0 : n(e, "invalid")
                },
                "id-number": function(e, t) {
                    return t.match(constants.regexes.idNumber) ? t.match(/o/i) ? n(e, "contains_o") : void 0 : n(e, "invalid")
                },
                code: function(e, t, i) {
                    var o;
                    return o = new window.RegExp("^" + i, "i"), t.match(o) ? void 0 : n(e, "invalid")
                },
                day: function(e, i) {
                    var o;
                    return o = t(i), null === o || 0 > o || o > 31 ? n(e, "invalid") : void 0
                },
                email: function(e, t) {
                    return t.match(constants.regexes.email) && t.match(constants.regexes.email_len_to_at_sign) ? void 0 : n(e, "invalid")
                },
                "house-number": function(e, t) {
                    return t.match(constants.regexes.only.house_number) ? void 0 : n(e, "invalid")
                },
                "house-number-addition": function(e, t) {
                    return t.match(constants.regexes.only.house_number_addition) ? void 0 : n(e, "invalid")
                },
                "identical-to": function(t, i, o) {
                    return e(o).val() !== i ? n(t, "confirmation") : void 0
                },
                "maximum-length": function(e, t, i) {
                    return t.length > i ? n(e, "tooLong") : void 0
                },
                "minimum-capitals": function(e, t, i) {
                    var o;
                    return o = t.match(constants.regexes.capitals), (o || []).length < i ? n(e, "tooFewCapitals") : void 0
                },
                "only-digits": function(e, t, i) {
                    var o;
                    return o = t.match(/^\d+$/), o ? void 0 : n(e, "onlyDigits")
                },
                "minimum-digits": function(e, t, i) {
                    var o;
                    return o = t.match(constants.regexes.digits), (o || []).length < i ? n(e, "tooFewDigits") : void 0
                },
                "minimum-length": function(e, t, i) {
                    return t.length < i ? n(e, "tooShort") : void 0
                },
                "minimum-minuscules": function(e, t, i) {
                    var o;
                    return o = t.match(constants.regexes.miniscules), (o || []).length < i ? n(e, "tooFewMinuscules") : void 0
                },
                "minimum-special-characters": function(e, t, i) {
                    var o;
                    return o = t.match(constants.regexes.specialCharacters), (o || []).length < i ? n(e, "tooFewSpecialCharacters") : void 0
                },
                "mobile-number": function(e, t) {
                    var i, o;
                    return o = t.replace(/^\+/g, "00").replace(/\D/g, ""), i = o.match(/^((\+31|0031|0)\d{9}$|^(\+|00)(?!31)\d{5,30})$/), i ? void 0 : n(e, "invalid")
                },
                month: function(e, i) {
                    var o;
                    return o = t(i), null === o || 0 > o || o > 12 ? n(e, "invalid") : void 0
                },
                password: function(e, t) {
                    return t.match(constants.regexes.only.password) ? void 0 : n(e, "invalid")
                },
                pattern: function(e, t, i) {
                    var o;
                    return o = new window.RegExp(i), t.match(o) ? void 0 : n(e, "invalid")
                },
                "postal-code": function(e, t) {
                    return t.match(constants.regexes.only.postal_code) ? void 0 : n(e, "invalid")
                },
                required: function(e, t) {
                    return "" === t ? n(e, "blank") : void 0
                },
                username: function(e, t) {
                    return t.match(constants.regexes.only.username) ? void 0 : n(e, "invalid")
                },
                "year-in-past": function(e, i) {
                    var o, r;
                    return o = t(i), r = new window.Date, "0000" !== i && (null === o || 1895 > o) ? n(e, "invalid") : o > r.getFullYear() ? n(e, "invalid_future") : void 0
                },
                "year-not-in-past": function(e, i) {
                    var o, r;
                    return o = t(i), r = new window.Date, null === o ? n(e, "invalid") : o > r.getFullYear() + 10 || 1895 > o ? n(e, "invalid") : o < r.getFullYear() ? n(e, "year_is_in_past") : void 0
                },
                "birthdate-not-in-future": function(i, o) {
                    var r, s, a, l, u;
                    return u = t(o), a = t(e("[id$=geboortedatum_maand]").val()), s = t(e("[id$=geboortedatum_dag]").val()), l = new window.Date, "0000" !== o && (null === u || 1895 > u || u > l.getFullYear()) ? void 0 : u && a && s && (r = new window.Date(u, a - 1, s), r > l) ? n(i, "invalid_future") : void 0
                },
                "id-not-in-past": function(i, o) {
                    var r, s, a, l, u;
                    return u = t(o), a = t(e("#registration_balie_valid_until_month").val()), r = t(e("#registration_balie_valid_until_day").val()), l = new window.Date, null === u || u > l.getFullYear() + 10 || 1895 > u || u < l.getFullYear() ? void 0 : u && a && r && (s = new window.Date(u, a - 1, r), l > s) ? n(i, "year_is_in_past") : void 0
                }
            }, window.Validator = {
                init: o
            }
        }(window.jQuery)
    }.call(this),
    function() {
        ! function(e) {
            var t, n, i;
            return i = function(e) {
                var t;
                return t = e.replace(constants.information_boxes.aria_labels_close_prefix + " ", ""), t.charAt(0).toUpperCase() + t.slice(1)
            }, t = function(e) {
                return constants.information_boxes.aria_labels_close_prefix + " " + (e.charAt(0).toLowerCase() + e.slice(1))
            }, n = function() {
                var n;
                return n = "aria-label", e(".info-button").click(function() {
                    var o, r, s;
                    return r = e(this), o = r.closest(".row").find(".info-box"), o.is(":empty") && o.html("<p>" + r.attr("title") + "</p>"), r.stop(!0, !0), o.stop(!0, !0), s = r.attr(n), o.is(":visible") ? (r.attr(n, i(s)), r.switchClass("close", "info"), o.toggle("slide", {
                        direction: "up"
                    }, 500), o.parent(".ui-effects-wrapper").slideUp(500)) : (r.attr(n, t(s)), r.switchClass("info", "close"), o.toggle("slide", {
                        direction: "up"
                    }, 500), o.parent(".ui-effects-wrapper").hide().slideDown(500))
                })
            }, window.InfoBoxes = {
                init: n
            }
        }(window.jQuery)
    }.call(this),
    function() {
        ! function(e, t, n, i, o) {
            var r, s, a, l, u, c, d, h, f, p, g, m;
            return r = function() {
                return e("html").toggleClass("no-javascript javascript")
            }, a = function() {
                var a;
                return a = e("html").hasClass("no-javascript"), a && (r(), d(), g(), n.init()), t.init(), u(), c(), h(), m(), i.init(), f(), s(), p(), o.init()
            }, u = function() {
                return e("fieldset :input:visible").focus(function() {
                    return e(this).parent().addClass("form__item--active")
                }).blur(function() {
                    return e(this).parent().removeClass("form__item--active")
                })
            }, d = function() {
                return e(".questions").click(function(t) {
                    var n, i, o;
                    return o = e(t.target), i = o.next(".questions-answer"), n = o.find("> .accessibility__information"), o.hasClass("questions-question") ? (i.toggle(), i.is(":visible") ? n.text(constants.answerVisible) : n.text(constants.answerHidden), t.preventDefault()) : void 0
                })
            }, h = function() {
                return e(".loader").click(function() {
                    return e(".message-dialog").toggleClass("non-spinning")
                })
            }, c = function() {
                return e(".header-menu-link--expand").click(function(t) {
                    return e(".header-menu").toggleClass("header-menu--active"), t.preventDefault()
                })
            }, f = function() {
                return e("#account_gesproken_sms").change(function(t) {
                    return e("#account_gesproken_sms").data("toggled", !0)
                }), e("#account_mobiel_nummer").keypress(function(t) {
                    var n, i, o, r, s, a, l;
                    if (i = e(t.currentTarget), !(i.parent().hasClass("form__item--error") || i.val().length < 5))
                        if (a = i.val().replace(/^\+/, "00").replace(/\D/g, ""), o = /^00(?!(31|0))(?!0)\d*/.test(a), s = /^(00316|06)\d*/.test(a), n = "spoken-sms-messages-is-enabled", r = constants.spokenSmsMessagesIsEnabled, r = "<div class='" + n + "'>" + r + "</div>", e("#account_mobiel_nummer").data("update-existing-number")) {
                            if (!e("#account_gesproken_sms").data("toggled")) {
                                if (s || o) return l = e("#account_gesproken_sms").data("initial-spoken-sms-value"), e("#account_gesproken_sms").prop("checked", l), e(".form__item__information div." + n).remove();
                                if (e("#account_gesproken_sms").prop("checked", !0), !e(".form__item__information div." + n).length) return e(".form__item--active .form__item__information").append(r)
                            }
                        } else {
                            if (s || o) return e("#account_gesproken_sms").prop("checked", !1), e(".form__item__information div." + n).remove();
                            if (e("#account_gesproken_sms").prop("checked", !0), !e(".form__item__information div." + n).length) return e(".form__item--active .form__item__information").append(r)
                        }
                })
            }, g = function() {
                return window.self === window.top ? window.document.getElementsByTagName("body")[0].style.display = "block" : window.top.location = window.self.location
            }, m = function() {
                var t;
                return "autofocus" in document.createElement("input") || e(":input:visible:first[autofocus]").focus(), t = e(".form__item--error"), t.length > 0 ? e(t[0]).find("> :input").first().focus() : void 0
            }, s = function() {
                return e("fieldset.form__item").each(function() {
                    var t, n;
                    return t = e(this).find(":input"), n = e(this).find(".form__item__information"), n.length > 0 && t.length > 0 ? (e(t).focus(function() {
                        return e(n).css("display", "block")
                    }), e(t).blur(function() {
                        return window.setTimeout(function() {
                            return e(n).css("display", "none")
                        }, 0)
                    })) : void 0
                })
            }, p = function() {
                return e("a.normal-to-front-desk-process-link").click(function(t) {
                    return t.preventDefault(), l("/aanvragen_buitenland", "post", {
                        "registration_balie[burgerservicenummer]": e("#registration_burgerservicenummer").val(),
                        "registration_balie[geboortedatum_dag]": e("#registration_geboortedatum_dag").val(),
                        "registration_balie[geboortedatum_maand]": e("#registration_geboortedatum_maand").val(),
                        "registration_balie[geboortedatum_jaar]": e("#registration_geboortedatum_jaar").val(),
                        authenticity_token: e("input[name=authenticity_token]").val()
                    })
                })
            }, l = function(t, n, i) {
                var o, r, s;
                o = e("<form />", {
                    action: t,
                    method: n,
                    style: "display: none;"
                });
                for (r in i) s = i[r], e("<input />", {
                    type: "hidden",
                    name: r,
                    value: s
                }).appendTo(o);
                return o.appendTo("body").submit()
            }, window.Handlers = {
                init: a
            }
        }(window.jQuery, window.PasswordCheck, window.TimeoutDialog, window.Validator, window.InfoBoxes)
    }.call(this),
    function() {
        $(function() {
            var e, t, n, i, o, r, s, a, l;
            return i = $("input[type='submit']").first(), l = $(".normal-login input[type='password']").closest("fieldset"), o = $("#authentication_type_account_hoog"), r = $("#cardreader_disabled"), e = $("#authentication_type_account_midden_via_app"), t = $("#app_disabled"), n = $("#app_notice"), s = $("#forgot_password"), a = $("p.page_id"), $("input[name='authentication[type_account]']").bind("click", function() {
                var u;
                return u = $(this).is(e) ? "app" : $(this).is(o) ? "cardreader" : "normal", "cardreader" === u ? ($(".normal-login").hide(), 0 === r.length ? $(".cardreader-login").show() : r.show(), n.hide(), t.hide()) : "normal" === u || 0 === t.length ? ($(".normal-login").show(), $(".cardreader-login").hide(), l.toggle("app" !== u), n.toggle("app" === u), t.hide(), r.hide()) : ($(".normal-login").hide(), $(".cardreader-login").hide(), n.show(), t.show(), r.hide()), "normal" === u ? (s.show(), i.val("Inloggen"), i.data("disable-with", "Inloggen"), $("form").attr("action", "/inloggen"), i.show()) : (s.hide(), i.val("Volgende"), i.data("disable-with", "Volgende"), "app" === u ? ($("form").attr("action", "/inloggen_app"), i.toggle(0 === t.length)) : ($("form").attr("action", "/inloggen_idensys"), i.toggle(0 === r.length))), a.find("span").text(a.data("app" === u ? "secondary" : "primary"))
            }), $(function() {
                return $("input[name='authentication[type_account]']:checked").click().focus()
            })
        })
    }.call(this),
    function() {
        var e, t, n;
        this.message_dialog = function(e) {
            var i;
            return $('meta[name="viewport"]').attr("content", "width=device-width,initial-scale=1,maximum-scale=1"), $(".message-dialog").remove(), i = $('<div class="message-dialog"/>').appendTo($("body")), i.append(n(e)), i.append(t(e)), i.dialog({
                close: function() {
                    return $("body").css("overflow", "visible")
                },
                create: function() {
                    return $("body").css("overflow", "hidden")
                },
                modal: !0,
                width: Math.min(500, $(window.document).width() - 20)
            })
        }, n = function(e) {
            var t, n;
            if (e.alert) t = e.alert, n = "error";
            else {
                if (!e.notice) return "";
                t = e.notice, n = "information"
            }
            return $("<div/>").addClass("block-with-icon--" + n).append($("<p/>").text(t))
        }, t = function(t) {
            var n;
            return n = $('<div class="actions"/>'), t.ok && n.append(e("cancel_ok", t.ok, "left")), t.previous && n.append(e("previous", t.previous, "left")), t.cancel && n.append(e("cancel", t.cancel, "right")), n
        }, e = function(e, t, n) {
            return $("<a/>").addClass("actions__" + n + "--link").attr("href", t).text(window.constants.actionTexts[e])
        }
    }.call(this),
    function() {
        var e;
        e = function() {
            function e(e) {
                e = $(e), this.url = e.data("url"), this.timeout = parseInt(e.data("timeout")) || 2500, this.poll()
            }
            return e.prototype.poll = function(e) {
                return $.ajax({
                    type: "GET",
                    url: this.url,
                    statusCode: {
                        200: function(e) {
                            return function(t) {
                                return e.success(t)
                            }
                        }(this),
                        202: function(e) {
                            return function() {
                                return setTimeout(function() {
                                    return e.poll()
                                }, e.timeout)
                            }
                        }(this),
                        500: function(e) {
                            return function() {
                                return e.error
                            }
                        }(this)
                    }
                })
            }, e.prototype.success = function(e) {
                return e ? e.url ? window.location.href = e.url : e.dialog ? window.message_dialog(e.dialog) : void 0 : void 0
            }, e.prototype.error = function() {
                return console.log("Error!")
            }, e
        }(), $(function() {
            return $(".poller").each(function(t, n) {
                return new e(n)
            })
        })
    }.call(this),
    function() {
        var e, t;
        e = function() {
            function e(e) {
                this.form = $(e), this.form.find(".remember_option").show(), this.findElements() && (this.load(), this.attachHandlers())
            }
            return e.prototype.findElements = function() {
                return this.form.find('input[type="text"]').each(function(e) {
                    return function(t, n) {
                        return /_username\]$/.test(n.name) ? e.username = $(n) : void 0
                    }
                }(this)), this.form.find('input[type="checkbox"]').each(function(e) {
                    return function(t, n) {
                        return /\[remember_login\]$/.test(n.name) ? e.checkbox = $(n) : void 0
                    }
                }(this)), this.username && this.checkbox
            }, e.prototype.attachHandlers = function() {
                return this.form.on("submit", function(e) {
                    return function(t) {
                        return e.save(t)
                    }
                }(this))
            }, e.prototype.load = function() {
                var e;
                return e = window.localStorage.getItem("login"), e && this.username.val(e), this.checkbox.prop("checked", e)
            }, e.prototype.save = function(e) {
                return this.username.is(":visible") ? this.checkbox.prop("checked") ? this.username.val() ? window.localStorage.setItem("login", this.username.val()) : void 0 : window.localStorage.removeItem("login") : void 0
            }, e
        }(), t = function() {
            var e, t;
            try {
                return window.localStorage.setItem("test", "test"), t = "test" === window.localStorage.getItem("test"), window.localStorage.removeItem("test"), t
            } catch (n) {
                return e = n, !1
            }
        }, t() && $(function() {
            return $(".remember_login").each(function(t, n) {
                return new e(n)
            })
        })
    }.call(this),
    function() {
        ! function(e) {
            return e(window.document).ready(function() {
                return window.Handlers.init()
            })
        }(window.jQuery)
    }.call(this);