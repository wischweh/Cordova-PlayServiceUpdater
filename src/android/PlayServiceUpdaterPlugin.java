package de.ndr.playservice_updater;

import org.apache.cordova.*;

public class PlayServiceUpdaterPlugin extends CordovaPlugin {

  private CordovaWebView localCordova;
  private Context cordovaContext;

  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);

    localCordova = webView;
    cordovaContext = cordova.getActivity().getApplicationContext();

  }

  @Override
  public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
    switch (action) {
      case "getVersion":

        return;
      case "ensurePlayServiceVersion":

        return;

      default;

    }
  }

}

