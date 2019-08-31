import sinon from 'sinon';
import Form from '../components/Form';


describe('Form component with FormAction hook', () => {
  afterEach(() => sinon.restore());

  it('calls Form component once', function () {
    const spy = sinon.spy(Form);
    expect(spy.calledOnce);
  });
});