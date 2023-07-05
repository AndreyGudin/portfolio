import { Projects } from "@/features/Projects/ui/Projects/Projects";
import { SelfIntroduction } from "@/features/SelfIntroduction";
import { Skills } from "@/features/Skills";

export default function Home() {
  return (
    <main className='p-32 gap-10 flex flex-col items-center'>
      <SelfIntroduction className='bg-block1 dark:bg-dark-block1 p-block' />
      <Skills className='bg-block2 dark:bg-dark-block2 p-block' />
      <Projects className='bg-block3 dark:bg-dark-block3 p-block' />
    </main>
  );
}
