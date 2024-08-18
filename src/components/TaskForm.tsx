import { Container, Flex, Heading, RadioGroup, TextArea, TextField } from "@radix-ui/themes";
import * as Label from "@radix-ui/react-label";
function TaskForm() {
    return (
        <Container p="5">
            <Heading>Manage my tasks</Heading>
            <Flex direction="row">
                <Flex direction="row" gap="3" className="task-form rounded-xl" p="5" mt="5">
                    <form>
                        <Flex direction="column" px="5">
                            <Label.Root className="label text-[15px] font-medium leading-[35px]" htmlFor="firstName">
                                Task Name
                            </Label.Root>
                            <TextField.Root placeholder="enter your task" />
                        </Flex>
                        
                        <Flex p="5">
                            <RadioGroup.Root color="lime" defaultValue="1" name="example">
                                <RadioGroup.Item className="label" value="1">Default</RadioGroup.Item>
                                <RadioGroup.Item className="label" value="2">Comfortable</RadioGroup.Item>
                                <RadioGroup.Item className="label" value="3">Compact</RadioGroup.Item>
                            </RadioGroup.Root>
                        </Flex>
                        
                        <Flex direction="column" px="5">
                            <Label.Root className="label text-[15px] font-medium leading-[35px]" htmlFor="firstName">
                                Details
                            </Label.Root>
                            <TextArea placeholder="Enter the details.." />
                        </Flex>
                    </form>
                </Flex>

                <Flex>
        
                </Flex>
            </Flex>
        </Container>
        
    )
    
}

export default TaskForm;