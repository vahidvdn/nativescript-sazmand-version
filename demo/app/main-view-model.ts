import { Observable } from 'tns-core-modules/data/observable';
import { SazmandVersion } from 'nativescript-sazmand-version';

export class HelloWorldModel extends Observable {
  public message: string;
  private sazmandVersion: SazmandVersion;

  constructor() {
    super();

    // this.sazmandVersion = new SazmandVersion();
    // this.message = this.sazmandVersion.message;
    this.message = "Your app version issss: " + this.sazmandVersion.get();
  }
}
