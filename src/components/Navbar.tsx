import { Cross1Icon, PersonIcon, RowsIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import '../index.css'
import { useState } from "react";
import { Link } from "react-router-dom";



function Navbar() {
    
    //hook where initial variable is the rowsicon, and when clicked, it changes to the cross icon
    const [currentIcon, setCurrentIcon] = useState(0);
    //hook for sidebar status
    const [currentSidebarOpen, setCurrentSidebarOpen] = useState(false);

    const changeIcon = () => {
        setCurrentIcon((prevIcon) => (prevIcon + 1) % icons.length);
    }

    const changeSidebar = () => {
        setCurrentSidebarOpen((valueSidebar) => (!valueSidebar))
    }

    const handleClick = () => {
        changeIcon();
        changeSidebar();
    }

    const icons: React.ReactNode[] = [
        <RowsIcon color="#C6E070" onClick={handleClick} cursor="pointer"/>,
        <Cross1Icon color="#C6E070" onClick={handleClick} cursor="pointer"/>
    ]

    return (
        <Flex direction='column' p="5" height="100vh" className="nav" gap="5" justify="between">
            {currentSidebarOpen == true ? (
                <>  
                    <Flex direction="column" gap="2">
                        {icons[currentIcon]}
                        <Link to='/'>Overview</Link>
                        <Link to='/task-overview'>Task Overview</Link>
                    </Flex>
                    <Flex direction="column" className="justify-items-end" gap="3">
                        <Flex direction="row" align="center">
                            <PersonIcon color="#C6E070" cursor="pointer" />
                            <Text className="px-4">Username</Text>
                        </Flex>
                    </Flex>
                    
                    
                </>
                
            ) : <>
                    <Flex direction="column" height="100vh" gap="5" className="nav" justify="between">
                        <Flex>
                            {icons[currentIcon]}
                        </Flex>
                        <Flex direction="row" align="center">
                            <PersonIcon color="#C6E070" cursor="pointer" />
                            <Text>{'\u00A0'}</Text>
                        </Flex>
                    </Flex>
                </> }
        </Flex>
    );
}

export default Navbar;