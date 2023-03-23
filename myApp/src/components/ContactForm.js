import React,{useState} from "react";
import Popup from "./Popup";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [formSubmitted, setFormSubmitted] = useState(false)

    const onSubmit = (data) => {
        console.log('data',data);
        // Do something with the form data 
        setFormSubmitted(true)
        reset()
        
      };

      const clearForm = () => {
        reset();
      };
  return (
    <React.Fragment>
      <main>
        {/* popup */}
        <section>
            {
                formSubmitted &&
            <Popup showPopup={() => setFormSubmitted(false)}/>
            }

        </section>
        <div className="bg-purple-500 h-auto py-5 my-5 mx-2 px-3 rounded shadow">
          {/* header */}
          <div className="h-12 pl-2 shadow mb-2 flex items-center">
            <p className="font-bold text-2xl capitalize text-white">
              Get in Touch
            </p>
          </div>

          {/* form section */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="md:grid md:grid-cols-2 md:gap-1">
                  {/* first name */}
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full h-10 rounded-lg bg-purple-200 mt-1"
                      {...register("firstName")}
                    />
                  </div>
                  {/* last name */}
                  <div>
                    <input
                      placeholder="Last Name"
                      className="w-full h-10 rounded-lg bg-purple-200 mt-1"
                      type="text"
                      {...register("lastName")}
                    />
                  </div>
                </div>
                {/* email and phone section */}
                <div className="md:grid md:grid-cols-2 md:gap-1">
                  {/* email */}
                  <div>
                    <input
                      placeholder="Email"
                      className="w-full h-10 rounded-lg bg-purple-200 mt-1"
                      type="text"
                      {...register("email")}
                    />
                  </div>
                  {/* phone */}
                  <div>
                    <input
                      placeholder="Phone"
                      className="w-full h-10 rounded-lg bg-purple-200 mt-1"
                      type="text"
                      {...register("phone")}
                      
                    />
                  </div>
                </div>
                {/* message section */}
                <div>
                  <input
                    placeholder="Message"
                    className="w-full h-32 rounded-lg bg-purple-200 mt-1"
                    type="text"
                    {...register("message")}
                  />
                </div>
                {/* button section */}
                <div className="flex justify-evenly mt-2">
                  {/* submit */}
                  <div>
                    <button
                      className="bg-white px-5 py-1 rounded-lg text-sm font-semibold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  {/* clear */}
                  <div>
                    <button
                    onClick={clearForm}
                      className="bg-white px-5 py-1 rounded-lg text-sm font-semibold"
                      type="button"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ContactForm;
