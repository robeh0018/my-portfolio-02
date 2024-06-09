import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Project} from "../interfaces";
import {projectsData} from "../data";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: WritableSignal<Project[]> = signal<Project[]>([]);

  constructor() {
    this.projects.set(projectsData)
  };

  getAll(): Signal<Project[]> {
    return this.projects.asReadonly();
  };

  getOne(id: number): Signal<Project | undefined> {
    const project = this.projects().find(project => project.id === id);

    return signal<Project | undefined>(project).asReadonly();
  };

}
