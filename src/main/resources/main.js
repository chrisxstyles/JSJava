//Show that we can use an arbitrary java class inside Vert.X/Nashorn relativly easily
//Tinkerpop turns out to be kind of a bad example though, everything should end up as server-side native gremlin scripts, called by a client query

var TinkerGraph = Java.type('org.apache.tinkerpop.gremlin.tinkergraph.structure.TinkerFactory');
var yaml = require('js-yaml');
var Vertx = require("vertx-js/vertx");
var Buffer = require("vertx-js/buffer");
var vertx = Vertx.vertx();

vertx.fileSystem().readFile("test.yaml", function (result, result_err) {
  if (result_err == null) {
    console.log("file:" + yaml.safeDump(yaml.safeLoad(result.toString("ISO-8859-1"))).toString("ISO-8859-1") );
  } else {
    console.error("Oh oh ..." + result_err);
  }
});


var g = TinkerGraph.createClassic()
//var vone = g.V(1)

console.log("We got ourselves a tinkergraph! : " + g);
//console.log(" g.V(1): " + vone);
