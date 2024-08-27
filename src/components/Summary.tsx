import { Grid, Box, Container, Heading, Flex } from "@radix-ui/themes"

function Summary() {
    return (
        <>  
            <Flex direction="row" gap="3" id="summary" height="100vh" width="100vw">
                <Container p="5">
                    <Heading>Wohngemeinschaft Overview</Heading>
                    <Grid columns="2" gap="4" width="auto" rows="1" align="center" className="overview m-4 rounded-3xl">
                        <Box className="overview p-5 rounded-3xl">
                            <Heading className="pb-3" weight="medium">Requests</Heading>
                            <Box className="bg-white p-3 rounded-3xl">
                            </Box>
                        </Box>
                        <Box className="overview p-5 rounded-3xl">
                            <Heading className="pb-3" weight="medium">Stock Status</Heading>
                            <Box className="bg-white p-3 rounded-3xl">
                            </Box>
                        </Box>
                    </Grid> 
                    <Grid columns="2" gap="4" width="auto" rows="1" align="center" className="m-4 rounded-3xl">
                        <Box className="overview p-5 rounded-3xl">
                            <Heading className="pb-3" weight="medium">Upcoming Tasks</Heading>
                            <Box className="bg-white p-3 rounded-3xl">
                            </Box>
                        </Box>
                        <Box className="overview p-5 rounded-3xl">
                            <Heading className="pb-3" weight="medium">Recent Tasks</Heading>
                            <Box className="bg-white p-3 rounded-3xl">
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Flex>
        </>
    );
}

export default Summary;