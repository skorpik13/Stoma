!function(l) {
    function n(n) {
        for (var u, o, d = n[0], r = n[1], a = n[2], c = 0, p = []; c < d.length; c++)
            o = d[c],
            t[o] && p.push(t[o][0]),
            t[o] = 0;
        for (u in r)
            Object.prototype.hasOwnProperty.call(r, u) && (l[u] = r[u]);
        for (s && s(n); p.length; )
            p.shift()();
        return i.push.apply(i, a || []),
        e()
    }
    function e() {
        for (var l, n = 0; n < i.length; n++) {
            for (var e = i[n], u = !0, d = 1; d < e.length; d++) {
                var r = e[d];
                0 !== t[r] && (u = !1)
            }
            u && (i.splice(n--, 1),
            l = o(o.s = e[0]))
        }
        return l
    }
    var u = {}
      , t = {
        1: 0
    }
      , i = [];
    function o(n) {
        if (u[n])
            return u[n].exports;
        var e = u[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return l[n].call(e.exports, e, e.exports, o),
        e.l = !0,
        e.exports
    }
    o.m = l,
    o.c = u,
    o.d = function(l, n, e) {
        o.o(l, n) || Object.defineProperty(l, n, {
            configurable: !1,
            enumerable: !0,
            get: e
        })
    }
    ,
    o.r = function(l) {
        Object.defineProperty(l, "__esModule", {
            value: !0
        })
    }
    ,
    o.n = function(l) {
        var n = l && l.__esModule ? function() {
            return l.default
        }
        : function() {
            return l
        }
        ;
        return o.d(n, "a", n),
        n
    }
    ,
    o.o = function(l, n) {
        return Object.prototype.hasOwnProperty.call(l, n)
    }
    ,
    o.p = "";
    var d = window.webpackJsonp = window.webpackJsonp || []
      , r = d.push.bind(d);
    d.push = n,
    d = d.slice();
    for (var a = 0; a < d.length; a++)
        n(d[a]);
    var s = r;
    i.push([229, 0]),
    e()
}({
    178: function(l, n) {
        function e(l) {
            return Promise.resolve().then(function() {
                var n = new Error('Cannot find module "' + l + '".');
                throw n.code = "MODULE_NOT_FOUND",
                n
            })
        }
        e.keys = function() {
            return []
        }
        ,
        e.resolve = e,
        l.exports = e,
        e.id = 178
    },
    229: function(l, n, e) {
        "use strict";
        e.r(n);
        var u = e(0)
          , t = "0.0.1-SNAPSHOT"
          , i = !1
          , o = ""
          , d = "484c2f092fcfd445c0572b28b02ccf61113c5af0"
          , r = 'Добро пожаловать в систему мониторинга "Первая вода"!';
        e(276);
        var a = e(11)
          , s = e(15);
        a.d.add(s.F),
        a.d.add(s.w),
        a.d.add(s.y),
        a.d.add(s.x),
        a.d.add(s.z),
        a.d.add(s.j),
        a.d.add(s.c),
        a.d.add(s.D),
        a.d.add(s.a),
        a.d.add(s.s),
        a.d.add(s.q),
        a.d.add(s.p),
        a.d.add(s.d),
        a.d.add(s.n),
        a.d.add(s.C),
        a.d.add(s.G),
        a.d.add(s.r),
        a.d.add(s.A),
        a.d.add(s.m),
        a.d.add(s.o),
        a.d.add(s.e),
        a.d.add(s.B),
        a.d.add(s.f),
        a.d.add(s.l),
        a.d.add(s.k),
        a.d.add(s.H),
        a.d.add(s.h),
        a.d.add(s.i),
        a.d.add(s.v),
        a.d.add(s.u),
        a.d.add(s.g),
        a.d.add(s.t),
        a.d.add(s.E),
        a.d.add(s.b);
        var c = e(42)
          , p = function() {
            return function(l) {
                this.dpConfig = l,
                this.isInfoRead = !1,
                this.dpConfig.minDate = {
                    year: c().year() - 100,
                    month: 1,
                    day: 1
                }
            }
        }()
          , f = e(5)
          , m = function() {
            function l(l, n) {
                this.titleService = l,
                this.router = n
            }
            return l.prototype.getPageTitle = function(l) {
                var n = l.data && l.data.pageTitle ? l.data.pageTitle : "aquamonFrontApp";
                return l.firstChild && (n = this.getPageTitle(l.firstChild) || n),
                n
            }
            ,
            l.prototype.ngOnInit = function() {
                var l = this;
                this.router.events.subscribe(function(n) {
                    n instanceof f.d && l.titleService.setTitle(l.getPageTitle(l.router.routerState.snapshot.root))
                })
            }
            ,
            l
        }()
          , g = e(436)
          , h = e(2)
          , v = e(3)
          , b = e(132)
          , y = e(49)
          , C = (function() {
            function l(l) {
                this.cookieService = l
            }
            l.prototype.getCSRF = function(l) {
                return void 0 === l && (l = "XSRF-TOKEN"),
                this.cookieService.get(l)
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(y.a))
                },
                token: l,
                providedIn: "root"
            })
        }(),
        e(62))
          , R = e(43)
          , w = function() {
            function l(l) {
                this.$sessionStorage = l
            }
            return l.prototype.getPreviousState = function() {
                return this.$sessionStorage.retrieve("previousState")
            }
            ,
            l.prototype.resetPreviousState = function() {
                this.$sessionStorage.clear("previousState")
            }
            ,
            l.prototype.storePreviousState = function(l, n) {
                var e = {
                    name: l,
                    params: n
                };
                this.$sessionStorage.store("previousState", e)
            }
            ,
            l.prototype.getDestinationState = function() {
                return this.$sessionStorage.retrieve("destinationState")
            }
            ,
            l.prototype.storeUrl = function(l) {
                this.$sessionStorage.store("previousUrl", l)
            }
            ,
            l.prototype.getUrl = function() {
                return this.$sessionStorage.retrieve("previousUrl")
            }
            ,
            l.prototype.storeDestinationState = function(l, n, e) {
                var u = {
                    destination: {
                        name: l.name,
                        data: l.data
                    },
                    params: n,
                    from: {
                        name: e.name
                    }
                };
                this.$sessionStorage.store("destinationState", u)
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(R.a))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , I = e(7)
          , x = function() {
            function l(l) {
                this.http = l
            }
            return l.prototype.get = function() {
                return this.http.get(o + "api/account", {
                    observe: "response"
                })
            }
            ,
            l.prototype.save = function(l) {
                return this.http.post(o + "api/account", l, {
                    observe: "response"
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , S = e(16)
          , T = e(8)
          , k = e(79)
          , D = function() {
            function l(l, n, e) {
                this.http = l,
                this.$localStorage = n,
                this.$sessionStorage = e
            }
            return l.prototype.getToken = function() {
                return this.$localStorage.retrieve("authenticationToken") || this.$sessionStorage.retrieve("authenticationToken")
            }
            ,
            l.prototype.login = function(l) {
                var n = {
                    username: l.username,
                    password: l.password,
                    rememberMe: l.rememberMe
                };
                return this.http.post(o + "api/authenticate", n, {
                    observe: "response"
                }).pipe(Object(T.a)(function(n) {
                    var e = n.headers.get("Authorization");
                    if (e && "Bearer " === e.slice(0, 7)) {
                        var u = e.slice(7, e.length);
                        return this.storeAuthenticationToken(u, l.rememberMe),
                        u
                    }
                }
                .bind(this)))
            }
            ,
            l.prototype.loginWithToken = function(l, n) {
                return l ? (this.storeAuthenticationToken(l, n),
                Promise.resolve(l)) : Promise.reject("auth-jwt-service Promise reject")
            }
            ,
            l.prototype.storeAuthenticationToken = function(l, n) {
                n ? this.$localStorage.store("authenticationToken", l) : this.$sessionStorage.store("authenticationToken", l)
            }
            ,
            l.prototype.logout = function() {
                var l = this;
                return new S.a(function(n) {
                    l.$localStorage.clear("authenticationToken"),
                    l.$sessionStorage.clear("authenticationToken"),
                    n.complete()
                }
                )
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c),u.inject(k.a),u.inject(R.a))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , E = (function() {}(),
        function() {}(),
        e(45))
          , M = function() {
            function l(l) {
                this.account = l,
                this.authenticated = !1,
                this.authenticationState = new E.a
            }
            return l.prototype.authenticate = function(l) {
                this.userIdentity = l,
                this.authenticated = null !== l,
                this.authenticationState.next(this.userIdentity)
            }
            ,
            l.prototype.hasAnyAuthority = function(l) {
                return Promise.resolve(this.hasAnyAuthorityDirect(l))
            }
            ,
            l.prototype.hasAnyAuthorityDirect = function(l) {
                if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities)
                    return !1;
                for (var n = 0; n < l.length; n++)
                    if (this.userIdentity.authorities.includes(l[n]))
                        return !0;
                return !1
            }
            ,
            l.prototype.hasAuthority = function(l) {
                return this.authenticated ? this.identity().then(function(n) {
                    return Promise.resolve(n.authorities && n.authorities.includes(l))
                }, function() {
                    return Promise.resolve(!1)
                }) : Promise.resolve(!1)
            }
            ,
            l.prototype.identity = function(l) {
                var n = this;
                return !0 === l && (this.userIdentity = void 0),
                this.userIdentity ? Promise.resolve(this.userIdentity) : this.account.get().toPromise().then(function(l) {
                    var e = l.body;
                    return e ? (n.userIdentity = e,
                    n.authenticated = !0) : (n.userIdentity = null,
                    n.authenticated = !1),
                    n.authenticationState.next(n.userIdentity),
                    n.userIdentity
                }).catch(function(l) {
                    return n.userIdentity = null,
                    n.authenticated = !1,
                    n.authenticationState.next(n.userIdentity),
                    null
                })
            }
            ,
            l.prototype.isAuthenticated = function() {
                return this.authenticated
            }
            ,
            l.prototype.isIdentityResolved = function() {
                return void 0 !== this.userIdentity
            }
            ,
            l.prototype.getAuthenticationState = function() {
                return this.authenticationState.asObservable()
            }
            ,
            l.prototype.getImageUrl = function() {
                return this.isIdentityResolved() ? this.userIdentity.imageUrl : null
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(x))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , P = function() {
            function l(l, n, e) {
                this.router = l,
                this.principal = n,
                this.stateStorageService = e
            }
            return l.prototype.canActivate = function(l, n) {
                var e = l.data.authorities;
                return this.checkLogin(e, n.url)
            }
            ,
            l.prototype.checkLogin = function(l, n) {
                var e = this
                  , t = this.principal;
                return Promise.resolve(t.identity().then(function(i) {
                    return !l || 0 === l.length || (i ? t.hasAnyAuthority(l).then(function(n) {
                        return !!n || (Object(u.isDevMode)() && console.error("User has not any of required authorities: ", l),
                        !1)
                    }) : (e.stateStorageService.storeUrl(n),
                    e.router.navigate(["accessdenied"]).then(function() {
                        i || e.router.navigate(["/"])
                    }),
                    !1))
                }))
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(f.l),u.inject(M),u.inject(w))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , _ = function() {
            function l(l, n) {
                this.principal = l,
                this.authServerProvider = n
            }
            return l.prototype.login = function(l, n) {
                var e = this
                  , u = n || function() {}
                ;
                return new Promise(function(n, t) {
                    e.authServerProvider.login(l).subscribe(function(l) {
                        return e.principal.identity(!0).then(function(e) {
                            n(l)
                        }),
                        u()
                    }, function(l) {
                        return e.logout(),
                        t(l),
                        u(l)
                    })
                }
                )
            }
            ,
            l.prototype.loginWithToken = function(l, n) {
                return this.authServerProvider.loginWithToken(l, n)
            }
            ,
            l.prototype.logout = function() {
                this.authServerProvider.logout().subscribe(),
                this.principal.authenticate(null)
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(M),u.inject(D))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , O = function(l) {
            var n = new I.j;
            return l && (Object.keys(l).forEach(function(e) {
                "sort" !== e && (n = n.set(e, l[e]))
            }),
            l.sort && l.sort.forEach(function(l) {
                n = n.append("sort", l)
            })),
            n
        }
          , j = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/users",
                this.searchUrl = o + "api/_search/users"
            }
            return l.prototype.create = function(l) {
                return this.http.post(this.resourceUrl, l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.update = function(l) {
                return this.http.put(this.resourceUrl, l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.find = function(l) {
                return this.http.get(this.resourceUrl + "/" + l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.query = function(l) {
                l && l.query && l.sort && (l.sort = l.sort.map(function(l) {
                    return l.split(",")
                }).map(function(l) {
                    return l[0] + ".keyword," + (l[1] ? l[1] : "asc")
                }));
                var n = O(l);
                return l && l.query ? this.http.get(this.searchUrl, {
                    params: n,
                    observe: "response"
                }) : this.http.get(this.resourceUrl, {
                    params: n,
                    observe: "response"
                })
            }
            ,
            l.prototype.delete = function(l) {
                return this.http.delete(this.resourceUrl + "/" + l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.authorities = function() {
                return this.http.get(o + "api/users/authorities")
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , V = e(216)
          , A = e.n(V)
          , N = function() {
            return function() {
                Object(h.B)(A.a)
            }
        }()
          , F = function() {
            return function() {}
        }()
          , L = function() {
            function l(l) {
                this.http = l,
                this.infoUrl = o + "management/info"
            }
            return l.prototype.getProfileInfo = function() {
                return this.profileInfo || (this.profileInfo = this.http.get(this.infoUrl, {
                    observe: "response"
                }).pipe(Object(T.a)(function(l) {
                    var n = l.body
                      , e = new F;
                    e.activeProfiles = n.activeProfiles;
                    var u = n["display-ribbon-on-profiles"].split(",");
                    if (e.activeProfiles) {
                        var t = u.filter(function(l) {
                            return e.activeProfiles.includes(l)
                        });
                        0 !== t.length && (e.ribbonEnv = t[0]),
                        e.inProduction = e.activeProfiles.includes("prod"),
                        e.swaggerEnabled = e.activeProfiles.includes("swagger")
                    }
                    return e
                })).toPromise()),
                this.profileInfo
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , $ = e(21)
          , U = function() {
            function l(l, n, e, u, i) {
                this.loginService = l,
                this.principal = n,
                this.profileService = e,
                this.eventManager = u,
                this.router = i,
                this.notShowTogglerHere = ["/", "/register"],
                this.version = t ? "v" + t : "",
                this.isNavbarCollapsed = !0
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.profileService.getProfileInfo().then(function(n) {
                    l.inProduction = n.inProduction,
                    l.swaggerEnabled = n.swaggerEnabled
                }),
                this.principal.identity().then(function(n) {
                    l.currentAccount = n
                }),
                this.registerAuthenticationSuccess()
            }
            ,
            l.prototype.registerAuthenticationSuccess = function() {
                var l = this;
                this.eventManager.subscribe("authenticationSuccess", function(n) {
                    l.principal.identity().then(function(n) {
                        l.currentAccount = n
                    })
                })
            }
            ,
            l.prototype.collapseNavbar = function() {
                this.isNavbarCollapsed = !0
            }
            ,
            l.prototype.isAuthenticated = function() {
                return this.principal.isAuthenticated()
            }
            ,
            l.prototype.login = function() {
                this.router.navigate(["/"])
            }
            ,
            l.prototype.logout = function() {
                this.collapseNavbar(),
                this.loginService.logout(),
                this.router.navigate([""]),
                this.currentAccount = null
            }
            ,
            l.prototype.toggleNavbar = function() {
                this.isNavbarCollapsed = !this.isNavbarCollapsed
            }
            ,
            l.prototype.getImageUrl = function() {
                return this.isAuthenticated() ? this.principal.getImageUrl() : null
            }
            ,
            l.prototype.getConvenientName = function(l) {
                return l ? [l.firstName, l.lastName].join(" ") : ""
            }
            ,
            l.prototype.canShowToggler = function() {
                return -1 === this.notShowTogglerHere.indexOf(this.router.url)
            }
            ,
            l.prototype.getCurrentUrl = function() {
                return this.router.url
            }
            ,
            l.prototype.isAdmin = function(l) {
                return -1 !== l.authorities.indexOf("ROLE_ADMIN")
            }
            ,
            l
        }()
          , q = e(13)
          , z = [[".navbar-version[_ngcontent-%COMP%]{font-size:10px;color:#ccc}.jh-navbar[_ngcontent-%COMP%]{padding:.2em 1em;background:#4fc619}.jh-navbar[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{margin:-10px 0;height:40px;width:40px;border-radius:50%}.jh-navbar[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .jh-navbar[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]:focus, .jh-navbar[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]:hover{background-color:#353d47}.jh-navbar[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{margin-left:.15em}.jh-navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]{padding:.5em}.jh-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-left:1.5rem}.jh-navbar[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{font-weight:400}.jh-navbar[_ngcontent-%COMP%]   .jh-navbar-toggler[_ngcontent-%COMP%]{color:#ccc;font-size:1.5em;padding:10px}.jh-navbar[_ngcontent-%COMP%]   .jh-navbar-toggler[_ngcontent-%COMP%]:hover{color:#fff}@media screen and (min-width:768px){.jh-navbar-toggler[_ngcontent-%COMP%]{display:none}}@media screen and (max-width:992px){.jh-logo-container[_ngcontent-%COMP%]{width:100%}}.navbar-title[_ngcontent-%COMP%]{vertical-align:middle}.navbar-brand.logo[_ngcontent-%COMP%]{padding:10px 15px}.logo-img[_ngcontent-%COMP%]{height:100%;background:url(content/1ae193b724424b5660e3cf718ff26715.png) no-repeat 50%;background-size:contain;width:100%}.logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]{height:68px;width:170px;display:inline-block;vertical-align:middle;margin-bottom:3px}@media only screen and (max-width:480px){.slogan_cut[_ngcontent-%COMP%]{display:none}}"]]
          , B = u["ɵcrt"]({
            encapsulation: 0,
            styles: z,
            data: {}
        });
        function K(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "a", [["class", "jh-navbar-toggler d-lg-none float-right"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.toggleNavbar() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-bars"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function H(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "a", [["class", "dropdown-item"], ["routerLink", "admin"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "click" === n && (t = !1 !== u["ɵnov"](l, 1).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                "click" === n && (t = !1 !== i.collapseNavbar() && t);
                return t
            }, null, null)), u["ɵdid"](1, 671744, [[2, 4]], 0, f.o, [f.l, f.a, h.i], {
                routerLink: [0, "routerLink"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-sign-in"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Кабинет администратора"])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 1, 0, "admin")
            }, function(l, n) {
                l(n, 0, 0, u["ɵnov"](n, 1).target, u["ɵnov"](n, 1).href)
            })
        }
        function Z(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "a", [["class", "dropdown-item"], ["routerLink", "dashboard"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "click" === n && (t = !1 !== u["ɵnov"](l, 1).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                "click" === n && (t = !1 !== i.collapseNavbar() && t);
                return t
            }, null, null)), u["ɵdid"](1, 671744, [[2, 4]], 0, f.o, [f.l, f.a, h.i], {
                routerLink: [0, "routerLink"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-sign-in"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Кабинет вендора"])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 1, 0, "dashboard")
            }, function(l, n) {
                l(n, 0, 0, u["ɵnov"](n, 1).target, u["ɵnov"](n, 1).href)
            })
        }
        function W(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "li", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, H)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Z)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 3, 0, e.isAdmin(e.currentAccount)),
                l(n, 6, 0, !e.isAdmin(e.currentAccount))
            }, null)
        }
        function Y(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "li", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 7, "a", [["class", "dropdown-item"], ["routerLink", "profile"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "click" === n && (t = !1 !== u["ɵnov"](l, 3).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                "click" === n && (t = !1 !== i.collapseNavbar() && t);
                return t
            }, null, null)), u["ɵdid"](3, 671744, [[2, 4]], 0, f.o, [f.l, f.a, h.i], {
                routerLink: [0, "routerLink"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-sign-in"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Профиль пользователя"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, "profile")
            }, function(l, n) {
                l(n, 2, 0, u["ɵnov"](n, 3).target, u["ɵnov"](n, 3).href)
            })
        }
        function Q(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 46, "div", [["class", "navbar-collapse collapse"], ["id", "navbarResponsive"]], [[2, "collapse", null], [2, "show", null]], null, null, null, null)), u["ɵdid"](1, 16384, null, 0, v.m, [], {
                collapsed: [0, "collapsed"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 42, "ul", [["class", "navbar-nav ml-auto"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 39, "li", [["class", "nav-item dropdown pointer"], ["ngbDropdown", ""], ["placement", "bottom-right"], ["routerLinkActive", "active"]], [[2, "show", null]], null, null, null, null)), u["ɵdid"](6, 1720320, null, 2, f.n, [f.l, u.ElementRef, u.Renderer2, u.ChangeDetectorRef], {
                routerLinkActiveOptions: [0, "routerLinkActiveOptions"],
                routerLinkActive: [1, "routerLinkActive"]
            }, null), u["ɵqud"](603979776, 1, {
                links: 1
            }), u["ɵqud"](603979776, 2, {
                linksWithHrefs: 1
            }), u["ɵpod"](9, {
                exact: 0
            }), u["ɵdid"](10, 212992, null, 2, v.u, [u.ChangeDetectorRef, v.v, h.c, u.NgZone], {
                placement: [0, "placement"]
            }, null), u["ɵqud"](335544320, 3, {
                _menu: 0
            }), u["ɵqud"](335544320, 4, {
                _anchor: 0
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](14, 0, null, null, 8, "a", [["aria-haspopup", "true"], ["class", "nav-link dropdown-toggle text-nowrap dropdown-toggle"], ["href", "javascript:void(0);"], ["id", "account-menu"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 15).toggleOpen() && t);
                return t
            }, null, null)), u["ɵdid"](15, 16384, null, 0, v.La, [v.u, u.ElementRef], null, null), u["ɵprd"](2048, [[4, 4]], v.Ka, null, [v.La]), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-user-circle-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](21, null, [" ", " "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 19, "ul", [["class", "dropdown-menu"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], null, null, null, null)), u["ɵdid"](25, 16384, [[3, 4]], 0, v.Ja, [v.u, u.ElementRef, u.Renderer2], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, W)), u["ɵdid"](28, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Y)), u["ɵdid"](31, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](33, 0, null, null, 9, "li", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](35, 0, null, null, 6, "a", [["class", "dropdown-item"], ["id", "logout"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.logout() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](37, 0, null, null, 0, "i", [["class", "fa fa-sign-out"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](39, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Выйти"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.isNavbarCollapsed);
                var u = l(n, 9, 0, !0);
                l(n, 6, 0, u, "active");
                l(n, 10, 0, "bottom-right"),
                l(n, 28, 0, "/dashboard" != e.getCurrentUrl() && "/admin" != e.getCurrentUrl()),
                l(n, 31, 0, "/profile" != e.getCurrentUrl())
            }, function(l, n) {
                var e = n.component;
                l(n, 0, 0, !0, !u["ɵnov"](n, 1).collapsed),
                l(n, 5, 0, u["ɵnov"](n, 10).isOpen()),
                l(n, 14, 0, u["ɵnov"](n, 15).dropdown.isOpen()),
                l(n, 21, 0, e.getConvenientName(e.currentAccount));
                l(n, 24, 0, !0, u["ɵnov"](n, 25).dropdown.isOpen(), u["ɵnov"](n, 25).placement)
            })
        }
        function X(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 16, "nav", [["class", "navbar navbar-dark navbar-expand-md jh-navbar"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 10, "div", [["class", "jh-logo-container float-left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, K)), u["ɵdid"](5, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 4, "a", [["class", "navbar-brand logo float-left"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "click" === n && (t = !1 !== u["ɵnov"](l, 8).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                "click" === n && (t = !1 !== i.collapseNavbar() && t);
                return t
            }, null, null)), u["ɵdid"](8, 671744, null, 0, f.o, [f.l, f.a, h.i], {
                routerLink: [0, "routerLink"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 0, "span", [["class", "logo-img"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Q)), u["ɵdid"](15, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 5, 0, e.canShowToggler());
                l(n, 8, 0, "/"),
                l(n, 15, 0, e.isAuthenticated())
            }, function(l, n) {
                l(n, 7, 0, u["ɵnov"](n, 8).target, u["ɵnov"](n, 8).href)
            })
        }
        var G = u["ɵccf"]("jhi-navbar", U, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-navbar", [], null, null, null, X, B)), u["ɵdid"](1, 114688, null, 0, U, [_, M, L, q.a, f.l], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , J = function() {
            function l(l) {
                this.route = l
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.route.data.subscribe(function(n) {
                    n.error403 && (l.error403 = n.error403),
                    n.errorMessage && (l.errorMessage = n.errorMessage)
                })
            }
            ,
            l
        }()
          , ll = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function nl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 24, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 21, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 3, "div", [["class", "col-md-4"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 0, "span", [["class", "hipster img-fluid rounded"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 13, "div", [["class", "col-md-8"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 1, "h1", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Error Page!"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](14, 0, null, null, 4, "div", [], [[8, "hidden", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 1, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](17, null, ["", " "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 1, "div", [["class", "alert alert-danger"]], [[8, "hidden", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["You are not authorized to access this page. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 14, 0, !e.errorMessage),
                l(n, 17, 0, e.errorMessage),
                l(n, 20, 0, !e.error403)
            })
        }
        var el = u["ɵccf"]("jhi-error", J, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-error", [], null, null, null, nl, ll)), u["ɵdid"](1, 114688, null, 0, J, [f.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , ul = e(31)
          , tl = e(1)
          , il = function() {
            function l(l) {
                this.activeModal = l
            }
            return l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.confirm = function() {
                this.activeModal.dismiss()
            }
            ,
            l.prototype.ngOnInit = function() {}
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.d))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , ol = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function dl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 34, "form", [["name", "deleteForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 3).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 3).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.confirm() && t);
                return t
            }, null, null)), u["ɵdid"](2, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](3, 4210688, [["deleteForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](5, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Уважаемый клиент!"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 7, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](17, null, [" ", " "])), (l()(),
            u["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](19, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](21, 0, null, null, 1, "a", [["href", "https://t.me/firstwater_message_bot"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Подпишитесь на нашего бота"])), (l()(),
            u["ɵted"](-1, null, [", чтобы получать уведомления от автоматов в Телеграм. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 9, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](27, 0, null, null, 6, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 0, "span", [["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](31, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Понятно"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 1, 0, u["ɵnov"](n, 5).ngClassUntouched, u["ɵnov"](n, 5).ngClassTouched, u["ɵnov"](n, 5).ngClassPristine, u["ɵnov"](n, 5).ngClassDirty, u["ɵnov"](n, 5).ngClassValid, u["ɵnov"](n, 5).ngClassInvalid, u["ɵnov"](n, 5).ngClassPending),
                l(n, 17, 0, e.message)
            })
        }
        var rl = u["ɵccf"]("jhi-info-dialog", il, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-info-dialog", [], null, null, null, dl, ol)), u["ɵdid"](1, 114688, null, 0, il, [v.d], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , al = function() {
            function l(l, n, e, u, t) {
                this.principal = l,
                this.eventManager = n,
                this.loginService = e,
                this.$sessionStorage = u,
                this.router = t,
                this.canShowForm = !1,
                this.credentials = {}
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.principal.identity().then(function(n) {
                    l.account = n,
                    n ? -1 !== n.authorities.indexOf("ROLE_ADMIN") ? l.router.navigate(["admin"]) : (l.router.navigate(["dashboard"]),
                    l.$sessionStorage.store("infoIsRead", !1)) : (l.registerAuthenticationSuccess(),
                    l.canShowForm = !0)
                })
            }
            ,
            l.prototype.handleKeyDown = function(l) {
                this.capsLock = l.getModifierState("CapsLock")
            }
            ,
            l.prototype.registerAuthenticationSuccess = function() {
                var l = this;
                this.eventManager.subscribe("authenticationSuccess", function(n) {
                    l.principal.identity().then(function(n) {
                        l.account = n
                    })
                })
            }
            ,
            l.prototype.isAuthenticated = function() {
                return this.principal.isAuthenticated()
            }
            ,
            l.prototype.login = function() {
                var l = this;
                this.loginService.login({
                    username: this.username,
                    password: this.password,
                    rememberMe: this.rememberMe
                }).then(function() {
                    l.authenticationError = !1,
                    l.eventManager.broadcast({
                        name: "authenticationSuccess",
                        content: "Sending Authentication Success"
                    }),
                    l.ngOnInit()
                }).catch(function() {
                    l.authenticationError = !0
                })
            }
            ,
            l.prototype.register = function() {
                this.router.navigate(["/register"])
            }
            ,
            l
        }()
          , sl = [[".hipster[_ngcontent-%COMP%]{display:inline-block;width:347px;height:497px;background:url(content/ca854e6d0785ba4b9d715049c0bdbcb3.png) no-repeat top;background-size:contain}@media only screen and (-moz-min-device-pixel-ratio:2),only screen and (-o-min-device-pixel-ratio:2/1),only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){.hipster[_ngcontent-%COMP%]{background:url(content/1cd3a1d782e85ba37677c1a2099bc002.png) no-repeat top;background-size:contain}}.welcome[_ngcontent-%COMP%]{padding-top:20px;min-height:calc(100vh - 219px)}.welcome-form[_ngcontent-%COMP%]{background-color:#4fc619;padding:15px;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.5)}.welcome-footer[_ngcontent-%COMP%], .welcome-form[_ngcontent-%COMP%], .welcome-header[_ngcontent-%COMP%]{width:320px;height:auto;margin:0 auto}.welcome-footer[_ngcontent-%COMP%]{padding-top:10px}"]]
          , cl = u["ɵcrt"]({
            encapsulation: 0,
            styles: sl,
            data: {}
        });
        function pl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Неверный email или пароль."]))], null, null)
        }
        function fl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-warning"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  «CapsLock» включен."]))], null, null)
        }
        function ml(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 91, "section", [["class", "col-12 article"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 3, "h4", [["class", "text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Добро пожаловать в систему мониторинга"])), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["«Первая вода»"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Для начала работы нужно войти в систему"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 55, "div", [["class", "welcome-form"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 52, "form", [["class", "form"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 14).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 14).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.login() && t);
                return t
            }, null, null)), u["ɵdid"](13, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](14, 4210688, null, 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](16, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, pl)), u["ɵdid"](19, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, fl)), u["ɵdid"](22, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 5, "input", [["class", "form-control mb-2 mr-sm-2"], ["id", "username"], ["name", "username"], ["placeholder", "Введите Email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 25)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 25).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 25)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 25)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.username = e) && t);
                return t
            }, null, null)), u["ɵdid"](25, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](27, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](29, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](31, 0, null, null, 5, "input", [["class", "form-control mb-2 mr-sm-2"], ["id", "password"], ["name", "password"], ["placeholder", "Введите пароль"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 32)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 32).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 32)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 32)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.password = e) && t);
                return t
            }, null, null)), u["ɵdid"](32, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](34, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](36, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](38, 0, null, null, 11, "div", [["class", "form-check mb-2 mr-sm-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](40, 0, null, null, 8, "label", [["class", "form-check-label"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](42, 0, null, null, 5, "input", [["class", "form-check-input"], ["id", "rememberMe"], ["name", "rememberMe"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "change" === n && (t = !1 !== u["ɵnov"](l, 43).onChange(e.target.checked) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 43).onTouched() && t);
                "ngModelChange" === n && (t = !1 !== (i.rememberMe = e) && t);
                return t
            }, null, null)), u["ɵdid"](43, 16384, null, 0, tl.b, [u.Renderer2, u.ElementRef], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.b]), u["ɵdid"](45, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](47, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" Запомнить меня "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](51, 0, null, null, 12, "div", [["class", "form-inline"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](53, 0, null, null, 2, "button", [["class", "btn btn-primary mb-2 mt-2 mr-4"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](54, 0, null, null, 0, "i", [["class", "fa fa-sign-in pr-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Войти"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](57, 0, null, null, 5, "a", [["class", "text"], ["title", "Вы забыли пароль?"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 58).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                return t
            }, null, null)), u["ɵdid"](58, 671744, null, 0, f.o, [f.l, f.a, h.i], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](59, {
                popup: 0
            }), u["ɵpod"](60, {
                outlets: 0
            }), u["ɵpad"](61, 2), (l()(),
            u["ɵted"](-1, null, ["Вы забыли пароль?"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](67, 0, null, null, 21, "div", [["class", "welcome-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](69, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["У вас нет аккаунта? Создайте новый."])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](72, 0, null, null, 2, "a", [["class", "btn btn-warning btn-block"], ["role", "link"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.register() && u);
                return u
            }, null, null)), (l()(),
            u["ɵeld"](73, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa fa-user-plus"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Зарегистрироваться"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](76, 0, null, null, 2, "a", [["class", "btn btn-info btn-block mt-3"], ["href", "https://firstwater.ru/%D0%B1%D0%BB%D0%BE%D0%B3-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D0%BF%D0%B5%D1%80%D0%BC%D1%8C"], ["role", "link"], ["target", "_blank"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](77, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-question-circle-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Частые вопросы"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](80, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Актуальная информация о продукции, услугах и деятельности компании размещена на нашем сайте "])), (l()(),
            u["ɵeld"](82, 0, null, null, 4, "a", [["href", "http://firstwater.ru"], ["target", "top"], ["title", "Перейти на сайт компании"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](84, 0, null, null, 2, "span", [["style", "text-decoration: underline; color:#333333;"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](85, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["firstwater.ru"])), (l()(),
            u["ɵted"](-1, null, [". Будьте в курсе событий!"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](90, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 19, 0, e.authenticationError),
                l(n, 22, 0, e.capsLock);
                l(n, 27, 0, "username", e.username);
                l(n, 34, 0, "password", e.password);
                l(n, 45, 0, "rememberMe", e.rememberMe);
                var u = l(n, 61, 0, "/", l(n, 60, 0, l(n, 59, 0, "reset/request")));
                l(n, 58, 0, u)
            }, function(l, n) {
                l(n, 12, 0, u["ɵnov"](n, 16).ngClassUntouched, u["ɵnov"](n, 16).ngClassTouched, u["ɵnov"](n, 16).ngClassPristine, u["ɵnov"](n, 16).ngClassDirty, u["ɵnov"](n, 16).ngClassValid, u["ɵnov"](n, 16).ngClassInvalid, u["ɵnov"](n, 16).ngClassPending),
                l(n, 24, 0, u["ɵnov"](n, 29).ngClassUntouched, u["ɵnov"](n, 29).ngClassTouched, u["ɵnov"](n, 29).ngClassPristine, u["ɵnov"](n, 29).ngClassDirty, u["ɵnov"](n, 29).ngClassValid, u["ɵnov"](n, 29).ngClassInvalid, u["ɵnov"](n, 29).ngClassPending),
                l(n, 31, 0, u["ɵnov"](n, 36).ngClassUntouched, u["ɵnov"](n, 36).ngClassTouched, u["ɵnov"](n, 36).ngClassPristine, u["ɵnov"](n, 36).ngClassDirty, u["ɵnov"](n, 36).ngClassValid, u["ɵnov"](n, 36).ngClassInvalid, u["ɵnov"](n, 36).ngClassPending),
                l(n, 42, 0, u["ɵnov"](n, 47).ngClassUntouched, u["ɵnov"](n, 47).ngClassTouched, u["ɵnov"](n, 47).ngClassPristine, u["ɵnov"](n, 47).ngClassDirty, u["ɵnov"](n, 47).ngClassValid, u["ɵnov"](n, 47).ngClassInvalid, u["ɵnov"](n, 47).ngClassPending),
                l(n, 57, 0, u["ɵnov"](n, 58).target, u["ɵnov"](n, 58).href)
            })
        }
        function gl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [["class", "row welcome"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ml)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.component.canShowForm)
            }, null)
        }
        var hl = u["ɵccf"]("jhi-home", al, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-home", [], null, [["window", "keydown"]], function(l, n, e) {
                var t = !0;
                return "window:keydown" === n && (t = !1 !== u["ɵnov"](l, 1).handleKeyDown(e) && t),
                t
            }, gl, cl)), u["ɵdid"](1, 114688, null, 0, al, [M, q.a, _, R.a, f.l], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , vl = 10
          , bl = (function() {
            function l(l) {
                this.alertService = l
            }
            l.prototype.ngOnInit = function() {
                this.alerts = this.alertService.get()
            }
            ,
            l.prototype.setClasses = function(l) {
                return (n = {
                    toast: !!l.toast
                })[l.position] = !0,
                n;
                var n
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.alerts = []
            }
        }(),
        function() {
            function l(l, n) {
                var e = this;
                this.alertService = l,
                this.eventManager = n,
                this.alerts = [],
                this.cleanHttpErrorListener = n.subscribe("aquamonFrontApp.httpError", function(l) {
                    var n, u = l.content;
                    switch (u.status) {
                    case 0:
                        e.addErrorAlert("Server not reachable", "error.server.not.reachable");
                        break;
                    case 400:
                        var t = u.headers.keys()
                          , i = null
                          , o = null;
                        if (t.forEach(function(l) {
                            l.toLowerCase().endsWith("app-error") ? i = u.headers.get(l) : l.toLowerCase().endsWith("app-params") && (o = u.headers.get(l))
                        }),
                        i) {
                            var d = o;
                            e.addErrorAlert(i, i, {
                                entityName: d
                            })
                        } else if ("" !== u.error && u.error.fieldErrors) {
                            var r = u.error.fieldErrors;
                            for (n = 0; n < r.length; n++) {
                                var a = r[n];
                                ["Min", "Max", "DecimalMin", "DecimalMax"].includes(a.message) && (a.message = "Size");
                                var s = a.field.replace(/\[\d*\]/g, "[]")
                                  , c = s.charAt(0).toUpperCase() + s.slice(1);
                                e.addErrorAlert('Error on field "' + c + '"', "error." + a.message, {
                                    fieldName: c
                                })
                            }
                        } else
                            "" !== u.error && u.error.message ? e.addErrorAlert(u.error.message, u.error.message, u.error.params) : e.addErrorAlert(u.error);
                        break;
                    case 404:
                        e.addErrorAlert("Not found", "error.url.not.found");
                        break;
                    default:
                        "" !== u.error && u.error.message ? e.addErrorAlert(u.error.message) : e.addErrorAlert(u.error)
                    }
                })
            }
            return l.prototype.setClasses = function(l) {
                return (n = {
                    toast: !!l.toast
                })[l.position] = !0,
                n;
                var n
            }
            ,
            l.prototype.ngOnDestroy = function() {
                void 0 !== this.cleanHttpErrorListener && null !== this.cleanHttpErrorListener && (this.eventManager.destroy(this.cleanHttpErrorListener),
                this.alerts = [])
            }
            ,
            l.prototype.addErrorAlert = function(l, n, e) {
                this.alerts.push(this.alertService.addAlert({
                    type: "danger",
                    msg: l,
                    timeout: 5e3,
                    toast: this.alertService.isToast(),
                    scoped: !0
                }, this.alerts))
            }
            ,
            l
        }())
          , yl = (function() {
            function l(l, n, e) {
                this.principal = l,
                this.templateRef = n,
                this.viewContainerRef = e
            }
            Object.defineProperty(l.prototype, "jhiHasAnyAuthority", {
                set: function(l) {
                    var n = this;
                    this.authorities = "string" == typeof l ? [l] : l,
                    this.updateView(),
                    this.principal.getAuthenticationState().subscribe(function(l) {
                        return n.updateView()
                    })
                },
                enumerable: !0,
                configurable: !0
            }),
            l.prototype.updateView = function() {
                var l = this;
                this.principal.hasAnyAuthority(this.authorities).then(function(n) {
                    l.viewContainerRef.clear(),
                    n && l.viewContainerRef.createEmbeddedView(l.templateRef)
                })
            }
        }(),
        function() {
            return function() {}
        }())
          , Cl = function() {
            return function() {}
        }()
          , Rl = function() {
            return function() {}
        }()
          , wl = e(4)
          , Il = function(l) {
            function n() {
                return null !== l && l.apply(this, arguments) || this
            }
            return wl.b(n, l),
            n.prototype.fromModel = function(l) {
                return null != l && l.isValid() ? {
                    year: l.year(),
                    month: l.month() + 1,
                    day: l.date()
                } : null
            }
            ,
            n.prototype.toModel = function(l) {
                return l ? c(l.year + "-" + l.month + "-" + l.day, "YYYY-MM-DD") : null
            }
            ,
            n
        }(v.o)
          , xl = function(l) {
            function n() {
                var n = null !== l && l.apply(this, arguments) || this;
                return n.MonthFullNames = ["Нулябрь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                n.MonthShortNames = ["Янв.", "Фев.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."],
                n.WeekdayShortNames = ["Хз", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."],
                n
            }
            return wl.b(n, l),
            n.prototype.getDayAriaLabel = function(l) {
                return Sl.formatDate(l)
            }
            ,
            n.prototype.getMonthFullName = function(l) {
                return this.MonthFullNames[l]
            }
            ,
            n.prototype.getMonthShortName = function(l) {
                return this.MonthFullNames[l]
            }
            ,
            n.prototype.getWeekdayShortName = function(l) {
                return this.WeekdayShortNames[l]
            }
            ,
            n
        }(v.s)
          , Sl = function() {
            function l() {}
            return l.formatDate = function(l) {
                return l ? [l.day, l.month, l.year].join("/") : "..."
            }
            ,
            l.dateToTimestamp = function(l, n) {
                return void 0 === n && (n = void 0),
                l ? void 0 === n ? c(l, this.DATE_FORMAT).unix() : c(l, this.DATE_FORMAT).utc().utcOffset(-Number(n)).unix() : 0
            }
            ,
            l.ngbDateToTimestamp = function(l, n) {
                return void 0 === n && (n = void 0),
                this.dateToTimestamp(this.formatDate(l), n)
            }
            ,
            l.formatTimestamp = function(l, n, e) {
                return void 0 === n && (n = void 0),
                void 0 === e && (e = !1),
                void 0 === n ? c.unix(l).format(this.TIME_FORMAT_NARROW) : c.unix(l).utc().utcOffset(Number(n)).format(this.TIME_FORMAT_NARROW)
            }
            ,
            l.formatTimestampAsDate = function(l, n) {
                return void 0 === n && (n = void 0),
                void 0 === n ? c.unix(l).format(this.DATE_FORMAT) : c.unix(l).utc().utcOffset(Number(n)).format(this.DATE_FORMAT)
            }
            ,
            l.formatRange = function(l, n) {
                return this.formatDate(l) + " - " + this.formatDate(n)
            }
            ,
            l.prototype.ngOnInit = function() {
                c.locale("ru")
            }
            ,
            l.TIME_FORMAT = "DD/MM/YYYY HH:mm",
            l.TIME_FORMAT_NARROW = "DD/MM HH:mm",
            l.DATE_FORMAT = "DD/MM/YYYY",
            l
        }()
          , Tl = function() {
            function l(l) {
                this.http = l
            }
            return l.prototype.save = function(l) {
                return this.http.post(o + "api/account/reset-password/init", l)
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , kl = function() {
            function l(l, n) {
                this.modalService = l,
                this.router = n,
                this.isOpen = !1
            }
            return l.prototype.open = function(l) {
                var n = this;
                this.isOpen || (this.isOpen = !0,
                setTimeout(function() {
                    n.deviceModalRef(l)
                }, 200))
            }
            ,
            l.prototype.deviceModalRef = function(l) {
                var n = this
                  , e = this.modalService.open(l, {
                    size: "sm",
                    backdrop: !1
                });
                return e.result.then(function(l) {
                    n.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    n.isOpen = !1
                }, function(l) {
                    n.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    n.isOpen = !1
                }),
                e
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , Dl = function() {
            function l(l, n, e, u) {
                this.activeModal = l,
                this.passwordResetInitService = n,
                this.elementRef = e,
                this.renderer = u
            }
            return l.prototype.ngOnInit = function() {
                this.resetAccount = {}
            }
            ,
            l.prototype.ngAfterViewInit = function() {
                this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector("#email"), "focus", [])
            }
            ,
            l.prototype.requestReset = function() {
                var l = this;
                this.error = null,
                this.errorEmailNotExists = null,
                this.passwordResetInitService.save(this.resetAccount.email).subscribe(function() {
                    l.success = "OK"
                }, function(n) {
                    l.success = null,
                    400 === n.status && "https://www.jhipster.tech/problem/email-not-found" === n.error.type ? l.errorEmailNotExists = "ERROR" : l.error = "ERROR"
                })
            }
            ,
            l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l
        }()
          , El = function() {
            function l(l, n) {
                this.route = l,
                this.passwordResetInitPopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function() {
                    l.modalRef = l.passwordResetInitPopupService.open(Dl)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }()
          , Ml = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Pl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["   "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Пользователь с таким email не зарегистрирован!"])), (l()(),
            u["ɵted"](-1, null, [". "]))], null, null)
        }
        function _l(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 5, "div", [["class", "alert alert-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-info-circle"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Инструкция по смене пароля выслана на вашу электронную почту."])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function Ol(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-muted"], ["id", "HelpBlock"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Введите email, указанный при регистрации."]))], null, null)
        }
        function jl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введен неверный email. "]))], null, null)
        }
        function Vl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Email не может быть менее пяти символов. "]))], null, null)
        }
        function Al(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Email не может быть более ста символов. "]))], null, null)
        }
        function Nl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, jl)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Vl)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Al)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 21).errors.email),
                l(n, 6, 0, u["ɵnov"](n.parent, 21).errors.minlength),
                l(n, 9, 0, u["ɵnov"](n.parent, 21).errors.maxlength)
            }, null)
        }
        function Fl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 41, "form", [["name", "form"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 2).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 2).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.requestReset() && t);
                return t
            }, null, null)), u["ɵdid"](1, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](2, 4210688, [["resetRequestForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](4, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 25, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 22, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Email"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 10, "input", [["class", "form-control"], ["email", ""], ["id", "email"], ["maxlength", "254"], ["minlength", "5"], ["name", "email"], ["placeholder", "yourname@site.ru"], ["required", ""], ["type", "email"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 14)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 14).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 14)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 14)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.resetAccount.email = e) && t);
                return t
            }, null, null)), u["ɵdid"](14, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](15, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](16, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](17, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵdid"](18, 16384, null, 0, tl.f, [], {
                email: [0, "email"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e, u) {
                return [l, n, e, u]
            }, [tl.s, tl.i, tl.h, tl.f]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](21, 671744, [["emailInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](23, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ol)), u["ɵdid"](26, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Nl)), u["ɵdid"](29, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](33, 0, null, null, 7, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](35, 0, null, null, 1, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](38, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Выслать новый"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 15, 0, "");
                l(n, 16, 0, "5");
                l(n, 17, 0, "254");
                l(n, 18, 0, "");
                l(n, 21, 0, "email", e.resetAccount.email),
                l(n, 26, 0, !e.success),
                l(n, 29, 0, u["ɵnov"](n, 21).dirty && u["ɵnov"](n, 21).invalid)
            }, function(l, n) {
                l(n, 0, 0, u["ɵnov"](n, 4).ngClassUntouched, u["ɵnov"](n, 4).ngClassTouched, u["ɵnov"](n, 4).ngClassPristine, u["ɵnov"](n, 4).ngClassDirty, u["ɵnov"](n, 4).ngClassValid, u["ɵnov"](n, 4).ngClassInvalid, u["ɵnov"](n, 4).ngClassPending),
                l(n, 13, 0, u["ɵnov"](n, 15).required ? "" : null, u["ɵnov"](n, 16).minlength ? u["ɵnov"](n, 16).minlength : null, u["ɵnov"](n, 17).maxlength ? u["ɵnov"](n, 17).maxlength : null, u["ɵnov"](n, 23).ngClassUntouched, u["ɵnov"](n, 23).ngClassTouched, u["ɵnov"](n, 23).ngClassPristine, u["ɵnov"](n, 23).ngClassDirty, u["ɵnov"](n, 23).ngClassValid, u["ɵnov"](n, 23).ngClassInvalid, u["ɵnov"](n, 23).ngClassPending),
                l(n, 38, 0, u["ɵnov"](n, 2).form.invalid)
            })
        }
        function Ll(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 8, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 2, "h5", [["class", "modal-title"], ["id", "passwordRecovery"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](3, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-key text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Сброс пароля"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Pl)), u["ɵdid"](11, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, _l)), u["ɵdid"](14, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Fl)), u["ɵdid"](17, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](19, 0, null, null, 3, "div", [["class", "text-small text-muted mx-4 mb-4 small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](21, 0, null, null, 0, "i", [["class", "fa fa-info-circle text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" В личном кабинете вы можете в любое время заменить полученный пароль на свой. "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 11, 0, e.errorEmailNotExists),
                l(n, 14, 0, "OK" === e.success),
                l(n, 17, 0, !e.success)
            }, null)
        }
        var $l = u["ɵccf"]("jhi-password-reset-init", Dl, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-password-reset-init", [], null, null, null, Ll, Ml)), u["ɵdid"](1, 4308992, null, 0, Dl, [v.d, Tl, u.ElementRef, u.Renderer], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Ul = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function ql(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var zl = u["ɵccf"]("jhi-password-reset-init-popup", El, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-password-reset-init-popup", [], null, null, null, ql, Ul)), u["ɵdid"](1, 245760, null, 0, El, [f.a, kl], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Bl = function() {
            function l(l) {
                this.http = l
            }
            return l.prototype.get = function(l) {
                return this.http.get(o + "api/activate", {
                    params: (new I.j).set("key", l)
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , Kl = function() {
            function l(l, n, e) {
                this.activateService = l,
                this.route = n,
                this.router = e
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.route.queryParams.subscribe(function(n) {
                    l.activateService.get(n.key).subscribe(function() {
                        l.error = null,
                        l.success = "OK"
                    }, function() {
                        l.success = null,
                        l.error = "ERROR"
                    })
                })
            }
            ,
            l.prototype.login = function() {
                this.router.navigate(["/"])
            }
            ,
            l
        }()
          , Hl = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Zl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 9, "div", [["class", "alert alert-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Your user account has been activated."])), (l()(),
            u["ɵted"](-1, null, [" Please "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "a", [["class", "alert-link"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.login() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["sign in"])), (l()(),
            u["ɵted"](-1, null, [". "]))], null, null)
        }
        function Wl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Your user could not be activated."])), (l()(),
            u["ɵted"](-1, null, [" Please use the registration form to sign up. "]))], null, null)
        }
        function Yl(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 16, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 13, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 10, "div", [["class", "col-md-8"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 1, "h1", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Activation"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Zl)), u["ɵdid"](10, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Wl)), u["ɵdid"](13, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 10, 0, e.success),
                l(n, 13, 0, e.error)
            }, null)
        }
        var Ql = u["ɵccf"]("jhi-activate", Kl, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-activate", [], null, null, null, Yl, Hl)), u["ɵdid"](1, 114688, null, 0, Kl, [Bl, f.a, f.l], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Xl = function() {
            function l(l) {
                this.http = l
            }
            return l.prototype.save = function(l) {
                return this.http.post(o + "api/account/reset-password/finish", l)
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , Gl = function() {
            function l(l, n, e, u, t) {
                this.passwordResetFinishService = l,
                this.route = n,
                this.elementRef = e,
                this.renderer = u,
                this.router = t
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.route.queryParams.subscribe(function(n) {
                    l.key = n.key
                }),
                this.resetAccount = {},
                this.keyMissing = !this.key
            }
            ,
            l.prototype.handleKeyDown = function(l) {
                this.capsLock = l.getModifierState("CapsLock")
            }
            ,
            l.prototype.ngAfterViewInit = function() {
                null != this.elementRef.nativeElement.querySelector("#password") && this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector("#password"), "focus", [])
            }
            ,
            l.prototype.finishReset = function() {
                var l = this;
                this.doNotMatch = null,
                this.error = null,
                this.resetAccount.password !== this.confirmPassword ? this.doNotMatch = "ERROR" : this.passwordResetFinishService.save({
                    key: this.key,
                    newPassword: this.resetAccount.password
                }).subscribe(function() {
                    l.success = "OK"
                }, function() {
                    l.success = null,
                    l.error = "ERROR"
                })
            }
            ,
            l.prototype.login = function() {
                this.router.navigate(["/"])
            }
            ,
            l
        }()
          , Jl = [[".password-reset-form[_ngcontent-%COMP%]{padding-top:20px;background:#fff;min-height:calc(100vh - 219px)}"]]
          , ln = u["ɵcrt"]({
            encapsulation: 0,
            styles: Jl,
            data: {}
        });
        function nn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["   "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Не задан ключ для сброса пароля."])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function en(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [["class", "alert alert-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Задайте новый пароль"])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function un(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 5, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](3, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["   Не удалось изменить пароль. Помните, что ссылка для сброса пароля действует 24 часа."])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function tn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 12, "p", [["class", "alert alert-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 6, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](6, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Пароль успешно изменен."])), (l()(),
            u["ɵted"](-1, null, [" Пожалуйста "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 1, "a", [["class", "alert-link"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.login() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["войдите в систему"])), (l()(),
            u["ɵted"](-1, null, [". "]))], null, null)
        }
        function on(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Пароль и подтверждение не совпадают! "]))], null, null)
        }
        function dn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "div", [["class", "alert alert-warning"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  «CapsLock» включен. "]))], null, null)
        }
        function rn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нужно задать пароль. "]))], null, null)
        }
        function an(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль должен быть не менее четырех символов. "]))], null, null)
        }
        function sn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль не может быть больше 50 символов. "]))], null, null)
        }
        function cn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, rn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, an)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, sn)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 19).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 19).errors.minlength),
                l(n, 9, 0, u["ɵnov"](n.parent, 19).errors.maxlength)
            }, null)
        }
        function pn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нужно подтвердить пароль. "]))], null, null)
        }
        function fn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль должен быть не менее четырех символов. "]))], null, null)
        }
        function mn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль не может быть больше 50 символов. "]))], null, null)
        }
        function gn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, pn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, fn)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, mn)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 40).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 40).errors.minlength),
                l(n, 9, 0, u["ɵnov"](n.parent, 40).errors.maxlength)
            }, null)
        }
        function hn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 58, "form", [["name", "form"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 2).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 2).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.finishReset() && t);
                return t
            }, null, null)), u["ɵdid"](1, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](2, 4210688, [["passwordForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](4, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 19, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 2, "label", [["class", "form-control-label"], ["for", "password"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](9, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Новый пароль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 9, "input", [["class", "form-control"], ["id", "password"], ["maxlength", "50"], ["minlength", "4"], ["name", "password"], ["placeholder", "Задайте новый пароль"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 13)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 13).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 13)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 13)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.resetAccount.password = e) && t);
                return t
            }, null, null)), u["ɵdid"](13, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](14, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](15, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](16, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e) {
                return [l, n, e]
            }, [tl.s, tl.i, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](19, 671744, [["passwordInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](21, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, cn)), u["ɵdid"](24, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](27, 0, null, null, 19, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 2, "label", [["class", "form-control-label"], ["for", "confirmPassword"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](30, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Подтверждение пароля"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](33, 0, null, null, 9, "input", [["class", "form-control"], ["id", "confirmPassword"], ["maxlength", "50"], ["minlength", "4"], ["name", "confirmPassword"], ["placeholder", "Повторите пароль"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 34)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 34).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 34)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 34)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.confirmPassword = e) && t);
                return t
            }, null, null)), u["ɵdid"](34, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](35, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](36, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](37, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e) {
                return [l, n, e]
            }, [tl.s, tl.i, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](40, 671744, [["confirmPasswordInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](42, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, gn)), u["ɵdid"](45, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](48, 0, null, null, 9, "div", [["align", "right"], ["class", "pb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](50, 0, null, null, 6, "span", [["data-placement", "top"], ["data-toggle", "tooltip"], ["title", "Сохранить новый пароль"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](52, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["title", "Сохранить новый пароль"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](54, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-save"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Сохранить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 14, 0, "");
                l(n, 15, 0, "4");
                l(n, 16, 0, "50");
                l(n, 19, 0, "password", e.resetAccount.password),
                l(n, 24, 0, u["ɵnov"](n, 19).dirty && u["ɵnov"](n, 19).invalid);
                l(n, 35, 0, "");
                l(n, 36, 0, "4");
                l(n, 37, 0, "50");
                l(n, 40, 0, "confirmPassword", e.confirmPassword),
                l(n, 45, 0, u["ɵnov"](n, 40).dirty && u["ɵnov"](n, 40).invalid)
            }, function(l, n) {
                l(n, 0, 0, u["ɵnov"](n, 4).ngClassUntouched, u["ɵnov"](n, 4).ngClassTouched, u["ɵnov"](n, 4).ngClassPristine, u["ɵnov"](n, 4).ngClassDirty, u["ɵnov"](n, 4).ngClassValid, u["ɵnov"](n, 4).ngClassInvalid, u["ɵnov"](n, 4).ngClassPending),
                l(n, 12, 0, u["ɵnov"](n, 14).required ? "" : null, u["ɵnov"](n, 15).minlength ? u["ɵnov"](n, 15).minlength : null, u["ɵnov"](n, 16).maxlength ? u["ɵnov"](n, 16).maxlength : null, u["ɵnov"](n, 21).ngClassUntouched, u["ɵnov"](n, 21).ngClassTouched, u["ɵnov"](n, 21).ngClassPristine, u["ɵnov"](n, 21).ngClassDirty, u["ɵnov"](n, 21).ngClassValid, u["ɵnov"](n, 21).ngClassInvalid, u["ɵnov"](n, 21).ngClassPending),
                l(n, 33, 0, u["ɵnov"](n, 35).required ? "" : null, u["ɵnov"](n, 36).minlength ? u["ɵnov"](n, 36).minlength : null, u["ɵnov"](n, 37).maxlength ? u["ɵnov"](n, 37).maxlength : null, u["ɵnov"](n, 42).ngClassUntouched, u["ɵnov"](n, 42).ngClassTouched, u["ɵnov"](n, 42).ngClassPristine, u["ɵnov"](n, 42).ngClassDirty, u["ɵnov"](n, 42).ngClassValid, u["ɵnov"](n, 42).ngClassInvalid, u["ɵnov"](n, 42).ngClassPending),
                l(n, 52, 0, u["ɵnov"](n, 2).form.invalid)
            })
        }
        function vn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, hn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, !n.component.success)
            }, null)
        }
        function bn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 35, "div", [["class", "row password-reset-form"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "section", [["class", "col-12 col-sm-6 col-lg-4 order-lg-1 left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 28, "section", [["class", "col-12 col-sm-6 col-lg-4 order-lg-2 center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 2, "h4", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](7, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-key text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Сброс пароля"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, nn)), u["ɵdid"](13, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, en)), u["ɵdid"](16, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, un)), u["ɵdid"](19, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, tn)), u["ɵdid"](22, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, on)), u["ɵdid"](25, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, dn)), u["ɵdid"](28, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, vn)), u["ɵdid"](31, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 0, "section", [["class", "col-12 col-sm-6 col-lg-4 order-lg-3 right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 13, 0, e.keyMissing),
                l(n, 16, 0, !e.success && !e.keyMissing),
                l(n, 19, 0, e.error),
                l(n, 22, 0, e.success),
                l(n, 25, 0, e.doNotMatch),
                l(n, 28, 0, e.capsLock),
                l(n, 31, 0, !e.keyMissing)
            }, null)
        }
        var yn = u["ɵccf"]("jhi-password-reset-finish", Gl, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-password-reset-finish", [], null, [["window", "keydown"]], function(l, n, e) {
                var t = !0;
                return "window:keydown" === n && (t = !1 !== u["ɵnov"](l, 1).handleKeyDown(e) && t),
                t
            }, bn, ln)), u["ɵdid"](1, 4308992, null, 0, Gl, [Xl, f.a, u.ElementRef, u.Renderer, f.l], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Cn = e(95)
          , Rn = e(27)
          , wn = function() {
            function l(l) {
                this.http = l
            }
            return l.prototype.save = function(l) {
                return this.http.post(o + "api/register", l)
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , In = function() {
            function l(l, n, e, u) {
                this.router = l,
                this.registerService = n,
                this.elementRef = e,
                this.renderer = u
            }
            return l.prototype.ngOnInit = function() {
                this.success = !1,
                this.registerAccount = {},
                this.config = {
                    apiKey: d,
                    type: Rn.a.address
                }
            }
            ,
            l.prototype.handleKeyDown = function(l) {
                this.capsLock = l.getModifierState("CapsLock")
            }
            ,
            l.prototype.ngAfterViewInit = function() {
                this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector("#login"), "focus", [])
            }
            ,
            l.prototype.register = function() {
                var l = this;
                this.registerAccount.login = this.registerAccount.email,
                this.registerAccount.password !== this.confirmPassword ? this.doNotMatch = "ERROR" : (this.doNotMatch = null,
                this.error = null,
                this.errorUserExists = null,
                this.errorEmailExists = null,
                this.registerAccount.langKey = "en",
                this.registerService.save(this.registerAccount).subscribe(function() {
                    l.success = !0
                }, function(n) {
                    return l.processError(n)
                }))
            }
            ,
            l.prototype.openLogin = function() {
                this.router.navigate(["/"])
            }
            ,
            l.prototype.processError = function(l) {
                this.success = null,
                400 === l.status && "https://www.jhipster.tech/problem/login-already-used" === l.error.type ? this.errorUserExists = "ERROR" : 400 === l.status && "https://www.jhipster.tech/problem/email-already-used" === l.error.type ? this.errorEmailExists = "ERROR" : this.error = "ERROR"
            }
            ,
            l
        }()
          , xn = [[".reg-form[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.6);padding:20px;margin:0 auto;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.5)}.reg-header[_ngcontent-%COMP%]{width:320px}.reg-footer[_ngcontent-%COMP%], .reg-header[_ngcontent-%COMP%]{height:auto;margin:0 auto}.register[_ngcontent-%COMP%]{padding-top:20px}"]]
          , Sn = u["ɵcrt"]({
            encapsulation: 0,
            styles: xn,
            data: {}
        });
        function Tn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-success"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Ваша заявка на подключение к системе мониторинга «Первая вода» была принята. Запомните и запишите ваш логин и пароль в надежном месте. Для активации аккаунта напишите вашему персональному менеджеру ваш логин. В течение суток ваш аккаунт будет активирован."]))], null, null)
        }
        function kn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Заявка не была отправлена. проверьте правильность заполнения и попробуйте еще раз позже."]))], null, null)
        }
        function Dn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-warning"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  «CapsLock» включен."]))], null, null)
        }
        function En(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Данные в полях «Пароль» и «Подтверждение пароля» не совпадают."]))], null, null)
        }
        function Mn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Пользователь с таким адресом электронной почты уже зарегистрирован."]))], null, null)
        }
        function Pn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите фамилию. "]))], null, null)
        }
        function _n(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Pn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 59).errors.required)
            }, null)
        }
        function On(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите имя. "]))], null, null)
        }
        function jn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, On)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 78).errors.required)
            }, null)
        }
        function Vn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите отчество. "]))], null, null)
        }
        function An(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Vn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 78).errors.required)
            }, null)
        }
        function Nn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите email. "]))], null, null)
        }
        function Fn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Неверный email. "]))], null, null)
        }
        function Ln(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Nn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Fn)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 122).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 122).invalid)
            }, null)
        }
        function $n(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите номер телефона. "]))], null, null)
        }
        function Un(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Неверный номер телефона. "]))], null, null)
        }
        function qn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, $n)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Un)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 142).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 142).invalid)
            }, null)
        }
        function zn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите населенный пункт. "]))], null, null)
        }
        function Bn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, zn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 161).errors.required)
            }, null)
        }
        function Kn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите наименование. "]))], null, null)
        }
        function Hn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Kn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 178).errors.required)
            }, null)
        }
        function Zn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите пароль. "]))], null, null)
        }
        function Wn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль должен быть не менее 4 символов. "]))], null, null)
        }
        function Yn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль не должен быть длинее 50 символов. "]))], null, null)
        }
        function Qn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Zn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Wn)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Yn)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 199).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 199).errors.minlength),
                l(n, 9, 0, u["ɵnov"](n.parent, 199).errors.maxlength)
            }, null)
        }
        function Xn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите подтверждение пароля "]))], null, null)
        }
        function Gn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль должен быть не менее 4 символов. "]))], null, null)
        }
        function Jn(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль не должен быть длинее 50 символов. "]))], null, null)
        }
        function le(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Xn)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Gn)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Jn)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 220).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 220).errors.minlength),
                l(n, 9, 0, u["ɵnov"](n.parent, 220).errors.maxlength)
            }, null)
        }
        function ne(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Вы должны согласиться перед отправкой формы. "]))], null, null)
        }
        function ee(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 293, "div", [["class", "row register"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 16, "aside", [["class", "col-12 col-lg-3 order-lg-1 left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 6, "div", [["class", "alert alert-info"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](5, 0, null, null, 5, "p", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](6, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-info-circle"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](8, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Все поля обязательные."])), (l()(),
            u["ɵted"](-1, null, [" После отправки заполненной формы, на указанный вами Email поступит автоматическое сообщение с запросом на подверждение регистрации."])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 5, "div", [["class", "alert alert-info"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](13, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Если сообщение не приходит"])), (l()(),
            u["ɵted"](-1, null, [", то стоит поискать его в папке «Спам» или «Нежелательная почта»."])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 241, "article", [["class", "col-12 col-lg-6 order-lg-2 article"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](22, 0, null, null, 1, "h3", [["class", "text-center pb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Заявка на регистрацию"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 233, "form", [["class", "reg-form needs-validation"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 27).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 27).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.register() && t);
                return t
            }, null, null)), u["ɵdid"](26, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](27, 4210688, [["registerForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](29, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Tn)), u["ɵdid"](32, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, kn)), u["ɵdid"](35, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Dn)), u["ɵdid"](38, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, En)), u["ɵdid"](41, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Mn)), u["ɵdid"](44, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](46, 0, null, null, 58, "div", [["class", "form-row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](48, 0, null, null, 17, "div", [["class", "col-md-4 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](50, 0, null, null, 2, "label", [["for", "lastName"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Фамилия"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](54, 0, null, null, 7, "input", [["class", "form-control"], ["id", "lastName"], ["name", "lastName"], ["placeholder", "Фамилия"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 55)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 55).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 55)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 55)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.registerAccount.lastName = e) && t);
                return t
            }, null, null)), u["ɵdid"](55, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](56, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](59, 671744, [["lastName", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](61, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, _n)), u["ɵdid"](64, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](67, 0, null, null, 17, "div", [["class", "col-md-4 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](69, 0, null, null, 2, "label", [["for", "firstName"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](70, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Имя"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](73, 0, null, null, 7, "input", [["class", "form-control"], ["id", "firstName"], ["name", "firstName"], ["placeholder", "Имя"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 74)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 74).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 74)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 74)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.registerAccount.firstName = e) && t);
                return t
            }, null, null)), u["ɵdid"](74, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](75, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](78, 671744, [["firstName", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](80, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, jn)), u["ɵdid"](83, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](86, 0, null, null, 17, "div", [["class", "col-md-4 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](88, 0, null, null, 2, "label", [["for", "patronymic"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](89, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отчество"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](92, 0, null, null, 7, "input", [["class", "form-control"], ["id", "patronymic"], ["name", "patronymic"], ["placeholder", "Отчество"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 93)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 93).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 93)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 93)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.registerAccount.patronymic = e) && t);
                return t
            }, null, null)), u["ɵdid"](93, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](94, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](97, 671744, [["patronymic", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](99, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, An)), u["ɵdid"](102, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](106, 0, null, null, 121, "div", [["class", "form-row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](108, 0, null, null, 20, "div", [["class", "col-md-6 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](110, 0, null, null, 2, "label", [["for", "email"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](111, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Email"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](114, 0, null, null, 10, "input", [["class", "form-control"], ["email", ""], ["id", "email"], ["maxlength", "254"], ["minlength", "5"], ["name", "email"], ["placeholder", "Email"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 115)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 115).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 115)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 115)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.registerAccount.email = e) && t);
                return t
            }, null, null)), u["ɵdid"](115, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](116, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](117, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](118, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵdid"](119, 16384, null, 0, tl.f, [], {
                email: [0, "email"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e, u) {
                return [l, n, e, u]
            }, [tl.s, tl.i, tl.h, tl.f]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](122, 671744, [["email", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](124, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ln)), u["ɵdid"](127, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](130, 0, null, null, 18, "div", [["class", "col-md-6 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](132, 0, null, null, 2, "label", [["for", "phone"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](133, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Телефон"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](136, 0, null, null, 8, "input", [["class", "form-control"], ["id", "phone"], ["name", "phone"], ["pattern", "^\\+?[0-9-()]+$"], ["phone", ""], ["placeholder", "+7 XXX-XXX-XX-XX"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 137)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 137).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 137)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 137)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.registerAccount.phone = e) && t);
                return t
            }, null, null)), u["ɵdid"](137, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](138, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](139, 540672, null, 0, tl.r, [], {
                pattern: [0, "pattern"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n) {
                return [l, n]
            }, [tl.s, tl.r]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](142, 671744, [["phone", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](144, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, qn)), u["ɵdid"](147, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](150, 0, null, null, 17, "div", [["class", "col-md-6 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](152, 0, null, null, 2, "label", [["for", "city"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](153, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Город"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](156, 0, null, null, 11, "ngx-da-data", [["class", "form-control city-autocomplete"], ["id", "city"], ["name", "city"], ["placeholder", "Населённый пункт"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], ["document", "click"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "document:click" === n && (t = !1 !== u["ɵnov"](l, 159).onOutsideClick() && t);
                "ngModelChange" === n && (t = !1 !== (i.registerAccount.city = e) && t);
                return t
            }, Cn.b, Cn.a)), u["ɵdid"](157, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵdid"](159, 638976, null, 0, Rn.b, [Rn.d, u.Renderer2], {
                config: [0, "config"],
                type: [1, "type"],
                placeholder: [2, "placeholder"]
            }, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [Rn.b]), u["ɵdid"](161, 671744, [["city", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](163, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Bn)), u["ɵdid"](166, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](169, 0, null, null, 15, "div", [["class", "col-md-6 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](171, 0, null, null, 2, "label", [["for", "organization"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](172, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Наименование компании"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](175, 0, null, null, 5, "input", [["class", "form-control"], ["id", "organization"], ["name", "organization"], ["placeholder", "Наименование компании"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 176)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 176).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 176)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 176)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.registerAccount.organization = e) && t);
                return t
            }, null, null)), u["ɵdid"](176, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](178, 671744, [["organization", 4]], 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](180, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Hn)), u["ɵdid"](183, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](186, 0, null, null, 19, "div", [["class", "col-md-6 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](188, 0, null, null, 2, "label", [["for", "password"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](189, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Пароль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](192, 0, null, null, 9, "input", [["class", "form-control"], ["id", "password"], ["maxlength", "50"], ["minlength", "4"], ["name", "password"], ["placeholder", "Не менее 4 символов"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 193)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 193).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 193)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 193)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.registerAccount.password = e) && t);
                return t
            }, null, null)), u["ɵdid"](193, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](194, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](195, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](196, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e) {
                return [l, n, e]
            }, [tl.s, tl.i, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](199, 671744, [["password", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](201, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Qn)), u["ɵdid"](204, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](207, 0, null, null, 19, "div", [["class", "col-md-6 mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](209, 0, null, null, 2, "label", [["for", "confirmPassword"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](210, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Подтверждение пароля"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](213, 0, null, null, 9, "input", [["class", "form-control"], ["id", "confirmPassword"], ["maxlength", "50"], ["minlength", "4"], ["name", "confirmPassword"], ["placeholder", "Пароль ещё раз"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 214)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 214).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 214)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 214)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.confirmPassword = e) && t);
                return t
            }, null, null)), u["ɵdid"](214, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](215, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](216, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](217, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e) {
                return [l, n, e]
            }, [tl.s, tl.i, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](220, 671744, [["confirmPasswordInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](222, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, le)), u["ɵdid"](225, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](229, 0, null, null, 25, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](231, 0, null, null, 22, "div", [["class", "form-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](233, 0, null, null, 7, "input", [["class", "form-check-input"], ["id", "invalidCheck"], ["name", "invalidCheck"], ["required", ""], ["type", "checkbox"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "change" === n && (t = !1 !== u["ɵnov"](l, 234).onChange(e.target.checked) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 234).onTouched() && t);
                "ngModelChange" === n && (t = !1 !== (i.confirmRules = e) && t);
                return t
            }, null, null)), u["ɵdid"](234, 16384, null, 0, tl.b, [u.Renderer2, u.ElementRef], null, null), u["ɵdid"](235, 16384, null, 0, tl.c, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.c]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.b]), u["ɵdid"](238, 671744, [["invalidCheckInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](240, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](242, 0, null, null, 4, "label", [["class", "form-check-label"], ["for", "invalidCheck"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Я согласен(на) на обработку моих персональных данных. "])), (l()(),
            u["ɵeld"](244, 0, null, null, 1, "a", [["href", "https://firstwater.ru/user/agreement"], ["target", "_blank"], ["title", "Пользовательское соглашение"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Подробнее"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](248, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ne)), u["ɵdid"](251, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](256, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отправить заявку"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](260, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](263, 0, null, null, 29, "aside", [["class", "col-12 col-lg-3 order-lg-3 right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](265, 0, null, null, 24, "div", [["class", "reg-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](267, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Уже зарегистрированы? Авторизуйтесь."])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](270, 0, null, null, 2, "a", [["class", "btn btn-warning btn-block"], ["href", "#"], ["role", "link"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openLogin() && u);
                return u
            }, null, null)), (l()(),
            u["ɵeld"](271, 0, null, null, 0, "i", [["class", "fa fa-sign-in"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Войти в систему"])), (l()(),
            u["ɵeld"](273, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](275, 0, null, null, 3, "a", [["class", "btn btn-info btn-block"], ["href", "http://firstwater.ru/vopros-otvet"], ["role", "link"], ["target", "_blank"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](277, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-question-circle-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Частые вопросы"])), (l()(),
            u["ɵeld"](279, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](281, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Актуальная информация о продукции, услугах и деятельности компании размещена на нашем сайте "])), (l()(),
            u["ɵeld"](283, 0, null, null, 4, "a", [["href", "http://firstwater.ru"], ["target", "top"], ["title", "Перейти на сайт компании"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](285, 0, null, null, 2, "span", [["style", "text-decoration: underline; color:#333333;"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](286, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["firstwater.ru"])), (l()(),
            u["ɵted"](-1, null, [". Будьте в курсе, узнайте больше!"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](291, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 32, 0, e.success),
                l(n, 35, 0, e.error),
                l(n, 38, 0, e.capsLock),
                l(n, 41, 0, e.doNotMatch),
                l(n, 44, 0, e.errorEmailExists || e.errorUserExists);
                l(n, 56, 0, "");
                l(n, 59, 0, "lastName", e.registerAccount.lastName),
                l(n, 64, 0, u["ɵnov"](n, 59).dirty && u["ɵnov"](n, 59).invalid);
                l(n, 75, 0, "");
                l(n, 78, 0, "firstName", e.registerAccount.firstName),
                l(n, 83, 0, u["ɵnov"](n, 78).dirty && u["ɵnov"](n, 78).invalid);
                l(n, 94, 0, "");
                l(n, 97, 0, "patronymic", e.registerAccount.patronymic),
                l(n, 102, 0, u["ɵnov"](n, 97).dirty && u["ɵnov"](n, 97).invalid);
                l(n, 116, 0, "");
                l(n, 117, 0, "5");
                l(n, 118, 0, "254");
                l(n, 119, 0, "");
                l(n, 122, 0, "email", e.registerAccount.email),
                l(n, 127, 0, u["ɵnov"](n, 122).dirty && u["ɵnov"](n, 122).invalid);
                l(n, 138, 0, "");
                l(n, 139, 0, "^\\+?[0-9-()]+$");
                l(n, 142, 0, "phone", e.registerAccount.phone),
                l(n, 147, 0, u["ɵnov"](n, 142).dirty && u["ɵnov"](n, 142).invalid);
                l(n, 157, 0, "");
                l(n, 159, 0, e.config, "text", "Населённый пункт");
                l(n, 161, 0, "city", e.registerAccount.city),
                l(n, 166, 0, u["ɵnov"](n, 161).dirty && u["ɵnov"](n, 161).invalid);
                l(n, 178, 0, "organization", e.registerAccount.organization),
                l(n, 183, 0, u["ɵnov"](n, 178).dirty && u["ɵnov"](n, 178).invalid);
                l(n, 194, 0, "");
                l(n, 195, 0, "4");
                l(n, 196, 0, "50");
                l(n, 199, 0, "password", e.registerAccount.password),
                l(n, 204, 0, u["ɵnov"](n, 199).dirty && u["ɵnov"](n, 199).invalid);
                l(n, 215, 0, "");
                l(n, 216, 0, "4");
                l(n, 217, 0, "50");
                l(n, 220, 0, "confirmPassword", e.confirmPassword),
                l(n, 225, 0, u["ɵnov"](n, 220).dirty && u["ɵnov"](n, 220).invalid);
                l(n, 235, 0, "");
                l(n, 238, 0, "invalidCheck", e.confirmRules),
                l(n, 251, 0, !e.confirmRules)
            }, function(l, n) {
                var e = n.component;
                l(n, 25, 0, u["ɵnov"](n, 29).ngClassUntouched, u["ɵnov"](n, 29).ngClassTouched, u["ɵnov"](n, 29).ngClassPristine, u["ɵnov"](n, 29).ngClassDirty, u["ɵnov"](n, 29).ngClassValid, u["ɵnov"](n, 29).ngClassInvalid, u["ɵnov"](n, 29).ngClassPending),
                l(n, 54, 0, u["ɵnov"](n, 56).required ? "" : null, u["ɵnov"](n, 61).ngClassUntouched, u["ɵnov"](n, 61).ngClassTouched, u["ɵnov"](n, 61).ngClassPristine, u["ɵnov"](n, 61).ngClassDirty, u["ɵnov"](n, 61).ngClassValid, u["ɵnov"](n, 61).ngClassInvalid, u["ɵnov"](n, 61).ngClassPending),
                l(n, 73, 0, u["ɵnov"](n, 75).required ? "" : null, u["ɵnov"](n, 80).ngClassUntouched, u["ɵnov"](n, 80).ngClassTouched, u["ɵnov"](n, 80).ngClassPristine, u["ɵnov"](n, 80).ngClassDirty, u["ɵnov"](n, 80).ngClassValid, u["ɵnov"](n, 80).ngClassInvalid, u["ɵnov"](n, 80).ngClassPending),
                l(n, 92, 0, u["ɵnov"](n, 94).required ? "" : null, u["ɵnov"](n, 99).ngClassUntouched, u["ɵnov"](n, 99).ngClassTouched, u["ɵnov"](n, 99).ngClassPristine, u["ɵnov"](n, 99).ngClassDirty, u["ɵnov"](n, 99).ngClassValid, u["ɵnov"](n, 99).ngClassInvalid, u["ɵnov"](n, 99).ngClassPending),
                l(n, 114, 0, u["ɵnov"](n, 116).required ? "" : null, u["ɵnov"](n, 117).minlength ? u["ɵnov"](n, 117).minlength : null, u["ɵnov"](n, 118).maxlength ? u["ɵnov"](n, 118).maxlength : null, u["ɵnov"](n, 124).ngClassUntouched, u["ɵnov"](n, 124).ngClassTouched, u["ɵnov"](n, 124).ngClassPristine, u["ɵnov"](n, 124).ngClassDirty, u["ɵnov"](n, 124).ngClassValid, u["ɵnov"](n, 124).ngClassInvalid, u["ɵnov"](n, 124).ngClassPending),
                l(n, 136, 0, u["ɵnov"](n, 138).required ? "" : null, u["ɵnov"](n, 139).pattern ? u["ɵnov"](n, 139).pattern : null, u["ɵnov"](n, 144).ngClassUntouched, u["ɵnov"](n, 144).ngClassTouched, u["ɵnov"](n, 144).ngClassPristine, u["ɵnov"](n, 144).ngClassDirty, u["ɵnov"](n, 144).ngClassValid, u["ɵnov"](n, 144).ngClassInvalid, u["ɵnov"](n, 144).ngClassPending),
                l(n, 156, 0, u["ɵnov"](n, 157).required ? "" : null, u["ɵnov"](n, 163).ngClassUntouched, u["ɵnov"](n, 163).ngClassTouched, u["ɵnov"](n, 163).ngClassPristine, u["ɵnov"](n, 163).ngClassDirty, u["ɵnov"](n, 163).ngClassValid, u["ɵnov"](n, 163).ngClassInvalid, u["ɵnov"](n, 163).ngClassPending),
                l(n, 175, 0, u["ɵnov"](n, 180).ngClassUntouched, u["ɵnov"](n, 180).ngClassTouched, u["ɵnov"](n, 180).ngClassPristine, u["ɵnov"](n, 180).ngClassDirty, u["ɵnov"](n, 180).ngClassValid, u["ɵnov"](n, 180).ngClassInvalid, u["ɵnov"](n, 180).ngClassPending),
                l(n, 192, 0, u["ɵnov"](n, 194).required ? "" : null, u["ɵnov"](n, 195).minlength ? u["ɵnov"](n, 195).minlength : null, u["ɵnov"](n, 196).maxlength ? u["ɵnov"](n, 196).maxlength : null, u["ɵnov"](n, 201).ngClassUntouched, u["ɵnov"](n, 201).ngClassTouched, u["ɵnov"](n, 201).ngClassPristine, u["ɵnov"](n, 201).ngClassDirty, u["ɵnov"](n, 201).ngClassValid, u["ɵnov"](n, 201).ngClassInvalid, u["ɵnov"](n, 201).ngClassPending),
                l(n, 213, 0, u["ɵnov"](n, 215).required ? "" : null, u["ɵnov"](n, 216).minlength ? u["ɵnov"](n, 216).minlength : null, u["ɵnov"](n, 217).maxlength ? u["ɵnov"](n, 217).maxlength : null, u["ɵnov"](n, 222).ngClassUntouched, u["ɵnov"](n, 222).ngClassTouched, u["ɵnov"](n, 222).ngClassPristine, u["ɵnov"](n, 222).ngClassDirty, u["ɵnov"](n, 222).ngClassValid, u["ɵnov"](n, 222).ngClassInvalid, u["ɵnov"](n, 222).ngClassPending),
                l(n, 233, 0, u["ɵnov"](n, 235).required ? "" : null, u["ɵnov"](n, 240).ngClassUntouched, u["ɵnov"](n, 240).ngClassTouched, u["ɵnov"](n, 240).ngClassPristine, u["ɵnov"](n, 240).ngClassDirty, u["ɵnov"](n, 240).ngClassValid, u["ɵnov"](n, 240).ngClassInvalid, u["ɵnov"](n, 240).ngClassPending),
                l(n, 256, 0, u["ɵnov"](n, 27).form.invalid || !e.confirmRules)
            })
        }
        var ue = u["ɵccf"]("jhi-register", In, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-register", [], null, [["window", "keydown"]], function(l, n, e) {
                var t = !0;
                return "window:keydown" === n && (t = !1 !== u["ɵnov"](l, 1).handleKeyDown(e) && t),
                t
            }, ee, Sn)), u["ɵdid"](1, 4308992, null, 0, In, [f.l, wn, u.ElementRef, u.Renderer], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , te = function() {
            function l(l) {
                this.http = l
            }
            return l.prototype.save = function(l, n) {
                return this.http.post(o + "api/account/change-password", {
                    currentPassword: n,
                    newPassword: l
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , ie = function() {
            function l(l) {
                this.activeModal = l
            }
            return l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.confirmDelete = function() {
                this.activeModal.dismiss(this.email)
            }
            ,
            l.prototype.ngOnInit = function() {}
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.d))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , oe = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/files"
            }
            return l.prototype.update = function(l) {
                return this.http.put(this.resourceUrl, l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.find = function(l) {
                return this.http.get(this.resourceUrl + "/" + l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.query = function(l) {
                var n = O(l);
                return this.http.get(this.resourceUrl, {
                    params: n,
                    observe: "response"
                })
            }
            ,
            l.prototype.delete = function(l) {
                return this.http.delete(this.resourceUrl + "/" + l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.authorities = function() {
                return this.http.get(o + "api/files/authorities")
            }
            ,
            l.prototype.download = function(l) {
                return this.http.get(this.resourceUrl + "/udownload/" + l, {
                    observe: "events",
                    responseType: "blob",
                    reportProgress: !0
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , de = function() {
            return function(l, n, e, u, t, i, o) {
                this.description = l,
                this.id = n,
                this.mime = e,
                this.name = u,
                this.path = t,
                this.size = i,
                this.timestamp = o
            }
        }()
          , re = function() {
            function l(l, n, e) {
                this.modalService = l,
                this.router = n,
                this.fileService = e,
                this.isOpen = !1
            }
            return l.prototype.open = function(l, n) {
                var e = this;
                if (!this.isOpen) {
                    if (this.isOpen = !0,
                    !n)
                        return this.fileModalRef(l, new de("","","","","",0,0));
                    this.fileService.find(n).subscribe(function(n) {
                        e.fileModalRef(l, n.body)
                    })
                }
            }
            ,
            l.prototype.fileModalRef = function(l, n) {
                var e = this
                  , u = this.modalService.open(l, {
                    size: "lg",
                    backdrop: "static"
                });
                return u.componentInstance.file = n,
                u.result.then(function(l) {
                    e.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    e.isOpen = !1
                }, function(l) {
                    e.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    e.isOpen = !1
                }),
                u
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l),u.inject(oe))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , ae = function() {
            function l(l, n, e, u) {
                this.fileService = l,
                this.activeModal = n,
                this.alertService = e,
                this.eventManager = u
            }
            return l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.confirmDelete = function(l) {
                var n = this;
                this.fileService.delete(l).subscribe(function(l) {
                    n.eventManager.broadcast({
                        name: "fileListModification",
                        content: "Deleted a file"
                    }),
                    n.activeModal.dismiss(!0)
                }),
                this.alertService.success("monitoringApp.file.deleted", {
                    param: l
                }, null)
            }
            ,
            l.prototype.ngOnInit = function() {}
            ,
            l
        }()
          , se = function() {
            function l(l, n) {
                this.route = l,
                this.filePopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    l.modalRef = l.filePopupService.open(ae, n.id)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }()
          , ce = function() {
            function l(l, n, e, u) {
                this.fileService = l,
                this.activeModal = n,
                this.alertService = e,
                this.eventManager = u
            }
            return l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.save = function() {
                var l = this;
                this.isSaving = !0,
                this.fileService.update(this.file).subscribe(function(n) {
                    return l.onSaveSuccess(n)
                }, function(n) {
                    return l.onSaveError(n)
                })
            }
            ,
            l.prototype.onSaveSuccess = function(l) {
                this.eventManager.broadcast({
                    name: "fileListModification",
                    content: "OK"
                }),
                this.isSaving = !1,
                this.activeModal.dismiss(l)
            }
            ,
            l.prototype.onSaveError = function(l) {
                this.isSaving = !1,
                this.error = "ERROR"
            }
            ,
            l.prototype.ngOnInit = function() {}
            ,
            l
        }()
          , pe = function() {
            function l(l, n) {
                this.route = l,
                this.filePopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    l.modalRef = l.filePopupService.open(ce, n.id)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }()
          , fe = e(133)
          , me = function() {
            function l(l, n, e) {
                this.fileService = l,
                this.activeModal = n,
                this.alertService = e,
                this.downloaded = 0
            }
            return l.prototype.clear = function() {
                this.subscription && this.subscription.unsubscribe(),
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.downloadFile = function(l) {
                var n = this;
                this.subscription = this.fileService.download(l.id).subscribe(function(l) {
                    return n.onDownloadEvent(l)
                }, function(l) {
                    return n.onError(l.body)
                })
            }
            ,
            l.prototype.onDownloadEvent = function(l) {
                switch (l.type) {
                case I.g.Sent:
                    break;
                case I.g.DownloadProgress:
                    this.downloaded = l.loaded / this.file.size * 100;
                    break;
                case I.g.ResponseHeader:
                    console.log(l),
                    this.headers = l.headers;
                    break;
                case I.g.Response:
                    this.saveFile(l.body)
                }
            }
            ,
            l.prototype.saveFile = function(l) {
                var n = this.headers.get("content-disposition").split("=")[1];
                n = n.replace(/\"/g, ""),
                console.log(n),
                fe.saveAs(l, n),
                this.clear()
            }
            ,
            l.prototype.onError = function(l) {
                this.alertService.error(l.error, l.message, null)
            }
            ,
            l.prototype.ngOnInit = function() {
                this.downloadFile(this.file)
            }
            ,
            l
        }()
          , ge = function() {
            function l(l, n) {
                this.route = l,
                this.filePopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    l.modalRef = l.filePopupService.open(me, n.id)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }()
          , he = function() {
            function l(l, n, e, u, t, i, o) {
                this.modalService = l,
                this.account = n,
                this.principal = e,
                this.passwordService = u,
                this.fileService = t,
                this.alertService = i,
                this.router = o,
                this.emailRegexp = /\w+@\w+(\.\w+)+/,
                this.inputEmails = "",
                this.isOpen = !1
            }
            return l.copyAccount = function(l) {
                return {
                    activated: l.activated,
                    email: l.email,
                    firstName: l.firstName,
                    langKey: l.langKey,
                    lastName: l.lastName,
                    login: l.login,
                    imageUrl: l.imageUrl,
                    patronymic: l.patronymic,
                    city: l.city,
                    phone: l.phone,
                    organization: l.organization,
                    infoEmails: l.infoEmails,
                    alerts: l.alerts
                }
            }
            ,
            l.prototype.ngOnInit = function() {
                var n = this;
                this.principal.identity().then(function(e) {
                    n.settingsAccount = l.copyAccount(e)
                }),
                this.loadAllFiles()
            }
            ,
            l.prototype.handleKeyDown = function(l) {
                this.capsLock = l.getModifierState("CapsLock")
            }
            ,
            l.prototype.formatTimestamp = function(l) {
                return Sl.formatTimestamp(l)
            }
            ,
            l.prototype.save = function() {
                var n = this;
                this.account.save(this.settingsAccount).subscribe(function() {
                    n.error = null,
                    n.success = "OK",
                    n.principal.identity(!0).then(function(e) {
                        n.settingsAccount = l.copyAccount(e)
                    }),
                    n.inputEmails = ""
                }, function() {
                    n.success = null,
                    n.error = "ERROR"
                })
            }
            ,
            l.prototype.addEmails = function() {
                var l = this;
                if (this.inputEmails) {
                    var n = this.inputEmails.split(",").map(function(l) {
                        return l.trim().toLowerCase()
                    }).filter(function(n) {
                        return -1 === [l.settingsAccount.email].concat(l.settingsAccount.infoEmails).indexOf(n)
                    }).filter(function(n) {
                        return n.match(l.emailRegexp)
                    });
                    0 !== n.length && (this.settingsAccount.infoEmails = n.concat(this.settingsAccount.infoEmails),
                    this.save())
                }
            }
            ,
            l.prototype.deleteEmail = function(l) {
                this.settingsAccount.infoEmails = this.settingsAccount.infoEmails.filter(function(n) {
                    return n !== l
                }),
                this.save()
            }
            ,
            l.prototype.changePassword = function() {
                var l = this;
                this.newPassword !== this.confirmPassword ? (this.errorPass = null,
                this.successPass = null,
                this.doNotMatch = "ERROR") : (this.doNotMatch = null,
                this.passwordService.save(this.newPassword, this.currentPassword).subscribe(function() {
                    l.errorPass = null,
                    l.successPass = "OK"
                }, function() {
                    l.successPass = null,
                    l.errorPass = "ERROR"
                }))
            }
            ,
            l.prototype.openEmailDeletePopup = function(l) {
                if (!this.isOpen)
                    return this.isOpen = !0,
                    this.deleteEmailModalRef(l)
            }
            ,
            l.prototype.deleteEmailModalRef = function(l) {
                var n = this
                  , e = this.modalService.open(ie, {
                    size: "lg",
                    backdrop: "static"
                });
                return e.componentInstance.email = l,
                e.result.then(function() {
                    n.isOpen = !1
                }, function(l) {
                    n.isOpen = !1,
                    "cancel" !== l && n.deleteEmail(l)
                }),
                e
            }
            ,
            l.prototype.loadAllFiles = function() {
                var l = this;
                this.fileService.query({
                    size: 1e3
                }).subscribe(function(n) {
                    return l.onSuccessFile(n.body, n.headers)
                }, function(n) {
                    return l.onError(n.body)
                })
            }
            ,
            l.prototype.onSuccessFile = function(l, n) {
                this.files = l.filter(function(l) {
                    return l.visible
                })
            }
            ,
            l.prototype.onError = function(l) {
                this.alertService.error(l.error, l.message, null)
            }
            ,
            l.prototype.openDownloadFileDialog = function(l) {
                this.router.navigate(["/", {
                    outlets: {
                        popup: "file/" + l.id + "/download"
                    }
                }])
            }
            ,
            l
        }()
          , ve = e(14)
          , be = [[".cabinet[_ngcontent-%COMP%]{padding-top:20px;background:#fff}.icon-column[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:32px;height:32px}.icon-column[_ngcontent-%COMP%]{padding:.75rem 2px}.address-wrapper[_ngcontent-%COMP%]{max-height:32px;overflow:hidden;display:block;line-height:16px;padding:0}"]]
          , ye = u["ɵcrt"]({
            encapsulation: 0,
            styles: be,
            data: {}
        });
        function Ce(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "div", [["class", "alert alert-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Пароль успешно изменен."])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function Re(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Произошла ошибка."])), (l()(),
            u["ɵted"](-1, null, [" Не удалось изменить пароль. "]))], null, null)
        }
        function we(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Пароль и подтверждение не совпадают! "]))], null, null)
        }
        function Ie(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "div", [["class", "alert alert-warning"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  «CapsLock» включен. "]))], null, null)
        }
        function xe(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Необходимо ввести текущий пароль. "]))], null, null)
        }
        function Se(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, xe)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 39).errors.required)
            }, null)
        }
        function Te(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Необходимо ввсети пароль. "]))], null, null)
        }
        function ke(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль должен быть не менее четырех символов. "]))], null, null)
        }
        function De(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль не должен быть больше 50 символов. "]))], null, null)
        }
        function Ee(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Te)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ke)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, De)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 60).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 60).errors.minlength),
                l(n, 9, 0, u["ɵnov"](n.parent, 60).errors.maxlength)
            }, null)
        }
        function Me(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Необходимо подтвердить пароль. "]))], null, null)
        }
        function Pe(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль должен быть не менее четырех символов. "]))], null, null)
        }
        function _e(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль не должен быть больше 50 символов. "]))], null, null)
        }
        function Oe(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Me)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Pe)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, _e)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 81).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 81).errors.minlength),
                l(n, 9, 0, u["ɵnov"](n.parent, 81).errors.maxlength)
            }, null)
        }
        function je(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "div", [["class", "alert alert-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Настройки оповещений успешно сохранены."])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function Ve(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Произошла ошибка."])), (l()(),
            u["ɵted"](-1, null, [" Не удалось изменить настройки оповещений. "]))], null, null)
        }
        function Ae(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](6, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 10, "td", [["align", "center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 16777216, null, null, 7, "span", [["ngbTooltip", "Удалить этот Email"], ["placement", "left"]], null, null, null, null, null)), u["ɵdid"](11, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "click" === n && (t = !1 !== u["ɵnov"](l, 14).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                "click" === n && (t = !1 !== i.openEmailDeletePopup(l.context.$implicit) && t);
                return t
            }, null, null)), u["ɵdid"](14, 671744, null, 0, f.o, [f.l, f.a, h.i], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 0, "i", [["class", "fa fa-window-close text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 11, 0, "left", "Удалить этот Email")
            }, function(l, n) {
                l(n, 3, 0, n.context.index + 2),
                l(n, 6, 0, n.context.$implicit),
                l(n, 13, 0, u["ɵnov"](n, 14).target, u["ɵnov"](n, 14).href)
            })
        }
        function Ne(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 21, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](6, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-exclamation-triangle text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](7, null, ["  ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 11, "td", [["align", "center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 8, "div", [["class", "form-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 5, "input", [["checked", "checked"], ["class", "form-check-input"], ["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0;
                "change" === n && (t = !1 !== u["ɵnov"](l, 14).onChange(e.target.checked) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 14).onTouched() && t);
                "ngModelChange" === n && (t = !1 !== (l.context.$implicit.active = e) && t);
                return t
            }, null, null)), u["ɵdid"](14, 16384, null, 0, tl.b, [u.Renderer2, u.ElementRef], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.b]), u["ɵdid"](16, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](18, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 16, 0, n.context.$implicit.type, n.context.$implicit.active)
            }, function(l, n) {
                l(n, 3, 0, n.context.index + 1),
                l(n, 7, 0, n.context.$implicit.description),
                l(n, 13, 0, u["ɵnov"](n, 18).ngClassUntouched, u["ɵnov"](n, 18).ngClassTouched, u["ɵnov"](n, 18).ngClassPristine, u["ɵnov"](n, 18).ngClassDirty, u["ɵnov"](n, 18).ngClassValid, u["ɵnov"](n, 18).ngClassInvalid, u["ɵnov"](n, 18).ngClassPending)
            })
        }
        function Fe(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 21, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](6, 0, null, null, 3, "span", [["class", "address-wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](7, null, ["", ""])), (l()(),
            u["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](9, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 9, "td", [["class", "icon-column"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 16777216, null, null, 6, "span", [["placement", "top-right"]], null, null, null, null, null)), u["ɵdid"](14, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 2, "button", [["class", "btn btn-primary btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openDownloadFileDialog(l.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 0, "i", [["class", "fa fa-download"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 14, 0, "top-right", u["ɵinlineInterpolate"](2, "Файл ", n.context.$implicit.mime, " ", (n.context.$implicit.size / 1e6).toFixed(2), "Мб"))
            }, function(l, n) {
                var e = n.component.formatTimestamp(n.context.$implicit.timestamp.toString());
                l(n, 3, 0, e),
                l(n, 7, 0, n.context.$implicit.name),
                l(n, 9, 0, n.context.$implicit.description)
            })
        }
        function Le(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 296, "div", [["class", "row cabinet"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 143, "section", [["class", "col-12 col-sm-6 col-lg-3 order-lg-1 left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 2, "h4", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-user-circle-o text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Мой профиль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ce)), u["ɵdid"](11, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Re)), u["ɵdid"](14, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, we)), u["ɵdid"](17, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ie)), u["ɵdid"](20, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](22, 0, null, null, 122, "form", [["class", "form"], ["name", "passwordForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 24).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 24).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.changePassword() && t);
                return t
            }, null, null)), u["ɵdid"](23, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](24, 4210688, [["passwordForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](26, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 17, "div", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](30, 0, null, null, 2, "label", [["class", "form-control-label"], ["for", "currentPassword"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](31, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Текущий пароль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 7, "input", [["class", "form-control"], ["id", "currentPassword"], ["name", "currentPassword"], ["placeholder", "Текущий пароль"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 35)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 35).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 35)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 35)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.currentPassword = e) && t);
                return t
            }, null, null)), u["ɵdid"](35, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](36, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](39, 671744, [["currentPasswordInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](41, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Se)), u["ɵdid"](44, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](47, 0, null, null, 19, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](49, 0, null, null, 2, "label", [["class", "form-control-label strong"], ["for", "newPassword"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](50, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Новый пароль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](53, 0, null, null, 9, "input", [["class", "form-control"], ["id", "newPassword"], ["maxlength", "50"], ["minlength", "4"], ["name", "newPassword"], ["placeholder", "Введите пароль"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 54)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 54).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 54)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 54)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.newPassword = e) && t);
                return t
            }, null, null)), u["ɵdid"](54, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](55, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](56, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](57, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e) {
                return [l, n, e]
            }, [tl.s, tl.i, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](60, 671744, [["newPasswordInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](62, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ee)), u["ɵdid"](65, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](68, 0, null, null, 19, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](70, 0, null, null, 2, "label", [["class", "form-control-label strong"], ["for", "confirmPassword"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](71, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Подтверждение пароля"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](74, 0, null, null, 9, "input", [["class", "form-control"], ["id", "confirmPassword"], ["maxlength", "50"], ["minlength", "4"], ["name", "confirmPassword"], ["placeholder", "Повторите пароль"], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 75)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 75).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 75)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 75)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.confirmPassword = e) && t);
                return t
            }, null, null)), u["ɵdid"](75, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](76, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](77, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](78, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e) {
                return [l, n, e]
            }, [tl.s, tl.i, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](81, 671744, [["confirmPasswordInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](83, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Oe)), u["ɵdid"](86, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](89, 0, null, null, 9, "div", [["align", "right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](91, 0, null, null, 6, "span", [["data-placement", "top"], ["data-toggle", "tooltip"], ["title", "Сохранить новый пароль"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](93, 0, null, null, 3, "button", [["class", "btn btn-primary btn-sm"], ["title", "Сохранить новый пароль"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](95, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-save"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Изменить пароль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](100, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](102, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2 text-secondary"], ["for", "lastName"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](103, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Фамилия:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](106, 0, null, null, 0, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "lastName"], ["readonly", "readonly"], ["type", "text"]], [[8, "placeholder", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](108, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2 text-secondary"], ["for", "firstName"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](109, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Имя:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](112, 0, null, null, 0, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "firstName"], ["readonly", "readonly"], ["type", "text"]], [[8, "placeholder", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](114, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2 text-secondary"], ["for", "patronymic"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](115, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отчество:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](118, 0, null, null, 0, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "patronymic"], ["readonly", "readonly"], ["type", "text"]], [[8, "placeholder", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](120, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2 text-secondary"], ["for", "email"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](121, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Email:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](124, 0, null, null, 0, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "email"], ["readonly", "readonly"], ["type", "text"]], [[8, "placeholder", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](126, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2 text-secondary"], ["for", "phone"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](127, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Номер телефона:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](130, 0, null, null, 0, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "phone"], ["readonly", "readonly"], ["type", "text"]], [[8, "placeholder", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](132, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2 text-secondary"], ["for", "organization"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](133, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Наименование организации:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](136, 0, null, null, 0, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "organization"], ["readonly", "readonly"], ["type", "text"]], [[8, "placeholder", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](138, 0, null, null, 3, "label", [["class", "mb-2 mr-sm-2 text-secondary"], ["for", "city"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](139, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Город"])), (l()(),
            u["ɵted"](-1, null, [" (населённый пункт):"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](143, 0, null, null, 0, "input", [["class", "form-control form-control-sm mb-4 mr-sm-2"], ["id", "city"], ["readonly", "readonly"], ["type", "text"]], [[8, "placeholder", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](147, 0, null, null, 118, "section", [["class", "col-12 col-sm-6 col-lg-4 order-lg-2 center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](149, 0, null, null, 2, "h4", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](150, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-envelope text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Управление оповещениями"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](153, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, je)), u["ɵdid"](156, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ve)), u["ɵdid"](159, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](161, 0, null, null, 1, "p", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Введите или измените список дополнительных адресов электронной почты для рассылки ваших оповещений. Затем выберите ситуации (события), при которых они должны отправляться получателям. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](164, 0, null, null, 1, "h5", [["class", "mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Получатели оповещений"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](167, 0, null, null, 30, "table", [["class", "table table-striped small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](169, 0, null, null, 10, "thead", [["class", "custom-thead-bg-gray"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](171, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["#"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](174, 0, null, null, 1, "th", [["scope", "col"], ["width", "70%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Email"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](177, 0, null, null, 1, "th", [["align", "center"], ["scope", "col"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Удалить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](181, 0, null, null, 15, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](183, 0, null, null, 9, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](185, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["1"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](188, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](189, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](191, 0, null, null, 0, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ae)), u["ɵdid"](195, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](199, 0, null, null, 23, "form", [["class", "form"], ["name", "emailsForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 201).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 201).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.addEmails() && t);
                return t
            }, null, null)), u["ɵdid"](200, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](201, 4210688, [["emailsForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](203, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](205, 0, null, null, 2, "label", [["for", "inputEmails"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](206, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-users text-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Введите один или несколько дополнительных адресов:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](209, 0, null, null, 12, "div", [["class", "input-group btn-group mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](211, 0, null, null, 5, "input", [["class", "form-control"], ["id", "inputEmails"], ["name", "inputEmails"], ["placeholder", "Через запятую: name1@site.ru, name2@site.ru, ..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 212)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 212).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 212)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 212)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.inputEmails = e) && t);
                return t
            }, null, null)), u["ɵdid"](212, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](214, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](216, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](218, 0, null, null, 2, "button", [["class", "btn btn-secondary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](220, 0, null, null, 0, "i", [["class", "fa fa-plus"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](224, 0, null, null, 1, "h5", [["class", "my-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["События для оповещений"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](227, 0, null, null, 37, "form", [["class", "form"], ["name", "notificationsForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 229).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 229).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.save() && t);
                return t
            }, null, null)), u["ɵdid"](228, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](229, 4210688, [["notificationsForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](231, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](233, 0, null, null, 19, "table", [["class", "table table-striped small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](235, 0, null, null, 10, "thead", [["class", "custom-thead-bg-gray"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](237, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["#"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](240, 0, null, null, 1, "th", [["scope", "col"], ["width", "70%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Событие"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](243, 0, null, null, 1, "th", [["align", "center"], ["scope", "col"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Выбрать"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](247, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ne)), u["ɵdid"](250, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](254, 0, null, null, 9, "div", [["align", "right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](256, 0, null, null, 6, "span", [["data-placement", "left"], ["data-toggle", "tooltip"], ["title", "Сохранить изменения"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](258, 0, null, null, 3, "button", [["class", "btn btn-primary btn-sm mb-3"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](260, 0, null, null, 0, "i", [["class", "fa fa-save"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Сохранить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](267, 0, null, null, 28, "section", [["class", "col-12 col-sm-12 col-lg-5 order-lg-3 right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](269, 0, null, null, 2, "h4", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](270, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-download text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Важные файлы"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](273, 0, null, null, 1, "p", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Документы и другие полезные файлы, публикуемые администратором системы мониторинга «Первая вода» для всех пользователей."])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](276, 0, null, null, 18, "table", [["class", "table table-striped small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](278, 0, null, null, 9, "thead", [["class", "custom-thead-bg-gray"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](280, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Дата"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](283, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Имя/Описание"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](286, 0, null, null, 0, "th", [["class", "icon-column"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](289, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Fe)), u["ɵdid"](292, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 11, 0, e.successPass),
                l(n, 14, 0, e.errorPass),
                l(n, 17, 0, e.doNotMatch),
                l(n, 20, 0, e.capsLock);
                l(n, 36, 0, "");
                l(n, 39, 0, "currentPassword", e.currentPassword),
                l(n, 44, 0, u["ɵnov"](n, 39).dirty && u["ɵnov"](n, 39).invalid);
                l(n, 55, 0, "");
                l(n, 56, 0, "4");
                l(n, 57, 0, "50");
                l(n, 60, 0, "newPassword", e.newPassword),
                l(n, 65, 0, u["ɵnov"](n, 60).dirty && u["ɵnov"](n, 60).invalid);
                l(n, 76, 0, "");
                l(n, 77, 0, "4");
                l(n, 78, 0, "50");
                l(n, 81, 0, "confirmPassword", e.confirmPassword),
                l(n, 86, 0, u["ɵnov"](n, 81).dirty && u["ɵnov"](n, 81).invalid),
                l(n, 156, 0, e.success),
                l(n, 159, 0, e.error),
                l(n, 195, 0, e.settingsAccount.infoEmails);
                l(n, 214, 0, "inputEmails", e.inputEmails),
                l(n, 250, 0, e.settingsAccount.alerts),
                l(n, 292, 0, e.files)
            }, function(l, n) {
                var e = n.component;
                l(n, 22, 0, u["ɵnov"](n, 26).ngClassUntouched, u["ɵnov"](n, 26).ngClassTouched, u["ɵnov"](n, 26).ngClassPristine, u["ɵnov"](n, 26).ngClassDirty, u["ɵnov"](n, 26).ngClassValid, u["ɵnov"](n, 26).ngClassInvalid, u["ɵnov"](n, 26).ngClassPending),
                l(n, 34, 0, u["ɵnov"](n, 36).required ? "" : null, u["ɵnov"](n, 41).ngClassUntouched, u["ɵnov"](n, 41).ngClassTouched, u["ɵnov"](n, 41).ngClassPristine, u["ɵnov"](n, 41).ngClassDirty, u["ɵnov"](n, 41).ngClassValid, u["ɵnov"](n, 41).ngClassInvalid, u["ɵnov"](n, 41).ngClassPending),
                l(n, 53, 0, u["ɵnov"](n, 55).required ? "" : null, u["ɵnov"](n, 56).minlength ? u["ɵnov"](n, 56).minlength : null, u["ɵnov"](n, 57).maxlength ? u["ɵnov"](n, 57).maxlength : null, u["ɵnov"](n, 62).ngClassUntouched, u["ɵnov"](n, 62).ngClassTouched, u["ɵnov"](n, 62).ngClassPristine, u["ɵnov"](n, 62).ngClassDirty, u["ɵnov"](n, 62).ngClassValid, u["ɵnov"](n, 62).ngClassInvalid, u["ɵnov"](n, 62).ngClassPending),
                l(n, 74, 0, u["ɵnov"](n, 76).required ? "" : null, u["ɵnov"](n, 77).minlength ? u["ɵnov"](n, 77).minlength : null, u["ɵnov"](n, 78).maxlength ? u["ɵnov"](n, 78).maxlength : null, u["ɵnov"](n, 83).ngClassUntouched, u["ɵnov"](n, 83).ngClassTouched, u["ɵnov"](n, 83).ngClassPristine, u["ɵnov"](n, 83).ngClassDirty, u["ɵnov"](n, 83).ngClassValid, u["ɵnov"](n, 83).ngClassInvalid, u["ɵnov"](n, 83).ngClassPending),
                l(n, 93, 0, u["ɵnov"](n, 24).form.invalid),
                l(n, 106, 0, u["ɵinlineInterpolate"](1, "", e.settingsAccount.lastName, "")),
                l(n, 112, 0, u["ɵinlineInterpolate"](1, "", e.settingsAccount.firstName, "")),
                l(n, 118, 0, u["ɵinlineInterpolate"](1, "", e.settingsAccount.patronymic, "")),
                l(n, 124, 0, u["ɵinlineInterpolate"](1, "", e.settingsAccount.email, "")),
                l(n, 130, 0, u["ɵinlineInterpolate"](1, "", e.settingsAccount.phone, "")),
                l(n, 136, 0, u["ɵinlineInterpolate"](1, "", e.settingsAccount.organization, "")),
                l(n, 143, 0, u["ɵinlineInterpolate"](1, "", e.settingsAccount.city, "")),
                l(n, 189, 0, e.settingsAccount.email),
                l(n, 199, 0, u["ɵnov"](n, 203).ngClassUntouched, u["ɵnov"](n, 203).ngClassTouched, u["ɵnov"](n, 203).ngClassPristine, u["ɵnov"](n, 203).ngClassDirty, u["ɵnov"](n, 203).ngClassValid, u["ɵnov"](n, 203).ngClassInvalid, u["ɵnov"](n, 203).ngClassPending),
                l(n, 211, 0, u["ɵnov"](n, 216).ngClassUntouched, u["ɵnov"](n, 216).ngClassTouched, u["ɵnov"](n, 216).ngClassPristine, u["ɵnov"](n, 216).ngClassDirty, u["ɵnov"](n, 216).ngClassValid, u["ɵnov"](n, 216).ngClassInvalid, u["ɵnov"](n, 216).ngClassPending),
                l(n, 218, 0, !e.inputEmails),
                l(n, 227, 0, u["ɵnov"](n, 231).ngClassUntouched, u["ɵnov"](n, 231).ngClassTouched, u["ɵnov"](n, 231).ngClassPristine, u["ɵnov"](n, 231).ngClassDirty, u["ɵnov"](n, 231).ngClassValid, u["ɵnov"](n, 231).ngClassInvalid, u["ɵnov"](n, 231).ngClassPending)
            })
        }
        function $e(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵand"](16777216, null, null, 1, null, Le)), u["ɵdid"](1, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 1, 0, n.component.settingsAccount)
            }, null)
        }
        var Ue = u["ɵccf"]("jhi-settings", he, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-settings", [], null, [["window", "keydown"]], function(l, n, e) {
                var t = !0;
                return "window:keydown" === n && (t = !1 !== u["ɵnov"](l, 1).handleKeyDown(e) && t),
                t
            }, $e, ye)), u["ɵdid"](1, 114688, null, 0, he, [v.z, x, M, te, oe, ve.a, f.l], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , qe = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function ze(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "ngb-alert", [["class", "alert"], ["role", "alert"]], [[2, "alert-dismissible", null]], [[null, "close"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "close" === n && (u = !1 !== l.parent.context.$implicit.close(t.alerts) && u);
                return u
            }, ul.f, ul.c)), u["ɵdid"](1, 638976, null, 0, v.e, [v.f, u.Renderer2, u.ElementRef], {
                type: [0, "type"]
            }, {
                close: "close"
            }), (l()(),
            u["ɵted"](-1, 0, ["\n                    "])), (l()(),
            u["ɵeld"](3, 0, null, 0, 0, "pre", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, 0, ["\n                "]))], function(l, n) {
                l(n, 1, 0, n.parent.context.$implicit.type)
            }, function(l, n) {
                l(n, 0, 0, u["ɵnov"](n, 1).dismissible),
                l(n, 3, 0, n.parent.context.$implicit.msg)
            })
        }
        function Be(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), u["ɵdid"](1, 278528, null, 0, h.j, [u.IterableDiffers, u.KeyValueDiffers, u.ElementRef, u.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["\n                "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ze)), u["ɵdid"](4, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["\n            "]))], function(l, n) {
                l(n, 1, 0, n.component.setClasses(n.context.$implicit)),
                l(n, 4, 0, n.context.$implicit && n.context.$implicit.type && n.context.$implicit.msg)
            }, null)
        }
        function Ke(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, ["\n        "])), (l()(),
            u["ɵeld"](1, 0, null, null, 4, "div", [["class", "alerts"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["\n            "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Be)), u["ɵdid"](4, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["\n        "]))], function(l, n) {
                l(n, 4, 0, n.component.alerts)
            }, null)
        }
        u["ɵccf"]("jhi-alert-error", bl, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](1, 180224, null, 0, bl, [ve.a, q.a], null, null)], null, null)
        }, {}, {}, []);
        var He = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Ze(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 39, "form", [["name", "deleteForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 3).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 3).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.confirmDelete() && t);
                return t
            }, null, null)), u["ɵdid"](2, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](3, 4210688, [["deleteForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](5, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Удаление получателя"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](19, 180224, null, 0, bl, [ve.a, q.a], null, null), (l()(),
            u["ɵted"](-1, null, [" Вы уверены, что хотите удалить этого получателя из списка? "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](22, 0, null, null, 17, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 6, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](26, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 6, "button", [["class", "btn btn-danger"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 0, "span", [["class", "fa fa-remove"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Удалить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                l(n, 1, 0, u["ɵnov"](n, 5).ngClassUntouched, u["ɵnov"](n, 5).ngClassTouched, u["ɵnov"](n, 5).ngClassPristine, u["ɵnov"](n, 5).ngClassDirty, u["ɵnov"](n, 5).ngClassValid, u["ɵnov"](n, 5).ngClassInvalid, u["ɵnov"](n, 5).ngClassPending)
            })
        }
        var We = u["ɵccf"]("jhi-email-delete-dialog", ie, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-email-delete-dialog", [], null, null, null, Ze, He)), u["ɵdid"](1, 114688, null, 0, ie, [v.d], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Ye = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Qe(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "ngb-progressbar", [["type", "success"]], null, null, null, ul.h, ul.e)), u["ɵdid"](1, 49152, null, 0, v.G, [v.H], {
                max: [0, "max"],
                animated: [1, "animated"],
                striped: [2, "striped"],
                type: [3, "type"],
                value: [4, "value"]
            }, null), (l()(),
            u["ɵted"](-1, 0, [" "]))], function(l, n) {
                l(n, 1, 0, 100, !1, !0, "success", n.component.downloaded)
            }, null)
        }
        function Xe(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Загрузка файла"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 13, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](13, 180224, null, 0, bl, [ve.a, q.a], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 0, null, null, 7, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
            u["ɵted"](18, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Qe)), u["ɵdid"](21, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 9, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](27, 0, null, null, 6, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](31, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 21, 0, n.component.downloaded)
            }, function(l, n) {
                l(n, 18, 0, n.component.file.description)
            })
        }
        var Ge = u["ɵccf"]("jhi-file-download-dialog", me, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-file-download-dialog", [], null, null, null, Xe, Ye)), u["ɵdid"](1, 114688, null, 0, me, [oe, v.d, ve.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Je = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function lu(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var nu, eu = u["ɵccf"]("jhi-dfile-delete-popup", ge, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-dfile-delete-popup", [], null, null, null, lu, Je)), u["ɵdid"](1, 245760, null, 0, ge, [f.a, re], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, []);
        !function(l) {
            l.GOOD = "good",
            l.LOW = "low",
            l.HI = "hi",
            l.CRITLOW = "critLow",
            l.CRITHI = "crithi"
        }(nu || (nu = {}));
        var uu = function() {
            function l(l, n, e, u, t) {
                this.deviceId = l,
                this.id = n,
                this.name = e,
                this.timestamp = u,
                this.value = Number(t.toFixed(3)),
                this.status = this.getStatus(),
                this.description = this.getDescription()
            }
            return l.prototype.getStatus = function() {
                var l = this
                  , n = iu.find(function(n) {
                    return l.name === n.name
                });
                if (n) {
                    if (this.value > n.max)
                        return nu.CRITHI;
                    if (this.value > n.maxWarning)
                        return nu.HI;
                    if (this.value < n.min)
                        return nu.CRITLOW;
                    if (this.value < n.minWarning)
                        return nu.LOW
                }
                return nu.GOOD
            }
            ,
            l.prototype.getDescription = function() {
                var l = this
                  , n = iu.find(function(n) {
                    return l.name === n.name
                });
                return n ? n.description : ""
            }
            ,
            l
        }()
          , tu = function() {
            return function(l, n, e, u, t, i) {
                void 0 === n && (n = void 0),
                void 0 === e && (e = void 0),
                void 0 === u && (u = void 0),
                void 0 === t && (t = void 0),
                void 0 === i && (i = void 0),
                this.name = l,
                this.description = n,
                this.min = e,
                this.max = t,
                this.minWarning = u,
                this.maxWarning = i
            }
        }()
          , iu = [new tu("simBalance","Баланс SIM",20), new tu("signalStrength","Cигнал",15,20), new tu("energyT1","Тариф 1, КВт&middot;ч",0), new tu("energyT2","Тариф 2, КВт&middot;ч",0), new tu("waterInput","Водомер, м&sup3;",0), new tu("tds","TDS, ppm",0,0,100,50), new tu("temperature","Температура, &deg;C",0,5,50,40)]
          , ou = function() {
            function l() {}
            return l.prototype.ngOnInit = function() {}
            ,
            l.prototype.getInfoIconClass = function(l) {
                switch (l.name) {
                case "signalStrength":
                case "simBalance":
                    return "fa-wifi";
                case "energyT1":
                case "energyT2":
                    return "fa-plug";
                case "tds":
                case "waterInput":
                    return "fa-tint";
                case "temperature":
                    return "fa-thermometer"
                }
                return "fa-info"
            }
            ,
            l.prototype.getInfoBtnClass = function(l) {
                switch (l.status) {
                case nu.GOOD:
                    return "badge-success";
                case nu.LOW:
                    return "badge-warning";
                case nu.CRITLOW:
                    return "badge-danger";
                case nu.HI:
                    return "badge-warning";
                case nu.CRITHI:
                    return "badge-danger"
                }
                return "badge-primary"
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , du = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function ru(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 9, "span", [["class", "badge mr-1 mb-1"]], null, null, null, null, null)), u["ɵdid"](1, 278528, null, 0, h.j, [u.IterableDiffers, u.KeyValueDiffers, u.ElementRef, u.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 1, "i", [["class", "fa pr-1"]], null, null, null, null, null)), u["ɵdid"](4, 278528, null, 0, h.j, [u.IterableDiffers, u.KeyValueDiffers, u.ElementRef, u.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (l()(),
            u["ɵted"](5, null, [" ", ""])), (l()(),
            u["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 0, "small", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, "badge mr-1 mb-1", e.getInfoBtnClass(e.info));
                l(n, 4, 0, "fa pr-1", e.getInfoIconClass(e.info))
            }, function(l, n) {
                var e = n.component;
                l(n, 5, 0, e.info.value),
                l(n, 8, 0, e.info.description)
            })
        }
        u["ɵccf"]("info-badge", ou, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "info-badge", [], null, null, null, ru, du)), u["ɵdid"](1, 114688, null, 0, ou, [], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {
            info: "info"
        }, {}, []);
        var au, su = e(94), cu = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/devices",
                this.searchUrl = o + "api/_search/devices"
            }
            return l.prototype.create = function(l) {
                return this.http.post(this.resourceUrl, l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.update = function(l) {
                return this.http.put(this.resourceUrl, l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.find = function(l) {
                return this.http.get(this.resourceUrl + "/" + l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.query = function(l) {
                l && l.query && l.sort && (l.sort = l.sort.map(function(l) {
                    return l.split(",")
                }).map(function(l) {
                    return l[0] + ".keyword," + (l[1] ? l[1] : "asc")
                }));
                var n = O(l);
                return l && l.query ? this.http.get(this.searchUrl, {
                    params: n,
                    observe: "response"
                }) : this.http.get(this.resourceUrl, {
                    params: n,
                    observe: "response"
                })
            }
            ,
            l.prototype.delete = function(l) {
                return this.http.delete(this.resourceUrl + "/" + l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.clean = function(l) {
                return this.http.get(this.resourceUrl + "/clean/" + l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.authorities = function() {
                return this.http.get(o + "api/devices/authorities")
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }();
        !function(l) {
            l.RUR = "RUR",
            l.KZT = "KZT",
            l.AZN = "AZN",
            l.UZS = "UZS",
            l.KGS = "KGS",
            l.BYR = "BYR"
        }(au || (au = {}));
        var pu, fu = function() {
            return function(l, n, e, u, t, i, o, d, r, a, s, c) {
                void 0 === l && (l = void 0),
                void 0 === n && (n = void 0),
                void 0 === e && (e = void 0),
                void 0 === u && (u = void 0),
                void 0 === t && (t = void 0),
                void 0 === i && (i = void 0),
                void 0 === o && (o = au.RUR),
                void 0 === d && (d = 4),
                void 0 === r && (r = []),
                void 0 === a && (a = []),
                void 0 === s && (s = void 0),
                void 0 === c && (c = void 0),
                this.address = l,
                this.alerts = n,
                this.deviceId = e,
                this.id = u,
                this.lastStatus = t,
                this.lastCleanerStatus = i,
                this.currency = o,
                this.timeZone = d,
                this.settings = r,
                this.info = a,
                this.ownerId = s,
                this.phone = c
            }
        }(), mu = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/info"
            }
            return l.prototype.find = function(l) {
                return this.http.get(this.resourceUrl + "/" + l, {
                    observe: "response"
                })
            }
            ,
            l.prototype.authorities = function() {
                return this.http.get(o + "api/info/authorities")
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }(), gu = function() {
            function l(l, n, e, u) {
                this.modalService = l,
                this.router = n,
                this.infoService = e,
                this.deviceService = u,
                this.isOpen = !1
            }
            return l.prototype.open = function(l, n) {
                var e = this;
                if (!this.isOpen) {
                    if (this.isOpen = !0,
                    !n)
                        return this.deviceModalRef(l, new fu);
                    this.deviceService.find(n).subscribe(function(n) {
                        e.deviceModalRef(l, n.body)
                    })
                }
            }
            ,
            l.prototype.deviceModalRef = function(l, n) {
                var e = this
                  , u = this.modalService.open(l, {
                    size: "lg",
                    backdrop: "static"
                });
                return this.infoService.find(n.deviceId).subscribe(function(l) {
                    u.componentInstance.device.info = l.body.map(function(l) {
                        return new uu(l.deviceId,l.id,l.name,l.timestamp,l.value)
                    })
                }),
                u.componentInstance.device = n,
                u.result.then(function(l) {
                    e.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    e.isOpen = !1
                }, function(l) {
                    e.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    e.isOpen = !1
                }),
                u
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l),u.inject(mu),u.inject(cu))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }(), hu = function() {
            function l(l, n, e) {
                this.activeModal = l,
                this.deviceService = n,
                this.eventManager = e,
                this.device = new fu,
                this.config = {
                    apiKey: d,
                    type: Rn.a.address
                }
            }
            return l.prototype.ngOnInit = function() {
                this.isSaving = !1
            }
            ,
            l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.save = function() {
                console.log(this.device),
                this.isSaving = !0,
                void 0 !== this.device.id ? this.subscribeToSaveResponse(this.deviceService.update(this.device), !1) : this.subscribeToSaveResponse(this.deviceService.create(this.device), !0)
            }
            ,
            l.prototype.subscribeToSaveResponse = function(l, n) {
                var e = this;
                l.subscribe(function(l) {
                    return e.onSaveSuccess(l.body, n)
                }, function(l) {
                    return e.onSaveError(l)
                })
            }
            ,
            l.prototype.onSaveSuccess = function(l, n) {
                this.eventManager.broadcast({
                    name: "deviceListModification",
                    content: "OK"
                }),
                this.isSaving = !1,
                this.activeModal.dismiss(l)
            }
            ,
            l.prototype.onSaveError = function(l) {
                this.isSaving = !1,
                this.success = null,
                400 === l.status && "notmydevice" === l.error.errorKey ? this.errorNotMyDevice = "ERROR" : this.error = "ERROR"
            }
            ,
            l.prototype.trackUserById = function(l, n) {
                return n.id
            }
            ,
            l.prototype.makeDeviceInfo = function(l, n, e) {
                return void 0 === e && (e = 2),
                new uu("","",l,0,Number(n.toFixed(e)))
            }
            ,
            l
        }(), vu = function() {
            function l(l, n) {
                this.route = l,
                this.devicePopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    n.id ? l.modalRef = l.devicePopupService.open(hu, n.id) : l.modalRef = l.devicePopupService.open(hu)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }(), bu = function() {
            function l(l, n, e, u) {
                this.deviceService = l,
                this.activeModal = n,
                this.alertService = e,
                this.eventManager = u
            }
            return l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.confirmDelete = function(l, n) {
                var e = this;
                this.deviceService.delete(l).subscribe(function(l) {
                    e.eventManager.broadcast({
                        name: "deviceListModification",
                        content: "Deleted an device"
                    }),
                    e.activeModal.dismiss(!0)
                }),
                this.alertService.success("monitoringApp.device.deleted", {
                    param: n
                }, null)
            }
            ,
            l.prototype.ngOnInit = function() {}
            ,
            l
        }(), yu = function() {
            function l(l, n) {
                this.route = l,
                this.devicePopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    l.modalRef = l.devicePopupService.open(bu, n.id)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }(), Cu = function() {
            function l(l, n, e, u) {
                this.deviceService = l,
                this.activeModal = n,
                this.alertService = e,
                this.eventManager = u
            }
            return l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.confirmClean = function(l, n) {
                var e = this;
                this.deviceService.clean(l).subscribe(function(l) {
                    e.eventManager.broadcast({
                        name: "deviceListModification",
                        content: "Cleaned an device"
                    }),
                    e.activeModal.dismiss(!0)
                }),
                this.alertService.success("monitoringApp.device.deleted", {
                    param: n
                }, null)
            }
            ,
            l.prototype.ngOnInit = function() {}
            ,
            l
        }(), Ru = function() {
            function l(l, n) {
                this.route = l,
                this.devicePopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    l.modalRef = l.devicePopupService.open(Cu, n.id)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }(), wu = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/sales_graph"
            }
            return l.prototype.query = function(l) {
                var n = this.resourceUrl + "/" + l.devId + "?term=" + l.term;
                return this.http.get(n, {
                    observe: "response"
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }(), Iu = (e(230),
        e(134));
        !function(l) {
            l.CASH = "CASH",
            l.CASHLESS = "CASHLESS",
            l.DEPO = "DEPO"
        }(pu || (pu = {}));
        var xu, Su = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/sale-info-messages"
            }
            return l.prototype.query = function(l) {
                var n = O(l);
                return this.http.get(this.resourceUrl, {
                    params: n,
                    observe: "response"
                })
            }
            ,
            l.prototype.authorities = function() {
                return this.http.get(o + "api/sale-info-messages/authorities")
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }(), Tu = function() {
            function l(l, n) {
                this.modalService = l,
                this.router = n,
                this.isOpen = !1
            }
            return l.prototype.open = function(l, n, e) {
                var u = this;
                n && (this.isOpen || (this.isOpen = !0,
                setTimeout(function() {
                    u.deviceModalRef(l, [], n, e)
                })))
            }
            ,
            l.prototype.deviceModalRef = function(l, n, e, u) {
                var t = this
                  , i = this.modalService.open(l, {
                    size: "lg",
                    backdrop: "static"
                });
                return i.componentInstance.sales = n,
                i.componentInstance.deviceId = e,
                i.componentInstance.deviceTz = u,
                i.result.then(function(l) {
                    t.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    t.isOpen = !1
                }, function(l) {
                    t.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    t.isOpen = !1
                }),
                i
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }(), ku = function() {
            function l(l, n, e, u) {
                this.router = l,
                this.activeModal = n,
                this.salesInfoService = e,
                this.MAX_RECORDS = 1e4,
                this.paymentType = pu,
                this.showDate = "",
                this.showCash = !0,
                this.showCashless = !0,
                this.showDepo = !0,
                this.totalCoin = 0,
                this.totalBill = 0,
                this.totalCard = 0,
                this.totalCash = 0,
                this.totalSold = 0,
                this.sales = [],
                this.fromDate = u.getPrev(u.getToday(), "d", 10),
                this.toDate = u.getNext(u.getToday(), "d", 1),
                this.showDate = Sl.formatRange(this.fromDate, this.toDate),
                this.from = Sl.ngbDateToTimestamp(this.fromDate, this.deviceTz),
                this.to = Sl.ngbDateToTimestamp(this.toDate, this.deviceTz)
            }
            return l.prototype.ngOnInit = function() {
                this.isSaving = !1,
                0 !== this.from && 0 !== this.to && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.formatTimestamp = function(l, n) {
                return void 0 === n && (n = !1),
                Sl.formatTimestamp(l, this.deviceTz, n)
            }
            ,
            l.prototype.loadSales = function(l, n, e) {
                var u = this;
                this.salesInfoService.query({
                    deviceId: l,
                    sort: ["timestamp,asc"],
                    size: this.MAX_RECORDS,
                    from: n,
                    to: e + 86400
                }).subscribe(function(l) {
                    return u.onSalesSuccess(l.body, l.headers)
                }, function(l) {
                    return u.onError(l.body)
                })
            }
            ,
            l.prototype.onSalesSuccess = function(l, n) {
                this.sales = l
            }
            ,
            l.prototype.onError = function(l) {}
            ,
            l.prototype.sumCoins = function(l) {
                if (!l || 0 === l.length)
                    return 0;
                var n = l.map(function(l) {
                    return l.value * l.amount
                }).reduce(function(l, n) {
                    return l + n
                }, 0);
                return n > 0 ? n : 0
            }
            ,
            l.prototype.sumCoinsString = function(l) {
                if (!l || 0 === l.length)
                    return "";
                var n = this.sumCoins(l);
                return n > 0 ? n.toFixed(2) : " "
            }
            ,
            l.prototype.onDateSelection = function(l) {
                this.fromDate || this.toDate ? this.fromDate && !this.toDate && (l.after(this.fromDate) || l.equals(this.fromDate)) ? this.toDate = l : (this.toDate = null,
                this.fromDate = l) : this.fromDate = l,
                this.from = Sl.ngbDateToTimestamp(this.fromDate, this.deviceTz),
                this.to = Sl.ngbDateToTimestamp(this.toDate, this.deviceTz),
                this.showDate = Sl.formatRange(this.fromDate, this.toDate),
                this.from > 0 && this.to > 0 && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.onDateInput = function(l) {
                var n = l.target.value.split(" - ");
                this.from = Sl.dateToTimestamp(n[0], this.deviceTz),
                this.to = Sl.dateToTimestamp(n[1], this.deviceTz),
                this.from > 0 && this.to > 0 && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.filterSales = function() {
                var l = this;
                return this.totalCoin = 0,
                this.totalBill = 0,
                this.totalCard = 0,
                this.totalCash = 0,
                this.totalSold = 0,
                this.sales.filter(function(n) {
                    return n.paymentType === pu.CASH && l.showCash || n.paymentType === pu.CASHLESS && l.showCashless || n.paymentType === pu.DEPO && l.showDepo
                }).map(function(n) {
                    return n.paymentType !== pu.CASH && n.paymentType !== pu.DEPO || (l.totalCoin += l.sumCoins(n.coins),
                    l.totalBill += l.sumCoins(n.bills),
                    l.totalCash += n.amount),
                    n.paymentType === pu.CASHLESS && (l.totalCard += n.amount),
                    l.totalSold += n.quantity,
                    n
                })
            }
            ,
            l.prototype.isHovered = function(l) {
                return !!l && (this.fromDate && !this.toDate && this.hoveredDate && l.after(this.fromDate) && l.before(this.hoveredDate))
            }
            ,
            l.prototype.isInside = function(l) {
                return !!l && (l.after(this.fromDate) && l.before(this.toDate))
            }
            ,
            l.prototype.isRange = function(l) {
                return !!l && (l.equals(this.fromDate) || l.equals(this.toDate) || this.isInside(l) || this.isHovered(l))
            }
            ,
            l.prototype.expandCoins = function(l) {
                for (var n = [], e = 0; e < l.amount; e++)
                    n.push(l.value);
                return n
            }
            ,
            l.prototype.valueIsValid = function(l) {
                return !Number.isNaN(l) && Number.isFinite(l) && l > 0
            }
            ,
            l.prototype.openDownloadFileDialog = function() {
                this.router.navigate(["/", {
                    outlets: {
                        popup: "report/" + this.deviceId + "/sale-info-messages/" + this.from + "/" + (this.to + 86400) + "/" + this.deviceTz
                    }
                }], {
                    replaceUrl: !0
                })
            }
            ,
            l
        }(), Du = function() {
            function l(l, n) {
                this.route = l,
                this.salesInfoPopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    n.id && (l.modalRef = l.salesInfoPopupService.open(ku, n.id, n.tz))
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }();
        !function(l) {
            l.NO_LINK = "NO_LINK",
            l.NO_SALES = "NO_SALES",
            l.TANK_EMPTY = "TANK_EMPTY"
        }(xu || (xu = {}));
        var Eu, Mu = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/alerts"
            }
            return l.prototype.query = function(l) {
                var n = O(l);
                return this.http.get(this.resourceUrl, {
                    params: n,
                    observe: "response"
                })
            }
            ,
            l.prototype.authorities = function() {
                return this.http.get(o + "api/alerts/authorities")
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }(), Pu = function() {
            function l(l, n) {
                this.modalService = l,
                this.router = n,
                this.isOpen = !1
            }
            return l.prototype.open = function(l, n, e) {
                var u = this;
                n && (this.isOpen || (this.isOpen = !0,
                setTimeout(function() {
                    u.deviceModalRef(l, [], n, e)
                }, 500)))
            }
            ,
            l.prototype.deviceModalRef = function(l, n, e, u) {
                var t = this
                  , i = this.modalService.open(l, {
                    size: "lg",
                    backdrop: "static"
                });
                return i.componentInstance.alerts = n,
                i.componentInstance.deviceId = e,
                i.componentInstance.deviceTz = u,
                i.result.then(function(l) {
                    t.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    t.isOpen = !1
                }, function(l) {
                    t.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    t.isOpen = !1
                }),
                i
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }(), _u = function() {
            function l(l, n, e, u) {
                this.router = l,
                this.activeModal = n,
                this.alertsService = e,
                this.MAX_RECORDS = 1e3,
                this.alertType = xu,
                this.showDate = "",
                this.alerts = [],
                this.fromDate = u.getPrev(u.getToday(), "d", 10),
                this.toDate = u.getNext(u.getToday(), "d", 1),
                this.showDate = Sl.formatRange(this.fromDate, this.toDate),
                this.from = Sl.ngbDateToTimestamp(this.fromDate, this.deviceTz),
                this.to = Sl.ngbDateToTimestamp(this.toDate, this.deviceTz)
            }
            return l.prototype.ngOnInit = function() {
                this.isSaving = !1,
                0 !== this.from && 0 !== this.to && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.formatTimestamp = function(l) {
                return Sl.formatTimestamp(l, this.deviceTz)
            }
            ,
            l.prototype.loadSales = function(l, n, e) {
                var u = this;
                this.alertsService.query({
                    deviceId: l,
                    sort: ["timestamp,asc"],
                    size: this.MAX_RECORDS,
                    from: n,
                    to: e + 86400
                }).subscribe(function(l) {
                    return u.onSalesSuccess(l.body, l.headers)
                }, function(l) {
                    return u.onError(l.body)
                })
            }
            ,
            l.prototype.onSalesSuccess = function(l, n) {
                this.alerts = l
            }
            ,
            l.prototype.onError = function(l) {}
            ,
            l.prototype.onDateSelection = function(l) {
                this.fromDate || this.toDate ? this.fromDate && !this.toDate && (l.after(this.fromDate) || l.equals(this.fromDate)) ? this.toDate = l : (this.toDate = null,
                this.fromDate = l) : this.fromDate = l,
                this.from = Sl.ngbDateToTimestamp(this.fromDate, this.deviceTz),
                this.to = Sl.ngbDateToTimestamp(this.toDate, this.deviceTz),
                this.showDate = Sl.formatRange(this.fromDate, this.toDate),
                this.from > 0 && this.to > 0 && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.onDateInput = function(l) {
                var n = l.target.value.split(" - ");
                this.from = Sl.dateToTimestamp(n[0], this.deviceTz),
                this.to = Sl.dateToTimestamp(n[1], this.deviceTz),
                this.from > 0 && this.to > 0 && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.isHovered = function(l) {
                return !!l && (this.fromDate && !this.toDate && this.hoveredDate && l.after(this.fromDate) && l.before(this.hoveredDate))
            }
            ,
            l.prototype.isInside = function(l) {
                return !!l && (l.after(this.fromDate) && l.before(this.toDate))
            }
            ,
            l.prototype.isRange = function(l) {
                return !!l && (l.equals(this.fromDate) || l.equals(this.toDate) || this.isInside(l) || this.isHovered(l))
            }
            ,
            l.prototype.openDownloadFileDialog = function() {
                this.router.navigate(["/", {
                    outlets: {
                        popup: "report/" + this.deviceId + "/alerts/" + this.from + "/" + this.to + "/" + this.deviceTz
                    }
                }], {
                    replaceUrl: !0
                })
            }
            ,
            l
        }(), Ou = function() {
            function l(l, n) {
                this.route = l,
                this.alertsPopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    n.id && (l.modalRef = l.alertsPopupService.open(_u, n.id, n.tz))
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }(), ju = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/encash"
            }
            return l.prototype.query = function(l) {
                var n = O(l);
                return this.http.get(this.resourceUrl, {
                    params: n,
                    observe: "response"
                })
            }
            ,
            l.prototype.authorities = function() {
                return this.http.get(o + "api/encash/authorities")
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }();
        !function(l) {
            l[l.ST_CLEANER_IDLE = 0] = "ST_CLEANER_IDLE",
            l[l.ST_CLEANER_FILTER = 1] = "ST_CLEANER_FILTER",
            l[l.ST_CLEANER_FLUSH = 2] = "ST_CLEANER_FLUSH",
            l[l.ST_CLEANER_EMPTY = 3] = "ST_CLEANER_EMPTY",
            l[l.ST_CLEANER_FLOOD = 4] = "ST_CLEANER_FLOOD",
            l[l.ST_CLEANER_MENU = 5] = "ST_CLEANER_MENU",
            l[l.ST_CLEANER_NUM = 6] = "ST_CLEANER_NUM"
        }(Eu || (Eu = {}));
        var Vu = function() {
            function l(l, n, e, u, t, i, o, d, r, a, s) {
                this.deviceService = l,
                this.graphService = n,
                this.infoService = e,
                this.salesInfoService = u,
                this.alertsService = t,
                this.encashService = i,
                this.eventManager = o,
                this.principal = d,
                this.router = r,
                this.modalService = a,
                this.$sessionStorage = s,
                this.DAYS = {
                    term: "DAYS",
                    format: "HH"
                },
                this.MONTHS = {
                    term: "MONTHS",
                    format: "DD"
                },
                this.YEARS = {
                    term: "YEARS",
                    format: "MMM"
                },
                this.TIME_FORMAT = "DD/MM/YYYY hh:mm",
                this.MAX_RECORDS = 1e3,
                this.term = this.MONTHS,
                this.chartData = [{
                    data: [],
                    label: "Выручка",
                    yAxisID: "amount-axis"
                }, {
                    data: [],
                    label: "Продано",
                    yAxisID: "quantity-axis"
                }],
                this.chartLabels = [],
                this.chartOptions = {
                    responsive: !0,
                    scales: {
                        yAxes: [{
                            id: "amount-axis",
                            type: "linear",
                            position: "left",
                            ticks: {
                                maxTicksLimit: 5
                            }
                        }, {
                            id: "quantity-axis",
                            type: "linear",
                            position: "right",
                            ticks: {
                                maxTicksLimit: 5
                            }
                        }]
                    }
                },
                this.chartColors = [{
                    backgroundColor: "#ff6699",
                    borderColor: "#ff6699",
                    pointBackgroundColor: "#ff6699",
                    pointBorderColor: "#ff6699",
                    pointHoverBackgroundColor: "#ff6699",
                    pointHoverBorderColor: "#ff6699"
                }, {
                    backgroundColor: "#003399",
                    borderColor: "#003399",
                    pointBackgroundColor: "#003399",
                    pointBorderColor: "#003399",
                    pointHoverBackgroundColor: "#003399",
                    pointHoverBorderColor: "#003399"
                }],
                this.chartLegend = !1,
                this.chartType = "bar",
                this.inputAddress = "",
                this.alertTypes = xu,
                this.cleanerState = Eu,
                this.canShowDashboard = !1,
                this.paymentType = pu,
                this.currencyType = au,
                this.isInfoOpen = !1,
                this.refreshTimer = Object(Iu.a)(1e4, 1e4)
            }
            return l.prototype.openInfoPopup = function(l) {
                if (!this.isInfoOpen)
                    return this.isInfoOpen = !0,
                    this.infoModalRef(l)
            }
            ,
            l.prototype.infoModalRef = function(l) {
                var n = this
                  , e = this.modalService.open(il, {
                    size: "lg",
                    backdrop: "static"
                });
                return e.componentInstance.message = "Мониторинг является лишь информационно-справочной площадкой о работе автомата и предоставляется вам на бесплатной основе. Это не бухгалтерский документ. Качество связи между вашим автоматом и нашим сервером напрямую зависит от работы сотового оператора.",
                e.result.then(function() {
                    n.isInfoOpen = !1,
                    n.$sessionStorage.store("infoIsRead", !0)
                }, function(l) {
                    n.isInfoOpen = !1,
                    n.$sessionStorage.store("infoIsRead", !0)
                }),
                e
            }
            ,
            l.prototype.ngOnInit = function() {
                var l = this;
                c.locale("ru"),
                this.principal.identity().then(function(n) {
                    l.currentAccount = n;
                    var e = l.$sessionStorage.retrieve("infoIsRead");
                    n ? (l.loadAll(),
                    l.subscription = l.refreshTimer.subscribe(function() {
                        l.loadAll()
                    }),
                    e || l.openInfoPopup()) : l.router.navigate([""])
                })
            }
            ,
            l.prototype.registerChangeInDevices = function() {
                var l = this;
                this.eventSubscriber = this.eventManager.subscribe("deviceListModification", function(n) {
                    return l.loadAll()
                })
            }
            ,
            l.prototype.loadAll = function() {
                var l = this;
                this.registerChangeInDevices(),
                this.deviceService.query({
                    size: this.MAX_RECORDS
                }).subscribe(function(n) {
                    return l.onDeviceSuccess(n.body, n.headers)
                }, function(n) {
                    return l.onError(n.body)
                })
            }
            ,
            l.prototype.loadGraph = function(l, n) {
                var e = this;
                this.graphService.query({
                    devId: l,
                    term: n
                }).subscribe(function(l) {
                    return e.onGraphSuccess(l.body, l.headers)
                }, function(l) {
                    return e.onError(l.body)
                })
            }
            ,
            l.prototype.loadExtraInfo = function(l) {
                var n = this;
                this.infoService.find(l).subscribe(function(l) {
                    return n.onInfoSuccess(l.body, l.headers)
                }, function(l) {
                    return n.onError(l.body)
                })
            }
            ,
            l.prototype.loadSales = function(l) {
                var n = this;
                this.salesInfoService.query({
                    deviceId: l,
                    sort: ["timestamp,desc"]
                }).subscribe(function(l) {
                    return n.onSalesSuccess(l.body, l.headers)
                }, function(l) {
                    return n.onError(l.body)
                })
            }
            ,
            l.prototype.loadAlerts = function(l) {
                var n = this;
                this.alertsService.query({
                    deviceId: l,
                    sort: ["timestamp,desc"]
                }).subscribe(function(l) {
                    return n.onAlertsSuccess(l.body, l.headers)
                }, function(l) {
                    return n.onError(l.body)
                })
            }
            ,
            l.prototype.loadEncash = function(l) {
                var n = this;
                this.encashService.query({
                    deviceId: l,
                    sort: ["timestamp,desc"]
                }).subscribe(function(l) {
                    return n.onEncashSuccess(l.body, l.headers)
                }, function(l) {
                    return n.onError(l.body)
                })
            }
            ,
            l.prototype.clearFilter = function() {
                this.inputAddress = "",
                this.filterDevices()
            }
            ,
            l.prototype.expandCoins = function(l) {
                for (var n = [], e = 0; e < l.amount; e++)
                    n.push(l.value);
                return n
            }
            ,
            l.prototype.highlight = function(l, n) {
                if (!l.toLowerCase().includes(n.toLowerCase()))
                    return l;
                var e = n.length
                  , u = l.toLowerCase().indexOf(n.toLowerCase())
                  , t = u + e;
                return l.substr(0, u) + "<em>" + l.substr(u, e) + "</em>" + l.substr(t)
            }
            ,
            l.prototype.filterDevices = function() {
                var l = this;
                return this.devices.filter(function(n) {
                    return n.address.toLowerCase().includes(l.inputAddress.toLowerCase()) || n.deviceId.includes(l.inputAddress)
                }).map(function(n) {
                    var e = wl.a({}, n);
                    return e.address = l.highlight(n.address, l.inputAddress),
                    e.deviceId = l.highlight(n.deviceId, l.inputAddress),
                    e
                })
            }
            ,
            l.prototype.onDeviceSuccess = function(l, n) {
                var e = this;
                this.devices = l,
                this.filterDevices();
                var u = void 0;
                this.devices.length > 0 ? (this.selected && (u = this.devices.find(function(l) {
                    return l.id === e.selected.id
                })),
                void 0 === u && (u = this.devices[0]),
                this.selectDevice(u)) : this.selectDevice(null)
            }
            ,
            l.prototype.onInfoSuccess = function(l, n) {
                this.selected.info = l.map(function(l) {
                    return new uu(l.deviceId,l.id,l.name,l.timestamp,l.value)
                }),
                console.log(this.selected.info)
            }
            ,
            l.prototype.onGraphSuccess = function(l, n) {
                var e = this;
                this.chartLabels.splice(0, this.chartLabels.length),
                l.forEach(function(l) {
                    return e.chartLabels.push(c.unix(l.from).utc().utcOffset(e.selected.timeZone).format(e.term.format))
                });
                var u = l.map(function(l) {
                    return l.data.amount
                })
                  , t = l.map(function(l) {
                    return l.data.quantity
                });
                this.chartData = [{
                    data: u
                }, {
                    data: t
                }],
                this.chart.chart.update()
            }
            ,
            l.prototype.onSalesSuccess = function(l, n) {
                this.sales = l
            }
            ,
            l.prototype.onAlertsSuccess = function(l, n) {
                this.alerts = l
            }
            ,
            l.prototype.onEncashSuccess = function(l, n) {
                this.encash = l
            }
            ,
            l.prototype.onError = function(l) {}
            ,
            l.prototype.selectDevice = function(l) {
                var n = this.devices.find(function(n) {
                    return n.id === l.id
                });
                this.selected && n.deviceId === this.selected.deviceId && (n.info = this.selected.info),
                this.selected = n,
                null != l && (this.loadExtraInfo(this.selected.deviceId),
                this.loadGraph(this.selected.deviceId, this.term.term),
                this.loadSales(this.selected.deviceId),
                this.loadAlerts(this.selected.deviceId),
                this.loadEncash(this.selected.deviceId)),
                this.canShowDashboard = !0
            }
            ,
            l.prototype.selectTerm = function(l) {
                this.term = l,
                this.loadGraph(this.selected.deviceId, l.term)
            }
            ,
            l.prototype.getSelectorClass = function(l) {
                return (this.term = l) ? "btn-secondary" : "btn-outline-secondary"
            }
            ,
            l.prototype.formatTimestamp = function(l) {
                return Sl.formatTimestamp(l, this.selected.timeZone)
            }
            ,
            l.prototype.formatCoins = function(l, n) {
                l.map(function(l) {
                    return l.value.toString() + "&emdash;" + l.amount.toString()
                }).join(", "),
                n.map(function(l) {
                    return l.value.toString() + " - " + l.amount.toString()
                }).join(", ");
                return "&emdash;"
            }
            ,
            l.prototype.hasAlert = function(l, n) {
                return l.alerts && -1 !== l.alerts.indexOf(xu[n])
            }
            ,
            l.prototype.getSingleAlert = function(l) {
                return this.hasAlert(l, xu.TANK_EMPTY) ? xu.TANK_EMPTY : this.hasAlert(l, xu.NO_LINK) || !l.lastStatus ? xu.NO_LINK : this.hasAlert(l, xu.NO_SALES) ? xu.NO_SALES : null
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.subscription && this.subscription.unsubscribe(),
                this.eventSubscriber && this.eventManager.destroy(this.eventSubscriber)
            }
            ,
            l.prototype.getConvenientName = function(l) {
                return [l.firstName, l.patronymic].join(" ")
            }
            ,
            l.prototype.getCurrencySign = function(l) {
                switch (l.currency) {
                case au.RUR:
                    return "&#x20BD;";
                case au.KZT:
                    return "&#x20B8;";
                case au.AZN:
                    return "&#x20BC;";
                case au.UZS:
                    return "сум";
                case au.KGS:
                    return "сом";
                case au.BYR:
                    return "Br"
                }
            }
            ,
            l.prototype.cleanerStateToString = function(l) {
                switch (l) {
                case Eu.ST_CLEANER_IDLE:
                    return "Полный бак";
                case Eu.ST_CLEANER_FILTER:
                    return "Фильтрация";
                case Eu.ST_CLEANER_FLUSH:
                    return "Промывка";
                case Eu.ST_CLEANER_EMPTY:
                    return "Нет воды";
                case Eu.ST_CLEANER_FLOOD:
                    return "Затопление";
                case Eu.ST_CLEANER_MENU:
                    return "Настройка";
                default:
                    return "Неизвестно"
                }
            }
            ,
            l.prototype.makeDeviceInfo = function(l, n, e) {
                return void 0 === e && (e = 2),
                new uu("","",l,0,Number(n.toFixed(e)))
            }
            ,
            l
        }()
          , Au = [['.dashboard[_ngcontent-%COMP%]{padding-top:20px;background:#fff;min-height:calc(100vh - 219px)}.dashboard_header-device_id[_ngcontent-%COMP%]{padding:3px 5px;height:40px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dashboard_header-device_address[_ngcontent-%COMP%]{overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;padding-bottom:10px;padding-top:5px}.dashboard_header-device_status[_ngcontent-%COMP%]{opacity:1!important;line-height:14px}.dashboard_header-device_edit[_ngcontent-%COMP%]{padding-left:0}.dashboard_graph-legend_money[_ngcontent-%COMP%]{color:#f69;padding-right:5px}.dashboard_graph-legend_sold[_ngcontent-%COMP%]{color:#039;padding-right:5px}.dashboard_graph-term_button[_ngcontent-%COMP%]{flex-grow:1;padding:2px}.dashboard_device-list_selected[_ngcontent-%COMP%]{background:#e0ffff!important}.dashboard-sales_wrapper[_ngcontent-%COMP%]:after{display:block;background:#fff;position:sticky;content:"";height:20px;bottom:0;background:linear-gradient(transparent,#fffdec)}.dashboard-sales_wrapper[_ngcontent-%COMP%]{max-height:100px;overflow:hidden}.no-device-alert[_ngcontent-%COMP%]{margin-top:150px;margin-bottom:100px}.dashboard_graph-term_selector[_ngcontent-%COMP%]{margin-top:10px;font-style:normal}.dashboard-sales_tooltip[_ngcontent-%COMP%]{margin-left:5px}.dashboard_device_list-alerts[_ngcontent-%COMP%]{padding:.75rem 5px;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.dashboard_device_list-item_address[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;line-height:15px;max-height:45px;margin-bottom:10px;display:block;padding:.75rem 5px}.dashboard_device_list-header[_ngcontent-%COMP%], .dashboard_device_list-item_imei[_ngcontent-%COMP%]{padding:.75rem 5px}.coin[_ngcontent-%COMP%]{background-color:#ff0;width:22px;border:2px solid #ff8c00;border-radius:10px;color:#ff8c00;margin-left:-10px}.bill[_ngcontent-%COMP%], .coin[_ngcontent-%COMP%]{display:inline-block;height:22px;position:relative;top:0;left:0;padding:1px 1px 0 0;line-height:15px;font-size:small;font-weight:700}.bill[_ngcontent-%COMP%]{background-color:#90ee90;width:30px;border:2px solid #006400;color:#006400;margin-left:-15px}@media only screen and (max-width:480px){.slogan_cut[_ngcontent-%COMP%]{display:none}}.dashboard-short_list_header[_ngcontent-%COMP%]{background:#6c757d;font-size:1.5rem;color:#fff;padding-left:20px;padding-bottom:5px;margin-top:5px}.dashboard-short_list_body[_ngcontent-%COMP%]{border:1px solid #d9d9d9;background:#fffdec;margin-bottom:10px;padding:5px 20px}.dashboard_graph-legend_item[_ngcontent-%COMP%]{white-space:nowrap}']]
          , Nu = u["ɵcrt"]({
            encapsulation: 0,
            styles: Au,
            data: {}
        });
        function Fu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нет связи "]))], null, null)
        }
        function Lu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Бак пуст "]))], null, null)
        }
        function $u(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нет продаж "]))], null, null)
        }
        function Uu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-check text-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" В работе "]))], null, null)
        }
        function qu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 30, "tr", [["class", "dashboard-device_list_item"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.selectDevice(l.context.$implicit) && u);
                return u
            }, null, null)), u["ɵdid"](1, 278528, null, 0, h.j, [u.IterableDiffers, u.KeyValueDiffers, u.ElementRef, u.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 0, "td", [["class", "dashboard_device_list-item_imei"]], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "td", [["class", "dashboard_device_list-item_address"]], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 14, "td", [["class", "dashboard_device_list-alerts"]], null, null, null, null, null)), u["ɵdid"](8, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Fu)), u["ɵdid"](11, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Lu)), u["ɵdid"](14, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, $u)), u["ɵdid"](17, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Uu)), u["ɵdid"](20, 16384, null, 0, h.q, [u.ViewContainerRef, u.TemplateRef, h.o], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](23, 0, null, null, 6, "td", [["align", "center"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](24, 0, null, null, 5, "a", [["data-toggle", "modal"], ["title", "Удалить автомат"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 25).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                return t
            }, null, null)), u["ɵdid"](25, 671744, null, 0, f.o, [f.l, f.a, h.i], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](26, {
                popup: 0
            }), u["ɵpod"](27, {
                outlets: 0
            }), u["ɵpad"](28, 2), (l()(),
            u["ɵeld"](29, 0, null, null, 0, "i", [["class", "fa fa-window-close text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, "dashboard-device_list_item", u["ɵinlineInterpolate"](1, "", e.selected.id == n.context.$implicit.id ? "dashboard_device-list_selected" : "", "")),
                l(n, 8, 0, e.getSingleAlert(n.context.$implicit)),
                l(n, 11, 0, e.alertTypes.NO_LINK),
                l(n, 14, 0, e.alertTypes.TANK_EMPTY),
                l(n, 17, 0, e.alertTypes.NO_SALES);
                var t = l(n, 28, 0, "/", l(n, 27, 0, l(n, 26, 0, "device/" + n.context.$implicit.id + "/delete")));
                l(n, 25, 0, t)
            }, function(l, n) {
                l(n, 3, 0, n.context.$implicit.deviceId),
                l(n, 5, 0, n.context.$implicit.address),
                l(n, 24, 0, u["ɵnov"](n, 25).target, u["ɵnov"](n, 25).href)
            })
        }
        function zu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [["class", "btn btn-danger flex-grow-1 disabled dashboard_header-device_status"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нет связи "]))], null, null)
        }
        function Bu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [["class", "btn btn-danger flex-grow-1 disabled dashboard_header-device_status"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Бак пуст "]))], null, null)
        }
        function Ku(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, [" ", ""]))], null, function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.cleanerStateToString(e.selected.lastCleanerStatus.status))
            })
        }
        function Hu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 8, "span", [["class", "btn btn-warning flex-grow-1 disabled dashboard_header-device_status"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нет продаж"])), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ku)), u["ɵdid"](7, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 7, 0, n.component.selected.lastCleanerStatus)
            }, null)
        }
        function Zu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, [" ", ""]))], null, function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.cleanerStateToString(e.selected.lastCleanerStatus.status))
            })
        }
        function Wu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 8, "span", [["class", "btn btn-success flex-grow-1 disabled dashboard_header-device_status"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" В работе"])), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Zu)), u["ɵdid"](7, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 7, 0, n.component.selected.lastCleanerStatus)
            }, null)
        }
        function Yu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 5, "span", [["class", "lead text-white bg-success rounded pb-1 pl-3 pr-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", " "])), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 3, 0, e.selected.lastStatus.totalMoney),
                l(n, 4, 0, e.getCurrencySign(e.selected))
            })
        }
        function Qu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, ["", " л"]))], null, function(l, n) {
                l(n, 1, 0, n.component.selected.lastStatus.totalSold)
            })
        }
        function Xu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "info-badge", [], null, null, null, ru, du)), u["ɵdid"](1, 114688, null, 0, ou, [], {
                info: [0, "info"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.makeDeviceInfo("tds", e.selected.lastCleanerStatus.tds, 0))
            }, null)
        }
        function Gu(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "info-badge", [], null, null, null, ru, du)), u["ɵdid"](1, 114688, null, 0, ou, [], {
                info: [0, "info"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.makeDeviceInfo("temperature", e.selected.lastStatus.temperature, 1))
            }, null)
        }
        function Ju(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "info-badge", [], null, null, null, ru, du)), u["ɵdid"](1, 114688, null, 0, ou, [], {
                info: [0, "info"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            }, null)
        }
        function lt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "bill"]], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            })
        }
        function nt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "span", [["class", "dashboard-sales_tooltip"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, lt)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["   "]))], function(l, n) {
                l(n, 3, 0, n.component.expandCoins(n.context.$implicit))
            }, null)
        }
        function et(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["   "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, nt)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.parent.context.$implicit.bills)
            }, null)
        }
        function ut(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "coin"]], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            })
        }
        function tt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "span", [["class", "dashboard-sales_tooltip"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ut)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["  "]))], function(l, n) {
                l(n, 3, 0, n.component.expandCoins(n.context.$implicit))
            }, null)
        }
        function it(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, tt)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.parent.context.$implicit.coins)
            }, null)
        }
        function ot(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нет информации о монетах "]))], null, null)
        }
        function dt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, et)), u["ɵdid"](2, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, it)), u["ɵdid"](5, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ot)), u["ɵdid"](8, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.bills && n.parent.context.$implicit.bills.length > 0),
                l(n, 5, 0, n.parent.context.$implicit.coins && n.parent.context.$implicit.coins.length > 0),
                l(n, 8, 0, !(n.parent.context.$implicit.bills && n.parent.context.$implicit.bills.length > 0 || n.parent.context.$implicit.coins && n.parent.context.$implicit.coins.length > 0))
            }, null)
        }
        function rt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 16777216, null, null, 1, "i", [["class", "fa fa-money text-success"], ["placement", "right"]], null, null, null, null, null)), u["ɵdid"](3, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](4, null, ["  ", " – ", "л./", ""])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, "right", u["ɵnov"](n.parent, 5))
            }, function(l, n) {
                var e = n.component
                  , u = e.formatTimestamp(n.parent.context.$implicit.timestamp)
                  , t = n.parent.context.$implicit.quantity.toFixed(3)
                  , i = n.parent.context.$implicit.amount.toFixed(2);
                l(n, 4, 0, u, t, i),
                l(n, 5, 0, e.getCurrencySign(e.selected))
            })
        }
        function at(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 5, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-credit-card text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["  ", " – ", "л./", ""])), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component
                  , u = e.formatTimestamp(n.parent.context.$implicit.timestamp)
                  , t = n.parent.context.$implicit.quantity.toFixed(3)
                  , i = n.parent.context.$implicit.amount.toFixed(2);
                l(n, 3, 0, u, t, i),
                l(n, 4, 0, e.getCurrencySign(e.selected))
            })
        }
        function st(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 16777216, null, null, 1, "i", [["class", "fa fa-cloud-upload text-danger"], ["placement", "right"]], null, null, null, null, null)), u["ɵdid"](3, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](4, null, ["  ", " – ", ""])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, "right", u["ɵnov"](n.parent, 5))
            }, function(l, n) {
                var e = n.component;
                l(n, 4, 0, e.formatTimestamp(n.parent.context.$implicit.timestamp), n.parent.context.$implicit.amount),
                l(n, 5, 0, e.getCurrencySign(e.selected))
            })
        }
        function ct(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 16, "tr", [["class", "dashboard-sales_list_item"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 13, "td", [], null, null, null, null, null)), u["ɵdid"](3, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, [["saleTooltip", 2]], null, 0, null, dt)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, rt)), u["ɵdid"](8, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, at)), u["ɵdid"](11, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, st)), u["ɵdid"](14, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 3, 0, n.context.$implicit.paymentType),
                l(n, 8, 0, e.paymentType.CASH),
                l(n, 11, 0, e.paymentType.CASHLESS),
                l(n, 14, 0, e.paymentType.DEPO)
            }, null)
        }
        function pt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [["class", "dashboard-sales_tooltip"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "div", [["class", "coin"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](4, null, [" – ", "шт."]))], null, function(l, n) {
                l(n, 3, 0, n.context.$implicit.value),
                l(n, 4, 0, n.context.$implicit.amount)
            })
        }
        function ft(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, pt)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.parent.context.$implicit.coins)
            }, null)
        }
        function mt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [["class", "dashboard-sales_tooltip"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["   "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "div", [["class", "bill"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](4, null, [" – ", "шт."]))], null, function(l, n) {
                l(n, 3, 0, n.context.$implicit.value),
                l(n, 4, 0, n.context.$implicit.amount)
            })
        }
        function gt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, mt)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.parent.context.$implicit.bills)
            }, null)
        }
        function ht(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нет информации о монетах "]))], null, null)
        }
        function vt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ft)), u["ɵdid"](2, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, gt)), u["ɵdid"](5, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ht)), u["ɵdid"](8, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.coins && n.parent.context.$implicit.coins.length > 0),
                l(n, 5, 0, n.parent.context.$implicit.bills && n.parent.context.$implicit.bills.length > 0),
                l(n, 8, 0, !(n.parent.context.$implicit.coins && n.parent.context.$implicit.coins.length > 0 || n.parent.context.$implicit.bills && n.parent.context.$implicit.bills.length > 0))
            }, null)
        }
        function bt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 14, "tr", [["class", "dashboard-sales_list_item"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, [["encashTooltip", 2]], null, 0, null, vt)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 16777216, null, null, 2, "i", [["class", "fa fa-truck text-warning"], ["placement", "right"]], null, null, null, null, null)), u["ɵdid"](7, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](9, null, [" ", " –  "])), (l()(),
            u["ɵeld"](10, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](11, null, ["", ""])), (l()(),
            u["ɵeld"](12, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 7, 0, "right", u["ɵnov"](n, 2))
            }, function(l, n) {
                var e = n.component;
                l(n, 9, 0, e.formatTimestamp(n.context.$implicit.timestamp)),
                l(n, 11, 0, n.context.$implicit.amount),
                l(n, 12, 0, e.getCurrencySign(e.selected))
            })
        }
        function yt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 1, "i", [["class", "fa fa-exclamation-triangle text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](3, null, ["", " – Нет связи"]))], null, function(l, n) {
                l(n, 3, 0, n.component.formatTimestamp(n.parent.parent.context.$implicit.timestamp))
            })
        }
        function Ct(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 1, "i", [["class", "fa fa-exclamation-triangle text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](3, null, ["", " – Нет продаж"]))], null, function(l, n) {
                l(n, 3, 0, n.component.formatTimestamp(n.parent.parent.context.$implicit.timestamp))
            })
        }
        function Rt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 1, "i", [["class", "fa fa-exclamation-triangle text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](3, null, ["", " – Бак пуст"]))], null, function(l, n) {
                l(n, 3, 0, n.component.formatTimestamp(n.parent.parent.context.$implicit.timestamp))
            })
        }
        function wt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, yt)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ct)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Rt)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, "NO_LINK" == n.parent.context.$implicit.type),
                l(n, 6, 0, "NO_SALES" == n.parent.context.$implicit.type),
                l(n, 9, 0, "TANK_EMPTY" == n.parent.context.$implicit.type)
            }, null)
        }
        function It(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 5, "tr", [["class", "dashboard-sales_list_item"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 2, null, wt)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), u["ɵpad"](4, 3), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = 1 == n.context.$implicit.active && l(n, 4, 0, "NO_LINK", "NO_SALES", "TANK_EMPTY").indexOf(n.context.$implicit.type) > -1;
                l(n, 3, 0, e)
            }, null)
        }
        function xt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 384, "div", [["class", "row dashboard"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 75, "section", [["class", "col-12 col-lg-4 order-lg-1 left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 5, "label", [["for", "inputAddress"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 2, "h4", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-smile-o text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Умный поиск"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 17, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 14, "div", [["class", "col-12"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 0, null, null, 11, "div", [["class", "input-group btn-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 5, "input", [["class", "form-control"], ["id", "inputAddress"], ["name", "inputAddress"], ["placeholder", "Начните вводить адрес автомата или IMEI..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 18)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 18).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 18)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 18)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.inputAddress = e) && t);
                return t
            }, null, null)), u["ɵdid"](18, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](20, 671744, null, 0, tl.p, [[8, null], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](22, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 1, "button", [["class", "btn"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clearFilter() && u);
                return u
            }, null, null)), (l()(),
            u["ɵeld"](25, 0, null, null, 0, "i", [["class", "fa fa-close"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](30, 0, null, null, 28, "table", [["class", "table table-striped table-hover small dashboard-device_list"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 19, "thead", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 1, "th", [["class", "dashboard_device_list-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["IMEI"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](39, 0, null, null, 3, "th", [["class", "dashboard_device_list-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Адрес"])), (l()(),
            u["ɵeld"](41, 0, null, null, 1, "span", [["class", "slogan_cut"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" автомата"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](44, 0, null, null, 1, "th", [["class", "dashboard_device_list-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Состояние"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](47, 0, null, null, 2, "th", [["class", "dashboard_device_list-header"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](48, 0, null, null, 1, "span", [["class", "slogan_cut"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Удалить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](53, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, qu)), u["ɵdid"](56, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](60, 0, null, null, 13, "div", [["align", "right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](62, 0, null, null, 10, "span", [["data-placement", "left"], ["data-toggle", "tooltip"], ["title", "Добавить (зарегистрировать) автомат"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](64, 0, null, null, 7, "button", [["class", "btn btn-primary btn-sm mb-3"], ["data-target", "#addAvtomat"], ["data-toggle", "modal"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 65).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](65, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](66, {
                popup: 0
            }), u["ɵpod"](67, {
                outlets: 0
            }), u["ɵpad"](68, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](70, 0, null, null, 0, "i", [["class", "fa fa-plus-square"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Добавить автомат"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](75, 0, null, null, 1, "div", [["class", "hr-1"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](76, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](79, 0, null, null, 304, "section", [["class", "col-12 col-lg-8 order-lg-2 right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](81, 0, null, null, 64, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](83, 0, null, null, 4, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](85, 0, null, null, 1, "div", [["class", "dashboard_header-device_id badge-info lead rounded text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](86, null, [" ID: ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](89, 0, null, null, 1, "div", [["class", "col-sm-5 dashboard_header-device_address"]], null, null, null, null, null)), (l()(),
            u["ɵted"](90, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](92, 0, null, null, 52, "div", [["class", "col-sm-4 d-flex btn-group text-white"]], null, null, null, null, null)), u["ɵdid"](93, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, zu)), u["ɵdid"](96, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Bu)), u["ɵdid"](99, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Hu)), u["ɵdid"](102, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Wu)), u["ɵdid"](105, 16384, null, 0, h.q, [u.ViewContainerRef, u.TemplateRef, h.o], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](107, 0, null, null, 36, "div", [["class", "btn-group dashboard_header-device_edit d-flex flex-grow-0"], ["ngbDropdown", ""], ["placement", "bottom-right"]], [[2, "show", null]], null, null, null, null)), u["ɵdid"](108, 212992, null, 2, v.u, [u.ChangeDetectorRef, v.v, h.c, u.NgZone], {
                placement: [0, "placement"]
            }, null), u["ɵqud"](335544320, 2, {
                _menu: 0
            }), u["ɵqud"](335544320, 3, {
                _anchor: 0
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](112, 0, null, null, 8, "button", [["aria-haspopup", "true"], ["class", "btn btn-primary btn-sm dropdown-toggle"], ["id", "editDropdown"], ["ngbDropdownToggle", ""], ["type", "button"]], [[1, "aria-expanded", 0]], [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 113).toggleOpen() && t);
                return t
            }, null, null)), u["ɵdid"](113, 16384, null, 0, v.La, [v.u, u.ElementRef], null, null), u["ɵprd"](2048, [[3, 4]], v.Ka, null, [v.La]), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](116, 0, null, null, 3, "span", [["data-original-title", "Изменить профиль, техн. настройки и видимость этого автомата"], ["data-placement", "left"], ["data-toggle", "tooltip"], ["title", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](118, 0, null, null, 0, "i", [["class", "fa fa-pencil-square-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Редактировать"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](122, 0, null, null, 20, "div", [["aria-labelledby", "editDropdown"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], null, null, null, null)), u["ɵdid"](123, 16384, [[2, 4]], 0, v.Ja, [v.u, u.ElementRef, u.Renderer2], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](125, 0, null, null, 7, "a", [["class", "dropdown-item"], ["data-toggle", "modal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 126).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                return t
            }, null, null)), u["ɵdid"](126, 671744, null, 0, f.o, [f.l, f.a, h.i], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](127, {
                popup: 0
            }), u["ɵpod"](128, {
                outlets: 0
            }), u["ɵpad"](129, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](131, 0, null, null, 0, "i", [["class", "fa fa-list-ul"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Профиль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](134, 0, null, null, 7, "a", [["class", "dropdown-item"], ["data-toggle", "modal"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 135).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && t);
                return t
            }, null, null)), u["ɵdid"](135, 671744, null, 0, f.o, [f.l, f.a, h.i], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](136, {
                popup: 0
            }), u["ɵpod"](137, {
                outlets: 0
            }), u["ɵpad"](138, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](140, 0, null, null, 0, "i", [["class", "fa fa-wrench"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Техн. настройки"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](147, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](149, 0, null, null, 2, "h4", [["class", "mt-2"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](150, 0, null, null, 0, "i", [["class", "fa fa-bar-chart-o text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Динамика продаж"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](153, 0, null, null, 82, "div", [["class", "row"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](155, 0, null, null, 5, "div", [["class", "col-12 col-md-9 col-xl-8 mt-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](157, 0, null, null, 2, "canvas", [["baseChart", ""], ["height", "100%"]], null, null, null, null, null)), u["ɵdid"](158, 737280, [[1, 4]], 0, su.BaseChartDirective, [u.ElementRef], {
                datasets: [0, "datasets"],
                labels: [1, "labels"],
                options: [2, "options"],
                chartType: [3, "chartType"],
                colors: [4, "colors"],
                legend: [5, "legend"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](162, 0, null, null, 72, "div", [["class", "col-12 col-md-3 col-xl-4 mt-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](164, 0, null, null, 25, "div", [["class", "col dashboard_graph-legend"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](166, 0, null, null, 10, "div", [["class", "dashboard_graph-legend_item"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](168, 0, null, null, 1, "span", [["class", "dashboard_graph-legend_money"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](169, 0, null, null, 0, "i", [["class", "fa fa-square"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](171, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Выручка:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Yu)), u["ɵdid"](175, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](178, 0, null, null, 10, "div", [["class", "dashboard_graph-legend_item"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](180, 0, null, null, 1, "span", [["class", "dashboard_graph-legend_sold"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](181, 0, null, null, 0, "i", [["class", "fa fa-square"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](183, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Продано:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Qu)), u["ɵdid"](187, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](191, 0, null, null, 30, "div", [["class", "col dashboard_graph-term_selector btn-group btn-group-toggle"], ["name", "term"], ["ngbRadioGroup", ""], ["role", "group"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "ngModelChange" === n && (u = !1 !== (t.term = e) && u);
                "change" === n && (u = !1 !== t.selectTerm(t.term) && u);
                return u
            }, null, null)), u["ɵdid"](192, 16384, null, 0, v.J, [], {
                name: [0, "name"]
            }, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [v.J]), u["ɵdid"](194, 671744, null, 0, tl.p, [[8, null], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](196, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](198, 0, null, null, 6, "label", [["class", "btn-outline-secondary dashboard_graph-term_button"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), u["ɵdid"](199, 16384, null, 0, v.Z, [], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](201, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function(l, n, e) {
                var t = !0;
                "change" === n && (t = !1 !== u["ɵnov"](l, 202).onChange() && t);
                "focus" === n && (t = !1 != (u["ɵnov"](l, 202).focused = !0) && t);
                "blur" === n && (t = !1 != (u["ɵnov"](l, 202).focused = !1) && t);
                return t
            }, null, null)), u["ɵdid"](202, 147456, null, 0, v.Aa, [v.J, v.Z, u.Renderer2, u.ElementRef], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵeld"](203, 0, null, null, 0, "i", [["class", "fa fa-calendar-check-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" День "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](206, 0, null, null, 6, "label", [["class", "btn-outline-secondary dashboard_graph-term_button"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), u["ɵdid"](207, 16384, null, 0, v.Z, [], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](209, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function(l, n, e) {
                var t = !0;
                "change" === n && (t = !1 !== u["ɵnov"](l, 210).onChange() && t);
                "focus" === n && (t = !1 != (u["ɵnov"](l, 210).focused = !0) && t);
                "blur" === n && (t = !1 != (u["ɵnov"](l, 210).focused = !1) && t);
                return t
            }, null, null)), u["ɵdid"](210, 147456, null, 0, v.Aa, [v.J, v.Z, u.Renderer2, u.ElementRef], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵeld"](211, 0, null, null, 0, "i", [["class", "fa fa-moon-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Месяц "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](214, 0, null, null, 6, "label", [["class", "btn-outline-secondary dashboard_graph-term_button"], ["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), u["ɵdid"](215, 16384, null, 0, v.Z, [], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](217, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function(l, n, e) {
                var t = !0;
                "change" === n && (t = !1 !== u["ɵnov"](l, 218).onChange() && t);
                "focus" === n && (t = !1 != (u["ɵnov"](l, 218).focused = !0) && t);
                "blur" === n && (t = !1 != (u["ɵnov"](l, 218).focused = !1) && t);
                return t
            }, null, null)), u["ɵdid"](218, 147456, null, 0, v.Aa, [v.J, v.Z, u.Renderer2, u.ElementRef], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵeld"](219, 0, null, null, 0, "i", [["class", "fa fa-calendar"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Год "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](223, 0, null, null, 10, "div", [["class", "p-3"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Xu)), u["ɵdid"](226, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Gu)), u["ɵdid"](229, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ju)), u["ɵdid"](232, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](237, 0, null, null, 145, "div", [["class", "row small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](239, 0, null, null, 57, "div", [["class", "col-12 col-sm-6 col-xl-4 mt-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](241, 0, null, null, 2, "div", [["class", "dashboard-short_list_header"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](242, 0, null, null, 0, "i", [["class", "fa fa-shopping-cart text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Продажи"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](245, 0, null, null, 50, "div", [["class", "dashboard-short_list_body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](247, 0, null, null, 6, "div", [["class", "form-check form-check-inline"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](249, 0, null, null, 3, "label", [["class", "form-check-label"], ["for", "saleCash"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](251, 0, null, null, 0, "i", [["class", "fa fa-money text-success"], ["id", "saleCash"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Наличн. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](255, 0, null, null, 6, "div", [["class", "form-check-inline"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](257, 0, null, null, 3, "label", [["class", "form-check-label"], ["for", "saleCashless"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](259, 0, null, null, 0, "i", [["class", "fa fa-credit-card text-warning text-center"], ["id", "saleCashless"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Картой "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](263, 0, null, null, 6, "div", [["class", "form-check-inline"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](265, 0, null, null, 3, "label", [["class", "form-check-label"], ["for", "saleDepo"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](267, 0, null, null, 0, "i", [["class", "fa fa-cloud-upload text-danger text-center"], ["id", "saleDepo"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пополн. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](271, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](273, 0, null, null, 8, "div", [["class", "dashboard-sales_wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](275, 0, null, null, 5, "table", [["class", "w-100"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](277, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ct)), u["ɵdid"](279, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](283, 16777216, null, null, 11, "span", [["ngbTooltip", "Показать весь список продаж"], ["placement", "top"]], null, null, null, null, null)), u["ɵdid"](284, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](286, 0, null, null, 7, "button", [["class", "btn btn-primary btn-sm mt-3 mb-2"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 287).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](287, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](288, {
                popup: 0
            }), u["ɵpod"](289, {
                outlets: 0
            }), u["ɵpad"](290, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](292, 0, null, null, 0, "i", [["class", "fa fa-arrows-v"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Показать все"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](298, 0, null, null, 41, "div", [["class", "col-12 col-sm-6 col-xl-4 mt-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](300, 0, null, null, 3, "div", [["class", "dashboard-short_list_header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](302, 0, null, null, 0, "i", [["class", "fa fa-truck text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Инкассации"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](305, 0, null, null, 33, "div", [["class", "dashboard-short_list_body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](307, 0, null, null, 5, "div", [["class", "text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](309, 0, null, null, 0, "i", [["class", "fa fa-money text-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Купюрами / "])), (l()(),
            u["ɵeld"](311, 0, null, null, 0, "i", [["class", "fa fa-database text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Монетами "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](314, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](316, 0, null, null, 8, "div", [["class", "dashboard-sales_wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](318, 0, null, null, 5, "table", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](320, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵand"](16777216, null, null, 1, null, bt)), u["ɵdid"](322, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](326, 16777216, null, null, 11, "span", [["ngbTooltip", "Показать весь список инкассаций"], ["placement", "top"]], null, null, null, null, null)), u["ɵdid"](327, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](329, 0, null, null, 7, "button", [["class", "btn btn-primary btn-sm mt-3 mb-2"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 330).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](330, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](331, {
                popup: 0
            }), u["ɵpod"](332, {
                outlets: 0
            }), u["ɵpad"](333, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](335, 0, null, null, 0, "i", [["class", "fa fa-arrows-v"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Показать все"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](341, 0, null, null, 40, "div", [["class", "col-12 col-sm-6 col-xl-4 mt-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](343, 0, null, null, 2, "div", [["class", "dashboard-short_list_header"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](344, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Аварии"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](347, 0, null, null, 33, "div", [["class", "dashboard-short_list_body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](349, 0, null, null, 5, "div", [["class", "text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](351, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-exclamation-triangle text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Критично!   "])), (l()(),
            u["ɵeld"](353, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-exclamation-triangle text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Внимание! "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](356, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](358, 0, null, null, 8, "div", [["class", "dashboard-sales_wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](360, 0, null, null, 5, "table", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](362, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵand"](16777216, null, null, 1, null, It)), u["ɵdid"](364, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](368, 16777216, null, null, 11, "span", [["ngbTooltip", "Показать весь список аварий"], ["placement", "top"]], null, null, null, null, null)), u["ɵdid"](369, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](371, 0, null, null, 7, "button", [["class", "btn btn-primary btn-sm mt-3 mb-2"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 372).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](372, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](373, {
                popup: 0
            }), u["ɵpod"](374, {
                outlets: 0
            }), u["ɵpad"](375, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](377, 0, null, null, 0, "i", [["class", "fa fa-arrows-v"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Показать все"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 20, 0, "inputAddress", e.inputAddress),
                l(n, 56, 0, e.filterDevices());
                var u = l(n, 68, 0, "/", l(n, 67, 0, l(n, 66, 0, "device-new")));
                l(n, 65, 0, u),
                l(n, 93, 0, e.getSingleAlert(e.selected)),
                l(n, 96, 0, e.alertTypes.NO_LINK),
                l(n, 99, 0, e.alertTypes.TANK_EMPTY),
                l(n, 102, 0, e.alertTypes.NO_SALES);
                l(n, 108, 0, "bottom-right");
                var t = l(n, 129, 0, "/", l(n, 128, 0, l(n, 127, 0, "device/" + e.selected.id + "/edit")));
                l(n, 126, 0, t);
                var i = l(n, 138, 0, "/", l(n, 137, 0, l(n, 136, 0, "settings/" + e.selected.id)));
                l(n, 135, 0, i),
                l(n, 158, 0, e.chartData, e.chartLabels, e.chartOptions, e.chartType, e.chartColors, e.chartLegend),
                l(n, 175, 0, e.selected.lastStatus),
                l(n, 187, 0, e.selected.lastStatus);
                l(n, 192, 0, "term");
                l(n, 194, 0, "term", e.term),
                l(n, 202, 0, e.DAYS),
                l(n, 210, 0, e.MONTHS),
                l(n, 218, 0, e.YEARS),
                l(n, 226, 0, e.selected.lastCleanerStatus),
                l(n, 229, 0, e.selected.lastStatus && e.selected.lastStatus.temperature && 999 != e.selected.lastStatus.temperature),
                l(n, 232, 0, e.selected.info),
                l(n, 279, 0, e.sales);
                l(n, 284, 0, "top", "Показать весь список продаж");
                var o = l(n, 290, 0, "/", l(n, 289, 0, l(n, 288, 0, "sales-list/" + e.selected.deviceId + "/" + e.selected.timeZone)));
                l(n, 287, 0, o),
                l(n, 322, 0, e.encash);
                l(n, 327, 0, "top", "Показать весь список инкассаций");
                var d = l(n, 333, 0, "/", l(n, 332, 0, l(n, 331, 0, "encash-list/" + e.selected.deviceId + "/" + e.selected.timeZone)));
                l(n, 330, 0, d),
                l(n, 364, 0, e.alerts);
                l(n, 369, 0, "top", "Показать весь список аварий");
                var r = l(n, 375, 0, "/", l(n, 374, 0, l(n, 373, 0, "alerts-list/" + e.selected.deviceId + "/" + e.selected.timeZone)));
                l(n, 372, 0, r)
            }, function(l, n) {
                var e = n.component;
                l(n, 17, 0, u["ɵnov"](n, 22).ngClassUntouched, u["ɵnov"](n, 22).ngClassTouched, u["ɵnov"](n, 22).ngClassPristine, u["ɵnov"](n, 22).ngClassDirty, u["ɵnov"](n, 22).ngClassValid, u["ɵnov"](n, 22).ngClassInvalid, u["ɵnov"](n, 22).ngClassPending),
                l(n, 24, 0, !e.inputAddress),
                l(n, 86, 0, e.selected.deviceId),
                l(n, 90, 0, e.selected.address),
                l(n, 107, 0, u["ɵnov"](n, 108).isOpen()),
                l(n, 112, 0, u["ɵnov"](n, 113).dropdown.isOpen());
                l(n, 122, 0, !0, u["ɵnov"](n, 123).dropdown.isOpen(), u["ɵnov"](n, 123).placement),
                l(n, 125, 0, u["ɵnov"](n, 126).target, u["ɵnov"](n, 126).href),
                l(n, 134, 0, u["ɵnov"](n, 135).target, u["ɵnov"](n, 135).href),
                l(n, 191, 0, u["ɵnov"](n, 196).ngClassUntouched, u["ɵnov"](n, 196).ngClassTouched, u["ɵnov"](n, 196).ngClassPristine, u["ɵnov"](n, 196).ngClassDirty, u["ɵnov"](n, 196).ngClassValid, u["ɵnov"](n, 196).ngClassInvalid, u["ɵnov"](n, 196).ngClassPending);
                l(n, 198, 0, !0, u["ɵnov"](n, 199).active, u["ɵnov"](n, 199).disabled, u["ɵnov"](n, 199).focused),
                l(n, 201, 0, u["ɵnov"](n, 202).checked, u["ɵnov"](n, 202).disabled, u["ɵnov"](n, 202).nameAttr);
                l(n, 206, 0, !0, u["ɵnov"](n, 207).active, u["ɵnov"](n, 207).disabled, u["ɵnov"](n, 207).focused),
                l(n, 209, 0, u["ɵnov"](n, 210).checked, u["ɵnov"](n, 210).disabled, u["ɵnov"](n, 210).nameAttr);
                l(n, 214, 0, !0, u["ɵnov"](n, 215).active, u["ɵnov"](n, 215).disabled, u["ɵnov"](n, 215).focused),
                l(n, 217, 0, u["ɵnov"](n, 218).checked, u["ɵnov"](n, 218).disabled, u["ɵnov"](n, 218).nameAttr)
            })
        }
        function St(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 36, "div", [["class", "row dashboard"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "section", [["class", "col-12 col-sm-2 col-md-3 col-xl-4"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 29, "section", [["class", "col-12 col-sm-8 col-md-6 col-xl-4"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 26, "div", [["class", "no-device-alert"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 8, "div", [["class", "alert alert-warning"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](9, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle"]], null, null, null, null, null)), (l()(),
            u["ɵted"](10, null, ["   Уважаемый ", ", "])), (l()(),
            u["ɵeld"](11, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["вы успешно зарегистрировались"])), (l()(),
            u["ɵted"](-1, null, [" в системе мониторинга «Первая вода». У вас пока нет ни одного автомата для отображения статистики. "])), (l()(),
            u["ɵeld"](14, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Добавьте свои автоматы"])), (l()(),
            u["ɵted"](-1, null, ["."])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 13, "div", [["align", "right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 10, "span", [["data-placement", "left"], ["data-toggle", "tooltip"], ["title", "Добавить (зарегистрировать) автомат"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](22, 0, null, null, 7, "button", [["class", "btn btn-primary btn-sm mb-3"], ["data-target", "#addAvtomat"], ["data-toggle", "modal"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 23).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](23, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](24, {
                popup: 0
            }), u["ɵpod"](25, {
                outlets: 0
            }), u["ɵpad"](26, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 0, "i", [["class", "fa fa-plus-square"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Добавить автомат"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](35, 0, null, null, 0, "section", [["class", "col-12 col-sm-2 col-md-3 col-xl-4"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = l(n, 26, 0, "/", l(n, 25, 0, l(n, 24, 0, "device-new")));
                l(n, 23, 0, e)
            }, function(l, n) {
                var e = n.component;
                l(n, 10, 0, e.getConvenientName(e.currentAccount))
            })
        }
        function Tt(l) {
            return u["ɵvid"](0, [u["ɵqud"](671088640, 1, {
                chart: 0
            }), (l()(),
            u["ɵand"](16777216, null, null, 1, null, xt)), u["ɵdid"](2, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, St)), u["ɵdid"](5, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 2, 0, e.selected),
                l(n, 5, 0, !e.selected && e.currentAccount && e.canShowDashboard)
            }, null)
        }
        var kt = u["ɵccf"]("jhi-dashboard", Vu, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-dashboard", [], null, null, null, Tt, Nu)), u["ɵdid"](1, 245760, null, 0, Vu, [cu, wu, mu, Su, Mu, ju, q.a, M, f.l, v.z, R.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Dt = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Et(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Профиль автомата"]))], null, null)
        }
        function Mt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Добавить (зарегистрировать) автомат"]))], null, null)
        }
        function Pt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-success"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Автомат успешно зарегистрирован."]))], null, null)
        }
        function _t(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Регистрация не удалась. Проверьте правильность заполнения и попробуйте еще раз позже."]))], null, null)
        }
        function Ot(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Автомат с таким ID уже зарегистрирован и принадлежит другому пользователю."]))], null, null)
        }
        function jt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" ID автомата должен состоять из 15 цифр. "]))], null, null)
        }
        function Vt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, jt)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 80).errors)
            }, null)
        }
        function At(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нужно ввести адрес. "]))], null, null)
        }
        function Nt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, At)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 63).errors)
            }, null)
        }
        function Ft(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "info-badge", [], null, null, null, ru, du)), u["ɵdid"](1, 114688, null, 0, ou, [], {
                info: [0, "info"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.makeDeviceInfo("tds", e.device.lastCleanerStatus.tds, 0))
            }, null)
        }
        function Lt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "info-badge", [], null, null, null, ru, du)), u["ɵdid"](1, 114688, null, 0, ou, [], {
                info: [0, "info"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.makeDeviceInfo("temperature", e.device.lastStatus.temperature, 1))
            }, null)
        }
        function $t(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "info-badge", [], null, null, null, ru, du)), u["ɵdid"](1, 114688, null, 0, ou, [], {
                info: [0, "info"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            }, null)
        }
        function Ut(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ft)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Lt)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, $t)), u["ɵdid"](9, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 3, 0, e.device.lastCleanerStatus),
                l(n, 6, 0, e.device.lastStatus && e.device.lastStatus.temperature && 999 != e.device.lastStatus.temperature),
                l(n, 9, 0, e.device.info)
            }, null)
        }
        function qt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 0, "span", [["class", "fa fa-plus-square"]], null, null, null, null, null))], null, null)
        }
        function zt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 0, "span", [["class", "fa fa-save"]], null, null, null, null, null))], null, null)
        }
        function Bt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Добавить"]))], null, null)
        }
        function Kt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Сохранить"]))], null, null)
        }
        function Ht(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 231, "form", [["class", "reg-form needs-validation"], ["name", "editForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 2).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 2).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.save() && t);
                return t
            }, null, null)), u["ɵdid"](1, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](2, 4210688, [["editForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](4, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 15, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 9, "h5", [["class", "modal-title"], ["id", "myDeviceLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-list-ul text-secondary"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Et)), u["ɵdid"](13, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Mt)), u["ɵdid"](16, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](19, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](23, 0, null, null, 178, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Pt)), u["ɵdid"](26, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, _t)), u["ɵdid"](29, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ot)), u["ɵdid"](32, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 17, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 1, "label", [["for", "deviceId"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["ID автомата"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](39, 0, null, null, 8, "input", [["class", "form-control mb-3"], ["id", "deviceId"], ["name", "deviceId"], ["pattern", "^[0-9]{15}$"], ["placeholder", "Введите ID автомата (15 цифр)"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 40)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 40).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 40)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 40)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.device.deviceId = e) && t);
                return t
            }, null, null)), u["ɵdid"](40, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](41, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](42, 540672, null, 0, tl.r, [], {
                pattern: [0, "pattern"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n) {
                return [l, n]
            }, [tl.s, tl.r]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](45, 671744, [["deviceId", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](47, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Vt)), u["ɵdid"](50, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](53, 0, null, null, 17, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](55, 0, null, null, 1, "label", [["for", "address"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Адрес"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](58, 0, null, null, 11, "ngx-da-data", [["class", "form-control city-autocomplete"], ["id", "address"], ["name", "address"], ["placeholder", "Адрес автомата"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], ["document", "click"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "document:click" === n && (t = !1 !== u["ɵnov"](l, 61).onOutsideClick() && t);
                "ngModelChange" === n && (t = !1 !== (i.device.address = e) && t);
                return t
            }, Cn.b, Cn.a)), u["ɵdid"](59, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵdid"](61, 638976, null, 0, Rn.b, [Rn.d, u.Renderer2], {
                config: [0, "config"],
                type: [1, "type"],
                placeholder: [2, "placeholder"]
            }, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [Rn.b]), u["ɵdid"](63, 671744, [["address", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](65, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Nt)), u["ɵdid"](68, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](72, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](74, 0, null, null, 1, "label", [["for", "phone"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Телефон SIM-карты"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](77, 0, null, null, 5, "input", [["class", "form-control mb-3"], ["id", "phone"], ["name", "phone"], ["placeholder", "Введите номер телефона"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 78)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 78).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 78)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 78)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.device.phone = e) && t);
                return t
            }, null, null)), u["ɵdid"](78, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](80, 671744, [["deviceId", 4]], 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](82, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](85, 0, null, null, 69, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](87, 0, null, null, 1, "label", [["class", ""], ["for", "timeZone"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Часовой пояс"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](90, 0, null, null, 63, "select", [["class", "custom-select mb-3"], ["id", "timeZone"], ["name", "timeZone"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "change" === n && (t = !1 !== u["ɵnov"](l, 91).onChange(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 91).onTouched() && t);
                "ngModelChange" === n && (t = !1 !== (i.device.timeZone = e) && t);
                return t
            }, null, null)), u["ɵdid"](91, 16384, null, 0, tl.t, [u.Renderer2, u.ElementRef], null, null), u["ɵdid"](92, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.t]), u["ɵdid"](95, 671744, [["timeZone", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](97, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](99, 0, null, null, 3, "option", [["selected", "selected"]], null, null, null, null, null)), u["ɵdid"](100, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](101, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+02:00 Калининград"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](104, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](105, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](106, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+03:00 Москва"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](109, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](110, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](111, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+04:00 Самара"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](114, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](115, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](116, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+05:00 Екатеринбург"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](119, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](120, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](121, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+06:00 Омск"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](124, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](125, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](126, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+07:00 Красноярск"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](129, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](130, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](131, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+08:00 Иркутск"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](134, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](135, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](136, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+09:00 Якутск"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](139, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](140, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](141, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+10:00 Владивосток"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](144, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](145, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](146, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+11:00 Магадан"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](149, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](150, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](151, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["UTC+12:00 Камчатский край"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](156, 0, null, null, 44, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](158, 0, null, null, 1, "label", [["class", ""], ["for", "currency"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Валюта"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](161, 0, null, null, 38, "select", [["class", "custom-select mb-3"], ["id", "currency"], ["name", "currency"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "change" === n && (t = !1 !== u["ɵnov"](l, 162).onChange(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 162).onTouched() && t);
                "ngModelChange" === n && (t = !1 !== (i.device.currency = e) && t);
                return t
            }, null, null)), u["ɵdid"](162, 16384, null, 0, tl.t, [u.Renderer2, u.ElementRef], null, null), u["ɵdid"](163, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.t]), u["ɵdid"](166, 671744, [["currency", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](168, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](170, 0, null, null, 3, "option", [["value", "RUR"]], null, null, null, null, null)), u["ɵdid"](171, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](172, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["Российский рубль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](175, 0, null, null, 3, "option", [["value", "KZT"]], null, null, null, null, null)), u["ɵdid"](176, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](177, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["Казахстанский тенге"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](180, 0, null, null, 3, "option", [["value", "AZN"]], null, null, null, null, null)), u["ɵdid"](181, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](182, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["Азербайджанский манат"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](185, 0, null, null, 3, "option", [["value", "UZS"]], null, null, null, null, null)), u["ɵdid"](186, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](187, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["Узбекский сум"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](190, 0, null, null, 3, "option", [["value", "KGS"]], null, null, null, null, null)), u["ɵdid"](191, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](192, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["Киргизский сом"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](195, 0, null, null, 3, "option", [["value", "BYR"]], null, null, null, null, null)), u["ɵdid"](196, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](197, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["Белорусский рубль"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](203, 0, null, null, 27, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ut)), u["ɵdid"](206, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](208, 0, null, null, 6, "button", [["class", "btn btn-default"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](210, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](212, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](216, 0, null, null, 13, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, qt)), u["ɵdid"](219, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, zt)), u["ɵdid"](222, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Bt)), u["ɵdid"](225, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Kt)), u["ɵdid"](228, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 13, 0, e.device.id),
                l(n, 16, 0, !e.device.id),
                l(n, 26, 0, e.success),
                l(n, 29, 0, e.error),
                l(n, 32, 0, e.errorNotMyDevice);
                l(n, 41, 0, "");
                l(n, 42, 0, "^[0-9]{15}$");
                l(n, 45, 0, "deviceId", e.device.deviceId),
                l(n, 50, 0, u["ɵnov"](n, 80).dirty && u["ɵnov"](n, 80).invalid);
                l(n, 59, 0, "");
                l(n, 61, 0, e.config, "text", "Адрес автомата");
                l(n, 63, 0, "address", e.device.address),
                l(n, 68, 0, u["ɵnov"](n, 63).dirty && u["ɵnov"](n, 63).invalid);
                l(n, 80, 0, "phone", e.device.phone);
                l(n, 92, 0, "");
                l(n, 95, 0, "timeZone", e.device.timeZone);
                l(n, 100, 0, 2);
                l(n, 101, 0, 2);
                l(n, 105, 0, 3);
                l(n, 106, 0, 3);
                l(n, 110, 0, 4);
                l(n, 111, 0, 4);
                l(n, 115, 0, 5);
                l(n, 116, 0, 5);
                l(n, 120, 0, 6);
                l(n, 121, 0, 6);
                l(n, 125, 0, 7);
                l(n, 126, 0, 7);
                l(n, 130, 0, 8);
                l(n, 131, 0, 8);
                l(n, 135, 0, 9);
                l(n, 136, 0, 9);
                l(n, 140, 0, 10);
                l(n, 141, 0, 10);
                l(n, 145, 0, 11);
                l(n, 146, 0, 11);
                l(n, 150, 0, 12);
                l(n, 151, 0, 12);
                l(n, 163, 0, "");
                l(n, 166, 0, "currency", e.device.currency);
                l(n, 171, 0, "RUR");
                l(n, 172, 0, "RUR");
                l(n, 176, 0, "KZT");
                l(n, 177, 0, "KZT");
                l(n, 181, 0, "AZN");
                l(n, 182, 0, "AZN");
                l(n, 186, 0, "UZS");
                l(n, 187, 0, "UZS");
                l(n, 191, 0, "KGS");
                l(n, 192, 0, "KGS");
                l(n, 196, 0, "BYR");
                l(n, 197, 0, "BYR"),
                l(n, 206, 0, e.device.id),
                l(n, 219, 0, !e.device.id),
                l(n, 222, 0, e.device.id),
                l(n, 225, 0, !e.device.id),
                l(n, 228, 0, e.device.id)
            }, function(l, n) {
                l(n, 0, 0, u["ɵnov"](n, 4).ngClassUntouched, u["ɵnov"](n, 4).ngClassTouched, u["ɵnov"](n, 4).ngClassPristine, u["ɵnov"](n, 4).ngClassDirty, u["ɵnov"](n, 4).ngClassValid, u["ɵnov"](n, 4).ngClassInvalid, u["ɵnov"](n, 4).ngClassPending),
                l(n, 39, 0, u["ɵnov"](n, 41).required ? "" : null, u["ɵnov"](n, 42).pattern ? u["ɵnov"](n, 42).pattern : null, u["ɵnov"](n, 47).ngClassUntouched, u["ɵnov"](n, 47).ngClassTouched, u["ɵnov"](n, 47).ngClassPristine, u["ɵnov"](n, 47).ngClassDirty, u["ɵnov"](n, 47).ngClassValid, u["ɵnov"](n, 47).ngClassInvalid, u["ɵnov"](n, 47).ngClassPending),
                l(n, 58, 0, u["ɵnov"](n, 59).required ? "" : null, u["ɵnov"](n, 65).ngClassUntouched, u["ɵnov"](n, 65).ngClassTouched, u["ɵnov"](n, 65).ngClassPristine, u["ɵnov"](n, 65).ngClassDirty, u["ɵnov"](n, 65).ngClassValid, u["ɵnov"](n, 65).ngClassInvalid, u["ɵnov"](n, 65).ngClassPending),
                l(n, 77, 0, u["ɵnov"](n, 82).ngClassUntouched, u["ɵnov"](n, 82).ngClassTouched, u["ɵnov"](n, 82).ngClassPristine, u["ɵnov"](n, 82).ngClassDirty, u["ɵnov"](n, 82).ngClassValid, u["ɵnov"](n, 82).ngClassInvalid, u["ɵnov"](n, 82).ngClassPending),
                l(n, 90, 0, u["ɵnov"](n, 92).required ? "" : null, u["ɵnov"](n, 97).ngClassUntouched, u["ɵnov"](n, 97).ngClassTouched, u["ɵnov"](n, 97).ngClassPristine, u["ɵnov"](n, 97).ngClassDirty, u["ɵnov"](n, 97).ngClassValid, u["ɵnov"](n, 97).ngClassInvalid, u["ɵnov"](n, 97).ngClassPending),
                l(n, 161, 0, u["ɵnov"](n, 163).required ? "" : null, u["ɵnov"](n, 168).ngClassUntouched, u["ɵnov"](n, 168).ngClassTouched, u["ɵnov"](n, 168).ngClassPristine, u["ɵnov"](n, 168).ngClassDirty, u["ɵnov"](n, 168).ngClassValid, u["ɵnov"](n, 168).ngClassInvalid, u["ɵnov"](n, 168).ngClassPending),
                l(n, 216, 0, u["ɵnov"](n, 2).form.invalid)
            })
        }
        var Zt = u["ɵccf"]("jhi-device-dialog", hu, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-device-dialog", [], null, null, null, Ht, Dt)), u["ɵdid"](1, 114688, null, 0, hu, [v.d, cu, q.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Wt = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Yt(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var Qt = u["ɵccf"]("jhi-device-popup", vu, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-device-popup", [], null, null, null, Yt, Wt)), u["ɵdid"](1, 245760, null, 0, vu, [f.a, gu], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Xt = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Gt(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 39, "form", [["name", "deleteForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 3).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 3).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.confirmDelete(i.device.id, i.device.deviceId) && t);
                return t
            }, null, null)), u["ɵdid"](2, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](3, 4210688, [["deleteForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](5, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Удаление автомата"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](19, 180224, null, 0, bl, [ve.a, q.a], null, null), (l()(),
            u["ɵted"](-1, null, [" Вы уверены, что хотите удалить этот автомат из списка? "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](22, 0, null, null, 17, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 6, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](26, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 6, "button", [["class", "btn btn-danger"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 0, "span", [["class", "fa fa-remove"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Удалить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                l(n, 1, 0, u["ɵnov"](n, 5).ngClassUntouched, u["ɵnov"](n, 5).ngClassTouched, u["ɵnov"](n, 5).ngClassPristine, u["ɵnov"](n, 5).ngClassDirty, u["ɵnov"](n, 5).ngClassValid, u["ɵnov"](n, 5).ngClassInvalid, u["ɵnov"](n, 5).ngClassPending)
            })
        }
        var Jt = u["ɵccf"]("jhi-device-delete-dialog", bu, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-device-delete-dialog", [], null, null, null, Gt, Xt)), u["ɵdid"](1, 114688, null, 0, bu, [cu, v.d, ve.a, q.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , li = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function ni(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var ei = u["ɵccf"]("jhi-device-delete-popup", yu, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-device-delete-popup", [], null, null, null, ni, li)), u["ɵdid"](1, 245760, null, 0, yu, [f.a, gu], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , ui = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function ti(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 39, "form", [["name", "deleteForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 3).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 3).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.confirmClean(i.device.id, i.device.deviceId) && t);
                return t
            }, null, null)), u["ɵdid"](2, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](3, 4210688, [["deleteForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](5, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Очистка данных автомата"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](19, 180224, null, 0, bl, [ve.a, q.a], null, null), (l()(),
            u["ɵted"](-1, null, [" Вы уверены, что хотите очистить данные автомата? "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](22, 0, null, null, 17, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 6, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](26, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 6, "button", [["class", "btn btn-danger"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 0, "span", [["class", "fa fa-remove"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Очистить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                l(n, 1, 0, u["ɵnov"](n, 5).ngClassUntouched, u["ɵnov"](n, 5).ngClassTouched, u["ɵnov"](n, 5).ngClassPristine, u["ɵnov"](n, 5).ngClassDirty, u["ɵnov"](n, 5).ngClassValid, u["ɵnov"](n, 5).ngClassInvalid, u["ɵnov"](n, 5).ngClassPending)
            })
        }
        var ii = u["ɵccf"]("jhi-device-clean-dialog", Cu, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-device-clean-dialog", [], null, null, null, ti, ui)), u["ɵdid"](1, 114688, null, 0, Cu, [cu, v.d, ve.a, q.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , oi = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function di(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var ri = u["ɵccf"]("jhi-device-clean-popup", Ru, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-device-clean-popup", [], null, null, null, di, oi)), u["ɵdid"](1, 245760, null, 0, Ru, [f.a, gu], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , ai = [[".custom-day[_ngcontent-%COMP%]{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.sales_list_table-wrapper[_ngcontent-%COMP%]{overflow-y:scroll;max-height:50vh}.custom-thead-bg-gray[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-bottom:7px}.sales_list_totals[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;background:#fff}.coin[_ngcontent-%COMP%]{background-color:#ff0;width:22px;border:2px solid #ff8c00;border-radius:10px;color:#ff8c00;margin-left:-10px}.bill[_ngcontent-%COMP%], .coin[_ngcontent-%COMP%]{display:inline-block;height:22px;position:relative;top:0;left:0;padding:1px 1px 0 0;line-height:15px;font-size:small;font-weight:700}.bill[_ngcontent-%COMP%]{background-color:#90ee90;width:30px;border:2px solid #006400;color:#006400;margin-left:-15px}.dashboard-sales_tooltip[_ngcontent-%COMP%]{margin-left:5px}"]]
          , si = u["ɵcrt"]({
            encapsulation: 0,
            styles: ai,
            data: {}
        });
        function ci(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 1, "span", [["class", "custom-day"]], [[2, "focused", null], [2, "range", null], [2, "faded", null]], [[null, "mouseenter"], [null, "mouseleave"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "mouseenter" === n && (u = !1 !== (t.hoveredDate = l.context.date) && u);
                "mouseleave" === n && (u = !1 !== (t.hoveredDate = null) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](2, null, [" ", " "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 1, 0, n.context.focused, e.isRange(n.context.date), e.isHovered(n.context.date) || e.isInside(n.context.date)),
                l(n, 2, 0, n.context.date.day)
            })
        }
        function pi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" За выбранный период продаж не было. "]))], null, null)
        }
        function fi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "bill"]], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            })
        }
        function mi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "span", [["class", "dashboard-sales_tooltip"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, fi)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["   "]))], function(l, n) {
                l(n, 3, 0, n.component.expandCoins(n.context.$implicit))
            }, null)
        }
        function gi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["   "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, mi)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.parent.context.$implicit.bills)
            }, null)
        }
        function hi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "coin"]], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            })
        }
        function vi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "span", [["class", "dashboard-sales_tooltip"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, hi)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["  "]))], function(l, n) {
                l(n, 3, 0, n.component.expandCoins(n.context.$implicit))
            }, null)
        }
        function bi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, vi)), u["ɵdid"](3, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.parent.context.$implicit.coins)
            }, null)
        }
        function yi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, gi)), u["ɵdid"](2, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, bi)), u["ɵdid"](5, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.bills.length > 0),
                l(n, 5, 0, n.parent.context.$implicit.coins.length > 0)
            }, null)
        }
        function Ci(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 1, "i", [["class", "fa fa-money text-success"], ["placement", "right"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "right", u["ɵnov"](n.parent, 3))
            }, null)
        }
        function Ri(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 0, "i", [["class", "fa fa-credit-card text-warning"]], null, null, null, null, null))], null, null)
        }
        function wi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 1, "i", [["class", "fa fa-cloud-upload text-danger"], ["placement", "right"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "right", u["ɵnov"](n.parent, 3))
            }, null)
        }
        function Ii(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, [" ", ""]))], null, function(l, n) {
                var e = n.parent.context.$implicit.amount.toFixed(2);
                l(n, 1, 0, e)
            })
        }
        function xi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, [" ", ""]))], null, function(l, n) {
                l(n, 1, 0, n.component.sumCoinsString(n.parent.context.$implicit.bills))
            })
        }
        function Si(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, [" ", ""]))], null, function(l, n) {
                l(n, 1, 0, n.component.sumCoinsString(n.parent.context.$implicit.coins))
            })
        }
        function Ti(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, [" ", ""]))], null, function(l, n) {
                var e = n.parent.context.$implicit.amount.toFixed(2);
                l(n, 1, 0, e)
            })
        }
        function ki(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, [" ", ""]))], null, function(l, n) {
                var e = n.parent.context.$implicit.quantity.toFixed(1);
                l(n, 1, 0, e)
            })
        }
        function Di(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 47, "tr", [], null, null, null, null, null)), u["ɵdid"](1, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, [["saleTooltip", 2]], null, 0, null, yi)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 10, "td", [["class", "text-center"], ["width", "10%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ci)), u["ɵdid"](8, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ri)), u["ɵdid"](11, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, wi)), u["ɵdid"](14, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 1, "td", [["class", "text-left wide_screen"], ["width", "20%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](18, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 1, "td", [["class", "text-left narrow_screen"], ["width", "20%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](21, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](23, 0, null, null, 3, "td", [["class", "text-right"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ii)), u["ɵdid"](26, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 3, "td", [["class", "text-right"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, xi)), u["ɵdid"](31, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](33, 0, null, null, 3, "td", [["class", "text-right"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Si)), u["ɵdid"](36, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](38, 0, null, null, 3, "td", [["class", "text-right"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ti)), u["ɵdid"](41, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](43, 0, null, null, 3, "td", [["class", "text-right"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ki)), u["ɵdid"](46, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, n.context.$implicit.paymentType),
                l(n, 8, 0, e.paymentType.CASH),
                l(n, 11, 0, e.paymentType.CASHLESS),
                l(n, 14, 0, e.paymentType.DEPO),
                l(n, 26, 0, n.context.$implicit.paymentType == e.paymentType.CASH || n.context.$implicit.paymentType == e.paymentType.DEPO),
                l(n, 31, 0, n.context.$implicit.paymentType == e.paymentType.CASH || n.context.$implicit.paymentType == e.paymentType.DEPO),
                l(n, 36, 0, n.context.$implicit.paymentType == e.paymentType.CASH || n.context.$implicit.paymentType == e.paymentType.DEPO),
                l(n, 41, 0, e.paymentType.CASHLESS),
                l(n, 46, 0, e.valueIsValid(n.context.$implicit.quantity))
            }, function(l, n) {
                var e = n.component;
                l(n, 18, 0, e.formatTimestamp(n.context.$implicit.timestamp)),
                l(n, 21, 0, e.formatTimestamp(n.context.$implicit.timestamp, !0))
            })
        }
        function Ei(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 107, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 57, "table", [["class", "table table-striped table-sm small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 54, "thead", [["class", "custom-thead-bg-gray"], ["head", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 22, "tr", [["class", "wide_screen"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 1, "th", [["class", "text-center"], ["width", "10%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Тип"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 1, "th", [["class", "text-center"], ["width", "20%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Время"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](14, 0, null, null, 1, "th", [["class", "text-center"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Налич."])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 1, "th", [["class", "text-center"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Купюр"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 1, "th", [["class", "text-center"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Монет"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](23, 0, null, null, 1, "th", [["class", "text-center"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Картой"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](26, 0, null, null, 1, "th", [["class", "text-center"], ["width", "14%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Продано"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](30, 0, null, null, 27, "tr", [["class", "narrow_screen"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 1, "th", [["class", "text-center"], ["width", "10%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Тип"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](35, 0, null, null, 1, "th", [["class", "text-center"], ["width", "20%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Время"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](38, 16777216, null, null, 2, "th", [["class", "text-center"], ["ngbTooltip", "Наличными"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](39, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, ["Σ"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](42, 16777216, null, null, 2, "th", [["class", "text-center"], ["ngbTooltip", "Купюрами"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](43, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵeld"](44, 0, null, null, 0, "i", [["class", "fa fa-money"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](46, 16777216, null, null, 2, "th", [["class", "text-center"], ["ngbTooltip", "Монетами"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](47, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵeld"](48, 0, null, null, 0, "i", [["class", "fa fa-database"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](50, 16777216, null, null, 2, "th", [["class", "text-center"], ["ngbTooltip", "Картой"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](51, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵeld"](52, 0, null, null, 0, "i", [["class", "fa fa-credit-card"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](54, 16777216, null, null, 2, "th", [["class", "text-center"], ["ngbTooltip", "Продано"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](55, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵeld"](56, 0, null, null, 0, "i", [["class", "fa fa-tint"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](61, 0, null, null, 10, "div", [["align", "center"], ["class", "sales_list_table-wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](63, 0, null, null, 7, "table", [["class", "table table-striped table-sm small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](65, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Di)), u["ɵdid"](68, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](73, 0, null, null, 33, "table", [["class", "table table-striped table-sm small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](75, 0, null, null, 30, "tbody", [["class", "sales_list_totals"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](77, 0, null, null, 27, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](79, 0, null, null, 1, "td", [["class", "text-center"], ["width", "10%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](82, 0, null, null, 1, "td", [["class", "text-left"], ["width", "20%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Итого:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](85, 16777216, null, null, 2, "td", [["class", "text-right"], ["ngbTooltip", "Получено наличными"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](86, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](87, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](89, 16777216, null, null, 2, "td", [["class", "text-right"], ["ngbTooltip", "Получено купюр"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](90, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](91, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](93, 16777216, null, null, 2, "td", [["class", "text-right"], ["ngbTooltip", "Получено монет"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](94, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](95, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](97, 16777216, null, null, 2, "td", [["class", "text-right"], ["ngbTooltip", "Продано по карте"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](98, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](99, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](101, 16777216, null, null, 2, "td", [["class", "text-right"], ["ngbTooltip", "Продано литров"], ["placement", "top-right"], ["width", "14%"]], null, null, null, null, null)), u["ɵdid"](102, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](103, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 39, 0, "Наличными");
                l(n, 43, 0, "Купюрами");
                l(n, 47, 0, "Монетами");
                l(n, 51, 0, "Картой");
                l(n, 55, 0, "Продано"),
                l(n, 68, 0, e.filterSales());
                l(n, 86, 0, "Получено наличными");
                l(n, 90, 0, "Получено купюр");
                l(n, 94, 0, "Получено монет");
                l(n, 98, 0, "Продано по карте");
                l(n, 102, 0, "top-right", "Продано литров")
            }, function(l, n) {
                var e = n.component;
                l(n, 87, 0, e.totalCash.toFixed(2)),
                l(n, 91, 0, e.totalBill.toFixed(2)),
                l(n, 95, 0, e.totalCoin.toFixed(2)),
                l(n, 99, 0, e.totalCard.toFixed(2)),
                l(n, 103, 0, e.totalSold.toFixed(1))
            })
        }
        function Mi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 8, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "h4", [["class", "modal-title"], ["id", "salesDaterange1"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "i", [["class", "fa fa-shopping-cart text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Продажи за период"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 59, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 14, "div", [["class", "input-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 16777216, null, null, 4, "input", [["class", "form-control"], ["ngbDatepicker", ""], ["outsideDays", "hidden"], ["pattern", "[0-9]{1,2}/[0-9]{1,2}/[0-9]{4} - [0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"], ["type", "text"]], [[8, "value", 0], [8, "disabled", 0]], [[null, "dateSelect"], [null, "input"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 19).manualDateChange(e.target.value) && t);
                "change" === n && (t = !1 !== u["ɵnov"](l, 19).manualDateChange(e.target.value, !0) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 19).onBlur() && t);
                "dateSelect" === n && (t = !1 !== i.onDateSelection(e) && t);
                "input" === n && (t = !1 !== i.onDateInput(e) && t);
                return t
            }, null, null)), u["ɵprd"](5120, null, tl.k, function(l) {
                return [l]
            }, [v.y]), u["ɵprd"](5120, null, tl.j, function(l) {
                return [l]
            }, [v.y]), u["ɵprd"](512, null, v.Qa, v.Qa, [v.i, v.s]), u["ɵdid"](19, 671744, [["d", 4]], 0, v.y, [v.p, u.ElementRef, u.ViewContainerRef, u.Renderer2, u.ComponentFactoryResolver, u.NgZone, v.Qa, v.i, v.o, h.c], {
                autoClose: [0, "autoClose"],
                dayTemplate: [1, "dayTemplate"],
                displayMonths: [2, "displayMonths"],
                outsideDays: [3, "outsideDays"]
            }, {
                dateSelect: "dateSelect"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, [["t", 2]], null, 0, null, ci)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](23, 0, null, null, 3, "div", [["class", "input-group-append"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 0, "button", [["class", "btn btn-outline-secondary fa fa-calendar"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 19).toggle() && t);
                return t
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 1, "small", [["class", "form-text text-muted"], ["id", "addressHelpBlock"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Задайте календарный диапазон "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 31, "span", [["class", "form-text text-muted small mb-2"], ["id", "addressHelpBlock1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 8, "div", [["class", "form-check form-check-inline"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 0, "input", [["class", "form-check-input"], ["id", "saleCash"], ["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "change" === n && (u = !1 != (t.showCash = !t.showCash) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](38, 0, null, null, 3, "label", [["class", "form-check-label"], ["for", "saleCash"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](40, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-money text-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" За наличные "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](44, 0, null, null, 8, "div", [["class", "form-check form-check-inline"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](46, 0, null, null, 0, "input", [["class", "form-check-input"], ["id", "saleCashless"], ["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "change" === n && (u = !1 != (t.showCashless = !t.showCashless) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](48, 0, null, null, 3, "label", [["class", "form-check-label"], ["for", "saleCashless"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](50, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-credit-card text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" По карте "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](54, 0, null, null, 8, "div", [["class", "form-check form-check-inline"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](56, 0, null, null, 0, "input", [["class", "form-check-input"], ["id", "saleDepo"], ["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "change" === n && (u = !1 != (t.showDepo = !t.showDepo) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](58, 0, null, null, 3, "label", [["class", "form-check-label"], ["for", "saleDepo"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](60, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-cloud-upload text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пополнение карты "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, pi)), u["ɵdid"](66, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ei)), u["ɵdid"](69, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](72, 0, null, null, 11, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](74, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openDownloadFileDialog() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](76, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-file-excel-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Экспорт"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](79, 0, null, null, 3, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](81, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Закрыть"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 19, 0, !1, u["ɵnov"](n, 21), 2, "hidden"),
                l(n, 66, 0, 0 === e.filterSales().length),
                l(n, 69, 0, e.filterSales().length > 0)
            }, function(l, n) {
                var e = n.component;
                l(n, 15, 0, e.showDate, u["ɵnov"](n, 19).disabled),
                l(n, 36, 0, e.showCash),
                l(n, 46, 0, e.showCashless),
                l(n, 56, 0, e.showDepo)
            })
        }
        var Pi = u["ɵccf"]("jhi-sales-dialog", ku, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-sales-dialog", [], null, null, null, Mi, si)), u["ɵdid"](1, 114688, null, 0, ku, [f.l, v.d, Su, v.i], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , _i = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Oi(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var ji = u["ɵccf"]("jhi-sale-popup", Du, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-sale-popup", [], null, null, null, Oi, _i)), u["ɵdid"](1, 245760, null, 0, Du, [f.a, Tu], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Vi = [[".custom-day[_ngcontent-%COMP%]{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.sales_list_table-wrapper[_ngcontent-%COMP%]{overflow-y:scroll;max-height:50vh}.custom-thead-bg-gray[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-bottom:7px}.sales_list_totals[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;background:#fff}"]]
          , Ai = u["ɵcrt"]({
            encapsulation: 0,
            styles: Vi,
            data: {}
        });
        function Ni(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 1, "span", [["class", "custom-day"]], [[2, "focused", null], [2, "range", null], [2, "faded", null]], [[null, "mouseenter"], [null, "mouseleave"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "mouseenter" === n && (u = !1 !== (t.hoveredDate = l.context.date) && u);
                "mouseleave" === n && (u = !1 !== (t.hoveredDate = null) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](2, null, [" ", " "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 1, 0, n.context.focused, e.isRange(n.context.date), e.isHovered(n.context.date) || e.isInside(n.context.date)),
                l(n, 2, 0, n.context.date.day)
            })
        }
        function Fi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle text-danger"]], null, null, null, null, null))], null, null)
        }
        function Li(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle text-danger"]], null, null, null, null, null))], null, null)
        }
        function $i(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle text-warning"]], null, null, null, null, null))], null, null)
        }
        function Ui(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Fi)), u["ɵdid"](3, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Li)), u["ɵdid"](6, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, $i)), u["ɵdid"](9, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 3, 0, e.alertType.NO_LINK),
                l(n, 6, 0, e.alertType.TANK_EMPTY),
                l(n, 9, 0, e.alertType.NO_SALES)
            }, null)
        }
        function qi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-check text-success"]], null, null, null, null, null))], null, null)
        }
        function zi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Пропала связь с автоматом"]))], null, null)
        }
        function Bi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Связь восстановилась"]))], null, null)
        }
        function Ki(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, zi)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Bi)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.context.$implicit.active),
                l(n, 6, 0, !n.parent.context.$implicit.active)
            }, null)
        }
        function Hi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Нет продаж"]))], null, null)
        }
        function Zi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Продажи восстановились"]))], null, null)
        }
        function Wi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Hi)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Zi)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.context.$implicit.active),
                l(n, 6, 0, !n.parent.context.$implicit.active)
            }, null)
        }
        function Yi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Бак пуст"]))], null, null)
        }
        function Qi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Бак заполняется"]))], null, null)
        }
        function Xi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Yi)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Qi)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.parent.context.$implicit.active),
                l(n, 6, 0, !n.parent.context.$implicit.active)
            }, null)
        }
        function Gi(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 26, "tr", [], null, null, null, null, null)), u["ɵdid"](1, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 7, "td", [["class", "text-center"], ["width", "10%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ui)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, qi)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "td", [["class", "text-left"], ["width", "30%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](13, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 0, null, null, 10, "td", [["class", "text-left"], ["width", "60%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ki)), u["ɵdid"](18, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Wi)), u["ɵdid"](21, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Xi)), u["ɵdid"](24, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, n.context.$implicit.type),
                l(n, 6, 0, n.context.$implicit.active),
                l(n, 9, 0, !n.context.$implicit.active),
                l(n, 18, 0, e.alertType.NO_LINK),
                l(n, 21, 0, e.alertType.NO_SALES),
                l(n, 24, 0, e.alertType.TANK_EMPTY)
            }, function(l, n) {
                l(n, 13, 0, n.component.formatTimestamp(n.context.$implicit.timestamp))
            })
        }
        function Ji(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 8, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "h4", [["class", "modal-title"], ["id", "salesDaterange1"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "i", [["class", "fa fa-exclamation-triangle text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Аварии за период"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 50, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 14, "div", [["class", "input-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 16777216, null, null, 4, "input", [["class", "form-control"], ["ngbDatepicker", ""], ["outsideDays", "hidden"], ["pattern", "[0-9]{1,2}/[0-9]{1,2}/[0-9]{4} - [0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"], ["type", "text"]], [[8, "value", 0], [8, "disabled", 0]], [[null, "dateSelect"], [null, "input"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 19).manualDateChange(e.target.value) && t);
                "change" === n && (t = !1 !== u["ɵnov"](l, 19).manualDateChange(e.target.value, !0) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 19).onBlur() && t);
                "dateSelect" === n && (t = !1 !== i.onDateSelection(e) && t);
                "input" === n && (t = !1 !== i.onDateInput(e) && t);
                return t
            }, null, null)), u["ɵprd"](5120, null, tl.k, function(l) {
                return [l]
            }, [v.y]), u["ɵprd"](5120, null, tl.j, function(l) {
                return [l]
            }, [v.y]), u["ɵprd"](512, null, v.Qa, v.Qa, [v.i, v.s]), u["ɵdid"](19, 671744, [["d", 4]], 0, v.y, [v.p, u.ElementRef, u.ViewContainerRef, u.Renderer2, u.ComponentFactoryResolver, u.NgZone, v.Qa, v.i, v.o, h.c], {
                autoClose: [0, "autoClose"],
                dayTemplate: [1, "dayTemplate"],
                displayMonths: [2, "displayMonths"],
                outsideDays: [3, "outsideDays"]
            }, {
                dateSelect: "dateSelect"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, [["t", 2]], null, 0, null, Ni)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](23, 0, null, null, 3, "div", [["class", "input-group-append"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 0, "button", [["class", "btn btn-outline-secondary fa fa-calendar"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 19).toggle() && t);
                return t
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 1, "small", [["class", "form-text text-muted"], ["id", "addressHelpBlock"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Задайте календарный диапазон "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 16, "table", [["class", "table table-striped table-sm small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 13, "thead", [["class", "custom-thead-bg-gray"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](38, 0, null, null, 1, "th", [["class", "text-center"], ["width", "10%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](41, 0, null, null, 1, "th", [["class", "text-center"], ["width", "30%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Время"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](44, 0, null, null, 1, "th", [["class", "text-center"], ["width", "60%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Событие"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](50, 0, null, null, 10, "div", [["align", "center"], ["class", "sales_list_table-wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](52, 0, null, null, 7, "table", [["class", "table table-striped table-sm small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](54, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Gi)), u["ɵdid"](57, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](63, 0, null, null, 11, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](65, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openDownloadFileDialog() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](67, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-file-excel-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Экспорт"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](70, 0, null, null, 3, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](72, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Закрыть"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 19, 0, !1, u["ɵnov"](n, 21), 2, "hidden"),
                l(n, 57, 0, e.alerts)
            }, function(l, n) {
                l(n, 15, 0, n.component.showDate, u["ɵnov"](n, 19).disabled)
            })
        }
        var lo = u["ɵccf"]("jhi-alerts-dialog", _u, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-alerts-dialog", [], null, null, null, Ji, Ai)), u["ɵdid"](1, 114688, null, 0, _u, [f.l, v.d, Mu, v.i], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , no = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function eo(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var uo = u["ɵccf"]("jhi-alert-popup", Ou, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-alert-popup", [], null, null, null, eo, no)), u["ɵdid"](1, 245760, null, 0, Ou, [f.a, Pu], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , to = function() {
            function l(l, n) {
                this.modalService = l,
                this.router = n,
                this.isOpen = !1
            }
            return l.prototype.open = function(l, n, e) {
                var u = this;
                n && (this.isOpen || (this.isOpen = !0,
                setTimeout(function() {
                    u.deviceModalRef(l, [], n, e)
                }, 500)))
            }
            ,
            l.prototype.deviceModalRef = function(l, n, e, u) {
                var t = this
                  , i = this.modalService.open(l, {
                    size: "lg",
                    backdrop: "static"
                });
                return i.componentInstance.encash = n,
                i.componentInstance.deviceId = e,
                i.componentInstance.deviceTz = u,
                i.result.then(function(l) {
                    t.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    t.isOpen = !1
                }, function(l) {
                    t.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    t.isOpen = !1
                }),
                i
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , io = function() {
            function l(l, n, e, u) {
                this.router = l,
                this.activeModal = n,
                this.encashService = e,
                this.MAX_RECORDS = 1e3,
                this.paymentType = pu,
                this.showDate = "",
                this.totalCoin = 0,
                this.totalBill = 0,
                this.totalCash = 0,
                this.totalSold = 0,
                this.encash = [],
                this.fromDate = u.getPrev(u.getToday(), "d", 10),
                this.toDate = u.getNext(u.getToday(), "d", 1),
                this.showDate = Sl.formatRange(this.fromDate, this.toDate),
                this.from = Sl.ngbDateToTimestamp(this.fromDate, this.deviceTz),
                this.to = Sl.ngbDateToTimestamp(this.toDate, this.deviceTz)
            }
            return l.prototype.ngOnInit = function() {
                this.isSaving = !1,
                0 !== this.from && 0 !== this.to && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.formatTimestamp = function(l) {
                return Sl.formatTimestamp(l, this.deviceTz)
            }
            ,
            l.prototype.loadSales = function(l, n, e) {
                var u = this;
                this.encashService.query({
                    deviceId: l,
                    sort: ["timestamp,asc"],
                    size: this.MAX_RECORDS,
                    from: n,
                    to: e + 86400
                }).subscribe(function(l) {
                    return u.onSalesSuccess(l.body, l.headers)
                }, function(l) {
                    return u.onError(l.body)
                })
            }
            ,
            l.prototype.onSalesSuccess = function(l, n) {
                this.encash = l
            }
            ,
            l.prototype.onError = function(l) {}
            ,
            l.prototype.sumCoins = function(l) {
                if (!l || 0 === l.length)
                    return 0;
                var n = l.map(function(l) {
                    return l.value * l.amount
                }).reduce(function(l, n) {
                    return l + n
                }, 0);
                return n > 0 ? n : 0
            }
            ,
            l.prototype.sumCoinsString = function(l) {
                if (!l || 0 === l.length)
                    return "";
                var n = this.sumCoins(l);
                return n > 0 ? n.toFixed(2) : " "
            }
            ,
            l.prototype.onDateSelection = function(l) {
                this.fromDate || this.toDate ? this.fromDate && !this.toDate && (l.after(this.fromDate) || l.equals(this.fromDate)) ? this.toDate = l : (this.toDate = null,
                this.fromDate = l) : this.fromDate = l,
                this.from = Sl.ngbDateToTimestamp(this.fromDate, this.deviceTz),
                this.to = Sl.ngbDateToTimestamp(this.toDate, this.deviceTz),
                this.showDate = Sl.formatRange(this.fromDate, this.toDate),
                this.from > 0 && this.to > 0 && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.onDateInput = function(l) {
                var n = l.target.value.split(" - ");
                this.from = Sl.dateToTimestamp(n[0], this.deviceTz),
                this.to = Sl.dateToTimestamp(n[1], this.deviceTz),
                this.from > 0 && this.to > 0 && this.loadSales(this.deviceId, this.from, this.to)
            }
            ,
            l.prototype.filterSales = function() {
                var l = this;
                return this.totalCoin = 0,
                this.totalBill = 0,
                this.totalCash = 0,
                this.encash.map(function(n) {
                    return l.totalCoin += l.sumCoins(n.coins),
                    l.totalBill += l.sumCoins(n.bills),
                    l.totalCash += n.amount,
                    n
                })
            }
            ,
            l.prototype.isHovered = function(l) {
                return !!l && (this.fromDate && !this.toDate && this.hoveredDate && l.after(this.fromDate) && l.before(this.hoveredDate))
            }
            ,
            l.prototype.isInside = function(l) {
                return !!l && (l.after(this.fromDate) && l.before(this.toDate))
            }
            ,
            l.prototype.isRange = function(l) {
                return !!l && (l.equals(this.fromDate) || l.equals(this.toDate) || this.isInside(l) || this.isHovered(l))
            }
            ,
            l.prototype.openDownloadFileDialog = function() {
                this.router.navigate(["/", {
                    outlets: {
                        popup: "report/" + this.deviceId + "/encash/" + this.from + "/" + this.to + "/" + this.deviceTz
                    }
                }], {
                    replaceUrl: !0
                })
            }
            ,
            l
        }()
          , oo = function() {
            function l(l, n) {
                this.route = l,
                this.encashPopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    n.id && (l.modalRef = l.encashPopupService.open(io, n.id, n.tz))
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }()
          , ro = [[".custom-day[_ngcontent-%COMP%]{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:rgba(2,117,216,.5)}.sales_list_table-wrapper[_ngcontent-%COMP%]{overflow-y:scroll;max-height:50vh}.custom-thead-bg-gray[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-bottom:7px}.sales_list_totals[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;background:#fff}"]]
          , ao = u["ɵcrt"]({
            encapsulation: 0,
            styles: ro,
            data: {}
        });
        function so(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 1, "span", [["class", "custom-day"]], [[2, "focused", null], [2, "range", null], [2, "faded", null]], [[null, "mouseenter"], [null, "mouseleave"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "mouseenter" === n && (u = !1 !== (t.hoveredDate = l.context.date) && u);
                "mouseleave" === n && (u = !1 !== (t.hoveredDate = null) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](2, null, [" ", " "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 1, 0, n.context.focused, e.isRange(n.context.date), e.isHovered(n.context.date) || e.isInside(n.context.date)),
                l(n, 2, 0, n.context.date.day)
            })
        }
        function co(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" За выбранный период инкассаций не было. "]))], null, null)
        }
        function po(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "td", [["class", "text-left"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 1, "td", [["class", "text-right"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](6, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 1, "td", [["class", "text-right"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](9, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 1, "td", [["class", "text-right"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](12, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 3, 0, e.formatTimestamp(n.context.$implicit.timestamp));
                var u = n.context.$implicit.amount.toFixed(2);
                l(n, 6, 0, u),
                l(n, 9, 0, e.sumCoinsString(n.context.$implicit.bills)),
                l(n, 12, 0, e.sumCoinsString(n.context.$implicit.coins))
            })
        }
        function fo(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 55, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 19, "table", [["class", "table table-striped table-sm small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 16, "thead", [["class", "custom-thead-bg-gray"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 1, "th", [["class", "text-center"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Время"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 1, "th", [["class", "text-center"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Наличными"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](14, 0, null, null, 1, "th", [["class", "text-center"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Купюрами"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 1, "th", [["class", "text-center"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Монетами"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](23, 0, null, null, 10, "div", [["align", "center"], ["class", "sales_list_table-wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 7, "table", [["class", "table table-striped table-sm small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](27, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, po)), u["ɵdid"](30, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](35, 0, null, null, 19, "table", [["class", "table table-striped table-sm small"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](37, 0, null, null, 16, "tbody", [["class", "sales_list_totals"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](39, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](41, 0, null, null, 1, "td", [["class", "text-left"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Итого:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](44, 0, null, null, 1, "td", [["class", "text-right"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](45, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](47, 0, null, null, 1, "td", [["class", "text-right"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](48, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](50, 0, null, null, 1, "td", [["class", "text-right"], ["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](51, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 30, 0, n.component.filterSales())
            }, function(l, n) {
                var e = n.component;
                l(n, 45, 0, e.totalCash.toFixed(2)),
                l(n, 48, 0, e.totalBill.toFixed(2)),
                l(n, 51, 0, e.totalCoin.toFixed(2))
            })
        }
        function mo(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 8, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "h4", [["class", "modal-title"], ["id", "salesDaterange1"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "i", [["class", "fa fa-shopping-cart text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Инкассации за период"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 26, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 14, "div", [["class", "input-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 16777216, null, null, 4, "input", [["class", "form-control"], ["ngbDatepicker", ""], ["outsideDays", "hidden"], ["pattern", "[0-9]{1,2}/[0-9]{1,2}/[0-9]{4} - [0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"], ["type", "text"]], [[8, "value", 0], [8, "disabled", 0]], [[null, "dateSelect"], [null, "input"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 19).manualDateChange(e.target.value) && t);
                "change" === n && (t = !1 !== u["ɵnov"](l, 19).manualDateChange(e.target.value, !0) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 19).onBlur() && t);
                "dateSelect" === n && (t = !1 !== i.onDateSelection(e) && t);
                "input" === n && (t = !1 !== i.onDateInput(e) && t);
                return t
            }, null, null)), u["ɵprd"](5120, null, tl.k, function(l) {
                return [l]
            }, [v.y]), u["ɵprd"](5120, null, tl.j, function(l) {
                return [l]
            }, [v.y]), u["ɵprd"](512, null, v.Qa, v.Qa, [v.i, v.s]), u["ɵdid"](19, 671744, [["d", 4]], 0, v.y, [v.p, u.ElementRef, u.ViewContainerRef, u.Renderer2, u.ComponentFactoryResolver, u.NgZone, v.Qa, v.i, v.o, h.c], {
                autoClose: [0, "autoClose"],
                dayTemplate: [1, "dayTemplate"],
                displayMonths: [2, "displayMonths"],
                outsideDays: [3, "outsideDays"]
            }, {
                dateSelect: "dateSelect"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, [["t", 2]], null, 0, null, so)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](23, 0, null, null, 3, "div", [["class", "input-group-append"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 0, "button", [["class", "btn btn-outline-secondary fa fa-calendar"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 19).toggle() && t);
                return t
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 1, "small", [["class", "form-text text-muted"], ["id", "addressHelpBlock"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Задайте календарный диапазон "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, co)), u["ɵdid"](33, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, fo)), u["ɵdid"](36, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](39, 0, null, null, 11, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](41, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openDownloadFileDialog() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](43, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-file-excel-o"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Экспорт"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](46, 0, null, null, 3, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](48, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Закрыть"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 19, 0, !1, u["ɵnov"](n, 21), 2, "hidden"),
                l(n, 33, 0, 0 === e.filterSales().length),
                l(n, 36, 0, e.filterSales().length > 0)
            }, function(l, n) {
                l(n, 15, 0, n.component.showDate, u["ɵnov"](n, 19).disabled)
            })
        }
        var go = u["ɵccf"]("jhi-sales-dialog", io, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-sales-dialog", [], null, null, null, mo, ao)), u["ɵdid"](1, 114688, null, 0, io, [f.l, v.d, ju, v.i], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , ho = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function vo(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var bo, yo = u["ɵccf"]("jhi-encash-popup", oo, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-encash-popup", [], null, null, null, vo, ho)), u["ɵdid"](1, 245760, null, 0, oo, [f.a, to], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, []);
        !function(l) {
            l.INTEGER = "INTEGER",
            l.FLOAT = "FLOAT",
            l.BOOLEAN = "BOOLEAN",
            l.LIST = "LIST",
            l.DATE = "DATE",
            l.STRING = "STRING"
        }(bo || (bo = {}));
        var Co = function() {
            function l(l, n, e, u) {
                this.modalService = l,
                this.router = n,
                this.deviceService = e,
                this.http = u,
                this.resourceUrl = o + "api/settings",
                this.isOpen = !1
            }
            return l.prototype.open = function(l, n) {
                var e = this;
                if (!this.isOpen) {
                    if (this.isOpen = !0,
                    !n)
                        return this.deviceModalRef(l, [], "");
                    this.deviceService.find(n).subscribe(function(n) {
                        e.deviceModalRef(l, n.body.settings, n.body.deviceId)
                    })
                }
            }
            ,
            l.prototype.deviceModalRef = function(l, n, e) {
                var u = this
                  , t = this.modalService.open(l, {
                    size: "lg",
                    backdrop: "static"
                });
                return t.componentInstance.settings = n,
                t.componentInstance.deviceId = e,
                t.result.then(function(l) {
                    u.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    u.isOpen = !1
                }, function(l) {
                    u.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    u.isOpen = !1
                }),
                t
            }
            ,
            l.prototype.update = function(l) {
                return this.http.put(this.resourceUrl, l, {
                    observe: "response"
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l),u.inject(cu),u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , Ro = function() {
            function l(l, n) {
                this.activeModal = l,
                this.settingsService = n,
                this.MAX_RECORDS = 1e3,
                this.settingType = bo,
                this.settings = []
            }
            return l.prototype.ngOnInit = function() {
                this.isSaving = !1
            }
            ,
            l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.saveSetting = function(l) {
                this.subscribeToSaveResponse(this.settingsService.update(l), !1)
            }
            ,
            l.prototype.subscribeToSaveResponse = function(l, n) {
                var e = this;
                l.subscribe(function(l) {
                    return e.onSaveSuccess(l.body, n)
                }, function(l) {
                    return e.onSaveError(l)
                })
            }
            ,
            l.prototype.onSaveSuccess = function(l, n) {
                console.log("success")
            }
            ,
            l.prototype.onSaveError = function(l) {
                console.log("error")
            }
            ,
            l.prototype.onDateSelection = function(l, n) {
                n.value = (Sl.ngbDateToTimestamp(l) + 43200).toFixed(0),
                this.saveSetting(n)
            }
            ,
            l.prototype.formatDate = function(l) {
                return Sl.formatTimestampAsDate(Number(l.value))
            }
            ,
            l
        }()
          , wo = function() {
            function l(l, n) {
                this.route = l,
                this.settingsPopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    n.id && (l.modalRef = l.settingsPopupService.open(Ro, n.id))
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }()
          , Io = [[""]]
          , xo = u["ɵcrt"]({
            encapsulation: 0,
            styles: Io,
            data: {}
        });
        function So(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 12, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 16777216, null, null, 6, "input", [["class", "form-control mb-3"], ["type", "text"]], [[8, "id", 0], [8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 6)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 6).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 6)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 6)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (l.parent.context.$implicit.value = e) && t);
                "change" === n && (t = !1 !== i.saveSetting(l.parent.context.$implicit) && t);
                return t
            }, null, null)), u["ɵdid"](6, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](8, 671744, null, 0, tl.p, [[8, null], [8, null], [8, null], [6, tl.k]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](10, 16384, null, 0, tl.m, [[4, tl.l]], null, null), u["ɵdid"](11, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 8, 0, n.parent.context.$implicit.value),
                l(n, 11, 0, u["ɵinlineInterpolate"](1, "", n.parent.context.$implicit.description, ""))
            }, function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.label),
                l(n, 3, 0, n.parent.context.$implicit.name),
                l(n, 5, 0, n.parent.context.$implicit.label, u["ɵinlineInterpolate"](2, "Целое число, ", n.parent.context.$implicit.min, "-", n.parent.context.$implicit.max, ""), u["ɵnov"](n, 10).ngClassUntouched, u["ɵnov"](n, 10).ngClassTouched, u["ɵnov"](n, 10).ngClassPristine, u["ɵnov"](n, 10).ngClassDirty, u["ɵnov"](n, 10).ngClassValid, u["ɵnov"](n, 10).ngClassInvalid, u["ɵnov"](n, 10).ngClassPending)
            })
        }
        function To(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 12, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 16777216, null, null, 6, "input", [["class", "form-control mb-3"], ["type", "text"]], [[8, "id", 0], [8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 6)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 6).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 6)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 6)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (l.parent.context.$implicit.value = e) && t);
                "change" === n && (t = !1 !== i.saveSetting(l.parent.context.$implicit) && t);
                return t
            }, null, null)), u["ɵdid"](6, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](8, 671744, null, 0, tl.p, [[8, null], [8, null], [8, null], [6, tl.k]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](10, 16384, null, 0, tl.m, [[4, tl.l]], null, null), u["ɵdid"](11, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 8, 0, n.parent.context.$implicit.value),
                l(n, 11, 0, u["ɵinlineInterpolate"](1, "", n.parent.context.$implicit.description, ""))
            }, function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.label),
                l(n, 3, 0, n.parent.context.$implicit.name),
                l(n, 5, 0, n.parent.context.$implicit.label, u["ɵinlineInterpolate"](2, "Рациональное число, ", n.parent.context.$implicit.min, "-", n.parent.context.$implicit.max, ""), u["ɵnov"](n, 10).ngClassUntouched, u["ɵnov"](n, 10).ngClassTouched, u["ɵnov"](n, 10).ngClassPristine, u["ɵnov"](n, 10).ngClassDirty, u["ɵnov"](n, 10).ngClassValid, u["ɵnov"](n, 10).ngClassInvalid, u["ɵnov"](n, 10).ngClassPending)
            })
        }
        function ko(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 32, "div", [["class", "d-flex flex-wrap"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 4, "div", [["class", "d-flex flex-grow-1 pt-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (l()(),
            u["ɵted"](5, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 16777216, null, null, 23, "div", [["class", "btn-group btn-group-toggle btn-sm"], ["ngbRadioGroup", ""], ["role", "group"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "ngModelChange" === n && (u = !1 !== (l.parent.context.$implicit.value = e) && u);
                "change" === n && (u = !1 !== t.saveSetting(l.parent.context.$implicit) && u);
                return u
            }, null, null)), u["ɵdid"](9, 16384, null, 0, v.J, [], {
                name: [0, "name"]
            }, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [v.J]), u["ɵdid"](11, 671744, null, 0, tl.p, [[8, null], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](13, 16384, null, 0, tl.m, [[4, tl.l]], null, null), u["ɵdid"](14, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 6, "label", [["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), u["ɵdid"](17, 278528, null, 0, h.j, [u.IterableDiffers, u.KeyValueDiffers, u.ElementRef, u.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), u["ɵdid"](18, 16384, null, 0, v.Z, [], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function(l, n, e) {
                var t = !0;
                "change" === n && (t = !1 !== u["ɵnov"](l, 21).onChange() && t);
                "focus" === n && (t = !1 != (u["ɵnov"](l, 21).focused = !0) && t);
                "blur" === n && (t = !1 != (u["ɵnov"](l, 21).focused = !1) && t);
                return t
            }, null, null)), u["ɵdid"](21, 147456, null, 0, v.Aa, [v.J, v.Z, u.Renderer2, u.ElementRef], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" Выключен "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 6, "label", [["ngbButtonLabel", ""]], [[2, "btn", null], [2, "active", null], [2, "disabled", null], [2, "focus", null]], null, null, null, null)), u["ɵdid"](25, 278528, null, 0, h.j, [u.IterableDiffers, u.KeyValueDiffers, u.ElementRef, u.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), u["ɵdid"](26, 16384, null, 0, v.Z, [], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 1, "input", [["ngbButton", ""], ["type", "radio"]], [[8, "checked", 0], [8, "disabled", 0], [8, "name", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function(l, n, e) {
                var t = !0;
                "change" === n && (t = !1 !== u["ɵnov"](l, 29).onChange() && t);
                "focus" === n && (t = !1 != (u["ɵnov"](l, 29).focused = !0) && t);
                "blur" === n && (t = !1 != (u["ɵnov"](l, 29).focused = !1) && t);
                return t
            }, null, null)), u["ɵdid"](29, 147456, null, 0, v.Aa, [v.J, v.Z, u.Renderer2, u.ElementRef], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" Включен "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 9, 0, n.parent.context.$implicit.label),
                l(n, 11, 0, n.parent.context.$implicit.label, n.parent.context.$implicit.value),
                l(n, 14, 0, u["ɵinlineInterpolate"](1, "", n.parent.context.$implicit.description, "")),
                l(n, 17, 0, u["ɵinlineInterpolate"](1, "", n.parent.context.$implicit.value ? "btn-outline-primary" : "btn-primary", ""));
                l(n, 21, 0, 0),
                l(n, 25, 0, u["ɵinlineInterpolate"](1, "", n.parent.context.$implicit.value ? "btn-primary" : "btn-outline-primary", ""));
                l(n, 29, 0, 1)
            }, function(l, n) {
                l(n, 4, 0, n.parent.context.$implicit.label),
                l(n, 5, 0, n.parent.context.$implicit.name),
                l(n, 8, 0, n.parent.context.$implicit.label, u["ɵnov"](n, 13).ngClassUntouched, u["ɵnov"](n, 13).ngClassTouched, u["ɵnov"](n, 13).ngClassPristine, u["ɵnov"](n, 13).ngClassDirty, u["ɵnov"](n, 13).ngClassValid, u["ɵnov"](n, 13).ngClassInvalid, u["ɵnov"](n, 13).ngClassPending);
                l(n, 16, 0, !0, u["ɵnov"](n, 18).active, u["ɵnov"](n, 18).disabled, u["ɵnov"](n, 18).focused),
                l(n, 20, 0, u["ɵnov"](n, 21).checked, u["ɵnov"](n, 21).disabled, u["ɵnov"](n, 21).nameAttr);
                l(n, 24, 0, !0, u["ɵnov"](n, 26).active, u["ɵnov"](n, 26).disabled, u["ɵnov"](n, 26).focused),
                l(n, 28, 0, u["ɵnov"](n, 29).checked, u["ɵnov"](n, 29).disabled, u["ɵnov"](n, 29).nameAttr)
            })
        }
        function Do(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), u["ɵdid"](1, 147456, null, 0, tl.q, [u.ElementRef, u.Renderer2, [2, tl.t]], {
                value: [0, "value"]
            }, null), u["ɵdid"](2, 147456, null, 0, tl.x, [u.ElementRef, u.Renderer2, [8, null]], {
                value: [0, "value"]
            }, null), (l()(),
            u["ɵted"](3, null, ["", ""]))], function(l, n) {
                l(n, 1, 0, n.context.index),
                l(n, 2, 0, n.context.index)
            }, function(l, n) {
                l(n, 3, 0, n.context.$implicit)
            })
        }
        function Eo(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 15, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 9, "select", [["class", "custom-select mb-3"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "change" === n && (t = !1 !== u["ɵnov"](l, 6).onChange(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 6).onTouched() && t);
                "ngModelChange" === n && (t = !1 !== (l.parent.context.$implicit.value = e) && t);
                "change" === n && (t = !1 !== i.saveSetting(l.parent.context.$implicit) && t);
                return t
            }, null, null)), u["ɵdid"](6, 16384, null, 0, tl.t, [u.Renderer2, u.ElementRef], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.t]), u["ɵdid"](8, 671744, null, 0, tl.p, [[8, null], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](10, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Do)), u["ɵdid"](13, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 8, 0, n.parent.context.$implicit.label, n.parent.context.$implicit.value);
                var e = n.parent.context.$implicit.description.split(",");
                l(n, 13, 0, e)
            }, function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.label),
                l(n, 3, 0, n.parent.context.$implicit.name),
                l(n, 5, 0, n.parent.context.$implicit.label, u["ɵnov"](n, 10).ngClassUntouched, u["ɵnov"](n, 10).ngClassTouched, u["ɵnov"](n, 10).ngClassPristine, u["ɵnov"](n, 10).ngClassDirty, u["ɵnov"](n, 10).ngClassValid, u["ɵnov"](n, 10).ngClassInvalid, u["ɵnov"](n, 10).ngClassPending)
            })
        }
        function Mo(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 12, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 16777216, null, null, 6, "input", [["class", "form-control mb-3"], ["placeholder", "Строка"], ["type", "text"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 6)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 6).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 6)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 6)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (l.parent.context.$implicit.value = e) && t);
                "change" === n && (t = !1 !== i.saveSetting(l.parent.context.$implicit) && t);
                return t
            }, null, null)), u["ɵdid"](6, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](8, 671744, null, 0, tl.p, [[8, null], [8, null], [8, null], [6, tl.k]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](10, 16384, null, 0, tl.m, [[4, tl.l]], null, null), u["ɵdid"](11, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 8, 0, n.parent.context.$implicit.value),
                l(n, 11, 0, u["ɵinlineInterpolate"](1, "", n.parent.context.$implicit.description, ""))
            }, function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.label),
                l(n, 3, 0, n.parent.context.$implicit.name),
                l(n, 5, 0, n.parent.context.$implicit.label, u["ɵnov"](n, 10).ngClassUntouched, u["ɵnov"](n, 10).ngClassTouched, u["ɵnov"](n, 10).ngClassPristine, u["ɵnov"](n, 10).ngClassDirty, u["ɵnov"](n, 10).ngClassValid, u["ɵnov"](n, 10).ngClassInvalid, u["ɵnov"](n, 10).ngClassPending)
            })
        }
        function Po(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 18, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 12, "div", [["class", "input-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 16777216, null, null, 4, "input", [["class", "form-control"], ["ngbDatepicker", ""], ["outsideDays", "hidden"], ["pattern", "[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"], ["type", "text"]], [[8, "value", 0], [8, "disabled", 0]], [[null, "dateSelect"], [null, "input"], [null, "change"], [null, "blur"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 11).manualDateChange(e.target.value) && t);
                "change" === n && (t = !1 !== u["ɵnov"](l, 11).manualDateChange(e.target.value, !0) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 11).onBlur() && t);
                "dateSelect" === n && (t = !1 !== i.onDateSelection(e, l.parent.context.$implicit) && t);
                return t
            }, null, null)), u["ɵprd"](5120, null, tl.k, function(l) {
                return [l]
            }, [v.y]), u["ɵprd"](5120, null, tl.j, function(l) {
                return [l]
            }, [v.y]), u["ɵprd"](512, null, v.Qa, v.Qa, [v.i, v.s]), u["ɵdid"](11, 671744, [["d", 4]], 0, v.y, [v.p, u.ElementRef, u.ViewContainerRef, u.Renderer2, u.ComponentFactoryResolver, u.NgZone, v.Qa, v.i, v.o, h.c], {
                autoClose: [0, "autoClose"],
                displayMonths: [1, "displayMonths"],
                outsideDays: [2, "outsideDays"]
            }, {
                dateSelect: "dateSelect"
            }), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](13, 0, null, null, 3, "div", [["class", "input-group-append"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 0, null, null, 0, "button", [["class", "btn btn-outline-secondary fa fa-calendar"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 11).toggle() && t);
                return t
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 11, 0, !0, 1, "hidden")
            }, function(l, n) {
                var e = n.component;
                l(n, 2, 0, n.parent.context.$implicit.label),
                l(n, 3, 0, n.parent.context.$implicit.name),
                l(n, 7, 0, e.formatDate(n.parent.context.$implicit), u["ɵnov"](n, 11).disabled)
            })
        }
        function _o(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 20, "div", [], null, null, null, null, null)), u["ɵdid"](1, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, So)), u["ɵdid"](4, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, To)), u["ɵdid"](7, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ko)), u["ɵdid"](10, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Eo)), u["ɵdid"](13, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Mo)), u["ɵdid"](16, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Po)), u["ɵdid"](19, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, n.context.$implicit.type),
                l(n, 4, 0, e.settingType.INTEGER),
                l(n, 7, 0, e.settingType.FLOAT),
                l(n, 10, 0, e.settingType.BOOLEAN),
                l(n, 13, 0, e.settingType.LIST),
                l(n, 16, 0, e.settingType.STRING),
                l(n, 19, 0, e.settingType.DATE)
            }, null)
        }
        function Oo(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 8, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "h4", [["class", "modal-title"], ["id", "salesDaterange1"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "i", [["class", "fa fa-wrench text-secondary"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Технические настройки автомата"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, _o)), u["ɵdid"](14, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 6, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](19, 0, null, null, 3, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](21, 0, null, null, 0, "i", [["class", "fa fa-times"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Закрыть"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 14, 0, n.component.settings)
            }, null)
        }
        var jo = u["ɵccf"]("jhi-settings-dialog", Ro, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-settings-dialog", [], null, null, null, Oo, xo)), u["ɵdid"](1, 114688, null, 0, Ro, [v.d, Co], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Vo = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Ao(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var No = u["ɵccf"]("jhi-encash-popup", wo, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-encash-popup", [], null, null, null, Ao, Vo)), u["ɵdid"](1, 245760, null, 0, wo, [f.a, Co], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Fo = function() {
            function l(l, n) {
                this.modalService = l,
                this.router = n,
                this.isOpen = !1
            }
            return l.prototype.open = function(l, n, e, u, t, i) {
                var o = this;
                this.isOpen || (this.isOpen = !0,
                n && e && setTimeout(function() {
                    o.fileModalRef(l, n, e, u, t, i)
                }, 500))
            }
            ,
            l.prototype.fileModalRef = function(l, n, e, u, t, i) {
                var o = this
                  , d = this.modalService.open(l, {
                    size: "lg",
                    backdrop: "static"
                });
                return d.componentInstance.deviceId = n,
                d.componentInstance.deviceTz = i,
                d.componentInstance.type = e,
                d.componentInstance.from = u,
                d.componentInstance.to = t,
                d.result.then(function(l) {
                    o.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    o.isOpen = !1
                }, function(l) {
                    o.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    o.isOpen = !1
                }),
                d
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , Lo = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api",
                this.MAX_RECORDS = 1e3
            }
            return l.prototype.download = function(l, n, e, u) {
                return this.http.get(this.resourceUrl + "/" + n + "/report.xls?deviceId=" + l + "&from=" + e + "&to=" + u + "&size=" + this.MAX_RECORDS + "&sort=timestamp,asc", {
                    observe: "events",
                    responseType: "blob",
                    reportProgress: !0
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , $o = function() {
            function l(l, n, e) {
                this.reportService = l,
                this.activeModal = n,
                this.alertService = e,
                this.downloaded = 0
            }
            return l.prototype.clear = function() {
                this.subscription && this.subscription.unsubscribe(),
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.downloadFile = function() {
                var l = this;
                this.subscription = this.reportService.download(this.deviceId, this.type, this.from, this.to).subscribe(function(n) {
                    return l.onDownloadEvent(n)
                }, function(n) {
                    return l.onError(n.body)
                })
            }
            ,
            l.prototype.onDownloadEvent = function(l) {
                switch (l.type) {
                case I.g.Sent:
                    break;
                case I.g.DownloadProgress:
                    this.downloaded = l.loaded / l.total * 100;
                    break;
                case I.g.ResponseHeader:
                    this.headers = l.headers;
                    break;
                case I.g.Response:
                    this.saveFile(l.body)
                }
            }
            ,
            l.prototype.formatDate = function(l) {
                return Sl.formatTimestampAsDate(l, this.deviceTz)
            }
            ,
            l.prototype.getFileName = function() {
                var l = "Журнал за";
                switch (this.type) {
                case "alerts":
                    l = "Журнал аварий за ";
                    break;
                case "sale-info-messages":
                    l = "Журнал продаж за ";
                    break;
                case "encash":
                    l = "Журнал инкассаций за "
                }
                return l + this.formatDate(this.from) + " - " + this.formatDate(this.to) + ".xlsx"
            }
            ,
            l.prototype.saveFile = function(l) {
                var n = this.getFileName();
                fe.saveAs(l, n),
                this.clear()
            }
            ,
            l.prototype.onError = function(l) {
                this.alertService.error(l.error, l.message, null)
            }
            ,
            l.prototype.ngOnInit = function() {
                this.downloadFile()
            }
            ,
            l
        }()
          , Uo = function() {
            function l(l, n) {
                this.route = l,
                this.reportPopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    l.modalRef = l.reportPopupService.open($o, n.id, n.type, n.from, n.to, n.tz)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }()
          , qo = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function zo(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "ngb-progressbar", [["type", "success"]], null, null, null, ul.h, ul.e)), u["ɵdid"](1, 49152, null, 0, v.G, [v.H], {
                max: [0, "max"],
                animated: [1, "animated"],
                striped: [2, "striped"],
                type: [3, "type"],
                value: [4, "value"]
            }, null), (l()(),
            u["ɵted"](-1, 0, [" "]))], function(l, n) {
                l(n, 1, 0, 100, !1, !0, "success", n.component.downloaded)
            }, null)
        }
        function Bo(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Загрузка файла"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 13, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](13, 180224, null, 0, bl, [ve.a, q.a], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 0, null, null, 7, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
            u["ɵted"](18, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, zo)), u["ɵdid"](21, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 9, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](27, 0, null, null, 6, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](31, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 21, 0, n.component.downloaded)
            }, function(l, n) {
                l(n, 18, 0, n.component.getFileName())
            })
        }
        var Ko = u["ɵccf"]("jhi-report-download-dialog", $o, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-report-download-dialog", [], null, null, null, Bo, qo)), u["ɵdid"](1, 114688, null, 0, $o, [Lo, v.d, ve.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Ho = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Zo(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var Wo = u["ɵccf"]("jhi-report-download-popup", Uo, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-report-download-popup", [], null, null, null, Zo, Ho)), u["ɵdid"](1, 245760, null, 0, Uo, [f.a, Fo], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Yo = e(33)
          , Qo = e(9)
          , Xo = e(50)
          , Go = e(162)
          , Jo = e(38)
          , ld = (function() {
            function l(l) {
                this.http = l
            }
            l.prototype.query = function(l) {
                var n = O(l);
                n.set("fromDate", l.fromDate),
                n.set("toDate", l.toDate);
                var e = o + "management/audits";
                return this.http.get(e, {
                    params: n,
                    observe: "response"
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            })
        }(),
        function() {
            function l(l, n, e, u, t, i) {
                var o = this;
                this.auditsService = l,
                this.alertService = n,
                this.parseLinks = e,
                this.activatedRoute = u,
                this.datePipe = t,
                this.router = i,
                this.itemsPerPage = vl,
                this.routeData = this.activatedRoute.data.subscribe(function(l) {
                    o.page = l.pagingParams.page,
                    o.previousPage = l.pagingParams.page,
                    o.reverse = l.pagingParams.ascending,
                    o.predicate = l.pagingParams.predicate
                })
            }
            l.prototype.ngOnInit = function() {
                this.today(),
                this.previousMonth(),
                this.loadAll()
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeData.unsubscribe()
            }
            ,
            l.prototype.previousMonth = function() {
                var l = new Date;
                l = 0 === l.getMonth() ? new Date(l.getFullYear() - 1,11,l.getDate()) : new Date(l.getFullYear(),l.getMonth() - 1,l.getDate()),
                this.fromDate = this.datePipe.transform(l, "yyyy-MM-dd")
            }
            ,
            l.prototype.today = function() {
                var l = new Date;
                l.setDate(l.getDate() + 1);
                var n = new Date(l.getFullYear(),l.getMonth(),l.getDate());
                this.toDate = this.datePipe.transform(n, "yyyy-MM-dd")
            }
            ,
            l.prototype.loadAll = function() {
                var l = this;
                this.auditsService.query({
                    page: this.page - 1,
                    size: this.itemsPerPage,
                    sort: this.sort(),
                    fromDate: this.fromDate,
                    toDate: this.toDate
                }).subscribe(function(n) {
                    return l.onSuccess(n.body, n.headers)
                }, function(n) {
                    return l.onError(n.body)
                })
            }
            ,
            l.prototype.sort = function() {
                var l = [this.predicate + "," + (this.reverse ? "asc" : "desc")];
                return "id" !== this.predicate && l.push("id"),
                l
            }
            ,
            l.prototype.loadPage = function(l) {
                l !== this.previousPage && (this.previousPage = l,
                this.transition())
            }
            ,
            l.prototype.transition = function() {
                this.router.navigate(["/admin/audits"], {
                    queryParams: {
                        page: this.page,
                        sort: this.predicate + "," + (this.reverse ? "asc" : "desc")
                    }
                }),
                this.loadAll()
            }
            ,
            l.prototype.onSuccess = function(l, n) {
                this.links = this.parseLinks.parse(n.get("link")),
                this.totalItems = n.get("X-Total-Count"),
                this.queryCount = this.totalItems,
                this.audits = l
            }
            ,
            l.prototype.onError = function(l) {
                this.alertService.error(l.error, l.message, null)
            }
        }(),
        $.b,
        function() {}(),
        function() {}(),
        function() {
            function l(l) {
                this.http = l
            }
            l.prototype.get = function() {
                var l = this;
                return this.http.get(o + "management/configprops", {
                    observe: "response"
                }).pipe(Object(T.a)(function(n) {
                    var e = []
                      , u = l.getConfigPropertiesObjects(n.body);
                    for (var t in u)
                        u.hasOwnProperty(t) && e.push(u[t]);
                    return e.sort(function(l, n) {
                        return l.prefix === n.prefix ? 0 : l.prefix < n.prefix ? -1 : 1
                    })
                }))
            }
            ,
            l.prototype.getConfigPropertiesObjects = function(l) {
                if (void 0 !== l.contexts)
                    for (var n in l.contexts)
                        if (!n.startsWith("bootstrap"))
                            return l.contexts[n].beans;
                return l.contexts.aquamon_front.beans
            }
            ,
            l.prototype.getEnv = function() {
                return this.http.get(o + "management/env", {
                    observe: "response"
                }).pipe(Object(T.a)(function(l) {
                    for (var n = {}, e = 0, u = l.body.propertySources; e < u.length; e++) {
                        var t = u[e]
                          , i = t.name
                          , o = t.properties
                          , d = [];
                        for (var r in o)
                            o.hasOwnProperty(r) && d.push({
                                key: r,
                                val: o[r].value
                            });
                        n[i] = d
                    }
                    return n
                }))
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            })
        }(),
        function() {
            function l(l) {
                this.configurationService = l,
                this.allConfiguration = null,
                this.configuration = null,
                this.configKeys = [],
                this.filter = "",
                this.orderProp = "prefix",
                this.reverse = !1
            }
            l.prototype.keys = function(l) {
                return void 0 === l ? [] : Object.keys(l)
            }
            ,
            l.prototype.ngOnInit = function() {
                var l = this;
                this.configurationService.get().subscribe(function(n) {
                    l.configuration = n;
                    for (var e = 0, u = n; e < u.length; e++) {
                        var t = u[e];
                        void 0 !== t.properties && l.configKeys.push(Object.keys(t.properties))
                    }
                }),
                this.configurationService.getEnv().subscribe(function(n) {
                    l.allConfiguration = n
                })
            }
        }(),
        function() {}(),
        function() {
            function l(l) {
                this.http = l,
                this.separator = "."
            }
            return l.prototype.checkHealth = function() {
                return this.http.get(o + "management/health")
            }
            ,
            l.prototype.transformHealthData = function(l) {
                var n = [];
                return this.flattenHealthData(n, null, l.details),
                n
            }
            ,
            l.prototype.getBaseName = function(l) {
                if (l)
                    return l.split(".")[0]
            }
            ,
            l.prototype.getSubSystemName = function(l) {
                if (l) {
                    var n = l.split(".");
                    n.splice(0, 1);
                    var e = n.join(".");
                    return e ? " - " + e : ""
                }
            }
            ,
            l.prototype.addHealthObject = function(l, n, e, u) {
                var t = {
                    name: u
                }
                  , i = {}
                  , o = !1;
                for (var d in e)
                    if (e.hasOwnProperty(d)) {
                        var r = e[d];
                        "status" === d || "error" === d ? t[d] = r : this.isHealthObject(r) || (i[d] = r,
                        o = !0)
                    }
                return o && (t.details = i),
                (n || o || t.error) && l.push(t),
                t
            }
            ,
            l.prototype.flattenHealthData = function(l, n, e) {
                for (var u in e)
                    if (e.hasOwnProperty(u)) {
                        var t = e[u];
                        this.isHealthObject(t) && (this.hasSubSystem(t) ? (this.addHealthObject(l, !1, t, this.getModuleName(n, u)),
                        this.flattenHealthData(l, this.getModuleName(n, u), t)) : this.addHealthObject(l, !0, t, this.getModuleName(n, u)))
                    }
                return l
            }
            ,
            l.prototype.getModuleName = function(l, n) {
                return l && n ? l + this.separator + n : l || (n || "")
            }
            ,
            l.prototype.hasSubSystem = function(l) {
                var n = !1;
                for (var e in l)
                    if (l.hasOwnProperty(e)) {
                        var u = l[e];
                        u && u.status && (n = !0)
                    }
                return n
            }
            ,
            l.prototype.isHealthObject = function(l) {
                var n = !1;
                for (var e in l)
                    l.hasOwnProperty(e) && "status" === e && (n = !0);
                return n
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }())
          , nd = function() {
            function l(l, n) {
                this.healthService = l,
                this.activeModal = n
            }
            return l.prototype.baseName = function(l) {
                return this.healthService.getBaseName(l)
            }
            ,
            l.prototype.subSystemName = function(l) {
                return this.healthService.getSubSystemName(l)
            }
            ,
            l.prototype.readableValue = function(l) {
                if ("diskSpace" === this.currentHealth.name) {
                    var n = l / 1073741824;
                    return n > 1 ? n.toFixed(2) + " GB" : (l / 1048576).toFixed(2) + " MB"
                }
                return "object" == typeof l ? JSON.stringify(l) : l.toString()
            }
            ,
            l
        }()
          , ed = (function() {
            function l(l, n) {
                this.modalService = l,
                this.healthService = n
            }
            l.prototype.ngOnInit = function() {
                this.refresh()
            }
            ,
            l.prototype.baseName = function(l) {
                return this.healthService.getBaseName(l)
            }
            ,
            l.prototype.getBadgeClass = function(l) {
                return "UP" === l ? "badge-success" : "badge-danger"
            }
            ,
            l.prototype.refresh = function() {
                var l = this;
                this.updatingHealth = !0,
                this.healthService.checkHealth().subscribe(function(n) {
                    l.healthData = l.healthService.transformHealthData(n),
                    l.updatingHealth = !1
                }, function(n) {
                    503 === n.status && (l.healthData = l.healthService.transformHealthData(n.error),
                    l.updatingHealth = !1)
                })
            }
            ,
            l.prototype.showHealth = function(l) {
                var n = this.modalService.open(nd);
                n.componentInstance.currentHealth = l,
                n.result.then(function(l) {}, function(l) {})
            }
            ,
            l.prototype.subSystemName = function(l) {
                return this.healthService.getSubSystemName(l)
            }
        }(),
        function() {
            function l(l) {
                this.activeModal = l,
                this.threadDumpAll = 0,
                this.threadDumpBlocked = 0,
                this.threadDumpRunnable = 0,
                this.threadDumpTimedWaiting = 0,
                this.threadDumpWaiting = 0
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.threadDump.forEach(function(n) {
                    "RUNNABLE" === n.threadState ? l.threadDumpRunnable += 1 : "WAITING" === n.threadState ? l.threadDumpWaiting += 1 : "TIMED_WAITING" === n.threadState ? l.threadDumpTimedWaiting += 1 : "BLOCKED" === n.threadState && (l.threadDumpBlocked += 1)
                }),
                this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting + this.threadDumpTimedWaiting + this.threadDumpBlocked
            }
            ,
            l.prototype.getBadgeClass = function(l) {
                return "RUNNABLE" === l ? "badge-success" : "WAITING" === l ? "badge-info" : "TIMED_WAITING" === l ? "badge-warning" : "BLOCKED" === l ? "badge-danger" : void 0
            }
            ,
            l
        }())
          , ud = (function() {
            function l(l) {
                this.http = l
            }
            l.prototype.getMetrics = function() {
                return this.http.get(o + "management/metrics")
            }
            ,
            l.prototype.threadDump = function() {
                return this.http.get(o + "management/threaddump")
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            })
        }(),
        function() {
            function l(l, n) {
                this.modalService = l,
                this.metricsService = n,
                this.metrics = {},
                this.cachesStats = {},
                this.servicesStats = {},
                this.updatingMetrics = !0,
                this.JCACHE_KEY = "jcache.statistics"
            }
            l.prototype.ngOnInit = function() {
                this.refresh()
            }
            ,
            l.prototype.refresh = function() {
                var l = this;
                this.updatingMetrics = !0,
                this.metricsService.getMetrics().subscribe(function(n) {
                    l.metrics = n,
                    l.updatingMetrics = !1,
                    l.servicesStats = {},
                    l.cachesStats = {},
                    Object.keys(n.timers).forEach(function(e) {
                        var u = n.timers[e];
                        (e.includes("web.rest") || e.includes("service")) && (l.servicesStats[e] = u)
                    }),
                    Object.keys(n.gauges).forEach(function(e) {
                        if (e.includes("jcache.statistics")) {
                            var u = n.gauges[e].value
                              , t = e.lastIndexOf(".")
                              , i = e.substr(0, t);
                            l.cachesStats[i] = {
                                name: l.JCACHE_KEY.length,
                                value: u
                            }
                        }
                    })
                })
            }
            ,
            l.prototype.refreshThreadDumpData = function() {
                var l = this;
                this.metricsService.threadDump().subscribe(function(n) {
                    var e = l.modalService.open(ed, {
                        size: "lg"
                    });
                    e.componentInstance.threadDump = n.threads,
                    e.result.then(function(l) {}, function(l) {})
                })
            }
            ,
            l.prototype.filterNaN = function(l) {
                return isNaN(l) ? 0 : l
            }
        }(),
        function() {
            function l(l, n, e) {
                this.modalService = l,
                this.router = n,
                this.userService = e,
                this.isOpen = !1
            }
            return l.prototype.open = function(l, n) {
                var e = this;
                this.isOpen || (this.isOpen = !0,
                n ? this.userService.find(n).subscribe(function(n) {
                    e.userModalRef(l, n.body)
                }) : this.isOpen = !1)
            }
            ,
            l.prototype.userModalRef = function(l, n) {
                var e = this
                  , u = this.modalService.open(l, {
                    size: "lg",
                    backdrop: "static"
                });
                return n && (u.componentInstance.user = n),
                u.result.then(function(l) {
                    e.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    e.isOpen = !1
                }, function(l) {
                    e.router.navigate([{
                        outlets: {
                            popup: null
                        }
                    }], {
                        replaceUrl: !0
                    }),
                    e.isOpen = !1
                }),
                u
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(v.z),u.inject(f.l),u.inject(j))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }())
          , td = function() {
            function l(l, n, e, u) {
                this.eventManager = l,
                this.userService = n,
                this.route = e,
                this.activeModal = u
            }
            return l.prototype.handleKeyDown = function(l) {
                this.capsLock = l.getModifierState("CapsLock")
            }
            ,
            l.prototype.ngOnInit = function() {
                var l = this;
                this.isSaving = !1,
                this.route.data.subscribe(function(n) {
                    var e = n.user;
                    l.user = e.body ? e.body : e
                }),
                this.authorities = [],
                this.userService.authorities().subscribe(function(n) {
                    l.authorities = n
                }),
                this.config = {
                    apiKey: d,
                    type: Rn.a.address
                }
            }
            ,
            l.prototype.previousState = function() {
                window.history.back()
            }
            ,
            l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.save = function() {
                var l = this;
                this.user.password !== this.confirmPassword ? this.doNotMatch = "ERROR" : (this.isSaving = !0,
                null !== this.user.id ? this.userService.update(this.user).subscribe(function(n) {
                    return l.onSaveSuccess(n)
                }, function(n) {
                    return l.onSaveError(n)
                }) : (this.user.langKey = "en",
                this.userService.create(this.user).subscribe(function(n) {
                    return l.onSaveSuccess(n)
                }, function(n) {
                    return l.onSaveError(n)
                })))
            }
            ,
            l.prototype.onSaveSuccess = function(l) {
                this.eventManager.broadcast({
                    name: "userListModification",
                    content: "OK"
                }),
                this.isSaving = !1,
                this.activeModal.dismiss(l)
            }
            ,
            l.prototype.onSaveError = function(l) {
                this.isSaving = !1,
                400 === l.status && "https://www.jhipster.tech/problem/email-already-used" === l.error.type ? this.errorEmailExists = "ERROR" : this.error = "ERROR"
            }
            ,
            l
        }()
          , id = function() {
            function l(l, n) {
                this.route = l,
                this.userPopupService = n
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.routeSub = this.route.params.subscribe(function(n) {
                    n.id ? l.modalRef = l.userPopupService.open(td, n.id) : l.modalRef = l.userPopupService.open(td)
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeSub.unsubscribe()
            }
            ,
            l
        }()
          , od = function() {
            function l(l, n, e) {
                this.userService = l,
                this.activeModal = n,
                this.eventManager = e
            }
            return l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.confirmDelete = function(l) {
                var n = this;
                this.userService.delete(l).subscribe(function(l) {
                    n.eventManager.broadcast({
                        name: "userListModification",
                        content: "Deleted a user"
                    }),
                    n.activeModal.dismiss(!0)
                })
            }
            ,
            l
        }()
          , dd = function() {
            function l(l, n, e, u, t) {
                this.eventManager = l,
                this.parseLinks = n,
                this.alertService = e,
                this.userService = u,
                this.activeModal = t,
                this.userQuery = "",
                this.selectedUsers = [],
                this.userItemsPerPage = vl,
                this.userPage = 1,
                this.userReverse = "",
                this.userPredicate = "id"
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.authorities = [],
                this.userService.authorities().subscribe(function(n) {
                    l.authorities = n
                }),
                this.loadAllUsers()
            }
            ,
            l.prototype.previousState = function() {
                window.history.back()
            }
            ,
            l.prototype.clear = function() {
                this.activeModal.dismiss("cancel")
            }
            ,
            l.prototype.loadAllUsers = function() {
                var l = this;
                this.userService.query({
                    query: this.userQuery ? this.userQuery : void 0,
                    page: this.userPage - 1,
                    size: this.userItemsPerPage,
                    sort: this.userSort()
                }).subscribe(function(n) {
                    return l.onSuccessUser(n.body, n.headers)
                }, function(n) {
                    return l.onError(n.body)
                })
            }
            ,
            l.prototype.loadUserPage = function(l) {
                console.log(l),
                this.userPage = l,
                this.loadAllUsers()
            }
            ,
            l.prototype.userSort = function() {
                var l = [this.userPredicate + "," + (this.userReverse ? "asc" : "desc")];
                return "id" !== this.userPredicate && l.push("id"),
                l
            }
            ,
            l.prototype.isUserSelected = function(l) {
                return l.id === this.selectedUserId || this.selectedUsers.find(function(n) {
                    return n.id === l.id
                })
            }
            ,
            l.prototype.userTransition = function() {
                this.loadAllUsers()
            }
            ,
            l.prototype.selectUser = function(l) {
                this.multiselect ? this.isUserSelected(l) ? this.selectedUsers = this.selectedUsers.filter(function(n) {
                    return n.id !== l.id
                }) : this.selectedUsers.push(l) : this.activeModal.dismiss(l)
            }
            ,
            l.prototype.done = function() {
                this.activeModal.dismiss(this.selectedUsers)
            }
            ,
            l.prototype.onSuccessUser = function(l, n) {
                this.links = this.parseLinks.parse(n.get("link")),
                this.userTotalItems = n.get("X-Total-Count"),
                this.users = l,
                this.userQueryCount = this.users.length
            }
            ,
            l.prototype.onError = function(l) {
                this.alertService.error(l.error, l.message, null)
            }
            ,
            l.prototype.trackIdentity = function(l, n) {
                return n.id
            }
            ,
            l
        }()
          , rd = function() {
            return function(l, n, e) {
                this.body = e,
                this.receivers = l,
                this.topic = n
            }
        }()
          , ad = function() {
            function l(l) {
                this.http = l,
                this.resourceUrl = o + "api/mail"
            }
            return l.prototype.send = function(l) {
                return console.log(l),
                this.http.post(this.resourceUrl + "/send", l, {
                    observe: "response"
                })
            }
            ,
            l.ngInjectableDef = u.defineInjectable({
                factory: function() {
                    return new l(u.inject(I.c))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
          , sd = function() {
            function l(l, n, e, u, t, i, o, d, r, a, s, c) {
                var p = this;
                this.userService = l,
                this.deviceService = n,
                this.fileService = e,
                this.alertService = u,
                this.principal = t,
                this.parseLinks = i,
                this.activatedRoute = o,
                this.router = d,
                this.eventManager = r,
                this.modalService = a,
                this.authService = s,
                this.mailService = c,
                this.isSelectPopupOpen = !1,
                this.mailTopic = "",
                this.mailBody = "",
                this.mailRecepients = [],
                this.alertTypes = xu,
                this.config = {
                    url: "/api/files/upload",
                    headers: {
                        Authorization: "Bearer " + this.authService.getToken()
                    },
                    previewsContainer: "#hiddenUploadArea",
                    maxFilesize: 1024,
                    acceptedFiles: "",
                    retryChunks: !0,
                    retryChunksLimit: 5,
                    timeout: 6e5
                },
                this.deviceQuery = "",
                this.userQuery = "",
                this.userItemsPerPage = vl,
                this.deviceItemsPerPage = vl,
                this.routeData = this.activatedRoute.data.subscribe(function() {
                    p.userPage = 1,
                    p.userReverse = "",
                    p.userPredicate = "id",
                    p.devicePage = 1,
                    p.deviceReverse = "",
                    p.devicePredicate = "id"
                }),
                this.refreshTimer = Object(Iu.a)(1e4, 1e4)
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.principal.identity().then(function(n) {
                    l.currentAccount = n,
                    l.loadAllUsers(),
                    l.loadAllDevices(),
                    l.loadAllFiles(),
                    l.registerChangeInUsers(),
                    l.registerChangeInDevices(),
                    l.registerChangeInFiles(),
                    l.subscription = l.refreshTimer.subscribe(function() {
                        l.loadAllDevices()
                    })
                })
            }
            ,
            l.prototype.ngOnDestroy = function() {
                this.routeData.unsubscribe(),
                this.subscription && this.subscription.unsubscribe()
            }
            ,
            l.prototype.registerChangeInUsers = function() {
                var l = this;
                this.eventManager.subscribe("userListModification", function() {
                    return l.loadAllUsers()
                })
            }
            ,
            l.prototype.registerChangeInDevices = function() {
                var l = this;
                this.eventManager.subscribe("deviceListModification", function() {
                    return l.loadAllDevices()
                })
            }
            ,
            l.prototype.registerChangeInFiles = function() {
                var l = this;
                this.eventManager.subscribe("fileListModification", function() {
                    return l.loadAllFiles()
                })
            }
            ,
            l.prototype.formatTimestamp = function(l) {
                return Sl.formatTimestamp(l)
            }
            ,
            l.prototype.setActive = function(l, n) {
                var e = this;
                l.activated = n,
                this.userService.update(l).subscribe(function(l) {
                    200 === l.status ? (e.error = null,
                    e.success = "OK",
                    e.loadAllUsers()) : (e.success = null,
                    e.error = "ERROR")
                })
            }
            ,
            l.prototype.setAdmin = function(l, n) {
                var e = this;
                l.authorities = n ? ["ROLE_USER", "ROLE_ADMIN"] : ["ROLE_USER"],
                this.userService.update(l).subscribe(function(l) {
                    200 === l.status ? (e.error = null,
                    e.success = "OK",
                    e.loadAllUsers()) : (e.success = null,
                    e.error = "ERROR")
                })
            }
            ,
            l.prototype.loadAllUsers = function() {
                var l = this;
                this.userService.query({
                    query: this.userQuery ? this.userQuery : void 0,
                    page: this.userPage - 1,
                    size: this.userItemsPerPage,
                    sort: this.userSort()
                }).subscribe(function(n) {
                    return l.onSuccessUser(n.body, n.headers)
                }, function(n) {
                    return l.onError(n.body)
                })
            }
            ,
            l.prototype.loadAllDevices = function() {
                var l = this;
                this.deviceService.query({
                    query: this.deviceQuery ? this.deviceQuery : void 0,
                    page: this.devicePage - 1,
                    size: this.deviceItemsPerPage,
                    sort: this.deviceSort()
                }).subscribe(function(n) {
                    return l.onSuccessDevice(n.body, n.headers)
                }, function(n) {
                    return l.onError(n.body)
                })
            }
            ,
            l.prototype.loadAllFiles = function() {
                var l = this;
                this.fileService.query({
                    size: 1e3
                }).subscribe(function(n) {
                    return l.onSuccessFile(n.body, n.headers)
                }, function(n) {
                    return l.onError(n.body)
                })
            }
            ,
            l.prototype.loadDevicePage = function(l) {
                console.log(l),
                this.devicePage = l,
                this.loadAllDevices()
            }
            ,
            l.prototype.loadUserPage = function(l) {
                console.log(l),
                this.userPage = l,
                this.loadAllUsers()
            }
            ,
            l.prototype.userSort = function() {
                var l = [this.userPredicate + "," + (this.userReverse ? "asc" : "desc")];
                return "id" !== this.userPredicate && l.push("id"),
                l
            }
            ,
            l.prototype.deviceSort = function() {
                var l = [this.devicePredicate + "," + (this.deviceReverse ? "asc" : "desc")];
                return "id" !== this.devicePredicate && l.push("id"),
                l
            }
            ,
            l.prototype.userTransition = function() {
                this.router.navigate(["/admin/user-management"], {
                    queryParams: {
                        page: this.userPage,
                        sort: this.userPredicate + "," + (this.userReverse ? "asc" : "desc")
                    }
                }),
                this.loadAllUsers()
            }
            ,
            l.prototype.deviceTransition = function() {
                this.router.navigate(["/admin/user-management"], {
                    queryParams: {
                        page: this.devicePage,
                        sort: this.devicePredicate + "," + (this.deviceReverse ? "asc" : "desc")
                    }
                }),
                this.loadAllDevices()
            }
            ,
            l.prototype.deleteUser = function(l) {
                var n = this.modalService.open(od, {
                    size: "lg",
                    backdrop: "static"
                });
                n.componentInstance.user = l,
                n.result.then(function() {}, function() {})
            }
            ,
            l.prototype.onSuccessUser = function(l, n) {
                this.links = this.parseLinks.parse(n.get("link")),
                this.userTotalItems = n.get("X-Total-Count"),
                this.users = l,
                this.userQueryCount = this.users.length
            }
            ,
            l.prototype.onSuccessDevice = function(l, n) {
                this.links = this.parseLinks.parse(n.get("link")),
                this.deviceTotalItems = n.get("X-Total-Count"),
                this.devices = l,
                this.deviceQueryCount = this.devices.length
            }
            ,
            l.prototype.onSuccessFile = function(l, n) {
                this.files = l
            }
            ,
            l.prototype.onError = function(l) {
                this.mailError = "ERROR",
                this.alertService.error(l.error, l.message, null)
            }
            ,
            l.prototype.isAdmin = function(l) {
                return -1 !== l.authorities.indexOf("ROLE_ADMIN")
            }
            ,
            l.prototype.trackIdentity = function(l, n) {
                return n.id
            }
            ,
            l.prototype.openDeleteFileDialog = function(l) {
                this.router.navigate(["/", {
                    outlets: {
                        popup: "file/" + l.id + "/delete"
                    }
                }])
            }
            ,
            l.prototype.openEditFileDialog = function(l) {
                this.router.navigate(["/", {
                    outlets: {
                        popup: "file/" + l.id + "/edit"
                    }
                }])
            }
            ,
            l.prototype.stopLoading = function(l) {
                this.componentRef && this.componentRef.directiveRef && this.componentRef.directiveRef.reset(!0),
                this.files = this.files.filter(function(l) {
                    return !l.progress
                })
            }
            ,
            l.prototype.onUploadError = function(l) {
                console.log(l)
            }
            ,
            l.prototype.onUploadSuccess = function(l) {
                var n = l[0]
                  , e = l[1][0]
                  , u = this.files.find(function(l) {
                    return l.id === n.upload.uuid
                });
                u && (u.timestamp = e.timestamp,
                u.name = e.name,
                u.description = e.description,
                u.size = e.size,
                u.id = e.id,
                u.mime = e.mime,
                u.path = e.path,
                u.progress = void 0)
            }
            ,
            l.prototype.onSending = function(l) {
                var n = l[0]
                  , e = new de(n.name,n.upload.uuid,n.type,n.name,"",n.upload.uuid,null);
                e.progress = 0,
                this.files.push(e)
            }
            ,
            l.prototype.onProgress = function(l) {
                var n = l[0]
                  , e = l[1]
                  , u = this.files.find(function(l) {
                    return l.id === n.upload.uuid
                });
                u && (u.progress = e)
            }
            ,
            l.prototype.editUser = function(l) {
                this.router.navigate(["/", {
                    outlets: {
                        popup: "user/" + l.login + "/edit"
                    }
                }])
            }
            ,
            l.prototype.changeVisibility = function(l) {
                var n = this;
                l.visible = !l.visible,
                this.fileService.update(l).subscribe(function(l) {
                    200 === l.status ? (n.error = null,
                    n.success = "OK",
                    n.loadAllFiles()) : (n.success = null,
                    n.error = "ERROR")
                })
            }
            ,
            l.prototype.openSelectUserPopup = function(l) {
                if (!this.isSelectPopupOpen)
                    return this.isSelectPopupOpen = !0,
                    this.selectUserModalRef(l)
            }
            ,
            l.prototype.selectUserModalRef = function(l) {
                var n = this
                  , e = this.modalService.open(dd, {
                    size: "lg",
                    backdrop: "static"
                });
                return l ? e.componentInstance.selectedUserId = l.ownerId : e.componentInstance.selectedUsers = this.mailRecepients,
                e.componentInstance.multiselect = void 0 === l,
                e.result.then(function() {
                    n.isSelectPopupOpen = !1
                }, function(e) {
                    n.isSelectPopupOpen = !1,
                    "cancel" !== e && (e instanceof Object && n.selectOwner(l, e),
                    e instanceof Array && (n.mailRecepients = e))
                }),
                e
            }
            ,
            l.prototype.sendMail = function() {
                var l = this;
                if (this.mailSuccess = void 0,
                this.mailError = void 0,
                this.mailRecepients.length > 0 && this.mailTopic && this.mailBody) {
                    var n = this.mailRecepients.map(function(l) {
                        return l.email
                    });
                    this.mailService.send(new rd(n,this.mailTopic,this.mailBody)).subscribe(function(n) {
                        return l.onSendSuccess(n.body, n.headers)
                    }, function(n) {
                        return l.onError(n.body)
                    })
                }
            }
            ,
            l.prototype.onSendSuccess = function(l, n) {
                this.mailSuccess = "OK"
            }
            ,
            l.prototype.selectOwner = function(l, n) {
                var e = this;
                this.isAdmin(n) ? l.ownerId = null : l.ownerId = n.id,
                this.deviceService.update(l).subscribe(function(l) {
                    200 === l.status ? (e.error = null,
                    e.success = "OK",
                    e.loadAllDevices()) : (e.success = null,
                    e.error = "ERROR")
                })
            }
            ,
            l.prototype.hasAlert = function(l, n) {
                return l.alerts && -1 !== l.alerts.indexOf(xu[n])
            }
            ,
            l.prototype.getSingleAlert = function(l) {
                return this.hasAlert(l, xu.TANK_EMPTY) ? xu.TANK_EMPTY : this.hasAlert(l, xu.NO_LINK) || !l.lastStatus ? xu.NO_LINK : this.hasAlert(l, xu.NO_SALES) ? xu.NO_SALES : null
            }
            ,
            l.prototype.openDownloadFileDialog = function(l) {
                this.router.navigate(["/", {
                    outlets: {
                        popup: "file/" + l.id + "/download"
                    }
                }])
            }
            ,
            l.prototype.selectDevicesByUser = function(l) {
                this.deviceQuery = l.id,
                this.loadAllDevices()
            }
            ,
            l.prototype.getCurrencySign = function(l) {
                switch (l.currency) {
                case au.RUR:
                    return "&#x20BD;";
                case au.KZT:
                    return "&#x20B8;";
                case au.AZN:
                    return "&#x20BC;";
                case au.UZS:
                    return "сум";
                case au.KGS:
                    return "сом";
                case au.BYR:
                    return "Br"
                }
            }
            ,
            l
        }()
          , cd = e(91)
          , pd = [[".admin-dashboard[_ngcontent-%COMP%]{padding-top:20px;background:#fff;min-height:calc(100vh - 219px)}.icon-column[_ngcontent-%COMP%]{padding:.75rem 2px}.icon-column[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:28px;height:28px;padding:0}.address-wrapper[_ngcontent-%COMP%]{max-height:32px;overflow:hidden;display:block;line-height:16px;padding:0}.files_list-description[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}dropzone[_ngcontent-%COMP%]   .dz-message[_ngcontent-%COMP%]{height:100px}"]]
          , fd = u["ɵcrt"]({
            encapsulation: 0,
            styles: pd,
            data: {}
        });
        function md(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 7, "span", [["ngbTooltip", "Дать права администратора"], ["placement", "top-left"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 3, "button", [["class", "btn btn-info btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.setAdmin(l.parent.context.$implicit, !0) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-user"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "top-left", "Дать права администратора")
            }, null)
        }
        function gd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 7, "span", [["ngbTooltip", "Отобрать права администратора"], ["placement", "top-left"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 3, "button", [["class", "btn btn-warning btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.setAdmin(l.parent.context.$implicit, !1) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-superpowers"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "top-left", "Отобрать права администратора")
            }, null)
        }
        function hd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 7, "span", [["ngbTooltip", "Aктивировать"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 3, "button", [["class", "btn btn-danger btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.setActive(l.parent.context.$implicit, !0) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-lock"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "Aктивировать")
            }, null)
        }
        function vd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 7, "span", [["ngbTooltip", "Деактивировать"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 3, "button", [["class", "btn btn-success btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.setActive(l.parent.context.$implicit, !1) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-unlock"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "Деактивировать")
            }, null)
        }
        function bd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 48, "tr", [["class", ""]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.selectDevicesByUser(l.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 8, "td", [["class", "icon-column"]], null, null, null, null, null)), u["ɵdid"](3, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, md)), u["ɵdid"](6, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, gd)), u["ɵdid"](9, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 8, "td", [["class", "icon-column"]], null, null, null, null, null)), u["ɵdid"](13, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, hd)), u["ɵdid"](16, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, vd)), u["ɵdid"](19, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](22, 0, null, null, 9, "td", [["class", "icon-column"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 16777216, null, null, 6, "span", [["ngbTooltip", "Изменить данные пользователя"]], null, null, null, null, null)), u["ɵdid"](25, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](27, 0, null, null, 2, "button", [["class", "btn btn-primary btn-sm"], ["type", "submit"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.editUser(l.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 0, "i", [["class", "fa fa-pencil"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](33, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](34, 0, null, null, 3, "span", [["class", "address-wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](35, null, [" ", ""])), (l()(),
            u["ɵeld"](36, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](37, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](39, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](40, 16777216, null, null, 2, "span", [["class", "address-wrapper"]], null, null, null, null, null)), u["ɵdid"](41, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](42, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](44, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](45, 16777216, null, null, 2, "span", [["class", "address-wrapper"]], null, null, null, null, null)), u["ɵdid"](46, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](47, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, n.component.isAdmin(n.context.$implicit));
                l(n, 6, 0, !1);
                l(n, 9, 0, !0),
                l(n, 13, 0, n.context.$implicit.activated);
                l(n, 16, 0, !1);
                l(n, 19, 0, !0);
                l(n, 25, 0, "Изменить данные пользователя"),
                l(n, 41, 0, n.context.$implicit.organization),
                l(n, 46, 0, n.context.$implicit.city)
            }, function(l, n) {
                l(n, 35, 0, n.context.$implicit.lastName),
                l(n, 37, 0, n.context.$implicit.email),
                l(n, 42, 0, n.context.$implicit.organization),
                l(n, 47, 0, n.context.$implicit.city)
            })
        }
        function yd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "p", [["class", "small text-center my-2 pb-0 mb-0 text-muted"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["Показано ", " - ", " из ", " пользователей"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 4, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "ngb-pagination", [["role", "navigation"]], null, [[null, "pageChange"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "pageChange" === n && (u = !1 !== (t.userPage = e) && u);
                "pageChange" === n && (u = !1 !== t.loadUserPage(t.userPage) && u);
                return u
            }, ul.g, ul.d)), u["ɵdid"](8, 573440, null, 0, v.C, [v.D], {
                boundaryLinks: [0, "boundaryLinks"],
                rotate: [1, "rotate"],
                collectionSize: [2, "collectionSize"],
                maxSize: [3, "maxSize"],
                page: [4, "page"],
                pageSize: [5, "pageSize"]
            }, {
                pageChange: "pageChange"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 8, 0, !0, !0, e.userTotalItems, 5, e.userPage, e.userItemsPerPage)
            }, function(l, n) {
                var e = n.component;
                l(n, 3, 0, 1 + e.userItemsPerPage * (e.userPage - 1), 1 == e.userPage ? e.userQueryCount : e.userItemsPerPage * e.userPage, e.userTotalItems)
            })
        }
        function Cd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger flex-grow-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Нет связи"]))], null, null)
        }
        function Rd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger flex-grow-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Бак пуст"]))], null, null)
        }
        function wd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-warning flex-grow-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Нет продаж"]))], null, null)
        }
        function Id(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-success flex-grow-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["В работе"]))], null, null)
        }
        function xd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "span", [["class", "badge-success pl-1 pr-1 flex-grow-0"]], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, ["", " "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 1, 0, n.parent.context.$implicit.lastStatus.totalMoney),
                l(n, 2, 0, e.getCurrencySign(n.parent.context.$implicit))
            })
        }
        function Sd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 145, "tr", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 14, "td", [["class", "icon-column"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 16777216, null, null, 11, "span", [["ngbTooltip", "Очистить данные"]], null, null, null, null, null)), u["ɵdid"](5, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 7, "button", [["class", "btn btn-danger btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 8).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](8, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](9, {
                popup: 0
            }), u["ɵpod"](10, {
                outlets: 0
            }), u["ɵpad"](11, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 0, "i", [["class", "fa fa-eraser"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 10, "td", [["class", "icon-column"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 16777216, null, null, 7, "span", [["ngbTooltip", "Сменить/назначить владельца"]], null, null, null, null, null)), u["ɵdid"](21, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](23, 0, null, null, 3, "button", [["class", "btn btn-danger btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openSelectUserPopup(l.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 0, "i", [["class", "fa fa-user"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](30, 0, null, null, 14, "td", [["class", "icon-column"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 16777216, null, null, 11, "span", [["ngbTooltip", "Просмотр и редактирование данных автомата"]], null, null, null, null, null)), u["ɵdid"](33, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](35, 0, null, null, 7, "button", [["class", "btn btn-primary btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 36).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](36, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](37, {
                popup: 0
            }), u["ɵpod"](38, {
                outlets: 0
            }), u["ɵpad"](39, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](41, 0, null, null, 0, "i", [["class", "fa fa-pencil"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](46, 0, null, null, 14, "td", [["class", "icon-column"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](48, 16777216, null, null, 11, "span", [["ngbTooltip", "Технические настройки автомата"]], null, null, null, null, null)), u["ɵdid"](49, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](51, 0, null, null, 7, "button", [["class", "btn btn-primary btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 52).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](52, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](53, {
                popup: 0
            }), u["ɵpod"](54, {
                outlets: 0
            }), u["ɵpad"](55, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](57, 0, null, null, 0, "i", [["class", "fa fa-gear"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](62, 0, null, null, 14, "td", [["class", "icon-column"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](64, 16777216, null, null, 11, "span", [["ngbTooltip", "Список продаж"]], null, null, null, null, null)), u["ɵdid"](65, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](67, 0, null, null, 7, "button", [["class", "btn btn-success btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 68).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](68, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](69, {
                popup: 0
            }), u["ɵpod"](70, {
                outlets: 0
            }), u["ɵpad"](71, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](73, 0, null, null, 0, "i", [["class", "fa fa-shopping-cart"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](78, 0, null, null, 14, "td", [["class", "icon-column"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](80, 16777216, null, null, 11, "span", [["ngbTooltip", "Список инкассаций"]], null, null, null, null, null)), u["ɵdid"](81, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](83, 0, null, null, 7, "button", [["class", "btn btn-secondary btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 84).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](84, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](85, {
                popup: 0
            }), u["ɵpod"](86, {
                outlets: 0
            }), u["ɵpad"](87, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](89, 0, null, null, 0, "i", [["class", "fa fa-truck"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](94, 0, null, null, 14, "td", [["class", "icon-column"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](96, 16777216, null, null, 11, "span", [["ngbTooltip", "Список аварий"]], null, null, null, null, null)), u["ɵdid"](97, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](99, 0, null, null, 7, "button", [["class", "btn btn-warning btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 100).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](100, 16384, null, 0, f.m, [f.l, f.a, [8, null], u.Renderer2, u.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), u["ɵpod"](101, {
                popup: 0
            }), u["ɵpod"](102, {
                outlets: 0
            }), u["ɵpad"](103, 2), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](105, 0, null, null, 0, "i", [["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](110, 0, null, null, 23, "td", [["width", "20%"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](111, 0, null, null, 22, "span", [["class", "address-wrapper"]], null, null, null, null, null)), u["ɵdid"](112, 16384, null, 0, h.o, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (l()(),
            u["ɵted"](113, null, [" ", ""])), (l()(),
            u["ɵeld"](114, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](116, 0, null, null, 16, "span", [["class", "text-nowrap d-flex"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Cd)), u["ɵdid"](119, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Rd)), u["ɵdid"](122, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, wd)), u["ɵdid"](125, 278528, null, 0, h.p, [u.ViewContainerRef, u.TemplateRef, h.o], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Id)), u["ɵdid"](128, 16384, null, 0, h.q, [u.ViewContainerRef, u.TemplateRef, h.o], null, null), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, xd)), u["ɵdid"](131, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](135, 0, null, null, 3, "td", [["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](136, 16777216, null, null, 2, "span", [["class", "address-wrapper"]], null, null, null, null, null)), u["ɵdid"](137, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](138, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](140, 0, null, null, 4, "td", [["width", "25%"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](141, 0, null, null, 3, "span", [["class", "address-wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](142, null, [" ", ""])), (l()(),
            u["ɵeld"](143, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](144, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 5, 0, "Очистить данные");
                var u = l(n, 11, 0, "/", l(n, 10, 0, l(n, 9, 0, "device/" + n.context.$implicit.id + "/clean")));
                l(n, 8, 0, u);
                l(n, 21, 0, "Сменить/назначить владельца");
                l(n, 33, 0, "Просмотр и редактирование данных автомата");
                var t = l(n, 39, 0, "/", l(n, 38, 0, l(n, 37, 0, "device/" + n.context.$implicit.id + "/edit")));
                l(n, 36, 0, t);
                l(n, 49, 0, "Технические настройки автомата");
                var i = l(n, 55, 0, "/", l(n, 54, 0, l(n, 53, 0, "settings/" + n.context.$implicit.id)));
                l(n, 52, 0, i);
                l(n, 65, 0, "Список продаж");
                var o = l(n, 71, 0, "/", l(n, 70, 0, l(n, 69, 0, "sales-list/" + n.context.$implicit.deviceId + "/" + n.context.$implicit.timeZone)));
                l(n, 68, 0, o);
                l(n, 81, 0, "Список инкассаций");
                var d = l(n, 87, 0, "/", l(n, 86, 0, l(n, 85, 0, "encash-list/" + n.context.$implicit.deviceId + "/" + n.context.$implicit.timeZone)));
                l(n, 84, 0, d);
                l(n, 97, 0, "Список аварий");
                var r = l(n, 103, 0, "/", l(n, 102, 0, l(n, 101, 0, "alerts-list/" + n.context.$implicit.deviceId + "/" + n.context.$implicit.timeZone)));
                l(n, 100, 0, r),
                l(n, 112, 0, e.getSingleAlert(n.context.$implicit)),
                l(n, 119, 0, e.alertTypes.NO_LINK),
                l(n, 122, 0, e.alertTypes.TANK_EMPTY),
                l(n, 125, 0, e.alertTypes.NO_SALES),
                l(n, 131, 0, n.context.$implicit.lastStatus),
                l(n, 137, 0, n.context.$implicit.address)
            }, function(l, n) {
                l(n, 113, 0, n.context.$implicit.deviceId),
                l(n, 138, 0, n.context.$implicit.address),
                l(n, 142, 0, n.context.$implicit.ownerName),
                l(n, 144, 0, n.context.$implicit.ownerEmail)
            })
        }
        function Td(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "p", [["class", "small text-center my-2 pb-0 mb-0 text-muted"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["Показано ", " - ", " из ", " автоматов"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 4, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "ngb-pagination", [["role", "navigation"]], null, [[null, "pageChange"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "pageChange" === n && (u = !1 !== (t.devicePage = e) && u);
                "pageChange" === n && (u = !1 !== t.loadDevicePage(t.devicePage) && u);
                return u
            }, ul.g, ul.d)), u["ɵdid"](8, 573440, null, 0, v.C, [v.D], {
                boundaryLinks: [0, "boundaryLinks"],
                rotate: [1, "rotate"],
                collectionSize: [2, "collectionSize"],
                maxSize: [3, "maxSize"],
                page: [4, "page"],
                pageSize: [5, "pageSize"]
            }, {
                pageChange: "pageChange"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 8, 0, !0, !0, e.deviceTotalItems, 5, e.devicePage, e.deviceItemsPerPage)
            }, function(l, n) {
                var e = n.component;
                l(n, 3, 0, 1 + e.deviceItemsPerPage * (e.devicePage - 1), 1 == e.devicePage ? e.deviceQueryCount : e.deviceItemsPerPage * e.devicePage, e.deviceTotalItems)
            })
        }
        function kd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "div", [["class", "alert alert-success"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Сообщение успешно отправлено."])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function Dd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "div", [["class", "alert alert-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Произошла ошибка."])), (l()(),
            u["ɵted"](-1, null, [" Не удалось отправить сообщение. "]))], null, null)
        }
        function Ed(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, ["", ""]))], null, function(l, n) {
                var e = n.component.formatTimestamp(n.parent.context.$implicit.timestamp.toString());
                l(n, 1, 0, e)
            })
        }
        function Md(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](1, null, ["Загрузка: ", "%"]))], null, function(l, n) {
                var e = n.parent.context.$implicit.progress.toFixed(2);
                l(n, 1, 0, e)
            })
        }
        function Pd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 6, "span", [["ngbTooltip", "Изменить описание"], ["placement", "top-right"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "button", [["class", "btn btn-primary btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openEditFileDialog(l.parent.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-pencil"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "top-right", "Изменить описание")
            }, null)
        }
        function _d(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 6, "span", [["placement", "top-right"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "button", [["class", "btn btn-primary btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openDownloadFileDialog(l.parent.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-download"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "top-right", u["ɵinlineInterpolate"](2, "Файл ", n.parent.context.$implicit.mime, " ", (n.parent.context.$implicit.size / 1e6).toFixed(2), "Мб"))
            }, null)
        }
        function Od(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 7, "span", [["ngbTooltip", "Сделать невидимым"], ["placement", "top-right"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 3, "button", [["class", "btn btn-success btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.changeVisibility(l.parent.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-eye"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "top-right", "Сделать невидимым")
            }, null)
        }
        function jd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 7, "span", [["ngbTooltip", "Сделать видимым"], ["placement", "top-right"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 3, "button", [["class", "btn btn-secondary btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.changeVisibility(l.parent.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-eye-slash"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "top-right", "Сделать видимым")
            }, null)
        }
        function Vd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 6, "span", [["placement", "top-right"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "button", [["class", "btn btn-danger btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openDeleteFileDialog(l.parent.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-remove"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "top-right", u["ɵinlineInterpolate"](1, "Удалить ", n.parent.context.$implicit.name, ""))
            }, null)
        }
        function Ad(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 16777216, null, null, 6, "span", [["ngbTooltip", "Прервать загрузку"], ["placement", "top-right"]], null, null, null, null, null)), u["ɵdid"](1, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "button", [["class", "btn btn-danger btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.stopLoading(l.parent.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 0, "i", [["class", "fa fa-remove"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "top-right", "Прервать загрузку")
            }, null)
        }
        function Nd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 48, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 7, "th", [["width", "30%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ed)), u["ɵdid"](5, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Md)), u["ɵdid"](8, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 6, "td", [["width", "100%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 3, "span", [["class", "address-wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](14, null, ["", ""])), (l()(),
            u["ɵeld"](15, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](16, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](19, 0, null, null, 4, "td", [["class", "icon-column"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Pd)), u["ɵdid"](22, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 4, "td", [["class", "icon-column"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, _d)), u["ɵdid"](28, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](31, 0, null, null, 7, "td", [["class", "icon-column"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Od)), u["ɵdid"](34, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, jd)), u["ɵdid"](37, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](40, 0, null, null, 7, "td", [["class", "icon-column"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Vd)), u["ɵdid"](43, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ad)), u["ɵdid"](46, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 5, 0, n.context.$implicit.timestamp),
                l(n, 8, 0, n.context.$implicit.progress),
                l(n, 22, 0, n.context.$implicit.timestamp),
                l(n, 28, 0, n.context.$implicit.timestamp),
                l(n, 34, 0, n.context.$implicit.visible && n.context.$implicit.timestamp),
                l(n, 37, 0, !n.context.$implicit.visible && n.context.$implicit.timestamp),
                l(n, 43, 0, n.context.$implicit.timestamp),
                l(n, 46, 0, !n.context.$implicit.timestamp)
            }, function(l, n) {
                l(n, 14, 0, n.context.$implicit.name),
                l(n, 16, 0, n.context.$implicit.description)
            })
        }
        function Fd(l) {
            return u["ɵvid"](0, [u["ɵqud"](402653184, 1, {
                componentRef: 0
            }), u["ɵqud"](402653184, 2, {
                directiveRef: 0
            }), (l()(),
            u["ɵeld"](2, 0, null, null, 276, "div", [["class", "row admin-dashboard"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 85, "section", [["class", "col-12 col-lg-6 col-xl-4 left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 2, "h4", [["class", "mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-users mr-2 text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Пользователи"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 26, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 12).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 12).onReset() && t);
                return t
            }, null, null)), u["ɵdid"](11, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](12, 4210688, null, 0, tl.o, [[8, null], [8, null]], null, null), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](14, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 16, "div", [["class", "input-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 5, "input", [["class", "form-control"], ["name", "userQuery"], ["placeholder", "Поиск пользователя"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 19)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 19).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 19)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 19)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.userQuery = e) && t);
                "change" === n && (t = !1 !== i.loadAllUsers() && t);
                return t
            }, null, null)), u["ɵdid"](19, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](21, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](23, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 6, "div", [["class", "input-group-append"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](27, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.loadAllUsers() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](29, 0, null, null, 0, "i", [["class", "fa fa-search"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 1, "small", [["class", "form-text text-muted mb-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Ведите Email, фамилию, организацию или населённый пункт. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](38, 0, null, null, 47, "table", [["class", "table table-responsive table-striped small mb-0 pb-0 c-tbl"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](40, 0, null, null, 38, "thead", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](42, 0, null, null, 35, "tr", [["class", "c-tr-bgcolor-white"], ["jhiSort", ""]], null, [[null, "predicateChange"], [null, "ascendingChange"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "predicateChange" === n && (u = !1 !== (t.userPredicate = e) && u);
                "ascendingChange" === n && (u = !1 !== (t.userReverse = e) && u);
                return u
            }, null, null)), u["ɵdid"](43, 16384, null, 0, Yo.a, [u.ElementRef, u.Renderer, Qo.a], {
                predicate: [0, "predicate"],
                ascending: [1, "ascending"],
                callback: [2, "callback"]
            }, {
                predicateChange: "predicateChange",
                ascendingChange: "ascendingChange"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](45, 0, null, null, 1, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](46, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](48, 0, null, null, 4, "th", [["class", "icon-column"], ["jhiSortBy", "activated"], ["nowrap", "nowrap"], ["width", "5%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 49).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](49, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](51, 0, null, null, 0, "span", [["class", "pr-2"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](52, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](54, 0, null, null, 1, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](55, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](57, 0, null, null, 5, "th", [["jhiSortBy", "lastName"], ["nowrap", "nowrap"], ["width", "25%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 58).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](58, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](60, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Фамилия/email"])), (l()(),
            u["ɵeld"](62, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](64, 0, null, null, 5, "th", [["jhiSortBy", "organization"], ["nowrap", "nowrap"], ["width", "30%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 65).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](65, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](67, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Организация"])), (l()(),
            u["ɵeld"](69, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](71, 0, null, null, 5, "th", [["jhiSortBy", "city"], ["nowrap", "nowrap"], ["width", "30%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 72).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](72, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](74, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Город"])), (l()(),
            u["ɵeld"](76, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](80, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, bd)), u["ɵdid"](83, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, yd)), u["ɵdid"](88, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](91, 0, null, null, 101, "section", [["class", "col-12 col-lg-6 col-xl-4 center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](93, 0, null, null, 2, "h4", [["class", "mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](94, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-map-marker mr-2 text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Автоматы"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](97, 0, null, null, 26, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 99).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 99).onReset() && t);
                return t
            }, null, null)), u["ɵdid"](98, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](99, 4210688, null, 0, tl.o, [[8, null], [8, null]], null, null), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](101, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](103, 0, null, null, 16, "div", [["class", "input-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](105, 0, null, null, 5, "input", [["class", "form-control"], ["name", "deviceQuery"], ["placeholder", "Поиск автомата"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 106)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 106).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 106)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 106)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.deviceQuery = e) && t);
                "change" === n && (t = !1 !== i.loadAllDevices() && t);
                return t
            }, null, null)), u["ɵdid"](106, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](108, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](110, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](112, 0, null, null, 6, "div", [["class", "input-group-append"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](114, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.loadAllDevices() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](116, 0, null, null, 0, "i", [["class", "fa fa-search"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](121, 0, null, null, 1, "small", [["class", "form-text text-muted mb-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите ID или адрес автомата. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](125, 0, null, null, 63, "table", [["class", "table table-responsive table-striped small mb-0 pb-0 c-tbl"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](127, 0, null, null, 54, "thead", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](129, 0, null, null, 51, "tr", [["class", "c-tr-bgcolor-white"], ["jhiSort", ""]], null, [[null, "predicateChange"], [null, "ascendingChange"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "predicateChange" === n && (u = !1 !== (t.devicePredicate = e) && u);
                "ascendingChange" === n && (u = !1 !== (t.deviceReverse = e) && u);
                return u
            }, null, null)), u["ɵdid"](130, 16384, null, 0, Yo.a, [u.ElementRef, u.Renderer, Qo.a], {
                predicate: [0, "predicate"],
                ascending: [1, "ascending"],
                callback: [2, "callback"]
            }, {
                predicateChange: "predicateChange",
                ascendingChange: "ascendingChange"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](132, 0, null, null, 2, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](134, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](136, 0, null, null, 2, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](138, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](140, 0, null, null, 2, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](142, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](144, 0, null, null, 2, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](146, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](148, 0, null, null, 2, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](150, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](152, 0, null, null, 2, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](154, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](156, 0, null, null, 2, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "4%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](158, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](160, 0, null, null, 5, "th", [["jhiSortBy", "deviceId"], ["nowrap", "nowrap"], ["width", "25%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 161).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](161, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](163, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["ID автомата"])), (l()(),
            u["ɵeld"](165, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](167, 0, null, null, 5, "th", [["jhiSortBy", "address"], ["nowrap", "nowrap"], ["width", "25%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 168).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](168, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](170, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Адрес"])), (l()(),
            u["ɵeld"](172, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](174, 0, null, null, 5, "th", [["jhiSortBy", "ownerId"], ["nowrap", "nowrap"], ["width", "20%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 175).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](175, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](177, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Владелец"])), (l()(),
            u["ɵeld"](179, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](183, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Sd)), u["ɵdid"](186, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Td)), u["ɵdid"](191, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](194, 0, null, null, 83, "section", [["class", "col-12 col-lg-6 col-xl-4 right"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](196, 0, null, null, 2, "h4", [["class", "mb-3"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](197, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-envelope text-warning mr-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Рассылка сообщений"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, kd)), u["ɵdid"](201, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Dd)), u["ɵdid"](204, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](206, 0, null, null, 32, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 208).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 208).onReset() && t);
                "submit" === n && (t = !1 !== i.sendMail() && t);
                return t
            }, null, null)), u["ɵdid"](207, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](208, 4210688, null, 0, tl.o, [[8, null], [8, null]], null, null), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](210, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](212, 0, null, null, 5, "input", [["class", "form-control mb-2"], ["name", "mailTopic"], ["placeholder", "Тема сообщения ..."]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 213)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 213).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 213)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 213)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.mailTopic = e) && t);
                return t
            }, null, null)), u["ɵdid"](213, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](215, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](217, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](219, 0, null, null, 5, "textarea", [["class", "form-control"], ["name", "mailBody"], ["placeholder", "Текст сообщения ..."], ["rows", "3"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 220)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 220).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 220)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 220)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.mailBody = e) && t);
                return t
            }, null, null)), u["ɵdid"](220, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](222, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](224, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](226, 0, null, null, 11, "div", [["class", "form-row mt-3 ml-0"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](228, 0, null, null, 3, "button", [["class", "btn btn-primary btn-sm mb-2 ml-1"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.openSelectUserPopup(void 0) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](230, 0, null, null, 0, "i", [["class", "fa fa-users mr-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](231, null, ["Выбрать получателей (", ") "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](233, 0, null, null, 3, "button", [["class", "btn btn-primary btn-sm mb-2 ml-1"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](235, 0, null, null, 0, "i", [["class", "fa fa-envelope mr-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отправить сообщение "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](240, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](242, 0, null, null, 2, "h4", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](243, 0, null, null, 0, "i", [["class", "fa fa-download text-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Файлы"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](246, 0, null, null, 24, "table", [["class", "table table-responsive table-striped small mb-0 pb-0 c-tbl"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](248, 0, null, null, 15, "thead", [["class", "custom-thead-bg-gray"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](250, 0, null, null, 1, "th", [["width", "30%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Дата"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](253, 0, null, null, 1, "th", [["width", "50%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Имя/Описание"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](256, 0, null, null, 0, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](258, 0, null, null, 0, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](260, 0, null, null, 0, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](262, 0, null, null, 0, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](265, 0, null, null, 4, "tbody", [["id", "uploaded"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Nd)), u["ɵdid"](268, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](272, 0, null, null, 2, "dropzone", [["id", "upload"]], null, [[null, "error"], [null, "success"], [null, "sending"], [null, "complete"], [null, "cancelled"], [null, "uploadProgress"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "error" === n && (u = !1 !== t.onUploadError(e) && u);
                "success" === n && (u = !1 !== t.onUploadSuccess(e) && u);
                "sending" === n && (u = !1 !== t.onSending(e) && u);
                "complete" === n && (u = !1 !== t.onUploadError(e) && u);
                "cancelled" === n && (u = !1 !== t.onUploadError(e) && u);
                "uploadProgress" === n && (u = !1 !== t.onProgress(e) && u);
                return u
            }, Go.b, Go.a)), u["ɵdid"](273, 114688, [[1, 4]], 0, Jo.b, [u.PLATFORM_ID], {
                config: [0, "config"],
                message: [1, "message"]
            }, {
                DZ_ERROR: "error",
                DZ_SUCCESS: "success",
                DZ_SENDING: "sending",
                DZ_COMPLETE: "complete",
                DZ_UPLOADPROGRESS: "uploadProgress"
            }), (l()(),
            u["ɵted"](-1, 0, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](276, 0, null, null, 0, "div", [["class", "d-none"], ["id", "hiddenUploadArea"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 21, 0, "userQuery", e.userQuery),
                l(n, 43, 0, e.userPredicate, e.userReverse, e.userTransition.bind(e));
                l(n, 49, 0, "activated");
                l(n, 58, 0, "lastName");
                l(n, 65, 0, "organization");
                l(n, 72, 0, "city"),
                l(n, 83, 0, e.users, e.trackIdentity),
                l(n, 88, 0, e.users);
                l(n, 108, 0, "deviceQuery", e.deviceQuery),
                l(n, 130, 0, e.devicePredicate, e.deviceReverse, e.deviceTransition.bind(e));
                l(n, 161, 0, "deviceId");
                l(n, 168, 0, "address");
                l(n, 175, 0, "ownerId"),
                l(n, 186, 0, e.devices),
                l(n, 191, 0, e.devices),
                l(n, 201, 0, e.mailSuccess),
                l(n, 204, 0, e.mailError);
                l(n, 215, 0, "mailTopic", e.mailTopic);
                l(n, 222, 0, "mailBody", e.mailBody),
                l(n, 268, 0, e.files);
                l(n, 273, 0, e.config, "Перетащите файлы сюда")
            }, function(l, n) {
                var e = n.component;
                l(n, 10, 0, u["ɵnov"](n, 14).ngClassUntouched, u["ɵnov"](n, 14).ngClassTouched, u["ɵnov"](n, 14).ngClassPristine, u["ɵnov"](n, 14).ngClassDirty, u["ɵnov"](n, 14).ngClassValid, u["ɵnov"](n, 14).ngClassInvalid, u["ɵnov"](n, 14).ngClassPending),
                l(n, 18, 0, u["ɵnov"](n, 23).ngClassUntouched, u["ɵnov"](n, 23).ngClassTouched, u["ɵnov"](n, 23).ngClassPristine, u["ɵnov"](n, 23).ngClassDirty, u["ɵnov"](n, 23).ngClassValid, u["ɵnov"](n, 23).ngClassInvalid, u["ɵnov"](n, 23).ngClassPending),
                l(n, 97, 0, u["ɵnov"](n, 101).ngClassUntouched, u["ɵnov"](n, 101).ngClassTouched, u["ɵnov"](n, 101).ngClassPristine, u["ɵnov"](n, 101).ngClassDirty, u["ɵnov"](n, 101).ngClassValid, u["ɵnov"](n, 101).ngClassInvalid, u["ɵnov"](n, 101).ngClassPending),
                l(n, 105, 0, u["ɵnov"](n, 110).ngClassUntouched, u["ɵnov"](n, 110).ngClassTouched, u["ɵnov"](n, 110).ngClassPristine, u["ɵnov"](n, 110).ngClassDirty, u["ɵnov"](n, 110).ngClassValid, u["ɵnov"](n, 110).ngClassInvalid, u["ɵnov"](n, 110).ngClassPending),
                l(n, 206, 0, u["ɵnov"](n, 210).ngClassUntouched, u["ɵnov"](n, 210).ngClassTouched, u["ɵnov"](n, 210).ngClassPristine, u["ɵnov"](n, 210).ngClassDirty, u["ɵnov"](n, 210).ngClassValid, u["ɵnov"](n, 210).ngClassInvalid, u["ɵnov"](n, 210).ngClassPending),
                l(n, 212, 0, u["ɵnov"](n, 217).ngClassUntouched, u["ɵnov"](n, 217).ngClassTouched, u["ɵnov"](n, 217).ngClassPristine, u["ɵnov"](n, 217).ngClassDirty, u["ɵnov"](n, 217).ngClassValid, u["ɵnov"](n, 217).ngClassInvalid, u["ɵnov"](n, 217).ngClassPending),
                l(n, 219, 0, u["ɵnov"](n, 224).ngClassUntouched, u["ɵnov"](n, 224).ngClassTouched, u["ɵnov"](n, 224).ngClassPristine, u["ɵnov"](n, 224).ngClassDirty, u["ɵnov"](n, 224).ngClassValid, u["ɵnov"](n, 224).ngClassInvalid, u["ɵnov"](n, 224).ngClassPending),
                l(n, 231, 0, e.mailRecepients.length),
                l(n, 233, 0, 0 === e.mailRecepients.length || !e.mailTopic || !e.mailBody)
            })
        }
        var Ld = u["ɵccf"]("jhi-admin", sd, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-admin", [], null, null, null, Fd, fd)), u["ɵdid"](1, 245760, null, 0, sd, [j, cu, oe, ve.a, M, cd.a, f.a, f.l, q.a, v.z, D, ad], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , $d = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Ud(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 39, "form", [["name", "deleteForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 3).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 3).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.confirmDelete(i.file.id) && t);
                return t
            }, null, null)), u["ɵdid"](2, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](3, 4210688, [["deleteForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](5, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Удаление файла"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](19, 180224, null, 0, bl, [ve.a, q.a], null, null), (l()(),
            u["ɵted"](-1, null, [" Вы уверены, что хотите удалить этот файл? "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](22, 0, null, null, 17, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 6, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](26, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 6, "button", [["class", "btn btn-danger"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 0, "span", [["class", "fa fa-remove"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Удалить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                l(n, 1, 0, u["ɵnov"](n, 5).ngClassUntouched, u["ɵnov"](n, 5).ngClassTouched, u["ɵnov"](n, 5).ngClassPristine, u["ɵnov"](n, 5).ngClassDirty, u["ɵnov"](n, 5).ngClassValid, u["ɵnov"](n, 5).ngClassInvalid, u["ɵnov"](n, 5).ngClassPending)
            })
        }
        var qd = u["ɵccf"]("jhi-file-delete-dialog", ae, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-file-delete-dialog", [], null, null, null, Ud, $d)), u["ɵdid"](1, 114688, null, 0, ae, [oe, v.d, ve.a, q.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , zd = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Bd(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var Kd = u["ɵccf"]("jhi-dfile-delete-popup", se, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-dfile-delete-popup", [], null, null, null, Bd, zd)), u["ɵdid"](1, 245760, null, 0, se, [f.a, re], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Hd = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Zd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 53, "form", [["name", "deleteForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 3).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 3).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.save() && t);
                return t
            }, null, null)), u["ɵdid"](2, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](3, 4210688, [["deleteForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](5, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 1, "h5", [["class", "modal-title"], ["id", "exampleModalLabel"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Редактирование файла"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 18, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](19, 180224, null, 0, bl, [ve.a, q.a], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](21, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](23, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2"], ["for", "description"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Описание:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](27, 0, null, null, 5, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "description"], ["name", "description"], ["type", "text"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 28)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 28).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 28)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 28)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.file.description = e) && t);
                return t
            }, null, null)), u["ɵdid"](28, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](30, 671744, [["descriptionInput", 4]], 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](32, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](36, 0, null, null, 17, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](38, 0, null, null, 6, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](40, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](42, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](46, 0, null, null, 6, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](48, 0, null, null, 0, "span", [["class", "fa fa-save"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](50, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Сохранить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 30, 0, "description", n.component.file.description)
            }, function(l, n) {
                var e = n.component;
                l(n, 1, 0, u["ɵnov"](n, 5).ngClassUntouched, u["ɵnov"](n, 5).ngClassTouched, u["ɵnov"](n, 5).ngClassPristine, u["ɵnov"](n, 5).ngClassDirty, u["ɵnov"](n, 5).ngClassValid, u["ɵnov"](n, 5).ngClassInvalid, u["ɵnov"](n, 5).ngClassPending),
                l(n, 27, 0, e.file.name, u["ɵnov"](n, 32).ngClassUntouched, u["ɵnov"](n, 32).ngClassTouched, u["ɵnov"](n, 32).ngClassPristine, u["ɵnov"](n, 32).ngClassDirty, u["ɵnov"](n, 32).ngClassValid, u["ɵnov"](n, 32).ngClassInvalid, u["ɵnov"](n, 32).ngClassPending)
            })
        }
        var Wd = u["ɵccf"]("jhi-file-edit-dialog", ce, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-file-edit-dialog", [], null, null, null, Zd, Hd)), u["ɵdid"](1, 114688, null, 0, ce, [oe, v.d, ve.a, q.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Yd = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Qd(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var Xd = u["ɵccf"]("jhi-dfile-delete-popup", pe, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-dfile-delete-popup", [], null, null, null, Qd, Yd)), u["ɵdid"](1, 245760, null, 0, pe, [f.a, re], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Gd = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Jd(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-warning"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  «CapsLock» включен."]))], null, null)
        }
        function lr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Данные в полях «Пароль» и «Подтверждение пароля» не совпадают."]))], null, null)
        }
        function nr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Пользователь с таким адресом электронной почты уже зарегистрирован."]))], null, null)
        }
        function er(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "alert alert-danger"], ["role", "alert"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-warning"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["  Не удалось сохранить изменения. проверьте правильность заполнения и попробуйте еще раз позже."]))], null, null)
        }
        function ur(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Имя не может быть длинее 50 символов. "]))], null, null)
        }
        function tr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ur)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 63).errors.maxlength)
            }, null)
        }
        function ir(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" фамилия не может быть длинее 50 символов. "]))], null, null)
        }
        function or(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ir)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 63).errors.maxlength)
            }, null)
        }
        function dr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Отчество не может быть длинее 50 символов. "]))], null, null)
        }
        function rr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, dr)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 83).errors.maxlength)
            }, null)
        }
        function ar(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Нужно ввести email. "]))], null, null)
        }
        function sr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Email не может быть длинее ста символов. "]))], null, null)
        }
        function cr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Email не может быть короче пяти символов. "]))], null, null)
        }
        function pr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Неверный email. "]))], null, null)
        }
        function fr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 13, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ar)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, sr)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, cr)), u["ɵdid"](9, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, pr)), u["ɵdid"](12, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 104).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 104).errors.maxlength),
                l(n, 9, 0, u["ɵnov"](n.parent, 104).errors.minlength),
                l(n, 12, 0, u["ɵnov"](n.parent, 104).errors.email)
            }, null)
        }
        function mr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите номер телефона. "]))], null, null)
        }
        function gr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Неверный номер телефона. "]))], null, null)
        }
        function hr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, mr)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, gr)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 124).errors.required),
                l(n, 6, 0, u["ɵnov"](n.parent, 124).errors.invalid)
            }, null)
        }
        function vr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите наименование. "]))], null, null)
        }
        function br(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, vr)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 141).errors.required)
            }, null)
        }
        function yr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Введите населенный пункт. "]))], null, null)
        }
        function Cr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, yr)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 161).errors.required)
            }, null)
        }
        function Rr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль должен быть не менее 4 символов. "]))], null, null)
        }
        function wr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль не должен быть длинее 50 символов. "]))], null, null)
        }
        function Ir(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Rr)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, wr)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 181).errors.minlength),
                l(n, 6, 0, u["ɵnov"](n.parent, 181).errors.maxlength)
            }, null)
        }
        function xr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль должен быть не менее 4 символов. "]))], null, null)
        }
        function Sr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-danger"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Пароль не должен быть длинее 50 символов. "]))], null, null)
        }
        function Tr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, xr)), u["ɵdid"](3, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Sr)), u["ɵdid"](6, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 3, 0, u["ɵnov"](n.parent, 201).errors.minlength),
                l(n, 6, 0, u["ɵnov"](n.parent, 201).errors.maxlength)
            }, null)
        }
        function kr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 227, "form", [["class", "reg-form needs-validation"], ["name", "editForm"], ["novalidate", ""], ["role", "form"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 3).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 3).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.save() && t);
                return t
            }, null, null)), u["ɵdid"](2, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](3, 4210688, [["editForm", 4]], 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](5, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 8, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 2, "h5", [["class", "modal-title"], ["id", "editUserDataTitle"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](10, 0, null, null, 0, "span", [["class", "fa fa-user text-warning pr-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Данные пользователя"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 191, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Jd)), u["ɵdid"](20, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, lr)), u["ɵdid"](23, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, nr)), u["ɵdid"](26, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, er)), u["ɵdid"](29, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](31, 0, null, null, 18, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](33, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2"], ["for", "lastName"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](34, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Фамилия:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](37, 0, null, null, 8, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "lastName"], ["maxlength", "50"], ["name", "lastName"], ["placeholder", "Фамилия"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 38)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 38).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 38)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 38)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.user.lastName = e) && t);
                return t
            }, null, null)), u["ɵdid"](38, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](39, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](40, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n) {
                return [l, n]
            }, [tl.s, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](43, 671744, [["lastNameInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](45, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, tr)), u["ɵdid"](48, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](51, 0, null, null, 18, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](53, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2"], ["for", "firstName"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](54, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Имя:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](57, 0, null, null, 8, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "firstName"], ["maxlength", "50"], ["name", "firstName"], ["placeholder", "Имя"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 58)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 58).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 58)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 58)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.user.firstName = e) && t);
                return t
            }, null, null)), u["ɵdid"](58, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](59, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](60, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n) {
                return [l, n]
            }, [tl.s, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](63, 671744, [["firstNameInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](65, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, or)), u["ɵdid"](68, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](71, 0, null, null, 18, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](73, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2"], ["for", "patronymic"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](74, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отчество:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](77, 0, null, null, 8, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "patronymic"], ["maxlength", "50"], ["name", "patronymic"], ["placeholder", "Отчество"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 78)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 78).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 78)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 78)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.user.patronymic = e) && t);
                return t
            }, null, null)), u["ɵdid"](78, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](79, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](80, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n) {
                return [l, n]
            }, [tl.s, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](83, 671744, [["patronymicInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](85, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, rr)), u["ɵdid"](88, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](91, 0, null, null, 19, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](93, 0, null, null, 1, "label", [["class", "mb-2 mr-sm-2"], ["for", "email"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Email"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](96, 0, null, null, 10, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["email", ""], ["id", "email"], ["maxlength", "254"], ["minlength", "5"], ["name", "email"], ["placeholder", "a.petrov@mail.ru"], ["required", ""], ["type", "email"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 97)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 97).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 97)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 97)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.user.email = e) && t);
                return t
            }, null, null)), u["ɵdid"](97, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](98, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](99, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](100, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵdid"](101, 16384, null, 0, tl.f, [], {
                email: [0, "email"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n, e, u) {
                return [l, n, e, u]
            }, [tl.s, tl.i, tl.h, tl.f]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](104, 671744, [["emailInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](106, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, fr)), u["ɵdid"](109, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](112, 0, null, null, 18, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](114, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2"], ["for", "phone"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](115, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Номер моб. телефона:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](118, 0, null, null, 8, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "phone"], ["name", "phone"], ["pattern", "^\\+?[0-9-()]+$"], ["phone", ""], ["placeholder", "+7 XXX-XXX-XX-XX"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 119)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 119).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 119)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 119)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.user.phone = e) && t);
                return t
            }, null, null)), u["ɵdid"](119, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](120, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵdid"](121, 540672, null, 0, tl.r, [], {
                pattern: [0, "pattern"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n) {
                return [l, n]
            }, [tl.s, tl.r]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](124, 671744, [["phone", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](126, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, hr)), u["ɵdid"](129, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](132, 0, null, null, 15, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](134, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2"], ["for", "organization"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](135, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Наименование организации:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](138, 0, null, null, 5, "input", [["class", "form-control"], ["id", "organization"], ["name", "organization"], ["placeholder", "Наименование компании"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 139)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 139).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 139)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 139)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.user.organization = e) && t);
                return t
            }, null, null)), u["ɵdid"](139, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](141, 671744, [["organization", 4]], 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](143, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, br)), u["ɵdid"](146, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](149, 0, null, null, 18, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](151, 0, null, null, 3, "label", [["class", "mb-2 mr-sm-2"], ["for", "city"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](152, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Город"])), (l()(),
            u["ɵted"](-1, null, [" (населённый пункт):"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](156, 0, null, null, 11, "ngx-da-data", [["class", "form-control city-autocomplete"], ["id", "city"], ["name", "city"], ["placeholder", "Населённый пункт"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], ["document", "click"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "document:click" === n && (t = !1 !== u["ɵnov"](l, 159).onOutsideClick() && t);
                "ngModelChange" === n && (t = !1 !== (i.user.city = e) && t);
                return t
            }, Cn.b, Cn.a)), u["ɵdid"](157, 16384, null, 0, tl.s, [], {
                required: [0, "required"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l) {
                return [l]
            }, [tl.s]), u["ɵdid"](159, 638976, null, 0, Rn.b, [Rn.d, u.Renderer2], {
                config: [0, "config"],
                type: [1, "type"],
                placeholder: [2, "placeholder"]
            }, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [Rn.b]), u["ɵdid"](161, 671744, [["city", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](163, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Cr)), u["ɵdid"](166, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](169, 0, null, null, 18, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](171, 0, null, null, 2, "label", [["class", "mb-2 mr-sm-2"], ["for", "password"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](172, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Новый пароль:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](175, 0, null, null, 8, "input", [["class", "form-control form-control-sm mb-2 mr-sm-2"], ["id", "password"], ["maxlength", "50"], ["minlength", "4"], ["name", "password"], ["placeholder", "Не менее 4 символов"], ["type", "password"]], [[1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 176)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 176).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 176)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 176)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.user.password = e) && t);
                return t
            }, null, null)), u["ɵdid"](176, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](177, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](178, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n) {
                return [l, n]
            }, [tl.i, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](181, 671744, [["password", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](183, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ir)), u["ɵdid"](186, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](189, 0, null, null, 18, "div", [["class", "form-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](191, 0, null, null, 2, "label", [["class", "mb-2"], ["for", "confirmPassword"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](192, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Подтверждение пароля:"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](195, 0, null, null, 8, "input", [["class", "form-control form-control-sm mb-3 mr-sm-2"], ["id", "confirmPassword"], ["maxlength", "50"], ["minlength", "4"], ["name", "confirmPassword"], ["placeholder", "Пароль ещё раз"], ["type", "password"]], [[1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 196)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 196).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 196)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 196)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.confirmPassword = e) && t);
                return t
            }, null, null)), u["ɵdid"](196, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵdid"](197, 540672, null, 0, tl.i, [], {
                minlength: [0, "minlength"]
            }, null), u["ɵdid"](198, 540672, null, 0, tl.h, [], {
                maxlength: [0, "maxlength"]
            }, null), u["ɵprd"](1024, null, tl.j, function(l, n) {
                return [l, n]
            }, [tl.i, tl.h]), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](201, 671744, [["confirmPasswordInput", 4]], 0, tl.p, [[2, tl.d], [6, tl.j], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](203, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Tr)), u["ɵdid"](206, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](210, 0, null, null, 17, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](212, 0, null, null, 6, "button", [["class", "btn btn-default"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](214, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](216, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](220, 0, null, null, 6, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](222, 0, null, null, 0, "span", [["class", "fa fa-save"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](224, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Сохранить"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 20, 0, e.capsLock),
                l(n, 23, 0, e.doNotMatch),
                l(n, 26, 0, e.errorEmailExists),
                l(n, 29, 0, e.error);
                l(n, 39, 0, "");
                l(n, 40, 0, "50");
                l(n, 43, 0, "lastName", e.user.lastName),
                l(n, 48, 0, u["ɵnov"](n, 43).dirty && u["ɵnov"](n, 43).invalid);
                l(n, 59, 0, "");
                l(n, 60, 0, "50");
                l(n, 63, 0, "firstName", e.user.firstName),
                l(n, 68, 0, u["ɵnov"](n, 63).dirty && u["ɵnov"](n, 63).invalid);
                l(n, 79, 0, "");
                l(n, 80, 0, "50");
                l(n, 83, 0, "patronymic", e.user.patronymic),
                l(n, 88, 0, u["ɵnov"](n, 83).dirty && u["ɵnov"](n, 83).invalid);
                l(n, 98, 0, "");
                l(n, 99, 0, "5");
                l(n, 100, 0, "254");
                l(n, 101, 0, "");
                l(n, 104, 0, "email", e.user.email),
                l(n, 109, 0, u["ɵnov"](n, 104).dirty && u["ɵnov"](n, 104).invalid);
                l(n, 120, 0, "");
                l(n, 121, 0, "^\\+?[0-9-()]+$");
                l(n, 124, 0, "phone", e.user.phone),
                l(n, 129, 0, u["ɵnov"](n, 124).dirty && u["ɵnov"](n, 124).invalid);
                l(n, 141, 0, "organization", e.user.organization),
                l(n, 146, 0, u["ɵnov"](n, 141).dirty && u["ɵnov"](n, 141).invalid);
                l(n, 157, 0, "");
                l(n, 159, 0, e.config, "text", "Населённый пункт");
                l(n, 161, 0, "city", e.user.city),
                l(n, 166, 0, u["ɵnov"](n, 161).dirty && u["ɵnov"](n, 161).invalid);
                l(n, 177, 0, "4");
                l(n, 178, 0, "50");
                l(n, 181, 0, "password", e.user.password),
                l(n, 186, 0, u["ɵnov"](n, 181).dirty && u["ɵnov"](n, 181).invalid);
                l(n, 197, 0, "4");
                l(n, 198, 0, "50");
                l(n, 201, 0, "confirmPassword", e.confirmPassword),
                l(n, 206, 0, u["ɵnov"](n, 201).dirty && u["ɵnov"](n, 201).invalid)
            }, function(l, n) {
                l(n, 1, 0, u["ɵnov"](n, 5).ngClassUntouched, u["ɵnov"](n, 5).ngClassTouched, u["ɵnov"](n, 5).ngClassPristine, u["ɵnov"](n, 5).ngClassDirty, u["ɵnov"](n, 5).ngClassValid, u["ɵnov"](n, 5).ngClassInvalid, u["ɵnov"](n, 5).ngClassPending),
                l(n, 37, 0, u["ɵnov"](n, 39).required ? "" : null, u["ɵnov"](n, 40).maxlength ? u["ɵnov"](n, 40).maxlength : null, u["ɵnov"](n, 45).ngClassUntouched, u["ɵnov"](n, 45).ngClassTouched, u["ɵnov"](n, 45).ngClassPristine, u["ɵnov"](n, 45).ngClassDirty, u["ɵnov"](n, 45).ngClassValid, u["ɵnov"](n, 45).ngClassInvalid, u["ɵnov"](n, 45).ngClassPending),
                l(n, 57, 0, u["ɵnov"](n, 59).required ? "" : null, u["ɵnov"](n, 60).maxlength ? u["ɵnov"](n, 60).maxlength : null, u["ɵnov"](n, 65).ngClassUntouched, u["ɵnov"](n, 65).ngClassTouched, u["ɵnov"](n, 65).ngClassPristine, u["ɵnov"](n, 65).ngClassDirty, u["ɵnov"](n, 65).ngClassValid, u["ɵnov"](n, 65).ngClassInvalid, u["ɵnov"](n, 65).ngClassPending),
                l(n, 77, 0, u["ɵnov"](n, 79).required ? "" : null, u["ɵnov"](n, 80).maxlength ? u["ɵnov"](n, 80).maxlength : null, u["ɵnov"](n, 85).ngClassUntouched, u["ɵnov"](n, 85).ngClassTouched, u["ɵnov"](n, 85).ngClassPristine, u["ɵnov"](n, 85).ngClassDirty, u["ɵnov"](n, 85).ngClassValid, u["ɵnov"](n, 85).ngClassInvalid, u["ɵnov"](n, 85).ngClassPending),
                l(n, 96, 0, u["ɵnov"](n, 98).required ? "" : null, u["ɵnov"](n, 99).minlength ? u["ɵnov"](n, 99).minlength : null, u["ɵnov"](n, 100).maxlength ? u["ɵnov"](n, 100).maxlength : null, u["ɵnov"](n, 106).ngClassUntouched, u["ɵnov"](n, 106).ngClassTouched, u["ɵnov"](n, 106).ngClassPristine, u["ɵnov"](n, 106).ngClassDirty, u["ɵnov"](n, 106).ngClassValid, u["ɵnov"](n, 106).ngClassInvalid, u["ɵnov"](n, 106).ngClassPending),
                l(n, 118, 0, u["ɵnov"](n, 120).required ? "" : null, u["ɵnov"](n, 121).pattern ? u["ɵnov"](n, 121).pattern : null, u["ɵnov"](n, 126).ngClassUntouched, u["ɵnov"](n, 126).ngClassTouched, u["ɵnov"](n, 126).ngClassPristine, u["ɵnov"](n, 126).ngClassDirty, u["ɵnov"](n, 126).ngClassValid, u["ɵnov"](n, 126).ngClassInvalid, u["ɵnov"](n, 126).ngClassPending),
                l(n, 138, 0, u["ɵnov"](n, 143).ngClassUntouched, u["ɵnov"](n, 143).ngClassTouched, u["ɵnov"](n, 143).ngClassPristine, u["ɵnov"](n, 143).ngClassDirty, u["ɵnov"](n, 143).ngClassValid, u["ɵnov"](n, 143).ngClassInvalid, u["ɵnov"](n, 143).ngClassPending),
                l(n, 156, 0, u["ɵnov"](n, 157).required ? "" : null, u["ɵnov"](n, 163).ngClassUntouched, u["ɵnov"](n, 163).ngClassTouched, u["ɵnov"](n, 163).ngClassPristine, u["ɵnov"](n, 163).ngClassDirty, u["ɵnov"](n, 163).ngClassValid, u["ɵnov"](n, 163).ngClassInvalid, u["ɵnov"](n, 163).ngClassPending),
                l(n, 175, 0, u["ɵnov"](n, 177).minlength ? u["ɵnov"](n, 177).minlength : null, u["ɵnov"](n, 178).maxlength ? u["ɵnov"](n, 178).maxlength : null, u["ɵnov"](n, 183).ngClassUntouched, u["ɵnov"](n, 183).ngClassTouched, u["ɵnov"](n, 183).ngClassPristine, u["ɵnov"](n, 183).ngClassDirty, u["ɵnov"](n, 183).ngClassValid, u["ɵnov"](n, 183).ngClassInvalid, u["ɵnov"](n, 183).ngClassPending),
                l(n, 195, 0, u["ɵnov"](n, 197).minlength ? u["ɵnov"](n, 197).minlength : null, u["ɵnov"](n, 198).maxlength ? u["ɵnov"](n, 198).maxlength : null, u["ɵnov"](n, 203).ngClassUntouched, u["ɵnov"](n, 203).ngClassTouched, u["ɵnov"](n, 203).ngClassPristine, u["ɵnov"](n, 203).ngClassDirty, u["ɵnov"](n, 203).ngClassValid, u["ɵnov"](n, 203).ngClassInvalid, u["ɵnov"](n, 203).ngClassPending),
                l(n, 220, 0, u["ɵnov"](n, 3).form.invalid)
            })
        }
        var Dr = u["ɵccf"]("jhi-user-mgmt-update", td, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-user-mgmt-update", [], null, [["window", "keydown"]], function(l, n, e) {
                var t = !0;
                return "window:keydown" === n && (t = !1 !== u["ɵnov"](l, 1).handleKeyDown(e) && t),
                t
            }, kr, Gd)), u["ɵdid"](1, 114688, null, 0, td, [q.a, j, f.a, v.d], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Er = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Mr(l) {
            return u["ɵvid"](0, [], null, null)
        }
        var Pr = u["ɵccf"]("jhi-user-mgmt-popup", id, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-user-mgmt-popup", [], null, null, null, Mr, Er)), u["ɵdid"](1, 245760, null, 0, id, [f.a, ud], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , _r = e(135)
          , Or = e(28)
          , jr = e(12)
          , Vr = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Ar(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 44, "form", [["name", "deleteForm"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 2).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 2).onReset() && t);
                "ngSubmit" === n && (t = !1 !== i.confirmDelete(i.user.login) && t);
                return t
            }, null, null)), u["ɵdid"](1, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](2, 4210688, null, 0, tl.o, [[8, null], [8, null]], null, {
                ngSubmit: "ngSubmit"
            }), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](4, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](6, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Confirm delete operation"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 0, null, null, 7, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](17, 0, null, null, 1, "jhi-alert-error", [], null, null, null, Ke, qe)), u["ɵdid"](18, 180224, null, 0, bl, [ve.a, q.a], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Are you sure you want to delete this User?"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](24, 0, null, null, 19, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](26, 0, null, null, 7, "button", [["class", "btn btn-secondary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 1, "fa-icon", [["class", "ng-fa-icon"]], [[8, "innerHTML", 1]], null, null, _r.b, _r.a)), u["ɵdid"](29, 573440, null, 0, Or.a, [jr.b, Or.b], {
                iconProp: [0, "iconProp"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](31, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Cancel"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](35, 0, null, null, 7, "button", [["class", "btn btn-danger"], ["type", "submit"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](37, 0, null, null, 1, "fa-icon", [["class", "ng-fa-icon"]], [[8, "innerHTML", 1]], null, null, _r.b, _r.a)), u["ɵdid"](38, 573440, null, 0, Or.a, [jr.b, Or.b], {
                iconProp: [0, "iconProp"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](40, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Delete"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 29, 0, "ban");
                l(n, 38, 0, "times")
            }, function(l, n) {
                l(n, 0, 0, u["ɵnov"](n, 4).ngClassUntouched, u["ɵnov"](n, 4).ngClassTouched, u["ɵnov"](n, 4).ngClassPristine, u["ɵnov"](n, 4).ngClassDirty, u["ɵnov"](n, 4).ngClassValid, u["ɵnov"](n, 4).ngClassInvalid, u["ɵnov"](n, 4).ngClassPending),
                l(n, 28, 0, u["ɵnov"](n, 29).renderedIconHTML),
                l(n, 37, 0, u["ɵnov"](n, 38).renderedIconHTML)
            })
        }
        var Nr = u["ɵccf"]("jhi-user-mgmt-delete-dialog", od, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-user-mgmt-delete-dialog", [], null, null, null, Ar, Vr)), u["ɵdid"](1, 49152, null, 0, od, [j, v.d, q.a], null, null)], null, null)
        }, {}, {}, [])
          , Fr = e(92)
          , Lr = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function $r(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "td", [["class", "text-left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 1, "td", [["class", "text-left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](6, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                var e = n.component;
                l(n, 3, 0, n.context.$implicit.key),
                l(n, 6, 0, e.readableValue(n.context.$implicit.value))
            })
        }
        function Ur(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 29, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Properties"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 23, "div", [["class", "table-responsive"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 20, "table", [["class", "table table-striped"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 10, "thead", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 1, "th", [["class", "text-left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Name"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 0, null, null, 1, "th", [["class", "text-left"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Value"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](21, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 2, null, $r)), u["ɵdid"](24, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), u["ɵppd"](25, 1), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component
                  , t = u["ɵunv"](n, 24, 0, l(n, 25, 0, u["ɵnov"](n.parent, 0), e.currentHealth.details.details));
                l(n, 24, 0, t)
            }, null)
        }
        function qr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Error"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 1, "pre", [], null, null, null, null, null)), (l()(),
            u["ɵted"](6, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                l(n, 6, 0, n.component.currentHealth.error)
            })
        }
        function zr(l) {
            return u["ɵvid"](0, [u["ɵpid"](0, Fr.a, []), (l()(),
            u["ɵeld"](1, 0, null, null, 11, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 3, "h4", [["class", "modal-title"], ["id", "showHealthLabel"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "span", [["class", "text-capitalize"]], null, null, null, null, null)), (l()(),
            u["ɵted"](5, null, ["", ""])), (l()(),
            u["ɵted"](6, null, [" ", " "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 3, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.activeModal.dismiss("closed") && u);
                return u
            }, null, null)), (l()(),
            u["ɵeld"](9, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](14, 0, null, null, 7, "div", [["class", "modal-body pad"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Ur)), u["ɵdid"](17, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, qr)), u["ɵdid"](20, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](23, 0, null, null, 4, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](25, 0, null, null, 1, "button", [["class", "btn btn-secondary float-left"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.activeModal.dismiss("closed") && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["Done"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 17, 0, e.currentHealth.details),
                l(n, 20, 0, e.currentHealth.error)
            }, function(l, n) {
                var e = n.component;
                l(n, 5, 0, e.baseName(e.currentHealth.name)),
                l(n, 6, 0, e.subSystemName(e.currentHealth.name))
            })
        }
        var Br = u["ɵccf"]("jhi-health-modal", nd, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-health-modal", [], null, null, null, zr, Lr)), u["ɵdid"](1, 49152, null, 0, nd, [ld, v.d], null, null)], null, null)
        }, {}, {}, [])
          , Kr = e(130)
          , Hr = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Zr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 9, "div", [["class", "break"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 4, "samp", [], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["", ".", "("])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(),
            u["ɵted"](5, null, ["", ":", ""])), (l()(),
            u["ɵted"](-1, null, [")"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 0, "span", [["class", "mt-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], null, function(l, n) {
                l(n, 3, 0, n.context.$implicit.value.className, n.context.$implicit.value.methodName),
                l(n, 5, 0, n.context.$implicit.value.fileName, n.context.$implicit.value.lineNumber)
            })
        }
        function Wr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 73, "div", [["class", "pad"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 14, "h6", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 2, "span", [["class", "badge"]], null, null, null, null, null)), u["ɵdid"](5, 278528, null, 0, h.j, [u.IterableDiffers, u.KeyValueDiffers, u.ElementRef, u.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (l()(),
            u["ɵted"](6, null, ["", ""])), (l()(),
            u["ɵted"](7, null, [" ", " (ID ", ") "])), (l()(),
            u["ɵeld"](8, 0, null, null, 7, "a", [["href", "javascript:void(0);"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0;
                "click" === n && (u = !1 != (l.context.$implicit.show = !l.context.$implicit.show) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](10, 0, null, null, 1, "span", [], [[8, "hidden", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Show StackTrace"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 1, "span", [], [[8, "hidden", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Hide StackTrace"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](18, 0, null, null, 8, "div", [["class", "card"]], [[8, "hidden", 0]], null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 5, "div", [["class", "card-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 2, null, Zr)), u["ɵdid"](23, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), u["ɵppd"](24, 1), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 44, "table", [["class", "table table-sm table-responsive"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](30, 0, null, null, 19, "thead", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](34, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Blocked Time"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](37, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Blocked Count"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](40, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Waited Time"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](43, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Waited Count"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](46, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Lock Name"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](51, 0, null, null, 20, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](53, 0, null, null, 17, "tr", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](55, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](56, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](58, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](59, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](61, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](62, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](64, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(),
            u["ɵted"](65, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](67, 0, null, null, 2, "td", [["class", "thread-dump-modal-lock"]], [[8, "title", 0]], null, null, null, null)), (l()(),
            u["ɵeld"](68, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(),
            u["ɵted"](69, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 5, 0, "badge", n.component.getBadgeClass(n.context.$implicit.value.threadState));
                var e = u["ɵunv"](n, 23, 0, l(n, 24, 0, u["ɵnov"](n.parent, 0), n.context.$implicit.value.stackTrace));
                l(n, 23, 0, e)
            }, function(l, n) {
                l(n, 6, 0, n.context.$implicit.value.threadState),
                l(n, 7, 0, n.context.$implicit.value.threadName, n.context.$implicit.value.threadId),
                l(n, 10, 0, n.context.$implicit.show),
                l(n, 13, 0, !n.context.$implicit.show),
                l(n, 18, 0, !n.context.$implicit.show),
                l(n, 56, 0, n.context.$implicit.value.blockedTime),
                l(n, 59, 0, n.context.$implicit.value.blockedCount),
                l(n, 62, 0, n.context.$implicit.value.waitedTime),
                l(n, 65, 0, n.context.$implicit.value.waitedCount),
                l(n, 67, 0, u["ɵinlineInterpolate"](1, "", n.context.$implicit.value.lockName, "")),
                l(n, 69, 0, n.context.$implicit.value.lockName)
            })
        }
        function Yr(l) {
            return u["ɵvid"](0, [u["ɵpid"](0, Fr.a, []), u["ɵpid"](0, Kr.a, []), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 7, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Threads dump"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 1, "button", [["class", "close"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.activeModal.dismiss("closed") && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](12, 0, null, null, 41, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](14, 0, null, null, 3, "span", [["class", "badge badge-primary"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== (t.threadDumpFilter = {}) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["All "])), (l()(),
            u["ɵeld"](16, 0, null, null, 1, "span", [["class", "badge badge-pill badge-default"]], null, null, null, null, null)), (l()(),
            u["ɵted"](17, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](19, 0, null, null, 3, "span", [["class", "badge badge-success"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== (t.threadDumpFilter = {
                    threadState: "RUNNABLE"
                }) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["Runnable "])), (l()(),
            u["ɵeld"](21, 0, null, null, 1, "span", [["class", "badge badge-pill badge-default"]], null, null, null, null, null)), (l()(),
            u["ɵted"](22, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](24, 0, null, null, 3, "span", [["class", "badge badge-info"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== (t.threadDumpFilter = {
                    threadState: "WAITING"
                }) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["Waiting "])), (l()(),
            u["ɵeld"](26, 0, null, null, 1, "span", [["class", "badge badge-pill badge-default"]], null, null, null, null, null)), (l()(),
            u["ɵted"](27, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](29, 0, null, null, 3, "span", [["class", "badge badge-warning"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== (t.threadDumpFilter = {
                    threadState: "TIMED_WAITING"
                }) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["Timed Waiting "])), (l()(),
            u["ɵeld"](31, 0, null, null, 1, "span", [["class", "badge badge-pill badge-default"]], null, null, null, null, null)), (l()(),
            u["ɵted"](32, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](34, 0, null, null, 3, "span", [["class", "badge badge-danger"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== (t.threadDumpFilter = {
                    threadState: "BLOCKED"
                }) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["Blocked "])), (l()(),
            u["ɵeld"](36, 0, null, null, 1, "span", [["class", "badge badge-pill badge-default"]], null, null, null, null, null)), (l()(),
            u["ɵted"](37, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, ["  "])), (l()(),
            u["ɵeld"](39, 0, null, null, 1, "div", [["class", "mt-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" Filter "])), (l()(),
            u["ɵeld"](42, 0, null, null, 5, "input", [["class", "form-control"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 43)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 43).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 43)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 43)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.threadDumpFilter = e) && t);
                return t
            }, null, null)), u["ɵdid"](43, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](45, 671744, null, 0, tl.p, [[8, null], [8, null], [8, null], [6, tl.k]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](47, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 3, null, Wr)), u["ɵdid"](50, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), u["ɵppd"](51, 3), u["ɵppd"](52, 1), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](55, 0, null, null, 4, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](57, 0, null, null, 1, "button", [["class", "btn btn-secondary float-left"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.activeModal.dismiss("closed") && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["Done"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 45, 0, e.threadDumpFilter);
                var t = u["ɵunv"](n, 50, 0, l(n, 52, 0, u["ɵnov"](n, 0), u["ɵunv"](n, 50, 0, l(n, 51, 0, u["ɵnov"](n, 1), e.threadDump, e.threadDumpFilter, "lockName"))));
                l(n, 50, 0, t)
            }, function(l, n) {
                var e = n.component;
                l(n, 17, 0, e.threadDumpAll),
                l(n, 22, 0, e.threadDumpRunnable),
                l(n, 27, 0, e.threadDumpWaiting),
                l(n, 32, 0, e.threadDumpTimedWaiting),
                l(n, 37, 0, e.threadDumpBlocked),
                l(n, 42, 0, u["ɵnov"](n, 47).ngClassUntouched, u["ɵnov"](n, 47).ngClassTouched, u["ɵnov"](n, 47).ngClassPristine, u["ɵnov"](n, 47).ngClassDirty, u["ɵnov"](n, 47).ngClassValid, u["ɵnov"](n, 47).ngClassInvalid, u["ɵnov"](n, 47).ngClassPending)
            })
        }
        var Qr = u["ɵccf"]("jhi-metrics-modal", ed, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-metrics-modal", [], null, null, null, Yr, Hr)), u["ɵdid"](1, 114688, null, 0, ed, [v.d], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , Xr = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function Gr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "button", [["class", "btn btn-success btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.selectUser(l.parent.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function Jr(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 3, "button", [["class", "btn btn-secondary btn-sm"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.selectUser(l.parent.context.$implicit) && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function la(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 25, "tr", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 11, "td", [["class", "icon-column"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 16777216, null, null, 8, "span", [["ngbTooltip", "Выбрать пользователя"], ["placement", "top-left"]], null, null, null, null, null)), u["ɵdid"](5, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                placement: [0, "placement"],
                ngbTooltip: [1, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Gr)), u["ɵdid"](8, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, Jr)), u["ɵdid"](11, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](15, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](16, 0, null, null, 3, "span", [["class", "address-wrapper"]], null, null, null, null, null)), (l()(),
            u["ɵted"](17, null, [" ", ""])), (l()(),
            u["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            u["ɵted"](19, null, ["", ""])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](21, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(),
            u["ɵeld"](22, 16777216, null, null, 2, "span", [["class", "address-wrapper"]], null, null, null, null, null)), u["ɵdid"](23, 212992, null, 0, v.V, [u.ElementRef, u.Renderer2, u.Injector, u.ComponentFactoryResolver, u.ViewContainerRef, v.W, u.NgZone, h.c], {
                ngbTooltip: [0, "ngbTooltip"]
            }, null), (l()(),
            u["ɵted"](24, null, [" ", ""])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 5, 0, "top-left", "Выбрать пользователя"),
                l(n, 8, 0, e.isUserSelected(n.context.$implicit)),
                l(n, 11, 0, !e.isUserSelected(n.context.$implicit)),
                l(n, 23, 0, n.context.$implicit.city)
            }, function(l, n) {
                l(n, 17, 0, n.context.$implicit.lastName),
                l(n, 19, 0, n.context.$implicit.email),
                l(n, 24, 0, n.context.$implicit.city)
            })
        }
        function na(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 1, "p", [["class", "small text-center my-2 pb-0 mb-0 text-muted"]], null, null, null, null, null)), (l()(),
            u["ɵted"](3, null, ["Показано ", " - ", " из ", " пользователей"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 4, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "ngb-pagination", [["role", "navigation"]], null, [[null, "pageChange"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "pageChange" === n && (u = !1 !== (t.userPage = e) && u);
                "pageChange" === n && (u = !1 !== t.loadUserPage(t.userPage) && u);
                return u
            }, ul.g, ul.d)), u["ɵdid"](8, 573440, null, 0, v.C, [v.D], {
                boundaryLinks: [0, "boundaryLinks"],
                rotate: [1, "rotate"],
                collectionSize: [2, "collectionSize"],
                maxSize: [3, "maxSize"],
                page: [4, "page"],
                pageSize: [5, "pageSize"]
            }, {
                pageChange: "pageChange"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 8, 0, !0, !0, e.userTotalItems, 5, e.userPage, e.userItemsPerPage)
            }, function(l, n) {
                var e = n.component;
                l(n, 3, 0, 1 + e.userItemsPerPage * (e.userPage - 1), 1 == e.userPage ? e.userQueryCount : e.userItemsPerPage * e.userPage, e.userTotalItems)
            })
        }
        function ea(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 6, "button", [["class", "btn btn-primary"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.done() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](2, 0, null, null, 0, "span", [["class", "fa fa-check"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Выбрать"])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        function ua(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 8, "div", [["class", "modal-header"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 2, "h5", [["class", "modal-title"], ["id", "determinationDeviceOwnerTitle"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](4, 0, null, null, 0, "span", [["class", "oi oi-person text-info pr-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Назначение владельца автомата"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](7, 0, null, null, 1, "button", [["aria-hidden", "true"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, ["×"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 65, "div", [["class", "modal-body"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 0, null, null, 26, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(l, n, e) {
                var t = !0;
                "submit" === n && (t = !1 !== u["ɵnov"](l, 15).onSubmit(e) && t);
                "reset" === n && (t = !1 !== u["ɵnov"](l, 15).onReset() && t);
                return t
            }, null, null)), u["ɵdid"](14, 16384, null, 0, tl.v, [], null, null), u["ɵdid"](15, 4210688, null, 0, tl.o, [[8, null], [8, null]], null, null), u["ɵprd"](2048, null, tl.d, null, [tl.o]), u["ɵdid"](17, 16384, null, 0, tl.n, [[4, tl.d]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](19, 0, null, null, 16, "div", [["class", "input-group"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](21, 0, null, null, 5, "input", [["class", "form-control"], ["name", "userQuery"], ["placeholder", "Поиск пользователя"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(l, n, e) {
                var t = !0
                  , i = l.component;
                "input" === n && (t = !1 !== u["ɵnov"](l, 22)._handleInput(e.target.value) && t);
                "blur" === n && (t = !1 !== u["ɵnov"](l, 22).onTouched() && t);
                "compositionstart" === n && (t = !1 !== u["ɵnov"](l, 22)._compositionStart() && t);
                "compositionend" === n && (t = !1 !== u["ɵnov"](l, 22)._compositionEnd(e.target.value) && t);
                "ngModelChange" === n && (t = !1 !== (i.userQuery = e) && t);
                "change" === n && (t = !1 !== i.loadAllUsers() && t);
                return t
            }, null, null)), u["ɵdid"](22, 16384, null, 0, tl.e, [u.Renderer2, u.ElementRef, [2, tl.a]], null, null), u["ɵprd"](1024, null, tl.k, function(l) {
                return [l]
            }, [tl.e]), u["ɵdid"](24, 671744, null, 0, tl.p, [[2, tl.d], [8, null], [8, null], [6, tl.k]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), u["ɵprd"](2048, null, tl.l, null, [tl.p]), u["ɵdid"](26, 16384, null, 0, tl.m, [[4, tl.l]], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](28, 0, null, null, 6, "div", [["class", "input-group-append"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](30, 0, null, null, 3, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.loadAllUsers() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](32, 0, null, null, 0, "i", [["class", "fa fa-search"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](37, 0, null, null, 1, "small", [["class", "form-text text-muted mb-2"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Ведите Email или фамилию, имя, отчество, наименование организации, населённый пункт. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](41, 0, null, null, 31, "table", [["class", "table table-responsive table-striped small mb-0 pb-0 c-tbl"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](43, 0, null, null, 22, "thead", [["class", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](45, 0, null, null, 19, "tr", [["class", "c-tr-bgcolor-white"], ["jhiSort", ""]], null, [[null, "predicateChange"], [null, "ascendingChange"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "predicateChange" === n && (u = !1 !== (t.userPredicate = e) && u);
                "ascendingChange" === n && (u = !1 !== (t.userReverse = e) && u);
                return u
            }, null, null)), u["ɵdid"](46, 16384, null, 0, Yo.a, [u.ElementRef, u.Renderer, Qo.a], {
                predicate: [0, "predicate"],
                ascending: [1, "ascending"],
                callback: [2, "callback"]
            }, {
                predicateChange: "predicateChange",
                ascendingChange: "ascendingChange"
            }), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](48, 0, null, null, 1, "th", [["class", "icon-column"], ["nowrap", "nowrap"], ["width", "5%"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](49, 0, null, null, 0, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](51, 0, null, null, 5, "th", [["jhiSortBy", "lastName"], ["nowrap", "nowrap"], ["width", "55%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 52).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](52, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](54, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Фамилия/email"])), (l()(),
            u["ɵeld"](56, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](58, 0, null, null, 5, "th", [["jhiSortBy", "city"], ["nowrap", "nowrap"], ["width", "50%"]], null, [[null, "click"]], function(l, n, e) {
                var t = !0;
                "click" === n && (t = !1 !== u["ɵnov"](l, 59).onClick() && t);
                return t
            }, null, null)), u["ɵdid"](59, 4210688, null, 0, Xo.a, [Yo.a, u.ElementRef, u.Renderer, Qo.a], {
                jhiSortBy: [0, "jhiSortBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](61, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Город"])), (l()(),
            u["ɵeld"](63, 0, null, null, 0, "span", [["class", "fa fa-sort ml-1"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](67, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, la)), u["ɵdid"](70, 278528, null, 0, h.k, [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, na)), u["ɵdid"](75, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](78, 0, null, null, 12, "div", [["class", "modal-footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵand"](16777216, null, null, 1, null, ea)), u["ɵdid"](81, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](83, 0, null, null, 6, "button", [["class", "btn btn-default"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function(l, n, e) {
                var u = !0
                  , t = l.component;
                "click" === n && (u = !1 !== t.clear() && u);
                return u
            }, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](85, 0, null, null, 0, "span", [["class", "fa fa-ban"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](87, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, ["Отмена"])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                var e = n.component;
                l(n, 24, 0, "userQuery", e.userQuery),
                l(n, 46, 0, e.userPredicate, e.userReverse, e.userTransition.bind(e));
                l(n, 52, 0, "lastName");
                l(n, 59, 0, "city"),
                l(n, 70, 0, e.users, e.trackIdentity),
                l(n, 75, 0, e.users),
                l(n, 81, 0, e.multiselect)
            }, function(l, n) {
                l(n, 13, 0, u["ɵnov"](n, 17).ngClassUntouched, u["ɵnov"](n, 17).ngClassTouched, u["ɵnov"](n, 17).ngClassPristine, u["ɵnov"](n, 17).ngClassDirty, u["ɵnov"](n, 17).ngClassValid, u["ɵnov"](n, 17).ngClassInvalid, u["ɵnov"](n, 17).ngClassPending),
                l(n, 21, 0, u["ɵnov"](n, 26).ngClassUntouched, u["ɵnov"](n, 26).ngClassTouched, u["ɵnov"](n, 26).ngClassPristine, u["ɵnov"](n, 26).ngClassDirty, u["ɵnov"](n, 26).ngClassValid, u["ɵnov"](n, 26).ngClassInvalid, u["ɵnov"](n, 26).ngClassPending)
            })
        }
        var ta = u["ɵccf"]("jhi-user-list", dd, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-user-list", [], null, null, null, ua, Xr)), u["ɵdid"](1, 114688, null, 0, dd, [q.a, cd.a, ve.a, j, v.d], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , ia = function() {
            function l(l) {
                this.profileService = l
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.profileService.getProfileInfo().then(function(n) {
                    l.profileInfo = n,
                    l.ribbonEnv = n.ribbonEnv
                })
            }
            ,
            l
        }()
          , oa = [[".ribbon[_ngcontent-%COMP%]{background-color:rgba(170,0,0,.5);left:-3.5em;-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg);overflow:hidden;position:absolute;top:40px;white-space:nowrap;width:15em;z-index:9999;opacity:.75}.ribbon[_ngcontent-%COMP%], .ribbon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{pointer-events:none}.ribbon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;display:block;font-weight:400;margin:1px 0;padding:10px 50px;text-align:center;text-decoration:none;text-shadow:0 0 5px #444}"]]
          , da = u["ɵcrt"]({
            encapsulation: 0,
            styles: oa,
            data: {}
        });
        function ra(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 2, "div", [["class", "ribbon"]], null, null, null, null, null)), (l()(),
            u["ɵeld"](1, 0, null, null, 1, "a", [["href", ""]], null, null, null, null, null)), (l()(),
            u["ɵted"](2, null, ["", ""]))], null, function(l, n) {
                l(n, 2, 0, n.component.ribbonEnv)
            })
        }
        function aa(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵand"](16777216, null, null, 1, null, ra)), u["ɵdid"](1, 16384, null, 0, h.l, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.component.ribbonEnv)
            }, null)
        }
        u["ɵccf"]("jhi-page-ribbon", ia, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-page-ribbon", [], null, null, null, aa, da)), u["ɵdid"](1, 114688, null, 0, ia, [L], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, []);
        var sa = function() {
            return function() {}
        }()
          , ca = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function pa(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](1, 0, null, null, 13, "footer", [["class", "footer"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 10, "div", [["class", "container-fluid"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" © Компания Первая вода, 2020 "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](8, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Техподдержка + 7 909 101 98 13 (WhatsApp,Telegram) "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" Время работы 8.00-18.00 (мск), пн-пт. "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], null, null)
        }
        u["ɵccf"]("jhi-footer", sa, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-footer", [], null, null, null, pa, ca)), u["ɵdid"](1, 49152, null, 0, sa, [], null, null)], null, null)
        }, {}, {}, []);
        var fa = u["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function ma(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-page-ribbon", [], null, null, null, aa, da)), u["ɵdid"](1, 114688, null, 0, ia, [L], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](3, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [["name", "navbar"]], null, null, null, null, null)), u["ɵdid"](6, 212992, null, 0, f.q, [f.b, u.ViewContainerRef, u.ComponentFactoryResolver, [8, "navbar"], u.ChangeDetectorRef], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](9, 0, null, null, 13, "div", [["class", "container-fluid"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](11, 0, null, null, 7, "div", [["class", "card jh-card"]], null, null, null, null, null)), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](13, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), u["ɵdid"](14, 212992, null, 0, f.q, [f.b, u.ViewContainerRef, u.ComponentFactoryResolver, [8, null], u.ChangeDetectorRef], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](16, 16777216, null, null, 1, "router-outlet", [["name", "popup"]], null, null, null, null, null)), u["ɵdid"](17, 212992, null, 0, f.q, [f.b, u.ViewContainerRef, u.ComponentFactoryResolver, [8, "popup"], u.ChangeDetectorRef], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵeld"](20, 0, null, null, 1, "jhi-footer", [], null, null, null, pa, ca)), u["ɵdid"](21, 49152, null, 0, sa, [], null, null), (l()(),
            u["ɵted"](-1, null, [" "])), (l()(),
            u["ɵted"](-1, null, [" "]))], function(l, n) {
                l(n, 1, 0),
                l(n, 6, 0),
                l(n, 14, 0),
                l(n, 17, 0)
            }, null)
        }
        var ga = u["ɵccf"]("jhi-main", m, function(l) {
            return u["ɵvid"](0, [(l()(),
            u["ɵeld"](0, 0, null, null, 1, "jhi-main", [], null, null, null, ma, fa)), u["ɵdid"](1, 114688, null, 0, m, [jr.h, f.l], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }, {}, {}, [])
          , ha = e(18)
          , va = e(44)
          , ba = e(32)
          , ya = e(111)
          , Ca = e(110)
          , Ra = e(78)
          , wa = e(87)
          , Ia = function() {
            function l(l, n) {
                this.localStorage = l,
                this.sessionStorage = n
            }
            return l.prototype.intercept = function(l, n) {
                if (!l || !l.url || /^http/.test(l.url) && (!o || !l.url.startsWith(o)))
                    return n.handle(l);
                var e = this.localStorage.retrieve("authenticationToken") || this.sessionStorage.retrieve("authenticationToken");
                return e && (l = l.clone({
                    setHeaders: {
                        Authorization: "Bearer " + e
                    }
                })),
                n.handle(l)
            }
            ,
            l
        }()
          , xa = e(81)
          , Sa = function() {
            function l(l) {
                this.injector = l
            }
            return l.prototype.intercept = function(l, n) {
                var e = this;
                return n.handle(l).pipe(Object(xa.a)(function(l) {}, function(l) {
                    l instanceof I.f && (401 === l.status && e.injector.get(_).logout())
                }))
            }
            ,
            l
        }()
          , Ta = function() {
            function l(l) {
                this.eventManager = l
            }
            return l.prototype.intercept = function(l, n) {
                var e = this;
                return n.handle(l).pipe(Object(xa.a)(function(l) {}, function(l) {
                    l instanceof I.f && (401 === l.status && ("" === l.message || l.url && l.url.includes("/api/account")) || void 0 !== e.eventManager && e.eventManager.broadcast({
                        name: "aquamonFrontApp.httpError",
                        content: l
                    }))
                }))
            }
            ,
            l
        }()
          , ka = function() {
            function l(l) {
                var n = this;
                this.injector = l,
                setTimeout(function() {
                    return n.alertService = l.get($.a)
                })
            }
            return l.prototype.intercept = function(l, n) {
                var e = this;
                return n.handle(l).pipe(Object(xa.a)(function(l) {
                    if (l instanceof I.k) {
                        var n = l.headers.keys()
                          , u = null;
                        n.forEach(function(n) {
                            n.toLowerCase().endsWith("app-alert") && (u = l.headers.get(n))
                        }),
                        u && "string" == typeof u && e.alertService && e.alertService.success(u, null, null)
                    }
                }, function(l) {}))
            }
            ,
            l
        }()
          , Da = ([{
            path: "",
            component: U,
            outlet: "navbar"
        }].concat([{
            path: "error",
            component: J,
            data: {
                authorities: [],
                pageTitle: "aquamon_front"
            }
        }, {
            path: "accessdenied",
            component: J,
            data: {
                authorities: [],
                pageTitle: "aquamon_front",
                error403: !0
            }
        }]),
        function() {
            return function() {}
        }())
          , Ea = e(63)
          , Ma = e(160)
          , Pa = function() {
            return function() {}
        }()
          , _a = function() {
            return function() {}
        }()
          , Oa = function() {
            return function() {}
        }()
          , ja = {
            url: "",
            maxFilesize: 50,
            acceptedFiles: "image/*"
        }
          , Va = function() {
            return function() {}
        }()
          , Aa = u["ɵcmf"](p, [m], function(l) {
            return u["ɵmod"]([u["ɵmpd"](512, u.ComponentFactoryResolver, u["ɵCodegenComponentFactoryResolver"], [[8, [g.a, G, el, ul.a, ul.b, ul.l, ul.m, ul.i, ul.j, ul.k, rl, hl, zl, $l, Ql, yn, ue, Ue, We, Ge, kt, Qt, ei, ri, ji, uo, yo, No, Zt, Jt, ii, Pi, lo, go, jo, Ko, Ld, Kd, eu, Xd, Wo, Pr, Nr, Br, Qr, Dr, ta, qd, Wd, ga]], [3, u.ComponentFactoryResolver], u.NgModuleRef]), u["ɵmpd"](4352, u.LOCALE_ID, "en", []), u["ɵmpd"](4608, h.n, h.m, [u.LOCALE_ID, [2, h.D]]), u["ɵmpd"](5120, u.APP_ID, u["ɵangular_packages_core_core_f"], []), u["ɵmpd"](5120, u.IterableDiffers, u["ɵangular_packages_core_core_i"], []), u["ɵmpd"](5120, u.KeyValueDiffers, u["ɵangular_packages_core_core_j"], []), u["ɵmpd"](4608, jr.b, jr.l, [h.c]), u["ɵmpd"](6144, u.Sanitizer, null, [jr.b]), u["ɵmpd"](4608, jr.e, jr.g, []), u["ɵmpd"](5120, jr.c, function(l, n, e, u, t, i, o, d) {
                return [new jr.j(l,n,e), new jr.o(u), new jr.n(t,i,o,d)]
            }, [h.c, u.NgZone, u.PLATFORM_ID, h.c, h.c, jr.e, u["ɵConsole"], [2, jr.f]]), u["ɵmpd"](4608, jr.d, jr.d, [jr.c, u.NgZone]), u["ɵmpd"](135680, jr.m, jr.m, [h.c]), u["ɵmpd"](4608, jr.k, jr.k, [jr.d, jr.m]), u["ɵmpd"](6144, u.RendererFactory2, null, [jr.k]), u["ɵmpd"](6144, jr.p, null, [jr.m]), u["ɵmpd"](4608, u.Testability, u.Testability, [u.NgZone]), u["ɵmpd"](5120, f.a, f.B, [f.l]), u["ɵmpd"](4608, f.e, f.e, []), u["ɵmpd"](6144, f.g, null, [f.e]), u["ɵmpd"](135680, f.r, f.r, [f.l, u.NgModuleFactoryLoader, u.Compiler, u.Injector, f.g]), u["ɵmpd"](4608, f.f, f.f, []), u["ɵmpd"](5120, f.F, f.x, [f.l, h.v, f.h]), u["ɵmpd"](5120, f.i, f.E, [f.C]), u["ɵmpd"](5120, u.APP_BOOTSTRAP_LISTENER, function(l) {
                return [l]
            }, [f.i]), u["ɵmpd"](4608, R.a, R.a, []), u["ɵmpd"](4608, k.a, k.a, []), u["ɵmpd"](4608, tl.w, tl.w, []), u["ɵmpd"](4608, v.i, v.Ba, []), u["ɵmpd"](4608, v.s, xl, []), u["ɵmpd"](4608, v.p, v.Ia, []), u["ɵmpd"](4608, v.o, Il, []), u["ɵmpd"](4608, v.z, v.z, [u.ComponentFactoryResolver, u.Injector, v.Ua]), u["ɵmpd"](4608, v.R, v.Na, []), u["ɵmpd"](4608, I.p, I.p, []), u["ɵmpd"](6144, I.n, null, [I.p]), u["ɵmpd"](4608, I.l, I.l, [I.n]), u["ɵmpd"](6144, I.b, null, [I.l]), u["ɵmpd"](4608, I.h, I.o, [I.b, u.Injector]), u["ɵmpd"](4608, I.c, I.c, [I.h]), u["ɵmpd"](5120, ha.e, $.e, [I.c]), u["ɵmpd"](4608, ha.b, ha.d, []), u["ɵmpd"](4608, ha.g, ha.c, []), u["ɵmpd"](4608, Qo.a, Qo.a, [va.a]), u["ɵmpd"](5120, ha.a, $.d, [Qo.a]), u["ɵmpd"](4608, ha.i, ha.i, []), u["ɵmpd"](4608, ha.h, ha.h, [ha.i, ha.e, ha.b, ha.g, ha.a, ha.j, ha.k]), u["ɵmpd"](4608, ba.b, ba.b, [ba.a, u.Injector]), u["ɵmpd"](4608, ya.a, ya.a, [ha.h, Qo.a]), u["ɵmpd"](4608, Ca.a, Ca.a, [Ra.a]), u["ɵmpd"](4608, ve.a, ve.a, [u.Sanitizer, Qo.a, ha.h]), u["ɵmpd"](5120, y.a, wa.a, [ba.b]), u["ɵmpd"](4608, I.m, I.s, [h.c, u.PLATFORM_ID, I.q]), u["ɵmpd"](4608, I.t, I.t, [I.m, I.r]), u["ɵmpd"](5120, I.a, function(l, n, e, u, t, i) {
                return [l, new Ia(n,e), new Sa(u), new Ta(t), new ka(i)]
            }, [I.t, k.a, R.a, u.Injector, q.a, u.Injector]), u["ɵmpd"](4608, jr.h, jr.h, [h.c]), u["ɵmpd"](4608, h.d, h.d, [u.LOCALE_ID]), u["ɵmpd"](1073742336, h.b, h.b, []), u["ɵmpd"](1024, u.ErrorHandler, jr.q, []), u["ɵmpd"](1024, u.NgProbeToken, function() {
                return [f.w()]
            }, []), u["ɵmpd"](512, f.C, f.C, [u.Injector]), u["ɵmpd"](1024, u.APP_INITIALIZER, function(l, n) {
                return [jr.r(l), f.D(n)]
            }, [[2, u.NgProbeToken], f.C]), u["ɵmpd"](512, u.ApplicationInitStatus, u.ApplicationInitStatus, [[2, u.APP_INITIALIZER]]), u["ɵmpd"](131584, u.ApplicationRef, u.ApplicationRef, [u.NgZone, u["ɵConsole"], u.Injector, u.ErrorHandler, u.ComponentFactoryResolver, u.ApplicationInitStatus]), u["ɵmpd"](1073742336, u.ApplicationModule, u.ApplicationModule, [u.ApplicationRef]), u["ɵmpd"](1073742336, jr.a, jr.a, [[3, jr.a]]), u["ɵmpd"](1024, f.v, f.z, [[3, f.l]]), u["ɵmpd"](512, f.t, f.c, []), u["ɵmpd"](512, f.b, f.b, []), u["ɵmpd"](256, f.h, {
                useHash: !0,
                enableTracing: !1
            }, []), u["ɵmpd"](1024, h.i, f.y, [h.t, [2, h.a], f.h]), u["ɵmpd"](512, h.h, h.h, [h.i]), u["ɵmpd"](512, u.Compiler, u.Compiler, []), u["ɵmpd"](512, u.NgModuleFactoryLoader, u.SystemJsNgModuleLoader, [u.Compiler, [2, u.SystemJsNgModuleLoaderConfig]]), u["ɵmpd"](1024, f.j, function() {
                return [[{
                    path: "",
                    component: U,
                    outlet: "navbar"
                }, {
                    path: "error",
                    component: J,
                    data: {
                        authorities: [],
                        pageTitle: "aquamon_front"
                    }
                }, {
                    path: "accessdenied",
                    component: J,
                    data: {
                        authorities: [],
                        pageTitle: "aquamon_front",
                        error403: !0
                    }
                }], [{
                    path: "",
                    component: al,
                    data: {
                        authorities: [],
                        pageTitle: r
                    }
                }, {
                    path: "reset/request",
                    component: El,
                    data: {
                        authorities: [],
                        pageTitle: "Сброс пароля"
                    },
                    outlet: "popup"
                }], [{
                    path: "",
                    children: [{
                        path: "activate",
                        component: Kl,
                        data: {
                            authorities: [],
                            pageTitle: "Activation"
                        },
                        canActivate: [P]
                    }, {
                        path: "reset/finish",
                        component: Gl,
                        data: {
                            authorities: [],
                            pageTitle: "Сброс пароля"
                        }
                    }, {
                        path: "register",
                        component: In,
                        data: {
                            authorities: [],
                            pageTitle: r
                        }
                    }, {
                        path: "profile",
                        component: he,
                        data: {
                            authorities: ["ROLE_USER"],
                            pageTitle: "Кабинет вендора"
                        },
                        canActivate: [P]
                    }]
                }], [{
                    path: "dashboard",
                    component: Vu,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: r
                    },
                    canActivate: [P]
                }, {
                    path: "device-new",
                    component: vu,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "device/:id/edit",
                    component: vu,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "device/:id/delete",
                    component: yu,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "device/:id/clean",
                    component: Ru,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "sales-list/:id/:tz",
                    component: Du,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "alerts-list/:id/:tz",
                    component: Ou,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "encash-list/:id/:tz",
                    component: oo,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "settings/:id",
                    component: wo,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }], [{
                    path: "admin",
                    component: sd,
                    data: {
                        authorities: ["ROLE_ADMIN"],
                        pageTitle: "Кабинет администратора"
                    },
                    canActivate: [P]
                }, {
                    path: "file/:id/delete",
                    component: se,
                    data: {
                        authorities: ["ROLE_ADMIN"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "file/:id/download",
                    component: ge,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "file/:id/edit",
                    component: pe,
                    data: {
                        authorities: ["ROLE_ADMIN"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "report/:id/:type/:from/:to/:tz",
                    component: Uo,
                    data: {
                        authorities: ["ROLE_USER"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }, {
                    path: "user/:id/edit",
                    component: id,
                    data: {
                        authorities: ["ROLE_ADMIN"],
                        pageTitle: "monitoringApp.device.home.title"
                    },
                    canActivate: [P],
                    outlet: "popup"
                }]]
            }, []), u["ɵmpd"](1024, f.l, f.A, [u.ApplicationRef, f.t, f.b, h.h, u.Injector, u.NgModuleFactoryLoader, u.Compiler, f.j, f.h, [2, f.s], [2, f.k]]), u["ɵmpd"](1073742336, f.p, f.p, [[2, f.v], [2, f.l]]), u["ɵmpd"](1073742336, Da, Da, []), u["ɵmpd"](256, C.b, {
                prefix: "jhi",
                separator: "-"
            }, []), u["ɵmpd"](1024, Ea.a, C.c, [C.b]), u["ɵmpd"](1073742336, C.a, C.a, [u.NgZone, [2, Ea.a]]), u["ɵmpd"](1073742336, v.c, v.c, []), u["ɵmpd"](1073742336, v.g, v.g, []), u["ɵmpd"](1073742336, v.h, v.h, []), u["ɵmpd"](1073742336, v.l, v.l, []), u["ɵmpd"](1073742336, v.n, v.n, []), u["ɵmpd"](1073742336, tl.u, tl.u, []), u["ɵmpd"](1073742336, tl.g, tl.g, []), u["ɵmpd"](1073742336, v.t, v.t, []), u["ɵmpd"](1073742336, v.w, v.w, []), u["ɵmpd"](1073742336, v.A, v.A, []), u["ɵmpd"](1073742336, v.E, v.E, []), u["ɵmpd"](1073742336, v.F, v.F, []), u["ɵmpd"](1073742336, v.I, v.I, []), u["ɵmpd"](1073742336, v.M, v.M, []), u["ɵmpd"](1073742336, v.Q, v.Q, []), u["ɵmpd"](1073742336, v.U, v.U, []), u["ɵmpd"](1073742336, v.X, v.X, []), u["ɵmpd"](1073742336, v.Y, v.Y, []), u["ɵmpd"](1073742336, v.N, v.N, []), u["ɵmpd"](1073742336, ha.f, ha.f, []), u["ɵmpd"](1073742336, $.c, $.c, []), u["ɵmpd"](1073742336, Ma.a, Ma.a, []), u["ɵmpd"](1073742336, b.a, b.a, []), u["ɵmpd"](1073742336, Or.f, Or.f, []), u["ɵmpd"](1073742336, v.B, v.B, []), u["ɵmpd"](1073742336, yl, yl, []), u["ɵmpd"](1073742336, Cl, Cl, []), u["ɵmpd"](1073742336, Rl, Rl, []), u["ɵmpd"](1073742336, I.e, I.e, []), u["ɵmpd"](1073742336, I.d, I.d, []), u["ɵmpd"](1073742336, N, N, []), u["ɵmpd"](1073742336, Pa, Pa, []), u["ɵmpd"](1073742336, Rn.c, Rn.c, []), u["ɵmpd"](1073742336, _a, _a, []), u["ɵmpd"](1073742336, su.ChartsModule, su.ChartsModule, []), u["ɵmpd"](1073742336, Oa, Oa, []), u["ɵmpd"](1073742336, Jo.d, Jo.d, []), u["ɵmpd"](1073742336, Va, Va, []), u["ɵmpd"](1073742336, p, p, [v.r]), u["ɵmpd"](256, u["ɵAPP_ROOT"], !0, []), u["ɵmpd"](256, va.a, {
                alertAsToast: !1,
                alertTimeout: 5e3
            }, []), u["ɵmpd"](256, ha.k, void 0, []), u["ɵmpd"](256, ha.j, void 0, []), u["ɵmpd"](256, ba.a, {}, []), u["ɵmpd"](256, I.q, "XSRF-TOKEN", []), u["ɵmpd"](256, I.r, "X-XSRF-TOKEN", []), u["ɵmpd"](256, Jo.a, ja, [])])
        });
        i || Object(u.enableProdMode)(),
        jr.i().bootstrapModuleFactory(Aa, {
            preserveWhitespaces: !0
        }).then(function(l) {
            return console.log("Application started")
        }).catch(function(l) {
            return console.error(l)
        })
    },
    276: function(l, n, e) {}
});
