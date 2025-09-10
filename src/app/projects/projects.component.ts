import { Component } from '@angular/core';
import { FadeUpOnScrollDirective } from '../directives/fade-up-on-scroll.directive';

interface Project {
  title: string;
  description: string;
  img: string;
  technologies: string[];
  links: {
    github: string;
    demo?: string;
  };
  underDevelopment?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [FadeUpOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Starbucks Clone',
      description: `Starbucks Clone - A pixel-perfect tribute to the iconic coffeehouse experience. Built with modern front-end tools to replicate the menu interactivity, and clean UI of the original site.`,
      img: 'assets/starbucks-clone.png',
      technologies: ['HTML', 'CSS', 'JS'],
      links: {
        github: 'https://github.com/Edrickasper/Starbucks.clone',
        demo: 'https://starbucksclone.pages.dev/',
      },
    },
    {
      title: 'SpaceX Clone',
      description: `SpaceX Clone - A visually immersive replica of the official SpaceX site, capturing the thrill of space exploration with sleek animations, responsive design, and modern UI craftsmanship.`,
      img: 'assets/spacex-clone.png',
      technologies: ['HTML', 'CSS', 'JS'],
      links: {
        github: 'https://github.com/Edrickasper/SpaceX-replica',
        demo: 'https://spacex-replica.pages.dev/',
      },
    },
    {
      title: 'Expense Tracker',
      description: `A clean and responsive web app for tracking income and expenses. Built using Angular, Firebase, and Tailwind.`,
      img: 'assets/expense-tracker.png',
      technologies: ['Angular', 'TailwindCSS', 'Firebase'],
      links: {
        github: 'https://github.com/Edrickasper/expense-tracker',
      },
      underDevelopment: true,
    },
  ];
}
