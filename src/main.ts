import './style.css'

import imgLogo from './assets/logo-orange.svg'
import imgMustafa from './assets/mustafa.jpeg'
import imgKurmanbek from './assets/kurmanbek.jpg'
import imgAjybek from './assets/ajybek.jpg'
import imgBayel from './assets/bayel.jpg'
import iconAddTest from './assets/app-icons/add-test.png'
import iconAlltrust from './assets/app-icons/alltrust.png'
import iconAydaTaxi from './assets/app-icons/ayda-taxi.jpg'
import iconBelgi from './assets/app-icons/belgi.jpg'
import iconAyuGarant from './assets/app-icons/ayu-garant.jpg'
import iconCashbackAlleya from './assets/app-icons/cashback-alleya.jpg'
import iconDoctorKg from './assets/app-icons/doctor-kg.png'
import iconFinopolis from './assets/app-icons/finopolis.jpg'
import iconFreshMag from './assets/app-icons/fresh-mag.jpg'
import iconJashylBonus from './assets/app-icons/jashyl-bonus.jpg'
import iconMedicallPro from './assets/app-icons/medicall-pro.jpg'
import iconMedicall from './assets/app-icons/medicall.jpg'
import iconMyQuran from './assets/app-icons/my-quran.jpg'
import iconNedvizhkaKg from './assets/app-icons/nedvizhka-kg.jpg'
import iconOptombai from './assets/app-icons/optombai.jpg'
import iconSezUs from './assets/app-icons/sez-us.jpg'
import iconSikaProClub from './assets/app-icons/sika-pro-club.jpg'
import iconStudent from './assets/app-icons/student.png'
import iconTilbil from './assets/app-icons/tilbil.png'
import imgMp from './assets/mp.jpeg'
import imgSait from './assets/sait.jpeg'
import imgB2B from './assets/B2B.jpeg'
import imgCRM from './assets/CRM.jpeg'
import imgSystem from './assets/System.jpeg'
import imgServerStatus from './assets/services/server-status.png'
import imgCreditCard from './assets/services/credit-card.png'
import imgAppInstall from './assets/services/app-installation.png'
import imgGiftCard from './assets/services/gift-card.png'

type Language = 'ky' | 'ru' | 'en'

type LocalizedText = Record<Language, string>

type Link = {
  label: string
  url: string
}

type Leader = {
  id: string
  name: string
  role: string
  tagline: LocalizedText
  accent: string
  photo: string
}

type StudioProject = {
  id: string
  title: string
  summary: LocalizedText
  appStoreId?: string
  appStoreCountry?: string
  playId?: string
  links: Link[]
}

type ServiceCard = {
  title: LocalizedText
  description: LocalizedText
  image: string
  fit?: 'cover' | 'contain'
}

const localized = (ru: string, ky: string, en: string): LocalizedText => ({ ru, ky, en })

const isLanguage = (value: string | null): value is Language =>
  value === 'ky' || value === 'ru' || value === 'en'

let currentLanguage: Language = isLanguage(localStorage.getItem('oimosoft-language'))
  ? (localStorage.getItem('oimosoft-language') as Language)
  : 'ru'

const getText = (value: string | LocalizedText) =>
  typeof value === 'string' ? value : value[currentLanguage]

const logoUrl = imgLogo

const projectIcons: Record<string, string> = {
  'add-test': iconAddTest,
  'alltrust': iconAlltrust,
  'ayda-taxi': iconAydaTaxi,
  'belgi': iconBelgi,
  'ayu-garant': iconAyuGarant,
  'cashback-alleya': iconCashbackAlleya,
  'doctor-kg': iconDoctorKg,
  'finopolis': iconFinopolis,
  'fresh-mag': iconFreshMag,
  'jashyl-bonus': iconJashylBonus,
  'medicall-pro': iconMedicallPro,
  'medicall': iconMedicall,
  'my-quran': iconMyQuran,
  'nedvizhka-kg': iconNedvizhkaKg,
  'optombai': iconOptombai,
  'sez-us': iconSezUs,
  'sika-pro-club': iconSikaProClub,
  'student': iconStudent,
  'tilbil': iconTilbil,
}
const WHATSAPP_NUMBER = '996507158857'

const uiCopy = {
  ru: {
    langAria: 'Выбор языка',
    nav: { home: 'Главная', projects: 'Проекты', services: 'Сервис', team: 'Команда', contact: 'Связаться' },
    hero: {
      title: 'OIMOSOFT — создаём решения вместе',
      description:
        'Создаем цифровые продукты, которые работают стабильно, запускаются вовремя и усиливают ваш бизнес.',
      stats: ['крупных проектов', 'малых запусков', 'лет опыта разработки'] as const
    },
    sections: {
      projects: {
        title: 'Проекты',
        subtitle:
          'Медицина, страхование, финтех, e-commerce, образование и доставка — все проекты со ссылками на сторы.'
      },
      services: {
        title: 'Сервис',
        subtitle:
          'Ведем продукт целиком: мобильная и серверная разработка, публикация в сторах и поддержка после релиза.'
      },
      leaders: {
        title: 'Команда',
        subtitle:
          'Небольшая команда, которая ведет проект целиком — без подрядчиков и передачи задач на сторону.'
      }
    },
    footer: {
      title: 'Связаться с нами',
      description: 'Оставьте контакт — мы ответим быстро и по делу.',
      form: {
        name: 'Имя',
        email: 'Email',
        phone: 'Телефон',
        message: 'Сообщение',
        placeholders: {
          name: 'Ваше имя',
          email: 'example@mail.com',
          phone: '+996 555 00 00 00',
          message: 'Коротко о задаче'
        },
        submit: 'Отправить',
        status: {
          sending: 'Отправляем сообщение...',
          success: 'Сообщение отправлено. Мы скоро свяжемся с вами.',
          error: 'Не удалось отправить сообщение. Попробуйте еще раз.',
          config: 'EmailJS еще не настроен. Добавьте ключи в .env.local.'
        }
      },
      privacy: 'Privacy Policy',
      rights: 'Все права защищены.'
    },
    common: {
      back: '← Назад',
      scrollLeft: 'Прокрутить влево',
      scrollRight: 'Прокрутить вправо'
    },
    privacy: {
      kicker: 'Privacy Policy',
      title: 'Privacy Policy',
      updated: 'Last updated: April 2026',
      company: 'Company: oimo-soft',
      sections: [
        {
          title: 'Introduction',
          paragraphs: [
            'oimo-soft ("we", "our", or "us") operates the website.',
            'This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our website.'
          ]
        },
        {
          title: 'Information We Collect',
          paragraphs: [
            'The information we collect depends on how you interact with the service, the features you use, and the information you choose to provide.',
            'When you browse our website, we may receive information your browser sends automatically, such as technical usage data and device information.',
            'We aim to limit data collection to what is reasonably necessary to operate, maintain, and improve the service.'
          ]
        },
        {
          title: 'How We Use Information',
          paragraphs: [
            'We may use information to operate the service, respond to inquiries, maintain security, improve performance, and comply with legal obligations.'
          ]
        },
        {
          title: 'Data Sharing',
          paragraphs: [
            'We may share information with service providers and partners who help us operate, maintain, or improve the service, subject to appropriate contractual or legal protections where applicable.',
            'We may also disclose information if required by law, to protect rights or safety, or in connection with a business transaction such as a merger, acquisition, or asset transfer.'
          ]
        },
        {
          title: 'Data Security',
          paragraphs: [
            'We implement reasonable technical and organizational safeguards designed to protect information against unauthorized access, loss, misuse, or alteration.',
            'No method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.'
          ]
        },
        {
          title: "Children's Privacy",
          paragraphs: [
            'The service is not intended for children under 13 unless specifically stated otherwise. We do not knowingly collect personal information from children in violation of applicable law.',
            'If you believe that a child has provided personal information to us inappropriately, please contact us so we can review the situation and take appropriate steps.'
          ]
        },
        {
          title: 'Changes to This Privacy Policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in the service, legal requirements, or our data practices.',
            'When we make material changes, we may update the effective version of this policy within the service or provide notice by other appropriate means.'
          ]
        },
        {
          title: 'Contact Us',
          paragraphs: [
            'If you have questions or concerns about this Privacy Policy, you can contact us at admin@oimosoft.com.'
          ]
        }
      ]
    }
  },
  ky: {
    langAria: 'Тилди тандоо',
    nav: { home: 'Башкы бет', projects: 'Долбоорлор', services: 'Кызматтар', team: 'Команда', contact: 'Байланыш' },
    hero: {
      title: 'OIMOSOFT — чечимдерди бирге жаратабыз',
      description:
        'Туруктуу иштеген, өз убагында чыккан жана бизнесиңизди күчөткөн санарип продукттарды жасайбыз.',
      stats: ['ири долбоор', 'чакан ишке киргизүү', 'иштеп чыгуу тажрыйбасы'] as const
    },
    sections: {
      projects: {
        title: 'Долбоорлор',
        subtitle:
          'Медицина, камсыздандыруу, финтех, e-commerce, билим берүү жана жеткирүү — бардык долбоорлор стор шилтемелери менен.'
      },
      services: {
        title: 'Кызматтар',
        subtitle:
          'Продуктту толугу менен алып барабыз: мобилдик жана сервердик иштеп чыгуу, сторлорго жарыялоо жана релизден кийинки колдоо.'
      },
      leaders: {
        title: 'Команда',
        subtitle:
          'Долбоорду толугу менен алып барган чакан команда — подрядчиктерсиз жана тапшырманы башкага өткөрбөй.'
      }
    },
    footer: {
      title: 'Биз менен байланыш',
      description: 'Байланышыңызды калтырыңыз — биз тез жана так жооп беребиз.',
      form: {
        name: 'Аты-жөнү',
        email: 'Email',
        phone: 'Телефон',
        message: 'Билдирүү',
        placeholders: {
          name: 'Атыңыз',
          email: 'example@mail.com',
          phone: '+996 555 00 00 00',
          message: 'Тапшырма жөнүндө кыскача'
        },
        submit: 'Жөнөтүү',
        status: {
          sending: 'Билдирүү жөнөтүлүүдө...',
          success: 'Билдирүү жөнөтүлдү. Жакында сиз менен байланышабыз.',
          error: 'Билдирүүнү жөнөтүү мүмкүн болгон жок. Кайра аракет кылыңыз.',
          config: 'EmailJS азырынча жөндөлө элек. Ачкычтарды .env.local файлына кошуңуз.'
        }
      },
      privacy: 'Privacy Policy',
      rights: 'Бардык укуктар корголгон.'
    },
    common: {
      back: '← Артка',
      scrollLeft: 'Солго жылдыруу',
      scrollRight: 'Оңго жылдыруу'
    },
    privacy: {
      kicker: 'Privacy Policy',
      title: 'Privacy Policy',
      updated: 'Акыркы жаңыртуу: Апрель 2026',
      company: 'Компания: oimo-soft',
      sections: [
        {
          title: 'Киришүү',
          paragraphs: [
            'oimo-soft ("we", "our", or "us") веб-сайтты иштетет.',
            'Бул Купуялык саясаты веб-сайтыбызды колдонгондо маалыматты кантип чогултарыбызды, колдонорубузду, бөлүшөрүбүздү жана коргоорубузду түшүндүрөт.'
          ]
        },
        {
          title: 'Биз чогулткан маалымат',
          paragraphs: [
            'Биз чогулткан маалымат кызмат менен кандай иштешкениңизге, кайсы функцияларды колдонгонуңузга жана кайсы маалыматты өз ыктыярыңыз менен бергениңизге жараша болот.',
            'Веб-сайтты карап жатканда браузериңиз автоматтык түрдө жөнөткөн техникалык колдонуу маалыматтарын жана түзмөк тууралуу маалыматты алышыбыз мүмкүн.',
            'Биз кызматты иштетүү, тейлөө жана жакшыртуу үчүн зарыл болгон өлчөмдө гана маалымат чогултууга аракет кылабыз.'
          ]
        },
        {
          title: 'Маалыматты кантип колдонобуз',
          paragraphs: [
            'Маалыматты кызматты иштетүү, суроо-талаптарга жооп берүү, коопсуздукту сактоо, иштөөсүн жакшыртуу жана мыйзамдык талаптарды аткаруу үчүн колдоно алабыз.'
          ]
        },
        {
          title: 'Маалыматты бөлүшүү',
          paragraphs: [
            'Кызматты иштетүүгө, тейлөөгө же жакшыртууга жардам берген кызмат көрсөтүүчүлөр жана өнөктөштөр менен маалыматты тийиштүү келишимдик же мыйзамдык коргоо шарттары менен бөлүшө алабыз.',
            'Мыйзам талап кылса, укуктарды же коопсуздукту коргоо үчүн, же биригүү, сатып алуу же активдерди өткөрүп берүү сыяктуу бизнес бүтүмүнө байланыштуу маалыматты ача алабыз.'
          ]
        },
        {
          title: 'Маалымат коопсуздугу',
          paragraphs: [
            'Маалыматты уруксатсыз кирүүдөн, жоготуудан, туура эмес колдонуу же өзгөртүүдөн коргоо үчүн акылга сыярлык техникалык жана уюштуруучулук чараларды колдонобуз.',
            'Интернет аркылуу маалымат берүү же электрондук сактоо ыкмалары толук коопсуз эмес, ошондуктан абсолюттук коопсуздукка кепилдик бере албайбыз.'
          ]
        },
        {
          title: 'Балдардын купуялыгы',
          paragraphs: [
            'Кызмат 13 жашка чейинки балдар үчүн атайын көрсөтүлбөсө арналган эмес. Биз мыйзамга каршы түрдө балдардын жеке маалыматын атайылап чогултпайбыз.',
            'Эгерде бала жеке маалыматын туура эмес берген деп ойлосоңуз, биз менен байланышыңыз. Биз кырдаалды карап чыгып, керектүү чараларды көрөбүз.'
          ]
        },
        {
          title: 'Бул саясаттагы өзгөрүүлөр',
          paragraphs: [
            'Кызматтагы, мыйзамдагы же маалымат менен иштөөдөгү өзгөрүүлөргө жараша бул Купуялык саясатын мезгил-мезгили менен жаңыртып турушубуз мүмкүн.',
            'Эгер олуттуу өзгөрүүлөр болсо, кызмат ичинде жаңыртылган версияны көрсөтөбүз же башка ылайыктуу жол менен эскертебиз.'
          ]
        },
        {
          title: 'Байланыш',
          paragraphs: [
            'Эгерде бул Купуялык саясаты боюнча суроолоруңуз же тынчсызданууңуз болсо, admin@oimosoft.com дарегине жаза аласыз.'
          ]
        }
      ]
    }
  },
  en: {
    langAria: 'Language switcher',
    nav: { home: 'Home', projects: 'Projects', services: 'Services', team: 'Team', contact: 'Contact' },
    hero: {
      title: 'OIMOSOFT — building solutions together',
      description:
        'We build digital products that run reliably, launch on time, and strengthen your business.',
      stats: ['large projects', 'smaller launches', 'years of development experience'] as const
    },
    sections: {
      projects: {
        title: 'Projects',
        subtitle:
          'Healthcare, insurance, fintech, e-commerce, education, and delivery — every project with live store links.'
      },
      services: {
        title: 'Services',
        subtitle:
          'We run the whole product: mobile and backend development, store publishing, and post-release support.'
      },
      leaders: {
        title: 'Team',
        subtitle:
          'A small team that runs the whole project — no subcontractors, no handing work off.'
      }
    },
    footer: {
      title: 'Contact us',
      description: 'Leave your contact details — we will reply quickly and clearly.',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        placeholders: {
          name: 'Your name',
          email: 'example@mail.com',
          phone: '+996 555 00 00 00',
          message: 'Briefly describe your task'
        },
        submit: 'Send',
        status: {
          sending: 'Sending message...',
          success: 'Message sent. We will get back to you soon.',
          error: 'Failed to send the message. Please try again.',
          config: 'EmailJS is not configured yet. Add the keys to .env.local.'
        }
      },
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.'
    },
    common: {
      back: '← Back',
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right'
    },
    privacy: {
      kicker: 'Privacy Policy',
      title: 'Privacy Policy',
      updated: 'Last updated: April 2026',
      company: 'Company: oimo-soft',
      sections: [
        {
          title: 'Introduction',
          paragraphs: [
            'oimo-soft ("we", "our", or "us") operates the website.',
            'This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our website.'
          ]
        },
        {
          title: 'Information We Collect',
          paragraphs: [
            'The information we collect depends on how you interact with the service, the features you use, and the information you choose to provide.',
            'When you browse our website, we may receive information your browser sends automatically, such as technical usage data and device information.',
            'We aim to limit data collection to what is reasonably necessary to operate, maintain, and improve the service.'
          ]
        },
        {
          title: 'How We Use Information',
          paragraphs: [
            'We may use information to operate the service, respond to inquiries, maintain security, improve performance, and comply with legal obligations.'
          ]
        },
        {
          title: 'Data Sharing',
          paragraphs: [
            'We may share information with service providers and partners who help us operate, maintain, or improve the service, subject to appropriate contractual or legal protections where applicable.',
            'We may also disclose information if required by law, to protect rights or safety, or in connection with a business transaction such as a merger, acquisition, or asset transfer.'
          ]
        },
        {
          title: 'Data Security',
          paragraphs: [
            'We implement reasonable technical and organizational safeguards designed to protect information against unauthorized access, loss, misuse, or alteration.',
            'No method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.'
          ]
        },
        {
          title: "Children's Privacy",
          paragraphs: [
            'The service is not intended for children under 13 unless specifically stated otherwise. We do not knowingly collect personal information from children in violation of applicable law.',
            'If you believe that a child has provided personal information to us inappropriately, please contact us so we can review the situation and take appropriate steps.'
          ]
        },
        {
          title: 'Changes to This Privacy Policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in the service, legal requirements, or our data practices.',
            'When we make material changes, we may update the effective version of this policy within the service or provide notice by other appropriate means.'
          ]
        },
        {
          title: 'Contact Us',
          paragraphs: [
            'If you have questions or concerns about this Privacy Policy, you can contact us at admin@oimosoft.com.'
          ]
        }
      ]
    }
  }
} satisfies Record<
  Language,
  {
    langAria: string
    nav: { home: string; projects: string; services: string; team: string; contact: string }
    hero: { title: string; description: string; stats: readonly [string, string, string] }
    sections: {
      projects: { title: string; subtitle: string }
      services: { title: string; subtitle: string }
      leaders: { title: string; subtitle: string }
    }
    footer: {
      title: string
      description: string
      form: {
        name: string
        email: string
        phone: string
        message: string
        placeholders: { name: string; email: string; phone: string; message: string }
        submit: string
        status: {
          sending: string
          success: string
          error: string
          config: string
        }
      }
      privacy: string
      rights: string
    }
    common: { back: string; scrollLeft: string; scrollRight: string }
    privacy: {
      kicker: string
      title: string
      updated: string
      company: string
      sections: Array<{ title: string; paragraphs: string[] }>
    }
  }
>

const leaders: Leader[] = [
  {
    id: 'mustafa',
    name: 'Мустафа Набиев',
    role: 'CEO & Founder',
    tagline: localized(
      'Основатель OimoSoft: формирует стратегию компании, отвечает за архитектуру продуктов и качество релизов.',
      'OimoSoft компаниясынын негиздөөчүсү: стратегияны түзөт, продукттардын архитектурасына жана релиздердин сапатына жооп берет.',
      'Founder of OimoSoft: sets company strategy and owns product architecture and release quality.'
    ),
    accent: '#F29F2D',
    photo: imgMustafa
  },
  {
    id: 'bayel',
    name: 'Ташпулатов Байэл',
    role: 'Full Stack Developer',
    tagline: localized(
      'Full stack-разработчик: закрывает и фронтенд, и серверную часть — от интерфейса до API и базы данных.',
      'Full stack-иштеп чыгуучу: фронтендди да, сервердик бөлүктү да жасайт — интерфейстен API жана маалымат базасына чейин.',
      'Full stack developer covering both frontend and backend — from interface to APIs and databases.'
    ),
    accent: '#F5921E',
    photo: imgBayel
  },
  {
    id: 'kurmanbek',
    name: 'Токтогулов Курманбек',
    role: 'Backend Developer',
    tagline: localized(
      'Backend-разработчик: строит серверную логику, API и базы данных для стабильных и надежных систем.',
      'Backend-иштеп чыгуучу: туруктуу жана ишенимдүү системалар үчүн сервер логикасын, API жана маалымат базаларын түзөт.',
      'Backend developer building server logic, APIs, and databases for stable and reliable systems.'
    ),
    accent: '#22C55E',
    photo: imgKurmanbek
  },
  {
    id: 'ajybek',
    name: 'Рахманбердиев Ажыбек',
    role: 'Mobile Developer',
    tagline: localized(
      'Мобильный разработчик: делает приложения на Flutter для iOS и Android — от интерфейса до стабильной работы.',
      'Мобилдик иштеп чыгуучу: iOS жана Android үчүн Flutter тиркемелерин жасайт — интерфейстен туруктуу иштөөгө чейин.',
      'Mobile developer building Flutter apps for iOS and Android — from interface to stable performance.'
    ),
    accent: '#16A34A',
    photo: imgAjybek
  }
]

const studioProjects: StudioProject[] = [
  {
    id: 'belgi',
    title: 'Белги',
    summary: localized(
      'Учет рабочего времени: отметка прихода и ухода по QR-коду или геолокации, смены и отпуска.',
      'Жумуш убактысын эсепке алуу: QR-код же геолокация аркылуу келүү-кетүүнү белгилөө, сменалар жана өргүүлөр.',
      'Time and attendance: QR-code or geolocation check-in and check-out, shifts, and leave tracking.'
    ),
    appStoreId: '6770578918',
    appStoreCountry: 'kg',
    playId: 'kg.belgi.app',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=kg.belgi.app&hl=ru'
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/id6770578918'
      }
    ]
  },
  {
    id: 'ayda-taxi',
    title: 'Ayda Taxi',
    summary: localized(
      'Сервис заказа такси: подача машины, маршрут поездки и оплата в приложении.',
      'Такси чакыруу сервиси: унаа берүү, каттам жана тиркеме аркылуу төлөө.',
      'Taxi booking service: car dispatch, trip route, and in-app payment.'
    ),
    appStoreId: '6802663867',
    appStoreCountry: 'kg',
    playId: 'com.aydataxi.app',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.aydataxi.app'
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/aydataxi/id6802663867'
      }
    ]
  },
  {
    id: 'nedvizhka-kg',
    title: 'Недвижка KG',
    summary: localized(
      'Поиск жилья и объектов недвижимости с фильтрами и каталогом.',
      'Турак жай жана кыймылсыз мүлк объекттерин фильтрлер жана каталог менен издөө.',
      'Property search with filters and listing catalog.'
    ),
    appStoreId: '6754600906',
    appStoreCountry: 'kg',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%BA%D0%B0-kg-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%B6%D0%B8%D0%BB%D1%8C%D1%8F/id6754600906'
      }
    ]
  },
  {
    id: 'medicall-pro',
    title: 'MediCall Pro',
    summary: localized(
      'Приложение для врачей: профиль, специализации, выезд на дом.',
      'Дарыгерлер үчүн тиркеме: профиль, адистиктер жана үйгө баруу.',
      'App for doctors: profiles, specialties, and home visits.'
    ),
    playId: 'kg.medicall.doktor',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=kg.medicall.doktor&hl=ru'
      }
    ]
  },
  {
    id: 'medicall',
    title: 'MediCall',
    summary: localized(
      'Приложение для пациентов: поиск врачей и вызов на дом.',
      'Бейтаптар үчүн тиркеме: дарыгер издөө жана үйгө чакыруу.',
      'App for patients: doctor search and home call requests.'
    ),
    playId: 'kg.medicall.patient',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=kg.medicall.patient&hl=ru'
      }
    ]
  },
  {
    id: 'doctor-kg',
    title: 'Doctor KG',
    summary: localized(
      'Медицинский сервис для поиска специалистов и записи.',
      'Адистерди табуу жана кабыл алууга жазылуу үчүн медициналык сервис.',
      'Medical service for finding specialists and booking appointments.'
    ),
    playId: 'com.doctor.kg',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.doctor.kg'
      }
    ]
  },
  {
    id: 'my-quran',
    title: 'My Quran',
    summary: localized(
      'Совместное чтение, группы и прогресс для пользователей.',
      'Колдонуучулар үчүн биргелешкен окуу, топтор жана прогресс.',
      'Shared reading, groups, and progress tracking for users.'
    ),
    appStoreId: '1671645027',
    appStoreCountry: 'kg',
    playId: 'com.alee.my_quran',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.alee.my_quran&hl=ru'
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/my-quran/id1671645027'
      }
    ]
  },
  {
    id: 'tilbil',
    title: 'Tilbil',
    summary: localized(
      'Обучение кыргызскому языку для детей: слова, аудио, пословицы.',
      'Балдар үчүн кыргыз тили: сөздөр, аудио жана макалдар.',
      'Kyrgyz language learning for children: words, audio, and proverbs.'
    ),
    playId: 'com.tilbil.kg',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.tilbil.kg&hl=en'
      }
    ]
  },
  {
    id: 'student',
    title: 'Student',
    summary: localized(
      'Платформа для студентов: каталог вузов и информация о них.',
      'Студенттер үчүн платформа: ЖОЖдор каталогу жана маалымат.',
      'Student platform with a university catalog and up-to-date information.'
    ),
    playId: 'com.student.kg',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.student.kg'
      }
    ]
  },
  {
    id: 'add-test',
    title: 'Add Test',
    summary: localized(
      'Цифровые тесты для преподавателей и учащихся.',
      'Мугалимдер жана окуучулар үчүн санарип тесттер.',
      'Digital testing for teachers and students.'
    ),
    playId: 'kg.temka.testapp',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=kg.temka.testapp'
      }
    ]
  },
  {
    id: 'ayu-garant',
    title: 'АЮ Гарант eInsurance',
    summary: localized(
      'Покупка ОСАГО и страховых продуктов через мобильное приложение.',
      'Мобилдик тиркеме аркылуу ОСАГО жана камсыздандыруу продукттарын сатып алуу.',
      'Purchase motor insurance and other insurance products in a mobile app.'
    ),
    appStoreId: '6744581566',
    appStoreCountry: 'kg',
    playId: 'com.ayu_garant.einsurance_mobile',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.ayu_garant.einsurance_mobile&hl=ru'
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/%D0%B0%D1%8E-%D0%B3%D0%B0%D1%80%D0%B0%D0%BD%D1%82/id6744581566'
      }
    ]
  },
  {
    id: 'alltrust',
    title: 'Alltrust',
    summary: localized(
      'Финансовое приложение с безопасными операциями.',
      'Коопсуз операциялары бар финансылык тиркеме.',
      'Financial app with secure operations.'
    ),
    playId: 'com.alltrust.app',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.alltrust.app'
      }
    ]
  },
  {
    id: 'finopolis',
    title: 'Finopolis 2024',
    summary: localized(
      'Финтех-проект для банковского сообщества и событий.',
      'Банк коомчулугу жана иш-чаралар үчүн финтех долбоор.',
      'Fintech product for the banking community and event ecosystem.'
    ),
    appStoreId: '6648788823',
    appStoreCountry: 'kg',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/finopolis-2024/id6648788823'
      }
    ]
  },
  {
    id: 'sez-us',
    title: 'Sez Us',
    summary: localized(
      'Социальное приложение и коммуникации.',
      'Социалдык тиркеме жана коммуникациялар.',
      'Social app focused on communication.'
    ),
    appStoreId: '6737965972',
    appStoreCountry: 'kg',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/sez-us/id6737965972'
      }
    ]
  },
  {
    id: 'cashback-alleya',
    title: 'Cashback Alleya Group',
    summary: localized(
      'Кэшбэк и бонусные программы для пользователей.',
      'Колдонуучулар үчүн кешбэк жана бонус программалары.',
      'Cashback and bonus programs for users.'
    ),
    appStoreId: '1609416687',
    appStoreCountry: 'kg',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/cashback-alleya-group/id1609416687'
      }
    ]
  },
  {
    id: 'jashyl-bonus',
    title: 'Jashyl Bonus',
    summary: localized(
      'Бонусы и программа лояльности.',
      'Бонустар жана лоялдуулук программасы.',
      'Bonuses and loyalty program.'
    ),
    appStoreId: '6743342061',
    appStoreCountry: 'kg',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/jashyl-bonus/id6743342061'
      }
    ]
  },
  {
    id: 'fresh-mag',
    title: 'Fresh Mag',
    summary: localized(
      'Супермаркет с доставкой и трекингом заказов.',
      'Жеткирүү жана буйрутма трекинги бар супермаркет.',
      'Supermarket app with delivery and order tracking.'
    ),
    appStoreId: '6738898102',
    appStoreCountry: 'kg',
    playId: 'com.fresh.mag.kg',
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.fresh.mag.kg'
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/kg/app/fresh-mag/id6738898102'
      }
    ]
  },
  {
    id: 'optombai',
    title: 'Optombai',
    summary: localized(
      'B2B платформа для оптовых закупок и каталога товаров.',
      'Көтөрмө сатып алуу жана товар каталогу үчүн B2B платформа.',
      'B2B platform for wholesale procurement and product catalogs.'
    ),
    appStoreId: '6748244443',
    appStoreCountry: 'us',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/optombai/id6748244443'
      }
    ]
  },
  {
    id: 'sika-pro-club',
    title: 'Sika Pro Club',
    summary: localized(
      'Профессиональное сообщество и программа лояльности.',
      'Профессионалдар үчүн коомчулук жана лоялдуулук программасы.',
      'Professional community and loyalty program.'
    ),
    appStoreId: '1550772811',
    appStoreCountry: 'de',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/de/app/sika-pro-club/id1550772811'
      }
    ]
  }
]

const preferredProjectOrder = ['belgi', 'ayda-taxi', 'sez-us', 'fresh-mag', 'finopolis', 'sika-pro-club']

const orderedStudioProjects = [...studioProjects].sort((a, b) => {
  const aPriority = preferredProjectOrder.indexOf(a.id)
  const bPriority = preferredProjectOrder.indexOf(b.id)
  const aOrder = aPriority === -1 ? preferredProjectOrder.length + studioProjects.indexOf(a) : aPriority
  const bOrder = bPriority === -1 ? preferredProjectOrder.length + studioProjects.indexOf(b) : bPriority
  return aOrder - bOrder
})

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('App container not found')

const serviceCards: ServiceCard[] = [
  {
    title: localized('Мобильные приложения', 'Мобилдик тиркемелер', 'Mobile apps'),
    description: localized(
      'Flutter-приложения для iOS и Android из одной кодовой базы — одинаковый интерфейс и вдвое короче путь до релиза.',
      'iOS жана Android үчүн бирдиктүү кодго негизделген Flutter тиркемелери — бирдей интерфейс жана релизге кыска жол.',
      'Flutter apps for iOS and Android from one codebase — the same interface and half the way to release.'
    ),
    image: imgMp
  },
  {
    title: localized('Веб-сервисы и сайты', 'Веб-сервистер жана сайттар', 'Web services and sites'),
    description: localized(
      'Сайты, порталы и личные кабинеты: быстрые, адаптивные и готовые к росту трафика.',
      'Сайттар, порталдар жана жеке кабинеттер: ылдам, ыңгайлашкан жана трафиктин өсүшүнө даяр.',
      'Sites, portals, and user dashboards: fast, responsive, and ready for traffic growth.'
    ),
    image: imgSait
  },
  {
    title: localized('Backend и API', 'Backend жана API', 'Backend and APIs'),
    description: localized(
      'Серверная часть, базы данных и API, которые держат нагрузку и не ломаются при обновлениях.',
      'Жүктөмдү көтөргөн жана жаңыртууда бузулбаган сервер бөлүгү, маалымат базалары жана API.',
      'Server side, databases, and APIs that hold up under load and survive every update.'
    ),
    image: imgServerStatus,
    fit: 'contain'
  },
  {
    title: localized('E-commerce и маркетплейсы', 'E-commerce жана маркетплейстер', 'E-commerce and marketplaces'),
    description: localized(
      'Магазины, каталоги и B2B-платформы: корзина, оплата, доставка и кабинеты поставщиков.',
      'Дүкөндөр, каталогдор жана B2B платформалар: себет, төлөм, жеткирүү жана жеткирүүчү кабинеттери.',
      'Stores, catalogs, and B2B platforms: cart, payment, delivery, and supplier dashboards.'
    ),
    image: imgB2B
  },
  {
    title: localized('CRM и админ-панели', 'CRM жана админ-панелдер', 'CRM and admin panels'),
    description: localized(
      'Внутренние системы для заказов, клиентов, контента и отчетов — вместо таблиц и переписок.',
      'Заказдар, кардарлар, контент жана отчеттор үчүн ички системалар — таблицалардын жана жазышуулардын ордуна.',
      'Internal systems for orders, clients, content, and reports — instead of spreadsheets and chat threads.'
    ),
    image: imgCRM
  },
  {
    title: localized('Платежи и интеграции', 'Төлөмдөр жана интеграциялар', 'Payments and integrations'),
    description: localized(
      'Эквайринг, банковские и страховые API, фискальные чеки, SMS и карты — подключаем и отвечаем за работу.',
      'Эквайринг, банк жана камсыздандыруу API, фискалдык чектер, SMS жана карталар — туташтырып, иштешине жооп беребиз.',
      'Acquiring, banking and insurance APIs, fiscal receipts, SMS, and maps — we connect them and own the result.'
    ),
    image: imgCreditCard,
    fit: 'contain'
  },
  {
    title: localized('Боты и мессенджеры', 'Боттор жана мессенджерлер', 'Bots and messengers'),
    description: localized(
      'Telegram, WhatsApp и Instagram: заявки, продажи и поддержка там, где клиент уже общается.',
      'Telegram, WhatsApp жана Instagram: билдирмелер, сатуу жана колдоо — кардар мурунтан сүйлөшкөн жерде.',
      'Telegram, WhatsApp, and Instagram: requests, sales, and support where your client already is.'
    ),
    image: imgSystem
  },
  {
    title: localized('Публикация в сторах', 'Сторлорго жарыялоо', 'Store publishing'),
    description: localized(
      'Выводим в App Store и Google Play, проходим ревью, выпускаем обновления и следим за стабильностью.',
      'App Store жана Google Play’ге чыгарабыз, ревьюдан өтөбүз, жаңыртууларды чыгарып, туруктуулугун көзөмөлдөйбүз.',
      'We ship to the App Store and Google Play, pass review, release updates, and keep the product stable.'
    ),
    image: imgAppInstall,
    fit: 'contain'
  },
  {
    title: localized('Программы лояльности', 'Лоялдуулук программалары', 'Loyalty programs'),
    description: localized(
      'Кэшбэк, бонусные счета, уровни и акции — с админкой и аналитикой начислений.',
      'Кешбэк, бонустук эсептер, деңгээлдер жана акциялар — админка жана эсептөө аналитикасы менен.',
      'Cashback, bonus accounts, tiers, and promos — with an admin panel and payout analytics.'
    ),
    image: imgGiftCard,
    fit: 'contain'
  }
]


type ExtraCopy = {
  cta: string
  formOpening: string
  formIncomplete: string
  formEmailInvalid: string
  formPhoneInvalid: string
  formLead: string
  heroSub: string
  contacts: string
  heroLead: string
  heroCtaProjects: string
  tickerLabel: string
  tickerNote: string
  figuresLabel: string
  statApps: string
  servicesHeading: string
  viewAll: string
  allProjectsTitle: string
  backHome: string
  shownOf: (shown: number, total: number) => string
  menu: string
}

const extraCopy: Record<Language, ExtraCopy> = {
  ru: {
    cta: 'Заявка',
    formOpening: 'Открываем WhatsApp — останется нажать «Отправить» в чате.',
    formIncomplete: 'Заполните имя и сообщение.',
    formEmailInvalid: 'Проверьте email — похоже, в адресе опечатка.',
    formPhoneInvalid: 'Проверьте номер: +996 и 9 цифр или +7 и 10 цифр.',
    formLead: 'Заявка с сайта OimoSoft',
    heroSub:
      'Создаём решения вместе — цифровые продукты, которые работают стабильно, запускаются вовремя и усиливают ваш бизнес.',
    contacts: 'Контакты',
    heroLead:
      `${orderedStudioProjects.length} приложений в App Store и Google Play: медицина, финтех, страхование, e-commerce и доставка — одной командой полного цикла.`,
    heroCtaProjects: 'Смотреть проекты ↓',
    tickerLabel: 'Проекты, которые мы реализовали',
    tickerNote: 'От медицины и страхования до e-commerce и образования.',
    figuresLabel: 'Цифры<br />и опыт',
    statApps: 'приложений в App Store и Google Play',
    servicesHeading: 'Что мы делаем',
    viewAll: 'Посмотреть все →',
    allProjectsTitle: 'Все проекты',
    backHome: '← На главную',
    shownOf: (shown, total) => `Показано ${shown} из ${total}`,
    menu: 'Меню'
  },
  ky: {
    cta: 'Билдирме',
    formOpening: 'WhatsApp ачылып жатат — чатта «Жөнөтүү» баскычын басыңыз.',
    formIncomplete: 'Атыңызды жана билдирүүнү толтуруңуз.',
    formEmailInvalid: 'Email’ди текшериңиз — дарек туура эмес окшойт.',
    formPhoneInvalid: 'Номерди текшериңиз: +996 жана 9 сан, же +7 жана 10 сан.',
    formLead: 'OimoSoft сайтынан билдирме',
    heroSub:
      'Чечимдерди бирге жаратабыз — туруктуу иштеген, өз убагында чыккан жана бизнесиңизди күчөткөн санарип продукттар.',
    contacts: 'Байланыш',
    heroLead:
      `App Store жана Google Play’де ${orderedStudioProjects.length} тиркеме: медицина, финтех, камсыздандыруу, e-commerce жана жеткирүү — толук циклдеги бир команда менен.`,
    heroCtaProjects: 'Долбоорлорду көрүү ↓',
    tickerLabel: 'Биз ишке ашырган долбоорлор',
    tickerNote: 'Медицинадан жана камсыздандыруудан e-commerce жана билим берүүгө чейин.',
    figuresLabel: 'Сандар<br />жана тажрыйба',
    statApps: 'App Store жана Google Play’деги тиркеме',
    servicesHeading: 'Биз эмне кылабыз',
    viewAll: 'Баарын көрүү →',
    allProjectsTitle: 'Бардык долбоорлор',
    backHome: '← Башкы бетке',
    shownOf: (shown, total) => `${total} долбоордун ${shown} көрсөтүлдү`,
    menu: 'Меню'
  },
  en: {
    cta: 'Request',
    formOpening: 'Opening WhatsApp — just hit send in the chat.',
    formIncomplete: 'Please fill in your name and message.',
    formEmailInvalid: 'Check the email — the address looks incorrect.',
    formPhoneInvalid: 'Check the number: +996 plus 9 digits, or +7 plus 10 digits.',
    formLead: 'Request from the OimoSoft website',
    heroSub:
      'Building solutions together — digital products that run reliably, launch on time, and strengthen your business.',
    contacts: 'Contacts',
    heroLead:
      `${orderedStudioProjects.length} apps on the App Store and Google Play: healthcare, fintech, insurance, e-commerce, and delivery — from one full-cycle team.`,
    heroCtaProjects: 'View projects ↓',
    tickerLabel: 'Projects we have delivered',
    tickerNote: 'From healthcare and insurance to e-commerce and education.',
    figuresLabel: 'Numbers<br />and experience',
    statApps: 'apps on the App Store and Google Play',
    servicesHeading: 'What we do',
    viewAll: 'View all →',
    allProjectsTitle: 'All projects',
    backHome: '← Back home',
    shownOf: (shown, total) => `Showing ${shown} of ${total}`,
    menu: 'Menu'
  }
}

const copy = uiCopy[currentLanguage]
const extra = extraCopy[currentLanguage]

const getProjectInitials = (title: string) => {
  const words = title.replace(/[^\p{L}\p{N}\s]/gu, '').split(' ').filter(Boolean)
  if (words.length === 0) return title.slice(0, 2).toUpperCase()
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return `${words[0][0]}${words[1][0]}`.toUpperCase()
}

const HOME_PROJECTS_COUNT = 6

const languageItems = [
  ['ru', 'RU'],
  ['ky', 'KG'],
  ['en', 'EN']
] as const

const renderLanguageSwitcher = () => `
  <div class="lang" role="group" aria-label="${copy.langAria}">
    ${languageItems
      .map(
        ([lang, label]) => `
      <button
        type="button"
        class="lang-btn${lang === currentLanguage ? ' is-active' : ''}"
        data-lang="${lang}"
        aria-pressed="${lang === currentLanguage}"
      >${label}</button>
    `
      )
      .join('')}
  </div>
`

const renderSectionHead = (kicker: string, title: string, subtitle: string) => `
  <div class="section-head">
    <div>
      <p class="kicker">${kicker}</p>
      <h2>${title}</h2>
    </div>
    <p class="section-lead">${subtitle}</p>
  </div>
`

const renderStoreLinks = (links: Link[]) => `
  <div class="store-links">
    ${links
      .map(
        (link) => `
      <a class="store-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label} ↗</a>
    `
      )
      .join('')}
  </div>
`

const renderProjectCard = (project: StudioProject, index: number) => `
  <article class="cell project-card">
    <div class="project-media">
      <div class="project-icon${projectIcons[project.id] ? ' has-image' : ''}">
        ${
          projectIcons[project.id]
            ? `<img src="${projectIcons[project.id]}" alt="${project.title}" loading="lazy" />`
            : `<span>${getProjectInitials(project.title)}</span>`
        }
      </div>
    </div>
    <div class="project-title">
      <span class="project-num">${String(index + 1).padStart(2, '0')}</span>
      <h3>${project.title}</h3>
    </div>
    <p class="muted">${getText(project.summary)}</p>
    ${renderStoreLinks(project.links)}
  </article>
`

const renderServiceCard = (service: ServiceCard) => `
  <article class="cell service-card">
    <div class="service-media${service.fit === 'contain' ? ' is-contain' : ''}">
      <img src="${service.image}" alt="${getText(service.title)}" loading="lazy" />
    </div>
    <h3>${getText(service.title)}</h3>
    <p class="muted">${getText(service.description)}</p>
  </article>
`

const renderLeaderCard = (leader: Leader) => `
  <article class="cell member-card">
    <div class="member-photo" style="background-image: url('${leader.photo}')" aria-hidden="true"></div>
    <div class="member-info">
      <p class="member-role">${leader.role}</p>
      <h3>${leader.name}</h3>
      <p class="muted">${getText(leader.tagline)}</p>
    </div>
  </article>
`

const tickerColumn = (items: StudioProject[], direction: 'up' | 'down') => `
  <div class="ticker-col ticker-${direction}">
    <div class="ticker-track">
      ${[...items, ...items]
        .map(
          (project, index) => `
        <span class="ticker-item" data-tone="${index % 3}">
          ${
            projectIcons[project.id]
              ? `<img src="${projectIcons[project.id]}" alt="" loading="lazy" />`
              : ''
          }
          <span>${project.title}</span>
        </span>
      `
        )
        .join('')}
    </div>
  </div>
`

const renderPrivacy = () => `
  <div class="privacy-grid">
    <div class="privacy-aside">
      <p class="kicker">${copy.privacy.kicker}</p>
      <h1>${copy.privacy.title}</h1>
      <div class="privacy-meta">
        <span>${copy.privacy.updated}</span>
        <span>${copy.privacy.company}</span>
      </div>
      <a class="underline-link" href="#home">${copy.common.back}</a>
    </div>
    <div class="privacy-body">
      ${copy.privacy.sections
        .map(
          (section) => `
        <section>
          <h2>${section.title}</h2>
          ${section.paragraphs
            .map((paragraph) =>
              paragraph.includes('admin@oimosoft.com')
                ? `<p>${paragraph.replace(
                    'admin@oimosoft.com',
                    '<a href="mailto:admin@oimosoft.com">admin@oimosoft.com</a>'
                  )}</p>`
                : `<p>${paragraph}</p>`
            )
            .join('')}
        </section>
      `
        )
        .join('')}
    </div>
  </div>
`

const homeProjects = orderedStudioProjects.slice(0, HOME_PROJECTS_COUNT)

app.innerHTML = `
  <div class="shell">
    <header class="topbar">
      <a class="brand" href="#home">
        <img src="${logoUrl}" alt="" />
        <span>Oimosoft</span>
      </a>
      <nav class="topnav" id="topnav">
        <a href="#projects">${copy.nav.projects}</a>
        <a href="#services">${copy.nav.services}</a>
        <a href="#team">${copy.nav.team}</a>
        <a href="#contact">${extra.contacts}</a>
      </nav>
      <div class="topbar-side">
        ${renderLanguageSwitcher()}
        <a class="btn-solid" href="#contact">${extra.cta}</a>
        <button class="burger" type="button" aria-controls="topnav" aria-expanded="false" aria-label="${extra.menu}">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <main>
      <div class="page is-active" data-page="home" id="home">
        <section class="hero">
          <div class="hero-main">
            <div>
              <h1 class="hero-title">OIMOSOFT</h1>
              <h2 class="hero-sub">${extra.heroSub}</h2>
            </div>
            <div class="hero-foot">
              <p class="hero-lead">${extra.heroLead}</p>
              <a class="underline-link" href="#projects">${extra.heroCtaProjects}</a>
            </div>
          </div>
          <div class="hero-side">
            <p class="kicker">${extra.tickerLabel}</p>
            <div class="ticker">
              ${tickerColumn(orderedStudioProjects.filter((_, index) => index % 2 === 0), 'up')}
              ${tickerColumn(orderedStudioProjects.filter((_, index) => index % 2 === 1), 'down')}
              <div class="ticker-fade" aria-hidden="true"></div>
            </div>
            <p class="muted small">${extra.tickerNote}</p>
          </div>
        </section>

        <section class="stats">
          <div class="stat-label">${extra.figuresLabel}</div>
          <div class="stat">
            <div class="stat-value">${orderedStudioProjects.length}<span>+</span></div>
            <p>${extra.statApps}</p>
          </div>
          <div class="stat">
            <div class="stat-value">50<span>+</span></div>
            <p>${copy.hero.stats[1]}</p>
          </div>
          <div class="stat">
            <div class="stat-value">5<span>+</span></div>
            <p>${copy.hero.stats[2]}</p>
          </div>
        </section>

        <section class="band" id="services">
          ${renderSectionHead(`01 — ${copy.sections.services.title}`, extra.servicesHeading, copy.sections.services.subtitle)}
          <div class="grid grid-3">
            ${serviceCards.map((service) => renderServiceCard(service)).join('')}
          </div>
        </section>

        <section class="band" id="projects">
          ${renderSectionHead(`02 — ${copy.sections.projects.title}`, copy.sections.projects.title, copy.sections.projects.subtitle)}
          <div class="grid grid-3">
            ${homeProjects.map((project, index) => renderProjectCard(project, index)).join('')}
          </div>
          <div class="band-foot">
            <span class="kicker">${extra.shownOf(homeProjects.length, orderedStudioProjects.length)}</span>
            <a class="btn-outline" href="#all-projects">${extra.viewAll}</a>
          </div>
        </section>

        <section class="band" id="team">
          ${renderSectionHead(`03 — ${copy.sections.leaders.title}`, copy.sections.leaders.title, copy.sections.leaders.subtitle)}
          <div class="grid ${leaders.length <= 3 ? 'grid-3' : 'grid-4'}">
            ${leaders.map((leader) => renderLeaderCard(leader)).join('')}
          </div>
        </section>

        <section class="contact" id="contact">
          <div class="contact-aside">
            <div>
              <p class="kicker">04 — ${extra.contacts}</p>
              <h2>${copy.footer.title}</h2>
              <p class="muted">${copy.footer.description}</p>
            </div>
            <div class="contact-links">
              <a href="mailto:admin@oimosoft.com">admin@oimosoft.com</a>
              <a href="https://wa.me/996507158857" target="_blank" rel="noreferrer">+996 507 158 857</a>
            </div>
          </div>
          <div class="contact-form-wrap">
            <form class="contact-form" novalidate>
              <label>
                <span>${copy.footer.form.name}</span>
                <input type="text" name="name" placeholder="${copy.footer.form.placeholders.name}" required />
              </label>
              <label>
                <span>${copy.footer.form.email}</span>
                <input type="email" name="email" inputmode="email" autocomplete="email" spellcheck="false" placeholder="${copy.footer.form.placeholders.email}" />
              </label>
              <label class="full">
                <span>${copy.footer.form.phone}</span>
                <input type="tel" name="phone" inputmode="tel" autocomplete="tel" placeholder="${copy.footer.form.placeholders.phone}" />
              </label>
              <label class="full">
                <span>${copy.footer.form.message}</span>
                <textarea name="message" rows="4" placeholder="${copy.footer.form.placeholders.message}" required></textarea>
              </label>
              <div class="form-foot full">
                <button class="btn-solid" type="submit">${copy.footer.form.submit}</button>
                <span class="form-status" data-form-status aria-live="polite"></span>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div class="page" data-page="all-projects" id="all-projects">
        <div class="band">
          <div class="section-head all-projects-head">
            <p class="kicker">02 — ${copy.sections.projects.title}</p>
            <div class="all-projects-title">
              <div>
                <h1>${extra.allProjectsTitle}</h1>
                <p class="section-lead">${copy.sections.projects.subtitle}</p>
              </div>
              <a class="underline-link" href="#home">${extra.backHome}</a>
            </div>
          </div>
          <div class="grid grid-3">
            ${orderedStudioProjects.map((project, index) => renderProjectCard(project, index)).join('')}
          </div>
        </div>
      </div>

      <div class="page" data-page="privacy" id="privacy">
        ${renderPrivacy()}
      </div>
    </main>

    <footer class="sitefoot">
      <div>© ${new Date().getFullYear()} OimoSoft. ${copy.footer.rights}</div>
      <div class="sitefoot-side">
        <a class="underline-link small" href="#privacy">${copy.footer.privacy}</a>
        <div class="socials">
          <a href="https://wa.me/996507158857" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 0 0-6.9 12.1L4 20l4-1.1A8 8 0 1 0 12 4Zm0 1.8a6.2 6.2 0 0 1 0 12.4 6.1 6.1 0 0 1-3.1-.8l-.2-.1-2.2.6.6-2.1-.1-.2A6.2 6.2 0 0 1 12 5.8Zm3.6 8.8c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1-.1.2-.6.7-.7.8-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.7-1.1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.4 0-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.1 1.6 2.4 3.9 3.3.5.2.9.3 1.2.4.5.1.9.1 1.2.1.4 0 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg>
          </a>
          <a href="https://www.instagram.com/oimo_soft" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Zm2.7 13.5a2.7 2.7 0 0 1-2.7 2.7h-9a2.7 2.7 0 0 1-2.7-2.7v-9a2.7 2.7 0 0 1 2.7-2.7h9a2.7 2.7 0 0 1 2.7 2.7v9Zm-7.2-7a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm0 6.6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm5.4-7.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
          </a>
          <a href="https://t.me/mustafanabiev" target="_blank" rel="noreferrer" aria-label="Telegram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 4.3c.4-.2.8.2.7.6l-3 14.2c-.1.5-.7.7-1.1.4l-4-3-2.1 2a.6.6 0 0 1-1-.3l-.6-4.8 9.6-8.6c.2-.2 0-.4-.2-.3L6.8 11.8l-3.9-1.2c-.5-.2-.6-.8-.1-1l18-5.3Z"/></svg>
          </a>
          <a href="mailto:admin@oimosoft.com" aria-label="Gmail">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.8v10.7c0 .8.6 1.5 1.4 1.5h13.2c.8 0 1.4-.7 1.4-1.5V6.8l-8 5.1-8-5.1Zm8 3.9 8-5.2c-.2-.3-.6-.4-1-.4H5c-.4 0-.8.1-1 .4l8 5.2Z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
`

const topbar = document.querySelector<HTMLElement>('.topbar')

const closeMenu = () => {
  topbar?.classList.remove('menu-open')
  topbar?.querySelector<HTMLButtonElement>('.burger')?.setAttribute('aria-expanded', 'false')
}

const setRoute = () => {
  const hash = window.location.hash.replace('#', '')
  const activePage = hash === 'privacy' ? 'privacy' : hash === 'all-projects' ? 'all-projects' : 'home'

  document.querySelectorAll<HTMLElement>('.page').forEach((page) => {
    page.classList.toggle('is-active', page.dataset.page === activePage)
  })

  closeMenu()

  if (activePage !== 'home') {
    window.scrollTo({ top: 0 })
    requestAnimationFrame(() => window.scrollTo({ top: 0 }))
    return
  }

  if (hash && hash !== 'home') {
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null
  if (!target) return

  const langButton = target.closest<HTMLButtonElement>('.lang-btn')
  if (langButton) {
    const nextLanguage = langButton.dataset.lang ?? null
    if (isLanguage(nextLanguage) && nextLanguage !== currentLanguage) {
      localStorage.setItem('oimosoft-language', nextLanguage)
      sessionStorage.setItem('oimosoft-keep-hash', '1')
      window.location.reload()
    }
    return
  }

  const burger = target.closest<HTMLButtonElement>('.burger')
  if (burger) {
    const isOpen = topbar?.classList.toggle('menu-open') ?? false
    burger.setAttribute('aria-expanded', String(isOpen))
    return
  }

  if (target.closest('.topnav a') || (topbar && !topbar.contains(target))) {
    closeMenu()
  }
})

const PHONE_PLANS = [
  { code: '996', groups: [3, 2, 2, 2] },
  { code: '7', groups: [3, 3, 2, 2] }
] as const

const planFor = (digits: string) => PHONE_PLANS.find((plan) => digits.startsWith(plan.code))

const planLength = (plan: (typeof PHONE_PLANS)[number]) =>
  plan.code.length + plan.groups.reduce((total, size) => total + size, 0)

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''

  const plan = planFor(digits)
  if (!plan) return `+${digits.slice(0, 15)}`

  const rest = digits.slice(plan.code.length, planLength(plan))
  const parts: string[] = []
  let index = 0
  for (const size of plan.groups) {
    if (index >= rest.length) break
    parts.push(rest.slice(index, index + size))
    index += size
  }

  return [`+${plan.code}`, ...parts].join(' ')
}

const isPhoneComplete = (value: string) => {
  const digits = value.replace(/\D/g, '')
  const plan = planFor(digits)
  return plan ? digits.length === planLength(plan) : digits.length >= 10
}

const isEmailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

const contactForm = document.querySelector<HTMLFormElement>('.contact-form')
const phoneInput = contactForm?.querySelector<HTMLInputElement>('input[name="phone"]')

phoneInput?.addEventListener('focus', () => {
  if (!phoneInput.value) phoneInput.value = '+'
})

phoneInput?.addEventListener('input', () => {
  phoneInput.value = formatPhone(phoneInput.value)
})

phoneInput?.addEventListener('blur', () => {
  if (phoneInput.value === '+') phoneInput.value = ''
})

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault()

  const statusNode = contactForm.querySelector<HTMLElement>('[data-form-status]')
  const setStatus = (text: string, tone: 'success' | 'error' | 'neutral' = 'neutral') => {
    if (!statusNode) return
    statusNode.textContent = text
    statusNode.dataset.tone = tone
  }

  const formData = new FormData(contactForm)
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = formatPhone(String(formData.get('phone') ?? ''))
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !message) {
    setStatus(extra.formIncomplete, 'error')
    return
  }

  if (email && !isEmailValid(email)) {
    setStatus(extra.formEmailInvalid, 'error')
    return
  }

  if (phone && !isPhoneComplete(phone)) {
    setStatus(extra.formPhoneInvalid, 'error')
    return
  }

  const labels = copy.footer.form
  const lines = [
    extra.formLead,
    '',
    `${labels.name}: ${name}`,
    ...(email ? [`${labels.email}: ${email}`] : []),
    ...(phone ? [`${labels.phone}: ${phone}`] : []),
    '',
    `${labels.message}: ${message}`
  ]

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  window.open(url, '_blank', 'noopener')

  contactForm.reset()
  setStatus(extra.formOpening, 'success')
})

window.addEventListener('hashchange', setRoute)

const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
const keepHashOnReload = sessionStorage.getItem('oimosoft-keep-hash') === '1'
if (keepHashOnReload) sessionStorage.removeItem('oimosoft-keep-hash')
if (navEntry?.type === 'reload' && window.location.hash && !keepHashOnReload) {
  history.replaceState(null, '', window.location.pathname + window.location.search)
}

setRoute()
