var c = null,
  g = !0,
  h = !1;

function k() {
  (h = -1 != navigator.userAgent.indexOf("Opera")) ? c = opera.extension.bgProcess: c = window.opener;
  var b;
  b = document.getElementById("setting");
  b.innerHTML = '<button id="setbutton">設定</button>';
  document.getElementById("setbutton").addEventListener("click", l, !1);
  b = document.getElementById("histOpen");
  b.innerHTML = '<button id="histOpenButton">履歴</button>';
  document.getElementById("histOpenButton").addEventListener("click", p, !1);
  c.setupKyoshinMonitorWindow(this);
  b = localStorage.blackmode;
  void 0 != b && (g = "true" == b, c.setPlotBlack(g));
  q();
  h || (document.body.style.zoom = c.getOptWindowZoom(), clearTimeout(r), r = setTimeout(t, 30));
  u();
  v();
  w();
  window.removeEventListener("load", k, !1)
}
window.addEventListener("load", k, !1);

function x() {
  return c.isNewKyoshinMonitor() ? "NEW" : c.isPrimaryServer() ? "#1" : "#2(GAE)"
}

function y() {
  var b = document.getElementById("status");
  if (c.getKyoshinMonitorRun())
    if (c.getProcessState() == c.getInServerResponseCheck()) b.textContent = "接続要求中 " + x();
    else if (c.getProcessState() == c.getInWaitServerResponse()) b.textContent = "応答確認中 " + x();
  else if (c.getProcessState() == c.getInTimeAdjust()) b.textContent = "時刻調整中 " + x();
  else {
    var a;
    a = c.getOptAcmapBorehole() && !c.getOptQuadWindow() ? "地中 " : "";
    a = 2 >= c.getCycleMode() ? a + x() : 60 <= c.getCycleMode() ? a + (String(Math.round(c.getCycleMode() / 60)) + "分更新 " + x()) : a + (String(c.getCycleMode()) + "秒更新 " + x());
    b.textContent = a
  } else a = c.getWaitCounterForKyoshinMonitorRun(), b.textContent = 60 <= a ? "停止中(" + Math.round(a / 60) + "分) " + x() : 0 < a ? "停止中(" + String(a) + "秒) " + x() : "停止中 " + x()
}
var z, A, B, C, D;

function E() {
  (n = document.getElementById("popupoption")) && n.removeEventListener("change", aa, !1);
  (n = document.getElementById("popupsetting")) && n.removeEventListener("change", ba, !1);
  (n = document.getElementById("popuphistwindow")) && n.removeEventListener("change", ca, !1);
  (n = document.getElementById("sound")) && n.removeEventListener("change", da, !1);
  (n = document.getElementById("alarmlength")) && n.removeEventListener("change", ea, !1);
  (n = document.getElementById("alarmLevel")) && n.removeEventListener("change", fa, !1);
  (n = document.getElementById("notification")) && n.removeEventListener("change", ga, !1);
  (n = document.getElementById("closeareanotification")) && n.removeEventListener("change", ha, !1);
  (n = document.getElementById("eew_notification")) && n.removeEventListener("change", ia, !1);
  (n = document.getElementById("eew_firstreportonly")) && n.removeEventListener("change", ja, !1);
  (n = document.getElementById("notifylevel")) && n.removeEventListener("change", ka, !1);
  (n = document.getElementById("speech")) && n.removeEventListener("change", la, !1);
  (n = document.getElementById("speechprior")) && n.removeEventListener("click", ma, !1);
  (n = document.getElementById("speechlevel")) && n.removeEventListener("change", na, !1);
  (n = document.getElementById("imagenotification")) && n.removeEventListener("click", oa, !1);
  (n = document.getElementById("reportJMAint")) && n.removeEventListener("change", pa, !1);
  (n = document.getElementById("reportJMAintHistory")) && n.removeEventListener("change", qa, !1);
  (n = document.getElementById("popClearHistory")) && n.removeEventListener("click", ra, !1);
  (n = document.getElementById("dispDetectFrame")) && n.removeEventListener("change", sa, !1);
  (n = document.getElementById("dispPSWave")) && n.removeEventListener("change", ta, !1);
  (n = document.getElementById("acmapborehole")) && n.removeEventListener("change", ua, !1);
  (n = document.getElementById("quad_window")) && n.removeEventListener("change", va, !1);
  (n = document.getElementById("acbholelevel")) && n.removeEventListener("change", wa, !1);
  (n = document.getElementById("dispIndicator")) && n.removeEventListener("change", xa, !1);
  (n = document.getElementById("drawNRmap")) && n.removeEventListener("change", ya, !1);
  (n = document.getElementById("dispInfoOnMap")) && n.removeEventListener("change", za, !1);
  (n = document.getElementById("disp_surface_map")) && n.removeEventListener("change", Aa, !1);
  (n = document.getElementById("blackmode")) && n.removeEventListener("change", Ba, !1);
  (n = document.getElementById("zoom")) && n.removeEventListener("change", Ca, !1);
  (n = document.getElementById("sensitivitylevel")) && n.removeEventListener("change", Da, !1);
  (n = document.getElementById("servermode")) && n.removeEventListener("change", Ea, !1);
  (n = document.getElementById("timeadjust")) && n.removeEventListener("click", Fa, !1);
  (n = document.getElementById("year")) && n.removeEventListener("change", Ga, !1);
  (n = document.getElementById("month")) && n.removeEventListener("change", Ha, !1);
  (n = document.getElementById("day")) && n.removeEventListener("change", Ia, !1);
  (n = document.getElementById("hour")) && n.removeEventListener("change", Ja, !1);
  (n = document.getElementById("minutes")) && n.removeEventListener("change", Ka, !1);
  (n = document.getElementById("replayByTime")) && n.removeEventListener("click", La, !1);
  (n = document.getElementById("autoserverchange")) && n.removeEventListener("change", Ma, !1);
  (n = document.getElementById("waitforserverresponsecheck")) && n.removeEventListener("change", Na, !1);
  (n = document.getElementById("voicename")) && n.removeEventListener("change", Oa, !1);
  (n = document.getElementById("monstopctl")) && n.removeEventListener("click", Pa, !1);
  (n = document.getElementById("files")) && n.removeEventListener("change", Qa, !1);
  (n = document.getElementById("play_ext_sound_file")) && n.removeEventListener("click", Ra, !1);
  (n = document.getElementById("delete_ext_sound_file")) && n.removeEventListener("click", Sa, !1);
  (n = document.getElementById("borehole_wave")) && n.removeEventListener("change", Ta, !1);
  (n = document.getElementById("auto_wave_disp")) && n.removeEventListener("change", Ua, !1);
  (n = document.getElementById("plot16waves")) && n.removeEventListener("change", Va, !1);
  (n = document.getElementById("plot_scale")) && n.removeEventListener("change", Wa, !1);
  (n = document.getElementById("post_twitter")) && n.removeEventListener("change", Xa, !1);
  (n = document.getElementById("tw_image")) && n.removeEventListener("change", Ya, !1);
  (n = document.getElementById("setup_twitter")) && n.removeEventListener("click", Za, !1);
  (n = document.getElementById("delete_twitter")) && n.removeEventListener("click", $a, !1);
  (n = document.getElementById("tw_alert")) && n.removeEventListener("change", ab, !1);
  (n = document.getElementById("tw_report")) && n.removeEventListener("change", bb, !1);
  (n = document.getElementById("tw_bhole_count")) && n.removeEventListener("change", cb, !1);
  (n = document.getElementById("tw_bhole_acc_count")) && n.removeEventListener("change", db, !1);
  (n = document.getElementById("tw_bhole_hist_graph")) && n.removeEventListener("change", eb, !1);
  (n = document.getElementById("pretext")) && n.removeEventListener("change", fb, !1);
  (n = document.getElementById("hashtag")) && n.removeEventListener("change", gb, !1);
  (n = document.getElementById("tw_waveplot")) && n.removeEventListener("change", hb, !1);
  (n = document.getElementById("tw_bhole_count_trigger")) && n.removeEventListener("change", ib, !1);
  (n = document.getElementById("tw_bhole_ratio_trigger")) && n.removeEventListener("change", jb, !1);
  (n = document.getElementById("tw_bhole_trigger_graph")) && n.removeEventListener("change", kb, !1);
  (n = document.getElementById("borehole_count_speech")) && n.removeEventListener("change", lb, !1);
  (n = document.getElementById("tw_bhole_acc_trigger")) && n.removeEventListener("change", mb, !1);
  (n = document.getElementById("enable_to_send_json")) && n.removeEventListener("change", nb, !1);
  (n = document.getElementById("openHostMenuButton")) && n.removeEventListener("click", ob, !1);
  (n = document.getElementById("host_url")) && n.removeEventListener("change", pb, !1);
  (n = document.getElementById("push_mode")) && n.removeEventListener("change", qb, !1);
  (n = document.getElementById("push_wakeup_level")) && n.removeEventListener("change", rb, !1);
  (n = document.getElementById("push_auto_stop")) && n.removeEventListener("change", sb, !1)
}

function da() {
  var b = document.getElementById("sound");
  c.setOptAlarmSound(parseInt(b.value));
  c.setAlarmOn(!0);
  0 < c.getOptAlarmSound() && c.playAlarmTone();
  localStorage.sound = b.value;
  return !1
}

function fa() {
  var b = document.getElementById("alarmLevel");
  c.setOptAlarmLevel(parseFloat(b.value));
  c.setAlarmLevel(Math.log(c.getOptAlarmLevel()) / Math.LN10);
  localStorage.alarmLevel = b.value;
  return !1
}

function ea() {
  var b = document.getElementById("alarmlength");
  c.setAlarmLengthMode(parseInt(b.value));
  localStorage.alarmlength = b.value;
  return !1
}

function pa() {
  var b = document.getElementById("reportJMAint");
  c.setMinJmaIntToReport(parseInt(b.value));
  localStorage.reportJMAint = b.value;
  void 0 == localStorage.tweet_report_level && c.setOptTweetReport(c.getMinJmaIntToReport());
  return !1
}

function qa() {
  var b = document.getElementById("reportJMAintHistory");
  c.changeEQreportListLength(parseInt(b.value));
  localStorage.reportJMAintHistory = b.value;
  return !1
}

function sa() {
  var b = document.getElementById("dispDetectFrame");
  c.setOptDispFrame(b.value);
  localStorage.dispDetectFrame = b.value;
  return !1
}

function ta() {
  var b = document.getElementById("dispPSWave"),
    a = "true" == b.value;
  c.isNewKyoshinMonitor() ? (c.setOptDispPSWave("true" == b.value), localStorage.dispPSWave = b.value) : (a && F("#1,#2では予測円の表示はできません"), b.value = !1, c.setOptDispPSWave(!1));
  return !1
}

function xa() {
  var b = document.getElementById("dispIndicator");
  c.setOptDispIndicator("true" == b.value);
  localStorage.dispIndicator = b.value;
  return !1
}

function ya() {
  var b = document.getElementById("drawNRmap");
  "false" == b.value ? c.setOptDrawNrMap(!1) : c.setOptDrawNrMap(b.value);
  localStorage.drawNRmap = b.value;
  return !1
}

function za() {
  var b = document.getElementById("dispInfoOnMap");
  "false" == b.value ? c.setOptDispInfoOnMap(!1) : c.setOptDispInfoOnMap(b.value);
  localStorage.dispInfoOnMap = b.value;
  return !1
}

function Aa() {
  var b = document.getElementById("disp_surface_map");
  "false" == b.value ? c.setOptDispSurfaceMap(!1) : c.setOptDispSurfaceMap(b.value);
  localStorage.disp_surface_map = b.value;
  return !1
}

function Ba() {
  var b = document.getElementById("blackmode");
  g = "true" == b.value;
  localStorage.blackmode = b.value;
  q();
  c.setPlotBlack(g);
  return !1
}

function u() {
  var b = document.getElementById("plotSwitch"),
    a = document.getElementById("waveWindow"),
    f = document.getElementById("PSWave");
  c.isNewKyoshinMonitor() ? (c.getOptWaveWindow() ? (b.src = "img/left_arrow.png", a.style.display = "block", f.addEventListener("click", G, !1), f.addEventListener("mouseout", H, !1), a.addEventListener("click", I, !1), a.addEventListener("mouseout", J, !1)) : (b.src = "img/right_arrow.png", a.style.display = "none", f.removeEventListener("click", G, !1), f.removeEventListener("mouseout", H, !1), a.removeEventListener("click", I, !1), a.removeEventListener("mouseout", J, !1)), c.getOptQuadWindow() ? b.style.display = "none" : (b.style.display = "block", b.addEventListener("click", tb, !1))) : (b.style.display = "none", c.getOptWaveWindow() && (c.setOptWaveWindow(!1), localStorage.plot_wave_window = c.getOptWaveWindow(), a.style.display = "none", f.removeEventListener("click", G, !1), f.removeEventListener("mouseout", H, !1), a.removeEventListener("click", I, !1), a.removeEventListener("mouseout", J, !1)));
  c.initWaveWindow();
  K()
}

function tb() {
  var b = document.getElementById("plotSwitch"),
    a = document.getElementById("waveWindow"),
    f = document.getElementById("PSWave");
  c.getOptWaveWindow() ? (b.src = "img/right_arrow.png", c.setOptWaveWindow(!1), localStorage.plot_wave_window = c.getOptWaveWindow(), a.style.display = "none", f.removeEventListener("click", G, !1), f.removeEventListener("mouseout", H, !1), a.removeEventListener("click", I, !1), a.removeEventListener("mouseout", J, !1)) : (b.src = "img/left_arrow.png", c.setOptWaveWindow(!0), localStorage.plot_wave_window = c.getOptWaveWindow(), a.style.display = "block", f.addEventListener("click", G, !1), f.addEventListener("mouseout", H, !1), a.addEventListener("click", I, !1), a.addEventListener("mouseout", J, !1));
  c.initWaveWindow();
  K()
}

function G(b) {
  var a = 1 / parseFloat(c.getOptWindowZoom());
  c.baseMapClicked(Math.round(b.x * a), Math.round(b.y * a));
  b.preventDefault()
}

function I(b) {
  var a = 1 / parseFloat(c.getOptWindowZoom());
  c.plotWindowClicked(b.x * a, b.y * a);
  b.preventDefault()
}

function H(b) {
  c.baseMapMouseOut();
  b.preventDefault()
}

function J(b) {
  c.plotWindowMouseOut();
  b.preventDefault()
}

function v() {
  if (c.getOptQuadWindow()) {
    var b = document.getElementById("bottomLeft");
    b.style.display = "block";
    b = document.getElementById("bottomRight");
    b.style.display = "block";
    b = document.getElementById("blScale");
    b.style.display = "block";
    b = document.getElementById("blBaseMap");
    b.style.display = "block"
  } else b = document.getElementById("bottomLeft"), b.style.display = "none", b = document.getElementById("bottomRight"), b.style.display = "none", b = document.getElementById("blScale"), b.style.display = "none", b = document.getElementById("blBaseMap"),
    b.style.display = "none"
}
var r;

function K() {
  clearTimeout(r);
  r = setTimeout(t, 30)
}
window.addEventListener("resize", K, !1);

function t() {
  var b = c.getPopupSize(c.getOptWindowZoom()).x,
    a = c.getPopupSize(c.getOptWindowZoom()).y,
    b = b - innerWidth,
    a = a - innerHeight,
    f = !1;
  0 < b ? f = !0 : -10 > b && (f = !0);
  0 < a ? f = !0 : -10 > a && (f = !0);
  f && window.resizeBy(b, a);
  r = null
}

function Ca() {
  if (h) F("Operaでは、拡大・縮小できません");
  else {
    var b = c.getOptWindowZoom(),
      a = document.getElementById("zoom");
    localStorage.zoom = a.value;
    c.setOptWindowZoom(a.value);
    document.body.style.zoom = c.getOptWindowZoom();
    var a = c.getPopupSize(c.getOptWindowZoom()).x - innerWidth,
      f = c.getPopupSize(c.getOptWindowZoom()).y - innerHeight;
    c.getOptWindowZoom() < b && (a += 6, f += 3);
    window.resizeBy(a, f)
  }
  return !1
}

function aa() {
  var b = document.getElementById("popupoption");
  c.setOptPopupKyoshinWindow("true" == b.value);
  localStorage.popupoption = b.value;
  return !1
}

function ba() {
  var b = document.getElementById("popupsetting");
  c.setOptPopupLevel(parseFloat(b.value));
  c.setPopupKyoshinWinLevel(Math.log(c.getOptPopupLevel()) / Math.LN10);
  localStorage.popupsetting = b.value;
  return !1
}

function ca() {
  var b = document.getElementById("popuphistwindow");
  c.setOptPopupHistoryWindow("true" == b.value);
  localStorage.popup_histwindow = b.value;
  return !1
}

function ga() {
  if (h) F("Operaでは通知機能は使えません");
  else {
    var b = document.getElementById("notification");
    c.setOptNotification(b.value);
    localStorage.notification = b.value
  }
  return !1
}

function ha() {
  if (h) F("Operaでは通知機能は使えません");
  else {
    var b = document.getElementById("closeareanotification");
    c.setOptCloseAreaNotification(b.value);
    localStorage.closeAreaNotification = b.value
  }
  return !1
}

function ia() {
  if (h) F("Operaでは使えません");
  else {
    var b = document.getElementById("eew_notification"),
      a = "true" == b.value;
    a ? c.isNewKyoshinMonitor() ? (c.setOptEEW_Notification(a), localStorage.eew_notification = a) : c.checkTwitterRegistration() ? (c.setOptEEW_Notification(a), localStorage.eew_notification = a) : (F("#1,#2で緊急地震速報を受信するには、Twitterでアプリ連携の認証が必要です。\n(新強震モニタでは認証は不要です)"), b.value = "false", c.setOptEEW_Notification(!1), localStorage.eew_notification = !1) : c.isNewKyoshinMonitor() ? (F("新強震モニタは常に緊急地震速報を受信します"), b.value = "true", c.setOptEEW_Notification(!0), localStorage.eew_notification = !0) : (c.setOptEEW_Notification(a), localStorage.eew_notification = a)
  }
  return !1
}

function ja() {
  var b = document.getElementById("eew_firstreportonly");
  c.setOptEEW_FirstReportOnly(b.value);
  localStorage.eew_firstreportonly = b.value;
  return !1
}

function la() {
  if (h) F("Operaでは音声通知機能は使えません");
  else if (0 < c.getVoiceNameList().length) {
    var b = document.getElementById("speech");
    c.setOptSpeechNotification("true" == b.value);
    localStorage.speech = b.value
  } else F("日本語音声合成エンジンのインストールが必要です"), b = document.getElementById("speech"), b.value = !1, c.setOptSpeechNotification(!1), localStorage.speech = !1;
  return !1
}

function ma() {
  var b = document.getElementById("speechprior");
  c.setOptSpeechPrior(b.checked);
  localStorage.speechPrior = b.checked
}

function na() {
  if (h) F("Operaでは音声通知機能は使えません");
  else {
    var b = document.getElementById("speechlevel");
    c.setOptSpeechNotifyLevel(parseFloat(b.value));
    c.setSpeechNotifyLevel(Math.log(c.getOptSpeechNotifyLevel()) / Math.LN10);
    localStorage.speechlevel = b.value
  }
  return !1
}

function Oa() {
  if (h) F("Operaでは音声通知機能は使えません");
  else if (0 < c.getVoiceNameList().length) {
    var b = document.getElementById("voicename");
    c.setOptVoiceName(b.value);
    localStorage.voiceName = b.value
  } else F("日本語音声合成エンジンのインストールが必要です");
  return !1
}

function ka() {
  if (h) F("Operaでは通知機能は使えません");
  else {
    var b = document.getElementById("notifylevel");
    c.setOptNotifyLevel(parseFloat(b.value));
    c.setDesktopNotifyLevel(Math.log(c.getOptNotifyLevel()) / Math.LN10);
    localStorage.notifylevel = b.value;
    void 0 == localStorage.tweet_alert_level && (c.setOptTweetAlert(c.getOptNotifyLevel()), c.setAlertTweetLevel(c.getDesktopNotifyLevel()))
  }
  return !1
}

function oa() {
  var b = document.getElementById("imagenotification");
  c.setOptNotificationWithImage(b.checked);
  localStorage.imagenotification = b.checked
}

function ra() {
  c.clearEQinfo()
}

function Ga() {
  z = parseInt(document.getElementById("year").value);
  return !1
}

function Ha() {
  A = parseInt(document.getElementById("month").value);
  return !1
}

function Ia() {
  B = parseInt(document.getElementById("day").value);
  return !1
}

function Ja() {
  C = parseInt(document.getElementById("hour").value);
  return !1
}

function Ka() {
  D = parseInt(document.getElementById("minutes").value);
  return !1
}

function Ea() {
  var b = document.getElementById("servermode"),
    a = parseInt(b.value);
  c.setServerMode(a);
  localStorage.servermode = b.value;
  c.selectServer(a);
  localStorage.autoserverchange = 0 == a ? !0 : !1;
  u();
  return !1
}

function Ma() {
  var b = document.getElementById("autoserverchange");
  c.setAutoServerChangeMode("true" == b.value);
  localStorage.autoserverchange = b.value;
  return !1
}

function Na() {
  var b = document.getElementById("waitforserverresponsecheck");
  c.setOptWaitForServerResponseCheck(parseInt(b.value));
  localStorage.waitforserverresponsecheck2 = b.value;
  return !1
}

function Da() {
  var b = document.getElementById("sensitivitylevel");
  c.setHighDetectLevel("true" == b.value);
  localStorage.sensitivitylevel2 = b.value;
  return !1
}

function Xa() {
  var b = document.getElementById("post_twitter");
  c.checkTwitterRegistration() ? (c.setOptPostTwitter("true" == b.value), localStorage.post_twitter = b.value) : (F("Twitterアカウントでアプリ連携の認証が必要です。"), b.value = "false", c.setOptPostTwitter(!1), localStorage.post_twitter = b.value);
  return !1
}

function ub() {
  document.getElementById("account").textContent = "認証済み"
}

function Za() {
  c.checkTwitterRegistration() || c.initOAuth(ub)
}

function $a() {
  c.checkTwitterRegistration() && (c.removeTwitterRegistration(), document.getElementById("account").textContent = "未認証")
}

function fb() {
  var b = document.getElementById("pretext").value;
  70 < b.length && (b = b.substring(0, 70));
  c.setPretext(b);
  localStorage.pretext = b;
  return !1
}

function gb() {
  var b = document.getElementById("hashtag").value;
  70 < b.length && (b = b.substring(0, 70));
  c.setHashTag(b);
  localStorage.hashtag = b;
  return !1
}

function nb() {
  var b = document.getElementById("enable_to_send_json");
  c.setOptEnableSendJson("true" == b.value);
  localStorage.enable_send_json = b.value;
  return !1
}

function ob() {
  var b, a;
  b = document.getElementById("poptab");
  b.textContent = "送信先ホスト設定";
  b = document.getElementById("popcontents");
  a = '<div style="text-align:center;"><div style="margin:2px 2px; text-align:left;"><div style="margin:2px 0px;">';
  a += "地震通知,震度情報,緊急地震速報をJSON形式で指定したURLに送信します。<br>";
  a += "</div>";
  a += '<div style="margin:0.5em 0px;">';
  a += 'URL：<input type="text" size="26" value="' + c.getHostUrl() + '" id="host_url">';
  a += "</div>";
  a += '<div style="text-align:center;margin-top:1em;">';
  a += '<button id="popclose">閉じる</button>';
  a += "</div>";
  a += "</div>";
  a += "</div>";
  b.innerHTML = a;
  (n = document.getElementById("host_url")) && n.addEventListener("change", pb, !1);
  document.getElementById("popclose").addEventListener("click", L, !1);
  b = document.getElementById("popup");
  b.style.display = "block";
  M = !0;
  N();
  return !1
}

function pb() {
  var b = document.getElementById("host_url").value;
  c.setHostUrl(b);
  localStorage.host_url = b;
  return !1
}

function ab() {
  var b = document.getElementById("tw_alert");
  c.setOptTweetAlert(parseFloat(b.value));
  c.setAlertTweetLevel(Math.log(b.value) / Math.LN10);
  localStorage.tweet_alert_level = b.value;
  return !1
}

function bb() {
  var b = document.getElementById("tw_report");
  c.setOptTweetReport(parseInt(b.value));
  localStorage.tweet_report_level = b.value;
  return !1
}

function cb() {
  var b = document.getElementById("tw_bhole_count");
  localStorage.tweet_borehole_count = b.value;
  c.setOptTweetBoreholeCount(parseInt(b.value));
  c.setBholeTweetCount();
  return !1
}

function db() {
  var b = document.getElementById("tw_bhole_acc_count");
  localStorage.tweet_borehole_acc_count = b.value;
  c.setOptTweetBoreholeAccCount(parseFloat(b.value));
  return !1
}

function eb() {
  var b = document.getElementById("tw_bhole_hist_graph");
  localStorage.tweet_borehole_histgram_graph = b.checked;
  c.setOptTweetBoreholeHistgramGraph(b.checked);
  return !1
}

function ib() {
  var b = document.getElementById("tw_bhole_count_trigger"),
    a = parseInt(b.value);
  0 < c.getOptTweetBoreholeCount() || 0 == a ? (localStorage.tweet_borehole_count_trigger = b.value, c.setOptTweetBoreholeCountTrigger(a)) : (b.value = "0", F("「地中カウントの投稿」を有効にしてください"));
  return !1
}

function jb() {
  var b = document.getElementById("tw_bhole_ratio_trigger"),
    a = parseFloat(b.value);
  0 < c.getOptTweetBoreholeCount() || 0 == a ? (localStorage.tweet_borehole_ratio_trigger = b.value, c.setOptTweetBoreholeRatioTrigger(a)) : (b.value = "0", F("「地中カウントの投稿」を有効にしてください"));
  return !1
}

function kb() {
  var b = document.getElementById("tw_bhole_trigger_graph");
  localStorage.tweet_borehole_trigger_graph = b.checked;
  c.setOptTweetBoreholeTriggerGraph(b.checked);
  return !1
}

function mb() {
  var b = document.getElementById("tw_bhole_acc_trigger");
  localStorage.tweet_borehole_acc_trigger = b.value;
  c.setOptTweetBoreholeAccTrigger(parseFloat(b.value));
  c.setTweetBholeAccTriggerLevel(Math.log(c.getOptTweetBoreholeAccTrigger()) / Math.LN10);
  return !1
}

function lb() {
  var b = document.getElementById("borehole_count_speech");
  localStorage.borehole_count_speech = b.checked;
  c.setOptBoreholeCountSpeech(b.checked);
  return !1
}

function Ya() {
  var b = document.getElementById("tw_image");
  c.setOptTweetImage("true" == b.value);
  localStorage.tweet_with_image = b.value;
  return !1
}

function hb() {
  var b = document.getElementById("tw_waveplot");
  c.setOptTweetWaveImage("true" == b.value);
  localStorage.tweet_wave_image = b.value;
  return !1
}

function Fa() {
  c.timeAdjustRequestByManual()
}

function Qa(b) {
  b = b.target.files;
  for (var a = 0; a < b.length; a++) {
    var f = b[a],
      e = new FileReader;
    e.onload = function () {
      if (1433600 < e.result.length) F("ファイルサイズは1MB以下です");
      else {
        c.setOptExternalSoundMode(!0);
        c.setOptExternalSound(e.result);
        localStorage.alarmSound = c.getOptExternalSound();
        localStorage.ext_sound_file = f.name;
        var a = document.getElementById("exsound");
        a && (a.textContent = "");
        c.setAudio(null);
        c.playAlarmTone()
      }
    };
    e.readAsDataURL(f)
  }
}

function Sa() {
  c.getOptExternalSoundMode() && (c.setOptExternalSoundMode(!1), c.setAudio(null), localStorage.removeItem("alarmSound"), localStorage.removeItem("ext_sound_file"), document.getElementById("exsound").textContent = "")
}

function Ra() {
  c.setAlarmOn(!0);
  c.playAlarmTone()
}

function Ta() {
  var b = document.getElementById("borehole_wave");
  localStorage.borehole_wave = b.value;
  "surface" == b.value ? (c.setOptBoreholeWave(!1), c.setOptAccWave(!0)) : "borehole" == b.value ? (c.setOptBoreholeWave(!0), c.setOptAccWave(!0)) : "sfaceresp" == b.value ? (c.setOptBoreholeWave(!1), c.setOptAccWave(!1)) : "bholeresp" == b.value && (c.setOptBoreholeWave(!0), c.setOptAccWave(!1));
  c.changeWaveMode();
  O();
  return !1
}

function O() {
  c.isNewKyoshinMonitor() || F("波形表示するには、接続先を新強震モニタに変更する必要があります")
}

function Ua() {
  var b = document.getElementById("auto_wave_disp");
  "off" == b.value ? (c.setOptAutoWaveDispMode(!1), c.setOptAutoAddBholeWave(!1)) : "on" == b.value ? (c.setOptAutoWaveDispMode(!0), c.setOptAutoAddBholeWave(!1)) : "bhole" == b.value && (c.setOptAutoWaveDispMode(!1), c.setOptAutoAddBholeWave(!0));
  localStorage.auto_wave_disp = b.value;
  c.changeWaveMode();
  c.getOptAutoWaveDispMode() && c.setCurrentLocationTimer(1);
  O();
  return !1
}

function Va() {
  var b = document.getElementById("plot16waves");
  c.setOptPlotWaveNumber(parseInt(b.value));
  localStorage.plot_16_waves = b.value;
  c.changePlotWaveHeight();
  O();
  return !1
}

function Wa() {
  var b = document.getElementById("plot_scale");
  c.setOptPlotScale(parseFloat(b.value));
  localStorage.plot_scale = b.value;
  c.changePlotScale();
  O();
  return !1
}

function Pa() {
  var b = document.getElementById("monstopctl");
  c.getKyoshinMonitorRun() ? (b.textContent = "モニタ再開", c.setKyoshinMonitorRun(!1)) : (b.textContent = "モニタ停止", c.setKyoshinMonitorRun(!0));
  c.setWaitCounterForKyoshinMonitorRun(-1);
  y();
  c.dispStatusOnIcon()
}

function ua() {
  var b = document.getElementById("acmapborehole");
  c.setOptAcmapBorehole("true" == b.value);
  localStorage.acmapborehole = b.value;
  y();
  return !1
}

function va() {
  var b = document.getElementById("quad_window");
  c.setOptQuadWindow("true" == b.value);
  localStorage.quad_window = b.value;
  c.getOptQuadWindow() && (3 != c.getServerMode() && (c.setServerMode(3), localStorage.servermode = 3, c.selectServer(3)), c.getOptAcmapBorehole() || (c.setOptAcmapBorehole(!0), localStorage.acmapborehole = !0), c.setOptWaveWindow(!0), c.setupQuadWindow());
  c.initWaveWindow();
  u();
  v();
  K();
  y();
  return !1
}

function wa() {
  var b = document.getElementById("acbholelevel");
  c.setOptAcBholeLevel(parseFloat(b.value));
  c.setMinBoreholeLPGAlevel(Math.log(c.getOptAcBholeLevel()) / Math.LN10);
  localStorage.acbholelevel = b.value;
  return !1
}

function qb() {
  var b = document.getElementById("push_mode");
  c.setOptPushMode("true" == b.value);
  localStorage.push_mode = b.value;
  return !1
}

function rb() {
  var b = document.getElementById("push_wakeup_level");
  localStorage.push_wakeup_level = b.value;
  b = parseFloat(b.value);
  c.setOptPushWakeupLevel(b);
  c.setOptPushWakeupPGA(Math.log(b) / Math.LN10);
  return !1
}

function sb() {
  var b = document.getElementById("push_auto_stop");
  localStorage.push_auto_stop = b.value;
  c.setOptPushAutoStop(parseInt(b.value));
  return !1
}

function P() {
  var b;
  b = '<option value="0.1">全ての地震</option>';
  for (i = 0; 6 >= i; ++i) b += '<option value="', b += Math.round(100 * Math.pow(10, c.pJmaIntToLogPGA(i - .5))) / 100, b += '">予想震度' + i + "以上</option>";
  return b += Q()
}

function Q() {
  var b = "",
    a = [.02, .05, .1, .2, .5, 1, 2, 5, 10, 20, 50, 100, 200, 500],
    f;
  for (f in a) b += '<option value="' + a[f] + '">' + a[f] + "gal以上</option>";
  return b
}

function vb() {
  var b;
  b = '<option value="10">OFF</option><option value="-2">全ての地震</option>';
  for (var a = 0; a < c.getJmaIntStr().length; ++a) b += '<option value="' + a + '">震度' + c.getJmaIntStr()[a] + "以上</option>";
  return b
}

function wb() {
  var b, a;
  b = document.getElementById("popcontents");
  a = b.innerHTML;
  a += '<div style="margin:0px 1px 1px 1px;"><div style="border:1px solid black;margin:1px 1px;">';
  a += "<div>自動表示：";
  a += '<select id="popupoption">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">ON</option>';
  a += "</select>";
  a += '<select id="popupsetting">';
  a += P();
  a += "</select></div>";
  a += "<div>エリア：";
  a += '<select id="closeareanotification">';
  a += '<option value="countryWide">全国</option>';
  a += '<option value="wideArea">広域</option>';
  a += '<option value="narrowArea">近県</option>';
  a += "</select>";
  a += '　1点赤：<select id="sensitivitylevel">';
  a += '<option value="false">非検知</option>';
  a += '<option value="true">検知</option>';
  a += "</select>";
  a += "</div>";
  a += "<div>音：";
  a += '<select id="sound">';
  a += '<option value="0">OFF</option>';
  a += '<option value="1">最小</option>';
  a += '<option value="5">小</option>';
  a += '<option value="10">中</option>';
  a += '<option value="15">大</option>';
  a += '<option value="20">最大</option>';
  a += "</select>";
  a += '<select id="alarmlength">';
  a += '<option value="1">2秒</option>';
  a += '<option value="2">4秒</option>';
  a += '<option value="3">6秒</option>';
  a += '<option value="4">8秒</option>';
  a += '<option value="5">10秒</option>';
  a += '<option value="6">12秒</option>';
  a += '<option value="7">14秒</option>';
  a += '<option value="8">16秒</option>';
  a += '<option value="9">18秒</option>';
  a += '<option value="10">20秒</option>';
  a += '<option value="15">30秒</option>';
  a += '<option value="0">連続</option>';
  a += "</select>";
  a += '<select id="alarmLevel">';
  a += P();
  a += "</select></div>";
  a += "<div>音声：";
  a += '<select id="speech">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">ON</option>';
  a += "</select>";
  a += '<select id="speechlevel">';
  a += P();
  a += "</select>";
  a += '<input type="checkbox" id="speechprior" ';
  c.getOptSpeechPrior() && (a += "checked");
  a += " >優先";
  a += "</div>";
  a += "<div>通知：";
  a += '<select id="notification">';
  a += '<option value="off">OFF</option>';
  a += '<option value="on">ON</option>';
  a += '<option value="auto">自動</option>';
  a += "</select>";
  a += '<select id="notifylevel">';
  a += P();
  a += "</select>";
  a += '<input type="checkbox" id="imagenotification" ';
  c.getOptNotificationWithImage() && (a += "checked");
  a += " >画像";
  a += "</div>";
  a += "<div>";
  a += "緊急地震速報：";
  a += '<select id="eew_notification">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">ON</option>';
  a += "</select>";
  a += '<select id="eew_firstreportonly">';
  a += '<option value="all">全て</option>';
  a += '<option value="firstOnly">第1報のみ</option>';
  a += '<option value="changeOnly">震度変化時</option>';
  a += "</select>";
  a += "</div>";
  a += "</div>";
  a += '<div style="border:1px solid black;margin:1px 1px;">';
  a += "<div>";
  a += '4画面表示：<select id="quad_window">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">ON</option>';
  a += "</select>";
  a += " 地震検知時：";
  a += '<select id="disp_surface_map">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">地表</option>';
  a += "</select>";
  a += "</div>";
  a += "<div>";
  a += '地中カウント：<select id="acmapborehole">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">ON</option>';
  a += "</select>";
  a += '<select id="acbholelevel">';
  a += Q();
  a += "</select></div>";
  a += "<div>画像：";
  a += '<select id="drawNRmap">';
  a += '<option value="false">地表加速度</option>';
  a += '<option value="borehole">地中加速度</option>';
  a += '<option value="count">地中カウント累積</option>';
  a += "</select>";
  a += ' 地点名：<select id="dispInfoOnMap">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">表示</option>';
  a += "</select>";
  a += "</div>";
  a += '<div>PGA：<select id="dispIndicator">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">表示</option>';
  a += "</select>";
  a += ' 背景：<select id="blackmode">';
  a += '<option value="true">黒</option>';
  a += '<option value="false">白</option>';
  a += "</select>";
  a += ' 拡大：<select id="zoom">';
  for (var f = 0; f < c.getZoompara().length; ++f) {
    var e = c.getZoompara()[f];
    a += '<option value="' + e + '">x' + e + "</option>"
  }
  a += "</select></div>";
  a += "<div>検知枠表示：";
  a += '<select id="dispDetectFrame">';
  a += '<option value="off">OFF</option>';
  a += '<option value="on">ON</option>';
  a += '<option value="auto">自動</option>';
  a += "</select>";
  a += " 予測円：";
  a += '<select id="dispPSWave">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">ON</option>';
  a += "</select>";
  a += "</div>";
  a += "<div>履歴：";
  a += '<select id="popuphistwindow">';
  a += '<option value="false">OFF</option>';
  a += '<option value="true">表示</option>';
  a += "</select>";
  a += '<select id="reportJMAint">';
  a += vb();
  a += "</select>";
  a += '<select id="reportJMAintHistory">';
  a += '<option value="10">10件</option>';
  a += '<option value="20">20件</option>';
  a += '<option value="50">50件</option>';
  a += '<option value="100">100件</option>';
  a += '<option value="200">200件</option>';
  a += "</select>";
  a += '<span id="popClearHistory"></span>';
  a += "</div>";
  a += "</div>";
  a += "<div>";
  a += "</div>";
  b.innerHTML = a
}
var R = 1;

function l() {
  var b, a;
  b = document.getElementById("poptab");
  a = '<table border=0 style="padding:0px; margin:0px;"><tbody style="margin:0px; padding:0px; border:0px;"><tr style="margin:0px; padding:0px; border:0px;">';
  a += '<td id="menu_sel_1" >設定1</td>';
  a += '<td id="menu_sel_2" >設定2</td>';
  a += '<td id="menu_sel_3" >設定3</td>';
  a += '<td id="menu_sel_4" >設定4</td>';
  a += "</tr>";
  a += "</tbody>";
  a += "</table>";
  b.innerHTML = a;
  document.getElementById("menu_sel_1").addEventListener("click", xb, !1);
  document.getElementById("menu_sel_2").addEventListener("click", yb, !1);
  document.getElementById("menu_sel_3").addEventListener("click", zb, !1);
  document.getElementById("menu_sel_4").addEventListener("click", Ab, !1);
  S();
  b = document.getElementById("popup");
  b.style.display = "block";
  M = !0;
  N();
  return !1
}

function xb() {
  1 != R && (R = 1, S())
}

function yb() {
  2 != R && (R = 2, S())
}

function zb() {
  3 != R && (R = 3, S())
}

function Ab() {
  4 != R && (R = 4, S())
}

function S() {
  m = document.getElementById("popcontents");
  m.innerHTML = "";
  m = document.getElementById("menu_sel_1");
  m.className = (1 != R ? "un" : "") + "select";
  m = document.getElementById("menu_sel_2");
  m.className = (2 != R ? "un" : "") + "select";
  m = document.getElementById("menu_sel_3");
  m.className = (3 != R ? "un" : "") + "select";
  m = document.getElementById("menu_sel_4");
  m.className = (4 != R ? "un" : "") + "select";
  if (1 == R) wb();
  else if (2 == R) {
    var b, a;
    b = document.getElementById("popcontents");
    a = b.innerHTML;
    a += '<div style="margin:0px 1px 1px 1px;"><div style="border:1px solid black;margin:2px 2px;">';
    a += '<div>波形表示：<select id="borehole_wave">';
    a += '<option value="surface">地表</option>';
    a += '<option value="borehole">地中</option>';
    a += "</select>";
    a += ' 波形表示数：<select id="plot16waves">';
    a += '<option value="10">10</option>';
    a += '<option value="16">16</option>';
    a += '<option value="20">20</option>';
    a += '<option value="25">25</option>';
    a += '<option value="32">32</option>';
    a += '<option value="40">40</option>';
    a += '<option value="50">50</option>';
    a += '<option value="80">80</option>';
    a += '<option value="100">100</option>';
    a += "</select></div>";
    a += '<div>自動表示：<select id="auto_wave_disp">';
    a += '<option value="off">OFF</option>';
    a += '<option value="on">ON</option>';
    a += '<option value="bhole">地中</option>';
    a += "</select>";
    a += ' スケール：<select id="plot_scale">';
    a += '<option value="0">全体</option>';
    a += '<option value="0.02">0.02gal</option>';
    a += '<option value="0.05">0.05gal</option>';
    a += '<option value="0.1">0.1gal</option>';
    a += '<option value="0.2">0.2gal</option>';
    a += '<option value="0.5">0.5gal</option>';
    a += '<option value="1">1gal</option>';
    a += '<option value="2">2gal</option>';
    a += '<option value="5">5gal</option>';
    a += '<option value="10">10gal</option>';
    a += '<option value="20">20gal</option>';
    a += '<option value="50">50gal</option>';
    a += '<option value="100">100gal</option>';
    a += '<option value="200">200gal</option>';
    a += '<option value="500">500gal</option>';
    a += '<option value="1000">1000gal</option>';
    a += "</select>";
    a += "</div>";
    a += "</div>";
    a += '<div style="border:1px solid black;margin:2px 2px;">';
    a += "<div>警告音";
    a += '：<button id="play_ext_sound_file">テスト</button>';
    a += ' <button id="delete_ext_sound_file">削除</button>';
    a += ' <span id="exsound">';
    c.getOptExternalSoundMode() && (a += localStorage.ext_sound_file);
    a += "</span>";
    a += '<input type="file" id="files" accept="audio/*">';
    a += "</div>";
    var f = c.getVoiceNameList();
    a += "<div>";
    if (f && 0 < f.length) {
      a += "音声選択：";
      a += '<select id="voicename">';
      for (var e = 0; e < f.length; ++e) a += '<option value="' + f[e] + '">' + f[e] + "</option>";
      a += "</select>"
    } else a += "音声選択はできません";
    a += "</div>";
    a += "</div>";
    a += '<div style="border:1px solid black;margin:2px 2px;">';
    a += '接続先：<select id="servermode">';
    c.getDisableGAEserver || (a += '<option value="0">自動(#1,#2)</option>');
    a += '<option value="' + c.getPrimaryServer() + '">#1</option>';
    c.getDisableGAEserver || (a += '<option value="' + c.getGAEserver() + '">#2(GAE)</option>');
    a += '<option value="' + c.getNewKyoshinMonitorServer() + '">新強震モニタ</option>';
    a += "</select>";
    a += '<span style="margin-left:1.5em;">';
    a += '<button id="timeadjust">時刻調整</button>';
    a += "</span>";
    a += "</div>";
    a += '<div style="border:1px solid black;margin:2px 2px;">';
    a += "<div>";
    a += 'サーバー無応答時：<select id="waitforserverresponsecheck">';
    a += '<option value="-1">停止</option>';
    a += '<option value="60">1分停止</option>';
    a += '<option value="180">3分停止</option>';
    a += '<option value="300">5分停止</option>';
    a += '<option value="600">10分停止</option>';
    a += '<option value="0">停止なし</option>';
    a += "</select>";
    a += "</div>";
    a += "<div>";
    a += 'サーバー自動切替：<select id="autoserverchange">';
    a += '<option value="false">OFF</option>';
    a += '<option value="true">ON</option>';
    a += "</select>";
    a += '<span style="margin-left:20px">';
    a += '<button id="monstopctl">';
    a = c.getKyoshinMonitorRun() ? a + "モニタ停止" : a + "モニタ再開";
    a += "</button>";
    a += "</span>";
    a += "</div>";
    a += "</div>";
    a += '<div style="border:1px solid black;margin:2px;">';
    a += '地震情報の送信：<select id="enable_to_send_json">';
    a += '<option value="false">OFF</option>';
    a += '<option value="true">ON</option>';
    a += "</select>";
    a += '<span style="margin-left:1em;">URL：<button id="openHostMenuButton">設定</button></span>';
    a += "</div>";
    a += '<div style="border:1px solid black;margin:2px 2px;">';
    a += '<div style="margin:2px; text-align:center;">';
    a += '<div><select id="year">';
    f = (new Date).getFullYear();
    for (e = 2011; e <= f; ++e) a += '<option value="' + e + '">' + e + "</option>";
    a += "</select>年　";
    a += '<select id="month">';
    for (e = 0; 12 > e; ++e) a += '<option value="' + e + '">' + ("0" + String(e + 1)).substr(-2) + "</option>";
    a += "</select>月";
    a += '<select id="day">';
    for (e = 1; 31 >= e; ++e) a += '<option value="' + e + '">' + ("0" + e).substr(-2) + "</option>";
    a += "</select>日　";
    a += "</div><div>";
    a += '<select id="hour">';
    for (e = 0; 24 > e; ++e) a += '<option value="' + e + '">' + ("0" + e).substr(-2) + "</option>";
    a += "</select>時";
    a += '<select id="minutes">';
    for (e = 0; 60 > e; ++e) a += '<option value="' + e + '">' + ("0" + e).substr(-2) + "</option>";
    a += "</select>分";
    a += '　　<button id="replayByTime">時刻指定再生</button>';
    a += "</div>";
    a += "</div></div>";
    a += "</div>";
    b.innerHTML = a
  } else if (3 == R) {
    b = document.getElementById("popcontents");
    a = b.innerHTML;
    a += '<div style="text-align:center;"><div style="margin:2px 2px; text-align:left;">';
    if (c.getEnableTwitter()) {
      a += '<div style="border:1px solid black;margin:2px;">';
      a += '<div>自動ツイート：<select id="post_twitter">';
      a += '<option value="false">OFF</option>';
      a += '<option value="true">ON</option>';
      a += "</select>";
      a += '　画像：<select id="tw_image">';
      a += '<option value="false">OFF</option>';
      a += '<option value="true">ON</option>';
      a += "</select></div>";
      a += "<div>アプリ連携：";
      a = c.checkTwitterRegistration() ? a + '<span id="account">認証済み</span>　' : a + '<span id="account">未認証</span>　';
      a += '<button id="setup_twitter">認証</button>';
      a += '　<button id="delete_twitter">削除</button></div>';
      a += '<div>地震通知の投稿：<select id="tw_alert">';
      a += '<option value="100000">OFF</option>';
      a += P();
      a += "</select></div>";
      a += '<div>震度情報の投稿：<select id="tw_report">';
      a += vb();
      a += "</select></div>";
      c.getOptWaveWindow() && c.isNewKyoshinMonitor() && (a += "<div>", a += '波形画像の投稿：<select id="tw_waveplot">', a += '<option value="false">OFF</option>', a += '<option value="true">ON</option>', a += "</select></div>");
      a += '<div>地中：<select id="tw_bhole_count">';
      a += '<option value="0">OFF</option>';
      a += '<option value="600">10分</option>';
      a += '<option value="900">15分</option>';
      a += '<option value="1800">30分</option>';
      a += '<option value="3600">1時間</option>';
      a += '<option value="7200">2時間</option>';
      a += '<option value="14400">4時間</option>';
      a += '<option value="28800">8時間</option>';
      a += "</select>";
      a += ' 累積 <select id="tw_bhole_acc_count">';
      a += '<option value="0">OFF</option>';
      a += '<option value="0.010416667">15分</option>';
      a += '<option value="0.020833333">30分</option>';
      a += '<option value="0.041666667">1時間</option>';
      a += '<option value="0.125">3時間</option>';
      a += '<option value="0.25">6時間</option>';
      a += '<option value="0.5">12時間</option>';
      a += '<option value="1">1日</option>';
      a += "</select>";
      a += ' <input type="checkbox" id="tw_bhole_hist_graph" ';
      c.getOptTweetBoreholeHistgramGraph() && (a += "checked");
      a += " >";
      a += '<span style="font-size:80%; vertical-align:middle">';
      a += "グラフ";
      a += "</span>";
      a += "</div>";
      a += '<div>トリガ：<select id="tw_bhole_count_trigger">';
      a += '<option value="0">OFF</option>';
      for (e = 10; 100 > e; e += 10) a += '<option value="' + e + '">' + e + "</option>";
      for (e = 100; 500 >= e; e += 20) a += '<option value="' + e + '">' + e + "</option>";
      a += "</select>";
      a += ' <select id="tw_bhole_ratio_trigger">';
      a += '<option value="0">OFF</option>';
      for (e = 10; 100 > e; e += 10) a += '<option value="' + String(e / 100) + '">' + e + "%</option>";
      for (e = 100; 500 >= e; e += 20) a += '<option value="' + String(e / 100) + '">' + e + "%</option>";
      a += "</select>";
      a += '<span style="font-size:80%; vertical-align:middle">';
      a += ' <input type="checkbox" id="tw_bhole_trigger_graph" ';
      c.getOptTweetBoreholeTriggerGraph() && (a += "checked");
      a += " >";
      a += "グラフ";
      a += ' <input type="checkbox" id="borehole_count_speech" ';
      c.getOptBoreholeCountSpeech() && (a += "checked");
      a += " >";
      a += "音声";
      a += "</span>";
      a += "</div>";
      a += '<div>地中加速度トリガ：<select id="tw_bhole_acc_trigger">';
      a += '<option value="99999">OFF</option>';
      a += Q();
      a += "</select>";
      a += "</div>";
      a += '<div><form style="margin-bottom:1px;">';
      a += '先頭文字列：<input type="text" value="' + c.getPretext() + '" id="pretext"><br>';
      a += '追加文字列：<input type="text" value="' + c.getHashTag() + '" id="hashtag">';
      a += "</form></div>";
      a += "</div>"
    }
    a += "</div>";
    a += "</div>";
    b.innerHTML = a
  } else if (4 == R) {
    b = document.getElementById("popcontents");
    a = b.innerHTML;
    a += '<div style="text-align:center;"><div style="margin:2px 2px; text-align:left;">';
    a += '<div style="border:1px solid black;margin:2px;">';
    a += "<div>通常は停止状態になり、地震を検知した場合のみサーバーからのプッシュ通知で動作再開して表示を更新します。<p></div>";
    a += '<div>プッシュ通知モード：<select id="push_mode">';
    a += '<option value="false">OFF</option>';
    a += '<option value="true">ON</option>';
    a += "</select>";
    a += "</div>";
    a += '<div>ウェイクアップ条件：<select id="push_wakeup_level">';
    e = '<option value="0.1">全ての地震</option>';
    for (i = 0; 2 >= i; ++i) e += '<option value="', e += Math.round(100 * Math.pow(10, c.pJmaIntToLogPGA(i - .5))) / 100, e += '">予想震度' + i + "以上</option>";
    a = a + e + "</select></div>";
    a += '<div>自動停止までの時間：<select id="push_auto_stop">';
    a += '<option value="60">1分</option>';
    a += '<option value="120">2分</option>';
    a += '<option value="180">3分</option>';
    a += '<option value="240">4分</option>';
    a += '<option value="300">5分</option>';
    a += "</select>";
    a += "</div>";
    a += "</div>";
    a += "</div>";
    b.innerHTML = a
  } else wb();
  m = document.getElementById("popcontents");
  htmlstr = m.innerHTML;
  htmlstr += '<div style="margin:0px 1px 1px 1px;">';
  htmlstr += '<div style="text-align:center; margin-top:5px;">';
  htmlstr += '<button id="popclose">閉じる</button>';
  htmlstr += "</div></div>";
  m.innerHTML = htmlstr;
  if (b = document.getElementById("sound")) b.value = String(c.getOptAlarmSound());
  if (b = document.getElementById("alarmLevel")) b.value = String(c.getOptAlarmLevel());
  if (b = document.getElementById("alarmlength")) b.value = String(c.getAlarmLengthMode());
  if (b = document.getElementById("reportJMAint")) b.value = String(c.getMinJmaIntToReport());
  if (b = document.getElementById("reportJMAintHistory")) b.value = String(c.getOptEQreportListLength());
  if (b = document.getElementById("dispDetectFrame")) b.value = c.getOptDispFrame();
  if (b = document.getElementById("dispPSWave")) b.value = (c.isNewKyoshinMonitor() && c.getOptDispPSWave()).toString();
  if (b = document.getElementById("dispIndicator")) b.value = c.getOptDispIndicator().toString();
  if (b = document.getElementById("drawNRmap")) b.value = c.getOptDrawNrMap().toString();
  if (b = document.getElementById("dispInfoOnMap")) b.value = c.getOptDispInfoOnMap().toString();
  if (b = document.getElementById("disp_surface_map")) b.value = c.getOptDispSurfaceMap().toString();
  if (b = document.getElementById("blackmode")) b.value = g.toString();
  if (b = document.getElementById("popupoption")) b.value = String(c.getOptPopupKyoshinWindow());
  if (b = document.getElementById("popupsetting")) b.value = String(c.getOptPopupLevel());
  if (b = document.getElementById("popuphistwindow")) b.value = String(c.getOptPopupHistoryWindow());
  if (b = document.getElementById("notification")) b.value = c.getOptNotification();
  if (b = document.getElementById("closeareanotification")) b.value = c.getOptCloseAreaNotification();
  if (b = document.getElementById("eew_notification")) b.value = c.getOptEEW_Notification() && (c.checkTwitterRegistration() || c.isNewKyoshinMonitor());
  if (b = document.getElementById("eew_firstreportonly")) b.value = c.getOptEEW_FirstReportOnly();
  if (b = document.getElementById("speech")) b.value = c.getOptSpeechNotification();
  if (b = document.getElementById("speechprior")) b.checked = c.getOptSpeechPrior();
  if (b = document.getElementById("speechlevel")) b.value = String(c.getOptSpeechNotifyLevel());
  if (b = document.getElementById("notifylevel")) b.value = String(c.getOptNotifyLevel());
  if (b = document.getElementById("imagenotification")) b.checked = c.getOptNotificationWithImage();
  if (b = document.getElementById("acmapborehole")) b.value = String(c.getOptAcmapBorehole());
  if (b = document.getElementById("quad_window")) b.value = String(c.getOptQuadWindow());
  if (b = document.getElementById("acbholelevel")) b.value = String(c.getOptAcBholeLevel());
  if (b = document.getElementById("zoom")) b.value = c.getOptWindowZoom();
  if (b = document.getElementById("sensitivitylevel")) b.value = String(c.getHighDetectLevel());
  if (b = document.getElementById("servermode")) b.value = String(c.getServerMode());
  a = new Date;
  if (b = document.getElementById("year")) isNaN(z) && (z = a.getFullYear()), b.value = String(z);
  if (b = document.getElementById("month")) isNaN(A) && (A = a.getMonth()), b.value = String(A);
  if (b = document.getElementById("day")) isNaN(B) && (B = a.getDate()), b.value = String(B);
  if (b = document.getElementById("hour")) isNaN(C) && (C = a.getHours()), b.value = String(C);
  if (b = document.getElementById("minutes")) isNaN(D) && (D = a.getMinutes()), b.value = String(D);
  if (b = document.getElementById("autoserverchange")) b.value = String(c.getAutoServerChangeMode());
  if (b = document.getElementById("voicename")) b.value = c.getOptVoiceName();
  if (b = document.getElementById("waitforserverresponsecheck")) b.value = String(c.getOptWaitForServerResponseCheck());
  if (b = document.getElementById("borehole_wave")) c.getOptBoreholeWave() ? c.getOptAccWave() ? b.value = "borehole" : b.value = "bholeresp" : c.getOptAccWave() ? b.value = "surface" : b.value = "sfaceresp";
  if (b = document.getElementById("auto_wave_disp")) c.getOptAutoWaveDispMode() ? b.value = "on" : c.getOptAutoAddBholeWave() ? b.value = "bhole" : b.value = "off";
  if (b = document.getElementById("plot16waves")) b.value = c.getOptPlotWaveNumber();
  if (b = document.getElementById("plot_scale")) b.value = String(c.getOptPlotScale());
  if (b = document.getElementById("post_twitter")) b.value = String(c.getOptPostTwitter());
  if (b = document.getElementById("tw_image")) b.value = String(c.getOptTweetImage());
  if (b = document.getElementById("tw_alert")) b.value = String(c.getOptTweetAlert());
  if (b = document.getElementById("tw_report")) b.value = String(c.getOptTweetReport());
  if (b = document.getElementById("tw_bhole_count")) b.value = String(c.getOptTweetBoreholeCount());
  if (b = document.getElementById("tw_bhole_acc_count")) b.value = String(c.getOptTweetBoreholeAccCount());
  if (b = document.getElementById("tw_bhole_hist_graph")) b.checked = c.getOptTweetBoreholeHistgramGraph();
  if (b = document.getElementById("tw_bhole_count_trigger")) b.value = String(c.getOptTweetBoreholeCountTrigger());
  if (b = document.getElementById("tw_bhole_ratio_trigger")) b.value = String(c.getOptTweetBoreholeRatioTrigger());
  if (b = document.getElementById("tw_bhole_trigger_graph")) b.checked = c.getOptTweetBoreholeTriggerGraph();
  if (b = document.getElementById("borehole_count_speech")) b.checked = c.getOptBoreholeCountSpeech();
  if (b = document.getElementById("tw_bhole_acc_trigger")) b.value = String(c.getOptTweetBoreholeAccTrigger());
  if (b = document.getElementById("tw_waveplot")) b.value = String(c.getOptTweetWaveImage());
  if (b = document.getElementById("enable_to_send_json")) b.value = String(c.getOptEnableSendJson());
  if (b = document.getElementById("push_mode")) b.value = String(c.getOptPushMode());
  if (b = document.getElementById("push_wakeup_level")) b.value = String(c.getOptPushWakeupLevel());
  if (b = document.getElementById("push_auto_stop")) b.value = String(c.getOptPushAutoStop());
  var d;
  (d = document.getElementById("popupoption")) && d.addEventListener("change", aa, !1);
  (d = document.getElementById("popupsetting")) && d.addEventListener("change", ba, !1);
  (d = document.getElementById("popuphistwindow")) && d.addEventListener("change", ca, !1);
  (d = document.getElementById("sound")) && d.addEventListener("change", da, !1);
  (d = document.getElementById("alarmlength")) && d.addEventListener("change", ea, !1);
  (d = document.getElementById("alarmLevel")) && d.addEventListener("change", fa, !1);
  (d = document.getElementById("notification")) && d.addEventListener("change", ga, !1);
  (d = document.getElementById("closeareanotification")) && d.addEventListener("change", ha, !1);
  (d = document.getElementById("eew_notification")) && d.addEventListener("change", ia, !1);
  (d = document.getElementById("eew_firstreportonly")) && d.addEventListener("change", ja, !1);
  (d = document.getElementById("notifylevel")) && d.addEventListener("change", ka, !1);
  (d = document.getElementById("speech")) && d.addEventListener("change", la, !1);
  (d = document.getElementById("speechprior")) && d.addEventListener("click", ma, !1);
  (d = document.getElementById("speechlevel")) && d.addEventListener("change", na, !1);
  (d = document.getElementById("imagenotification")) && d.addEventListener("click", oa, !1);
  (d = document.getElementById("reportJMAint")) && d.addEventListener("change", pa, !1);
  (d = document.getElementById("reportJMAintHistory")) && d.addEventListener("change", qa, !1);
  (d = document.getElementById("popClearHistory")) && d.addEventListener("click", ra, !1);
  (d = document.getElementById("dispDetectFrame")) && d.addEventListener("change", sa, !1);
  (d = document.getElementById("dispPSWave")) && d.addEventListener("change", ta, !1);
  (d = document.getElementById("acmapborehole")) && d.addEventListener("change", ua, !1);
  (d = document.getElementById("quad_window")) && d.addEventListener("change", va, !1);
  (d = document.getElementById("acbholelevel")) && d.addEventListener("change", wa, !1);
  (d = document.getElementById("dispIndicator")) && d.addEventListener("change", xa, !1);
  (d = document.getElementById("drawNRmap")) && d.addEventListener("change", ya, !1);
  (d = document.getElementById("dispInfoOnMap")) && d.addEventListener("change", za, !1);
  (d = document.getElementById("disp_surface_map")) && d.addEventListener("change", Aa, !1);
  (d = document.getElementById("blackmode")) && d.addEventListener("change", Ba, !1);
  (d = document.getElementById("zoom")) && d.addEventListener("change", Ca, !1);
  (d = document.getElementById("sensitivitylevel")) && d.addEventListener("change", Da, !1);
  (d = document.getElementById("servermode")) && d.addEventListener("change", Ea, !1);
  (d = document.getElementById("timeadjust")) && d.addEventListener("click", Fa, !1);
  (d = document.getElementById("year")) && d.addEventListener("change", Ga, !1);
  (d = document.getElementById("month")) && d.addEventListener("change", Ha, !1);
  (d = document.getElementById("day")) && d.addEventListener("change", Ia, !1);
  (d = document.getElementById("hour")) && d.addEventListener("change", Ja, !1);
  (d = document.getElementById("minutes")) && d.addEventListener("change", Ka, !1);
  (d = document.getElementById("replayByTime")) && d.addEventListener("click", La, !1);
  (d = document.getElementById("autoserverchange")) && d.addEventListener("change", Ma, !1);
  (d = document.getElementById("waitforserverresponsecheck")) && d.addEventListener("change", Na, !1);
  (d = document.getElementById("voicename")) && d.addEventListener("change", Oa, !1);
  (d = document.getElementById("monstopctl")) && d.addEventListener("click", Pa, !1);
  (d = document.getElementById("files")) && d.addEventListener("change", Qa, !1);
  (d = document.getElementById("play_ext_sound_file")) && d.addEventListener("click", Ra, !1);
  (d = document.getElementById("delete_ext_sound_file")) && d.addEventListener("click", Sa, !1);
  (d = document.getElementById("borehole_wave")) && d.addEventListener("change", Ta, !1);
  (d = document.getElementById("auto_wave_disp")) && d.addEventListener("change", Ua, !1);
  (d = document.getElementById("plot16waves")) && d.addEventListener("change", Va, !1);
  (d = document.getElementById("plot_scale")) && d.addEventListener("change", Wa, !1);
  (d = document.getElementById("post_twitter")) && d.addEventListener("change", Xa, !1);
  (d = document.getElementById("tw_image")) && d.addEventListener("change", Ya, !1);
  (d = document.getElementById("setup_twitter")) && d.addEventListener("click", Za, !1);
  (d = document.getElementById("delete_twitter")) && d.addEventListener("click", $a, !1);
  (d = document.getElementById("tw_alert")) && d.addEventListener("change", ab, !1);
  (d = document.getElementById("tw_report")) && d.addEventListener("change", bb, !1);
  (d = document.getElementById("tw_bhole_count")) && d.addEventListener("change", cb, !1);
  (d = document.getElementById("tw_bhole_acc_count")) && d.addEventListener("change", db, !1);
  (d = document.getElementById("tw_bhole_hist_graph")) && d.addEventListener("change", eb, !1);
  (d = document.getElementById("pretext")) && d.addEventListener("change", fb, !1);
  (d = document.getElementById("hashtag")) && d.addEventListener("change", gb, !1);
  (d = document.getElementById("tw_waveplot")) && d.addEventListener("change", hb, !1);
  (d = document.getElementById("tw_bhole_count_trigger")) && d.addEventListener("change", ib, !1);
  (d = document.getElementById("tw_bhole_ratio_trigger")) && d.addEventListener("change", jb, !1);
  (d = document.getElementById("tw_bhole_trigger_graph")) && d.addEventListener("change", kb, !1);
  (d = document.getElementById("borehole_count_speech")) && d.addEventListener("change", lb, !1);
  (d = document.getElementById("tw_bhole_acc_trigger")) && d.addEventListener("change", mb, !1);
  (d = document.getElementById("enable_to_send_json")) && d.addEventListener("change", nb, !1);
  (d = document.getElementById("openHostMenuButton")) && d.addEventListener("click", ob, !1);
  (d = document.getElementById("push_mode")) && d.addEventListener("change", qb, !1);
  (d = document.getElementById("push_wakeup_level")) && d.addEventListener("change", rb, !1);
  (d = document.getElementById("push_auto_stop")) && d.addEventListener("change", sb, !1);
  document.getElementById("popclose").addEventListener("click", L, !1)
}

function F(b) {
  var a;
  a = document.getElementById("poptab");
  a.textContent = "Message";
  a = document.getElementById("popcontents");
  b = '<div style="margin:5px 10px;">' + b.replace("\n", "<br>");
  b += '<br></div><div style="text-align:center; margin:10px 0px;"><button id="popclose">閉じる</button>';
  b += "</div>";
  b += "</div>";
  a.innerHTML = b;
  a = document.getElementById("popup");
  a.style.display = "block";
  M = !0;
  N();
  document.getElementById("popclose").addEventListener("click", Bb, !1)
}

function L() {
  var b;
  (b = document.getElementById("popclose")) && b.removeEventListener("click", L, !1);
  (b = document.getElementById("menu_sel_1")) && b.removeEventListener("click", xb, !1);
  (b = document.getElementById("menu_sel_2")) && b.removeEventListener("click", yb, !1);
  (b = document.getElementById("menu_sel_3")) && b.removeEventListener("click", zb, !1);
  E();
  T()
}

function Bb() {
  document.getElementById("popclose").removeEventListener("click", Bb, !1);
  T()
}

function T() {
  var b = document.getElementById("popup");
  b.style.display = "none";
  M = !1;
  b = document.getElementById("popcontents");
  b.innerHTML = "";
  Cb();
  return !1
}
var M = !1,
  U = !1;

function V(b) {
  for (var a = "", f = 90, e = 0; e < b.length; ++e) a += String.fromCharCode(f ^ e ^ b[e]), f = b[e];
  return a
}
var W = V([41, 77, 59, 76, 33, 74, 43, 95]),
  Db = V([50, 90, 43, 92, 55, 64, 63, 111, 14, 105, 7, 99, 24, 90, 58]),
  Eb = V([56, 85, 56, 88, 55]);

function Cb() {
  if (!U && !M) {
    var b = document.getElementById(W);
    b.className == Db && (b.style.display = Eb)
  }
}

function N() {
  document.getElementById(W).style.display = "none"
}

function Fb() {
  U = !0;
  b = document.getElementById("histTitle");
  b.textContent = "地震情報";
  var b = document.getElementById("history");
  b.className = "historyWindowOn";
  N()
}

function X() {
  U = !1;
  document.getElementById("history").className = "historyWindowOff";
  Cb()
}

function p() {
  U ? X() : Fb();
  return !1
}

function Y(b) {
  b.style.color = g ? "white" : "#00c";
  b.style.textDecoration = "none";
  b.addEventListener("mouseover", Gb, !1);
  b.addEventListener("mouseout", Hb, !1)
}

function Ib(b) {
  b.removeEventListener("mouseover", Gb, !1);
  b.removeEventListener("mouseout", Hb, !1)
}

function Gb(b) {
  b.target.style.color = g ? "#0ff" : "#f0f";
  b.target.style.textDecoration = "underline";
  b.target.style.cursor = "pointer"
}

function Hb(b) {
  b.target.style.color = g ? "white" : "#00c";
  b.target.style.textDecoration = "none"
}

function q() {
  var b;
  g ? (document.body.style.backgroundColor = "black", document.body.style.color = "white", c.setArrowColor("rgb(255,255,255)"), b = document.getElementById("scale"), b.src = "img/nied_acmap_s_scale_black.png", b = document.getElementById("baseMap"), c.getNewLayoutMode() ? b.src = "img/basemap_new_black.png" : b.src = "img/base_map_black.png", c.getOptQuadWindow && (b = document.getElementById("blScale"), b.src = "img/nied_acmap_s_scale_black.png", b = document.getElementById("blBaseMap"), c.getNewLayoutMode() ? b.src = "img/basemap_new_black.png" : b.src = "img/base_map_black.png"), b = document.getElementById("info"), b.style.backgroundColor = "black", b = document.getElementById(W), b.style.backgroundColor = "black", b.style.color = "white", b = document.getElementById("historyBack"), b.style.opacity = "0.6") : (document.body.style.backgroundColor = "white", document.body.style.color = "black", c.setArrowColor("rgb(0,0,0)"), b = document.getElementById("scale"), b.src = "img/nied_acmap_s_scale_white.png", b = document.getElementById("baseMap"), c.getNewLayoutMode() ? b.src = "img/basemap_new_white.png" : b.src = "img/base_map_white.png", c.getOptQuadWindow && (b = document.getElementById("blScale"), b.src = "img/nied_acmap_s_scale_white.png", b = document.getElementById("blBaseMap"), c.getNewLayoutMode() ? b.src = "img/basemap_new_white.png" : b.src = "img/base_map_white.png"), b = document.getElementById("info"), b.style.backgroundColor = "white", b = document.getElementById(W), b.style.backgroundColor = "white", b.style.color = "black", b = document.getElementById("historyBack"), b.style.opacity = "0.85");
  b = document.getElementsByTagName("a");
  for (var a = 0; a < b.length; ++a) Y(b[a])
}

function La() {
  c.restartFromTime(new Date(z, A, B, C, D, 0));
  T();
  c.setBackCommand(!0);
  w();
  return !1
}

function Z() {
  c.restartFromNow();
  c.setBackCommand(!1);
  w();
  return !1
}

function w() {
  var b = document.getElementById("command");
  if (c.getBackCommand()) {
    b.innerHTML = '<span id="backToNow">現在時刻に戻る</span> ';
    b.style.display = "block";
    var a = document.getElementById("backToNow");
    a.addEventListener("click", Z, !1);
    Y(a)
  } else a = document.getElementById("backToNow"), null != a && a.removeEventListener("click", Z), b.innerHTML = "", b.style.display = "none"
}

function Jb() {
  c.closeKyoshinMonitorWindow();
  window.removeEventListener("unload", Jb, !1);
  document.getElementById("setbutton").removeEventListener("click", l, !1);
  document.getElementById("histOpenButton").removeEventListener("click", p, !1);
  var b = document.getElementById("backToNow");
  null != b && b.removeEventListener("click", Z);
  for (var b = document.getElementsByTagName("a"), a = 0; a < b.length; ++a) Ib(b[a]);
  for (a = 0; a < c.getOptEQreportListLength(); ++a) b = kyoshinmonitor.document.getElementById("EQinfo" + a), null != b && b.removeEventListener("click", replayFunc);
  b = document.getElementById("popclose");
  null != b && b.removeEventListener("click", T, !1);
  E()
}
window.addEventListener("unload", Jb, !1);
window.setPlotWindow = u;
window.change_color = q;
window.popHistWindow = Fb;
window.closeHistWindow = X;
window.setLinkColor = Y;
window.removeLinkColor = Ib;
window.replay = function (b) {
  var a = b.target.id.substr(0, 6);
  if ("EQinfo" != a) return !1;
  a = parseInt(b.target.id.substr(6));
  c.restartByList(a) && (X(), c.setBackCommand(!0), w());
  return !1
};
window.dispStatus = y;
window.getHistoryWindowOpen = function () {
  return U
};
window.getWindowPopup = function () {
  return U || M
};
