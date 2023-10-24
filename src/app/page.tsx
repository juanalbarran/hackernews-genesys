import { Flex } from "@radix-ui/themes";

import Footer from "./components/footer";
import Header from "./components/header";
import StoryList from "./components/stories";



export default async function Home() {

  return (
    <main>
      <Flex direction={'column'} gap={'4'}>
        <Header/>
        <StoryList />
        <Footer />
      </Flex>
    </main>
  )
}