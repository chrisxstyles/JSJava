//Show that we can use an arbitrary java class inside Vert.X/Nashorn relativly easily
//Tinkerpop turns out to be kind of a bad example though, everything should end up as server-side native gremlin scripts, called by a client query

var TinkerGraph = Java.type('com.tinkerpop.gremlin.tinkergraph.structure.TinkerFactory');

var g = TinkerGraph.createClassic()
var vone = g.V(1)

console.log("We got ourselves a tinkergraph! : " + g);
console.log(" g.V(1): " + vone);
