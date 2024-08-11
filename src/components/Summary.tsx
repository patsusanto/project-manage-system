import { Grid, Box, Container, Heading, Flex, Badge } from "@radix-ui/themes"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Task from "./Task";

function Summary() {
    return (
        <>  
            <Flex direction="row" gap="3" id="summary" height="100vh" width="100vw">
                <Flex align="center">
                    <button className="btn p-3 rounded-3xl">
                        <ChevronLeftIcon cursor="pointer" color="#C6E070"/>
                    </button>                    
                </Flex>
                <Container p="5">
                    <Heading>Project Overview</Heading>
                    <Heading className="m-4" weight="regular">Project Name</Heading>
                    <Grid columns="2" gap="4" p="5" width="auto" rows="1" align="center" className="overview m-4 rounded-xl">
                        <Heading weight="regular">General Information</Heading>
                        <Heading weight="regular">Progress</Heading>
                        <Box className="bg-white p-3 rounded-xl">
                        </Box>
                        <Box className="bg-white p-3 rounded-xl">
                        </Box>
                    </Grid>
                    <Grid columns="2" gap="4" width="auto" rows="1" align="center" className="m-4 rounded-xl">
                        <Box className="upcoming p-3 rounded-xl">
                            <Heading className="p-3" weight="regular">Upcoming Tasks</Heading>
                            <Task>
                                <p>Gambling</p>
                                <Badge color="orange" className="mx-3">Due By: 01.01.2024</Badge>
                            </Task>
                        </Box>
                        
                        <Box className="finished p-3 rounded-xl">
                            <Heading className="new p-3" weight="regular">Newest Changes</Heading>
                            <Task>
                                <Flex direction="row" justify="between" align="center">
                                    <p>Nuts</p>
                                    <Badge color="lime" className="mx-3">2 days ago</Badge>
                                </Flex>
                            </Task>
                        </Box>
                    </Grid>
                </Container>
                <Flex align="center" className="p-3">
                    <button className="btn p-3 rounded-3xl">
                        <ChevronRightIcon cursor="pointer" color="#C6E070"/>
                    </button>
                </Flex>
            </Flex>
        </>
    );
}

export default Summary;