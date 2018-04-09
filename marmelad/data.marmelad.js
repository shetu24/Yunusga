module.exports = {
    app      : {
        lang      : 'ru',
        stylus    : {
            theme_color : '#5c524b'
        },
        GA        : false, // Google Analytics site's ID
        package   : 'ключ перезаписывается значениями из package.json marmelad-сборщика',
        settings  : 'ключ перезаписывается значениями из файла настроек settings.marmelad.js',
        storage   : 'ключ перезаписывается значениями из файла настроек settings.marmelad.js',
        buildTime : '',
        controls : [
            'default',
            'brand',
            'success',
            'info',
            'warning',
            'danger'
        ]
    },

    pageTitle: 'marmelad',

    crumbs: {
        innerPage : [
            {
                title : "Главная",
                url  : "#"
            },
            {
                title : "Текущая страница",
                url  : "#"
            }
        ],
        aboutPage : [
            {
                title : "Главная",
                url  : "#"
            },
            {
                title : "О нас",
                url  : "#"
            }
        ],
        sitemapPage : [
            {
                title : "Главная",
                url  : "#"
            },
            {
                title : "Карта сайта",
                url  : "#"
            }
        ],
        contacts : [
            {
                title : "Главная",
                url  : "#"
            },
            {
                title : "Контакты",
                url  : "#"
            }
        ],
    },

    footerMenu: [
        {
            title : "Сервис",
            url: "#",

            subItems : [
                {
                    title : "О нас",
                    url: "#",                    
                },
                {
                    title : "Вакансии",
                    url: "#",
                },
                {
                    title : "Пресса",
                    url: "#",
                },
                {
                    title : "Команда",
                    url: "#",
                },
                {
                    title : "Контакты",
                    url: "#",
                },
                {
                    title : "FAQ",
                    url: "#",
                },
                {
                    title : "Карта сайта",
                    url: "#",
                },
                {
                    title : "Соглашение",
                    url: "#",
                },
            ]
        },

        {
            title : "Клиенту",
            url: "#",

            subItems : [
                {
                    title : "Мастера",
                    url: "#",                    
                },
                {
                    title : "Компании",
                    url: "#",
                },
                {
                    title : "Услуги",
                    url: "#",
                },
                {
                    title : "Бренды",
                    url: "#",
                },
                {
                    title : "Конфиденциальность",
                    url: "#",
                },
                {
                    title : "Согласие на обработку персональных данных",
                    url: "#",
                }
            ]
        },

        {
            title : "Компании и Мастеру",
            url: "#",

            subItems : [
                {
                    title : "Личный кабинет",
                    url: "#",                    
                },
                {
                    title : "Регистрация",
                    url: "#",
                }
            ]
        }
    ],

    footerSocials: [
        {
            icon : "img/vk-icon.png",
            url  : "#"
        },
        {
            icon : "img/fb-icon.png",
            url  : "#"
        },
        {
            icon : "img/ok-icon.png",
            url  : "#"
        },
        {
            icon : "img/ig-icon.png",
            url  : "#"
        }
    ],

    masterpopupDetailed: {
        title: "Копилин Евгений<br> Иванович",
        image: "img/catalogue-thumb-pic3.png",
        service: "Cервисный инженер / Vissmann, Vailant, Buderus, ACV, Bosch",
        description: "",
        experience: "Стаж: 20 лет",
        nocontacts: true
    },

    companies: {
        h1 : "Компания",
        textBefore: "Хороший мастер - это специалист широкого профиля, который произведет верную диагностику неисправности, точно подберет запасные части для оборудования и вовремя предупредит о возможных сложностях.<br>На нашем портале вы можете выбрать мастеров Москвы и области. <a href=\"#\">Подробнее...</a>",
        map: false,
        sorting : true,
        list: [
            {
                title: "ТМ-Сервис",
                image: "img/catalogue-thumb-pic1.png",
                service: "Cервисный инженер / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                addresses : [
                    {
                        title : "",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                childs: true    
            },
            {
                title: "ТМ-Сервис",
                image: "img/catalogue-noimage.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                addrTitle: "",
                addresses : [
                    {
                        title : "",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                childs: false    
            },
            {
                title: "ТМ-Сервис",
                image: "img/catalogue-noimage.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                addresses : [
                    {
                        title : "",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                childs: false    
            }
        ]
    },

    masters: {
        h1 : "Мастера",
        textBefore: "Хороший мастер - это специалист широкого профиля, который произведет верную диагностику неисправности, точно подберет запасные части для оборудования и вовремя предупредит о возможных сложностях.<br>На нашем портале вы можете выбрать мастеров Москвы и области. <a href=\"#\">Подробнее...</a>",
        map: false,
        sorting : true,
        list: [
            {
                title: "Копилин Евгений<br>Иванович",
                image: "img/catalogue-thumb-pic3.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                experience: "Стаж: 20 лет",
                phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                applied : "Вчера к этому специалисту обращалось 3 человека",
                favorite : true,
                addresses : [
                    {
                        title : "Компания ТМ-Сервис",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                addrBookmarks : true,
                childs: false    
            },
            {
                title: "Мартишкин  Владислав<br>Самсонович",
                image: "img/catalogue-noimage2.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                experience: "Стаж: 1 год",
                phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                applied : "Вчера к этому специалисту обращалось 3 человека",
                
                favorite : true,
                addresses : [
                    {
                        title : "Компания ТМ-Сервис",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                addrBookmarks : true,
                childs: false    
            },
            {
                title: "Копилин Евгений<br>Иванович",
                image: "img/catalogue-thumb-pic3.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                experience: "Стаж: 20 лет",
                phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                applied : "Вчера к этому специалисту обращалось 3 человека",
                favorite : true,
                addresses : [
                    {
                        title : "Компания ТМ-Сервис",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                addrBookmarks : true,
                childs: false    
            },
            {
                title: "Мартишкин  Владислав<br>Самсонович",
                image: "img/catalogue-noimage2.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                experience: "Стаж: 1 год",
                phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                applied : "Вчера к этому специалисту обращалось 3 человека",
                favorite : true,
                addresses : [
                    {
                        title : "Компания ТМ-Сервис",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                addrBookmarks : true,
                childs: false    
            }
        ]
    },

    mastersAddress: {
        h1 : "Услуга + адрес",
        textBefore: "Хороший мастер - это специалист широкого профиля, который произведет верную диагностику неисправности, точно подберет запасные части для оборудования и вовремя предупредит о возможных сложностях.<br>На нашем портале вы можете выбрать мастеров Москвы и области. <a href=\"#\">Подробнее...</a>",
        map: true,
        sorting : true,
        list: [
            {
                title: "Копилин Евгений<br>Иванович",
                image: "img/catalogue-thumb-pic3.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                experience: "Стаж: 20 лет",
                phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                applied : "Вчера к этому специалисту обращалось 3 человека",
                favorite : true,
                addresses : [
                    {
                        title : "Компания ТМ-Сервис",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                addrBookmarks : true,
                childs: false    
            },
            {
                title: "Мартишкин  Владислав<br>Самсонович",
                image: "img/catalogue-noimage2.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                experience: "Стаж: 1 год",
                phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                applied : "Вчера к этому специалисту обращалось 3 человека",
                favorite : true,
                addresses : [
                    {
                        title : "Компания ТМ-Сервис",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                addrBookmarks : true,
                childs: false    
            },
            {
                title: "Копилин Евгений<br>Иванович",
                image: "img/catalogue-thumb-pic3.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                experience: "Стаж: 20 лет",
                phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                applied : "Вчера к этому специалисту обращалось 3 человека",
                favorite : true,
                addresses : [
                    {
                        title : "Компания ТМ-Сервис",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                addrBookmarks : true,
                childs: false    
            },
            {
                title: "Мартишкин  Владислав<br>Самсонович",
                image: "img/catalogue-noimage2.png",
                service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                experience: "Стаж: 1 год",
                phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                applied : "Вчера к этому специалисту обращалось 3 человека",
                favorite : true,
                addresses : [
                    {
                        title : "Компания ТМ-Сервис",
                        body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                    }
                ],
                addrBookmarks : true,
                childs: false    
            }
        ]
    },

    masterDetailed: {
        title: "",
        image: "img/catalogue-thumb-pic1.png",
        service: "Слесарь / Vissmann, Vailant, Buderus, ACV, Bosch",
        description: "",
        experience: "Стаж: 20 лет",
        phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
        applied : "Вчера к этому специалисту обращалось 3 человека",
        addrTitle: "",
        map: true,
        favorite : false,
        info:  {
            title: "Информация о мастере" ,
            body: "Холдинг «СМ-клиника» – это сеть многофункциональных клиник семейного типа, в которой работают лучшие специалисты столицы, в том числе 20 докторов наук, 12 профессоров и 6 академиков медицинских наук. В каждой «СМ-клинике» можно записаться на прием к специалистам, получить помощь в стационарных условиях или на дому, а также неотложную помощь, пройти МРТ, КТ, УЗ-исследования, ЭКГ, сдать больше 3000 лабораторных анализов, оформить мед. справки, карты, больничные листы. Для постоянных клиентов действует гибкая система дисконта, постоянные акции и спецпредложения."
        },
        addresses : [
            {
                title : "",
                body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
            },
            {
                title : "",
                body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
            }
        ],
        addrBookmarks : false,
        childs: false,
        text: true
    },

    companyDetailed: {
        title: "",
        image: "img/catalogue-thumb-pic1.png",
        service: "Слесарь / Vissmann, Vailant, Buderus, ACV, Bosch",
        description: "",
        hasContentPic : true,
        brands: true,
        pricing:true,
        map: true,
        favorite : false,
        masters: {
            visible: [
                {
                    title: "Копилин Евгений<br>Иванович",
                    image: "img/catalogue-thumb-pic3.png",
                    service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                    description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                    experience: "Стаж: 20 лет",
                    phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                    applied : "Вчера к этому специалисту обращалось 3 человека",
                    favorite : true,
                    addresses : [
                        {
                            title : "Компания ТМ-Сервис",
                            body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                        }
                    ],
                    addrBookmarks : true,
                    childs: false    
                },
                {
                    title: "Мартишкин  Владислав<br>Самсонович",
                    image: "img/catalogue-noimage2.png",
                    service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                    description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                    experience: "Стаж: 1 год",
                    phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                    applied : "Вчера к этому специалисту обращалось 3 человека",
                    
                    favorite : true,
                    addresses : [
                        {
                            title : "Компания ТМ-Сервис",
                            body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                        }
                    ],
                    addrBookmarks : true,
                    childs: false    
                }
            ],

            hidden: [
                {
                    title: "Копилин Евгений<br>Иванович",
                    image: "img/catalogue-thumb-pic3.png",
                    service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                    description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                    experience: "Стаж: 20 лет",
                    phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                    applied : "Вчера к этому специалисту обращалось 3 человека",
                    favorite : true,
                    addresses : [
                        {
                            title : "Компания ТМ-Сервис",
                            body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                        }
                    ],
                    addrBookmarks : true,
                    childs: false    
                },
                {
                    title: "Мартишкин  Владислав<br>Самсонович",
                    image: "img/catalogue-noimage2.png",
                    service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                    description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                    experience: "Стаж: 1 год",
                    phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                    applied : "Вчера к этому специалисту обращалось 3 человека",
                    
                    favorite : true,
                    addresses : [
                        {
                            title : "Компания ТМ-Сервис",
                            body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                        }
                    ],
                    addrBookmarks : true,
                    childs: false    
                }
            ]
        },
        info:  {
            title: "Информация о мастере" ,
            body: "Холдинг «СМ-клиника» – это сеть многофункциональных клиник семейного типа, в которой работают лучшие специалисты столицы, в том числе 20 докторов наук, 12 профессоров и 6 академиков медицинских наук. В каждой «СМ-клинике» можно записаться на прием к специалистам, получить помощь в стационарных условиях или на дому, а также неотложную помощь, пройти МРТ, КТ, УЗ-исследования, ЭКГ, сдать больше 3000 лабораторных анализов, оформить мед. справки, карты, больничные листы. Для постоянных клиентов действует гибкая система дисконта, постоянные акции и спецпредложения."
        },
        addresses : [
            {
                title : "",
                body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
            },
            {
                title : "",
                body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
            }
        ],
        addrBookmarks : false,
        childs: false
    },

    companyDetailedNoAddress: {
        title: "",
        image: "img/catalogue-thumb-pic1.png",
        service: "Слесарь / Vissmann, Vailant, Buderus, ACV, Bosch",
        description: "",
        experience: "Стаж: 20 лет",
        phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
        applied : "Вчера к этому специалисту обращалось 3 человека",
        hasContentPic : false,
        brands: false,
        pricing:true,
        map: false,
        favorite : false,
        masters: {
            visible: [
                {
                    title: "Копилин Евгений<br>Иванович",
                    image: "img/catalogue-thumb-pic3.png",
                    service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                    description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                    experience: "Стаж: 20 лет",
                    phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                    applied : "Вчера к этому специалисту обращалось 3 человека",
                    favorite : true,
                    addresses : [
                        {
                            title : "Компания ТМ-Сервис",
                            body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                        }
                    ],
                    addrBookmarks : true,
                    childs: false    
                },
                {
                    title: "Мартишкин  Владислав<br>Самсонович",
                    image: "img/catalogue-noimage2.png",
                    service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                    description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                    experience: "Стаж: 1 год",
                    phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                    applied : "Вчера к этому специалисту обращалось 3 человека",
                    
                    favorite : true,
                    addresses : [
                        {
                            title : "Компания ТМ-Сервис",
                            body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                        }
                    ],
                    addrBookmarks : true,
                    childs: false    
                }
            ],

            hidden: [
                {
                    title: "Копилин Евгений<br>Иванович",
                    image: "img/catalogue-thumb-pic3.png",
                    service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                    description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                    experience: "Стаж: 20 лет",
                    phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                    applied : "Вчера к этому специалисту обращалось 3 человека",
                    favorite : true,
                    addresses : [
                        {
                            title : "Компания ТМ-Сервис",
                            body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                        }
                    ],
                    addrBookmarks : true,
                    childs: false    
                },
                {
                    title: "Мартишкин  Владислав<br>Самсонович",
                    image: "img/catalogue-noimage2.png",
                    service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
                    description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
                    experience: "Стаж: 1 год",
                    phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
                    applied : "Вчера к этому специалисту обращалось 3 человека",
                    
                    favorite : true,
                    addresses : [
                        {
                            title : "Компания ТМ-Сервис",
                            body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                        }
                    ],
                    addrBookmarks : true,
                    childs: false    
                }
            ]
        },
        info:  {
            title: "Информация о мастере" ,
            body: "Холдинг «СМ-клиника» – это сеть многофункциональных клиник семейного типа, в которой работают лучшие специалисты столицы, в том числе 20 докторов наук, 12 профессоров и 6 академиков медицинских наук. В каждой «СМ-клинике» можно записаться на прием к специалистам, получить помощь в стационарных условиях или на дому, а также неотложную помощь, пройти МРТ, КТ, УЗ-исследования, ЭКГ, сдать больше 3000 лабораторных анализов, оформить мед. справки, карты, больничные листы. Для постоянных клиентов действует гибкая система дисконта, постоянные акции и спецпредложения."
        },
        addresses : [
            {
                title : "",
                body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
            }
        ],
        addrBookmarks : false,
        childs: false
    },

    masterPopup: {
        title: "Ландау Дмитрий Игоревич",
        image: "img/catalogue-thumb-pic1.png",
        service: "Инженер / Buderus",
        description: "",
        price: true,
        mocomments:true,
        nocontacts:true
    },
    lkMenu: [
        {
            title: '<img src="img/lk-menu-icon1.png" alt="">Профиль компании',
            url:'/lk-profile-company.html'
        },
        {
            title: '<img src="img/lk-menu-icon2.png" alt="">Заявки компании',
            url:'/lk-applications.html'
        },
        {
            title: '<img src="img/lk-menu-icon3.png" alt="">Пополнить баланс',
            url:'#'
        },
        {
            title: '<img src="img/lk-menu-icon4.png" alt="">История пополнений',
            url:'/lk-history.html'
        }
    ],

    profileMastersList: [
        {
            title: "Копилин Евгений<br>Иванович",
            image: "img/catalogue-thumb-pic3.png",
            service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
            description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
            experience: "Стаж: 20 лет",
            phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
            applied : "Вчера к этому специалисту обращалось 3 человека",
            favorite : true,
            addresses : [
                {
                    title : "Компания ТМ-Сервис",
                    body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                }
            ],
            addrBookmarks : true,
            childs: false    
        },
        {
            title: "Мартишкин  Владислав<br>Самсонович",
            image: "img/catalogue-noimage2.png",
            service: "Монтажная компания, Сервсиная компания / Vissmann, Vailant, Buderus, ACV, Bosch",
            description: "Краткое описание в две строки. Краткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строкиКраткое описание в 2-3 строки",
            experience: "Стаж: 1 год",
            phone:"Телефон для вызова: <a href=\"tel:88003022006\">8 800 302 20 06</a>",
            applied : "Вчера к этому специалисту обращалось 3 человека",
            
            favorite : true,
            addresses : [
                {
                    title : "Компания ТМ-Сервис",
                    body: "Москва, ул. Александра Солженицына, д. 5, стр.1. Метро: <span class='i-metro-nowrap'><span class='i-metro i-metro--line_9'></span> Таганская,</span> <span class='i-metro-nowrap'><span class='i-metro i-metro--line_3'></span> Марксистская</span>, <span class='i-metro-nowrap'><span class='i-metro i-metro--line_11'></span> Таганская</span>"
                }
            ],
            addrBookmarks : true,
            childs: false    
        }
    ]

};
