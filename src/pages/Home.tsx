import { Flex } from "@radix-ui/themes";
import Navbar from "../components/Navbar";


function Home() {
    return (
        <>
            <Flex direction="row" gap="3" id="summary" height="100vh" width="100vw">
                <Navbar />
            </Flex>
        </>
    );
}

export default Home;