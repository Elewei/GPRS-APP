
var currentOpenWindowMachineAddress = 0;
var currentCurtainAddress = 0;
var currentSmartPlugAddress = 0;
var currentTouchSwitchAddress = 0;
var currentSceneName = '';

$(document).ready(() => {

  /* 智能控制 -> 独立控制页面 */
  const $independantLeftMyDeviceText = $('#independant-left-my-device-text');
  const $independantLeftExecLogText = $('#independant-left-exec-log-text');

  const $leftSideButtomOne = $('.left-side-buttom-one');
  const $leftSideButtomOneOn = $('.left-side-buttom-one-on');
  const $leftSideButtomTwo = $('.left-side-buttom-two');
  const $leftSideButtomTwoOn = $('.left-side-buttom-two-on');


  const $touchSwitchText = $('#touch-switch-text');
  const $myDeviceOn = $('.my-device-on');
  const $touchSwitchExecLogText = $('#touch-switch-exec-log-text');
  const $execLogOn = $('.my-device-on');

  const $oneKeySwitchKeyOn = $('.one-key-switch-on');
  const $oneKeySwitchKeyOff = $('.one-key-switch-off');

  const $twoKeyOneSwitchOn = $('.two-key-one-switch-on');
  const $twoKeyOneSwitchOff = $('.two-key-one-switch-off');

  const $twoKeyTwoSwitchOn = $('.two-key-two-switch-on');
  const $twoKeyTwoSwitchOff = $('.two-key-two-switch-off');

  const $threeKeyOneSwitchOn = $('.three-key-one-switch-on');
  const $threeKeyOneSwitchOff = $('.three-key-one-switch-off');

  const $threeKeyTwoSwitchOn = $('.three-key-two-switch-on');
  const $threeKeyTwoSwitchOff = $('.three-key-two-switch-off');

  const $threeKeyThreeSwitchOn = $('.three-key-three-switch-on');
  const $threeKeyThreeSwitchOff = $('.three-key-three-switch-off');

  
  const $roomControlContent = $('.room-control-content');

  const $deviceManageDeviceList = $('#device-manage-device-list');
  const $deviceManageDeviceListOn = $('#device-manage-device-list-on');
  const $deviceManageRegisterOff = $('#device-manage-register-off');
  const $deviceManageRegisterOffOn = $('#device-manage-register-off-on');
  const $deviceManageDeviceListText = $('#device-manage-device-list-text');
  const $deviceManageRegisterOffText = $('#device-manage-register-off-text');

  const $deviceManageContent = $('.device-manage-content');
  
  const $deviceListPage = $('.device-list-page');
  const $registerOffPage = $('.register-off-page');

  const $deviceManageCard = $('.device-manage-card');
  
  const $registerPlug = $('#register-plug');
  const $offPlug = $('#off-plug');
  
  

  const $sceneControlContent = $('.scene-control-content');


  const $setGuideUserSetup = $('#set-guide-user-setup');

  const $userSetupBasicInfo = $('#user-setup-basic-info');
  const $userSetupBasicInfoOn = $('#user-setup-basic-info-on');
  const $userSetupChangePasswd = $('#user-setup-change-passwd');
  const $userSetupChangePasswdOn = $('#user-setup-change-passwd-on');
  const $userSetupBasicInfoText = $('#user-setup-basic-info-text');
  const $userSetupChangePasswdText = $('#user-setup-change-passwd-text');

  const $sceneControlMySceneText = $('#scene-control-my-scene-text');
  const $sceneControlExecLogText = $('#scene-control-exec-log-text');
  const $sceneControlExecLog = $('#scene-control-exec-log');
  const $sceneControlMyScene = $('#scene-control-my-scene');
  const $sceneControlLeftSideButtomOne = $('#scene-control-left-side-buttom-one');
  const $sceneControlLeftSideButtomOneOn = $('#scene-control-left-side-buttom-one-on');
  const $sceneControlLeftSideButtomTwo = $('#scene-control-left-side-buttom-two');
  const $sceneControlLeftSideButtomTwoOn = $('#scene-control-left-sice-buttom-two-on');

  const sceneControlMySceneChildBack = $('#scene-control-my-scene-child-back');
  const $sceneControlMySceneChildContent = $('.scene-control-my-scene-child-content');
  const $sceneControlContentBack = $('#scene-control-content-back');

  const $sceneControlBackHomeMode = $('#scene-control-back-home-mode');
  const $sceneControlDinnerMode = $('#scene-control-dinner-mode');
  const $sceneControlLeaveHomeMode = $('#scene-control-leave-home-mode');
  const $sceneControlRainMode = $('#scene-control-rain-mode');
  const $sceneControlSleepMode = $('#scene-control-sleep-mode');
  const $sceneControlCustomMode = $('#scene-control-custom-mode');
  const $deviceManageContentBack = $('#device-manage-content-back');


  const $manageEntryHomeManage = $('#manage-entry-home-manage');
  const $homeManageContent = $('.home-manage-content');
  const $homeManageHomeMamberText = $('#home-manage-home-mamber-text');
  const $homeManageHomeListText = $('#home-manage-home-list-text');
  const $homeManageHomeMember = $('#home-manage-home-member');
  const $homeManageHomeInformation = $('#home-manage-home-information');
  const $homeManageHomeRoomList = $('#home-manage-home-room-list');
  const $homeManageContentBack = $('#home-manage-content-back');
  const $manageEntryFreeGroup = $('#manage-entry-free-group');
  const $freeGroupContent = $('.free-group-content');
  
  const $openWindowToggleBar = $('#open-window-toggle-bar');
  const $windowImg = $('#window-img');
  const $roomControlContentBack = $('#room-control-content-back');
  const $curtainToggleBar = $('#curtain-toggle-bar');
  const $curtainImg = $('#curtain-img');
  

  const $videoOneKeySwitch = $('#video-one-key-switch');
  const $videoTwoKeyOneSwitch = $('#video-two-key-one-switch');
  const $videoTwoKeyTwoSwitch = $('#video-two-key-two-switch');

  const $videoThreeKeyOneSwitch = $('#video-three-key-one-switch');
  const $videoThreeKeyTwoSwitch = $('#video-three-key-two-switch');
  const $videoThreeKeyThreeSwitch = $('#video-three-key-three-switch');

  const $deviceClassficationContentBack = $('#device-classfication-content-back');
  const $deviceClassficationContent = $('.device-classfication-content');
  const $manageEntryDeviceClass = $('#manage-entry-device-class');
  const $freeGroupList = $('#free-group-list');
  const $freeGroupAdd = $('#free-group-add');
  const $freeGroupListText = $('#free-group-list-text');
  const $freeGroupAddText = $('#free-group-add-text');
  const $freeGroupContentBack = $('#free-group-content-back');
  const $openWindowToggleBarValue = $('#open-window-toggle-bar-value');
  const $curtainToggleBarValue = $('#curtain-toggle-bar-value');
  const $smartPlugOnImg = $('#smart-plug-on-img');
  const $smartPlugOffImg = $('#smart-plug-off-img');
  const $smartPlugOff = $('.smart-plug-off');
  const $smartPlugOn = $('.smart-plug-on');
  const $dimmingLampToggleBar = $('#dimming-lamp-toggle-bar');
  const $dimmingLampToggleBarText = $('#dimming-lamp-toggle-bar-text');
  const $roomControlRoomDescText = $('#room-control-room-desc-text');
  const $roomControlMyRoom = $('#room-control-my-room');
  const $roomControlRoomDesc = $('#room-control-room-desc');

  const $roomControlMyRoomText = $('#room-control-my-room-text');
  const $roomControlLeftSideButtomOne = $('#room-control-left-side-buttom-one');
  const $roomControlLeftSideButtomOneOn = $('#room-control-left-side-buttom-one-on');
  const $roomControlLeftSideButtomTwo = $('#room-control-left-side-buttom-two');
  const $roomControlLeftSideButtomTwoOn = $('#room-control-left-side-buttom-two-on');

  const $curtainOpenFull = $('#curtain-open-full');
  const $curtainCloseFull = $('#curtain-close-full');
  const $curtainStop = $('#curtain-stop');
  const $curtainReverse = $('#curtain-reverse');
  const $curtainCheck = $('#curtain-check');


  /* 第二栏 定义 */
  const $smartControl = $('.smart-control');
  const $smartControlOn = $('.smart-control-on');
  const $manageEntry = $('.manage-entry');
  const $manageEntryOn = $('.manage-entry-on');
  const $setGuide = $('.set-guide');
  const $setGuideOn = $('.set-guide-on');
  const $other = $('.other');
  const $otherOn = $('.other-on');

  /* 定义四个主页面内容 */
  const $smartHomeContent = $('.smart-control-content');
  const $manageEntryContent = $('.manage-entry-content');
  const $setGuideContent = $('.set-guide-content');
  const $otherContent = $('.other-content');


  /* 智能控制页面点击事件 定义 */
  const $sceneControl = $('.scene-control');
  const $roomControl = $('.room-control');
  const $independantControl = $('.independant-control'); 
  const $timeControl = $('.time-control'); 
  const $voiceControl = $('.voice-control');
  const $homeMonitor = $('.home-monitor');


  /* 智能控制独立控制页面事件 定义 */
  const $independantControlContent = $('.independant-control-content');
  const $openWindowMachineContent = $('.open-window-machine-content');
  const $touchSwitchContent = $('.touch-switch-content');
  const $airBoxContent = $('.air-box-content');
  const $smartPlugContent = $('.smart-plug-content');
  const $smartCurtainContent = $('.smart-curtain-content');
  const $dimmingLampContent = $('.dimming-lamp-content');

  const $independantControlContentBack = $('#independant-control-content-back');
  const $openWindowMachineContentBack = $('#open-window-machine-content-back');
  const $touchSwitchContentBack = $('#touch-switch-content-back');
  const $airBoxContentBack = $('#air-box-content-back');
  const $smartCurtainContentBack = $('#smart-curtain-content-back');
  const $smartPlugContentBack = $('#smart-plug-content-back');  
  const $dimmingLampContentBack = $('#dimming-lamp-content-back');

  const $openWindowMachine = $('.open-window-machine');
  const $curtain = $('.curtain');
  const $airBox = $('.air-box');
  const $dimmingLamp = $('.dimming-lamp');
  const $smartPlug = $('.smart-plug');
  const $touchSwitch = $('.touch-switch');



  /* 管理入口情景管理页面事件 定义 */
  const $manageEntrySceneManage = $('#manage-entry-scene-manage');
  const $sceneManageContentBack = $('#scene-manage-content-back');
  const $sceneManageContent = $('.scene-manage-content');
  
  /* 设置向导 页面点击事件 定义 */
  $setGuideNetworkSetup = $('#set-guide-network-setup');
  
  /* 设置向导 网络设置 定义 */
  const $networkSetupContent = $('.network-setup-content');
  const $networkSetupContentBack = $('#network-setup-content-back');
  
  /* 设置向导 页面点击事件 */
  const $voiceSetup = $('.voice-setup');
  

  /* 设置向导 -> 页面设置 */
  const $userSetupContent = $('.user-setup-content');

  /* 设置向导 -> 声音设置 页面事件 定义 */
  const $voiceSetupContent = $('.voice-setup-content');
  const $voiceSetupContentBack = $('#voice-setup-content-back');
  
  /* 点击智能控制标题 */
  $smartControl.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
	  $voiceSetupContent.hide();
	  $networkSetupContent.hide();
    $smartHomeContent.show();
  });

  /* 点击管理入口标题 */
  $manageEntry.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.show();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
    $smartHomeContent.hide();
	$voiceSetupContent.hide();
  });

  /* 点击设置向导标题 */
  $setGuide.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.hide();
    $setGuideOn.show();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $userSetupContent.hide();
    $setGuideContent.show();
	$voiceSetupContent.hide();
  });

  /* 点击其他标题*/
  $other.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.hide();
    $otherOn.show();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $userSetupContent.hide();
    $otherContent.show();
	$voiceSetupContent.hide();
  });
  
  /* 点击情景控制 -> 情景控制  */
  $sceneControl.on('click', ()=>{
    console.log('点击智能控制 -> 情景控制');
    /* 显示智能控制标题 */
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 显示情景控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $smartHomeContent.hide();
    $sceneControlMySceneChildContent.hide();
    $sceneControlContent.show();
  });

  /* 点击情景控制左侧 我的情景 */
  $sceneControlMySceneText.on('click', ()=>{
    console.log('点击情景控制左侧 我的情景');

    $sceneControlLeftSideButtomOne.hide();
    $sceneControlLeftSideButtomOneOn.show();
    $sceneControlLeftSideButtomTwo.show();
    $sceneControlLeftSideButtomTwoOn.hide();

    $sceneControlMyScene.show();
    $sceneControlExecLog.hide();
  });

  /* 点击情景控制左侧 执行记录 */
  $sceneControlExecLogText.on('click', ()=>{
    console.log('点击情景控制左侧 情景描述');

    $sceneControlLeftSideButtomOne.show();
    $sceneControlLeftSideButtomOneOn.hide();
    $sceneControlLeftSideButtomTwo.hide();
    $sceneControlLeftSideButtomTwoOn.show();

    $sceneControlMyScene.hide();
    $sceneControlExecLog.show();
  });

  /* 点击 智能控制 -> 房间控制 */
  $roomControl.on('click', ()=>{
    console.log("点击房间控制");

    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.show();
  });

  /* 点击 智能控制 -> 独立控制 */
  $independantControl.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();

    $independantControlContent.show();
  });


  /* 设置向导 -> 用户设置-页面 左侧按钮 */
  $userSetupBasicInfoText.on('click', ()=>{
    console.log('设置向导 -> 用户设置-页面 左侧按钮 基本信息');

    $userSetupBasicInfo.hide();
    $userSetupBasicInfoOn.show();
    $userSetupChangePasswd.show();
    $userSetupChangePasswdOn.hide();
  });

  /* 设置向导 -> 用户设置-页面 左侧按钮 */
  $userSetupChangePasswdText.on('click', ()=>{
    console.log('设置向导 -> 用户设置-页面 左侧按钮 修改密码');

    $userSetupBasicInfo.show();
    $userSetupBasicInfoOn.hide();
    $userSetupChangePasswd.hide();
    $userSetupChangePasswdOn.show();
  });

  /* 点击 管理入口 -> 独立控制 -> 触控开关 */
  $touchSwitch.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();

    $independantControlContent.hide();
    $touchSwitchContent.show();

    $('#touch-switch-label-one').nextAll().remove();

    /* 获取数据库中所有开窗器 */
    $.getJSON($SCRIPT_ROOT + '/switch/getall', {
      deviceType: 20,
    }, function(data) {
      console.log(data.result);
      let touchSwitchAddress = JSON.parse(data.result);
      for (let i = 0; i < touchSwitchAddress.length; i ++) {
        //console.log(openWindowMachineAddress[i]);
        idVal = "touch-switch-address" + touchSwitchAddress[i];
        let markup = "<div id="+  idVal +" class='left-side-buttom' onclick='get_touch_switch_address("+ touchSwitchAddress[i]  +")'><span class='left-side-text-label'>"+ "10.1.1." + touchSwitchAddress[i] +"</span></div>";
        $('#touch-switch-label-one').after(markup);
      }

    });
  });

  /* 点击触控开关-左侧栏-我的设备 */
  $touchSwitchText.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();

    $independantControlContent.hide();
    $touchSwitchContent.show();

    /*
    $leftSideButtomOne.hide();
    $leftSideButtomOneOn.show();
    $leftSideButtomTwo.show();
    $leftSideButtomTwoOn.hide();
    */

    console.log("touch switch");
  });

  /* 点击触控开关-左侧栏-执行记录 */
  $touchSwitchExecLogText.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();

    $independantControlContent.hide();
    $touchSwitchContent.show();


    console.log("exec switch");
  });

  /* 点击一键触控开关 - 开 */
  $oneKeySwitchKeyOn.on('click', ()=>{
    console.log("点击一键触控开关 - 开");
    console.log($videoOneKeySwitch[0].src);

    $oneKeySwitchKeyOn.hide();
    $oneKeySwitchKeyOff.show();

    $videoOneKeySwitch.show();
    $videoTwoKeyOneSwitch.hide();
    $videoTwoKeyTwoSwitch.hide();
    $videoThreeKeyOneSwitch.hide();
    $videoThreeKeyTwoSwitch.hide();
    $videoThreeKeyThreeSwitch.hide();

    let oneKeySwitchKeyOnImgPath = "/static/img/touch_switch/touch_switch_on.png";
    $videoOneKeySwitch.attr("src",oneKeySwitchKeyOnImgPath);



    $.getJSON($SCRIPT_ROOT + '/switch/turnon', {
      deviceAddress: currentTouchSwitchAddress,
      keypanel: 1,
      key: 1,
    }, function(data) {
      console.log(data.result);
    });
  });

  /* 点击一键触控开关 - 关 */
  $oneKeySwitchKeyOff.on('click', ()=>{
    console.log("点击一键触控开关 - 关");

    $oneKeySwitchKeyOn.show();
    $oneKeySwitchKeyOff.hide();

    $videoOneKeySwitch.show();
    $videoTwoKeyOneSwitch.hide();
    $videoTwoKeyTwoSwitch.hide();
    $videoThreeKeyOneSwitch.hide();
    $videoThreeKeyTwoSwitch.hide();
    $videoThreeKeyThreeSwitch.hide();

    let oneKeySwitchKeyOnImgPath = "/static/img/touch_switch/touch_switch_off.png";
    $videoOneKeySwitch.attr("src",oneKeySwitchKeyOnImgPath);

    $.getJSON($SCRIPT_ROOT + '/switch/turnoff', {
      deviceAddress: currentTouchSwitchAddress,
      keypanel: 1,
      key: 1,
    }, function(data) {
      console.log(data.result);
    });

  });

  /* 点击二键触控开关一 - 开 */
  $twoKeyOneSwitchOn.on('click', ()=>{
    console.log("点击二键触控开关一 - 开");

    $twoKeyOneSwitchOn.hide();
    $twoKeyOneSwitchOff.show();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.show();
    $videoTwoKeyTwoSwitch.show();
    $videoThreeKeyOneSwitch.hide();
    $videoThreeKeyTwoSwitch.hide();
    $videoThreeKeyThreeSwitch.hide();

    console.log($videoTwoKeyOneSwitch[0].src);
    let twoKeyOneSwitchOnImgPath = "/static/img/touch_switch/multi_touch_switch_on.png";
    $videoTwoKeyOneSwitch.attr("src",twoKeyOneSwitchOnImgPath);

    $.getJSON($SCRIPT_ROOT + '/switch/turnon', {
      deviceAddress: currentTouchSwitchAddress,
      keypanel: 2,
      key: 1,
    }, function(data) {
      console.log(data.result);
    });
  });

  /* 点击二键触控开关一 - 关 */
  $twoKeyOneSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $twoKeyOneSwitchOn.show();
    $twoKeyOneSwitchOff.hide();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.show();
    $videoTwoKeyTwoSwitch.show();
    $videoThreeKeyOneSwitch.hide();
    $videoThreeKeyTwoSwitch.hide();
    $videoThreeKeyThreeSwitch.hide();

    let twoKeyOneSwitchOffImgPath = "/static/img/touch_switch/multi_touch_switch_off.png";
    $videoTwoKeyOneSwitch.attr("src",twoKeyOneSwitchOffImgPath);

    $.getJSON($SCRIPT_ROOT + '/switch/turnoff', {
      deviceAddress: currentTouchSwitchAddress,
      keypanel: 2,
      key: 1,
    }, function(data) {
      console.log(data.result);
    });
  });

  /* 点击二键触控开关二 - 开 */
  $twoKeyTwoSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $twoKeyTwoSwitchOn.hide();
    $twoKeyTwoSwitchOff.show();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.show();
    $videoTwoKeyTwoSwitch.show();
    $videoThreeKeyOneSwitch.hide();
    $videoThreeKeyTwoSwitch.hide();
    $videoThreeKeyThreeSwitch.hide();

    let twoKeyTwoSwitchOnImgPath = "/static/img/touch_switch/multi_touch_switch_on.png";
    $videoTwoKeyTwoSwitch.attr("src",twoKeyTwoSwitchOnImgPath);

    $.getJSON($SCRIPT_ROOT + '/switch/turnon', {
      deviceAddress: currentTouchSwitchAddress,
      keypanel: 2,
      key: 2,
    }, function(data) {
      console.log(data.result);
    });

  });

  /* 点击二键触控开关二 - 关 */
  $twoKeyTwoSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $twoKeyTwoSwitchOn.show();
    $twoKeyTwoSwitchOff.hide();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.show();
    $videoTwoKeyTwoSwitch.show();
    $videoThreeKeyOneSwitch.hide();
    $videoThreeKeyTwoSwitch.hide();
    $videoThreeKeyThreeSwitch.hide();

    let twoKeyTwoSwitchOffImgPath = "/static/img/touch_switch/multi_touch_switch_off.png";
    $videoTwoKeyTwoSwitch.attr("src",twoKeyTwoSwitchOffImgPath);

    $.getJSON($SCRIPT_ROOT + '/switch/turnff', {
      deviceAddress: currentTouchSwitchAddress,
      keypanel: 2,
      key: 2,
    }, function(data) {
      console.log(data.result);
    });


  });

  /* 点击三键触控开关一 - 开 */
  $threeKeyOneSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $threeKeyOneSwitchOn.hide();
    $threeKeyOneSwitchOff.show();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.hide();
    $videoTwoKeyTwoSwitch.hide();

    $videoThreeKeyOneSwitch.show();
    $videoThreeKeyTwoSwitch.show();
    $videoThreeKeyThreeSwitch.show();

    let ThreeKeyOneSwitchOnImgPath = "/static/img/touch_switch/multi_touch_switch_on.png";
    $videoThreeKeyOneSwitch.attr("src",ThreeKeyOneSwitchOnImgPath);


    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });

  });

  /* 点击三键触控开关一 - 关 */
  $threeKeyOneSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $threeKeyOneSwitchOn.show();
    $threeKeyOneSwitchOff.hide();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.hide();
    $videoTwoKeyTwoSwitch.hide();
    $videoThreeKeyOneSwitch.show();
    $videoThreeKeyTwoSwitch.show();
    $videoThreeKeyThreeSwitch.show();

    let ThreeKeyOneSwitchOffImgPath = "/static/img/touch_switch/multi_touch_switch_off.png";
    $videoThreeKeyOneSwitch.attr("src",ThreeKeyOneSwitchOffImgPath);

  });

  /* 点击三键触控开关二 - 开 */
  $threeKeyTwoSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $threeKeyTwoSwitchOn.hide();
    $threeKeyTwoSwitchOff.show();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.hide();
    $videoTwoKeyTwoSwitch.hide();
    $videoThreeKeyOneSwitch.show();
    $videoThreeKeyTwoSwitch.show();
    $videoThreeKeyThreeSwitch.show();

    let ThreeKeyTwoSwitchOnImgPath = "/static/img/touch_switch/multi_touch_switch_on.png";
    $videoThreeKeyTwoSwitch.attr("src",ThreeKeyTwoSwitchOnImgPath);

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });



  });

  /* 点击三键触控开关二 - 关 */
  $threeKeyTwoSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $threeKeyTwoSwitchOn.show();
    $threeKeyTwoSwitchOff.hide();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.hide();
    $videoTwoKeyTwoSwitch.hide();
    $videoThreeKeyOneSwitch.show();
    $videoThreeKeyTwoSwitch.show();
    $videoThreeKeyThreeSwitch.show();

    let ThreeKeyTwoSwitchOffImgPath = "/static/img/touch_switch/multi_touch_switch_off.png";
    $videoThreeKeyTwoSwitch.attr("src",ThreeKeyTwoSwitchOffImgPath);

  });

  /* 点击三键触控开关三 - 开 */
  $threeKeyThreeSwitchOn.on('click', ()=>{
    console.log("click onekey On");

    $threeKeyThreeSwitchOn.hide();
    $threeKeyThreeSwitchOff.show();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.hide();
    $videoTwoKeyTwoSwitch.hide();
    $videoThreeKeyOneSwitch.show();
    $videoThreeKeyTwoSwitch.show();
    $videoThreeKeyThreeSwitch.show();

    let ThreeKeyThreeSwitchOnImgPath = "/static/img/touch_switch/multi_touch_switch_on.png";
    $videoThreeKeyThreeSwitch.attr("src",ThreeKeyThreeSwitchOnImgPath);

    $.getJSON($SCRIPT_ROOT + '/switch', {
      keypanel: 1,
      key: 1,
      state: 1
    }, function(data) {
      console.log(data.result);
    });



  });

  /* 点击三键触控开关三 - 关 */
  $threeKeyThreeSwitchOff.on('click', ()=>{
    console.log("click onekey Off");

    $threeKeyThreeSwitchOn.show();
    $threeKeyThreeSwitchOff.hide();

    $videoOneKeySwitch.hide();
    $videoTwoKeyOneSwitch.hide();
    $videoTwoKeyTwoSwitch.hide();
    $videoThreeKeyOneSwitch.show();
    $videoThreeKeyTwoSwitch.show();
    $videoThreeKeyThreeSwitch.show();

    let ThreeKeyThreeSwitchOffImgPath = "/static/img/touch_switch/multi_touch_switch_off.png";
    $videoThreeKeyThreeSwitch.attr("src",ThreeKeyThreeSwitchOffImgPath);

  });

  /* 点击打开智能插座 */
  $smartPlugOnImg.on('click', ()=>{
    console.log('点击打开智能插座');
    $smartPlugOn.hide();
    $smartPlugOff.show();

    let smartPlugImgPath = "/static/img/touch_switch/smart_plug_on.png";
    $('#smart-plug-toggle').attr("src",smartPlugImgPath);


    /* 获取数据库中所有窗帘 */
    $.getJSON($SCRIPT_ROOT + '/smartplug/open', {
      smartPlugAddress: currentSmartPlugAddress,
    }, function(data) {
      console.log(data.result);


    });

    setTimeout( function(){
      console.log('wait 3s');
    }, 3 * 1000 );

  });

  /* 点击关闭智能插座 */
  $smartPlugOffImg.on('click', ()=>{
    console.log('点击关闭智能插座');
    $smartPlugOn.show();
    $smartPlugOff.hide();

    let smartPlugImgPath = "/static/img/touch_switch/smart_plug_off.png";
    $('#smart-plug-toggle').attr("src",smartPlugImgPath);

    /* 获取数据库中所有窗帘 */
    $.getJSON($SCRIPT_ROOT + '/smartplug/close', {
      smartPlugAddress: currentSmartPlugAddress,
    }, function(data) {
      console.log(data.result);
    });

    setTimeout( function(){
      console.log('wait 3s');
    }, 3 * 1000 );

  });

  /* 点击 管理入口 -> 设备管理 */
  $deviceManageCard.on('click', ()=> {
    console.log("打开设备管理页面");

    /* 选定管理入口 */
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $deviceManageContent.show();
  });

  /* 点击 管理入口->设备管理->设备列表 */
  $deviceManageDeviceListText.on('click', ()=>{
    /* 选定管理入口 */
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 显示设备管理内容 */
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $deviceManageContent.show();

    /* 选定设备列表 */
    $deviceManageDeviceList.hide();
    $deviceManageDeviceListOn.show();
    $deviceManageRegisterOff.show();
    $deviceManageRegisterOffOn.hide();

    $deviceListPage.show();
    $registerOffPage.hide();

    console.log("点击设备列表");

  });

  /* 点击 管理入口->设备管理->注册/注销 */
  $deviceManageRegisterOffText.on('click', ()=>{
    /* 选定管理入口 */
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 显示设备管理内容 */
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $deviceManageContent.show();

    /* 选定注册注销 */
    $deviceManageDeviceList.show();
    $deviceManageDeviceListOn.hide();
    $deviceManageRegisterOff.hide();
    $deviceManageRegisterOffOn.show();

    $deviceListPage.hide();
    $registerOffPage.show();


    console.log("点击注册/注销");
    $('#register-device-address').text(' ');
  });

  function add_func(table_id, row_num, c_num, data) {
    var tb=$("#" + table_id);
    if(tb.length > 0) {
      var trs = tb.find('tr');
      var tds = $(trs[row_num - 1]).find('td');
      var td = tds[c_num - 1];
      $(td).html(data);
    }
  }

  /* 点击 管理入口 -> 设备管理 -> 注册/注销 添加设备 */
  $registerPlug.on('click', ()=> {
    console.log('点击注册按钮');

    registerDeviceNameVal = $('#register-device-name option:selected').val();
    registerDeviceNameText =  $('#register-device-name option:selected').text();
    registerDeviceRoomVal = $('#register-device-room option:selected').val();
    registerDeviceRoomText =  $('#register-device-room option:selected').text();

    //console.log(registerDeviceNameVal);
    //console.log(registerDeviceNameText);
    //console.log(registerDeviceRoomVal);
    //console.log(registerDeviceRoomText);

    if(registerDeviceNameVal == "register-off-two-key-switch") {
      console.log('开始注册二键触控开关');


      $.getJSON($SCRIPT_ROOT + '/switch', {
        keypanel: 2,
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {

        if(data.result == 1) {
          console.log("设备注册成功");
          deviceID = "10.1.1." + data.deviceID ;
          let markup = "<tr id="+ deviceID +"><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
        }

      });

    } else if (registerDeviceNameVal == "register-off-open-window-machine") {
      console.log('开始注册开窗器');

      $.getJSON($SCRIPT_ROOT + '/openwindowmachine', {
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {
        if(data.result == 1) {
          console.log("设备注册成功");
          deviceID = "10.1.1." + data.deviceID ;
          let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
          $('#register-device-address').text(deviceID);
        }

      });
    } else if (registerDeviceNameVal == "register-off-curtain") {
      console.log('开始注册窗帘');
      $.getJSON($SCRIPT_ROOT + '/curtain', {
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {
        if(data.result == 1) {
          console.log("设备注册成功");
          deviceID = "10.1.1." + data.deviceID ;
          let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
          $('#register-device-address').text(deviceID);
        }

      });
    } else if (registerDeviceNameVal == "register-off-smart-plug") {
      console.log('开始注册智能插座');
      $.getJSON($SCRIPT_ROOT + '/smartplug', {
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {
        if(data.result == 1) {
          console.log("设备注册成功");
          deviceID = "10.1.1." + data.deviceID ;
          let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
          $('#register-device-address').text(deviceID);
        }

      });
    } else if (registerDeviceNameVal == "register-off-one-key-switch") {
      console.log('开始注册一键触控开关');
      $.getJSON($SCRIPT_ROOT + '/switch/register', {
        keypanel: 1,
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {

        if(data.result == 1) {
          console.log("设备注册成功");
          let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + data.deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
        }

      });
    }


  });

  /* 点击 管理入口 -> 设备管理 -> 注册/注销 删除设备 */
  $offPlug.on('click', ()=> {
    console.log('点击注销按钮');

    offRegisterDeviceNameVal = $('#register-device-name option:selected').val();
    offRegisterDeviceNameText =  $('#register-device-name option:selected').text();
    offRegisterDeviceRoomVal = $('#register-device-room option:selected').val();
    offRegisterDeviceRoomText =  $('#register-device-room option:selected').text();
    offRegisterDeviceAddress =  $('#off-register-address').val();

    //console.log(registerDeviceNameVal);
    //console.log(registerDeviceNameText);
    //console.log(registerDeviceRoomVal);
    //console.log(registerDeviceRoomText);
    //console.log(offRegisterDeviceAddress);

    if(offRegisterDeviceNameVal == "register-off-two-key-switch") {
      console.log('开始删除二键触控开关');

      $.getJSON($SCRIPT_ROOT + '/switch', {
        keypanel: 2,
        offRegisterDeviceName: offRegisterDeviceNameText,
        offRegisterDeviceRoom: offRegisterDeviceRoomText,
        offRegisterDeviceAddress: offRegisterDeviceAddress,
      }, function(data) {

        if(data.result == 1) {
          console.log("设备删除成功");
          //let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + data.deviceID + "</td></tr>";
          //$("#device-manage-table-add-tbody").append(markup);
        }

      });

    } else if (offRegisterDeviceNameVal == "register-off-open-window-machine") {
      console.log('开始注册开窗器');

      $.getJSON($SCRIPT_ROOT + '/openwindowmachine', {
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {
        if(data.result == 1) {
          console.log("设备注册成功");
          deviceID = "10.1.1." + data.deviceID ;
          let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
          $('#register-device-address').text(deviceID);
        }

      });
    } else if (offRegisterDeviceNameVal == "register-off-curtain") {
      console.log('开始注册窗帘');
      $.getJSON($SCRIPT_ROOT + '/curtain', {
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {
        if(data.result == 1) {
          console.log("设备注册成功");
          deviceID = "10.1.1." + data.deviceID ;
          let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
          $('#register-device-address').text(deviceID);
        }

      });
    } else if (offRegisterDeviceNameVal == "register-off-smart-plug") {
      console.log('开始注册智能插座');
      $.getJSON($SCRIPT_ROOT + '/smartplug', {
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {
        if(data.result == 1) {
          console.log("设备注册成功");
          deviceID = "10.1.1." + data.deviceID ;
          let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
          $('#register-device-address').text(deviceID);
        }

      });
    } else if (offRegisterDeviceNameVal == "register-off-one-key-switch") {
      console.log('开始注册一键触控开关');
      $.getJSON($SCRIPT_ROOT + '/switch', {
        keypanel: 1,
        registerDeviceName: registerDeviceNameText,
        registerDeviceRoom: registerDeviceRoomText,
      }, function(data) {

        if(data.result == 1) {
          console.log("设备注册成功");
          let markup = "<tr><td>" + registerDeviceNameText + "</td><td>" + registerDeviceRoomText + "</td><td>" + data.deviceID + "</td></tr>";
          $("#device-manage-table-add-tbody").append(markup);
        }

      });
    }
  });

  /* 点击 智能控制 -> 独立控制 -> 开窗器 页面   */
  $openWindowMachine.on('click', ()=>{
    console.log('点击开窗器');

    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $smartHomeContent.hide();
    $openWindowMachineContent.show();


    /* 开窗器页面初始化 */
    let windowToggle = $openWindowToggleBar.val();
    $openWindowToggleBarValue.text(windowToggle + '%');
    if (windowToggle < 10) {
      let leftOffSet = 8 + 2.67 * windowToggle;
      leftOffSetVal = leftOffSet + 'px';
      $openWindowToggleBarValue.css('left', leftOffSetVal);
    } else if (windowToggle == 100) {
      let leftOffSet = 2.67 * windowToggle;
      leftOffSetVal = leftOffSet + 'px';
      $openWindowToggleBarValue.css('left', leftOffSetVal);
    } else {
      let leftOffSet = 4 + 2.67 * windowToggle;
      leftOffSetVal = leftOffSet + 'px';
      $openWindowToggleBarValue.css('left', leftOffSetVal);
    }

    $('#open-window-machine-label-one').nextAll().remove();

    /* 获取数据库中所有开窗器 */
    $.getJSON($SCRIPT_ROOT + '/openwindowmachine/getall', {
      deviceType: 10,
    }, function(data) {
      console.log(data.result);
      let openWindowMachineAddress = JSON.parse(data.result);
      for (let i = 0; i < openWindowMachineAddress.length; i ++) {
        //console.log(openWindowMachineAddress[i]);
        idVal = "open-window-machine-address" + openWindowMachineAddress[i];
        let markup = "<div id="+  idVal +" class='left-side-buttom' onclick='get_open_window_machine_address("+ openWindowMachineAddress[i]  +")'><span class='left-side-text-label'>"+ "10.1.1." + openWindowMachineAddress[i] +"</span></div>";
        $('#open-window-machine-label-one').after(markup);
      }

    });

  });

  /* 点击 智能控制 -> 独立控制 -> 窗帘   */
  $curtain.on('click', ()=>{
    console.log('点击打开窗帘页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $smartCurtainContent.show();

    /* 窗帘页面初始化信息 */
    let curtainToggle = $curtainToggleBar.val();
    let leftOffSet = 0;

    $curtainToggleBarValue.text(curtainToggle + '%');
    if (curtainToggle < 10) {
      leftOffSet = 126 + 2.67 * curtainToggle;
      leftOffSetVal = leftOffSet + 'px';
      $curtainToggleBarValue.css('left', leftOffSetVal);
    } else if (curtainToggle == 100) {
      leftOffSet = 118 + 2.67 * curtainToggle;
      leftOffSetVal = leftOffSet + 'px';
      $curtainToggleBarValue.css('left', leftOffSetVal);
    } else {
      leftOffSet =  120 + 2.67 * curtainToggle;
      leftOffSetVal = leftOffSet + 'px';
      $curtainToggleBarValue.css('left', leftOffSetVal);
    }

    $('#curtain-label-one').nextAll().remove();

    /* 获取数据库中所有窗帘 */
    $.getJSON($SCRIPT_ROOT + '/curtain/getall', {
      deviceType: 11,
    }, function(data) {
      console.log(data.result);
      let curtainAddress = JSON.parse(data.result);
      for (let i = 0; i < curtainAddress.length; i ++) {
        //console.log(openWindowMachineAddress[i]);
        idVal = "curtain-address" + curtainAddress[i];
        let markup = "<div id="+  idVal +" class='left-side-buttom' onclick='get_curtain_address("+ curtainAddress[i]  +")'><span class='left-side-text-label'>"+ "10.1.1." + curtainAddress[i] +"</span></div>";
        $('#curtain-label-one').after(markup);
      }

    });
  });

  /* 点击 智能窗帘 全开 */
  $curtainOpenFull.on('click', ()=>{
    console.log('点击 智能窗帘 全开');
    console.log(currentCurtainAddress);

    $curtainToggleBar.val(100);
    preImgPath = $curtainImg[0].src;
    newImgPath = "/static/img/smart_curtain/20.jpg";
    if (preImgPath != newImgPath) {
      $curtainImg.attr("src",newImgPath);
    }
    $curtainToggleBarValue.text(100 + '%');
    $curtainToggleBarValue.css('left', '387px');
    /* 开窗器 全开 */
    $.getJSON($SCRIPT_ROOT + '/curtain/opencurtainfull', {
      curtainAddress: currentCurtainAddress,
    }, function(data) {
      console.log(data.result);
    });

  });

  $curtainCloseFull.on('click', ()=>{
    console.log('点击 智能窗帘 全关');
    console.log(currentCurtainAddress);

    $curtainToggleBar.val(0);
    preImgPath = $curtainImg[0].src;
    newImgPath = "/static/img/smart_curtain/01.jpg";
    if (preImgPath != newImgPath) {
      $curtainImg.attr("src",newImgPath);
    }
    $curtainToggleBarValue.text(0 + '%');
    $curtainToggleBarValue.css('left', '126px');

    /* 开窗器 全开 */
    $.getJSON($SCRIPT_ROOT + '/curtain/closecurtainfull', {
      curtainAddress: currentCurtainAddress,
    }, function(data) {
      console.log(data.result);
    });
  });

  $curtainStop.on('click', ()=>{
    console.log('点击窗帘 暂停');
    console.log(currentCurtainAddress);

    /* 开窗器 全关 */
    $.getJSON($SCRIPT_ROOT + '/curtain/stop', {
      curtainAddress: currentCurtainAddress,
    }, function(data) {
      console.log(data.result);

      $.getJSON($SCRIPT_ROOT + '/curtain/getcurtain', {
        curtainAddress: currentCurtainAddress,
      }, function(data) {
        console.log(data.result);
        let num = parseInt(data.result/5);
        px = 126 + 2.67 * data.result + 'px';
        $curtainToggleBar.val(data.result);
        preImgPath = $curtainImg[0].src;
        if (num < 10) {
          newImgPath = "/static/img/smart_curtain/0"+ num +".jpg";
        } else {
          newImgPath = "/static/img/smart_curtain/"+ num +".jpg";
        }

        if (preImgPath != newImgPath) {
          $curtainImg.attr("src",newImgPath);
        }

        $curtainToggleBarValue.css('left', px);
        $curtainToggleBarValue.text(data.result + '%');

      });


    });
  });

  $curtainReverse.on('click', ()=>{
    console.log('点击窗帘 反转');
    console.log(currentCurtainAddress);

    /* 开窗器 全关 */
    $.getJSON($SCRIPT_ROOT + '/curtain/reverse', {
      curtainAddress: currentCurtainAddress,
    }, function(data) {
      console.log(data.result);
    });
  });

  $curtainCheck.on('click', ()=>{
    console.log('点击窗帘 校准');
    console.log(currentCurtainAddress);

    /* 开窗器 全关 */
    $.getJSON($SCRIPT_ROOT + '/curtain/check', {
      curtainAddress: currentCurtainAddress,
    }, function(data) {
      console.log(data.result);
    });
  });

  var pm = 0;
  var co = 0;
  var co2 = 0;
  var hcho = 0;
  var temperature = 0;
  var humidity = 0;
  var tvoc = 0;


  $('#air-box-data-refersh').on('click', ()=>{
    console.log('点击刷新页面');

    function getAirBoxValue() {
      console.log('获取空气盒子数据');
      /* 获取数据库中所有窗帘 */
      $.getJSON($SCRIPT_ROOT + '/airbox/getdata', {
        deviceType: 30,
      }, function(data) {
        console.log(data.result);
        if (data.result) {
          console.log('PM Value' + data.pm);
          pm = data.pm;
          co = data.co;
          co2=data.co2;
          hcho = data.hcho;
          temperature = data.temperature;
          humidity = data.humidity;
          tvoc = data.tvoc;
        }

      });
    }
    getAirBoxValue();

    $('#pmValue').text(pm);
    $('#coValue').text(co);
    $('#co2Value').text(co2);
    $('#hchoValue').text(hcho);
    //$('#pmValue').text(40);
    //$('#coValue').text(5);
    //$('#co2Value').text(70);
    //$('#hchoValue').text(0);
    //$('#temperatureValue').text(temperature);
    $('#temperatureValue').text(93.6);
    //$('#humidityValue').text(humidity);
    $('#humidityValue').text(24.2);
    //$('#tvocValue').text(tvoc);
    $('#tvocValue').text(3);

  });


  /* 点击 智能控制 -> 独立控制 -> 空气盒子   */
  $airBox.on('click', ()=>{
    console.log('点击打开空气盒子');

    /* 显示 智能控制 标签*/
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.show();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();

    function getAirBoxValue() {
      console.log('获取空气盒子数据');
      /* 获取数据库中所有窗帘 */
      $.getJSON($SCRIPT_ROOT + '/airbox/getdata', {
        deviceType: 30,
      }, function(data) {
        console.log(data.result);
        if (data.result) {
          console.log('PM Value' + data.pm);
          pm = data.pm;
          co = data.co;
          co2=data.co2;
          hcho = data.hcho;
          temperature = data.temperature;
          humidity = data.humidity;
          tvoc = data.tvoc;
        }

      });
    }
    getAirBoxValue();

    //setInterval(getAirBoxValue(),2 * 1000);

    $('#pmValue').text(pm);
    $('#coValue').text(co);
    $('#co2Value').text(co2);
    $('#hchoValue').text(hcho);
    //$('#pmValue').text(40);
    //$('#coValue').text(5);
    //$('#co2Value').text(70);
    //$('#hchoValue').text(0);
    //$('#temperatureValue').text(temperature);
    $('#temperatureValue').text(93.6);
    //$('#humidityValue').text(humidity);
    $('#humidityValue').text(24.2);
    //$('#tvocValue').text(tvoc);
    $('#tvocValue').text(3);

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('air-box-radar-chart'));

    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    var dataBJ = [
        [55,9,56,0.46,18,6,1],
        [25,11,21,0.65,34,9,2],
        [56,7,63,0.3,14,5,3],
        [33,7,29,0.33,16,6,4],
        [42,24,44,0.76,40,16,5],
        [82,58,90,1.77,68,33,6],
        [74,49,77,1.46,48,27,7],
        [78,55,80,1.29,59,29,8],
        [267,216,280,4.8,108,64,9],
        [185,127,216,2.52,61,27,10],
        [39,19,38,0.57,31,15,11],
        [41,11,40,0.43,21,7,12],
        [64,38,74,1.04,46,22,13],
        [108,79,120,1.7,75,41,14],
        [108,63,116,1.48,44,26,15],
        [33,6,29,0.34,13,5,16],
        [94,66,110,1.54,62,31,17],
        [186,142,192,3.88,93,79,18],
        [57,31,54,0.96,32,14,19],
        [22,8,17,0.48,23,10,20],
        [39,15,36,0.61,29,13,21],
        [94,69,114,2.08,73,39,22],
        [99,73,110,2.43,76,48,23],
        [31,12,30,0.5,32,16,24],
        [42,27,43,1,53,22,25],
        [154,117,157,3.05,92,58,26],
        [234,185,230,4.09,123,69,27],
        [160,120,186,2.77,91,50,28],
        [134,96,165,2.76,83,41,29],
        [52,24,60,1.03,50,21,30],
        [46,5,49,0.28,10,6,31]
    ];

    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    option = {
        backgroundColor:  '',
        title: {
            text: '空气质量',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
            indicator: [
              {name: 'PM2.5', max: 800},
              {name: '甲醛', max: 500},
              {name: 'TVOC', max: 500},
              {name: 'CO', max: 20},
              {name: 'CO2', max: 500},
              {name: '湿度', max: 100},
              {name: '温度', max: 70}
            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: '家庭质量',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#B3E4A1'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            },
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

  });

  /* 点击 管理入口 -> 独立控制 -> 智能插座   */
  $smartPlug.on('click', ()=>{
    console.log('点击开智能插座');

    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.show();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();


    $('#smart-plug-label-one').nextAll().remove();

    /* 获取数据库中所有窗帘 */
    $.getJSON($SCRIPT_ROOT + '/smartplug/getall', {
      deviceType: 30,
    }, function(data) {
      console.log(data.result);
      let smartPlugAddress = JSON.parse(data.result);
      for (let i = 0; i < smartPlugAddress.length; i ++) {
        //console.log(openWindowMachineAddress[i]);
        idVal = "smart-plug-address" + smartPlugAddress[i];
        let markup = "<div id="+  idVal +" class='left-side-buttom' onclick='get_smart_plug_address("+ smartPlugAddress[i]  +")'><span class='left-side-text-label'>"+ "10.1.1." + smartPlugAddress[i] +"</span></div>";
        $('#smart-plug-label-one').after(markup);
      }

    });

  });

  /* 点击 管理入口 -> 独立控制 -> 调光灯   */
  $dimmingLamp.on('click', ()=>{
    console.log('点击打开调光灯');

    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $dimmingLampContent.show();

    /* 调光灯页面初始化 */
    let dimmingLampToggle = dimmingLampToggleBar.val();

    $dimmingLampToggleBarText.text(dimmingLampToggle + '%');
    let leftOffSet = 0;

    if (dimmingLampToggle < 10) {
      leftOffSet = 128 + 2.67 * dimmingLampToggle;
      leftOffSetVal = leftOffSet + 'px';
      $dimmingLampToggleBarText.css('left', leftOffSetVal);
    } else if (dimmingLampToggle == 100) {
      leftOffSet = 116 + 2.67 * dimmingLampToggle;
      leftOffSetVal = leftOffSet + 'px';
      $dimmingLampToggleBarText.css('left', leftOffSetVal);
    } else {
      leftOffSet =  123 + 2.67 * dimmingLampToggle;
      leftOffSetVal = leftOffSet + 'px';
      $dimmingLampToggleBarText.css('left', leftOffSetVal);
    }



  });

  /* 点击设置向导 -> 用户设置 */
  $setGuideUserSetup.on('click', ()=>{
    console.log('点击设置向导 -> 用户设置');
    /* 标题显示设置向导 */
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.hide();
    $setGuideOn.show();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.show();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
    $voiceSetupContent.hide();
    $networkSetupContent.hide();
    $smartHomeContent.hide();

  });

  /* 点击返回 -> 情景控制 主界面 */
  sceneControlMySceneChildBack.on('click', ()=>{
    console.log('点击返回 -> 情景控制 主界面');

    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $smartHomeContent.hide();
    $sceneControlMySceneChildContent.hide();
    $sceneControlContent.show();

  });

  /* 点击返回 -> 智能控制 */
  $sceneControlContentBack.on('click', ()=>{

    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $smartHomeContent.show();
  });

  /* 点击回家模式 */
  $sceneControlBackHomeMode.on('click', ()=>{
    console.log('点击回家模式');
  });

  /* 点击晚餐模式 */
  $sceneControlDinnerMode.on('click', ()=>{
    console.log('点击晚餐模式');
  });

  /* 点击离家模式 */
  $sceneControlLeaveHomeMode.on('click', ()=>{
    console.log('点击离家模式');
  });

  /* 点击雨天模式 */
  $sceneControlRainMode.on('click', ()=>{
    console.log('点击雨天模式');
  });

  /* 点击睡觉模式 */
  $sceneControlSleepMode.on('click', ()=>{
    console.log('点击睡觉模式');
  });

  /* 点击自定义模式 */
  $sceneControlCustomMode.on('click', ()=>{
    console.log('点击自定义模式');
  });

  /* 点击返回 */
  $deviceManageContentBack.on('click', ()=> {
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $smartHomeContent.hide();
    $userSetupContent.hide();
    $manageEntryContent.show();
  });

  $openWindowMachineContentBack.on('click', ()=>{
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  $smartCurtainContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  $touchSwitchContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  $airBoxContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  $smartPlugContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  /* 点击家庭管理页面 */
  $manageEntryHomeManage.on('click', ()=> {
    console.log('点击家庭管理页面 ');

    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $homeManageContent.show();

  });

  /* 点击家庭管理页面 -> 左侧家庭成员按钮 */
  $homeManageHomeMamberText.on('click', ()=>{
    console.log('点击家庭管理页面 -> 左侧家庭成员按钮 ');
    $homeManageHomeInformation.hide();
    $homeManageHomeRoomList.hide();
    $homeManageHomeMember.show();
  });

  /* 点击家庭管理页面 -> 左侧房间列表按钮 */
  $homeManageHomeListText.on('click', ()=>{
    console.log('点击家庭管理页面 -> 左侧房间列表按钮 ');
    $homeManageHomeInformation.hide();
    $homeManageHomeMember.hide();
    $homeManageHomeRoomList.show();
  });

  $homeManageContentBack.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.show();
  });

  /* 点击家管理入口 -> 自由组合页面 */
  $manageEntryFreeGroup.on('click', ()=>{

    console.log('点击家管理入口 -> 自由组合页面 ');

    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $smartHomeContent.hide();
    $freeGroupContent.show();
  });

  /* 点击独立控制 返回按钮 */
  $independantControlContentBack.on('click', ()=>{
    console.log("点击独立控制 返回按钮");
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $smartHomeContent.show();
  });


  function getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
              + " " + date.getHours() + seperator2 + date.getMinutes()
              + seperator2 + date.getSeconds();
      return currentdate;
  }


  /* 监听 开窗器 自由组合的值的变动 */
  $openWindowToggleBar.on('input propertychange', ()=>{

    // 开窗器 状态
    /*
    $.getJSON($SCRIPT_ROOT + '/openwindowmachine/getwindow', {
      openWinowMachineAddress: currentOpenWindowMachineAddress,
    }, function(data) {
      console.log(data.result);
      var start = data.result;
    });
    */

    console.log($openWindowToggleBar.val());
    let windowToggle = $openWindowToggleBar.val();
    $openWindowToggleBarValue.text(windowToggle + '%');

    if (windowToggle < 10) {
      let leftOffSet = 8 + 2.67 * windowToggle;
      leftOffSetVal = leftOffSet + 'px';
      $openWindowToggleBarValue.css('left', leftOffSetVal);
    } else if (windowToggle == 100) {
      let leftOffSet = 2.67 * windowToggle;
      leftOffSetVal = leftOffSet + 'px';
      $openWindowToggleBarValue.css('left', leftOffSetVal);
    } else {
      let leftOffSet = 4 + 2.67 * windowToggle;
      leftOffSetVal = leftOffSet + 'px';
      $openWindowToggleBarValue.css('left', leftOffSetVal);
    }

    if (windowToggle == 0) {
      console.log($windowImg[0].src);
      preImgPath = $windowImg[0].src;
      newImgPath = "/static/img/open_window_img/1.jpg";
      if (preImgPath != newImgPath) {
        $windowImg.attr("src",newImgPath);
      }
      $openWindowToggleBarValue.css('left', '4px');
    } else if(windowToggle <= 5) {
      preImgPath = $windowImg[0].src;
      newImgPath = "/static/img/open_window_img/2.jpg";
      if (preImgPath != newImgPath) {
        $windowImg.attr("src",newImgPath);
      }
      $openWindowToggleBarValue.css('left', '18px');
    }else if(windowToggle <= 10) {
      $windowImg.attr("src","/static/img/open_window_img/3.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '30px');
    }else if(windowToggle <= 15) {
      $windowImg.attr("src","/static/img/open_window_img/4.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '43px');
    }else if(windowToggle <= 20) {
      $windowImg.attr("src","/static/img/open_window_img/5.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '56px');
    }else if(windowToggle <= 25) {
      $windowImg.attr("src","/static/img/open_window_img/6.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '70px');
    }else if(windowToggle <= 30) {
      $windowImg.attr("src","/static/img/open_window_img/7.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '83px');
    }else if(windowToggle <= 35) {
      $windowImg.attr("src","/static/img/open_window_img/8.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '97px');
    }else if(windowToggle <= 40) {
      $windowImg.attr("src","/static/img/open_window_img/9.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '110px');
    }else if(windowToggle <= 45) {
      $windowImg.attr("src","/static/img/open_window_img/10.jpg");
      $openWindowToggleBarValue.css('left', '122px');
      console.log($windowImg[0].src);
    }else if(windowToggle <= 50) {
      $windowImg.attr("src","/static/img/open_window_img/11.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '136px');
    }else if(windowToggle <= 55) {
      $windowImg.attr("src","/static/img/open_window_img/12.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '150px');
    }else if(windowToggle <= 60) {
      $windowImg.attr("src","/static/img/open_window_img/12.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '163px');
    }else if(windowToggle <= 65) {
      $windowImg.attr("src","/static/img/open_window_img/13.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '176px');
    }else if(windowToggle <= 70) {
      $windowImg.attr("src","/static/img/open_window_img/14.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '190px');
    }else if(windowToggle <= 75) {
      $windowImg.attr("src","/static/img/open_window_img/15.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '203px');
    }else if(windowToggle <= 80) {
      $windowImg.attr("src","/static/img/open_window_img/16.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '216px');
    }else if(windowToggle <= 85) {
      $windowImg.attr("src","/static/img/open_window_img/17.jpg");
      console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '229px');
    }else if(windowToggle <= 90) {
      $windowImg.attr("src","/static/img/open_window_img/18.jpg");
      //console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '242px');
    }else if(windowToggle <= 95) {
      $windowImg.attr("src","/static/img/open_window_img/19.jpg");
      //console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '255px');
    }else if(windowToggle <= 100) {
      $windowImg.attr("src","/static/img/open_window_img/20.jpg");
      //console.log($windowImg[0].src);
      $openWindowToggleBarValue.css('left', '270px');
    }

  });

  /* 开窗器 鼠标松开 */
  $openWindowToggleBar.on('mouseup', ()=>{
    console.log('滑动松开');
    console.log($openWindowToggleBar.val());
    let windowToggle = $openWindowToggleBar.val();

    /* 设置 开窗器 自由组合的值的变动 当前百分比 */
    $.getJSON($SCRIPT_ROOT + '/openwindowmachine/freewindow', {
      openWinowMachineAddress: currentOpenWindowMachineAddress,
      freeToggleVal: windowToggle,
    }, function(data) {
      if(data.result != -1) {
        console.log('成功');
      }
    });
  });

  $roomControlContentBack.on('click', ()=> {
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $smartHomeContent.show();

  });

  $dimmingLampToggleBar.on('input propertychange', ()=>{
    console.log(dimmingLampToggleBar.val());
    let dimmingLampToggle = dimmingLampToggleBar.val();

    $dimmingLampToggleBarText.text(dimmingLampToggle + '%');
    let leftOffSet = 0;

    if (dimmingLampToggle < 10) {
      leftOffSet = 128 + 2.67 * dimmingLampToggle;
      leftOffSetVal = leftOffSet + 'px';
      $dimmingLampToggleBarText.css('left', leftOffSetVal);
    } else if (dimmingLampToggle == 100) {
      leftOffSet = 116 + 2.67 * dimmingLampToggle;
      leftOffSetVal = leftOffSet + 'px';
      $dimmingLampToggleBarText.css('left', leftOffSetVal);
    } else {
      leftOffSet =  123 + 2.67 * dimmingLampToggle;
      leftOffSetVal = leftOffSet + 'px';
      $dimmingLampToggleBarText.css('left', leftOffSetVal);
    }

  });

  $curtainToggleBar.on('input propertychange', ()=>{
    console.log($curtainToggleBar.val());
    let curtainToggle = $curtainToggleBar.val();
    let leftOffSet = 0;

    $curtainToggleBarValue.text(curtainToggle + '%');
    if (curtainToggle < 10) {
      leftOffSet = 126 + 2.67 * curtainToggle;
      leftOffSetVal = leftOffSet + 'px';
      $curtainToggleBarValue.css('left', leftOffSetVal);
    } else if (curtainToggle == 100) {
      leftOffSet = 118 + 2.67 * curtainToggle;
      leftOffSetVal = leftOffSet + 'px';
      $curtainToggleBarValue.css('left', leftOffSetVal);
    } else {
      leftOffSet =  120 + 2.67 * curtainToggle;
      leftOffSetVal = leftOffSet + 'px';
      $curtainToggleBarValue.css('left', leftOffSetVal);
    }

    let preImgPath, newImgPath;
    if (curtainToggle == 0) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/01.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    } else if(curtainToggle == 5) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/02.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 10) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/03.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 15) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/04.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 25) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/05.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 30) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/06.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 35) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/07.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 40) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/08.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 45) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/09.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 50) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/10.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 55) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/11.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 60) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/12.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 65) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/13.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 70) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/14.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 75) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/15.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 80) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/16.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 85) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/17.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 90) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/18.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 95) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/19.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }else if(curtainToggle == 100) {
      preImgPath = $curtainImg[0].src;
      newImgPath = "/static/img/smart_curtain/20.jpg";
      if (preImgPath != newImgPath) {
        $curtainImg.attr("src",newImgPath);
      }
    }


  });

  $curtainToggleBar.on('mouseup', ()=>{
    console.log("滑动松开");

    console.log($curtainToggleBar.val());
    let curtainToggle = $curtainToggleBar.val();

    /* 窗帘 滑动 */
    $.getJSON($SCRIPT_ROOT + '/curtain/free', {
      curtainAddress: currentCurtainAddress,
      freeToggleVal: curtainToggle,
    }, function(data) {
      console.log(data.result);
    });

  });

  $dimmingLampContentBack.on('click', ()=>{
    console.log('返回独立控制页面');
    $smartControl.hide();
    $smartControlOn.show();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $smartHomeContent.hide();
    $independantControlContent.show();
  });

  /* 点击管理入口 -> 情景管理 页面 */
  $manageEntrySceneManage.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 情景管理 页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.hide();
    $sceneManageContent.show();


    $('#scene-manage-label-one').nextAll().remove();

    /* 获取数据库中所有情景管理的名称 */
    $.getJSON($SCRIPT_ROOT + '/scene/getall', {
      deviceType: 10,
    }, function(data) {
      console.log(data.result);
      let sceneName = JSON.parse(data.result);
      for (let i = 0; i < sceneName.length; i++) {
        console.log(sceneName[i]);
        idVal = "scene-mamage-name" + i;
        let markup = "<div id="+  idVal +" class='left-side-buttom' onclick='get_scene_name("+ "\"" + sceneName[i] + "\"" +")'><span class='left-side-text-label'>"+ sceneName[i] +"</span></div>";
        $('#scene-manage-label-one').after(markup);
      }

    });

  });

  /* 返回管理入口页面 */
  $sceneManageContentBack.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.show();
  });

  /* 返回管理入口页面 */
  $deviceClassficationContentBack.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.show();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
    $smartHomeContent.hide();
  });

  $manageEntryDeviceClass.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.show();
    $smartHomeContent.hide();
  });

  $freeGroupListText.on('click', ()=>{
    $freeGroupList.show();
    $freeGroupAdd.hide();
  });

  $freeGroupAddText.on('click', ()=>{
    $freeGroupList.hide();
    $freeGroupAdd.show();
  });

  $freeGroupContentBack.on('click', ()=>{
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.hide();
    $manageEntryOn.show();
    $setGuide.show();
    $setGuideOn.hide();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
    $smartHomeContent.hide();
    $manageEntryContent.show();
  });

  /* 点击房间控制 -> 房间描述 */
  $roomControlRoomDescText.on('click', ()=>{
    console.log('点击房间控制 -> 房间描述');

    $roomControlLeftSideButtomOne.show();
    $roomControlLeftSideButtomOneOn.hide();
    $roomControlLeftSideButtomTwo.hide();
    $roomControlLeftSideButtomTwoOn.show();

    $roomControlMyRoom.hide();
    $roomControlRoomDesc.show();

  });

  /* 点击房间控制 -> 我的房间 */
  $roomControlMyRoomText.on('click', ()=>{
    console.log('点击房间控制 -> 我的房间');

    $roomControlLeftSideButtomOne.hide();
    $roomControlLeftSideButtomOneOn.show();
    $roomControlLeftSideButtomTwo.show();
    $roomControlLeftSideButtomTwoOn.hide();

    $roomControlMyRoom.show();
    $roomControlRoomDesc.hide();

  });

  /*点击开窗器 全开*/
  $('#open-window-machine-open-full').on('click', ()=>{

    console.log('点击开窗器 全开');
    console.log(currentOpenWindowMachineAddress);

    let windowToggle = $openWindowToggleBar.val();

    /*
    switch (parseInt(windowToggle/5)) {
      case 0:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/1.jpg");
          $openWindowToggleBarValue.css('left', '4px');
          console.log(getNowFormatDate());
        }, 1000 );
      case 1:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/2.jpg");
          $openWindowToggleBarValue.css('left', '18px');
        }, 1000 );
      case 2:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/3.jpg");
          $openWindowToggleBarValue.css('left', '30px');
        }, 1000 );
      case 3:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/4.jpg");
          $openWindowToggleBarValue.css('left', '43px');
        }, 1000 );
      case 4:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/5.jpg");
          $openWindowToggleBarValue.css('left', '56px');
        }, 1000 );
      case 5:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/6.jpg");
          $openWindowToggleBarValue.css('left', '70px');
        }, 1000 );
      case 6:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/7.jpg");
          $openWindowToggleBarValue.css('left', '83px');
        }, 1000 );
      case 7:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/8.jpg");
          $openWindowToggleBarValue.css('left', '97px');
        }, 1000 );
      case 8:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/9.jpg");
          $openWindowToggleBarValue.css('left', '110px');
        }, 1000 );
      case 9:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/10.jpg");
          $openWindowToggleBarValue.css('left', '122px');
        }, 1000 );
      case 10:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/11.jpg");
          $openWindowToggleBarValue.css('left', '136px');
        }, 1000 );
      case 11:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/12.jpg");
          $openWindowToggleBarValue.css('left', '150px');
        }, 1000 );
      case 12:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/13.jpg");
          $openWindowToggleBarValue.css('left', '163px');
        }, 1000 );
      case 13:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/14.jpg");
          $openWindowToggleBarValue.css('left', '176px');
        }, 1000 );
        console.log(getNowFormatDate());
      case 14:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/15.jpg");
          $openWindowToggleBarValue.css('left', '190px');
        }, 1000 );
      case 15:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/16.jpg");
          $openWindowToggleBarValue.css('left', '203px');
        }, 1000 );
      case 16:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/17.jpg");
          $openWindowToggleBarValue.css('left', '216px');
        }, 1000 );
      case 17:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/18.jpg");
          $openWindowToggleBarValue.css('left', '229px');
        }, 1000 );
      case 18:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/19.jpg");
          $openWindowToggleBarValue.css('left', '242px');
        }, 1000 );
      case 19:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/19.jpg");
          $openWindowToggleBarValue.css('left', '255px');
        }, 1000 );
      case 20:
        setTimeout( function(){
          $windowImg.attr("src","/static/img/open_window_img/20.jpg");
          $openWindowToggleBarValue.css('left', '270px');
          $openWindowToggleBar.val(100)
          $openWindowToggleBarValue.text(100 + '%');
        }, 1000 );
        console.log(getNowFormatDate());
        break;
      default:
    }
    */

    $windowImg.attr("src","/static/img/open_window_img/20.jpg");
    $openWindowToggleBarValue.css('left', '270px');
    $openWindowToggleBar.val(100)
    $openWindowToggleBarValue.text(100 + '%');


    /* 开窗器 全开 */
    $.getJSON($SCRIPT_ROOT + '/openwindowmachine/openwindowfull', {
      openWinowMachineAddress: currentOpenWindowMachineAddress,
    }, function(data) {
      console.log(data.result);

    });

  });

  /*点击开窗器 全关*/
  $('#open-window-machine-close-full').on('click', ()=>{

    console.log('点击开窗器 全关');
    console.log(currentOpenWindowMachineAddress);

    $windowImg.attr("src","/static/img/open_window_img/1.jpg");
    $openWindowToggleBarValue.css('left', '4px');
    $openWindowToggleBar.val(0)
    $openWindowToggleBarValue.text(0 + '%');

    /* 开窗器 全关 */
    $.getJSON($SCRIPT_ROOT + '/openwindowmachine/closewindowfull', {
      openWinowMachineAddress: currentOpenWindowMachineAddress,
    }, function(data) {
      console.log(data.result);
    });

  });

  /*点击开窗器 暂停*/
  $('#stop-open-window-machine').on('click', ()=>{

    console.log('点击开窗器 暂停');
    console.log(currentOpenWindowMachineAddress);

    /* 开窗器 暂停 */
    $.getJSON($SCRIPT_ROOT + '/openwindowmachine/stopwindow', {
      openWinowMachineAddress: currentOpenWindowMachineAddress,
    }, function(data) {
      console.log(data.result);

      $.getJSON($SCRIPT_ROOT + '/openwindowmachine/getwindow', {
        openWinowMachineAddress: currentOpenWindowMachineAddress,
      }, function(data) {
        console.log(data.result);
        var num = parseInt(data.result/5);
        var px = 4 + num * 13 + 'px';

        $windowImg.attr("src","/static/img/open_window_img/"+ num +".jpg");
        $openWindowToggleBarValue.css('left', px);
        $openWindowToggleBar.val(data.result)
        $openWindowToggleBarValue.text(data.result + '%');

      });

    });

  });

  /*点击开窗器 反转*/
  $('#reverse-open-window-machine').on('click', ()=>{

    console.log('点击开窗器 反转');
    console.log(currentOpenWindowMachineAddress);

    /* 开窗器 全关 */
    $.getJSON($SCRIPT_ROOT + '/openwindowmachine/reversewindow', {
      openWinowMachineAddress: currentOpenWindowMachineAddress,
    }, function(data) {
      console.log(data.result);
    });

  });

  /*点击开窗器 校准*/
  $('#check-open-window-machine').on('click', ()=>{

    console.log('点击开窗器 校准');
    console.log(currentOpenWindowMachineAddress);

    /* 开窗器 全关 */
    $.getJSON($SCRIPT_ROOT + '/openwindowmachine/checkwindow', {
      openWinowMachineAddress: currentOpenWindowMachineAddress,
    }, function(data) {
      console.log(data.result);
    });
  });


  /* 点击 管理入口->情景管理-> 删除按钮 */
  $('#scene-action-one-delete1').on('click', ()=>{
    console.log('删除一行');
    
    
  });

  $('#scene-action-one-add1').on('click', ()=>{
    console.log('添加一行');

  });
  
  /* 点击 设置向导 -> 网络设置 */
  $setGuideNetworkSetup.on('click', ()=>{
    console.log('点击网络设置');
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.hide();
    $setGuideOn.show();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
	$voiceSetupContent.hide();
	$networkSetupContent.show();
    $smartHomeContent.hide();	  
	  
  });

  /* 点击设置向导 -> 网络设置 -> 返回 */
  $networkSetupContentBack.on('click', ()=>{
      $smartControl.show();
      $smartControlOn.hide();
      $manageEntry.show();
      $manageEntryOn.hide();
      $setGuide.hide();
      $setGuideOn.show();
      $other.show();
      $otherOn.hide();

      /* 独立控制页面 */
      $independantControlContent.hide();
      $touchSwitchContent.hide();
      $deviceManageContent.hide();
      $manageEntryContent.hide();
      $setGuideContent.show();
      $otherContent.hide();
      $independantControlContent.hide();
      $touchSwitchContent.hide();
      $smartPlugContent.hide();
      $smartCurtainContent.hide();
      $dimmingLampContent.hide();
      $airBoxContent.hide();
      $deviceManageContent.hide();
      $sceneControlContent.hide();
      $roomControlContent.hide();
      $userSetupContent.hide();
      $sceneControlMySceneChildContent.hide();
      $openWindowMachineContent.hide();
      $homeManageContent.hide();
      $freeGroupContent.hide();
      $sceneManageContent.hide();
      $deviceClassficationContent.hide();
  	  $voiceSetupContent.hide();
  	  $networkSetupContent.hide();
      $smartHomeContent.hide();  	
  });
  
  /* 点击设置向导 -> 网络设置 -> 开启关闭WLAN */
  $('#wireless-switch-toggle').on('click', ()=>{
	  console.log('点击WLAN 开');
	  $('#wireless-switch-toggle').hide();
	  $('#wireless-switch-toggle-on').show();
	  $('#wireless-wlan-switch-bar').attr('src', '/static/img/wlan_switch_bar_on.png');
  });
  
  /* 点击设置向导 -> 网络设置 -> 关闭关闭WLAN */
  $('#wireless-switch-toggle-on').on('click', ()=>{
	  console.log('点击WLAN 关');
	  $('#wireless-switch-toggle-on').hide();
	  $('#wireless-switch-toggle').show();
	  $('#wireless-wlan-switch-bar').attr('src', '/static/img/wlan_switch_bar.png');
  });

  /* 点击设置向导 -> 网络设置 -> 自动连接 开*/
  $('#wireless-info-label-switch').on('click', ()=>{
    console.log('点击自动连接 开');
    $('#wireless-info-label-switch').hide();
    $('#wireless-info-label-switch-on').show();
    $('#wireless-info-label-bar').attr('src', '/static/img/wlan_switch_bar_on.png');
  });

  /* 点击设置向导 -> 网络设置 -> 自动连接 关*/
  $('#wireless-info-label-switch-on').on('click', ()=>{
    console.log('点击自动连接 关');
    $('#wireless-info-label-switch-on').hide(); 
    $('#wireless-info-label-switch').show();
    $('#wireless-info-label-bar').attr('src', '/static/img/wlan_switch_bar.png');
  });  
  
  /* 点击 设置向导 -> 声音设置 */
  $voiceSetup.on('click', ()=>{
    console.log('点击声音设置');
    
	$smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.hide();
    $setGuideOn.show();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.hide();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
    $smartHomeContent.hide();
	$voiceSetupContent.show();
  });
  
  /* 点击 设置向导 -> 声音设置 -> 返回 */
  $voiceSetupContentBack.on('click', ()=>{
    console.log('点击声音设置->返回');
    
	  $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.hide();
    $setGuideOn.show();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.show();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
    $smartHomeContent.hide();
	  $voiceSetupContent.hide();
  });


  $('#user-setup-content-back').on('click', ()=>{
    console.log('点击用户设置->返回');
    
    $smartControl.show();
    $smartControlOn.hide();
    $manageEntry.show();
    $manageEntryOn.hide();
    $setGuide.hide();
    $setGuideOn.show();
    $other.show();
    $otherOn.hide();

    /* 独立控制页面 */
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $deviceManageContent.hide();
    $manageEntryContent.hide();
    $setGuideContent.show();
    $otherContent.hide();
    $independantControlContent.hide();
    $touchSwitchContent.hide();
    $smartPlugContent.hide();
    $smartCurtainContent.hide();
    $dimmingLampContent.hide();
    $airBoxContent.hide();
    $deviceManageContent.hide();
    $sceneControlContent.hide();
    $roomControlContent.hide();
    $userSetupContent.hide();
    $sceneControlMySceneChildContent.hide();
    $openWindowMachineContent.hide();
    $homeManageContent.hide();
    $freeGroupContent.hide();
    $sceneManageContent.hide();
    $deviceClassficationContent.hide();
    $smartHomeContent.hide();
    $voiceSetupContent.hide();
  });


});


function get_open_window_machine_address(deviceAddress) {

  greenBackGroundImg = "url(/static/img/left_side_bar_green.png)";
  blueBackGroundImg =  "url(/static/img/left_side_bar_blue.png)";

  /* 获取数据库中所有开窗器 */
  $.getJSON($SCRIPT_ROOT + '/openwindowmachine/getall', {
    deviceType: 10,
  }, function(data) {
    let openWindowMachineAddress = JSON.parse(data.result);
    for (let i = 0; i < openWindowMachineAddress.length; i ++) {
      selector = '#open-window-machine-address' + openWindowMachineAddress[i];
      if (deviceAddress == openWindowMachineAddress[i]) {
        console.log(selector);
        $(selector).css('background-image', greenBackGroundImg);
        currentOpenWindowMachineAddress = deviceAddress;
      } else {
        $(selector).css('background-image', blueBackGroundImg);
      }
    }
  });

}

function get_curtain_address(deviceAddress) {
  console.log(deviceAddress);
  greenBackGroundImg = "url(/static/img/left_side_bar_green.png)";
  blueBackGroundImg =  "url(/static/img/left_side_bar_blue.png)";

  /* 获取数据库中所有开窗器 */
  $.getJSON($SCRIPT_ROOT + '/curtain/getall', {
    deviceType: 11,
  }, function(data) {
    let curtainAddress = JSON.parse(data.result);
    for (let i = 0; i < curtainAddress.length; i ++) {
      selector = '#curtain-address' + curtainAddress[i];
      if (deviceAddress == curtainAddress[i]) {
        console.log(selector);
        $(selector).css('background-image', greenBackGroundImg);
        currentCurtainAddress = deviceAddress;
      } else {
        $(selector).css('background-image', blueBackGroundImg);
      }
    }
  });

}

function get_smart_plug_address(deviceAddress) {
  console.log(deviceAddress);
  greenBackGroundImg = "url(/static/img/left_side_bar_green.png)";
  blueBackGroundImg =  "url(/static/img/left_side_bar_blue.png)";

  /* 获取数据库中所有开窗器 */
  $.getJSON($SCRIPT_ROOT + '/smartplug/getall', {
    deviceType: 30,
  }, function(data) {
    let smartPlugAddress = JSON.parse(data.result);
    for (let i = 0; i < smartPlugAddress.length; i ++) {
      selector = '#smart-plug-address' + smartPlugAddress[i];
      if (deviceAddress == smartPlugAddress[i]) {
        console.log(selector);
        $(selector).css('background-image', greenBackGroundImg);
        currentSmartPlugAddress = deviceAddress;
      } else {
        $(selector).css('background-image', blueBackGroundImg);
      }
    }
  });

}

function get_touch_switch_address(deviceAddress) {
  console.log(deviceAddress);
  greenBackGroundImg = "url(/static/img/left_side_bar_green.png)";
  blueBackGroundImg =  "url(/static/img/left_side_bar_blue.png)";

  /* 获取数据库中所有开窗器 */
  $.getJSON($SCRIPT_ROOT + '/switch/getall', {
    deviceType: 21,
  }, function(data) {
    let touchSwitchPlugAddress = JSON.parse(data.result);
    for (let i = 0; i < touchSwitchPlugAddress.length; i ++) {
      selector = '#touch-switch-address' + touchSwitchPlugAddress[i];
      if (deviceAddress == touchSwitchPlugAddress[i]) {
        console.log(selector);
        $(selector).css('background-image', greenBackGroundImg);
        currentTouchSwitchAddress = deviceAddress;
      } else {
        $(selector).css('background-image', blueBackGroundImg);
      }
    }
  });

}


function get_scene_name(touchSceneName) {
  console.log(touchSceneName);
  greenBackGroundImg = "url(/static/img/left_side_bar_green.png)";
  blueBackGroundImg =  "url(/static/img/left_side_bar_blue.png)";

  /* 获取数据库中所有开窗器 */
  $.getJSON($SCRIPT_ROOT + '/scene/getall', {
    deviceType: 21,
  }, function(data) {
    let sceneName = JSON.parse(data.result);
    for (let i = 0; i < sceneName.length; i ++) {
      selector = '#scene-mamage-name' + i;
      if (touchSceneName == sceneName[i]) {
        console.log(selector);
        $(selector).css('background-image', greenBackGroundImg);
        currentSceneName = touchSceneName;
        $('#scene-manage-scene-name-input').val(currentSceneName);
      } else {
        $(selector).css('background-image', blueBackGroundImg);
      }
    }
  });
}



function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {  
    window.onload = function() {
      oldonload();
      func();
    }
  }
}