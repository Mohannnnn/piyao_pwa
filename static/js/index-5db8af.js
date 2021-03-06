!(function(e) {
  function t(a) {
    if (i[a]) return i[a].exports;
    var n = (i[a] = { i: a, l: !1, exports: {} });
    return e[a].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
  }
  var i = {};
  (t.m = e),
    (t.c = i),
    (t.d = function(e, i, a) {
      t.o(e, i) ||
        Object.defineProperty(e, i, {
          configurable: !1,
          enumerable: !0,
          get: a
        });
    }),
    (t.n = function(e) {
      var i =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(i, "a", i), i;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "/"),
    t((t.s = 105));
})([
  function(e, t) {
    !(function() {
      function t(e, t) {
        return (/string|function/.test(typeof t) ? l : o)(e, t);
      }

      function i(e, t) {
        return (
          "string" != typeof e &&
            ((t = typeof e),
            "number" === t
              ? (e += "")
              : (e = "function" === t ? i(e.call(e)) : "")),
          e
        );
      }

      function a(e) {
        return p[e];
      }

      function n(e) {
        return i(e).replace(/&(?![\w#]+;)|[<>"']/g, a);
      }

      function s(e, t) {
        if (h(e))
          for (var i = 0, a = e.length; a > i; i++) t.call(e, e[i], i, e);
        else for (i in e) t.call(e, e[i], i);
      }

      function r(e, t) {
        var i = /(\/)[^\/]+\1\.\.\1/,
          a = ("./" + e).replace(/[^\/]+$/, ""),
          n = a + t;
        for (n = n.replace(/\/\.\//g, "/"); n.match(i); ) n = n.replace(i, "/");
        return n;
      }

      function o(e, i) {
        var a =
          t.get(e) ||
          d({
            filename: e,
            name: "Render Error",
            message: "Template not found"
          });
        return i ? a(i) : a;
      }

      function l(e, t) {
        if ("string" == typeof t) {
          var i = t;
          t = function() {
            return new u(i);
          };
        }
        var a = (c[e] = function(i) {
          try {
            return new t(i, e) + "";
          } catch (e) {
            return d(e)();
          }
        });
        return (
          (a.prototype = t.prototype = f),
          (a.toString = function() {
            return t + "";
          }),
          a
        );
      }

      function d(e) {
        var t = "{Template Error}",
          i = e.stack || "";
        if (i)
          i = i
            .split("\n")
            .slice(0, 2)
            .join("\n");
        else for (var a in e) i += "<" + a + ">\n" + e[a] + "\n\n";
        return function() {
          return "object" == typeof console && console.error(t + "\n\n" + i), t;
        };
      }
      var c = (t.cache = {}),
        u = this.String,
        p = {
          "<": "&#60;",
          ">": "&#62;",
          '"': "&#34;",
          "'": "&#39;",
          "&": "&#38;"
        },
        h =
          Array.isArray ||
          function(e) {
            return "[object Array]" === {}.toString.call(e);
          },
        f = (t.utils = {
          $helpers: {},
          $include: function(e, t, i) {
            return (e = r(i, e)), o(e, t);
          },
          $string: i,
          $escape: n,
          $each: s
        }),
        v = (t.helpers = f.$helpers);
      (t.get = function(e) {
        return c[e.replace(/^\.\//, "")];
      }),
        (t.helper = function(e, t) {
          v[e] = t;
        }),
        (e.exports = t);
    })();
  },
  function(e, t, i) {
    "use strict";
    var a,
      n,
      s,
      r,
      o,
      l = navigator.userAgent.toLowerCase(),
      d = window.external || "",
      c = function(e) {
        var t = 0;
        try {
          t = parseFloat(
            e.replace(/\./g, function() {
              return 1 == t++ ? "" : ".";
            })
          );
        } catch (e) {}
        return t;
      };
    try {
      /windows|win32/i.test(l)
        ? (o = "windows")
        : /macintosh/i.test(l)
        ? (o = "macintosh")
        : /rhino/i.test(l)
        ? (o = "rhino")
        : /like mac os x/i.test(l)
        ? (o = "ios")
        : /android/.test(l) && (o = "android"),
        (n = l.match(/applewebkit\/([^\s]*)/)) && n[1]
          ? ((a = "webkit"), (r = c(n[1])))
          : (n = l.match(/presto\/([\d.]*)/)) && n[1]
          ? ((a = "presto"), (r = c(n[1])))
          : (n = l.match(/msie\s([^;]*)/))
          ? ((a = "trident"),
            (r = 1),
            (n = l.match(/trident\/([\d.]*)/)) && n[1] && (r = c(n[1])))
          : /gecko/.test(l) &&
            ((a = "gecko"),
            (r = 1),
            (n = l.match(/rv:([\d.]*)/)) && n[1] && (r = c(n[1]))),
        /world/.test(l)
          ? (s = "world")
          : /360se/.test(l)
          ? (s = "360")
          : /maxthon/.test(l) || "number" == typeof d.max_version
          ? (s = "maxthon")
          : /tencenttraveler\s([\d.]*)/.test(l)
          ? (s = "tt")
          : /se\s([\d.]*)/.test(l) && (s = "sogou");
    } catch (e) {}
    var u = {
      UA: l,
      OS: o,
      CORE: a,
      Version: r,
      EXTRA: s || !1,
      IE: /msie/.test(l),
      OPERA: /opera/.test(l),
      MOZ: /gecko/.test(l) && !/(compatible|webkit)/.test(l),
      IE5: /msie 5 /.test(l),
      IE55: /msie 5.5/.test(l),
      IE6: /msie 6/.test(l),
      IE7: /msie 7/.test(l),
      IE8: /msie 8/.test(l),
      IE9: /msie 9/.test(l),
      IE10: /msie 10/.test(l),
      CHROME: /(chrome|crios)\/([\d.]*)/.test(l),
      IPAD: /\(ipad/i.test(l),
      IPHONE: /\(iphone/i.test(l),
      ITOUCH: /\((itouch|ipod)/i.test(l),
      MOBILE: /mobile/i.test(l),
      WX: /MicroMessenger/i.test(l),
      UC: /UCBrowser/i.test(l),
      QQ: /QQBrowser/i.test(l)
    };
    (u.SAFARI = !u.UC && !u.CHROME && /([\w.]*) safari/.test(l)),
      (e.exports = u);
  },
  function(e, t, i) {
    "use strict";
    var a = /[^\n\s*\r;]+=[^;]*/g,
      n = {
        setCookie: function(e) {
          var t,
            i,
            a,
            n = e.key,
            s = e.value,
            r = e.expires;
          if (void 0 === n) throw new Error("opt.key is undefined");
          if (((a = [encodeURIComponent(n), "=", encodeURIComponent(s)]), r)) {
            if (
              !isFinite(r) ||
              "[object Number]" !== Object.prototype.toString.call(r)
            )
              throw new Error("expires is not an finite number");
            (t = new Date()),
              (i = new Date(t.getTime() + r).toGMTString()),
              (a = a.concat([";expires=", i]));
          }
          e.domain && (a = a.concat([";domain=", e.domain])),
            e.path && (a = a.concat([";path=", e.path])),
            (document.cookie = a.join(""));
        },
        getCookie: function(e) {
          var t = document.cookie,
            i = t.match(a),
            n = "";
          return (
            i &&
              i.length > 0 &&
              i.forEach(function(t) {
                var i = t.split("=");
                i[0].replace(/(^\s*)|(\s*$)/g, "") == encodeURIComponent(e) &&
                  (n = i[1]);
              }),
            n
          );
        },
        delCookie: function(e) {
          document.cookie =
            encodeURIComponent(e.key) +
            "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
            (e.domain ? "; domain=" + e.domain : "") +
            (e.path ? "; path=" + e.path : "");
        }
      };
    e.exports = {
      setCookie: function(e) {
        n.setCookie(e);
      },
      getCookie: function(e) {
        return n.getCookie(e);
      },
      delCookie: function(e) {
        n.delCookie(e);
      }
    };
  },
  function(e, t, i) {
    "use strict";

    function a(e) {
      /(^|\.)admin./.test(window.location.host) ||
        ((this.$el = e.el || ""),
        (this.page = e.page || ""),
        (this.callback = e.callback || e.callback()),
        (this.SUDA_key = e.key),
        this.init());
    }
    i(10);
    var n = (i(2), i(4)),
      s = i(1);
    (a.prototype.init = function() {
      var e = this;
      e.$el && e.page
        ? (e.createDom(), e.createS(), e.initEvent())
        : e.createS();
    }),
      (a.prototype.createS = function() {
        var e = this,
          t = document.getElementsByTagName("head")[0],
          i = document.createElement("script"),
          a = document.createElement("script");
        (i.type = "text/javascript"),
          (a.type = "text/javascript"),
          (i.src =
            "http://mjs.sinaimg.cn/wap/module/share/201507071535/js/waplogin.min.js"),
          (a.src =
            "http://mjs.sinaimg.cn/wap/module/login/js/outlogin_layer_mobile.min.js"),
          t.appendChild(i),
          t.appendChild(a),
          e.getUserInfo();
      }),
      (a.prototype.createDom = function() {
        this.$el.append(
          "<div class='avatar'><div class='avaimg'></div><div class='avatarmask'></div></div>"
        ),
          $("body").append(
            "<div class='logoutBox'><div class='logoutTitleBg'></div><div class='logoutText'>确认注销登录？</div><div class='logoutConfirmYes'>确认</div><div class='logoutConfirmNo'>取消</div></div>"
          ),
          $("body").append("<div class='wrap_logout'></div>");
      }),
      (a.prototype.initEvent = function() {
        var e = this;
        e.$el.find(".avatar").on("click", function() {
          e.login();
        }),
          $(".logoutConfirmYes").on("click", function() {
            var t = e.page + "_quit_confirm_1_2";
            SUDA.uaTrack(e.SUDA_key, t), e.logout();
          }),
          $(".logoutConfirmNo").on("click", function() {
            var t = e.page + "_quit_cancel_1_2";
            SUDA.uaTrack(e.SUDA_key, t),
              $(".wrap_logout").hide(),
              $(".logoutBox").hide();
          });
      }),
      (a.prototype.login = function() {
        var e = this,
          t = navigator.userAgent,
          i = t.indexOf("Android") > -1 || t.indexOf("Adr") > -1;
        if (!0 === checkLogin()) {
          var a = e.page + "_cilck_photo_1_2";
          SUDA.uaTrack(e.SUDA_key, a),
            $(".wrap_logout").show(),
            $(".logoutBox").show(),
            i &&
              (s.QQ || s.UC) &&
              $("video").length &&
              0 !== $("video")[0].currentTime &&
              ($("video").remove(),
              $('<video src="" class="videoplayer"></video>').insertBefore(
                $(".tips")
              ),
              new n($(".videoplayer")));
        } else if ($(".avaimg").length) {
          var r = e.page + "_click_icon_1_2";
          SUDA.uaTrack(e.SUDA_key, r),
            (window.location.href =
              "//passport.sina.cn/signin/signin?entry=wapsso&vt=4&backTitle=捉谣记&r=" +
              encodeURIComponent(window.location.href) +
              "&revalid=1");
        }
      }),
      (a.prototype.logout = function() {
        window.location.href =
          "//passport.sina.cn/sso/logout?entry=wapsso&vt=4&backTitle=捉谣记&r=" +
          encodeURIComponent(window.location.href) +
          "&revalid=2";
      }),
      (a.prototype.getUserInfo = function() {
        getUserInfo(function(e) {
          (e = e || {}),
            (e.userface || e.portrait_url) &&
              $(".avaimg").length &&
              $(".avaimg").css("background-image", "url(" + e.userface + ")");
        });
      }),
      (a.prototype.showPopLogin = function(e) {
        var t = this;
        if (!0 !== checkLogin()) {
          ("function" == typeof WapLogin ? new WapLogin() : this).login(
            !1,
            function(e) {
              window.location.reload();
            }
          ),
            $("#ST_outLogin_mask").on("touchstart touchmove touchend", function(
              e
            ) {
              e.preventDefault();
            });
        } else t.callback(e);
      }),
      (e.exports = a);
  },
  function(e, t, i) {
    "use strict";

    function a(e) {
      "undefined" != typeof videoId &&
        videoId.replace(/(^\s+)|(\s+$)/g, "") &&
        ((this.$el = e), this.init());
    }
    i(7);
    var n = i(8),
      s = i(9),
      r = i(1);
    (a.prototype.isWifi = function() {
      n(), window.networkWIFI || $(".tips").css("display", "block");
    }),
      (a.prototype.initVideo = function(e, t, i) {
        s(e, t), i();
      }),
      (a.prototype.init = function() {
        var e = this;
        this.$el[0].setAttribute("playsinline", "true"),
          this.$el[0].setAttribute("preload", "Metadata"),
          this.$el[0].setAttribute("webkit-playsinline", "true"),
          this.initVideo(this.$el, videoId, this.isWifi),
          this.$el.on("loadedmetadata", function() {
            e.$el[0].currentTime = 0;
          }),
          (this.$el[0].onpause = function() {
            SUDA.uaTrack("news_global", "body_video_pause_1_2");
          }),
          (this.$el[0].onplay = function() {
            $("audio").each(function(e, t) {
              t.pause();
            }),
              $(".audio_play").removeClass("audio_pause"),
              SUDA.uaTrack("news_global", "body_video_play_1_2");
          }),
          $(".play-icon").on("click", function(t) {
            $(".video-ms").css({ display: "none" }),
              (e.$el[0].controls = "controls"),
              $(this).css({ display: "none" }),
              e.$el[0].play();
          });
      }),
      (a.prototype.adapterAndroidBrowser = function() {
        var e = navigator.userAgent;
        (e.indexOf("Android") > -1 || e.indexOf("Adr") > -1) &&
          (r.QQ || r.UC) &&
          $("video").length &&
          0 !== $("video")[0].currentTime &&
          ($("video").remove(),
          $('<video src="" class="videoplayer"></video>').insertBefore(
            $(".tips")
          ),
          new a($(".videoplayer")));
      }),
      (e.exports = a);
  },
  function(e, t) {},
  function(e, t, i) {
    "use strict";
    var a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      n = (function() {
        function e(e) {
          return null == e ? String(e) : W[U.call(e)] || "object";
        }

        function t(t) {
          return "function" == e(t);
        }

        function i(e) {
          return null != e && e == e.window;
        }

        function n(e) {
          return null != e && e.nodeType == e.DOCUMENT_NODE;
        }

        function s(t) {
          return "object" == e(t);
        }

        function r(e) {
          return s(e) && !i(e) && Object.getPrototypeOf(e) == Object.prototype;
        }

        function o(e) {
          var t = !!e && "length" in e && e.length,
            a = S.type(e);
          return (
            "function" != a &&
            !i(e) &&
            ("array" == a ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }

        function l(e) {
          return I.call(e, function(e) {
            return null != e;
          });
        }

        function d(e) {
          return e.length > 0 ? S.fn.concat.apply([], e) : e;
        }

        function c(e) {
          return e
            .replace(/::/g, "/")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
            .replace(/([a-z\d])([A-Z])/g, "$1_$2")
            .replace(/_/g, "-")
            .toLowerCase();
        }

        function u(e) {
          return e in A ? A[e] : (A[e] = new RegExp("(^|\\s)" + e + "(\\s|$)"));
        }

        function p(e, t) {
          return "number" != typeof t || _[c(e)] ? t : t + "px";
        }

        function h(e) {
          var t, i;
          return (
            O[e] ||
              ((t = D.createElement(e)),
              D.body.appendChild(t),
              (i = getComputedStyle(t, "").getPropertyValue("display")),
              t.parentNode.removeChild(t),
              "none" == i && (i = "block"),
              (O[e] = i)),
            O[e]
          );
        }

        function f(e) {
          return "children" in e
            ? L.call(e.children)
            : S.map(e.childNodes, function(e) {
                return 1 == e.nodeType ? e : void 0;
              });
        }

        function v(e, t) {
          var i,
            a = e ? e.length : 0;
          for (i = 0; a > i; i++) this[i] = e[i];
          (this.length = a), (this.selector = t || "");
        }

        function m(e, t, i) {
          for (C in t)
            i && (r(t[C]) || J(t[C]))
              ? (r(t[C]) && !r(e[C]) && (e[C] = {}),
                J(t[C]) && !J(e[C]) && (e[C] = []),
                m(e[C], t[C], i))
              : t[C] !== T && (e[C] = t[C]);
        }

        function g(e, t) {
          return null == t ? S(e) : S(e).filter(t);
        }

        function w(e, i, a, n) {
          return t(i) ? i.call(e, a, n) : i;
        }

        function y(e, t, i) {
          null == i ? e.removeAttribute(t) : e.setAttribute(t, i);
        }

        function b(e, t) {
          var i = e.className || "",
            a = i && i.baseVal !== T;
          return t === T
            ? a
              ? i.baseVal
              : i
            : void (a ? (i.baseVal = t) : (e.className = t));
        }

        function x(e) {
          try {
            return e
              ? "true" == e ||
                  ("false" != e &&
                    ("null" == e
                      ? null
                      : +e + "" == e
                      ? +e
                      : /^[\[\{]/.test(e)
                      ? S.parseJSON(e)
                      : e))
              : e;
          } catch (t) {
            return e;
          }
        }

        function E(e, t) {
          t(e);
          for (var i = 0, a = e.childNodes.length; a > i; i++)
            E(e.childNodes[i], t);
        }
        var T,
          C,
          S,
          k,
          $,
          M,
          P = [],
          z = P.concat,
          I = P.filter,
          L = P.slice,
          D = window.document,
          O = {},
          A = {},
          _ = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
          },
          N = /^\s*<(\w+|!)[^>]*>/,
          j = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          B = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          H = /^(?:body|html)$/i,
          X = /([A-Z])/g,
          V = [
            "val",
            "css",
            "html",
            "text",
            "data",
            "width",
            "height",
            "offset"
          ],
          G = ["after", "prepend", "before", "append"],
          F = D.createElement("table"),
          Y = D.createElement("tr"),
          R = {
            tr: D.createElement("tbody"),
            tbody: F,
            thead: F,
            tfoot: F,
            td: Y,
            th: Y,
            "*": D.createElement("div")
          },
          q = /^[\w-]*$/,
          W = {},
          U = W.toString,
          Q = {},
          Z = D.createElement("div"),
          K = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
          },
          J =
            Array.isArray ||
            function(e) {
              return e instanceof Array;
            };
        return (
          (Q.matches = function(e, t) {
            if (!t || !e || 1 !== e.nodeType) return !1;
            var i =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.oMatchesSelector ||
              e.matchesSelector;
            if (i) return i.call(e, t);
            var a,
              n = e.parentNode,
              s = !n;
            return (
              s && (n = Z).appendChild(e),
              (a = ~Q.qsa(n, t).indexOf(e)),
              s && Z.removeChild(e),
              a
            );
          }),
          ($ = function(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
              return t ? t.toUpperCase() : "";
            });
          }),
          (M = function(e) {
            return I.call(e, function(t, i) {
              return e.indexOf(t) == i;
            });
          }),
          (Q.fragment = function(e, t, i) {
            var a, n, s;
            return (
              j.test(e) && (a = S(D.createElement(RegExp.$1))),
              a ||
                (e.replace && (e = e.replace(B, "<$1></$2>")),
                t === T && (t = N.test(e) && RegExp.$1),
                t in R || (t = "*"),
                (s = R[t]),
                (s.innerHTML = "" + e),
                (a = S.each(L.call(s.childNodes), function() {
                  s.removeChild(this);
                }))),
              r(i) &&
                ((n = S(a)),
                S.each(i, function(e, t) {
                  V.indexOf(e) > -1 ? n[e](t) : n.attr(e, t);
                })),
              a
            );
          }),
          (Q.Z = function(e, t) {
            return new v(e, t);
          }),
          (Q.isZ = function(e) {
            return e instanceof Q.Z;
          }),
          (Q.init = function(e, i) {
            var a;
            if (!e) return Q.Z();
            if ("string" == typeof e)
              if (((e = e.trim()), "<" == e[0] && N.test(e)))
                (a = Q.fragment(e, RegExp.$1, i)), (e = null);
              else {
                if (i !== T) return S(i).find(e);
                a = Q.qsa(D, e);
              }
            else {
              if (t(e)) return S(D).ready(e);
              if (Q.isZ(e)) return e;
              if (J(e)) a = l(e);
              else if (s(e)) (a = [e]), (e = null);
              else if (N.test(e))
                (a = Q.fragment(e.trim(), RegExp.$1, i)), (e = null);
              else {
                if (i !== T) return S(i).find(e);
                a = Q.qsa(D, e);
              }
            }
            return Q.Z(a, e);
          }),
          (S = function(e, t) {
            return Q.init(e, t);
          }),
          (S.extend = function(e) {
            var t,
              i = L.call(arguments, 1);
            return (
              "boolean" == typeof e && ((t = e), (e = i.shift())),
              i.forEach(function(i) {
                m(e, i, t);
              }),
              e
            );
          }),
          (Q.qsa = function(e, t) {
            var i,
              a = "#" == t[0],
              n = !a && "." == t[0],
              s = a || n ? t.slice(1) : t,
              r = q.test(s);
            return e.getElementById && r && a
              ? (i = e.getElementById(s))
                ? [i]
                : []
              : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType
              ? []
              : L.call(
                  r && !a && e.getElementsByClassName
                    ? n
                      ? e.getElementsByClassName(s)
                      : e.getElementsByTagName(t)
                    : e.querySelectorAll(t)
                );
          }),
          (S.contains = D.documentElement.contains
            ? function(e, t) {
                return e !== t && e.contains(t);
              }
            : function(e, t) {
                for (; t && (t = t.parentNode); ) if (t === e) return !0;
                return !1;
              }),
          (S.type = e),
          (S.isFunction = t),
          (S.isWindow = i),
          (S.isArray = J),
          (S.isPlainObject = r),
          (S.isEmptyObject = function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          }),
          (S.isNumeric = function(e) {
            var t = Number(e),
              i = void 0 === e ? "undefined" : a(e);
            return (
              (null != e &&
                "boolean" != i &&
                ("string" != i || e.length) &&
                !isNaN(t) &&
                isFinite(t)) ||
              !1
            );
          }),
          (S.inArray = function(e, t, i) {
            return P.indexOf.call(t, e, i);
          }),
          (S.camelCase = $),
          (S.trim = function(e) {
            return null == e ? "" : String.prototype.trim.call(e);
          }),
          (S.uuid = 0),
          (S.support = {}),
          (S.expr = {}),
          (S.noop = function() {}),
          (S.map = function(e, t) {
            var i,
              a,
              n,
              s = [];
            if (o(e))
              for (a = 0; a < e.length; a++)
                null != (i = t(e[a], a)) && s.push(i);
            else for (n in e) null != (i = t(e[n], n)) && s.push(i);
            return d(s);
          }),
          (S.each = function(e, t) {
            var i, a;
            if (o(e)) {
              for (i = 0; i < e.length; i++)
                if (!1 === t.call(e[i], i, e[i])) return e;
            } else for (a in e) if (!1 === t.call(e[a], a, e[a])) return e;
            return e;
          }),
          (S.grep = function(e, t) {
            return I.call(e, t);
          }),
          window.JSON && (S.parseJSON = JSON.parse),
          S.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
              " "
            ),
            function(e, t) {
              W["[object " + t + "]"] = t.toLowerCase();
            }
          ),
          (S.fn = {
            constructor: Q.Z,
            length: 0,
            forEach: P.forEach,
            reduce: P.reduce,
            push: P.push,
            sort: P.sort,
            splice: P.splice,
            indexOf: P.indexOf,
            concat: function() {
              var e,
                t,
                i = [];
              for (e = 0; e < arguments.length; e++)
                (t = arguments[e]), (i[e] = Q.isZ(t) ? t.toArray() : t);
              return z.apply(Q.isZ(this) ? this.toArray() : this, i);
            },
            map: function(e) {
              return S(
                S.map(this, function(t, i) {
                  return e.call(t, i, t);
                })
              );
            },
            slice: function() {
              return S(L.apply(this, arguments));
            },
            ready: function(e) {
              if (
                "complete" === D.readyState ||
                ("loading" !== D.readyState && !D.documentElement.doScroll)
              )
                setTimeout(function() {
                  e(S);
                }, 0);
              else {
                var t = function t() {
                  D.removeEventListener("DOMContentLoaded", t, !1),
                    window.removeEventListener("load", t, !1),
                    e(S);
                };
                D.addEventListener("DOMContentLoaded", t, !1),
                  window.addEventListener("load", t, !1);
              }
              return this;
            },
            get: function(e) {
              return e === T
                ? L.call(this)
                : this[e >= 0 ? e : e + this.length];
            },
            toArray: function() {
              return this.get();
            },
            size: function() {
              return this.length;
            },
            remove: function() {
              return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this);
              });
            },
            each: function(e) {
              return (
                P.every.call(this, function(t, i) {
                  return !1 !== e.call(t, i, t);
                }),
                this
              );
            },
            filter: function(e) {
              return t(e)
                ? this.not(this.not(e))
                : S(
                    I.call(this, function(t) {
                      return Q.matches(t, e);
                    })
                  );
            },
            add: function(e, t) {
              return S(M(this.concat(S(e, t))));
            },
            is: function(e) {
              return this.length > 0 && Q.matches(this[0], e);
            },
            not: function(e) {
              var i = [];
              if (t(e) && e.call !== T)
                this.each(function(t) {
                  e.call(this, t) || i.push(this);
                });
              else {
                var a =
                  "string" == typeof e
                    ? this.filter(e)
                    : o(e) && t(e.item)
                    ? L.call(e)
                    : S(e);
                this.forEach(function(e) {
                  a.indexOf(e) < 0 && i.push(e);
                });
              }
              return S(i);
            },
            has: function(e) {
              return this.filter(function() {
                return s(e)
                  ? S.contains(this, e)
                  : S(this)
                      .find(e)
                      .size();
              });
            },
            eq: function(e) {
              return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
            },
            first: function() {
              var e = this[0];
              return e && !s(e) ? e : S(e);
            },
            last: function() {
              var e = this[this.length - 1];
              return e && !s(e) ? e : S(e);
            },
            find: function(e) {
              var t = this;
              return e
                ? "object" == (void 0 === e ? "undefined" : a(e))
                  ? S(e).filter(function() {
                      var e = this;
                      return P.some.call(t, function(t) {
                        return S.contains(t, e);
                      });
                    })
                  : 1 == this.length
                  ? S(Q.qsa(this[0], e))
                  : this.map(function() {
                      return Q.qsa(this, e);
                    })
                : S();
            },
            closest: function(e, t) {
              var i = [],
                s = "object" == (void 0 === e ? "undefined" : a(e)) && S(e);
              return (
                this.each(function(a, r) {
                  for (; r && !(s ? s.indexOf(r) >= 0 : Q.matches(r, e)); )
                    r = r !== t && !n(r) && r.parentNode;
                  r && i.indexOf(r) < 0 && i.push(r);
                }),
                S(i)
              );
            },
            parents: function(e) {
              for (var t = [], i = this; i.length > 0; )
                i = S.map(i, function(e) {
                  return (e = e.parentNode) && !n(e) && t.indexOf(e) < 0
                    ? (t.push(e), e)
                    : void 0;
                });
              return g(t, e);
            },
            parent: function(e) {
              return g(M(this.pluck("parentNode")), e);
            },
            children: function(e) {
              return g(
                this.map(function() {
                  return f(this);
                }),
                e
              );
            },
            contents: function() {
              return this.map(function() {
                return this.contentDocument || L.call(this.childNodes);
              });
            },
            siblings: function(e) {
              return g(
                this.map(function(e, t) {
                  return I.call(f(t.parentNode), function(e) {
                    return e !== t;
                  });
                }),
                e
              );
            },
            empty: function() {
              return this.each(function() {
                this.innerHTML = "";
              });
            },
            pluck: function(e) {
              return S.map(this, function(t) {
                return t[e];
              });
            },
            show: function() {
              return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                  "none" ==
                    getComputedStyle(this, "").getPropertyValue("display") &&
                    (this.style.display = h(this.nodeName));
              });
            },
            replaceWith: function(e) {
              return this.before(e).remove();
            },
            wrap: function(e) {
              var i = t(e);
              if (this[0] && !i)
                var a = S(e).get(0),
                  n = a.parentNode || this.length > 1;
              return this.each(function(t) {
                S(this).wrapAll(i ? e.call(this, t) : n ? a.cloneNode(!0) : a);
              });
            },
            wrapAll: function(e) {
              if (this[0]) {
                S(this[0]).before((e = S(e)));
                for (var t; (t = e.children()).length; ) e = t.first();
                S(e).append(this);
              }
              return this;
            },
            wrapInner: function(e) {
              var i = t(e);
              return this.each(function(t) {
                var a = S(this),
                  n = a.contents(),
                  s = i ? e.call(this, t) : e;
                n.length ? n.wrapAll(s) : a.append(s);
              });
            },
            unwrap: function() {
              return (
                this.parent().each(function() {
                  S(this).replaceWith(S(this).children());
                }),
                this
              );
            },
            clone: function() {
              return this.map(function() {
                return this.cloneNode(!0);
              });
            },
            hide: function() {
              return this.css("display", "none");
            },
            toggle: function(e) {
              return this.each(function() {
                var t = S(this);
                (e === T
                ? "none" == t.css("display")
                : e)
                  ? t.show()
                  : t.hide();
              });
            },
            prev: function(e) {
              return S(this.pluck("previousElementSibling")).filter(e || "*");
            },
            next: function(e) {
              return S(this.pluck("nextElementSibling")).filter(e || "*");
            },
            html: function(e) {
              return 0 in arguments
                ? this.each(function(t) {
                    var i = this.innerHTML;
                    S(this)
                      .empty()
                      .append(w(this, e, t, i));
                  })
                : 0 in this
                ? this[0].innerHTML
                : null;
            },
            text: function(e) {
              return 0 in arguments
                ? this.each(function(t) {
                    var i = w(this, e, t, this.textContent);
                    this.textContent = null == i ? "" : "" + i;
                  })
                : 0 in this
                ? this.pluck("textContent").join("")
                : null;
            },
            attr: function(e, t) {
              var i;
              return "string" != typeof e || 1 in arguments
                ? this.each(function(i) {
                    if (1 === this.nodeType)
                      if (s(e)) for (C in e) y(this, C, e[C]);
                      else y(this, e, w(this, t, i, this.getAttribute(e)));
                  })
                : 0 in this &&
                  1 == this[0].nodeType &&
                  null != (i = this[0].getAttribute(e))
                ? i
                : T;
            },
            removeAttr: function(e) {
              return this.each(function() {
                1 === this.nodeType &&
                  e.split(" ").forEach(function(e) {
                    y(this, e);
                  }, this);
              });
            },
            prop: function(e, t) {
              return (
                (e = K[e] || e),
                1 in arguments
                  ? this.each(function(i) {
                      this[e] = w(this, t, i, this[e]);
                    })
                  : this[0] && this[0][e]
              );
            },
            removeProp: function(e) {
              return (
                (e = K[e] || e),
                this.each(function() {
                  delete this[e];
                })
              );
            },
            data: function(e, t) {
              var i = "data-" + e.replace(X, "-$1").toLowerCase(),
                a = 1 in arguments ? this.attr(i, t) : this.attr(i);
              return null !== a ? x(a) : T;
            },
            val: function(e) {
              return 0 in arguments
                ? (null == e && (e = ""),
                  this.each(function(t) {
                    this.value = w(this, e, t, this.value);
                  }))
                : this[0] &&
                    (this[0].multiple
                      ? S(this[0])
                          .find("option")
                          .filter(function() {
                            return this.selected;
                          })
                          .pluck("value")
                      : this[0].value);
            },
            offset: function(e) {
              if (e)
                return this.each(function(t) {
                  var i = S(this),
                    a = w(this, e, t, i.offset()),
                    n = i.offsetParent().offset(),
                    s = { top: a.top - n.top, left: a.left - n.left };
                  "static" == i.css("position") && (s.position = "relative"),
                    i.css(s);
                });
              if (!this.length) return null;
              if (
                D.documentElement !== this[0] &&
                !S.contains(D.documentElement, this[0])
              )
                return { top: 0, left: 0 };
              var t = this[0].getBoundingClientRect();
              return {
                left: t.left + window.pageXOffset,
                top: t.top + window.pageYOffset,
                width: Math.round(t.width),
                height: Math.round(t.height)
              };
            },
            css: function(t, i) {
              if (arguments.length < 2) {
                var a = this[0];
                if ("string" == typeof t) {
                  if (!a) return;
                  return (
                    a.style[$(t)] || getComputedStyle(a, "").getPropertyValue(t)
                  );
                }
                if (J(t)) {
                  if (!a) return;
                  var n = {},
                    s = getComputedStyle(a, "");
                  return (
                    S.each(t, function(e, t) {
                      n[t] = a.style[$(t)] || s.getPropertyValue(t);
                    }),
                    n
                  );
                }
              }
              var r = "";
              if ("string" == e(t))
                i || 0 === i
                  ? (r = c(t) + ":" + p(t, i))
                  : this.each(function() {
                      this.style.removeProperty(c(t));
                    });
              else
                for (C in t)
                  t[C] || 0 === t[C]
                    ? (r += c(C) + ":" + p(C, t[C]) + ";")
                    : this.each(function() {
                        this.style.removeProperty(c(C));
                      });
              return this.each(function() {
                this.style.cssText += ";" + r;
              });
            },
            index: function(e) {
              return e
                ? this.indexOf(S(e)[0])
                : this.parent()
                    .children()
                    .indexOf(this[0]);
            },
            hasClass: function(e) {
              return (
                !!e &&
                P.some.call(
                  this,
                  function(e) {
                    return this.test(b(e));
                  },
                  u(e)
                )
              );
            },
            addClass: function(e) {
              return e
                ? this.each(function(t) {
                    if ("className" in this) {
                      k = [];
                      var i = b(this);
                      w(this, e, t, i)
                        .split(/\s+/g)
                        .forEach(function(e) {
                          S(this).hasClass(e) || k.push(e);
                        }, this),
                        k.length && b(this, i + (i ? " " : "") + k.join(" "));
                    }
                  })
                : this;
            },
            removeClass: function(e) {
              return this.each(function(t) {
                if ("className" in this) {
                  if (e === T) return b(this, "");
                  (k = b(this)),
                    w(this, e, t, k)
                      .split(/\s+/g)
                      .forEach(function(e) {
                        k = k.replace(u(e), " ");
                      }),
                    b(this, k.trim());
                }
              });
            },
            toggleClass: function(e, t) {
              return e
                ? this.each(function(i) {
                    var a = S(this);
                    w(this, e, i, b(this))
                      .split(/\s+/g)
                      .forEach(function(e) {
                        (t === T
                        ? !a.hasClass(e)
                        : t)
                          ? a.addClass(e)
                          : a.removeClass(e);
                      });
                  })
                : this;
            },
            scrollTop: function(e) {
              if (this.length) {
                var t = "scrollTop" in this[0];
                return e === T
                  ? t
                    ? this[0].scrollTop
                    : this[0].pageYOffset
                  : this.each(
                      t
                        ? function() {
                            this.scrollTop = e;
                          }
                        : function() {
                            this.scrollTo(this.scrollX, e);
                          }
                    );
              }
            },
            scrollLeft: function(e) {
              if (this.length) {
                var t = "scrollLeft" in this[0];
                return e === T
                  ? t
                    ? this[0].scrollLeft
                    : this[0].pageXOffset
                  : this.each(
                      t
                        ? function() {
                            this.scrollLeft = e;
                          }
                        : function() {
                            this.scrollTo(e, this.scrollY);
                          }
                    );
              }
            },
            position: function() {
              if (this.length) {
                var e = this[0],
                  t = this.offsetParent(),
                  i = this.offset(),
                  a = H.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
                return (
                  (i.top -= parseFloat(S(e).css("margin-top")) || 0),
                  (i.left -= parseFloat(S(e).css("margin-left")) || 0),
                  (a.top += parseFloat(S(t[0]).css("border-top-width")) || 0),
                  (a.left += parseFloat(S(t[0]).css("border-left-width")) || 0),
                  { top: i.top - a.top, left: i.left - a.left }
                );
              }
            },
            offsetParent: function() {
              return this.map(function() {
                for (
                  var e = this.offsetParent || D.body;
                  e && !H.test(e.nodeName) && "static" == S(e).css("position");

                )
                  e = e.offsetParent;
                return e;
              });
            }
          }),
          (S.fn.detach = S.fn.remove),
          ["width", "height"].forEach(function(e) {
            var t = e.replace(/./, function(e) {
              return e[0].toUpperCase();
            });
            S.fn[e] = function(a) {
              var s,
                r = this[0];
              return a === T
                ? i(r)
                  ? r["inner" + t]
                  : n(r)
                  ? r.documentElement["scroll" + t]
                  : (s = this.offset()) && s[e]
                : this.each(function(t) {
                    (r = S(this)), r.css(e, w(this, a, t, r[e]()));
                  });
            };
          }),
          G.forEach(function(t, i) {
            var a = i % 2;
            (S.fn[t] = function() {
              var t,
                n,
                s = S.map(arguments, function(i) {
                  var a = [];
                  return (
                    (t = e(i)),
                    "array" == t
                      ? (i.forEach(function(e) {
                          return e.nodeType !== T
                            ? a.push(e)
                            : S.zepto.isZ(e)
                            ? (a = a.concat(e.get()))
                            : void (a = a.concat(Q.fragment(e)));
                        }),
                        a)
                      : "object" == t || null == i
                      ? i
                      : Q.fragment(i)
                  );
                }),
                r = this.length > 1;
              return s.length < 1
                ? this
                : this.each(function(e, t) {
                    (n = a ? t : t.parentNode),
                      (t =
                        0 == i
                          ? t.nextSibling
                          : 1 == i
                          ? t.firstChild
                          : 2 == i
                          ? t
                          : null);
                    var o = S.contains(D.documentElement, n);
                    s.forEach(function(e) {
                      if (r) e = e.cloneNode(!0);
                      else if (!n) return S(e).remove();
                      n.insertBefore(e, t),
                        o &&
                          E(e, function(e) {
                            if (
                              !(
                                null == e.nodeName ||
                                "SCRIPT" !== e.nodeName.toUpperCase() ||
                                (e.type && "text/javascript" !== e.type) ||
                                e.src
                              )
                            ) {
                              var t = e.ownerDocument
                                ? e.ownerDocument.defaultView
                                : window;
                              t.eval.call(t, e.innerHTML);
                            }
                          });
                    });
                  });
            }),
              (S.fn[
                a ? t + "To" : "insert" + (i ? "Before" : "After")
              ] = function(e) {
                return S(e)[t](this), this;
              });
          }),
          (Q.Z.prototype = v.prototype = S.fn),
          (Q.uniq = M),
          (Q.deserializeValue = x),
          (S.zepto = Q),
          S
        );
      })();
    (window.Zepto = n),
      void 0 === window.$ && (window.$ = n),
      (function(e) {
        function t(t, i, a) {
          var n = e.Event(i);
          return e(t).trigger(n, a), !n.isDefaultPrevented();
        }

        function i(e, i, a, n) {
          return e.global ? t(i || y, a, n) : void 0;
        }

        function a(t) {
          t.global && 0 == e.active++ && i(t, null, "ajaxStart");
        }

        function n(t) {
          t.global && !--e.active && i(t, null, "ajaxStop");
        }

        function s(e, t) {
          var a = t.context;
          return (
            !1 !== t.beforeSend.call(a, e, t) &&
            !1 !== i(t, a, "ajaxBeforeSend", [e, t]) &&
            void i(t, a, "ajaxSend", [e, t])
          );
        }

        function r(e, t, a, n) {
          var s = a.context,
            r = "success";
          a.success.call(s, e, r, t),
            n && n.resolveWith(s, [e, r, t]),
            i(a, s, "ajaxSuccess", [t, a, e]),
            l(r, t, a);
        }

        function o(e, t, a, n, s) {
          var r = n.context;
          n.error.call(r, a, t, e),
            s && s.rejectWith(r, [a, t, e]),
            i(n, r, "ajaxError", [a, n, e || t]),
            l(t, a, n);
        }

        function l(e, t, a) {
          var s = a.context;
          a.complete.call(s, t, e), i(a, s, "ajaxComplete", [t, a]), n(a);
        }

        function d(e, t, i) {
          if (i.dataFilter == c) return e;
          var a = i.context;
          return i.dataFilter.call(a, e, t);
        }

        function c() {}

        function u(e) {
          return (
            e && (e = e.split(";", 2)[0]),
            (e &&
              (e == C
                ? "html"
                : e == T
                ? "json"
                : x.test(e)
                ? "script"
                : E.test(e) && "xml")) ||
              "text"
          );
        }

        function p(e, t) {
          return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?");
        }

        function h(t) {
          t.processData &&
            t.data &&
            "string" != e.type(t.data) &&
            (t.data = e.param(t.data, t.traditional)),
            !t.data ||
              (t.type &&
                "GET" != t.type.toUpperCase() &&
                "jsonp" != t.dataType) ||
              ((t.url = p(t.url, t.data)), (t.data = void 0));
        }

        function f(t, i, a, n) {
          return (
            e.isFunction(i) && ((n = a), (a = i), (i = void 0)),
            e.isFunction(a) || ((n = a), (a = void 0)),
            { url: t, data: i, success: a, dataType: n }
          );
        }

        function v(t, i, a, n) {
          var s,
            r = e.isArray(i),
            o = e.isPlainObject(i);
          e.each(i, function(i, l) {
            (s = e.type(l)),
              n &&
                (i = a
                  ? n
                  : n +
                    "[" +
                    (o || "object" == s || "array" == s ? i : "") +
                    "]"),
              !n && r
                ? t.add(l.name, l.value)
                : "array" == s || (!a && "object" == s)
                ? v(t, l, a, i)
                : t.add(i, l);
          });
        }
        var m,
          g,
          w = +new Date(),
          y = window.document,
          b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          x = /^(?:text|application)\/javascript/i,
          E = /^(?:text|application)\/xml/i,
          T = "application/json",
          C = "text/html",
          S = /^\s*$/,
          k = y.createElement("a");
        (k.href = window.location.href),
          (e.active = 0),
          (e.ajaxJSONP = function(t, i) {
            if (!("type" in t)) return e.ajax(t);
            var a,
              n,
              l = t.jsonpCallback,
              d = (e.isFunction(l) ? l() : l) || "Zepto" + w++,
              c = y.createElement("script"),
              u = window[d],
              p = function(t) {
                e(c).triggerHandler("error", t || "abort");
              },
              h = { abort: p };
            return (
              i && i.promise(h),
              e(c).on("load error", function(s, l) {
                clearTimeout(n),
                  e(c)
                    .off()
                    .remove(),
                  "error" != s.type && a
                    ? r(a[0], h, t, i)
                    : o(null, l || "error", h, t, i),
                  (window[d] = u),
                  a && e.isFunction(u) && u(a[0]),
                  (u = a = void 0);
              }),
              !1 === s(h, t)
                ? (p("abort"), h)
                : ((window[d] = function() {
                    a = arguments;
                  }),
                  (c.src = t.url.replace(/\?(.+)=\?/, "?$1=" + d)),
                  y.head.appendChild(c),
                  t.timeout > 0 &&
                    (n = setTimeout(function() {
                      p("timeout");
                    }, t.timeout)),
                  h)
            );
          }),
          (e.ajaxSettings = {
            type: "GET",
            beforeSend: c,
            success: c,
            error: c,
            complete: c,
            context: null,
            global: !0,
            xhr: function() {
              return new window.XMLHttpRequest();
            },
            accepts: {
              script:
                "text/javascript, application/javascript, application/x-javascript",
              json: T,
              xml: "application/xml, text/xml",
              html: C,
              text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0,
            dataFilter: c
          }),
          (e.ajax = function(t) {
            var i,
              n,
              l = e.extend({}, t || {}),
              f = e.Deferred && e.Deferred();
            for (m in e.ajaxSettings)
              void 0 === l[m] && (l[m] = e.ajaxSettings[m]);
            a(l),
              l.crossDomain ||
                ((i = y.createElement("a")),
                (i.href = l.url),
                (i.href = i.href),
                (l.crossDomain =
                  k.protocol + "//" + k.host != i.protocol + "//" + i.host)),
              l.url || (l.url = window.location.toString()),
              (n = l.url.indexOf("#")) > -1 && (l.url = l.url.slice(0, n)),
              h(l);
            var v = l.dataType,
              w = /\?.+=\?/.test(l.url);
            if (
              (w && (v = "jsonp"),
              (!1 !== l.cache &&
                ((t && !0 === t.cache) || ("script" != v && "jsonp" != v))) ||
                (l.url = p(l.url, "_=" + Date.now())),
              "jsonp" == v)
            )
              return (
                w ||
                  (l.url = p(
                    l.url,
                    l.jsonp
                      ? l.jsonp + "=?"
                      : !1 === l.jsonp
                      ? ""
                      : "callback=?"
                  )),
                e.ajaxJSONP(l, f)
              );
            var b,
              x = l.accepts[v],
              E = {},
              T = function(e, t) {
                E[e.toLowerCase()] = [e, t];
              },
              C = /^([\w-]+:)\/\//.test(l.url)
                ? RegExp.$1
                : window.location.protocol,
              $ = l.xhr(),
              M = $.setRequestHeader;
            if (
              (f && f.promise($),
              l.crossDomain || T("X-Requested-With", "XMLHttpRequest"),
              T("Accept", x || "*/*"),
              (x = l.mimeType || x) &&
                (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]),
                $.overrideMimeType && $.overrideMimeType(x)),
              (l.contentType ||
                (!1 !== l.contentType &&
                  l.data &&
                  "GET" != l.type.toUpperCase())) &&
                T(
                  "Content-Type",
                  l.contentType || "application/x-www-form-urlencoded"
                ),
              l.headers)
            )
              for (g in l.headers) T(g, l.headers[g]);
            if (
              (($.setRequestHeader = T),
              ($.onreadystatechange = function() {
                if (4 == $.readyState) {
                  ($.onreadystatechange = c), clearTimeout(b);
                  var t,
                    i = !1;
                  if (
                    ($.status >= 200 && $.status < 300) ||
                    304 == $.status ||
                    (0 == $.status && "file:" == C)
                  ) {
                    if (
                      ((v =
                        v ||
                        u(l.mimeType || $.getResponseHeader("content-type"))),
                      "arraybuffer" == $.responseType ||
                        "blob" == $.responseType)
                    )
                      t = $.response;
                    else {
                      t = $.responseText;
                      try {
                        (t = d(t, v, l)),
                          "script" == v
                            ? (0, eval)(t)
                            : "xml" == v
                            ? (t = $.responseXML)
                            : "json" == v &&
                              (t = S.test(t) ? null : e.parseJSON(t));
                      } catch (e) {
                        i = e;
                      }
                      if (i) return o(i, "parsererror", $, l, f);
                    }
                    r(t, $, l, f);
                  } else
                    o(
                      $.statusText || null,
                      $.status ? "error" : "abort",
                      $,
                      l,
                      f
                    );
                }
              }),
              !1 === s($, l))
            )
              return $.abort(), o(null, "abort", $, l, f), $;
            var P = !("async" in l) || l.async;
            if (($.open(l.type, l.url, P, l.username, l.password), l.xhrFields))
              for (g in l.xhrFields) $[g] = l.xhrFields[g];
            for (g in E) M.apply($, E[g]);
            return (
              l.timeout > 0 &&
                (b = setTimeout(function() {
                  ($.onreadystatechange = c),
                    $.abort(),
                    o(null, "timeout", $, l, f);
                }, l.timeout)),
              $.send(l.data ? l.data : null),
              $
            );
          }),
          (e.get = function() {
            return e.ajax(f.apply(null, arguments));
          }),
          (e.post = function() {
            var t = f.apply(null, arguments);
            return (t.type = "POST"), e.ajax(t);
          }),
          (e.getJSON = function() {
            var t = f.apply(null, arguments);
            return (t.dataType = "json"), e.ajax(t);
          }),
          (e.fn.load = function(t, i, a) {
            if (!this.length) return this;
            var n,
              s = this,
              r = t.split(/\s/),
              o = f(t, i, a),
              l = o.success;
            return (
              r.length > 1 && ((o.url = r[0]), (n = r[1])),
              (o.success = function(t) {
                s.html(
                  n
                    ? e("<div>")
                        .html(t.replace(b, ""))
                        .find(n)
                    : t
                ),
                  l && l.apply(s, arguments);
              }),
              e.ajax(o),
              this
            );
          });
        var $ = encodeURIComponent;
        e.param = function(t, i) {
          var a = [];
          return (
            (a.add = function(t, i) {
              e.isFunction(i) && (i = i()),
                null == i && (i = ""),
                this.push($(t) + "=" + $(i));
            }),
            v(a, t, i),
            a.join("&").replace(/%20/g, "+")
          );
        };
      })(n),
      (function(e) {
        function t(e) {
          return e._zid || (e._zid = p++);
        }

        function i(e, i, s, r) {
          if (((i = a(i)), i.ns)) var o = n(i.ns);
          return (m[t(e)] || []).filter(function(e) {
            return (
              e &&
              (!i.e || e.e == i.e) &&
              (!i.ns || o.test(e.ns)) &&
              (!s || t(e.fn) === t(s)) &&
              (!r || e.sel == r)
            );
          });
        }

        function a(e) {
          var t = ("" + e).split(".");
          return {
            e: t[0],
            ns: t
              .slice(1)
              .sort()
              .join(" ")
          };
        }

        function n(e) {
          return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)");
        }

        function s(e, t) {
          return (e.del && !w && e.e in y) || !!t;
        }

        function r(e) {
          return b[e] || (w && y[e]) || e;
        }

        function o(i, n, o, l, c, p, h) {
          var f = t(i),
            v = m[f] || (m[f] = []);
          n.split(/\s/).forEach(function(t) {
            if ("ready" == t) return e(document).ready(o);
            var n = a(t);
            (n.fn = o),
              (n.sel = c),
              n.e in b &&
                (o = function(t) {
                  var i = t.relatedTarget;
                  return !i || (i !== this && !e.contains(this, i))
                    ? n.fn.apply(this, arguments)
                    : void 0;
                }),
              (n.del = p);
            var f = p || o;
            (n.proxy = function(e) {
              if (((e = d(e)), !e.isImmediatePropagationStopped())) {
                e.data = l;
                var t = f.apply(i, e._args == u ? [e] : [e].concat(e._args));
                return !1 === t && (e.preventDefault(), e.stopPropagation()), t;
              }
            }),
              (n.i = v.length),
              v.push(n),
              "addEventListener" in i &&
                i.addEventListener(r(n.e), n.proxy, s(n, h));
          });
        }

        function l(e, a, n, o, l) {
          var d = t(e);
          (a || "").split(/\s/).forEach(function(t) {
            i(e, t, n, o).forEach(function(t) {
              delete m[d][t.i],
                "removeEventListener" in e &&
                  e.removeEventListener(r(t.e), t.proxy, s(t, l));
            });
          });
        }

        function d(t, i) {
          if (i || !t.isDefaultPrevented) {
            i || (i = t),
              e.each(C, function(e, a) {
                var n = i[e];
                (t[e] = function() {
                  return (this[a] = x), n && n.apply(i, arguments);
                }),
                  (t[a] = E);
              });
            try {
              t.timeStamp || (t.timeStamp = Date.now());
            } catch (e) {}
            (i.defaultPrevented !== u
              ? i.defaultPrevented
              : "returnValue" in i
              ? !1 === i.returnValue
              : i.getPreventDefault && i.getPreventDefault()) &&
              (t.isDefaultPrevented = x);
          }
          return t;
        }

        function c(e) {
          var t,
            i = { originalEvent: e };
          for (t in e) T.test(t) || e[t] === u || (i[t] = e[t]);
          return d(i, e);
        }
        var u,
          p = 1,
          h = Array.prototype.slice,
          f = e.isFunction,
          v = function(e) {
            return "string" == typeof e;
          },
          m = {},
          g = {},
          w = "onfocusin" in window,
          y = { focus: "focusin", blur: "focusout" },
          b = { mouseenter: "mouseover", mouseleave: "mouseout" };
        (g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents"),
          (e.event = { add: o, remove: l }),
          (e.proxy = function(i, a) {
            var n = 2 in arguments && h.call(arguments, 2);
            if (f(i)) {
              var s = function() {
                return i.apply(a, n ? n.concat(h.call(arguments)) : arguments);
              };
              return (s._zid = t(i)), s;
            }
            if (v(a))
              return n
                ? (n.unshift(i[a], i), e.proxy.apply(null, n))
                : e.proxy(i[a], i);
            throw new TypeError("expected function");
          }),
          (e.fn.bind = function(e, t, i) {
            return this.on(e, t, i);
          }),
          (e.fn.unbind = function(e, t) {
            return this.off(e, t);
          }),
          (e.fn.one = function(e, t, i, a) {
            return this.on(e, t, i, a, 1);
          });
        var x = function() {
            return !0;
          },
          E = function() {
            return !1;
          },
          T = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
          C = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
          };
        (e.fn.delegate = function(e, t, i) {
          return this.on(t, e, i);
        }),
          (e.fn.undelegate = function(e, t, i) {
            return this.off(t, e, i);
          }),
          (e.fn.live = function(t, i) {
            return e(document.body).delegate(this.selector, t, i), this;
          }),
          (e.fn.die = function(t, i) {
            return e(document.body).undelegate(this.selector, t, i), this;
          }),
          (e.fn.on = function(t, i, a, n, s) {
            var r,
              d,
              p = this;
            return t && !v(t)
              ? (e.each(t, function(e, t) {
                  p.on(e, i, a, t, s);
                }),
                p)
              : (v(i) || f(n) || !1 === n || ((n = a), (a = i), (i = u)),
                (n === u || !1 === a) && ((n = a), (a = u)),
                !1 === n && (n = E),
                p.each(function(u, p) {
                  s &&
                    (r = function(e) {
                      return l(p, e.type, n), n.apply(this, arguments);
                    }),
                    i &&
                      (d = function(t) {
                        var a,
                          s = e(t.target)
                            .closest(i, p)
                            .get(0);
                        return s && s !== p
                          ? ((a = e.extend(c(t), {
                              currentTarget: s,
                              liveFired: p
                            })),
                            (r || n).apply(s, [a].concat(h.call(arguments, 1))))
                          : void 0;
                      }),
                    o(p, t, n, a, i, d || r);
                }));
          }),
          (e.fn.off = function(t, i, a) {
            var n = this;
            return t && !v(t)
              ? (e.each(t, function(e, t) {
                  n.off(e, i, t);
                }),
                n)
              : (v(i) || f(a) || !1 === a || ((a = i), (i = u)),
                !1 === a && (a = E),
                n.each(function() {
                  l(this, t, a, i);
                }));
          }),
          (e.fn.trigger = function(t, i) {
            return (
              (t = v(t) || e.isPlainObject(t) ? e.Event(t) : d(t)),
              (t._args = i),
              this.each(function() {
                t.type in y && "function" == typeof this[t.type]
                  ? this[t.type]()
                  : "dispatchEvent" in this
                  ? this.dispatchEvent(t)
                  : e(this).triggerHandler(t, i);
              })
            );
          }),
          (e.fn.triggerHandler = function(t, a) {
            var n, s;
            return (
              this.each(function(r, o) {
                (n = c(v(t) ? e.Event(t) : t)),
                  (n._args = a),
                  (n.target = o),
                  e.each(i(o, t.type || t), function(e, t) {
                    return (
                      (s = t.proxy(n)),
                      !n.isImmediatePropagationStopped() && void 0
                    );
                  });
              }),
              s
            );
          }),
          "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error"
            .split(" ")
            .forEach(function(t) {
              e.fn[t] = function(e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t);
              };
            }),
          (e.Event = function(e, t) {
            v(e) || ((t = e), (e = t.type));
            var i = document.createEvent(g[e] || "Events"),
              a = !0;
            if (t)
              for (var n in t) "bubbles" == n ? (a = !!t[n]) : (i[n] = t[n]);
            return i.initEvent(e, a, !0), d(i);
          });
      })(n),
      (function(e, t) {
        function i(e) {
          return e.replace(/([A-Z])/g, "-$1").toLowerCase();
        }

        function n(e) {
          return s ? s + e : e.toLowerCase();
        }
        var s,
          r,
          o,
          l,
          d,
          c,
          u,
          p,
          h,
          f,
          v = "",
          m = { Webkit: "webkit", Moz: "", O: "o" },
          g = document.createElement("div"),
          w = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
          y = {};
        g.style.transform === t &&
          e.each(m, function(e, i) {
            return g.style[e + "TransitionProperty"] !== t
              ? ((v = "-" + e.toLowerCase() + "-"), (s = i), !1)
              : void 0;
          }),
          (r = v + "transform"),
          (y[(o = v + "transition-property")] = y[
            (l = v + "transition-duration")
          ] = y[(c = v + "transition-delay")] = y[
            (d = v + "transition-timing-function")
          ] = y[(u = v + "animation-name")] = y[
            (p = v + "animation-duration")
          ] = y[(f = v + "animation-delay")] = y[
            (h = v + "animation-timing-function")
          ] = ""),
          (e.fx = {
            off: s === t && g.style.transitionProperty === t,
            speeds: { _default: 400, fast: 200, slow: 600 },
            cssPrefix: v,
            transitionEnd: n("TransitionEnd"),
            animationEnd: n("AnimationEnd")
          }),
          (e.fn.animate = function(i, a, n, s, r) {
            return (
              e.isFunction(a) && ((s = a), (n = t), (a = t)),
              e.isFunction(n) && ((s = n), (n = t)),
              e.isPlainObject(a) &&
                ((n = a.easing),
                (s = a.complete),
                (r = a.delay),
                (a = a.duration)),
              a &&
                (a =
                  ("number" == typeof a
                    ? a
                    : e.fx.speeds[a] || e.fx.speeds._default) / 1e3),
              r && (r = parseFloat(r) / 1e3),
              this.anim(i, a, n, s, r)
            );
          }),
          (e.fn.anim = function(n, s, v, m, g) {
            var b,
              x,
              E,
              T = {},
              C = "",
              S = this,
              k = e.fx.transitionEnd,
              $ = !1;
            if (
              (s === t && (s = e.fx.speeds._default / 1e3),
              g === t && (g = 0),
              e.fx.off && (s = 0),
              "string" == typeof n)
            )
              (T[u] = n),
                (T[p] = s + "s"),
                (T[f] = g + "s"),
                (T[h] = v || "linear"),
                (k = e.fx.animationEnd);
            else {
              x = [];
              for (b in n)
                w.test(b)
                  ? (C += b + "(" + n[b] + ") ")
                  : ((T[b] = n[b]), x.push(i(b)));
              C && ((T[r] = C), x.push(r)),
                s > 0 &&
                  "object" == (void 0 === n ? "undefined" : a(n)) &&
                  ((T[o] = x.join(", ")),
                  (T[l] = s + "s"),
                  (T[c] = g + "s"),
                  (T[d] = v || "linear"));
            }
            return (
              (E = function(t) {
                if (void 0 !== t) {
                  if (t.target !== t.currentTarget) return;
                  e(t.target).unbind(k, E);
                } else e(this).unbind(k, E);
                ($ = !0), e(this).css(y), m && m.call(this);
              }),
              s > 0 &&
                (this.bind(k, E),
                setTimeout(function() {
                  $ || E.call(S);
                }, 1e3 * (s + g) + 25)),
              this.size() && this.get(0).clientLeft,
              this.css(T),
              0 >= s &&
                setTimeout(function() {
                  S.each(function() {
                    E.call(this);
                  });
                }, 0),
              this
            );
          }),
          (g = null);
      })(n),
      (function(e) {
        function t(t) {
          return (
            (t = e(t)),
            !(!t.width() && !t.height()) && "none" !== t.css("display")
          );
        }

        function i(e, t) {
          e = e.replace(/=#\]/g, '="#"]');
          var i,
            a,
            n = o.exec(e);
          if (n && n[2] in r && ((i = r[n[2]]), (a = n[3]), (e = n[1]), a)) {
            var s = Number(a);
            a = isNaN(s) ? a.replace(/^["']|["']$/g, "") : s;
          }
          return t(e, i, a);
        }
        var a = e.zepto,
          n = a.qsa,
          s = a.matches,
          r = (e.expr[":"] = {
            visible: function() {
              return t(this) ? this : void 0;
            },
            hidden: function() {
              return t(this) ? void 0 : this;
            },
            selected: function() {
              return this.selected ? this : void 0;
            },
            checked: function() {
              return this.checked ? this : void 0;
            },
            parent: function() {
              return this.parentNode;
            },
            first: function(e) {
              return 0 === e ? this : void 0;
            },
            last: function(e, t) {
              return e === t.length - 1 ? this : void 0;
            },
            eq: function(e, t, i) {
              return e === i ? this : void 0;
            },
            contains: function(t, i, a) {
              return e(this)
                .text()
                .indexOf(a) > -1
                ? this
                : void 0;
            },
            has: function(e, t, i) {
              return a.qsa(this, i).length ? this : void 0;
            }
          }),
          o = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
          l = /^\s*>/,
          d = "Zepto" + +new Date();
        (a.qsa = function(t, s) {
          return i(s, function(i, r, o) {
            try {
              var c;
              !i && r
                ? (i = "*")
                : l.test(i) &&
                  ((c = e(t).addClass(d)), (i = "." + d + " " + i));
              var u = n(t, i);
            } catch (e) {
              throw (console.error("error performing selector: %o", s), e);
            } finally {
              c && c.removeClass(d);
            }
            return r
              ? a.uniq(
                  e.map(u, function(e, t) {
                    return r.call(e, t, u, o);
                  })
                )
              : u;
          });
        }),
          (a.matches = function(e, t) {
            return i(t, function(t, i, a) {
              return (!t || s(e, t)) && (!i || i.call(e, null, a) === e);
            });
          });
      })(n);
  },
  function(e, t) {},
  function(e, t, i) {
    "use strict";
    var a = function(e) {
      var t = !0,
        i = window.navigator.userAgent,
        a = window.navigator.connection;
      if (/MicroMessenger/.test(i))
        /NetType/.test(i)
          ? "WIFI" != i.match(/NetType\/(\S)+/)[0].replace("NetType/", "") &&
            (t = !1)
          : document.addEventListener("WeixinJSBridgeReady", function() {
              WeixinJSBridge.invoke("getNetworkType", {}, function(e) {
                "network_type:wifi" != e.err_msg && (t = !1);
              });
            });
      else if (a) {
        var n = a.type;
        "wifi" != n && "2" != n && "unknown" != n && (t = !1);
      }
      window.networkWIFI = t;
    };
    e.exports = a;
  },
  function(e, t, i) {
    "use strict";
    var a = function(e, t) {
      var i = ["mp4", "m3u8"],
        a = function(t, i) {
          for (var a in t) {
            var n = t[a],
              s = n.file_api + "?vid=" + n.file_id + "&tags=vod_h5";
            e.show(), e.attr("src", s), e.attr("poster", i);
            break;
          }
        };
      $.ajax({
        url: "http://s.video.sina.com.cn/video/h5play?video_id=" + t,
        dataType: "jsonp",
        success: function(e) {
          if (e && 1 == e.code) {
            var t = e.data.image,
              n = e.data.videos;
            $(".video-ms").append('<img src="' + t + '"/>');
            for (var s = 0, r = i.length; s < r; s++) {
              var o = i[s];
              if (n[o]) {
                a(n[o], t);
                break;
              }
            }
          }
        }
      });
    };
    e.exports = a;
  },
  function(e, t) {},
  function(e, t, i) {
    "use strict";
    e.exports = {
      requset: function(e) {
        var t = this;
        return (
          $.ajax({
            url: e.url,
            data: e.data,
            type: e.type,
            dataType: e.dataType || "jsonp",
            xhrFields: { withCredentials: !0 },
            complete: function() {
              t.complete();
            },
            error: function() {
              t.error();
            },
            timeout: e.timeout,
            success: function(e) {
              t.success(e);
            }
          }),
          t
        );
      },
      success: function() {},
      error: function() {},
      complete: function() {}
    };
  },
  ,
  function(e, t, i) {
    "use strict";
    e.exports = {
      init: function(e) {
        (this.url = e.href || window.location.href),
          (this.title = e.title || document.title),
          (this.content = e.content || ""),
          (this.pic =
            e.pic || "\thttp://n.sinaimg.cn/finance/piyao/piyao-share.png");
        var t = this,
          i = document.createElement("script");
        (i.type = "text/javascript"),
          (i.src = "//res.wx.qq.com/open/js/jweixin-1.0.0.js"),
          document.body.appendChild(i),
          (i.onload = function() {
            t.initWXConfig();
          });
      },
      initWxRrady: function() {
        function e(e) {
          wx.onMenuShareTimeline({
            title: e.title,
            link: e.url,
            imgUrl: e.imgUrl,
            success: function() {},
            cancel: function() {}
          }),
            wx.onMenuShareAppMessage({
              title: e.title,
              desc: e.content,
              link: e.url,
              imgUrl: e.imgUrl,
              type: "link",
              dataUrl: "",
              success: function() {
                console.log(e.content);
              },
              cancel: function() {}
            }),
            wx.onMenuShareQQ({
              title: e.title,
              desc: e.content,
              link: e.url,
              imgUrl: e.imgUrl,
              success: function() {},
              cancel: function() {}
            }),
            wx.onMenuShareQZone({
              title: e.title,
              desc: e.content,
              link: e.url,
              imgUrl: e.imgUrl,
              success: function() {},
              cancel: function() {}
            });
        }
        var t = this;
        wx.ready(function() {
          e({ title: t.title, url: t.url, imgUrl: t.pic, content: t.content });
        });
      },
      initWXConfig: function() {
        this.initWxRrady(),
          $.ajax({
            url: "//datanews.mix.sina.com.cn/?&p=weixin&format=json",
            data: {
              url:
                location.href.indexOf("#") >= 0
                  ? location.href.substring(0, location.href.indexOf("#"))
                  : location.href
            },
            dataType: "jsonp",
            success: function(e) {
              if (0 === e.result.status.code) {
                var t = e.result;
                wx.config({
                  appId: t.data.appId,
                  timestamp: t.data.timestamp,
                  nonceStr: t.data.nonceStr,
                  signature: t.data.signature,
                  jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
                });
              }
            },
            error: function() {
              console.log(777);
            }
          });
      }
    };
  },
  ,
  ,
  ,
  ,
  ,
  function(e, t, i) {
    "use strict";
    e.exports = function(e) {
      var t = Math.random();
      return (
        "//z" +
        (0 + Math.round(8 * t)) +
        ".sinaimg.cn/auto/resize?img=" +
        encodeURIComponent(e) +
        "&size=250_0"
      );
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, i) {
    "use strict";
    i(43);
    var a = i(44),
      n = i(1),
      s = function(e) {
        var t = navigator.appVersion;
        (this.url = e.href || window.location.href),
          (this.title =
            e.title ||
            $(".content h3")
              .eq(0)
              .html()),
          (this.content = e.content || "捉谣记--还原真相，粉碎谣言"),
          (this.pic =
            e.pic || "http://n.sinaimg.cn/finance/piyao/piyao-share.png");
        this.url, this.title, this.content, this.pic;
        this.initQQBrowser(), this.initUCBrowser(), this.initWeiBo();
        var i = /mqqbrowser/i.test(n.UA),
          a = /ucbrowser/i.test(n.UA);
        n.WX
          ? ($('[data-role="wechat-friend"]')
              .parents("li")
              .css("display", ""),
            $('[data-role="wechat-timeline"]')
              .parents("li")
              .css("display", ""),
            $('[data-role="wechat-timeline"],[data-role="wechat-friend"]').on(
              "click",
              function() {
                $(".share_fullpage,.wxpromit").css("display", "block");
              }
            ))
          : "QQ/" != t.match(/QQ\//i) || i
          ? i ||
            a ||
            ($('[data-role="wechat-friend"]')
              .parents("li")
              .css("display", ""),
            $('[data-role="wechat-timeline"]')
              .parents("li")
              .css("display", ""),
            $('[data-role="wechat-timeline"],[data-role="wechat-friend"]').on(
              "click",
              function() {
                $(".share_fullpage,.safariimg").css("display", "block");
              }
            ))
          : ($('[data-role="wechat-friend"]')
              .parents("li")
              .css("display", ""),
            $('[data-role="wechat-timeline"]')
              .parents("li")
              .css("display", ""),
            $('[data-role="wechat-timeline"],[data-role="wechat-friend"]').on(
              "click",
              function() {
                $(".share_fullpage,.wxpromit").css("display", "block");
              }
            ));
      };
    (s.prototype.getVersion = function(e) {
      var t = e.split(".");
      return parseFloat(t[0] + "." + t[1]);
    }),
      (s.prototype.initWeiBo = function() {
        var e = [
          "http://service.weibo.com/share/mobile.php?url=" +
            encodeURIComponent(this.url),
          "&title=" + encodeURIComponent(this.title),
          this.content ? "&content=" + encodeURIComponent(this.content) : "",
          this.pic ? "&pic=" + this.pic : ""
        ].join("");
        $('[data-role="weibo-link"]').attr("href", e);
      }),
      (s.prototype.initQQBrowser = function() {
        function e(e) {
          if (!s) return e && e();
          var t = document.createElement("script");
          (t.onload = function() {
            e && e();
          }),
            (t.onerror = function() {}),
            (t.src =
              1 == s
                ? "http://3gimg.qq.com/html5/js/qb.js"
                : "http://jsapi.qq.com/get?api=app.share"),
            document.body.appendChild(t);
        }

        function t(t) {
          var i = t.to_app;
          i = i ? (1 == i ? 8 : 1) : "";
          var a = function() {
            var e = {
              url: t.url,
              title: t.title,
              description: t.description,
              img_url: t.img_url,
              img_title: t.img_title,
              to_app: i,
              cus_txt: ""
            };
            window.browser
              ? browser.app && browser.app.share(e)
              : window.qb && qb.share && qb.share(e);
          };
          l ? a() : e(a);
        }

        function i(e) {
          (this.config = e),
            (this.init = function(e) {
              void 0 !== e && (this.config.to_app = e);
              try {
                o && t(this.config);
              } catch (e) {}
            });
        }
        var a,
          s,
          r = this;
        (a = navigator.appVersion),
          (s = a.split("MQQBrowser/").length > 1 ? 2 : 0);
        var o = /mqqbrowser/i.test(n.UA);
        if (o && "QQ/" != a.match(/QQ\//i) && !n.WX) {
          var l = (o && r.getVersion(n.UA.split("mqqbrowser/")[1]), !1);
          e(function() {
            l = !0;
          });
          var d = {
              url: r.url,
              img_url: r.pic,
              title: r.title,
              description: r.content
            },
            c = new i(d);
          $('[data-role="wechat-friend"]')
            .parents("li")
            .css("display", ""),
            $('[data-role="wechat-timeline"]')
              .parents("li")
              .css("display", ""),
            $('[data-role="wechat-friend"]').click(function() {
              c.init(2);
            }),
            $('[data-role="wechat-timeline"]').click(function() {
              c.init(1);
            });
        }
      }),
      (s.prototype.qqShareWechat = function(e, t) {
        var i = this,
          a = {
            url: i.url,
            img_url: i.pic,
            title: i.title,
            description: i.content,
            to_app: e
          };
        2 === t ? browser.app.share(a) : window.qb.share(a);
      }),
      (s.prototype.initUCBrowser = function() {
        var e = this,
          t = $('[data-role="wechat-friend"]'),
          i = $('[data-role="wechat-timeline"]');
        if (!n.WX) {
          var s = /ucbrowser/i.test(n.UA),
            r = s ? this.getVersion(n.UA.split("ucbrowser/")[1]) : 0,
            o = !1;
          s &&
            (a.ios ? r >= 10.2 && (o = !0) : a.android && r >= 9.7 && (o = !0),
            o &&
              (t.parents("li").css("display", ""),
              i.parents("li").css("display", ""),
              t.on("click", function(t) {
                e.ucShareWechat(1);
              }),
              i.on("click", function(t) {
                e.ucShareWechat(2);
              })));
        }
      }),
      (s.prototype.ucShareWechat = function(e) {
        var t = this,
          i = {
            title: t.title,
            content: t.content,
            url: t.url,
            platform: "",
            disablePlatform: "",
            source: "",
            htmlId: ""
          };
        a.ios
          ? (1 === e
              ? (i.platform = "kWeixin")
              : 2 === e && (i.platform = "kWeixinFriend"),
            ucbrowser.web_share(
              i.title,
              i.content,
              i.url,
              i.platform,
              i.disablePlatform,
              i.source,
              i.htmlId
            ))
          : a.android &&
            (1 === e
              ? (i.platform = "WechatFriends")
              : 2 === e && (i.platform = "WechatTimeline"),
            ucweb.startRequest("shell.page_share", [
              i.title,
              i.content,
              i.url,
              i.platform,
              i.disablePlatform,
              i.source,
              i.htmlId
            ]));
      }),
      (e.exports = s);
  },
  function(e, t) {},
  function(e, t, i) {
    "use strict";
    var a,
      n,
      s = navigator.userAgent.toLowerCase(),
      r = navigator.platform.toLowerCase(),
      o = function(e) {
        var t = 0;
        try {
          var i = e.split(/[_\.]/),
            a = i.shift();
          t = parseFloat(a + "." + i.join(""), 10);
        } catch (e) {}
        return t;
      };
    try {
      (n = s.match(/\((ipad|iphone|ipod|itouch).*os\s([\d_\.]+)/)) && n[2]
        ? (a = o(n[2]))
        : (n = s.match(/android[^\d]+([\d_\.]+)/)) && n[1]
        ? (a = o(n[1]))
        : (n = s.match(/macintosh[^\d]+([\d_\.]+)/)) && n[1]
        ? (a = o(n[1]))
        : (n = s.match(/(windows|win32)[^\d]+([\d_\.]+)/)) && n[2]
        ? (a = o(n[2]))
        : (n = s.match(/rhino[^\d]+([\d_\.]+)/)) && n[1] && (a = o(n[1]));
    } catch (e) {
      throw e;
    }
    var l = {
      version: a,
      windows: /windows|win32/.test(s),
      macintosh: /macintosh/.test(s),
      rhino: /rhino/.test(s)
    };
    (l.android = /android/.test(s) || /xiaomi/.test(s)),
      !/(ipad|iphone|ipod|itouch)/.test(r) && a <= 4 && (l.android = !0),
      (l.ios = /(ipad|iphone|ipod|itouch)/.test(s) && !l.android),
      (e.exports = l);
  },
  function(e, t, i) {
    "use strict";
    i(46);
    i(1);
    e.exports = {
      build: function(e) {
        $("." + e.maskClass).on("touchmove click", function(e) {
          return e.preventDefault(), !1;
        }),
          $("." + e.maskClass).on("touchstart click", function(e) {
            return e.preventDefault(), !1;
          }),
          $("." + e.maskClass).on("touchend click", function(t) {
            return (
              t.preventDefault(),
              $("." + e.maskClass).css("display", "none"),
              !1
            );
          });
      }
    };
  },
  function(e, t) {},
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, i) {
    !(function(t, i) {
      e.exports = i();
    })(0, function() {
      "use strict";

      function e(e, t) {
        var i = [],
          r = 0;
        if (e && !t && e instanceof s) return e;
        if (e)
          if ("string" == typeof e) {
            var o,
              l,
              d = e.trim();
            if (0 <= d.indexOf("<") && 0 <= d.indexOf(">")) {
              var c = "div";
              for (
                0 === d.indexOf("<li") && (c = "ul"),
                  0 === d.indexOf("<tr") && (c = "tbody"),
                  (0 !== d.indexOf("<td") && 0 !== d.indexOf("<th")) ||
                    (c = "tr"),
                  0 === d.indexOf("<tbody") && (c = "table"),
                  0 === d.indexOf("<option") && (c = "select"),
                  (l = a.createElement(c)).innerHTML = d,
                  r = 0;
                r < l.childNodes.length;
                r += 1
              )
                i.push(l.childNodes[r]);
            } else
              for (
                o =
                  t || "#" !== e[0] || e.match(/[ .<>:~]/)
                    ? (t || a).querySelectorAll(e.trim())
                    : [a.getElementById(e.trim().split("#")[1])],
                  r = 0;
                r < o.length;
                r += 1
              )
                o[r] && i.push(o[r]);
          } else if (e.nodeType || e === n || e === a) i.push(e);
          else if (0 < e.length && e[0].nodeType)
            for (r = 0; r < e.length; r += 1) i.push(e[r]);
        return new s(i);
      }

      function t(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      }

      function i() {
        var e = this,
          t = e.params,
          i = e.el;
        if (!i || 0 !== i.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var a = e.allowSlideNext,
            n = e.allowSlidePrev,
            s = e.snapGrid;
          if (
            ((e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            t.freeMode)
          ) {
            var r = Math.min(
              Math.max(e.translate, e.maxTranslate()),
              e.minTranslate()
            );
            e.setTranslate(r),
              e.updateActiveIndex(),
              e.updateSlidesClasses(),
              t.autoHeight && e.updateAutoHeight();
          } else
            e.updateSlidesClasses(),
              ("auto" === t.slidesPerView || 1 < t.slidesPerView) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0);
          (e.allowSlidePrev = n),
            (e.allowSlideNext = a),
            e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
        }
      }
      var a =
          "undefined" == typeof document
            ? {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: { blur: function() {}, nodeName: "" },
                querySelector: function() {
                  return null;
                },
                querySelectorAll: function() {
                  return [];
                },
                getElementById: function() {
                  return null;
                },
                createEvent: function() {
                  return { initEvent: function() {} };
                },
                createElement: function() {
                  return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                      return [];
                    }
                  };
                },
                location: { hash: "" }
              }
            : document,
        n =
          "undefined" == typeof window
            ? {
                document: a,
                navigator: { userAgent: "" },
                location: {},
                history: {},
                CustomEvent: function() {
                  return this;
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                  return {
                    getPropertyValue: function() {
                      return "";
                    }
                  };
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {}
              }
            : window,
        s = function(e) {
          for (var t = 0; t < e.length; t += 1) this[t] = e[t];
          return (this.length = e.length), this;
        };
      (e.fn = s.prototype), (e.Class = s), (e.Dom7 = s);
      var r = {
        addClass: function(e) {
          if (void 0 === e) return this;
          for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var a = 0; a < this.length; a += 1)
              void 0 !== this[a] &&
                void 0 !== this[a].classList &&
                this[a].classList.add(t[i]);
          return this;
        },
        removeClass: function(e) {
          for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var a = 0; a < this.length; a += 1)
              void 0 !== this[a] &&
                void 0 !== this[a].classList &&
                this[a].classList.remove(t[i]);
          return this;
        },
        hasClass: function(e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function(e) {
          for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var a = 0; a < this.length; a += 1)
              void 0 !== this[a] &&
                void 0 !== this[a].classList &&
                this[a].classList.toggle(t[i]);
          return this;
        },
        attr: function(e, t) {
          var i = arguments;
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var a = 0; a < this.length; a += 1)
            if (2 === i.length) this[a].setAttribute(e, t);
            else
              for (var n in e)
                (this[a][n] = e[n]), this[a].setAttribute(n, e[n]);
          return this;
        },
        removeAttr: function(e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function(e, t) {
          var i;
          if (void 0 !== t) {
            for (var a = 0; a < this.length; a += 1)
              (i = this[a]).dom7ElementDataStorage ||
                (i.dom7ElementDataStorage = {}),
                (i.dom7ElementDataStorage[e] = t);
            return this;
          }
          if ((i = this[0])) {
            if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
              return i.dom7ElementDataStorage[e];
            return i.getAttribute("data-" + e) || void 0;
          }
        },
        transform: function(e) {
          for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            (i.webkitTransform = e), (i.transform = e);
          }
          return this;
        },
        transition: function(e) {
          "string" != typeof e && (e += "ms");
          for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            (i.webkitTransitionDuration = e), (i.transitionDuration = e);
          }
          return this;
        },
        on: function() {
          function t(t) {
            var i = t.target;
            if (i) {
              var a = t.target.dom7EventData || [];
              if ((a.indexOf(t) < 0 && a.unshift(t), e(i).is(o))) l.apply(i, a);
              else
                for (var n = e(i).parents(), s = 0; s < n.length; s += 1)
                  e(n[s]).is(o) && l.apply(n[s], a);
            }
          }

          function i(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), l.apply(this, t);
          }
          for (var a, n = [], s = arguments.length; s--; ) n[s] = arguments[s];
          var r = n[0],
            o = n[1],
            l = n[2],
            d = n[3];
          "function" == typeof n[1] &&
            ((r = (a = n)[0]), (l = a[1]), (d = a[2]), (o = void 0)),
            d || (d = !1);
          for (var c, u = r.split(" "), p = 0; p < this.length; p += 1) {
            var h = this[p];
            if (o)
              for (c = 0; c < u.length; c += 1) {
                var f = u[c];
                h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                  h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []),
                  h.dom7LiveListeners[f].push({
                    listener: l,
                    proxyListener: t
                  }),
                  h.addEventListener(f, t, d);
              }
            else
              for (c = 0; c < u.length; c += 1) {
                var v = u[c];
                h.dom7Listeners || (h.dom7Listeners = {}),
                  h.dom7Listeners[v] || (h.dom7Listeners[v] = []),
                  h.dom7Listeners[v].push({ listener: l, proxyListener: i }),
                  h.addEventListener(v, i, d);
              }
          }
          return this;
        },
        off: function() {
          for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
          var a = t[0],
            n = t[1],
            s = t[2],
            r = t[3];
          "function" == typeof t[1] &&
            ((a = (e = t)[0]), (s = e[1]), (r = e[2]), (n = void 0)),
            r || (r = !1);
          for (var o = a.split(" "), l = 0; l < o.length; l += 1)
            for (var d = o[l], c = 0; c < this.length; c += 1) {
              var u = this[c],
                p = void 0;
              if (
                (!n && u.dom7Listeners
                  ? (p = u.dom7Listeners[d])
                  : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]),
                p && p.length)
              )
                for (var h = p.length - 1; 0 <= h; h -= 1) {
                  var f = p[h];
                  s && f.listener === s
                    ? (u.removeEventListener(d, f.proxyListener, r),
                      p.splice(h, 1))
                    : s ||
                      (u.removeEventListener(d, f.proxyListener, r),
                      p.splice(h, 1));
                }
            }
          return this;
        },
        trigger: function() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var i = e[0].split(" "), s = e[1], r = 0; r < i.length; r += 1)
            for (var o = i[r], l = 0; l < this.length; l += 1) {
              var d = this[l],
                c = void 0;
              try {
                c = new n.CustomEvent(o, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0
                });
              } catch (e) {
                (c = a.createEvent("Event")).initEvent(o, !0, !0),
                  (c.detail = s);
              }
              (d.dom7EventData = e.filter(function(e, t) {
                return 0 < t;
              })),
                d.dispatchEvent(c),
                (d.dom7EventData = []),
                delete d.dom7EventData;
            }
          return this;
        },
        transitionEnd: function(e) {
          function t(s) {
            if (s.target === this)
              for (e.call(this, s), i = 0; i < a.length; i += 1) n.off(a[i], t);
          }
          var i,
            a = ["webkitTransitionEnd", "transitionend"],
            n = this;
          if (e) for (i = 0; i < a.length; i += 1) n.on(a[i], t);
          return this;
        },
        outerWidth: function(e) {
          if (0 < this.length) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function(e) {
          if (0 < this.length) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function() {
          if (0 < this.length) {
            var e = this[0],
              t = e.getBoundingClientRect(),
              i = a.body,
              s = e.clientTop || i.clientTop || 0,
              r = e.clientLeft || i.clientLeft || 0,
              o = e === n ? n.scrollY : e.scrollTop,
              l = e === n ? n.scrollX : e.scrollLeft;
            return { top: t.top + o - s, left: t.left + l - r };
          }
          return null;
        },
        css: function(e, t) {
          var i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (var a in e) this[i].style[a] = e[a];
              return this;
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function(e) {
          if (!e) return this;
          for (var t = 0; t < this.length; t += 1)
            if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function(e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function(e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function(t) {
          var i,
            r,
            o = this[0];
          if (!o || void 0 === t) return !1;
          if ("string" == typeof t) {
            if (o.matches) return o.matches(t);
            if (o.webkitMatchesSelector) return o.webkitMatchesSelector(t);
            if (o.msMatchesSelector) return o.msMatchesSelector(t);
            for (i = e(t), r = 0; r < i.length; r += 1)
              if (i[r] === o) return !0;
            return !1;
          }
          if (t === a) return o === a;
          if (t === n) return o === n;
          if (t.nodeType || t instanceof s) {
            for (i = t.nodeType ? [t] : t, r = 0; r < i.length; r += 1)
              if (i[r] === o) return !0;
            return !1;
          }
          return !1;
        },
        index: function() {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function(e) {
          if (void 0 === e) return this;
          var t,
            i = this.length;
          return new s(
            i - 1 < e
              ? []
              : e < 0
              ? (t = i + e) < 0
                ? []
                : [this[t]]
              : [this[e]]
          );
        },
        append: function() {
          for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
          for (var n = 0; n < t.length; n += 1) {
            e = t[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" == typeof e) {
                var o = a.createElement("div");
                for (o.innerHTML = e; o.firstChild; )
                  this[r].appendChild(o.firstChild);
              } else if (e instanceof s)
                for (var l = 0; l < e.length; l += 1) this[r].appendChild(e[l]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function(e) {
          var t, i;
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              var n = a.createElement("div");
              for (n.innerHTML = e, i = n.childNodes.length - 1; 0 <= i; i -= 1)
                this[t].insertBefore(n.childNodes[i], this[t].childNodes[0]);
            } else if (e instanceof s)
              for (i = 0; i < e.length; i += 1)
                this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function(t) {
          return new s(
            0 < this.length
              ? t
                ? this[0].nextElementSibling &&
                  e(this[0].nextElementSibling).is(t)
                  ? [this[0].nextElementSibling]
                  : []
                : this[0].nextElementSibling
                ? [this[0].nextElementSibling]
                : []
              : []
          );
        },
        nextAll: function(t) {
          var i = [],
            a = this[0];
          if (!a) return new s([]);
          for (; a.nextElementSibling; ) {
            var n = a.nextElementSibling;
            t ? e(n).is(t) && i.push(n) : i.push(n), (a = n);
          }
          return new s(i);
        },
        prev: function(t) {
          if (0 < this.length) {
            var i = this[0];
            return new s(
              t
                ? i.previousElementSibling && e(i.previousElementSibling).is(t)
                  ? [i.previousElementSibling]
                  : []
                : i.previousElementSibling
                ? [i.previousElementSibling]
                : []
            );
          }
          return new s([]);
        },
        prevAll: function(t) {
          var i = [],
            a = this[0];
          if (!a) return new s([]);
          for (; a.previousElementSibling; ) {
            var n = a.previousElementSibling;
            t ? e(n).is(t) && i.push(n) : i.push(n), (a = n);
          }
          return new s(i);
        },
        parent: function(i) {
          for (var a = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (i
                ? e(this[n].parentNode).is(i) && a.push(this[n].parentNode)
                : a.push(this[n].parentNode));
          return e(t(a));
        },
        parents: function(i) {
          for (var a = [], n = 0; n < this.length; n += 1)
            for (var s = this[n].parentNode; s; )
              i ? e(s).is(i) && a.push(s) : a.push(s), (s = s.parentNode);
          return e(t(a));
        },
        closest: function(e) {
          var t = this;
          return void 0 === e
            ? new s([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
          for (var t = [], i = 0; i < this.length; i += 1)
            for (
              var a = this[i].querySelectorAll(e), n = 0;
              n < a.length;
              n += 1
            )
              t.push(a[n]);
          return new s(t);
        },
        children: function(i) {
          for (var a = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].childNodes, o = 0; o < r.length; o += 1)
              i
                ? 1 === r[o].nodeType && e(r[o]).is(i) && a.push(r[o])
                : 1 === r[o].nodeType && a.push(r[o]);
          return new s(t(a));
        },
        remove: function() {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function() {
          for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
          var a, n;
          for (a = 0; a < t.length; a += 1) {
            var s = e(t[a]);
            for (n = 0; n < s.length; n += 1)
              (this[this.length] = s[n]), (this.length += 1);
          }
          return this;
        },
        styles: function() {
          return this[0] ? n.getComputedStyle(this[0], null) : {};
        }
      };
      Object.keys(r).forEach(function(t) {
        e.fn[t] = r[t];
      });
      var o,
        l,
        d,
        c = {
          deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
              try {
                t[e] = null;
              } catch (e) {}
              try {
                delete t[e];
              } catch (e) {}
            });
          },
          nextTick: function(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t);
          },
          now: function() {
            return Date.now();
          },
          getTranslate: function(e, t) {
            var i, a, s;
            void 0 === t && (t = "x");
            var r = n.getComputedStyle(e, null);
            return (
              n.WebKitCSSMatrix
                ? (6 <
                    (a = r.transform || r.webkitTransform).split(",").length &&
                    (a = a
                      .split(", ")
                      .map(function(e) {
                        return e.replace(",", ".");
                      })
                      .join(", ")),
                  (s = new n.WebKitCSSMatrix("none" === a ? "" : a)))
                : (i = (s =
                    r.MozTransform ||
                    r.OTransform ||
                    r.MsTransform ||
                    r.msTransform ||
                    r.transform ||
                    r
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,"))
                    .toString()
                    .split(",")),
              "x" === t &&
                (a = n.WebKitCSSMatrix
                  ? s.m41
                  : 16 === i.length
                  ? parseFloat(i[12])
                  : parseFloat(i[4])),
              "y" === t &&
                (a = n.WebKitCSSMatrix
                  ? s.m42
                  : 16 === i.length
                  ? parseFloat(i[13])
                  : parseFloat(i[5])),
              a || 0
            );
          },
          parseUrlQuery: function(e) {
            var t,
              i,
              a,
              s,
              r = {},
              o = e || n.location.href;
            if ("string" == typeof o && o.length)
              for (
                s = (i = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "")
                  .split("&")
                  .filter(function(e) {
                    return "" !== e;
                  })).length,
                  t = 0;
                t < s;
                t += 1
              )
                (a = i[t].replace(/#\S+/g, "").split("=")),
                  (r[decodeURIComponent(a[0])] =
                    void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "");
            return r;
          },
          isObject: function(e) {
            return (
              "object" == typeof e &&
              null !== e &&
              e.constructor &&
              e.constructor === Object
            );
          },
          extend: function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            for (var i = Object(e[0]), a = 1; a < e.length; a += 1) {
              var n = e[a];
              if (null != n)
                for (
                  var s = Object.keys(Object(n)), r = 0, o = s.length;
                  r < o;
                  r += 1
                ) {
                  var l = s[r],
                    d = Object.getOwnPropertyDescriptor(n, l);
                  void 0 !== d &&
                    d.enumerable &&
                    (c.isObject(i[l]) && c.isObject(n[l])
                      ? c.extend(i[l], n[l])
                      : !c.isObject(i[l]) && c.isObject(n[l])
                      ? ((i[l] = {}), c.extend(i[l], n[l]))
                      : (i[l] = n[l]));
                }
            }
            return i;
          }
        },
        u =
          ((d = a.createElement("div")),
          {
            touch:
              (n.Modernizr && !0 === n.Modernizr.touch) ||
              !!(
                0 < n.navigator.maxTouchPoints ||
                "ontouchstart" in n ||
                (n.DocumentTouch && a instanceof n.DocumentTouch)
              ),
            pointerEvents: !!(
              n.navigator.pointerEnabled ||
              n.PointerEvent ||
              "maxTouchPoints" in n.navigator
            ),
            prefixedPointerEvents: !!n.navigator.msPointerEnabled,
            transition:
              "transition" in (l = d.style) ||
              "webkitTransition" in l ||
              "MozTransition" in l,
            transforms3d:
              (n.Modernizr && !0 === n.Modernizr.csstransforms3d) ||
              "webkitPerspective" in (o = d.style) ||
              "MozPerspective" in o ||
              "OPerspective" in o ||
              "MsPerspective" in o ||
              "perspective" in o,
            flexbox: (function() {
              for (
                var e = d.style,
                  t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                    " "
                  ),
                  i = 0;
                i < t.length;
                i += 1
              )
                if (t[i] in e) return !0;
              return !1;
            })(),
            observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
            passiveListener: (function() {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function() {
                    e = !0;
                  }
                });
                n.addEventListener("testPassiveListener", null, t);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in n
          }),
        p = function(e) {
          void 0 === e && (e = {});
          var t = this;
          (t.params = e),
            (t.eventsListeners = {}),
            t.params &&
              t.params.on &&
              Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e]);
              });
        },
        h = { components: { configurable: !0 } };
      (p.prototype.on = function(e, t, i) {
        var a = this;
        if ("function" != typeof t) return a;
        var n = i ? "unshift" : "push";
        return (
          e.split(" ").forEach(function(e) {
            a.eventsListeners[e] || (a.eventsListeners[e] = []),
              a.eventsListeners[e][n](t);
          }),
          a
        );
      }),
        (p.prototype.once = function(e, t, i) {
          var a = this;
          return "function" != typeof t
            ? a
            : a.on(
                e,
                function i() {
                  for (var n = [], s = arguments.length; s--; )
                    n[s] = arguments[s];
                  t.apply(a, n), a.off(e, i);
                },
                i
              );
        }),
        (p.prototype.off = function(e, t) {
          var i = this;
          return (
            i.eventsListeners &&
              e.split(" ").forEach(function(e) {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].length &&
                    i.eventsListeners[e].forEach(function(a, n) {
                      a === t && i.eventsListeners[e].splice(n, 1);
                    });
              }),
            i
          );
        }),
        (p.prototype.emit = function() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var i,
            a,
            n,
            s = this;
          return (
            s.eventsListeners &&
              ("string" == typeof e[0] || Array.isArray(e[0])
                ? ((i = e[0]), (a = e.slice(1, e.length)), (n = s))
                : ((i = e[0].events), (a = e[0].data), (n = e[0].context || s)),
              (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
                if (s.eventsListeners && s.eventsListeners[e]) {
                  var t = [];
                  s.eventsListeners[e].forEach(function(e) {
                    t.push(e);
                  }),
                    t.forEach(function(e) {
                      e.apply(n, a);
                    });
                }
              })),
            s
          );
        }),
        (p.prototype.useModulesParams = function(e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function(i) {
              var a = t.modules[i];
              a.params && c.extend(e, a.params);
            });
        }),
        (p.prototype.useModules = function(e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function(i) {
              var a = t.modules[i],
                n = e[i] || {};
              a.instance &&
                Object.keys(a.instance).forEach(function(e) {
                  var i = a.instance[e];
                  t[e] = "function" == typeof i ? i.bind(t) : i;
                }),
                a.on &&
                  t.on &&
                  Object.keys(a.on).forEach(function(e) {
                    t.on(e, a.on[e]);
                  }),
                a.create && a.create.bind(t)(n);
            });
        }),
        (h.components.set = function(e) {
          this.use && this.use(e);
        }),
        (p.installModule = function(e) {
          for (var t = [], i = arguments.length - 1; 0 < i--; )
            t[i] = arguments[i + 1];
          var a = this;
          a.prototype.modules || (a.prototype.modules = {});
          var n =
            e.name || Object.keys(a.prototype.modules).length + "_" + c.now();
          return (
            (a.prototype.modules[n] = e).proto &&
              Object.keys(e.proto).forEach(function(t) {
                a.prototype[t] = e.proto[t];
              }),
            e.static &&
              Object.keys(e.static).forEach(function(t) {
                a[t] = e.static[t];
              }),
            e.install && e.install.apply(a, t),
            a
          );
        }),
        (p.use = function(e) {
          for (var t = [], i = arguments.length - 1; 0 < i--; )
            t[i] = arguments[i + 1];
          var a = this;
          return Array.isArray(e)
            ? (e.forEach(function(e) {
                return a.installModule(e);
              }),
              a)
            : a.installModule.apply(a, [e].concat(t));
        }),
        Object.defineProperties(p, h);
      var f,
        v = {
          updateSize: function() {
            var e,
              t,
              i = this,
              a = i.$el;
            (e = void 0 !== i.params.width ? i.params.width : a[0].clientWidth),
              (t =
                void 0 !== i.params.height
                  ? i.params.height
                  : a[0].clientHeight),
              (0 === e && i.isHorizontal()) ||
                (0 === t && i.isVertical()) ||
                ((e =
                  e -
                  parseInt(a.css("padding-left"), 10) -
                  parseInt(a.css("padding-right"), 10)),
                (t =
                  t -
                  parseInt(a.css("padding-top"), 10) -
                  parseInt(a.css("padding-bottom"), 10)),
                c.extend(i, {
                  width: e,
                  height: t,
                  size: i.isHorizontal() ? e : t
                }));
          },
          updateSlides: function() {
            var e = this,
              t = e.params,
              i = e.$wrapperEl,
              a = e.size,
              s = e.rtlTranslate,
              r = e.wrongRTL,
              o = e.virtual && t.virtual.enabled,
              l = o ? e.virtual.slides.length : e.slides.length,
              d = i.children("." + e.params.slideClass),
              p = o ? e.virtual.slides.length : d.length,
              h = [],
              f = [],
              v = [],
              m = t.slidesOffsetBefore;
            "function" == typeof m && (m = t.slidesOffsetBefore.call(e));
            var g = t.slidesOffsetAfter;
            "function" == typeof g && (g = t.slidesOffsetAfter.call(e));
            var w = e.snapGrid.length,
              y = e.snapGrid.length,
              b = t.spaceBetween,
              x = -m,
              E = 0,
              T = 0;
            if (void 0 !== a) {
              var C, S;
              "string" == typeof b &&
                0 <= b.indexOf("%") &&
                (b = (parseFloat(b.replace("%", "")) / 100) * a),
                (e.virtualSize = -b),
                s
                  ? d.css({ marginLeft: "", marginTop: "" })
                  : d.css({ marginRight: "", marginBottom: "" }),
                1 < t.slidesPerColumn &&
                  ((C =
                    Math.floor(p / t.slidesPerColumn) ===
                    p / e.params.slidesPerColumn
                      ? p
                      : Math.ceil(p / t.slidesPerColumn) * t.slidesPerColumn),
                  "auto" !== t.slidesPerView &&
                    "row" === t.slidesPerColumnFill &&
                    (C = Math.max(C, t.slidesPerView * t.slidesPerColumn)));
              for (
                var k,
                  $ = t.slidesPerColumn,
                  M = C / $,
                  P = Math.floor(p / t.slidesPerColumn),
                  z = 0;
                z < p;
                z += 1
              ) {
                S = 0;
                var I = d.eq(z);
                if (1 < t.slidesPerColumn) {
                  var L = void 0,
                    D = void 0,
                    O = void 0;
                  "column" === t.slidesPerColumnFill
                    ? ((O = z - (D = Math.floor(z / $)) * $),
                      (P < D || (D === P && O === $ - 1)) &&
                        $ <= (O += 1) &&
                        ((O = 0), (D += 1)),
                      (L = D + (O * C) / $),
                      I.css({
                        "-webkit-box-ordinal-group": L,
                        "-moz-box-ordinal-group": L,
                        "-ms-flex-order": L,
                        "-webkit-order": L,
                        order: L
                      }))
                    : (D = z - (O = Math.floor(z / M)) * M),
                    I.css(
                      "margin-" + (e.isHorizontal() ? "top" : "left"),
                      0 !== O && t.spaceBetween && t.spaceBetween + "px"
                    )
                      .attr("data-swiper-column", D)
                      .attr("data-swiper-row", O);
                }
                if ("none" !== I.css("display")) {
                  if ("auto" === t.slidesPerView) {
                    var A = n.getComputedStyle(I[0], null),
                      _ = I[0].style.transform,
                      N = I[0].style.webkitTransform;
                    if (
                      (_ && (I[0].style.transform = "none"),
                      N && (I[0].style.webkitTransform = "none"),
                      t.roundLengths)
                    )
                      S = e.isHorizontal()
                        ? I.outerWidth(!0)
                        : I.outerHeight(!0);
                    else if (e.isHorizontal()) {
                      var j = parseFloat(A.getPropertyValue("width")),
                        B = parseFloat(A.getPropertyValue("padding-left")),
                        H = parseFloat(A.getPropertyValue("padding-right")),
                        X = parseFloat(A.getPropertyValue("margin-left")),
                        V = parseFloat(A.getPropertyValue("margin-right")),
                        G = A.getPropertyValue("box-sizing");
                      S =
                        G && "border-box" === G ? j + X + V : j + B + H + X + V;
                    } else {
                      var F = parseFloat(A.getPropertyValue("height")),
                        Y = parseFloat(A.getPropertyValue("padding-top")),
                        R = parseFloat(A.getPropertyValue("padding-bottom")),
                        q = parseFloat(A.getPropertyValue("margin-top")),
                        W = parseFloat(A.getPropertyValue("margin-bottom")),
                        U = A.getPropertyValue("box-sizing");
                      S =
                        U && "border-box" === U ? F + q + W : F + Y + R + q + W;
                    }
                    _ && (I[0].style.transform = _),
                      N && (I[0].style.webkitTransform = N),
                      t.roundLengths && (S = Math.floor(S));
                  } else
                    (S = (a - (t.slidesPerView - 1) * b) / t.slidesPerView),
                      t.roundLengths && (S = Math.floor(S)),
                      d[z] &&
                        (e.isHorizontal()
                          ? (d[z].style.width = S + "px")
                          : (d[z].style.height = S + "px"));
                  d[z] && (d[z].swiperSlideSize = S),
                    v.push(S),
                    t.centeredSlides
                      ? ((x = x + S / 2 + E / 2 + b),
                        0 === E && 0 !== z && (x = x - a / 2 - b),
                        0 === z && (x = x - a / 2 - b),
                        Math.abs(x) < 0.001 && (x = 0),
                        t.roundLengths && (x = Math.floor(x)),
                        T % t.slidesPerGroup == 0 && h.push(x),
                        f.push(x))
                      : (t.roundLengths && (x = Math.floor(x)),
                        T % t.slidesPerGroup == 0 && h.push(x),
                        f.push(x),
                        (x = x + S + b)),
                    (e.virtualSize += S + b),
                    (E = S),
                    (T += 1);
                }
              }
              if (
                ((e.virtualSize = Math.max(e.virtualSize, a) + g),
                s &&
                  r &&
                  ("slide" === t.effect || "coverflow" === t.effect) &&
                  i.css({ width: e.virtualSize + t.spaceBetween + "px" }),
                (u.flexbox && !t.setWrapperSize) ||
                  (e.isHorizontal()
                    ? i.css({ width: e.virtualSize + t.spaceBetween + "px" })
                    : i.css({ height: e.virtualSize + t.spaceBetween + "px" })),
                1 < t.slidesPerColumn &&
                  ((e.virtualSize = (S + t.spaceBetween) * C),
                  (e.virtualSize =
                    Math.ceil(e.virtualSize / t.slidesPerColumn) -
                    t.spaceBetween),
                  e.isHorizontal()
                    ? i.css({ width: e.virtualSize + t.spaceBetween + "px" })
                    : i.css({ height: e.virtualSize + t.spaceBetween + "px" }),
                  t.centeredSlides))
              ) {
                k = [];
                for (var Q = 0; Q < h.length; Q += 1) {
                  var Z = h[Q];
                  t.roundLengths && (Z = Math.floor(Z)),
                    h[Q] < e.virtualSize + h[0] && k.push(Z);
                }
                h = k;
              }
              if (!t.centeredSlides) {
                k = [];
                for (var K = 0; K < h.length; K += 1) {
                  var J = h[K];
                  t.roundLengths && (J = Math.floor(J)),
                    h[K] <= e.virtualSize - a && k.push(J);
                }
                (h = k),
                  1 <
                    Math.floor(e.virtualSize - a) -
                      Math.floor(h[h.length - 1]) && h.push(e.virtualSize - a);
              }
              if (
                (0 === h.length && (h = [0]),
                0 !== t.spaceBetween &&
                  (e.isHorizontal()
                    ? s
                      ? d.css({ marginLeft: b + "px" })
                      : d.css({ marginRight: b + "px" })
                    : d.css({ marginBottom: b + "px" })),
                t.centerInsufficientSlides)
              ) {
                var ee = 0;
                if (
                  (v.forEach(function(e) {
                    ee += e + (t.spaceBetween ? t.spaceBetween : 0);
                  }),
                  (ee -= t.spaceBetween) < a)
                ) {
                  var te = (a - ee) / 2;
                  h.forEach(function(e, t) {
                    h[t] = e - te;
                  }),
                    f.forEach(function(e, t) {
                      f[t] = e + te;
                    });
                }
              }
              c.extend(e, {
                slides: d,
                snapGrid: h,
                slidesGrid: f,
                slidesSizesGrid: v
              }),
                p !== l && e.emit("slidesLengthChange"),
                h.length !== w &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
                f.length !== y && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                  e.updateSlidesOffset();
            }
          },
          updateAutoHeight: function(e) {
            var t,
              i = this,
              a = [],
              n = 0;
            if (
              ("number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed),
              "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
            )
              for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                var s = i.activeIndex + t;
                if (s > i.slides.length) break;
                a.push(i.slides.eq(s)[0]);
              }
            else a.push(i.slides.eq(i.activeIndex)[0]);
            for (t = 0; t < a.length; t += 1)
              if (void 0 !== a[t]) {
                var r = a[t].offsetHeight;
                n = n < r ? r : n;
              }
            n && i.$wrapperEl.css("height", n + "px");
          },
          updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
              e[t].swiperSlideOffset = this.isHorizontal()
                ? e[t].offsetLeft
                : e[t].offsetTop;
          },
          updateSlidesProgress: function(t) {
            void 0 === t && (t = (this && this.translate) || 0);
            var i = this,
              a = i.params,
              n = i.slides,
              s = i.rtlTranslate;
            if (0 !== n.length) {
              void 0 === n[0].swiperSlideOffset && i.updateSlidesOffset();
              var r = -t;
              s && (r = t),
                n.removeClass(a.slideVisibleClass),
                (i.visibleSlidesIndexes = []),
                (i.visibleSlides = []);
              for (var o = 0; o < n.length; o += 1) {
                var l = n[o],
                  d =
                    (r +
                      (a.centeredSlides ? i.minTranslate() : 0) -
                      l.swiperSlideOffset) /
                    (l.swiperSlideSize + a.spaceBetween);
                if (a.watchSlidesVisibility) {
                  var c = -(r - l.swiperSlideOffset),
                    u = c + i.slidesSizesGrid[o];
                  ((0 <= c && c < i.size) ||
                    (0 < u && u <= i.size) ||
                    (c <= 0 && u >= i.size)) &&
                    (i.visibleSlides.push(l),
                    i.visibleSlidesIndexes.push(o),
                    n.eq(o).addClass(a.slideVisibleClass));
                }
                l.progress = s ? -d : d;
              }
              i.visibleSlides = e(i.visibleSlides);
            }
          },
          updateProgress: function(e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
              i = t.params,
              a = t.maxTranslate() - t.minTranslate(),
              n = t.progress,
              s = t.isBeginning,
              r = t.isEnd,
              o = s,
              l = r;
            0 === a
              ? (r = s = !(n = 0))
              : ((s = (n = (e - t.minTranslate()) / a) <= 0), (r = 1 <= n)),
              c.extend(t, { progress: n, isBeginning: s, isEnd: r }),
              (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                t.updateSlidesProgress(e),
              s && !o && t.emit("reachBeginning toEdge"),
              r && !l && t.emit("reachEnd toEdge"),
              ((o && !s) || (l && !r)) && t.emit("fromEdge"),
              t.emit("progress", n);
          },
          updateSlidesClasses: function() {
            var e,
              t = this,
              i = t.slides,
              a = t.params,
              n = t.$wrapperEl,
              s = t.activeIndex,
              r = t.realIndex,
              o = t.virtual && a.virtual.enabled;
            i.removeClass(
              a.slideActiveClass +
                " " +
                a.slideNextClass +
                " " +
                a.slidePrevClass +
                " " +
                a.slideDuplicateActiveClass +
                " " +
                a.slideDuplicateNextClass +
                " " +
                a.slideDuplicatePrevClass
            ),
              (e = o
                ? t.$wrapperEl.find(
                    "." + a.slideClass + '[data-swiper-slide-index="' + s + '"]'
                  )
                : i.eq(s)).addClass(a.slideActiveClass),
              a.loop &&
                (e.hasClass(a.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          a.slideClass +
                          ":not(." +
                          a.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          r +
                          '"]'
                      )
                      .addClass(a.slideDuplicateActiveClass)
                  : n
                      .children(
                        "." +
                          a.slideClass +
                          "." +
                          a.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          r +
                          '"]'
                      )
                      .addClass(a.slideDuplicateActiveClass));
            var l = e
              .nextAll("." + a.slideClass)
              .eq(0)
              .addClass(a.slideNextClass);
            a.loop &&
              0 === l.length &&
              (l = i.eq(0)).addClass(a.slideNextClass);
            var d = e
              .prevAll("." + a.slideClass)
              .eq(0)
              .addClass(a.slidePrevClass);
            a.loop &&
              0 === d.length &&
              (d = i.eq(-1)).addClass(a.slidePrevClass),
              a.loop &&
                (l.hasClass(a.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          a.slideClass +
                          ":not(." +
                          a.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          l.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(a.slideDuplicateNextClass)
                  : n
                      .children(
                        "." +
                          a.slideClass +
                          "." +
                          a.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          l.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(a.slideDuplicateNextClass),
                d.hasClass(a.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          a.slideClass +
                          ":not(." +
                          a.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          d.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(a.slideDuplicatePrevClass)
                  : n
                      .children(
                        "." +
                          a.slideClass +
                          "." +
                          a.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          d.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(a.slideDuplicatePrevClass));
          },
          updateActiveIndex: function(e) {
            var t,
              i = this,
              a = i.rtlTranslate ? i.translate : -i.translate,
              n = i.slidesGrid,
              s = i.snapGrid,
              r = i.params,
              o = i.activeIndex,
              l = i.realIndex,
              d = i.snapIndex,
              u = e;
            if (void 0 === u) {
              for (var p = 0; p < n.length; p += 1)
                void 0 !== n[p + 1]
                  ? a >= n[p] && a < n[p + 1] - (n[p + 1] - n[p]) / 2
                    ? (u = p)
                    : a >= n[p] && a < n[p + 1] && (u = p + 1)
                  : a >= n[p] && (u = p);
              r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
            }
            if (
              ((t =
                0 <= s.indexOf(a)
                  ? s.indexOf(a)
                  : Math.floor(u / r.slidesPerGroup)) >= s.length &&
                (t = s.length - 1),
              u !== o)
            ) {
              var h = parseInt(
                i.slides.eq(u).attr("data-swiper-slide-index") || u,
                10
              );
              c.extend(i, {
                snapIndex: t,
                realIndex: h,
                previousIndex: o,
                activeIndex: u
              }),
                i.emit("activeIndexChange"),
                i.emit("snapIndexChange"),
                l !== h && i.emit("realIndexChange"),
                i.emit("slideChange");
            } else t !== d && ((i.snapIndex = t), i.emit("snapIndexChange"));
          },
          updateClickedSlide: function(t) {
            var i = this,
              a = i.params,
              n = e(t.target).closest("." + a.slideClass)[0],
              s = !1;
            if (n)
              for (var r = 0; r < i.slides.length; r += 1)
                i.slides[r] === n && (s = !0);
            if (!n || !s)
              return (i.clickedSlide = void 0), void (i.clickedIndex = void 0);
            (i.clickedSlide = n),
              i.virtual && i.params.virtual.enabled
                ? (i.clickedIndex = parseInt(
                    e(n).attr("data-swiper-slide-index"),
                    10
                  ))
                : (i.clickedIndex = e(n).index()),
              a.slideToClickedSlide &&
                void 0 !== i.clickedIndex &&
                i.clickedIndex !== i.activeIndex &&
                i.slideToClickedSlide();
          }
        },
        m = {
          getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
              i = this.rtlTranslate,
              a = this.translate,
              n = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -a : a;
            var s = c.getTranslate(n[0], e);
            return i && (s = -s), s || 0;
          },
          setTranslate: function(e, t) {
            var i = this,
              a = i.rtlTranslate,
              n = i.params,
              s = i.$wrapperEl,
              r = i.progress,
              o = 0,
              l = 0;
            i.isHorizontal() ? (o = a ? -e : e) : (l = e),
              n.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
              n.virtualTranslate ||
                (u.transforms3d
                  ? s.transform("translate3d(" + o + "px, " + l + "px, 0px)")
                  : s.transform("translate(" + o + "px, " + l + "px)")),
              (i.previousTranslate = i.translate),
              (i.translate = i.isHorizontal() ? o : l);
            var d = i.maxTranslate() - i.minTranslate();
            (0 === d ? 0 : (e - i.minTranslate()) / d) !== r &&
              i.updateProgress(e),
              i.emit("setTranslate", i.translate, t);
          },
          minTranslate: function() {
            return -this.snapGrid[0];
          },
          maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
          }
        },
        g = {
          setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
          },
          transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this,
              a = i.activeIndex,
              n = i.params,
              s = i.previousIndex;
            n.autoHeight && i.updateAutoHeight();
            var r = t;
            if (
              (r || (r = s < a ? "next" : a < s ? "prev" : "reset"),
              i.emit("transitionStart"),
              e && a !== s)
            ) {
              if ("reset" === r)
                return void i.emit("slideResetTransitionStart");
              i.emit("slideChangeTransitionStart"),
                "next" === r
                  ? i.emit("slideNextTransitionStart")
                  : i.emit("slidePrevTransitionStart");
            }
          },
          transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this,
              a = i.activeIndex,
              n = i.previousIndex;
            (i.animating = !1), i.setTransition(0);
            var s = t;
            if (
              (s || (s = n < a ? "next" : a < n ? "prev" : "reset"),
              i.emit("transitionEnd"),
              e && a !== n)
            ) {
              if ("reset" === s) return void i.emit("slideResetTransitionEnd");
              i.emit("slideChangeTransitionEnd"),
                "next" === s
                  ? i.emit("slideNextTransitionEnd")
                  : i.emit("slidePrevTransitionEnd");
            }
          }
        },
        w = {
          slideTo: function(e, t, i, a) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0);
            var n = this,
              s = e;
            s < 0 && (s = 0);
            var r = n.params,
              o = n.snapGrid,
              l = n.slidesGrid,
              d = n.previousIndex,
              c = n.activeIndex,
              p = n.rtlTranslate;
            if (n.animating && r.preventInteractionOnTransition) return !1;
            var h = Math.floor(s / r.slidesPerGroup);
            h >= o.length && (h = o.length - 1),
              (c || r.initialSlide || 0) === (d || 0) &&
                i &&
                n.emit("beforeSlideChangeStart");
            var f,
              v = -o[h];
            if ((n.updateProgress(v), r.normalizeSlideIndex))
              for (var m = 0; m < l.length; m += 1)
                -Math.floor(100 * v) >= Math.floor(100 * l[m]) && (s = m);
            if (n.initialized && s !== c) {
              if (!n.allowSlideNext && v < n.translate && v < n.minTranslate())
                return !1;
              if (
                !n.allowSlidePrev &&
                v > n.translate &&
                v > n.maxTranslate() &&
                (c || 0) !== s
              )
                return !1;
            }
            return (
              (f = c < s ? "next" : s < c ? "prev" : "reset"),
              (p && -v === n.translate) || (!p && v === n.translate)
                ? (n.updateActiveIndex(s),
                  r.autoHeight && n.updateAutoHeight(),
                  n.updateSlidesClasses(),
                  "slide" !== r.effect && n.setTranslate(v),
                  "reset" !== f &&
                    (n.transitionStart(i, f), n.transitionEnd(i, f)),
                  !1)
                : (0 !== t && u.transition
                    ? (n.setTransition(t),
                      n.setTranslate(v),
                      n.updateActiveIndex(s),
                      n.updateSlidesClasses(),
                      n.emit("beforeTransitionStart", t, a),
                      n.transitionStart(i, f),
                      n.animating ||
                        ((n.animating = !0),
                        n.onSlideToWrapperTransitionEnd ||
                          (n.onSlideToWrapperTransitionEnd = function(e) {
                            n &&
                              !n.destroyed &&
                              e.target === this &&
                              (n.$wrapperEl[0].removeEventListener(
                                "transitionend",
                                n.onSlideToWrapperTransitionEnd
                              ),
                              n.$wrapperEl[0].removeEventListener(
                                "webkitTransitionEnd",
                                n.onSlideToWrapperTransitionEnd
                              ),
                              (n.onSlideToWrapperTransitionEnd = null),
                              delete n.onSlideToWrapperTransitionEnd,
                              n.transitionEnd(i, f));
                          }),
                        n.$wrapperEl[0].addEventListener(
                          "transitionend",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].addEventListener(
                          "webkitTransitionEnd",
                          n.onSlideToWrapperTransitionEnd
                        )))
                    : (n.setTransition(0),
                      n.setTranslate(v),
                      n.updateActiveIndex(s),
                      n.updateSlidesClasses(),
                      n.emit("beforeTransitionStart", t, a),
                      n.transitionStart(i, f),
                      n.transitionEnd(i, f)),
                  !0)
            );
          },
          slideToLoop: function(e, t, i, a) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0);
            var n = e;
            return (
              this.params.loop && (n += this.loopedSlides),
              this.slideTo(n, t, i, a)
            );
          },
          slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var a = this,
              n = a.params,
              s = a.animating;
            return n.loop
              ? !s &&
                  (a.loopFix(),
                  (a._clientLeft = a.$wrapperEl[0].clientLeft),
                  a.slideTo(a.activeIndex + n.slidesPerGroup, e, t, i))
              : a.slideTo(a.activeIndex + n.slidesPerGroup, e, t, i);
          },
          slidePrev: function(e, t, i) {
            function a(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var n = this,
              s = n.params,
              r = n.animating,
              o = n.snapGrid,
              l = n.slidesGrid,
              d = n.rtlTranslate;
            if (s.loop) {
              if (r) return !1;
              n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
            }
            var c,
              u = a(d ? n.translate : -n.translate),
              p = o.map(function(e) {
                return a(e);
              }),
              h =
                (l.map(function(e) {
                  return a(e);
                }),
                o[p.indexOf(u)],
                o[p.indexOf(u) - 1]);
            return (
              void 0 !== h && (c = l.indexOf(h)) < 0 && (c = n.activeIndex - 1),
              n.slideTo(c, e, t, i)
            );
          },
          slideReset: function(e, t, i) {
            return (
              void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, i)
            );
          },
          slideToClosest: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var a = this,
              n = a.activeIndex,
              s = Math.floor(n / a.params.slidesPerGroup);
            if (s < a.snapGrid.length - 1) {
              var r = a.rtlTranslate ? a.translate : -a.translate,
                o = a.snapGrid[s];
              (a.snapGrid[s + 1] - o) / 2 < r - o &&
                (n = a.params.slidesPerGroup);
            }
            return a.slideTo(n, e, t, i);
          },
          slideToClickedSlide: function() {
            var t,
              i = this,
              a = i.params,
              n = i.$wrapperEl,
              s =
                "auto" === a.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : a.slidesPerView,
              r = i.clickedIndex;
            if (a.loop) {
              if (i.animating) return;
              (t = parseInt(
                e(i.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                a.centeredSlides
                  ? r < i.loopedSlides - s / 2 ||
                    r > i.slides.length - i.loopedSlides + s / 2
                    ? (i.loopFix(),
                      (r = n
                        .children(
                          "." +
                            a.slideClass +
                            '[data-swiper-slide-index="' +
                            t +
                            '"]:not(.' +
                            a.slideDuplicateClass +
                            ")"
                        )
                        .eq(0)
                        .index()),
                      c.nextTick(function() {
                        i.slideTo(r);
                      }))
                    : i.slideTo(r)
                  : r > i.slides.length - s
                  ? (i.loopFix(),
                    (r = n
                      .children(
                        "." +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          t +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    c.nextTick(function() {
                      i.slideTo(r);
                    }))
                  : i.slideTo(r);
            } else i.slideTo(r);
          }
        },
        y = {
          loopCreate: function() {
            var t = this,
              i = t.params,
              n = t.$wrapperEl;
            n.children(
              "." + i.slideClass + "." + i.slideDuplicateClass
            ).remove();
            var s = n.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
              var r = i.slidesPerGroup - (s.length % i.slidesPerGroup);
              if (r !== i.slidesPerGroup) {
                for (var o = 0; o < r; o += 1) {
                  var l = e(a.createElement("div")).addClass(
                    i.slideClass + " " + i.slideBlankClass
                  );
                  n.append(l);
                }
                s = n.children("." + i.slideClass);
              }
            }
            "auto" !== i.slidesPerView ||
              i.loopedSlides ||
              (i.loopedSlides = s.length),
              (t.loopedSlides = parseInt(
                i.loopedSlides || i.slidesPerView,
                10
              )),
              (t.loopedSlides += i.loopAdditionalSlides),
              t.loopedSlides > s.length && (t.loopedSlides = s.length);
            var d = [],
              c = [];
            s.each(function(i, a) {
              var n = e(a);
              i < t.loopedSlides && c.push(a),
                i < s.length && i >= s.length - t.loopedSlides && d.push(a),
                n.attr("data-swiper-slide-index", i);
            });
            for (var u = 0; u < c.length; u += 1)
              n.append(e(c[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var p = d.length - 1; 0 <= p; p -= 1)
              n.prepend(e(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          loopFix: function() {
            var e,
              t = this,
              i = t.params,
              a = t.activeIndex,
              n = t.slides,
              s = t.loopedSlides,
              r = t.allowSlidePrev,
              o = t.allowSlideNext,
              l = t.snapGrid,
              d = t.rtlTranslate;
            (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
            var c = -l[a] - t.getTranslate();
            a < s
              ? ((e = n.length - 3 * s + a),
                (e += s),
                t.slideTo(e, 0, !1, !0) &&
                  0 !== c &&
                  t.setTranslate((d ? -t.translate : t.translate) - c))
              : (("auto" === i.slidesPerView && 2 * s <= a) ||
                  a >= n.length - s) &&
                ((e = -n.length + a + s),
                (e += s),
                t.slideTo(e, 0, !1, !0) &&
                  0 !== c &&
                  t.setTranslate((d ? -t.translate : t.translate) - c)),
              (t.allowSlidePrev = r),
              (t.allowSlideNext = o);
          },
          loopDestroy: function() {
            var e = this.$wrapperEl,
              t = this.params,
              i = this.slides;
            e
              .children(
                "." +
                  t.slideClass +
                  "." +
                  t.slideDuplicateClass +
                  ",." +
                  t.slideClass +
                  "." +
                  t.slideBlankClass
              )
              .remove(),
              i.removeAttr("data-swiper-slide-index");
          }
        },
        b = {
          setGrabCursor: function(e) {
            if (
              !(
                u.touch ||
                !this.params.simulateTouch ||
                (this.params.watchOverflow && this.isLocked)
              )
            ) {
              var t = this.el;
              (t.style.cursor = "move"),
                (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (t.style.cursor = e ? "grabbing" : "grab");
            }
          },
          unsetGrabCursor: function() {
            u.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              (this.el.style.cursor = "");
          }
        },
        x = {
          appendSlide: function(e) {
            var t = this,
              i = t.$wrapperEl,
              a = t.params;
            if (
              (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            )
              for (var n = 0; n < e.length; n += 1) e[n] && i.append(e[n]);
            else i.append(e);
            a.loop && t.loopCreate(), (a.observer && u.observer) || t.update();
          },
          prependSlide: function(e) {
            var t = this,
              i = t.params,
              a = t.$wrapperEl,
              n = t.activeIndex;
            i.loop && t.loopDestroy();
            var s = n + 1;
            if ("object" == typeof e && "length" in e) {
              for (var r = 0; r < e.length; r += 1) e[r] && a.prepend(e[r]);
              s = n + e.length;
            } else a.prepend(e);
            i.loop && t.loopCreate(),
              (i.observer && u.observer) || t.update(),
              t.slideTo(s, 0, !1);
          },
          addSlide: function(e, t) {
            var i = this,
              a = i.$wrapperEl,
              n = i.params,
              s = i.activeIndex;
            n.loop &&
              ((s -= i.loopedSlides),
              i.loopDestroy(),
              (i.slides = a.children("." + n.slideClass)));
            var r = i.slides.length;
            if (e <= 0) i.prependSlide(t);
            else if (r <= e) i.appendSlide(t);
            else {
              for (
                var o = e < s ? s + 1 : s, l = [], d = r - 1;
                e <= d;
                d -= 1
              ) {
                var c = i.slides.eq(d);
                c.remove(), l.unshift(c);
              }
              if ("object" == typeof t && "length" in t) {
                for (var p = 0; p < t.length; p += 1) t[p] && a.append(t[p]);
                o = e < s ? s + t.length : s;
              } else a.append(t);
              for (var h = 0; h < l.length; h += 1) a.append(l[h]);
              n.loop && i.loopCreate(),
                (n.observer && u.observer) || i.update(),
                n.loop
                  ? i.slideTo(o + i.loopedSlides, 0, !1)
                  : i.slideTo(o, 0, !1);
            }
          },
          removeSlide: function(e) {
            var t = this,
              i = t.params,
              a = t.$wrapperEl,
              n = t.activeIndex;
            i.loop &&
              ((n -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = a.children("." + i.slideClass)));
            var s,
              r = n;
            if ("object" == typeof e && "length" in e) {
              for (var o = 0; o < e.length; o += 1)
                (s = e[o]),
                  t.slides[s] && t.slides.eq(s).remove(),
                  s < r && (r -= 1);
              r = Math.max(r, 0);
            } else
              (s = e),
                t.slides[s] && t.slides.eq(s).remove(),
                s < r && (r -= 1),
                (r = Math.max(r, 0));
            i.loop && t.loopCreate(),
              (i.observer && u.observer) || t.update(),
              i.loop
                ? t.slideTo(r + t.loopedSlides, 0, !1)
                : t.slideTo(r, 0, !1);
          },
          removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          }
        },
        E = (function() {
          var e = n.navigator.userAgent,
            t = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              windows: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              cordova: n.cordova || n.phonegap,
              phonegap: n.cordova || n.phonegap
            },
            i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
            s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            r = e.match(/(iPad).*OS\s([\d_]+)/),
            o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
          if (
            (i && ((t.os = "windows"), (t.osVersion = i[2]), (t.windows = !0)),
            s &&
              !i &&
              ((t.os = "android"),
              (t.osVersion = s[2]),
              (t.android = !0),
              (t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome"))),
            (r || l || o) && ((t.os = "ios"), (t.ios = !0)),
            l &&
              !o &&
              ((t.osVersion = l[2].replace(/_/g, ".")), (t.iphone = !0)),
            r && ((t.osVersion = r[2].replace(/_/g, ".")), (t.ipad = !0)),
            o &&
              ((t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null),
              (t.iphone = !0)),
            t.ios &&
              t.osVersion &&
              0 <= e.indexOf("Version/") &&
              "10" === t.osVersion.split(".")[0] &&
              (t.osVersion = e
                .toLowerCase()
                .split("version/")[1]
                .split(" ")[0]),
            (t.desktop = !(t.os || t.android || t.webView)),
            (t.webView =
              (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
            t.os && "ios" === t.os)
          ) {
            var d = t.osVersion.split("."),
              c = a.querySelector('meta[name="viewport"]');
            t.minimalUi =
              !t.webView &&
              (o || l) &&
              (1 * d[0] == 7 ? 1 <= 1 * d[1] : 7 < 1 * d[0]) &&
              c &&
              0 <= c.getAttribute("content").indexOf("minimal-ui");
          }
          return (t.pixelRatio = n.devicePixelRatio || 1), t;
        })(),
        T = {
          attachEvents: function() {
            var t = this,
              s = t.params,
              r = t.touchEvents,
              o = t.el,
              l = t.wrapperEl;
            (t.onTouchStart = function(t) {
              var i = this,
                s = i.touchEventsData,
                r = i.params,
                o = i.touches;
              if (!i.animating || !r.preventInteractionOnTransition) {
                var l = t;
                if (
                  (l.originalEvent && (l = l.originalEvent),
                  (s.isTouchEvent = "touchstart" === l.type),
                  (s.isTouchEvent || !("which" in l) || 3 !== l.which) &&
                    !(
                      (!s.isTouchEvent && "button" in l && 0 < l.button) ||
                      (s.isTouched && s.isMoved)
                    ))
                )
                  if (
                    r.noSwiping &&
                    e(l.target).closest(
                      r.noSwipingSelector
                        ? r.noSwipingSelector
                        : "." + r.noSwipingClass
                    )[0]
                  )
                    i.allowClick = !0;
                  else if (!r.swipeHandler || e(l).closest(r.swipeHandler)[0]) {
                    (o.currentX =
                      "touchstart" === l.type
                        ? l.targetTouches[0].pageX
                        : l.pageX),
                      (o.currentY =
                        "touchstart" === l.type
                          ? l.targetTouches[0].pageY
                          : l.pageY);
                    var d = o.currentX,
                      u = o.currentY,
                      p = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                      h = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                    if (!p || !(d <= h || d >= n.screen.width - h)) {
                      if (
                        (c.extend(s, {
                          isTouched: !0,
                          isMoved: !1,
                          allowTouchCallbacks: !0,
                          isScrolling: void 0,
                          startMoving: void 0
                        }),
                        (o.startX = d),
                        (o.startY = u),
                        (s.touchStartTime = c.now()),
                        (i.allowClick = !0),
                        i.updateSize(),
                        (i.swipeDirection = void 0),
                        0 < r.threshold && (s.allowThresholdMove = !1),
                        "touchstart" !== l.type)
                      ) {
                        var f = !0;
                        e(l.target).is(s.formElements) && (f = !1),
                          a.activeElement &&
                            e(a.activeElement).is(s.formElements) &&
                            a.activeElement !== l.target &&
                            a.activeElement.blur();
                        var v =
                          f && i.allowTouchMove && r.touchStartPreventDefault;
                        (r.touchStartForcePreventDefault || v) &&
                          l.preventDefault();
                      }
                      i.emit("touchStart", l);
                    }
                  }
              }
            }.bind(t)),
              (t.onTouchMove = function(t) {
                var i = this,
                  n = i.touchEventsData,
                  s = i.params,
                  r = i.touches,
                  o = i.rtlTranslate,
                  l = t;
                if ((l.originalEvent && (l = l.originalEvent), n.isTouched)) {
                  if (!n.isTouchEvent || "mousemove" !== l.type) {
                    var d =
                        "touchmove" === l.type
                          ? l.targetTouches[0].pageX
                          : l.pageX,
                      u =
                        "touchmove" === l.type
                          ? l.targetTouches[0].pageY
                          : l.pageY;
                    if (l.preventedByNestedSwiper)
                      return (r.startX = d), void (r.startY = u);
                    if (!i.allowTouchMove)
                      return (
                        (i.allowClick = !1),
                        void (
                          n.isTouched &&
                          (c.extend(r, {
                            startX: d,
                            startY: u,
                            currentX: d,
                            currentY: u
                          }),
                          (n.touchStartTime = c.now()))
                        )
                      );
                    if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                      if (i.isVertical()) {
                        if (
                          (u < r.startY && i.translate <= i.maxTranslate()) ||
                          (u > r.startY && i.translate >= i.minTranslate())
                        )
                          return (n.isTouched = !1), void (n.isMoved = !1);
                      } else if (
                        (d < r.startX && i.translate <= i.maxTranslate()) ||
                        (d > r.startX && i.translate >= i.minTranslate())
                      )
                        return;
                    if (
                      n.isTouchEvent &&
                      a.activeElement &&
                      l.target === a.activeElement &&
                      e(l.target).is(n.formElements)
                    )
                      return (n.isMoved = !0), void (i.allowClick = !1);
                    if (
                      (n.allowTouchCallbacks && i.emit("touchMove", l),
                      !(l.targetTouches && 1 < l.targetTouches.length))
                    ) {
                      (r.currentX = d), (r.currentY = u);
                      var p,
                        h = r.currentX - r.startX,
                        f = r.currentY - r.startY;
                      if (
                        !(
                          i.params.threshold &&
                          Math.sqrt(Math.pow(h, 2) + Math.pow(f, 2)) <
                            i.params.threshold
                        )
                      )
                        if (
                          (void 0 === n.isScrolling &&
                            ((i.isHorizontal() && r.currentY === r.startY) ||
                            (i.isVertical() && r.currentX === r.startX)
                              ? (n.isScrolling = !1)
                              : 25 <= h * h + f * f &&
                                ((p =
                                  (180 * Math.atan2(Math.abs(f), Math.abs(h))) /
                                  Math.PI),
                                (n.isScrolling = i.isHorizontal()
                                  ? p > s.touchAngle
                                  : 90 - p > s.touchAngle))),
                          n.isScrolling && i.emit("touchMoveOpposite", l),
                          void 0 === n.startMoving &&
                            ((r.currentX === r.startX &&
                              r.currentY === r.startY) ||
                              (n.startMoving = !0)),
                          n.isScrolling)
                        )
                          n.isTouched = !1;
                        else if (n.startMoving) {
                          (i.allowClick = !1),
                            l.preventDefault(),
                            s.touchMoveStopPropagation &&
                              !s.nested &&
                              l.stopPropagation(),
                            n.isMoved ||
                              (s.loop && i.loopFix(),
                              (n.startTranslate = i.getTranslate()),
                              i.setTransition(0),
                              i.animating &&
                                i.$wrapperEl.trigger(
                                  "webkitTransitionEnd transitionend"
                                ),
                              (n.allowMomentumBounce = !1),
                              !s.grabCursor ||
                                (!0 !== i.allowSlideNext &&
                                  !0 !== i.allowSlidePrev) ||
                                i.setGrabCursor(!0),
                              i.emit("sliderFirstMove", l)),
                            i.emit("sliderMove", l),
                            (n.isMoved = !0);
                          var v = i.isHorizontal() ? h : f;
                          (r.diff = v),
                            (v *= s.touchRatio),
                            o && (v = -v),
                            (i.swipeDirection = 0 < v ? "prev" : "next"),
                            (n.currentTranslate = v + n.startTranslate);
                          var m = !0,
                            g = s.resistanceRatio;
                          if (
                            (s.touchReleaseOnEdges && (g = 0),
                            0 < v && n.currentTranslate > i.minTranslate()
                              ? ((m = !1),
                                s.resistance &&
                                  (n.currentTranslate =
                                    i.minTranslate() -
                                    1 +
                                    Math.pow(
                                      -i.minTranslate() + n.startTranslate + v,
                                      g
                                    )))
                              : v < 0 &&
                                n.currentTranslate < i.maxTranslate() &&
                                ((m = !1),
                                s.resistance &&
                                  (n.currentTranslate =
                                    i.maxTranslate() +
                                    1 -
                                    Math.pow(
                                      i.maxTranslate() - n.startTranslate - v,
                                      g
                                    ))),
                            m && (l.preventedByNestedSwiper = !0),
                            !i.allowSlideNext &&
                              "next" === i.swipeDirection &&
                              n.currentTranslate < n.startTranslate &&
                              (n.currentTranslate = n.startTranslate),
                            !i.allowSlidePrev &&
                              "prev" === i.swipeDirection &&
                              n.currentTranslate > n.startTranslate &&
                              (n.currentTranslate = n.startTranslate),
                            0 < s.threshold)
                          ) {
                            if (
                              !(
                                Math.abs(v) > s.threshold ||
                                n.allowThresholdMove
                              )
                            )
                              return void (n.currentTranslate =
                                n.startTranslate);
                            if (!n.allowThresholdMove)
                              return (
                                (n.allowThresholdMove = !0),
                                (r.startX = r.currentX),
                                (r.startY = r.currentY),
                                (n.currentTranslate = n.startTranslate),
                                void (r.diff = i.isHorizontal()
                                  ? r.currentX - r.startX
                                  : r.currentY - r.startY)
                              );
                          }
                          s.followFinger &&
                            ((s.freeMode ||
                              s.watchSlidesProgress ||
                              s.watchSlidesVisibility) &&
                              (i.updateActiveIndex(), i.updateSlidesClasses()),
                            s.freeMode &&
                              (0 === n.velocities.length &&
                                n.velocities.push({
                                  position:
                                    r[i.isHorizontal() ? "startX" : "startY"],
                                  time: n.touchStartTime
                                }),
                              n.velocities.push({
                                position:
                                  r[i.isHorizontal() ? "currentX" : "currentY"],
                                time: c.now()
                              })),
                            i.updateProgress(n.currentTranslate),
                            i.setTranslate(n.currentTranslate));
                        }
                    }
                  }
                } else
                  n.startMoving &&
                    n.isScrolling &&
                    i.emit("touchMoveOpposite", l);
              }.bind(t)),
              (t.onTouchEnd = function(e) {
                var t = this,
                  i = t.touchEventsData,
                  a = t.params,
                  n = t.touches,
                  s = t.rtlTranslate,
                  r = t.$wrapperEl,
                  o = t.slidesGrid,
                  l = t.snapGrid,
                  d = e;
                if (
                  (d.originalEvent && (d = d.originalEvent),
                  i.allowTouchCallbacks && t.emit("touchEnd", d),
                  (i.allowTouchCallbacks = !1),
                  !i.isTouched)
                )
                  return (
                    i.isMoved && a.grabCursor && t.setGrabCursor(!1),
                    (i.isMoved = !1),
                    void (i.startMoving = !1)
                  );
                a.grabCursor &&
                  i.isMoved &&
                  i.isTouched &&
                  (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                  t.setGrabCursor(!1);
                var u,
                  p = c.now(),
                  h = p - i.touchStartTime;
                if (
                  (t.allowClick &&
                    (t.updateClickedSlide(d),
                    t.emit("tap", d),
                    h < 300 &&
                      300 < p - i.lastClickTime &&
                      (i.clickTimeout && clearTimeout(i.clickTimeout),
                      (i.clickTimeout = c.nextTick(function() {
                        t && !t.destroyed && t.emit("click", d);
                      }, 300))),
                    h < 300 &&
                      p - i.lastClickTime < 300 &&
                      (i.clickTimeout && clearTimeout(i.clickTimeout),
                      t.emit("doubleTap", d))),
                  (i.lastClickTime = c.now()),
                  c.nextTick(function() {
                    t.destroyed || (t.allowClick = !0);
                  }),
                  !i.isTouched ||
                    !i.isMoved ||
                    !t.swipeDirection ||
                    0 === n.diff ||
                    i.currentTranslate === i.startTranslate)
                )
                  return (
                    (i.isTouched = !1),
                    (i.isMoved = !1),
                    void (i.startMoving = !1)
                  );
                if (
                  ((i.isTouched = !1),
                  (i.isMoved = !1),
                  (i.startMoving = !1),
                  (u = a.followFinger
                    ? s
                      ? t.translate
                      : -t.translate
                    : -i.currentTranslate),
                  a.freeMode)
                ) {
                  if (u < -t.minTranslate())
                    return void t.slideTo(t.activeIndex);
                  if (u > -t.maxTranslate())
                    return void (t.slides.length < l.length
                      ? t.slideTo(l.length - 1)
                      : t.slideTo(t.slides.length - 1));
                  if (a.freeModeMomentum) {
                    if (1 < i.velocities.length) {
                      var f = i.velocities.pop(),
                        v = i.velocities.pop(),
                        m = f.position - v.position,
                        g = f.time - v.time;
                      (t.velocity = m / g),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < a.freeModeMinimumVelocity &&
                          (t.velocity = 0),
                        (150 < g || 300 < c.now() - f.time) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= a.freeModeMomentumVelocityRatio),
                      (i.velocities.length = 0);
                    var w = 1e3 * a.freeModeMomentumRatio,
                      y = t.velocity * w,
                      b = t.translate + y;
                    s && (b = -b);
                    var x,
                      E,
                      T = !1,
                      C =
                        20 *
                        Math.abs(t.velocity) *
                        a.freeModeMomentumBounceRatio;
                    if (b < t.maxTranslate())
                      a.freeModeMomentumBounce
                        ? (b + t.maxTranslate() < -C &&
                            (b = t.maxTranslate() - C),
                          (x = t.maxTranslate()),
                          (T = !0),
                          (i.allowMomentumBounce = !0))
                        : (b = t.maxTranslate()),
                        a.loop && a.centeredSlides && (E = !0);
                    else if (b > t.minTranslate())
                      a.freeModeMomentumBounce
                        ? (b - t.minTranslate() > C &&
                            (b = t.minTranslate() + C),
                          (x = t.minTranslate()),
                          (T = !0),
                          (i.allowMomentumBounce = !0))
                        : (b = t.minTranslate()),
                        a.loop && a.centeredSlides && (E = !0);
                    else if (a.freeModeSticky) {
                      for (var S, k = 0; k < l.length; k += 1)
                        if (l[k] > -b) {
                          S = k;
                          break;
                        }
                      b = -(b =
                        Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) ||
                        "next" === t.swipeDirection
                          ? l[S]
                          : l[S - 1]);
                    }
                    if (
                      (E &&
                        t.once("transitionEnd", function() {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    )
                      w = s
                        ? Math.abs((-b - t.translate) / t.velocity)
                        : Math.abs((b - t.translate) / t.velocity);
                    else if (a.freeModeSticky) return void t.slideToClosest();
                    a.freeModeMomentumBounce && T
                      ? (t.updateProgress(x),
                        t.setTransition(w),
                        t.setTranslate(b),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        r.transitionEnd(function() {
                          t &&
                            !t.destroyed &&
                            i.allowMomentumBounce &&
                            (t.emit("momentumBounce"),
                            t.setTransition(a.speed),
                            t.setTranslate(x),
                            r.transitionEnd(function() {
                              t && !t.destroyed && t.transitionEnd();
                            }));
                        }))
                      : t.velocity
                      ? (t.updateProgress(b),
                        t.setTransition(w),
                        t.setTranslate(b),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          r.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(b),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else if (a.freeModeSticky) return void t.slideToClosest();
                  (!a.freeModeMomentum || h >= a.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                } else {
                  for (
                    var $ = 0, M = t.slidesSizesGrid[0], P = 0;
                    P < o.length;
                    P += a.slidesPerGroup
                  )
                    void 0 !== o[P + a.slidesPerGroup]
                      ? u >= o[P] &&
                        u < o[P + a.slidesPerGroup] &&
                        (M = o[($ = P) + a.slidesPerGroup] - o[P])
                      : u >= o[P] &&
                        (($ = P), (M = o[o.length - 1] - o[o.length - 2]));
                  var z = (u - o[$]) / M;
                  if (h > a.longSwipesMs) {
                    if (!a.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection &&
                      (z >= a.longSwipesRatio
                        ? t.slideTo($ + a.slidesPerGroup)
                        : t.slideTo($)),
                      "prev" === t.swipeDirection &&
                        (z > 1 - a.longSwipesRatio
                          ? t.slideTo($ + a.slidesPerGroup)
                          : t.slideTo($));
                  } else {
                    if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection &&
                      t.slideTo($ + a.slidesPerGroup),
                      "prev" === t.swipeDirection && t.slideTo($);
                  }
                }
              }.bind(t)),
              (t.onClick = function(e) {
                this.allowClick ||
                  (this.params.preventClicks && e.preventDefault(),
                  this.params.preventClicksPropagation &&
                    this.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation()));
              }.bind(t));
            var d = "container" === s.touchEventsTarget ? o : l,
              p = !!s.nested;
            if (u.touch || (!u.pointerEvents && !u.prefixedPointerEvents)) {
              if (u.touch) {
                var h = !(
                  "touchstart" !== r.start ||
                  !u.passiveListener ||
                  !s.passiveListeners
                ) && { passive: !0, capture: !1 };
                d.addEventListener(r.start, t.onTouchStart, h),
                  d.addEventListener(
                    r.move,
                    t.onTouchMove,
                    u.passiveListener ? { passive: !1, capture: p } : p
                  ),
                  d.addEventListener(r.end, t.onTouchEnd, h);
              }
              ((s.simulateTouch && !E.ios && !E.android) ||
                (s.simulateTouch && !u.touch && E.ios)) &&
                (d.addEventListener("mousedown", t.onTouchStart, !1),
                a.addEventListener("mousemove", t.onTouchMove, p),
                a.addEventListener("mouseup", t.onTouchEnd, !1));
            } else
              d.addEventListener(r.start, t.onTouchStart, !1),
                a.addEventListener(r.move, t.onTouchMove, p),
                a.addEventListener(r.end, t.onTouchEnd, !1);
            (s.preventClicks || s.preventClicksPropagation) &&
              d.addEventListener("click", t.onClick, !0),
              t.on(
                E.ios || E.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                i,
                !0
              );
          },
          detachEvents: function() {
            var e = this,
              t = e.params,
              n = e.touchEvents,
              s = e.el,
              r = e.wrapperEl,
              o = "container" === t.touchEventsTarget ? s : r,
              l = !!t.nested;
            if (u.touch || (!u.pointerEvents && !u.prefixedPointerEvents)) {
              if (u.touch) {
                var d = !(
                  "onTouchStart" !== n.start ||
                  !u.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 };
                o.removeEventListener(n.start, e.onTouchStart, d),
                  o.removeEventListener(n.move, e.onTouchMove, l),
                  o.removeEventListener(n.end, e.onTouchEnd, d);
              }
              ((t.simulateTouch && !E.ios && !E.android) ||
                (t.simulateTouch && !u.touch && E.ios)) &&
                (o.removeEventListener("mousedown", e.onTouchStart, !1),
                a.removeEventListener("mousemove", e.onTouchMove, l),
                a.removeEventListener("mouseup", e.onTouchEnd, !1));
            } else
              o.removeEventListener(n.start, e.onTouchStart, !1),
                a.removeEventListener(n.move, e.onTouchMove, l),
                a.removeEventListener(n.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) &&
              o.removeEventListener("click", e.onClick, !0),
              e.off(
                E.ios || E.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                i
              );
          }
        },
        C = {
          setBreakpoint: function() {
            var e = this,
              t = e.activeIndex,
              i = e.initialized,
              a = e.loopedSlides;
            void 0 === a && (a = 0);
            var n = e.params,
              s = n.breakpoints;
            if (s && (!s || 0 !== Object.keys(s).length)) {
              var r = e.getBreakpoint(s);
              if (r && e.currentBreakpoint !== r) {
                var o = r in s ? s[r] : void 0;
                o &&
                  ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(
                    function(e) {
                      var t = o[e];
                      void 0 !== t &&
                        (o[e] =
                          "slidesPerView" !== e ||
                          ("AUTO" !== t && "auto" !== t)
                            ? "slidesPerView" === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                            : "auto");
                    }
                  );
                var l = o || e.originalParams,
                  d = n.loop && l.slidesPerView !== n.slidesPerView;
                c.extend(e.params, l),
                  c.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                  }),
                  (e.currentBreakpoint = r),
                  d &&
                    i &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - a + e.loopedSlides, 0, !1)),
                  e.emit("breakpoint", l);
              }
            }
          },
          getBreakpoint: function(e) {
            if (e) {
              var t = !1,
                i = [];
              Object.keys(e).forEach(function(e) {
                i.push(e);
              }),
                i.sort(function(e, t) {
                  return parseInt(e, 10) - parseInt(t, 10);
                });
              for (var a = 0; a < i.length; a += 1) {
                var s = i[a];
                this.params.breakpointsInverse
                  ? s <= n.innerWidth && (t = s)
                  : s >= n.innerWidth && !t && (t = s);
              }
              return t || "max";
            }
          }
        },
        S = {
          isIE:
            !!n.navigator.userAgent.match(/Trident/g) ||
            !!n.navigator.userAgent.match(/MSIE/g),
          isEdge: !!n.navigator.userAgent.match(/Edge/g),
          isSafari:
            ((f = n.navigator.userAgent.toLowerCase()),
            0 <= f.indexOf("safari") &&
              f.indexOf("chrome") < 0 &&
              f.indexOf("android") < 0),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            n.navigator.userAgent
          )
        },
        k = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          preventInteractionOnTransition: !1,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsInverse: !1,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          centeredSlides: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !0,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0
        },
        $ = {
          update: v,
          translate: m,
          transition: g,
          slide: w,
          loop: y,
          grabCursor: b,
          manipulation: x,
          events: T,
          breakpoints: C,
          checkOverflow: {
            checkOverflow: function() {
              var e = this,
                t = e.isLocked;
              (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t &&
                  t !== e.isLocked &&
                  ((e.isEnd = !1), e.navigation.update());
            }
          },
          classes: {
            addClasses: function() {
              var e = this.classNames,
                t = this.params,
                i = this.rtl,
                a = this.$el,
                n = [];
              n.push(t.direction),
                t.freeMode && n.push("free-mode"),
                u.flexbox || n.push("no-flexbox"),
                t.autoHeight && n.push("autoheight"),
                i && n.push("rtl"),
                1 < t.slidesPerColumn && n.push("multirow"),
                E.android && n.push("android"),
                E.ios && n.push("ios"),
                (S.isIE || S.isEdge) &&
                  (u.pointerEvents || u.prefixedPointerEvents) &&
                  n.push("wp8-" + t.direction),
                n.forEach(function(i) {
                  e.push(t.containerModifierClass + i);
                }),
                a.addClass(e.join(" "));
            },
            removeClasses: function() {
              var e = this.$el,
                t = this.classNames;
              e.removeClass(t.join(" "));
            }
          },
          images: {
            loadImage: function(e, t, i, a, s, r) {
              function o() {
                r && r();
              }
              var l;
              e.complete && s
                ? o()
                : t
                ? (((l = new n.Image()).onload = o),
                  (l.onerror = o),
                  a && (l.sizes = a),
                  i && (l.srcset = i),
                  t && (l.src = t))
                : o();
            },
            preloadImages: function() {
              function e() {
                null != t &&
                  t &&
                  !t.destroyed &&
                  (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                  t.imagesLoaded === t.imagesToLoad.length &&
                    (t.params.updateOnImagesReady && t.update(),
                    t.emit("imagesReady")));
              }
              var t = this;
              t.imagesToLoad = t.$el.find("img");
              for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                var a = t.imagesToLoad[i];
                t.loadImage(
                  a,
                  a.currentSrc || a.getAttribute("src"),
                  a.srcset || a.getAttribute("srcset"),
                  a.sizes || a.getAttribute("sizes"),
                  !0,
                  e
                );
              }
            }
          }
        },
        M = {},
        P = (function(t) {
          function i() {
            for (var a, n, s, r = [], o = arguments.length; o--; )
              r[o] = arguments[o];
            1 === r.length && r[0].constructor && r[0].constructor === Object
              ? (s = r[0])
              : ((n = (a = r)[0]), (s = a[1])),
              s || (s = {}),
              (s = c.extend({}, s)),
              n && !s.el && (s.el = n),
              t.call(this, s),
              Object.keys($).forEach(function(e) {
                Object.keys($[e]).forEach(function(t) {
                  i.prototype[t] || (i.prototype[t] = $[e][t]);
                });
              });
            var l = this;
            void 0 === l.modules && (l.modules = {}),
              Object.keys(l.modules).forEach(function(e) {
                var t = l.modules[e];
                if (t.params) {
                  var i = Object.keys(t.params)[0],
                    a = t.params[i];
                  if ("object" != typeof a || null === a) return;
                  if (!(i in s && "enabled" in a)) return;
                  !0 === s[i] && (s[i] = { enabled: !0 }),
                    "object" != typeof s[i] ||
                      "enabled" in s[i] ||
                      (s[i].enabled = !0),
                    s[i] || (s[i] = { enabled: !1 });
                }
              });
            var d = c.extend({}, k);
            l.useModulesParams(d),
              (l.params = c.extend({}, d, M, s)),
              (l.originalParams = c.extend({}, l.params)),
              (l.passedParams = c.extend({}, s));
            var p = (l.$ = e)(l.params.el);
            if ((n = p[0])) {
              if (1 < p.length) {
                var h = [];
                return (
                  p.each(function(e, t) {
                    var a = c.extend({}, s, { el: t });
                    h.push(new i(a));
                  }),
                  h
                );
              }
              (n.swiper = l), p.data("swiper", l);
              var f,
                v,
                m = p.children("." + l.params.wrapperClass);
              return (
                c.extend(l, {
                  $el: p,
                  el: n,
                  $wrapperEl: m,
                  wrapperEl: m[0],
                  classNames: [],
                  slides: e(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function() {
                    return "horizontal" === l.params.direction;
                  },
                  isVertical: function() {
                    return "vertical" === l.params.direction;
                  },
                  rtl:
                    "rtl" === n.dir.toLowerCase() ||
                    "rtl" === p.css("direction"),
                  rtlTranslate:
                    "horizontal" === l.params.direction &&
                    ("rtl" === n.dir.toLowerCase() ||
                      "rtl" === p.css("direction")),
                  wrongRTL: "-webkit-box" === m.css("display"),
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: l.params.allowSlideNext,
                  allowSlidePrev: l.params.allowSlidePrev,
                  touchEvents:
                    ((f = ["touchstart", "touchmove", "touchend"]),
                    (v = ["mousedown", "mousemove", "mouseup"]),
                    u.pointerEvents
                      ? (v = ["pointerdown", "pointermove", "pointerup"])
                      : u.prefixedPointerEvents &&
                        (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    (l.touchEventsTouch = {
                      start: f[0],
                      move: f[1],
                      end: f[2]
                    }),
                    (l.touchEventsDesktop = {
                      start: v[0],
                      move: v[1],
                      end: v[2]
                    }),
                    u.touch || !l.params.simulateTouch
                      ? l.touchEventsTouch
                      : l.touchEventsDesktop),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements:
                      "input, select, option, textarea, button, video",
                    lastClickTime: c.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                  },
                  allowClick: !0,
                  allowTouchMove: l.params.allowTouchMove,
                  touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0
                }),
                l.useModules(),
                l.params.init && l.init(),
                l
              );
            }
          }
          t && (i.__proto__ = t);
          var a = {
            extendedDefaults: { configurable: !0 },
            defaults: { configurable: !0 },
            Class: { configurable: !0 },
            $: { configurable: !0 }
          };
          return (
            (((i.prototype = Object.create(
              t && t.prototype
            )).constructor = i).prototype.slidesPerViewDynamic = function() {
              var e = this,
                t = e.params,
                i = e.slides,
                a = e.slidesGrid,
                n = e.size,
                s = e.activeIndex,
                r = 1;
              if (t.centeredSlides) {
                for (
                  var o, l = i[s].swiperSlideSize, d = s + 1;
                  d < i.length;
                  d += 1
                )
                  i[d] &&
                    !o &&
                    ((r += 1), n < (l += i[d].swiperSlideSize) && (o = !0));
                for (var c = s - 1; 0 <= c; c -= 1)
                  i[c] &&
                    !o &&
                    ((r += 1), n < (l += i[c].swiperSlideSize) && (o = !0));
              } else
                for (var u = s + 1; u < i.length; u += 1)
                  a[u] - a[s] < n && (r += 1);
              return r;
            }),
            (i.prototype.update = function() {
              function e() {
                var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                  i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                t.setTranslate(i),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses();
              }
              var t = this;
              if (t && !t.destroyed) {
                var i = t.snapGrid,
                  a = t.params;
                a.breakpoints && t.setBreakpoint(),
                  t.updateSize(),
                  t.updateSlides(),
                  t.updateProgress(),
                  t.updateSlidesClasses(),
                  t.params.freeMode
                    ? (e(), t.params.autoHeight && t.updateAutoHeight())
                    : (("auto" === t.params.slidesPerView ||
                        1 < t.params.slidesPerView) &&
                      t.isEnd &&
                      !t.params.centeredSlides
                        ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                        : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
                  a.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
                  t.emit("update");
              }
            }),
            (i.prototype.init = function() {
              var e = this;
              e.initialized ||
                (e.emit("beforeInit"),
                e.params.breakpoints && e.setBreakpoint(),
                e.addClasses(),
                e.params.loop && e.loopCreate(),
                e.updateSize(),
                e.updateSlides(),
                e.params.watchOverflow && e.checkOverflow(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                e.params.loop
                  ? e.slideTo(
                      e.params.initialSlide + e.loopedSlides,
                      0,
                      e.params.runCallbacksOnInit
                    )
                  : e.slideTo(
                      e.params.initialSlide,
                      0,
                      e.params.runCallbacksOnInit
                    ),
                e.attachEvents(),
                (e.initialized = !0),
                e.emit("init"));
            }),
            (i.prototype.destroy = function(e, t) {
              void 0 === e && (e = !0), void 0 === t && (t = !0);
              var i = this,
                a = i.params,
                n = i.$el,
                s = i.$wrapperEl,
                r = i.slides;
              return (
                void 0 === i.params ||
                  i.destroyed ||
                  (i.emit("beforeDestroy"),
                  (i.initialized = !1),
                  i.detachEvents(),
                  a.loop && i.loopDestroy(),
                  t &&
                    (i.removeClasses(),
                    n.removeAttr("style"),
                    s.removeAttr("style"),
                    r &&
                      r.length &&
                      r
                        .removeClass(
                          [
                            a.slideVisibleClass,
                            a.slideActiveClass,
                            a.slideNextClass,
                            a.slidePrevClass
                          ].join(" ")
                        )
                        .removeAttr("style")
                        .removeAttr("data-swiper-slide-index")
                        .removeAttr("data-swiper-column")
                        .removeAttr("data-swiper-row")),
                  i.emit("destroy"),
                  Object.keys(i.eventsListeners).forEach(function(e) {
                    i.off(e);
                  }),
                  !1 !== e &&
                    ((i.$el[0].swiper = null),
                    i.$el.data("swiper", null),
                    c.deleteProps(i)),
                  (i.destroyed = !0)),
                null
              );
            }),
            (i.extendDefaults = function(e) {
              c.extend(M, e);
            }),
            (a.extendedDefaults.get = function() {
              return M;
            }),
            (a.defaults.get = function() {
              return k;
            }),
            (a.Class.get = function() {
              return t;
            }),
            (a.$.get = function() {
              return e;
            }),
            Object.defineProperties(i, a),
            i
          );
        })(p),
        z = { name: "device", proto: { device: E }, static: { device: E } },
        I = { name: "support", proto: { support: u }, static: { support: u } },
        L = { name: "browser", proto: { browser: S }, static: { browser: S } },
        D = {
          name: "resize",
          create: function() {
            var e = this;
            c.extend(e, {
              resize: {
                resizeHandler: function() {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    (e.emit("beforeResize"), e.emit("resize"));
                },
                orientationChangeHandler: function() {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    e.emit("orientationchange");
                }
              }
            });
          },
          on: {
            init: function() {
              n.addEventListener("resize", this.resize.resizeHandler),
                n.addEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
            destroy: function() {
              n.removeEventListener("resize", this.resize.resizeHandler),
                n.removeEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            }
          }
        },
        O = {
          func: n.MutationObserver || n.WebkitMutationObserver,
          attach: function(e, t) {
            void 0 === t && (t = {});
            var i = this,
              a = new O.func(function(e) {
                if (1 !== e.length) {
                  var t = function() {
                    i.emit("observerUpdate", e[0]);
                  };
                  n.requestAnimationFrame
                    ? n.requestAnimationFrame(t)
                    : n.setTimeout(t, 0);
                } else i.emit("observerUpdate", e[0]);
              });
            a.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
            }),
              i.observer.observers.push(a);
          },
          init: function() {
            var e = this;
            if (u.observer && e.params.observer) {
              if (e.params.observeParents)
                for (var t = e.$el.parents(), i = 0; i < t.length; i += 1)
                  e.observer.attach(t[i]);
              e.observer.attach(e.$el[0], {
                childList: e.params.observeSlideChildren
              }),
                e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy: function() {
            this.observer.observers.forEach(function(e) {
              e.disconnect();
            }),
              (this.observer.observers = []);
          }
        },
        A = {
          name: "observer",
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
          },
          create: function() {
            c.extend(this, {
              observer: {
                init: O.init.bind(this),
                attach: O.attach.bind(this),
                destroy: O.destroy.bind(this),
                observers: []
              }
            });
          },
          on: {
            init: function() {
              this.observer.init();
            },
            destroy: function() {
              this.observer.destroy();
            }
          }
        },
        _ = {
          update: function(e) {
            function t() {
              i.updateSlides(),
                i.updateProgress(),
                i.updateSlidesClasses(),
                i.lazy && i.params.lazy.enabled && i.lazy.load();
            }
            var i = this,
              a = i.params,
              n = a.slidesPerView,
              s = a.slidesPerGroup,
              r = a.centeredSlides,
              o = i.params.virtual,
              l = o.addSlidesBefore,
              d = o.addSlidesAfter,
              u = i.virtual,
              p = u.from,
              h = u.to,
              f = u.slides,
              v = u.slidesGrid,
              m = u.renderSlide,
              g = u.offset;
            i.updateActiveIndex();
            var w,
              y,
              b,
              x = i.activeIndex || 0;
            (w = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top"),
              r
                ? ((y = Math.floor(n / 2) + s + l),
                  (b = Math.floor(n / 2) + s + d))
                : ((y = n + (s - 1) + l), (b = s + d));
            var E = Math.max((x || 0) - b, 0),
              T = Math.min((x || 0) + y, f.length - 1),
              C = (i.slidesGrid[E] || 0) - (i.slidesGrid[0] || 0);
            if (
              (c.extend(i.virtual, {
                from: E,
                to: T,
                offset: C,
                slidesGrid: i.slidesGrid
              }),
              p === E && h === T && !e)
            )
              return (
                i.slidesGrid !== v && C !== g && i.slides.css(w, C + "px"),
                void i.updateProgress()
              );
            if (i.params.virtual.renderExternal)
              return (
                i.params.virtual.renderExternal.call(i, {
                  offset: C,
                  from: E,
                  to: T,
                  slides: (function() {
                    for (var e = [], t = E; t <= T; t += 1) e.push(f[t]);
                    return e;
                  })()
                }),
                void t()
              );
            var S = [],
              k = [];
            if (e) i.$wrapperEl.find("." + i.params.slideClass).remove();
            else
              for (var $ = p; $ <= h; $ += 1)
                ($ < E || T < $) &&
                  i.$wrapperEl
                    .find(
                      "." +
                        i.params.slideClass +
                        '[data-swiper-slide-index="' +
                        $ +
                        '"]'
                    )
                    .remove();
            for (var M = 0; M < f.length; M += 1)
              E <= M &&
                M <= T &&
                (void 0 === h || e
                  ? k.push(M)
                  : (h < M && k.push(M), M < p && S.push(M)));
            k.forEach(function(e) {
              i.$wrapperEl.append(m(f[e], e));
            }),
              S.sort(function(e, t) {
                return t - e;
              }).forEach(function(e) {
                i.$wrapperEl.prepend(m(f[e], e));
              }),
              i.$wrapperEl.children(".swiper-slide").css(w, C + "px"),
              t();
          },
          renderSlide: function(t, i) {
            var a = this,
              n = a.params.virtual;
            if (n.cache && a.virtual.cache[i]) return a.virtual.cache[i];
            var s = e(
              n.renderSlide
                ? n.renderSlide.call(a, t, i)
                : '<div class="' +
                    a.params.slideClass +
                    '" data-swiper-slide-index="' +
                    i +
                    '">' +
                    t +
                    "</div>"
            );
            return (
              s.attr("data-swiper-slide-index") ||
                s.attr("data-swiper-slide-index", i),
              n.cache && (a.virtual.cache[i] = s),
              s
            );
          },
          appendSlide: function(e) {
            this.virtual.slides.push(e), this.virtual.update(!0);
          },
          prependSlide: function(e) {
            var t = this;
            if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
              var i = t.virtual.cache,
                a = {};
              Object.keys(i).forEach(function(e) {
                a[e + 1] = i[e];
              }),
                (t.virtual.cache = a);
            }
            t.virtual.update(!0), t.slideNext(0);
          }
        },
        N = {
          name: "virtual",
          params: {
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              addSlidesBefore: 0,
              addSlidesAfter: 0
            }
          },
          create: function() {
            var e = this;
            c.extend(e, {
              virtual: {
                update: _.update.bind(e),
                appendSlide: _.appendSlide.bind(e),
                prependSlide: _.prependSlide.bind(e),
                renderSlide: _.renderSlide.bind(e),
                slides: e.params.virtual.slides,
                cache: {}
              }
            });
          },
          on: {
            beforeInit: function() {
              var e = this;
              if (e.params.virtual.enabled) {
                e.classNames.push(e.params.containerModifierClass + "virtual");
                var t = { watchSlidesProgress: !0 };
                c.extend(e.params, t),
                  c.extend(e.originalParams, t),
                  e.params.initialSlide || e.virtual.update();
              }
            },
            setTranslate: function() {
              this.params.virtual.enabled && this.virtual.update();
            }
          }
        },
        j = {
          handle: function(e) {
            var t = this,
              i = t.rtlTranslate,
              s = e;
            s.originalEvent && (s = s.originalEvent);
            var r = s.keyCode || s.charCode;
            if (
              !t.allowSlideNext &&
              ((t.isHorizontal() && 39 === r) || (t.isVertical() && 40 === r))
            )
              return !1;
            if (
              !t.allowSlidePrev &&
              ((t.isHorizontal() && 37 === r) || (t.isVertical() && 38 === r))
            )
              return !1;
            if (
              !(
                s.shiftKey ||
                s.altKey ||
                s.ctrlKey ||
                s.metaKey ||
                (a.activeElement &&
                  a.activeElement.nodeName &&
                  ("input" === a.activeElement.nodeName.toLowerCase() ||
                    "textarea" === a.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (
                t.params.keyboard.onlyInViewport &&
                (37 === r || 39 === r || 38 === r || 40 === r)
              ) {
                var o = !1;
                if (
                  0 < t.$el.parents("." + t.params.slideClass).length &&
                  0 === t.$el.parents("." + t.params.slideActiveClass).length
                )
                  return;
                var l = n.innerWidth,
                  d = n.innerHeight,
                  c = t.$el.offset();
                i && (c.left -= t.$el[0].scrollLeft);
                for (
                  var u = [
                      [c.left, c.top],
                      [c.left + t.width, c.top],
                      [c.left, c.top + t.height],
                      [c.left + t.width, c.top + t.height]
                    ],
                    p = 0;
                  p < u.length;
                  p += 1
                ) {
                  var h = u[p];
                  0 <= h[0] && h[0] <= l && 0 <= h[1] && h[1] <= d && (o = !0);
                }
                if (!o) return;
              }
              t.isHorizontal()
                ? ((37 !== r && 39 !== r) ||
                    (s.preventDefault
                      ? s.preventDefault()
                      : (s.returnValue = !1)),
                  ((39 === r && !i) || (37 === r && i)) && t.slideNext(),
                  ((37 === r && !i) || (39 === r && i)) && t.slidePrev())
                : ((38 !== r && 40 !== r) ||
                    (s.preventDefault
                      ? s.preventDefault()
                      : (s.returnValue = !1)),
                  40 === r && t.slideNext(),
                  38 === r && t.slidePrev()),
                t.emit("keyPress", r);
            }
          },
          enable: function() {
            this.keyboard.enabled ||
              (e(a).on("keydown", this.keyboard.handle),
              (this.keyboard.enabled = !0));
          },
          disable: function() {
            this.keyboard.enabled &&
              (e(a).off("keydown", this.keyboard.handle),
              (this.keyboard.enabled = !1));
          }
        },
        B = {
          name: "keyboard",
          params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
          create: function() {
            c.extend(this, {
              keyboard: {
                enabled: !1,
                enable: j.enable.bind(this),
                disable: j.disable.bind(this),
                handle: j.handle.bind(this)
              }
            });
          },
          on: {
            init: function() {
              this.params.keyboard.enabled && this.keyboard.enable();
            },
            destroy: function() {
              this.keyboard.enabled && this.keyboard.disable();
            }
          }
        },
        H = {
          lastScrollTime: c.now(),
          event:
            -1 < n.navigator.userAgent.indexOf("firefox")
              ? "DOMMouseScroll"
              : (function() {
                  var e = "onwheel",
                    t = e in a;
                  if (!t) {
                    var i = a.createElement("div");
                    i.setAttribute(e, "return;"),
                      (t = "function" == typeof i[e]);
                  }
                  return (
                    !t &&
                      a.implementation &&
                      a.implementation.hasFeature &&
                      !0 !== a.implementation.hasFeature("", "") &&
                      (t = a.implementation.hasFeature("Events.wheel", "3.0")),
                    t
                  );
                })()
              ? "wheel"
              : "mousewheel",
          normalize: function(e) {
            var t = 0,
              i = 0,
              a = 0,
              n = 0;
            return (
              "detail" in e && (i = e.detail),
              "wheelDelta" in e && (i = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
              (a = 10 * t),
              (n = 10 * i),
              "deltaY" in e && (n = e.deltaY),
              "deltaX" in e && (a = e.deltaX),
              (a || n) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((a *= 40), (n *= 40))
                  : ((a *= 800), (n *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              n && !i && (i = n < 1 ? -1 : 1),
              { spinX: t, spinY: i, pixelX: a, pixelY: n }
            );
          },
          handleMouseEnter: function() {
            this.mouseEntered = !0;
          },
          handleMouseLeave: function() {
            this.mouseEntered = !1;
          },
          handle: function(e) {
            var t = e,
              i = this,
              a = i.params.mousewheel;
            if (!i.mouseEntered && !a.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var s = 0,
              r = i.rtlTranslate ? -1 : 1,
              o = H.normalize(t);
            if (a.forceToAxis)
              if (i.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                s = o.pixelX * r;
              } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                s = o.pixelY;
              }
            else
              s =
                Math.abs(o.pixelX) > Math.abs(o.pixelY)
                  ? -o.pixelX * r
                  : -o.pixelY;
            if (0 === s) return !0;
            if ((a.invert && (s = -s), i.params.freeMode)) {
              i.params.loop && i.loopFix();
              var l = i.getTranslate() + s * a.sensitivity,
                d = i.isBeginning,
                u = i.isEnd;
              if (
                (l >= i.minTranslate() && (l = i.minTranslate()),
                l <= i.maxTranslate() && (l = i.maxTranslate()),
                i.setTransition(0),
                i.setTranslate(l),
                i.updateProgress(),
                i.updateActiveIndex(),
                i.updateSlidesClasses(),
                ((!d && i.isBeginning) || (!u && i.isEnd)) &&
                  i.updateSlidesClasses(),
                i.params.freeModeSticky &&
                  (clearTimeout(i.mousewheel.timeout),
                  (i.mousewheel.timeout = c.nextTick(function() {
                    i.slideToClosest();
                  }, 300))),
                i.emit("scroll", t),
                i.params.autoplay &&
                  i.params.autoplayDisableOnInteraction &&
                  i.autoplay.stop(),
                l === i.minTranslate() || l === i.maxTranslate())
              )
                return !0;
            } else {
              if (60 < c.now() - i.mousewheel.lastScrollTime)
                if (s < 0)
                  if ((i.isEnd && !i.params.loop) || i.animating) {
                    if (a.releaseOnEdges) return !0;
                  } else i.slideNext(), i.emit("scroll", t);
                else if ((i.isBeginning && !i.params.loop) || i.animating) {
                  if (a.releaseOnEdges) return !0;
                } else i.slidePrev(), i.emit("scroll", t);
              i.mousewheel.lastScrollTime = new n.Date().getTime();
            }
            return (
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
            );
          },
          enable: function() {
            var t = this;
            if (!H.event) return !1;
            if (t.mousewheel.enabled) return !1;
            var i = t.$el;
            return (
              "container" !== t.params.mousewheel.eventsTarged &&
                (i = e(t.params.mousewheel.eventsTarged)),
              i.on("mouseenter", t.mousewheel.handleMouseEnter),
              i.on("mouseleave", t.mousewheel.handleMouseLeave),
              i.on(H.event, t.mousewheel.handle),
              (t.mousewheel.enabled = !0)
            );
          },
          disable: function() {
            var t = this;
            if (!H.event) return !1;
            if (!t.mousewheel.enabled) return !1;
            var i = t.$el;
            return (
              "container" !== t.params.mousewheel.eventsTarged &&
                (i = e(t.params.mousewheel.eventsTarged)),
              i.off(H.event, t.mousewheel.handle),
              !(t.mousewheel.enabled = !1)
            );
          }
        },
        X = {
          update: function() {
            var e = this,
              t = e.params.navigation;
            if (!e.params.loop) {
              var i = e.navigation,
                a = i.$nextEl,
                n = i.$prevEl;
              n &&
                0 < n.length &&
                (e.isBeginning
                  ? n.addClass(t.disabledClass)
                  : n.removeClass(t.disabledClass),
                n[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass)),
                a &&
                  0 < a.length &&
                  (e.isEnd
                    ? a.addClass(t.disabledClass)
                    : a.removeClass(t.disabledClass),
                  a[
                    e.params.watchOverflow && e.isLocked
                      ? "addClass"
                      : "removeClass"
                  ](t.lockClass));
            }
          },
          onPrevClick: function(e) {
            e.preventDefault(),
              (this.isBeginning && !this.params.loop) || this.slidePrev();
          },
          onNextClick: function(e) {
            e.preventDefault(),
              (this.isEnd && !this.params.loop) || this.slideNext();
          },
          init: function() {
            var t,
              i,
              a = this,
              n = a.params.navigation;
            (n.nextEl || n.prevEl) &&
              (n.nextEl &&
                ((t = e(n.nextEl)),
                a.params.uniqueNavElements &&
                  "string" == typeof n.nextEl &&
                  1 < t.length &&
                  1 === a.$el.find(n.nextEl).length &&
                  (t = a.$el.find(n.nextEl))),
              n.prevEl &&
                ((i = e(n.prevEl)),
                a.params.uniqueNavElements &&
                  "string" == typeof n.prevEl &&
                  1 < i.length &&
                  1 === a.$el.find(n.prevEl).length &&
                  (i = a.$el.find(n.prevEl))),
              t && 0 < t.length && t.on("click", a.navigation.onNextClick),
              i && 0 < i.length && i.on("click", a.navigation.onPrevClick),
              c.extend(a.navigation, {
                $nextEl: t,
                nextEl: t && t[0],
                $prevEl: i,
                prevEl: i && i[0]
              }));
          },
          destroy: function() {
            var e = this,
              t = e.navigation,
              i = t.$nextEl,
              a = t.$prevEl;
            i &&
              i.length &&
              (i.off("click", e.navigation.onNextClick),
              i.removeClass(e.params.navigation.disabledClass)),
              a &&
                a.length &&
                (a.off("click", e.navigation.onPrevClick),
                a.removeClass(e.params.navigation.disabledClass));
          }
        },
        V = {
          update: function() {
            var t = this,
              i = t.rtl,
              a = t.params.pagination;
            if (
              a.el &&
              t.pagination.el &&
              t.pagination.$el &&
              0 !== t.pagination.$el.length
            ) {
              var n,
                s =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.slides.length
                    : t.slides.length,
                r = t.pagination.$el,
                o = t.params.loop
                  ? Math.ceil(
                      (s - 2 * t.loopedSlides) / t.params.slidesPerGroup
                    )
                  : t.snapGrid.length;
              if (
                (t.params.loop
                  ? ((n = Math.ceil(
                      (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                    )) >
                      s - 1 - 2 * t.loopedSlides &&
                      (n -= s - 2 * t.loopedSlides),
                    o - 1 < n && (n -= o),
                    n < 0 &&
                      "bullets" !== t.params.paginationType &&
                      (n = o + n))
                  : (n =
                      void 0 !== t.snapIndex
                        ? t.snapIndex
                        : t.activeIndex || 0),
                "bullets" === a.type &&
                  t.pagination.bullets &&
                  0 < t.pagination.bullets.length)
              ) {
                var l,
                  d,
                  c,
                  u = t.pagination.bullets;
                if (
                  (a.dynamicBullets &&
                    ((t.pagination.bulletSize = u
                      .eq(0)
                      [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    r.css(
                      t.isHorizontal() ? "width" : "height",
                      t.pagination.bulletSize * (a.dynamicMainBullets + 4) +
                        "px"
                    ),
                    1 < a.dynamicMainBullets &&
                      void 0 !== t.previousIndex &&
                      ((t.pagination.dynamicBulletIndex += n - t.previousIndex),
                      t.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                        ? (t.pagination.dynamicBulletIndex =
                            a.dynamicMainBullets - 1)
                        : t.pagination.dynamicBulletIndex < 0 &&
                          (t.pagination.dynamicBulletIndex = 0)),
                    (l = n - t.pagination.dynamicBulletIndex),
                    (c =
                      ((d =
                        l + (Math.min(u.length, a.dynamicMainBullets) - 1)) +
                        l) /
                      2)),
                  u.removeClass(
                    a.bulletActiveClass +
                      " " +
                      a.bulletActiveClass +
                      "-next " +
                      a.bulletActiveClass +
                      "-next-next " +
                      a.bulletActiveClass +
                      "-prev " +
                      a.bulletActiveClass +
                      "-prev-prev " +
                      a.bulletActiveClass +
                      "-main"
                  ),
                  1 < r.length)
                )
                  u.each(function(t, i) {
                    var s = e(i),
                      r = s.index();
                    r === n && s.addClass(a.bulletActiveClass),
                      a.dynamicBullets &&
                        (l <= r &&
                          r <= d &&
                          s.addClass(a.bulletActiveClass + "-main"),
                        r === l &&
                          s
                            .prev()
                            .addClass(a.bulletActiveClass + "-prev")
                            .prev()
                            .addClass(a.bulletActiveClass + "-prev-prev"),
                        r === d &&
                          s
                            .next()
                            .addClass(a.bulletActiveClass + "-next")
                            .next()
                            .addClass(a.bulletActiveClass + "-next-next"));
                  });
                else if (
                  (u.eq(n).addClass(a.bulletActiveClass), a.dynamicBullets)
                ) {
                  for (var p = u.eq(l), h = u.eq(d), f = l; f <= d; f += 1)
                    u.eq(f).addClass(a.bulletActiveClass + "-main");
                  p
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev-prev"),
                    h
                      .next()
                      .addClass(a.bulletActiveClass + "-next")
                      .next()
                      .addClass(a.bulletActiveClass + "-next-next");
                }
                if (a.dynamicBullets) {
                  var v = Math.min(u.length, a.dynamicMainBullets + 4),
                    m =
                      (t.pagination.bulletSize * v - t.pagination.bulletSize) /
                        2 -
                      c * t.pagination.bulletSize,
                    g = i ? "right" : "left";
                  u.css(t.isHorizontal() ? g : "top", m + "px");
                }
              }
              if (
                ("fraction" === a.type &&
                  (r
                    .find("." + a.currentClass)
                    .text(a.formatFractionCurrent(n + 1)),
                  r.find("." + a.totalClass).text(a.formatFractionTotal(o))),
                "progressbar" === a.type)
              ) {
                var w;
                w = a.progressbarOpposite
                  ? t.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : t.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                var y = (n + 1) / o,
                  b = 1,
                  x = 1;
                "horizontal" === w ? (b = y) : (x = y),
                  r
                    .find("." + a.progressbarFillClass)
                    .transform(
                      "translate3d(0,0,0) scaleX(" + b + ") scaleY(" + x + ")"
                    )
                    .transition(t.params.speed);
              }
              "custom" === a.type && a.renderCustom
                ? (r.html(a.renderCustom(t, n + 1, o)),
                  t.emit("paginationRender", t, r[0]))
                : t.emit("paginationUpdate", t, r[0]),
                r[
                  t.params.watchOverflow && t.isLocked
                    ? "addClass"
                    : "removeClass"
                ](a.lockClass);
            }
          },
          render: function() {
            var e = this,
              t = e.params.pagination;
            if (
              t.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
            ) {
              var i =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                a = e.pagination.$el,
                n = "";
              if ("bullets" === t.type) {
                for (
                  var s = e.params.loop
                      ? Math.ceil(
                          (i - 2 * e.loopedSlides) / e.params.slidesPerGroup
                        )
                      : e.snapGrid.length,
                    r = 0;
                  r < s;
                  r += 1
                )
                  t.renderBullet
                    ? (n += t.renderBullet.call(e, r, t.bulletClass))
                    : (n +=
                        "<" +
                        t.bulletElement +
                        ' class="' +
                        t.bulletClass +
                        '"></' +
                        t.bulletElement +
                        ">");
                a.html(n), (e.pagination.bullets = a.find("." + t.bulletClass));
              }
              "fraction" === t.type &&
                ((n = t.renderFraction
                  ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                  : '<span class="' +
                    t.currentClass +
                    '"></span> / <span class="' +
                    t.totalClass +
                    '"></span>'),
                a.html(n)),
                "progressbar" === t.type &&
                  ((n = t.renderProgressbar
                    ? t.renderProgressbar.call(e, t.progressbarFillClass)
                    : '<span class="' + t.progressbarFillClass + '"></span>'),
                  a.html(n)),
                "custom" !== t.type &&
                  e.emit("paginationRender", e.pagination.$el[0]);
            }
          },
          init: function() {
            var t = this,
              i = t.params.pagination;
            if (i.el) {
              var a = e(i.el);
              0 !== a.length &&
                (t.params.uniqueNavElements &&
                  "string" == typeof i.el &&
                  1 < a.length &&
                  1 === t.$el.find(i.el).length &&
                  (a = t.$el.find(i.el)),
                "bullets" === i.type &&
                  i.clickable &&
                  a.addClass(i.clickableClass),
                a.addClass(i.modifierClass + i.type),
                "bullets" === i.type &&
                  i.dynamicBullets &&
                  (a.addClass("" + i.modifierClass + i.type + "-dynamic"),
                  (t.pagination.dynamicBulletIndex = 0),
                  i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)),
                "progressbar" === i.type &&
                  i.progressbarOpposite &&
                  a.addClass(i.progressbarOppositeClass),
                i.clickable &&
                  a.on("click", "." + i.bulletClass, function(i) {
                    i.preventDefault();
                    var a = e(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (a += t.loopedSlides), t.slideTo(a);
                  }),
                c.extend(t.pagination, { $el: a, el: a[0] }));
            }
          },
          destroy: function() {
            var e = this,
              t = e.params.pagination;
            if (
              t.el &&
              e.pagination.el &&
              e.pagination.$el &&
              0 !== e.pagination.$el.length
            ) {
              var i = e.pagination.$el;
              i.removeClass(t.hiddenClass),
                i.removeClass(t.modifierClass + t.type),
                e.pagination.bullets &&
                  e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && i.off("click", "." + t.bulletClass);
            }
          }
        },
        G = {
          setTranslate: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
              var t = e.scrollbar,
                i = e.rtlTranslate,
                a = e.progress,
                n = t.dragSize,
                s = t.trackSize,
                r = t.$dragEl,
                o = t.$el,
                l = e.params.scrollbar,
                d = n,
                c = (s - n) * a;
              i
                ? 0 < (c = -c)
                  ? ((d = n - c), (c = 0))
                  : s < -c + n && (d = s + c)
                : c < 0
                ? ((d = n + c), (c = 0))
                : s < c + n && (d = s - c),
                e.isHorizontal()
                  ? (u.transforms3d
                      ? r.transform("translate3d(" + c + "px, 0, 0)")
                      : r.transform("translateX(" + c + "px)"),
                    (r[0].style.width = d + "px"))
                  : (u.transforms3d
                      ? r.transform("translate3d(0px, " + c + "px, 0)")
                      : r.transform("translateY(" + c + "px)"),
                    (r[0].style.height = d + "px")),
                l.hide &&
                  (clearTimeout(e.scrollbar.timeout),
                  (o[0].style.opacity = 1),
                  (e.scrollbar.timeout = setTimeout(function() {
                    (o[0].style.opacity = 0), o.transition(400);
                  }, 1e3)));
            }
          },
          setTransition: function(e) {
            this.params.scrollbar.el &&
              this.scrollbar.el &&
              this.scrollbar.$dragEl.transition(e);
          },
          updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
              var t = e.scrollbar,
                i = t.$dragEl,
                a = t.$el;
              (i[0].style.width = ""), (i[0].style.height = "");
              var n,
                s = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
                r = e.size / e.virtualSize,
                o = r * (s / e.size);
              (n =
                "auto" === e.params.scrollbar.dragSize
                  ? s * r
                  : parseInt(e.params.scrollbar.dragSize, 10)),
                e.isHorizontal()
                  ? (i[0].style.width = n + "px")
                  : (i[0].style.height = n + "px"),
                (a[0].style.display = 1 <= r ? "none" : ""),
                e.params.scrollbarHide && (a[0].style.opacity = 0),
                c.extend(t, {
                  trackSize: s,
                  divider: r,
                  moveDivider: o,
                  dragSize: n
                }),
                t.$el[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](e.params.scrollbar.lockClass);
            }
          },
          setDragPosition: function(e) {
            var t,
              i = this,
              a = i.scrollbar,
              n = i.rtlTranslate,
              s = a.$el,
              r = a.dragSize,
              o = a.trackSize;
            (t =
              ((i.isHorizontal()
                ? "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].pageX
                  : e.pageX || e.clientX
                : "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].pageY
                : e.pageY || e.clientY) -
                s.offset()[i.isHorizontal() ? "left" : "top"] -
                r / 2) /
              (o - r)),
              (t = Math.max(Math.min(t, 1), 0)),
              n && (t = 1 - t);
            var l =
              i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
            i.updateProgress(l),
              i.setTranslate(l),
              i.updateActiveIndex(),
              i.updateSlidesClasses();
          },
          onDragStart: function(e) {
            var t = this,
              i = t.params.scrollbar,
              a = t.scrollbar,
              n = t.$wrapperEl,
              s = a.$el,
              r = a.$dragEl;
            (t.scrollbar.isTouched = !0),
              e.preventDefault(),
              e.stopPropagation(),
              n.transition(100),
              r.transition(100),
              a.setDragPosition(e),
              clearTimeout(t.scrollbar.dragTimeout),
              s.transition(0),
              i.hide && s.css("opacity", 1),
              t.emit("scrollbarDragStart", e);
          },
          onDragMove: function(e) {
            var t = this.scrollbar,
              i = this.$wrapperEl,
              a = t.$el,
              n = t.$dragEl;
            this.scrollbar.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              t.setDragPosition(e),
              i.transition(0),
              a.transition(0),
              n.transition(0),
              this.emit("scrollbarDragMove", e));
          },
          onDragEnd: function(e) {
            var t = this,
              i = t.params.scrollbar,
              a = t.scrollbar.$el;
            t.scrollbar.isTouched &&
              ((t.scrollbar.isTouched = !1),
              i.hide &&
                (clearTimeout(t.scrollbar.dragTimeout),
                (t.scrollbar.dragTimeout = c.nextTick(function() {
                  a.css("opacity", 0), a.transition(400);
                }, 1e3))),
              t.emit("scrollbarDragEnd", e),
              i.snapOnRelease && t.slideToClosest());
          },
          enableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
              var t = e.scrollbar,
                i = e.touchEventsTouch,
                n = e.touchEventsDesktop,
                s = e.params,
                r = t.$el[0],
                o = !(!u.passiveListener || !s.passiveListeners) && {
                  passive: !1,
                  capture: !1
                },
                l = !(!u.passiveListener || !s.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
              u.touch
                ? (r.addEventListener(i.start, e.scrollbar.onDragStart, o),
                  r.addEventListener(i.move, e.scrollbar.onDragMove, o),
                  r.addEventListener(i.end, e.scrollbar.onDragEnd, l))
                : (r.addEventListener(n.start, e.scrollbar.onDragStart, o),
                  a.addEventListener(n.move, e.scrollbar.onDragMove, o),
                  a.addEventListener(n.end, e.scrollbar.onDragEnd, l));
            }
          },
          disableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
              var t = e.scrollbar,
                i = e.touchEventsTouch,
                n = e.touchEventsDesktop,
                s = e.params,
                r = t.$el[0],
                o = !(!u.passiveListener || !s.passiveListeners) && {
                  passive: !1,
                  capture: !1
                },
                l = !(!u.passiveListener || !s.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
              u.touch
                ? (r.removeEventListener(i.start, e.scrollbar.onDragStart, o),
                  r.removeEventListener(i.move, e.scrollbar.onDragMove, o),
                  r.removeEventListener(i.end, e.scrollbar.onDragEnd, l))
                : (r.removeEventListener(n.start, e.scrollbar.onDragStart, o),
                  a.removeEventListener(n.move, e.scrollbar.onDragMove, o),
                  a.removeEventListener(n.end, e.scrollbar.onDragEnd, l));
            }
          },
          init: function() {
            var t = this;
            if (t.params.scrollbar.el) {
              var i = t.scrollbar,
                a = t.$el,
                n = t.params.scrollbar,
                s = e(n.el);
              t.params.uniqueNavElements &&
                "string" == typeof n.el &&
                1 < s.length &&
                1 === a.find(n.el).length &&
                (s = a.find(n.el));
              var r = s.find("." + t.params.scrollbar.dragClass);
              0 === r.length &&
                ((r = e(
                  '<div class="' + t.params.scrollbar.dragClass + '"></div>'
                )),
                s.append(r)),
                c.extend(i, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
                n.draggable && i.enableDraggable();
            }
          },
          destroy: function() {
            this.scrollbar.disableDraggable();
          }
        },
        F = {
          setTransform: function(t, i) {
            var a = this.rtl,
              n = e(t),
              s = a ? -1 : 1,
              r = n.attr("data-swiper-parallax") || "0",
              o = n.attr("data-swiper-parallax-x"),
              l = n.attr("data-swiper-parallax-y"),
              d = n.attr("data-swiper-parallax-scale"),
              c = n.attr("data-swiper-parallax-opacity");
            if (
              (o || l
                ? ((o = o || "0"), (l = l || "0"))
                : this.isHorizontal()
                ? ((o = r), (l = "0"))
                : ((l = r), (o = "0")),
              (o =
                0 <= o.indexOf("%")
                  ? parseInt(o, 10) * i * s + "%"
                  : o * i * s + "px"),
              (l =
                0 <= l.indexOf("%") ? parseInt(l, 10) * i + "%" : l * i + "px"),
              null != c)
            ) {
              var u = c - (c - 1) * (1 - Math.abs(i));
              n[0].style.opacity = u;
            }
            if (null == d)
              n.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
              var p = d - (d - 1) * (1 - Math.abs(i));
              n.transform(
                "translate3d(" + o + ", " + l + ", 0px) scale(" + p + ")"
              );
            }
          },
          setTranslate: function() {
            var t = this,
              i = t.$el,
              a = t.slides,
              n = t.progress,
              s = t.snapGrid;
            i
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
              )
              .each(function(e, i) {
                t.parallax.setTransform(i, n);
              }),
              a.each(function(i, a) {
                var r = a.progress;
                1 < t.params.slidesPerGroup &&
                  "auto" !== t.params.slidesPerView &&
                  (r += Math.ceil(i / 2) - n * (s.length - 1)),
                  (r = Math.min(Math.max(r, -1), 1)),
                  e(a)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                    )
                    .each(function(e, i) {
                      t.parallax.setTransform(i, r);
                    });
              });
          },
          setTransition: function(t) {
            void 0 === t && (t = this.params.speed),
              this.$el
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function(i, a) {
                  var n = e(a),
                    s =
                      parseInt(n.attr("data-swiper-parallax-duration"), 10) ||
                      t;
                  0 === t && (s = 0), n.transition(s);
                });
          }
        },
        Y = {
          getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX,
              i = e.targetTouches[0].pageY,
              a = e.targetTouches[1].pageX,
              n = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(a - t, 2) + Math.pow(n - i, 2));
          },
          onGestureStart: function(t) {
            var i = this,
              a = i.params.zoom,
              n = i.zoom,
              s = n.gesture;
            if (
              ((n.fakeGestureTouched = !1),
              (n.fakeGestureMoved = !1),
              !u.gestures)
            ) {
              if (
                "touchstart" !== t.type ||
                ("touchstart" === t.type && t.targetTouches.length < 2)
              )
                return;
              (n.fakeGestureTouched = !0),
                (s.scaleStart = Y.getDistanceBetweenTouches(t));
            }
            (s.$slideEl && s.$slideEl.length) ||
            ((s.$slideEl = e(t.target).closest(".swiper-slide")),
            0 === s.$slideEl.length &&
              (s.$slideEl = i.slides.eq(i.activeIndex)),
            (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
            (s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass)),
            (s.maxRatio =
              s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
            0 !== s.$imageWrapEl.length)
              ? (s.$imageEl.transition(0), (i.zoom.isScaling = !0))
              : (s.$imageEl = void 0);
          },
          onGestureChange: function(e) {
            var t = this.params.zoom,
              i = this.zoom,
              a = i.gesture;
            if (!u.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (i.fakeGestureMoved = !0),
                (a.scaleMove = Y.getDistanceBetweenTouches(e));
            }
            a.$imageEl &&
              0 !== a.$imageEl.length &&
              ((i.scale = u.gestures
                ? e.scale * i.currentScale
                : (a.scaleMove / a.scaleStart) * i.currentScale),
              i.scale > a.maxRatio &&
                (i.scale =
                  a.maxRatio - 1 + Math.pow(i.scale - a.maxRatio + 1, 0.5)),
              i.scale < t.minRatio &&
                (i.scale =
                  t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
              a.$imageEl.transform(
                "translate3d(0,0,0) scale(" + i.scale + ")"
              ));
          },
          onGestureEnd: function(e) {
            var t = this.params.zoom,
              i = this.zoom,
              a = i.gesture;
            if (!u.gestures) {
              if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
              if (
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !E.android)
              )
                return;
              (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
            }
            a.$imageEl &&
              0 !== a.$imageEl.length &&
              ((i.scale = Math.max(Math.min(i.scale, a.maxRatio), t.minRatio)),
              a.$imageEl
                .transition(this.params.speed)
                .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
              (i.currentScale = i.scale),
              (i.isScaling = !1),
              1 === i.scale && (a.$slideEl = void 0));
          },
          onTouchStart: function(e) {
            var t = this.zoom,
              i = t.gesture,
              a = t.image;
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              (a.isTouched ||
                (E.android && e.preventDefault(),
                (a.isTouched = !0),
                (a.touchesStart.x =
                  "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (a.touchesStart.y =
                  "touchstart" === e.type
                    ? e.targetTouches[0].pageY
                    : e.pageY)));
          },
          onTouchMove: function(e) {
            var t = this,
              i = t.zoom,
              a = i.gesture,
              n = i.image,
              s = i.velocity;
            if (
              a.$imageEl &&
              0 !== a.$imageEl.length &&
              ((t.allowClick = !1), n.isTouched && a.$slideEl)
            ) {
              n.isMoved ||
                ((n.width = a.$imageEl[0].offsetWidth),
                (n.height = a.$imageEl[0].offsetHeight),
                (n.startX = c.getTranslate(a.$imageWrapEl[0], "x") || 0),
                (n.startY = c.getTranslate(a.$imageWrapEl[0], "y") || 0),
                (a.slideWidth = a.$slideEl[0].offsetWidth),
                (a.slideHeight = a.$slideEl[0].offsetHeight),
                a.$imageWrapEl.transition(0),
                t.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
              var r = n.width * i.scale,
                o = n.height * i.scale;
              if (!(r < a.slideWidth && o < a.slideHeight)) {
                if (
                  ((n.minX = Math.min(a.slideWidth / 2 - r / 2, 0)),
                  (n.maxX = -n.minX),
                  (n.minY = Math.min(a.slideHeight / 2 - o / 2, 0)),
                  (n.maxY = -n.minY),
                  (n.touchesCurrent.x =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (n.touchesCurrent.y =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY),
                  !n.isMoved && !i.isScaling)
                ) {
                  if (
                    t.isHorizontal() &&
                    ((Math.floor(n.minX) === Math.floor(n.startX) &&
                      n.touchesCurrent.x < n.touchesStart.x) ||
                      (Math.floor(n.maxX) === Math.floor(n.startX) &&
                        n.touchesCurrent.x > n.touchesStart.x))
                  )
                    return void (n.isTouched = !1);
                  if (
                    !t.isHorizontal() &&
                    ((Math.floor(n.minY) === Math.floor(n.startY) &&
                      n.touchesCurrent.y < n.touchesStart.y) ||
                      (Math.floor(n.maxY) === Math.floor(n.startY) &&
                        n.touchesCurrent.y > n.touchesStart.y))
                  )
                    return void (n.isTouched = !1);
                }
                e.preventDefault(),
                  e.stopPropagation(),
                  (n.isMoved = !0),
                  (n.currentX =
                    n.touchesCurrent.x - n.touchesStart.x + n.startX),
                  (n.currentY =
                    n.touchesCurrent.y - n.touchesStart.y + n.startY),
                  n.currentX < n.minX &&
                    (n.currentX =
                      n.minX + 1 - Math.pow(n.minX - n.currentX + 1, 0.8)),
                  n.currentX > n.maxX &&
                    (n.currentX =
                      n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, 0.8)),
                  n.currentY < n.minY &&
                    (n.currentY =
                      n.minY + 1 - Math.pow(n.minY - n.currentY + 1, 0.8)),
                  n.currentY > n.maxY &&
                    (n.currentY =
                      n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, 0.8)),
                  s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x),
                  s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y),
                  s.prevTime || (s.prevTime = Date.now()),
                  (s.x =
                    (n.touchesCurrent.x - s.prevPositionX) /
                    (Date.now() - s.prevTime) /
                    2),
                  (s.y =
                    (n.touchesCurrent.y - s.prevPositionY) /
                    (Date.now() - s.prevTime) /
                    2),
                  Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 &&
                    (s.x = 0),
                  Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 &&
                    (s.y = 0),
                  (s.prevPositionX = n.touchesCurrent.x),
                  (s.prevPositionY = n.touchesCurrent.y),
                  (s.prevTime = Date.now()),
                  a.$imageWrapEl.transform(
                    "translate3d(" + n.currentX + "px, " + n.currentY + "px,0)"
                  );
              }
            }
          },
          onTouchEnd: function() {
            var e = this.zoom,
              t = e.gesture,
              i = e.image,
              a = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
              if (!i.isTouched || !i.isMoved)
                return (i.isTouched = !1), void (i.isMoved = !1);
              (i.isTouched = !1), (i.isMoved = !1);
              var n = 300,
                s = 300,
                r = a.x * n,
                o = i.currentX + r,
                l = a.y * s,
                d = i.currentY + l;
              0 !== a.x && (n = Math.abs((o - i.currentX) / a.x)),
                0 !== a.y && (s = Math.abs((d - i.currentY) / a.y));
              var c = Math.max(n, s);
              (i.currentX = o), (i.currentY = d);
              var u = i.width * e.scale,
                p = i.height * e.scale;
              (i.minX = Math.min(t.slideWidth / 2 - u / 2, 0)),
                (i.maxX = -i.minX),
                (i.minY = Math.min(t.slideHeight / 2 - p / 2, 0)),
                (i.maxY = -i.minY),
                (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                t.$imageWrapEl
                  .transition(c)
                  .transform(
                    "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
                  );
            }
          },
          onTransitionEnd: function() {
            var e = this.zoom,
              t = e.gesture;
            t.$slideEl &&
              this.previousIndex !== this.activeIndex &&
              (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              t.$imageWrapEl.transform("translate3d(0,0,0)"),
              (e.scale = 1),
              (e.currentScale = 1),
              (t.$slideEl = void 0),
              (t.$imageEl = void 0),
              (t.$imageWrapEl = void 0));
          },
          toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
          },
          in: function(t) {
            var i,
              a,
              n,
              s,
              r,
              o,
              l,
              d,
              c,
              u,
              p,
              h,
              f,
              v,
              m,
              g,
              w = this,
              y = w.zoom,
              b = w.params.zoom,
              x = y.gesture,
              E = y.image;
            x.$slideEl ||
              ((x.$slideEl = w.clickedSlide
                ? e(w.clickedSlide)
                : w.slides.eq(w.activeIndex)),
              (x.$imageEl = x.$slideEl.find("img, svg, canvas")),
              (x.$imageWrapEl = x.$imageEl.parent("." + b.containerClass))),
              x.$imageEl &&
                0 !== x.$imageEl.length &&
                (x.$slideEl.addClass("" + b.zoomedSlideClass),
                void 0 === E.touchesStart.x && t
                  ? ((i =
                      "touchend" === t.type
                        ? t.changedTouches[0].pageX
                        : t.pageX),
                    (a =
                      "touchend" === t.type
                        ? t.changedTouches[0].pageY
                        : t.pageY))
                  : ((i = E.touchesStart.x), (a = E.touchesStart.y)),
                (y.scale =
                  x.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
                (y.currentScale =
                  x.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
                t
                  ? ((m = x.$slideEl[0].offsetWidth),
                    (g = x.$slideEl[0].offsetHeight),
                    (n = x.$slideEl.offset().left + m / 2 - i),
                    (s = x.$slideEl.offset().top + g / 2 - a),
                    (l = x.$imageEl[0].offsetWidth),
                    (d = x.$imageEl[0].offsetHeight),
                    (c = l * y.scale),
                    (u = d * y.scale),
                    (f = -(p = Math.min(m / 2 - c / 2, 0))),
                    (v = -(h = Math.min(g / 2 - u / 2, 0))),
                    (r = n * y.scale) < p && (r = p),
                    f < r && (r = f),
                    (o = s * y.scale) < h && (o = h),
                    v < o && (o = v))
                  : (o = r = 0),
                x.$imageWrapEl
                  .transition(300)
                  .transform("translate3d(" + r + "px, " + o + "px,0)"),
                x.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(" + y.scale + ")"));
          },
          out: function() {
            var t = this,
              i = t.zoom,
              a = t.params.zoom,
              n = i.gesture;
            n.$slideEl ||
              ((n.$slideEl = t.clickedSlide
                ? e(t.clickedSlide)
                : t.slides.eq(t.activeIndex)),
              (n.$imageEl = n.$slideEl.find("img, svg, canvas")),
              (n.$imageWrapEl = n.$imageEl.parent("." + a.containerClass))),
              n.$imageEl &&
                0 !== n.$imageEl.length &&
                ((i.scale = 1),
                (i.currentScale = 1),
                n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                n.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                n.$slideEl.removeClass("" + a.zoomedSlideClass),
                (n.$slideEl = void 0));
          },
          enable: function() {
            var e = this,
              t = e.zoom;
            if (!t.enabled) {
              t.enabled = !0;
              var i = !(
                "touchstart" !== e.touchEvents.start ||
                !u.passiveListener ||
                !e.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              u.gestures
                ? (e.$wrapperEl.on(
                    "gesturestart",
                    ".swiper-slide",
                    t.onGestureStart,
                    i
                  ),
                  e.$wrapperEl.on(
                    "gesturechange",
                    ".swiper-slide",
                    t.onGestureChange,
                    i
                  ),
                  e.$wrapperEl.on(
                    "gestureend",
                    ".swiper-slide",
                    t.onGestureEnd,
                    i
                  ))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.on(
                    e.touchEvents.start,
                    ".swiper-slide",
                    t.onGestureStart,
                    i
                  ),
                  e.$wrapperEl.on(
                    e.touchEvents.move,
                    ".swiper-slide",
                    t.onGestureChange,
                    i
                  ),
                  e.$wrapperEl.on(
                    e.touchEvents.end,
                    ".swiper-slide",
                    t.onGestureEnd,
                    i
                  )),
                e.$wrapperEl.on(
                  e.touchEvents.move,
                  "." + e.params.zoom.containerClass,
                  t.onTouchMove
                );
            }
          },
          disable: function() {
            var e = this,
              t = e.zoom;
            if (t.enabled) {
              e.zoom.enabled = !1;
              var i = !(
                "touchstart" !== e.touchEvents.start ||
                !u.passiveListener ||
                !e.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              u.gestures
                ? (e.$wrapperEl.off(
                    "gesturestart",
                    ".swiper-slide",
                    t.onGestureStart,
                    i
                  ),
                  e.$wrapperEl.off(
                    "gesturechange",
                    ".swiper-slide",
                    t.onGestureChange,
                    i
                  ),
                  e.$wrapperEl.off(
                    "gestureend",
                    ".swiper-slide",
                    t.onGestureEnd,
                    i
                  ))
                : "touchstart" === e.touchEvents.start &&
                  (e.$wrapperEl.off(
                    e.touchEvents.start,
                    ".swiper-slide",
                    t.onGestureStart,
                    i
                  ),
                  e.$wrapperEl.off(
                    e.touchEvents.move,
                    ".swiper-slide",
                    t.onGestureChange,
                    i
                  ),
                  e.$wrapperEl.off(
                    e.touchEvents.end,
                    ".swiper-slide",
                    t.onGestureEnd,
                    i
                  )),
                e.$wrapperEl.off(
                  e.touchEvents.move,
                  "." + e.params.zoom.containerClass,
                  t.onTouchMove
                );
            }
          }
        },
        R = {
          loadInSlide: function(t, i) {
            void 0 === i && (i = !0);
            var a = this,
              n = a.params.lazy;
            if (void 0 !== t && 0 !== a.slides.length) {
              var s =
                  a.virtual && a.params.virtual.enabled
                    ? a.$wrapperEl.children(
                        "." +
                          a.params.slideClass +
                          '[data-swiper-slide-index="' +
                          t +
                          '"]'
                      )
                    : a.slides.eq(t),
                r = s.find(
                  "." +
                    n.elementClass +
                    ":not(." +
                    n.loadedClass +
                    "):not(." +
                    n.loadingClass +
                    ")"
                );
              !s.hasClass(n.elementClass) ||
                s.hasClass(n.loadedClass) ||
                s.hasClass(n.loadingClass) ||
                (r = r.add(s[0])),
                0 !== r.length &&
                  r.each(function(t, r) {
                    var o = e(r);
                    o.addClass(n.loadingClass);
                    var l = o.attr("data-background"),
                      d = o.attr("data-src"),
                      c = o.attr("data-srcset"),
                      u = o.attr("data-sizes");
                    a.loadImage(o[0], d || l, c, u, !1, function() {
                      if (null != a && a && (!a || a.params) && !a.destroyed) {
                        if (
                          (l
                            ? (o.css("background-image", 'url("' + l + '")'),
                              o.removeAttr("data-background"))
                            : (c &&
                                (o.attr("srcset", c),
                                o.removeAttr("data-srcset")),
                              u &&
                                (o.attr("sizes", u),
                                o.removeAttr("data-sizes")),
                              d &&
                                (o.attr("src", d), o.removeAttr("data-src"))),
                          o.addClass(n.loadedClass).removeClass(n.loadingClass),
                          s.find("." + n.preloaderClass).remove(),
                          a.params.loop && i)
                        ) {
                          var e = s.attr("data-swiper-slide-index");
                          if (s.hasClass(a.params.slideDuplicateClass)) {
                            var t = a.$wrapperEl.children(
                              '[data-swiper-slide-index="' +
                                e +
                                '"]:not(.' +
                                a.params.slideDuplicateClass +
                                ")"
                            );
                            a.lazy.loadInSlide(t.index(), !1);
                          } else {
                            var r = a.$wrapperEl.children(
                              "." +
                                a.params.slideDuplicateClass +
                                '[data-swiper-slide-index="' +
                                e +
                                '"]'
                            );
                            a.lazy.loadInSlide(r.index(), !1);
                          }
                        }
                        a.emit("lazyImageReady", s[0], o[0]);
                      }
                    }),
                      a.emit("lazyImageLoad", s[0], o[0]);
                  });
            }
          },
          load: function() {
            function t(e) {
              if (l) {
                if (
                  n.children(
                    "." + s.slideClass + '[data-swiper-slide-index="' + e + '"]'
                  ).length
                )
                  return !0;
              } else if (r[e]) return !0;
              return !1;
            }

            function i(t) {
              return l ? e(t).attr("data-swiper-slide-index") : e(t).index();
            }
            var a = this,
              n = a.$wrapperEl,
              s = a.params,
              r = a.slides,
              o = a.activeIndex,
              l = a.virtual && s.virtual.enabled,
              d = s.lazy,
              c = s.slidesPerView;
            if (
              ("auto" === c && (c = 0),
              a.lazy.initialImageLoaded || (a.lazy.initialImageLoaded = !0),
              a.params.watchSlidesVisibility)
            )
              n.children("." + s.slideVisibleClass).each(function(t, i) {
                var n = l ? e(i).attr("data-swiper-slide-index") : e(i).index();
                a.lazy.loadInSlide(n);
              });
            else if (1 < c)
              for (var u = o; u < o + c; u += 1) t(u) && a.lazy.loadInSlide(u);
            else a.lazy.loadInSlide(o);
            if (d.loadPrevNext)
              if (1 < c || (d.loadPrevNextAmount && 1 < d.loadPrevNextAmount)) {
                for (
                  var p = d.loadPrevNextAmount,
                    h = c,
                    f = Math.min(o + h + Math.max(p, h), r.length),
                    v = Math.max(o - Math.max(h, p), 0),
                    m = o + c;
                  m < f;
                  m += 1
                )
                  t(m) && a.lazy.loadInSlide(m);
                for (var g = v; g < o; g += 1) t(g) && a.lazy.loadInSlide(g);
              } else {
                var w = n.children("." + s.slideNextClass);
                0 < w.length && a.lazy.loadInSlide(i(w));
                var y = n.children("." + s.slidePrevClass);
                0 < y.length && a.lazy.loadInSlide(i(y));
              }
          }
        },
        q = {
          LinearSpline: function(e, t) {
            var i,
              a,
              n,
              s,
              r,
              o = function(e, t) {
                for (a = -1, i = e.length; 1 < i - a; )
                  e[(n = (i + a) >> 1)] <= t ? (a = n) : (i = n);
                return i;
              };
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function(e) {
                return e
                  ? ((r = o(this.x, e)),
                    (s = r - 1),
                    ((e - this.x[s]) * (this.y[r] - this.y[s])) /
                      (this.x[r] - this.x[s]) +
                      this.y[s])
                  : 0;
              }),
              this
            );
          },
          getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline ||
              (t.controller.spline = t.params.loop
                ? new q.LinearSpline(t.slidesGrid, e.slidesGrid)
                : new q.LinearSpline(t.snapGrid, e.snapGrid));
          },
          setTranslate: function(e, t) {
            function i(e) {
              var t = s.rtlTranslate ? -s.translate : s.translate;
              "slide" === s.params.controller.by &&
                (s.controller.getInterpolateFunction(e),
                (n = -s.controller.spline.interpolate(-t))),
                (n && "container" !== s.params.controller.by) ||
                  ((a =
                    (e.maxTranslate() - e.minTranslate()) /
                    (s.maxTranslate() - s.minTranslate())),
                  (n = (t - s.minTranslate()) * a + e.minTranslate())),
                s.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, s),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            var a,
              n,
              s = this,
              r = s.controller.control;
            if (Array.isArray(r))
              for (var o = 0; o < r.length; o += 1)
                r[o] !== t && r[o] instanceof P && i(r[o]);
            else r instanceof P && t !== r && i(r);
          },
          setTransition: function(e, t) {
            function i(t) {
              t.setTransition(e, n),
                0 !== e &&
                  (t.transitionStart(),
                  t.params.autoHeight &&
                    c.nextTick(function() {
                      t.updateAutoHeight();
                    }),
                  t.$wrapperEl.transitionEnd(function() {
                    s &&
                      (t.params.loop &&
                        "slide" === n.params.controller.by &&
                        t.loopFix(),
                      t.transitionEnd());
                  }));
            }
            var a,
              n = this,
              s = n.controller.control;
            if (Array.isArray(s))
              for (a = 0; a < s.length; a += 1)
                s[a] !== t && s[a] instanceof P && i(s[a]);
            else s instanceof P && t !== s && i(s);
          }
        },
        W = {
          makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"), e;
          },
          addElRole: function(e, t) {
            return e.attr("role", t), e;
          },
          addElLabel: function(e, t) {
            return e.attr("aria-label", t), e;
          },
          disableEl: function(e) {
            return e.attr("aria-disabled", !0), e;
          },
          enableEl: function(e) {
            return e.attr("aria-disabled", !1), e;
          },
          onEnterKey: function(t) {
            var i = this,
              a = i.params.a11y;
            if (13 === t.keyCode) {
              var n = e(t.target);
              i.navigation &&
                i.navigation.$nextEl &&
                n.is(i.navigation.$nextEl) &&
                ((i.isEnd && !i.params.loop) || i.slideNext(),
                i.isEnd
                  ? i.a11y.notify(a.lastSlideMessage)
                  : i.a11y.notify(a.nextSlideMessage)),
                i.navigation &&
                  i.navigation.$prevEl &&
                  n.is(i.navigation.$prevEl) &&
                  ((i.isBeginning && !i.params.loop) || i.slidePrev(),
                  i.isBeginning
                    ? i.a11y.notify(a.firstSlideMessage)
                    : i.a11y.notify(a.prevSlideMessage)),
                i.pagination &&
                  n.is("." + i.params.pagination.bulletClass) &&
                  n[0].click();
            }
          },
          notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
          },
          updateNavigation: function() {
            var e = this;
            if (!e.params.loop) {
              var t = e.navigation,
                i = t.$nextEl,
                a = t.$prevEl;
              a &&
                0 < a.length &&
                (e.isBeginning ? e.a11y.disableEl(a) : e.a11y.enableEl(a)),
                i &&
                  0 < i.length &&
                  (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i));
            }
          },
          updatePagination: function() {
            var t = this,
              i = t.params.a11y;
            t.pagination &&
              t.params.pagination.clickable &&
              t.pagination.bullets &&
              t.pagination.bullets.length &&
              t.pagination.bullets.each(function(a, n) {
                var s = e(n);
                t.a11y.makeElFocusable(s),
                  t.a11y.addElRole(s, "button"),
                  t.a11y.addElLabel(
                    s,
                    i.paginationBulletMessage.replace(
                      /{{index}}/,
                      s.index() + 1
                    )
                  );
              });
          },
          init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t,
              i,
              a = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
              e.navigation &&
                e.navigation.$prevEl &&
                (i = e.navigation.$prevEl),
              t &&
                (e.a11y.makeElFocusable(t),
                e.a11y.addElRole(t, "button"),
                e.a11y.addElLabel(t, a.nextSlideMessage),
                t.on("keydown", e.a11y.onEnterKey)),
              i &&
                (e.a11y.makeElFocusable(i),
                e.a11y.addElRole(i, "button"),
                e.a11y.addElLabel(i, a.prevSlideMessage),
                i.on("keydown", e.a11y.onEnterKey)),
              e.pagination &&
                e.params.pagination.clickable &&
                e.pagination.bullets &&
                e.pagination.bullets.length &&
                e.pagination.$el.on(
                  "keydown",
                  "." + e.params.pagination.bulletClass,
                  e.a11y.onEnterKey
                );
          },
          destroy: function() {
            var e,
              t,
              i = this;
            i.a11y.liveRegion &&
              0 < i.a11y.liveRegion.length &&
              i.a11y.liveRegion.remove(),
              i.navigation &&
                i.navigation.$nextEl &&
                (e = i.navigation.$nextEl),
              i.navigation &&
                i.navigation.$prevEl &&
                (t = i.navigation.$prevEl),
              e && e.off("keydown", i.a11y.onEnterKey),
              t && t.off("keydown", i.a11y.onEnterKey),
              i.pagination &&
                i.params.pagination.clickable &&
                i.pagination.bullets &&
                i.pagination.bullets.length &&
                i.pagination.$el.off(
                  "keydown",
                  "." + i.params.pagination.bulletClass,
                  i.a11y.onEnterKey
                );
          }
        },
        U = {
          init: function() {
            var e = this;
            if (e.params.history) {
              if (!n.history || !n.history.pushState)
                return (
                  (e.params.history.enabled = !1),
                  void (e.params.hashNavigation.enabled = !0)
                );
              var t = e.history;
              (t.initialized = !0),
                (t.paths = U.getPathValues()),
                (t.paths.key || t.paths.value) &&
                  (t.scrollToSlide(
                    0,
                    t.paths.value,
                    e.params.runCallbacksOnInit
                  ),
                  e.params.history.replaceState ||
                    n.addEventListener(
                      "popstate",
                      e.history.setHistoryPopState
                    ));
            }
          },
          destroy: function() {
            this.params.history.replaceState ||
              n.removeEventListener(
                "popstate",
                this.history.setHistoryPopState
              );
          },
          setHistoryPopState: function() {
            (this.history.paths = U.getPathValues()),
              this.history.scrollToSlide(
                this.params.speed,
                this.history.paths.value,
                !1
              );
          },
          getPathValues: function() {
            var e = n.location.pathname
                .slice(1)
                .split("/")
                .filter(function(e) {
                  return "" !== e;
                }),
              t = e.length;
            return { key: e[t - 2], value: e[t - 1] };
          },
          setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
              var i = this.slides.eq(t),
                a = U.slugify(i.attr("data-history"));
              n.location.pathname.includes(e) || (a = e + "/" + a);
              var s = n.history.state;
              (s && s.value === a) ||
                (this.params.history.replaceState
                  ? n.history.replaceState({ value: a }, null, a)
                  : n.history.pushState({ value: a }, null, a));
            }
          },
          slugify: function(e) {
            return e
              .toString()
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, "");
          },
          scrollToSlide: function(e, t, i) {
            var a = this;
            if (t)
              for (var n = 0, s = a.slides.length; n < s; n += 1) {
                var r = a.slides.eq(n);
                if (
                  U.slugify(r.attr("data-history")) === t &&
                  !r.hasClass(a.params.slideDuplicateClass)
                ) {
                  var o = r.index();
                  a.slideTo(o, e, i);
                }
              }
            else a.slideTo(0, e, i);
          }
        },
        Q = {
          onHashCange: function() {
            var e = this,
              t = a.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
              var i = e.$wrapperEl
                .children("." + e.params.slideClass + '[data-hash="' + t + '"]')
                .index();
              if (void 0 === i) return;
              e.slideTo(i);
            }
          },
          setHash: function() {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
              if (
                e.params.hashNavigation.replaceState &&
                n.history &&
                n.history.replaceState
              )
                n.history.replaceState(
                  null,
                  null,
                  "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
                );
              else {
                var t = e.slides.eq(e.activeIndex),
                  i = t.attr("data-hash") || t.attr("data-history");
                a.location.hash = i || "";
              }
          },
          init: function() {
            var t = this;
            if (
              !(
                !t.params.hashNavigation.enabled ||
                (t.params.history && t.params.history.enabled)
              )
            ) {
              t.hashNavigation.initialized = !0;
              var i = a.location.hash.replace("#", "");
              if (i)
                for (var s = 0, r = t.slides.length; s < r; s += 1) {
                  var o = t.slides.eq(s);
                  if (
                    (o.attr("data-hash") || o.attr("data-history")) === i &&
                    !o.hasClass(t.params.slideDuplicateClass)
                  ) {
                    var l = o.index();
                    t.slideTo(l, 0, t.params.runCallbacksOnInit, !0);
                  }
                }
              t.params.hashNavigation.watchState &&
                e(n).on("hashchange", t.hashNavigation.onHashCange);
            }
          },
          destroy: function() {
            this.params.hashNavigation.watchState &&
              e(n).off("hashchange", this.hashNavigation.onHashCange);
          }
        },
        Z = {
          run: function() {
            var e = this,
              t = e.slides.eq(e.activeIndex),
              i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") &&
              (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              (e.autoplay.timeout = c.nextTick(function() {
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(),
                      e.slidePrev(e.params.speed, !0, !0),
                      e.emit("autoplay"))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                  : e.params.loop
                  ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
              }, i));
          },
          start: function() {
            var e = this;
            return (
              void 0 === e.autoplay.timeout &&
              !e.autoplay.running &&
              ((e.autoplay.running = !0),
              e.emit("autoplayStart"),
              e.autoplay.run(),
              !0)
            );
          },
          stop: function() {
            var e = this;
            return (
              !!e.autoplay.running &&
              void 0 !== e.autoplay.timeout &&
              (e.autoplay.timeout &&
                (clearTimeout(e.autoplay.timeout),
                (e.autoplay.timeout = void 0)),
              (e.autoplay.running = !1),
              e.emit("autoplayStop"),
              !0)
            );
          },
          pause: function(e) {
            var t = this;
            t.autoplay.running &&
              (t.autoplay.paused ||
                (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                (t.autoplay.paused = !0),
                0 !== e && t.params.autoplay.waitForTransition
                  ? (t.$wrapperEl[0].addEventListener(
                      "transitionend",
                      t.autoplay.onTransitionEnd
                    ),
                    t.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      t.autoplay.onTransitionEnd
                    ))
                  : ((t.autoplay.paused = !1), t.autoplay.run())));
          }
        },
        K = {
          setTranslate: function() {
            for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
              var a = e.slides.eq(i),
                n = -a[0].swiperSlideOffset;
              e.params.virtualTranslate || (n -= e.translate);
              var s = 0;
              e.isHorizontal() || ((s = n), (n = 0));
              var r = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(a[0].progress), 0)
                : 1 + Math.min(Math.max(a[0].progress, -1), 0);
              a.css({ opacity: r }).transform(
                "translate3d(" + n + "px, " + s + "px, 0px)"
              );
            }
          },
          setTransition: function(e) {
            var t = this,
              i = t.slides,
              a = t.$wrapperEl;
            if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
              var n = !1;
              i.transitionEnd(function() {
                if (!n && t && !t.destroyed) {
                  (n = !0), (t.animating = !1);
                  for (
                    var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                    i < e.length;
                    i += 1
                  )
                    a.trigger(e[i]);
                }
              });
            }
          }
        },
        J = {
          setTranslate: function() {
            var t,
              i = this,
              a = i.$el,
              n = i.$wrapperEl,
              s = i.slides,
              r = i.width,
              o = i.height,
              l = i.rtlTranslate,
              d = i.size,
              c = i.params.cubeEffect,
              u = i.isHorizontal(),
              p = i.virtual && i.params.virtual.enabled,
              h = 0;
            c.shadow &&
              (u
                ? (0 === (t = n.find(".swiper-cube-shadow")).length &&
                    ((t = e('<div class="swiper-cube-shadow"></div>')),
                    n.append(t)),
                  t.css({ height: r + "px" }))
                : 0 === (t = a.find(".swiper-cube-shadow")).length &&
                  ((t = e('<div class="swiper-cube-shadow"></div>')),
                  a.append(t)));
            for (var f = 0; f < s.length; f += 1) {
              var v = s.eq(f),
                m = f;
              p && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
              var g = 90 * m,
                w = Math.floor(g / 360);
              l && ((g = -g), (w = Math.floor(-g / 360)));
              var y = Math.max(Math.min(v[0].progress, 1), -1),
                b = 0,
                x = 0,
                E = 0;
              m % 4 == 0
                ? ((b = 4 * -w * d), (E = 0))
                : (m - 1) % 4 == 0
                ? ((b = 0), (E = 4 * -w * d))
                : (m - 2) % 4 == 0
                ? ((b = d + 4 * w * d), (E = d))
                : (m - 3) % 4 == 0 && ((b = -d), (E = 3 * d + 4 * d * w)),
                l && (b = -b),
                u || ((x = b), (b = 0));
              var T =
                "rotateX(" +
                (u ? 0 : -g) +
                "deg) rotateY(" +
                (u ? g : 0) +
                "deg) translate3d(" +
                b +
                "px, " +
                x +
                "px, " +
                E +
                "px)";
              if (
                (y <= 1 &&
                  -1 < y &&
                  ((h = 90 * m + 90 * y), l && (h = 90 * -m - 90 * y)),
                v.transform(T),
                c.slideShadows)
              ) {
                var C = u
                    ? v.find(".swiper-slide-shadow-left")
                    : v.find(".swiper-slide-shadow-top"),
                  k = u
                    ? v.find(".swiper-slide-shadow-right")
                    : v.find(".swiper-slide-shadow-bottom");
                0 === C.length &&
                  ((C = e(
                    '<div class="swiper-slide-shadow-' +
                      (u ? "left" : "top") +
                      '"></div>'
                  )),
                  v.append(C)),
                  0 === k.length &&
                    ((k = e(
                      '<div class="swiper-slide-shadow-' +
                        (u ? "right" : "bottom") +
                        '"></div>'
                    )),
                    v.append(k)),
                  C.length && (C[0].style.opacity = Math.max(-y, 0)),
                  k.length && (k[0].style.opacity = Math.max(y, 0));
              }
            }
            if (
              (n.css({
                "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                "transform-origin": "50% 50% -" + d / 2 + "px"
              }),
              c.shadow)
            )
              if (u)
                t.transform(
                  "translate3d(0px, " +
                    (r / 2 + c.shadowOffset) +
                    "px, " +
                    -r / 2 +
                    "px) rotateX(90deg) rotateZ(0deg) scale(" +
                    c.shadowScale +
                    ")"
                );
              else {
                var $ = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                  M =
                    1.5 -
                    (Math.sin((2 * $ * Math.PI) / 360) / 2 +
                      Math.cos((2 * $ * Math.PI) / 360) / 2),
                  P = c.shadowScale,
                  z = c.shadowScale / M,
                  I = c.shadowOffset;
                t.transform(
                  "scale3d(" +
                    P +
                    ", 1, " +
                    z +
                    ") translate3d(0px, " +
                    (o / 2 + I) +
                    "px, " +
                    -o / 2 / z +
                    "px) rotateX(-90deg)"
                );
              }
            var L = S.isSafari || S.isUiWebView ? -d / 2 : 0;
            n.transform(
              "translate3d(0px,0," +
                L +
                "px) rotateX(" +
                (i.isHorizontal() ? 0 : h) +
                "deg) rotateY(" +
                (i.isHorizontal() ? -h : 0) +
                "deg)"
            );
          },
          setTransition: function(e) {
            var t = this.$el;
            this.slides
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              this.params.cubeEffect.shadow &&
                !this.isHorizontal() &&
                t.find(".swiper-cube-shadow").transition(e);
          }
        },
        ee = {
          setTranslate: function() {
            for (
              var t = this, i = t.slides, a = t.rtlTranslate, n = 0;
              n < i.length;
              n += 1
            ) {
              var s = i.eq(n),
                r = s[0].progress;
              t.params.flipEffect.limitRotation &&
                (r = Math.max(Math.min(s[0].progress, 1), -1));
              var o = -180 * r,
                l = 0,
                d = -s[0].swiperSlideOffset,
                c = 0;
              if (
                (t.isHorizontal()
                  ? a && (o = -o)
                  : ((c = d), (l = -o), (o = d = 0)),
                (s[0].style.zIndex = -Math.abs(Math.round(r)) + i.length),
                t.params.flipEffect.slideShadows)
              ) {
                var u = t.isHorizontal()
                    ? s.find(".swiper-slide-shadow-left")
                    : s.find(".swiper-slide-shadow-top"),
                  p = t.isHorizontal()
                    ? s.find(".swiper-slide-shadow-right")
                    : s.find(".swiper-slide-shadow-bottom");
                0 === u.length &&
                  ((u = e(
                    '<div class="swiper-slide-shadow-' +
                      (t.isHorizontal() ? "left" : "top") +
                      '"></div>'
                  )),
                  s.append(u)),
                  0 === p.length &&
                    ((p = e(
                      '<div class="swiper-slide-shadow-' +
                        (t.isHorizontal() ? "right" : "bottom") +
                        '"></div>'
                    )),
                    s.append(p)),
                  u.length && (u[0].style.opacity = Math.max(-r, 0)),
                  p.length && (p[0].style.opacity = Math.max(r, 0));
              }
              s.transform(
                "translate3d(" +
                  d +
                  "px, " +
                  c +
                  "px, 0px) rotateX(" +
                  l +
                  "deg) rotateY(" +
                  o +
                  "deg)"
              );
            }
          },
          setTransition: function(e) {
            var t = this,
              i = t.slides,
              a = t.activeIndex,
              n = t.$wrapperEl;
            if (
              (i
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
              t.params.virtualTranslate && 0 !== e)
            ) {
              var s = !1;
              i.eq(a).transitionEnd(function() {
                if (!s && t && !t.destroyed) {
                  (s = !0), (t.animating = !1);
                  for (
                    var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                    i < e.length;
                    i += 1
                  )
                    n.trigger(e[i]);
                }
              });
            }
          }
        },
        te = {
          setTranslate: function() {
            for (
              var t = this,
                i = t.width,
                a = t.height,
                n = t.slides,
                s = t.$wrapperEl,
                r = t.slidesSizesGrid,
                o = t.params.coverflowEffect,
                l = t.isHorizontal(),
                d = t.translate,
                c = l ? i / 2 - d : a / 2 - d,
                p = l ? o.rotate : -o.rotate,
                h = o.depth,
                f = 0,
                v = n.length;
              f < v;
              f += 1
            ) {
              var m = n.eq(f),
                g = r[f],
                w = ((c - m[0].swiperSlideOffset - g / 2) / g) * o.modifier,
                y = l ? p * w : 0,
                b = l ? 0 : p * w,
                x = -h * Math.abs(w),
                E = l ? 0 : o.stretch * w,
                T = l ? o.stretch * w : 0;
              Math.abs(T) < 0.001 && (T = 0),
                Math.abs(E) < 0.001 && (E = 0),
                Math.abs(x) < 0.001 && (x = 0),
                Math.abs(y) < 0.001 && (y = 0),
                Math.abs(b) < 0.001 && (b = 0);
              var C =
                "translate3d(" +
                T +
                "px," +
                E +
                "px," +
                x +
                "px)  rotateX(" +
                b +
                "deg) rotateY(" +
                y +
                "deg)";
              if (
                (m.transform(C),
                (m[0].style.zIndex = 1 - Math.abs(Math.round(w))),
                o.slideShadows)
              ) {
                var S = l
                    ? m.find(".swiper-slide-shadow-left")
                    : m.find(".swiper-slide-shadow-top"),
                  k = l
                    ? m.find(".swiper-slide-shadow-right")
                    : m.find(".swiper-slide-shadow-bottom");
                0 === S.length &&
                  ((S = e(
                    '<div class="swiper-slide-shadow-' +
                      (l ? "left" : "top") +
                      '"></div>'
                  )),
                  m.append(S)),
                  0 === k.length &&
                    ((k = e(
                      '<div class="swiper-slide-shadow-' +
                        (l ? "right" : "bottom") +
                        '"></div>'
                    )),
                    m.append(k)),
                  S.length && (S[0].style.opacity = 0 < w ? w : 0),
                  k.length && (k[0].style.opacity = 0 < -w ? -w : 0);
              }
            }
            (u.pointerEvents || u.prefixedPointerEvents) &&
              (s[0].style.perspectiveOrigin = c + "px 50%");
          },
          setTransition: function(e) {
            this.slides
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e);
          }
        },
        ie = {
          init: function() {
            var e = this,
              t = e.params.thumbs,
              i = e.constructor;
            t.swiper instanceof i
              ? ((e.thumbs.swiper = t.swiper),
                c.extend(e.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
                }),
                c.extend(e.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1
                }))
              : c.isObject(t.swiper) &&
                ((e.thumbs.swiper = new i(
                  c.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                  })
                )),
                (e.thumbs.swiperCreated = !0)),
              e.thumbs.swiper.$el.addClass(
                e.params.thumbs.thumbsContainerClass
              ),
              e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
          },
          onThumbClick: function() {
            var t = this,
              i = t.thumbs.swiper;
            if (i) {
              var a = i.clickedIndex,
                n = i.clickedSlide;
              if (
                !(
                  (n && e(n).hasClass(t.params.thumbs.slideThumbActiveClass)) ||
                  null == a
                )
              ) {
                var s;
                if (
                  ((s = i.params.loop
                    ? parseInt(
                        e(i.clickedSlide).attr("data-swiper-slide-index"),
                        10
                      )
                    : a),
                  t.params.loop)
                ) {
                  var r = t.activeIndex;
                  t.slides.eq(r).hasClass(t.params.slideDuplicateClass) &&
                    (t.loopFix(),
                    (t._clientLeft = t.$wrapperEl[0].clientLeft),
                    (r = t.activeIndex));
                  var o = t.slides
                      .eq(r)
                      .prevAll('[data-swiper-slide-index="' + s + '"]')
                      .eq(0)
                      .index(),
                    l = t.slides
                      .eq(r)
                      .nextAll('[data-swiper-slide-index="' + s + '"]')
                      .eq(0)
                      .index();
                  s =
                    void 0 === o ? l : void 0 === l ? o : l - r < r - o ? l : o;
                }
                t.slideTo(s);
              }
            }
          },
          update: function(e) {
            var t = this,
              i = t.thumbs.swiper;
            if (i) {
              var a =
                "auto" === i.params.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : i.params.slidesPerView;
              if (t.realIndex !== i.realIndex) {
                var n,
                  s = i.activeIndex;
                if (i.params.loop) {
                  i.slides.eq(s).hasClass(i.params.slideDuplicateClass) &&
                    (i.loopFix(),
                    (i._clientLeft = i.$wrapperEl[0].clientLeft),
                    (s = i.activeIndex));
                  var r = i.slides
                      .eq(s)
                      .prevAll(
                        '[data-swiper-slide-index="' + t.realIndex + '"]'
                      )
                      .eq(0)
                      .index(),
                    o = i.slides
                      .eq(s)
                      .nextAll(
                        '[data-swiper-slide-index="' + t.realIndex + '"]'
                      )
                      .eq(0)
                      .index();
                  n =
                    void 0 === r
                      ? o
                      : void 0 === o
                      ? r
                      : o - s == s - r
                      ? s
                      : o - s < s - r
                      ? o
                      : r;
                } else n = t.realIndex;
                i.visibleSlidesIndexes.indexOf(n) < 0 &&
                  (i.params.centeredSlides
                    ? (n =
                        s < n
                          ? n - Math.floor(a / 2) + 1
                          : n + Math.floor(a / 2) - 1)
                    : s < n && (n = n - a + 1),
                  i.slideTo(n, e ? 0 : void 0));
              }
              var l = 1,
                d = t.params.thumbs.slideThumbActiveClass;
              if (
                (1 < t.params.slidesPerView &&
                  !t.params.centeredSlides &&
                  (l = t.params.slidesPerView),
                i.slides.removeClass(d),
                i.params.loop)
              )
                for (var c = 0; c < l; c += 1)
                  i.$wrapperEl
                    .children(
                      '[data-swiper-slide-index="' + (t.realIndex + c) + '"]'
                    )
                    .addClass(d);
              else
                for (var u = 0; u < l; u += 1)
                  i.slides.eq(t.realIndex + u).addClass(d);
            }
          }
        },
        ae = [
          z,
          I,
          L,
          D,
          A,
          N,
          B,
          {
            name: "mousewheel",
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
              }
            },
            create: function() {
              var e = this;
              c.extend(e, {
                mousewheel: {
                  enabled: !1,
                  enable: H.enable.bind(e),
                  disable: H.disable.bind(e),
                  handle: H.handle.bind(e),
                  handleMouseEnter: H.handleMouseEnter.bind(e),
                  handleMouseLeave: H.handleMouseLeave.bind(e),
                  lastScrollTime: c.now()
                }
              });
            },
            on: {
              init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable();
              },
              destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable();
              }
            }
          },
          {
            name: "navigation",
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
              }
            },
            create: function() {
              var e = this;
              c.extend(e, {
                navigation: {
                  init: X.init.bind(e),
                  update: X.update.bind(e),
                  destroy: X.destroy.bind(e),
                  onNextClick: X.onNextClick.bind(e),
                  onPrevClick: X.onPrevClick.bind(e)
                }
              });
            },
            on: {
              init: function() {
                this.navigation.init(), this.navigation.update();
              },
              toEdge: function() {
                this.navigation.update();
              },
              fromEdge: function() {
                this.navigation.update();
              },
              destroy: function() {
                this.navigation.destroy();
              },
              click: function(t) {
                var i = this.navigation,
                  a = i.$nextEl,
                  n = i.$prevEl;
                !this.params.navigation.hideOnClick ||
                  e(t.target).is(n) ||
                  e(t.target).is(a) ||
                  (a && a.toggleClass(this.params.navigation.hiddenClass),
                  n && n.toggleClass(this.params.navigation.hiddenClass));
              }
            }
          },
          {
            name: "pagination",
            params: {
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                  return e;
                },
                formatFractionTotal: function(e) {
                  return e;
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass:
                  "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
              }
            },
            create: function() {
              var e = this;
              c.extend(e, {
                pagination: {
                  init: V.init.bind(e),
                  render: V.render.bind(e),
                  update: V.update.bind(e),
                  destroy: V.destroy.bind(e),
                  dynamicBulletIndex: 0
                }
              });
            },
            on: {
              init: function() {
                this.pagination.init(),
                  this.pagination.render(),
                  this.pagination.update();
              },
              activeIndexChange: function() {
                this.params.loop
                  ? this.pagination.update()
                  : void 0 === this.snapIndex && this.pagination.update();
              },
              snapIndexChange: function() {
                this.params.loop || this.pagination.update();
              },
              slidesLengthChange: function() {
                this.params.loop &&
                  (this.pagination.render(), this.pagination.update());
              },
              snapGridLengthChange: function() {
                this.params.loop ||
                  (this.pagination.render(), this.pagination.update());
              },
              destroy: function() {
                this.pagination.destroy();
              },
              click: function(t) {
                var i = this;
                i.params.pagination.el &&
                  i.params.pagination.hideOnClick &&
                  0 < i.pagination.$el.length &&
                  !e(t.target).hasClass(i.params.pagination.bulletClass) &&
                  i.pagination.$el.toggleClass(i.params.pagination.hiddenClass);
              }
            }
          },
          {
            name: "scrollbar",
            params: {
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
              }
            },
            create: function() {
              var e = this;
              c.extend(e, {
                scrollbar: {
                  init: G.init.bind(e),
                  destroy: G.destroy.bind(e),
                  updateSize: G.updateSize.bind(e),
                  setTranslate: G.setTranslate.bind(e),
                  setTransition: G.setTransition.bind(e),
                  enableDraggable: G.enableDraggable.bind(e),
                  disableDraggable: G.disableDraggable.bind(e),
                  setDragPosition: G.setDragPosition.bind(e),
                  onDragStart: G.onDragStart.bind(e),
                  onDragMove: G.onDragMove.bind(e),
                  onDragEnd: G.onDragEnd.bind(e),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null
                }
              });
            },
            on: {
              init: function() {
                this.scrollbar.init(),
                  this.scrollbar.updateSize(),
                  this.scrollbar.setTranslate();
              },
              update: function() {
                this.scrollbar.updateSize();
              },
              resize: function() {
                this.scrollbar.updateSize();
              },
              observerUpdate: function() {
                this.scrollbar.updateSize();
              },
              setTranslate: function() {
                this.scrollbar.setTranslate();
              },
              setTransition: function(e) {
                this.scrollbar.setTransition(e);
              },
              destroy: function() {
                this.scrollbar.destroy();
              }
            }
          },
          {
            name: "parallax",
            params: { parallax: { enabled: !1 } },
            create: function() {
              c.extend(this, {
                parallax: {
                  setTransform: F.setTransform.bind(this),
                  setTranslate: F.setTranslate.bind(this),
                  setTransition: F.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function() {
                this.params.parallax.enabled &&
                  ((this.params.watchSlidesProgress = !0),
                  (this.originalParams.watchSlidesProgress = !0));
              },
              init: function() {
                this.params.parallax && this.parallax.setTranslate();
              },
              setTranslate: function() {
                this.params.parallax && this.parallax.setTranslate();
              },
              setTransition: function(e) {
                this.params.parallax && this.parallax.setTransition(e);
              }
            }
          },
          {
            name: "zoom",
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
              }
            },
            create: function() {
              var e = this,
                t = {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                  },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                  },
                  velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                  }
                };
              "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                .split(" ")
                .forEach(function(i) {
                  t[i] = Y[i].bind(e);
                }),
                c.extend(e, { zoom: t });
              var i = 1;
              Object.defineProperty(e.zoom, "scale", {
                get: function() {
                  return i;
                },
                set: function(t) {
                  if (i !== t) {
                    var a = e.zoom.gesture.$imageEl
                        ? e.zoom.gesture.$imageEl[0]
                        : void 0,
                      n = e.zoom.gesture.$slideEl
                        ? e.zoom.gesture.$slideEl[0]
                        : void 0;
                    e.emit("zoomChange", t, a, n);
                  }
                  i = t;
                }
              });
            },
            on: {
              init: function() {
                this.params.zoom.enabled && this.zoom.enable();
              },
              destroy: function() {
                this.zoom.disable();
              },
              touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e);
              },
              touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e);
              },
              doubleTap: function(e) {
                this.params.zoom.enabled &&
                  this.zoom.enabled &&
                  this.params.zoom.toggle &&
                  this.zoom.toggle(e);
              },
              transitionEnd: function() {
                this.zoom.enabled &&
                  this.params.zoom.enabled &&
                  this.zoom.onTransitionEnd();
              }
            }
          },
          {
            name: "lazy",
            params: {
              lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
              }
            },
            create: function() {
              c.extend(this, {
                lazy: {
                  initialImageLoaded: !1,
                  load: R.load.bind(this),
                  loadInSlide: R.loadInSlide.bind(this)
                }
              });
            },
            on: {
              beforeInit: function() {
                this.params.lazy.enabled &&
                  this.params.preloadImages &&
                  (this.params.preloadImages = !1);
              },
              init: function() {
                this.params.lazy.enabled &&
                  !this.params.loop &&
                  0 === this.params.initialSlide &&
                  this.lazy.load();
              },
              scroll: function() {
                this.params.freeMode &&
                  !this.params.freeModeSticky &&
                  this.lazy.load();
              },
              resize: function() {
                this.params.lazy.enabled && this.lazy.load();
              },
              scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load();
              },
              transitionStart: function() {
                var e = this;
                e.params.lazy.enabled &&
                  (e.params.lazy.loadOnTransitionStart ||
                    (!e.params.lazy.loadOnTransitionStart &&
                      !e.lazy.initialImageLoaded)) &&
                  e.lazy.load();
              },
              transitionEnd: function() {
                this.params.lazy.enabled &&
                  !this.params.lazy.loadOnTransitionStart &&
                  this.lazy.load();
              }
            }
          },
          {
            name: "controller",
            params: {
              controller: { control: void 0, inverse: !1, by: "slide" }
            },
            create: function() {
              var e = this;
              c.extend(e, {
                controller: {
                  control: e.params.controller.control,
                  getInterpolateFunction: q.getInterpolateFunction.bind(e),
                  setTranslate: q.setTranslate.bind(e),
                  setTransition: q.setTransition.bind(e)
                }
              });
            },
            on: {
              update: function() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              resize: function() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              observerUpdate: function() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t);
              },
              setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t);
              }
            }
          },
          {
            name: "a11y",
            params: {
              a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
              }
            },
            create: function() {
              var t = this;
              c.extend(t, {
                a11y: {
                  liveRegion: e(
                    '<span class="' +
                      t.params.a11y.notificationClass +
                      '" aria-live="assertive" aria-atomic="true"></span>'
                  )
                }
              }),
                Object.keys(W).forEach(function(e) {
                  t.a11y[e] = W[e].bind(t);
                });
            },
            on: {
              init: function() {
                this.params.a11y.enabled &&
                  (this.a11y.init(), this.a11y.updateNavigation());
              },
              toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination();
              },
              destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy();
              }
            }
          },
          {
            name: "history",
            params: {
              history: { enabled: !1, replaceState: !1, key: "slides" }
            },
            create: function() {
              var e = this;
              c.extend(e, {
                history: {
                  init: U.init.bind(e),
                  setHistory: U.setHistory.bind(e),
                  setHistoryPopState: U.setHistoryPopState.bind(e),
                  scrollToSlide: U.scrollToSlide.bind(e),
                  destroy: U.destroy.bind(e)
                }
              });
            },
            on: {
              init: function() {
                this.params.history.enabled && this.history.init();
              },
              destroy: function() {
                this.params.history.enabled && this.history.destroy();
              },
              transitionEnd: function() {
                this.history.initialized &&
                  this.history.setHistory(
                    this.params.history.key,
                    this.activeIndex
                  );
              }
            }
          },
          {
            name: "hash-navigation",
            params: {
              hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 }
            },
            create: function() {
              var e = this;
              c.extend(e, {
                hashNavigation: {
                  initialized: !1,
                  init: Q.init.bind(e),
                  destroy: Q.destroy.bind(e),
                  setHash: Q.setHash.bind(e),
                  onHashCange: Q.onHashCange.bind(e)
                }
              });
            },
            on: {
              init: function() {
                this.params.hashNavigation.enabled &&
                  this.hashNavigation.init();
              },
              destroy: function() {
                this.params.hashNavigation.enabled &&
                  this.hashNavigation.destroy();
              },
              transitionEnd: function() {
                this.hashNavigation.initialized &&
                  this.hashNavigation.setHash();
              }
            }
          },
          {
            name: "autoplay",
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
              }
            },
            create: function() {
              var e = this;
              c.extend(e, {
                autoplay: {
                  running: !1,
                  paused: !1,
                  run: Z.run.bind(e),
                  start: Z.start.bind(e),
                  stop: Z.stop.bind(e),
                  pause: Z.pause.bind(e),
                  onTransitionEnd: function(t) {
                    e &&
                      !e.destroyed &&
                      e.$wrapperEl &&
                      t.target === this &&
                      (e.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        e.autoplay.onTransitionEnd
                      ),
                      e.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        e.autoplay.onTransitionEnd
                      ),
                      (e.autoplay.paused = !1),
                      e.autoplay.running
                        ? e.autoplay.run()
                        : e.autoplay.stop());
                  }
                }
              });
            },
            on: {
              init: function() {
                this.params.autoplay.enabled && this.autoplay.start();
              },
              beforeTransitionStart: function(e, t) {
                this.autoplay.running &&
                  (t || !this.params.autoplay.disableOnInteraction
                    ? this.autoplay.pause(e)
                    : this.autoplay.stop());
              },
              sliderFirstMove: function() {
                this.autoplay.running &&
                  (this.params.autoplay.disableOnInteraction
                    ? this.autoplay.stop()
                    : this.autoplay.pause());
              },
              destroy: function() {
                this.autoplay.running && this.autoplay.stop();
              }
            }
          },
          {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function() {
              c.extend(this, {
                fadeEffect: {
                  setTranslate: K.setTranslate.bind(this),
                  setTransition: K.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function() {
                var e = this;
                if ("fade" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "fade");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                  };
                  c.extend(e.params, t), c.extend(e.originalParams, t);
                }
              },
              setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate();
              },
              setTransition: function(e) {
                "fade" === this.params.effect &&
                  this.fadeEffect.setTransition(e);
              }
            }
          },
          {
            name: "effect-cube",
            params: {
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94
              }
            },
            create: function() {
              c.extend(this, {
                cubeEffect: {
                  setTranslate: J.setTranslate.bind(this),
                  setTransition: J.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function() {
                var e = this;
                if ("cube" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                  };
                  c.extend(e.params, t), c.extend(e.originalParams, t);
                }
              },
              setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate();
              },
              setTransition: function(e) {
                "cube" === this.params.effect &&
                  this.cubeEffect.setTransition(e);
              }
            }
          },
          {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function() {
              c.extend(this, {
                flipEffect: {
                  setTranslate: ee.setTranslate.bind(this),
                  setTransition: ee.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function() {
                var e = this;
                if ("flip" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                  };
                  c.extend(e.params, t), c.extend(e.originalParams, t);
                }
              },
              setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate();
              },
              setTransition: function(e) {
                "flip" === this.params.effect &&
                  this.flipEffect.setTransition(e);
              }
            }
          },
          {
            name: "effect-coverflow",
            params: {
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
              }
            },
            create: function() {
              c.extend(this, {
                coverflowEffect: {
                  setTranslate: te.setTranslate.bind(this),
                  setTransition: te.setTransition.bind(this)
                }
              });
            },
            on: {
              beforeInit: function() {
                var e = this;
                "coverflow" === e.params.effect &&
                  (e.classNames.push(
                    e.params.containerModifierClass + "coverflow"
                  ),
                  e.classNames.push(e.params.containerModifierClass + "3d"),
                  (e.params.watchSlidesProgress = !0),
                  (e.originalParams.watchSlidesProgress = !0));
              },
              setTranslate: function() {
                "coverflow" === this.params.effect &&
                  this.coverflowEffect.setTranslate();
              },
              setTransition: function(e) {
                "coverflow" === this.params.effect &&
                  this.coverflowEffect.setTransition(e);
              }
            }
          },
          {
            name: "thumbs",
            params: {
              thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
              }
            },
            create: function() {
              c.extend(this, {
                thumbs: {
                  swiper: null,
                  init: ie.init.bind(this),
                  update: ie.update.bind(this),
                  onThumbClick: ie.onThumbClick.bind(this)
                }
              });
            },
            on: {
              beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
              },
              slideChange: function() {
                this.thumbs.swiper && this.thumbs.update();
              },
              update: function() {
                this.thumbs.swiper && this.thumbs.update();
              },
              resize: function() {
                this.thumbs.swiper && this.thumbs.update();
              },
              observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update();
              },
              setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e);
              },
              beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy();
              }
            }
          }
        ];
      return (
        void 0 === P.use &&
          ((P.use = P.Class.use), (P.installModule = P.Class.installModule)),
        P.use(ae),
        P
      );
    });
  },
  function(e, t) {},
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, i) {
    "use strict";
    i(5), i(106), i(6);
    i(63);
    i(64), i(107).init();
    var a = i(109),
      n = (new a(), i(3)),
      s = {
        el: $(".user_figure"),
        key: "news_global",
        page: "body",
        callback: function() {}
      };
    i(112).init();
    var r = new n(s);
    $(".zy_comment").click(function() {
      userInfo
        ? $("#cmnt_reply_container").removeClass("hide")
        : r.showPopLogin();
    }),
      $(".user_center").click(function(e) {
        if (!userInfo)
          return r.showPopLogin(), e.preventDefault(), e.stopPropagation(), !1;
      }),
      getUserInfo(function(e) {
        e.uid &&
          (e.userface,
          $(".user_figure").css("background-image", "url(" + e.userface + ")"));
      });
    var o = i(42),
      l = {};
    l = "undefined" != typeof wxShare ? wxShare : {};
    var d = i(45),
      c = { maskClass: "share_fullpage" };
    d.build(c), i(113).init();
    var u = i(13);
    window.onload = function() {
      var e = i(1);
      if (!e.QQ && e.SAFARI) {
        $("body").append(
          '<div id="add-box"><div id="add-home"><div id="close-home"></div></div></div>'
        ),
          $("#close-home").on("click", function() {
            $("#add-box").remove();
          });
        var t = setTimeout(function() {
            clearTimeout(t),
              $("#add-box").css({ bottom: 8 }),
              $(window).on("touchstart click", function() {
                $("#add-box").css({ bottom: -$("#add-box").height() });
              });
          }, 1e3),
          a = setTimeout(function() {
            clearTimeout(a),
              $("#add-box").css({ bottom: -$("#add-box").height() });
          }, 6e3);
      }
      $(".news_left .left_title")
        .eq(0)
        .text() &&
        ((document.title = $(".news_left .left_title")
          .eq(0)
          .text()),
        (wxShare.title = document.title)),
        u.init(wxShare);
      new o(l);
      "serviceWorker" in navigator &&
        navigator.serviceWorker.register("/sw.js").then(function(e) {
          console.log("service worker 注册成功!");
        });
    };
  },
  function(e, t) {},
  function(e, t, i) {
    "use strict";
    e.exports = {
      init: function() {
        var e = this;
        $.ajax({
          url: "//interface.sina.cn/news/piyao.scrollbar.d.json",
          type: "GET",
          dataType: "jsonp",
          success: function(t) {
            if (0 == t.status.code) {
              var a = i(108),
                n = a({ Data: t.data });
              $("#run_container").html(n), e.swiperAdd();
            }
          },
          error: function() {
            $("#run_container").html("数据加载失败，请刷新页面重试");
          }
        });
      },
      swiperAdd: function() {
        var e = i(63);
        i(64);
        new e(".swiper-container", {
          direction: "vertical",
          autoplay: {
            delay: 4e3,
            stopOnLastSlide: !1,
            disableOnInteraction: !0
          },
          loop: !0
        });
      }
    };
  },
  function(e, t, i) {
    var a = i(0);
    e.exports = a("pages/js/mods/hot/tpl/hot-text", function(e, t) {
      "use strict";
      var i = this,
        a = (i.$helpers, i.$each),
        n = e.Data,
        s = (e.$values, e.i, i.$escape),
        r = "";
      return (
        a(n, function(e, t) {
          (r += ' <div class="run_text swiper-slide"> <a href="'),
            (r += s(e.link.url)),
            (r += '"> '),
            (r += s(e.link.title)),
            (r += " </a> </div> ");
        }),
        new String(r)
      );
    });
  },
  function(e, t, i) {
    "use strict";
    var a = i(19),
      n = function() {
        this.init();
      };
    (n.prototype = {
      init: function() {
        var e = this;
        e.loadData({ len: 10 }, function() {
          $(window).on("scroll", function() {
            var t =
              $(".zy_day li")
                .last()
                .offset().top -
                $(window).scrollTop() <
              $(window).height();
            e.loading ||
              !t ||
              e.alloaded ||
              e.loadmore({ len: 10, ptime: e.ptime });
          });
        });
      },
      getDianzan: function(e, t) {
        $.ajax({
          url: "http://comment5.news.sina.com.cn/count/info",
          type: "GET",
          dataType: "jsonp",
          data: { pid: 0, key: e },
          success: function(e) {
            if (0 == e.result.status.code) {
              var i = e.result.data.sum || 0;
              t.text(i);
            }
          },
          error: function() {}
        });
      },
      loadmore: function(e) {
        this.loadData(e);
      },
      ptime: "",
      last_day: "",
      loading: !1,
      alloaded: !1,
      loadData: function(e, t) {
        var n = this;
        $(".loader").show(), (n.loading = !0);
        $.ajax({
          url: "http://piyao.sina.cn/api/list/group",
          type: "GET",
          dataType: "jsonp",
          data: e,
          success: function(e) {
            if (0 == e.result.status.code) {
              var s = e.result.data;
              for (var r in s) n.ptime = s[r][s[r].length - 1].ptime;
              0 == s.length && $(window).unbind("scroll"),
                (n.loading = !1),
                $(".loader").hide();
              var o = e.result.data,
                l = i(110),
                d = i(111),
                c = e.result.cmnt.count;
              c && Object.keys(c).length < 10 && (n.alloaded = !0);
              for (var r in o) {
                if (
                  (o[r].forEach(function(e) {
                    e.img = a(e.img);
                  }),
                  r == n.last_day)
                ) {
                  var u = d({ Data: o[r], key: r, cmnt: c });
                  $(".zy_day")
                    .last()
                    .find("ul")
                    .append(u);
                } else {
                  var u = l({ Data: o[r], key: r, cmnt: c });
                  $(".feedItem").append(u);
                }
                n.last_day = r;
              }
              $(".like_text1").each(function() {
                var e = $(this);
                n.getDianzan("piyao_" + e.data("articleid"), e),
                  e.removeClass("like_text1");
              }),
                t && t();
            }
          },
          error: function() {}
        });
      }
    }),
      (e.exports = n);
  },
  function(e, t, i) {
    var a = i(0);
    e.exports = a("pages/js/mods/feedItem/tpl/item", function(e, t) {
      "use strict";
      var i = this,
        a = (i.$helpers, i.$escape),
        n = e.key,
        s = i.$each,
        r = e.Data,
        o = (e.$values, e.i, e.cmnt),
        l = "";
      return (
        (l += '<div class="zy_day"> <div class="day_date"> '),
        (l += a(n)),
        (l +=
          ' </div> <div class="day_blank"> </div> <ul data-sudaclick="feed"> '),
        s(r, function(e, t) {
          (l += ' <li class="day_news"> <a href="'),
            (l += a(e.url)),
            (l += '"> <div class="news_left"> <div class="left_title"> '),
            (l += a(e.title)),
            (l +=
              ' </div> <div class="left_btns"> <div class="left_comment"></div> <div class="comment_text">'),
            (l += a(
              o[e.commentid].show < 40
                ? o[e.commentid].show
                : o[e.commentid].total
            )),
            (l +=
              '</div> <div class="left_like"></div> <div class="like_text like_text1" data-articleId="'),
            (l += a(e.article_id)),
            (l +=
              '">--</div> </div> </div> <div class="news_right"> <img src="'),
            (l += a(e.img)),
            (l += '" alt=""> </div> </a> </li> ');
        }),
        (l += " </ul> </div> "),
        new String(l)
      );
    });
  },
  function(e, t, i) {
    var a = i(0);
    e.exports = a("pages/js/mods/feedItem/tpl/dayIn", function(e, t) {
      "use strict";
      var i = this,
        a = (i.$helpers, i.$each),
        n = e.Data,
        s = (e.$values, e.i, i.$escape),
        r = e.cmnt,
        o = "";
      return (
        (o += " "),
        a(n, function(e, t) {
          (o += ' <li class="day_news"> <a href="'),
            (o += s(e.url)),
            (o += '"> <div class="news_left"> <div class="left_title"> '),
            (o += s(e.title)),
            (o +=
              ' </div> <div class="left_btns"> <div class="left_comment"></div> <div class="comment_text">'),
            (o += s(
              r[e.commentid].show < 40
                ? r[e.commentid].show
                : r[e.commentid].total
            )),
            (o +=
              '</div> <div class="left_like"></div> <div class="like_text like_text1" data-articleId="'),
            (o += s(e.article_id)),
            (o +=
              '">--</div> </div> </div> <div class="news_right"> <img src="'),
            (o += s(e.img)),
            (o += '" alt=""> </div> </a> </li> ');
        }),
        new String(o)
      );
    });
  },
  function(e, t, i) {
    "use strict";
    var a = i(11);
    e.exports = {
      init: function(e) {
        var t = this;
        (this.conf = {
          product: __docConfig.product || "",
          index: __docConfig.index || "",
          vcode: __docConfig.vcode || "",
          csrfcode: __docConfig.csrfcode || "",
          csrftime: __docConfig.csrftime || 1393323733,
          wburl: __docConfig.wburl || "",
          vt: __docConfig.vt || 4,
          cmntContent: "",
          towb: __docConfig.towb || ""
        }),
          (this.isSupportCmnt = !1);
        var i = function() {
          $("#cmnt_reply_container").addClass("hide"),
            $("#cmnt_input").val(""),
            $("#cmnt_send")
              .addClass("cmnt-send")
              .removeClass("cmnt-send-hl"),
            $("#cmnt_input").css("color", "#a5a5a5");
        };
        $("#cmnt_cancel").on("click", function() {
          i(),
            $("#cmnt_input")
              .attr("placeholder")
              .indexOf("回复") < 0
              ? SUDA.uaTrack(t.SUDAKEY, "body_cancel_comment_1_2")
              : SUDA.uaTrack(t.SUDAKEY, "body_cancel_reply_1_2");
        }),
          $("#cmnt_input").on("keyup input", function() {
            var e = $("#cmnt_send");
            $(this).val()
              ? (e.addClass("cmnt-send-hl").removeClass("cmnt-send"),
                $(this).css("color", "#84848A"))
              : (e.addClass("cmnt-send").removeClass("cmnt-send-hl"),
                $(this).css("color", "#a5a5a5"));
          });
        navigator.userAgent.toLowerCase(),
          $("#cmnt_reply_container .cmnt-reply"),
          $("#cmnt_reply_container .mask-layer");
        $("#cmnt_send").on("click", function(e) {
          if (t.conf.index) {
            var n = $("#cmnt_input"),
              s = n.val();
            if (s) {
              t.conf.cmntContent = s;
              var r = a.requset({
                url: "https://cmnt.sina.cn/aj/cmnt/post",
                data: t.conf,
                type: "POST",
                dataType: "json",
                xhrFields: { withCredentials: !0 },
                timeout: 3e3
              });
              (r.error = function(e) {
                var t = document.createElement("div");
                t.setAttribute("class", "cmnt-status-failure"),
                  (t.innerHTML = "<p>评论失败请重试！</p>"),
                  $("body").append(t);
                var i = setTimeout(function() {
                  $(".cmnt-status-failure").remove(), clearTimeout(i);
                }, 2e3);
              }),
                (r.success = function(e) {
                  console.log(e), i();
                  var t = document.createElement("div");
                  t.setAttribute("class", "cmnt-status-success"),
                    (t.innerHTML = "<p>评论成功！</p>"),
                    $("body").append(t);
                  var a = setTimeout(function() {
                    $(".cmnt-status-success").remove(), clearTimeout(a);
                  }, 2e3);
                });
            }
          }
        });
      }
    };
  },
  function(e, t, i) {
    "use strict";
    i(2), i(114);
    e.exports = {
      init: function() {
        var e = this;
        e.initShare(),
          e.getTotalComment(),
          e.getTotalLike(),
          e.initShare(),
          e.initLike();
      },
      initLike: function() {
        var e = this;
        $(".like_link").one("click", function(t) {
          e.liked
            ? ((e.zanNumber = e.zanNumber - 1),
              e.zanNumber < 89 && (e.zanNumber = 89))
            : ((e.zanNumber = e.zanNumber + 1),
              e.firstVote &&
                ((e.firstVote = !1),
                $.ajax({
                  url: "http://comment5.news.sina.com.cn/count/submit",
                  type: "GET",
                  data: { key: "hfhfwmu6618674", pid: 0 },
                  dataType: "jsonp",
                  success: function(e) {}
                }))),
            (e.liked = !e.liked),
            $(".like_link").toggleClass("btns_liked");
          var i = e.formatNumber(e.zanNumber);
          $(".text_like").text(i);
        });
      },
      formatNumber: function(e) {
        return e > 1e4 && ((e = (e / 1e4).toFixed(1)), (e += "w")), e;
      },
      initShare: function() {
        $(".btns_share").click(function(e) {
          $(".share_main_bg").css("display", "block"),
            $(".shr_ico").click(function(e) {
              $(".share_main_bg").css("display", "none");
            });
        }),
          $(".float_cross").click(function(e) {
            $(".share_main_bg").css("display", "none");
          }),
          document.querySelector(".share_main_bg").addEventListener(
            "touchmove",
            function(e) {
              e.preventDefault();
            },
            !1
          );
      },
      getTotalLike: function() {
        var e = this;
        $.ajax({
          url: "http://comment5.news.sina.com.cn/count/info",
          type: "GET",
          dataType: "jsonp",
          data: { key: "hfhfwmu6618674", pid: 0 },
          success: function(t) {
            if (t.result.data) {
              var i = t.result.data.sum;
              if (i) {
                e.zanNumber = e.zanNumber + 11 * i;
                var a = e.formatNumber(e.zanNumber);
                $(".text_like").text(a);
              }
            }
          }
        });
      },
      getTotalComment: function() {
        var e = this;
        $.ajax({
          url: "http://interface.sina.cn/wap_api/article_getall.d.json",
          type: "GET",
          dataType: "jsonp",
          data: {
            commentId: "gn:comos-hfhfwmu6618674",
            docID: "hfhfwmu6618674"
          },
          success: function(t) {
            if (0 == t.status) {
              var i = t.data.cmnt.total;
              i && ((i = e.formatNumber(i)), $(".text_comment").text(i));
            }
          }
        });
      },
      liked: !1,
      zanNumber: 89,
      firstVote: !0
    };
  },
  function(e, t, i) {
    "use strict";
    var a,
      n,
      s,
      r,
      o,
      l = navigator.userAgent.toLowerCase(),
      d = window.external || "",
      c = function(e) {
        var t = 0;
        try {
          t = parseFloat(
            e.replace(/\./g, function() {
              return 1 == t++ ? "" : ".";
            })
          );
        } catch (e) {}
        return t;
      };
    try {
      /windows|win32/i.test(l)
        ? (o = "windows")
        : /macintosh/i.test(l)
        ? (o = "macintosh")
        : /rhino/i.test(l)
        ? (o = "rhino")
        : /like mac os x/i.test(l)
        ? (o = "ios")
        : /android/.test(l) && (o = "android"),
        (n = l.match(/applewebkit\/([^\s]*)/)) && n[1]
          ? ((a = "webkit"), (r = c(n[1])))
          : (n = l.match(/presto\/([\d.]*)/)) && n[1]
          ? ((a = "presto"), (r = c(n[1])))
          : (n = l.match(/msie\s([^;]*)/))
          ? ((a = "trident"),
            (r = 1),
            (n = l.match(/trident\/([\d.]*)/)) && n[1] && (r = c(n[1])))
          : /gecko/.test(l) &&
            ((a = "gecko"),
            (r = 1),
            (n = l.match(/rv:([\d.]*)/)) && n[1] && (r = c(n[1]))),
        /world/.test(l)
          ? (s = "world")
          : /360se/.test(l)
          ? (s = "360")
          : /maxthon/.test(l) || "number" == typeof d.max_version
          ? (s = "maxthon")
          : /tencenttraveler\s([\d.]*)/.test(l)
          ? (s = "tt")
          : /se\s([\d.]*)/.test(l) && (s = "sogou");
    } catch (e) {}
    var u = {
      UA: l,
      OS: o,
      CORE: a,
      Version: r,
      EXTRA: s || !1,
      IE: /msie/.test(l),
      OPERA: /opera/.test(l),
      MOZ: /gecko/.test(l) && !/(compatible|webkit)/.test(l),
      IE5: /msie 5 /.test(l),
      IE55: /msie 5.5/.test(l),
      IE6: /msie 6/.test(l),
      IE7: /msie 7/.test(l),
      IE8: /msie 8/.test(l),
      IE9: /msie 9/.test(l),
      IE10: /msie 10/.test(l),
      CHROME: /(chrome|crios)\/([\d.]*)/.test(l),
      IPAD: /\(ipad/i.test(l),
      IPHONE: /\(iphone/i.test(l),
      ITOUCH: /\((itouch|ipod)/i.test(l),
      MOBILE: /mobile/i.test(l),
      WX: /MicroMessenger/i.test(l),
      UC: /UCBrowser/i.test(l),
      QQ: /QQBrowser/i.test(l),
      WB: /Weibo/i.test(l),
      SINANEWS: /sinanews/i.test(l),
      XM: /miuibrowser/i.test(l)
    };
    (u.SAFARI = !u.UC && !u.CHROME && /([\w.]*) safari/.test(l)),
      (e.exports = u);
  }
]);
