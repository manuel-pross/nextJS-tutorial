import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Image
          src={"/images/logo-sample.jpg"}
          width={50}
          height={50}
          alt={"hello"}
        />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">AboutUs</Link>
        </nav>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
    </header>
  );
};

export default Header;
