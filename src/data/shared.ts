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
        img: '/img/news1.webp',
        date: '6 OCT 2023',
        header: `GRADUATION CEREMONY OF THE NIGERIAN NAVY`,
        text: `SPECIAL BOAT SERVICE BASIC OPERATING CAPABILITY COURSE 18 AND TRANSFER CEREMONY OF VERTICAL INTEGRATED LOGISTICS APPROACH RIGID HULLED INFLATABLE BOAT AT THE JOINT MARITIME SECURITY TRAINING CENTRE, NAVY TOWN OJO LAGOS ON FRIDAY`,
        publisher: 'DINFO',
        source: 'https://www.navy.mil.ng/2023/10/08/graduation-ceremony-of-the-nigerian-navy-special-boat-service-basic-operating-capability-course-18-and-transfer-ceremony-of-vertical-integrated-logistics-approach-rigid-hulled-inflatable-boat-at-the-2/'
    },
    {
        img: '/img/news2.webp',
        date: '2 SEP 2023',
        header: `COMMISSIONING OF PROJECTS AT NIGERIAN NAVY`,
        text: `COMMISSIONING OF PROJECTS AT NIGERIAN NAVY BASIC TRAINING SCHOOL, ONNE BY THE CHIEF OF THE NAVAL STAFF, VICE ADMIRAL EI OGALLA ON SATURDAY`,
        publisher: 'DINFO',
        source: 'https://www.navy.mil.ng/2023/09/03/commissioning-of-projects-at-nigerian-navy-basic-training-school-onne-by-the-chief-of-the-naval-staff-vice-admiral-ei-ogalla-on-saturday-2-september-2023/'
    },
    {
        img: '/img/news3.webp',
        date: '10 JUL 23',
        header: `COURTESY VISIT TO CHIEF OF THE NAVAL STAFF`,
        text: `COURTESY VISIT TO CHIEF OF THE NAVAL STAFF, REAR ADMIRAL IE OGALLA AM BY THE COMMANDANT ARMED FORCES COMMAND AND STAFF COLLEGE, AIR VICE MARSHAL HI ALHAJI ON MONDAY 10 JULY 23`,
        publisher: 'DINFO',
        source: 'https://www.navy.mil.ng/2023/07/10/courtesy-visit-to-chief-of-the-naval-staff-rear-admiral-ie-ogalla-am-by-the-commandant-armed-forces-command-and-staff-college-air-vice-marshal-hi-alhaji-on-monday-10-july-23/'
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