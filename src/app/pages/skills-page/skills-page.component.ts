import {Component, inject, OnInit, signal, Signal} from '@angular/core';
import {MainLayoutComponent} from "../../layout";
import {NgStyle} from "@angular/common";
import {Skill} from "../../interfaces";
import {MyInfoService} from "../../services";

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NgStyle,
  ],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss'
})
export default class SkillsPageComponent implements OnInit {
  skills: Signal<Skill[]> = signal<Skill[]>([]);


  private myInfoService = inject(MyInfoService);

  ngOnInit() {
    this.skills = this.myInfoService.getSkills();
  }
}
