import {Injectable, signal, WritableSignal} from '@angular/core';
import {ProjectFeature} from "../interfaces";
import {projectFeatures} from "../data";

@Injectable({
  providedIn: 'root'
})
export class ProjectFeatureService {
  features: WritableSignal<ProjectFeature[]> = signal<ProjectFeature[]>([]);

  constructor() {
    this.features.set(projectFeatures);
  }

  getFeaturesByProject(projectId: number) {
    const projectSections = this.features()
      .filter(section => section.projectId === projectId);

    return signal<ProjectFeature[]>(projectSections);
  }
}
