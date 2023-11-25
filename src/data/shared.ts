import { SVGIconName } from "@/types";

export interface INavMenuItem {
    title: string;
    url: string;
}

export interface INavMenu {
    title: string;
    url: string;
    subNav: {
        [key: string]: INavMenuItem[];
    };
}

export interface IFeatureNews {
    img: string;
    date: string;
    header: string;
    text: string;
    publisher: string;
    source: string
}
export const navMenuItems: INavMenu[] = [
    {
        title: "About Nigerian Navy",
        url: "/about",
        subNav: {
            'who are the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Roles in the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Nigerian Navy structure': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ]
        }
    },
    {
        title: "life as sailor",
        url: "/life",
        subNav: {
            'who are the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Roles in the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Nigerian Navy structure': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ]
        }
    },
    {
        title: "become a sailor",
        url: "/join",
        subNav: {
            'who are the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Roles in the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Nigerian Navy structure': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ]
        }
    },
    {
        title: "parents and families",
        url: "/families",
        subNav: {
            'who are the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Roles in the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Nigerian Navy structure': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ]
        }
    },
    {
        title: "explore the corp",
        url: "/explore",
        subNav: {
            'who are the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Roles in the Nigerian Navy': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ],
            'Nigerian Navy structure': [
                {
                    title: "Nigerian Navy Purpose",
                    url: "/about",
                },
                {
                    title: "History of Nigerian Navy",
                    url: "/about",
                },
                {
                    title: "Nigerian Navy uniform and symbols",
                    url: "/about",
                },
            ]
        }
    },
];

export const featurenews: IFeatureNews[] = [
    {
        img: '/img/millitary1.webp',
        date: 'August 4, 2023',
        header: `FINAL DECISION: TOP MILITARY COURT RULES THAT CHIEF ERIC GILMET CHARGES ARE AGAIN DISMISSED WITH PREJUDICE`,
        text: `On August 15, 2022, the Navy-Marine Corps Court of Criminal Appeals (NMCCA) overturned the trial judge’s original dismissal of Chief Eric Gilmet’s case and reinstated all charges that had previously been dismissed with prejudice on February 9, 2022`,
        publisher: 'Okenwa Nnabuike',
        source: 'vanguard'
    },
    {
        img: '/img/millitary1.webp',
        date: 'August 4, 2023',
        header: `FINAL DECISION: TOP MILITARY COURT RULES THAT CHIEF ERIC GILMET CHARGES ARE AGAIN DISMISSED WITH PREJUDICE`,
        text: `On August 15, 2022, the Navy-Marine Corps Court of Criminal Appeals (NMCCA) overturned the trial judge’s original dismissal of Chief Eric Gilmet’s case and reinstated all charges that had previously been dismissed with prejudice on February 9, 2022`,
        publisher: 'Okenwa Nnabuike',
        source: 'vanguard'
    },
    {
        img: '/img/millitary1.webp',
        date: 'August 4, 2023',
        header: `FINAL DECISION: TOP MILITARY COURT RULES THAT CHIEF ERIC GILMET CHARGES ARE AGAIN DISMISSED WITH PREJUDICE`,
        text: `On August 15, 2022, the Navy-Marine Corps Court of Criminal Appeals (NMCCA) overturned the trial judge’s original dismissal of Chief Eric Gilmet’s case and reinstated all charges that had previously been dismissed with prejudice on February 9, 2022`,
        publisher: 'Okenwa Nnabuike',
        source: 'vanguard'
    },
]

export const socialMedia: { icon: SVGIconName, link: string }[] = [
    { icon: 'face-book', link: 'https://www.facebook.com/profile.php?id=100070652747952&mibextid=ZbWKwL' },
    { icon: 'instagram', link: 'https://www.instagram.com/ght_education' },
    { icon: 'twitter', link: 'https://www.instagram.com/ght_educations' },
]

export const insights: { head: string, text: string }[] = [
    {
        head: `Global Sailor 2023`,
        text: `Leading the 2023 global sailors ranking, showcasing the prowess and dedication of the Nigerian Navy. Earned by dedication and setting high standards`
    },
    {
        head: `Elite Training`,
        text: `Ninety-nine percent undergo rigorous training, ensuring our forces are among the best globally. Our commitment to excellence is reflected in top-tier facilities.`
    },
    {
        head: `Swift, Agile Forces`,
        text: `Exemplifying agility, our forces respond swiftly to challenges. Successfully tackling insurgency, our skilled members safeguard our nation with precision.`
    },
    {
        head: `Established in 1990`,
        text: `Founded in 1990, the Nigerian Navy has been integral to our military history. Evolving with time, we uphold the highest maritime defense standards.`
    },
]