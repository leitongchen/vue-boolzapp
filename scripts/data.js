const dataList = [
    {
        id: 1,
        name: 'Tanjiro',
        avatar: 'img/tanjiro-kamado.jpeg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'I will make you never Forget the Secret Techniques Urokodaki has taught you.',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'WHAT? Why?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                text: "Trust me. I will make you never Forget the Secret Techniques Urokodaki has taught you.",
                status: 'received'
            }
        ],
    },
    {
        id: 2,
        name: 'Zenitsu Agatsuma',
        avatar: 'img/Zenitsu-Agatsuma.jpeg',
        visible: true,
        messages: [],
    },
    {
        id: 3,
        name: 'Genya Shinazugawa',
        avatar: 'img/Genya-Shinazugawa.jpeg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
            }
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
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
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
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        id: 6,
        name: 'Kanae Kocho',
        avatar: 'img/Kanae-Kocho.jpeg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
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
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
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
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
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
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
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
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        id: 11,
        name: 'Shinobu Kocho',
        avatar: 'img/Shinobu-Kocho.jpeg',
        visible: true,
        messages: [],
    },
    {
        id: 12,
        name: 'Tamayo',
        avatar: 'img/tamayo.jpeg',
        visible: true,
        messages: [],
    },
];

const aiAnswersList = [
    "Ok!",
    "Tutto bene e tu?",
    "Ciao anche a te",
    "Bella giornata oggi!",
    "Buongiorno splendore!",
]