import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

const options = createSerializer({ mode: 'deep' });

expect.addSnapshotSerializer(options);
Enzyme.configure({ adapter: new EnzymeAdapter() });
