import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public readonly cityListKey = 'cityList'

  constructor() {
  }

  getItem(key: string): any {
    try {
      const data= localStorage.getItem(key);

      // @ts-ignore
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }

  setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
