import { Projects } from "@/features/Projects/ui/Projects/Projects";
import { SelfIntroduction } from "@/features/SelfIntroduction";
import { Skills } from "@/features/Skills";

export default function Home() {
  return (
    <main className='xl:p-32 gap-10 flex flex-col items-center'>
      <SelfIntroduction className='bg-block1 dark:bg-dark-block1 xl:p-block transition-all' />
      <Skills className='bg-block2 dark:bg-dark-block2 xl:p-block transition-all' />
      <Projects className='bg-block3 dark:bg-dark-block3 xl:p-block transition-all' />
    </main>
  );
}
