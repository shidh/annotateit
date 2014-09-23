/*
 ** Annotator v2.0.0-dev-cad06fe
 ** https://github.com/okfn/annotator/
 **
 ** Copyright 2014, the Annotator project contributors.
 ** Dual licensed under the MIT and GPLv3 licenses.
 ** https://github.com/okfn/annotator/blob/master/LICENSE
 **
 ** Built at: 2014-03-25 21:38:07Z
 */

//document.write("<script src ='https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js'></script>");
//document.write("<script src ='http://danielcebrian.com/richText-annotation/lib/tinymce/tinymce.min.js'></script>");
//document.write("<script src ='http://danielcebrian.com/richText-annotation/src/richText-annotator.js'></script>");
//document.write("<link href ='http://danielcebrian.com/richText-annotation/src/richText-annotator.css' rel='stylesheet'");

! function t(e, n, o) {
    function i(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (r) return r(a, !0);
                throw new Error("Cannot find module '" + a + "'")
            }
            var l = n[a] = {
                exports: {}
            };
            e[a][0].call(l.exports, function(t) {
                var n = e[a][1][t];
                return i(n ? n : t)
            }, l, l.exports, t, e, n, o)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
    return i
}({
    1: [
        function() {
            ! function(t, e, n) {
                "use strict";
                for (var o, i, r, a = n.body, s = n.getElementsByTagName("head")[0], u = ["Annotator", "$", "jQuery"], l = {}, h = {}; u.length;) i = u.shift(), l[i] = e.hasOwnProperty(i);

                o = function() {
                    var t, e = n.createElement("div"),
                        o = "top 0.4s ease-out",
                        i = {
                            display: "block",
                            position: "absolute",
                            fontFamily: '"Helvetica Neue", Arial, Helvetica, sans-serif',
                            fontSize: "14px",
                            color: "#fff",
                            top: "-54px",
                            left: 0,
                            width: "100%",
                            zIndex: 9999,
                            lineHeight: "50px",
                            textAlign: "center",
                            backgroundColor: "#000",
                            borderBottom: "4px solid",
                            WebkitTransition: o,
                            MozTransition: o,
                            OTransition: o,
                            transition: o
                        };
                    e.className = "annotator-bm-status";
                    for (t in i) i.hasOwnProperty(t) && (e.style[t] = i[t]);
                    return e.style.position = "fixed", e.style.backgroundColor = "rgba(0, 0, 0, 0.9)", e.onclick = function() {
                        this.parentNode.removeChild(this)
                    }, {
                        status: {
                            INFO: "#d4d4d4",
                            SUCCESS: "#3665f9",
                            ERROR: "#ff7e00"
                        },
                        element: e,
                        show: function(t, n) {
                            return this.message(t, n), e.style.display = "block", e.style.visibility = "visible", e.style.top = "0", this
                        },
                        hide: function() {
                            return e.style.top = "-54px", setTimeout(function() {
                                e.style.display = "none", e.style.visibility = "hidden"
                            }, 400), this
                        },
                        message: function(t, n) {
                            return n = n || this.status.INFO, e.style.borderColor = n, e.innerHTML = t, this
                        },
                        error: function(t) {
                            this.message(t, this.status.ERROR), setTimeout(this.hide, 5e3), setTimeout(this.remove, 5500)
                        },
                        append: function() {
                            return a.appendChild(e), this
                        },
                        remove: function() {
                            var t = e.parentNode;
                            return t && t.removeChild(e), this
                        }
                    }.append()
                }(), h = {
                    notification: o,
                    keypath: function(t, e, n) {
                        for (var o, i = (e || "").split("."); t && i.length && (o = i.shift(), t.hasOwnProperty(o));)
                            if (t = t[o], 0 === i.length && void 0 !== t) return t;
                        return null === n ? null : n
                    },
                    config: function(e, n) {
                        var i = this.keypath(t, e, n);
                        return null === i && o.error("Sorry, there was an error reading the bookmarklet setting for key: " + e), i
                    },
                    loadjQuery: function() {
                        var t, i = n.createElement("script"),
                            s = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js";
                        t = setTimeout(function() {
                            o.error("Sorry, we were unable to load jQuery which is required by the annotator")
                        }, this.config("timeout", 3e4)), i.src = this.config("externals.jQuery", s), i.onload = function() {
			//h.loadTinymce();
			//h.loadRichText();
                            r = e.jQuery, clearTimeout(t), a.removeChild(i), h.load(function() {
				h.setup()
                            });
			//h.loadTinymce();
			//h.loadRichText();
			//	h.setup();
                        }, a.appendChild(i)
                    },
                         //e1 = this.config("externals.source", "http://danielcebrian.com/richText-annotation/lib/tinymce/tinymce.min.js"),
                         //e2 = this.config("externals.source", "http://danielcebrian.com/richText-annotation/src/richText-annotator.js"),
                    load: function(t) {
			console.log("load annotator now");
			console.log(r.getScript());
                        //var e = this.config("externals.source", "http://assets.annotateit.org/bookmarklet/annotator.min.js"),
                        var e = this.config("externals.source", "http://assets.annotateit.org/annotator/v1.2.7/annotator-full.js"),
                            //e0 = this.config("externals.source", "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"),
                            e1 = this.config("externals.source", "http://danielcebrian.com/richText-annotation/lib/tinymce/tinymce.min.js"),
                            e2 = this.config("externals.source", "http://danielcebrian.com/richText-annotation/src/richText-annotator.js"),
                            n = this.config("externals.styles", "http://assets.annotateit.org/bookmarklet/annotator.min.css"),
                            n1 = this.config("externals.styles", "http://danielcebrian.com/richText-annotation/src/richText-annotator.css");
                        s.appendChild(r("<link />", {
                            rel: "stylesheet",
                            href: n
                        })[0]), 
                        r.ajaxSetup({
                            timeout: this.config("timeout", 3e4)
                        }), 
                        r.getScript(e, t).error(function() {
                            o.error("Sorry, we're unable to load Annotator at the moment...");
                                                   console.log("Annotator error");
                       });

 	         /*
  			,
                        r.getScript(e1, t).error(function() {
			   o.error("Sorry, we're unable to load tinymce.min.js at the moment...")
                        }),
                        r.getScript(e2, t).error(function() {
                            o.error("Sorry, we're unable to richText-annotator.js at the moment...")
                       })
                 */
                    },
                    loadTinymce: function(t) {
			console.log("load loadTinymce now");
			console.log(r.getScript());
                        var e1 = this.config("externals.source", "http://danielcebrian.com/richText-annotation/lib/tinymce/tinymce.min.js");
                        r.getScript(e1, t).error(function() {
                            o.error("Sorry, we're unable to load tinymce at the moment..."),
                            console.log("Tinymce error")
                        });
                    },
                    loadRichText: function(t) {
			console.log("load richtext now");
                        var e1 = this.config("externals.source", "http://danielcebrian.com/richText-annotation/src/richText-annotator.js");
                          //  n = this.config("externals.styles", "http://danielcebrian.com/richText-annotation/src/richText-annotator.css");
                        //s.appendChild(r("<link />", {
                        //    rel: "stylesheet",
                        //    href: n
                        //})[0]), 
                        r.getScript(e1, t).error(function() {
                            o.error("Sorry, we're unable to load richText-annotator at the moment...");
                                                   console.log("Richtext error");
                        });
                    },
                    authOptions: function() {
                        return {
                            tokenUrl: this.config("auth.tokenUrl", "http://127.0.0.1:5000/api/token")
                        }
                    },
                    storeOptions: function() {
                        var t = location.href.split(/#|\?/).shift();
                        return {
                            prefix: this.config("store.prefix", "http://127.0.0.1:5000/api"),
                            annotationData: {
                                uri: t
                            },
                            loadFromSearch: {
                                uri: t
                            }
                        }
                    },
                    
		    annotateItPermissionsOptions: function() {
                        return this.config("annotateItPermissions", {})
                    },
	             // a is body;    t is selected node
                    setup: function() {
                        var n, i = new e.Annotator(t.target || a);
                        i.addPlugin("Unsupported").addPlugin("Auth", this.authOptions()).addPlugin("Store", this.storeOptions()).addPlugin("AnnotateItPermissions", this.annotateItPermissionsOptions()), this.config("tags") === !0 && i.addPlugin("Tags"), r.extend(e._annotator, {
                        //i.annotator().annotator('addPlugin','RichText', optionsRichText).addPlugin("Unsupported").addPlugin("Auth", this.authOptions()).addPlugin("Store", this.storeOptions()).addPlugin("AnnotateItPermissions", this.annotateItPermissionsOptions()), this.config("tags") === !0 && i.addPlugin("Tags"), r.extend(e._annotator, {
                            jQuery: r,
                            element: a,
                            instance: i,
                            Annotator: e.Annotator.noConflict()
                        });
                        for (n in l) l.hasOwnProperty(n) && !l[n] && delete e[n];
                        o.message("Annotator is ready!", o.status.SUCCESS), setTimeout(function() {
                            o.hide(), setTimeout(o.remove, 800)
                        }, 3e3)
                    },
                    init: function() {
                        e._annotator.instance ? e._annotator.Annotator.showNotification("Annotator is already loaded. Try highlighting some text to get started.") : (o.show("Loading Annotator into page"), this.loadjQuery()/*, this.loadTinymce(), this.loadRichText()*/)
                    }
                }, e._annotator || (e._annotator = {
                    bookmarklet: h
                }), t.test ? r = e.jQuery : h.init()
            }(window._annotatorConfig, window, window.document)
        }, {}
    ]
}, {}, [1]);

