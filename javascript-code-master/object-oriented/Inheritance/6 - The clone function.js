/* Clone function. */

function clone(object) {
    function F() {}
    F.prototype = object;
    return new F;
}


var obj={
	name:"fdd",
	age:"20"
}

var person=clone(obj);
console.log(person.name);
console.log(person.age);

obj.name="fudongdong";
obj.age="23";


console.log(person.name);
console.log(person.age);