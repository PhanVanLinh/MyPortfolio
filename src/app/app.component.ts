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
            title: 'Good understanding of full mobile and software development life cycles, UI, UX, web analytics, Git control and Agile methodology.',
        },
        {
          title: 'Understanding of Web architecture design, MVC architecture, Restful API',
        },
        {
            title: 'Good in object-oriented design, data structures, problem solving/analysis and debugging.',
        },
        {
            title: 'Experiences working with MVC, MVP, MVVM with some design patterns',
        },
        {
            title: 'Able to build a complete moblie application: Server API (PHP+Mysql or NodeJs+MongoDB), client (Android/IOS), intergrate advertisment (StartApp, MobileCore, ...) and public to store (PlayStore or AppStore).',
        },
        {
            title: 'Familiar with multimedia, healthcare, social network, map, locate application. Experiences in integrate social network(Facebook, Google, Twitter, Instagram, SoundCloud, Linkedin to mobile application.',
        }, {
            title: 'Currently, my English skill is still not very good but I am pretty sure that I can and want to work in the enviroment where using full English.'
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
            description: 'Had a chance to learn a lot about English, soft skill and web Development. \nCommunicated with potential customers to manage expectations. And builded sameple website base on the expectations.\nUsed Git for control code, Trello for control tasks and follow Agile methodology',
        }
    ];

    top_skills = [{
            title: 'Android',
            experience: '1.5 years',
            description: 'Good understanding of mobile development life cycle.\nExperience in application performance, optimize code/layout, manager application memory, protect data using encrypt and reduce apk size.\nDeveloping against multiple devices and custom UI for native Android component.\nExperience in public application and integrate advertisment to PlayStore'
        },
        {
            title: 'iOS',
            experience: '8 months',
            description: 'Experienced with iOS SDK, iOS components, auto-layout, navigationm, design Universal application.\nExperience in public application to AppStore'
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
            about: '',
        },
        {
            name: 'Arukuto',
            responsible: 'Develop',
            type: 'Android application',
            company: 'Framgia',
            time: '2016,2017',
            icon: 'assets/img/project/arukuto.png',
            link: 'https://play.google.com/store/apps/details?id=com.mapion.android.arukuto',
            about: '',
        },
        {
            name: 'EarCrush',
            responsible: 'Develop and maintain',
            type: 'iOS application',
            company: 'Evizi',
            time: '2015, 2016',
            icon: 'assets/img/project/earcrush.png',
            link: '',
            about: '',
        },
        {
            name: 'Itson',
            responsible: 'Maintain',
            type: ' iOS application',
            company: 'Evizi',
            time: '2016',
            icon: 'assets/img/project/itson.png',
            link: 'http://www.itsoninc.com/',
            about: '',
        },
        {
            name: 'Weaved',
            responsible: 'Maintain',
            type: 'Android application',
            company: 'Evizi',
            time: '2015',
            icon: 'assets/img/project/weaved.png',
            link: 'https://itunes.apple.com/us/app/weaved/id937372469?mt=8',
            about: '',
        },
        {
            name: 'Yoics',
            responsible: 'Maintain',
            type: 'Android application',
            company: 'Evizi',
            time: '2015',
            icon: 'assets/img/project/yoics.png',
            link: 'https://itunes.apple.com/us/app/look-camera-viewer/id768563141?mt=8',
            about: '',
        },
        {
            name: 'Buzzr',
            responsible: 'Maintain',
            type: 'Android application',
            company: 'Evizi',
            time: '2015',
            icon: 'assets/img/project/buzzr.png',
            link: '',
            about: '',
        },
        {
            name: 'Fresh Food',
            responsible: '',
            type: 'Web project',
            company: 'Code Engine Studio',
            time: '2015',
            icon: 'assets/img/project/freshfood.png',
            link: 'https://medium.com/totoro-design-in-english/fresh-food-project-design-process-b0c9fbcc9a77',
            about: '',
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
            time: '03/2017',
            link: 'https://github.com/PhanVanLinh'
        },
        {
            text: 'HackerRank',
            image: '',
            icon: 'assets/img/social/hackerrank.png',
            content: 'I achieved 306 points and 236 hackos by resolve more than 20 algorithm tests',
            time: '10/2015',
            link: 'https://www.hackerrank.com/phanvanlinh_94vn?hr_r=1'
        },
    ];

    volunteerisms = [{
        place: 'Passerelles numériques Vietnam',
        time: '2015 - Present',
        details: 'Each year, from September to May, I always support students at my old school learning about C, Java, Android and English in 2h in the evening (6h-8h) for onece or twice times a week ',
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