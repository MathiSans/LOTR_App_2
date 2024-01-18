import Image from "next/image";
import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Navigation from "@/components/Navigation";

export default function VolumeData() {
  const router = useRouter();
  const { slug } = router.query;
  const currentBook = volumes.find((book) => book.slug === slug);

  if (!currentBook) {
    return (
      <>
        <h1 style={{ margin: "1rem", color: "blue" }}>404 Error!</h1>{" "}
      </>
    );
  }

  const { title, description, cover, books } = currentBook;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{currentBook.title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      ></Image>
      <br />
      <Navigation book={currentBook}></Navigation>
    </>
  );
}
