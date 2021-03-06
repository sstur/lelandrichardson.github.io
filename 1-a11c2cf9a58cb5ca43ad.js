(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    160: function(e, t, n) {
      "use strict";
      n(76), n(56), n(168);
      var i = n(158),
        a = { desktop: 992, tablet: 768, phone: 576 },
        r = Object.keys(a).reduce(function(e, t) {
          return (
            (e[t] = function() {
              return Object(i.b)(
                ["@media (max-width:", "em){", "}"],
                a[t] / 16,
                i.b.apply(void 0, arguments)
              );
            }),
            e
          );
        }, {});
      t.a = r;
    },
    161: function(e, t, n) {
      "use strict";
      var i = n(158),
        a = n(36),
        r = Object(i.c)(a.Link).withConfig({
          displayName: "styled-link__StyledLink",
          componentId: "mjb46b-0"
        })(["text-decoration:none;color:rgba(0,0,0,0.8);"]);
      t.a = r;
    },
    162: function(e, t, n) {
      "use strict";
      var i = n(167),
        a = n(0),
        r = n.n(a),
        o = n(1),
        s = n.n(o),
        l = n(169),
        c = n.n(l),
        d = n(36);
      function u(e) {
        var t = e.description,
          n = e.lang,
          a = e.meta,
          o = e.keywords,
          s = e.title;
        return r.a.createElement(d.StaticQuery, {
          query: g,
          render: function(e) {
            var i = t || e.site.siteMetadata.description;
            return r.a.createElement(c.a, {
              htmlAttributes: { lang: n },
              title: s,
              titleTemplate: "%s | " + e.site.siteMetadata.title,
              meta: [
                { name: "description", content: i },
                { property: "og:title", content: s },
                { property: "og:description", content: i },
                { property: "og:type", content: "website" },
                { name: "twitter:card", content: "summary" },
                {
                  name: "twitter:creator",
                  content: e.site.siteMetadata.author
                },
                { name: "twitter:title", content: s },
                { name: "twitter:description", content: i }
              ]
                .concat(
                  o.length > 0
                    ? { name: "keywords", content: o.join(", ") }
                    : []
                )
                .concat(a)
            });
          },
          data: i
        });
      }
      (u.defaultProps = { lang: "en", meta: [], keywords: [] }),
        (u.propTypes = {
          description: s.a.string,
          lang: s.a.string,
          meta: s.a.array,
          keywords: s.a.arrayOf(s.a.string),
          title: s.a.string.isRequired
        }),
        (t.a = u);
      var g = "1025518380";
    },
    163: function(e, t, n) {
      "use strict";
      var i = n(7),
        a = n.n(i),
        r = n(159),
        o = n.n(r),
        s = n(164),
        l = n(0),
        c = n.n(l),
        d = n(1),
        u = n.n(d),
        g = n(158),
        f = n(36),
        p = n(161),
        M = n(160),
        h = n(165),
        m = n.n(h),
        y = n(166),
        L = n.n(y);
      function N() {
        var e = o()(["\n    text-align: center;\n  "]);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      var j = g.c.nav.withConfig({
          displayName: "header__Container",
          componentId: "di30r3-0"
        })([
          "box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);height:6rem;display:flex;align-items:center;"
        ]),
        b = g.c.h1.withConfig({
          displayName: "header__Title",
          componentId: "di30r3-1"
        })(
          [
            "font-size:1.6rem;font-weight:800;letter-spacing:0.1rem;text-transform:uppercase;margin:0 auto 0 24px;",
            ""
          ],
          M.a.phone(N())
        ),
        w = g.c.img.withConfig({
          displayName: "header__Icon",
          componentId: "di30r3-2"
        })([
          "height:2.5rem;width:2.5rem;padding:1.5rem 1rem;margin-right:24px;"
        ]),
        I = function(e) {
          var t = e.title;
          return c.a.createElement(
            j,
            null,
            c.a.createElement(p.a, { to: "/" }, c.a.createElement(b, null, t)),
            c.a.createElement(
              "a",
              {
                style: { marginLeft: "auto" },
                href: "https://twitter.com/intelligibabble",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              c.a.createElement(w, { src: m.a, alt: "twitter" })
            ),
            c.a.createElement(
              "a",
              {
                href: "https://github.com/lelandrichardson",
                target: "_blank",
                rel: "noopener noreferrer"
              },
              c.a.createElement(w, { src: L.a, alt: "github" })
            )
          );
        };
      (I.defaultProps = { title: "" }), (I.propTypes = { title: u.a.string });
      var S = I;
      function z() {
        var e = o()(["\n    width: 80%;\n  "]);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = o()([
          '\n  @font-face {\n    font-family: system;\n    font-style: normal;\n    font-weight: 300;\n    src: local(\'.SFNSText-Light\'), local(\'.HelveticaNeueDeskInterface-Light\'),\n      local(\'.LucidaGrandeUI\'), local(\'Ubuntu Light\'), local(\'Segoe UI Light\'),\n      local(\'Roboto-Light\'), local(\'DroidSans\'), local(\'Tahoma\');\n  }\n\n  :root {\n    font-size: 10px;\n  }\n\n  body {\n    font-family: Verdana;\n    margin: 0;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    color: rgba(0, 0, 0, 0.8);\n    min-height: 100vh;\n    position: relative;\n    font-size: 1.9rem;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: \'Oswald\', sans-serif;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n  }\n\n  h3 {\n    font-size: 2.4rem;\n  }\n\n  h4 {\n    font-size: 1.9rem;\n  }\n  \n  code {\n    font-family: Menlo,Monaco,"Courier New",Courier,monospace;\n    word-break: break-word;\n  }\n\n  code[class*="language-"], pre[class*="language-"] {\n    line-height: 1.3;\n  }\n\n  pre code {\n    word-break: normal;\n    font-size: 1.4rem;\n  }\n\n  :not(pre) > code[class*="language-"] {\n    background-color: #eaeaea;\n    padding: .1em 0.5em;\n    border-radius: .2em;\n    color: #8a4519;\n    font-size: smaller;\n    line-height: 1.6;\n  }\n\n\n  .table {\n    width: 100%;\n    border: 1px solid #222;\n    border-spacing: 0;\n    border-collapse: collapse;\n    font-size: 1.4rem;\n  }\n\n  .table td, .table th {\n    padding: 4px;\n    vertical-align: top;\n    border-top: 1px solid #222;\n    border: 1px solid #222;\n  }\n\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #222;\n  }\n\n\n  .remark-code-title {\n    margin-bottom: -8px;\n    padding: 0.5em 1em;\n    font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;\n\n    background-color: #464646;\n    color: white;\n    z-index: 0;\n\n    border-top-left-radius: 0.3em;\n    border-top-right-radius: 0.3em;\n  }\n\n  twitter-widget {\n    margin: 10px auto;\n  }\n'
        ]);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      var A = Object(g.a)(T()),
        D = g.c.footer.withConfig({
          displayName: "layout__Footer",
          componentId: "sc-14pgzi3-0"
        })(["display:block;height:6rem;"]),
        x = g.c.div.withConfig({
          displayName: "layout__Content",
          componentId: "sc-14pgzi3-1"
        })(["width:60%;max-width:728px;margin:0 auto;", ""], M.a.tablet(z())),
        E = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            a()(t, e),
            (t.prototype.render = function() {
              var e = this.props.children;
              return c.a.createElement(f.StaticQuery, {
                query: "1044757290",
                render: function(t) {
                  return c.a.createElement(
                    c.a.Fragment,
                    null,
                    c.a.createElement(S, { title: t.site.siteMetadata.title }),
                    c.a.createElement(x, null, e),
                    c.a.createElement(D, null),
                    c.a.createElement(A, null)
                  );
                },
                data: s
              });
            }),
            t
          );
        })(l.Component);
      E.propTypes = { children: u.a.node.isRequired };
      t.a = E;
    },
    164: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: "Intelligible Babble" } } }
      };
    },
    165: function(e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNNjEyLDExNi4yNThjLTIyLjUyNSw5Ljk4MS00Ni42OTQsMTYuNzUtNzIuMDg4LDE5Ljc3MmMyNS45MjktMTUuNTI3LDQ1Ljc3Ny00MC4xNTUsNTUuMTg0LTY5LjQxMQ0KCQkJYy0yNC4zMjIsMTQuMzc5LTUxLjE2OSwyNC44Mi03OS43NzUsMzAuNDhjLTIyLjkwNy0yNC40MzctNTUuNDktMzkuNjU4LTkxLjYzLTM5LjY1OGMtNjkuMzM0LDAtMTI1LjU1MSw1Ni4yMTctMTI1LjU1MSwxMjUuNTEzDQoJCQljMCw5LjgyOCwxLjEwOSwxOS40MjcsMy4yNTEsMjguNjA2QzE5Ny4wNjUsMjA2LjMyLDEwNC41NTYsMTU2LjMzNyw0Mi42NDEsODAuMzg2Yy0xMC44MjMsMTguNTEtMTYuOTgsNDAuMDc4LTE2Ljk4LDYzLjEwMQ0KCQkJYzAsNDMuNTU5LDIyLjE4MSw4MS45OTMsNTUuODM1LDEwNC40NzljLTIwLjU3NS0wLjY4OC0zOS45MjYtNi4zNDgtNTYuODY3LTE1Ljc1NnYxLjU2OGMwLDYwLjgwNiw0My4yOTEsMTExLjU1NCwxMDAuNjkzLDEyMy4xMDQNCgkJCWMtMTAuNTE3LDIuODMtMjEuNjA3LDQuMzk4LTMzLjA4LDQuMzk4Yy04LjEwNywwLTE1Ljk0Ny0wLjgwMy0yMy42MzQtMi4zMzNjMTUuOTg1LDQ5LjkwNyw2Mi4zMzYsODYuMTk5LDExNy4yNTMsODcuMTk0DQoJCQljLTQyLjk0NywzMy42NTQtOTcuMDk5LDUzLjY1NS0xNTUuOTE2LDUzLjY1NWMtMTAuMTM0LDAtMjAuMTE2LTAuNjEyLTI5Ljk0NC0xLjcyMWM1NS41NjcsMzUuNjgxLDEyMS41MzYsNTYuNDg1LDE5Mi40MzgsNTYuNDg1DQoJCQljMjMwLjk0OCwwLDM1Ny4xODgtMTkxLjI5MSwzNTcuMTg4LTM1Ny4xODhsLTAuNDIxLTE2LjI1M0M1NzMuODcyLDE2My41MjYsNTk1LjIxMSwxNDEuNDIyLDYxMiwxMTYuMjU4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
    },
    166: function(e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTIiLz48L3N2Zz4=";
    },
    167: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: "Intelligible Babble",
              description: "Personal blog of Leland Richardson.",
              author: "Leland Richardson"
            }
          }
        }
      };
    },
    171: function(e, t, n) {
      "use strict";
      n(188), n(189);
      var i = n(159),
        a = n.n(i),
        r = n(190),
        o = n(0),
        s = n.n(o),
        l = n(158),
        c = n(36),
        d = n(191),
        u = n.n(d),
        g = n(160);
      function f() {
        var e = a()(["\n    order: 1;\n  "]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = a()(["\n    order: 2;\n  "]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = a()([
          "\n    flex-direction: column;\n    text-align: center;\n  "
        ]);
        return (
          (M = function() {
            return e;
          }),
          e
        );
      }
      var h = l.c.div.withConfig({
          displayName: "bio__Container",
          componentId: "hbzvw6-0"
        })(
          [
            "display:flex;align-items:center;justify-content:space-between;margin:5rem 0;",
            ""
          ],
          g.a.tablet(M())
        ),
        m = l.c.div.withConfig({
          displayName: "bio__TextContainer",
          componentId: "hbzvw6-1"
        })(["", ""], g.a.phone(p())),
        y = l.c.div.withConfig({
          displayName: "bio__ImageContainer",
          componentId: "hbzvw6-2"
        })(["", ""], g.a.phone(f())),
        L = l.c.h3.withConfig({
          displayName: "bio__Name",
          componentId: "hbzvw6-3"
        })([
          'font-size:2.4rem;letter-spacing:0.1rem;font-weight:800;margin-bottom:1rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-family:"system";'
        ]),
        N = l.c.sub.withConfig({
          displayName: "bio__TagLine",
          componentId: "hbzvw6-4"
        })([
          "font-weight:normal;font-size:1.6rem;margin:0;margin-right:3rem;display:block;"
        ]),
        j = "595903682";
      t.a = function() {
        return s.a.createElement(c.StaticQuery, {
          query: j,
          render: function(e) {
            var t = e.site.siteMetadata.author;
            return s.a.createElement(
              h,
              null,
              s.a.createElement(
                m,
                null,
                s.a.createElement(L, null, t),
                s.a.createElement(
                  N,
                  null,
                  "Personal blog of Leland Richardson.",
                  s.a.createElement("br", null),
                  "Software Engineer at Google working on Android. Previously Airbnb."
                )
              ),
              s.a.createElement(
                y,
                null,
                s.a.createElement(u.a, {
                  fixed: e.avatar.childImageSharp.fixed,
                  alt: t
                })
              )
            );
          },
          data: r
        });
      };
    },
    172: function(e, t, n) {
      var i = n(11),
        a = n(26),
        r = n(19),
        o = /"/g,
        s = function(e, t, n, i) {
          var a = String(r(e)),
            s = "<" + t;
          return (
            "" !== n &&
              (s += " " + n + '="' + String(i).replace(o, "&quot;") + '"'),
            s + ">" + a + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var n = {};
        (n[e] = t(s)),
          i(
            i.P +
              i.F *
                a(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            n
          );
      };
    },
    188: function(e, t, n) {
      "use strict";
      n(172)("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    189: function(e, t, n) {
      "use strict";
      n(172)("sub", function(e) {
        return function() {
          return e(this, "sub", "", "");
        };
      });
    },
    190: function(e) {
      e.exports = {
        data: {
          avatar: {
            childImageSharp: {
              fixed: {
                base64:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFOUlEQVQ4y2WTC0xTVxjHL87Mx+KSmSzGmTmYmCkbSqaCMaioPJUpoIwiTGA8KhMqitAC7Xi0YJGW8ihU3lCRLspLLQJOB3NTYYrZpshDRnQSpoDMJ9Lee89/t5WamJ3k5Pvu+b7zu//vO+dQLMtSpkEIoTj/HWpmvHz50hNABTeHjdMG9t+JCUw+nhjlvk9xM+B27/AcUx7nzzIajFYWxhsYwzBWMwmbaZq+jplRXFiEsMAg+Hp5kmA/PyQdPIibXV2m0BAL8CwCODFW/4Nxi/EW0ED/IBPNj6GXLrFhly9bTlavXAH75bZk0cIP6QVz5tElqmPmPCPDFr4F5WDmMjlrgZH79+7R25w3kXA/P3JUICAZkaGkRBhNasTRxH2dA6Fmz8PiBe8xNztaaTPUYCh9S6WpTFOAgxLOsN9F8sFz8yCXSjS4oMpGT9kxPNEf57rZhj59PuyWLCHz352HYnGsKd8M5WARFqXUs2dPLD2j+3t7Yf/ZSqISJeGiphjn5TJcU8sxqsvHi+unub/2IytqD+bPnktSI4NMBTEzYsY46EJqYHDA81p3Bx5PjpsCRN/cTL5YZosqaQba8nPRqchEf7kKj2pygR4OiAforJHi4/c/gChqHzHDWNY4o/IQ1d1ztWJq+jmMRoNJOjlZo8UnixYh1H8vdrr5Yvc2dxTEhiMrLAjxX/vhJ20OBlrVCHFZi8xEgbnn3K1gZoAdVG2dcpg7aUy/mmZNwYY6HVbZfAq+rx881rtgjd2X2OnoCDeHNVhhbYd4b3ekBHkjzN0R1apMM5ChaTIDfESp8uLZwbt38PDhiGmR/Hn5V0iCg9GYIUFxVCiSfb9CQ3IcrucKodvPw42cOHRqRIjYvApNGtVrhUaacDATkKXy1Mm41fcHGZucwM3bN8iDvjtQHxHgYkEempOFKOF/i99L8/Diah1+SQzD0w4tpv65hNY4HkZ6us1AsAwIYYlpUtq64tH+4fvQtfxIysozyeVLrahOk6BRmoTMAB/w1jtB5OOB5pQIFO3dgZ6SLEzf0WHsYi1ecEcx9vQVmXxuINNGFtMGZpKqaGw7lZKVAn5MIJ2tFJEiXRMUGelQR/kjYL0DfNetRuhGJ8i8nZC2fS2a4nbhWYsULeevQt02gnz9X0TTNszUXRnHic6/u6h0pTJA+H0sjiTtozNkkcgvkpAsWQoOeLkgws0Zx+NicUutwGhjIWoFgehIcEe3OgEyXS+kun6SVd8P2eleY45+BKm63nRqjz81R5jCHxKn8iFKdGUKcnlQVtaTQFdXuH5uA8leH1TvD8JgcTzaE3dD6+8AbV4BFPpRknN6AMqmu6yiaQjy+sGpYw2D1uaXIlXIeRJZHCTiXbRcJSQbnHfgaHQwcbS1hof9Cgjc10HlvxHHeRtwOScE5Zoikn9uCMpzI0Rx5p5BfWEc8obBVDNMeyJjlsmKhJ6FlZVihPNjaXsbG6ZTo0C0jxexW7yYOC39iOxxsCV6EY9cKROTYoUMP9RWsVmFVYaqtj7knRlof/OO09J8rSx+qlRcun1HIPy3uuBs7lHj+cJjTHZMOBHzPEm7/ABaswRcK7Yy8owEY07qYSil8SjJy2xnjONzTftL639+zUqRfPMGusl5SwTP02OsVJyIsyopzuSmoSVbCL1cSAS7veHjtgUN2kKki2KnKgplqZZ9RTVN5kqp/LwQs83I5Fv91hppBh8ICVmoOBx7qFyS0KHLTHpUnRTDao7sJyHbXSe9tmzqOlWVm36iTGltgZVW1pj3nWy+QP0HeSTgCcW4TTwAAAAASUVORK5CYII=",
                width: 156,
                height: 156,
                src:
                  "/static/6c2f2fd00cced646d2b72adfc80258b8/50a83/avatar-circle.png",
                srcSet:
                  "/static/6c2f2fd00cced646d2b72adfc80258b8/50a83/avatar-circle.png 1x"
              }
            }
          },
          site: {
            siteMetadata: {
              author: "Leland Richardson",
              authorTagline:
                "Personal blog of Leland Richardson. Software Engineer at Google working on Android. Previously Airbnb.",
              social: { twitter: "intelligibabble" }
            }
          }
        }
      };
    },
    191: function(e, t, n) {
      "use strict";
      var i = n(8);
      (t.__esModule = !0), (t.default = void 0);
      var a,
        r = i(n(7)),
        o = i(n(38)),
        s = i(n(77)),
        l = i(n(78)),
        c = i(n(0)),
        d = i(n(1)),
        u = function(e) {
          var t = (0, l.default)({}, e);
          return (
            t.resolutions && ((t.fixed = t.resolutions), delete t.resolutions),
            t.sizes && ((t.fluid = t.sizes), delete t.sizes),
            t
          );
        },
        g = {},
        f = function(e) {
          var t = u(e),
            n = t.fluid ? t.fluid.src : t.fixed.src;
          return g[n] || !1;
        },
        p = [];
      var M = function(e, t) {
          (void 0 === a &&
            "undefined" != typeof window &&
            window.IntersectionObserver &&
            (a = new window.IntersectionObserver(
              function(e) {
                e.forEach(function(e) {
                  p.forEach(function(t) {
                    t[0] === e.target &&
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                      (a.unobserve(t[0]), t[1]());
                  });
                });
              },
              { rootMargin: "200px" }
            )),
          a).observe(e),
            p.push([e, t]);
        },
        h = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            n = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            i = e.srcSetWebp
              ? "<source type='image/webp' srcSet=\"" +
                e.srcSetWebp +
                '" ' +
                n +
                "/>"
              : "",
            a = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + n + "/>" : "",
            r = e.title ? 'title="' + e.title + '" ' : "",
            o = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            c = e.opacity ? e.opacity : "1";
          return (
            "<picture>" +
            i +
            a +
            "<img " +
            s +
            l +
            t +
            o +
            r +
            'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:' +
            (e.transitionDelay ? e.transitionDelay : "0.5s") +
            ";opacity:" +
            c +
            ';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        m = c.default.forwardRef(function(e, t) {
          var n = e.style,
            i = e.onLoad,
            a = e.onError,
            r = (0, s.default)(e, ["style", "onLoad", "onError"]);
          return c.default.createElement(
            "img",
            (0, l.default)({}, r, {
              onLoad: i,
              onError: a,
              ref: t,
              style: (0, l.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                n
              )
            })
          );
        });
      m.propTypes = {
        style: d.default.object,
        onError: d.default.func,
        onLoad: d.default.func
      };
      var y = (function(e) {
        function t(t) {
          var n;
          n = e.call(this, t) || this;
          var i = !0,
            a = !1,
            r = t.fadeIn,
            s = f(t);
          !s &&
            "undefined" != typeof window &&
            window.IntersectionObserver &&
            ((i = !1), (a = !0)),
            "undefined" == typeof window && (i = !1),
            t.critical && ((i = !0), (a = !1));
          var l = !(n.props.critical && !n.props.fadeIn);
          return (
            (n.state = {
              isVisible: i,
              imgLoaded: !1,
              IOSupported: a,
              fadeIn: r,
              hasNoScript: l,
              seenBefore: s
            }),
            (n.imageRef = c.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind(
              (0, o.default)((0, o.default)(n))
            )),
            (n.handleRef = n.handleRef.bind((0, o.default)((0, o.default)(n)))),
            n
          );
        }
        (0, r.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: f(this.props) }),
              this.props.critical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (n.handleRef = function(e) {
            var t = this;
            this.state.IOSupported &&
              e &&
              M(e, function() {
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: f(t.props) }),
                  t.setState({ isVisible: !0, imgLoaded: !1 });
              });
          }),
          (n.handleImageLoaded = function() {
            var e, t, n;
            (e = this.props),
              (t = u(e)),
              (n = t.fluid ? t.fluid.src : t.fixed.src),
              (g[n] = !0),
              this.setState({ imgLoaded: !0 }),
              this.state.seenBefore && this.setState({ fadeIn: !1 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (n.render = function() {
            var e = u(this.props),
              t = e.title,
              n = e.alt,
              i = e.className,
              a = e.style,
              r = void 0 === a ? {} : a,
              o = e.imgStyle,
              s = void 0 === o ? {} : o,
              d = e.placeholderStyle,
              g = void 0 === d ? {} : d,
              f = e.placeholderClassName,
              p = e.fluid,
              M = e.fixed,
              y = e.backgroundColor,
              L = e.Tag,
              N = "boolean" == typeof y ? "lightgray" : y,
              j = (0, l.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: "opacity 0.5s",
                  transitionDelay: this.state.imgLoaded ? "0.5s" : "0.25s"
                },
                s,
                g
              ),
              b = (0, l.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition: !0 === this.state.fadeIn ? "opacity 0.5s" : "none"
                },
                s
              ),
              w = {
                title: t,
                alt: this.state.isVisible ? "" : n,
                style: j,
                className: f
              };
            if (p) {
              var I = p;
              return c.default.createElement(
                L,
                {
                  className: (i || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    r
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(I.srcSet)
                },
                c.default.createElement(L, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / I.aspectRatio + "%"
                  }
                }),
                I.base64 &&
                  c.default.createElement(
                    m,
                    (0, l.default)({ src: I.base64 }, w)
                  ),
                I.tracedSVG &&
                  c.default.createElement(
                    m,
                    (0, l.default)({ src: I.tracedSVG }, w)
                  ),
                N &&
                  c.default.createElement(L, {
                    title: t,
                    style: {
                      backgroundColor: N,
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      opacity: this.state.imgLoaded ? 0 : 1,
                      transitionDelay: "0.35s",
                      right: 0,
                      left: 0
                    }
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    I.srcSetWebp &&
                      c.default.createElement("source", {
                        type: "image/webp",
                        srcSet: I.srcSetWebp,
                        sizes: I.sizes
                      }),
                    c.default.createElement("source", {
                      srcSet: I.srcSet,
                      sizes: I.sizes
                    }),
                    c.default.createElement(m, {
                      alt: n,
                      title: t,
                      src: I.src,
                      style: b,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError
                    })
                  ),
                this.state.hasNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: h((0, l.default)({ alt: n, title: t }, I))
                    }
                  })
              );
            }
            if (M) {
              var S = M,
                z = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: S.width,
                    height: S.height
                  },
                  r
                );
              return (
                "inherit" === r.display && delete z.display,
                c.default.createElement(
                  L,
                  {
                    className: (i || "") + " gatsby-image-wrapper",
                    style: z,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(S.srcSet)
                  },
                  S.base64 &&
                    c.default.createElement(
                      m,
                      (0, l.default)({ src: S.base64 }, w)
                    ),
                  S.tracedSVG &&
                    c.default.createElement(
                      m,
                      (0, l.default)({ src: S.tracedSVG }, w)
                    ),
                  N &&
                    c.default.createElement(L, {
                      title: t,
                      style: {
                        backgroundColor: N,
                        width: S.width,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        transitionDelay: "0.25s",
                        height: S.height
                      }
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      S.srcSetWebp &&
                        c.default.createElement("source", {
                          type: "image/webp",
                          srcSet: S.srcSetWebp,
                          sizes: S.sizes
                        }),
                      c.default.createElement("source", {
                        srcSet: S.srcSet,
                        sizes: S.sizes
                      }),
                      c.default.createElement(m, {
                        alt: n,
                        title: t,
                        width: S.width,
                        height: S.height,
                        src: S.src,
                        style: b,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError
                      })
                    ),
                  this.state.hasNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: h(
                          (0, l.default)(
                            {
                              alt: n,
                              title: t,
                              width: S.width,
                              height: S.height
                            },
                            S
                          )
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(c.default.Component);
      y.defaultProps = { critical: !1, fadeIn: !0, alt: "", Tag: "div" };
      var L = d.default.shape({
          width: d.default.number.isRequired,
          height: d.default.number.isRequired,
          src: d.default.string.isRequired,
          srcSet: d.default.string.isRequired,
          base64: d.default.string,
          tracedSVG: d.default.string,
          srcWebp: d.default.string,
          srcSetWebp: d.default.string
        }),
        N = d.default.shape({
          aspectRatio: d.default.number.isRequired,
          src: d.default.string.isRequired,
          srcSet: d.default.string.isRequired,
          sizes: d.default.string.isRequired,
          base64: d.default.string,
          tracedSVG: d.default.string,
          srcWebp: d.default.string,
          srcSetWebp: d.default.string
        });
      y.propTypes = {
        resolutions: L,
        sizes: N,
        fixed: L,
        fluid: N,
        fadeIn: d.default.bool,
        title: d.default.string,
        alt: d.default.string,
        className: d.default.oneOfType([d.default.string, d.default.object]),
        critical: d.default.bool,
        style: d.default.object,
        imgStyle: d.default.object,
        placeholderStyle: d.default.object,
        placeholderClassName: d.default.string,
        backgroundColor: d.default.oneOfType([
          d.default.string,
          d.default.bool
        ]),
        onLoad: d.default.func,
        onError: d.default.func,
        onStartLoad: d.default.func,
        Tag: d.default.string
      };
      var j = y;
      t.default = j;
    }
  }
]);
//# sourceMappingURL=1-a11c2cf9a58cb5ca43ad.js.map
