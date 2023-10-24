
import './App.css';
import { Form, Field } from 'react-final-form';

//const sleep = ms = new Promise(resolve => setTimeout(resolve, ms));
const showResults = values => {

  //await sleep(500);
  alert(JSON.stringify(values, undefined, 2));

}

function App() {
  return (
    <div className="App">
      <h1>React Final Form Basics</h1>
      <Form onSubmit={showResults}>
        {/* handles form states */}
        {({ handleSubmit, values, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstname"
                component="input"
                placeholder="First Name"
              ></Field>
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastname"
                component="input"
                placeholder="Last Name"
              ></Field>
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                placeholder="Email"
              ></Field>
            </div>
            <button type='submit' disabled={submitting}>Submit</button>
            <h2>Real Time View Of Values</h2>
            <pre>
              {JSON.stringify(values, undefined, 2)}
            </pre>
          </form>
        )}

      </Form>
    </div>
  );
}

export default App;
