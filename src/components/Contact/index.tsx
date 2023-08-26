// import { SelectedPage } from "../../shared/types";
import ContactUs from "../../assets/ContactUsPageGraphic.png";
import HText from "../../shared/HText";
import { useForm } from "react-hook-form";

// type Props = { setSelectedPage: (value: SelectedPage) => void };

const Contact = () => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 `;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const handleSubmit = async (e: any) => {
    const isValid = await trigger(); // allow validate form if needed, an asynchronous function
    if (!isValid) {
      e.preventDefault();
    } // prevent refresh page or go to new page when click submit
  };
  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-22">
      <div>
        {/* header */}
        <div className="md:w-3/5">
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </div>
        {/* form */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <div className="mt-10 basis-3/5 md:mt-10">
            <form
              target="_blank"
              onSubmit={handleSubmit}
              method="POST"
              action="https://formsubmit.co/gjhjh"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "Max Length is 500"}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" && "Max Length is 2000"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 py-3 px-20 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="relative mt-16 basis-2/5 md:mt-0 md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
            <img src={ContactUs} alt="contactus" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
