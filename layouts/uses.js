import Container from '@/components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Uses – Shashank Priyadarshi"
      description="Here is some machines I wish was part of my body and mind."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          These are some of the Tech that I use and love, It may not be the greatest and best but it gets the job done
          and I am proud of what I own so much that sometimes it feels like they are a part of me. 🤖
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
