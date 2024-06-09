import {Component, inject, OnInit, Signal, signal} from '@angular/core';
import {MainLayoutComponent} from "../../layout";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Project} from "../../interfaces";
import {ProjectService} from "../../services";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NgOptimizedImage,
    RouterLink,
    NgClass
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export default class ProjectsPageComponent implements OnInit {

  projects: Signal<Project[]> = signal<Project[]>([]);

  protected readonly Array = Array;

  private projectService = inject(ProjectService);

  ngOnInit() {
    this.projects = this.projectService.getAll();
  };

};
