
import './App.css';

import { Form, Field, FormSpy } from 'react-final-form';
// focus on a field with Final Form
import createDecorator from 'final-form-focus';

//const sleep = ms = new Promise(resolve => setTimeout(resolve, ms));
const showResults = values => {

  //await sleep(500);
  alert(JSON.stringify(values, undefined, 2));

}

//pass it to FORM props as a decorator
const focusOnError = createDecorator();

const required = value => value ? undefined : 'required';

function App() {
  return (
    <div className="App">
      <h1>React Final Form Basics</h1>


      <Form
        onSubmit={showResults}
        decorators={[focusOnError]}
        // record validation //validate={values => { }}

        subscription={{ submitting: true, }} >


        {/* handles form states */}
        {({ handleSubmit, values, submitting }) => (
          <form onSubmit={handleSubmit} >
            <div>

              <Field name="firstname" placeholder="First Name" validate={required}
                subscription={{ value: true, visited: true, active: true, error: true, touched: true, }} >
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? 'inpActive' : ''}>
                    <label>First Name</label>
                    <input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="lastname" placeholder="Last Name" validate={required}
                subscription={{ value: true, visited: true, active: true, error: true, touched: true }} >
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? 'inpActive' : ''}>
                    <label>Last Name</label>
                    <input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="email" component="input" placeholder="Email" validate={required}
                subscription={{ value: true, visited: true, active: true, error: true, touched: true }} >
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? 'inpActive' : ''}>
                    <label>Email</label>
                    <input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <button type='submit' disabled={submitting}>Submit</button>
            <h2>Real Time View Of Values</h2>
            {/* <pre>
              {JSON.stringify(values, undefined, 2)}
            </pre> */}
            <FormSpy subscription={{ values: true }}>
              {
                (values) => (
                  <pre>
                    {JSON.stringify(values, undefined, 2)}
                  </pre>
                )
              }
            </FormSpy>

          </form>
        )}

      </Form>
    </div>
  );
}

export default App;
