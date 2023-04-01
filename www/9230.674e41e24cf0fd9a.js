"use strict";(self.webpackChunkmovies_app=self.webpackChunkmovies_app||[]).push([[9230],{9230:(O,f,l)=>{l.r(f),l.d(f,{ion_datetime_button:()=>b});var h=l(5861),o=l(9816),k=l(6406),u=l(9397),g=l(1178),y=l(2854),d=l(6949);const b=class{constructor(s){var r=this;(0,o.r)(this,s),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=t=>null==t?[]:Array.isArray(t)?t:[t],this.setDateTimeText=()=>{const{datetimeEl:t,datetimePresentation:n}=this;if(!t)return;const{value:i,locale:e,hourCycle:a,preferWheel:m,multiple:C,titleSelectedDatesFormatter:x}=t,p=this.getParsedDateValues(i),c=(0,d.q)(p.length>0?p:[(0,d.t)()])[0],_=(0,d.J)(e,a);switch(this.dateText=this.timeText=void 0,n){case"date-time":case"time-date":const v=(0,d.T)(e,c),T=(0,d.K)(e,c,_);m?this.dateText=`${v} ${T}`:(this.dateText=v,this.timeText=T);break;case"date":if(C&&1!==p.length){let E=`${p.length} days`;if(void 0!==x)try{E=x(p)}catch(w){(0,g.a)("Exception in provided `titleSelectedDatesFormatter`: ",w)}this.dateText=E}else this.dateText=(0,d.T)(e,c);break;case"time":this.timeText=(0,d.K)(e,c,_);break;case"month-year":this.dateText=(0,d.G)(e,c);break;case"month":this.dateText=(0,d.S)(e,c,{month:"long"});break;case"year":this.dateText=(0,d.S)(e,c,{year:"numeric"})}},this.waitForDatetimeChanges=(0,h.Z)(function*(){const{datetimeEl:t}=r;return t?new Promise(n=>{(0,u.a)(t,"ionRender",n,{once:!0})}):Promise.resolve()}),this.handleDateClick=function(){var t=(0,h.Z)(function*(n){const{datetimeEl:i,datetimePresentation:e}=r;if(!i)return;let a=!1;switch(e){case"date-time":case"time-date":!i.preferWheel&&"date"!==i.presentation&&(i.presentation="date",a=!0)}r.selectedButton="date",r.presentOverlay(n,a,r.dateTargetEl)});return function(n){return t.apply(this,arguments)}}(),this.handleTimeClick=t=>{const{datetimeEl:n,datetimePresentation:i}=this;if(!n)return;let e=!1;switch(i){case"date-time":case"time-date":"time"!==n.presentation&&(n.presentation="time",e=!0)}this.selectedButton="time",this.presentOverlay(t,e,this.timeTargetEl)},this.presentOverlay=function(){var t=(0,h.Z)(function*(n,i,e){const{overlayEl:a}=r;a&&("ION-POPOVER"===a.tagName?(i&&(yield r.waitForDatetimeChanges()),a.present(Object.assign(Object.assign({},n),{detail:{ionShadowTarget:e}}))):a.present())});return function(n,i,e){return t.apply(this,arguments)}}(),this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}componentWillLoad(){var s=this;return(0,h.Z)(function*(){const{datetime:r}=s;if(!r)return void(0,g.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",s.el);const t=s.datetimeEl=document.getElementById(r);if(!t)return void(0,g.a)(`No ion-datetime instance found for ID '${r}'.`,s.el);new IntersectionObserver(e=>{s.datetimeActive=e[0].isIntersecting},{threshold:.01}).observe(t);const i=s.overlayEl=t.closest("ion-modal, ion-popover");i&&i.classList.add("ion-datetime-button-overlay"),(0,u.c)(t,()=>{const e=s.datetimePresentation=t.presentation||"date-time";switch(s.setDateTimeText(),(0,u.a)(t,"ionValueChange",s.setDateTimeText),e){case"date-time":case"date":case"month-year":case"month":case"year":s.selectedButton="date";break;case"time-date":case"time":s.selectedButton="time"}})})()}render(){const{color:s,dateText:r,timeText:t,selectedButton:n,datetimeActive:i,disabled:e}=this,a=(0,k.b)(this);return(0,o.h)(o.H,{class:(0,y.c)(s,{[a]:!0,[`${n}-active`]:i,"datetime-button-disabled":e})},r&&(0,o.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":i?"true":"false",onClick:this.handleDateClick,disabled:e,part:"native",ref:m=>this.dateTargetEl=m},(0,o.h)("slot",{name:"date-target"},r),"md"===a&&(0,o.h)("ion-ripple-effect",null)),t&&(0,o.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":i?"true":"false",onClick:this.handleTimeClick,disabled:e,part:"native",ref:m=>this.timeTargetEl=m},(0,o.h)("slot",{name:"time-target"},t),"md"===a&&(0,o.h)("ion-ripple-effect",null)))}get el(){return(0,o.f)(this)}};b.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}]);