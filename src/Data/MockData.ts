import {Performance} from "../entities/Perfomance/Perfomance.ts";
import IvanImg from "@/shared/images/innopolis.jpg";
import NewsImage1 from "@/shared/images/news1.jpg"
import NewsImage2 from "@/shared/images/news2.jpg"
import type {NewsItem} from "../entities/Perfomance/NewsItem.ts";

export const MOCK_PERFORMANCES: Performance[] = [
    {
        id: 1,
        title: 'Иваново детство',
        date: '15 дек, 19:00',
        ageLimit: '6+',
        description: 'Волшебная рождественская сказка',
        duration: "1ч.40мин",
        image: IvanImg,
    },
    {
        id: 2,
        title: 'Ревизор',
        date: '20 дек, 18:00',
        ageLimit: '12+',
        description: 'Классическая комедия',
        duration: "1ч.40мин",
        image: IvanImg,
    },
    // Добавьте больше моковых данных
];

export const MOCK_NEWS: NewsItem[] = [
    {
        id: 1,
        title: '24 мая - благотворительный показ спектакля «Иваново детство»',
        description: 'Все средства от реализации билетов будут семьям погибших в казанской гимназии №175\n' +
            '\n' +
            '11 мая 2021 года в казанской гимназии №175 случилась трагедия, которая унесла жизни 9 человек, 7 из них - дети. К сожалению, и сегодня проявляется немыслимая жестокость и бесчеловечность. К сожалению, и сегодня детство не всегда бывает счастливым.\n' +
            '\n' +
            '\n' +
            '24 мая в 18:30 на нашей сцене состоится спектакль «Иваново детство», который будет посвящен памяти жертв трагедии в казанской гимназии №175. В этот вечер мы тихо вспомним о тех, кто так и остался ребенком. Все средства от реализации билетов будут переданы семьям погибших.',
        image: NewsImage1,
        date: '10 дек 2023',
    },
    {
        id: 2,
        title: 'Новый сезон открыт!',
        description: 'Театр начинает новый сезон с премьеры спектакля "Щелкунчик"',
        image: NewsImage1,
        date: '10 дек 2023',
    },
    {
        id: 3,
        title: 'Мастер-класс для детей',
        description: 'Приглашаем детей на мастер-класс по актерскому мастерству',
        image: NewsImage2,
        date: '5 дек 2023',
    },
    {
        id: 3,
        title: 'Мастер-класс для детей',
        description: 'Приглашаем детей на мастер-класс по актерскому мастерству',
        image: NewsImage2,
        date: '5 дек 2023',
    },

    // Добавьте больше новостей
];