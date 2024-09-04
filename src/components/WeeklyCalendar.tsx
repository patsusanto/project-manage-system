import { Flex, Heading } from "@radix-ui/themes";
import CalendarCell from "./CalendarCell";

function WeeklyCalendar() {
    return (
        <>
            <Flex direction="row" gap="5" className="bg-slate-200 rounded-3xl" p="5">
                <CalendarCell day="Monday" />
                <CalendarCell day="Tuesday" />
                <CalendarCell day="Wednesday" />
                <CalendarCell day="Thursday" />
                <CalendarCell day="Friday" />
                <CalendarCell day="Saturday" />
                <CalendarCell day="Sunday" />
            </Flex>
        </>    
    );
    
}

export default WeeklyCalendar