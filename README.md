# JavaScript Elders - Call, Apply, Bind

Exploring the JavaScript's elder functions named - call, apply and bind.

Link: https://codeomelet.com/posts/javascript-elders

---

For any given function:
```
function theFunction(argument1, argument2, ..., argumentN) {
    // usage of this.property1, this.property2, ..., this.propertyN
}
```

For any given object:
```
const theObject = { property1, property2, ..., propertyN };
```

---

Syntax for call:
```
const result = theFunction.call(theObject, param1, param2, ..., paramN);
```

Syntax for apply:
```
const result = theFunction.apply(theObject, [param1, param2, ..., paramN]);
```

Syntax for bind (works only for theObject):
```
const theNewFunction = theFunction.bind(theObject);
const result1 = theNewFunction(param1, param2, ..., paramN);
const result2 = theNewFunction(param1, param2, ..., paramN);
...
const resultN = theNewFunction(param1, param2, ..., paramN);
```