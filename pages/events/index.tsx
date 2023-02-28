import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import { EventCategory } from "..";

const EventsPage = ({ categories }: { categories: EventCategory[] }) => {
  return (
    <div>
      <h1>Events Page</h1>
      {categories.map((category) => (
        <Link key={category.id} href={`/events/${category.id}`}>
          <Image width={300} height={300} src={category.image} alt={"hello"} />
          <h2>{category.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;

//Get static props only during build time, not on client request
export const getStaticProps: GetStaticProps = async () => {
  const eventData = await import("../../data/data.json");
  return {
    props: {
      categories: [...eventData.events_categories],
    },
  };
};
