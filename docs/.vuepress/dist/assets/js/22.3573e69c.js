(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{163:function(e,t,r){"use strict";r.r(t);var a=r(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[e._v("ISF stands for \"Interactive Shader Format\", and is a file format that describes a GLSL fragment shader, as well as how to execute and interact with it. The goal of this file format is to provide a simple and minimal interface for image filters and generative video sources that allows them to be interacted with and reused in a generic and modular fashion. ISF is nothing more than a [slightly modified] GLSL fragment shader with a JSON blob at the beginning that describes how to interact with the shader (how many inputs/uniform variables it has, what their names are, what kind of inputs/variables they are, that sort of thing). ISF isn't some crazy new groundbreaking technology- it's just a simple and useful combination of two things that have been around for a while to make a minimal- but highly effective- filter format.")]),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("Shaders written in the ISF specification can be used in supported environments on desktop, mobile and the web.  To use ISF files in a specific piece of software consult the appropriate documentation.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("The ISF specification was original created for "),r("a",{attrs:{href:"http://vidvox.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("VDMX"),r("OutboundLink")],1),e._v(" and is now supported by several different applications as a format including:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://imimot.com/cogevj/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoGe"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.bigfug.com/software/fugio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fugio"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://madmapper.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mad Mappper"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.millumin.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Millumin"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vidvox.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("VDMX"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ISF shaders can be made as full page standalone webpages, with or without controls.  An example implementation can be found in the "),r("a",{attrs:{href:"https://glitch.com/edit/#!/isf-example?path=README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISF Generator Example on Glitch"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("ISF files can be created, viewed and shared online at the "),r("a",{attrs:{href:"http://interactiveshaderformat.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("interactiveshaderformat.com"),r("OutboundLink")],1),e._v(" website.")])]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Whether you are a GLSL expert or just getting started, there are several resources and specialized tools that can be useful when writing or remixing ISF compositions.")]),e._v(" "),e._m(4),e._v(" "),r("ul",[e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://github.com/mrRay/ISF_Spec/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISF Specification Page"),r("OutboundLink")],1),e._v(" contains detailed information about ISF for shader and application developers, along with links to source code repositories and other useful resources.")])]),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("Though you can create or modify ISF compositions using any standard text editor it can often be useful be able to have a specialized interface that makes it easier to see your output and debug your code.")]),e._v(" "),e._m(9),e._v(" "),r("ul",[r("li",[e._v("ISF files can be created, viewed and shared online at the "),r("a",{attrs:{href:"http://interactiveshaderformat.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("isf.video"),r("OutboundLink")],1),e._v(" website.  These are some of its basic features:\n"),e._m(10)])]),e._v(" "),e._m(11),e._v(" "),r("ul",[r("li",[e._v("An ISF Editor for Mac is available here:\n"),r("a",{attrs:{href:"https://www.vidvox.net/download/ISF_Editor_2.9.7.3.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISF Editor.app.zip"),r("OutboundLink")],1),e._v(".  These are some of its basic features:\n"),e._m(12)])]),e._v(" "),e._m(13),e._v(" "),r("ul",[r("li",[e._v("Here are a bunch of simple test ISF files that demonstrate ISF's basic features (these are test filters, and we don't expect them to have signifcant creative use):\n"),r("a",{attrs:{href:"http://vidvox.net/rays_oddsnends/ISF%20tests+tutorials.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISF Test/Tutorial filters"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.vidvox.net/rays_oddsnends/Vidvox%20ISF%20resources.pkg.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here is an installer"),r("OutboundLink")],1),e._v(" for over a hundred different ISF files, both images and filters.  The installer places them in /Library/Graphics/ISF where they can be accessed by all users.")])]),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/mrRay/ISF_Spec/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISF Specification Page"),r("OutboundLink")],1),e._v(" contains detailed information about ISF application developers, along with links to source code repositories and other useful resources to get started with.")]),e._v(" "),e._m(15),e._v(" "),r("p",[e._v("The VIDVOX ISF Editor and VVISFKit framework codebases are open source and can be found in the "),r("a",{attrs:{href:"https://github.com/mrRay/vvopensource",target:"_blank",rel:"noopener noreferrer"}},[e._v("VVOpenSource"),r("OutboundLink")],1),e._v(" repository.")]),e._v(" "),r("p",[e._v("Additionally here are a few other useful open source projects that use ISF to check out:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.github.com/msfeldstein/ISF-JS-Renderer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISF-JS-Renderer"),r("OutboundLink")],1),e._v(" can be used to parse and render ISF files through javascript.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/jcelerier/libisf",target:"_blank",rel:"noopener noreferrer"}},[e._v("libisf"),r("OutboundLink")],1),e._v(" is a library for parsing ISF files and includes an example editor made with Qt.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/marcinbiegun/isf-touchdesigner",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISF TouchDesigner"),r("OutboundLink")],1),e._v(" has partial support for using ISF files in TouchDesigner projects.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/satoruhiga/ofxISF",target:"_blank",rel:"noopener noreferrer"}},[e._v("ofxISF"),r("OutboundLink")],1),e._v(" has partial support for using ISF files in OpenFrameworks projects.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/sophiadigitalart/ISFHeavyM",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISFHeavyM"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/sophiadigitalart/ISFGif",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISFgif"),r("OutboundLink")],1),e._v(" can be used to create a ISF shared library with GIF preview for HeavyM.")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"using-isf-compositions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-isf-compositions","aria-hidden":"true"}},[this._v("#")]),this._v(" Using ISF Compositions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("In many cases, ISF generator files can be directly loaded into the media bin / media player section of host software.")]),this._v(" "),t("li",[this._v('ISF files that you would like to be globally available to all software on your Mac can be placed in the "/Library/Graphics/ISF" or "~/Library/Graphics/ISF" directories.  Generators, filters and transitions in these directories should generally be automatically available within supported software where applicable.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-playback-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-playback-software","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported playback software")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"creating-and-remixing-isf-compositions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-remixing-isf-compositions","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating and Remixing ISF Compositions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"online-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#online-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Online resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("The "),t("a",{attrs:{href:"quickstart"}},[this._v("ISF Quick Start")]),this._v(" is a guide to quickly get started with writing GLSL shaders in the ISF specification.  A good starting point for people who already know how to code and are just looking to understand the core concepts of ISF.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("The "),t("a",{attrs:{href:"ref_index"}},[this._v("ISF Reference Pages")]),this._v(" contain an overview of the available built-in variables, functions and other conventions used by ISF as a quick reference for shader developers.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("The "),t("a",{attrs:{href:"primer_index"}},[this._v("ISF Primer")]),this._v(" is a set of in depth lessons with walkthroughs for writing your first GLSL shaders and discussion of advanced usages of the ISF specification.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"software-tools-and-sample-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-tools-and-sample-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Software tools and sample files")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-isf-web-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-isf-web-editor","aria-hidden":"true"}},[this._v("#")]),this._v(" The ISF Web Editor")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Browse, preview and download shaders from the online community.")]),this._v(" "),t("li",[this._v("Use a web-cam, static images, or uploaded GIFs as sources for image filters.")]),this._v(" "),t("li",[this._v("UI items are automatically created for inputs, allowing you to interact with your ISF file.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-isf-editor-for-mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-isf-editor-for-mac","aria-hidden":"true"}},[this._v("#")]),this._v(" The ISF Editor For Mac")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Browses, renders and displays ISF files. Has a built-in video source, and can also use any QC comps, movie files, image files, Syphon video servers, or AVCapture-compatible video inputs as a video source for testing ISF-based image filters.")]),e._v(" "),r("li",[e._v("Automatically publishes the rendered output as a Syphon source.")]),e._v(" "),r("li",[e._v("UI items are automatically created for inputs, allowing you to interact with your ISF file.")]),e._v(" "),r("li",[e._v("Built-in shader editor with syntax coloring and integrated error display along with plenty of logging to facilitate creating and debugging shaders.")]),e._v(" "),r("li",[e._v("Output window can be paused, and can also be used to view the output of the individual render passes in your ISF file, which facilitates debugging by providing shader devs with a quick and easy way to visualize values being used in their shaders.")]),e._v(" "),r("li",[e._v('"Import from Shadertoy/GLSL Sandbox" feature can be used to automatically convert the vast majority of shaders found on Shadertoy and GLSL Sandbox to ISF sources and filters. Some shaders may need further modification, but it\'s shocking how many will "just work".')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sample-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Sample Files")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"adding-support-for-isf-in-3rd-party-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-support-for-isf-in-3rd-party-software","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding Support For ISF in 3rd Party Software")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"related-open-source-codebases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-open-source-codebases","aria-hidden":"true"}},[this._v("#")]),this._v(" Related open source codebases")])}],!1,null,null,null);i.options.__file="using_isf.md";t.default=i.exports}}]);