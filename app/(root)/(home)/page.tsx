import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
    <div>
    <UserButton />
    <h1 className="h1-bold">Hello fam!</h1></div>
    </main>
  )
}
