const dataList = [
    {
        id: 1,
        name: 'Nezuko',
        avatar: 'img/Nezuko-Kamado.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2021 10:10:40',
                text: "Hello brother!",
                status: 'received',
            },
            {
                date: '28/03/2021 10:11:50',
                text: "Me and Zenitsu are waiting for you to come home.",
                status: 'received',
            },
            {
                date: '28/03/2021 10:15:10',
                text: "Something happened?",
                status: 'sent',

            }
        ],
    },
    {
        id: 2,
        name: 'Zenitsu Agatsuma',
        avatar: 'img/Zenitsu-Agatsuma.jpeg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 16:15:22',
                text: "If you can only do one thing, hone it to perfection. Hone it to the utmost limit!",
                status: 'received',
            }
        ],
    },
    {
        id: 3,
        name: 'Genya Shinazugawa',
        avatar: 'img/Genya-Shinazugawa.jpeg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: "Train to death. At the end of the day, there is nothing else you can do.",
                status: 'received',
            },
            {
                date: '28/03/2020 10:10:40',
                text: ":(",
                status: 'sent',
            },
        ],
    },
    {
        id: 4,
        name: 'Giyu Tomioka',
        avatar: 'img/Giyu-Tomioka.jpeg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: "Not today or anytime in future! Even I'm broken, i will never give up no matter what!",
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: "Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action.",
                status: 'received',
            },
            {
                date: '10/01/2020 15:50:00',
                text: "The weak have no rights or choices. Their only fate is to be relentlessly crushed by the strong!",
                status: 'received',
            },
        ],
    },
    {
        id: 5,
        name: 'Inosuke Hashibira',
        avatar: 'img/inosuke-hashibira.jpeg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received',
            }
        ],
    },
    {
        id: 7,
        name: 'Kanao Tsuyuri',
        avatar: 'img/Kanao-Tsuyuri.jpeg',
        visible: true,
        messages: [
            {
                date: '31/01/2021 09:30:35',
                text: "Morning Kanao!",
                status: 'sent',
            },
            {
                date: '31/01/2021 13:49:22',
                text: "Why you're not answering me?",
                status: 'sent',
            },
        ],
    },
    {
        id: 8,
        name: 'Mitsuri Kanroji',
        avatar: 'img/Mitsuri-Kanroji.jpeg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: "Stop it. I don't care!",
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'This is why everyone hates you.',
                status: 'received',
            },
        ],
    },
    {
        id: 9,
        name: 'Muzan Kibutsuji',
        avatar: 'img/Muzan-Kibutsuji.jpeg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: "The bond between Nezuko and me, can't be severed by anyone!",
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                text: "Are you sure about it?",
                status: 'received',
            }
        ],
    },
    {
        id: 10,
        name: 'Sakonji Urokodaki',
        avatar: 'img/Sakonji-Urokodaki.png',
        visible: true,
        messages: [
            {
                date: '10/02/2021 15:50:00',
                text: "Remember: swords break easily.",
                status: 'received',
            }
        ],
    },
    {
        id: 11,
        name: 'Shinobu Kocho',
        avatar: 'img/Shinobu-Kocho.jpeg',
        visible: true,
        messages: [
            {
                date: '07/05/2021 13:50:00',
                text: "Humans and demons, we both should get along together.",
                status: 'received',
            },
            {
                date: '07/05/2021 14:10:00',
                text: "Yes, we should.",
                status: 'sent',
            }
        ],
    },
    {
        id: 12,
        name: 'Tamayo',
        avatar: 'img/tamayo.jpeg',
        visible: true,
        messages: [
            {
                date: '06/05/2021 14:20:00',
                text: "For any kind of wound, there's always some kind of medicine or treatment.",
                status: 'received',
            },
        ],
    },
];

const aiAnswersList = [
    "Ok!",
    "Ciao anche a te!",
    "Tutto bene, tu come stai?",
    "Torno a casa per le vacanze estive.",
    "In famiglia tutto bene?",
    "Salutami tutti.",
]