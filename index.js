var rect=require("./rectangle")
function hello(l,b){
    console.log("the values are "+rect.perimeter(l,b));
    console.log("the values are ",rect.area(l,b));
}
hello(3,4)
hello(5,6)