import { Flex } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";


function Home() {
    return (
        <Flex direction="row" gap="3" id="summary" height="100vh" width="100vw">
            <Navbar/>
            <Summary />
        </Flex>
    );
}

export default Home;