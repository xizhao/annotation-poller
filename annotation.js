(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['annotation.mustache'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "      <li>\n"
    + ((stack1 = (helpers.hasKey || (depth0 && depth0.hasKey) || alias2).call(alias1,depth0,"image",{"name":"hasKey","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.hasKey || (depth0 && depth0.hasKey) || alias2).call(alias1,depth0,"link",{"name":"hasKey","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.hasKey || (depth0 && depth0.hasKey) || alias2).call(alias1,depth0,"text",{"name":"hasKey","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "       </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.image : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.hasKey || (depth0 && depth0.hasKey) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"href",{"name":"hasKey","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "              <a href=\""
    + ((stack1 = ((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" style=\"border: none;text-decoration: none;\"><img src=\""
    + ((stack1 = ((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\" /></a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "              <img src=\""
    + ((stack1 = ((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isArray || (depth0 && depth0.isArray) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"link",{"name":"isArray","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.link : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "          <a href=\""
    + ((stack1 = ((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</a>"
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    return ",";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "          <a href=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.url : stack1), depth0)) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <span>"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\"annotation-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\""
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "\" data-fingerprint="
    + alias4(((helper = (helper = helpers.fingerprint || (depth0 != null ? depth0.fingerprint : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fingerprint","hash":{},"data":data}) : helper)))
    + ">\n  <ul class=\"addon-container\">\n    <li><h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3></li>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</li>\n";
},"useData":true});
})();