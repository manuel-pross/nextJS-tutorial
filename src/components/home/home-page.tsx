import Link from "next/link";
import Image from "next/image";
import { EventCategory } from "@/pages";

const homePage = ({ categories }: { categories: EventCategory[] }) => {
  return (
    <main>
      {categories.map((category) => (
        <Link key={category.id} href={`/events/${category.id}`}>
          <Image width={300} height={300} src={category.image} alt={"hello"} />
          <h2>{category.title}</h2>
          <p>{category.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default homePage;
