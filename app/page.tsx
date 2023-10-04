import BottomNav from "@/components/BottomNav";
import TyperComponent from "@/components/NameSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <TyperComponent />
      <BottomNav />
    </main>
  );
}
