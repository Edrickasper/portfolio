import { Component } from '@angular/core';

interface Social {
  name: string;
  logo: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  socials: Social[] = [
    {
      name: 'instagram',
      logo: 'fa-brands fa-instagram text-white',
      link: 'https://www.instagram.com/edric_kasper/',
    },
    {
      name: 'github',
      logo: 'fa-brands fa-github text-white',
      link: 'https://github.com/Edrickasper',
    },
    {
      name: 'linkedin',
      logo: 'fa-brands fa-linkedin text-white',
      link: 'https://www.linkedin.com/in/edrickasper/',
    },
  ];
}
