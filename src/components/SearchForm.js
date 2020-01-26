import React, { useState } from "react";
import { Form, Field, withFormik} from 'formik';

const SearchForm = ({errors, touched, values, status}) => {
  const [search, setSearch] = useState("")

  return (
    <section className="search-form">
     <Form>
       <Field type='text' name='currentSearch' placeholder='search for a character'/>
       <button type='submit'>Submit</button>
     </Form>
    </section>
  );
}

const FormikSearchForm = withFormik({})(SearchForm);

export default FormikSearchForm;