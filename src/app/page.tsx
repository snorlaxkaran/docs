import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      Click{" "}
      <Link href={"/documents/12345"}>
        <span className="text-blue-500 underline">&nbsp;here&nbsp;</span>
      </Link>{" "}
      to go to the document id
    </div>
  );
}
