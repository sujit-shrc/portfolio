import Header from "@/components/Header"
import TyperComponent from "@/components/NameSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <TyperComponent />
    </main>
  )
}
