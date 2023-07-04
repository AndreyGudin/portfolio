import { SelfIntroduction } from "@/features/SelfIntroduction";
import { Skills } from "@/features/Skills";
import { Tab } from "@/shared/ui/Tab/Tab";

export default function Home() {
  return (
    <main className='p-10 flex flex-col items-center'>
      <SelfIntroduction />
      <Skills />
    </main>
  );
}
