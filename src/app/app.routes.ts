import {Route} from "@angular/router";

export const appRoutes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path: 'home',
    title: 'HOME',
    loadComponent: () => import('./pages/home-page/home-page.component'),
  },
  {
    path: 'about',
    title: 'ABOUT',
    loadComponent: () => import('./pages/about-page/about-page.component'),
  },

  {
    path: 'skills',
    title: 'SKILLS',
    loadComponent: () => import('./pages/skills-page/skills-page.component'),
  },

  {
    path: 'projects',
    title: 'PROJECTS',
    loadComponent: () => import('./pages/projects-page/projects-page.component'),
  },

  {
    path: 'projects/:id',
    title: 'PROJECT',
    loadComponent: () => import('./pages/project-page/project-page.component'),
  },


  // {
  //   path: 'experience',
  //   title: 'EXPERIENCE',
  //   loadComponent: () => import('./pages/experience-page/experience-page.component'),
  // },

  {
    path: 'contact',
    title: 'CONTACT',
    loadComponent: () => import('./pages/contact-page/contact-page.component'),
  },

  // Not found routes.
  {
    path: 'not-found',
    title: 'NOT-FOUND',
    loadComponent: () => import('./pages/not-found-page/not-found-page.component'),
  },

  {
    path: '**',
    title: 'NOT-FOUND',
    loadComponent: () => import('./pages/not-found-page/not-found-page.component'),
  },
]
