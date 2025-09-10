import { Component } from '@angular/core';

import { FadeUpOnScrollDirective } from '../directives/fade-up-on-scroll.directive';

interface SkillCategory {
  title: string;
  skills: { name: string; icon: string }[];
}

@Component({
  selector: 'app-skills',
  imports: [FadeUpOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        {
          name: 'HTML & CSS',
          icon: 'devicon-html5-plain colored text-2xl',
        },
        {
          name: 'JavaScript',
          icon: 'devicon-javascript-plain colored text-2xl',
        },
        {
          name: 'Tailwind',
          icon: 'devicon-tailwindcss-plain colored text-2xl',
        },
        {
          name: 'Angular',
          icon: 'devicon-angularjs-plain colored text-2xl',
        },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        {
          name: 'Firebase',
          icon: 'devicon-firebase-plain colored text-2xl',
        },
        {
          name: 'Git & GitHub',
          icon: 'devicon-git-plain colored text-2xl',
        },
        {
          name: 'Figma',
          icon: 'devicon-figma-plain colored text-2xl',
        },
        {
          name: 'VS Code',
          icon: 'devicon-vscode-plain colored text-2xl',
        },
      ],
    },
    {
      title: 'Bonus Powers',
      skills: [
        {
          name: 'Anime-fueled creativity',
          icon: 'fas fa-film text-rose-400 text-xl',
        },
        {
          name: 'Calm under pressure',
          icon: 'fas fa-mountain text-blue-500 text-xl',
        },
        {
          name: 'Gamer-grade problem solving',
          icon: 'fas fa-chess-knight text-indigo-400 text-xl',
        },
      ],
    },
  ];
}
