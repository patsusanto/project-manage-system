import { Flex, Heading } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import WeeklyCalendar from "../components/WeeklyCalendar";


function Home() {
    return (
        <>
            <Flex direction="row" gap="3" id="summary" height="100vh" width="100vw">
                <Navbar />
                <Flex direction="column" gap="5" p="4">
                    <Heading>My Shared Flat</Heading>
                    <Flex justify="center">
                        <Heading>Weekly Calendar Overview</Heading>
                    </Flex>
                    <Flex direction="row" justify="center">
                        <WeeklyCalendar />
                    </Flex>
                    
                </Flex>
                
            </Flex>
        </>
    );
}

export default Home;