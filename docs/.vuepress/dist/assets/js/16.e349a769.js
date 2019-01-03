(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{168:function(e,t,i){"use strict";i.r(t);var s=i(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Currently ISF is at version 2.0 with a proposed version 3.0 in development.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v('The first version of the ISF spec did some confusing and silly things that the second version improves on.  If you want to write your own ISF host, and you want that host to support "old" ISF files, here\'s a link to '),i("a",{attrs:{href:"http://www.vidvox.net/rays_oddsnends/ISF_v1.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("the original ISF spec."),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("...and here's a list of the specific changes that were made from ISFVSN 1 to ISFVSN 2:")]),e._v(" "),e._m(2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"change-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-log","aria-hidden":"true"}},[this._v("#")]),this._v(" Change Log")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"differences-from-the-first-version-of-the-isf-spec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#differences-from-the-first-version-of-the-isf-spec","aria-hidden":"true"}},[this._v("#")]),this._v(" Differences from the first version of the ISF spec")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("The "),i("code",[e._v("PERSISTENT_BUFFERS")]),e._v(" object in the top-level dict has been removed- it was redundant and confusing. Anything describing a property of the buffer a pass renders to is in the appropriate pass dictionary ("),i("code",[e._v("PERSISTENT")]),e._v(", "),i("code",[e._v("FLOAT")]),e._v(", "),i("code",[e._v("WIDTH")]),e._v(", "),i("code",[e._v("HEIGHT")]),e._v(", etc).")]),e._v(" "),i("li",[e._v("The uniform vec2 "),i("code",[e._v("vv_FragNormCoord")]),e._v(" has been renamed "),i("code",[e._v("isf_FragNormCoord")]),e._v(", and the function "),i("code",[e._v("vv_vertShaderInit()")]),e._v(" has been renamed "),i("code",[e._v("isf_vertShaderInit()")]),e._v('.  ISF is open-source, the use of "vv" for terms in the spec is inappropriate.')]),e._v(" "),i("li",[e._v("The "),i("code",[e._v("INPUT")]),e._v(' types "audio" and "audioFFT" didn\'t exist in the first version of the ISF spec.')]),e._v(" "),i("li",[e._v("The "),i("code",[e._v("IMG_SIZE")]),e._v(" function didn't exist in the first version of the ISF spec.")]),e._v(" "),i("li",[e._v("The "),i("code",[e._v("TIMEDELTA")]),e._v(", "),i("code",[e._v("DATE")]),e._v(", and "),i("code",[e._v("FRAMEINDEX")]),e._v(" uniforms didn't exist in the first version of the ISF spec.")]),e._v(" "),i("li",[e._v("The first version of the ISF spec didn't have any sort of versioning label- "),i("code",[e._v("VSN")]),e._v(" and "),i("code",[e._v("ISFVSN")]),e._v(" didn't exist.")]),e._v(" "),i("li",[e._v("The first version of the ISF spec didn't codify any conventions with respect to image filters.  The second version sets forth the basic requirement for ISF shaders that are expected to be used as image filters or transitions.")])])}],!1,null,null,null);n.options.__file="ref_changes.md";t.default=n.exports}}]);