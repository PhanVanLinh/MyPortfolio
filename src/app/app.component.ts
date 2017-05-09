import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Linh Portfolio';
  author = '{ PHAN VĂN LINH }';
  major = 'Android/IOS/Web Developer';
  location = '@location: Danang, Vietnam ';
  email = '@email: phanvanlinh.94vn@gmail.com';
  phone = '@phone: (+84) 1667832234';
  about = 'A Full Stack Developer with nearly 3 years of experience in Software Development, Project Maintenance and Project Publication.';
  navigations = [
    {
      name: 'About'
    },
    {
      name: 'Experiences',
    },
    {
      name: 'Skills',
    },
    {
      name: 'Education',
    },
    {
	  name: 'Arround the Web'
    }
  ];

  workingExperiences = [
  	{
  		company: {
  			name: 'Framgia',
  			logo: 'assets/img/company/framgia.png',
  			location: 'Danang, Vietnam',
  		},
  		time:'11/2016 - present',
  		position: 'Android Developer',
  		description:'a'
  	},
  	{
  		company: {
  			name: 'Evizi',
  			logo: 'assets/img/company/evizi.png',
  			location: 'Danang, Vietnam',
  		},
  		time:'03/2015-10/2016',
  		position: 'Android Developer',
  		description:'a'
  	},
  	{
  		company: {
  			name: 'Code Engine Studio',
  			logo: 'assets/img/company/codeengine.png',
  			location: 'Danang, Vietnam',
  		},
  		time:'10/2014-02/2015',
  		position: 'Intern Web Developer',
  		description:'a'
  	}
  ];

  top_skills = [
  {
  	title: 'Android',
  	experience: '2 years',
  	description: 'Good understanding of mobile development life cycle. Experience in application performance, optimize code/layout, manager application memory, protect data using encrypt and reduce apk size.Developing against multiple devices and custom UI for native Android component.'
  },
  {
	title: 'iOS',
	experience: '6 months',
	description: 'Experienced with iOS SDK, design Universal application. Knowledge with IOS components, layout, auto-layout and navigation'
  },
  {
	title: 'PHP',
	experience: '6 months',
	description: 'a'
  }
  ];

  other_skills = [
  {
	title: 'English',
  },
  {
	title: 'Git',
  },
  {
	title: 'Material',
  },
  {
  	title: 'NodeJs',
  },
  {
  	title: 'JavaScript',
  },
  {
	title: 'Bootstrap',
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
  {
  	title: 'Photoshop',
  },
  {
  	title: 'Proshow Producer',
  },
  ];

  educations = [
    {
      school: 'Passerelles numériques Vietnam',
      time: '2012-2014',
      accomplished: 'Associate Degree of Information Technology issued by SDC – University of Danang and PN Vietnam Certificate (Very Good)'
    },
    {
      school: 'Vinh Linh High School',
      time: '2009-2012',
      accomplished: 'High School certificate '
    },
  ];

  tiles = [
    {text: 'StackOverFlow', image: 'http://stackoverflow.com/users/flair/5381331.png', icon:'assets/img/social/stackoverflow.png', content:'I have more than 300 answers, 80 questions, 500 helpful flags, 100 post edits on StackOverFlow', time: '10/2015'},
    {text: 'Duolingo', image: 'assets/img/no_image.png', icon:'assets/img/social/duolingo.png', content:'English : Level 13 (5606 XP). Finish Duolingo tree', time: '2015'},
    {text: 'Github', image: 'assets/img/no_image.png', icon:'assets/img/social/github.png', cols: 1, rows: 1, content: 'Points: 306. Hackos: 236', time: '03/2017'},
    {text: 'HackerRank', image: 'assets/img/no_image.png', icon:'assets/img/social/hackerrank.png', cols: 2, rows: 1, color: '#DDBDF1', time: '10/2015'},
  ];

  aroundTheWebs = [
  	{
  		title:'Facebook',
  		link: 'https://www.facebook.com/linh.phanvan.54',
  		icon: 'fa fa-facebook-official',
  	},
  	{
  		title:'Linkedin',
  		link: 'https://www.linkedin.com/in/linh-phan-van-a7862311a/',
  		icon: 'fa fa-fw fa-linkedin'
  	},
  	{
  		title:'StackOverFlow',
  		link: 'http://stackoverflow.com/users/5381331/phan-van-linh',
  		icon: 'fa fa-fw fa-linkedin'
  	}
  ];
  

  hobbies = [
 	{
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
}
