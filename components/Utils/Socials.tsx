'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Flex, Link, SimpleGrid, Text } from '@chakra-ui/react';

const socials = [   
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/', icon: faLinkedin },
    { name: 'GitHub', href: 'https://github.com/Magdielian-code', icon: faGithub },
    { name: 'Twitter', href: 'https://x.com/magdiel_amor', icon: faXTwitter },
    { name: 'Email', href: 'mailto:oziomaagaecheta81@gmail', icon: faEnvelope },
    { name: 'YouTube', href: 'https://youtube.com/@ocagaecheta?feature=shared', icon: faYoutube },
    { name: 'Resume', href: 'https://docs.google.com/document/d/13vUzdjZVFPpe5n7ydDjwHywxaVZMA3THi-Ci7Msm6V0/edit?usp=sharing', icon: faFile}
];

export const Socials = () => {
    return (
        <SimpleGrid mt={6} columns={3} spacingY={6} spacingX={10}>
            {socials.map((link) => (
                <Link key={link.href} href={link.href}>
                    <Flex>
                        <FontAwesomeIcon 
                            icon={link.icon} 
                            size='md'
                            style={{ color: '#E7BC91',}}
                        />
                        <Text ml={2} color={'white'} fontWeight={'light'} fontSize={'sm'}>{link.name}</Text>
                    </Flex>
                </Link>
            ))}
        </SimpleGrid>
    );
}

export default Socials;