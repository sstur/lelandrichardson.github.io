(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    156: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(159),
        a = n.n(r),
        l = n(158),
        i = n(7),
        o = n.n(i),
        c = n(0),
        m = n.n(c),
        s = n(36),
        p = n(163),
        u = n(162),
        d = n(160);
      function f() {
        var e = a()(["\n    text-align: center;\n  "]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = a()(["\n    margin-top: 4rem;\n  "]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      var h = l.c.article.withConfig({
          displayName: "post-styles__Container",
          componentId: "axwg2q-0"
        })(
          [
            "margin-top:8rem;",
            " p{line-height:1.5;}blockquote{margin-left:0.25rem;font-size:1.6rem;color:inherit;font-style:italic;border-left:0.2rem solid rgb(0,0,0);padding-left:1rem;margin:1rem 0;}pre{margin-bottom:2rem;}h3{line-height:1.13;}h2,h3,h4,h5,h6{margin:2rem 0 2rem;}hr{border:0;border-top:0.1rem solid #ccc;display:block;height:1rem;padding:0;}"
          ],
          d.a.phone(g())
        ),
        w = l.c.header.withConfig({
          displayName: "post-styles__Header",
          componentId: "axwg2q-1"
        })(["", ";"], d.a.tablet(f())),
        y = l.c.h1.withConfig({
          displayName: "post-styles__Title",
          componentId: "axwg2q-2"
        })(["margin-bottom:1rem;font-size:3rem;"]),
        E = l.c.ul.withConfig({
          displayName: "post-styles__LinkList",
          componentId: "axwg2q-3"
        })([
          "display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;padding:0px;"
        ]),
        b = n(171);
      function x() {
        var e = a()(["\n              margin: 5rem 0;\n            "]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = a()([
          "\n                color: rgba(0, 0, 0, 0.8);\n              "
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      n.d(t, "pageQuery", function() {
        return _;
      });
      var v = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            o()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.markdownRemark,
                t = this.props.data.site.siteMetadata.title,
                n = this.props.pageContext,
                r = n.previous,
                a = n.next;
              return m.a.createElement(
                p.a,
                { location: this.props.location, title: t },
                m.a.createElement(u.a, {
                  title: e.frontmatter.title,
                  description: e.excerpt
                }),
                m.a.createElement(
                  h,
                  null,
                  m.a.createElement(
                    w,
                    null,
                    m.a.createElement(y, null, e.frontmatter.title),
                    m.a.createElement(
                      C,
                      null,
                      m.a.createElement(
                        "span",
                        null,
                        "Posted on ",
                        e.frontmatter.date
                      ),
                      m.a.createElement("span", null, "  -  "),
                      m.a.createElement("span", null, e.fields.readingTime.text)
                    )
                  ),
                  m.a.createElement(L, {
                    dangerouslySetInnerHTML: { __html: e.html }
                  }),
                  m.a.createElement(s.Link, { to: "/" }, "Back to Home"),
                  m.a.createElement(b.a, null),
                  m.a.createElement(
                    E,
                    null,
                    m.a.createElement(
                      "li",
                      null,
                      r &&
                        m.a.createElement(
                          s.Link,
                          { to: r.fields.slug, rel: "prev" },
                          "← ",
                          r.frontmatter.title
                        )
                    ),
                    m.a.createElement(
                      "li",
                      null,
                      a &&
                        m.a.createElement(
                          s.Link,
                          { to: a.fields.slug, rel: "next" },
                          a.frontmatter.title,
                          " →"
                        )
                    )
                  )
                )
              );
            }),
            t
          );
        })(m.a.Component),
        _ = ((t.default = v), "505957885"),
        C = Object(l.c)("sub")(k()),
        L = Object(l.c)("div")(x());
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-1e472f78b066349f98a7.js.map
