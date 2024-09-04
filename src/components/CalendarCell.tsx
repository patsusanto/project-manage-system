import { Flex, ScrollArea, Heading } from "@radix-ui/themes"

interface Props {
    day: string;
}

function CalendarCell({ day }: Props) {
    return(
        <>
            <Flex direction="column" gap="3" className="bg-white rounded-3xl" p="5">
                <Heading>{day}</Heading>
                <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>

                </ScrollArea>
            </Flex>
        </>
        
    );
}

export default CalendarCell