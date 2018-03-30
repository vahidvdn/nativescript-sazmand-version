import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';

export class Common extends Observable {
  public message: string;

  constructor() {
    super();
  }

}
