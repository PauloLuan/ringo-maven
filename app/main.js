var {Application} = require("stick");
var response = require('ringo/jsgi/response');

var app = Application();

app.configure("notfound", "error", "mount", "route", "render", "static");
app.render.base = module.resolve("templates");
app.static(module.resolve("./public/"));

app.get("/", function(request) 
{
    var context = {};
    var resp = app.render("index.html", context);
    return resp;
});

exports.app = app;

if (require.main === module) {
    require("ringo/httpserver").main(module.id);
}