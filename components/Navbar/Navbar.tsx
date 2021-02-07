import Link from "next/link";
import { StyledUl } from "./Navbar.style";

const Navbar = () => (
  <StyledUl>
    <li>
      <Link href='/'>
        <a> Home </a>
      </Link>
    </li>
    <li>
      <Link href='/about'>
        <a> About </a>
      </Link>
    </li>
  </StyledUl>
);

export default Navbar;
