function parseAttributeToValidJavascript(e) {
    try {
        var t = document.createElement("div");
        t.setAttribute("onclick", "this.fakeargs = " + e), t.click()
    } catch (e) {
    }
}

!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length, n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return pe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ke.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function (e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }

    function i(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return pe.each(e.match(Se) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Le, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : De.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {
                }
                pe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function c(e) {
        var t;
        for (t in e) if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, n, r) {
        if (Ae(e)) {
            var i, o, a = pe.expando, s = e.nodeType, l = s ? pe.cache : e, c = s ? e[a] : e[a] && a;
            if (c && l[c] && (r || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = ne.pop() || pe.guid++ : a), l[c] || (l[c] = s ? {} : {toJSON: pe.noop}), "object" != typeof t && "function" != typeof t || (r ? l[c] = pe.extend(l[c], t) : l[c].data = pe.extend(l[c].data, t)), o = l[c], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[pe.camelCase(t)]) : i = o, i
        }
    }

    function d(e, t, n) {
        if (Ae(e)) {
            var r, i, o = e.nodeType, a = o ? pe.cache : e, s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !c(r) : !pe.isEmptyObject(r)) return
                }
                (n || (delete a[s].data, c(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }

    function p(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return pe.css(e, t, "")
            }, l = s(), c = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            u = (pe.cssNumber[t] || "px" !== c && +l) && qe.exec(pe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                o = o || ".5", u /= o, pe.style(e, t, u + c)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
    }

    function f(e) {
        var t = Re.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, r, i = 0,
            o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"))
    }

    function v(e) {
        Ie.test(e.type) && (e.defaultChecked = e.checked)
    }

    function g(e, t, n, r, i) {
        for (var o, a, s, l, c, u, d, p = e.length, g = f(t), y = [], b = 0; b < p; b++) if ((a = e[b]) || 0 === a) if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a); else if (ze.test(a)) {
            for (l = l || g.appendChild(t.createElement("div")), c = (Be.exec(a) || ["", ""])[1].toLowerCase(), d = $e[c] || $e._default, l.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
            if (!de.leadingWhitespace && We.test(a) && y.push(t.createTextNode(We.exec(a)[0])), !de.tbody) for (a = "table" !== c || Ue.test(a) ? "<table>" !== d[1] || Ue.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;) pe.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
            for (pe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = g.lastChild
        } else y.push(t.createTextNode(a));
        for (l && g.removeChild(l), de.appendChecked || pe.grep(h(y, "input"), v), b = 0; a = y[b++];) if (r && pe.inArray(a, r) > -1) i && i.push(a); else if (s = pe.contains(a.ownerDocument, a), l = h(g.appendChild(a), "script"), s && m(l), n) for (o = 0; a = l[o++];) Fe.test(a.type || "") && n.push(a);
        return l = null, g
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function w() {
        try {
            return re.activeElement
        } catch (e) {
        }
    }

    function x(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) x(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = b; else if (!i) return e;
        return 1 === o && (a = i, i = function (e) {
            return pe().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = pe.guid++)), e.each(function () {
            pe.event.add(this, t, i, r, n)
        })
    }

    function k(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function C(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }

    function T(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function E(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, r, i, o = pe._data(e), a = pe._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; r < i; r++) pe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }

    function N(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                i = pe._data(t);
                for (r in i.events) pe.removeEvent(t, r, i.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, T(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ie.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function S(e, t, n, r) {
        t = oe.apply([], t);
        var i, o, a, s, l, c, u = 0, d = e.length, p = d - 1, f = t[0], m = pe.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !de.checkClone && tt.test(f)) return e.each(function (i) {
            var o = e.eq(i);
            m && (t[0] = f.call(this, i, o.html())), S(o, t, n, r)
        });
        if (d && (c = g(t, e[0].ownerDocument, !1, e, r), i = c.firstChild, 1 === c.childNodes.length && (c = i), i || r)) {
            for (s = pe.map(h(c, "script"), C), a = s.length; u < d; u++) o = c, u !== p && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[u], o, u);
            if (a) for (l = s[s.length - 1].ownerDocument, pe.map(s, T), u = 0; u < a; u++) o = s[u], Fe.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(l, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(rt, "")));
            c = i = null
        }
        return e
    }

    function _(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && m(h(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function j(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body), r = pe.css(n[0], "display");
        return n.detach(), r
    }

    function A(e) {
        var t = re, n = st[e];
        return n || (n = j(e, t), "none" !== n && n || (at = (at || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (at[0].contentWindow || at[0].contentDocument).document, t.write(), t.close(), n = j(e, t), at.detach()), st[e] = n), n
    }

    function D(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function L(e) {
        if (e in kt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = xt.length; n--;) if ((e = xt[n] + t) in kt) return e
    }

    function O(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && He(r) && (o[a] = pe._data(r, "olddisplay", A(r.nodeName)))) : (i = He(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
        for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function q(e, t, n) {
        var r = yt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function M(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + Me[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + Me[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Me[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Me[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + Me[o] + "Width", !0, i)));
        return a
    }

    function H(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = pt(e),
            a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = ft(e, t, o), (i < 0 || null == i) && (i = e.style[t]), ct.test(i)) return i;
            r = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + M(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function P(e, t, n, r, i) {
        return new P.prototype.init(e, t, n, r, i)
    }

    function I() {
        return e.setTimeout(function () {
            Ct = void 0
        }), Ct = pe.now()
    }

    function B(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Me[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function F(e, t, n) {
        for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function W(e, t, n) {
        var r, i, o, a, s, l, c, u = this, d = {}, p = e.style, f = e.nodeType && He(e), h = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = pe.css(e, "display"), "inline" === ("none" === c ? pe._data(e, "olddisplay") || A(e.nodeName) : c) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", de.shrinkWrapBlocks() || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], Et.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                if ("show" !== i || !h || void 0 === h[r]) continue;
                f = !0
            }
            d[r] = h && h[r] || pe.style(e, r)
        } else c = void 0;
        if (pe.isEmptyObject(d)) "inline" === ("none" === c ? A(e.nodeName) : c) && (p.display = c); else {
            h ? "hidden" in h && (f = h.hidden) : h = pe._data(e, "fxshow", {}), o && (h.hidden = !f), f ? pe(e).show() : u.done(function () {
                pe(e).hide()
            }), u.done(function () {
                var t;
                pe._removeData(e, "fxshow");
                for (t in d) pe.style(e, t, d[t])
            });
            for (r in d) a = F(f ? h[r] : 0, r, u), r in h || (h[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = pe.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function $(e, t, n) {
        var r, i, o = 0, a = $.prefilters.length, s = pe.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i) return !1;
            for (var t = Ct || I(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(o);
            return s.notifyWith(e, [c, o, n]), o < 1 && l ? n : (s.resolveWith(e, [c]), !1)
        }, c = s.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {specialEasing: {}, easing: pe.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ct || I(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) c.tweens[n].run(1);
                return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (R(u, c.opts.specialEasing); o < a; o++) if (r = $.prefilters[o].call(c, e, u, c.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(r.stop, r)), r;
        return pe.map(u, F, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function z(e) {
        return pe.attr(e, "class") || ""
    }

    function U(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(Se) || [];
            if (pe.isFunction(n)) for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function V(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, pe.each(e[s] || [], function (e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), l
        }

        var o = {}, a = e === Yt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function X(e, t) {
        var n, r, i = pe.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && pe.extend(!0, e, n), e
    }

    function K(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (a in s) if (s[a] && s[a].test(i)) {
            l.unshift(a);
            break
        }
        if (l[0] in n) o = l[0]; else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function J(e, t, n, r) {
        var i, o, a, s, l, c = {}, u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(a = c[l + " " + o] || c["* " + o])) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], u.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function Y(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }

    function G(e) {
        if (!pe.contains(e.ownerDocument || re, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === Y(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Q(e, t, n, r) {
        var i;
        if (pe.isArray(t)) pe.each(t, function (t, i) {
            n || tn.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== pe.type(t)) r(e, t); else for (i in t) Q(e + "[" + i + "]", t[i], n, r)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    var ne = [], re = e.document, ie = ne.slice, oe = ne.concat, ae = ne.push, se = ne.indexOf, le = {},
        ce = le.toString, ue = le.hasOwnProperty, de = {}, pe = function (e, t) {
            return new pe.fn.init(e, t)
        }, fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, he = /^-ms-/, me = /-([\da-z])/gi, ve = function (e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: "1.12.4", constructor: pe, selector: "", length: 0, toArray: function () {
            return ie.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
        }, pushStack: function (e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return pe.each(this, e)
        }, map: function (e) {
            return this.pushStack(pe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: ae, sort: ne.sort, splice: ne.splice
    }, pe.extend = pe.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], n = i[r], a !== n && (c && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(c, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === pe.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === pe.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst) for (t in e) return ue.call(e, t);
            for (t in e) ;
            return void 0 === t || ue.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && pe.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(he, "ms-").replace(me, ve)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var r, i = 0;
            if (n(e)) for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(fe, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (se) return se.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
            if (n !== n) for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, r) {
            var i, o, a = 0, s = [];
            if (n(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, r)) && s.push(o); else for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
            return oe.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e)) return n = ie.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || pe.guid++, r
        }, now: function () {
            return +new Date
        }, support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ge = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, c, d, p, f, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== A && j(t), t = t || A, L)) {
                if (11 !== m && (d = me.exec(e))) if (i = d[1]) {
                    if (9 === m) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (h && (a = h.getElementById(i)) && H(t, a) && a.id === i) return n.push(a), n
                } else {
                    if (d[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = d[3]) && b.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(i)), n
                }
                if (b.qsa && !$[e + " "] && (!O || !O.test(e))) {
                    if (1 !== m) h = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ge, "\\$&") : t.setAttribute("id", s = P), p = C(e), o = p.length, c = ue.test(s) ? "#" + s : "[id='" + s + "']"; o--;) p[o] = c + " " + u(p[o]);
                        f = p.join(","), h = ve.test(e) && l(t.parentNode) || t
                    }
                    if (f) try {
                        return Y.apply(n, h.querySelectorAll(f)), n
                    } catch (e) {
                    } finally {
                        s === P && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[P] = !0, e
        }

        function i(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {
        }

        function u(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = F++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, l, c, u = [B, o];
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) {
                    if (c = t[P] || (t[P] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[r]) && s[0] === B && s[1] === o) return u[2] = s[2];
                    if (l[r] = u, u[2] = e(t, n, a)) return !0
                }
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function f(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function h(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[P] && (i = m(i)), o && !o[P] && (o = m(o, a)), r(function (r, a, s, l) {
                var c, u, d, p = [], m = [], v = a.length, g = r || f(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? g : h(g, p, e, s, l), b = n ? o || (r ? e : v || i) ? [] : a : y;
                if (n && n(y, b, s, l), i) for (c = h(b, m), i(c, [], s, l), u = c.length; u--;) (d = c[u]) && (b[m[u]] = !(y[m[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;) (d = b[u]) && c.push(y[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;) (d = b[u]) && (c = o ? Q(r, d) : p[u]) > -1 && (r[c] = !(a[c] = d))
                    }
                } else b = h(b === a ? b.splice(v, b.length) : b), o ? o(null, a, b, l) : Y.apply(a, b)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = d(function (e) {
                return e === t
            }, a, !0), c = d(function (e) {
                return Q(t, e) > -1
            }, a, !0), f = [function (e, n, r) {
                var i = !o && (r || n !== N) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                return t = null, i
            }]; s < i; s++) if (n = w.relative[e[s].type]) f = [d(p(f), n)]; else {
                if (n = w.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; r < i && !w.relative[e[r].type]; r++) ;
                    return m(s > 1 && p(f), s > 1 && u(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(oe, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && u(e))
                }
                f.push(n)
            }
            return p(f)
        }

        function g(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function (r, a, s, l, c) {
                var u, d, p, f = 0, m = "0", v = r && [], g = [], y = N, b = r || o && w.find.TAG("*", c),
                    x = B += null == y ? 1 : Math.random() || .1, k = b.length;
                for (c && (N = a === A || a || c); m !== k && null != (u = b[m]); m++) {
                    if (o && u) {
                        for (d = 0, a || u.ownerDocument === A || (j(u), s = !L); p = e[d++];) if (p(u, a || A, s)) {
                            l.push(u);
                            break
                        }
                        c && (B = x)
                    }
                    i && ((u = !p && u) && f--, r && v.push(u))
                }
                if (f += m, i && m !== f) {
                    for (d = 0; p = n[d++];) p(v, g, a, s);
                    if (r) {
                        if (f > 0) for (; m--;) v[m] || g[m] || (g[m] = K.call(l));
                        g = h(g)
                    }
                    Y.apply(l, g), c && !r && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return c && (B = x, N = y), v
            };
            return i ? r(a) : a
        }

        var y, b, w, x, k, C, T, E, N, S, _, j, A, D, L, O, q, M, H, P = "sizzle" + 1 * new Date, I = e.document, B = 0,
            F = 0, W = n(), R = n(), $ = n(), z = function (e, t) {
                return e === t && (_ = !0), 0
            }, U = 1 << 31, V = {}.hasOwnProperty, X = [], K = X.pop, J = X.push, Y = X.push, G = X.slice,
            Q = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(re),
            ue = new RegExp("^" + te + "$"), de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ge = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), be = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, we = function () {
                j()
            };
        try {
            Y.apply(X = G.call(I.childNodes), I.childNodes), X[I.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: X.length ? function (e, t) {
                    J.apply(e, G.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, j = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, D = A.documentElement, L = !k(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = i(function (e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = he.test(A.getElementsByClassName), b.getById = i(function (e) {
                return D.appendChild(e).id = P, !A.getElementsByName || !A.getElementsByName(P).length
            }), b.getById ? (w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, w.filter.ID = function (e) {
                var t = e.replace(ye, be);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function (e) {
                var t = e.replace(ye, be);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && L) return t.getElementsByClassName(e)
            }, q = [], O = [], (b.qsa = he.test(A.querySelectorAll)) && (i(function (e) {
                D.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + P + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || O.push(".#.+[+~]")
            }), i(function (e) {
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (b.matchesSelector = he.test(M = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
                b.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), q.push("!=", re)
            }), O = O.length && new RegExp(O.join("|")), q = q.length && new RegExp(q.join("|")), t = he.test(D.compareDocumentPosition), H = t || he.test(D.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, z = t ? function (e, t) {
                if (e === t) return _ = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === I && H(I, e) ? -1 : t === A || t.ownerDocument === I && H(I, t) ? 1 : S ? Q(S, e) - Q(S, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return _ = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], l = [t];
                if (!i || !o) return e === A ? -1 : t === A ? 1 : i ? -1 : o ? 1 : S ? Q(S, e) - Q(S, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? a(s[r], l[r]) : s[r] === I ? -1 : l[r] === I ? 1 : 0
            }, A) : A
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== A && j(e), n = n.replace(le, "='$1']"), b.matchesSelector && L && !$[n + " "] && (!q || !q.test(n)) && (!O || !O.test(n))) try {
                var r = M.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
            }
            return t(n, A, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== A && j(e), H(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== A && j(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== r ? r : b.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (_ = !b.detectDuplicates, S = !b.sortStable && e.slice(0), e.sort(z), _) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return S = null, e
        }, x = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += x(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (v) {
                            if (o) {
                                for (; m;) {
                                    for (p = t; p = p[m];) if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (p = v, d = p[P] || (p[P] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === B && c[1], b = f && c[2], p = f && v.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();) if (1 === p.nodeType && ++b && p === t) {
                                    u[e] = [B, f, b];
                                    break
                                }
                            } else if (y && (p = t, d = p[P] || (p[P] = {}),
                                u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === B && c[1], b = f), !1 === b) for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && (d = p[P] || (p[P] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [B, b]), p !== t));) ;
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = Q(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = T(e.replace(oe, "$1"));
                    return i[P] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(ye, be), function (t) {
                        return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === D
                }, focus: function (e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !w.pseudos.empty(e)
                }, header: function (e) {
                    return fe.test(e.nodeName)
                }, input: function (e) {
                    return pe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: s(function () {
                    return [0]
                }), last: s(function (e, t) {
                    return [t - 1]
                }), eq: s(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: s(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: s(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: s(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: s(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (y in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[y] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {submit: !0, reset: !0}) w.pseudos[y] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, C = t.tokenize = function (e, n) {
            var r, i, o, a, s, l, c, u = R[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = w.preFilter; s;) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(i = de[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : R(e, l).slice(0)
        }, T = t.compile = function (e, t) {
            var n, r = [], i = [], o = $[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;) o = v(t[n]), o[P] ? r.push(o) : i.push(o);
                o = $(e, g(i, r)), o.selector = e
            }
            return o
        }, E = t.select = function (e, t, n, r) {
            var i, o, a, s, c, d = "function" == typeof e && e, p = !r && C(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && L && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ye, be), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);) if ((c = w.find[s]) && (r = c(a.matches[0].replace(ye, be), ve.test(o[0].type) && l(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && u(o))) return Y.apply(n, r), n;
                    break
                }
            }
            return (d || T(e, p))(r, t, !L, n, !t || ve.test(e) && l(t.parentNode) || t), n
        }, b.sortStable = P.split("").sort(z).join("") === P, b.detectDuplicates = !!_, j(), b.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    pe.find = ge, pe.expr = ge.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ge.uniqueSort, pe.text = ge.getText, pe.isXMLDoc = ge.isXML, pe.contains = ge.contains;
    var ye = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && pe(e).is(n)) break;
            r.push(e)
        }
        return r
    }, be = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, we = pe.expr.match.needsContext, xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ke = /^.[^:#\[\.,]*$/;
    pe.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
                for (t = 0; t < i; t++) if (pe.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) pe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ce, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ce, "string" == typeof e) {
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), xe.test(r[1]) && pe.isPlainObject(t)) for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if ((i = re.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2]) return Ce.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = re, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
    }).prototype = pe.fn, Ce = pe(re);
    var Ee = /^(?:parents|prev(?:Until|All))/, Ne = {children: !0, contents: !0, next: !0, prev: !0};
    pe.fn.extend({
        has: function (e) {
            var t, n = pe(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (pe.contains(this, n[t])) return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ye(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ye(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return ye(e, "nextSibling")
        }, prevAll: function (e) {
            return ye(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ye(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ye(e, "previousSibling", n)
        }, siblings: function (e) {
            return be((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return be(e.firstChild)
        }, contents: function (e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function (e, t) {
        pe.fn[e] = function (n, r) {
            var i = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), this.length > 1 && (Ne[e] || (i = pe.uniqueSort(i)), Ee.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var Se = /\S+/g;
    pe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t, n, r, i, a = [], s = [], l = -1, c = function () {
            for (i = e.once, r = t = !0; s.length; l = -1) for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
            e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
        }, u = {
            add: function () {
                return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                    pe.each(n, function (n, r) {
                        pe.isFunction(r) ? e.unique && u.has(r) || a.push(r) : r && r.length && "string" !== pe.type(r) && t(r)
                    })
                }(arguments), n && !t && c()), this
            }, remove: function () {
                return pe.each(arguments, function (e, t) {
                    for (var n; (n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? pe.inArray(e, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return i = s = [], a = n = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return i = !0, n || u.disable(), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return u
    }, pe.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return pe.Deferred(function (n) {
                            pe.each(t, function (t, o) {
                                var a = pe.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? pe.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, pe.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = ie.call(arguments), a = o.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0, l = 1 === s ? e : pe.Deferred(),
                c = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(l.reject) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var _e;
    pe.fn.ready = function (e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? pe.readyWait++ : pe.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (_e.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))))
        }
    }), pe.ready.promise = function (t) {
        if (!_e) if (_e = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready); else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s); else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && re.documentElement
            } catch (e) {
            }
            n && n.doScroll && function t() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return e.setTimeout(t, 50)
                    }
                    a(), pe.ready()
                }
            }()
        }
        return _e.promise(t)
    }, pe.ready.promise();
    var je;
    for (je in pe(de)) break;
    de.ownFirst = "0" === je, de.inlineBlockNeedsLayout = !1, pe(function () {
        var e, t, n, r;
        (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function () {
        var e = re.createElement("div");
        de.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            de.deleteExpando = !1
        }
        e = null
    }();
    var Ae = function (e) {
        var t = pe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Le = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !c(e)
        },
        data: function (e, t, n) {
            return u(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return u(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), pe.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), l(o, r, i[r])));
                    pe._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                pe.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                pe.data(this, e, t)
            }) : o ? l(o, e, pe.data(o, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                pe.removeData(this, e)
            })
        }
    }), pe.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = pe.queue(e, t), r = n.length, i = n.shift(), o = pe._queueHooks(e, t), a = function () {
                pe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                empty: pe.Callbacks("once memory").add(function () {
                    pe._removeData(e, t + "queue"), pe._removeData(e, n)
                })
            })
        }
    }), pe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                pe.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = pe.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = pe._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    }), function () {
        var e;
        de.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return (n = re.getElementsByTagName("body")[0]) && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qe = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
        Me = ["Top", "Right", "Bottom", "Left"], He = function (e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        }, Pe = function (e, t, n, r, i, o, a) {
            var s = 0, l = e.length, c = null == n;
            if ("object" === pe.type(n)) {
                i = !0;
                for (s in n) Pe(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
                return c.call(pe(e), n)
            })), t)) for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
        }, Ie = /^(?:checkbox|radio)$/i, Be = /<([\w:-]+)/, Fe = /^$|\/(?:java|ecma)script/i, We = /^\s+/,
        Re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function () {
        var e = re.createElement("div"), t = re.createDocumentFragment(), n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
    }();
    var $e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    $e.optgroup = $e.option, $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td;
    var ze = /<|&#?\w+;/, Ue = /<tbody/i;
    !function () {
        var t, n, r = re.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t, (de[t] = n in e) || (r.setAttribute(n, "t"), de[t] = !1 === r.attributes[n].expando);
        r = null
    }();
    var Ve = /^(?:input|select|textarea)$/i, Xe = /^key/, Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^(?:focusinfocus|focusoutblur)$/, Ye = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, l, c, u, d, p, f, h, m, v = pe._data(e);
            if (v) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = pe.guid++), (a = v.events) || (a = v.events = {}), (u = v.handle) || (u = v.handle = function (e) {
                    return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), t = (t || "").match(Se) || [""], s = t.length; s--;) o = Ye.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (c = pe.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = pe.event.special[f] || {}, d = pe.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && pe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, h, u) || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), pe.event.global[f] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, c, u, d, p, f, h, m, v = pe.hasData(e) && pe._data(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(Se) || [""], c = t.length; c--;) if (s = Ye.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                    for (d = pe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                    l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || pe.removeEvent(e, f, v.handle), delete u[f])
                } else for (f in u) pe.event.remove(e, f + t[c], n, r, !0);
                pe.isEmptyObject(u) && (delete v.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, a, s, l, c, u, d, p = [r || re], f = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Je.test(f + pe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[pe.expando] ? t : new pe.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), c = pe.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(r, n))) {
                if (!i && !c.noBubble && !pe.isWindow(r)) {
                    for (l = c.delegateType || f, Je.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), u = s;
                    u === (r.ownerDocument || re) && p.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0; (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || f, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), (o = a && s[a]) && o.apply && Ae(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = f, !i && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), n)) && Ae(r) && a && r[f] && !pe.isWindow(r)) {
                    u = r[a], u && (r[a] = null), pe.event.triggered = f;
                    try {
                        r[f]()
                    } catch (e) {
                    }
                    pe.event.triggered = void 0, u && (r[a] = u)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = pe.event.fix(e);
            var t, n, r, i, o, a = [], s = ie.call(arguments), l = (pe._data(this, "events") || {})[e.type] || [],
                c = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = pe.event.handlers.call(this, e, l), t = 0; (i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? pe(i, this).index(l) > -1 : pe.find(i, this, null, [l]).length), r[i] && r.push(o);
                r.length && a.push({elem: l, handlers: r})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[pe.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ke.test(i) ? this.mouseHooks : Xe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== w() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === w() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (e) {
                    return pe.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var r = pe.extend(new pe.Event, n, {type: e, isSimulated: !0});
            pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = re.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n))
    }, pe.Event = function (e, t) {
        if (!(this instanceof pe.Event)) return new pe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        pe.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (pe.event.special.submit = {
        setup: function () {
            if (pe.nodeName(this, "form")) return !1;
            pe.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            if (pe.nodeName(this, "form")) return !1;
            pe.event.remove(this, "._submit")
        }
    }), de.change || (pe.event.special.change = {
        setup: function () {
            if (Ve.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1;
            pe.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ve.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return pe.event.remove(this, "._change"), !Ve.test(this.nodeName)
        }
    }), de.focusin || pe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = pe._data(r, t);
                i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = pe._data(r, t) - 1;
                i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t))
            }
        }
    }), pe.fn.extend({
        on: function (e, t, n, r) {
            return x(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return x(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = b), this.each(function () {
                pe.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                pe.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return pe.event.trigger(e, t, n, !0)
        }
    });
    var Ge = / jQuery\d+="(?:null|\d+)"/g, Qe = new RegExp("<(?:" + Re + ")[\\s/>]", "i"),
        Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/, rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        it = f(re), ot = it.appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ze, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s, l = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !Qe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ot.innerHTML = e.outerHTML, ot.removeChild(o = ot.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a) r[a] && N(i, r[a]);
            if (t) if (n) for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++) E(i, r[a]); else E(e, o);
            return r = h(o, "script"), r.length > 0 && m(r, !l && h(e, "script")), r = s = i = null, o
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = pe.expando, l = pe.cache, c = de.attributes, u = pe.event.special; null != (n = e[a]); a++) if ((t || Ae(n)) && (i = n[s], o = i && l[i])) {
                if (o.events) for (r in o.events) u[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
                l[i] && (delete l[i], c || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(i))
            }
        }
    }), pe.fn.extend({
        domManip: S, detach: function (e) {
            return _(this, e, !0)
        }, remove: function (e) {
            return _(this, e)
        }, text: function (e) {
            return Pe(this, function (e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return S(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    k(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return S(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return S(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return S(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return pe.clone(this, e, t)
            })
        }, html: function (e) {
            return Pe(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ge, "") : void 0;
                if ("string" == typeof e && !et.test(e) && (de.htmlSerialize || !Qe.test(e)) && (de.leadingWhitespace || !We.test(e)) && !$e[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return S(this, arguments, function (t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        pe.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), pe(o[r])[t](n), ae.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var at, st = {HTML: "block", BODY: "block"}, lt = /^margin/, ct = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
        ut = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }, dt = re.documentElement;
    !function () {
        function t() {
            var t, u, d = re.documentElement;
            d.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (u = e.getComputedStyle(c), n = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, i = "4px" === (u || {width: "4px"}).width, c.style.marginRight = "50%", r = "4px" === (u || {marginRight: "4px"}).marginRight, t = c.appendChild(re.createElement("div")), t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", o = 0 === c.getClientRects().length, o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", t = c.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(l)
        }

        var n, r, i, o, a, s, l = re.createElement("div"), c = re.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, l = re.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function () {
                return null == n && t(), o
            }, boxSizingReliable: function () {
                return null == n && t(), i
            }, pixelMarginRight: function () {
                return null == n && t(), r
            }, pixelPosition: function () {
                return null == n && t(), n
            }, reliableMarginRight: function () {
                return null == n && t(), a
            }, reliableMarginLeft: function () {
                return null == n && t(), s
            }
        }))
    }();
    var pt, ft, ht = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, ft = function (e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || pt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && ct.test(a) && lt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : dt.currentStyle && (pt = function (e) {
        return e.currentStyle
    }, ft = function (e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || pt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ct.test(a) && !ht.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var mt = /alpha\([^)]*\)/i, vt = /opacity\s*=\s*([^)]*)/i, gt = /^(none|table(?!-c[ea]).+)/,
        yt = new RegExp("^(" + Oe + ")(.*)$", "i"), bt = {position: "absolute", visibility: "hidden", display: "block"},
        wt = {letterSpacing: "0", fontWeight: "400"}, xt = ["Webkit", "O", "Moz", "ms"],
        kt = re.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ft(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
        cssProps: {float: de.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = pe.camelCase(t), l = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if (o = typeof n, "string" === o && (i = qe.exec(n)) && i[1] && (n = p(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                } catch (e) {
                }
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ft(e, t, r)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), pe.each(["height", "width"], function (e, t) {
        pe.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return gt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ut(e, bt, function () {
                    return H(e, t, r)
                }) : H(e, t, r)
            }, set: function (e, n, r) {
                var i = r && pt(e);
                return q(e, n, r ? M(e, t, r, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), de.opacity || (pe.cssHooks.opacity = {
        get: function (e, t) {
            return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = mt.test(o) ? o.replace(mt, i) : o + " " + i)
        }
    }), pe.cssHooks.marginRight = D(de.reliableMarginRight, function (e, t) {
        if (t) return ut(e, {display: "inline-block"}, ft, [e, "marginRight"])
    }), pe.cssHooks.marginLeft = D(de.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(ft(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ut(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), pe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        pe.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Me[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, lt.test(e) || (pe.cssHooks[e + t].set = q)
    }), pe.fn.extend({
        css: function (e, t) {
            return Pe(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (pe.isArray(t)) {
                    for (r = pt(e), i = t.length; a < i; a++) o[t[a]] = pe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return O(this, !0)
        }, hide: function () {
            return O(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                He(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = P, P.prototype = {
        constructor: P, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, pe.fx = P.prototype.init, pe.fx.step = {};
    var Ct, Tt, Et = /^(?:toggle|show|hide)$/, Nt = /queueHooks$/;
    pe.Animation = pe.extend($, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return p(n.elem, e, qe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Se);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
        }, prefilters: [W], prefilter: function (e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e)
        }
    }), pe.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue)
        }, r
    }, pe.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(He).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = pe.isEmptyObject(e), o = pe.speed(t, n, r), a = function () {
                var t = $(this, pe.extend({}, e), o);
                (i || pe._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = pe.timers, a = pe._data(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && Nt.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || pe.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = pe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = pe.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), pe.each(["toggle", "show", "hide"], function (e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i)
        }
    }), pe.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        pe.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), pe.timers = [], pe.fx.tick = function () {
        var e, t = pe.timers, n = 0;
        for (Ct = pe.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(), Ct = void 0
    }, pe.fx.timer = function (e) {
        pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
    }, pe.fx.interval = 13, pe.fx.start = function () {
        Tt || (Tt = e.setInterval(pe.fx.tick, pe.fx.interval))
    }, pe.fx.stop = function () {
        e.clearInterval(Tt), Tt = null
    }, pe.fx.speeds = {slow: 600, fast: 200, _default: 400}, pe.fn.delay = function (t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"),
            i = r.appendChild(re.createElement("option"));
        n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = i.selected, de.enctype = !!re.createElement("form").enctype, r.disabled = !0, de.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
    }();
    var St = /\r/g, _t = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = pe.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(_t, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++) if (n = r[l], (n.selected || l === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = pe(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;) if (r = i[a], pe.inArray(pe.valHooks.option.get(r), o) > -1) try {
                        r.selected = n = !0
                    } catch (e) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function () {
        pe.valHooks[this] = {
            set: function (e, t) {
                if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        }, de.checkOn || (pe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var jt, At, Dt = pe.expr.attrHandle, Lt = /^(?:checked|selected)$/i, Ot = de.getSetAttribute, qt = de.input;
    pe.fn.extend({
        attr: function (e, t) {
            return Pe(this, pe.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? At : jt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(Se);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? qt && Ot || !Lt.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ot ? n : r)
        }
    }), At = {
        set: function (e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : qt && Ot || !Lt.test(n) ? e.setAttribute(!Ot && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Dt[t] || pe.find.attr;
        qt && Ot || !Lt.test(t) ? Dt[t] = function (e, t, r) {
            var i, o;
            return r || (o = Dt[t], Dt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Dt[t] = o), i
        } : Dt[t] = function (e, t, n) {
            if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), qt && Ot || (pe.attrHooks.value = {
        set: function (e, t, n) {
            if (!pe.nodeName(e, "input")) return jt && jt.set(e, t, n);
            e.defaultValue = t
        }
    }), Ot || (jt = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Dt.id = Dt.name = Dt.coords = function (e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, pe.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        }, set: jt.set
    }, pe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            jt.set(e, "" !== t && t, n)
        }
    }, pe.each(["width", "height"], function (e, t) {
        pe.attrHooks[t] = {
            set: function (e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), de.style || (pe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Mt = /^(?:input|select|textarea|button|object)$/i, Ht = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function (e, t) {
            return Pe(this, pe.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = pe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {
                }
            })
        }
    }), pe.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), de.hrefNormalized || pe.each(["href", "src"], function (e, t) {
        pe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        pe.propFix[this.toLowerCase()] = this
    }), de.enctype || (pe.propFix.enctype = "encoding");
    var Pt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).addClass(e.call(this, t, z(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(Se) || []; n = this[l++];) if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                s = pe.trim(r), i !== s && pe.attr(n, "class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, l = 0;
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).removeClass(e.call(this, t, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Se) || []; n = this[l++];) if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
                for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                s = pe.trim(r), i !== s && pe.attr(n, "class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
                pe(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = pe(this), o = e.match(Se) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || (t = z(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + z(n) + " ").replace(Pt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        pe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var It = e.location, Bt = pe.now(), Ft = /\?/,
        Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null, i = pe.trim(t + "");
        return i && !pe.trim(i.replace(Wt, function (e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var Rt = /#.*$/, $t = /([?&])_=[^&]*/, zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Vt = /^(?:GET|HEAD)$/, Xt = /^\/\//,
        Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Jt = {}, Yt = {}, Gt = "*/".concat("*"),
        Qt = It.href, Zt = Kt.exec(Qt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Qt,
            type: "GET",
            isLocal: Ut.test(Zt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": pe.parseJSON, "text xml": pe.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? X(X(e, pe.ajaxSettings), t) : X(pe.ajaxSettings, e)
        },
        ajaxPrefilter: U(Jt),
        ajaxTransport: U(Yt),
        ajax: function (t, n) {
            function r(t, n, r, i) {
                var o, d, y, b, x, C = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), u = void 0, s = i || "", k.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, r && (b = K(p, k, r)), b = J(p, b, k, o), o ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (pe.lastModified[a] = x), (x = k.getResponseHeader("etag")) && (pe.etag[a] = x)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, o = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || C) + "", o ? m.resolveWith(f, [d, C, k]) : m.rejectWith(f, [k, C, y]), k.statusCode(g), g = void 0, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [k, p, o ? d : y]), v.fireWith(f, [k, C]), c && (h.trigger("ajaxComplete", [k, p]), --pe.active || pe.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, l, c, u, d, p = pe.ajaxSetup({}, n), f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? pe(f) : pe.event, m = pe.Deferred(),
                v = pe.Callbacks("once memory"), g = p.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled", k = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!d) for (d = {}; t = zt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, y[e] = t), this
                    }, overrideMimeType: function (e) {
                        return w || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (w < 2) for (t in e) g[t] = [g[t], e[t]]; else k.always(e[k.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || x;
                        return u && u.abort(t), r(0, t), this
                    }
                };
            if (m.promise(k).complete = v.add, k.success = k.done, k.error = k.fail, p.url = ((t || p.url || Qt) + "").replace(Rt, "").replace(Xt, Zt[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = pe.trim(p.dataType || "*").toLowerCase().match(Se) || [""], null == p.crossDomain && (i = Kt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Zt[1] && i[2] === Zt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Zt[3] || ("http:" === Zt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)), V(Jt, p, n, k), 2 === w) return k;
            c = pe.event && p.global, c && 0 == pe.active++ && pe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Vt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Ft.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = $t.test(a) ? a.replace($t, "$1_=" + Bt++) : a + (Ft.test(a) ? "&" : "?") + "_=" + Bt++)), p.ifModified && (pe.lastModified[a] && k.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && k.setRequestHeader("If-None-Match", pe.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) k.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || 2 === w)) return k.abort();
            x = "abort";
            for (o in {success: 1, error: 1, complete: 1}) k[o](p[o]);
            if (u = V(Yt, p, n, k)) {
                if (k.readyState = 1, c && h.trigger("ajaxSend", [k, p]), 2 === w) return k;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    k.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, u.send(y, r)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return k
        },
        getJSON: function (e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function (e, t) {
        pe[t] = function (e, n, r, i) {
            return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function (e) {
        return pe.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, pe.fn.extend({
        wrapAll: function (e) {
            if (pe.isFunction(e)) return this.each(function (t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return pe.isFunction(e) ? this.each(function (t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = pe(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = pe.isFunction(e);
            return this.each(function (n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function (e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : G(e)
    }, pe.expr.filters.visible = function (e) {
        return !pe.expr.filters.hidden(e)
    };
    var en = /%20/g, tn = /\[\]$/, nn = /\r?\n/g, rn = /^(?:submit|button|image|reset|file)$/i,
        on = /^(?:input|select|textarea|keygen)/i;
    pe.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) Q(n, e[n], t, i);
        return r.join("&").replace(en, "+")
    }, pe.fn.extend({
        serialize: function () {
            return pe.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && on.test(this.nodeName) && !rn.test(e) && (this.checked || !Ie.test(e))
            }).map(function (e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
                    return {name: t.name, value: e.replace(nn, "\r\n")}
                }) : {name: t.name, value: n.replace(nn, "\r\n")}
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var an = 0, sn = {}, ln = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in sn) sn[e](void 0, !0)
    }), de.cors = !!ln && "withCredentials" in ln, ln = de.ajax = !!ln, ln && pe.ajaxTransport(function (t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function (r, i) {
                    var o, a = t.xhr(), s = ++an;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null), n = function (e, r) {
                        var o, l, c;
                        if (n && (r || 4 === a.readyState)) if (delete sn[s], n = void 0, a.onreadystatechange = pe.noop, r) 4 !== a.readyState && a.abort(); else {
                            c = {}, o = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                            try {
                                l = a.statusText
                            } catch (e) {
                                l = ""
                            }
                            o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                        }
                        c && i(o, l, c, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = sn[s] = n : n()
                }, abort: function () {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = re.head || pe("head")[0] || re.documentElement;
            return {
                send: function (r, i) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var cn = [], un = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = cn.pop() || pe.expando + "_" + Bt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a,
            s = !1 !== t.jsonp && (un.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && un.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(un, "$1" + i) : !1 !== t.jsonp && (t.url += (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || pe.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, cn.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), pe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || re;
        var r = xe.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = g([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes))
    };
    var dn = pe.fn.load;
    pe.fn.load = function (e, t, n) {
        if ("string" != typeof e && dn) return dn.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        pe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function (e) {
        return pe.grep(pe.timers, function (t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, l, c, u = pe.css(e, "position"), d = pe(e), p = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), o = pe.css(e, "top"), l = pe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && pe.inArray("auto", [o, l]) > -1, c ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, pe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument;
            if (o) return t = o.documentElement, pe.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(r, "marginTop", !0),
                    left: t.left - n.left - pe.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || dt
            })
        }
    }), pe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function (r) {
            return Pe(this, function (e, r, i) {
                var o = te(e);
                if (void 0 === i) return o ? t in o ? o[t] : o.document.documentElement[r] : e[r];
                o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }), pe.each(["top", "left"], function (e, t) {
        pe.cssHooks[t] = D(de.pixelPosition, function (e, n) {
            if (n) return n = ft(e, t), ct.test(n) ? pe(e).position()[t] + "px" : n
        })
    }), pe.each({Height: "height", Width: "width"}, function (e, t) {
        pe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            pe.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === i ? "margin" : "border");
                return Pe(this, function (t, n, r) {
                    var i;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), pe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function () {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return pe
    });
    var pn = e.jQuery, fn = e.$;
    return pe.noConflict = function (t) {
        return e.$ === pe && (e.$ = fn), t && e.jQuery === pe && (e.jQuery = pn), pe
    }, t || (e.jQuery = e.$ = pe), pe
}), window.Modernizr = function (e, t, n) {
    function r(e) {
        m.cssText = e
    }

    function i(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function a(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!o(i, "-") && m[i] !== n) return "pfx" != t || i
        }
        return !1
    }

    function s(e, t, r) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== n) return !1 === r ? e[o] : i(a, "function") ? a.bind(r || t) : a
        }
        return !1
    }

    function l(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), o = (e + " " + y.join(r + " ") + r).split(" ");
        return i(t, "string") || i(t, "undefined") ? a(o, t) : (o = (e + " " + b.join(r + " ") + r).split(" "), s(o, t, n))
    }

    var c, u, d = {}, p = t.documentElement, f = "modernizr", h = t.createElement(f), m = h.style,
        v = " -webkit- -moz- -o- -ms- ".split(" "), g = "Webkit Moz O ms", y = g.split(" "),
        b = g.toLowerCase().split(" "), w = {}, x = [], k = x.slice, C = function (e, n, r, i) {
            var o, a, s, l, c = t.createElement("div"), u = t.body, d = u || t.createElement("body");
            if (parseInt(r, 10)) for (; r--;) s = t.createElement("div"), s.id = i ? i[r] : f + (r + 1), c.appendChild(s);
            return o = ["&#173;", '<style id="s', f, '">', e, "</style>"].join(""), c.id = f, (u ? c : d).innerHTML += o, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = p.style.overflow, p.style.overflow = "hidden", p.appendChild(d)), a = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), p.style.overflow = l), !!a
        }, T = function (t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t) && n(t).matches || !1;
            var r;
            return C("@media " + t + " { #" + f + " { position: absolute; } }", function (t) {
                r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), r
        }, E = {}.hasOwnProperty;
    u = i(E, "undefined") || i(E.call, "undefined") ? function (e, t) {
        return t in e && i(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return E.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = k.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var i = function () {
                };
                i.prototype = t.prototype;
                var o = new i, a = t.apply(o, n.concat(k.call(arguments)));
                return Object(a) === a ? a : o
            }
            return t.apply(e, n.concat(k.call(arguments)))
        };
        return r
    }), w.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : C(["@media (", v.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, w.cssanimations = function () {
        return l("animationName")
    }, w.localstorage = function () {
        try {
            return localStorage.setItem(f, f), localStorage.removeItem(f), !0
        } catch (e) {
            return !1
        }
    };
    for (var N in w) u(w, N) && (c = N.toLowerCase(), d[c] = w[N](), x.push((d[c] ? "" : "no-") + c));
    return d.addTest = function (e, t) {
        if ("object" == typeof e) for (var r in e) u(e, r) && d.addTest(r, e[r]); else {
            if (e = e.toLowerCase(), d[e] !== n) return d;
            t = "function" == typeof t ? t() : t, "undefined" != typeof enableClasses && enableClasses && (p.className += " " + (t ? "" : "no-") + e), d[e] = t
        }
        return d
    }, r(""), h = null, d._version = "2.8.3", d._prefixes = v, d._domPrefixes = b, d._cssomPrefixes = y, d.mq = T, d.testProp = function (e) {
        return a([e])
    }, d.testAllProps = l, d.testStyles = C, d
}(this, this.document), Modernizr.addTest("cookies", function () {
    if (navigator.cookieEnabled) return !0;
    document.cookie = "cookietest=1";
    var e = -1 != document.cookie.indexOf("cookietest=");
    return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
}), Modernizr.addTest("mediaqueries", Modernizr.mq("only all")), define("modernizr", function (e) {
    return function () {
        return e.Modernizr
    }
}(this)), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define("preact", ["exports"], t) : t(e.preact = {})
}(this, function (e) {
    "use strict";

    function t(e, t) {
        var n = O, r = void 0, i = void 0, o = void 0, a = void 0;
        for (a = arguments.length; a-- > 2;) L.push(arguments[a]);
        for (t && null != t.children && (L.length || L.push(t.children), delete t.children); L.length;) if ((i = L.pop()) && void 0 !== i.pop) for (a = i.length; a--;) L.push(i[a]); else "boolean" == typeof i && (i = null), (o = "function" != typeof e) && (null == i ? i = "" : "number" == typeof i ? i = String(i) : "string" != typeof i && (o = !1)), o && r ? n[n.length - 1] += i : n === O ? n = [i] : n.push(i), r = o;
        var s = new A;
        return s.nodeName = e, s.children = n, s.attributes = null == t ? void 0 : t, s.key = null == t ? void 0 : t.key, void 0 !== D.vnode && D.vnode(s), s
    }

    function n(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function r(e, t) {
        e && ("function" == typeof e ? e(t) : e.current = t)
    }

    function i(e, r) {
        return t(e.nodeName, n(n({}, e.attributes), r), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
    }

    function o(e) {
        !e._dirty && (e._dirty = !0) && 1 == W.push(e) && (D.debounceRendering || q)(a)
    }

    function a() {
        for (var e = void 0; e = W.pop();) e._dirty && T(e)
    }

    function s(e, t, n) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName
    }

    function l(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function c(e) {
        var t = n({}, e.attributes);
        t.children = e.children;
        var r = e.nodeName.defaultProps;
        if (void 0 !== r) for (var i in r) void 0 === t[i] && (t[i] = r[i]);
        return t
    }

    function u(e, t) {
        var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
        return n.normalizedNodeName = e, n
    }

    function d(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function p(e, t, n, i, o) {
        if ("className" === t && (t = "class"), "key" === t) ; else if ("ref" === t) r(n, null), r(i, e); else if ("class" !== t || o) if ("style" === t) {
            if (i && "string" != typeof i && "string" != typeof n || (e.style.cssText = i || ""), i && "object" == typeof i) {
                if ("string" != typeof n) for (var a in n) a in i || (e.style[a] = "");
                for (var s in i) e.style[s] = "number" == typeof i[s] && !1 === F.test(s) ? i[s] + "px" : i[s]
            }
        } else if ("dangerouslySetInnerHTML" === t) i && (e.innerHTML = i.__html || ""); else if ("o" == t[0] && "n" == t[1]) {
            var l = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2), i ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e._listeners || (e._listeners = {}))[t] = i
        } else if ("list" !== t && "type" !== t && !o && t in e) {
            try {
                e[t] = null == i ? "" : i
            } catch (e) {
            }
            null != i && !1 !== i || "spellcheck" == t || e.removeAttribute(t)
        } else {
            var c = o && t !== (t = t.replace(/^xlink:?/, ""));
            null == i || !1 === i ? c ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof i && (c ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), i) : e.setAttribute(t, i))
        } else e.className = i || ""
    }

    function f(e) {
        return this._listeners[e.type](D.event && D.event(e) || e)
    }

    function h() {
        for (var e = void 0; e = R.shift();) D.afterMount && D.afterMount(e), e.componentDidMount && e.componentDidMount()
    }

    function m(e, t, n, r, i, o) {
        $++ || (z = null != i && void 0 !== i.ownerSVGElement, U = null != e && !(B in e));
        var a = v(e, t, n, r, o);
        return i && a.parentNode !== i && i.appendChild(a), --$ || (U = !1, o || h()), a
    }

    function v(e, t, n, r, i) {
        var o = e, a = z;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || i) ? e.nodeValue != t && (e.nodeValue = t) : (o = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(o, e), y(e, !0))), o[B] = !0, o;
        var s = t.nodeName;
        if ("function" == typeof s) return E(e, t, n, r);
        if (z = "svg" === s || "foreignObject" !== s && z, s = String(s), (!e || !l(e, s)) && (o = u(s, z), e)) {
            for (; e.firstChild;) o.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(o, e), y(e, !0)
        }
        var c = o.firstChild, d = o[B], p = t.children;
        if (null == d) {
            d = o[B] = {};
            for (var f = o.attributes, h = f.length; h--;) d[f[h].name] = f[h].value
        }
        return !U && p && 1 === p.length && "string" == typeof p[0] && null != c && void 0 !== c.splitText && null == c.nextSibling ? c.nodeValue != p[0] && (c.nodeValue = p[0]) : (p && p.length || null != c) && g(o, p, n, r, U || null != d.dangerouslySetInnerHTML), w(o, t.attributes, d), z = a, o
    }

    function g(e, t, n, r, i) {
        var o = e.childNodes, a = [], l = {}, c = 0, u = 0, p = o.length, f = 0, h = t ? t.length : 0, m = void 0,
            g = void 0, b = void 0, w = void 0, x = void 0;
        if (0 !== p) for (var k = 0; k < p; k++) {
            var C = o[k], T = C[B], E = h && T ? C._component ? C._component.__key : T.key : null;
            null != E ? (c++, l[E] = C) : (T || (void 0 !== C.splitText ? !i || C.nodeValue.trim() : i)) && (a[f++] = C)
        }
        if (0 !== h) for (var N = 0; N < h; N++) {
            w = t[N], x = null;
            var S = w.key;
            if (null != S) c && void 0 !== l[S] && (x = l[S], l[S] = void 0, c--); else if (u < f) for (m = u; m < f; m++) if (void 0 !== a[m] && s(g = a[m], w, i)) {
                x = g, a[m] = void 0, m === f - 1 && f--, m === u && u++;
                break
            }
            x = v(x, w, n, r), b = o[N], x && x !== e && x !== b && (null == b ? e.appendChild(x) : x === b.nextSibling ? d(b) : e.insertBefore(x, b))
        }
        if (c) for (var _ in l) void 0 !== l[_] && y(l[_], !1);
        for (; u <= f;) void 0 !== (x = a[f--]) && y(x, !1)
    }

    function y(e, t) {
        var n = e._component;
        n ? N(n) : (null != e[B] && r(e[B].ref, null), !1 !== t && null != e[B] || d(e), b(e))
    }

    function b(e) {
        for (e = e.lastChild; e;) {
            var t = e.previousSibling;
            y(e, !0), e = t
        }
    }

    function w(e, t, n) {
        var r = void 0;
        for (r in n) t && null != t[r] || null == n[r] || p(e, r, n[r], n[r] = void 0, z);
        for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || p(e, r, n[r], n[r] = t[r], z)
    }

    function x(e, t, n) {
        var r = void 0, i = V.length;
        for (e.prototype && e.prototype.render ? (r = new e(t, n), S.call(r, t, n)) : (r = new S(t, n), r.constructor = e, r.render = k); i--;) if (V[i].constructor === e) return r.nextBase = V[i].nextBase, V.splice(i, 1), r;
        return r
    }

    function k(e, t, n) {
        return this.constructor(e, n)
    }

    function C(e, t, n, i, a) {
        e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || a ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = i), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, n !== M && (n !== H && !1 === D.syncComponentUpdates && e.base ? o(e) : T(e, H, a)), r(e.__ref, e))
    }

    function T(e, t, r, i) {
        if (!e._disable) {
            var o = e.props, a = e.state, s = e.context, l = e.prevProps || o, u = e.prevState || a,
                d = e.prevContext || s, p = e.base, f = e.nextBase, v = p || f, g = e._component, b = !1, w = d,
                k = void 0, E = void 0, S = void 0;
            if (e.constructor.getDerivedStateFromProps && (a = n(n({}, a), e.constructor.getDerivedStateFromProps(o, a)), e.state = a), p && (e.props = l, e.state = u, e.context = d, t !== P && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(o, a, s) ? b = !0 : e.componentWillUpdate && e.componentWillUpdate(o, a, s), e.props = o, e.state = a, e.context = s), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !b) {
                k = e.render(o, a, s), e.getChildContext && (s = n(n({}, s), e.getChildContext())), p && e.getSnapshotBeforeUpdate && (w = e.getSnapshotBeforeUpdate(l, u));
                var _ = k && k.nodeName, j = void 0, A = void 0;
                if ("function" == typeof _) {
                    var L = c(k);
                    E = g, E && E.constructor === _ && L.key == E.__key ? C(E, L, H, s, !1) : (j = E, e._component = E = x(_, L, s), E.nextBase = E.nextBase || f, E._parentComponent = e, C(E, L, M, s, !1), T(E, H, r, !0)), A = E.base
                } else S = v, j = g, j && (S = e._component = null), (v || t === H) && (S && (S._component = null), A = m(S, k, s, r || !p, v && v.parentNode, !0));
                if (v && A !== v && E !== g) {
                    var O = v.parentNode;
                    O && A !== O && (O.replaceChild(A, v), j || (v._component = null, y(v, !1)))
                }
                if (j && N(j), e.base = A, A && !i) {
                    for (var q = e, I = e; I = I._parentComponent;) (q = I).base = A;
                    A._component = q, A._componentConstructor = q.constructor
                }
            }
            for (!p || r ? R.push(e) : b || (e.componentDidUpdate && e.componentDidUpdate(l, u, w), D.afterUpdate && D.afterUpdate(e)); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
            $ || i || h()
        }
    }

    function E(e, t, n, r) {
        for (var i = e && e._component, o = i, a = e, s = i && e._componentConstructor === t.nodeName, l = s, u = c(t); i && !l && (i = i._parentComponent);) l = i.constructor === t.nodeName;
        return i && l && (!r || i._component) ? (C(i, u, I, n, r), e = i.base) : (o && !s && (N(o), e = a = null), i = x(t.nodeName, u, n), e && !i.nextBase && (i.nextBase = e, a = null), C(i, u, H, n, r), e = i.base, a && e !== a && (a._component = null, y(a, !1))), e
    }

    function N(e) {
        D.beforeUnmount && D.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var n = e._component;
        n ? N(n) : t && (null != t[B] && r(t[B].ref, null), e.nextBase = t, d(t), V.push(e), b(t)), r(e.__ref, null)
    }

    function S(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
    }

    function _(e, t, n) {
        return m(n, e, {}, !1, t, !1)
    }

    function j() {
        return {}
    }

    var A = function () {
        }, D = {}, L = [], O = [],
        q = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout, M = 0, H = 1,
        P = 2, I = 3, B = "__preactattr_", F = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, W = [], R = [],
        $ = 0, z = !1, U = !1, V = [];
    n(S.prototype, {
        setState: function (e, t) {
            this.prevState || (this.prevState = this.state), this.state = n(n({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), o(this)
        }, forceUpdate: function (e) {
            e && this._renderCallbacks.push(e), T(this, P)
        }, render: function () {
        }
    });
    var X = {h: t, createElement: t, cloneElement: i, createRef: j, Component: S, render: _, rerender: a, options: D};
    e.default = X, e.h = t, e.createElement = t, e.cloneElement = i, e.createRef = j, e.Component = S, e.render = _, e.rerender = a, e.options = D, Object.defineProperty(e, "__esModule", {value: !0})
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("preact")) : "function" == typeof define && define.amd ? define("preactAnimate", ["preact"], t) : e.animate = t(e.preact)
}(this, function (e) {
    "use strict";

    function t(e, t) {
        function n() {
            this.constructor = e
        }

        H(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function n(e) {
        return e && e.attributes
    }

    function r(e) {
        return e && e.base
    }

    function i(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === toString.call(e)
    }

    function o(e) {
        return e && e.hasOwnProperty("nodeName")
    }

    function a(e, t, n) {
        return null == e ? null : (n && n !== e && (t = t.bind(n)), Array.prototype.forEach.call(e, t))
    }

    function s(e, t) {
        var n = null;
        return a(e, function (e) {
            if (!n) {
                var r = e && e.key;
                r && r === t && (n = e)
            }
        }), n
    }

    function l(e, t, r) {
        var i = null;
        return a(e, function (e) {
            var o = e && e.key;
            if (o && o === t && n(e)[r]) {
                if (i) throw new TypeError("two child with same key for <Animate> children");
                i = e
            }
        }), i
    }

    function c(e, t, r) {
        var i = e.length === t.length;
        return i && a(e, function (e, o) {
            var a = t[o];
            e && a && (e && !a || !e && a ? i = !1 : e.key !== a.key ? i = !1 : r && n(e)[r] !== n(a)[r] && (i = !1))
        }), i
    }

    function u(e, t) {
        var n = [], r = {}, i = [];
        return a(e, function (e) {
            var n = e && e.key;
            e && s(t, n) ? i.length && (r[n] = i, i = []) : i.push(e)
        }), a(t, function (e) {
            var t = e && e.key;
            e && r.hasOwnProperty(t) && (n = n.concat(r[t])), n.push(e)
        }), n = n.concat(i)
    }

    function d(e, t, r, i, o) {
        void 0 === o && (o = !1);
        var a = e && s(t, i), c = !1;
        if (r) {
            var u = n(e)[r];
            if (a) {
                var d = l(t, i, r);
                o ? d && u && (c = !0) : !d && u && (c = !0)
            } else u && (c = !0)
        } else a || (c = !0);
        return c
    }

    function p(e, t) {
        for (var n = window.getComputedStyle(e, null), r = "", i = 0, o = V; i < o.length; i++) {
            var a = o[i];
            if (r = n.getPropertyValue(a + t)) break
        }
        return r
    }

    function f(e) {
        var t = parseFloat(p(e, "transition-delay")) || 0, n = parseFloat(p(e, "transition-duration")) || 0,
            r = parseFloat(p(e, "animation-delay")) || 0, i = parseFloat(p(e, "animation-duration")) || 0;
        return Math.max(n + t, i + r)
    }

    function h(e, t) {
        t || (t = {});
        for (var n = 0, r = $; n < r.length; n++) {
            var i = r[n], o = "on" + i;
            o in e && (t[o] = e[o], delete e[o])
        }
        var a = e.class || e.className, s = t.class || t.className;
        return a && s ? a += " " + s : a = a || s, a && (t.className = a), t
    }

    function m(e, t) {
        if (0 === $.length) return void window.setTimeout(t, 0);
        $.forEach(function (n) {
            e["on" + n] = t
        })
    }

    function v(e) {
        if (X) {
            var t = r(e), n = f(t);
            e.rcEndAnimTimeout = setTimeout(function () {
                e.rcEndAnimTimeout = null, e.rcEndListener && e.rcEndListener()
            }, 1e3 * n + 200)
        }
    }

    function g(e) {
        e.rcEndAnimTimeout && (clearTimeout(e.rcEndAnimTimeout), e.rcEndAnimTimeout = null)
    }

    function y(t, r, i, o) {
        var a = void 0 === r ? "undefined" : "object" == typeof r, s = a ? r.name : r, l = a ? r.active : r + "-active",
            c = i, u = void 0, d = void 0;
        i && "[object Object]" === Object.prototype.toString.call(i) && (c = i.end, u = i.start, d = i.active);
        var p = W.only(t.props.children), f = n(p), h = f.class || f.className, y = [];
        h && y.push(h), y.push(s);
        var b = {};
        t.rcEndListener = function (e) {
            t.rcAnimTimeout && (clearTimeout(t.rcAnimTimeout), t.rcAnimTimeout = null), g(t), t.renderFlag = !0, p = t.lastChilden || p, t.lastChilden = null, t.setState({child: p}, function () {
                t.rcEndListener = null, c && c()
            })
        };
        var w = function () {
            return P({className: y.join(" ")}, b)
        };
        return m(b, t.rcEndListener), u && u(), t.setState({child: e.cloneElement(p, w())}, function () {
            t.renderFlag = !1, t.rcAnimTimeout = setTimeout(function () {
                t.rcAnimTimeout = null, y.push(l), t.renderFlag = !0, t.setState({child: e.cloneElement(p, w())}, function () {
                    d && setTimeout(d, 0), t.renderFlag = !1
                }), o && v(t)
            }, 30)
        }), {
            stop: function () {
                t.rcEndListener && t.rcEndListener()
            }
        }
    }

    function b(e, t, n) {
        e.addEventListener(t, n, !1)
    }

    function w(e, t, n) {
        e.removeEventListener(t, n, !1)
    }

    function x(e) {
        if (U) {
            var t = f(e);
            e.rcEndAnimTimeout = setTimeout(function () {
                e.rcEndAnimTimeout = null, e.rcEndListener && e.rcEndListener()
            }, 1e3 * t + 200)
        }
    }

    function k(e) {
        e.rcEndAnimTimeout && (clearTimeout(e.rcEndAnimTimeout), e.rcEndAnimTimeout = null)
    }

    function C(e, t, n, r) {
        var i = void 0 === t ? "undefined" : "object" == typeof t, o = i ? t.name : t, a = i ? t.active : t + "-active",
            s = n, l = void 0, c = void 0, u = new G(e);
        return n && "[object Object]" === Object.prototype.toString.call(n) && (s = n.end, l = n.start, c = n.active), e.rcEndListener && e.rcEndListener(), e.rcEndListener = function (t) {
            t && t.target !== e || (e.rcAnimTimeout && (clearTimeout(e.rcAnimTimeout), e.rcAnimTimeout = null), k(e), u.remove(o), u.remove(a), r && Q.removeEndEventListener(e, e.rcEndListener), e.rcEndListener = null, s && s())
        }, r && Q.addEndEventListener(e, e.rcEndListener), l && l(), u.add(o), e.rcAnimTimeout = setTimeout(function () {
            e.rcAnimTimeout = null, u.add(a), c && setTimeout(c, 0), r && x(e)
        }, 30), {
            stop: function () {
                e.rcEndListener && e.rcEndListener()
            }
        }
    }

    function T(e, t) {
        return (t || e.transitionName) && e.transitionAppear || e.animation.appear
    }

    function E(e, t) {
        return (t || e.transitionName) && e.transitionEnter || e.animation.enter
    }

    function N(e, t) {
        return (t || e.transitionName) && e.transitionLeave || e.animation.leave
    }

    function S(e, t) {
        return (t || e.transitionName) && e.transitionDisappear || e.animation.disappear
    }

    function _(e) {
        return e.transitionAppear || e.animation.appear
    }

    function j(e) {
        return e.transitionEnter || e.animation.enter
    }

    function A(e) {
        return e.transitionLeave || e.animation.leave
    }

    function D(e) {
        return e.transitionDisappear || e.animation.disappear
    }

    function L(e) {
        var t = r(e);
        t && t.style && (t.style.display && "" !== t.style.display && (e.displayCss = t.style.display), t.style.display = "none")
    }

    function O(e) {
        var t = r(e);
        t && t.style && (e.displayCss && "" !== e.displayCss && "none" !== e.displayCss ? t.style.display = e.displayCss : t.style.display = "")
    }

    function q(e, t) {
        return e.showProp && !e.disableShow && !t.disableShow
    }

    function M(t) {
        var n = t.children, r = [];
        return W.forEach(n, function (t) {
            o(t) && (t.key || (t = e.cloneElement(t, {key: ne})), r.push(t))
        }), r
    }

    var H = function (e, t) {
        return (H = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, P = function () {
        return P = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, P.apply(this, arguments)
    }, I = Array.prototype.map, B = Array.prototype.forEach, F = Array.prototype.slice, W = {
        map: function (e, t, n) {
            return null == e ? null : (i(e) || (e = [e]), n && n !== e && (t = t.bind(n)), I.call(e, t))
        }, forEach: function (e, t, n) {
            return null == e ? null : (i(e) || (e = [e]), n && n !== e && (t = t.bind(n)), B.call(e, t))
        }, count: function (e) {
            return null == e ? 0 : i(e) ? e.length : 1
        }, only: function (e) {
            if (null != e && !i(e)) return e;
            if (i(e) && 1 === e.length) return e[0];
            throw new TypeError("Children.only() expects only one child.")
        }, toArray: function (e) {
            return null == e ? [] : i(e) ? F.call(e) : [e]
        }
    }, R = {
        transitionend: {
            transition: "TransitionEnd",
            WebkitTransition: "WebkitTransitionEnd",
            MozTransition: "MozTransitionEnd",
            OTransition: "OTransitionEnd",
            msTransition: "MSTransitionEnd"
        },
        animationend: {
            animation: "AnimationEnd",
            WebkitAnimation: "WebkitAnimationEnd",
            MozAnimation: "MozAnimationEnd",
            OAnimation: "OAnimationEnd",
            msAnimation: "MSAnimationEnd"
        }
    }, $ = [];
    "undefined" != typeof window && "undefined" != typeof document && function () {
        var e = document.createElement("div"), t = e.style;
        "AnimationEvent" in window || delete R.animationend.animation, "TransitionEvent" in window || delete R.transitionend.transition;
        for (var n in R) if (R.hasOwnProperty(n)) {
            var r = R[n];
            for (var i in r) if (i in t) {
                $.push(r[i]);
                break
            }
        }
    }();
    var z, U = 0 !== $.length, V = ["-webkit-", "-moz-", "-o-", "ms-", ""], X = 0 !== $.length, K = /\s+/,
        J = Object.prototype.toString, Y = function (e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
            return -1
        }, G = function () {
            function e(e) {
                if (!e || !e.nodeType) throw new Error("A DOM element reference is required");
                this.el = e, this.list = e.classList
            }

            return e.prototype.add = function (e) {
                if (this.list) return this.list.add(e), this;
                var t = this.array();
                return -1 === Y(t, e) && t.push(e), this.el.className = t.join(" "), this
            }, e.prototype.remove = function (e) {
                if ("[object RegExp]" === J.call(e)) return this.removeMatching(e);
                if (this.list) return this.list.remove(e), this;
                var t = this.array(), n = Y(t, e);
                return -1 !== n && t.splice(n, 1), this.el.className = t.join(" "), this
            }, e.prototype.removeMatching = function (e) {
                for (var t = this.array(), n = 0, r = t; n < r.length; n++) {
                    var i = r[n];
                    e.test(i) && this.remove(i)
                }
                return this
            }, e.prototype.array = function () {
                var e = this.el.getAttribute("class") || "", t = e.replace(/^\s+|\s+$/g, ""), n = t.split(K);
                return "" === n[0] && n.shift(), n
            }, e
        }(), Q = {
            addEndEventListener: function (e, t) {
                if (0 === $.length) return void window.setTimeout(t, 0);
                $.forEach(function (n) {
                    b(e, n, t)
                })
            }, endEvents: $, removeEndEventListener: function (e, t) {
                0 !== $.length && $.forEach(function (n) {
                    w(e, n, t)
                })
            }
        }, Z = {
            isAppearSupported: T,
            isEnterSupported: E,
            isDisappearSupported: S,
            isLeaveSupported: N,
            allowAppearCallback: _,
            allowEnterCallback: j,
            allowLeaveCallback: A,
            allowDisappearCallback: D,
            findDOMNode: r,
            addDisplyNone: L,
            removeDisplyNone: O,
            isDisplyShow: q
        }, ee = {
            enter: "transitionEnter",
            appear: "transitionAppear",
            leave: "transitionLeave",
            disappear: "transitionDisappear"
        }, te = function (e) {
            function i(t, r) {
                var i = e.call(this, t, r) || this;
                i.transitionName = null;
                var o = W.only(t.children), a = n(o);
                return i.transitionName = a && a.transitionName, i.isRender = a && a.isRender, i.renderFlag = !0, i.state = {
                    child: o,
                    self: i
                }, i
            }

            return t(i, e), i.getDerivedStateFromProps = function (e, t) {
                var r = W.only(e.children), i = n(r), o = t.self;
                return o.transitionName = i && i.transitionName, o.isRender = !(!i || !i.isRender), o.renderFlag || (o.lastChilden = r), {child: r}
            }, i.prototype.shouldComponentUpdate = function (e, t) {
                return this.renderFlag
            }, i.prototype.componentWillReceiveProps = function (e) {
                var t = i.getDerivedStateFromProps(e, this.state);
                t && this.setState(t)
            }, i.prototype.componentWillUnmount = function () {
                this.stop(), Z.removeDisplyNone(this)
            }, i.prototype.togglerDisply = function (e) {
                this.props.displyShow && (e ? Z.removeDisplyNone(this) : Z.addDisplyNone(this))
            }, i.prototype.componentWillEnter = function (e) {
                Z.isEnterSupported(this.props, this.transitionName) ? (this.togglerDisply(!0), this.transition("enter", e)) : (this.togglerDisply(!0), e())
            }, i.prototype.componentWillAppear = function (e) {
                Z.isAppearSupported(this.props, this.transitionName) ? (this.togglerDisply(!0), this.transition("appear", e)) : (this.togglerDisply(!0), e())
            }, i.prototype.componentWillDisappear = function (e) {
                var t = this;
                Z.isDisappearSupported(this.props, this.transitionName) ? this.transition("disappear", function () {
                    t.togglerDisply(!1), e()
                }) : (this.togglerDisply(!1), e())
            }, i.prototype.componentWillLeave = function (e) {
                var t = this;
                Z.isLeaveSupported(this.props, this.transitionName) ? this.transition("leave", function () {
                    t.togglerDisply(!1), e()
                }) : (this.togglerDisply(!1), e())
            }, i.prototype.transition = function (e, t) {
                var n = this, i = r(this);
                if (!i || 3 === i.nodeType) return void t();
                var o = this.props, a = this.transitionName || o.transitionName, s = "object" == typeof a;
                this.stop();
                var l = function () {
                    n.stopper && (n.stopper = null, t())
                };
                if ((X || !o.animation[e]) && a && o[ee[e]]) {
                    var c = s ? a[e] : a + "-" + e, u = c + "-active";
                    s && a[e + "Active"] && (u = a[e + "Active"]);
                    var d = !0, p = null;
                    o.onEnter && "enter" === e ? (d = !1, p = o.onEnter) : o.onLeave && "leave" === e ? (d = !1, p = o.onLeave) : o.onAppear && "appear" === e ? (d = !1, p = o.onAppear) : o.onDisappear && "disappear" === e && (d = !1, p = o.onDisappear), o.isRender || this.isRender ? this.stopper = y(this, {
                        name: c,
                        active: u
                    }, l, d) : this.stopper = C(i, {name: c, active: u}, l, d), !d && p && p(this, this.stop.bind(this))
                } else this.stopper = o.animation[e](i, l)
            }, i.prototype.stop = function () {
                var e = this.stopper;
                e && (this.stopper = null, e.stop())
            }, i.prototype.render = function () {
                return this.state.child
            }, i
        }(e.Component), ne = "rc_animate_" + Date.now();
    !function (e) {
        e[e.enter = 1] = "enter", e[e.leave = 2] = "leave", e[e.appear = 3] = "appear", e[e.disappear = 4] = "disappear"
    }(z || (z = {}));
    var re = ["className", "style"];
    return function (r) {
        function i(e, t) {
            var n = r.call(this, e, t) || this;
            n.performEnter = function (e) {
                var t = n.childrenRefs[e];
                t && (n.currentlyAnimatingKeys[e] = z.enter, Z.allowEnterCallback(n.props) && n.props.onBeforeEnter && n.props.onBeforeEnter(t), t.componentWillEnter(function () {
                    n.handleDoneAdding(e, z.enter)
                }))
            }, n.performLeave = function (e) {
                var t = n.childrenRefs[e];
                t && (n.currentlyAnimatingKeys[e] = z.leave, Z.allowLeaveCallback(n.props) && n.props.onBeforeLeave && n.props.onBeforeLeave(t), t.componentWillLeave(function () {
                    n.handleDoneLeaving(e, z.leave)
                }))
            }, n.performAppear = function (e) {
                var t = n.childrenRefs[e];
                t && (n.currentlyAnimatingKeys[e] = z.appear, Z.allowAppearCallback(n.props) && n.props.onBeforeAppear && n.props.onBeforeAppear(t), t.componentWillAppear(function () {
                    n.handleDoneAdding(e, z.appear)
                }))
            }, n.performDisappear = function (e) {
                var t = n.childrenRefs[e];
                t && (n.currentlyAnimatingKeys[e] = z.disappear, Z.allowDisappearCallback(n.props) && n.props.onBeforeDisappear && n.props.onBeforeDisappear(t), t.componentWillDisappear(function () {
                    n.handleDoneLeaving(e, z.disappear)
                }))
            }, n.handleDoneAdding = function (e, t) {
                var r = n.props;
                if (delete n.currentlyAnimatingKeys[e], !r.exclusive || r === n.nextProps) {
                    var i = M(r);
                    n.isValidChildByKey(i, e) ? t === z.appear ? Z.allowAppearCallback(r) && n.callLife(e, r.onAfterAppear) : Z.allowEnterCallback(r) && n.callLife(e, r.onAfterEnter) : n.performLeave(e)
                }
            }, n.handleDoneLeaving = function (e, t) {
                var r = n.props;
                if (delete n.currentlyAnimatingKeys[e], !r.exclusive || r === n.nextProps) {
                    var i = M(r);
                    if (n.isValidChildByKey(i, e)) n.performEnter(e); else {
                        var o = n.childrenRefs[e], a = function () {
                            t === z.leave ? Z.allowLeaveCallback(r) && n.callLife(e, r.onAfterLeave, o) : Z.allowDisappearCallback(r) && n.callLife(e, r.onAfterDisappear, o)
                        };
                        c(n.state.children, i, r.showProp) ? a() : (n.state.children = i, n.forceUpdate(a))
                    }
                }
            }, n.currentlyAnimatingKeys = {}, n.keysToEnter = [], n.keysToLeave = [];
            var i = M(e);
            return n.state = {children: i, self: n}, n.childrenRefs = {}, n
        }

        return t(i, r), i.getDerivedStateFromProps = function (t, r) {
            var i = r.self;
            i.nextProps = t;
            var o = M(t), l = i.props;
            l.exclusive && a(Object.keys(i.currentlyAnimatingKeys), function (e) {
                i.stop(e)
            });
            var c = l.showProp, p = i.currentlyAnimatingKeys, f = l.exclusive ? M(l) : i.state.children, h = [];
            return c ? (W.forEach(f, function (t) {
                var r, i = t && s(o, t.key), a = i || t;
                (r = i && n(i)[c] || !n(t)[c] ? i : e.cloneElement(a, (l = {}, l[c] = !0, l))) && h.push(r);
                var l
            }), a(o, function (e) {
                e && s(f, e.key) || h.push(e)
            })) : h = u(f, o), W.forEach(o, function (e) {
                var t = e && e.key;
                if (e && p[t]) {
                    var n = p[t];
                    return void (n !== z.leave && n !== z.disappear || d(e, f, c, t, !0) && (i.stop(t), i.keysToEnter.push(t)))
                }
                d(e, f, c, t) && i.keysToEnter.push(t)
            }), W.forEach(f, function (e) {
                var t = e.key;
                if (e && p[t]) {
                    var n = p[t];
                    return void (n !== z.enter && n !== z.appear || d(e, o, c, t) && (i.stop(t), i.keysToLeave.push(t)))
                }
                d(e, o, c, t) && i.keysToLeave.push(t)
            }), {children: h}
        }, i.prototype.componentDidMount = function () {
            var e = this, t = this.props.showProp, r = this.state.children, i = [], o = [];
            t ? W.forEach(r, function (e) {
                n(e)[t] ? i.push(e) : o.push(e)
            }) : i = r, W.forEach(i, function (t) {
                t && e.performAppear(t.key)
            }), W.forEach(o, function (t) {
                t && e.performDisappear(t.key)
            })
        }, i.prototype.componentWillReceiveProps = function (e, t) {
            var n = i.getDerivedStateFromProps(e, this.state);
            this.setState(n)
        }, i.prototype.componentDidUpdate = function () {
            var e = this.keysToEnter;
            this.keysToEnter = [], a(e, this.performEnter);
            var t = this.keysToLeave;
            this.keysToLeave = [], a(t, this.performLeave)
        }, i.prototype.callLife = function (e, t, n) {
            if (t) {
                t(this.childrenRefs[e] || n)
            }
        }, i.prototype.isValidChildByKey = function (e, t) {
            var n = this.props.showProp;
            return n ? l(e, t, n) : s(e, t)
        }, i.prototype.stop = function (e) {
            var t = this.currentlyAnimatingKeys[e];
            delete this.currentlyAnimatingKeys[e];
            var n = this.childrenRefs[e];
            n && (n.stop(), this.props.onAfterCancelled && this.props.onAfterCancelled(n, t))
        }, i.prototype.render = function () {
            var t = this, r = this.props;
            this.nextProps = r;
            var i = this.state.children, o = null;
            o = W.map(i, function (i) {
                if (null === i || void 0 === i) return i;
                var o = n(i), a = i && i.key || o && o.key;
                if (!a) throw new TypeError("must set key for <Animate> children");
                var s = function (e) {
                    t.childrenRefs[a] = e
                }, l = {
                    key: a,
                    rawKey: a,
                    ref: s,
                    animation: r.animation,
                    transitionDisappear: r.transitionDisappear,
                    transitionEnter: r.transitionEnter,
                    transitionAppear: r.transitionAppear,
                    transitionName: r.transitionName,
                    transitionLeave: r.transitionLeave,
                    onEnter: r.onEnter,
                    onLeave: r.onLeave,
                    onAppear: r.onAppear,
                    onDisappear: r.onDisappear,
                    isRender: r.isRender,
                    displyShow: !1
                };
                return Z.isDisplyShow(r, n(i)) && (l.displyShow = !0), e.h(te, l, i)
            });
            var a = r.component;
            if (a) {
                var s = r;
                if ("string" == typeof a) {
                    var l = {};
                    re.forEach(function (e) {
                        e in r && (l[e] = r[e])
                    }), s = P({}, l, r.componentProps)
                }
                return e.h(a, P({}, s), o)
            }
            return o && o[0]
        }, i.filterProps = h, i.defaultProps = {
            exclusive: !1,
            animation: {},
            component: "span",
            componentProps: {},
            transitionEnter: !0,
            transitionLeave: !0,
            transitionAppear: !1,
            transitionDisappear: !1,
            disableShow: !1,
            isRender: !1
        }, i
    }(e.Component)
}), define("dotcom/js/util/preactUtils", ["preact"], function (e) {
    function t(t) {
        function n() {
            e.Component.apply(this, arguments);
            for (var n in t) "render" !== n && "function" == typeof t[n] && (this[n] = t[n].bind(this));
            t.init && t.init.call(this, arguments[0])
        }

        n.prototype = new e.Component;
        for (var r in t) n.prototype[r] = t[r];
        return n.prototype.constructor = n, n
    }

    return {createClass: t}
}), define("dotcom/js/util/PreactIcons", ["preact", "dotcom/js/util/preactUtils"], function (e, t) {
    function n(e) {
        switch (e) {
            case"close":
                return r("svg", {viewBox: "0 0 25 25"}, r("path", {d: "M24.696 23.222L13.974 12.501 24.695 1.779A1.04 1.04 0 1023.222.306l-10.72 10.722L1.777.305A1.042 1.042 0 00.305 1.778L11.028 12.5.305 23.223a1.041 1.041 0 101.473 1.473l10.723-10.723 10.722 10.721a1.04 1.04 0 101.473-1.472z"}));
            case"menu":
                return r("svg", {viewBox: "0 0 24 15"}, r("path", {d: "M22.544 11.302a1.412 1.412 0 110 2.826H1.413a1.412 1.412 0 110-2.826zM1.413 5.652h21.131a1.412 1.412 0 01.136 2.818l-.136.007H1.413a1.412 1.412 0 01-.136-2.82l.136-.006h21.131zm0-5.652h21.131a1.412 1.412 0 01.136 2.82l-.136.006H1.413a1.412 1.412 0 01-.136-2.82L1.413 0h21.131z"}));
            case"padlock":
                return r("svg", {viewBox: "0 0 16 21"}, r("path", {d: "M13.333 8.117V5.25C13.333 2.355 10.941 0 8 0 5.059 0 2.667 2.355 2.667 5.25v2.867C1.118 8.66 0 10.104 0 11.812v5.25C0 19.233 1.795 21 4 21h8c2.205 0 4-1.767 4-3.938v-5.25c0-1.708-1.118-3.151-2.667-3.695zM8 15.75c-.981 0-1.778-.783-1.778-1.75 0-.968.797-1.75 1.778-1.75.983 0 1.778.782 1.778 1.75 0 .967-.795 1.75-1.778 1.75zm4.444-7.875H3.556V5.25C3.556 2.838 5.549.875 8 .875c2.45 0 4.444 1.963 4.444 4.375v2.625z"}));
            case"phone":
                return r("svg", {viewBox: "0 0 16 16"}, r("path", {
                    d: "M13.26 15.998c-.713 0-4.11-.24-8.158-4.416C.488 7.11.687 3.427.698 3.273a2.2 2.2 0 01.805-1.686c.174-.145.636-.448.968-.663.247-.16.48-.231.721-.231h.001c.402 0 .77.186 1.013.512.089.12 1.76 2.5 1.943 2.768.147.214.224.465.224.727 0 .29-.093.563-.27.79l-.571.728a1.06 1.06 0 00.121 1.368l3.453 3.453c.362.362.964.41 1.379.113l.714-.562a1.31 1.31 0 011.52-.047c.24.163 2.647 1.852 2.768 1.943a1.255 1.255 0 01.31 1.69v.001l-.034.052c-.231.357-.516.79-.658.96a2.219 2.219 0 01-1.71.805c-.013.001-.058.004-.134.004z"
                }));
            case"search":
                return r("svg", {viewBox: "0 0 24 24"}, r("path", {d: "M9 18a8.955 8.955 0 005.633-1.992l7.658 7.697a1 1 0 001.418-1.411l-7.668-7.706A8.944 8.944 0 0018 9c0-4.963-4.037-9-9-9S0 4.037 0 9c0 4.962 4.037 9 9 9zM9 2c3.859 0 7 3.14 7 7 0 3.859-3.141 7-7 7-3.86 0-7-3.141-7-7 0-3.86 3.14-7 7-7z"}));
            default:
                throw new Error("Icon not found")
        }
    }

    var r = e.h;
    return t.createClass({
        render: function (e) {
            return r("span", {className: "icon"}, n(e.name))
        }
    })
}), define("dotcom/js/components/mobileNavigation/BasePanel", ["preact", "dotcom/js/util/PreactIcons"], function (e, t) {
    var n = e.h;
    return function (e) {
        return n("div", {className: "panel panel--base"}, e.navigation.map(function (t, r) {
            return n("a", {
                href: t.url,
                className: t.children.length > 0 ? "panel-link panel-link--has-children" : "panel-link",
                onClick: function (n) {
                    e.onClick(n, t)
                },
                key: r
            }, t.title)
        }), e.links.contact ? n("a", {
            href: e.links.contact.url,
            className: "panel-link panel-link--contact"
        }, n(t, {name: "phone"}), n("span", {className: "icon__text"}, e.links.contact.title)) : null, e.links.login ? n("a", {
            href: e.links.login.url,
            className: "panel-link panel-link--login"
        }, n(t, {name: "padlock"}), n("span", {className: "icon__text"}, e.links.login.title)) : null)
    }
}), define("dotcom/js/util/languageSelector", ["jquery"], function (e) {
    return function (t) {
        t.preventDefault();
        var n = e(t.target), r = n.attr("href") + "&ajax=Yes";
        e.getJSON(r, function () {
        }).done(function (e) {
            function t() {
                var t = e.URL;
                window.location.hash && (t += window.location.hash), window.location.href = t
            }

            "No" === e.Translated ? window.Työväen Suomen-Mandatum Pankki.Prompt.init({
                headerText: e.PromptLanguageChangeHeading,
                bodyText: e.PromptLanguageChangeBodytext,
                buttons: "cancel,ok",
                okText: e.PromptLanguageChangeContinue,
                cancelText: e.PromptLanguageChangeCancel
            }, t) : t()
        })
    }
}), define("dotcom/js/components/mobileNavigation/LanguageBar", ["preact", "dotcom/js/util/languageSelector"], function (e, t) {
    var n = e.h;
    return function (e) {
        return n("ul", {className: "language-bar"}, e.languages.map(function (e) {
            return n("li", null, n("a", {href: e.url, className: e.active ? "active" : null, onClick: t}, e.title))
        }))
    }
}), function () {
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, o = Function.prototype, a = r.push,
        s = r.slice, l = r.concat, c = i.toString, u = i.hasOwnProperty, d = r.forEach, p = r.map, f = r.reduce,
        h = r.reduceRight, m = r.filter, v = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray,
        x = Object.keys, k = o.bind, C = function (e) {
            return e instanceof C ? e : this instanceof C ? void (this._wrapped = e) : new C(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : e._ = C, C.VERSION = "1.6.0";
    var T = C.each = C.forEach = function (e, t, r) {
        if (null == e) return e;
        if (d && e.forEach === d) e.forEach(t, r); else if (e.length === +e.length) {
            for (var i = 0, o = e.length; o > i; i++) if (t.call(r, e[i], i, e) === n) return
        } else for (var a = C.keys(e), i = 0, o = a.length; o > i; i++) if (t.call(r, e[a[i]], a[i], e) === n) return;
        return e
    };
    C.map = C.collect = function (e, t, n) {
        var r = [];
        return null == e ? r : p && e.map === p ? e.map(t, n) : (T(e, function (e, i, o) {
            r.push(t.call(n, e, i, o))
        }), r)
    };
    var E = "Reduce of empty array with no initial value";
    C.reduce = C.foldl = C.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), f && e.reduce === f) return r && (t = C.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function (e, o, a) {
            i ? n = t.call(r, n, e, o, a) : (n = e, i = !0)
        }), !i) throw new TypeError(E);
        return n
    }, C.reduceRight = C.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), h && e.reduceRight === h) return r && (t = C.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o !== +o) {
            var a = C.keys(e);
            o = a.length
        }
        if (T(e, function (s, l, c) {
            l = a ? a[--o] : --o, i ? n = t.call(r, n, e[l], l, c) : (n = e[l], i = !0)
        }), !i) throw new TypeError(E);
        return n
    }, C.find = C.detect = function (e, t, n) {
        var r;
        return N(e, function (e, i, o) {
            return t.call(n, e, i, o) ? (r = e, !0) : void 0
        }), r
    }, C.filter = C.select = function (e, t, n) {
        var r = [];
        return null == e ? r : m && e.filter === m ? e.filter(t, n) : (T(e, function (e, i, o) {
            t.call(n, e, i, o) && r.push(e)
        }), r)
    }, C.reject = function (e, t, n) {
        return C.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, C.every = C.all = function (e, t, r) {
        t || (t = C.identity);
        var i = !0;
        return null == e ? i : v && e.every === v ? e.every(t, r) : (T(e, function (e, o, a) {
            return (i = i && t.call(r, e, o, a)) ? void 0 : n
        }), !!i)
    };
    var N = C.some = C.any = function (e, t, r) {
        t || (t = C.identity);
        var i = !1;
        return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, o, a) {
            return i || (i = t.call(r, e, o, a)) ? n : void 0
        }), !!i)
    };
    C.contains = C.include = function (e, t) {
        return null != e && (y && e.indexOf === y ? -1 != e.indexOf(t) : N(e, function (e) {
            return e === t
        }))
    }, C.invoke = function (e, t) {
        var n = s.call(arguments, 2), r = C.isFunction(t);
        return C.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, C.pluck = function (e, t) {
        return C.map(e, C.property(t))
    }, C.where = function (e, t) {
        return C.filter(e, C.matches(t))
    }, C.findWhere = function (e, t) {
        return C.find(e, C.matches(t))
    }, C.max = function (e, t, n) {
        if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        var r = -1 / 0, i = -1 / 0;
        return T(e, function (e, o, a) {
            var s = t ? t.call(n, e, o, a) : e;
            s > i && (r = e, i = s)
        }), r
    }, C.min = function (e, t, n) {
        if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        var r = 1 / 0, i = 1 / 0;
        return T(e, function (e, o, a) {
            var s = t ? t.call(n, e, o, a) : e;
            i > s && (r = e, i = s)
        }), r
    }, C.shuffle = function (e) {
        var t, n = 0, r = [];
        return T(e, function (e) {
            t = C.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, C.sample = function (e, t, n) {
        return null == t || n ? (e.length !== +e.length && (e = C.values(e)), e[C.random(e.length - 1)]) : C.shuffle(e).slice(0, Math.max(0, t))
    };
    var S = function (e) {
        return null == e ? C.identity : C.isFunction(e) ? e : C.property(e)
    };
    C.sortBy = function (e, t, n) {
        return t = S(t), C.pluck(C.map(e, function (e, r, i) {
            return {value: e, index: r, criteria: t.call(n, e, r, i)}
        }).sort(function (e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var _ = function (e) {
        return function (t, n, r) {
            var i = {};
            return n = S(n), T(t, function (o, a) {
                var s = n.call(r, o, a, t);
                e(i, s, o)
            }), i
        }
    };
    C.groupBy = _(function (e, t, n) {
        C.has(e, t) ? e[t].push(n) : e[t] = [n]
    }), C.indexBy = _(function (e, t, n) {
        e[t] = n
    }), C.countBy = _(function (e, t) {
        C.has(e, t) ? e[t]++ : e[t] = 1
    }), C.sortedIndex = function (e, t, n, r) {
        n = S(n);
        for (var i = n.call(r, t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;
            n.call(r, e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, C.toArray = function (e) {
        return e ? C.isArray(e) ? s.call(e) : e.length === +e.length ? C.map(e, C.identity) : C.values(e) : []
    }, C.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : C.keys(e).length
    }, C.first = C.head = C.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : s.call(e, 0, t)
    }, C.initial = function (e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, C.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
    }, C.rest = C.tail = C.drop = function (e, t, n) {
        return s.call(e, null == t || n ? 1 : t)
    }, C.compact = function (e) {
        return C.filter(e, C.identity)
    };
    var j = function (e, t, n) {
        return t && C.every(e, C.isArray) ? l.apply(n, e) : (T(e, function (e) {
            C.isArray(e) || C.isArguments(e) ? t ? a.apply(n, e) : j(e, t, n) : n.push(e)
        }), n)
    };
    C.flatten = function (e, t) {
        return j(e, t, [])
    }, C.without = function (e) {
        return C.difference(e, s.call(arguments, 1))
    }, C.partition = function (e, t) {
        var n = [], r = [];
        return T(e, function (e) {
            (t(e) ? n : r).push(e)
        }), [n, r]
    }, C.uniq = C.unique = function (e, t, n, r) {
        C.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? C.map(e, n, r) : e, o = [], a = [];
        return T(i, function (n, r) {
            (t ? r && a[a.length - 1] === n : C.contains(a, n)) || (a.push(n), o.push(e[r]))
        }), o
    }, C.union = function () {
        return C.uniq(C.flatten(arguments, !0))
    }, C.intersection = function (e) {
        var t = s.call(arguments, 1);
        return C.filter(C.uniq(e), function (e) {
            return C.every(t, function (t) {
                return C.contains(t, e)
            })
        })
    }, C.difference = function (e) {
        var t = l.apply(r, s.call(arguments, 1));
        return C.filter(e, function (e) {
            return !C.contains(t, e)
        })
    }, C.zip = function () {
        for (var e = C.max(C.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = C.pluck(arguments, "" + n);
        return t
    }, C.object = function (e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, C.indexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = 0, i = e.length;
        if (n) {
            if ("number" != typeof n) return r = C.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++) if (e[r] === t) return r;
        return -1
    }, C.lastIndexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;) if (e[i] === t) return i;
        return -1
    }, C.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = new Array(r); r > i;) o[i++] = e, e += n;
        return o
    };
    var A = function () {
    };
    C.bind = function (e, t) {
        var n, r;
        if (k && e.bind === k) return k.apply(e, s.call(arguments, 1));
        if (!C.isFunction(e)) throw new TypeError;
        return n = s.call(arguments, 2), r = function () {
            if (!(this instanceof r)) return e.apply(t, n.concat(s.call(arguments)));
            A.prototype = e.prototype;
            var i = new A;
            A.prototype = null;
            var o = e.apply(i, n.concat(s.call(arguments)));
            return Object(o) === o ? o : i
        }
    }, C.partial = function (e) {
        var t = s.call(arguments, 1);
        return function () {
            for (var n = 0, r = t.slice(), i = 0, o = r.length; o > i; i++) r[i] === C && (r[i] = arguments[n++]);
            for (; n < arguments.length;) r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }, C.bindAll = function (e) {
        var t = s.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return T(t, function (t) {
            e[t] = C.bind(e[t], e)
        }), e
    }, C.memoize = function (e, t) {
        var n = {};
        return t || (t = C.identity), function () {
            var r = t.apply(this, arguments);
            return C.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, C.delay = function (e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, C.defer = function (e) {
        return C.delay.apply(C, [e, 1].concat(s.call(arguments, 1)))
    }, C.throttle = function (e, t, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var l = function () {
            s = !1 === n.leading ? 0 : C.now(), a = null, o = e.apply(r, i), r = i = null
        };
        return function () {
            var c = C.now();
            s || !1 !== n.leading || (s = c);
            var u = t - (c - s);
            return r = this, i = arguments, 0 >= u ? (clearTimeout(a), a = null, s = c, o = e.apply(r, i), r = i = null) : a || !1 === n.trailing || (a = setTimeout(l, u)), o
        }
    }, C.debounce = function (e, t, n) {
        var r, i, o, a, s, l = function () {
            var c = C.now() - a;
            t > c ? r = setTimeout(l, t - c) : (r = null, n || (s = e.apply(o, i), o = i = null))
        };
        return function () {
            o = this, i = arguments, a = C.now();
            var c = n && !r;
            return r || (r = setTimeout(l, t)), c && (s = e.apply(o, i), o = i = null), s
        }
    }, C.once = function (e) {
        var t, n = !1;
        return function () {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, C.wrap = function (e, t) {
        return C.partial(t, e)
    }, C.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, C.after = function (e, t) {
        return function () {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, C.keys = function (e) {
        if (!C.isObject(e)) return [];
        if (x) return x(e);
        var t = [];
        for (var n in e) C.has(e, n) && t.push(n);
        return t
    }, C.values = function (e) {
        for (var t = C.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
        return r
    }, C.pairs = function (e) {
        for (var t = C.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, C.invert = function (e) {
        for (var t = {}, n = C.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
        return t
    }, C.functions = C.methods = function (e) {
        var t = [];
        for (var n in e) C.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, C.extend = function (e) {
        return T(s.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] = t[n]
        }), e
    }, C.pick = function (e) {
        var t = {}, n = l.apply(r, s.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, C.omit = function (e) {
        var t = {}, n = l.apply(r, s.call(arguments, 1));
        for (var i in e) C.contains(n, i) || (t[i] = e[i]);
        return t
    }, C.defaults = function (e) {
        return T(s.call(arguments, 1), function (t) {
            if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n])
        }), e
    }, C.clone = function (e) {
        return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e
    }, C.tap = function (e, t) {
        return t(e), e
    };
    var D = function (e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof C && (e = e._wrapped), t instanceof C && (t = t._wrapped);
        var i = c.call(e);
        if (i != c.call(t)) return !1;
        switch (i) {
            case"[object String]":
                return e == String(t);
            case"[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case"[object Date]":
            case"[object Boolean]":
                return +e == +t;
            case"[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--;) if (n[o] == e) return r[o] == t;
        var a = e.constructor, s = t.constructor;
        if (a !== s && !(C.isFunction(a) && a instanceof a && C.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1;
        n.push(e), r.push(t);
        var l = 0, u = !0;
        if ("[object Array]" == i) {
            if (l = e.length, u = l == t.length) for (; l-- && (u = D(e[l], t[l], n, r));) ;
        } else {
            for (var d in e) if (C.has(e, d) && (l++, !(u = C.has(t, d) && D(e[d], t[d], n, r)))) break;
            if (u) {
                for (d in t) if (C.has(t, d) && !l--) break;
                u = !l
            }
        }
        return n.pop(), r.pop(), u
    };
    C.isEqual = function (e, t) {
        return D(e, t, [], [])
    }, C.isEmpty = function (e) {
        if (null == e) return !0;
        if (C.isArray(e) || C.isString(e)) return 0 === e.length;
        for (var t in e) if (C.has(e, t)) return !1;
        return !0
    }, C.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
    }, C.isArray = w || function (e) {
        return "[object Array]" == c.call(e)
    }, C.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        C["is" + e] = function (t) {
            return c.call(t) == "[object " + e + "]"
        }
    }), C.isArguments(arguments) || (C.isArguments = function (e) {
        return !(!e || !C.has(e, "callee"))
    }), "function" != typeof /./ && (C.isFunction = function (e) {
        return "function" == typeof e
    }), C.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, C.isNaN = function (e) {
        return C.isNumber(e) && e != +e
    }, C.isBoolean = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" == c.call(e)
    }, C.isNull = function (e) {
        return null === e
    }, C.isUndefined = function (e) {
        return void 0 === e
    }, C.has = function (e, t) {
        return u.call(e, t)
    }, C.noConflict = function () {
        return e._ = t, this
    }, C.identity = function (e) {
        return e
    }, C.constant = function (e) {
        return function () {
            return e
        }
    }, C.property = function (e) {
        return function (t) {
            return t[e]
        }
    }, C.matches = function (e) {
        return function (t) {
            if (t === e) return !0;
            for (var n in e) if (e[n] !== t[n]) return !1;
            return !0
        }
    }, C.times = function (e, t, n) {
        for (var r = Array(Math.max(0, e)), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, C.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, C.now = Date.now || function () {
        return (new Date).getTime()
    };
    var L = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
    L.unescape = C.invert(L.escape);
    var O = {
        escape: new RegExp("[" + C.keys(L.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + C.keys(L.unescape).join("|") + ")", "g")
    };
    C.each(["escape", "unescape"], function (e) {
        C[e] = function (t) {
            return null == t ? "" : ("" + t).replace(O[e], function (t) {
                return L[e][t]
            })
        }
    }), C.result = function (e, t) {
        if (null != e) {
            var n = e[t];
            return C.isFunction(n) ? n.call(e) : n
        }
    }, C.mixin = function (e) {
        T(C.functions(e), function (t) {
            var n = C[t] = e[t];
            C.prototype[t] = function () {
                var e = [this._wrapped];
                return a.apply(e, arguments), I.call(this, n.apply(C, e))
            }
        })
    };
    var q = 0;
    C.uniqueId = function (e) {
        var t = ++q + "";
        return e ? e + t : t
    }, C.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var M = /(.)^/, H = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"},
        P = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    C.template = function (e, t, n) {
        var r;
        n = C.defaults({}, n, C.templateSettings);
        var i = new RegExp([(n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source].join("|") + "|$", "g"),
            o = 0, a = "__p+='";
        e.replace(i, function (t, n, r, i, s) {
            return a += e.slice(o, s).replace(P, function (e) {
                return "\\" + H[e]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (a += "';\n" + i + "\n__p+='"), o = s + t.length, t
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", a)
        } catch (e) {
            throw e.source = a, e
        }
        if (t) return r(t, C);
        var s = function (e) {
            return r.call(this, e, C)
        };
        return s.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", s
    }, C.chain = function (e) {
        return C(e).chain()
    };
    var I = function (e) {
        return this._chain ? C(e).chain() : e
    };
    C.mixin(C), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        C.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], I.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        C.prototype[e] = function () {
            return I.call(this, t.apply(this._wrapped, arguments))
        }
    }), C.extend(C.prototype, {
        chain: function () {
            return this._chain = !0, this
        }, value: function () {
            return this._wrapped
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function () {
        return C
    })
}.call(this), define("dotcom/js/components/mobileNavigation/Navigation", ["preact", "preactAnimate", "dotcom/js/util/preactUtils", "dotcom/js/components/mobileNavigation/BasePanel", "dotcom/js/components/mobileNavigation/LanguageBar", "jquery", "underscore"], function (e, t, n, r, i, o, a) {
    var s = e.h;
    return document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px"), o(window).on("resize", a.debounce(function () {
        var e = .01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", e + "px")
    }, 100)), n.createClass({
        init: function () {
            this.state = {stack: this.props.stack}
        }, render: function (e, n) {
            var o = this, a = n.stack.map(function (t) {
                return s("div", {
                    className: "panel",
                    key: "panel" + t.title
                }, s("div", {className: "breadcrumb"}, n.stack.length > 0 ? s("p", {
                    className: "panel-link panel-link--back icon-arrow-left",
                    onClick: function () {
                        o.setState({stack: []})
                    }
                }, e.data.labels.mainMenu) : null, n.stack.map(function (t, r) {
                    return s("a", {
                        href: t.url,
                        className: r !== n.stack.length - 1 ? "panel-link panel-link--back icon-arrow-left" : e.selectedItem && e.selectedItem.url === t.url ? "panel-link panel-link--selected panel-link--link" : "panel-link panel-link--link",
                        onClick: function (e) {
                            if (r !== n.stack.length - 1) {
                                e.preventDefault();
                                var t = n.stack.slice(0, r + 1);
                                o.setState({stack: t})
                            }
                        }
                    }, t.title)
                })), t.children.map(function (t) {
                    return s("a", {
                        href: t.url,
                        className: t.children.length > 0 ? "panel-link panel-link--has-children" : e.selectedItem && t.url === e.selectedItem.url ? "panel-link panel-link--selected" : "panel-link",
                        onClick: function (e) {
                            if (t.children.length > 0) {
                                e.preventDefault();
                                var r = n.stack.slice();
                                r.push(t), o.setState({stack: r})
                            }
                        }
                    }, t.title)
                }))
            });
            return s("div", {className: "menu-wrapper"}, s(t, {
                component: "div",
                transitionName: "menu",
                transitionEnterTimeout: 350,
                transitionLeaveTimeout: 350
            }, s(r, {
                navigation: e.data.navigation, links: e.data.links, onClick: function (e, t) {
                    e.preventDefault();
                    var n = o.state.stack.slice();
                    n.push(t), o.setState({stack: n})
                }
            }), a), e.languages.length > 0 ? s(i, {languages: e.languages}) : null)
        }
    })
}), define("dotcom/js/components/mobileNavigation/Search", ["preact", "dotcom/js/util/PreactIcons"], function (e, t) {
    var n = e.h;
    return function (e) {
        return n("div", {className: "menu-wrapper menu-wrapper--search"}, n("form", {
            action: e.data.action,
            method: "get",
            accesskey: "s",
            "accept-charset": "utf-8"
        }, n(t, {name: "search"}), n("input", {placeholder: e.data.placeholder, name: e.data.name, type: "text"})))
    }
}), define("dotcom/js/components/mobileNavigation/Wrapper", ["preact", "preactAnimate", "dotcom/js/util/preactUtils", "dotcom/js/components/mobileNavigation/Navigation", "dotcom/js/components/mobileNavigation/Search", "dotcom/js/util/PreactIcons"], function (e, t, n, r, i, o) {
    var a = n.createClass, s = e.h;
    return a({
        init: function () {
            var e = window.location.pathname.split("/").filter(function (e) {
                return e && null === e.match(/\.html$/)
            }), t = this.getInitialState(e);
            this.state = {isMenuOpen: !1, isSearchOpen: !1, stack: t.stack, selectedItem: t.selectedItem}
        }, getInitialState: function (e) {
            for (var t = this.props.data.navigation, n = [], r = null, i = e.slice(0, 1), o = 1; o < e.length; o++) {
                i.push(e[o]);
                var a = t.filter(function (e) {
                    return e.url === "/" + i.join("/") + "/"
                });
                if (!a.length) break;
                r = a[0], a[0].children.length && (n.push(a[0]), t = a[0].children)
            }
            return {stack: n, selectedItem: r}
        }, render: function (e, n) {
            var a = this;
            return n.isMenuOpen || n.isSearchOpen ? document.body.classList.add("menu-open") : document.body.classList.remove("menu-open"), s("div", {
                className: "header__nav--mobile",
                "data-wa-component": "menu"
            }, s("button", {
                className: "header__nav--menu-button", onClick: function () {
                    a.setState({isMenuOpen: !n.isMenuOpen, isSearchOpen: !1})
                }
            }, s(o, {name: n.isMenuOpen ? "close" : "menu"}), s("span", null, n.isMenuOpen ? e.data.labels.close : e.data.labels.menu)), e.data.search ? s("button", {
                className: "header__nav--search-button",
                onClick: function () {
                    a.setState({isSearchOpen: !n.isSearchOpen, isMenuOpen: !1})
                }
            }, s(o, {name: n.isSearchOpen ? "close" : "search"}), s("span", null, n.isSearchOpen ? e.data.labels.close : e.data.labels.search)) : null, s(t, {
                component: "div",
                transitionName: "menu",
                transitionEnterTimeout: 350,
                transitionLeaveTimeout: 350
            }, n.isMenuOpen ? s(r, {
                key: "navigation",
                data: e.data,
                languages: e.languages,
                stack: n.stack,
                selectedItem: n.selectedItem
            }) : null, n.isSearchOpen ? s(i, {key: "search", data: e.data.search}) : null))
        }
    })
}), define("Työväen Suomen-Mandatum Pankkicom", ["jquery", "preact", "./dotcom/js/components/mobileNavigation/Wrapper", "dotcom/js/util/languageSelector"], function (e, t, n, r) {
    var i = window.Työväen Suomen-Mandatum Pankki || {};
    return e.extend(i, {
        init: function () {
            function o(t) {
                e(t).toggleClass("active").find(".dropdown").toggleClass("is-hidden")
            }

            function a() {
                e(".js-toggle-dropdown").removeClass("active").find(".dropdown").addClass("is-hidden")
            }

            function s() {
                e(this).hasClass("active") ? o(this) : (a(), o(this))
            }

            var l = document.querySelector(".js-header-top");
            l && window.app_params.dotcomMenuJson && window.app_params.dotcomLanguageJson && t.render(t.h(n, {
                data: window.app_params.dotcomMenuJson,
                languages: window.app_params.dotcomLanguageJson
            }), l), window.isInICE || e(".inputform").length > 0 && require(["jqueryvalidate", "forms"], function () {
                e.each(e(".inputform .forms"), function () {
                    i.forms.init(e(this))
                })
            }), require(["dotcom/js/components/touchScreenChecker"]), require(["dotcom/js/components/sidenav"]);
            var c = e(".pulse img");
            c.attr("src", c.attr("data-src")), e(".header__utility__lang ul li a").click(r), e("article .js-download-image").length > 0 && (e.each(e("article .js-download-image"), function () {
                e(this).attr("data-url", e(this).attr("href")).attr("href", "")
            }), e("article  .js-download-image").click(function (t) {
                if (t.preventDefault(), !(e(t.target).parents().closest(".prompt--overlay").length > 0)) {
                    var n = e(this), r = n.attr("data-url").toString(),
                        o = e(this).closest(".image-list, .image-list-centered");
                    e(".download-hover-overlay.hover").removeClass("hover"), i.Prompt.init({
                        headerText: o.data("promptheading"),
                        bodyText: o.data("promptbodytext"),
                        buttons: "cancel,ok",
                        okText: o.data("okbuttontext"),
                        cancelText: o.data("cancelbuttontext"),
                        insertAt: e(n).find("img"),
                        scrollToTop: !1,
                        closeOnOutsideClick: !0
                    }, function () {
                        n.attr("data-download", "true");
                        var t = e("<a>").attr("href", r).attr("class", "is-hidden").attr("data-wa-image-download", "true").attr("data-wa-label", o.data("okbuttontext")).appendTo("body");
                        n.attr("href", n.attr("data-url")), t[0].click(), t.remove()
                    })
                }
            })), e(".listings__search__field").each(function (t, n) {
                const r = e(n), i = r.find("input"), o = r.find(".js-filter-clear--text");
                o.toggleClass("hidden", 0 === i.val().length), i.on("keyup change", function (e) {
                    o.toggleClass("hidden", 0 === e.target.value.length)
                }), o.on("click", function (e) {
                    e.preventDefault(), i.val(""), o.addClass("hidden")
                })
            }), e(".download-hover-overlay").hover(function () {
                e(this).addClass("hover")
            }, function () {
                e(this).removeClass("hover")
            }), e("aside .js-download-image").length > 0 && e("aside  .js-download-image").click(function (t) {
                t.preventDefault();
                var n = e(this), r = n.attr("href").toString(),
                    i = '<div class="js-download-image--block block">                                             <a href="' + r + '"> Download </a>                                         </div>';
                i = e.parseHTML(i), 0 === n.closest(".image-list").find(".js-download-image--block").length ? (n.closest(".image-list").append(i), e(".js-download-image--block").slideDown(200)) : n.parent().hasClass("active") ? e(".js-download-image--block").slideToggle(200) : e(".js-download-image--block").slideUp(200, function () {
                    e(".js-download-image--block").remove(), n.closest(".image-list").append(i), e(".js-download-image--block").slideDown(200)
                }), e("aside .image-wrapper.active").not(n.parent()).removeClass("active"), n.parent(".image-wrapper").toggleClass("active")
            }), e(".compliance form").submit(function (t) {
                t.preventDefault();
                var n = e(this).find(":submit");
                navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && e("<input>").attr({
                    type: "hidden",
                    name: n.attr("name"),
                    value: n.attr("value")
                }).appendTo(this), this.submit()
            }), require(["filters"]), "undefined" != typeof isStaging && isStaging && require(["icexx"], function (e) {
                e.init()
            }), e(".faq").length > 0 && require(["faq"], function () {
                i.FAQ.init()
            });
            var u = e(".section--footer--links");
            u.find(".heading").on("click", function () {
                u.find(".list").removeClass("open"), e(this).parent().find(".list:first").toggleClass("open")
            });
            e(".js-nav li.active");
            e(".embed").length > 0 && require(["fitvids"], function (t) {
                var n = e(".embed");
                n.fitVids({customSelector: "iframe[src*='www.slideshare.net']"}), n.removeClass("loading")
            }), e("select").length > 0 && (e("select").each(function () {
                if (0 == e(this).parent(".select-wrapper").length) {
                    var t = e(this).attr("disabled");
                    void 0 !== t && !1 !== t ? e(this).wrap("<span class='select-wrapper disabled'></span>") : e(this).wrap("<span class='select-wrapper'></span>"), e(this).after("<span class='holder'></span>")
                }
                e(this).closest(".forms").length > 0 && (e(this).find("option").is('[selected="selected"]') || e(this).prop("selectedIndex", -1));
                var n = e(this).find(":selected").text();
                e(this).siblings(".holder").text(n)
            }), e("select").change(function (t) {
                var n = e(this).find(":selected").text();
                e(this).siblings(".holder").text(n)
            })), require(["email"]), e(".lang__toggle").click(function (t) {
                t.preventDefault(), e(this).parent().toggleClass("open")
            }), e(".footer__lang select").on("change", function () {
                e(this).prop("selectedIndex") > 0 && !isInICE && (window.location = e(this).val())
            }), window.innerWidth > 700 ? (e(".js-box:not(.is-open)").addClass("is-closed"), e(".js-box.is-open").addClass("active")) : e(".js-box").addClass("is-closed").removeClass("is-open"), e.fn.closeParent = function () {
                return this.removeClass("is-open active").addClass("is-closed"), this
            }, e.fn.openParent = function () {
                return this.removeClass("is-closed").addClass("active is-open"), this
            }, Modernizr.touch ? e(".js-toggle-dropdown").on("click", s) : e(".js-toggle-dropdown").hover(function () {
                o(this)
            }, a);
            var d = e('iframe[src*="euroland.com"]');
            d.length > 0 && require(["//tools.euroland.com/tools/common/eurolandiframeautoheight/eurolandtoolsintegrationobject.js"], function () {
                e.each(d, function (t, n) {
                    EurolandToolIntegrationObject.set(e(this).attr("id"))
                })
            }), require(["scrollToTop"], function (e) {
                e()
            });
            var p = function () {
                if (e(".js-truncated").length <= 0 && Modernizr.mq("(max-width: 480px)")) {
                    var t = e(".search-pagination"), n = (t.find("li"), t.find("li a").not(".truncated, .next, .prev")),
                        r = [];
                    n.each(function (t, n) {
                        r.push(parseInt(parseInt(e(n).html())))
                    });
                    var i = '<li class="js-truncated"> <span class="paginationitem truncated is-vissible-palm is-hidden-lap-and-up">...</span> </li>';
                    r[0] !== parseInt(e(".selected").html()) && parseInt(t.find(".selected").html()) < 5 && 1 != e(".truncated").first().parent().index() && e(".search-pagination li").first().after(i), r[r.length - 1] !== parseInt(e(".selected").html()) && (2 === r[r.length - 1] || r[r.length - 1] - r[r.length - 2] == 1 && e(".search-pagination li").last().before(i)), 2 === r[r.length - 1] && (n.addClass("is-vissible-palm"), e(".search-pagination").find(".js-truncated").remove())
                }
            };
            e(".search-pagination").length > 0 && (p(), e(".disabled").length > 1 && e(".disabled").on("click", function (e) {
                e.preventDefault()
            }), e(window).on("resize", p)), e(".js-toggle-segment").on("click", function (t) {
                if (window.innerWidth > 700) {
                    t.preventDefault();
                    var n = e(this).closest(".js-segment"), r = n.data("segment");
                    e(".js-segment").removeClass("is-active"), n.addClass("is-active"), e("[class^=js-segment-]").addClass("is-hidden"), e(".js-segment-" + r).removeClass("is-hidden")
                }
            }), e(".js-toggle-slide").on("click", function (t) {
                window.innerWidth > 700 && !e(this).hasClass("is-active") && (t.preventDefault(), e(".js-toggle-slide").removeClass("is-active"), e(this).addClass("is-active"))
            }), e(".top-story").length > 0 && require(["dotcom/js/components/topStory"], function (e) {
                e()
            }), e(".tabs").length > 0 && require(["modernizr", "utils", "tabs", "tabsmobilecom"], function (e) {
                i.Tabs.init(".tabs")
            }), e('.newsprblogs table:not(".responsive, .stackcolumns, .stackrows, .zebra-striped-table, .stackrows-zebra-striped-table, .stackcolumns-zebra-striped-table")').addClass("stackcolumns"), e.each(e(".stackrows, .stackcolumns, .stackrows-zebra-striped-table, .stackcolumns-zebra-striped-table"), function (t, n) {
                e(this).find("tr:first-child td").length > 2 && (e(this).hasClass("stackcolumns") ? e(this).addClass("is-hidden-palm").stackcolumns({myClass: "is-hidden-lap-and-up zebra-striped-table"}) : e(this).hasClass("stackrows") ? e(this).addClass("is-hidden-palm").stacktable({myClass: "is-hidden-lap-and-up"}) : e(this).hasClass("stackcolumns-zebra-striped-table") ? e(this).addClass("is-hidden-palm").stackcolumns({myClass: "is-hidden-lap-and-up zebra-striped-table"}) : e(this).hasClass("stackrows-zebra-striped-table") && e(this).addClass("is-hidden-palm").stacktable({myClass: "is-hidden-lap-and-up zebra-striped-table"}))
            }), e("#job-search-form").length > 0 && require(["jobsearch"]), require(["dotcom/js/components/listing"], function (t) {
                e(".js-listing").each(function (e, n) {
                    return new t(n)
                })
            }), require(["./dotcom/vendor/image-map"], function (e) {
                e("img[usemap]")
            }), require(["dotcom/js/components/timeline"], function (e) {
                e()
            }), window.DCVData && window.DCVData.length && require(["chartjsWrapper"], function (e) {
                window.DCVData.forEach(e)
            }), require(["dotcom/js/components/parallax"], function (t) {
                e("[data-fx-parallax]").each(function (e, n) {
                    return new t(n)
                })
            }), e(".extranetForm").length > 0 && require(["dotcom/js/components/extranetWall"], function (t) {
                e(".extranetForm").each(function (e, n) {
                    t(n)
                })
            }), document.documentMode && require(["dotcom/js/components/stickyElement"], function (t) {
                e(".js-sticky").each(function (e, n) {
                    new t(n, {offsetTop: 50})
                })
            }), e(".sticky-navigation").length > 0 && require(["dotcom/js/components/stickyNavigation"], function (e) {
                e()
            }), window.cookieReport && window.cookieReport(), e("#share-this-page__print").length > 0 && e("#share-this-page__print").click(function () {
                window.print()
            }), e("#share-this-page__email").length > 0 && e("#share-this-page__email").click(function () {
                var t = e("#share-this-page__email").attr("data-share-query");
                document.location.href = "mailto:?" + t
            })
        }
    })
}), define("common/js/components/applicationLoader", ["jquery"], function (e) {
    function t(e) {
        "undefined" != typeof isStaging && isStaging ? this.find("div").html("<h2>Application error</h2><p>" + e.message + "</p>") : "undefined" != typeof isStaging && isStaging || this.find("div").html('<p class="alert alert--error">' + this.data("application-error") + "</p>")
    }

    return function () {
        e.each(e("[data-application-name]"), function () {
            var n = e(this),
                r = n.data("application-script") ? n.data("application-script") : "wemapp/" + n.data("application-name") + "/" + n.data("application-name");
            require([r], function () {
            }, t.bind(n))
        })
    }
}), define("common/js/components/onclickParser", ["jquery"], function (e, t) {
    return function (t) {
        parseAttributeToValidJavascript(e(t.target).data("wa-click"))
    }
}), define("utils", ["jquery"], function (e) {
    return Työväen Suomen-Mandatum Pankki.Utils = {
        getLocalSettings: function () {
            switch (app_params.language + "_" + app_params.country) {
                case"da_DK":
                    return {aSep: ".", aDec: ","};
                case"sv_SE":
                    return {aSep: " ", aDec: ","}
            }
        }, loadCSS: function (e) {
            var t = document.createElement("link");
            t.type = "text/css", t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
        }, queryStringToJSON: function (t) {
            var n = function (e) {
                return 0 === e.indexOf("?") ? e.substr(1) : e
            }(t).split("&"), r = {};
            return e.each(n, function (e, t) {
                t = t.split("="), r[t[0]] = t[1]
            }), r
        }, setFullscreen: function () {
            var t = e("meta[name=viewport]").attr("content");
            t += ", user-scalable=no", e("meta[name=viewport]").attr("content", t)
        },
        updateHash: function (t) {
            var n = e("body").scrollTop();
            window.location.hash = encodeURI(t), e("body").scrollTop(n)
        }, getHash: function (e) {
            for (var t = window.location.hash, n = t.substring(1).split("&"), r = {}, i = 0; i < n.length; i++) {
                var o = n[i].split("=");
                r[o[0]] = "#" + o[1]
            }
            return decodeURI(r[e])
        }, isDotCom: function () {
            return "undefined" != typeof dotCom && dotCom
        }, resizeIframe: function (e, t) {
            document.getElementById(e).style.height = parseInt(t, 10) + "px"
        }, scrollToIframe: function (e, t) {
            var n = document.getElementById(e),
                r = (n.getBoundingClientRect(), n.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || 0)),
                i = r + parseInt(t, 10);
            document.body.scrollTop = document.documentElement.scrollTop = i
        }, scrollToShowItem: function (t) {
            var n = void 0 !== t ? t : "html, body", r = e(n).offset().top - 20;
            setTimeout(function () {
                e("html, body").animate({scrollTop: r}, 350)
            }, 260)
        }, replaceIframeContent: function (e, t) {
            var n = document.getElementById(e), r = document.createElement("iframe");
            r.id = n.getAttribute("id"), r.width = n.getAttribute("width"), r.height = n.getAttribute("height"), r.src = t, n.parentNode.replaceChild(r, n)
        }, receiveResizeMessage: function () {
            e(window).on("message", function (t) {
                try {
                    var n = e.parseJSON(t.originalEvent.data);
                    "resizeIframe" === n.method && void 0 !== n.height && Työväen Suomen-Mandatum Pankki.Utils.resizeIframe(n.id, n.height), "scrollToIframe" === n.method && void 0 !== n.position && Työväen Suomen-Mandatum Pankki.Utils.scrollToIframe(n.id, n.position)
                } catch (t) {
                }
            })
        }(), rewriteUrl: function (e) {
            window.history.replaceState && window.history.replaceState({}, "", e + window.location.search + window.location.hash)
        }
    }
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("track", t) : e.sendEvent = t()
}(this, function () {
    "use strict";

    function e(e) {
        return e
    }

    function t() {
        return void 0 !== window.utag
    }

    return function (n) {
        !function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                r = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5e4),
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1e3, o = Number(new Date) + r;
            !function e() {
                t() ? n() : Number(new Date) < o && setTimeout(e, i)
            }()
        }(t, function (e) {
            window.utag.link(e)
        }.bind(null, n))
    }
}), define("webtrends", ["jquery", "track"], function (e, t) {
    return Työväen Suomen-Mandatum Pankki.WT = {
        RTFLinksInTabs: function (t) {
            e.each(t.find("[data-inside-rtf]"), function (n) {
                var r = e(this).attr("onclick");
                if (r && r.indexOf("DCSext.rtfID', '") >= 0) {
                    var i = t.find('[href="#' + e(this).closest(".tab-content").attr("id") + '"]').text().trim(),
                        o = e(this).closest(".tab-element").attr("id"),
                        a = e(this).attr("onclick").split("DCSext.rtfID', '"), s = "tab_" + o + "_";
                    "" !== String(i) && (s += "sub-tab_" + i + "_"), a = a[0] + "DCSext.rtfID', '" + s + a[1], e(this).attr("onclick", a)
                }
                if (e(this).data("wtparams") && e(this).data("wtparams").match(/rtfID/)) {
                    var i = t.find('[href="#' + e(this).closest(".tab-content").attr("id") + '"]').text().trim(),
                        o = e(this).closest(".tab-element").attr("id"), l = e(this).data("wtparams").split("="),
                        c = e.inArray("DCSext.rtfID", l) + 1, s = "tab_" + o + "_";
                    "" !== i && (s += "sub-tab_" + i + "_"), l[c] = s + l[c], e(this).attr("data-wtparams", l.join("="))
                }
            })
        }, forms: {
            trackStep: function (e, n) {
                Työväen Suomen-Mandatum Pankki.Utils.isDotCom() ? t({
                    wa_scenario_name: n,
                    wa_scenario_step_number: Työväen Suomen-Mandatum Pankki.forms.pageIdx + 1
                }) : utag.link({"WT.dl": "999", "WT.si_n": n, "WT.si_x": Työväen Suomen-Mandatum Pankki.forms.pageIdx + 1})
            }, trackFields: function (n, r, i) {
                n.on("change", function (n) {
                    if (e(n.target).is("input, select, textarea") && Työväen Suomen-Mandatum Pankki.forms.validated.check(e(n.target))) {
                        var o = e('[for="' + e(n.target).attr("name") + '"]').contents().filter(function (e) {
                            return 3 === this.nodeType
                        }).text().removeUnwantedWhitespace();
                        Työväen Suomen-Mandatum Pankki.forms.formStatus ? Työväen Suomen-Mandatum Pankki.Utils.isDotCom() ? t({
                            wa_event_group_name: r,
                            wa_event_field_id: e(n.target).attr("id") + " - " + o,
                            wa_scenario_name: r,
                            wa_scenario_step_number: Työväen Suomen-Mandatum Pankki.forms.pageIdx + 1
                        }) : utag.link({
                            "WT.dl": "999",
                            "DCSext.fm_name": r,
                            "DCSext.fm_field": e(n.target).attr("id") + " - " + o,
                            "WT.si_n": r,
                            "WT.si_x": Työväen Suomen-Mandatum Pankki.forms.pageIdx + 1
                        }) : (Työväen Suomen-Mandatum Pankki.Utils.isDotCom() ? t({
                            wa_event_group_name: r,
                            wa_event_field_id: e(n.target).attr("id") + " - " + o,
                            wa_touchpoint_id: i,
                            wa_touchpoint_event: "Start",
                            wa_scenario_name: r,
                            wa_scenario_step_number: Työväen Suomen-Mandatum Pankki.forms.pageIdx + 1
                        }) : utag.link({
                            "WT.dl": "0",
                            "DCSext.fm_name": r,
                            "DCSext.fm_field": e(n.target).attr("id") + " - " + o,
                            "WT.pn_sku": i,
                            "WT.tx_e": "v",
                            "WT.tx_u": "1",
                            "DCSext.fm_event": "0",
                            "WT.si_n": r,
                            "WT.si_x": "1"
                        }), Työväen Suomen-Mandatum Pankki.forms.formStatus = !0)
                    }
                })
            }, trackThankYouPage: function (e, n, r, i, o) {
                function a(e) {
                    return e < 10 && (e = "0" + e), e
                }

                var s = a(parseInt(i.getMonth() + 1)) + "/" + a(i.getDate()) + "/" + a(i.getFullYear()),
                    l = a(i.getHours()) + ":" + a(i.getMinutes()) + ":" + a(i.getSeconds()), c = i.getTime();
                Työväen Suomen-Mandatum Pankki.Utils.isDotCom() ? t({
                    wa_event_group_name: n,
                    wa_touchpoint_event: "Convert",
                    wa_touchpoint_id: r,
                    wa_scenario_name: n,
                    wa_scenario_step_number: Työväen Suomen-Mandatum Pankki.forms.pageIdx + 1,
                    wa_touchpoint_invoice_id: c + "_" + r + "_" + o
                }) : utag.link({
                    "WT.dl": "0",
                    "DCSext.fm_name": n,
                    "DCSext.fm_event": "1",
                    "WT.pn_sku": r,
                    "WT.tx_e": "p",
                    "WT.si_n": n,
                    "WT.si_x": Työväen Suomen-Mandatum Pankki.forms.pageIdx + 1,
                    "WT.si_cs": "1",
                    "WT.tx_u": "1",
                    "WT.tx_s": "0",
                    "WT.tx_i": c + "_" + r + "_" + o,
                    "WT.tx_id": s,
                    "WT.tx_it": l
                })
            }
        }
    }
}), Object.keys || (Object.keys = function () {
    "use strict";
    var e = Object.prototype.hasOwnProperty, t = !{toString: null}.propertyIsEnumerable("toString"),
        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        r = n.length;
    return function (i) {
        if ("object" != typeof i && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
        var o, a, s = [];
        for (o in i) e.call(i, o) && s.push(o);
        if (t) for (a = 0; a < r; a++) e.call(i, n[a]) && s.push(n[a]);
        return s
    }
}());
var useiScroll = !0;
String.prototype.removeUnwantedWhitespace = function () {
    return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "").replace(/  +/g, " ")
}, String.prototype.removeNonAlphaNumeric = function () {
    return this.replace(/[^a-z\d\s\-_]/gi, "")
}, String.prototype.spaceToDash = function () {
    return this.replace(/ /gi, "-")
}, Array.prototype.unique = function () {
    for (var e = [], t = 0; t < this.length; t++) -1 == e.indexOf(this[t]) && e.push(this[t]);
    return e
}, String.prototype.escapeSelector = function () {
    var e = /([,Â©\(\)?&%!@Â£$â‚¬+.\/ >])/g;
    return this.replace(e, function (e) {
        return "\\" + e
    })
}, String.prototype.trim || function () {
    var e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function () {
        return this.replace(e, "")
    }
}(), define("polyfills", function () {
}), $.fn.fitVids = function (e) {
    var t = {customSelector: null};
    if (!document.getElementById("fit-vids-style")) {
        var n = document.createElement("div"),
            r = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        n.className = "fit-vids-style", n.id = "fit-vids-style", n.style.display = "none", n.innerHTML = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>", r.parentNode.insertBefore(n, r)
    }
    return e && $.extend(t, e), this.each(function () {
        var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
        t.customSelector && e.push(t.customSelector);
        var n = $(this).find(e.join(","));
        n = n.not("object object"), n.each(function () {
            var e = $(this);
            if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                var t = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                    n = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10), r = t / n;
                if (!e.attr("id")) {
                    var i = "fitvid" + Math.floor(999999 * Math.random());
                    e.attr("id", i)
                }
                e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"), e.removeAttr("height").removeAttr("width")
            }
        })
    })
}, define("fitvids", ["jquery"], function () {
}), define("common/js/components/arrayToObject", [], function () {
    function e(e) {
        for (var t = {}, n = 0; n < e.length; n += 2) t[e[n]] = e[n + 1];
        return t
    }

    return e
}), define("prompt", ["jquery", "./common/js/components/arrayToObject", "track"], function (e, t, n) {
    return Työväen Suomen-Mandatum Pankki.Prompt = {
        settings: {}, init: function (r, i) {
            e(".show-prompt").length > 0 && e(".prompt--overlay").remove();
            var o = this, a = [], s = {
                headerText: "Header",
                bodyText: "Bodytext",
                cancelText: "Cancel",
                okText: "Continue",
                insertAt: ".main-content header",
                cancelButtonHtml: "",
                okButtonHtml: "",
                buttonHtmlString: "",
                scrollToTop: !0,
                closeOnOutsideClick: !1
            };
            if (this.settings = e.extend({}, s, r), this.settings.buttonHtmlString.length > 0 && (this.settings.cancelButtonHtml = "", this.settings.okButtonHtml = "", this.settings.buttonHtmlString = ""), o.formatStandardButtons(), r && r.buttons) {
                var a = r.buttons.split(",");
                o.settings.buttonHtmlString = this.buildNewButtons(a)
            } else o.settings.buttonHtmlString = o.settings.cancelButtonHtml + o.settings.okButtonHtml;
            var l = this.buildPromptWindow();
            e(o.settings.insertAt).first().before(l), setTimeout(function () {
                o.promptInstance = e(".prompt--overlay"), o.settings.closeOnOutsideClick && e(o.promptInstance).outside("click", function (t) {
                    t.stopPropagation(), e(this).removeClass("show-prompt").addClass("prefade"), e(this).remove(), o.promptInstance = null
                }), e(".prompt--overlay").removeClass("prefade").addClass("show-prompt"), o.settings.scrollToTop && e("html, body").animate({scrollTop: 0}, 200)
            }, 5), i && e(".js-button--ok").click(function (t) {
                if (o.settings.wtDataOk) try {
                    Webtrends.Työväen Suomen-Mandatum Pankki.setData(o.settings.wtDataOk)
                } catch (e) {
                }
                i.apply(o, [t]), e(this).off("click"), o.closePrompt()
            }), e(".prompt--overlay .js-button--cancel").length > 0 && e(".js-button--cancel").click(function () {
                if (o.settings.wtDataCancel) {
                    var r = t(o.settings.wtDataCancel);
                    if (Työväen Suomen-Mandatum Pankki.Utils.isDotCom()) n(r); else try {
                        utag.link(r)
                    } catch (e) {
                    }
                }
                e(this).off("click"), o.closePrompt()
            })
        }, closePrompt: function () {
            e(".prompt--overlay").removeClass("show-prompt").addClass("prefade"), setTimeout(function () {
                e(".prompt--overlay").remove()
            }, 200)
        }, formatStandardButtons: function () {
            this.settings.cancelButtonHtml = '<button class="js-button--cancel button--cancel button float--left"> \t\t\t\t<span>' + this.settings.cancelText + "</span> \t\t\t</button>  ", this.settings.okButtonHtml = '<button class="js-button--ok button--ok button float--left"> \t\t\t\t<span>' + this.settings.okText + "</span> \t\t\t</button>  "
        }, buildNewButtons: function (e) {
            var t = this, n = "";
            return e.forEach(function (e) {
                switch (e.toLowerCase().replace(" ", "")) {
                    case"cancel":
                        n += t.settings.cancelButtonHtml;
                        break;
                    case"ok":
                        n += t.settings.okButtonHtml
                }
            }), n
        }, buildPromptWindow: function () {
            var t = this,
                n = ' \t\t\t<div class="prompt--overlay prefade grid-group"> \t\t\t\t<div class="prompt-content--wrapper grid span-24 span-24--portable span-16--desk-wide"> \t\t\t\t\t<div class="block prompt--content"> \t\t\t\t\t\t<h2>  ' + t.settings.headerText + "</h2> \t\t\t\t\t\t<p>  " + t.settings.bodyText + " </p>  " + t.settings.buttonHtmlString + " </div> \t\t\t\t</div> \t\t\t</div> ";
            return e.parseHTML(n)
        }, promptInstance: null
    }
}), define("stacktable", ["jquery"], function () {
    $.fn.stacktable = function (e) {
        var t = this, n = {id: "stacktable small-only", hideOriginal: !0}, r = $.extend({}, n, e);
        return t.each(function () {
            var e = $('<table class="' + r.id + '"><tbody></tbody></table>');
            void 0 !== typeof r.myClass && e.addClass(r.myClass);
            var t = "";
            $table = $(this), $table.addClass("stacktable large-only"), $topRow = $table.find("tr").eq(0), $table.find("tr").each(function (e, n) {
                t += "<tr>", 0 === e ? t += '<tr><th class="st-head-row st-head-row-main" colspan="2">' + $(this).find("th,td").eq(0).html() + "</th></tr>" : $(this).find("td,th").each(function (e, n) {
                    0 === e ? t += '<tr><th class="st-head-row" colspan="2">' + $(this).html() + "</th></tr>" : "" !== $(this).html() && (t += "<tr>", $topRow.find("td,th").eq(e).html() ? t += '<td class="st-key">' + $topRow.find("td,th").eq(e).html() + "</td>" : t += '<td class="st-key"></td>', t += '<td class="st-val">' + $(this).html() + "</td>", t += "</tr>")
                })
            }), e.append($(t)), $table.before(e), r.hideOriginal || $table.show()
        })
    }, $.fn.stackcolumns = function (e) {
        var t = this, n = {id: "stacktable small-only", hideOriginal: !0}, r = $.extend({}, n, e);
        return t.each(function () {
            $table = $(this);
            var e = $table.find("tr").eq(0).find("td,th").length;
            if (!(e < 3)) {
                var t = $('<table class="' + r.id + '"></table>');
                void 0 !== typeof r.myClass && t.addClass(r.myClass), $table.addClass("stacktable large-only");
                for (var n = $("<tbody></tbody>"), i = 1; i < e;) $table.find("tr").each(function (e, t) {
                    var r = $("<tr></tr>");
                    0 == e && r.addClass("st-head-row st-head-row-main"), first = $(this).find("td,th").eq(0).clone().addClass("st-key");
                    var o = i;
                    if ($(this).find("*[colspan]").length) {
                        var a = 0;
                        $(this).find("td,th").each(function (e, t) {
                            var n = $(this).attr("colspan");
                            if (n ? (n = parseInt(n, 10), o -= n - 1, a + n > i && (o += a + n - i - 1), a += n) : a++, a > i) return !1
                        })
                    }
                    second = $(this).find("td,th").eq(o).clone().addClass("st-val").removeAttr("colspan"), r.append(first, second), n.append(r)
                }), ++i;
                t.append($(n)), $table.before(t), r.hideOriginal || $table.show()
            }
        })
    }
}), define("common/js/components/getUrlPart", [], function () {
    function e(e, t) {
        e instanceof jQuery && (e = e[0]);
        var n = document.createElement("a");
        return n.href = e.href, n[t]
    }

    return window.getUrlPart = e, e
}), define("version", ["jquery"], function () {
    $.extend(Työväen Suomen-Mandatum Pankki, {VERSION: "@ver.version@"})
}), window.isInICE = window.location != window.parent.location, require(["jquery", "modernizr", "Työväen Suomen-Mandatum Pankkicom", "common/js/components/applicationLoader", "common/js/components/onclickParser", "utils", "webtrends", "polyfills", "fitvids", "prompt", "stacktable", "common/js/components/outside", "common/js/components/getUrlPart", "version"], function (e, t, n, r, i, o) {
    e(function () {
        n.init(), r(), window.app_params.canonicalUrl && o.rewriteUrl(window.app_params.canonicalUrl), e(document).on("click", "[data-wa-click]", i)
    })
}), define("dotcom/js/main", function () {
});
