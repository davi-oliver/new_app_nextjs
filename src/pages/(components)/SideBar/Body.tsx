'use client';

import {
    Box,
    Button,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoSVG from '../../../assets/logo.svg';
import { IoMdContact, IoMdFitness } from 'react-icons/io';


const SidebarBody: React.FC = function () {
    const menuGroups = [
        {
            name: 'Menu',
            items: [
                {
                    name: 'Contato',
                    icon: <IoMdContact />,
                    href: '/contato',
                },
                {
                    name: 'Treinamentos',
                    icon: < IoMdFitness />,
                    href: '/trainings',
                },

            ],
        },


    ];

    const pathname = usePathname();

    const isActive = (url: string): boolean => pathname === url;

    const concatString = (text: string): string => {
        if (text.length > 19) {
            return `${text.slice(0, 19)}...`;
        }

        return text;
    };
    return (
        <>
            <Box py="16px" px="32px" borderBottom="1px solid" borderColor="dashboardBorder">
                <Image src={LogoSVG.src} w="200px" />
            </Box>
            <Box px="24px" py="32px">
                {
                    menuGroups.map((group) => (
                        <Box key={group.name}>
                            <Box px="16px" mb="16px">
                                <Text
                                    color="white"
                                    textTransform="uppercase"
                                    fontSize="12px"
                                >
                                    {group.name}

                                </Text>
                            </Box>

                            <Stack spacing="8px">
                                {
                                    group.items.map((item) => (
                                        <Link
                                            href={item.href}
                                            key={`button-${item.name}`}
                                        >
                                            <Button
                                                justifyContent="flex-start"
                                                variant="ghost"
                                                leftIcon={item.icon}
                                                h="40px"
                                                w="100%"
                                                color={isActive(item.href) ? 'brand.500' : 'white'}
                                                bg={isActive(item.href) ? 'brand.100' : 'none'}
                                                _hover={{
                                                    color: 'brand.500',
                                                    bg: 'brand.00',
                                                }}
                                            >
                                                {concatString(item.name)}
                                            </Button>
                                        </Link>
                                    ))
                                }
                            </Stack>

                            <Box my="32px">
                                <hr />
                            </Box>

                        </Box>
                    ))
                }

            </Box>
        </>
    );
};

export default SidebarBody;
