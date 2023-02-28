import { GetStaticPaths, GetStaticProps } from "next";

import Image from "next/image";

export type EventWithMail = {
  city: string;
  description: string;
  emails_registered: string[];
  id: string;
  image: string;
  title: string;
};

const EventPage = ({ event }: { event: EventWithMail }) => {
  return (
    <div>
      <Image
        src={event.image}
        width={1000}
        height={700}
        alt={event.title}
      ></Image>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </div>
  );
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await import("../../../data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((event) => {
    return {
      params: {
        cat: event.city,
        id: event.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await import("../../../data/data.json");
  const eventData = data.allEvents.find((event) => id === event.id);
  return {
    props: {
      event: eventData,
    },
  };
};
