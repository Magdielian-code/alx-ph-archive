'use client';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Flex, Link, SimpleGrid, Text } from '@chakra-ui/react';

import React from 'react';

interface Social {
  name: string;
  href: string;
  icon: string;
}

interface FamerDataItem {
  image: string;
  name: string;
  testimonial: string;
  socials: Social[];
}

const FamerData: FamerDataItem[] = [
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've gained are invaluable.",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
  {
    image: 'assets/me3.jpg',
    name: 'Ozioma Agaecheta',
    testimonial: "This program has been an incredible journey. The skills I've jvjibadghbi",
    socials: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ozioma-agaecheta-4ba85424a/",
        icon: "faLinkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/Magdielian-code",
        icon: "faGithub"
      },
      {
        name: "Twitter",
        href: "https://twitter.com/magdiel_amor",
        icon: "faSquareXTwitter"
      }
    ]
  },
];

export default FamerData;