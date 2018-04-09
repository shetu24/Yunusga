setTimeout(function(){
    $(':checkbox, :radio, select').styler();
    $(':file').styler();
},250);

var brands = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];

var specData = [
    { label: "Монтажник", category: "Специальность" },
    { label: "Слесарь", category: "Специальность" },
    { label: "Сервисный инженер", category: "Специальность" },
    { label: "Монтаж", category: "Услуга" },
    { label: "Сервисное обслуживание", category: "Услуга" },
    { label: "Замена насоса", category: "Услуга" }
];

var metroData = [
  {
    "value": "Авиамоторная",
    "line_id": "3"
  },
  {
    "value": "Автозаводская",
    "line_id": "25"
  },
  {
    "value": "Автозаводская",
    "line_id": "1"
  },
  {
    "value": "Академическая",
    "line_id": "5"
  },
  {
    "value": "Александровский сад",
    "line_id": "2"
  },
  {
    "value": "Алексеевская",
    "line_id": "5"
  },
  {
    "value": "Алма-Атинская",
    "line_id": "1"
  },
  {
    "value": "Алтуфьево",
    "line_id": "4"
  },
  {
    "value": "Андроновка",
    "line_id": "25"
  },
  {
    "value": "Аннино",
    "line_id": "4"
  },
  {
    "value": "Арбатская",
    "line_id": "8"
  },
  {
    "value": "Арбатская",
    "line_id": "2"
  },
  {
    "value": "Аэропорт",
    "line_id": "1"
  },
  {
    "value": "Бабушкинская",
    "line_id": "5"
  },
  {
    "value": "Багратионовская",
    "line_id": "2"
  },
  {
    "value": "Балтийская",
    "line_id": "25"
  },
  {
    "value": "Баррикадная",
    "line_id": "9"
  },
  {
    "value": "Бауманская",
    "line_id": "8"
  },
  {
    "value": "Беговая",
    "line_id": "9"
  },
  {
    "value": "Белокаменная",
    "line_id": "25"
  },
  {
    "value": "Белорусская",
    "line_id": "11"
  },
  {
    "value": "Белорусская",
    "line_id": "1"
  },
  {
    "value": "Беляево",
    "line_id": "5"
  },
  {
    "value": "Бибирево",
    "line_id": "4"
  },
  {
    "value": "Библиотека им. Ленина",
    "line_id": "7"
  },
  {
    "value": "Битцевский парк",
    "line_id": "12"
  },
  {
    "value": "Борисово",
    "line_id": "10"
  },
  {
    "value": "Боровицкая",
    "line_id": "4"
  },
  {
    "value": "Ботанический сад",
    "line_id": "25"
  },
  {
    "value": "Ботанический сад",
    "line_id": "5"
  },
  {
    "value": "Братиславская",
    "line_id": "10"
  },
  {
    "value": "Бульвар Адмирала Ушакова",
    "line_id": "12"
  },
  {
    "value": "Бульвар Дмитрия Донского",
    "line_id": "4"
  },
  {
    "value": "Бульвар Рокоссовского",
    "line_id": "7"
  },
  {
    "value": "Бульвар Рокоссовского",
    "line_id": "25"
  },
  {
    "value": "Бунинская аллея",
    "line_id": "12"
  },
  {
    "value": "Бутырская ",
    "line_id": "10"
  },
  {
    "value": "Варшавская",
    "line_id": "6"
  },
  {
    "value": "ВДНХ",
    "line_id": "5"
  },
  {
    "value": "Верхние Котлы",
    "line_id": "25"
  },
  {
    "value": "Владыкино",
    "line_id": "4"
  },
  {
    "value": "Владыкино",
    "line_id": "25"
  },
  {
    "value": "Водный стадион",
    "line_id": "1"
  },
  {
    "value": "Войковская",
    "line_id": "1"
  },
  {
    "value": "Волгоградский пр-т",
    "line_id": "9"
  },
  {
    "value": "Волжская",
    "line_id": "10"
  },
  {
    "value": "Волоколамская",
    "line_id": "8"
  },
  {
    "value": "Воробьевы горы",
    "line_id": "7"
  },
  {
    "value": "Выставочная",
    "line_id": "2"
  },
  {
    "value": "Выхино",
    "line_id": "9"
  },
  {
    "value": "Деловой центр",
    "line_id": "3"
  },
  {
    "value": "Деловой центр",
    "line_id": "25"
  },
  {
    "value": "Динамо",
    "line_id": "1"
  },
  {
    "value": "Дмитровская",
    "line_id": "4"
  },
  {
    "value": "Добрынинская",
    "line_id": "11"
  },
  {
    "value": "Домодедовская",
    "line_id": "1"
  },
  {
    "value": "Достоевская",
    "line_id": "10"
  },
  {
    "value": "Дубровка",
    "line_id": "10"
  },
  {
    "value": "Дубровка",
    "line_id": "25"
  },
  {
    "value": "Жулебино",
    "line_id": "9"
  },
  {
    "value": "ЗИЛ",
    "line_id": "25"
  },
  {
    "value": "Зорге",
    "line_id": "25"
  },
  {
    "value": "Зябликово",
    "line_id": "10"
  },
  {
    "value": "Измайлово",
    "line_id": "25"
  },
  {
    "value": "Измайловская",
    "line_id": "8"
  },
  {
    "value": "Калужская",
    "line_id": "5"
  },
  {
    "value": "Кантемировская",
    "line_id": "1"
  },
  {
    "value": "Каховская",
    "line_id": "6"
  },
  {
    "value": "Каширская",
    "line_id": "1"
  },
  {
    "value": "Каширская",
    "line_id": "6"
  },
  {
    "value": "Киевская",
    "line_id": "2"
  },
  {
    "value": "Киевская",
    "line_id": "8"
  },
  {
    "value": "Киевская",
    "line_id": "11"
  },
  {
    "value": "Китай-город",
    "line_id": "9"
  },
  {
    "value": "Китай-город",
    "line_id": "5"
  },
  {
    "value": "Кожуховская",
    "line_id": "10"
  },
  {
    "value": "Коломенская",
    "line_id": "1"
  },
  {
    "value": "Комсомольская",
    "line_id": "11"
  },
  {
    "value": "Комсомольская",
    "line_id": "7"
  },
  {
    "value": "Коньково",
    "line_id": "5"
  },
  {
    "value": "Коптево",
    "line_id": "25"
  },
  {
    "value": "Котельники",
    "line_id": "9"
  },
  {
    "value": "Красногвардейская",
    "line_id": "1"
  },
  {
    "value": "Краснопресненская",
    "line_id": "11"
  },
  {
    "value": "Красносельская",
    "line_id": "7"
  },
  {
    "value": "Красные Ворота",
    "line_id": "7"
  },
  {
    "value": "Крестьянская застава",
    "line_id": "10"
  },
  {
    "value": "Кропоткинская",
    "line_id": "7"
  },
  {
    "value": "Крылатское",
    "line_id": "8"
  },
  {
    "value": "Крымская",
    "line_id": "25"
  },
  {
    "value": "Кузнецкий мост",
    "line_id": "9"
  },
  {
    "value": "Кузьминки",
    "line_id": "9"
  },
  {
    "value": "Кунцевская",
    "line_id": "8"
  },
  {
    "value": "Кунцевская",
    "line_id": "2"
  },
  {
    "value": "Курская",
    "line_id": "11"
  },
  {
    "value": "Курская",
    "line_id": "8"
  },
  {
    "value": "Кутузовская",
    "line_id": "25"
  },
  {
    "value": "Кутузовская",
    "line_id": "2"
  },
  {
    "value": "Ленинский проспект",
    "line_id": "5"
  },
  {
    "value": "Лермонтовский проспект",
    "line_id": "9"
  },
  {
    "value": "Лесопарковая",
    "line_id": "12"
  },
  {
    "value": "Лихоборы",
    "line_id": "25"
  },
  {
    "value": "Локомотив",
    "line_id": "25"
  },
  {
    "value": "Ломоносовский проспект",
    "line_id": "3"
  },
  {
    "value": "Лубянка",
    "line_id": "7"
  },
  {
    "value": "Лужники",
    "line_id": "25"
  },
  {
    "value": "Люблино",
    "line_id": "10"
  },
  {
    "value": "Марксистская",
    "line_id": "3"
  },
  {
    "value": "Марьина Роща",
    "line_id": "10"
  },
  {
    "value": "Марьино",
    "line_id": "10"
  },
  {
    "value": "Маяковская",
    "line_id": "1"
  },
  {
    "value": "Медведково",
    "line_id": "5"
  },
  {
    "value": "Международная",
    "line_id": "2"
  },
  {
    "value": "Менделеевская",
    "line_id": "4"
  },
  {
    "value": "Минская",
    "line_id": "3"
  },
  {
    "value": "Митино",
    "line_id": "8"
  },
  {
    "value": "Молодежная",
    "line_id": "8"
  },
  {
    "value": "Мякинино",
    "line_id": "8"
  },
  {
    "value": "Нагатинская",
    "line_id": "4"
  },
  {
    "value": "Нагорная",
    "line_id": "4"
  },
  {
    "value": "Нахимовский проспект",
    "line_id": "4"
  },
  {
    "value": "Нижегородская",
    "line_id": "25"
  },
  {
    "value": "Новогиреево",
    "line_id": "3"
  },
  {
    "value": "Новокосино",
    "line_id": "3"
  },
  {
    "value": "Новокузнецкая",
    "line_id": "1"
  },
  {
    "value": "Новослободская",
    "line_id": "11"
  },
  {
    "value": "Новохохловская",
    "line_id": "25"
  },
  {
    "value": "Новоясеневская",
    "line_id": "5"
  },
  {
    "value": "Новые Черемушки",
    "line_id": "5"
  },
  {
    "value": "Окружная",
    "line_id": "25"
  },
  {
    "value": "Октябрьская",
    "line_id": "5"
  },
  {
    "value": "Октябрьская",
    "line_id": "11"
  },
  {
    "value": "Октябрьское поле",
    "line_id": "9"
  },
  {
    "value": "Орехово",
    "line_id": "1"
  },
  {
    "value": "Отрадное",
    "line_id": "4"
  },
  {
    "value": "Охотный ряд",
    "line_id": "7"
  },
  {
    "value": "Павелецкая",
    "line_id": "11"
  },
  {
    "value": "Павелецкая",
    "line_id": "1"
  },
  {
    "value": "Панфиловская",
    "line_id": "25"
  },
  {
    "value": "Парк культуры",
    "line_id": "11"
  },
  {
    "value": "Парк культуры",
    "line_id": "7"
  },
  {
    "value": "Парк Победы",
    "line_id": "3"
  },
  {
    "value": "Парк Победы",
    "line_id": "8"
  },
  {
    "value": "Партизанская",
    "line_id": "8"
  },
  {
    "value": "Первомайская",
    "line_id": "8"
  },
  {
    "value": "Перово",
    "line_id": "3"
  },
  {
    "value": "Петровско-Разумовская",
    "line_id": "10"
  },
  {
    "value": "Петровско-Разумовская",
    "line_id": "4"
  },
  {
    "value": "Печатники",
    "line_id": "10"
  },
  {
    "value": "Пионерская",
    "line_id": "2"
  },
  {
    "value": "Планерная",
    "line_id": "9"
  },
  {
    "value": "Площадь Гагарина",
    "line_id": "25"
  },
  {
    "value": "Площадь Ильича",
    "line_id": "3"
  },
  {
    "value": "Площадь Революции",
    "line_id": "8"
  },
  {
    "value": "Полежаевская",
    "line_id": "9"
  },
  {
    "value": "Полянка",
    "line_id": "4"
  },
  {
    "value": "Пражская",
    "line_id": "4"
  },
  {
    "value": "Преображенская пл.",
    "line_id": "7"
  },
  {
    "value": "Пролетарская",
    "line_id": "9"
  },
  {
    "value": "Проспект Вернадского",
    "line_id": "7"
  },
  {
    "value": "Проспект мира",
    "line_id": "5"
  },
  {
    "value": "Проспект мира",
    "line_id": "11"
  },
  {
    "value": "Профсоюзная",
    "line_id": "5"
  },
  {
    "value": "Пушкинская",
    "line_id": "9"
  },
  {
    "value": "Пятницкое шоссе",
    "line_id": "8"
  },
  {
    "value": "Раменки",
    "line_id": "3"
  },
  {
    "value": "Речной вокзал",
    "line_id": "1"
  },
  {
    "value": "Рижская",
    "line_id": "5"
  },
  {
    "value": "Римская",
    "line_id": "10"
  },
  {
    "value": "Ростокино",
    "line_id": "25"
  },
  {
    "value": "Румянцево",
    "line_id": "7"
  },
  {
    "value": "Рязанский проспект",
    "line_id": "9"
  },
  {
    "value": "Савеловская",
    "line_id": "4"
  },
  {
    "value": "Саларьево​",
    "line_id": "7"
  },
  {
    "value": "Свиблово",
    "line_id": "5"
  },
  {
    "value": "Севастопольская",
    "line_id": "4"
  },
  {
    "value": "Семеновская",
    "line_id": "8"
  },
  {
    "value": "Серпуховская",
    "line_id": "4"
  },
  {
    "value": "Славянский бульвар",
    "line_id": "8"
  },
  {
    "value": "Смоленская",
    "line_id": "8"
  },
  {
    "value": "Смоленская",
    "line_id": "2"
  },
  {
    "value": "Сокол",
    "line_id": "1"
  },
  {
    "value": "Соколиная Гора",
    "line_id": "25"
  },
  {
    "value": "Сокольники",
    "line_id": "7"
  },
  {
    "value": "Спартак",
    "line_id": "9"
  },
  {
    "value": "Спортивная",
    "line_id": "7"
  },
  {
    "value": "Сретенский бульвар",
    "line_id": "10"
  },
  {
    "value": "Стрешнево",
    "line_id": "25"
  },
  {
    "value": "Строгино",
    "line_id": "8"
  },
  {
    "value": "Студенческая",
    "line_id": "2"
  },
  {
    "value": "Сухаревская",
    "line_id": "5"
  },
  {
    "value": "Сходненская",
    "line_id": "9"
  },
  {
    "value": "Таганская",
    "line_id": "9"
  },
  {
    "value": "Таганская",
    "line_id": "11"
  },
  {
    "value": "Тверская",
    "line_id": "1"
  },
  {
    "value": "Театральная",
    "line_id": "1"
  },
  {
    "value": "Текстильщики",
    "line_id": "9"
  },
  {
    "value": "Теплый стан",
    "line_id": "5"
  },
  {
    "value": "Технопарк",
    "line_id": "1"
  },
  {
    "value": "Тимирязевская",
    "line_id": "4"
  },
  {
    "value": "Третьяковская",
    "line_id": "5"
  },
  {
    "value": "Третьяковская",
    "line_id": "3"
  },
  {
    "value": "Тропарево",
    "line_id": "7"
  },
  {
    "value": "Трубная",
    "line_id": "10"
  },
  {
    "value": "Тульская",
    "line_id": "4"
  },
  {
    "value": "Тургеневская",
    "line_id": "5"
  },
  {
    "value": "Тушинская",
    "line_id": "9"
  },
  {
    "value": "Угрешская",
    "line_id": "25"
  },
  {
    "value": "Ул. Академика Янгеля",
    "line_id": "4"
  },
  {
    "value": "Ул. Старокачаловская",
    "line_id": "12"
  },
  {
    "value": "Улица 1905 года",
    "line_id": "9"
  },
  {
    "value": "Улица Горчакова",
    "line_id": "12"
  },
  {
    "value": "Улица Скобелевская",
    "line_id": "12"
  },
  {
    "value": "Университет",
    "line_id": "7"
  },
  {
    "value": "Филевский парк",
    "line_id": "2"
  },
  {
    "value": "Фили",
    "line_id": "2"
  },
  {
    "value": "Фонвизинская",
    "line_id": "10"
  },
  {
    "value": "Фрунзенская",
    "line_id": "7"
  },
  {
    "value": "Хорошево",
    "line_id": "25"
  },
  {
    "value": "Царицыно",
    "line_id": "1"
  },
  {
    "value": "Цветной бульвар",
    "line_id": "4"
  },
  {
    "value": "Черкизовская",
    "line_id": "7"
  },
  {
    "value": "Чертановская",
    "line_id": "4"
  },
  {
    "value": "Чеховская",
    "line_id": "4"
  },
  {
    "value": "Чистые пруды",
    "line_id": "7"
  },
  {
    "value": "Чкаловская",
    "line_id": "10"
  },
  {
    "value": "Шаболовская",
    "line_id": "5"
  },
  {
    "value": "Шелепиха",
    "line_id": "25"
  },
  {
    "value": "Шипиловская",
    "line_id": "10"
  },
  {
    "value": "Шоссе Энтузиастов",
    "line_id": "25"
  },
  {
    "value": "Шоссе Энтузиастов",
    "line_id": "3"
  },
  {
    "value": "Щелковская",
    "line_id": "8"
  },
  {
    "value": "Щукинская",
    "line_id": "9"
  },
  {
    "value": "Электрозаводская",
    "line_id": "8"
  },
  {
    "value": "Юго-западная",
    "line_id": "7"
  },
  {
    "value": "Южная",
    "line_id": "4"
  },
  {
    "value": "Ясенево",
    "line_id": "5"
  },
  {
    "value": "Долгопрудный",
    "data": "regCity"
  },
  {
    "value": "Лобня",
    "data": "regCity"
  },
  {
    "value": "Мытищи",
    "data": "regCity"
  },
  {
    "value": "Королев",
    "data": "regCity"
  },
  {
    "value": "Щелково",
    "data": "regCity"
  },
  {
    "value": "Фрязино",
    "data": "regCity"
  },
  {
    "value": "Ивантеевка",
    "data": "regCity"
  },
  {
    "value": "Юбилейный",
    "data": "regCity"
  },
  {
    "value": "Пушкино",
    "data": "regCity"
  },
  {
    "value": "Химки",
    "data": "regCity"
  },
  {
    "value": "Зеленоград",
    "data": "regCity"
  },
  {
    "value": "Видное",
    "data": "regCity"
  },
  {
    "value": "Щербинка",
    "data": "regCity"
  },
  {
    "value": "Домодедово",
    "data": "regCity"
  },
  {
    "value": "Подольск",
    "data": "regCity"
  },
  {
    "value": "Климовск",
    "data": "regCity"
  },
  {
    "value": "Троицк",
    "data": "regCity"
  },
  {
    "value": "Московский",
    "data": "regCity"
  },
  {
    "value": "Люберцы",
    "data": "regCity"
  },
  {
    "value": "Котельники",
    "data": "regCity"
  },
  {
    "value": "Дзержинск",
    "data": "regCity"
  },
  {
    "value": "Жуковский",
    "data": "regCity"
  },
  {
    "value": "Раменское",
    "data": "regCity"
  },
  {
    "value": "Лыткарино",
    "data": "regCity"
  },
  {
    "value": "Голицыно",
    "data": "regCity"
  },
  {
    "value": "Краснознаменск",
    "data": "regCity"
  },
  {
    "value": "Апрелевка",
    "data": "regCity"
  },
  {
    "value": "Балашиха",
    "data": "regCity"
  },
  {
    "value": "Реутов",
    "data": "regCity"
  },
  {
    "value": "Железнодорожный",
    "data": "regCity"
  },
  {
    "value": "Электросталь",
    "data": "regCity"
  },
  {
    "value": "Ногинск",
    "data": "regCity"
  },
  {
    "value": "Электроугли",
    "data": "regCity"
  },
  {
    "value": "Лосино-Петровский",
    "data": "regCity"
  },
  {
    "value": "Красногорск",
    "data": "regCity"
  },
  {
    "value": "Одинцово",
    "data": "regCity"
  },
  {
    "value": "Коломна",
    "data": "regCity"
  },
  {
    "value": "Ивантеевка",
    "data": "regCity"
  },
  {
    "value": "Пушкино",
    "data": "regCity"
  },
  {
    "value": "Солнечногорск",
    "data": "regCity"
  },
  {
    "value": "Черноголовка",
    "data": "regCity"
  },
  {
    "value": "Дубровка",
    "data": "regCity"
  },
  {
    "value": "Быково",
    "data": "regCity"
  },
  {
    "value": "Барвиха",
    "data": "regCity"
  },
  {
    "value": "Бронницы",
    "data": "regCity"
  },
  {
    "value": "Истра",
    "data": "regCity"
  },
  {
    "value": "Наро-Фоминск",
    "data": "regCity"
  },
  {
    "value": "Звенигород",
    "data": "regCity"
  },
  {
    "value": "Волоколамск",
    "data": "regCity"
  },
  {
    "value": "Можайск",
    "data": "regCity"
  },
  {
    "value": "Руза",
    "data": "regCity"
  },
  {
    "value": "Лотошино",
    "data": "regCity"
  },
  {
    "value": "Шаховская",
    "data": "regCity"
  },
  {
    "value": "Чехов",
    "data": "regCity"
  },
  {
    "value": "Сергиев посад",
    "data": "regCity"
  },
  {
    "value": "Серпухов",
    "data": "regCity"
  }
];

// Специалиист
;(function(){
    if(!$.exists( "#autocomplete-spec" )) {
        return;
    }

    $.widget( "custom.catcomplete", $.ui.autocomplete, {
        _create: function() {
            this._super();
            this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
        },
        _renderMenu: function( ul, items ) {
            var that = this,
            currentCategory = "";

            $.each( items, function( index, item ) {
                var li;
                if ( item.category != currentCategory ) {
                    ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                    currentCategory = item.category;
                }
                li = that._renderItemData( ul, item );
                if ( item.category ) {
                    li.attr( "aria-label", item.category + " : " + item.label );
                }
            });
        }
    });

    $( "#autocomplete-spec" ).catcomplete({
        delay: 0,
        minLength: 0,
        source: specData,
        close: function(){
          $(this).blur();
        }
    }).on('focus', function(){
        $(this).trigger('keydown');
    });
})();

// Бренд
;(function(){
    if(!$.exists( "#autocomplete-brand" )) {
        return;
    }

    $( "#autocomplete-brand" ).autocomplete({
        source: brands,
        minLength: 0,
        close: function(){
          $(this).blur();
        }
    }).on('focus', function(){
        $(this).data("uiAutocomplete").search($(this).val());
    });
})();

// Станции метро
;(function(){
    if(!$.exists( "#autocomplete-metro" )) {
        return;
    }

    $( "#autocomplete-metro" ).autocomplete({
        source: metroData,
        minLength: 0, 
        close: function(){
          $(this).blur();
        },
        focus: function(event, ui){
            $(this).val( ui.item.label );
            return false;
        }
    }).on('focus', function(){
        $(this).data("uiAutocomplete").search($(this).val());
    }).autocomplete( "instance" )._renderItem = function( ul, item ) {
        var icon = item.line_id ? '<div class="i-metro i-metro--line_'+ item.line_id +'"></div>' : '';
        return $( "<li>" )
          .append( "<div>" + icon + item.value + "</div>" )
          .appendTo( ul );
    };    
})();


// Сортировка в модалке
var modalSorting = $('[data-remodal-id="modal-sorting"]').remodal();
$('.app-header__sorting-icon').on('click', function(event){
    modalSorting.open();
});