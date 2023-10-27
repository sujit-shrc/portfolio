import BottomNav from "@/components/BottomNav";
import TyperComponent from "@/components/NameSection";
import { HiMiniInformationCircle } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <TyperComponent />
      <BottomNav />
      <div className="flex items-center gap-1 mt-4 mb-1.5 md:hidden">
        <HiMiniInformationCircle className="text-xl text-gray-500" />
        <p className="text-gray-700">Tap the text logo to navigate</p>
      </div>
    </main>
  );
}
