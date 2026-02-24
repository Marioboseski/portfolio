import useLoginForm from "../../hooks/useContactForm";
import ValidateContactForm from "../../utils/contactForm";
import ContactBox from "./ContactBox";

const ContactPage = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  }

  const { errors, values, success, handleChange, handleSubmit,} = useLoginForm(initialValues, ValidateContactForm);

  return (
    <section id="contact" className="flex justify-center items-center p-2">
      <section className="container">

        <div className="flex flex-col text-center gap-2 p-4 border-2 border-green-500 rounded-lg ">
          <h2 className="text-3xl font-bold text-green-500">Contact me</h2>

          <div className=" flex flex-col text-center gap-2 md:grid md:grid-cols-2 md:gap-4">
            <form className="flex flex-col justify-center items-center text-center gap-2 w-full md:min-h-[450px]" onSubmit={handleSubmit}>

              <div className="formInputs">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  className="contactpage-input"
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              <div className="formInputs">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  className="contactpage-input"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="formInputs">
                <textarea
                  name="message"
                  placeholder="Write something..."
                  value={values.message}
                  onChange={handleChange}
                  className="text-white bg-black w-full p-1 text-xl border-2 border-green-500 rounded-lg min-h-[200px]"
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
              </div>

              <button type="submit" className="w-full max-w-[250px] p-1 text-xl text-white font-semibold bg-black border-2 border-green-500 rounded-md cursor-pointer hover:bg-green-500 hover:text-black transition-all duration-200 hover:scale-105">Submit</button>
              {success && <p id="success" className="text-xl font-bold text-green-500">{success}</p>}
            </form>

            <div className="flex flex-col gap-2 items-center md:justify-evenly md:border-l-2 border-gray-500 p-3">
              <ContactBox label="Mail" text="crboseskimario@gmail.com" />
              <ContactBox label="LinkedIn" text="https://www.linkedin.com/in/mario-boseski-7773b630b/" />
              <ContactBox label="GitHub-Link" text="https://github.com/Marioboseski" />
            </div>

          </div>

        </div>

      </section>
    </section>
  );
};

export default ContactPage;
