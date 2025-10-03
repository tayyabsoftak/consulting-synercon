import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const initialForm = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    if (name === "phone") {
      // allow only digits and "+"
      value = value.replace(/[^\d+]/g, "");
      // only one "+" at the beginning
      if (value.includes("+") && value.indexOf("+") > 0) {
        value = value.replace(/\+/g, "");
      }
    }
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const rules: { [k: string]: (val: string) => string } = {
      firstName: (v) => (!v ? "First name is required" : ""),
      lastName: (v) => (!v ? "Last name is required" : ""),
      phone: (v) =>
        !v
          ? "Phone is required"
          : /^\+?\d{7,15}$/.test(v)
          ? ""
          : "Enter a valid phone number (7–15 digits, optional +)",
      email: (v) =>
        !v
          ? "Email is required"
          : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
          ? ""
          : "Enter a valid email",
      location: (v) => (!v ? "Location is required" : ""),
      message: (v) => (!v ? "Message is required" : ""),
    };

    const newErrors: any = {};
    Object.entries(form).forEach(([k, v]) => {
      const err = rules[k]?.(v.trim());
      if (err) newErrors[k] = err;
    });
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length)
      return setErrors(validationErrors);

    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields = [
    { name: "firstName", type: "text" },
    { name: "lastName", type: "text" },
    { name: "phone", type: "tel" },
    { name: "email", type: "email" },
    { name: "location", type: "text", full: true },
  ];

  return (
    <>
      <motion.div
        className="py-40 lg:h-[80vh] bg-banner flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold">
          We’d{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            love to hear <br />
          </span>
          From You!
        </h2>
      </motion.div>

      <section className="bg-white rounded-lg shadow-lg py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-gray-700 mb-8">
            Ask Us Anything
          </h1>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {fields.map(({ name, type, full }) => (
              <div
                key={name}
                className={`flex flex-col ${full ? "md:col-span-2" : ""}`}
              >
                <input
                  type={type}
                  name={name}
                  value={form[name as keyof typeof form]}
                  onChange={handleChange}
                  className={`border-b-2 px-0 py-2 w-full focus:outline-none ${
                    errors[name]
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-400"
                  }`}
                />
                <span className="text-sm font-semibold mt-1 capitalize">
                  {name} *
                </span>
                {errors[name] && (
                  <span className="text-red-500 text-sm">{errors[name]}</span>
                )}
              </div>
            ))}

            <div className="flex flex-col md:col-span-2">
              <textarea
                ref={textareaRef}
                name="message"
                value={form.message}
                onChange={handleChange}
                onInput={handleInput}
                rows={1}
                className={`border-b-2 resize-none px-0 text-base w-full focus:outline-none ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-400"
                }`}
              />
              <span className="text-sm font-semibold mt-1">Message *</span>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="p-[2px] rounded-lg bg-gradient-to-r from-lightbrown to-brown"
              >
                <span className="block bg-white px-8 py-3 rounded-lg font-medium text-black hover:bg-gradient-to-r from-lightbrown to-brown hover:text-white">
                  Send Message
                </span>
              </button>
            </div>
          </form>

          {submitted && (
            <div className="mt-6 text-green-500 font-semibold text-center">
              Your message has been sent successfully!
            </div>
          )}
        </div>
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card: Office Details */}
          <div className="bg-white shadow-lg border shadow-cyan-300/50 rounded-xl p-10 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-700">Head Office</h2>
            <p className="text-gray-600">
              Suite No 502-B, 5th Floor, Evacuee Trust Complex, F-5/1 Islamabad
              4400 Pakistan.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600">
                <strong>Landline:</strong> +92 51 889 6700
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> contact@synercongroup.org
              </p>
            </div>
          </div>

          {/* Right Card: Map */}
          <div className="bg-white shadow-md border shadow-cyan-300/50 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.059634597748!2d73.0859334755539!3d33.73327403450574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc1ac11b690e7%3A0xdc4d6edacb693781!2sSynercon%20Private%20Limited!5e0!3m2!1sen!2s!4v1757479625217!5m2!1sen!2s"
              width="100%"
              height="100%"
              className="h-80 md:h-full"
              allowFullScreen
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
