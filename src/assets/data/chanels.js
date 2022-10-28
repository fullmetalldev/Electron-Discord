import TakeItEasy from './MIKA  Relax Take It Easy.mp3';
import MockingBird from './Mockingbird  sped up.mp3';
import SweaterWeather from './The Neighbourhood  Sweater Weather speed up.mp3';
import ImNotOnlyOne from './Im_not_the_only_one.mp3';


export const channelsData = [
    {
        image: 'https://1.bp.blogspot.com/-mFUANZQ-Lys/Xf8yCVLHoTI/AAAAAAAAAAc/owgY9vgVMcYi8gdw7rAPp4YY2aA30J7bwCLcBGAsYHQ/s320/Pc46876.jpg',
        title: 'Gaming Kitchen',
        voiceChanels: [
            {title: 'ChillZone'},
            {title: 'Test'},
            {title: 'Disco'}
        ],
        chatChanels: [
            {
                title: 'Releases',
                messages: []
            },
            {
                title: 'Giveaways (Epic Games)',
                messages: []
            },
            {
                title: 'Chat',
                messages: []
            }
        ],

    },
    {
        image: 'https://эрудит.kz/uploads/posts/2017-12/1514204578_mini_1.jpg',
        title: 'Music Room',
        voiceChanels: [
            {title: 'ChillZone'},
            {title: 'Work & Listen'},
            {title: 'Disco'}
        ],
        messages: [],
        chatChanels: [
            {
                title: 'Songs List',
                list: [
                    {
                        file: ImNotOnlyOne,
                        name: "I'm not the only one - Sam Smith"
                    },
                    {
                        file: MockingBird,
                        name: "Mocking Bird Speed Up"
                    },
                    {
                        file: SweaterWeather,
                        name: "Sweater Weather Speed Up"
                    },
                    {
                        file: TakeItEasy,
                        name: 'Take It Easy'
                    }
                ],
                messages: []
            }
        ]
    },
    {
        image: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7c/7cc6abe0257a1205cf6ab28efbaefeeb6d6698b3_full.jpg',
        title: 'Anime Room',
        messages: [],
        voiceChanels: [
            {title: 'Talking'},
            {title: 'Kimetsu No Yaiba'},
            {title: 'Saga of Vinland'}
        ],
        chatChanels: [
            {
                title: 'Releases',
                messages: []
            },
            {title: 'Discussion', messages: []}
        ]
    }
]