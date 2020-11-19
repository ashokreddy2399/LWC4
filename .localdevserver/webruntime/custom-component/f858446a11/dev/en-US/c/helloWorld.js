Webruntime.define('lwc/helloWorld', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "p" + shadowSelector + " {color:rgb(0, 81, 255);font-size: 18px;}\nh1" + shadowSelector + "{color:red;font-size: 18px;}\nh2" + shadowSelector + "{color:green;font-size: 18px;}\np" + shadowSelector + "::before {content: \"•\";color:rgb(0, 81, 255);;display: inline-block;width: 1em;margin-left: 0.5em}\nh1" + shadowSelector + "::before {content: \"•\";color:red;display: inline-block;width: 1em;margin-left: 0.5em}\nh2" + shadowSelector + "::before {content: \"•\";color:green;display: inline-block;width: 1em;margin-left: 0.5em}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_element("div", {
        classMap: {
          "slds-theme--shade": true,
          "slds-text-title_bold": true,
          "slds-p-left_medium": true,
          "slds-p-top_medium": true
        },
        styleMap: {
          "height": "600px",
          "width": "1000px"
        },
        key: 3
      }, [api_element("p", {
        key: 0
      }, [api_text("Hello World.")]), api_element("h1", {
        key: 1
      }, [api_text("This is my first Lightning Web Component.")]), api_element("h2", {
        key: 2
      }, [api_text("I'm so excited to be part of this Bootcamp.")])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-helloWorld_helloWorld-host",
      shadowAttribute: "lwc-helloWorld_helloWorld"
    };

    class HelloWorld extends lwc.LightningElement {}

    var helloWorld = lwc.registerComponent(HelloWorld, {
      tmpl: _tmpl
    });

    return helloWorld;

});
