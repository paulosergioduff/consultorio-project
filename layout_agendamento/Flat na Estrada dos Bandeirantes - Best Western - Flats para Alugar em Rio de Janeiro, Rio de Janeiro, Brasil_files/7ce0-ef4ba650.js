(window.webpackJsonp=window.webpackJsonp||[]).push([["7ce0"],{"1JtT":function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c}));var a=t("CX+m"),i=Object(a.a)("RequestToken"),r=(Object(a.a)("RouteConfigToken"),Object(a.a)("TrebuchetToken")),o=(Object(a.a)("AllTrebuchetsToken"),Object(a.a)("TrebuchetConfigToken",{hydrate:!0}),Object(a.a)("CookieToken")),c=Object(a.a)("PerformanceToken");Object(a.a)("IsUserLoggedInToken"),Object(a.a)("CacheControlToken")},"1gOM":function(e,n,t){"use strict";t.d(n,"b",(function(){return a}));var a="0.3s";n.a="".concat(a," cubic-bezier(0.35, 0, 0.65, 1)")},"390E":function(e,n,t){"use strict";var a=t("FcZ/"),i=t("/OlG"),r=t("duqn"),o=t("xD4k"),c=t("Atcl");n.a=Object(i.a)(r.b,(function(e){var n=e.dls19;return{container:Object.assign({},Object(o.g)(),{alignItems:"center",display:"inline-flex",height:a.a,position:"relative",verticalAlign:"middle",zIndex:1,"::before":{borderRadius:n.cornerRadius.medium,bottom:8,content:'""',left:-8,position:"absolute",right:-8,top:8}},Object(c.a)({"::before":Object.assign({},Object(o.c)(),{boxShadow:"0px 0px 0px 2px ".concat(n.palette.hof,", 0px 0px 0px 4px ").concat(n.palette.white)})})),container_immersive:{color:n.palette.white},logo:babelHelpers.defineProperty({display:"none"},n.responsive.queries.largeAndAbove,{display:"block"}),belo:babelHelpers.defineProperty({},n.responsive.queries.largeAndAbove,{display:"none"})}}))},"3H7j":function(e,n,t){"use strict";t.d(n,"a",(function(){return _}));var a=t("q1tI"),i=t.n(a),r=t("12sY"),o=t("C5Hk"),c=t("oVUq"),s=t("xG3B"),l=t("nKVJ"),d=t("OeS1"),u=t("HWzG"),m=t("iV43"),g=t("wuQp"),f=t("CeY+"),p=t("2jR3"),v=t("IZrh"),h=t("gbjt");function b(e){var n,t=e.queryRef,c=Object(d.a)(),b=babelHelpers.slicedToArray(c,2),_=b[0],k=b[1],O=Object(r.d)({query:o.a,queryRef:t}),I=O.data,j=O.refetch,E=null==I||null===(n=I.presentation)||void 0===n?void 0:n.header,y=Object(s.a)(E,Boolean),H=E||y,x=Object(l.a)(),S=Object(u.a)(),N=Object(f.a)(),C=Object(v.b)(),T=Object(h.b)();Object(a.useEffect)((function(){T&&S&&j({cdnCacheSafe:!1,isInitialLoad:!1})}),[T,j,C,S]);var A=T&&!H;return Object(a.useEffect)((function(){A&&Object(p.b)("ViaductContent missing data",{tags:{team:"search-input"}})}),[A]),T&&H?i.a.createElement(g.a,{loggingID:"simpleHeader.content.viaduct",shouldLogImpression:!0,headerData:H,menuBadge:_,profileSrc:x,onProfileMenuPress:k,isLoggedIn:S,showActionTray:N}):i.a.createElement(m.a,{loggingID:A?"simpleHeader.content.staticFallback":"simpleHeader.content.static",shouldLogImpression:!0})}function _(){var e=Object(a.useContext)(c.a);return Object(a.useEffect)((function(){!e&&Object(h.b)()&&Object(p.b)("HeaderQueryRef context not provided",{tags:{team:"search-input"}})}),[e]),e?i.a.createElement(b,{queryRef:e}):i.a.createElement(m.a,{key:"missing-context-header",loggingID:"simpleHeader.content.staticFallback",shouldLogImpression:!0})}},"3XdL":function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a),r=t("cVPA"),o=t.n(r),c=t("fcgg"),s=t("F//1"),l=t("9hl7"),d=t("4W8J"),u=t("FzTo"),m=t("J116"),g=t("EJkM"),f=t("KL7C"),p=t("UNJ8"),v=t("504r"),h=t("5nVd");function b(e){var n=e.hasAlerts,t=void 0!==n&&n,a=e.hasExperiencesActions,r=void 0!==a&&a,b=e.hasStaysActions,_=void 0!==b&&b,k=e.hasTripActions,O=void 0!==k&&k,I=e.initialMenuExpanded,j=void 0!==I&&I,E=e.isBusinessTravelManager,y=void 0!==E&&E,H=e.isExperiencesHost,x=void 0!==H&&H,S=e.isHostReferralEligible,N=void 0!==S&&S,C=e.isStaysHost,T=void 0!==C&&C,A=e.unreadMessageCount,F=void 0===A?0:A,w=e.profileSrc,M=e.showActionTray,q=[t,r,_,O,F].filter(Boolean).length,D=T||_,L=x||r;return i.a.createElement(d.a,{actionTray:M&&i.a.createElement(p.a,{fadeFromTop:!0}),links:i.a.createElement(i.a.Fragment,null,D&&i.a.createElement(h.a,{href:"/hosting",loggingID:"simpleHeader.loggedIn.switchToHosting.stays"},o.a.t("simple_nav.header.switch_to_hosting")),L&&!D&&i.a.createElement(h.a,{href:"/experience-hosting",loggingID:"simpleHeader.loggedIn.switchToHosting.experiences"},o.a.t("simple_nav.header.switch_to_hosting")),!D&&!L&&i.a.createElement(h.a,{href:"/host/homes",loggingID:"simpleHeader.loggedIn.becomeAHost"},o.a.t("simple_nav.header.become_a_host")),i.a.createElement(g.a,{onPress:v.a,loggingID:"simpleHeader.loggedIn.localeSettingsMenu"})),button:i.a.createElement(f.a,{badge:q,id:"field-guide-toggle",initialOpen:j,loggingID:"simpleHeader.loggedIn.profileMenu",src:w,onPress:v.a},i.a.createElement(s.a,{href:"/guest/inbox",badge:!!F,after:F?o.a.t("simple_nav.header.unread_count",{smart_count:F}):void 0,loggingID:"simpleHeader.loggedIn.profileMenu.inbox"},o.a.t("simple_nav.header.inbox")),t&&i.a.createElement(s.a,{href:"/alerts",badge:!0,badgeLabel:o.a.t("simple_nav.header.has_notifications"),loggingID:"simpleHeader.loggedIn.profileMenu.notifications"},o.a.t("simple_nav.header.notifications")),i.a.createElement(s.a,{href:"/trips/v1",badge:O,badgeLabel:o.a.t("simple_nav.header.has_notifications"),loggingID:"simpleHeader.loggedIn.profileMenu.trips"},o.a.t("simple_nav.header.trips")),i.a.createElement(s.a,{href:"/wishlists",loggingID:"simpleHeader.loggedIn.profileMenu.saved"},o.a.t("simple_nav.header.saved")),i.a.createElement(c.a,null),D&&i.a.createElement(l.a,{href:"/hosting",badge:_,badgeLabel:o.a.t("simple_nav.header.has_notifications"),loggingID:"simpleHeader.loggedIn.profileMenu.manageHomes"},o.a.t("simple_nav.header.manage_homes")),!D&&i.a.createElement(l.a,{href:"/host/homes",loggingID:"simpleHeader.loggedIn.profileMenu.hostStays"},o.a.t("simple_nav.header.host_stays")),L&&i.a.createElement(l.a,{href:"/experience-hosting",badge:r,badgeLabel:o.a.t("simple_nav.header.has_notifications"),loggingID:"simpleHeader.loggedIn.profileMenu.manageExperiences"},o.a.t("simple_nav.header.manage_experiences")),!L&&i.a.createElement(l.a,{href:"/d/onlinehost",loggingID:"simpleHeader.loggedIn.profileMenu.hostExperiences"},o.a.t("simple_nav.header.host_experiences")),y&&i.a.createElement(l.a,{href:"/business/company_dashboard/trips",loggingID:"simpleHeader.loggedIn.profileMenu.companyDashboard"},o.a.t("simple_nav.header.company_dashboard")),N&&i.a.createElement(l.a,{href:"/refer?r=67",loggingID:"simpleHeader.loggedIn.profileMenu.referAHost"},o.a.t("host_referral_default_no_reward_content.host_account_menu_title")),i.a.createElement(l.a,{href:"/account-settings",loggingID:"simpleHeader.loggedIn.profileMenu.accountSettings"},o.a.t("simple_nav.header.account")),i.a.createElement(c.a,null),i.a.createElement(u.a,{href:"/help",loggingID:"simpleHeader.loggedIn.profileMenu.help"},o.a.t("simple_nav.header.help")),i.a.createElement(m.a,{href:"/logout",loggingID:"simpleHeader.loggedIn.profileMenu.logout"},o.a.t("simple_nav.header.log_out")))})}n.a=Object(a.memo)(b)},"4Fz2":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return r}));var a=t("q1tI");function i(n,t){if(e.window&&window.IntersectionObserver){var a=new window.IntersectionObserver((function(e){return e.forEach((function(e){var n=e.intersectionRatio;t(n)}))}),{threshold:[0,1e-4]}),i=document.createElement("div");return i.style.cssText="top: ".concat(n,"px; position: absolute; height: 1px; width: 1px; z-Index: -1;"),document.body.appendChild(i),a.observe(i),function(){a.disconnect(),document.body.removeChild(i)}}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=Object(a.useState)(!1),t=babelHelpers.slicedToArray(n,2),r=t[0],o=t[1];return Object(a.useEffect)((function(){return i(e,(function(e){return o(e<=0)}))}),[e]),r}}).call(this,t("yLpj"))},"96GX":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t("q1tI"),i=t.n(a),r=t("o5FU"),o=t("xagb"),c=t("OeS1");function s(){var e=Object(c.a)(),n=babelHelpers.slicedToArray(e,2),t=n[0],a=n[1];return i.a.createElement(r.a,{badge:t,hasLoggedIn:"1"===Object(o.a)("hli"),onMenuPress:a})}},Brh9:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("q1tI"),i=t("zLbU"),r=t.n(i),o=t("POPd");function c(){var e=Object(a.useState)(!1),n=babelHelpers.slicedToArray(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){var e=!1;return(Object(o.a)("business_travel_status"),r.a.get("/v2/users/me",{data:{_format:"for_a4w_header"}}).then((function(e){var n=e.user,t=n.business_travel_manager,a=n.is_booker_dashboard_launched;return!!t||!!a})).catch((function(){return!1}))).then((function(n){e||i(n)})),function(){e=!0}}),[]),t}},C5Hk:function(e,n,t){"use strict";var a=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Header"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cdnCacheSafe"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasLoggedIn"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isInitialLoad"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presentation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"header"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeaderFragment"},"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeaderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Header"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"topLevelItemGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cdnCacheSafe"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cdnCacheSafe"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeaderItemGroupFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"menuItemGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cdnCacheSafe"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cdnCacheSafe"}}},{"kind":"Argument","name":{"kind":"Name","value":"hasLoggedIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasLoggedIn"}}},{"kind":"Argument","name":{"kind":"Name","value":"isInitialLoad"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isInitialLoad"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeaderItemGroupFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeaderItemGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeaderItemGroup"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"groupId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"caption"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasBadge"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"itemId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"loggingId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"primary"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}],"operationType":"QUERY"}');a.operationId="44a36b6ecc2473f6afe861fe1efbcf92be8c69b385017a24362b72c66b662c90",a.integrityHash="97e6053a8c1220d629d83a8b482851d728382adaecdd13650d1cf33a5e6fdedf",n.a=a},D3tq:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),i=t.n(a);function r(){return i.a.createElement("svg",{width:"102",height:"32",fill:"currentcolor",style:{display:"block"}},i.a.createElement("path",{d:"M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z"}))}},Ex4e:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("q1tI"),i=t("zLbU"),r=t.n(i),o=t("Ri7V"),c=t("PuV7"),s=t("POPd");function l(){var e=Object(a.useState)(!1),n=babelHelpers.slicedToArray(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){if(o.a.getBootstrap("guest_header.host_referrals_header_item_force")||o.a.getBootstrap("guest_header.host_referrals_header_item")&&c.a.deliverExperiment("guest_header_host_referrals_header_item",{treatment_unknown:function(){return!1},control:function(){return!1},treatment:function(){return!0}})){var e=!1;return Object(s.a)("host_referral_eligibility"),r.a.get("/v2/host_referral_eligibilities",{data:{touch_point:"ACCOUNT_MENU"}}).then((function(e){return!!e.host_referral_eligibility.is_eligible})).catch((function(){return!1})).then((function(n){e||i(n)})),function(){e=!0}}}),[]),t}},"FcZ/":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=80},IZrh:function(e,n,t){"use strict";t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return p}));var a=t("q1tI"),i=t("zLbU"),r=t.n(i),o=t("tl9J"),c=t.n(o),s=t("OtDV"),l=t("qJkm"),d=t("psvr"),u=t("JnFx"),m=t("POPd");function g(){Object(m.a)("trip_actions");var e=l.a.current().id;return r.a.get("/v2/pending_sections/".concat(e,"?skipPaymentRefunds=true")).then((function(e){var n=e.pending_section,t=(n=void 0===n?{}:n).actions,a=void 0===t?[]:t;if(0===a.length)return!1;var i=c()("itinerary/pending_actions/dismissed");return!i||a.filter((function(e){return!(e.id in i)})).length>0}),(function(){return!1}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e5,n=Object(a.useState)(0),t=babelHelpers.slicedToArray(n,2),i=t[0],r=t[1],o=Object(a.useCallback)((function(n){var t=performance.now();(n||"hidden"!==document.visibilityState&&t>=i+e)&&r(t)}),[e,i]),c=Object(a.useCallback)((function(){return o(!1)}),[o]),s=Object(a.useCallback)((function(){return o(!0)}),[o]);return Object(a.useEffect)((function(){var n=setTimeout(c,e);return function(){clearTimeout(n)}}),[i,c,e]),Object(a.useEffect)((function(){return document.addEventListener("visibilitychange",c),function(){document.removeEventListener("visibilitychange",c)}}),[c]),Object(u.a)("simpleHeader:refetchContent",s),i}function p(){var e=Object(d.a)("simple-header-notifications",{}),n=babelHelpers.slicedToArray(e,2),t=n[0],i=n[1],r=f();return Object(a.useEffect)((function(){var e=!1;return Promise.all([(Object(m.a)("messaging_unread_count"),s.default.getJSON("/messaging-unread-count").then((function(e){return{hasAlerts:!!e.num_alert,unreadMessageCount:e.num_msg}}),(function(){return{hasAlerts:!1,unreadMessageCount:0}}))),(Object(m.a)("stays_actions"),s.default.getJSON("/global_supply/host_header").then((function(e){return!!e.should_show_header}),(function(){return!1}))),(Object(m.a)("experience_actions"),s.default.getJSON("/global_supply/experience_host_cta").then((function(e){return!!e.should_show_cta}),(function(){return!1}))),g()]).then((function(e){var n=babelHelpers.slicedToArray(e,4),t=n[0],a=t.hasAlerts,i=t.unreadMessageCount,r=n[1];return{hasAlerts:a,hasExperiencesActions:n[2],hasStaysActions:r,hasTripActions:n[3],unreadMessageCount:i}})).then((function(n){e||i(n)})),function(){e=!0}}),[r,i]),t}},"Iu/j":function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a);n.a=function(e,n){return function(t){return i.a.createElement(e,Object.assign({},t,n))}}},Iwa7:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("LHpX");function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(a.a)();return n.find((function(n){return n.experiment===e}))}},LHpX:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("ilXw"),i=t.n(a);function r(){return i.a.get("exploreTreatments")||[]}},Mo7q:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));var a="--page-shell-max-content-width";function i(e){return{maxWidth:e,"@supports(--a:a)":{maxWidth:"var(".concat(a,", ").concat("number"==typeof e?"".concat(e,"px"):e,")")}}}},N9vb:function(e,n,t){"use strict";(function(e){var t=/-shared-development$/.test(e.env.SERVICE_NAMESPACE);n.a=t}).call(this,t("8oxB"))},O5Nq:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t("8dvS"),i=t.n(a),r=t("QRU4");function o(){return i()("prod"===(null===(e=document.querySelector("html"))||void 0===e||null===(n=e.dataset)||void 0===n?void 0:n.csrfTokenEnv)?"_csrf_token":Object(r.a)()&&/localhost\.airbnb\./.exec(window.location.hostname)?"_csrf_token_dev":"_csrf_token");var e,n}},POPd:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("ANar");function i(e){Object(a.a)("static_header.request",1,{name:e},!0)}},QRU4:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("N9vb"),i=function(){return a.a}},duqn:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t("q1tI"),i=t.n(a),r=t("cVPA"),o=t.n(r),c=t("j0ku"),s=t("/OlG"),l=t("qVii"),d=t("gHjp");var u=Object(c.a)("HeaderLogo",["onPress"])((function(e){var n=e.LogoSVG,t=e.href,a=void 0===t?"/":t,r=e.label,c=void 0===r?o.a.t("simple_nav.header.homepage"):r,s=e.onPress,u=e.css,m=e.styles,g=Object(l.b)();return i.a.createElement("a",Object.assign({},u(m.container,g?m.container_immersive:m.container_standard),{"aria-label":c,href:a,onClick:s}),i.a.createElement("div",u(m.logo),i.a.createElement(n,null)),i.a.createElement("div",u(m.belo),i.a.createElement(d.a,null)))})),m=Object(s.b)((function(){return{container:{},container_immersive:{},container_standard:{},logo:{},belo:{}}}))},gHjp:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),i=t.n(a);function r(){return i.a.createElement("svg",{width:"30",height:"32",fill:"currentcolor",style:{display:"block"}},i.a.createElement("path",{d:"M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"}))}},gbjt:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));var a=t("qBug"),i=["treatment"],r="viaduct_header_content_v2";function o(e){return i.includes(Object(a.a)(r,e))}},hKNs:function(e,n,t){"use strict";var a=t("Vc5N"),i=t("/OlG"),r=t("pTPB"),o=t("hLMG"),c=t("q3fx"),s=t("Iu/j"),l=Object(i.a)(o.a,(function(e){var n=e.dls19;return{container:babelHelpers.defineProperty({},c.a,n.palette.rausch),container_unstuck:{"::after":{opacity:0}}}}));n.a=Object(s.a)(Object(a.d)(l)(r.a),{immersive:!1,placeholder:!1})},hLMG:function(e,n,t){"use strict";var a=t("/OlG"),i=t("FcZ/"),r=t("pTPB"),o=t("zcaP"),c=t("YEIt"),s=t("Mo7q"),l=t("1gOM"),d=t("jR4Z"),u=t("u4z9");n.a=Object(a.a)(r.b,(function(e){var n=e.dls19;return{container:{height:i.a,position:"fixed",left:0,width:"100%",zIndex:u.a.header,"::before":babelHelpers.defineProperty({backgroundImage:"linear-gradient(to bottom, #000, rgba(0, 0, 0, 0))",content:'""',height:"140%",left:0,opacity:0,pointerEvents:"none",position:"absolute",top:0,transition:"opacity ".concat(l.a),width:"100%",zIndex:0},c.b,{transition:"none"}),"::after":babelHelpers.defineProperty({background:n.palette.white,boxShadow:d.a.tertiary,content:'""',height:"100%",left:0,opacity:0,position:"absolute",top:0,transition:"opacity ".concat(l.a),width:"100%",zIndex:0},c.b,{transition:"none"})},container_standard:{"::after":{opacity:1}},container_immersive:{color:n.palette.white,"::before":{opacity:.4,transitionDelay:l.b}},container_disableScroll:{position:"absolute"},content:{alignItems:"center",display:"flex",height:"100%",position:"relative",width:"100%",zIndex:1},content_maxWidth:Object.assign({},Object(s.b)(n.responsive.breakpoints.xlargeAndAbove),Object(o.a)({dls19:n}),{margin:"0 auto"}),content_fullWidth:{padding:"0 ".concat(n.spacing.primitives.outerSpacing_xsmallAndAbove,"px")},contentSearch:{flex:"1 1 auto",minWidth:0,padding:"0 24px",textAlign:"center"},placeholder:{height:i.a}}}))},iV43:function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a),r=t("j0ku"),o=t("HWzG"),c=t("96GX"),s=t("pcvX");n.a=Object(r.a)("ContentContainer",[])((function(){return Object(o.a)()?i.a.createElement(s.a,null):i.a.createElement(c.a,null)}))},o5FU:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var a=t("q1tI"),i=t.n(a),r=t("cVPA"),o=t.n(r),c=t("CbAB"),s=t("4W8J"),l=t("FzTo"),d=t("EJkM"),u=t("KL7C"),m=t("fcgg"),g=t("F//1"),f=t("9hl7"),p=t("5nVd");function v(e){var n=e.badge,t=void 0!==n&&n,a=e.hasLoggedIn,r=void 0!==a&&a,v=e.initialMenuExpanded,h=void 0!==v&&v,b=e.onMenuPress,_={href:"/login",onPress:c.a,children:o.a.t("simple_nav.header.log_in"),loggingID:"simpleHeader.loggedOut.profileMenu.logIn",preventClientRouting:!0,dataTestId:"cypress-headernav-login"},k={href:"/signup_login",onPress:c.b,children:o.a.t("simple_nav.header.sign_up"),loggingID:"simpleHeader.loggedOut.profileMenu.signUp",preventClientRouting:!0,dataTestId:"cypress-headernav-signup"};return i.a.createElement(s.a,{links:i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{href:"/host/homes",loggingID:"simpleHeader.loggedOut.becomeAHost"},o.a.t("simple_nav.header.become_a_host")),i.a.createElement(d.a,{loggingID:"simpleHeader.loggedOut.localeSettingsMenu"})),button:i.a.createElement(u.a,{badge:t,id:"field-guide-toggle",initialOpen:h,loggingID:"simpleHeader.loggedOut.profileMenu",onPress:b},i.a.createElement(g.a,r?_:k),i.a.createElement(f.a,r?k:_),i.a.createElement(m.a,null),i.a.createElement(f.a,{href:"/host/homes",loggingID:"simpleHeader.loggedOut.profileMenu.hostStays"},o.a.t("simple_nav.header.host_stays")),i.a.createElement(f.a,{href:"/d/onlinehost",loggingID:"simpleHeader.loggedOut.profileMenu.hostExperiences"},o.a.t("simple_nav.header.host_experiences")),i.a.createElement(l.a,{href:"/help",loggingID:"simpleHeader.loggedOut.profileMenu.help"},o.a.t("simple_nav.header.help")))})}},oVUq:function(e,n,t){"use strict";var a=t("q1tI"),i=t.n(a);n.a=i.a.createContext(null)},pTPB:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t("q1tI"),i=t.n(a),r=t("j0ku"),o=t("/OlG"),c=t("x6Hv"),s=t("qVii"),l=t("4Fz2");var d=Object(r.a)("HeaderContainer",[])((function(e){var n=e.disableScroll,t=void 0!==n&&n,a=e.immersive,r=void 0!==a&&a,o=e.placeholder,d=void 0===o?!r:o,u=e.links,m=e.logo,g=e.search,f=e.css,p=e.styles,v=Object(c.b)(),h=Object(l.a)()&&!t,b=r&&!h;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a.Provider,{value:b},i.a.createElement("header",f(p.container,b?p.container_immersive:p.container_standard,h?p.container_stuck:p.container_unstuck,t&&p.container_disableScroll),i.a.createElement("div",f(p.content,v?p.content_fullWidth:p.content_maxWidth),i.a.createElement("div",f(p.contentLogo),m),i.a.createElement("div",f(p.contentSearch),g),i.a.createElement("div",f(p.contentLinks),u)))),d&&i.a.createElement("div",f(p.placeholder)))})),u=Object(o.b)((function(){return{container:{},container_immersive:{},container_standard:{},container_stuck:{},container_unstuck:{},container_disableScroll:{},content:{},content_fullWidth:{},content_maxWidth:{},contentLogo:{},contentSearch:{},contentLinks:{},placeholder:{},contentCollapsed:{},contentExpanded:{},placeholder_expanded:{}}}))},pcvX:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t("q1tI"),i=t.n(a),r=t("nKVJ"),o=t("3XdL"),c=t("IZrh"),s=t("yufC"),l=t("Brh9"),d=t("CeY+"),u=t("Ex4e");function m(){return i.a.createElement(o.a,Object.assign({},Object(s.a)(),Object(c.a)(),{isBusinessTravelManager:Object(l.a)(),isHostReferralEligible:Object(u.a)(),profileSrc:Object(r.a)(),showActionTray:Object(d.a)()}))}},qBug:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("Iwa7"),i=t("LHpX");function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(i.a)(),t=Object(a.a)(e,n)||{},r=t.treatmentName;return r||"treatment_unknown"}},qVii:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return r}));var a=t("q1tI"),i=t.n(a).a.createContext(!1);i.displayName="ImmersiveContext";var r=function(){return Object(a.useContext)(i)}},szEB:function(e,n,t){"use strict";var a=t("Vc5N"),i=t("Iu/j"),r=t("duqn"),o=t("D3tq"),c=t("390E"),s=t("/OlG"),l=Object(s.a)(c.a,(function(e){return{container_standard:{color:e.dls19.palette.rausch}}}));n.a=Object(a.d)(l)(Object(i.a)(r.a,{LogoSVG:o.a,loggingID:"simpleHeader.logo.default"}))},x6Hv:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return r}));var a=t("q1tI"),i=t.n(a).a.createContext(!1);i.displayName="FullWidthContent";var r=function(){return Object(a.useContext)(i)}},xagb:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t("q1tI"),i=t("8dvS"),r=t.n(i),o=t("vTSH"),c=t("1JtT");function s(e){var n=function(){var e=Object(a.useContext)(o.a);if(e)try{return e.get(c.a)}catch(e){return}}(),t=Object(a.useState)((function(){return n?n(e):null})),i=babelHelpers.slicedToArray(t,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){n||l(r()(e))}),[e,n]),s}},yufC:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("q1tI"),i=t("zLbU"),r=t.n(i),o=t("psvr");function c(){var e=Object(o.a)("simple-header-host-status",{isStaysHost:!1,isExperiencesHost:!1}),n=babelHelpers.slicedToArray(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){var e=!1;return r.a.get("/v2/users/me",{data:{_format:"for_pwa_navigation"}}).then((function(n){var t=n.user,a=t.is_host,r=t.is_trip_host;e||i({isStaysHost:a,isExperiencesHost:r})})).catch((function(){})),function(){e=!0}}),[i]),t}}}]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/7ce0-b23abd74.js.map