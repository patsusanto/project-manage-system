import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import { Flex } from "@radix-ui/themes";

function TaskOverview() {
    return (
        <>
            <Flex direction="row" gap="3" id="summary" height="100vh" width="100vw">
                <Navbar />
                <TaskForm />
            </Flex>
        </> 
    );
}

export default TaskOverview;