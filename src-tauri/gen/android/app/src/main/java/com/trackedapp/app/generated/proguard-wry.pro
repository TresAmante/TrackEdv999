# THIS FILE IS AUTO-GENERATED. DO NOT MODIFY!!

# Copyright 2020-2023 Tauri Programme within The Commons Conservancy
# SPDX-License-Identifier: Apache-2.0
# SPDX-License-Identifier: MIT

-keep class com.trackedapp.app.* {
  native <methods>;
}

-keep class com.trackedapp.app.WryActivity {
  public <init>(...);

  void setWebView(com.trackedapp.app.RustWebView);
  java.lang.Class getAppClass(...);
  java.lang.String getVersion();
}

-keep class com.trackedapp.app.Ipc {
  public <init>(...);

  @android.webkit.JavascriptInterface public <methods>;
}

-keep class com.trackedapp.app.RustWebView {
  public <init>(...);

  void loadUrlMainThread(...);
  void loadHTMLMainThread(...);
  void setAutoPlay(...);
  void setUserAgent(...);
  void evalScript(...);
}

-keep class com.trackedapp.app.RustWebChromeClient,com.trackedapp.app.RustWebViewClient {
  public <init>(...);
}