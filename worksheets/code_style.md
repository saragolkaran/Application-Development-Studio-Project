# Code Style

This documents helps to guide the look and feel of the code so that even when there are multiple developer, the style remains consistent. You may read more about it [here](https://javascript.info/coding-style).

## Style Guide

| Rules             | Choices                         |
| ----------------- | ------------------------------- |
| Case Styles       | camelCase/PascalCase |
| Acronym Case      | IBM/Ibm/ibm                     |
| Indentation Style | Allman/1TBS                     |
| Indentation       | Tabs/Space                      |
| Indentation Space | 2/4 spaces                      |
| Semicolon         |Mandatory              |

## Examples

Based on your chosen rules, give an example of a code that follows the code style and an example of a code that does not follow the code style. The examples you give should cover all the above defined rule.

### Good Example

1. var serviceAccount. ( CamelCase)
2. export class AppComponent {
  title = 'vibe';
} (Pascal case)

var i = 0;
 
if ( condition ) {
    doSomething();
} else if ( otherCondition ) {
    somethingElse();
} else {
    otherThing();
}
 
while ( !condition ) {
    iterating++;
}
 
for ( ; i < 100; i++ ) {
    object[ array[ i ] ] = someFn( i );
}
 
try {
 
    // Expressions
} catch ( e ) {
 
    // Expressions
}
 
 var html = "<p>The sum of " + a + " and " + b + " plus " + c +
    " is " + ( a + b + c );


```js
```

### Bad Example

var ilike = "something"

export class likecomponent {

}

if(condition) doSomething();

while(!condition) iterating++;

for(var i=0;i<100;i++) object[array[i]] = someFn(i);

var html = "<p>The sum of " + a + " and " + b + " plus " + c
    + " is " + ( a + b + c );


We used visual studio code editor to type our codes (angular (html, css, js , ts) and Jquery) and to make it neater, we downloaded the extentsions prettier ( html, js, css) and Ts / JS formatter for the typescript / javascript format. We also use indentations 1 tab spacing for each new line of code, for example :

app.post('/basic/insert', (req,res,next) =>{
  const { data } = req.body;
  database.insertPerformance(data ,(error, result) =>{
    if (error) {
      return next(error);
    } 
    console.log(result);
    res.json(data)
  });
});

All of our codes , for example a function called like the above will have a semicolon.