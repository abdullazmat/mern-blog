import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        className="self-center text-sm font-semibold whitespace-nowrap sm:text-xl dark:text-white"
        to={"/"}
      >
        <span className="px-2 py-1 text-white rounded-lg bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          Sahand's
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search ... "
          rightIcon={AiOutlineSearch}
          className="hidden md:inline"
        />
      </form>
      <Button className="w-20 h-10 md:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="hidden w-12 h-10 md:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to={"/sign-in"}>
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active={path === "/"}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about" active={path === "/about"}>
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/projects" active={path === "/projects"}>
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
