import Link from "next/link";
import { volumes } from "@/lib/data";
import { introduction } from "@/lib/data";
import { RandomButton } from "@/components/Navigation";

export default function AllVolumes() {
  return (
    <>
      <Link href="/">← Home</Link>
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
      <RandomButton></RandomButton>
    </>
  );
}
