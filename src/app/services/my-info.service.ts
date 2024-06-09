import {Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {MyInfo, Skill} from "../interfaces";
import {myInfoData} from "../data";

@Injectable({
  providedIn: 'root'
})
export class MyInfoService {

  private me: WritableSignal<MyInfo | undefined> = signal<MyInfo | undefined>(undefined);

  constructor() {

    this.setMyInfo(myInfoData)
  }

  getAll(): Signal<MyInfo | undefined> {
    return this.me.asReadonly();
  };

  getSkills(): Signal<Skill[]> {
    return signal<Skill[]>(this.me()?.skills!);
  };

  getShorterName(): Signal<string> {
    return signal<string>(this.me()?.shorterName!);
  };

  setMyInfo(infoData: MyInfo): void {
    this.me.set(infoData);
  }
}
