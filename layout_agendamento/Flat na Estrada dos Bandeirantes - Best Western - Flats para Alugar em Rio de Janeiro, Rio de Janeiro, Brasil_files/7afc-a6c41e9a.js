(window.webpackJsonp=window.webpackJsonp||[]).push([["7afc"],{AKUS:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("q1tI");function s(e){var t=Object(i.useRef)(null);return{onBlur:Object(i.useCallback)((function(){var n=!1,i=!1,s=function e(s){var o;n=!0,i=!!(null===(o=t.current)||void 0===o?void 0:o.contains(s.target)),document.removeEventListener("focus",e,!0)};document.addEventListener("focus",s,!0),requestAnimationFrame((function(){requestAnimationFrame((function(){n||document.removeEventListener("focus",s,!0),i||e()}))}))}),[e]),ref:t}}},ORPV:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("q1tI"),s=n.n(i),o=n("AKUS");function a(e){var t=e.onOutsideFocus,n=e.children,i=Object(o.a)(t),a=i.ref,u=i.onBlur;return s.a.createElement("div",{ref:a,onBlur:u},n)}},Q2fV:function(e,t,n){"use strict";function i(e){return{"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-describedby":e["aria-describedby"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],autoComplete:"off",autoCorrect:"off",spellCheck:!1,id:e.id,onChange:e.onChange,onFocus:e.onFocus,onKeyUp:e.onKeyUp,onKeyDown:e.onKeyDown,role:e.role,ref:e.refForFocus,value:e.value}}n.d(t,"a",(function(){return i}))},RnRr:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return g}));var i=n("cVPA"),s=n.n(i),o=n("7jyO"),a=n("QD4+"),u={LOCATIONS_NEARBY:"locationsNearby",NEARBY:"nearby",POIS_IN_LOCATION:"poisInLocation",PREDICTIONS:"predictions",REFINEMENT_SECTIONS:"refinementSuggestions",SAVED_SEARCHES:"savedSearches",THINGS_TO_DO_NEARBY:"thingsToDoNearby",THINGS_TO_DO_IN_LOCATION:"thingsToDoInLocation",TRENDING_LOCATIONS_NEARBY:"trendingLocationsNearby",NEAR_ME:"nearMe"},r={PILL:"PILL",ROW:"ROW"};function c(e){var t=String(e||""),n=t.indexOf(",");return n>-1?t.slice(0,n):t}function l(e){if(!e||!e.length)return null;var t=e.map((function(e){return{key:"".concat(e.type,"_").concat(e.title),isSelected:e.is_selected,name:e.name,searchParams:{refinement_paths:Object(o.a)(e,"search_params.refinement_paths"),query:Object(o.a)(e,"search_params.query"),location:Object(o.a)(e,"search_params.location")},searchType:a.n,title:e.title}})),n=Object(o.a)(e[0],"search_params.location");return{results:t,id:u.REFINEMENT_SECTIONS,displayType:r.PILL,title:n?s.a.t("mt.explore.autocomplete.Results section title for location refinement suggestions",{location:c(n)}):s.a.t("mt.explore.autocomplete.Results sections title for refinement suggestions")}}function p(e){return{id:u.SAVED_SEARCHES,title:s.a.t("mt.explore.autocomplete.Results sections title for recent searches"),results:e}}function d(e){return{id:u.PREDICTIONS,results:e}}function g(){return{id:u.NEARBY,title:"",displayType:"ROWS",results:[{key:"nearby",name:s.a.t("autosuggestions.nearby"),title:s.a.t("autosuggestions.nearby"),imageUrl:"https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq",searchType:a.i,searchParams:{location_search:"NEARBY"},prefix:"",source:a.b,description:"",suggestionType:"NEARBY"}]}}},UfFQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("XfPh"),s=n("q7UE");function o(e){return e?(null==e?void 0:e.suggestionType)===s.c.NON_INTERACTIVE_MESSAGE?"":Object(i.a)(e,"name")?e.name:Object(i.a)(e,"location")?e.location:Object(i.a)(e,"searchParams")&&Object(i.a)(e.searchParams,"location")?e.searchParams.location:"":""}},cV4d:function(e,t,n){"use strict";var i=n("q1tI"),s=n.n(i),o=n("17x9"),a=n.n(o),u=n("cVPA"),r=n.n(u),c=n("PuV7"),l=n("Ri7V"),p=n("XfPh"),d=n("ORPV"),g=n("2jR3"),h=n("q7UE"),f=(a.a.string.isRequired,a.a.number,a.a.any,a.a.bool,a.a.func,a.a.func,a.a.func,a.a.func,a.a.func,a.a.bool,{defaultActiveIndex:-1,defaultSelectedSuggestion:null,defaultIsOpen:void 0,onChange:function(){},onSelect:function(){},onStateChange:function(){},onOutsideClick:void 0,suggestionToString:function(e){return e},checkMountBugExperiment:!1});function S(){return{"aria-atomic":!0,"aria-live":"polite",role:"status"}}function I(e){e.key===h.b.ENTER&&e.preventDefault()}var v=function(e){function t(t){var n;return(n=e.call(this,t)||this).id="Koan-".concat(t.id),n.state={activeIndex:t.defaultActiveIndex,selectedSuggestion:t.defaultSelectedSuggestion,isOpen:!!t.defaultIsOpen,isFocused:!1,userInput:null},n.activeSuggestion=null,n.getAriaDescriptionId=n.getAriaDescriptionId.bind(babelHelpers.assertThisInitialized(n)),n.getInputProps=n.getInputProps.bind(babelHelpers.assertThisInitialized(n)),n.getInputValue=n.getInputValue.bind(babelHelpers.assertThisInitialized(n)),n.getSuggestionProps=n.getSuggestionProps.bind(babelHelpers.assertThisInitialized(n)),n.getDropdownProps=n.getDropdownProps.bind(babelHelpers.assertThisInitialized(n)),n.openDropdown=n.openDropdown.bind(babelHelpers.assertThisInitialized(n)),n.closeDropdown=n.closeDropdown.bind(babelHelpers.assertThisInitialized(n)),n.selectSuggestion=n.selectSuggestion.bind(babelHelpers.assertThisInitialized(n)),n.selectActiveSuggestion=n.selectActiveSuggestion.bind(babelHelpers.assertThisInitialized(n)),n.clearInput=n.clearInput.bind(babelHelpers.assertThisInitialized(n)),n.handleInputChange=n.handleInputChange.bind(babelHelpers.assertThisInitialized(n)),n.handleInputFocus=n.handleInputFocus.bind(babelHelpers.assertThisInitialized(n)),n.handleInputKeyUp=n.handleInputKeyUp.bind(babelHelpers.assertThisInitialized(n)),n.handleMouseLeave=n.handleMouseLeave.bind(babelHelpers.assertThisInitialized(n)),n.handleSuggestionKeyUp=n.handleSuggestionKeyUp.bind(babelHelpers.assertThisInitialized(n)),n.handleOutsideFocus=n.handleOutsideFocus.bind(babelHelpers.assertThisInitialized(n)),n.setInputRef=n.setInputRef.bind(babelHelpers.assertThisInitialized(n)),n}babelHelpers.inheritsLoose(t,e);var n=t.prototype;return n.UNSAFE_componentWillReceiveProps=function(e){var t=e.defaultActiveIndex,n=e.defaultSelectedSuggestion,i=babelHelpers.objectWithoutProperties(e,["defaultActiveIndex","defaultSelectedSuggestion"]);if(n&&n!==this.props.defaultSelectedSuggestion&&n!==this.state.selectedSuggestion){var s=i.defaultIsOpen;this.setState({isOpen:!!s,activeIndex:t,selectedSuggestion:n,userInput:null})}!n&&this.props.defaultSelectedSuggestion&&this.props.defaultSelectedSuggestion===this.state.selectedSuggestion&&this.setState({selectedSuggestion:null}),t!==this.props.defaultActiveIndex&&this.state.activeIndex===this.props.defaultActiveIndex&&this.setState({activeIndex:t})},n.componentDidMount=function(){if(this.inputRef){var e=this.inputRef.value||null,t=document.activeElement===this.inputRef;if(t||e)if(this.props.checkMountBugExperiment&&l.a.getBootstrap("big_search_location_mount_fix_experiment")&&c.a.deliverExperiment("big_search_location_mount_fix",{treatment_unknown:function(){return!1},control:function(){return!0},treatment:function(){return!1}}))return;t?this.internalSetState({userInput:e,isOpen:!0,type:h.a.INPUT_FOCUS,isFocused:!0}):e&&this.setState({userInput:e})}},n.componentWillUnmount=function(){this.timeout&&clearTimeout(this.timeout)},n.getSuggestionElementId=function(e){return"".concat(this.id,"__option-").concat(e)},n.getInputValue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.focusedInputValue,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,i=n.userInput,s=n.selectedSuggestion,o=n.isFocused,a=this.props.suggestionToString;if(this.activeSuggestion)return this.activeSuggestion;if(null!=i)return i;if(o&&null!=t)return t;if(null!=s){var u=a(s);return null!=u?u:""}return""},n.getInputProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.focusedInputValue,n=e.id,i=this.state,s=i.activeIndex,o=i.isFocused,a=i.isOpen;this.inputId=this.inputId||n||"".concat(this.id,"__input");var u=this.getInputValue({focusedInputValue:t}),r=a&&s>=0?this.getSuggestionElementId(s):void 0;return{"aria-activedescendant":r,"aria-autocomplete":"list","aria-expanded":a,"aria-owns":a?this.getDropdownId():void 0,id:this.inputId,isFocused:o,onChange:this.handleInputChange,onFocus:this.handleInputFocus,onKeyUp:this.handleInputKeyUp,onKeyDown:I,refForFocus:this.setInputRef,role:"combobox",value:u}},n.getDropdownId=function(){return"".concat(this.id,"__listbox")},n.getDropdownProps=function(){return{"aria-label":r.a.t("search.voiceover.VoiceOver_description_for_list_of_search_suggestions"),id:this.getDropdownId(),onMouseLeave:this.handleMouseLeave}},n.getAriaDescriptionId=function(){return"".concat(this.id,"__description")},n.getSuggestionProps=function(e){var t=this,n=e.suggestion;n||Object(g.b)(new Error("suggestion is a required prop of getSuggestionProps"));var i=this.state.activeIndex;this.suggestions.push(n);var s=this.suggestions.length-1,o=function(){s!==t.state.activeIndex&&t.setActiveIndex(s,{type:h.a.SUGGESTION_MOUSE_ENTER})};return{"aria-selected":i===s,id:this.getSuggestionElementId(s),isActive:i===s,onClick:function(e){e.preventDefault(),t.selectSuggestion(n,{type:h.a.CLICK})},onFocus:o,onKeyUp:this.handleSuggestionKeyUp,onMouseEnter:o,role:"option",tabIndex:-1}},n.getStateAndHelpers=function(){var e=this.state,t=e.activeIndex,n=e.isFocused,i=e.isOpen,s=e.selectedSuggestion,o=e.userInput,a=this.getAriaDescriptionId,u=this.getDropdownProps,r=this.getInputProps,c=this.getInputValue,l=this.getSuggestionProps,p=this.openDropdown,d=this.closeDropdown,g=this.selectSuggestion,h=this.selectActiveSuggestion,f=this.clearInput,I=this.props.suggestionToString;return{getAriaDescriptionId:a,getDropdownProps:u,getInputProps:r,getInputValue:c,getStatusProps:S,getSuggestionProps:l,openDropdown:p,closeDropdown:d,selectSuggestion:g,selectActiveSuggestion:h,clearInput:f,id:this.id,activeIndex:t,isFocused:n,isOpen:i,userInput:o,selectedSuggestion:s,suggestionToString:I}},n.setActiveIndex=function(e,t){this.internalSetState(Object.assign({activeIndex:e},t))},n.setInputRef=function(e){this.inputRef=e},n.getSuggestionCount=function(){return this.suggestions.length},n.handleInputChange=function(e){var t="string"==typeof e?e:e&&e.target&&e.target.value;null!=this.activeSuggestion&&(this.activeSuggestion=null),this.internalSetState({type:h.a.INPUT_CHANGE,isOpen:!0,userInput:t})},n.handleInputFocus=function(){var e=this;this.timeout=setTimeout((function(){if(e.timeout=null,e.inputRef&&"function"==typeof e.inputRef.setSelectionRange){var t=e.inputRef.value&&e.inputRef.value.length||0;e.inputRef.setSelectionRange(t,t)}e.internalSetState({isOpen:!0,type:h.a.INPUT_FOCUS,isFocused:!0})}))},n.handleInputKeyUp=function(e){var t=e.key;t===h.b.ARROW_DOWN?this.handleKeyArrowDown(e):t===h.b.ARROW_UP?this.handleKeyArrowUp(e):t===h.b.ENTER?this.handleKeyEnter(e):t===h.b.ESCAPE&&this.handleKeyEscape(e)},n.handleMouseLeave=function(){var e=this.props.defaultActiveIndex;this.internalSetState({activeIndex:e,type:h.a.MOUSE_LEAVE})},n.handleSuggestionKeyUp=function(e){e.key===h.b.ENTER&&this.handleKeyEnter(e)},n.handleKeyArrowDown=function(e){e.preventDefault(),this.state.isOpen?this.moveActiveIndexByKey(1,{type:h.a.KEY_ARROW_DOWN}):this.internalSetState({type:h.a.KEY_ARROW_DOWN,isOpen:!0})},n.handleKeyArrowUp=function(e){e.preventDefault(),this.state.isOpen&&this.moveActiveIndexByKey(-1,{type:h.a.KEY_ARROW_UP})},n.handleKeyEnter=function(e){e.preventDefault();var t=this.state,n=t.activeIndex,i=t.userInput;(-1===n||0===this.getSuggestionCount())&&i&&i.length>0?this.handleSubmit():this.selectActiveSuggestion({type:h.a.KEY_ENTER})},n.handleKeyEscape=function(e){var t=this.props.defaultActiveIndex;e.preventDefault(),this.activeSuggestion=null,this.internalSetState({type:h.a.KEY_ESC,isOpen:!1,activeIndex:t})},n.moveActiveIndexByKey=function(e,t){var n=this.getSuggestionCount()-1;if(!(n<0)){var i=this.props.suggestionToString,s=this.state.activeIndex+e;s<-1?s=n:s>n&&(s=-1),this.activeSuggestion=-1===s?null:i(this.suggestions[s]),this.internalSetState(Object.assign({activeIndex:s},t))}},n.selectActiveSuggestion=function(e){var t=this.props.defaultActiveIndex,n=this.state.activeIndex,i=-1===n?t:n,s=this.suggestions[i];null!=s&&this.selectSuggestion(s,e)},n.handleSubmit=function(){var e=this.props.defaultActiveIndex;this.internalSetState({type:h.a.INPUT_SUBMIT,isOpen:!1,activeIndex:e})},n.selectSuggestion=function(e,t){var n=this.props,i=n.defaultActiveIndex,s=n.suggestionToString;this.internalSetState(Object.assign({isOpen:!1,activeIndex:i,selectedSuggestion:e,inputValue:s(e),userInput:s(e)},t))},n.clearInput=function(e){var t=this;this.isClearing=!0,this.internalSetState({userInput:"",inputValue:"",selectedSuggestion:this.props.defaultSelectedSuggestion,type:h.a.INPUT_CLEAR},(function(){t.timeout=setTimeout((function(){t.timeout=null,t.isClearing=!1,t.activeSuggestion=null,t.inputRef&&"function"==typeof t.inputRef.focus&&t.inputRef.focus(),"function"==typeof e&&e()}))}))},n.internalSetState=function(e,t){var n,i,s,o=this,a="function"==typeof e,u={},r=!1;return this.setState((function(t){var c={},l=a?e(t):e;return(n=Object(p.a)(l,"selectedSuggestion")&&l.selectedSuggestion!==o.props.defaultSelectedSuggestion)&&(i=l.selectedSuggestion,s={interactionType:l.type,activeIndex:t.activeIndex,userInput:t.userInput},r=n&&i!==t.selectedSuggestion),Object.entries(l).forEach((function(e){var n=babelHelpers.slicedToArray(e,2),i=n[0],s=n[1];t[i]!==s&&(u[i]=s),"userInput"===i&&(u.inputValue=o.getInputValue(void 0,l)),"type"!==i&&("isOpen"===i&&null!=o.props.defaultIsOpen||(c[i]=s))})),c}),(function(){"function"==typeof t&&t(),o.props.onStateChange(u,o.getStateAndHelpers()),n&&o.props.onSelect(i,s,o.getStateAndHelpers()),r&&o.props.onChange(i,s,o.getStateAndHelpers())}))},n.handleOutsideFocus=function(){var e=this.props.onOutsideClick,t=this.state.userInput;this.isClearing||("function"!=typeof e?this.closeDropdown(Object.assign({type:h.a.INPUT_BLUR},""===t?{userInput:null}:null)):e(this.getStateAndHelpers()))},n.openDropdown=function(){this.internalSetState({isOpen:!0})},n.closeDropdown=function(e){var t=this.props.defaultActiveIndex;this.activeSuggestion=null,this.internalSetState(Object.assign({isOpen:!1,isFocused:!1,activeIndex:t},e))},n.clearSuggestions=function(){this.suggestions=[]},n.reset=function(e,t){this.internalSetState(Object.assign({isOpen:!1,activeIndex:this.props.defaultActiveIndex,userInput:null},e),t)},n.render=function(){return this.clearSuggestions(),s.a.createElement(d.a,{onOutsideFocus:this.handleOutsideFocus},this.props.render(this.getStateAndHelpers()))},t}(i.Component);v.defaultProps=f,t.a=v},q7UE:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var i={CLICK:"click",SELECT_SUGGESTION:"select_suggestion",KEY_ENTER:"key_enter",KEY_ESC:"key_esc",KEY_ARROW_UP:"key_arrow_up",KEY_ARROW_DOWN:"key_arrow_down",SUGGESTION_MOUSE_ENTER:"suggestion_mouse_enter",INPUT_FOCUS:"input_focus",INPUT_BLUR:"input_blur",INPUT_CHANGE:"input_change",INPUT_CLEAR:"input_clear",INPUT_SUBMIT:"input_submit",CLEAR_BUTTON:"clear_button",CLICK_BUTTON:"click_button",MOUSE_LEAVE:"mouse_leave"},s={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape"},o={LOCATION:"LOCATION",PDP_NAV:"PDP_NAV",SITE_NAV:"SITE_NAV",SUGGESTED_POIS:"SUGGESTED_POIS",SCENARIOS:"SCENARIOS",NON_INTERACTIVE_MESSAGE:"NON_INTERACTIVE_MESSAGE"}}}]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/7afc-8564d854.js.map