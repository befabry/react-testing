import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//Jest looks for this specific file at the root of our src folder.
//We configure Enzyme
Enzyme.configure({ adapter: new Adapter() });
