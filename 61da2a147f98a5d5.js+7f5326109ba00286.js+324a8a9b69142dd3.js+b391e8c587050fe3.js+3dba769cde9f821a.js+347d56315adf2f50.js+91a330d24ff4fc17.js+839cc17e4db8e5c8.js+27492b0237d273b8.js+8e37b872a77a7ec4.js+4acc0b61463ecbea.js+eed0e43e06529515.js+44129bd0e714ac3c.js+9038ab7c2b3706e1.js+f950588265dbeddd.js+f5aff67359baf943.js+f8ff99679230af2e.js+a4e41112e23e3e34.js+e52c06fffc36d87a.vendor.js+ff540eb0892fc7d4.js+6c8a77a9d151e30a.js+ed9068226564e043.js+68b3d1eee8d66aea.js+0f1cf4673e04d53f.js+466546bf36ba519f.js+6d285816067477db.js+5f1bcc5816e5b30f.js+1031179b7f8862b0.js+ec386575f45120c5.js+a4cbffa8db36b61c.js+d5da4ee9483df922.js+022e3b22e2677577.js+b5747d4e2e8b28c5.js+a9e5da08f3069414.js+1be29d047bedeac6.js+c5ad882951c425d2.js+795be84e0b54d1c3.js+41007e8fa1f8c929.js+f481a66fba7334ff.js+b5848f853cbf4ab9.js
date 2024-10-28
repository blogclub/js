; // __FILE_CONTENT_FOR__:61da2a147f98a5d5.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[52368], {

    /****/
    105206:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:7f5326109ba00286.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[9453], {

    /***/
    366263:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:324a8a9b69142dd3.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[4427], {

    /***/
    564089:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(888537);
        __web_req__(105206);
        __web_req__(366263);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:b391e8c587050fe3.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[22593], {

    /***/
    835547:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var Cf = __c.Cf;
            var Avc,
                Bvc,
                Cvc,
                ct;
            __c.zvc = function(a, b, c) {
                return yvc(() => {
                    var d = Math,
                        e = d.round;
                    var f = c() * (b - a) + a;
                    return {
                        width: `${e.call(d, 100 * f)}%`
                    }
                }, [a, b, c])
            };
            Avc = __webpack_require__(443763);
            Bvc = Avc.jsxs;
            Cvc = Avc.Fragment;
            ct = Avc.jsx;
            var Dvc = __webpack_require__(875604),
                Evc = Dvc.memo,
                yvc = Dvc.useMemo;
            var Fvc = __webpack_require__,
                Gvc = Fvc(993864),
                Hvc = Fvc.n_x(Gvc)();
            __c.Ivc = Evc(({lines: a=2, index: b, margins: c="default", minLength: d=.4, maxLength: e=.8, random: f=Math.random}) => {
                const g = __c.zvc(d, e, f);
                return ct("div", {
                    className: Hvc("WKQDUQ", {
                        NR53kQ: "default" === c
                    }),
                    children: Array(a).fill(0).map((h, k) => ct("div", {
                        className: Hvc("d0N_5A"),
                        style: k === a - 1 ? g : void 0,
                        children: ct(Cf, {
                            shape: "text",
                            index: b + k / a * .5
                        })
                    }, k))
                })
            });
            __c.Jvc = Evc(({index: a, margins: b="default", minLength: c=.5, maxLength: d=1, random: e=Math.random}) => {
                c = __c.zvc(c, d, e);
                return Bvc("div", {
                    className: Hvc("RBXiRQ", {
                        NR53kQ: "default" === b
                    }),
                    children: [ct("div", {
                        className: "Ix_CWQ",
                        children: ct(Cf, {
                            shape: "circle",
                            index: a
                        })
                    }), ct("div", {
                        className: "aKbOeg",
                        children: ct("div", {
                            style: c,
                            children: ct(Cf, {
                                shape: "text",
                                index: a
                            })
                        })
                    })]
                })
            });
            var Kvc;
            __c.Lvc = Evc(() => Bvc(Cvc, {
                children: [ct(__c.Ivc, {
                    lines: 3,
                    index: 1
                }), ct(Kvc, {
                    GBe: 2,
                    count: 4
                })]
            }));
            Kvc = Evc(({GBe: a=0, count: b}) => ct(Cvc, {
                children: Array(b).fill(0).map((c, d) => ct(__c.Jvc, {
                    index: a + d
                }, a + d))
            }));
            __c.Mvc = Evc(() => ct(Cf, {
                shape: "rectangle",
                index: -1
            }));
            __c.Nvc = Evc(({mode: a}) => {
                switch (a) {
                case "backdrop":
                    return Bvc("div", {
                        className: "Rk9SSw",
                        children: [ct("div", {
                            className: "_nDs6w",
                            children: ct(__c.Df, {
                                padding: "4u",
                                children: Bvc(__c.Be, {
                                    spacing: "2u",
                                    children: [ct(Cf, {
                                        shape: "title",
                                        index: 0
                                    }), ct(__c.Lvc, {})]
                                })
                            })
                        }), ct("div", {
                            className: "LbCINQ",
                            children: ct(__c.Mvc, {})
                        })]
                    });
                case "sheet":
                    return ct(__c.Df, {
                        padding: "3u",
                        width: "full",
                        children: Bvc(__c.Be, {
                            spacing: "2u",
                            children: [ct(Cf, {
                                shape: "title",
                                index: 0
                            }), ct(__c.Lvc, {})]
                        })
                    });
                default:
                    throw new __c.r(a);
                }
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:3dba769cde9f821a.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[60004], {

    /***/
    222847:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var Ovc = __webpack_require__(875604).Component;
            __c.Pvc = class  extends Ovc{
                static getDerivedStateFromError()
                {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(a, b)
                {
                    if (this.props.G) {
                        var c,
                            d;
                        this.props.G.error(a, {
                            Ca: `Error Boundary: ${this.props.ZAg}.`,
                            extra: new Map(Object.entries(b))
                        });
                        null === (c = (d = this.props).onError) || void 0 === c ? void 0 : c.call(d, a, b)
                    } else
                        this.props.onError(a, b)
                }
                render()
                {
                    const a = this.props.children,
                        b = this.props.fallback;
                    return this.state.hasError ? b : a
                }
                constructor(a)
                {
                    super(a);
                    this.state = {
                        hasError: !1
                    }
                }
            }
            ;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:347d56315adf2f50.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[68933], {

    /***/
    306762:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        __web_req__(835547);
        __web_req__(222847);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var Uvc;
            __c.Vvc = function({Jac: a, G: b, njc: c, va: d, onError: e, onClose: f, bh: g=__c.Nvc, Dcj: {Dtf: h=!1, t2a: k="full", SX: l=!0}={}}) {
                return n => {
                    const p = Qvc.box(!0),
                        q = Rvc(() => {
                            p.get() && (p.set(!1), null === f || void 0 === f ? void 0 : f(), u.then(({cP: v}) => null === v || void 0 === v ? void 0 : v()))
                        }),
                        t = (v, w) => {
                            q();
                            null === b || void 0 === b ? void 0 : b.ya(v, {
                                Ca: `createShowLazyDialog failed to mount for "${a}".`,
                                extra: new Map(Object.entries(w))
                            });
                            null === e || void 0 === e ? void 0 : e(v, "mounting")
                        },
                        u = Svc(c().then(v => v({
                            ...n,
                            rd: q
                        })).catch(v => {
                            q();
                            null === b ||
                            void 0 === b ? void 0 : b.ya(v, {
                                Ca: `createShowLazyDialog failed to load for "${a}".`
                            });
                            null === e || void 0 === e ? void 0 : e(v, "loading");
                            throw v;
                        }));
                    d(Tvc(({onClose: v}) => {
                        const w = u.case({
                            fulfilled: E => E,
                            pending: () => g,
                            rejected: () => g
                        });
                        var y;
                        const z = null !== (y = null === w || void 0 === w ? void 0 : w.Dtf) && void 0 !== y ? y : h;
                        var B;
                        y = null !== (B = null === w || void 0 === w ? void 0 : w.t2a) && void 0 !== B ? B : k;
                        var D;
                        B = null !== (D = null === w || void 0 === w ? void 0 : w.Dtf) && void 0 !== D ? D : l;
                        return Uvc(__c.Pvc, {
                            G: void 0,
                            fallback: void 0,
                            onError: t,
                            children: Uvc(__c.hj,
                            {
                                open: p.get(),
                                oa: w,
                                xa: z ? void 0 : q,
                                Le: v,
                                wL: y,
                                SX: B
                            })
                        })
                    }));
                    return !0
                }
            };
            Uvc = __webpack_require__(443763).jsx;
            var Tvc = __webpack_require__(736241).Pi;
            __webpack_require__(875604);
            var Wvc = __webpack_require__(42782),
                Qvc = Wvc.LO,
                Rvc = Wvc.aD;
            var Svc = __webpack_require__(649799).p4;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:91a330d24ff4fc17.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[78031], {

    /***/
    794756:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.$s = {
                gh: 1,
                Cg: 2
            };
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:839cc17e4db8e5c8.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[90274], {

    /***/
    560566:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.at = {
                Lsg: 1,
                ISe: 2,
                uub: 3,
                p5c: 4,
                kyc: 5,
                mgb: 6,
                r6b: 7,
                yyc: 8,
                Tsg: 9,
                KSd: 10,
                pyc: 11,
                Ksg: 12,
                Msg: 13,
                zyc: 14,
                nyc: 15,
                Ayc: 16,
                lyc: 17,
                xyc: 18,
                Usg: 19,
                Qsg: 20,
                Ssg: 21,
                o5c: 22,
                NSe: 23,
                Osg: 24,
                MMa: 25,
                s6b: 26,
                jyc: 27,
                JSe: 28,
                qyc: 29,
                myc: 30,
                iyc: 31,
                syc: 32,
                tub: 33,
                vub: 34,
                OSe: 35,
                Byc: 36,
                tyc: 37,
                uyc: 38,
                wyc: 39,
                wub: 40,
                q6b: 41,
                Rsg: 42,
                p6b: 43,
                Nsg: 44,
                Psg: 45,
                LSd: 46,
                vyc: 47,
                MSe: 48,
                JSd: 49,
                s5c: 50,
                oyc: 51,
                ISd: 52,
                LSe: 53,
                KSe: 54,
                r5c: 55,
                ryc: 56,
                q5c: 57
            };
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:27492b0237d273b8.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[52054], {

    /***/
    41105:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.bt = {
                lz: 1,
                L2c: 2,
                tkg: 3,
                nLb: 4,
                Mpg: 5,
                rlg: 6,
                zfi: 7,
                PSe: 8,
                Mqg: 9,
                X3c: 10,
                ang: 11,
                Lkg: 12,
                g6b: 13,
                qsg: 14,
                bPe: 15,
                Mkg: 16,
                CRd: 17,
                Npg: 18,
                SOe: 19,
                DRd: 20,
                Gpg: 21,
                Ipg: 22,
                $Re: 23,
                UOe: 24,
                ySd: 25,
                eci: 26,
                MSd: 27,
                nQd: 28,
                ukg: 29,
                f8h: 30,
                cci: 31,
                dci: 32,
                PLb: 33,
                Pxc: 34,
                GSd: 35,
                fci: 36,
                HQd: 37,
                Dmi: 38,
                Flg: 39,
                Drg: 40,
                Hqg: 41,
                Erg: 42,
                Frg: 43,
                cui: 44,
                dui: 45
            };
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:8e37b872a77a7ec4.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[18785], {

    /***/
    728097:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(835547);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var mwc,
                hwc,
                iwc;
            __c.et = function({v4: a, onError: b, onClose: c, EY: d, B4: e}) {
                const f = hwc.box(!0),
                    g = k => {
                        f.get() && (iwc(() => f.set(!1)), null === c || void 0 === c ? void 0 : c(k))
                    },
                    h = jwc(a(g).catch(k => {
                        if (b)
                            try {
                                b(k)
                            } catch (l) {
                                throw g(e), l;
                            }
                        else
                            throw g(e), k;
                    }));
                return {
                    get open() {
                        return f.get()
                    },
                    get currentNode() {
                        return h.case({
                            fulfilled: k => (null === k || void 0 === k ? void 0 : k.currentNode) || d,
                            pending: () => d,
                            rejected: k => {
                                throw k;
                            }
                        })
                    },
                    D$: k => {
                        f.get() && (g(k), h.then(l => null === l || void 0 === l ? void 0 : l.De(k)))
                    }
                }
            };
            __c.ft = function(a="marquee_node") {
                return {
                    type: a,
                    title: "",
                    content: kwc(__c.Lvc, {}),
                    Ra: kwc(__c.Mvc, {}),
                    footer: void 0,
                    alert: void 0,
                    Oa: void 0,
                    keyFrame: "loading-placeholder"
                }
            };
            __c.lwc = function(a={}) {
                return Object.assign(a, {
                    title: "",
                    body: kwc(__c.Lvc, {}),
                    Ra: kwc(__c.Mvc, {}),
                    Hf: !1,
                    QD: "fixed",
                    keyFrame: "loading-placeholder",
                    vj: "loading-placeholder",
                    type: "adaptive_content_node"
                })
            };
            mwc = __webpack_require__(42782);
            hwc = mwc.LO;
            iwc = mwc.z;
            var jwc = __webpack_require__(649799).p4;
            var kwc = __webpack_require__(443763).jsx;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:4acc0b61463ecbea.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[5201], {

    /***/
    741660:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var pwc,
                owc;
            __c.gt = function() {
                const a = (0, __c.nwc)(() => new Map, []);
                return {
                    pva: b => {
                        if (a.has(b))
                            return __c.m(a.get(b));
                        const c = owc();
                        a.set(b, c);
                        return c
                    }
                }
            };
            pwc = __webpack_require__(875604);
            __c.nwc = pwc.useMemo;
            owc = pwc.createRef;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:eed0e43e06529515.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[60592], {

    /***/
    335994:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(741660);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var rwc,
                swc;
            __c.qwc = function(a, b) {
                return (0, __c.nwc)(() => {
                    const c = new Map;
                    return d => {
                        if (c.has(d))
                            return __c.m(c.get(d));
                        const e = a(d);
                        c.set(d, e);
                        return e
                    }
                }, b)
            };
            __c.zwc = function({children: a, keyFrame: b, cT: c, ariaLive: d, SCb: e=!1, Fxg: f, containerClassName: g, qQg: h, ihj: k, ipa: l, KAa: n, rXl: p, $Yh: q}) {
                const {pva: t} = __c.gt(),
                    {hyj: u, removeFrame: v} = rwc(b, a),
                    w = __c.qwc(y => () => {
                        (!1 === e || "function" === typeof e && !e(y)) && v(y)
                    }, [v, e]);
                return swc("div", {
                    className: twc(g, "epgNPA", {
                        NvaaRg: "hidden" === l,
                        DiwaPA: "fill-height" === c,
                        _3pVd7A: "flex-grow" === c
                    }),
                    children: swc("div", {
                        className: twc("KhPLRA", h),
                        "aria-live": d,
                        style: k,
                        role: "region",
                        children: [...u.map(({key: y, element: z}) => swc(uwc, {
                            in: y ===
                            b,
                            timeout: f,
                            classNames: q,
                            mountOnEnter: !0,
                            unmountOnExit: !e,
                            nodeRef: t(y),
                            onExited: w(y),
                            children: B => swc(__c.vwc.Provider, {
                                value: B,
                                children: swc("div", {
                                    className: twc("T3uz5Q", p, {
                                        NvaaRg: "hidden" === n
                                    }),
                                    ref: t(y),
                                    "aria-hidden": B === wwc || B === xwc || B === ywc,
                                    children: y === b ? a : z
                                })
                            })
                        }, y)), u.every(y => y.key !== b) && swc(uwc, {
                            in: !1,
                            timeout: f,
                            classNames: q,
                            mountOnEnter: !0,
                            unmountOnExit: !e,
                            nodeRef: t(b),
                            onExited: e ? void 0 : w(b),
                            children: y => swc(__c.vwc.Provider, {
                                value: y,
                                children: swc("div", {
                                    className: twc("T3uz5Q", p),
                                    ref: t(b),
                                    "aria-hidden": y ===
                                    wwc || y === xwc || y === ywc,
                                    children: a
                                })
                            })
                        }, b)]
                    })
                })
            };
            rwc = function(a, b) {
                const [c, d] = Awc(() => [{
                    key: a,
                    element: b
                }]);
                Bwc(() => {
                    d(f => f.every(g => g.key !== a) ? f.concat({
                        key: a,
                        element: b
                    }) : f.map(g => g.key === a ? {
                        key: a,
                        element: b
                    } : g))
                }, [a, b]);
                const e = Cwc(f => {
                    d(g => g.filter(h => h.key !== f))
                }, []);
                return {
                    hyj: c,
                    removeFrame: e
                }
            };
            swc = __webpack_require__(443763).jsx;
            var Dwc = __webpack_require__,
                Ewc = Dwc(993864),
                twc = Dwc.n_x(Ewc)();
            var Fwc,
                Gwc,
                Awc,
                Bwc,
                Cwc;
            Fwc = __webpack_require__(875604);
            Gwc = Fwc.createContext;
            __c.Hwc = Fwc.useContext;
            Awc = Fwc.useState;
            Bwc = Fwc.useLayoutEffect;
            Cwc = Fwc.useCallback;
            var uwc = __webpack_require__(489212).Z;
            var Iwc = __webpack_require__(92009),
                wwc = Iwc.Ix,
                xwc = Iwc.$r,
                ywc = Iwc.Wj;
            __c.vwc = Gwc(void 0);
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:44129bd0e714ac3c.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[68482], {

    /***/
    568149:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        __web_req__(335994);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var Jwc = __webpack_require__,
                Kwc = Jwc(993864),
                Lwc = Jwc.n_x(Kwc)();
            var Mwc = __webpack_require__(875604).memo;
            var Nwc,
                Owc;
            Nwc = Number.parseInt("300ms", 10);
            Owc = {
                enter: "gWeP3g",
                enterActive: "YL_ApQ",
                enterDone: void 0,
                exitActive: "qqCHKg",
                exitDone: "gum40Q"
            };
            __c.ht = Mwc(function({No: a=!1, children: b, keyFrame: c, cT: d, ipa: e="hidden", KAa: f="hidden", ariaLive: g, SCb: h, Nce: k="none"}) {
                a = __c.Sd() && !a;
                return __c.zwc({
                    children: b,
                    keyFrame: c,
                    cT: d,
                    ariaLive: g,
                    ipa: e,
                    KAa: f,
                    SCb: h,
                    Fxg: a ? Nwc : 0,
                    qQg: Lwc({
                        _4C1vIA: a,
                        pOll6Q: "none" === k,
                        g1T5pQ: "layout" === k
                    }),
                    $Yh: Owc
                })
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:9038ab7c2b3706e1.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[64855], {

    /***/
    69320:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var P1a,
                U1a,
                Q1a,
                R1a;
            __c.vk = function() {
                return P1a().prefersReducedMotion
            };
            __c.wk = function() {
                const a = P1a(),
                    [b, c] = Q1a(a.prefersReducedMotion);
                R1a(() => {
                    if (null != a) {
                        const d = e => c(e.matches);
                        a.addListener(d);
                        return () => {
                            a.removeListener(d)
                        }
                    }
                }, [a, c]);
                return b
            };
            P1a = function() {
                return null !== S1a && void 0 !== S1a ? S1a : S1a = new T1a
            };
            U1a = __webpack_require__(875604);
            Q1a = U1a.useState;
            R1a = U1a.useEffect;
            var T1a = class {
                    get prefersReducedMotion()
                    {
                        return null != this.ZOc && this.ZOc.matches
                    }
                    addListener(a)
                    {
                        var b;
                        null === (b = this.ZOc) || void 0 === b ? void 0 : b.addListener(a)
                    }
                    removeListener(a)
                    {
                        var b;
                        null === (b = this.ZOc) || void 0 === b ? void 0 : b.removeListener(a)
                    }
                    constructor()
                    {
                        this.ZOc = "undefined" === typeof window ? void 0 : window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)")
                    }
                }
                ,
                S1a;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:f950588265dbeddd.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[35202], {

    /***/
    240798:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(69320);
        __web_req__(280716);
        __web_req__(335994);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var Qwc = function(a) {
                    return Pwc(() => "string" === typeof a ? Number.parseInt(a, 10) : a, [a])
                },
                Rwc = __webpack_require__,
                Swc = Rwc(993864),
                Twc = Rwc.n_x(Swc)();
            var Uwc = __webpack_require__(875604),
                Pwc = Uwc.useMemo;
            var Vwc;
            Vwc = {
                enter: "U50iPg",
                enterActive: "UNS9Xg",
                enterDone: void 0,
                exitActive: "YcMl9w",
                exitDone: "oFTRzg"
            };
            __c.it = (0, Uwc.memo)(function({No: a, children: b, keyFrame: c, direction: d, cT: e, ipa: f="hidden", KAa: g="hidden", ariaLive: h, SCb: k, Nce: l="none", duration: n, zgj: p, zrj: q, Arj: t}) {
                var u = __c.Sd(),
                    v = __c.wk();
                a = u && !a;
                d = v || null == d ? void 0 : d;
                v = Qwc(null !== n && void 0 !== n ? n : "var(--j49DWw)");
                u = Qwc(null !== p && void 0 !== p ? p : "var(--c1IzXw)");
                return __c.zwc({
                    children: b,
                    keyFrame: c,
                    cT: e,
                    ariaLive: h,
                    ipa: f,
                    KAa: g,
                    SCb: k,
                    Fxg: a ? v + u : 0,
                    qQg: Twc({
                        _5aI0pg: a,
                        axqc0g: "forward" === d,
                        VlOegQ: "back" === d,
                        FE5aXA: "replace" === d,
                        zdRd5w: "none" === l,
                        AkHFfg: "layout" ===
                        l
                    }),
                    ihj: a ? {
                        "--chgjPA": q,
                        "--Kb9rvA": t,
                        "--j49DWw": null != n ? `${n}ms` : void 0,
                        "--c1IzXw": null != p ? `${p}ms` : void 0
                    } : void 0,
                    $Yh: Vwc
                })
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:f5aff67359baf943.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[63906], {

    /***/
    666721:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(240798);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var Wwc = __webpack_require__(443763).jsx;
            var Xwc = __webpack_require__(875604),
                Ywc = Xwc.useMemo;
            __c.jt = (0, Xwc.memo)(function(a) {
                const b = Ywc(() => Number.parseInt("250ms", 10), []),
                    c = Ywc(() => Number.parseInt("50ms", 10), []);
                return Wwc(__c.it, {
                    ...a,
                    duration: b,
                    zgj: c,
                    zrj: "40px",
                    Arj: "0px"
                })
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:f8ff99679230af2e.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[17480], {

    /***/
    50830:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var GZa = function(a, b) {
                    return FZa.toArray(Array.from(b, (c, d) => {
                        if (c instanceof Element) {
                            const f = GZa(a, c.childNodes),
                                g = a.Skb.get(c.tagName.toUpperCase());
                            if (g)
                                try {
                                    return g(c, f, d)
                                } catch (h) {
                                    var e;
                                    null === (e = a.onError) || void 0 === e ? void 0 : e.call(a, h)
                                }
                            return f
                        }
                        if (c instanceof Text)
                            return c.textContent
                    }))
                },
                FZa = __webpack_require__(875604).Children;
            __c.Xj = class {
                Ke(a, b)
                {
                    this.Skb.set(a.toUpperCase(), b);
                    return this
                }
                render(a)
                {
                    return GZa(this, this.parser.parseFromString(a, "text/html").body.childNodes)
                }
                constructor(a)
                {
                    this.onError = a;
                    this.Skb = new Map;
                    this.parser = new DOMParser
                }
            }
            ;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:a4e41112e23e3e34.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[41470], {

    /***/
    936917:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        __web_req__(50830);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var kt;
            var bxc,
                cxc,
                dxc,
                exc;
            __c.Zwc = function(a) {
                return a.Ke("Strike", (b, c) => kt("del", {
                    children: c
                }))
            };
            __c.$wc = function(a) {
                return a.Ke("Bold", (b, c) => kt("strong", {
                    children: c
                }))
            };
            __c.axc = function(a) {
                return a.Ke("Italic", (b, c) => kt("em", {
                    children: c
                }))
            };
            bxc = function({tag: a="Anchor", href: b, target: c, rel: d, onClick: e, Component: f=__c.Ke}) {
                return g => g.Ke(a, (h, k) => kt(f, {
                    href: b,
                    target: c,
                    rel: d,
                    onClick: e,
                    role: e ? "button" : void 0,
                    children: k
                }))
            };
            cxc = function({tag: a="Anchor", Na: b, Component: c=__c.og}) {
                return d => d.Ke(a, (e, f) => kt(c, {
                    Na: b,
                    children: f
                }))
            };
            dxc = __webpack_require__(443763);
            kt = __c.kt = dxc.jsx;
            exc = dxc.Fragment;
            var fxc = __webpack_require__(875604),
                gxc = fxc.memo,
                hxc = fxc.useMemo;
            __c.ixc = gxc(function({children: a, onError: b, zZa: c}) {
                const d = hxc(() => {
                    const e = new __c.Xj(b);
                    c.forEach(f => f(e));
                    return e
                }, [c, b]);
                return kt(exc, {
                    children: d.render(a)
                })
            });
            var jxc,
                kxc,
                mxc;
            jxc = [function(a) {
                return a.Ke("Red", (b, c) => kt("span", {
                    className: "x09pbg",
                    children: c
                }))
            }, function(a) {
                return a.Ke("DarkRed", (b, c) => kt("span", {
                    className: "iIYTDA",
                    children: c
                }))
            }, function(a) {
                return a.Ke("DarkGreen", (b, c) => kt("span", {
                    className: "XNFcyw",
                    children: c
                }))
            }, __c.Zwc, function(a) {
                return a.Ke("StrikeLight", (b, c) => kt("del", {
                    children: c
                }))
            }, __c.$wc, function(a) {
                return a.Ke("SemiBold", (b, c) => kt("span", {
                    className: "HAeb_w",
                    children: c
                }))
            }, __c.axc, function(a) {
                return a.Ke("Super", (b, c) => kt("sup", {
                    children: c
                }))
            },
            function(a) {
                return a.Ke("FauxAnchor", (b, c) => kt("span", {
                    className: "Z_bTNQ",
                    children: c
                }))
            }];
            __c.lt = gxc(function(a) {
                return kt(__c.ixc, {
                    ...a,
                    zZa: jxc
                })
            });
            kxc = gxc(function({links: a, ...b}) {
                const c = hxc(() => {
                    const d = a.map((e, f) => {
                        f = 0 < f ? `Anchor${f + 1}` : "Anchor";
                        return "string" === typeof e ? bxc({
                            href: e,
                            tag: f
                        }) : "function" === typeof e ? bxc({
                            href: "#",
                            tag: f,
                            onClick: e
                        }) : bxc({
                            ...e,
                            tag: f
                        })
                    });
                    return [...jxc, ...d]
                }, [a]);
                return kt(__c.ixc, {
                    ...b,
                    zZa: c
                })
            });
            __c.lxc = gxc(function({href: a, target: b, rel: c, ...d}) {
                return kt(kxc, {
                    ...d,
                    links: [{
                        href: a,
                        target: b,
                        rel: c
                    }]
                })
            });
            __c.mt = gxc(function({onClick: a, ...b}) {
                return kt(kxc, {
                    ...b,
                    links: [a]
                })
            });
            mxc = gxc(function({actions: a, ...b}) {
                const c = hxc(() => {
                    const d = a.map((e, f) => cxc({
                        Na: e,
                        tag: 0 < f ? `Anchor${f + 1}` : "Anchor"
                    }));
                    return [...jxc, ...d]
                }, [a]);
                return kt(__c.ixc, {
                    ...b,
                    zZa: c
                })
            });
            __c.nxc = gxc(function({action: a, ...b}) {
                return kt(mxc, {
                    ...b,
                    actions: [a]
                })
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:e52c06fffc36d87a.vendor.js
(self.webpackChunk_canva_web = self.webpackChunk_canva_web || []).push([[19008], {
    828195: (e, t, o) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var s = t[o];
                        s.enumerable = s.enumerable || !1,
                        s.configurable = !0,
                        "value" in s && (s.writable = !0),
                        Object.defineProperty(e, s.key, s)
                    }
                }
                return function(t, o, s) {
                    return o && e(t.prototype, o), s && e(t, s), t
                }
            }(),
            r = o(875604),
            n = l(r),
            i = l(o(514993));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var o = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return o.scrollListener = o.scrollListener.bind(o), o.eventListenerOptions = o.eventListenerOptions.bind(o), o.mousewheelListener = o.mousewheelListener.bind(o), o
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    this.pageLoaded = this.props.pageStart,
                    this.options = this.eventListenerOptions(),
                    this.attachScrollListener()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    if (this.props.isReverse && this.loadMore) {
                        var e = this.getParentElement(this.scrollComponent);
                        e.scrollTop = e.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop,
                        this.loadMore = !1
                    }
                    this.attachScrollListener()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.detachScrollListener(),
                    this.detachMousewheelListener()
                }
            }, {
                key: "isPassiveSupported",
                value: function() {
                    var e = !1,
                        t = {
                            get passive() {
                                e = !0
                            }
                        };
                    try {
                        document.addEventListener("test", null, t),
                        document.removeEventListener("test", null, t)
                    } catch (o) {}
                    return e
                }
            }, {
                key: "eventListenerOptions",
                value: function() {
                    this.props.useCapture;
                    return this.isPassiveSupported() ? {
                        useCapture: this.props.useCapture,
                        passive: !0
                    } : {
                        passive: !1
                    }
                }
            }, {
                key: "setDefaultLoader",
                value: function(e) {
                    this.defaultLoader = e
                }
            }, {
                key: "detachMousewheelListener",
                value: function() {
                    var e = window;
                    !1 === this.props.useWindow && (e = this.scrollComponent.parentNode),
                    e.removeEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture)
                }
            }, {
                key: "detachScrollListener",
                value: function() {
                    var e = window;
                    !1 === this.props.useWindow && (e = this.getParentElement(this.scrollComponent)),
                    e.removeEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture),
                    e.removeEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture)
                }
            }, {
                key: "getParentElement",
                value: function(e) {
                    var t = this.props.getScrollParent && this.props.getScrollParent();
                    return null != t ? t : e && e.parentNode
                }
            }, {
                key: "filterProps",
                value: function(e) {
                    return e
                }
            }, {
                key: "attachScrollListener",
                value: function() {
                    var e = this.getParentElement(this.scrollComponent);
                    if (this.props.hasMore && e) {
                        var t = window;
                        !1 === this.props.useWindow && (t = e),
                        t.addEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture),
                        t.addEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture),
                        t.addEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture),
                        this.props.initialLoad && this.scrollListener()
                    }
                }
            }, {
                key: "mousewheelListener",
                value: function(e) {
                    1 !== e.deltaY || this.isPassiveSupported() || e.preventDefault()
                }
            }, {
                key: "scrollListener",
                value: function() {
                    var e = this.scrollComponent,
                        t = window,
                        o = this.getParentElement(e),
                        s = void 0;
                    if (this.props.useWindow) {
                        var r = document.documentElement || document.body.parentNode || document.body,
                            n = void 0 !== t.pageYOffset ? t.pageYOffset : r.scrollTop;
                        s = this.props.isReverse ? n : this.calculateOffset(e, n)
                    } else
                        s = this.props.isReverse ? o.scrollTop : e.scrollHeight - o.scrollTop - o.clientHeight;
                    s < Number(this.props.threshold) && e && null !== e.offsetParent && (this.detachScrollListener(), this.beforeScrollHeight = o.scrollHeight, this.beforeScrollTop = o.scrollTop, "function" == typeof this.props.loadMore && (this.props.loadMore(this.pageLoaded += 1), this.loadMore = !0))
                }
            }, {
                key: "calculateOffset",
                value: function(e, t) {
                    return e ? this.calculateTopPosition(e) + (e.offsetHeight - t - window.innerHeight) : 0
                }
            }, {
                key: "calculateTopPosition",
                value: function(e) {
                    return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.filterProps(this.props),
                        o = t.children,
                        s = t.element,
                        r = t.hasMore,
                        i = (t.initialLoad, t.isReverse),
                        l = t.loader,
                        a = (t.loadMore, t.pageStart, t.ref),
                        u = (t.threshold, t.useCapture, t.useWindow, t.getScrollParent, function(e, t) {
                            var o = {};
                            for (var s in e)
                                t.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s]);
                            return o
                        }(t, ["children", "element", "hasMore", "initialLoad", "isReverse", "loader", "loadMore", "pageStart", "ref", "threshold", "useCapture", "useWindow", "getScrollParent"]));
                    u.ref = function(t) {
                        e.scrollComponent = t,
                        a && a(t)
                    };
                    var p = [o];
                    return r && (l ? i ? p.unshift(l) : p.push(l) : this.defaultLoader && (i ? p.unshift(this.defaultLoader) : p.push(this.defaultLoader))), n.default.createElement(s, u, p)
                }
            }]), t
        }(r.Component);
        a.propTypes = {
            children: i.default.node.isRequired,
            element: i.default.node,
            hasMore: i.default.bool,
            initialLoad: i.default.bool,
            isReverse: i.default.bool,
            loader: i.default.node,
            loadMore: i.default.func.isRequired,
            pageStart: i.default.number,
            ref: i.default.func,
            getScrollParent: i.default.func,
            threshold: i.default.number,
            useCapture: i.default.bool,
            useWindow: i.default.bool
        },
        a.defaultProps = {
            element: "div",
            hasMore: !1,
            initialLoad: !0,
            pageStart: 0,
            ref: null,
            threshold: 250,
            useWindow: !0,
            isReverse: !1,
            useCapture: !1,
            loader: null,
            getScrollParent: null
        },
        t.default = a,
        e.exports = t.default
    },
    853388: (e, t, o) => {
        e.exports = o(828195)
    }
}]);
; // __FILE_CONTENT_FOR__:ff540eb0892fc7d4.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[95830], {

    /***/
    879833:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var h7a;
            h7a = __c.h7a = __webpack_require__(443763).jsx;
            var i7a = __webpack_require__(875604).Component;
            var j7a = __webpack_require__(853388);
            var k7a = __webpack_require__,
                l7a = k7a(993864),
                m7a = k7a.n_x(l7a)();
            var n7a = __webpack_require__(984956).Z;
            var o7a = __webpack_require__(42782).p6;
            var p7a = {
                colorBlackA60: "rgba(17, 23, 29, 0.6)",
                colorWhiteA50: "rgba(255, 255, 255, 0.5)",
                baseUnit: "8px",
                radiusElementRound: "9999px",
                themeDark: ":global(.dark)",
                themeLight: ":global(.light)",
                scrollBarThumbColor: "var(--WRSB_g)",
                scrollbars: "ZoFOcA",
                reserveSpace: "v0NzYQ",
                vertical: "_1hUVhg",
                notWebkit: "KQ6TXg",
                fixedWidth: "GbDmWw",
                horizontal: "ujmVCQ",
                forceScroll: "c_ZDiA",
                content: "PEzRtA"
            };
            var r7a;
            __c.q7a = () => "undefined" !== typeof window ? /AppleWebKit\//i.test(window.navigator.userAgent) : void 0;
            r7a = __c.q7a();
            __c.s7a = class  extends i7a{
                componentWillUnmount()
                {
                    null != this.ctb && (window.cancelAnimationFrame(this.ctb), this.ctb = void 0)
                }
                render()
                {
                    const {children: a, orientation: b, style: c, width: d, E9d: e, vna: f=!0, Fih: g=!1, onScroll: h} = this.props,
                        k = {
                            minWidth: d,
                            maxWidth: d,
                            ...c
                        },
                        l = !!d,
                        n = g ? h7a(n7a, {
                            onResize: this.MFf,
                            children: ({measureRef: p}) => h7a("div", {
                                className: "PEzRtA",
                                ref: p,
                                children: a
                            })
                        }) : a;
                    return h7a(n7a, {
                        onResize: this.MFf,
                        scroll: !0,
                        offset: !0,
                        innerRef: this.Mqb,
                        children: ({measureRef: p}) => h7a("div", {
                            style: k,
                            className: m7a("ZoFOcA",
                            p7a[b], {
                                KQ6TXg: !r7a,
                                GbDmWw: l,
                                c_ZDiA: e,
                                v0NzYQ: f
                            }),
                            onScroll: h && this.MFf,
                            ref: p,
                            children: n
                        })
                    })
                }
                scrollTo({x: a, y: b})
                {
                    const c = this.aqc;
                    c && c.scrollTo(null != a ? a : c.scrollLeft, null != b ? b : c.scrollTop)
                }
                constructor(...a)
                {
                    super(...a);
                    this.aqc = null;
                    this.zFd = {
                        hB: !1
                    };
                    this.Mqb = b => {
                        this.aqc = b;
                        if (this.props.xj) {
                            const c = this.props.xj;
                            "function" === typeof c ? c(b) : c.current = b
                        }
                    };
                    this.MFf = () => {
                        const {mNm: b=!0} = this.props;
                        b ? (null != this.ctb && (window.cancelAnimationFrame(this.ctb), this.ctb = void 0), this.ctb = window.requestAnimationFrame(() =>
                        {
                            this.ctb = void 0;
                            this.JNd()
                        })) : this.aqc && this.JNd()
                    };
                    this.JNd = () => {
                        const b = this.props.onScroll;
                        var c = this.props.orientation,
                            d = __c.m(this.aqc, "can not have measured scroll if the element is not mounted");
                        const e = {
                            top: d.scrollTop,
                            height: d.scrollHeight,
                            left: d.scrollLeft,
                            width: d.scrollWidth
                        };
                        d = {
                            top: d.offsetTop,
                            height: d.offsetHeight,
                            left: d.offsetLeft,
                            width: d.offsetWidth
                        };
                        c = ("vertical" === c ? e.height > d.height : e.width > d.width) ? {
                            hB: !0,
                            top: Math.min(Math.max(0, e.top / (e.height - d.height)), 1) || 0,
                            left: Math.min(Math.max(0,
                            e.left / (e.width - d.width)), 1) || 0,
                            scroll: e,
                            offset: d
                        } : {
                            hB: !1
                        };
                        o7a.structural(this.zFd, c) || (this.zFd = c, b && b(c))
                    }
                }
            }
            ;
            __c.t7a = a => h7a(__c.s7a, {
                orientation: "vertical",
                ...a
            });
            __c.u7a = class  extends i7a{
                render()
                {
                    const {children: a, loadMore: b, hasMore: c, initialLoad: d, getScrollParent: e, ...f} = this.props;
                    return h7a(__c.t7a, {
                        ...f,
                        Fih: !1,
                        children: h7a("default" in j7a ? j7a.default : j7a, {
                            initialLoad: d,
                            loadMore: this.loadMore,
                            hasMore: c,
                            useWindow: !1,
                            getScrollParent: e,
                            children: a
                        })
                    })
                }
                constructor(...a)
                {
                    super(...a);
                    this.loadMore = () => {
                        this.props.loadMore && this.props.loadMore()
                    }
                }
            }
            ;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:6c8a77a9d151e30a.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[99727], {

    /***/
    740999:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        __web_req__(879833);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var xwb;
            var uwb,
                vwb,
                wwb;
            __c.twb = ({xa: a, Le: b, Uvh: c, ...d}) => {
                const [e, f] = (0, __c.ld)([void 0]);
                (0, __c.od)(() => {
                    "none" === c ? f([void 0]) : f([__c.aSa, void 0])
                }, [c]);
                const [g, h] = (0, __c.ld)(0),
                    k = (0, __c.re)(n => {
                        switch (n.direction) {
                        case "opening":
                            g + 1 !== e.length && h(g + 1);
                            break;
                        case "closing":
                            0 === g ? a && a({
                                action: "resize"
                            }) : h(g - 1);
                            break;
                        default:
                            throw new __c.r(n.direction);
                        }
                    }, [g, e.length, a]),
                    l = (0, __c.re)(() => {
                        h(0);
                        b && b()
                    }, [b]);
                return (0, __c.qd)(__c.$Ra, {
                    ...d,
                    tOa: __c.NFa(),
                    layers: __c.bSa,
                    createPortal: __c.EIa,
                    hasShadow: !0,
                    i7d: !0,
                    from: "bottom",
                    Oje: void 0,
                    Fke: void 0,
                    hB: !1,
                    kRb: !0,
                    B1j: e[g],
                    xa: a,
                    yek: k,
                    Le: l
                })
            };
            uwb = a => (0, __c.h7a)(__c.s7a, {
                orientation: "horizontal",
                ...a
            });
            vwb = __webpack_require__(443763);
            wwb = vwb.jsxs;
            xwb = __c.xwb = vwb.jsx;
            var ywb = __webpack_require__,
                zwb = ywb(993864),
                Awb = ywb.n_x(zwb)();
            var Bwb = __webpack_require__(875604).Component;
            var Cwb = __webpack_require__(42782),
                Dwb = Cwb.LO,
                Ewb = Cwb.aD;
            var Fwb = __webpack_require__(240236).gn;
            var Gwb = {
                colorBlackA07: "rgba(64, 87, 109, 0.07)",
                colorBlackA15: "rgba(57, 76, 96, 0.15)",
                baseUnit: "8px",
                colorCanvas: "var(--Tp54Vw)",
                colorPage: "var(--C-q6Ig)",
                colorSurface: "var(--4RaSjg)",
                colorTabdock: "var(--dVucJw)",
                themeDark: ":global(.dark)",
                themeLight: ":global(.light)",
                shadowSize: "40px",
                halfShadowSize: "20px",
                scrollbarWidth: "15px",
                shadowBlockSize: "16px",
                shadowOffset: "-16px",
                scrollbarShadowCast: "var(--GOd5gA)",
                scrollbarShadowFade: "var(--Pb1Qvw)",
                scrollbarShadowCastCanvas: "var(--mhXVmQ)",
                scrollbarShadowCastTabdock: "var(--lq6ZjA)",
                scrollbarShadowCastPage: "var(--sTmP_A)",
                scrollbarShadowCastSurface: "var(--xbFLow)",
                scrollbarShadowCastBackgroundLight: "0 0 0 1px rgba(64, 87, 109, 0.07), 0 0 8px 0 rgba(57, 76, 96, 0.15)",
                canvas: "vtHQcQ",
                tabdock: "ACOF4Q",
                page: "_0RpPvA",
                surface: "KqIqDg",
                shadowScrollbarsContainer: "SgyxGQ",
                vertical: "_1rtWjA",
                horizontal: "ZUyXCQ",
                scrollbarsContainer: "QYdwAQ",
                shadowContainer: "YPwXew",
                indent: "DKR5aQ",
                webkitScrollbar: "XyOjeA",
                shadowInnerContainer: "PXSXJA",
                shadow: "b2SWlQ",
                castedShadow: "FlVsxg",
                animate: "wqfmHQ",
                isVisible: "XfyU_g",
                startShadowVertical: "VwlkCw",
                endShadowVertical: "Rfn6xw",
                startShadowHorizontal: "CTJx5w",
                endShadowHorizontal: "yZPqpg"
            };
            var Hwb;
            __c.Iwb = class a extends Bwb {
                static L(b)
                {
                    __c.R(b, {
                        zTa: Dwb.ref,
                        wTa: Dwb.ref,
                        rFd: Ewb
                    })
                }
                render()
                {
                    const {orientation: b, Ob: c, vna: d=!0, Hgc: e=!1, PTb: f=!1, pja: g="fade", u5a: h="surface", children: k, ...l} = this.props,
                        n = "horizontal" === b ? uwb : __c.t7a,
                        p = Awb("YPwXew", Gwb[b], {
                            XyOjeA: __c.q7a() && d,
                            DKR5aQ: "fade" === g
                        });
                    return wwb("div", {
                        className: Awb("SgyxGQ", Gwb[b]),
                        children: [xwb(n, {
                            ...l,
                            vna: d,
                            Fih: !0,
                            onScroll: this.rFd,
                            children: this.props.children
                        }), c && xwb("div", {
                            className: p,
                            children: xwb(Hwb, {
                                orientation: b,
                                pja: g,
                                u5a: h,
                                zTa: this.zTa &&
                                !e,
                                wTa: this.wTa && !f
                            })
                        })]
                    })
                }
                constructor(...b)
                {
                    super(...b);
                    a.L(this);
                    this.wTa = this.zTa = !1;
                    this.rFd = c => {
                        var d = this.props.orientation;
                        const e = this.props.onScroll;
                        if (c.hB) {
                            d = "horizontal" === d;
                            const f = c.scroll,
                                g = c.offset,
                                h = d ? Math.abs(f.left) : f.top;
                            this.zTa = .2 < Math.floor(h);
                            this.wTa = d ? Math.ceil(h) + g.width < f.width - .2 : Math.ceil(h) + g.height < f.height - .2
                        } else
                            this.wTa = this.zTa = !1;
                        e && e(c)
                    }
                }
            }
            ;
            __c.Iwb = Fwb([__c.Zd], __c.Iwb);
            Hwb = ({orientation: a, pja: b, u5a: c, zTa: d, wTa: e, Ob: f=!0}) => {
                b = Awb("b2SWlQ", Gwb[c], {
                    FlVsxg: "shadow" === b,
                    wqfmHQ: f
                });
                d = Awb(b, {
                    XfyU_g: d,
                    VwlkCw: "vertical" === a,
                    CTJx5w: "horizontal" === a
                });
                a = Awb(b, {
                    XfyU_g: e,
                    Rfn6xw: "vertical" === a,
                    yZPqpg: "horizontal" === a
                });
                return wwb("div", {
                    className: "PXSXJA",
                    children: [xwb("div", {
                        className: d
                    }), xwb("div", {
                        className: a
                    })]
                })
            };
            __c.kn = a => xwb(__c.Iwb, {
                orientation: "vertical",
                Ob: __c.Sd(),
                ...a
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:ed9068226564e043.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[38036], {

    /***/
    237867:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var ohb;
            __c.um = function(a, b) {
                return c => {
                    class d extends nhb {
                        render()
                        {
                            const e = this.props;
                            return ohb(__c.phb, {
                                ...b,
                                children: f => ohb(c, {
                                    ...e,
                                    ...a(f)
                                })
                            })
                        }
                    }
                    d.displayName = `${__c.um.name}(${c.displayName || c.name || "UnnamedComponent"})`;
                    return d
                }
            };
            __c.qhb = function(a) {
                return a
            };
            __c.rhb = function(a) {
                const {transform: b, Component: c, ...d} = a;
                return __c.um(b, d)(c)
            };
            ohb = __webpack_require__(443763).jsx;
            var shb = __webpack_require__(875604),
                thb = shb.Component,
                nhb = shb.PureComponent;
            var uhb = __webpack_require__(984956).Z;
            var vhb = __webpack_require__(42782),
                whb = vhb.LO,
                xhb = vhb.aD,
                yhb = vhb.Fl;
            var zhb = __webpack_require__(240236).gn;
            var Ahb;
            __c.phb = (Ahb = class a extends thb {
                static L(b)
                {
                    __c.R(b, {
                        width: whb.ref,
                        height: whb.ref,
                        onResize: xhb.bound,
                        Pqh: xhb.bound,
                        tch: yhb.struct,
                        style: yhb.struct
                    })
                }
                constructor(...b)
                {
                    super(...b);
                    a.L(this)
                }
                onResize({offset: b})
                {
                    const c = b.width;
                    b = b.height;
                    null != c && null != b && (this.width = c, this.height = b)
                }
                Pqh(b)
                {
                    b && (this.width = b.offsetWidth, this.height = b.offsetHeight, this.forceUpdate())
                }
                get tch()
                {
                    if (null != this.width && null != this.height)
                        return {
                            width: this.width,
                            height: this.height
                        }
                }
                get style()
                {
                    return {
                        display: "height" === this.props.Tjb ?
                        "inline-block" : void 0,
                        height: "width" === this.props.Tjb ? void 0 : "100%",
                        width: "height" === this.props.Tjb ? void 0 : "100%"
                    }
                }
                render()
                {
                    const b = this.tch,
                        c = this.style;
                    return ohb(uhb, {
                        offset: !0,
                        onResize: this.onResize,
                        innerRef: this.Pqh,
                        children: ({measureRef: d}) => ohb("div", {
                            ref: d,
                            style: c,
                            children: b && this.props.children(b)
                        })
                    })
                }
            }
            , Ahb);
            __c.phb = zhb([__c.Zd], __c.phb);
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:68b3d1eee8d66aea.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[70744], {

    /***/
    879803:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        __web_req__(936917);
        __web_req__(237867);
        __web_req__(740999);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var uxc,
                zxc,
                Axc,
                nt,
                Bxc,
                ot;
            __c.rxc = function(a, b) {
                return oxc(() => pxc(a) && "string" !== typeof a.type ? qxc(a, {
                    Vh: b
                }) : a, [b, a])
            };
            uxc = function() {
                const a = sxc(c => c.stopPropagation(), []),
                    b = txc();
                return sxc(c => {
                    null == c && null != b.current && (b.current.removeEventListener("wheel", a), b.current.removeEventListener("scroll", a), b.current.removeEventListener("touchstart", a), b.current.removeEventListener("touchmove", a), b.current.removeEventListener("touchend", a));
                    null != c && (c.addEventListener("wheel", a), c.addEventListener("scroll", a), c.addEventListener("touchstart", a), c.addEventListener("touchmove", a), c.addEventListener("touchend", a));
                    b.current =
                    c
                }, [a])
            };
            __c.vxc = function(a) {
                const b = __c.Ff({
                    default: "sheet",
                    Za: "backdrop"
                });
                return a && "responsive" !== a ? a : b
            };
            zxc = function({mode: a, title: b, content: c, footer: d, alert: e, Zp: f, Ra: g, Oa: h, xa: k, Xo: l, Ggc: n=!1, cde: p, QD: q, Qx: t, lE: u, No: v, keyFrame: w, vj: y, $d: z, X9a: B, DFa: D, Zfb: E, iX: G, pea: J="default", fe: K, onScroll: L}) {
                a = __c.vxc(a);
                c = __c.rxc(c, a);
                d = __c.rxc(d, a);
                e = __c.rxc(e, a);
                g = __c.rxc(g, a);
                const O = sxc(P => {
                    h && (P.stopPropagation(), h())
                }, [h]);
                switch (a) {
                case "backdrop":
                    return nt(__c.rd, {
                        Nz: O,
                        children: nt(wxc, {
                            title: b,
                            content: c,
                            footer: d,
                            alert: e,
                            Zp: f,
                            Ra: g,
                            Oa: h,
                            Xo: l,
                            No: v,
                            keyFrame: w,
                            $d: z,
                            vj: y,
                            X9a: B,
                            DFa: D || xxc,
                            Zfb: E || xxc,
                            iX: G,
                            pea: J,
                            fe: K,
                            onScroll: L
                        })
                    });
                case "sheet":
                    return nt(__c.rd, {
                        Nz: O,
                        children: nt(__c.yxc, {
                            title: b,
                            Ra: !n && g,
                            sD: q,
                            Qx: t,
                            alert: e,
                            content: c,
                            footer: d,
                            Zp: f,
                            cde: p,
                            lE: u,
                            Oa: h,
                            onClose: k,
                            Xo: l,
                            keyFrame: w,
                            $d: z,
                            No: v,
                            DFa: D || xxc,
                            iX: G,
                            fe: K,
                            onScroll: L
                        })
                    });
                default:
                    throw new __c.r(a);
                }
            };
            Axc = __webpack_require__(443763);
            nt = Axc.jsx;
            Bxc = Axc.Fragment;
            ot = Axc.jsxs;
            var Cxc = __webpack_require__(875604),
                sxc = Cxc.useCallback,
                pt = Cxc.memo,
                oxc = Cxc.useMemo,
                pxc = Cxc.isValidElement,
                qxc = Cxc.cloneElement,
                txc = Cxc.useRef;
            var Dxc = __webpack_require__,
                Exc = Dxc(993864),
                qt = Dxc.n_x(Exc)();
            var Fxc = __webpack_require__(736241),
                Gxc = Fxc.Pi,
                Hxc = Fxc.fv;
            var Ixc = __webpack_require__(42782).z;
            var Jxc = pt(function({containerClassName: a, children: b, Ra: c, stretch: d="illustration", nVf: e="start"}) {
                return ot("div", {
                    className: qt(a, "_8jLEuw", {
                        _oy9qA: "end" === e
                    }),
                    children: [nt("div", {
                        className: qt("mhaOLw", {
                            jxVe6A: !c || "primary" === d
                        }),
                        children: b
                    }), c && nt("div", {
                        className: qt("mhaOLw", {
                            jxVe6A: "illustration" === d
                        }),
                        children: c
                    })]
                })
            });
            __c.Kxc = pt(function({className: a, title: b, lineClamp: c, jC: d}) {
                const e = "" === b;
                return ot("div", {
                    className: qt("OzcsjA", a),
                    children: [nt(__c.gh, {
                        lineClamp: c,
                        size: d,
                        children: e ? nt("span", {
                            className: "MvDnnQ",
                            children: __c.T("AV1wmg")
                        }) : "string" === typeof b ? nt(__c.lt, {
                            children: b
                        }) : b
                    }), e && nt("div", {
                        className: "WD1EAA",
                        children: nt(__c.Cf, {
                            shape: "title",
                            index: 0
                        })
                    })]
                })
            });
            var Lxc,
                Oxc,
                Pxc,
                wxc;
            Lxc = Number.parseInt("600px", 10);
            Oxc = pt(function({Rrf: a=!0, Ra: b, title: c, content: d, footer: e, alert: f, Zp: g, Oa: h, Xo: k, No: l, keyFrame: n=0, vj: p, $d: q, X9a: t, DFa: u, Zfb: v, iX: w=__c.Mxc, pea: y, xj: z, onScroll: B, fe: D}) {
                a = a && b ? ot(v, {
                    keyFrame: null !== p && void 0 !== p ? p : n,
                    cT: "fill-height",
                    No: l,
                    direction: t,
                    children: [b, k && nt(__c.Ee, {
                        variant: "contrast",
                        className: qt("M59BIA", "SeLk2w"),
                        onClick: k,
                        children: g
                    })]
                }) : void 0;
                return nt(__c.Nxc, {
                    fe: D,
                    Ra: a,
                    pea: y,
                    children: nt("div", {
                        className: qt("F1u5Rw", {
                            cPSalw: null != a,
                            Y1eb2Q: "wide" === y,
                            EPsy3A: "experimental_balanced" ===
                            y
                        }),
                        children: nt(u, {
                            keyFrame: n,
                            cT: "fill-height",
                            No: l,
                            direction: q,
                            children: nt(w, {
                                mode: "backdrop",
                                title: c,
                                alert: f,
                                content: d,
                                footer: e,
                                Zp: g,
                                Oa: h,
                                Xo: null == a ? k : void 0,
                                xj: z,
                                onScroll: B
                            })
                        })
                    })
                })
            });
            __c.Nxc = pt(function({Ra: a, fe: b, pea: c="default", children: d}) {
                return nt(Jxc, {
                    containerClassName: qt("kUY3uw", b),
                    Ra: a,
                    nVf: "reverse" === c ? "end" : "start",
                    children: d
                })
            });
            __c.Mxc = pt(function({title: a, content: b, footer: c, alert: d, Zp: e, Oa: f, Xo: g, xj: h, onScroll: k}) {
                return ot("div", {
                    className: "Dn2ipg",
                    children: [nt("div", {
                        className: "EoNOHA",
                        children: nt(__c.kn, {
                            pja: "shadow",
                            vna: !1,
                            Hgc: !0,
                            PTb: null == c,
                            xj: h,
                            onScroll: k,
                            children: ot("div", {
                                className: qt("QGWOQQ", {
                                    C3_7nQ: null != c
                                }),
                                children: [d && nt("div", {
                                    className: "mWphHw",
                                    children: d
                                }), nt("div", {
                                    className: "mWphHw",
                                    children: nt(Pxc, {
                                        title: a,
                                        Oa: f,
                                        Zp: e,
                                        Xo: g
                                    })
                                }), nt("div", {
                                    className: "mWphHw",
                                    children: b
                                })]
                            })
                        })
                    }), c && nt("div", {
                        className: "SfUMww",
                        children: c
                    })]
                })
            });
            Pxc = pt(function({title: a, Zp: b, Oa: c, Xo: d}) {
                return ot("div", {
                    className: "T__GUw",
                    children: [null != c && nt(__c.Ag, {
                        ariaLabel: __c.T("2JBM4g"),
                        className: "yPHXTg",
                        onClick: c,
                        dF: !0,
                        children: nt(__c.gh, {
                            tagName: "span",
                            children: nt(__c.gj, {
                                size: "medium"
                            })
                        })
                    }), nt(__c.Kxc, {
                        className: "TTt_Tg",
                        title: a,
                        jC: "medium"
                    }), d && nt(__c.Ee, {
                        variant: "secondary",
                        className: qt("M59BIA", "BSONGA"),
                        onClick: d,
                        children: b
                    })]
                })
            });
            wxc = __c.um(({width: a, height: b}) => ({
                Rrf: a && b ? a > Lxc : void 0
            }))(Oxc);
            var Sxc,
                Qxc,
                Txc;
            __c.Rxc = pt(function({fe: a, No: b=!1, lE: c, cde: d=!1, Mnd: e, I4g: f, zWh: g, title: h, I2b: k, children: l, Oa: n, onClose: p, Xo: q, Zp: t}) {
                e = "hidden" === g || "scrolled" === g && !e;
                f = "hover" === f;
                g = uxc();
                return ot("div", {
                    ref: g,
                    className: qt("B9S5eQ", a),
                    children: [nt(Qxc, {
                        title: h,
                        I2b: k,
                        Zp: t,
                        pU: f,
                        FTj: f && e,
                        hasShadow: f && !e,
                        Igc: e,
                        lE: c,
                        No: b,
                        XHj: d,
                        Oa: n,
                        onClose: p,
                        Xo: q
                    }), l]
                })
            });
            Sxc = pt(function({lE: a, pU: b, content: c, footer: d, onScroll: e, xj: f}) {
                const g = null != d;
                return ot("div", {
                    className: "WJz5YA",
                    children: [nt("div", {
                        className: "mE_HHw",
                        children: ot(__c.kn, {
                            pja: "shadow",
                            onScroll: e,
                            Hgc: b,
                            vna: !1,
                            xj: f,
                            children: [b && ("both" === a || "top" === a) && nt("div", {
                                className: "roZXcQ"
                            }), c, !g && ("both" === a || "bottom" === a) && nt("div", {
                                className: "siZVmQ"
                            })]
                        })
                    }), g && ot("div", {
                        className: "p3ayGg",
                        children: [d, ("both" === a || "bottom" === a) && nt("div", {
                            className: "siZVmQ"
                        })]
                    })]
                })
            });
            Qxc = pt(function({title: a, I2b: b, Zp: c, FTj: d, pU: e, hasShadow: f, Igc: g, lE: h, No: k, XHj: l, Oa: n, onClose: p, Xo: q}) {
                return n || q || p || !l ? ot("div", {
                    className: qt("QJBHhw", {
                        LDYy3g: e,
                        m3ooGw: !d,
                        BhFPCQ: f,
                        vvxizQ: !k
                    }),
                    children: [("both" === h || "top" === h) && nt("div", {
                        className: "roZXcQ"
                    }), ot("div", {
                        className: "VF4i6A",
                        children: [n && nt("div", {
                            className: "_83Qczw",
                            children: nt(Txc, {
                                ariaLabel: __c.T("AbNa7w"),
                                onClick: n,
                                qa: __c.gj
                            })
                        }), nt("div", {
                            className: qt("sSWAJQ", {
                                IUyHxA: !g
                            }),
                            "aria-hidden": !0,
                            children: (b || null != a) && nt(__c.Kxc, {
                                title: b ?
                                "" : a,
                                lineClamp: 1,
                                jC: "small"
                            })
                        }), q && nt("div", {
                            className: "_83Qczw",
                            children: nt(__c.Ee, {
                                variant: "contrast",
                                className: "M59BIA",
                                onClick: q,
                                children: c
                            })
                        }), p && !q && nt("div", {
                            className: "_83Qczw",
                            children: nt(Txc, {
                                ariaLabel: __c.T("c8+ROA"),
                                onClick: p,
                                qa: __c.hh
                            })
                        })]
                    })]
                }) : null
            });
            Txc = pt(function({qa: a, onClick: b, ariaLabel: c}) {
                return nt(__c.hi, {
                    variant: "tertiary",
                    className: "ixGqNA",
                    ariaLabel: c,
                    onClick: b,
                    Dc: "medium",
                    icon: a,
                    size: "small"
                })
            });
            var Uxc,
                Wxc;
            Uxc = Number.parseInt("56px", 10);
            Wxc = Gxc(function({title: a, alert: b, Ra: c, sD: d, Qx: e, content: f, footer: g, cde: h, Zp: k, No: l=!1, lE: n="both", Oa: p, onClose: q, Xo: t, iX: u, fe: v, onScroll: w}) {
                const y = Hxc(() => ({
                        h4g: !1,
                        Mnd: !1
                    })),
                    z = txc(null),
                    B = sxc(E => {
                        const G = E.hB ? E.scroll.top : 0,
                            J = c ? 0 : Uxc;
                        let K = !1;
                        const L = 0 < G,
                            O = z.current;
                        O && (K = O.offsetTop - G + J <= Number.parseInt("16px", 10));
                        Ixc(() => {
                            y.h4g = K;
                            y.Mnd = L
                        });
                        w && w(E)
                    }, [c, w, y]),
                    D = oxc(() => __c.Fd() ? n : "none", [n]);
                return nt(__c.Rxc, {
                    fe: v,
                    Mnd: y.Mnd,
                    No: l,
                    lE: D,
                    I4g: c ? "hover" : "block",
                    zWh: y.h4g ? "always" : "hidden",
                    title: a,
                    I2b: !a,
                    Oa: p,
                    onClose: q,
                    Xo: t,
                    Zp: k,
                    cde: h,
                    children: nt(null !== u && void 0 !== u ? u : __c.Vxc, {
                        mode: "sheet",
                        title: a,
                        Ra: c,
                        sD: d,
                        Qx: e,
                        alert: b,
                        content: f,
                        footer: g,
                        KTb: z,
                        lE: D,
                        onScroll: B
                    })
                })
            });
            __c.Vxc = pt(function({title: a, Ra: b, sD: c="fixed", Qx: d, alert: e, content: f, footer: g, lE: h, KTb: k, xj: l, onScroll: n}) {
                d = ("both" === h || "top" === h) && d && b ? "both" === h ? "bottom" : "none" : h;
                a = ot(Bxc, {
                    children: [b && nt("div", {
                        className: qt("kGj3PQ", {
                            aLBw7Q: "fixed" === c
                        }),
                        children: b
                    }), ot("div", {
                        className: qt("SO5jaQ", {
                            QnJbTQ: g,
                            Su8HwQ: !b
                        }),
                        children: [e && nt("div", {
                            className: "kGj3PQ",
                            children: e
                        }), nt("div", {
                            ref: k,
                            className: "kGj3PQ",
                            children: nt(__c.Kxc, {
                                title: a,
                                jC: "small"
                            })
                        }), f && nt("div", {
                            className: "kGj3PQ",
                            children: f
                        })]
                    })]
                });
                g = g &&
                nt("div", {
                    className: qt("SO5jaQ"),
                    children: g
                });
                return nt(Sxc, {
                    content: a,
                    footer: g,
                    pU: !!b,
                    lE: d,
                    onScroll: n,
                    xj: l
                })
            });
            __c.yxc = pt(function({No: a, DFa: b, keyFrame: c=0, $d: d, ...e}) {
                return nt(b, {
                    cT: "fill-height",
                    keyFrame: c,
                    No: a,
                    direction: d,
                    children: nt(Wxc, {
                        ...e,
                        No: a
                    })
                })
            });
            var xxc;
            xxc = ({children: a}) => nt(Bxc, {
                children: a
            });
            __c.rt = pt(function(a) {
                return zxc({
                    ...a,
                    pea: "default"
                })
            });
            __c.Xxc = pt(function(a) {
                return zxc({
                    ...a,
                    pea: "reverse"
                })
            });
            __c.Yxc = pt(function(a) {
                return zxc({
                    ...a,
                    pea: "wide"
                })
            });
            __c.Zxc = pt(function(a) {
                return zxc({
                    ...a,
                    pea: "experimental_balanced"
                })
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:0f1cf4673e04d53f.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[73205], {

    /***/
    512152:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        __web_req__(568149);
        __web_req__(666721);
        __web_req__(879803);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var $xc,
                byc,
                cyc;
            $xc = function(a) {
                switch (a.type) {
                case "marquee_node":
                case "reverse_marquee_node":
                    return a.Ra ? `${a.type}-illustration` : a.type;
                default:
                    return a.type
                }
            };
            byc = function(a) {
                return {
                    ...a,
                    type: "marquee_node",
                    Xo: a.cf,
                    Zp: __c.T("esSb4g"),
                    Oa: a.Oa,
                    alert: a.alert,
                    content: a.body,
                    footer: __c.ayc(a)
                }
            };
            __c.ayc = function({oy: a, Mx: b}) {
                b = [a && cyc(dyc, {
                    children: a
                }, 0), null === b || void 0 === b ? void 0 : b.map((c, d) => cyc(eyc, {
                    index: d,
                    Ti: c
                }, d + 1))].flat().filter(__c.Ha);
                return a || 1 < b.length ? cyc(__c.Be, {
                    spacing: "2u",
                    children: b
                }) : b.find(__c.Ha)
            };
            cyc = __webpack_require__(443763).jsx;
            var fyc = __webpack_require__(736241).Pi;
            var gyc = __webpack_require__(875604),
                hyc = gyc.useRef,
                dyc = gyc.Fragment,
                iyc = gyc.memo;
            var eyc;
            __c.st = fyc(function({currentNode: a, mode: b, lE: c}) {
                const d = "adaptive_content_node" === a.type ? byc(a) : a;
                var e = d.keyFrame;
                a = d.$d;
                var f = $xc(d);
                const g = hyc(f),
                    h = hyc(e),
                    k = hyc(e);
                if (h.current !== e) {
                    var l;
                    (l = g.current !== f || "sheet" === b) || (l = d.type, l = !("marquee_node" === l || "reverse_marquee_node" === l));
                    l && (k.current = e);
                    g.current = f;
                    h.current = e
                }
                e = "backdrop" === b ? __c.jt : void 0;
                f = "backdrop" === b ? __c.ht : void 0;
                switch (d.type) {
                case "custom_layout_node":
                    b = cyc(d.CR, {
                        mode: b
                    });
                    break;
                case "marquee_node":
                    b = cyc(__c.rt, {
                        mode: b,
                        lE: c,
                        DFa: e,
                        Zfb: f,
                        keyFrame: d.keyFrame,
                        $d: d.$d,
                        title: d.title,
                        content: d.content,
                        footer: d.footer,
                        Zp: d.Zp,
                        Ra: d.Ra,
                        QD: d.QD,
                        alert: d.alert,
                        Oa: d.Oa,
                        xa: d.xa,
                        Xo: d.Xo,
                        Ggc: !d.Hf,
                        vj: d.vj,
                        X9a: d.X9a,
                        iX: d.iX,
                        fe: d.fe,
                        Qx: d.Qx
                    });
                    break;
                case "reverse_marquee_node":
                    b = cyc(__c.Xxc, {
                        mode: b,
                        lE: c,
                        DFa: e,
                        Zfb: f,
                        keyFrame: d.keyFrame,
                        $d: d.$d,
                        title: d.title,
                        content: d.content,
                        footer: d.footer,
                        Ra: d.Ra,
                        QD: d.QD,
                        alert: d.alert,
                        Oa: d.Oa,
                        xa: d.xa,
                        Ggc: !d.Hf,
                        vj: d.vj,
                        X9a: d.X9a,
                        iX: d.iX,
                        fe: d.fe,
                        Qx: d.Qx
                    });
                    break;
                case "wide_marquee_node":
                    b = cyc(__c.Yxc, {
                        mode: b,
                        lE: c,
                        DFa: e,
                        Zfb: f,
                        keyFrame: d.keyFrame,
                        $d: d.$d,
                        title: d.title,
                        content: d.content,
                        footer: d.footer,
                        Ra: d.Ra,
                        QD: d.QD,
                        alert: d.alert,
                        Oa: d.Oa,
                        xa: d.xa,
                        Ggc: !d.Hf,
                        vj: d.vj,
                        X9a: d.X9a,
                        iX: d.iX,
                        fe: d.fe,
                        Qx: d.Qx
                    });
                    break;
                default:
                    throw new __c.r(d);
                }
                return cyc(__c.jt, {
                    keyFrame: k.current,
                    direction: a,
                    cT: "fill-height",
                    children: b
                })
            });
            eyc = iyc(({Ti: a, index: b}) => null == a.Na ? cyc(__c.Ee, {
                variant: 0 === b ? "primary" : "secondary",
                stretch: !0,
                loading: a.loading,
                disabled: a.disabled,
                onClick: a.onClick,
                className: a.className,
                children: a.text
            }) : cyc(__c.Pi, {
                variant: 0 === b ? "primary" : "secondary",
                stretch: !0,
                loading: a.loading,
                disabled: a.disabled,
                onClick: a.onClick,
                Na: a.Na,
                className: a.className,
                children: a.text
            }));
            __c.jyc = {
                l8k: eyc,
                Zzi: __c.st
            };
            __c.jyc.oFl = __c.ayc;
            __c.jyc.pFl = byc;
            __c.jyc.G9l = $xc;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:466546bf36ba519f.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[35334], {

    /***/
    208252:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.D$a = function(a) {
                var b;
                return __c.Rc({
                    brand_kit_preference: a.yOi,
                    brand_kit_usages: a.EOi,
                    brand_brand_kit_usages: a.iOi,
                    magic_resize_preference: a.n_j,
                    magic_resize_usages: a.o_j,
                    brand_magic_resize_usages: a.JOi,
                    background_remover_preference: a.uMi,
                    background_remover_usages: a.vMi,
                    brand_background_remover_usages: a.hOi,
                    content_planner_preference: a.qXi,
                    content_planner_usages: a.rXi,
                    brand_content_planner_usages: a.nOi,
                    propensity_to_trial: a.Uea,
                    propensity_to_retain: a.oWf,
                    user_segment: a.I3b,
                    propensity_to_print: a.pcb,
                    propensity_to_form_team: a.nWf,
                    brand_pro_font_usages: a.cKl,
                    brand_pro_publish_usages: a.WOi,
                    brand_pro_element_usages: a.TOi,
                    brand_pro_image_usages: a.VOi,
                    brand_pro_graphic_usages: a.UOi,
                    brand_pro_video_usages: a.XOi,
                    brand_pro_audio_usages: a.SOi,
                    pro_feature_preferences: null === (b = a.i_b) || void 0 === b ? void 0 : b.map(c => __c.Rc({
                        key: c.key,
                        value: c.value
                    })),
                    annual_default_expected_ltv: a.hXe,
                    monthly_default_expected_ltv: a.KGf
                })
            };
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:6d285816067477db.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[30522], {

    /***/
    270791:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(208252);
        __web_req__(280716);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.Cl = {
                eventType: "tailoring_feature_interacted",
                Va(a) {
                    return __c.Rc({
                        source: a.source,
                        feature: a.feature,
                        action: a.action,
                        step: a.step,
                        content: a.content,
                        external_id: a.Sd,
                        personalization_context: null == a.SH ? void 0 : __c.D$a(a.SH)
                    })
                }
            };
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:5f1bcc5816e5b30f.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[11960], {

    /***/
    233559:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(270791);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.Dl = class {
                Cu(a)
                {
                    this.Ub({
                        ...a,
                        action: "seen"
                    })
                }
                ZD(a)
                {
                    this.Ub({
                        ...a,
                        action: "dismissed"
                    })
                }
                Ks(a)
                {
                    this.Ub({
                        ...a,
                        action: "clicked"
                    })
                }
                Ub(a)
                {
                    this.M.track(__c.Cl, {
                        ...a,
                        feature: this.feature,
                        source: this.source
                    })
                }
                constructor(a, b, c)
                {
                    this.M = a;
                    this.feature = b;
                    this.source = c
                }
            }
            ;
            __c.E$a = {};
            __c.E$a.$ng = __c.Dl;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:1031179b7f8862b0.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[7215], {

    /***/
    930554:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var x3a = __webpack_require__(443763),
                y3a = x3a.jsx,
                z3a = x3a.jsxs;
            var A3a = __webpack_require__,
                B3a = A3a(993864),
                C3a = A3a.n_x(B3a)();
            var D3a = __webpack_require__(736241).Pi;
            var E3a = __webpack_require__(875604),
                F3a = E3a.useId,
                G3a = E3a.useMemo,
                H3a = E3a.useCallback;
            var I3a = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7.25" width="12" height="1.5" rx=".75" fill="currentColor"/></svg>';
            var J3a = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6Z" fill="currentColor"/></svg>';
            var K3a = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 11.25H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5Z" fill="currentColor"/></svg>';
            __c.L3a = __c.Th({
                XC: J3a,
                small: I3a,
                medium: K3a
            });
            var M3a = {
                baseUnit: "8px",
                radiusElementSmall: "4px",
                colorBorderDisabled: "var(--VjFOWQ)",
                colorBorderHover: "var(--9_Lxmw)",
                colorBorderStrong: "var(---UopgA)",
                colorNeutralHover: "var(--nwNs8w)",
                colorPage: "var(--C-q6Ig)",
                colorPrimary: "var(--eGVbng)",
                colorPrimaryActive: "var(--boKKWg)",
                colorPrimaryDisabled: "var(--oqurdw)",
                colorPrimaryFore: "var(--d1p99w)",
                colorPrimaryForeDisabled: "var(--17LfHw)",
                colorPrimaryHover: "var(--M5_pvA)",
                colorTertiaryActive: "var(--3R4u8w)",
                checkboxSizeSmall: "16px",
                checkboxSizeMedium: "24px",
                container: "_1I5x5g",
                labelContainer: "bV4U1g",
                disabled: "XsQNVg",
                checkbox: "SPXzig",
                checkboxWrapper: "ZJon7Q",
                uiCheckbox: "tdZD9A",
                medium: "nv35GQ",
                primary: "VqRjiQ",
                inherit: "s905NQ",
                tick: "IbvMRg",
                minus: "AqfZZQ",
                checked: "EPEuzg",
                indeterminate: "te6xBw",
                hoverSupported: "na3Vpw",
                hideOutline: "ioka9Q",
                withLabel: "_rklkw",
                checkboxText: "dUDxGw",
                checkboxLabel: "OWA8Mg",
                checkboxDescription: "_26bRxw"
            };
            __c.N3a = Symbol("inherit");
            __c.Ok = D3a(function(a) {
                const {label: b, description: c, checked: d, defaultChecked: e, disabled: f, autoComplete: g, value: h="", sNc: k, className: l, size: n="small", id: p, ariaLabel: q, Kd: t, Sg: u, tone: v="primary", Cj: w, onFocus: y, onBlur: z, onChange: B} = a,
                    [D, E] = __c.Bf({
                        value: "indeterminate" === d ? !1 : d,
                        defaultValue: null !== e && void 0 !== e ? e : !1
                    });
                null != c && __c.ma(null != b, "Provide label to display description in the checkbox");
                a = F3a();
                const G = G3a(() => {
                        if (void 0 !== h)
                            return "string" === typeof h || "number" === typeof h ? h : JSON.stringify(h)
                    },
                    [h]),
                    J = H3a(O => {
                        E(O.target.checked);
                        null === B || void 0 === B ? void 0 : B(h, O.target.checked)
                    }, [E, B, h]);
                var K = __c.Ld();
                K = C3a("_1I5x5g", {
                    XsQNVg: !!f,
                    na3Vpw: K,
                    bV4U1g: null != b
                }, l);
                const L = y3a(__c.X, {
                    className: C3a("OWA8Mg", k),
                    tagName: "string" === typeof b ? "p" : "div",
                    tone: f ? "tertiary" : "primary",
                    children: b
                });
                return z3a("label", {
                    className: K,
                    children: [z3a("div", {
                        className: C3a("ZJon7Q", {
                            nv35GQ: "medium" === n,
                            _rklkw: null != b
                        }),
                        children: [y3a("input", {
                            type: "checkbox",
                            className: "SPXzig",
                            onChange: J,
                            onFocus: y,
                            onBlur: z,
                            checked: D,
                            disabled: f,
                            autoComplete: g,
                            value: G,
                            id: p,
                            "aria-label": q,
                            "aria-describedby": null !== u && void 0 !== u ? u : c ? a : void 0,
                            "aria-labelledby": t,
                            "aria-checked": "indeterminate" === d ? "mixed" : void 0,
                            ref: w
                        }), y3a(__c.O3a, {
                            checked: "indeterminate" === d ? d : D,
                            disabled: f,
                            size: n,
                            tone: v,
                            className: __c.wd.Yy ? "ioka9Q" : void 0
                        })]
                    }), null != b && (null != c ? z3a("div", {
                        className: "dUDxGw",
                        children: [L, y3a("div", {
                            "aria-hidden": !0,
                            children: y3a(__c.X, {
                                className: "_26bRxw",
                                id: a,
                                tone: "tertiary",
                                size: "small",
                                children: c
                            })
                        })]
                    }) : L)]
                })
            });
            __c.O3a = ({checked: a, disabled: b, size: c="small", tone: d="primary", className: e}) => y3a("span", {
                "aria-hidden": !0,
                className: C3a("tdZD9A", "medium" === c && "nv35GQ", d === __c.N3a ? "s905NQ" : M3a[d], !0 === a && "EPEuzg", "indeterminate" === a && "te6xBw", b && "XsQNVg", e),
                children: "indeterminate" === a ? y3a(__c.L3a, {
                    size: c,
                    className: "AqfZZQ"
                }) : y3a(__c.ji, {
                    size: c,
                    className: "IbvMRg"
                })
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:ec386575f45120c5.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[31760], {

    /***/
    15181:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        __web_req__(930554);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var Xvc = __webpack_require__(443763),
                Yvc = Xvc.jsx,
                Zvc = Xvc.jsxs;
            var $vc = __webpack_require__,
                awc = $vc(993864),
                bwc = $vc.n_x(awc)();
            var cwc = __webpack_require__(875604).Component;
            var dwc = __webpack_require__(42782),
                ewc = dwc.LO,
                fwc = dwc.aD;
            var gwc = __webpack_require__(240236).gn;
            __c.dt = class a extends cwc {
                static L(b)
                {
                    __c.R(b, {
                        open: ewc.ref,
                        n2e: ewc.ref,
                        QJa: fwc.bound,
                        qaf: fwc
                    })
                }
                render()
                {
                    const {title: b, explanation: c, Jz: d="primary", dismissible: e=!1, vOb: f, role: g="dialog", mode: h, Le: k, SC: l} = this.props,
                        n = void 0 === this.props.open ? this.open : this.props.open;
                    var p;
                    const q = null !== (p = this.props.buttons) && void 0 !== p ? p : [this.props.button];
                    return Yvc(__c.ie, {
                        count: 2,
                        children: (t, u) => Yvc(__c.hj, {
                            Kd: t,
                            Sg: c ? u : void 0,
                            open: n,
                            xa: e ? this.fUi : void 0,
                            mode: h,
                            Le: k,
                            role: g,
                            SC: l,
                            children: Yvc(__c.Df, {
                                className: bwc("sheet" !==
                                h && "j4W2gA"),
                                padding: {
                                    default: "3u",
                                    Za: "4u"
                                },
                                children: Zvc(__c.Be, {
                                    spacing: "3u",
                                    children: [Zvc(__c.Be, {
                                        align: "start",
                                        spacing: "2u",
                                        children: [Yvc(__c.gh, {
                                            id: t,
                                            tagName: "h1",
                                            alignment: "start",
                                            children: b
                                        }), c && ("string" === typeof c ? Yvc(__c.X, {
                                            id: u,
                                            tone: "secondary",
                                            children: c
                                        }) : Yvc("div", {
                                            id: u,
                                            children: c
                                        })), f && Yvc(__c.Ok, {
                                            label: f,
                                            onChange: this.QJa
                                        })]
                                    }), Yvc(__c.bg, {
                                        reversed: !0,
                                        spacing: "2u",
                                        pJ: "small",
                                        collapsed: "sheet" === h,
                                        children: q.map((v, w) => Yvc(__c.Yh, {
                                            width: 0 === w ? "content" : "containedContent",
                                            children: Yvc(__c.Ee,
                                            {
                                                stretch: !0,
                                                variant: 0 === w ? d : "secondary",
                                                ...v,
                                                className: v.className,
                                                onClick: () => this.krj(v.onClick)
                                            })
                                        }, w))
                                    })]
                                })
                            })
                        })
                    })
                }
                QJa(b, c)
                {
                    var d,
                        e;
                    this.n2e = c;
                    null === (d = (e = this.props).QJa) || void 0 === d ? void 0 : d.call(e, c)
                }
                constructor(...b)
                {
                    super(...b);
                    a.L(this);
                    this.open = !0;
                    this.n2e = !1;
                    this.krj = c => {
                        null === c || void 0 === c ? void 0 : c({
                            checkboxChecked: !(!this.props.vOb || !this.n2e)
                        });
                        this.qaf()
                    };
                    this.fUi = () => {
                        var c,
                            d;
                        null === (c = (d = this.props).Mb) || void 0 === c ? void 0 : c.call(d);
                        this.qaf()
                    };
                    this.qaf = () => {
                        var c,
                            d;
                        null === (c = (d =
                        this.props).onClose) || void 0 === c ? void 0 : c.call(d);
                        this.open = !1
                    }
                }
            }
            ;
            __c.dt = gwc([__c.Zd], __c.dt);
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:a4cbffa8db36b61c.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[62910], {

    /***/
    311026:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:d5da4ee9483df922.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[27882], {

    /***/
    488161:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:022e3b22e2677577.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[1034], {

    /***/
    610518:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(488161);
        __web_req__(280716);
        __web_req__(208252);
        __web_req__(794756);
        __web_req__(560566);
        __web_req__(41105);
        __web_req__(857235);
        __web_req__(306762);
        __web_req__(564089);
        __web_req__(233559);
        __web_req__(311026);
        __web_req__(15181);
        __web_req__(728097);
        __web_req__(512152);
        __web_req__(222847);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var bt = __c.bt;
            var $s = __c.$s;
            var yg = __c.yg;
            var Rc = __c.Rc;
            var pyc,
                tyc,
                ryc,
                syc,
                zyc,
                wyc,
                xyc,
                Byc,
                Oyc,
                Jyc,
                Cyc,
                Pyc,
                Qyc;
            __c.tt = function(a) {
                return Rc({
                    app_id: a.appId,
                    app_version: a.appVersion,
                    app_status: a.dAc,
                    app_session_id: a.SGl,
                    app_session_source: a.TGl
                })
            };
            __c.kyc = function(a) {
                return Rc({
                    resource_id: a.Cb,
                    resource_type: a.resourceType
                })
            };
            pyc = function({source: a, ma: b, N: {M: c, Lc: d, Ha: e}, iia: f, wda: g}) {
                const h = new lyc(new __c.Dl(c, "native_max_capacity", a), new __c.Dl(c, "native_max_capacity_help_link", a), d, e),
                    k = h.Gc(),
                    l = () => h.onCancel(k),
                    n = () => h.Kc(k),
                    p = () => h.Elc(k, g);
                return myc(({onClose: q}) => {
                    nyc(() => {
                        h.Fb()
                    }, []);
                    return ut(oyc, {
                        open: k.open,
                        onCancel: l,
                        Kc: n,
                        Elc: p,
                        Le: q,
                        ma: b,
                        iia: f,
                        wda: g
                    })
                })
            };
            __c.qyc = function(a, b) {
                return {
                    ...a,
                    G: a.G.lf(b)
                }
            };
            tyc = function({...a}) {
                return {
                    c5i: ({mU: b, uo: c, QR: d}) => ryc({
                        ...a,
                        uo: c,
                        mU: b,
                        QR: d
                    }),
                    OQl: (b, c) => {
                        b = ryc({
                            ...a,
                            ...b
                        });
                        ({pB: c} = syc(b, c));
                        return c
                    }
                }
            };
            ryc = function(a) {
                const b = async () => {
                    const {b5i: c} = await __webpack_require__.me(555834).then(() => ({
                        b5i: __c.uyc
                    }));
                    return c
                };
                return __c.et({
                    v4: c => b().then(d => d({
                        ...a,
                        N: __c.qyc(a.N, "post_upgrade_flow"),
                        QR: c
                    })),
                    B4: {
                        cause: "dismiss",
                        node: 1,
                        lfa: void 0
                    },
                    EY: {
                        type: 1,
                        node: __c.ft("marquee_node")
                    },
                    onClose: a.QR
                })
            };
            syc = function(a, b) {
                const c = myc(function({mode: d}) {
                    return ut(__c.st, {
                        mode: d,
                        currentNode: a.currentNode.node,
                        lE: "both"
                    })
                });
                return {
                    pB: myc(function({onClose: d}) {
                        const e = a.currentNode.node,
                            f = vyc(() => {
                                a.D$({
                                    cause: "dismiss",
                                    node: void 0,
                                    lfa: void 0
                                });
                                null === b || void 0 === b ? void 0 : b.end(new Map([["reason", "unmount"]]));
                                d()
                            }, [d]);
                        return ut(__c.hj, {
                            open: a.open,
                            Le: f,
                            xa: e.xa,
                            SX: !0,
                            wL: "full",
                            oa: c
                        })
                    })
                }
            };
            zyc = function(a) {
                const b = a.na;
                return {
                    s5i: ({Oa: c, U8: d, Da: e, ...f}) => {
                        e = b.IW("create_upgrade_flow_store", e, g => wyc({
                            ...a,
                            mU: {
                                ...f,
                                Da: g
                            },
                            ci: 0,
                            Oa: c,
                            U8: d
                        }));
                        return xyc(e, a.N.G)
                    },
                    v5i: ({Oa: c, U8: d, ux: e, HH: f, Whb: g, Da: h, ...k}) => {
                        h = b.IW("create_upgrade_flow_store", h, l => wyc({
                            ...a,
                            mU: {
                                ...k,
                                Da: l,
                                HH: f,
                                Whb: g
                            },
                            ci: e ? 2 : 1,
                            Oa: c,
                            U8: d
                        }));
                        return {
                            jQf: new yyc(h)
                        }
                    },
                    r5i: ({Oa: c, U8: d, Da: e, ...f}) => {
                        e = b.IW("upgrade_flow_store_created", e, g => wyc({
                            ...a,
                            mU: {
                                ...f,
                                Da: g
                            },
                            ci: 4,
                            Oa: c,
                            U8: d
                        }));
                        return {
                            P0i: new yyc(e)
                        }
                    },
                    w5i: ({Oa: c, U8: d, Da: e, ...f}) =>
                    {
                        e = b.IW("upgrade_flow_store_created", e, g => wyc({
                            ...a,
                            mU: {
                                ...f,
                                Da: g
                            },
                            ci: 5,
                            Oa: c,
                            U8: d
                        }));
                        return {
                            DRk: new yyc(e)
                        }
                    }
                }
            };
            wyc = function({ci: a, Oa: b, U8: c, ...d}) {
                let e = !1;
                const f = () => {
                        const p = __webpack_require__.me(898431).then(() => __c.Ayc).then(({u5i: q}) => q);
                        Byc(d);
                        return p
                    },
                    g = d.Tja.ekj;
                let h = Cyc(() => !0);
                if (g) {
                    const p = Dyc(__c.$a(2 === a || 1 === a ? 3E3 : 500));
                    h = Cyc(() => "fulfilled" === p.state)
                }
                const k = () => n.D$({
                        action: "dismiss",
                        step: 1
                    }),
                    l = null != b ? () => n.D$({
                        action: "back",
                        step: void 0
                    }) : void 0,
                    n = __c.et({
                        v4: p => f().then(q => q({
                            ...d,
                            N: __c.qyc(d.N, "pro_upgrade_flow"),
                            ci: a,
                            Q5f: h,
                            QR: p,
                            Wrj: null != b ? () => p({
                                action: "back",
                                step: void 0
                            }) : void 0
                        })),
                        EY: {
                            type: 1,
                            node: __c.lwc({
                                get xa() {
                                    if (h.get())
                                        return k
                                },
                                get Oa() {
                                    if (h.get())
                                        return l
                                }
                            })
                        },
                        onError: p => {
                            d.N.M.track(__c.Eyc, {
                                panel: "load_error_panel",
                                source: d.mU.source,
                                Yp: void 0,
                                Cd: void 0,
                                Kpb: "",
                                status: "skipped",
                                jc: "user_choice"
                            });
                            throw p;
                        },
                        onClose: ({action: p, step: q}) => {
                            e || (e = !0, "back" === p ? null === b || void 0 === b ? void 0 : b() : null === c || void 0 === c ? void 0 : c(p, q))
                        },
                        B4: {
                            action: "dismiss",
                            step: 1
                        }
                    });
                return n
            };
            xyc = function(a, b) {
                const c = (f, g) => {
                        null === b || void 0 === b ? void 0 : b.ya(f, {
                            Ca: "ProUpgrade failed to mount.",
                            extra: new Map(Object.entries(g))
                        })
                    },
                    d = myc(function({mode: f}) {
                        return ut(__c.st, {
                            mode: f,
                            currentNode: a.currentNode.node,
                            lE: "both"
                        })
                    }),
                    e = myc(function({onClose: f}) {
                        const g = vyc(() => {
                            a.D$({
                                action: "dismiss",
                                step: void 0
                            });
                            f()
                        }, [f]);
                        return ut(__c.hj, {
                            open: a.open,
                            Le: g,
                            xa: a.currentNode.node.xa,
                            wL: "full",
                            SX: !0,
                            oa: d
                        })
                    });
                return {
                    pB: ({onClose: f}) => ut(__c.Pvc, {
                        G: void 0,
                        fallback: void 0,
                        onError: vyc((...g) => {
                            f();
                            c(...g)
                        },
                        [f]),
                        children: ut(e, {
                            onClose: f
                        })
                    })
                }
            };
            Byc = function(a) {
                if (a.mU.Bb.status === yg.Bf) {
                    var b = a.Gf;
                    a.Pg.Ck();
                    b.Ck()
                } else {
                    b = a.Pg;
                    const c = a.Wx,
                        d = a.ke,
                        e = a.igb;
                    a.Hb.Ck();
                    b.Ck();
                    c.Ck();
                    d.Z7();
                    e.load()
                }
            };
            __c.Myc = function({Ms: a, wZb: b, Yl: c, ac: d, ke: e, w4: f, zv: g, W: h, N: k, va: l, igb: n, K5b: p, tE: q, gj: t, Jd: u, Xa: v, eb: w, ou: y, ua: z, bootstrap: {We: B, sdc: D, iia: E, ZI: G, NF: J, SGc: K, SXa: L, TZ: O, LQ: P, xv: W, sjb: U, nZ: V, tK: Y, Byb: ba, zzb: Z, hRa: ea, hBa: ca, WOa: ha, Kfd: ia, LOa: ja, b8a: la}, Hu: na, Tja: ra, tM: za, usa: xa, W2a: Da, H3a: va, options: {yjb: Ba=!1, rgf: Ga=!1, v6d: Ra=!1, hYf: Ma=!1}={}, skeleton: Ta, Hb: Sa, Pg: Va, Gf: lb, Wx: jb, yc: vb, lG: tb, Ic: pb, Sa: qb, Qg: xb, rE: nb, kQl: ob, Zxa: Lb, eXb: ub, W2g: db, DIh: Rb, o2: lc, sM: $b, yf: fc, OL: yc, na: Bc}) {
                const eb = __webpack_require__.me(418096).then(() =>
                    __c.Fyc).then(({w4i: nd}) => nd),
                    Sb = __c.Gyc(d, [$s.gh, $s.Cg]),
                    dc = __c.Gyc(d, [$s.Cg]),
                    $c = k.M,
                    sd = k.G;
                if (null == h || null == e || null == a || null == b)
                    a = __c.Hyc({
                        skeleton: Ta,
                        va: l,
                        eb: w,
                        N: k,
                        options: {
                            rgf: Ga,
                            hYf: Ma,
                            ZI: G
                        }
                    });
                else {
                    Ga = k.Wb;
                    Ma = k.Ha;
                    const nd = k.Mf;
                    Ta = k.Lh;
                    const he = k.Ka,
                        id = k.bb,
                        je = k.Pa,
                        $d = k.Fa,
                        Md = k.Lc,
                        Re = k.wZa,
                        He = nd.Hc === __c.xg.dV || nd.Hc === __c.xg.HP;
                    ({c5i: c} = tyc({
                        N: {
                            Td: k.Td,
                            Aa: k.Aa,
                            Ee: k.Ee,
                            fc: k.fc,
                            M: $c,
                            G: sd,
                            Wb: Ga,
                            pv: k.pv,
                            mc: k.mc,
                            Ha: Ma,
                            za: k.za,
                            Pa: je,
                            bb: id,
                            Lh: Ta,
                            Ka: he,
                            Lc: Md,
                            Sb: k.Sb,
                            pe: k.pe,
                            AUb: k.AUb
                        },
                        lG: tb,
                        W: h,
                        ua: z,
                        Qg: xb,
                        ac: d,
                        Yl: c,
                        Xa: v,
                        ke: e,
                        Sa: qb,
                        Hu: na,
                        xHa: fc,
                        wHa: yc,
                        Gf: lb,
                        Pg: Va,
                        Hb: Sa,
                        ou: y,
                        wfa: void 0,
                        Tja: ra,
                        usa: xa,
                        options: {
                            NF: J,
                            dQ: U,
                            SXa: L,
                            TZ: O,
                            We: B,
                            nZ: V,
                            tK: Y,
                            yjb: Ba
                        },
                        yc: vb,
                        Jd: u,
                        zv: g
                    }));
                    y = __c.ua(() => __webpack_require__.me(899108).then(() => __c.Iyc).then(({yJg: xd}) => xd({
                        Sb: k.Sb,
                        G: k.G,
                        userId: h.user.id
                    })));
                    var ge;
                    const {s5i: Nd, v5i: be, r5i: sc, w5i: Wd} = zyc({
                        na: Bc,
                        N: {
                            ...k,
                            Ab: null !== (ge = k.Ab) && void 0 !== ge ? ge : __c.Ja,
                            Wb: Ga,
                            Ha: Ma,
                            Lh: Ta,
                            Ka: he,
                            bb: id,
                            Pa: je,
                            wZa: Re,
                            Fa: $d,
                            Lc: Md,
                            IUb: y
                        },
                        ke: e,
                        w4: f,
                        zv: g,
                        W: h,
                        Hb: Sa,
                        Pg: Va,
                        Gf: lb,
                        tE: q,
                        Wx: jb,
                        Xa: v,
                        Sa: qb,
                        gj: t,
                        igb: n,
                        K5b: p,
                        Ms: a,
                        wZb: b,
                        Jd: u,
                        sM: $b,
                        bUf: c,
                        Qg: xb,
                        Tja: ra,
                        tM: za,
                        usa: xa,
                        H3a: va,
                        options: {
                            wpc: na.wpc,
                            ZI: G,
                            dQ: U,
                            sdc: D,
                            We: B,
                            SGc: K,
                            Az: !!P,
                            St: Da.St,
                            xv: W,
                            Ic: pb,
                            Kfd: ia,
                            iia: E,
                            Byb: ba,
                            nZ: V,
                            zzb: Z,
                            hRa: ea,
                            v6d: Ra,
                            hBa: ca,
                            WOa: ha,
                            eXb: ub,
                            goj: !0,
                            shd: !1,
                            $Gc: !1,
                            rhd: !0,
                            Ksa: na.Ksa
                        },
                        o2: lc,
                        yc: vb,
                        W2g: db,
                        DIh: Rb
                    });
                    null != nb && Jyc(() => {
                        nb.xbd = ({$f: xd, source: te, Oa: cd, AY: nf, Sf: ud, ux: Fc=!1, HH: kf, Whb: ff, mi: bh}) => {
                            const {jQf: jg} = Bc.Xcb("create_upgrade_flow_onboarding_step", {
                                Hd: {
                                    name: "onboarding.create_upgrade_flow"
                                }
                            }, Vb => be({
                                Bb: "team" ===
                                ud ? dc : Sb,
                                source: te,
                                trigger: "onload",
                                Uwa: void 0,
                                BH: void 0,
                                grb: !1,
                                bN: void 0,
                                cBa: !1,
                                jf: void 0,
                                Qi: 27,
                                U8: xd,
                                Oa: cd,
                                AY: nf,
                                ZYa: !0,
                                wXc: !1,
                                Da: Vb,
                                ux: Fc,
                                HH: kf,
                                Whb: ff,
                                mi: bh
                            }));
                            return jg
                        }
                    });
                    null != ob && Jyc(() => {
                        ob.U0d = ({source: xd, Oa: te, $f: cd}) => {
                            const {P0i: nf} = Bc.Xcb("upgrade_flow_create_domain_dialog_step_created", ud => sc({
                                Bb: d.uPg,
                                source: xd,
                                trigger: "intentional",
                                Uwa: void 0,
                                BH: void 0,
                                grb: !0,
                                bN: void 0,
                                cBa: !1,
                                jf: void 0,
                                Qi: 27,
                                U8: cd,
                                Oa: te,
                                ZYa: !1,
                                wXc: !0,
                                Tdb: !0,
                                pQb: !0,
                                L4: !1,
                                Da: ud
                            }));
                            return nf
                        }
                    });
                    null != Lb && Jyc(() => {
                        Lb.U0d =
                        ({source: xd, Oa: te, $f: cd, wf: nf}) => {
                            const {DRk: ud} = Bc.Xcb("upgrade_flow_student_offer_dialog_step_created", Fc => Wd({
                                Bb: Sb,
                                source: xd,
                                trigger: "intentional",
                                Uwa: void 0,
                                BH: void 0,
                                grb: !0,
                                bN: void 0,
                                cBa: !1,
                                V9f: nf,
                                jf: "SOUTH_KOREA_STUDENT_OFFER",
                                Qi: 27,
                                U8: cd,
                                Oa: te,
                                ZYa: !1,
                                wXc: !0,
                                Tdb: !0,
                                pQb: !0,
                                L4: !1,
                                Da: Fc
                            }));
                            return ud
                        }
                    });
                    a = (xd, te, cd) => {
                        const nf = cd.va || l,
                            ud = Bc.Vc("create_upgrade_flow", {
                                Hd: {
                                    name: "create_upgrade_flow"
                                }
                            });
                        if (xd.status === yg.wq) {
                            if (ra.npj)
                                return cd = __c.Vvc({
                                    Jac: "Under13ErrorDialog",
                                    G: k.G,
                                    njc: __c.ua(() =>
                                    __webpack_require__.me(293904).then(() => __c.Kyc).then(({C8i: kf}) => kf({
                                        Ri: qb.getName("canvaForEducation"),
                                        zv: g,
                                        xe: te,
                                        Da: ud,
                                        N: k
                                    }))),
                                    va: nf
                                })(), ud.end(new Map([["reason", "under_13"]])), cd;
                            sd.error(`Upgrade dialog was shown for source ${te} while status was HIDDEN.`);
                            ud.end("error", new Map([["reason", "feature_config_status_hidden"]]))
                        } else if (null != $d && $d.status === __c.Oc.hg)
                            eb.then(kf => {
                                const ff = Bc.IW("create_offline_dialog", ud, () => kf());
                                return nf(ff)
                            }),
                            ud.end(new Map([["reason", "offline"]]));
                        else {
                            if (xd.status ===
                            yg.yg) {
                                var Fc;
                                const kf = null !== (Fc = Va.Kl) && void 0 !== Fc ? Fc : h.Qa.Xk;
                                if (__c.kk(h) && He && null != E && kf > E)
                                    return $c.track(__c.Eyc, {
                                        panel: "native_team_max_capacity",
                                        source: te,
                                        Yp: void 0,
                                        Cd: void 0,
                                        Kpb: "",
                                        status: "skipped",
                                        jc: "user_choice",
                                        BN: cd.BN
                                    }), cd = Bc.IW("create_native_team_max_capacity_message", ud, () => pyc({
                                        source: te,
                                        W: h,
                                        N: k,
                                        ma: xd.ma,
                                        iia: E,
                                        wda: xa.wda
                                    })), ud.end(new Map([["reason", "native_team_max_capacity"]])), nf(cd)
                            }
                            Fc = [__c.at.MMa, __c.at.s6b];
                            ({pB: cd} = Nd({
                                Bb: xd,
                                source: te,
                                trigger: cd.trigger,
                                grb: !!cd.grb,
                                Uwa: cd.Ra,
                                BH: cd.alert,
                                CZa: cd.CZa,
                                smb: cd.smb,
                                kHa: cd.kHa,
                                LOa: ja && cd.LOa,
                                b8a: la && cd.b8a,
                                Qi: 27,
                                Vwb: cd.Vwb,
                                Wre: cd.Wre,
                                cBa: !!(cd.arj && Fc.includes(xd.feature) || cd.cBa),
                                pQb: cd.pQb,
                                wXc: !!cd.wXc,
                                jf: cd.jf,
                                i1: cd.i1,
                                UCe: cd.UCe,
                                IQa: cd.IQa,
                                U8: cd.U8,
                                AY: cd.AY,
                                kmc: cd.kmc,
                                KA: cd.KA,
                                BN: cd.BN,
                                ZYa: !1,
                                OI: cd.OI,
                                kCa: cd.kCa,
                                SLa: cd.SLa,
                                ngd: cd.ngd,
                                Tdb: cd.Tdb,
                                L4: cd.L4,
                                xOa: cd.xOa,
                                qZ: cd.qZ,
                                bN: cd.bN,
                                Zhc: cd.Zhc,
                                cUf: cd.cUf,
                                zGb: cd.zGb,
                                Z3a: cd.Z3a,
                                Da: ud
                            }));
                            ud.end();
                            nf(cd)
                        }
                    }
                }
                __c.Lyc({
                    eb: w,
                    ac: d,
                    dzh: Sb,
                    SUh: dc,
                    Zc: a
                })
            };
            __c.Hyc = function({skeleton: a, va: b, eb: c, N: {Td: d, M: e, G: f}, options: {ZI: g, rgf: h, hYf: k}}) {
                if (h) {
                    const l = __c.ua(async () => __webpack_require__.me(581014).then(() => __c.Nyc), {
                        PB: !0
                    });
                    l();
                    return async (n, p, q) => {
                        const {M6i: t, otj: u} = await l();
                        t({
                            D7b: void 0,
                            locale: g,
                            skeleton: a,
                            va: q.va || b,
                            Une: k ? () => d.reload() : void 0,
                            N: {
                                M: e,
                                G: f,
                                Ha: void 0
                            }
                        })({
                            flow: 1,
                            gKd: 1,
                            context: u(n),
                            xe: p
                        })
                    }
                }
                return (l, n) => {
                    c.xi(bt.ukg, n, {
                        Bb: l
                    })
                }
            };
            __c.Lyc = function({eb: a, ac: b, dzh: c, SUh: d, Zc: e}) {
                [[bt.tkg, b.rVd], [bt.nLb, b.j1], [bt.rlg, b.wV], [bt.qsg, b.Mbg], [bt.Mpg, b.Paa], [bt.UOe, b.uDb], [bt.Mqg, b.pxa], [bt.X3c, b.kKa], [bt.SOe, b.zIa], [bt.ySd, b.NDe], [bt.ang, b.vOa], [bt.Lkg, b.qZe], [bt.g6b, b.TEa], [bt.bPe, b.NDb], [bt.Mkg, b.cxa], [bt.PSe, b.FKb], [bt.CRd, b.kwa], [bt.Npg, b.yDf], [bt.DRd, b.GJb], [bt.Gpg, b.dZb], [bt.Ipg, b.ySa], [bt.$Re, b.QZc], [bt.Flg, c]].forEach(([f, g]) => {
                    a.FN(f, (h, k) => e(g, h, k))
                });
                a.FN(bt.nQd, (f, g) => {
                    e({
                        ...c,
                        Db: "direct"
                    }, f, {
                        grb: !0,
                        jf: g.btj,
                        ...g
                    })
                });
                a.FN(bt.lz, (f, g) => {
                    var h;
                    const k = null !== (h = g.Bb) && void 0 !== h ? h : c;
                    e(k, f, g)
                });
                a.FN(bt.L2c, (f, g) => {
                    var h;
                    const k = null !== (h = g.Bb) && void 0 !== h ? h : d;
                    __c.oa(k.gb === $s.Cg);
                    k.status === yg.Bf ? a.xi("canvaForTeamsUpsell", f, {
                        Qi: 15,
                        EG: "deep_link"
                    }) : e(k, f, g)
                });
                a.FN("trialEndedWinbackDialog", (f, g) => {
                    e(g.kCa ? d : c, f, {
                        OI: g.OI,
                        jf: "TRIAL_ENDED_WINBACK",
                        trigger: g.trigger,
                        kCa: g.kCa,
                        SLa: g.SLa
                    })
                });
                a.FN("directToTrialWithoutPaymentMethodDialog", (f, g) => {
                    e(g.Bzf ? d : c, f, {
                        trigger: g.trigger,
                        ngd: !0
                    })
                });
                a.FN(bt.Hqg, (f, g) => {
                    e(c, f, {
                        jf: "SHORTER_DURATION_PLAN_GTM_INDIA",
                        trigger: g.trigger
                    })
                });
                a.FN(bt.Erg, (f, g) => {
                    e(c, f, {
                        jf: "SHORTER_DURATION_PLAN_GTM_INDONESIA",
                        trigger: g.trigger,
                        bN: 2
                    })
                });
                a.FN(bt.Frg, (f, g) => {
                    e(c, f, {
                        jf: "SHORTER_DURATION_PLAN_GTM_PHILIPPINES",
                        trigger: g.trigger,
                        bN: 2
                    })
                });
                a.FN(bt.Drg, (f, g) => {
                    e(c, f, {
                        jf: "SHORTER_DURATION_PLAN_GTM",
                        trigger: g.trigger,
                        bN: 2
                    })
                })
            };
            __c.Gyc = function(a, b) {
                const c = [yg.yg, yg.Bf, yg.wq],
                    d = b.reduce((e, f) => e || c.reduce((g, h) => g || a.r7b.find(k => k.status === h && k.gb === f), void 0), void 0);
                __c.oa(null != d, "Could not find FeatureConfig that matchs the bundles.");
                [b] = b;
                return {
                    ...d,
                    feature: __c.wg(b, {
                        [$s.gh]: __c.at.ryc,
                        [$s.Cg]: __c.at.q5c
                    }),
                    Db: __c.wg(b, {
                        [$s.gh]: "generic",
                        [$s.Cg]: "generic_teams"
                    })
                }
            };
            Oyc = __webpack_require__(42782);
            Jyc = Oyc.z;
            Cyc = Oyc.Fl;
            Pyc = Oyc.LO;
            Qyc = Oyc.aD;
            var Ryc = __webpack_require__(443763),
                ut = Ryc.jsx,
                Syc = Ryc.jsxs;
            var myc = __webpack_require__(736241).Pi;
            var Tyc = __webpack_require__(875604),
                vyc = Tyc.useCallback,
                nyc = Tyc.useLayoutEffect,
                Uyc = Tyc.memo;
            var Dyc = __webpack_require__(649799).p4;
            __c.Eyc = {
                eventType: "apps_upgrade_cta_shown",
                Va(a) {
                    return Rc({
                        pro_type: a.Kpb,
                        source: a.source,
                        panel: a.panel,
                        plan_descriptor: a.Yp,
                        plan: a.Cd,
                        subscription_type: a.jc,
                        status: a.status,
                        media_ids: a.Taa,
                        location: a.location,
                        pro_content: null == a.BN ? void 0 : __c.kyc(a.BN),
                        app_api_session_context: null == a.KA ? void 0 : __c.tt(a.KA)
                    })
                }
            };
            __c.Vyc = {
                eventType: "pro_upgrade_node_shown",
                Va(a) {
                    return Rc({
                        session: a.session,
                        node: a.node,
                        node_variant: a.cba,
                        node_variant_version: a.ivd,
                        node_tags: a.hvd,
                        previous_node: a.previousNode,
                        navigation_type: a.navigationType,
                        source: a.source,
                        illustration_source: a.nLc,
                        trigger_type: a.Puc,
                        premium_feature_id: a.RZb,
                        plan_descriptor: a.Yp,
                        plan: a.Cd,
                        sku: a.mj,
                        provider: a.Hc,
                        subscription_status: a.VN,
                        retrial_count: a.N1a,
                        location: a.location,
                        pro_content: null == a.BN ? void 0 : __c.kyc(a.BN),
                        plan_branding_variant: a.Sf,
                        recommended_plan: a.A_b,
                        recommended_billing_interval: a.xcb,
                        personalization_context: null == a.SH ? void 0 : __c.D$a(a.SH),
                        external_content_id: a.DHc,
                        app_api_session_context: null == a.KA ? void 0 : __c.tt(a.KA),
                        brand_context: null == a.m7 ? void 0 : __c.Fg(a.m7),
                        user_type: a.Ot,
                        touchpoint_label: a.Nj,
                        touchpoint_correlation_id: a.Wk,
                        promotion: a.jf
                    })
                }
            };
            __c.Wyc = {
                eventType: "pro_upgrade_node_action_triggered",
                Va(a) {
                    return Rc({
                        session: a.session,
                        action: a.action,
                        action_target: a.Zu,
                        node: a.node,
                        node_variant: a.cba,
                        node_variant_version: a.ivd,
                        node_tags: a.hvd,
                        source: a.source,
                        illustration_source: a.nLc,
                        trigger_type: a.Puc,
                        premium_feature_id: a.RZb,
                        plan_descriptor: a.Yp,
                        plan: a.Cd,
                        sku: a.mj,
                        provider: a.Hc,
                        error: a.error,
                        subscription_status: a.VN,
                        retrial_count: a.N1a,
                        location: a.location,
                        plan_branding_variant: a.Sf,
                        recommended_plan: a.A_b,
                        recommended_billing_interval: a.xcb,
                        personalization_context: null == a.SH ? void 0 : __c.D$a(a.SH),
                        external_content_id: a.DHc,
                        app_api_session_context: null == a.KA ? void 0 : __c.tt(a.KA),
                        brand_context: null == a.m7 ? void 0 : __c.Fg(a.m7),
                        user_type: a.Ot,
                        touchpoint_label: a.Nj,
                        touchpoint_correlation_id: a.Wk,
                        promotion: a.jf
                    })
                }
            };
            var oyc = Uyc(({open: a, ma: b, iia: c, wda: d, onCancel: e, Kc: f, Le: g, Elc: h}) => {
                var k = __c.dt,
                    l = __c.T("1bHsuQ");
                d = [{
                    children: d ? __c.T("PKbc5Q") : __c.T("USN8MA"),
                    onClick: h
                }, {
                    children: __c.T("61RZ6g"),
                    onClick: f
                }];
                b = __c.Ve(b);
                b = __c.S("GHhjyQ", [c + 1, b]);
                return ut(k, {
                    open: a,
                    title: l,
                    buttons: d,
                    explanation: Syc(__c.Be, {
                        align: "start",
                        spacing: "2u",
                        children: [ut(__c.X, {
                            children: ut(__c.Xe, {
                                message: b
                            })
                        }), ut(__c.X, {
                            children: ut(__c.Xe, {
                                message: __c.S("/uqI2Q", [c])
                            })
                        })]
                    }),
                    Le: g,
                    dismissible: !0,
                    Mb: e
                })
            });
            var Xyc = class {
                    static L(a)
                    {
                        __c.R(a, {
                            open: Pyc.ref
                        })
                    }
                    constructor()
                    {
                        Xyc.L(this);
                        this.open = !0
                    }
                }
                ,
                lyc = class {
                    static L(a)
                    {
                        __c.R(a, {
                            rd: Qyc
                        })
                    }
                    Gc()
                    {
                        return new Xyc
                    }
                    rd(a)
                    {
                        a.open = !1
                    }
                    Fb()
                    {
                        this.ea.Cu()
                    }
                    onCancel(a)
                    {
                        this.ea.ZD();
                        this.rd(a)
                    }
                    Kc(a)
                    {
                        var b;
                        this.ea.Ks();
                        this.rd(a);
                        null === (b = this.Lc) || void 0 === b ? void 0 : b.CJa({})
                    }
                    Elc(a, b)
                    {
                        var c,
                            d;
                        this.vf.Ks();
                        this.rd(a);
                        if (b)
                            (null === (c = this.Ha) || void 0 === c ? 0 : c.Zl) && this.Ha.Zl(new __c.fg({
                                uri: location.origin + __c.xh(__c.Ah.vQd),
                                target: 1
                            }));
                        else if (null === (d = this.Ha) || void 0 ===
                        d ? 0 : d.Zl)
                            a = this.Ha,
                            b = a.Zl,
                            c = location.origin,
                            d = __c.xh(__c.Ah.bCi),
                            b.call(a, new __c.fg({
                                uri: c + d,
                                target: 1
                            }))
                    }
                    constructor(a, b, c, d)
                    {
                        lyc.L(this);
                        this.ea = a;
                        this.vf = b;
                        this.Lc = c;
                        this.Ha = d
                    }
                }
                ;
            var yyc = class {
                static L(a)
                {
                    __c.R(a, {
                        currentNode: Cyc
                    })
                }
                get currentNode()
                {
                    return this.store.currentNode.node
                }
                dispose()
                {
                    this.store.D$({
                        action: "dismiss",
                        step: void 0
                    })
                }
                constructor(a)
                {
                    yyc.L(this);
                    this.store = a
                }
            }
            ;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:b5747d4e2e8b28c5.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[79872], {

    /***/
    246033:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var szc = __webpack_require__(443763).jsx;
            var tzc = __webpack_require__(875604).Component;
            __c.yt = class  extends tzc{
                render()
                {
                    const {ze: a, ...b} = this.props;
                    return szc(__c.Xe, {
                        ...b,
                        onClick: this.onClick,
                        onKeyDown: this.onKeyDown
                    })
                }
                constructor(...a)
                {
                    super(...a);
                    this.onClick = b => {
                        var c = b.target.closest("a");
                        c && null != c.dataset && (c = c.dataset.anchorId, null != c && this.props.ze(c, b))
                    };
                    this.onKeyDown = b => {
                        const c = b.target.closest("a");
                        if ("Enter" === b.key)
                            this.onClick(b);
                        if (" " === b.key && "button" === (null === c || void 0 === c ? void 0 : c.getAttribute("role")))
                            this.onClick(b)
                    }
                }
            }
            ;
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:a9e5da08f3069414.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[56559], {

    /***/
    624833:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(280716);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            var suc;
            __c.ruc = a => __c.bMa({
                ...a,
                variant: "primary"
            });
            suc = __webpack_require__(443763).jsx;
            var tuc = __webpack_require__,
                uuc = tuc(993864),
                vuc = tuc.n_x(uuc)();
            __webpack_require__(875604);
            __c.Rs = ({size: a="medium"}) => suc("span", {
                className: vuc("JtE88A"),
                children: suc(__c.Vh, {
                    size: a
                })
            });
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:1be29d047bedeac6.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[61933], {

    /***/
    751426:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:c5ad882951c425d2.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[88663], {

    /***/
    298330:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:795be84e0b54d1c3.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[92340], {

    /***/
    970311:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.gHb = __c.I(() => [1, 2, 3, 4]);
            __c.hHb = __c.I(() => [1, 2, 3, 4, 5]);
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:41007e8fa1f8c929.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[856], {

    /***/
    243643:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(970311);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.go = () => ({
                Ga: __c.Ca(500, __c.gHb),
                Ml: __c.Ca(501, __c.hHb)
            });
            __c.iHb = __c.H(() => ({
                ...__c.go(),
                type: __c.x("A?", 17, "ADYEN_GOOGLE_PAY"),
                merchantId: __c.M(1),
                merchantName: __c.M(2)
            }));
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:f481a66fba7334ff.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[96647], {

    /***/
    868356:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])
; // __FILE_CONTENT_FOR__:b5848f853cbf4ab9.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[48802], {

    /***/
    936405:
    function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};
        (function(__c) {
            __c.xt = class  extends Error{
                constructor(a, b, c)
                {
                    super(`${__c.rzc[a]} ${b || ""}`.trim(), c);
                    this.code = a
                }
            }
            ;
            __c.rzc = {
                [1]: "unhandled_payment_provider_error",
                [2]: "library_not_loaded",
                [3]: "async_payment_error",
                [4]: "async_payment_canceled",
                [5]: "invoice_status_polling_error",
                [6]: "credit_card_token_error",
                [7]: "update_invoice_error",
                [8]: "network_error",
                [9]: "create_payment_option_error",
                [10]: "request_risk_scoring_failure",
                [11]: "invalid_billing_address",
                [12]: "update_account_error",
                [13]: "incomplete_name_email_document",
                [14]: "incomplete_name",
                [15]: "incomplete_email",
                [16]: "incomplete_document",
                [17]: "invalid_name_email_document",
                [18]: "invalid_name",
                [19]: "invalid_email",
                [20]: "invalid_document",
                [21]: "invalid_generic_error",
                [22]: "cc_incomplete_number",
                [23]: "cc_invalid_number",
                [24]: "cc_incomplete_expiry_date",
                [25]: "cc_invalid_expiry_date",
                [26]: "cc_incomplete_cvc",
                [27]: "cc_invalid_cvc",
                [28]: "cc_invalid_cardholder",
                [29]: "cc_invalid_cardholder_email",
                [30]: "cc_invalid_document",
                [31]: "rupay_not_supported",
                [32]: "fake",
                [33]: "payment_canceled",
                [34]: "launch_purchase_error",
                [35]: "polling_canceled",
                [36]: "redeem_credits_error",
                [37]: "finish_transaction_error",
                [38]: "get_transactions_error",
                [39]: "no_transaction_identifier_found",
                [40]: "get_receipt_error",
                [41]: "no_receipt_error",
                [42]: "payment_failed_error",
                [43]: "unexpected_purchase_state",
                [44]: "fetch_price_info_error",
                [45]: "resource_load_error",
                [46]: "create_credits_error",
                [47]: "billing_x_load_error",
                [48]: "resource_preload_error",
                [49]: "debug",
                [50]: "google_billing_unavailable",
                [51]: "insufficient_funds",
                [52]: "too_many_attempts",
                [53]: "acquirer_error",
                [55]: "no_payment_method_selected",
                [54]: "customer_too_young",
                [56]: "apple_x_fetch_price_info_empty_result",
                [57]: "apple_x_fetch_price_info_no_currency",
                [59]: "google_billing_service_timeout",
                [60]: "google_billing_feature_not_supported",
                [61]: "google_billing_service_disconnected",
                [62]: "google_billing_service_unavailable",
                [63]: "google_billing_billing_unavailable",
                [64]: "google_billing_item_unavailable",
                [65]: "google_billing_developer_error",
                [66]: "google_billing_error",
                [67]: "google_billing_item_already_owned",
                [68]: "google_billing_item_not_owned",
                [69]: "apple_billing_unknown",
                [70]: "apple_billing_client_invalid",
                [71]: "apple_billing_payment_invalid",
                [72]: "apple_billing_payment_not_allowed",
                [73]: "apple_billing_store_product_not_available",
                [74]: "apple_billing_cloud_service_permission_denied",
                [75]: "apple_billing_cloud_service_network_connection_failed",
                [76]: "apple_billing_cloud_service_revoked",
                [77]: "apple_billing_privacy_acknowledgement_required",
                [78]: "apple_billing_unauthorized_request_data",
                [79]: "apple_billing_invalid_offer_identifier",
                [80]: "apple_billing_invalid_signature",
                [81]: "apple_billing_missing_offer_params",
                [82]: "apple_billing_invalid_offer_price",
                [83]: "apple_billing_overlay_cancelled",
                [84]: "apple_billing_overlay_invalid_configuration",
                [85]: "apple_billing_overlay_timeout",
                [86]: "apple_billing_ineligible_for_offer",
                [87]: "apple_billing_unsupported_platform",
                [88]: "apple_billing_overlay_presented_in_background_scene",
                [89]: "external_unknown_error_code",
                [58]: "apple_x_error_object_or_code_undefined",
                [90]: "invalid_configuration",
                [91]: "iframe_expired",
                [92]: "cc_invalid_number_and_cvc",
                [93]: "cc_invalid_generic_error",
                [94]: "async_task_expired",
                [95]: "async_task_error",
                [96]: "async_task_network_error_4xx",
                [97]: "async_task_network_error_5xx",
                [98]: "async_task_network_error",
                [99]: "cc_invalid_number_cvc_expiry",
                [100]: "cc_incomplete_number_and_cvc",
                [101]: "cc_incomplete_number_cvc_expiry",
                [102]: "cc_invalid_expiry_old",
                [103]: "cc_incomplete_cardholder_name",
                [104]: "cc_incomplete_document",
                [105]: "cc_incomplete_cardholder_email",
                [106]: "create_po_invalid_billing_address",
                [107]: "create_po_cc_invalid_number",
                [108]: "create_po_cc_invalid_expiry_date",
                [109]: "create_po_cc_invalid_cvc",
                [110]: "create_po_payment_config_polling_error",
                [111]: "create_po_amount_too_small",
                [112]: "create_po_card_not_supported",
                [113]: "create_po_ecommerce_ineligible",
                [114]: "create_po_expired_card",
                [115]: "create_po_fraud",
                [116]: "create_po_invalid_document",
                [117]: "create_po_invalid_payment_option",
                [118]: "create_po_unsupported_payment_option",
                [119]: "create_po_insufficient_funds",
                [120]: "create_po_missing_information",
                [121]: "create_po_not_authenticated",
                [122]: "create_po_not_authroised",
                [123]: "create_po_requires_additional_steps",
                [124]: "create_po_system",
                [125]: "create_po_unknown",
                [126]: "create_po_invalid_currency",
                [127]: "create_po_mor_not_supported",
                [128]: "create_po_instalments_not_allowed",
                [129]: "create_po_instalments_not_supported",
                [130]: "create_po_no_processable_gateways",
                [131]: "update_in_invalid_billing_address",
                [132]: "update_in_cc_invalid_number",
                [133]: "update_in_redeem_credits_error",
                [134]: "create_po_network_error",
                [135]: "create_po_network_error_400",
                [136]: "create_po_network_error_404",
                [137]: "create_po_network_error_4xx",
                [138]: "create_po_network_error_5xx",
                [139]: "update_in_network_error",
                [140]: "update_in_network_error_4xx",
                [141]: "update_in_network_error_5xx",
                [142]: "invalid_address_st_name_st_num_city",
                [143]: "invalid_address_st_name_st_num",
                [144]: "invalid_address_st_name",
                [145]: "invalid_address_st_num",
                [146]: "invalid_address_country",
                [147]: "invalid_address_subdivision",
                [148]: "invalid_address_subdivision_zip",
                [149]: "invalid_address_city",
                [150]: "invalid_address_city_zip",
                [151]: "invalid_address_zip",
                [152]: "get_unsafe_billing_address_error",
                [153]: "upi_incomplete_name",
                [154]: "upi_incomplete_vpa",
                [155]: "upi_incomplete_pan",
                [156]: "upi_invalid_name",
                [157]: "upi_invalid_vpa",
                [158]: "upi_invalid_pan",
                [159]: "upi_expired",
                [160]: "pix_expired",
                [161]: "pix_cancelled",
                [162]: "apple_pay_create_session_api_error",
                [163]: "apple_pay_complete_merchant_validation_error",
                [164]: "apple_pay_unexpected_cancellation",
                [165]: "google_pay_buyer_account_error",
                [166]: "google_pay_internal_error",
                [167]: "google_pay_merchant_account_error",
                [168]: "google_pay_developer_error",
                [169]: "google_pay_canceled",
                [170]: "three_ds_flow_cancelled",
                [211]: "three_ds_flow_not_supported",
                [172]: "tokenex_failed_to_fetch",
                [173]: "iframe_load_error",
                [171]: "create_po_three_ds_polling_error",
                [174]: "charge_card_not_supported",
                [175]: "charge_declined",
                [176]: "charge_inactive_card",
                [177]: "charge_expired_card",
                [178]: "charge_invalid_cc_number",
                [179]: "charge_invalid_cvc",
                [180]: "charge_invalid_expiry",
                [181]: "charge_invalid_currency",
                [182]: "charge_invalid_billing_address",
                [183]: "charge_invalid_document",
                [184]: "charge_insufficient_funds",
                [185]: "charge_too_many_attempts",
                [186]: "charge_api_error",
                [187]: "charge_acquirer_error",
                [188]: "charge_customer_too_young",
                [189]: "charge_amount_too_small",
                [190]: "charge_payment_method_missing_information",
                [191]: "charge_no_payment_method",
                [192]: "charge_fingerprint_blocked",
                [193]: "charge_canva_internal",
                [194]: "charge_unknown_error",
                [195]: "swept",
                [196]: "charge_retryable_race_condition",
                [209]: "form_submitted_step_error",
                [210]: "form_submit_cancelled",
                [197]: "cc_unsupported_foreign_card",
                [198]: "cc_instalments_not_supported_debit_card",
                [199]: "cc_instalments_not_supported_prepaid_card",
                [200]: "ecommerce_ineligible",
                [201]: "expired_payment_option",
                [202]: "fraud",
                [203]: "invalid_payment_option",
                [204]: "cc_not_authenticated",
                [205]: "not_authorised",
                [206]: "requires_additional_steps",
                [207]: "unsupported_payment_option",
                [208]: "mor_not_supported",
                [212]: "unsupported_additional_step",
                [213]: "async_payment_refused",
                [214]: "missing_payment_logo",
                [215]: "do_not_retry",
                [216]: "external_payment_error",
                [221]: "decorator_error",
                [218]: "async_payment_auth_cancelled",
                [217]: "async_payment_cancelled_v1",
                [220]: "async_store_error_cancelled",
                [219]: "async_payment_error_cancelled",
                [222]: "verify_stored_po_error",
                [223]: "verify_stored_po_three_ds_polling_error",
                [224]: "verify_stored_po_network_error",
                [225]: "verify_stored_po_network_error_400",
                [226]: "verify_stored_po_network_error_404",
                [227]: "verify_stored_po_network_error_4xx",
                [228]: "verify_stored_po_network_error_5xx",
                [229]: "external_verification_flow_unsupported",
                [230]: "external_verification_flow_cancelled",
                [231]: "external_verification_flow_verify_stored_po_polling_error"
            };
        }).call(self, self._fd1e22c0e0516062f8631db29060abc8);
    }

}])//# sourceMappingURL=https://chunk-composing.canva.cn/chunk-batch-sm/8+8+8+10_sourcemaps/b391e8c587050fe3.js.map+8_sourcemaps/3dba769cde9f821a.js.map+11_sourcemaps/347d56315adf2f50.js.map+8_sourcemaps/91a330d24ff4fc17.js.map+8_sourcemaps/839cc17e4db8e5c8.js.map+8_sourcemaps/27492b0237d273b8.js.map+9_sourcemaps/8e37b872a77a7ec4.js.map+8_sourcemaps/4acc0b61463ecbea.js.map+11_sourcemaps/eed0e43e06529515.js.map+8_sourcemaps/44129bd0e714ac3c.js.map+8_sourcemaps/9038ab7c2b3706e1.js.map+10_sourcemaps/f950588265dbeddd.js.map+8_sourcemaps/f5aff67359baf943.js.map+8_sourcemaps/f8ff99679230af2e.js.map+12_sourcemaps/a4e41112e23e3e34.js.map+2_sourcemaps/e52c06fffc36d87a.vendor.js.map+12_sourcemaps/ff540eb0892fc7d4.js.map+15_sourcemaps/6c8a77a9d151e30a.js.map+10_sourcemaps/ed9068226564e043.js.map+23_sourcemaps/68b3d1eee8d66aea.js.map+13_sourcemaps/0f1cf4673e04d53f.js.map+9_sourcemaps/466546bf36ba519f.js.map+8_sourcemaps/6d285816067477db.js.map+8_sourcemaps/5f1bcc5816e5b30f.js.map+13_sourcemaps/1031179b7f8862b0.js.map+11_sourcemaps/ec386575f45120c5.js.map+8+8+36_sourcemaps/022e3b22e2677577.js.map+8_sourcemaps/b5747d4e2e8b28c5.js.map+8_sourcemaps/a9e5da08f3069414.js.map+8+8+8_sourcemaps/795be84e0b54d1c3.js.map+8_sourcemaps/41007e8fa1f8c929.js.map+8+24_sourcemaps/b5848f853cbf4ab9.js.map
