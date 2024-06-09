import {Component, inject, signal, Signal} from '@angular/core';
import {MainLayoutComponent} from "../../layout";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {NgIcon} from "@ng-icons/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectFeatureService, ProjectService} from "../../services";
import {Project, ProjectFeature} from "../../interfaces";
import {AnimateWhenViewportDirective} from "../../directives";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NgOptimizedImage,
    NgIcon,
    NgClass,
    AnimateWhenViewportDirective
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export default class ProjectPageComponent {

  project: Signal<Project | undefined> = signal<Project | undefined>(undefined);
  projectFeatures: Signal<ProjectFeature[]> = signal<ProjectFeature[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);
  private projectFeatureService = inject(ProjectFeatureService);

  constructor() {

    this.route.params.subscribe(params => {

      // Get project.
      const project = this.projectService.getOne(+params['id']);

      if (!project()) {

        //   Redirect to Not found
        this.router.navigate(['not-found']).then();
      } else {
        // Get Project sections.
        this.projectFeatureService.getFeaturesByProject(this.project()!?.id);

        this.project = project;
        this.projectFeatures = this.projectFeatureService.getFeaturesByProject(this.project()!?.id);
      }
    })
  }
}
