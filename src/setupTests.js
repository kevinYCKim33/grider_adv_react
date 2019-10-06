// npm install --save enzyme enzyme-adapter-react-16 or whatever version you have (16, 17, etc...)
// setupTests.js a very special name it HAS to be named that way...
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// Enzyme API
// 1 Static
/*
take component, render it...render html...return object that just returns the html
can't really interact with the html..
can't click it, type into it etc...
*/

// 2 Shallow
/*
takes component and renders just that but none of its children...
test one component by itself...but not any assertion underneath...
*/

// 3 Full DOM
/*
render the component and all of its children + let us modify it afterwards
can simulate click events
*/
