// npm install --save enzyme enzyme-adapter-react-16 or whatever version you have (16, 17, etc...)
// setupTests.js a very special name it HAS to be named that way...
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
