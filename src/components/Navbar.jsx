import logotipo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <header
        id="home"
        className="font-Poppins bg-zinc-900"
        style={{
          height: "500px",
        }}
      >
        <div className="mx-auto navbar lg:max-w-5xl">
          <div className="navbar-start md:hidden">
            <div className="dropdown ">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="p-2 mt-3 text-white shadow menu menu-compact dropdown-content bg-zinc-900 rounded-box w-52 "
              >
                <li className="hover:text-yellow-500 ">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-yellow-500" tabIndex="0">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-yellow-500">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-yellow-500">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="justify-end w-2/4 p-2 md:w-full md:justify-start">
            <img className="w-6 text-white" src={logotipo} alt="" />
          </div>

          {/* NAVBAR DESKTOP */}
          <div className="hidden md:block">
            <ul className="text-white menu menu-horizontal">
              <li className="hover:text-yellow-500">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-yellow-500" tabIndex="0">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-yellow-500">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-yellow-500">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/*   HERO */}
        <div className="flex flex-col w-5/6 gap-3 mx-auto mt-16 text-white lg:container lg:max-w-5xl lg:w-full">
          <p className="font-semibold text-zinc-400">Hola, soy Lautaro 👋🏻</p>

          <h1 className="text-3xl font-black">Frontend Developer</h1>

          <p className="text-sm text-zinc-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae omnis unde.
          </p>

          <div className="flex gap-10 mt-10">
            <a
              href="#contact"
              className="text-white btn btn-primary hover:bg-yellow-600"
            >
              Contact me
            </a>
            <a className="btn btn-outline">My CV</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
