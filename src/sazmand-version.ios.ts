import { Common } from './sazmand-version.common';

export class SazmandVersion extends Common {

	get() {
    	var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
    	return version;
	}

}
