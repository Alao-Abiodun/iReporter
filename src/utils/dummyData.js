const users = [
    {
        id: 1,
        firstname: 'saheed',
        lastname: 'obanikoro',
        othernames: 'eko',
        email: 'saheed@gmail.com',
        phoneNumber: '08123457594',
        username: 'obanikoro_saheed',
        registered: false,
        isAdmin: false,
    },
    {
        id: 2,
        firstname: 'opeyemi',
        lastname: 'abiku',
        othernames: 'alaye',
        email: 'opeyemi@gmail.com',
        phoneNumber: '0812341231',
        username: 'opeyemi_abiku',
        registered: false,
        isAdmin: false,
    },
    {
        id: 3,
        firstname: 'Abiodun',
        lastname: 'Alao',
        othernames: 'AbdulRahman',
        email: 'abiodundev@gmail.com',
        phoneNumber: '09025244070',
        username: 'Alao-Abiodun',
        registered: true,
        isAdmin: true,
    }
];


const incidents = [
    {
        id: 1,
        createdOn: '2019-12-25',
        createdBy: '',
        type: ['red-flag'],
        location: ['2.35', '1.90'],
        status: ['rejected'],
        images: 'abiodun.jpg',
        videos: 'marry.mp4',
        comment: 'This is really serious, please look into the situation.'
    },
    {
        id: 2,
        createdOn: '2020-12-25',
        createdBy: '',
        type: ['intervention'],
        location: ['2.35', '1.90'],
        status: ['resolved'],
        images: 'road.jpg',
        videos: 'mining.mp4',
        comment: 'This road is bad and cause accident when travelling at night.'
    },
    {
        id: 3,
        createdOn: '2021-07-30',
        createdBy: '',
        type: ['intervention'],
        location: ['2.35', '1.90'],
        status: ['resolved'],
        images: ['killing.jpg'],
        videos: ['deathkillings.mp4'],
        comment: 'This totally outrageous and such act should be taken away and penalized.'
    }
]

module.exports = {users, incidents};
