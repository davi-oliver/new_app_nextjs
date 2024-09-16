'use client';

import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { IoMdMenu } from 'react-icons/io';

import { usePathname } from 'next/navigation';

import SidebarBody from './Body';

const Sidebar: React.FC = function () {
    const isMobile = useBreakpointValue({ base: true, lg: false });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);

    const pathname = usePathname();

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    if (isMobile) {
        return (
            <>
                <IconButton
                    aria-label="open menu"
                    ref={btnRef}
                    variant="ghost"
                    onClick={onOpen}
                    icon={<IoMdMenu />}
                />
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody px="0">
                            <SidebarBody />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>
        );
    }

    return (
        <Box
            h="100%"
            bg="#121214"
            borderRight="1px solid"
            borderColor="gray.200"
            display={{ base: 'none', lg: 'block' }}
        >
            <SidebarBody />
        </Box>
    );
};

export default Sidebar;
