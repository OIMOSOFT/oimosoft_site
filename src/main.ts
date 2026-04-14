import './style.css'

import imgLogo from './assets/logoo.svg'
import imgSyimyk from './assets/syimyk.png'
import imgBekturgaan from './assets/bekturgaan.png'
import imgMustafa from './assets/mustafa.jpeg'
import imgAziret from './assets/aziret.png'
import imgKurmanbek from './assets/kurmanbek.jpg'
import imgMyktybek from './assets/myktybek.png'
import imgAsyl from './assets/asyl.png'
import imgIskender from './assets/iskender.jpg'
import imgKutman from './assets/kutman.png'
import imgMaks from './assets/maks.jpg'
import imgAjybek from './assets/ajybek.jpg'
import imgProgrammingbro from './assets/Programmingbro.png'
import imgMp from './assets/mp.jpeg'
import imgSait from './assets/sait.jpeg'
import img2d from './assets/2d.jpeg'
import img3d from './assets/3d.jpeg'
import imgItkurs from './assets/itkurs.jpeg'
import imgSystem from './assets/System.jpeg'
import imgEcommerce from './assets/Ecommerce.jpeg'
import imgCRM from './assets/CRM.jpeg'
import imgB2B from './assets/B2B.jpeg'

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
const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? ''

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
      projects: { title: 'Проекты', subtitle: 'Все проекты с рабочими ссылками на App Store и Google Play.' },
      services: { title: 'Сервис', subtitle: 'Ключевые направления и компетенции команды.' },
      leaders: { title: 'Команда', subtitle: 'Ключевая команда, которая ведет проекты от идеи до релиза.' }
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
          phone: '+996 (___) ___ ___',
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
            'If you have questions or concerns about this Privacy Policy, you can contact us at oimosoft1@gmail.com.'
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
      projects: { title: 'Долбоорлор', subtitle: 'Бардык долбоорлордун App Store жана Google Play шилтемелери иштейт.' },
      services: { title: 'Кызматтар', subtitle: 'Команданын негизги багыттары жана компетенциялары.' },
      leaders: { title: 'Команда', subtitle: 'Идеядан релизге чейин долбоорду жетектеген негизги команда.' }
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
          phone: '+996 (___) ___ ___',
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
            'Эгерде бул Купуялык саясаты боюнча суроолоруңуз же тынчсызданууңуз болсо, oimosoft1@gmail.com дарегине жаза аласыз.'
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
      projects: { title: 'Projects', subtitle: 'All projects with working App Store and Google Play links.' },
      services: { title: 'Services', subtitle: 'Core directions and competencies of the team.' },
      leaders: { title: 'Team', subtitle: 'The core team leading projects from idea to release.' }
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
          phone: '+996 (___) ___ ___',
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
            'If you have questions or concerns about this Privacy Policy, you can contact us at oimosoft1@gmail.com.'
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
    id: 'syymyk',
    name: 'Абдыбек уулу Сыймык',
    role: 'Director',
    tagline: localized(
      'Формирует стратегию, развивает партнерства и ведет компанию от идеи к сильному продукту.',
      'Стратегияны түзүп, өнөктөштүктөрдү өнүктүрүп, компанияны идеядан күчтүү продуктка чейин алып барат.',
      'Shapes strategy, grows partnerships, and leads the company from idea to strong product.'
    ),
    accent: '#F28C28',
    photo: imgSyimyk
  },
  {
    id: 'bekturgan',
    name: 'Зулпукаров Бектурган',
    role: 'Manager',
    tagline: localized(
      'Выстраивает процессы, держит ритм команды и превращает задачи клиентов в четкий результат.',
      'Процесстерди түзүп, команданын ритмин кармайт жана кардар тапшырмаларын так жыйынтыкка айлантат.',
      'Builds processes, keeps the team in sync, and turns client tasks into clear results.'
    ),
    accent: '#F25C2A',
    photo: imgBekturgaan
  },
  {
    id: 'mustafa',
    name: 'Мустафа Набиев',
    role: 'Tech Lead',
    tagline: localized(
      'Отвечает за архитектуру, качество релизов и устойчивость продукта под рост и нагрузку.',
      'Архитектурага, релиздердин сапатына жана продукттун өсүүгө даяр туруктуулугуна жооп берет.',
      'Owns architecture, release quality, and product stability under growth and load.'
    ),
    accent: '#F29F2D',
    photo: imgMustafa
  },
  {
    id: 'aziret',
    name: 'Азирет Абдималиков',
    role: 'Flutter Developer',
    tagline: localized(
      'Разрабатывает современные мобильные приложения на Flutter, создавая удобный интерфейс, стабильную логику и качественный пользовательский опыт.',
      'Flutter аркылуу заманбап мобилдик тиркемелерди иштеп чыгып, ыңгайлуу интерфейс, туруктуу логика жана сапаттуу колдонуучу тажрыйбасын түзөт.',
      'Builds modern Flutter apps with intuitive interfaces, stable logic, and a polished user experience.'
    ),
    accent: '#16A34A',
    photo: imgAziret
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
    id: 'myktybek',
    name: 'Туркбаев Мыктыбек',
    role: 'YouTube Team Lead',
    tagline: localized(
      'Руководит YouTube-направлением, объединяя аналитику, AI-инструменты и экспертный монтаж для роста контента.',
      'YouTube багытын жетектеп, контенттин өсүшү үчүн аналитиканы, AI-куралдарын жана сапаттуу монтажды бириктирет.',
      'Leads the YouTube direction by combining analytics, AI tools, and expert editing to grow content.'
    ),
    accent: '#10B981',
    photo: imgMyktybek
  },
  {
    id: 'asylbek',
    name: 'Кудайбердиев Асылбек',
    role: '3D Motion Designer & Video Editor',
    tagline: localized(
      'Создает качественный визуальный контент с помощью 3D-графики и видео монтажа.',
      '3D жана видео монтаж аркылуу сапаттуу визуалдык контент жаратат.',
      'Creates high-quality visual content through 3D motion work and video editing.'
    ),
    accent: '#14B8A6',
    photo: imgAsyl
  },
  {
    id: 'iskender',
    name: 'Азамов Искендер',
    role: 'Web Developer & 3D Animator',
    tagline: localized(
      'Занимается веб-разработкой и 3D-анимацией, создавая современные цифровые решения и визуально выразительные проекты.',
      'Веб-иштеп чыгуу жана 3D-анимация менен алектенип, заманбап санарип чечимдерди жана көркөм долбоорлорду жаратат.',
      'Works across web development and 3D animation, creating modern digital solutions and visually expressive projects.'
    ),
    accent: '#22C55E',
    photo: imgIskender
  },
  {
    id: 'kutman',
    name: 'Турдумаматов Кутман',
    role: '3D Animator',
    tagline: localized(
      'Создает 3D-анимацию и модели, прорабатывая детали, визуальный стиль и качество исполнения для яркой и реалистичной подачи проекта.',
      'Долбоорду жаркын жана реалистүү берүү үчүн 3D-анимация жана моделдерди жасап, деталдарды, визуалдык стилди жана аткаруу сапатын иштеп чыгат.',
      'Creates 3D animation and models, refining detail, visual style, and execution quality for vivid and realistic project delivery.'
    ),
    accent: '#34D399',
    photo: imgKutman
  },
  {
    id: 'maksatbek',
    name: 'Максатбек Рысбек уулу',
    role: 'Web Designer & Flutter Developer',
    tagline: localized(
      'Создает современный веб-дизайн и Flutter-приложения, объединяя удобный интерфейс и качественные цифровые решения.',
      'Заманбап веб-дизайн жана Flutter тиркемелерин иштеп чыгып, колдонуучуга ыңгайлуу интерфейс менен сапаттуу санарип чечимдерди жаратат.',
      'Designs modern web interfaces and Flutter apps, combining user-friendly UX with quality digital solutions.'
    ),
    accent: '#22C55E',
    photo: imgMaks
  },
  {
    id: 'ajybek',
    name: 'Рахманбердиев Ажыбек',
    role: 'Flutter Developer',
    tagline: localized(
      'Работает в направлениях веб-дизайна и Flutter, создавая современные интерфейсы и удобные мобильные решения.',
      'Веб-дизайн жана Flutter багытында иштеп, заманбап интерфейстерди жана колдонуучуга ыңгайлуу мобилдик чечимдерди түзөт.',
      'Works across web design and Flutter, creating modern interfaces and user-friendly mobile solutions.'
    ),
    accent: '#16A34A',
    photo: imgAjybek
  }
]

const studioProjects: StudioProject[] = [
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

const preferredProjectOrder = ['sez-us', 'fresh-mag', 'finopolis', 'sika-pro-club']

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
      'Запускаем нативный опыт на iOS и Android с фокусом на скорость и надежность.',
      'iOS жана Android үчүн ылдамдыкка жана ишенимдүүлүккө багытталган мобилдик тажрыйба түзөбүз.',
      'We launch iOS and Android experiences focused on speed and reliability.'
    ),
    image: imgMp
  },
  {
    title: localized('Сайты и веб‑сервисы', 'Сайттар жана веб‑сервистер', 'Websites and web services'),
    description: localized(
      'Делаем быстрые веб‑продукты с сильной архитектурой и современным UI.',
      'Күчтүү архитектурасы жана заманбап интерфейси бар ылдам веб‑продукттарды жасайбыз.',
      'We build fast web products with strong architecture and modern UI.'
    ),
    image: imgSait
  },
  {
    title: localized('2D игры', '2D оюндар', '2D games'),
    description: localized(
      'Создаем вовлекающие 2D‑проекты: дизайн, механики, аналитика и публикация.',
      'Дизайн, механика, аналитика жана жарыялоо менен кызыктуу 2D долбоорлорду жасайбыз.',
      'We create engaging 2D projects with design, mechanics, analytics, and publishing.'
    ),
    image: img2d
  },
  {
    title: localized('3D моделирование', '3D моделдөө', '3D modeling'),
    description: localized(
      'Создаем 3D‑модели и визуальные сцены для презентаций, продуктов и digital‑контента.',
      'Презентациялар, продукттар жана digital‑контент үчүн 3D моделдерди жана көрүнүштөрдү жасайбыз.',
      'We create 3D models and visual scenes for presentations, products, and digital content.'
    ),
    image: img3d
  },
  {
    title: localized('IT‑курсы и обучение', 'IT‑курстар жана окутуу', 'IT courses and education'),
    description: localized(
      'Пакуем экспертизу в курсы и академии: программа, контент, запуск.',
      'Экспертизаны курс жана академия форматына айландырабыз: программа, контент, ишке киргизүү.',
      'We package expertise into courses and academies: curriculum, content, and launch.'
    ),
    image: imgItkurs
  },
  {
    title: localized('Telegram‑боты', 'Telegram‑боттор', 'Telegram bots'),
    description: localized(
      'Проектируем и запускаем Telegram‑ботов для продаж, поддержки и автоматизации.',
      'Сатуу, колдоо жана автоматташтыруу үчүн Telegram‑ботторду долбоорлоп ишке киргизебиз.',
      'We design and launch Telegram bots for sales, support, and automation.'
    ),
    image: imgSystem
  },
  {
    title: localized('E-commerce платформы', 'E-commerce платформалары', 'E-commerce platforms'),
    description: localized(
      'Запускаем магазины, каталоги, корзину, оплату и доставку в едином удобном продукте.',
      'Дүкөн, каталог, себет, төлөм жана жеткирүүнү бир ыңгайлуу продуктка бириктиребиз.',
      'We launch stores, catalogs, carts, payments, and delivery in one cohesive product.'
    ),
    image: imgEcommerce
  },
  {
    title: localized('CRM / Admin панели', 'CRM / Admin панелдери', 'CRM / Admin panels'),
    description: localized(
      'Делаем внутренние панели управления для заказов, пользователей, контента и аналитики.',
      'Буйрутмалар, колдонуучулар, контент жана аналитика үчүн ички башкаруу панелдерин жасайбыз.',
      'We build internal management panels for orders, users, content, and analytics.'
    ),
    image: imgCRM
  },
  {
    title: localized('Marketplace / B2B решения', 'Marketplace / B2B чечимдери', 'Marketplace / B2B solutions'),
    description: localized(
      'Проектируем B2B-платформы для поставщиков, заявок, оптовых заказов и партнерских кабинетов.',
      'Жеткирүүчүлөр, билдирмелер, дүң заказдар жана өнөктөш кабинеттер үчүн B2B-платформаларды түзөбүз.',
      'We design B2B platforms for suppliers, requests, wholesale orders, and partner dashboards.'
    ),
    image: imgB2B
  }
]

const getProjectInitials = (title: string) => {
  const words = title.replace(/[^\p{L}\p{N}\s]/gu, '').split(' ').filter(Boolean)
  if (words.length === 0) return title.slice(0, 2).toUpperCase()
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return `${words[0][0]}${words[1][0]}`.toUpperCase()
}

const getProjectColor = (id: string) => {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash << 5) - hash + id.charCodeAt(i)
    hash |= 0
  }
  const hue = Math.abs(hash) % 360
  return `hsl(${hue} 70% 55%)`
}

const languageItems = [
  ['ky', 'KG', '🇰🇬'],
  ['ru', 'RU', '🇷🇺'],
  ['en', 'EN', '🇺🇸']
] as const

const renderLanguageSwitcher = () => `
  <div class="lang-switcher" aria-label="${uiCopy[currentLanguage].langAria}">
    <button class="lang-current" type="button" data-lang-toggle aria-expanded="false">
      <span class="lang-current-value">
        <span class="lang-flag" aria-hidden="true">${languageItems.find(([lang]) => lang === currentLanguage)?.[2] ?? '🇷🇺'}</span>
        <span>${languageItems.find(([lang]) => lang === currentLanguage)?.[1] ?? 'RU'}</span>
      </span>
      <span class="lang-arrow" aria-hidden="true">▾</span>
    </button>
    <div class="lang-menu" role="menu">
      ${languageItems
    .filter(([lang]) => lang !== currentLanguage)
    .map(
      ([lang, label, flag]) => `
            <button class="lang-btn" type="button" data-lang="${lang}" role="menuitem">
              <span class="lang-flag" aria-hidden="true">${flag}</span>
              <span>${label}</span>
            </button>
          `
    )
    .join('')}
    </div>
  </div>
`

const renderHeroTitle = (title: string) => {
  const [brand, ...tail] = title.split('—')
  const tagline = tail.join('—').trim()
  return `
    <span class="hero-title-brand">${brand.trim()}</span>
    ${tagline ? `<span class="hero-title-tagline">— ${tagline}</span>` : ''}
  `
}

const renderPrivacyPolicy = () => {
  const copy = uiCopy[currentLanguage]
  return `
    <section class="page-view privacy-page" data-page="privacy" id="privacy">
      <section class="privacy-shell">
        <div class="privacy-card">
          <a class="button ghost privacy-back" href="#home">${copy.common.back}</a>
          <div class="privacy-intro">
            <p class="privacy-kicker">${copy.privacy.kicker}</p>
            <h1>${copy.privacy.title}</h1>
            <div class="privacy-meta">
              <span>${copy.privacy.updated}</span>
              <span>${copy.privacy.company}</span>
            </div>
          </div>
          ${copy.privacy.sections
      .map(
        (section) => `
                <section class="privacy-section">
                  <h2>${section.title}</h2>
                  ${section.paragraphs
            .map((paragraph) =>
              paragraph.includes('oimosoft1@gmail.com')
                ? `<p>${paragraph.replace(
                  'oimosoft1@gmail.com',
                  '<a href="mailto:oimosoft1@gmail.com">oimosoft1@gmail.com</a>'
                )}</p>`
                : `<p>${paragraph}</p>`
            )
            .join('')}
                </section>
              `
      )
      .join('')}
        </div>
      </section>
    </section>
  `
}

const renderStoreLinks = (links: Link[]) => `
  <div class="store-links">
    ${links
    .map(
      (link) => `
      <a class="store-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
    `
    )
    .join('')}
  </div>
`

const renderProjectCard = (project: StudioProject, order: number) => `
  <article class="project-card reveal" data-order="${order}">
    <div class="project-header">
      <div class="project-title-row">
        <div
          class="project-logo"
          style="--logo:${getProjectColor(project.id)}"
          data-app-store-id="${project.appStoreId ?? ''}"
          data-app-store-country="${project.appStoreCountry ?? ''}"
          data-play-id="${project.playId ?? ''}"
          data-initials="${getProjectInitials(project.title)}"
        >
          <span>${getProjectInitials(project.title)}</span>
          <img class="project-logo-img" alt="${project.title} logo" loading="lazy" />
        </div>
        <h3>${project.title}</h3>
      </div>
      <p class="project-summary">${getText(project.summary)}</p>
    </div>
    ${renderStoreLinks(project.links)}
  </article>
`

const renderLeaderCard = (leader: Leader) => `
  <article class="leader-card reveal" style="--accent: ${leader.accent}; --photo: url('${leader.photo}')">
    <div class="leader-media" aria-hidden="true"></div>
    <div class="leader-info">
      <p class="leader-role">${leader.role}</p>
      <h3>${leader.name}</h3>
      <p class="leader-tagline">${getText(leader.tagline)}</p>
    </div>
  </article>
`

const copy = uiCopy[currentLanguage]

app.innerHTML = `
  <div class="app">
    <header class="site-header">
      <a class="brand" href="#home">
        <img class="brand-logo" src="${logoUrl}" alt="Oimosoft" />
        <div>
          <span class="brand-name">OimoSoft</span>
        </div>
      </a>
      <nav class="site-nav" id="site-nav">
        <a href="#home">${copy.nav.home}</a>
        <a href="#projects">${copy.nav.projects}</a>
        <a href="#services">${copy.nav.services}</a>
        <a href="#leaders">${copy.nav.team}</a>
      </nav>
      ${renderLanguageSwitcher()}
      <button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a class="button primary" href="#contact">${copy.nav.contact}</a>
    </header>

    <main>
      <section class="page-view is-active" data-page="home" id="home">
        <section class="hero">
          <canvas id="tech-canvas" class="hero-canvas" aria-hidden="true"></canvas>
          <div class="hero-inner">
            <div class="hero-content">
              <h1>${renderHeroTitle(copy.hero.title)}</h1>
              <p>
                ${copy.hero.description}
              </p>
              <div class="hero-stats">
                <div>
                  <strong>15+</strong>
                  <span>${copy.hero.stats[0]}</span>
                </div>
                <div>
                  <strong>50+</strong>
                  <span>${copy.hero.stats[1]}</span>
                </div>
                <div>
                  <strong>5+</strong>
                  <span>${copy.hero.stats[2]}</span>
                </div>
              </div>
            </div>
            <div class="hero-visual">
              <div class="macbook-stack">
                <div class="hero-video">
                  <img src="${imgProgrammingbro}" alt="Programming illustration" />
                </div>
                <div class="macbook-glow" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="projects">
          <div class="section-head">
            <div class="section-head-content">
              <h2>${copy.sections.projects.title}</h2>
              <p>${copy.sections.projects.subtitle}</p>
            </div>
            <div class="section-actions" data-scroll-target="projects-row">
              <button class="scroll-btn" type="button" data-scroll="left" aria-label="${copy.common.scrollLeft}">
                ←
              </button>
              <button class="scroll-btn" type="button" data-scroll="right" aria-label="${copy.common.scrollRight}">
                →
              </button>
            </div>
          </div>
          <div class="portfolio-row" id="projects-row">
            ${orderedStudioProjects.map((project, index) => renderProjectCard(project, index)).join('')}
          </div>
        </section>

        <section class="section" id="services">
          <div class="section-head">
            <div class="section-head-content">
              <h2>${copy.sections.services.title}</h2>
              <p>${copy.sections.services.subtitle}</p>
            </div>
            <div class="section-actions" data-scroll-target="services-row">
              <button class="scroll-btn" type="button" data-scroll="left" aria-label="${copy.common.scrollLeft}">
                ←
              </button>
              <button class="scroll-btn" type="button" data-scroll="right" aria-label="${copy.common.scrollRight}">
                →
              </button>
            </div>
          </div>
          <div class="service-row" id="services-row">
            ${serviceCards
    .map(
      (item) => `
              <article class="service-card reveal">
                <div class="service-image">
                  <img src="${item.image}" alt="${getText(item.title)}" loading="lazy" />
                </div>
                <h3>${getText(item.title)}</h3>
                <p>${getText(item.description)}</p>
              </article>
            `
    )
    .join('')}
          </div>
        </section>

        <section class="section" id="leaders">
          <div class="section-head">
            <div class="section-head-content">
              <h2>${copy.sections.leaders.title}</h2>
              <p>${copy.sections.leaders.subtitle}</p>
            </div>
            <div class="section-actions" data-scroll-target="leaders-row">
              <button class="scroll-btn" type="button" data-scroll="left" aria-label="${copy.common.scrollLeft}">
                ←
              </button>
              <button class="scroll-btn" type="button" data-scroll="right" aria-label="${copy.common.scrollRight}">
                →
              </button>
            </div>
          </div>
          <div class="leaders-row" id="leaders-row">
            ${leaders.map((leader) => renderLeaderCard(leader)).join('')}
          </div>
        </section>

      </section>

      ${renderPrivacyPolicy()}

    </main>

    <footer class="footer" id="contact">
      <div class="footer-contact">
        <div>
          <h2>${copy.footer.title}</h2>
          <p>${copy.footer.description}</p>
        </div>
        <form
          class="contact-form"
          novalidate
        >
          <label>
            ${copy.footer.form.name}
            <input type="text" name="name" placeholder="${copy.footer.form.placeholders.name}" required />
          </label>
          <label>
            ${copy.footer.form.email}
            <input type="email" name="email" placeholder="${copy.footer.form.placeholders.email}" required />
          </label>
          <label>
            ${copy.footer.form.phone}
            <input type="tel" name="phone" placeholder="${copy.footer.form.placeholders.phone}" />
          </label>
          <label class="full">
            ${copy.footer.form.message}
            <textarea name="message" rows="4" placeholder="${copy.footer.form.placeholders.message}" required></textarea>
          </label>
          <button class="button primary" type="submit">${copy.footer.form.submit}</button>
          <p class="form-status full" data-form-status aria-live="polite"></p>
        </form>
      </div>
      <div class="footer-main">
        <div>© ${new Date().getFullYear()} OimoSoft. ${copy.footer.rights}</div>
        <div class="footer-side">
          <div class="footer-links">
            <a class="footer-policy-link" href="#privacy">${copy.footer.privacy}</a>
          </div>
          <div class="footer-social">
            <a class="icon-button" href="https://wa.me/996500040111" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 0 0-6.9 12.1L4 20l4-1.1A8 8 0 1 0 12 4Zm0 1.8a6.2 6.2 0 0 1 0 12.4 6.1 6.1 0 0 1-3.1-.8l-.2-.1-2.2.6.6-2.1-.1-.2A6.2 6.2 0 0 1 12 5.8Zm3.6 8.8c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1-.1.2-.6.7-.7.8-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.7-1.1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.4 0-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.1 1.6 2.4 3.9 3.3.5.2.9.3 1.2.4.5.1.9.1 1.2.1.4 0 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg>
            </a>
            <a class="icon-button" href="https://www.instagram.com/oimo_soft?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Zm2.7 13.5a2.7 2.7 0 0 1-2.7 2.7h-9a2.7 2.7 0 0 1-2.7-2.7v-9a2.7 2.7 0 0 1 2.7-2.7h9a2.7 2.7 0 0 1 2.7 2.7v9Zm-7.2-7a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm0 6.6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm5.4-7.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
            </a>
            <a class="icon-button" href="tg://resolve?phone=996500040111" aria-label="Telegram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 4.3c.4-.2.8.2.7.6l-3 14.2c-.1.5-.7.7-1.1.4l-4-3-2.1 2a.6.6 0 0 1-1-.3l-.6-4.8 9.6-8.6c.2-.2 0-.4-.2-.3L6.8 11.8l-3.9-1.2c-.5-.2-.6-.8-.1-1l18-5.3Z"/></svg>
            </a>
            <a class="icon-button" href="https://github.com/OIMOSOFT" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-2.8 17.6c.4.1.6-.2.6-.5v-2c-2.4.5-3-1-3-1-.4-.9-1-1.1-1-1.1-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2-.2-4.1-1-4.1-4.6 0-1 .4-1.8 1-2.4-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.5 1a8.7 8.7 0 0 1 4.6 0c1.7-1.2 2.5-1 2.5-1 .5 1.2.2 2.1.1 2.3.6.6 1 1.4 1 2.4 0 3.6-2.2 4.4-4.2 4.6.3.3.6.8.6 1.7v2.5c0 .3.2.6.6.5A9 9 0 0 0 12 3Z"/></svg>
            </a>
            <a class="icon-button" href="mailto:oimosoft1@gmail.com" aria-label="Gmail">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.8v10.7c0 .8.6 1.5 1.4 1.5h13.2c.8 0 1.4-.7 1.4-1.5V6.8l-8 5.1-8-5.1Zm8 3.9 8-5.2c-.2-.3-.6-.4-1-.4H5c-.4 0-.8.1-1 .4l8 5.2Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
`

const appShell = document.querySelector<HTMLElement>('.app')


const projectIconCache = new Map<string, string>()

const buildAppStoreLookupUrls = (id: string, country?: string) => {
  const urls: string[] = []
  if (country) {
    urls.push(`https://itunes.apple.com/lookup?id=${id}&country=${country}`)
  }
  urls.push(`https://itunes.apple.com/lookup?id=${id}&country=us`)
  urls.push(`https://itunes.apple.com/lookup?id=${id}`)
  return urls
}

const fetchAppStoreIcon = async (id: string, country?: string) => {
  const cacheKey = `app:${id}:${country ?? 'default'}`
  if (projectIconCache.has(cacheKey)) {
    return projectIconCache.get(cacheKey) ?? null
  }
  const urls = buildAppStoreLookupUrls(id, country)
  for (const url of urls) {
    try {
      const response = await fetch(url)
      if (!response.ok) continue
      const data = (await response.json()) as {
        results?: Array<{ artworkUrl512?: string; artworkUrl100?: string }>
      }
      let iconUrl = data.results?.[0]?.artworkUrl512 ?? data.results?.[0]?.artworkUrl100 ?? null
      if (iconUrl && iconUrl.startsWith('http://')) {
        iconUrl = iconUrl.replace('http://', 'https://')
      }
      if (iconUrl) {
        projectIconCache.set(cacheKey, iconUrl)
        return iconUrl
      }
    } catch {
      continue
    }
  }
  return null
}

const extractPlayIcon = (text: string) => {
  const match = text.match(/https:\/\/play-lh\.googleusercontent\.com\/[^\s"']+/)
  if (!match) return null
  let iconUrl = match[0]
  const sizeIndex = iconUrl.indexOf('=w')
  if (sizeIndex !== -1) {
    iconUrl = `${iconUrl.slice(0, sizeIndex)}=w256-h256`
  } else {
    iconUrl = `${iconUrl}=w256-h256`
  }
  return iconUrl
}

const fetchPlayIcon = async (id: string) => {
  const cacheKey = `play:${id}`
  if (projectIconCache.has(cacheKey)) {
    return projectIconCache.get(cacheKey) ?? null
  }
  const sources = [
    `https://r.jina.ai/http://https://play.google.com/store/apps/details?id=${id}`,
    `https://r.jina.ai/http://play.google.com/store/apps/details?id=${id}`
  ]
  for (const source of sources) {
    try {
      const response = await fetch(source)
      if (!response.ok) continue
      const text = await response.text()
      const iconUrl = extractPlayIcon(text)
      if (iconUrl) {
        projectIconCache.set(cacheKey, iconUrl)
        return iconUrl
      }
    } catch {
      continue
    }
  }
  return null
}

const reorderProjectCards = () => {
  const row = document.querySelector<HTMLElement>('.portfolio-row')
  if (!row) return
  const cards = Array.from(row.querySelectorAll<HTMLElement>('.project-card'))
  if (cards.length === 0) return
  cards.sort((a, b) => {
    const aOrder = Number(a.dataset.order ?? 0)
    const bOrder = Number(b.dataset.order ?? 0)
    return aOrder - bOrder
  })
  cards.forEach((card) => row.appendChild(card))
}

const loadProjectLogos = () => {
  const containers = document.querySelectorAll<HTMLElement>('.project-logo')
  if (containers.length === 0) return
  let remaining = containers.length
  const done = () => {
    remaining -= 1
    if (remaining <= 0) reorderProjectCards()
  }

  containers.forEach((container) => {
    const img = container.querySelector<HTMLImageElement>('img')
    if (!img) {
      done()
      return
    }
    const appStoreId = container.dataset.appStoreId?.trim()
    const appStoreCountry = container.dataset.appStoreCountry?.trim()
    const playId = container.dataset.playId?.trim()
    const load = async () => {
      let iconUrl: string | null = null
      if (appStoreId) {
        iconUrl = await fetchAppStoreIcon(appStoreId, appStoreCountry)
      }
      if (!iconUrl && playId) {
        iconUrl = await fetchPlayIcon(playId)
      }
      if (!iconUrl) {
        img.remove()
        done()
        return
      }
      img.src = iconUrl
      img.addEventListener(
        'load',
        () => {
          container.classList.add('has-image')
          done()
        },
        { once: true }
      )
      img.addEventListener(
        'error',
        () => {
          img.remove()
          done()
        },
        { once: true }
      )
    }
    void load()
  })
}

loadProjectLogos()

const initTechCanvas = () => {
  const hero = document.querySelector<HTMLElement>('.hero')
  const canvas = document.querySelector<HTMLCanvasElement>('#tech-canvas')
  if (!hero || !canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const shouldAnimate = !prefersReducedMotion
  const maxDpr = 2
  let width = 0
  let height = 0
  let dpr = Math.min(window.devicePixelRatio || 1, maxDpr)

  type Node = {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
  }

  let nodes: Node[] = []
  const mouse = { x: 0, y: 0, active: false }

  const resize = () => {
    width = hero.clientWidth
    height = hero.clientHeight
    dpr = Math.min(window.devicePixelRatio || 1, maxDpr)
    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const targetCount = Math.max(26, Math.floor((width * height) / 15000))
    nodes = Array.from({ length: targetCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 1.6 + Math.random() * 1.8
    }))
  }

  const updateMouse = (event: PointerEvent) => {
    const rect = hero.getBoundingClientRect()
    mouse.x = event.clientX - rect.left
    mouse.y = event.clientY - rect.top
    mouse.active = true
  }

  const resetMouse = () => {
    mouse.active = false
  }

  hero.addEventListener('pointermove', updateMouse)
  hero.addEventListener('pointerleave', resetMouse)

  const getVirtualMouse = (time: number) => {
    if (mouse.active) return mouse
    return {
      x: width / 2 + Math.cos(time / 1600) * width * 0.18,
      y: height / 2 + Math.sin(time / 1400) * height * 0.18
    }
  }

  const draw = (time: number) => {
    ctx.clearRect(0, 0, width, height)
    const virtualMouse = getVirtualMouse(time)

    const normX = (virtualMouse.x / width - 0.5) * 2
    const normY = (virtualMouse.y / height - 0.5) * 2
    hero.style.setProperty('--mx', normX.toFixed(3))
    hero.style.setProperty('--my', normY.toFixed(3))

    const maxDist = 140
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i]
      const dxm = virtualMouse.x - node.x
      const dym = virtualMouse.y - node.y
      const distMouse = Math.hypot(dxm, dym)

      if (shouldAnimate) {
        const attraction = distMouse < 180 ? 0.012 : 0.002
        if (distMouse > 0) {
          node.vx += (dxm / distMouse) * attraction
          node.vy += (dym / distMouse) * attraction
        }

        node.x += node.vx
        node.y += node.vy
        node.vx *= 0.96
        node.vy *= 0.96

        const margin = 80
        if (node.x < -margin) {
          node.x = width + margin
          node.y = Math.random() * height
        }
        if (node.x > width + margin) {
          node.x = -margin
          node.y = Math.random() * height
        }
        if (node.y < -margin) {
          node.y = height + margin
          node.x = Math.random() * width
        }
        if (node.y > height + margin) {
          node.y = -margin
          node.x = Math.random() * width
        }
      }

      for (let j = i + 1; j < nodes.length; j += 1) {
        const other = nodes[j]
        const dx = other.x - node.x
        const dy = other.y - node.y
        const dist = Math.hypot(dx, dy)
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.35
          ctx.strokeStyle = `rgba(34, 197, 94, ${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
      }

      const highlight = distMouse < 120
      ctx.fillStyle = highlight ? 'rgba(34, 197, 94, 0.9)' : 'rgba(15, 23, 42, 0.35)'
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius + (highlight ? 0.7 : 0), 0, Math.PI * 2)
      ctx.fill()
    }

    if (shouldAnimate) {
      requestAnimationFrame(draw)
    }
  }

  resize()
  window.addEventListener('resize', resize)

  if (shouldAnimate) {
    requestAnimationFrame(draw)
  } else {
    draw(0)
  }
}

initTechCanvas()


const setRoute = () => {
  const hash = window.location.hash.replace('#', '')
  const activePage = hash === 'privacy' ? 'privacy' : 'home'

  appShell?.classList.toggle('privacy-mode', activePage === 'privacy')

  const pages = document.querySelectorAll<HTMLElement>('.page-view')
  pages.forEach((page) => {
    page.classList.toggle('is-active', page.dataset.page === activePage)
  })

  if (hash === 'privacy') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (hash && hash !== 'home') {
    const section = document.getElementById(hash)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  observeReveal()
}

const observeReveal = () => {
  const activePage = document.querySelector<HTMLElement>('.page-view.is-active')
  if (!activePage) return

  const items = activePage.querySelectorAll<HTMLElement>('.reveal')
  if (items.length === 0) return

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  items.forEach((item) => observer.observe(item))
}

const closeLanguageMenus = () => {
  document.querySelectorAll<HTMLElement>('.lang-switcher.is-open').forEach((switcher) => {
    switcher.classList.remove('is-open')
    switcher.querySelector<HTMLElement>('[data-lang-toggle]')?.setAttribute('aria-expanded', 'false')
  })
}

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null
  if (!target) return

  if (target.closest('.store-link')) {
    return
  }

  const langToggle = target.closest<HTMLButtonElement>('[data-lang-toggle]')
  if (langToggle) {
    const switcher = langToggle.closest<HTMLElement>('.lang-switcher')
    const shouldOpen = !switcher?.classList.contains('is-open')
    closeLanguageMenus()
    if (switcher && shouldOpen) {
      switcher.classList.add('is-open')
      langToggle.setAttribute('aria-expanded', 'true')
    }
    return
  }

  const langButton = target.closest<HTMLButtonElement>('.lang-btn')
  if (langButton) {
    const nextLanguage = langButton.dataset.lang
    if (isLanguage(nextLanguage ?? null) && nextLanguage !== currentLanguage) {
      const selectedLanguage = nextLanguage as Language
      localStorage.setItem('oimosoft-language', selectedLanguage)
      sessionStorage.setItem('oimosoft-keep-hash', '1')
      window.location.reload()
    }
    return
  }

  const scrollBtn = target.closest<HTMLButtonElement>('.scroll-btn')
  if (scrollBtn) {
    const direction = scrollBtn.dataset.scroll === 'left' ? -1 : 1
    const container = scrollBtn.closest<HTMLElement>('[data-scroll-target]')
    const targetId = container?.dataset.scrollTarget
    const scroller = targetId ? document.getElementById(targetId) : null
    if (scroller) {
      scroller.scrollBy({
        left: direction * scroller.clientWidth * 0.9,
        behavior: 'smooth'
      })
    }
  }
})

const siteHeader = document.querySelector<HTMLElement>('.site-header')
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const siteNav = document.querySelector<HTMLElement>('.site-nav')

const closeMenu = () => {
  if (!siteHeader || !menuToggle) return
  siteHeader.classList.remove('menu-open')
  siteHeader.classList.remove('is-hidden')
  menuToggle.setAttribute('aria-expanded', 'false')
}

menuToggle?.addEventListener('click', (event) => {
  event.stopPropagation()
  if (!siteHeader || !menuToggle) return
  const isOpen = siteHeader.classList.toggle('menu-open')
  siteHeader.classList.remove('is-hidden')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
})

siteNav?.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null
  if (target?.tagName === 'A') {
    closeMenu()
  }
})

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null
  if (!target) return
  if (!target.closest('.lang-switcher')) {
    closeLanguageMenus()
  }
  if (siteHeader && !siteHeader.contains(target)) {
    closeMenu()
  }
})

const contactForm = document.querySelector<HTMLFormElement>('.contact-form')

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault()

  const statusNode = contactForm.querySelector<HTMLElement>('[data-form-status]')
  const submitButton = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]')
  const setStatus = (key: keyof (typeof uiCopy)[Language]['footer']['form']['status'], tone: 'success' | 'error' | 'neutral' = 'neutral') => {
    if (!statusNode) return
    statusNode.textContent = uiCopy[currentLanguage].footer.form.status[key]
    statusNode.dataset.tone = tone
  }

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    setStatus('config', 'error')
    return
  }

  const formData = new FormData(contactForm)
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  submitButton?.setAttribute('disabled', 'true')
  setStatus('sending')

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: 'oimosoft1@gmail.com',
          from_name: name,
          from_email: email,
          reply_to: email,
          phone,
          message,
          subject: `OimoSoft Contact — ${name || 'New request'}`,
          language: currentLanguage
        }
      })
    })

    if (!response.ok) {
      throw new Error(`EmailJS request failed with ${response.status}`)
    }

    contactForm.reset()
    setStatus('success', 'success')
  } catch (error) {
    console.error(error)
    setStatus('error', 'error')
  } finally {
    submitButton?.removeAttribute('disabled')
  }
})

let headerRevealTimer: number | undefined

const syncHeaderVisibility = () => {
  if (!siteHeader) return
  if (siteHeader.classList.contains('menu-open') || window.scrollY <= 10) {
    siteHeader.classList.remove('is-hidden')
    return
  }

  siteHeader.classList.add('is-hidden')
  if (headerRevealTimer) {
    window.clearTimeout(headerRevealTimer)
  }
  headerRevealTimer = window.setTimeout(() => {
    siteHeader?.classList.remove('is-hidden')
  }, 180)
}

window.addEventListener('scroll', syncHeaderVisibility, { passive: true })


window.addEventListener('hashchange', setRoute)
const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
const keepHashOnReload = sessionStorage.getItem('oimosoft-keep-hash') === '1'
if (keepHashOnReload) {
  sessionStorage.removeItem('oimosoft-keep-hash')
}
if (navEntry?.type === 'reload' && window.location.hash && !keepHashOnReload) {
  history.replaceState(null, '', window.location.pathname + window.location.search)
}
setRoute()
syncHeaderVisibility()
