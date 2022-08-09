import { useState } from "react";

const Contact = () => {
  const initialState = {
    email: "",
    message: "",
  };
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email === "" && data.message === "") {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }

    window.location.href = `mailto:allanlautarodelgado@gmail.com?subject=¡I want work with you!&body=${data.message}`;

    setData(initialState);
  };

  return (
    <>
      <p
        id="contact"
        className="my-10 text-xl font-bold text-center text-white"
      >
        Contact me
      </p>
      <div className="w-10/12 max-w-5xl p-5 mx-auto md:w-1/3 rounded-xl bg-zinc-900">
        <form onSubmit={handleSubmit} className="gap-5 form-control">
          <input
            type="email"
            placeholder="Your email"
            className="input input-primary"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <textarea
            placeholder="Your message"
            className="input input-primary h-36"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />

          {error && (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p>Please fill all the fields </p>
            </div>
          )}
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
