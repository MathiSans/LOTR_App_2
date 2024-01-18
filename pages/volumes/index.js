import Link from "next/link";
import { volumes } from "@/lib/data";
import { introduction } from "@/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          router.push(
            `/volumes/${
              volumes[Math.floor(Math.random() * volumes.length)].slug
            }`
          );
        }}
      >
        View Random Book
      </button>
    </>
  );
}
