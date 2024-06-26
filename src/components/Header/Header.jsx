import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const cart = useSelector((state) => state.cart);
  let total;
  if (cart.items.length > 0) {
    total = cart.items.reduce(
      (total, curValue) => curValue.quantity + total,
      0
    );
  }
  const navigate = useNavigate();

  let renderButton = true;

  useEffect(() => {
    addEventListener("resize", () => innerWidth >= 960 && setOpenNav(false));
  }, []);

  const loginHandler = () => {
    setLogin(true);
  };

  const signUpHandler = () => {
    setSignup(true);
  };

  const logoutHandler = () => {
    setLogin(false);
    setSignup(false);
  };

  if (login || signup) {
    renderButton = false;
  } else {
    renderButton = true;
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button onClick={() => navigate("/")} className="p-1 font-normal">
          PRODUCTS
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button onClick={() => navigate("/")} className="p-1 font-normal">
          COLLECTIONS
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button onClick={() => navigate("/")} className="p-1 font-normal">
          BLOG
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button onClick={() => navigate("/")} className="p-1 font-normal">
          ABOUT US
        </button>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className=" top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" className="mr-4 cursor-pointer py-1.5 font-medium">
            LOGO
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {renderButton ? (
                <>
                  <Button variant="text" size="sm" onClick={loginHandler}>
                    <span>Log In</span>
                  </Button>
                  <Button variant="gradient" size="sm" onClick={signUpHandler}>
                    <span>Sign in</span>
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/cart">
                    <Button className="rounded-full">Cart {total}</Button>
                  </Link>
                  <Button color="red" onClick={logoutHandler}>
                    Logout
                  </Button>
                </>
              )}
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
