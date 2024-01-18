import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation({ book }) {
  const index = volumes.indexOf(book);
  return (
    <>
      {index > 0 && (
        <Link href={`/volumes/${volumes[index - 1].slug}`}>Previous Book</Link>
      )}{" "}
      {index < volumes.length - 1 && (
        <Link href={`/volumes/${volumes[index + 1].slug}`}>Next Book</Link>
      )}
    </>
  );
}

export function RandomButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        router.push(
          `/volumes/${volumes[Math.floor(Math.random() * volumes.length)].slug}`
        );
      }}
    >
      View Random Book
    </button>
  );
}
