;// __FILE_CONTENT_FOR__:6aedf359a2e3998a.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[83248],{

/***/ 878211:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(663975);__web_req__(402563);__web_req__(548900);__web_req__(607262);__web_req__(450731);__web_req__(280716);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var ad=__c.ad;var m=__c.m;var Wc=__c.Wc;var gPc;var Yc=__c.Yc;var ya=__c.ya;var C=__c.C;var F=__c.F;var x=__c.x;var Q=__c.Q;var M=__c.M;var H=__c.H;var VOc=__c.I(()=>[1,2,3,4,5,6]);__c.WOc=__c.I(()=>[1,2,3]);var XOc=H(()=>({id:M(11),Gud:Q(12),kAd:(0,__c.Lga)(13)}));var YOc=H(()=>({...__c.QOc(),type:x("A?",6,"DEVICE"),sourceId:M(5),rum:__c.N(6)}));var ZOc=H(()=>({...__c.QOc(),type:x("A?",7,"HOSTED_SOURCE"),QN:__c.A(5,__c.Sjb),contentType:F(6,__c.Joc),artist:C(7,__c.ROc),content:C(8,__c.SOc),Ib:F(9,__c.Qjb)}));var $Oc=H(()=>({file:__c.A(1,__c.Nm),xRa:__c.hb(2),KJa:__c.hb(3)}));var aPc=H(()=>({status:M(2),brand:M(3),user:M(4),Ttf:C(5,__c.Rjb),QN:C(6,__c.Sjb),GRm:F(7,__c.Qjb),Zdh:__c.Aa(23,__c.bkb),FE:Q(8),eTl:F(9,VOc),contentType:F(10,__c.Joc),segment:__c.Aa(11,__c.Ckb),audio:__c.Aa(19,__c.WOc),Jr:__c.kb(20),Dy:__c.Aa(12,__c.Dkb),Xl:C(13,__c.SOc),QVd:C(14,__c.ROc),iI:ya(15,__c.Om),HGl:ya(21,__c.Om),RDe:ya(16,__c.Nm),Xrk:ya(17,__c.Nm),LNm:ya(18,__c.Nm),MNm:ya(26,$Oc),OWa:ya(24,__c.Zjb),nac:ya(25,__c.$jb),A_a:(0,__c.Eb)(22,__c.okb)}));var bPc=H(()=>({...__c.QOc(),type:x("A?",8,"SYNCED"),p2b:M(5),data:__c.A(6,aPc)}));var cPc=__c.Fa(()=>({type:[5,__c.UOc,6,YOc,7,ZOc,8,bPc]}),__c.QOc);__c.dPc=H(()=>({R9:Q(1),type:x("A?",2,"ID"),id:M(2)}));var ePc=H(()=>({R9:Q(1),type:x("A?",3,"SOURCE_REF"),QN:__c.A(2,__c.Sjb)}));var fPc=__c.Fa(()=>({type:[2,__c.dPc,3,ePc]}),()=>({R9:Q(1)}));__c.lPc=class{async Tda(a,b){const c=b&&b.Da&&this.na&&this.na.Id("getvideoapi.http_client",b.Da);__c.ma(null!=a.id&&/^[a-zA-Z0-9_-]{11}$/.test(a.id),"GetVideoApiRequest#id does not match: [a-zA-Z0-9_-]{11}");b=Yc([gPc,a.id]);Wc(b,{trashed:m(a.FE,"GetVideoApiRequest#trashed required"),mintVideoUrls:m(a.jPc,"GetVideoApiRequest#mintVideoUrls required"),mintVideoFiles:m(a.iPc,"GetVideoApiRequest#mintVideoFiles required"),includeFiles:a.jUb,includeAnimatedPreviews:a.DBb,includeSourceFile:a.Wde,includePosterframes:a.chc,
includeTimelines:a.xLc,includeColorInfo:a.Tde,mintAccessTokens:a.yGf,fileRefModes:a.k8d.map(f=>__c.Koc.serialize(f)),containers:a.jDc.map(f=>__c.Tjb.serialize(f)),accessToken:a.accessToken,useCdn:a.O1h});a=ad(b);const [d,{$li:e}]=await Promise.all([this.Ba.get(a,{tracing:c&&{Da:c},La:"getvideoapi"}).catch(f=>{c&&c.end("error",new Map([["error_type","http_request"]]));throw f;}),__webpack_require__.me(489765).then(()=>({$li:__c.NOc})).catch(f=>{c&&c.end("error",new Map([["error_type","dynamic_import"]]));
throw f;})]);a=e.deserialize(d);c&&c.end();return a}async XAb(a,b){const c=b&&b.Da&&this.na&&this.na.Id("getvideobatchapi.http_client",b.Da);b=Yc([gPc,"batch"]);Wc(b,{ids:a.Ue,trashed:m(a.FE,"GetVideoBatchApiRequest#trashed required"),mintVideoUrls:m(a.jPc,"GetVideoBatchApiRequest#mintVideoUrls required"),mintVideoFiles:m(a.iPc,"GetVideoBatchApiRequest#mintVideoFiles required"),includeFiles:a.jUb,includeAnimatedPreviews:a.DBb,includeSourceFile:a.Wde,includePosterframes:a.chc,includeTimelines:a.xLc,
includeColorInfo:a.Tde,fileRefModes:a.k8d.map(f=>__c.Koc.serialize(f)),containers:a.jDc.map(f=>__c.Tjb.serialize(f))});a=ad(b);const [d,{Yli:e}]=await Promise.all([this.Ba.get(a,{tracing:c&&{Da:c},La:"getvideobatchapi"}).catch(f=>{c&&c.end("error",new Map([["error_type","http_request"]]));throw f;}),__webpack_require__.me(489765).then(()=>({Yli:__c.MOc})).catch(f=>{c&&c.end("error",new Map([["error_type","dynamic_import"]]));throw f;})]);a=e.deserialize(d);c&&c.end();return a}async tec(a){const b=
Yc([gPc,""]);Wc(b,{type:a.type,includeFiles:a.jUb,includeAnimatedPreviews:a.DBb,includeSourceFile:a.Wde,includePosterframes:a.chc,includeTimelines:a.xLc,includeColorInfo:a.Tde,mintAccessTokens:a.yGf,accessTokens:a.c6c,fileRefModes:a.k8d.map(e=>__c.Koc.serialize(e)),containers:a.jDc.map(e=>__c.Tjb.serialize(e))});switch(a.type){case "USERBRAND":Wc(b,{brand:m(a.brand,"FindVideosApiRequest#brand required"),user:m(a.user,"FindVideosApiRequest#user required"),restrictedAccess:m(a.il,"FindVideosApiRequest#restrictedAccess required"),
trashed:m(a.FE,"FindVideosApiRequest#trashed required"),limit:m(a.limit,"FindVideosApiRequest#limit required"),continuation:a.continuation,mintVideoUrls:m(a.jPc,"FindVideosApiRequest#mintVideoUrls required"),mintVideoFiles:m(a.iPc,"FindVideosApiRequest#mintVideoFiles required")});break;case "IDS":Wc(b,{ids:a.Ue,restrictedAccess:a.il,trashed:a.FE,mintVideoUrls:m(a.jPc,"FindVideosApiRequest#mintVideoUrls required"),mintVideoFiles:m(a.iPc,"FindVideosApiRequest#mintVideoFiles required")});break;case "SOURCEREF":Wc(b,
{source:m(a.source,"FindVideosApiRequest#source required"),id:m(a.id,"FindVideosApiRequest#id required")});break;case "BRAND":Wc(b,{brand:m(a.brand,"FindVideosApiRequest#brand required"),restrictedAccess:m(a.il,"FindVideosApiRequest#restrictedAccess required"),segments:a.segments.map(e=>__c.Ckb.serialize(e)),limit:m(a.limit,"FindVideosApiRequest#limit required"),continuation:a.continuation});break;default:throw new __c.r(a);}a=ad(b);const [c,{Sii:d}]=await Promise.all([this.Ba.get(a,{tracing:void 0,
La:"findvideosapi"}).catch(e=>{throw e;}),__webpack_require__.me(489765).then(()=>({Sii:__c.LOc})).catch(e=>{throw e;})]);return d.deserialize(c)}async uPb(a,b){const c=b&&b.Da&&this.na&&this.na.Id("createvideo.http_client",b.Da);b=ad(Yc([gPc,""]));const d={tracing:c&&{Da:c},La:"createvideo"},[e,{Cbi:f}]=await Promise.all([this.Ba.post(b,cPc.serialize(a),d).catch(g=>{c&&c.end("error",new Map([["error_type","http_request"]]));throw g;}),__webpack_require__.me(489765).then(()=>({Cbi:__c.hPc})).catch(g=>
{c&&c.end("error",new Map([["error_type","dynamic_import"]]));throw g;})]);a=f.deserialize(e);c&&c.end();return a}async Cha(a,b){const c=b&&b.Da&&this.na&&this.na.Id("importvideoapi.http_client",b.Da);b=ad(Yc([gPc,"import"]));const d={tracing:c&&{Da:c},La:"importvideoapi"},[e,{gOe:f}]=await Promise.all([this.Ba.post(b,XOc.serialize(a),d).catch(g=>{c&&c.end("error",new Map([["error_type","http_request"]]));throw g;}),__webpack_require__.me(489765).then(()=>({gOe:__c.iPc})).catch(g=>{c&&c.end("error",
new Map([["error_type","dynamic_import"]]));throw g;})]);a=f.deserialize(e);c&&c.end();return a}async osb(a,b){const c=b&&b.Da&&this.na&&this.na.Id("trashvideo.http_client",b.Da);b=ad(Yc([gPc,"trash"]));const d={tracing:c&&{Da:c},La:"trashvideo"},[e,{PBi:f}]=await Promise.all([this.Ba.post(b,fPc.serialize(a),d).catch(g=>{c&&c.end("error",new Map([["error_type","http_request"]]));throw g;}),__webpack_require__.me(489765).then(()=>({PBi:__c.jPc})).catch(g=>{c&&c.end("error",new Map([["error_type","dynamic_import"]]));
throw g;})]);a=f.deserialize(e);c&&c.end();return a}async Lmd(a){__c.ma(null!=a.id&&/^[a-zA-Z0-9_-]{11}$/.test(a.id),"GetVideoDownloadUrlApiRequest#id does not match: [a-zA-Z0-9_-]{11}");a=ad(Yc([gPc,a.id,"downloadurl"]));const [b,{Zli:c}]=await Promise.all([this.Ba.get(a,{tracing:void 0,La:"getvideodownloadurlapi"}).catch(d=>{throw d;}),__webpack_require__.me(489765).then(()=>({Zli:__c.kPc})).catch(d=>{throw d;})]);return c.deserialize(b)}constructor(a,b){this.Ba=a;this.na=b&&b.Zd("video_api.http_client")}};
__c.lPc.prototype.tdd=__c.da(196);__c.lPc.prototype.E_c=__c.da(195);gPc=__c.gPc="video";__c.DEb={};__c.DEb.joi=__c.lPc;
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:30f23d611e3793cd.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[59289],{

/***/ 147066:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:d18c6400f2741fba.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[86504],{

/***/ 261702:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(348830);__web_req__(752137);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.APc=__c.H(()=>({Ue:__c.yb("ids",1),gj:__c.yb("featureBundles",6),rcg:__c.yb("tlds",8),UVb:__c.zb("legacy",4),Cvc:__c.zb("userLocked",5),Cn:__c.yb("descriptors",7),E0j:__c.Q("matchAccessors",10),e6c:__c.Ca("accessors",11,__c.Ymc),gB:__c.Ca("projections",9,__c.bNc),Ktk:__c.Ca("pricingSetTypes",12,__c.Zmc),limit:__c.hb("limit",2,100),continuation:__c.N("continuation",3)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:f135fa93740a9960.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[79813],{

/***/ 867907:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(752137);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:1344b07badaae07b.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[36753],{

/***/ 813975:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(261702);__web_req__(867907);__web_req__(611057);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.BPc=function(a){return!!(a.l1a&&a.aDb&&a.Upb&&a.uCd)};
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:b30289b162e116ab.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[88334],{

/***/ 563012:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(888537);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.EPc={[1]:"subscribe",[2]:"cancel",[3]:"undo",[4]:"change_billing_interval",[5]:"change_billing_interval_with_migration",[6]:"pause",[7]:"time_extension",[8]:"quantity_extension",[9]:"future_quantity_extension",[10]:"upgrade",[17]:"upgrade_to_prepaid",[11]:"downgrade",[12]:"crossgrade",[13]:"restore",[14]:"offer_redemption",[15]:"convert_to_prepaid",[16]:"addon",[18]:"retry_charge"};
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:f2c7b99a79971b29.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[91806],{

/***/ 665897:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.CPc={fTe:1,FQd:2,Yxl:3,dhl:4,Aqg:5,rri:6,ial:7,dfl:8,S4h:9,I$k:10,Iei:11,C8h:12,Cfi:13,dCi:14};__c.DPc={PENDING:1,AMa:2,xfi:3,Wsa:4};
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:2bd74485fdd97ac8.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[18767],{

/***/ 880795:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.nu={NONE:1,oRd:2,W3c:3};
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:b4a44b9c061ef210.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[86771],{

/***/ 257016:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(280716);__web_req__(147066);__web_req__(813975);__web_req__(611057);__web_req__(888537);__web_req__(969200);__web_req__(665897);__web_req__(880795);__web_req__(563012);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var ua=__c.ua;var xg=__c.xg;var Nr=__c.Nr;var Hr=__c.Hr;var r=__c.r;var Or=__c.Or;var Mr=__c.Mr;var Lr=__c.Lr;var Kr=__c.Kr;var FPc,IPc,JPc,GPc,HPc,LPc,RPc,SPc;FPc=function(a){const b=__c.Xg([0,...[3,8,16].map(c=>c+1)],c=>Date.now()>=a+864E5*c?c:Number.NaN);return new Date(a+864E5*(isNaN(b)?0:b))};IPc=function(a){var b=Date.now();b=GPc(b);if((a=HPc(a.filter(Kr).filter(Lr)))&&b(a))return a};
__c.KPc=function(a){a=a.filter(Mr).filter(b=>!(b.tc.GJf||b.tc.Hqd));if(a.some(Or)){a=a.filter(Or).filter(Kr);a=a.filter(Lr);const b=a.find(c=>c.hKa);return b?(null===b||void 0===b?void 0:b.rM)===__c.yr.CANCEL?void 0:{Dr:"grace",type:"renewal",n_a:FPc(b.Aj),dueDate:new Date(b.Aj),subscription:b}:(a=a.find(c=>c.JN&&c.JN.status===__c.DPc.AMa))&&a.JN&&a.JN.UWa!==__c.nu.NONE?{type:"rollup",Dr:JPc(a.JN.UWa),n_a:FPc(a.JN.Ju),dueDate:new Date(a.JN.Ju),subscription:a}:void 0}if(a=IPc(a))return{type:"renewal",
Dr:"past_grace",n_a:FPc(a.Aj),dueDate:new Date(a.Aj),subscription:a}};JPc=function(a){if(!a)throw Error(`Unexpected status ${a}`);switch(a){case __c.nu.oRd:return"grace";case __c.nu.W3c:return"past_grace";case __c.nu.NONE:throw Error(`Unexpected status ${a}`);default:throw new r(a);}};GPc=function(a){return b=>b.hKa&&b.Aj<a&&2592E6>a-b.Aj&&b.cOb===__c.CPc.FQd&&b.rM!==__c.yr.CANCEL};HPc=function(a){return a.reduce((b,c)=>c.status!==__c.zr.Wsa?b:b&&b.Aj>c.Aj?b:c,void 0)};
LPc=function({subscription:a,bootstrap:b}){if(!Hr(a)||b.ddj)return!1;const c=__c.KPc([a]);return Nr(a)&&null==c&&Kr(a)&&Mr(a)&&__c.Qr(...b.gj.Sza)(a)};RPc=function(a,b){switch(a.config.Hc){case xg.xq:case xg.Sxc:return a.config.wjc[MPc];case xg.dV:return(null===b||void 0===b?void 0:b.Hc)===xg.xq?a.config.wjc[NPc]:a.config.wjc[OPc];case xg.HP:return(null===b||void 0===b?void 0:b.Hc)===xg.xq?a.config.wjc[PPc]:a.config.wjc[QPc];default:throw new r(a.config);}};
SPc=async function(a,{operation:b,type:c,func:d}){var e;const f=null===(e=a.na)||void 0===e?void 0:e.Vc(`platform_subscription_service.${b}`,{Hd:{name:"subscription.request_plan_options",type:__c.EPc[c],attrs:new Map([["provider",a.Hc.toString()]])}});try{return await d()}catch(g){throw null===f||void 0===f?void 0:f.setStatus("error"),g;}finally{null===f||void 0===f?void 0:f.end()}};
__c.fQc=function({G:a,mc:b,fc:c,l2:d,fQa:e,Faa:f,o5:g,wZa:h,EU:k,Ya:l}){const n=window.navigator.userAgent.toLowerCase().includes("store/samsung");l=null===l||void 0===l?void 0:l.Zd("webx.services.subscription");const p=a.lf("platform_subscription_service");if(null==f||n)if(null!=d){const q=new TPc(k),t=new UPc(k);a={Hc:xg.dV,wjc:{[OPc]:{lOc:ua(()=>t),aab:ua(async()=>{const [u,v,w,{O5h:y},{P5h:z}]=await Promise.all([d(),k.wij&&(null===e||void 0===e?void 0:e()),g?g():Promise.resolve(void 0),__webpack_require__.me(248983).then(()=>
__c.VPc),__webpack_require__.me(788095).then(()=>__c.WPc)]);return v?new z(t,c,v,p.lf("apple_plan_option_service_v2"),w,k):new y(t,c,u,p.lf("apple_platform_subscription_service_v1"),w,k)})},[NPc]:{lOc:ua(()=>q),aab:ua(async()=>{const [u,{vEi:v},w]=await Promise.all([null!=h?h():Promise.resolve(void 0),__webpack_require__.me(562745).then(()=>__c.XPc),Promise.resolve(void 0)]);return new v(q,b,c,p.lf("web_plan_option_service_for_apple"),u,k,w)})}}}}else{const q=new YPc(k);a={Hc:xg.xq,wjc:{[MPc]:{lOc:ua(()=>
q),aab:ua(async()=>{const [t,{uEi:u},v]=await Promise.all([null!=h?h():Promise.resolve(void 0),__webpack_require__.me(980961).then(()=>__c.ZPc),Promise.resolve(void 0)]);return new u(q,b,c,p.lf("web_plan_option_service"),t,k,v)})}}};window.navigator.userAgent.includes("canvaeditor")&&p.warning("Installed Internal PlatformSubscriptionService in iOS App")}else{const q=new $Pc(k),t=new aQc(k);a={Hc:xg.HP,wjc:{[QPc]:{lOc:ua(()=>t),aab:ua(async()=>{const [u,v,{hti:w},{gmi:y}]=await Promise.all([f(),g?
g():Promise.resolve(void 0),__webpack_require__.me(436160).then(()=>__c.bQc),__webpack_require__.me(275219).then(()=>__c.cQc)]);return __c.BPc(u)?new y(t,c,u,p.lf("google_plan_option_service_v2"),v,k):new w(c,u,p.lf("google_plan_option_service"),v)})},[PPc]:{lOc:ua(()=>q),aab:ua(async()=>{const [u,{wEi:v},w]=await Promise.all([null!=h?h():Promise.resolve(void 0),__webpack_require__.me(296498).then(()=>__c.dQc),Promise.resolve(void 0)]);return new v(q,b,c,p.lf("web_plan_option_service_for_google"),
u,k,w)})}}}}return new eQc(l,a)};__c.Eh.prototype.ule=__c.fa(77,async function(){await this.kf.yS(__c.gHa())});
var MPc="INTERNAL",OPc="APPLE",QPc="GOOGLE",NPc="INTERNAL_ON_APPLE",PPc="INTERNAL_ON_GOOGLE",gQc=[2,5,8],hQc=a=>0<a.length&&a.every(b=>gQc.includes(b)),UPc=class{Sna(a){const b=a.subscription;a=a.type;if(b.Hc!==this.Hc)return!1;switch(a){case 4:return!Lr(b)&&Kr(b)&&Mr(b)&&Nr(b);case 10:return this.bootstrap.ySg&&!Lr(b)&&Kr(b)&&Mr(b)&&Nr(b);case 5:case 7:case 9:case 15:case 16:case 18:case 14:case 17:case 2:case 3:case 6:case 8:case 11:case 12:case 13:return!1;default:throw new r(a);}}m2b(a){return hQc(a)}constructor(a){this.bootstrap=
a;this.Hc=xg.dV}};var iQc=[2,5,8],jQc=a=>0<a.length&&a.every(b=>iQc.includes(b)),aQc=class{Sna(a){const b=a.subscription;a=a.type;if(b.Hc!==this.Hc)return!1;switch(a){case 10:return this.bootstrap.ySg&&!Lr(b)&&Kr(b)&&Mr(b)&&Nr(b);case 4:case 5:case 7:case 9:case 15:case 16:case 18:case 14:case 17:case 2:case 3:case 6:case 8:case 11:case 12:case 13:return!1;default:throw new r(a);}}m2b(a){return jQc(a)}constructor(a){this.bootstrap=a;this.Hc=xg.HP}};var kQc=[1,0,2,3,4,6,7],YPc=class{Sna(a){const b=a.subscription;a=a.type;if(b.Hc!==this.Hc)return!1;switch(a){case 4:return Lr(b)&&Kr(b)&&Mr(b)&&Nr(b);case 5:return Lr(b)&&Kr(b)&&Mr(b)&&Or(b)&&null!=b.eB;case 10:return Lr(b)&&Kr(b)&&Mr(b)&&Hr(b)&&__c.Qr(...this.bootstrap.gj.Nta)(b)&&Nr(b);case 17:return Lr(b)&&Mr(b)&&Hr(b)&&__c.Qr(...this.bootstrap.gj.Nta)(b)&&Nr(b);case 7:return Lr(b)&&__c.Jr(b)&&Mr(b)&&Nr(b);case 9:return Lr(b)&&Kr(b)&&Mr(b)&&Nr(b);case 15:return a=(new Date).getTime()+18E5,Kr(b)&&
Nr(b)&&Lr(b)&&Hr(b)&&!__c.Znc(b)&&b.Aj>a&&!b.hKa&&!b.fRj&&!b.eB&&(!b.Rz||b.Rz.Mca===b.Rz.YB);case 14:return Lr(b)&&Kr(b)&&Mr(b)&&Nr(b);case 2:return Lr(b)&&Kr(b)&&Mr(b)&&Or(b);case 3:return Lr(b)&&Kr(b)&&Mr(b)&&__c.Ync(b)&&Nr(b);case 6:return Lr(b)&&Kr(b)&&Nr(b);case 18:if(!Hr(b))return!1;a=__c.KPc([b]);return null!=a&&!("renewal"===a.type&&"past_grace"===a.Dr)&&Lr(b)&&Kr(b)&&Mr(b)&&Or(b);case 11:return LPc({subscription:b,bootstrap:this.bootstrap});case 16:case 8:case 12:case 13:return!1;default:throw new r(a);
}}m2b(a){return 0<a.length&&a.every(b=>kQc.includes(b))}constructor(a){this.bootstrap=a;this.Hc=xg.xq}},TPc=class{Sna(a){const b=a.subscription;a=a.type;switch(a){case 4:case 5:case 10:case 17:case 7:case 9:case 15:case 14:case 2:case 3:case 6:case 18:case 16:case 8:case 12:case 13:return!1;case 11:return LPc({subscription:b,bootstrap:this.bootstrap});default:throw new r(a);}}m2b(a){return hQc(a)}constructor(a){this.bootstrap=a;this.Hc=xg.xq}},$Pc=class{Sna(a){const b=a.subscription;a=a.type;switch(a){case 4:case 5:case 10:case 17:case 7:case 9:case 15:case 14:case 2:case 3:case 6:case 18:case 16:case 8:case 12:case 13:return!1;
case 11:return LPc({subscription:b,bootstrap:this.bootstrap});default:throw new r(a);}}m2b(a){return jQc(a)}constructor(a){this.bootstrap=a;this.Hc=xg.xq}};var eQc=class{get Hc(){return this.config.Hc}aab(a){return RPc(this,a).aab()}m2b(a){return RPc(this).lOc().m2b(a)}Sna(a){return RPc(this,a.subscription).lOc().Sna(a)}async mBa(a){return SPc(this,{operation:"find_plan_options",type:1,func:async()=>(await this.aab()).mBa(a)})}async UL(a){return(await this.aab()).UL(a)}async Cla(a){return SPc(this,{operation:"find_update_subscription_options",type:a.type,func:async()=>(await this.aab(a.subscription)).Cla(a)})}async oB(a){return(await this.aab(a.option.subscription)).oB(a)}async Xzb(a){return SPc(this,
{operation:"find_offer_redemption_options",type:14,func:async()=>(await this.aab(a.subscription)).Xzb(a)})}constructor(a,b){this.na=a;this.config=b}};__c.xEb={};__c.xEb.Hee=__c.fQc;
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:bef152053627540b.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[71385],{

/***/ 689290:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:d5ff8dfa5af296b7.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[45045],{

/***/ 275631:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(689290);__web_req__(431932);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var C=__c.C;var N=__c.N;var ya=__c.ya;var x=__c.x;var gb=__c.gb;var M=__c.M;var H=__c.H;var ZFc,aGc,cGc;ZFc=H(()=>({color:M("color",1),$b:gb("transparency",2),position:gb("position",3)}));__c.$Fc=H(()=>({type:x("type","LINEAR",1,"LINEAR"),Kn:ya("stops",1,ZFc),rotation:gb("rotation",2)}));aGc=H(()=>({top:gb("top",1),left:gb("left",2)}));__c.bGc=H(()=>({type:x("type","RADIAL",2,"RADIAL"),Kn:ya("stops",1,ZFc),center:__c.A("center",2,aGc)}));cGc=__c.Fa(()=>({type:[1,__c.$Fc,2,__c.bGc]}),()=>({}));
__c.Tt=H(()=>({name:N(1),Lr:N(2),lWa:N(3),gradient:C(4,cGc)}));__c.Ut=H(()=>({name:N(1),tb:ya(2,__c.Tt)}));__c.dGc=H(()=>({name:N(1),Mcd:N(9),fontFamily:N(2),size:gb(3),fontStyle:__c.F(8,__c.Xq)}));__c.Vt=H(()=>({name:N(1),description:N(3),qs:ya(2,__c.dGc),Lya:N(4)}));__c.eGc=H(()=>({FC:M(1),oJm:N(2)}));var fGc=()=>({name:M(2),description:N(3)});__c.Wt=H(()=>({...fGc(),type:x("A?",1,"MEDIA"),id:M(1)}));var gGc=__c.Fa(()=>({type:[1,__c.Wt]}),fGc);__c.hGc=H(()=>({resources:ya(1,gGc)}));__c.iGc=__c.I(()=>[5,1,2,4,3]);__c.jGc=H(()=>({type:x("A?",1,"CHART"),UZd:C(1,__c.Ut),CL:C(2,__c.Vt)}));var kGc=__c.Fa(()=>({type:[1,__c.jGc]}),()=>({}));__c.Xt=H(()=>({description:N(3),uq:ya(1,__c.hGc),vk:__c.F(2,__c.iGc),Lya:N(4),dmb:C(5,kGc)}));__c.Yt=H(()=>({ab:M(1),vk:__c.F(2,__c.iGc)}));__c.lGc=H(()=>({content:M(1)}));__c.Zt=H(()=>({oWa:N(6),Gr:ya(1,__c.Ut),iad:N(8),EE:ya(2,__c.Vt),jz:ya(4,__c.eGc),VF:ya(5,__c.Xt),Ida:ya(10,__c.Yt),oJ:C(9,__c.lGc)}));__c.$t=H(()=>({type:x("A?",1,"FOLDER"),ba:M(1)}));__c.mGc=H(()=>({type:x("A?",2,"BRAND"),brand:M(1)}));__c.nGc=H(()=>({type:x("A?",3,"ORGANIZATION"),organization:M(1)}));__c.oGc=__c.Fa(()=>({type:[1,__c.$t,2,__c.mGc,3,__c.nGc]}),()=>({}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:f52b6e79a85126c3.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[86624],{

/***/ 181870:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.YFc=__c.I(()=>[1,2]);
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:656fd96b7e0a9aa3.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[98823],{

/***/ 800994:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:7975f9cd92b96525.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[1727],{

/***/ 159432:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(800994);__web_req__(181870);__web_req__(275631);__web_req__(689290);__web_req__(280716);__web_req__(254017);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var da=__c.da;var m=__c.m;var Wc=__c.Wc;var au;var Yc=__c.Yc;var ad=__c.ad;var ma=__c.ma;__c.pGc=__c.H(()=>({id:__c.M(1),uq:__c.ya(2,__c.Ut),description:__c.N(3),Lya:__c.N(4)}));__c.xGc=class{async Pda(a){ma(null!=a.id&&/^k[a-zA-Z0-9_-]{10}$/.test(a.id),"GetBrandKitRequest#id does not match: k[a-zA-Z0-9_-]{10}");a=ad(Yc([au,a.id]));const [b,{mki:c}]=await Promise.all([this.Ba.get(a,{La:"getbrandkit"}),__webpack_require__.me(784499).then(()=>({mki:__c.qGc}))]);return c.deserialize(b)}async kBa(a){ma(null!=a.Y&&/^B[a-zA-Z0-9_-]{10}$/.test(a.Y),"FindBrandKitSummariesRequest#brandId does not match: B[a-zA-Z0-9_-]{10}");const b=Yc([au,a.Y,"summaries"]);Wc(b,{type:a.type,continuation:a.continuation,
limit:m(a.limit,"FindBrandKitSummariesRequest#limit required"),accessFilter:a.pVa&&__c.Y9a.serialize(a.pVa),hasIngredientStyle:a.Glb.map(e=>__c.Z9a.serialize(e))});switch(a.type){case "BY_BRAND":break;case "BY_FOLDER":Wc(b,{folderIds:a.UX});break;case "BY_BRAND_KITS":Wc(b,{brandKitIds:a.xOi});break;case "BY_FOLDER_LINK":Wc(b,{folderId:m(a.ab,"FindBrandKitSummariesRequest#folderId required"),sharedToOrgId:a.yOh});break;default:throw new __c.r(a);}a=ad(b);const [c,{chi:d}]=await Promise.all([this.Ba.get(a,
{La:"findbrandkitsummaries"}),__webpack_require__.me(784499).then(()=>({chi:__c.rGc}))]);return d.deserialize(c)}async k3b(a){ma(null!=a.id&&/^k[a-zA-Z0-9_-]{10}$/.test(a.id),"UpdateColorPalettesApiRequest#id does not match: k[a-zA-Z0-9_-]{10}");const b=ad(Yc([au,a.id,"color","palettes"])),[c,{DCi:d}]=await Promise.all([this.Ba.post(b,__c.pGc.serialize(a.body),{La:"updatecolorpalettesapi"}),__webpack_require__.me(784499).then(()=>({DCi:__c.sGc}))]);return d.deserialize(c)}async h$d(){const a=ad(Yc([au,
"active"])),[b,{$ji:c}]=await Promise.all([this.Ba.get(a,{La:"getactivebrandkit"}),__webpack_require__.me(784499).then(()=>({$ji:__c.tGc}))]);return c.deserialize(b)}async hPa(a){ma(null!=a.brand&&/^B[a-zA-Z0-9_-]{10}$/.test(a.brand),"FindPublishRestrictionsRequest#brand does not match: B[a-zA-Z0-9_-]{10}");const b=Yc([au,a.brand,"controls","publish","restrictions"]);Wc(b,{publishType:a.wte.map(e=>__c.YFc.serialize(e)),"key.id":a.key.id,useDefaultListAsFallback:a.cOd,continuation:a.continuation,limit:m(a.limit,
"FindPublishRestrictionsRequest#limit required")});a=ad(b);const [c,{sii:d}]=await Promise.all([this.Ba.get(a,{La:"findpublishrestrictions"}),__webpack_require__.me(595839).then(()=>({sii:__c.uGc}))]);return d.deserialize(c)}async ePa(a){ma(null!=a.brand&&/^B[a-zA-Z0-9_-]{10}$/.test(a.brand),"FindAppRestrictionsRequest#brand does not match: B[a-zA-Z0-9_-]{10}");const b=Yc([au,a.brand,"controls","app","restrictions"]);Wc(b,{apps:a.Lq,extensionPoints:a.ula,continuation:a.continuation,limit:m(a.limit,
"FindAppRestrictionsRequest#limit required")});a=ad(b);const [c,{Tgi:d}]=await Promise.all([this.Ba.get(a,{La:"findapprestrictions"}),__webpack_require__.me(595839).then(()=>({Tgi:__c.vGc}))]);return d.deserialize(c)}async v8a(a){const b=Yc([au,"assets"]);Wc(b,{type:a.type});switch(a.type){case "BY_DOMAIN":Wc(b,{domain:m(a.domain,"FetchBrandAssetsRequest#domain required")});break;case "BY_USER":Wc(b,{user:m(a.user,"FetchBrandAssetsRequest#user required")});break;default:throw new __c.r(a);}a=ad(b);
const [c,{wgi:d}]=await Promise.all([this.Ba.post(a,{La:"fetchbrandassets"}),__webpack_require__.me(280823).then(()=>({wgi:__c.wGc}))]);return d.deserialize(c)}constructor(a){this.Ba=a}};__c.aa=__c.xGc.prototype;__c.aa.uKb=da(171);__c.aa.A9e=da(170);__c.aa.$Ve=da(169);__c.aa.aOa=da(168);__c.aa.n_c=da(166);__c.aa.tKb=da(165);__c.aa.DNd=da(164);__c.aa.y9e=da(163);__c.aa.f6e=da(162);__c.aa.ivc=da(161);__c.aa.$ta=da(160);au=__c.au="brandkit";__c.qEb={};__c.qEb.rni=__c.xGc;
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:21a4fdb32cdea40f.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[23657],{

/***/ 238848:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var I=__c.I;__c.FTb=I(()=>[1,"NON_BRAND_RESTRICTED_APPS",2,"BRAND_RESTRICTED_APPS",3,"ALL_APPS"]);__c.GTb=I(()=>[1,"NONE",2,"LATEST",3,"REFERENCE",4,"HISTORIC"]);__c.HTb=I(()=>[1,"D",2,"A",3,"S",4,"R",5,"U",6,"E",7,"T"]);__c.ITb=I(()=>[1,2,3,4,8,5,6,7]);__c.JTb=I(()=>[1,2,3]);
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:48012a062183caa1.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[36723],{

/***/ 403148:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(238848);__web_req__(280716);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var ad=__c.ad;var m=__c.m;var Wc=__c.Wc;var mVb;var Yc=__c.Yc;var M=__c.M;var iVb=()=>({user:M(1),brand:M(2),appId:M(3),appVersion:__c.hb(4),lFh:M(5),filename:M(6)});var jVb=__c.H(()=>({...iVb(),type:__c.x("A?",18,"IMAGE_ASSET_REQUEST"),Iod:__c.F(20,__c.JTb)}));var kVb=__c.H(()=>({...iVb(),type:__c.x("A?",19,"SCRIPT_ASSET_REQUEST")}));var lVb=__c.Fa(()=>({type:[18,jVb,19,kVb]}),iVb);__c.nVb=class{async zWg(a){const b=Yc([mVb,"v2"]);Wc(b,{type:a.type,continuation:a.continuation,limit:m(a.limit,"FindAppsV2Request#limit required")});switch(a.type){case "PUBLIC_APPS":Wc(b,{user:m(a.user,"FindAppsV2Request#user required"),brand:m(a.brand,"FindAppsV2Request#brand required"),statuses:a.SD.map(e=>__c.ITb.serialize(e))});break;case "BRAND_RESTRICTED_APPS":Wc(b,{user:m(a.user,"FindAppsV2Request#user required"),brand:m(a.brand,"FindAppsV2Request#brand required"),statuses:a.SD.map(e=>__c.ITb.serialize(e))});
break;case "CREATED":Wc(b,{user:m(a.user,"FindAppsV2Request#user required"),brand:m(a.brand,"FindAppsV2Request#brand required")});break;default:throw new __c.r(a);}a=ad(b);const [c,{Wgi:d}]=await Promise.all([this.Ba.get(a,{La:"findappsv2"}),__webpack_require__.me(631009).then(()=>({Wgi:__c.IUb}))]);return d.deserialize(c)}async wbd(a){const b=ad(Yc([mVb,"v2","asset"])),[c,{$$h:d}]=await Promise.all([this.Ba.post(b,lVb.serialize(a),{La:"createasset"}),__webpack_require__.me(870774).then(()=>({$$h:__c.TUb}))]);
return d.deserialize(c)}async WIc(a){__c.ma(null!=a.id&&/^A[a-zA-Z0-9_-]{10}$/.test(a.id),"GetAppRequest#id does not match: A[a-zA-Z0-9_-]{10}");const b=Yc([mVb,a.id]);Wc(b,{user:m(a.user,"GetAppRequest#user required"),brand:m(a.brand,"GetAppRequest#brand required"),includeDeleted:m(a.Daa,"GetAppRequest#includeDeleted required"),mode:__c.GTb.serialize(a.mode),version:a.version,extensionPoints:a.ula,fetchClientSecret:m(a.Ltj,"GetAppRequest#fetchClientSecret required"),locale:a.locale,includeDisabled:m(a.b$a,
"GetAppRequest#includeDisabled required"),includeIncompleteExtensions:m(a.tKj,"GetAppRequest#includeIncompleteExtensions required"),includeExternalBrandRestricted:m(a.Zuf,"GetAppRequest#includeExternalBrandRestricted required")});a=ad(b);const [c,{cki:d}]=await Promise.all([this.Ba.get(a,{La:"getapp"}),__webpack_require__.me(631009).then(()=>({cki:__c.LUb}))]);return d.deserialize(c)}async yWg(a){const b=Yc([mVb]);Wc(b,{type:a.type,continuation:a.continuation,limit:m(a.limit,"FindAppsRequest#limit required"),
locale:a.locale});switch(a.type){case "AVAILABLE":Wc(b,{user:m(a.user,"FindAppsRequest#user required"),brand:m(a.brand,"FindAppsRequest#brand required"),statuses:a.SD.map(e=>__c.HTb.serialize(e)),brandRestrictionFilter:a.uBg&&__c.FTb.serialize(a.uBg),includeExternalBrandRestricted:m(a.Zuf,"FindAppsRequest#includeExternalBrandRestricted required"),includeDisabled:m(a.b$a,"FindAppsRequest#includeDisabled required")});break;case "CREATED":Wc(b,{creatingUser:a.SP,creatingBrand:a.E6a,statuses:a.SD.map(e=>
__c.HTb.serialize(e)),includeDeleted:m(a.Daa,"FindAppsRequest#includeDeleted required"),includeDisabled:m(a.b$a,"FindAppsRequest#includeDisabled required")});break;default:throw new __c.r(a);}a=ad(b);const [c,{Vgi:d}]=await Promise.all([this.Ba.get(a,{La:"findapps"}),__webpack_require__.me(631009).then(()=>({Vgi:__c.HUb}))]);return d.deserialize(c)}async getExtension(a){__c.ma(null!=a.id&&/^A[a-zA-Z0-9_-]{10}_[a-zA-Z0-9_-]{6}$/.test(a.id),"GetExtensionRequest#id does not match: A[a-zA-Z0-9_-]{10}_[a-zA-Z0-9_-]{6}");
const b=Yc([mVb,"extensions",a.id]);Wc(b,{type:a.type,user:m(a.user,"GetExtensionRequest#user required"),brand:m(a.brand,"GetExtensionRequest#brand required"),fetchAllProperties:m(a.O7l,"GetExtensionRequest#fetchAllProperties required"),locale:a.locale});switch(a.type){case "ADMIN":break;case "RUNTIME":break;default:throw new __c.r(a);}a=ad(b);const [c,{hNe:d}]=await Promise.all([this.Ba.get(a,{La:"getextension"}),__webpack_require__.me(631009).then(()=>({hNe:__c.NUb}))]);return d.deserialize(c)}constructor(a){this.Ba=
a}};__c.nVb.prototype.Amf=__c.da(109);__c.nVb.prototype.NTc=__c.da(108);__c.nVb.prototype.kec=__c.da(106);__c.nVb.prototype.rld=__c.da(105);mVb=__c.mVb="app";__c.MEb={};__c.MEb.oni=__c.nVb;
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:aee1c57579472278.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[97034],{

/***/ 714981:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:1670a7bcba962115.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[33717],{

/***/ 883683:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(714981);__web_req__(663975);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:8a4309f814569033.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[54969],{

/***/ 619582:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(883683);__web_req__(280716);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.THc=class{constructor(a){this.Ba=a}};__c.wEb={};__c.wEb.Zni=__c.THc;
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:8502f22f55ec464d.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[77075],{

/***/ 485920:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var M=__c.M;var NUc=__c.H(()=>({U8d:M("flagName",1),xkf:M("flagValue",2)}));var OUc=__c.H(()=>({locale:M("locale",1),country:M("country",2),jc:M("subscriptionType",3),LHa:__c.N("flagOverrides",4),flags:__c.ya("flags",5,NUc),KGl:__c.zb("anonymousUser",6)}));__c.PUc=__c.H(()=>({l5d:__c.Q(1),Gsm:__c.C(2,OUc)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:4ea52aba5ce01d49.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[50725],{

/***/ 199999:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:b9fb63a165090a97.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[64386],{

/***/ 931507:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:ab38698e821f4268.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[92964],{

/***/ 259222:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(931507);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var C=__c.C;var H=__c.H;__c.uac=H(()=>({backgroundColor:__c.N(3),ZPc:(0,__c.Pga)(4),P3:(0,__c.Ab)(5)}));__c.vac=H(()=>({tb:__c.yb(1),e6a:C(2,__c.uac)}));__c.wac=H(()=>({UV:__c.M(1),b5:__c.N(6),weight:__c.N(2),r_:__c.zb(3),gfb:__c.zb(4),xK:__c.mb(5)}));__c.xac=H(()=>({title:C(1,__c.wac),subtitle:C(2,__c.wac),body:C(3,__c.wac)}));__c.yac=H(()=>({id:__c.M(1),color:C(3,__c.vac),text:C(4,__c.xac)}));__c.zac=H(()=>({$v:(0,__c.Ab)(1),T9b:(0,__c.Kga)(2)}));__c.Aac=H(()=>({Fzc:__c.A(1,__c.zac),ZRc:(0,__c.Mga)(2,__c.zac)}));__c.Bac=H(()=>({UMb:__c.A(1,__c.yac),Bqe:(0,__c.Mga)(2,__c.yac)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:56390f3e5b0da541.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[87883],{

/***/ 511760:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:85b0d3840476246f.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[25474],{

/***/ 723925:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:6968b636b94e5766.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[81568],{

/***/ 358098:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(511760);__web_req__(723925);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:eaedf24a816ed6a8.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[95812],{

/***/ 522059:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(85596);__web_req__(259222);__web_req__(358098);__web_req__(511760);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.Cac=__c.H(()=>({Zdb:__c.A(1,__c.Bac),Bw:__c.A(2,__c.Aac),l_b:__c.yb(3)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:0dea3a6f2d8a7cc4.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[96558],{

/***/ 339352:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:87ce35bac72e2a16.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[57103],{

/***/ 907967:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.kWb=__c.I(()=>[1,2],1);
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:728fd601f0a6dac4.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[60959],{

/***/ 105348:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(714981);__web_req__(907967);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var yb=__c.yb;var Aa=__c.Aa;var N=__c.N;var H=__c.H;var I=__c.I;var lWb;lWb=I(()=>[1,2,3]);__c.mWb=H(()=>({Xd:N(1),key:N(2),$Oa:N(3),iKm:Aa(4,lWb)}));__c.nWb=I(()=>[1,2,3],1);__c.oWb=I(()=>[1,2,3,4,5,6,7,8,9,10,{Xc:!0}],1);__c.pWb=H(()=>({width:__c.hb(1),height:__c.hb(2),reference:__c.C(3,__c.mWb),url:N(4)}));var qWb=H(()=>({jha:__c.M(1),SRk:N(2)}));__c.rWb=I(()=>[1,2,3,4,5],1);var sWb=I(()=>[1,"COMMERCIALLY_SAFE"]);var tWb=H(()=>({type:__c.F(1,sWb)}));var uWb=H(()=>({BK:__c.M(1),I3k:__c.M(2)}));var vWb=I(()=>[1],1);var wWb=I(()=>[1,2,3,4],1);var xWb=H(()=>({track:N(1),artist:N(2),WTj:N(3),label:N(4),vendor:N(5)}));__c.yWb=H(()=>({eN:__c.hb(1),qbf:__c.gb(17),gGa:__c.ya(2,__c.pWb),title:N(3),XGb:Aa(20,__c.kWb),jha:yb(4),SRk:yb(19),D9l:__c.ya(21,qWb),oPc:yb(5),kXd:__c.mb(6),xbg:yb(7),artist:yb(8),album:N(25),label:N(9),UVf:yb(10),dDc:yb(11),L9a:__c.zb(12),NM:__c.zb(38),rza:Aa(22,__c.rWb),DV:__c.ya(34,tWb),RBh:__c.rb(13),cb:yb(14),description:N(15),pJm:__c.C(16,uWb),vie:N(23),X$a:N(24),WTj:N(26),rKi:N(27),kBm:N(28),lBm:N(29),mBm:N(30),sim:N(31),f0d:yb(32),RPl:Aa(33,vWb),k8l:Aa(35,wWb),LPl:__c.ya(37,xWb)}));__c.zWb=I(()=>[1,"WAITING_FOR_MEDIA",2,"READY_FOR_UPLOAD",3,"MEDIA_GENERATION_FAILED",4,"LOCKED_FOR_UPLOAD",5,"UPLOAD_IN_PROGRESS",6,"UPLOAD_COMPLETED",7,"UPLOAD_FAILED",9,"SKIPPED",10,"PAUSED",11,"DRAFT"]);
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:336db16c67e271bb.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[9969],{

/***/ 839032:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(405354);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var N=__c.N;__c.rmc=__c.H(()=>({displayName:N("displayName",1),Xd:__c.M("bucket",2),Y9a:N("imageKey",3),Odm:N("imageThumbKey",4),imageUrl:N("imageUrl",5),KJb:N("thumbUrl",6),YK:__c.Aa("fileFormat",7,__c.pmc),width:__c.mb("width",9),height:__c.mb("height",10),order:__c.mb("order",8)}));__c.smc=__c.I(()=>[1,"NEW",2,"IN_PROGRESS",3,"SUCCESS",4,"FAILURE"]);__c.tmc=__c.I(()=>[1,2,3]);__c.umc=__c.H(()=>({d:__c.hb("d",1),h:__c.hb("h",2),m:__c.hb("m",3)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:a4302329c58660e7.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[19868],{

/***/ 79988:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.B_b=__c.I(()=>[1,"ONE_USE",2,"ROYALTY_FREE",3,"EXTENDED"]);__c.C_b=__c.I(()=>[1,"MEDIA",2,"FONT_FAMILY",3,"VIDEO",4,"AUDIO",5,"APP",{Xc:!0}]);
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:78d7254cf7dbc5a3.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[18779],{

/***/ 821651:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.bkc=__c.I(()=>[1,"ACTIVATED",2,"REVOKED"]);__c.ckc=__c.I(()=>[1,2,3],1);
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:3f5afc4b339230f9.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[83588],{

/***/ 827486:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.MUc=__c.H(()=>({lF:__c.M("postUrl",1),eq:(0,__c.Bb)("formFields",2)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:c263c96124e690e8.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[61607],{

/***/ 814263:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var ya=__c.ya;var gb=__c.gb;var I=__c.I;var M=__c.M;var N=__c.N;var H=__c.H;__c.$gc=H(()=>({Sd:N("externalId",1),displayName:N("displayName",2),RVd:N("artistUrl",3)}));__c.ahc=H(()=>({locale:M("locale",1),text:M("text",2)}));__c.bhc=H(()=>({timestamp:__c.rb("timestamp",1),author:N("author",2),keyword:M("keyword",3)}));var chc=I(()=>[1,"P",6,"G"]);var dhc=H(()=>({left:gb("left",1),top:gb("top",2),width:gb("width",3),height:gb("height",4),score:gb("score",5)}));var ehc=H(()=>({name:M("name",1),score:gb("score",2),iXd:ya("boundingBoxes",3,dhc)}));var fhc=H(()=>({model:M("model",1),version:M("version",2),tags:ya("tags",3,ehc)}));var ghc=H(()=>({country:M(1),language:M(2)}));var hhc=H(()=>({J6l:__c.A(1,dhc),Tqj:M(2),WFl:M(3),v9l:M(4)}));var ihc=()=>({id:M(16),Cua:N(17)});var jhc=H(()=>({...ihc(),type:__c.x("A?",1,"REVIEWER")}));var khc=H(()=>({...ihc(),type:__c.x("A?",2,"ML"),confidence:gb(1),variant:M(2)}));var lhc=__c.Fa(()=>({type:[1,jhc,2,khc]}),ihc);__c.mhc=H(()=>({title:N("title",1),description:N("description",2),cb:ya("keywords",3,__c.ahc),M$f:ya("superKeywords2",4,__c.bhc),I_a:__c.Aa("mediaContentType",5,chc),tags:ya("tags",6,fhc),EIa:__c.C("intendedAudienceLocale",8,ghc),eYa:ya("faces",9,hhc),SE:ya("conceptTags",10,lhc)}));var nhc=I(()=>[1,"COMMERCIALLY_SAFE",2,"EXTERNAL_USE"]);__c.ohc=H(()=>({type:__c.F(1,nhc)}));__c.phc=I(()=>[1,"APP",2,"COPY",3,"TRANSFORMATION",5,"FILTER",4,"ANON_CLAIM"]);__c.qhc=I(()=>[0,1]);__c.rhc=H(()=>({f0d:__c.yb(1),canPrint:__c.Q(2,!0),Yub:__c.Q(3)}));__c.shc=H(()=>({locale:M("locale",1,"en"),title:N("title",2),description:N("description",3),cb:__c.yb("keywords",4),eYc:__c.yb("superKeywords",5),altText:N("altText",6)}));__c.thc=I(()=>[1,"GENERAL",2,"PARENTAL_GUIDANCE",3,"GENERAL_5PLUS",4,"PARENTAL_GUIDANCE_13PLUS",5,"MATURE_15PLUS"]);__c.dr=H(()=>({$v:(0,__c.Ab)("dominantColors",1),T9b:(0,__c.Kga)("colorHistogram",2),yAm:__c.yb("recolorableVectorColors",3),VOm:__c.kb("transparencyPercent",4)}));__c.uhc=I(()=>[13,"APP_STORE",15,"DEVICE",1,"DROPBOX",2,"FACEBOOK",3,"GETTY",4,"INSTAGRAM",5,"FLICKR",11,"GOOGLE_DRIVE",9,"LENSDROP",12,"MEDIA_PRIVATE",6,"PEXELS",7,"PIXABAY",8,"STOCK_UNLIMITED",10,"VCG",16,"VIEWSTOCK",17,"PUBLIC_CONTENT_APP",18,"PRODUCT_PHOTOS_APP_INPUT",19,"DISNEY",20,"ALAMY"]);__c.vhc=H(()=>({Hc:__c.F("provider",1,__c.uhc),fvk:N("providerGroupId",3),id:M("id",2)}));__c.whc=I(()=>[1,"PENDING_SUBMISSION",2,"PENDING_REVIEW",3,"APPROVED",4,"SOFT_REJECTED",5,"HARD_REJECTED",6,"ETCH_REJECTED",7,"SET_REJECTED",8,"DIFFICULT_VECTOR_REJECTED",9,"CANCELLED"]);var xhc=I(()=>[1,"MODERN",2,"STOCK"]);__c.yhc=H(()=>({quality:__c.mb("quality",1),PRl:__c.zb("curated",2),style:__c.Aa("style",3,xhc),Atj:__c.rb("featured",4)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:e9b84aa5b4969449.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[7910],{

/***/ 697219:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var M=__c.M;var zhc=__c.H(()=>({domain:M(1),T3d:M(2),JGl:M(3),hzm:M(4)}));__c.Ahc=__c.H(()=>({ref:__c.A(1,zhc),data:M(2)}));__c.Bhc=__c.H(()=>({hJi:__c.ya(1,__c.Ahc),continuation:__c.N(2)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:2e49ec958a0f42db.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[16086],{

/***/ 52337:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(819843);__web_req__(814263);__web_req__(515621);__web_req__(604242);__web_req__(898454);__web_req__(514394);__web_req__(697219);__web_req__(46511);__web_req__(339711);__web_req__(250832);__web_req__(585512);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var kb=__c.kb;var gb=__c.gb;var ya=__c.ya;var C=__c.C;var rb=__c.rb;var Aa=__c.Aa;var N=__c.N;var Q=__c.Q;var hb=__c.hb;var F=__c.F;var I=__c.I;var A=__c.A;var Fa=__c.Fa;var M=__c.M;var x=__c.x;var H=__c.H;var Fhc,Ghc,Hhc,Ihc,Khc,Lhc,Mhc,Phc,Rhc;__c.Ehc=H(()=>({PBd:x("principalType","USER",1,"USER"),brand:M("brand",1),user:M("user",2)}));Fhc=H(()=>({PBd:x("principalType","GROUP",2,"GROUP"),brand:M("brand",1),group:M("group",2)}));
Ghc=H(()=>({PBd:x("principalType","BRAND",3,"BRAND"),brand:M("brand",1)}));Hhc=H(()=>({PBd:x("principalType","ORG",4,"ORG"),WQ:M("org",1)}));Ihc=Fa(()=>({PBd:[1,__c.Ehc,2,Fhc,3,Ghc,4,Hhc]}),()=>({}));__c.Jhc=H(()=>({hRf:x("originType","FOLDER_ORIGIN",1,"FOLDER_ORIGIN"),ba:M("folder",1)}));Khc=H(()=>({hRf:x("originType","USER_ORIGIN",2,"USER_ORIGIN"),user:M("user",1)}));Lhc=H(()=>({hRf:x("originType","BRAND_KIT_ORIGIN",3,"BRAND_KIT_ORIGIN"),Fc:M("brandKit",1)}));
Mhc=Fa(()=>({hRf:[1,__c.Jhc,2,Khc,3,Lhc]}),()=>({}));__c.Nhc=H(()=>({kb:A("principal",1,Ihc),N_f:A("ruleOrigin",2,Mhc)}));__c.Ohc=H(()=>({oVf:A("principalOrigin",1,__c.Nhc),version:__c.ib("version",2)}));Phc=I(()=>[1,"VIEWER",2,"REMIXER",3,"EDITOR"]);__c.Qhc=H(()=>({key:A("key",1,__c.Ohc),access:F("access",2,Phc)}));Rhc=H(()=>({width:hb(1),height:hb(2)}));var Shc=H(()=>({family:M("family",1),style:M("style",2),r_:Q("italic",3),weight:hb("weight",4),manufacturer:N("manufacturer",5)}));__c.Thc=H(()=>({version:hb("version",1),ABb:N("importVersion",2),zBb:N("importFileUrl",3),qNg:__c.mb("designVersion",4),Jdd:N("designType",5),Jbj:N("designSchemaVersion",6),Kw:Q("listed",7),iqa:F("importState",8,__c.zec),A6g:N("importMessage",9),status:F("status",10,__c.whc),z6g:Aa("importFailureType",46,__c.qhc),F_b:N("rejectionReason",11),kCe:N("submittedBy",12),lCe:rb("submittedDate",13),OUc:N("reviewedBy",14),Zve:rb("reviewedDate",15),nDm:rb("reviewDivergedDate",48),Tn:__c.ib("modifiedDate",16),
dimensions:C("dimensions",47,Rhc),artist:N("artist",17),title:N("title",18),description:N("description",19),locale:N("locale",20),background:Q("background",21),OPb:Q("cutout",22),isolated:Q("isolated",23),lre:Q("photoholder",24),ODe:Q("textholder",25),Rue:Q("repeating",26),m3:Q("recolorable",27),colorSpace:N("colorSpace",28),quality:__c.mb("quality",29),rza:Aa("ageRating",30,__c.thc),NM:__c.zb("aiGenerated",50),cb:ya("keywords",31,__c.ahc),files:ya("files",45,__c.Dhc),JGg:ya("componentMedia",34,__c.Ko),
E8l:C("fontMetadata",35,Shc),RN:C("spritesheetMetadata",36,__c.Pq),Ib:F("licensing",37,__c.tec),Xl:C("contentMetadata",38,__c.mhc),fileSize:rb("fileSize",39),Bw:C("colorInfo",40,__c.dr),Rpb:C("qualityMetadata",41,__c.yhc),A_a:(0,__c.Eb)("localizedMetadata",42,__c.shc),pmm:rb("metadataDivergedDate",49),QVd:C("artistMetadata",43,__c.$gc),appId:N("appId",44)}));__c.Uhc=H(()=>({Lqe:A("parentMedia",1,__c.Ko),QEd:A("rootMedia",2,__c.Ko),type:Aa("type",3,__c.phc)}));var Vhc=H(()=>({type:x("type","VECTOR_RASTERIZATION",16,"VECTOR_RASTERIZATION"),So:(0,__c.Bb)("recoloring",1),width:hb("width",2),height:hb("height",3)}));__c.Whc=H(()=>({type:x("type","BLUR",1,"BLUR"),Ld:gb("intensity",1)}));__c.Xhc=H(()=>({type:x("type","INVERT",2,"INVERT")}));__c.Yhc=H(()=>({type:x("type","REFINE",3,"REFINE")}));__c.Zhc=H(()=>({type:x("type","SEGMENT",4,"SEGMENT"),oIh:__c.yb("selectedSegmentColors",1)}));var $hc=Fa(()=>({type:[1,__c.Whc,2,__c.Xhc,3,__c.Yhc,4,__c.Zhc]}),()=>({}));var aic=()=>({KLc:__c.mb("inputTransformationIndex",4),btd:ya("maskTransformations",1,$hc)});__c.bic=H(()=>({...aic(),maskType:x("maskType","MASK_SELECTION",5,"MASK_SELECTION"),zm:M("maskId",1)}));__c.cic=H(()=>({type:x("type","BACKGROUND_REMOVAL",1,"BACKGROUND_REMOVAL"),cEf:N("maskSelectionId",1),w0j:C("maskSelectionReference",8,__c.bic)}));__c.dic=H(()=>({xs:M(1),ys:M(2)}));__c.eic=I(()=>[1,"STANDARD",2,"MORE"]);__c.fic=H(()=>({...aic(),maskType:x("maskType","SEGMENTATION_MASK",7,"SEGMENTATION_MASK"),points:C("points",1,__c.dic),qhf:C("eraseRestoreMask",4,__c.bic),nue:Q("refined",2),RWd:Q("binary",3),QU:Aa("segmentationQuantity",8,__c.eic)}));__c.gic=H(()=>({type:x("type","SEGMENTATION_BACKGROUND_REMOVAL",21,"SEGMENTATION_BACKGROUND_REMOVAL"),sqc:A("segmentation",1,__c.fic)}));__c.hic=H(()=>({type:x("type","LUT",2,"LUT"),Ld:gb("intensity",1),name:M("name",2),fDk:hb("samplesPerChannel",3),layout:M("layout",4)}));__c.iic=H(()=>({brightness:kb("brightness",1),contrast:kb("contrast",2),highlights:kb("highlights",3),Go:kb("shadows",4),Nya:kb("whites",5),Jta:kb("blacks",6),saturation:kb("saturation",7),oZ:kb("vibrance",8),WTa:kb("temperature",9),bX:kb("tint",10),BX:kb("clarity",11),sharpness:kb("sharpness",12),qT:kb("vignette",13)}));__c.jic=H(()=>({...aic(),maskType:x("maskType","FOREGROUND_BACKGROUND",2,"FOREGROUND_BACKGROUND")}));__c.kic=H(()=>({...aic(),maskType:x("maskType","DEPTHMAP",3,"DEPTHMAP")}));__c.lic=H(()=>({...aic(),maskType:x("maskType","FACE_SEGMENTATION",6,"FACE_SEGMENTATION")}));var mic=Fa(()=>({maskType:[2,__c.jic,3,__c.kic,5,__c.bic,6,__c.lic,7,__c.fic]}),aic);__c.nic=H(()=>({mask:A("mask",1,mic),params:A("params",2,__c.iic)}));__c.oic=H(()=>({a:gb(1),b:gb(2)}));__c.pic=H(()=>({type:x("type","ADJUSTMENT_V3",12,"ADJUSTMENT_V3"),y1g:A("globalParams",1,__c.iic),uje:ya("maskedParams",2,__c.nic),MOd:C("vignetteCenter",3,__c.oic),NOd:C("vignetteRadius",4,__c.oic)}));__c.qic=H(()=>({type:x("type","DUOTONE",5,"DUOTONE"),Ld:gb("intensity",1),m5g:M("highlightColorHex",2),dOh:M("shadowColorHex",3)}));__c.ric=H(()=>({type:x("type","SHADOWS",14,"SHADOWS"),color:M("color",1),opacity:gb("opacity",2),spread:gb("spread",3),blur:gb("blur",4),angle:gb("angle",5),distance:gb("distance",6),curve:gb("curve",51),rotation:gb("rotation",52),PT:gb("dropShadowDirection",53)}));__c.sic=H(()=>({type:x("type","CROP_AND_ROTATE",6,"CROP_AND_ROTATE"),vz:gb("centerX",1),KF:gb("centerY",2),nib:gb("cropWidth",3),nxb:gb("cropHeight",4),rotation:gb("rotation",5),flipX:Q("flipX",6),flipY:Q("flipY",7)}));var tic=I(()=>[1,"FOREGROUND",2,"TEXT",3,"SEGMENTATION"]);__c.uic=H(()=>({type:x("type","INPAINTING",9,"INPAINTING"),mask:A("mask",2,mic),T2d:Q("dilateMask",3),target:Aa("target",4,tic)}));__c.vic=H(()=>({text:M("text",1),locale:M("locale",2)}));__c.wic=H(()=>({type:x("type","PROMPT_EDITING",17,"PROMPT_EDITING"),prompt:A("prompt",1,__c.vic),mask:C("mask",2,mic),seed:hb("seed",3),lte:kb("promptGuidanceScale",4),Ede:kb("imageGuidanceScale",5),nte:kb("protectionStrength",6)}));var xic=I(()=>[1,"NORMAL",2,"COLOR_HARMONIZED"]);__c.yic=H(()=>({type:x("type","PROMPT_INPAINTING",13,"PROMPT_INPAINTING"),prompt:A("prompt",1,__c.vic),mask:A("mask",35,mic),seed:hb("seed",3),roc:F("processingStyle",4,xic)}));__c.zic=H(()=>({type:x("type","AUTOFOCUS",10,"AUTOFOCUS"),oQ:gb("focusDepth",1),ML:gb("blurIntensity",2),mask:C("mask",3,mic)}));__c.Aic=H(()=>({type:x("type","GAUSSIAN_BLUR",11,"GAUSSIAN_BLUR"),Ld:gb("intensity",1)}));__c.Bic=H(()=>({type:x("type","VARIABLE_INTENSITY_GAUSSIAN_BLUR",15,"VARIABLE_INTENSITY_GAUSSIAN_BLUR"),x1g:gb("globalIntensity",2),rwf:A("intensityMask",1,mic)}));__c.Cic=H(()=>({type:x("type","OUTPAINTING",18,"OUTPAINTING"),Sth:gb("outpaintedWidth",1),Rth:gb("outpaintedHeight",2),HXh:gb("topLeftCornerX",3),IXh:gb("topLeftCornerY",4),seed:M("seed",5)}));__c.Dic=H(()=>({selection:M("selection",1),ACa:gb("luma",2),Wza:gb("chroma",3),hue:gb("hue",4)}));__c.Eic=H(()=>({type:x("type","HSL_ADJUSTMENT",19,"HSL_ADJUSTMENT"),$p:ya("adjustments",1,__c.Dic)}));__c.Fic=H(()=>({width:gb("width",1),height:gb("height",2),yfb:gb("xPosition",3),Afb:gb("yPosition",4)}));__c.Gic=H(()=>({Ld:gb("intensity",1),mask:A("mask",2,__c.lic)}));__c.Hic=H(()=>({vs:A("boundingBox",1,__c.Fic),dT:C("skinSmoothing",2,__c.Gic)}));__c.Iic=H(()=>({type:x("type","FACE_RETOUCH",20,"FACE_RETOUCH"),eYa:ya("faces",1,__c.Hic)}));__c.Jic=H(()=>({id:M("id",1),version:hb("version",2)}));__c.Kic=H(()=>({MC:A("mediaRef",1,__c.Jic),crop:C("crop",2,__c.sic),vz:gb("centerX",3),KF:gb("centerY",4),rotation:gb("rotation",5),scale:gb("scale",6)}));__c.Lic=H(()=>({type:x("type","IMAGE_MERGE",22,"IMAGE_MERGE"),ARa:A("objectImage",1,__c.Kic),Cwf:gb("interpretiveness",2),seed:hb("seed",5),wYf:Q("removeObjectBackground",3),kmh:(0,__c.Bb)("objectVectorRecoloring",4)}));__c.Mic=Fa(()=>({type:[16,Vhc,1,__c.cic,21,__c.gic,2,__c.hic,12,__c.pic,5,__c.qic,14,__c.ric,6,__c.sic,9,__c.uic,17,__c.wic,13,__c.yic,10,__c.zic,11,__c.Aic,15,__c.Bic,18,__c.Cic,19,__c.Eic,20,__c.Iic,22,__c.Lic]}),()=>({}));__c.Nic=I(()=>[1,"TRANSFORMATION",2,"FOREGROUND_MASK",3,"DEPTHMAP_MASK",4,"FACE_SEGMENTATION_MASK",5,"SEGMENTATION_MASK"]);__c.Oic=H(()=>({type:F("type",1,__c.Nic),lsb:hb("transformationIndex",2)}));__c.Pic=H(()=>({hqe:A("outputReference",1,__c.Oic),jLc:M("idempotentRecordId",2)}));__c.Qic=H(()=>({yK:ya("transformations",1,__c.Mic),kuf:ya("idempotentReferences",2,__c.Pic),Xuh:__c.yb("parentComponentMediaIds",3)}));var Ric=I(()=>[1,"GET",2,"UPDATE_METADATA",3,"UPDATE",4,"DEACTIVATE",5,"MANAGE_ACL",6,"REMIX"]);__c.er=H(()=>({id:M("id",1),brand:M("brand",2),user:N("user",3),Ouf:N("importFileUri",29),Luf:N("importBucket",4),importKey:N("importKey",5),qx:N("importFilename",6),type:F("type",7,__c.L3b),gb:A("bundle",11,__c.Thc),uJ:Q("deactivated",12),Lob:Q("oneTimeUseDiscountable",13),Ib:A("licensing",25,__c.xec),design:N("design",14),$jb:C("externalRef",16,__c.vhc),Mxb:C("derivationMetadata",21,__c.Uhc),Juc:C("transformationsData",27,__c.Qic),il:Q("restrictedAccess",17),Zq:__c.Ca("aclAllowedActions",18,Ric),
ec:ya("acl",19,__c.Qhc),created:__c.ib("created",20),updated:__c.ib("updated",22),accessToken:C("accessToken",23,__c.Aec),p2b:N("syncId",26),B9c:__c.zb("canAiTrain",28),DV:ya("contentUsageRatings",30,__c.ohc),v_:C("licenseScope",31,__c.rhc),Oja:C("transformationRestrictions",32,__c.yec),gJi:C("annotationData",33,__c.Bhc)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:d784d3801ac79adb.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[93550],{

/***/ 268383:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(52337);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {__c.LUc=__c.H(()=>({media:__c.A("media",1,__c.er)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:4e1bbb5da3e9f4f4.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[40861],{

/***/ 201438:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var F8a;__c.G8a=function(a){var b=window;const c=b.location.href;a=F8a(c,a);c!==a&&b.history.replaceState(b.history.state,b.document.title,a)};F8a=function(a,b){const c=new URL(a);if(null==c.searchParams)return a;b.forEach(d=>{"string"===typeof d?c.searchParams.delete(d):[...c.searchParams.keys()].forEach(e=>d.test(e)&&c.searchParams.delete(e))});return c.href};
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
;// __FILE_CONTENT_FOR__:1759cedb5f6d7a48.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[27132],{

/***/ 857450:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(348830);__web_req__(282285);self._fd1e22c0e0516062f8631db29060abc8 = self._fd1e22c0e0516062f8631db29060abc8 || {};(function(__c) {var N=__c.N;__c.pSc=()=>({Euk:__c.yb(3),country:N(4)});__c.Su=__c.H(()=>({...__c.pSc(),type:__c.x("A?",1,"FEATURE_BUNDLE"),brand:N(1),subscription:N(2)}));__c.qSc=__c.H(()=>({Nea:__c.yb("pricingSets",9),qK:__c.Aa("subscriberType",2,__c.$mc),Zo:__c.Aa("paymentConfigType",10,__c.Ar),Ta:__c.Aa("billingInterval",3,__c.io),Pb:__c.mb("billingIntervalCount",8),currency:N("currency",4),active:__c.zb("active",7),limit:__c.hb("limit",5,100),continuation:N("continuation",6),dQi:__c.Q("bypassCache",11)}));
}).call(self, self._fd1e22c0e0516062f8631db29060abc8);}

}])
//# sourceMappingURL=https://chunk-composing.canva.cn/chunk-batch-sm/19_sourcemaps/6aedf359a2e3998a.js.map+8+8_sourcemaps/d18c6400f2741fba.js.map+8+8_sourcemaps/1344b07badaae07b.js.map+8_sourcemaps/b30289b162e116ab.js.map+8_sourcemaps/f2c7b99a79971b29.js.map+8_sourcemaps/2bd74485fdd97ac8.js.map+23_sourcemaps/b4a44b9c061ef210.js.map+8+9_sourcemaps/d5ff8dfa5af296b7.js.map+8_sourcemaps/f52b6e79a85126c3.js.map+8+14_sourcemaps/7975f9cd92b96525.js.map+8_sourcemaps/21a4fdb32cdea40f.js.map+15_sourcemaps/48012a062183caa1.js.map+8+8+8_sourcemaps/8a4309f814569033.js.map+8_sourcemaps/8502f22f55ec464d.js.map+8+8+8_sourcemaps/ab38698e821f4268.js.map+8+8+8+8_sourcemaps/eaedf24a816ed6a8.js.map+8+8_sourcemaps/87ce35bac72e2a16.js.map+8_sourcemaps/728fd601f0a6dac4.js.map+8_sourcemaps/336db16c67e271bb.js.map+8_sourcemaps/a4302329c58660e7.js.map+8_sourcemaps/78d7254cf7dbc5a3.js.map+8_sourcemaps/3f5afc4b339230f9.js.map+8_sourcemaps/c263c96124e690e8.js.map+8_sourcemaps/e9b84aa5b4969449.js.map+13_sourcemaps/2e49ec958a0f42db.js.map+8_sourcemaps/d784d3801ac79adb.js.map+8_sourcemaps/4e1bbb5da3e9f4f4.js.map+8_sourcemaps/1759cedb5f6d7a48.js.map