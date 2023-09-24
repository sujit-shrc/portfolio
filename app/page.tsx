import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import TyperComponent from "@/components/NameSection";

export default function Home() {
  return (
    <main className="h-[calc(100vh-120px)] flex flex-col items-center justify-between pt-16 md:pt-28 lg:pt-32 xl:pt-40">
      <TyperComponent />
      <BottomNav />
    </main>
  );
}
