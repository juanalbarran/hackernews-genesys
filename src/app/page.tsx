import { Flex } from "@radix-ui/themes";
import Footer from "./components/footer";
import Header from "./components/header";
import StoryList from "./components/stories";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '12';

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  return (
    <main>
      <Flex direction={'column'} gap={'4'}>
        <Header/>
        <StoryList start={start} end={end}/>
        <Footer />
      </Flex>
    </main>
  )
}