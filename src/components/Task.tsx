import { Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    
}

function Task({ children }: Props) {
    return (
        <Flex className="task p-2 rounded-xl items-center justify-between">
            {children}
        </Flex>
    );
}

export default Task;