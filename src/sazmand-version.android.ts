import { Common } from './sazmand-version.common';
import * as application from "tns-core-modules/application";

export class SazmandVersion extends Common {

	get() {
	    var PackageManager = android.content.pm.PackageManager;
	    var pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(),
	      PackageManager.GET_META_DATA);
	    return pkg.versionName;
  	}

}
