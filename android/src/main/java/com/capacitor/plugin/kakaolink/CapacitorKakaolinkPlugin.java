package com.capacitor.plugin.kakaolink;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class CapacitorKakaolinkPlugin extends Plugin {

    //    private CapacitorKakaolink implementation = new CapacitorKakaolink();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        //        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
