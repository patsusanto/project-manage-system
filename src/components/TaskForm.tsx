import { Container, Flex, Heading, RadioGroup, TextArea, TextField, Box, Text, Select } from "@radix-ui/themes";
import { ReactElement, JSXElementConstructor, ReactNode } from "react";



function TaskForm() {

    const rows = [];
    for (let i = 1; i < 32; i++) {
        rows.push(<Select.Item value={i.toString()} key={i}>{i}</Select.Item>);
    }

    const months = [];
    for (let j = 1; j < 13; j++) {
        months.push(<Select.Item value={j.toString()} key={j}>{j}</Select.Item>);
    }

    return (
        <Container p="5">
            <Heading>Manage my tasks</Heading>
            <Flex direction="row">
                <Flex direction="row" gap="3" className="task-form rounded-xl" p="5" mt="5">
                    <form>
                        <Flex direction="column" px="5">
                            <Heading className="label pb-3" weight="regular">Task Name</Heading>
                            <Box width="400px" className="bg-white rounded">
                                <TextField.Root variant="classic" placeholder="Enter your task.."/>
                            </Box>
                        </Flex>
                        
                        <Flex  direction="column" p="5">
                            <Heading className="label pb-3" weight="regular">Priority</Heading>
                            <RadioGroup.Root color="lime" defaultValue="1" name="example">
                                <RadioGroup.Item className="label" value="1">Default</RadioGroup.Item>
                                <RadioGroup.Item className="label" value="2">Comfortable</RadioGroup.Item>
                                <RadioGroup.Item className="label" value="3">Compact</RadioGroup.Item>
                            </RadioGroup.Root>
                        </Flex>
                        
                        <Flex direction="column" px="5">
                            <Heading className="label pb-3" weight="regular">Details</Heading>
                            <Box width="400px" className="bg-white rounded">
                                <TextArea variant="classic" placeholder="Enter the details.." />
                            </Box>
                        </Flex>

                        <Flex direction="column" px="5">
                            <Heading className="label py-3" weight="regular">Date</Heading>
                            <Flex direction="row" gap="3" align="center">
                                <Text className="label">Day</Text>
                                <Select.Root defaultValue="Day">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>Day</Select.Label>
                                            {rows}
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>

                                <Text className="label">Month</Text>
                                <Select.Root defaultValue="Month">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>Month</Select.Label>
                                            {months}
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>
                            </Flex>
                        </Flex>

                        <Flex p="5">
                            <button type="submit" className="px-3 py-2 rounded-md" id="create">Create Task</button>
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