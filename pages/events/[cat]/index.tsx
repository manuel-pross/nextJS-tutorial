import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next/types";

export type CustomEvent = {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
};

const EventsCatPage = ({
  events,
  pageName,
}: {
  events: CustomEvent[];
  pageName: string;
}) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {events.map((event) => (
          //Mit diesem Link Tag enablet man clients side navigation
          <Link key={event.id} href={`/events/${event.city}/${event.id}`}>
            <Image width={300} height={300} src={event.image} alt={"hello"} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const eventData = await import("../../../data/data.json");
  const allPaths = eventData.events_categories.map((cat) => {
    return {
      params: {
        cat: cat.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false, //In case anything is typed, which does not match the existing ids
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.cat;
  const eventData = await import("../../../data/data.json");

  const events = eventData.allEvents.filter((event) => event.city === id);
  return { props: { events: events, pageName: id } };
};
