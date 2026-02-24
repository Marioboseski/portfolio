import { useState } from "react";

const useLoginForm = (initialValues, ValidateForm) => {
  
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [ success, setSuccess ] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = {...values, [name]: value};
    setErrors(ValidateForm(newValues));
    setValues(newValues);
    setSuccess("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = ValidateForm(values);
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      setSuccess("Form submitted successfully");
      setValues(initialValues);
      setTimeout(() => {
        setSuccess("")        
      }, 3000);
    }
  }
  
  return {errors, values, success, handleChange, handleSubmit};

}

export default useLoginForm;