import Navbar from "../components/Navbar";
import { Flex } from "@radix-ui/themes";

function TaskOverview() {
    return (
        <>
            <Flex direction="row" gap="3" id="summary" height="100vh" width="100vw">
                <Navbar />
            </Flex>
        </> 
    );
}

export default TaskOverview;