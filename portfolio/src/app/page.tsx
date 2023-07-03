import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";

export default function Home() {
  return (
    <main className=''>
      <div className=''>
        <Button />
        <Text
          text='TextTextTextTextText'
          title='Title'
          sizeText={"large"}
          sizeTitle={"large"}
        />
      </div>
    </main>
  );
}
