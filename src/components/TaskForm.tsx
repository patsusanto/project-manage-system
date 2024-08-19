import { Container, Flex, Heading, RadioGroup, TextArea, TextField, Box, Button, Select } from "@radix-ui/themes";


function TaskForm() {
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
                            <Flex direction="row" gap="3">
                                <Select.Root defaultValue="apple">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>Fruits</Select.Label>
                                            <Select.Item value="orange">Orange</Select.Item>
                                            <Select.Item value="apple">Apple</Select.Item>
                                            <Select.Item value="grape" disabled>
                                                Grape
                                            </Select.Item>
                                        </Select.Group>
                                        <Select.Separator />
                                        <Select.Group>
                                            <Select.Label>Vegetables</Select.Label>
                                            <Select.Item value="carrot">Carrot</Select.Item>
                                            <Select.Item value="potato">Potato</Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>

                                <Select.Root defaultValue="Day">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>Fruits</Select.Label>
                                            <Select.Item value="orange">Orange</Select.Item>
                                            <Select.Item value="apple">Apple</Select.Item>
                                            <Select.Item value="grape" disabled>
                                                Grape
                                            </Select.Item>
                                        </Select.Group>
                                        <Select.Separator />
                                        <Select.Group>
                                            <Select.Label>Vegetables</Select.Label>
                                            <Select.Item value="carrot">Carrot</Select.Item>
                                            <Select.Item value="potato">Potato</Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>

                                <Select.Root defaultValue="apple">
                                    <Select.Trigger />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Label>Fruits</Select.Label>
                                            <Select.Item value="orange">Orange</Select.Item>
                                            <Select.Item value="apple">Apple</Select.Item>
                                            <Select.Item value="grape" disabled>
                                                Grape
                                            </Select.Item>
                                        </Select.Group>
                                        <Select.Separator />
                                        <Select.Group>
                                            <Select.Label>Vegetables</Select.Label>
                                            <Select.Item value="carrot">Carrot</Select.Item>
                                            <Select.Item value="potato">Potato</Select.Item>
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