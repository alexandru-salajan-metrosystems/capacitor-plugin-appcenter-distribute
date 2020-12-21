package com.metro.plugins.distribute;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import android.util.Log;

import com.microsoft.appcenter.AppCenter;
import com.microsoft.appcenter.distribute.Distribute;

@NativePlugin
public class AppCenterDistribute extends Plugin {

    @PluginMethod
    public void checkForUpdate(PluginCall call) {
        Log.i("APPCENTER_DISTRIBUTE", "Checking for updates");
        Distribute.checkForUpdate();
        Log.i("APPCENTER_DISTRIBUTE", "Checked for updates");
        call.success();
    }
}
