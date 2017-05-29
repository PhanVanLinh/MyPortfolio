import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'MY RESUME';
    author = '{ PHAN VĂN LINH }';
    major = 'Android/IOS/Web Developer';
    languages = "@languagesKnown: Vietnamese, English";
    dateOfBirth = "@dateOfBirth: 01/05/1994"
    location = '@location: Danang, Vietnam ';
    email = '@email: phanvanlinh.94vn@gmail.com';
    phone = '@phone: (+84) 1667832234';

    about = '';
    navigations = [{
            name: 'About',
            icon: 'ic_dashboard.png',
            link: '#about'
        },
        {
            name: 'Career Highlights',
            icon: 'ic_timeline.png',
            link: '#careerHighlights'
        },
        {
            name: 'Experiences',
            icon: 'ic_subject.png',
            link: '#workingExperiences'
        },
        {
            name: 'Social Activities',
            icon: 'ic_cloud.png',
            link: '#socialActivities'
        },
        {
            name: 'Skills',
            icon: 'ic_toys.png',
            link: '#skills'
        },
        {
            name: 'Projects',
            icon: 'ic_android.png',
            link: '#projects'
        },
        {
            name: 'Education',
            icon: 'ic_account_balance.png',
            link: '#educations'
        },
        {
            name: 'Volunteerism',
            icon: 'ic_face.png',
            link: '#volunteerism'
        },
        {
            name: 'Hobbies',
            icon: 'ic_thumb_up.png',
            link: '#hobbies'
        }

    ];

    careerHighlights = [{
            title: 'A Full Stack Developer with nearly 3 years of experience in Software Development, Project Maintenance and Project Publication.',
        },
        {
            title: 'Good understanding of full mobile and software development life cycles, UI, UX, integrating API, sensor, supporting mutiple device, web analytics, Git control and Agile methodology.',
        },
        {
          title: 'Understanding of Web architecture design, MVC architecture, database design, authentication, Restful API.',
        },
        {
            title: 'Good in object-oriented design, data structures, design pattern, problem solving/analysis and debugging.',
        },
        {
            title: 'Able to build a complete moblie application: Server API (PHP+Mysql or NodeJs+MongoDB), client (Android/IOS), intergrate advertisment (StartApp, MobileCore, ...) and public to store (PlayStore or AppStore).',
        },
        {
            title: 'Familiar with multimedia, healthcare, social network, map, locate, camera application. Experience in integrate social network (Facebook, Google, Twitter, Instagram, SoundCloud, Linkedin to mobile application.',
        }, {
            title: 'Able and want to work in the enviroment where using full English.'
        }
    ];

    workingExperiences = [{
            company: {
                name: 'Framgia',
                logo: 'assets/img/company/framgia.png',
                location: 'Danang, Vietnam',
                link: 'http://recruit.framgia.vn/',
            },
            time: '11/2016 - present',
            position: 'Android Developer',
            description: 'Developed Arukuto (Android application for phone) base on a iOS application and available API. We used some latest Android model (MMVM+MVP) and libraries (Databinding, Realm, RxAndroid, Dagger, Glide).\nMaintained Kyoriosuku (Android application for phone). Had change to work and discuss directly with customer from Japan.\nUsed Git for control code, Redmine for control tasks and follow Agile methodology'
        },
        {
            company: {
                name: 'Evizi',
                logo: 'assets/img/company/evizi.png',
                location: 'Danang, Vietnam',
                link: 'http://evizi.com/',
            },
            time: '03/2015-10/2016',
            position: 'Android Developer',
            description: 'Developed and released EarCrush (iOS application for both iPhone and iPad) as the primary iOS developer.\nMaintained, implemented new features, improved performance for Weaved, Yoics, Buzzr (Android application for both phone and tablet).\nMaintained Itson (iOS application for iPhone). Worked with foreign team from US. \nUsed Bitbucket/SVN for control code, Jira/Redmine for control tasks and follow Agile methodology'
        },
        {
            company: {
                name: 'Code Engine Studio',
                logo: 'assets/img/company/codeengine.png',
                location: 'Danang, Vietnam',
                link: 'http://codeenginestudio.com/'
            },
            time: '10/2014-02/2015',
            position: 'Intern Web Developer',
            description: 'Had a chance to learn a lot about English, soft skill and Web development. \nCommunicated with potential customers to manage expectations. And builded sameple website base on the expectations.\nUsed Git for control code, Trello for control tasks and follow Agile methodology',
        }
    ];

    top_skills = [{
            title: 'Android',
            experience: '1.5 years',
            description: 'Familiar with Android frameworks, devices, OS, libraries.\nExperience in using data-binding, RxAndroid, Dagger, EvenBus, Firebase, Realm, SQLite. \nExperience in application performance, optimize code/layout, manager application memory and reduce apk size.\nExperience in developing against multiple devices/OS and custom UI, animations for native Android component. \nExperience in public application to PlayStore and integrate advertisment'
        },
        {
            title: 'iOS',
            experience: '8 months',
            description: 'Experienced with iOS SDK, iOS components, auto-layout, navigationm, design Universal application.\nExperience in integrating social networks (FB, GG, TW, SC, IG) and web analytic (Crashlytics). \nExperience in public application to AppStore'
        },
        {
            title: 'Web (PHP)',
            experience: '6 months',
            description: 'Basic knowedge with Javascript, AJAX, JQuery framework, AngularJs, HTML/CSS.\nExperienced in build Restful API using pure PHP or Slim framework with database MySQL.\nExperience in authentication using Oauth2 or JWT \n Experience in public website to host'
        }
    ];

    other_skills = [{
            title: 'English',
            description: 'No'
        },
        {
            title: 'Java',
        },
        {
            title: 'Objective-C',
        },
        {
            title: 'C#',
        },
        {
            title: 'PHP',
        },
        {
            title: 'JavaScript',
        },
        {
            title: 'HTML5',
        },
        {
            title: 'CSS3',
        },
        {
            title: 'SQL',
        },
        {
            title: 'NoSQL',
        },

    ];

    frameworks = [
        {
            title: 'Realm',
        },
        {
            title: 'Firebase',
        },
        {
            title: 'NodeJs',
        },
        {
            title: 'Angular JS',
        },
        {
            title: 'Silex',
        },
        {
            title: 'Material',
        },
        {
            title: 'JQuery',
        },
        {
            title: 'Bootstrap',
        },
    ]

    tools = [{
            title: 'Window',
        },
        {
            title: 'Linux',
        },
        {
            title: 'MacOX',
        },
        {
            title: 'Git',
        },
        {
            title: 'Android Studio',
        },
        {
            title: 'Xcode',
        },
        {
            title: 'Eclipse',
        },
        {
            title: 'Visual Studio',
        },
        {
            title: 'SublimeText',
        },
        {
            title: 'Photoshop',
        },
        {
            title: 'Proshow Producer',
        },
    ]

    projects = [{
            name: 'Kyoriosuku',
            responsible: 'Maintain',
            type: 'Android application',
            company: 'Framgia',
            time: '2017',
            icon: 'assets/img/project/kyoriosuku.png',
            link: 'https://play.google.com/store/apps/details?id=jp.co.mapion.android.app.kyorisoku',
            description: 'A map application that help calculate distance, elevation, calries burn between 2 or many places. It supports writing memo for every place, save and share this memo or route to another person after login',
        },
        {
            name: 'Arukuto',
            responsible: 'Develop',
            type: 'Android application',
            company: 'Framgia',
            time: '2016,2017',
            icon: 'assets/img/project/arukuto.png',
            link: 'https://play.google.com/store/apps/details?id=com.mapion.android.arukuto',
            description: 'A healthy application that makes people walk more. People should walk to some specific place (NPC) and walk to enough step for upgrading level or receive some real gift',
        },
        {
            name: 'EarCrush',
            responsible: 'Develop and maintain',
            type: 'iOS application',
            company: 'Evizi',
            time: '2015, 2016',
            icon: 'assets/img/project/earcrush.png',
            link: 'https://itunes.apple.com/us/app/earcrush/id1064873601?mt=8',
            description: 'Like a social network application, it contains all basic function of a social network like (new feed, profile, friends, chatting). Moreover, it support view/post new status to all social network (FB, GG, TW, SC, IG) after we connected.'
        },
        {
            name: 'Itson',
            responsible: 'Maintain',
            type: ' iOS application',
            company: 'Evizi',
            time: '2016',
            icon: 'assets/img/project/itson.png',
            link: 'http://www.itsoninc.com/',
            description: 'A application for Network Service Provider, each Network Service Provider is a tenant. Using application, the tenant can allow their user recharge, top up, using some plan/promotion, view account details insted of sending a message.',
        },
        {
            name: 'Weaved',
            responsible: 'Maintain',
            type: 'Android application',
            company: 'Evizi',
            time: '2015',
            icon: 'assets/img/project/weaved.png',
            link: 'https://itunes.apple.com/us/app/weaved/id937372469?mt=8',
            description: 'A application that show/stream of all managed camera. ',
        },
        {
            name: 'Yoics',
            responsible: 'Maintain',
            type: 'Android application',
            company: 'Evizi',
            time: '2015',
            icon: 'assets/img/project/yoics.png',
            link: 'https://itunes.apple.com/us/app/look-camera-viewer/id768563141?mt=8',
            description: 'A application that help us control, config camera',
        },
        {
            name: 'Buzzr',
            responsible: 'Maintain',
            type: 'Android application',
            company: 'Evizi',
            time: '2015',
            icon: 'assets/img/project/buzzr.png',
            link: '',
            description: 'A social network for only people who using car. It contains all basic function of a social network like (new feed, profile, friends, chatting). Moreover, it contain a map in main screen where we can see all closer people.',
        },
        {
            name: 'Fresh Food',
            responsible: '',
            type: 'Web project',
            company: 'Code Engine Studio',
            time: '2015',
            icon: 'assets/img/project/freshfood.png',
            link: 'https://medium.com/totoro-design-in-english/fresh-food-project-design-process-b0c9fbcc9a77',
            description: 'Web project that may help housewife who do not help much time. The main idea is creating a service that will prepare (clean/cut) raw food and a recipe. Then the housewife can buy it and cook faster',
        }
    ];

    personalProjects = [
        {
            title: 'League of Legend Game Guide',
            link: 'http://appvn.com/android/details?id=linhpv.app.lmhtv',
        },
        {
            title: 'LOL WallPager',
            link: 'http://appvn.com/android/details?id=toong.app.lolskinwallpapers',
        }
    ];

    educations = [{
            school: 'Passerelles numériques Vietnam',
            time: '2012-2014',
            link: 'https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/',
            accomplished: 'Associate Degree of Information Technology issued by SDC – University of Danang and PN Vietnam Certificate (Very Good)'
        },
        {
            school: 'Vinh Linh High School',
            time: '2009-2012',
            link: 'http://thptvinhlinh.edu.vn/',
            accomplished: 'High School certificate (Good)'
        },
    ];

    tiles = [{
            text: 'StackOverFlow',
            image: 'http://stackoverflow.com/users/flair/5381331.png',
            icon: 'assets/img/social/stackoverflow.png',
            content: 'I have more than 300 answers, 80 questions, 500 helpful flags, 100 post edits on StackOverFlow',
            time: '10/2015',
            link: 'http://stackoverflow.com/users/5381331/phan-van-linh'
        },
        {
            text: 'Duolingo',
            image: '',
            icon: 'assets/img/social/duolingo.png',
            content: 'I reach English Level 13 (5606 XP) and finished Duolingo Learning tree',
            time: '2015',
            link: 'https://www.duolingo.com/LinhPhanVan'
        },
        {
            text: 'Github',
            image: '',
            icon: 'assets/img/social/github.png',
            content: 'Not much achieve. Currently, I use Github for manage some of my demo projects',
            time: '10/2015',
            link: 'https://github.com/PhanVanLinh'
        },
        {
            text: 'HackerRank',
            image: '',
            icon: 'assets/img/social/hackerrank.png',
            content: 'I achieved 306 points and 236 hackos by resolve more than 20 algorithm tests',
            time: '03/2017',
            link: 'https://www.hackerrank.com/phanvanlinh_94vn?hr_r=1'
        },
    ];

    volunteerisms = [{
        place: 'Passerelles numériques Vietnam',
        time: '2015 - Present',
        details: 'Each year, from September to May, I always support students at my old school learning about C, Java, Android and English in the evening (18h-20h) for onece or twice times a week ',
        link: 'https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/'
    }];

    aroundTheWebs = [{
            title: 'Facebook',
            link: 'https://www.facebook.com/linh.phanvan.54',
            icon: 'fa fa-facebook-official',
        },
        {
            title: 'Linkedin',
            link: 'https://www.linkedin.com/in/linh-phan-van-a7862311a/',
            icon: 'fa fa-fw fa-linkedin'
        },
        {
            title: 'StackOverFlow',
            link: 'http://stackoverflow.com/users/5381331/phan-van-linh',
            icon: 'fa fa-fw fa-linkedin'
        }
    ];

    hobbies = [{
            title: 'Programming',
        },
        {
            title: 'Exercise',
        },
        {
            title: 'Football',
        },
        {
            title: 'Guitar',
        },
        {
            title: 'Music',
        },
        {
            title: 'Traveling',
        },
        {
            title: 'Book',
        },
        {
            title: 'Computer/Mobile Game',
        },
    ];

    goToUrl(url): void {
        window.location.href = url;
    }

    mailTo(): void {
        window.open('mailto:test@example.com');
    }
}