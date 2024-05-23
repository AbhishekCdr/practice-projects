import { useRef, useState } from "react";

const DEFAULT_FORM_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
};

const DEFAULT_FORM_ERROR_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
};

function Form() {
  //Source of truth
  const [form, setForm] = useState(DEFAULT_FORM_VALUES);

  console.log(form);

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log("handle form submission");
  }

  function onChangeHandler(event, key) {
    const value = event.target.value;
    setForm((old) => {
      return {
        ...old,
        [key]: value,
      };
    });

    validate(String(val), key);
  }

  function validate(val, key) {
    const value = String(val);

    const localError = {};

    if (key === "firstname" || key === "lastname") {
      const nameRegex = /^[A-Za-z ]+$/;
      const regexVal = value.match(nameRegex); // null or []
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-2xl font-medium uppercase text-blue-600">Form</h1>

        <form
          onSubmit={handleFormSubmission}
          className="flex w-60 flex-col gap-3 rounded-md border-2 border-black p-5 font-semibold"
        >
          <label htmlFor="firstname">FirstName: </label>
          <input
            id="firstname"
            type="text"
            placeholder="firstname"
            onChange={(event) => {
              onChangeHandler(event, "firstname");
            }}
            value={form.firstname} //this is to protect for future
          />

          <label htmlFor="lastname">LastName: </label>
          <input
            id="lastname"
            type="text"
            placeholder="lastname"
            onChange={(event) => {
              onChangeHandler(event, "lastname");
            }}
            value={form.lastname}
          />

          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            onChange={(event) => {
              onChangeHandler(event, "email");
            }}
            value={form.email}
          />

          <label htmlFor="phone">Phone: </label>
          <input
            id="phone"
            type="tel"
            placeholder="phone"
            onChange={(event) => {
              onChangeHandler(event, "phone");
            }}
            value={form.phone}
          />

          <label htmlFor="gender">Gender: </label>
          <select
            id="gender"
            onChange={(event) => {
              onChangeHandler(event, "gender");
            }}
            value={form.gender}
          >
            <option value={0}>Do not want to say</option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
          </select>

          <label htmlFor="dob">DOB:</label>
          <input
            id="dob"
            type="date"
            placeholder="dob"
            onChange={(event) => {
              onChangeHandler(event, "dob");
            }}
            value={form.dob}
          />

          <input
            type="submit"
            value={"Submit"}
            className="rounded-lg border-2 border-yellow-400 hover:cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default Form;
