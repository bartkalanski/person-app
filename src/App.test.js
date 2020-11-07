import { shallow } from 'enzyme'
import App from './App';
import PersonList from './PersonList'

describe('App', ()=>{
  //before all of the tests run set up appWrapper
  let appWrapper;
  beforeAll(()=>{
    appWrapper = shallow(<App />)
  })
  it('renders a person list', ()=>{
    //and then I want to find on that component another component
    //find checks whether the component exists
   const personList = appWrapper.find(PersonList)
   //check that the personList, which should be an array 
   //make sure that the length of the array is 1
   expect(personList).toHaveLength(1);
  })
  it('has state', ()=> {
    const appState = appWrapper.state()
    // check whether state exists
    expect(appState).not.toBeNull();
  })
  it('has a property of state', ()=>{
    const appState = appWrapper.state();
    expect(appState.people).toBeDefined()
  })
  it('passes people property of state to personList as prop', () => {
    const personList = appWrapper.find(PersonList)
//check whether personList is equal to people state
    expect(personList.props().people).toEqual(appWrapper.state().people)
  })
})