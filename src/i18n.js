import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        language: 'TR/EN'
      },
      home: {
        title: 'Ramazan Ozer',
        subtitle: 'Software Engineer | Backend & Mobile Developer',
        learnMore: 'Learn More'
      },
      about: {
        name: 'Ramazan Ozer',
        role: 'Software Engineer',
        location: 'Izmir, Türkiye',
        description: "I'm a software engineer focused on backend development, experienced with Java, Spring Boot, and microservices. While backend is my main interest, I also have hands-on experience with mobile apps using Android and Flutter. I enjoy building efficient, well-structured systems and continuously improving my skills.",
        skills: [
          'Microservices, Spring Boot, Android, Java, Flutter'
        ],
        languages: 'Turkish, English',
        interests: 'Interests: Backend Development, Mobile Apps, System Design, Continuous Learning'
      },
      education: {
        degree: "Bachelor's, Computer Engineering",
        institution: 'Ege University, Izmir, Turkey',
        period: 'September 2020 - July 2025',
        details: [
          'GPA: 2.98/4.00',
          'Relevant Coursework: Data Structures, Automata Theory, Backend Development, Microservices, Introduction to Databases, Object Oriented Analysis and Design, Operating Systems, Computer Networks, Analysis of Algorithms, Programming Languages'
        ]
      },
      experience: {
        intern: {
          date: 'February 2025 - Present',
          title: 'Software Engineering Intern',
          company: 'Yapı Kredi Teknoloji, Remote'
        },
        parttime1: {
          date: 'June 2024 - July 2024',
          title: 'Software Engineering Intern',
          company: 'JIOT, Istanbul, Turkey'
        }
      },
      projects: {
        repo: 'Repo',
        demo: 'Demo Video',
        items: [
          {
            title: 'Bachelor Thesis: ExamiNation - Android-Based Social Media Platform for Exam Students',
            location: 'Izmir, Turkey',
            date: 'August 2024 - May 2025',
            description: [
              'A full-stack Android app for exam preparation, featuring microservices, AI-powered recommendations, and interactive UI for university students.'
            ],
            tech: [],
            demo: null
          },
          {
            title: 'Conference Management System',
            location: 'Izmir, Turkey',
            date: 'May 2024 - May 2024',
            description: [
              'A web-based system for managing conferences, including paper submission, review, and document storage, built with Java Spring Boot and MySQL.'
            ],
            tech: [],
            repo: null
          },
          {
            title: 'Chat Me',
            location: 'Izmir, Turkey',
            date: 'January 2023 - November 2023',
            description: [
              'An Android chat app with real-time messaging, authentication, and profile management, developed using Java and Firebase.'
            ],
            tech: [],
            repo: null
          }
        ]
      },
      contact: {
        title: 'Contact Me',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message'
      },
      footer: {
        copyright: 'Ramazan Ozer. All rights reserved.',
        business: 'For business, contact ozerramazan991@gmail.com'
      },
      tools: {
        title: 'Tools & Technologies',
        spring: 'Spring Boot',
        react: 'React.js',
        docker: 'Docker',
        kubernetes: 'Kubernetes',
        git: 'Git',
        vue: 'Vue.js',
        android: 'Android Studio',
        mysql: 'MySQL',
        postgresql: 'PostgreSQL',
        mssql: 'MsSQL',
        firebase: 'Firebase',
        aws: 'AWS',
        redis: 'Redis'
      },
      skills: {
        java: 'Java',
        csharp: 'C#',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        htmlcss: 'HTML/CSS',
        sql: 'SQL',
        kotlin: 'Kotlin',
        dart: 'Dart',
      },
    }
  },
  tr: {
    translation: {
      navbar: {
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        education: 'Eğitim',
        experience: 'Deneyim',
        projects: 'Projeler',
        skills: 'Yetenekler',
        contact: 'İletişim',
        language: 'TR/EN'
      },
      home: {
        title: 'Ramazan Özer',
        subtitle: 'Yazılım Mühendisi | Backend & Mobil Geliştirici',
        learnMore: 'Daha Fazla'
      },
      about: {
        name: 'Ramazan Özer',
        role: 'Yazılım Mühendisi',
        location: 'İzmir, Türkiye',
        description: 'Java, Spring Boot ve mikroservislerde deneyimli, backend odaklı bir yazılım mühendisiyim. Ayrıca Android ve Flutter ile mobil uygulama geliştirme tecrübem var. Verimli ve iyi yapılandırılmış sistemler kurmayı ve kendimi sürekli geliştirmeyi seviyorum.',
        skills: [
          'Mikroservisler, Spring Boot, Android, Java, Flutter'
        ],
        languages: 'Türkçe, İngilizce',
        interests: 'İlgi Alanları: Backend Geliştirme, Mobil Uygulamalar, Sistem Tasarımı, Sürekli Öğrenme'
      },
      education: {
        degree: 'Lisans, Bilgisayar Mühendisliği',
        institution: 'Ege Üniversitesi, İzmir, Türkiye',
        period: 'Eylül 2020 - Temmuz 2025',
        details: [
          'GNO: 2.98/4.00',
          'İlgili Dersler: Veri Yapıları, Otomata Teorisi, Backend Geliştirme, Mikroservisler, Veritabanlarına Giriş, Nesne Yönelimli Analiz ve Tasarım, İşletim Sistemleri, Bilgisayar Ağları, Algoritma Analizi, Programlama Dilleri'
        ]
      },
      experience: {
        intern: {
          date: 'Şubat 2025 - Günümüz',
          title: 'Yazılım Mühendisliği Stajyeri',
          company: 'Yapı Kredi Teknoloji, Uzaktan'
        },
        parttime1: {
          date: 'Haziran 2024 - Temmuz 2024',
          title: 'Yazılım Mühendisliği Stajyeri',
          company: 'JIOT, İstanbul, Türkiye'
        }
      },
      projects: {
        repo: 'Repo',
        demo: 'Demo Video',
        items: [
          {
            title: 'Lisans Tezi: ExamiNation - Sınav Öğrencileri için Android Tabanlı Sosyal Medya Platformu',
            location: 'İzmir, Türkiye',
            date: 'Ağustos 2024 - Mayıs 2025',
            description: [
              'Üniversite öğrencileri için sınava hazırlıkta mikroservisler, yapay zeka destekli öneriler ve etkileşimli arayüz sunan tam kapsamlı bir Android uygulaması.'
            ],
            tech: [],
            demo: null
          },
          {
            title: 'Konferans Yönetim Sistemi',
            location: 'İzmir, Türkiye',
            date: 'Mayıs 2024 - Mayıs 2024',
            description: [
              'Java Spring Boot ve MySQL ile geliştirilen, makale gönderimi, değerlendirme ve belge yönetimi sunan web tabanlı konferans yönetim sistemi.'
            ],
            tech: [],
            repo: null
          },
          {
            title: 'Chat Me',
            location: 'İzmir, Türkiye',
            date: 'Ocak 2023 - Kasım 2023',
            description: [
              'Java ve Firebase ile geliştirilen, gerçek zamanlı mesajlaşma, kimlik doğrulama ve profil yönetimi sunan Android sohbet uygulaması.'
            ],
            tech: [],
            repo: null
          }
        ]
      },
      contact: {
        title: 'İletişim',
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        send: 'Mesaj Gönder'
      },
      footer: {
        copyright: 'Ramazan Özer. Tüm hakları saklıdır.',
        business: 'İş için iletişim: ozerramazan991@gmail.com'
      },
      tools: {
        title: 'Araçlar & Teknolojiler',
        spring: 'Spring Boot',
        react: 'React.js',
        docker: 'Docker',
        kubernetes: 'Kubernetes',
        git: 'Git',
        vue: 'Vue.js',
        android: 'Android Studio',
        mysql: 'MySQL',
        postgresql: 'PostgreSQL',
        mssql: 'MsSQL',
        firebase: 'Firebase',
        aws: 'AWS',
        redis: 'Redis'
      },
      skills: {
        java: 'Java',
        csharp: 'C#',
        python: 'Python',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        htmlcss: 'HTML/CSS',
        sql: 'SQL',
        kotlin: 'Kotlin',
        dart: 'Dart',
      },
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 