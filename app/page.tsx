import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Halaman Home </h1>
      <br />
      <Link href="/albums">Halaman Albums</Link>
      <br />
      <Link href="/posts">Halaman Postingan</Link>
    </>
  );
}
