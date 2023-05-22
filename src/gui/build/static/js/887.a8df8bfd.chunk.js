"use strict";(self.webpackChunkfeagi_ui=self.webpackChunkfeagi_ui||[]).push([[887],{5671:function(e,n,a){var t=a(1413),r=a(7630),i=a(703),o=(0,r.ZP)(i.Z)((function(e){var n=e.theme;return(0,t.Z)((0,t.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary})}));n.Z=o},4887:function(e,n,a){a.r(n),a.d(n,{default:function(){return Pe}});var t=a(2791),r=a(6871),i=a(7394),o=a(8264),l=a(9877),c=a(3767),s=a(1469),d=a(890),p=a(5671),u=a(885),m=a(5289),g=a(9157),x=a(4942),f=a(1413),h=a(2982),v=a(2419),Z=a(3366),b=a(7462),S=a(4419),y=a(2065),j=a(7278),M=a(9201),w=a(184),k=(0,M.Z)((0,w.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),C=(0,M.Z)((0,w.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),P=(0,M.Z)((0,w.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),z=a(4036),R=a(1046),A=a(7630),W=a(1217),N=a(5878);function I(e){return(0,W.Z)("MuiCheckbox",e)}var F=(0,N.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),D=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],O=(0,A.ZP)(j.Z,{shouldForwardProp:function(e){return(0,A.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState;return[n.root,a.indeterminate&&n.indeterminate,"default"!==a.color&&n["color".concat((0,z.Z)(a.color))]]}})((function(e){var n,a=e.theme,t=e.ownerState;return(0,b.Z)({color:a.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,y.Fq)("default"===t.color?a.palette.action.active:a.palette[t.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(n={},(0,x.Z)(n,"&.".concat(F.checked,", &.").concat(F.indeterminate),{color:a.palette[t.color].main}),(0,x.Z)(n,"&.".concat(F.disabled),{color:a.palette.action.disabled}),n))})),L=(0,w.jsx)(C,{}),B=(0,w.jsx)(k,{}),T=(0,w.jsx)(P,{}),V=t.forwardRef((function(e,n){var a,r,i=(0,R.Z)({props:e,name:"MuiCheckbox"}),o=i.checkedIcon,l=void 0===o?L:o,c=i.color,s=void 0===c?"primary":c,d=i.icon,p=void 0===d?B:d,u=i.indeterminate,m=void 0!==u&&u,g=i.indeterminateIcon,x=void 0===g?T:g,f=i.inputProps,h=i.size,v=void 0===h?"medium":h,y=(0,Z.Z)(i,D),j=m?x:p,M=m?x:l,k=(0,b.Z)({},i,{color:s,indeterminate:m,size:v}),C=function(e){var n=e.classes,a=e.indeterminate,t=e.color,r={root:["root",a&&"indeterminate","color".concat((0,z.Z)(t))]},i=(0,S.Z)(r,I,n);return(0,b.Z)({},n,i)}(k);return(0,w.jsx)(O,(0,b.Z)({type:"checkbox",inputProps:(0,b.Z)({"data-indeterminate":m},f),icon:t.cloneElement(j,{fontSize:null!=(a=j.props.fontSize)?a:v}),checkedIcon:t.cloneElement(M,{fontSize:null!=(r=M.props.fontSize)?r:v}),ownerState:k,ref:n},y,{classes:C}))})),G=a(7247),X=a(4721),Y=a(8096),E=a(8182),H=a(2930);function q(e){return(0,W.Z)("MuiFormControlLabel",e)}var $=(0,N.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),J=a(6147),_=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],K=(0,A.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState;return[(0,x.Z)({},"& .".concat($.label),n.label),n.root,n["labelPlacement".concat((0,z.Z)(a.labelPlacement))]]}})((function(e){var n=e.theme,a=e.ownerState;return(0,b.Z)((0,x.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat($.disabled),{cursor:"default"}),"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,x.Z)({},"& .".concat($.label),(0,x.Z)({},"&.".concat($.disabled),{color:(n.vars||n).palette.text.disabled})))})),Q=t.forwardRef((function(e,n){var a=(0,R.Z)({props:e,name:"MuiFormControlLabel"}),r=a.className,i=a.componentsProps,o=void 0===i?{}:i,l=a.control,c=a.disabled,s=a.disableTypography,p=a.label,u=a.labelPlacement,m=void 0===u?"end":u,g=(0,Z.Z)(a,_),x=(0,H.Z)(),f=c;"undefined"===typeof f&&"undefined"!==typeof l.props.disabled&&(f=l.props.disabled),"undefined"===typeof f&&x&&(f=x.disabled);var h={disabled:f};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof l.props[e]&&"undefined"!==typeof a[e]&&(h[e]=a[e])}));var v=(0,J.Z)({props:a,muiFormControl:x,states:["error"]}),y=(0,b.Z)({},a,{disabled:f,labelPlacement:m,error:v.error}),j=function(e){var n=e.classes,a=e.disabled,t=e.labelPlacement,r=e.error,i={root:["root",a&&"disabled","labelPlacement".concat((0,z.Z)(t)),r&&"error"],label:["label",a&&"disabled"]};return(0,S.Z)(i,q,n)}(y),M=p;return null==M||M.type===d.Z||s||(M=(0,w.jsx)(d.Z,(0,b.Z)({component:"span",className:j.label},o.typography,{children:M}))),(0,w.jsxs)(K,(0,b.Z)({className:(0,E.Z)(j.root,r),ownerState:y,ref:n},g,{children:[t.cloneElement(l,h),M]}))})),U=a(7071),ee=a(1184),ne=a(8519);var ae=t.createContext();function te(e){return(0,W.Z)("MuiGrid",e)}var re=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ie=(0,N.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,h.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,h.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,h.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,h.Z)(re.map((function(e){return"grid-xs-".concat(e)}))),(0,h.Z)(re.map((function(e){return"grid-sm-".concat(e)}))),(0,h.Z)(re.map((function(e){return"grid-md-".concat(e)}))),(0,h.Z)(re.map((function(e){return"grid-lg-".concat(e)}))),(0,h.Z)(re.map((function(e){return"grid-xl-".concat(e)}))))),oe=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function le(e){var n=parseFloat(e);return"".concat(n).concat(String(e).replace(String(n),"")||"px")}function ce(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[a["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))];var t=e.xs,r=e.sm,i=e.md,o=e.lg,l=e.xl;return[Number(t)>0&&(a["spacing-xs-".concat(String(t))]||"spacing-xs-".concat(String(t))),Number(r)>0&&(a["spacing-sm-".concat(String(r))]||"spacing-sm-".concat(String(r))),Number(i)>0&&(a["spacing-md-".concat(String(i))]||"spacing-md-".concat(String(i))),Number(o)>0&&(a["spacing-lg-".concat(String(o))]||"spacing-lg-".concat(String(o))),Number(l)>0&&(a["spacing-xl-".concat(String(l))]||"spacing-xl-".concat(String(l)))]}var se=(0,A.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState,t=a.container,r=a.direction,i=a.item,o=a.lg,l=a.md,c=a.sm,s=a.spacing,d=a.wrap,p=a.xl,u=a.xs,m=a.zeroMinWidth;return[n.root,t&&n.container,i&&n.item,m&&n.zeroMinWidth].concat((0,h.Z)(ce(s,t,n)),["row"!==r&&n["direction-xs-".concat(String(r))],"wrap"!==d&&n["wrap-xs-".concat(String(d))],!1!==u&&n["grid-xs-".concat(String(u))],!1!==c&&n["grid-sm-".concat(String(c))],!1!==l&&n["grid-md-".concat(String(l))],!1!==o&&n["grid-lg-".concat(String(o))],!1!==p&&n["grid-xl-".concat(String(p))]])}})((function(e){var n=e.ownerState;return(0,b.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})}),(function(e){var n=e.theme,a=e.ownerState,t=(0,ee.P$)({values:a.direction,breakpoints:n.breakpoints.values});return(0,ee.k9)({theme:n},t,(function(e){var n={flexDirection:e};return 0===e.indexOf("column")&&(n["& > .".concat(ie.item)]={maxWidth:"none"}),n}))}),(function(e){var n=e.theme,a=e.ownerState,t=a.container,r=a.rowSpacing,i={};if(t&&0!==r){var o=(0,ee.P$)({values:r,breakpoints:n.breakpoints.values});i=(0,ee.k9)({theme:n},o,(function(e){var a=n.spacing(e);return"0px"!==a?(0,x.Z)({marginTop:"-".concat(le(a))},"& > .".concat(ie.item),{paddingTop:le(a)}):{}}))}return i}),(function(e){var n=e.theme,a=e.ownerState,t=a.container,r=a.columnSpacing,i={};if(t&&0!==r){var o=(0,ee.P$)({values:r,breakpoints:n.breakpoints.values});i=(0,ee.k9)({theme:n},o,(function(e){var a=n.spacing(e);return"0px"!==a?(0,x.Z)({width:"calc(100% + ".concat(le(a),")"),marginLeft:"-".concat(le(a))},"& > .".concat(ie.item),{paddingLeft:le(a)}):{}}))}return i}),(function(e){var n,a=e.theme,t=e.ownerState;return a.breakpoints.keys.reduce((function(e,r){var i={};if(t[r]&&(n=t[r]),!n)return e;if(!0===n)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,ee.P$)({values:t.columns,breakpoints:a.breakpoints.values}),l="object"===typeof o?o[r]:o;if(void 0===l||null===l)return e;var c="".concat(Math.round(n/l*1e8)/1e6,"%"),s={};if(t.container&&t.item&&0!==t.columnSpacing){var d=a.spacing(t.columnSpacing);if("0px"!==d){var p="calc(".concat(c," + ").concat(le(d),")");s={flexBasis:p,maxWidth:p}}}i=(0,b.Z)({flexBasis:c,flexGrow:0,maxWidth:c},s)}return 0===a.breakpoints.values[r]?Object.assign(e,i):e[a.breakpoints.up(r)]=i,e}),{})})),de=t.forwardRef((function(e,n){var a=(0,R.Z)({props:e,name:"MuiGrid"}),r=(0,ne.Z)(a),i=r.className,o=r.columns,l=r.columnSpacing,c=r.component,s=void 0===c?"div":c,d=r.container,p=void 0!==d&&d,u=r.direction,m=void 0===u?"row":u,g=r.item,x=void 0!==g&&g,f=r.lg,v=void 0!==f&&f,y=r.md,j=void 0!==y&&y,M=r.rowSpacing,k=r.sm,C=void 0!==k&&k,P=r.spacing,z=void 0===P?0:P,A=r.wrap,W=void 0===A?"wrap":A,N=r.xl,I=void 0!==N&&N,F=r.xs,D=void 0!==F&&F,O=r.zeroMinWidth,L=void 0!==O&&O,B=(0,Z.Z)(r,oe),T=M||z,V=l||z,G=t.useContext(ae),X=p?o||12:G,Y=(0,b.Z)({},r,{columns:X,container:p,direction:m,item:x,lg:v,md:j,sm:C,rowSpacing:T,columnSpacing:V,wrap:W,xl:I,xs:D,zeroMinWidth:L}),H=function(e){var n=e.classes,a=e.container,t=e.direction,r=e.item,i=e.lg,o=e.md,l=e.sm,c=e.spacing,s=e.wrap,d=e.xl,p=e.xs,u={root:["root",a&&"container",r&&"item",e.zeroMinWidth&&"zeroMinWidth"].concat((0,h.Z)(ce(c,a)),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==s&&"wrap-xs-".concat(String(s)),!1!==p&&"grid-xs-".concat(String(p)),!1!==l&&"grid-sm-".concat(String(l)),!1!==o&&"grid-md-".concat(String(o)),!1!==i&&"grid-lg-".concat(String(i)),!1!==d&&"grid-xl-".concat(String(d))])};return(0,S.Z)(u,te,n)}(Y);return(0,w.jsx)(ae.Provider,{value:X,children:(0,w.jsx)(se,(0,b.Z)({ownerState:Y,className:(0,E.Z)(H.root,i),as:s,ref:n},B))})})),pe=a(3400),ue=a(4925),me=a(493),ge=a(4852),xe=a(9900),fe=a(3786),he=a(3329),ve=a(9321),Ze=a(8550),be=function(e){var n=(0,t.useState)(""),a=(0,u.Z)(n,2),r=a[0],i=a[1],o=(0,t.useState)(""),p=(0,u.Z)(o,2),m=p[0],g=p[1],Z=(0,t.useState)([]),b=(0,u.Z)(Z,2),S=b[0],y=b[1],j=(0,t.useState)(e.defaultPlasticityFlag),M=(0,u.Z)(j,2),k=M[0],C=M[1],P=(0,t.useState)(e.defaultPcsMultiplier),z=(0,u.Z)(P,2),R=z[0],A=z[1],W=(0,t.useState)(e.defaultMorphologyScalarX),N=(0,u.Z)(W,2),I=N[0],F=N[1],D=(0,t.useState)(e.defaultMorphologyScalarY),O=(0,u.Z)(D,2),L=O[0],B=O[1],T=(0,t.useState)(e.defaultMorphologyScalarZ),E=(0,u.Z)(T,2),H=E[0],q=E[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(d.Z,{gutterBottom:!0,variant:"h5",component:"div",sx:{mb:4},children:[e.srcCorticalArea," Area Cortical Mapping"]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(d.Z,{variant:"h6",component:"div",sx:{mt:2,mb:1},children:"Select mapping destination and type"}),(0,w.jsx)(X.Z,{}),(0,w.jsxs)(Y.Z,{sx:{mt:2,mr:1,mb:2},children:[(0,w.jsx)(ue.Z,{id:"dest-select-label",children:"Cortical Area"}),(0,w.jsx)(ve.Z,{labelId:"dest-select-label",id:"dest-select",value:r,label:"Cortical Area",onChange:function(e){i(e.target.value)},sx:{width:"250px"},children:e.availableMappingAreas.map((function(e){return(0,w.jsx)(fe.Z,{value:e,children:e},e)}))}),(0,w.jsx)(U.Z,{children:"Required"})]}),(0,w.jsxs)(Y.Z,{sx:{mt:2,mr:1,mb:2},children:[(0,w.jsx)(ue.Z,{id:"rule-select-label",children:"Pre-defined Rule"}),(0,w.jsx)(ve.Z,{labelId:"rule-select-label",id:"rule-select",value:m,label:"Pre-defined Rule",onChange:function(e){g(e.target.value)},sx:{width:"250px"},children:Object.keys(e.defaultSynapseRules).map((function(e){return(0,w.jsx)(fe.Z,{value:e,children:e},e)}))}),(0,w.jsx)(U.Z,{children:"Required"})]}),(0,w.jsx)(Y.Z,{sx:{mt:2,mr:1,mb:2},children:(0,w.jsx)(Ze.Z,{disabled:!0,id:"rule-def-field",label:m?JSON.stringify(e.defaultSynapseRules[m]):"Rule info",variant:"outlined",sx:{width:"250px"}})})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(ue.Z,{sx:{width:"150px",mt:1},children:"Morphology Scalar"}),(0,w.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:1,sx:{mb:2},children:[(0,w.jsx)(Ze.Z,{id:"filled-basic-msx",defaultValue:1,helperText:"X",variant:"outlined",onChange:function(e){return F(e.target.value)},sx:{width:"50px"}}),(0,w.jsx)(Ze.Z,{id:"filled-basic-msy",defaultValue:1,helperText:"Y",variant:"outlined",onChange:function(e){return B(e.target.value)},sx:{width:"50px"}}),(0,w.jsx)(Ze.Z,{id:"filled-basic-msz",defaultValue:1,helperText:"Z",variant:"outlined",onChange:function(e){return q(e.target.value)},sx:{width:"50px"}}),(0,w.jsx)("div",{children:(0,w.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:2,sx:{ml:3},children:[(0,w.jsx)(Ze.Z,{label:"PSC Multiplier",type:"number",defaultValue:1,helperText:" ",onChange:function(e){return function(e){A(e.target.value)}(e)},sx:{width:"110px"}}),(0,w.jsx)(Y.Z,{sx:{width:"20px",mt:1},children:(0,w.jsx)(Q,{control:(0,w.jsx)(V,{checked:k,onChange:function(e){C(e.target.checked)}}),label:"Plasticity"})})]})})]})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(s.Z,{title:r&&m?"Add mapping...":"Select area/rule first...",children:(0,w.jsx)("span",{children:(0,w.jsx)(l.Z,{size:"small",color:"primary","aria-label":"add",sx:{m:1},disabled:!(r&&m),onClick:function(){y([].concat((0,h.Z)(S),[{dstArea:r,rule:m,info:e.defaultSynapseRules[m],morphologyScalar:[parseInt(I),parseInt(L),parseInt(H)],pscMultiplier:R,plasticity:k}])),i(""),g(""),F(e.defaultMorphologyScalarX),B(e.defaultMorphologyScalarY),q(e.defaultMorphologyScalarZ),A(e.defaultPscMultiplier),C(e.defaultPlasticityFlag)},children:(0,w.jsx)(v.Z,{})})})}),(0,w.jsx)(s.Z,{title:S.length>0?"Save mappings":"Add mapping first...",children:(0,w.jsx)("span",{children:(0,w.jsx)(l.Z,{size:"small",color:"primary","aria-label":"add",sx:{m:1},disabled:!S.length>0,onClick:function(){e.setDefinedMappings((0,f.Z)((0,f.Z)({},e.definedMappings),{},(0,x.Z)({},e.srcCorticalArea.toLowerCase(),S))),e.setDialogOpen(!1)},children:(0,w.jsx)(he.Z,{})})})})]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)(d.Z,{gutterBottom:!0,variant:"h6",component:"div",sx:{mt:4},children:["Defined Mappings for ",e.srcCorticalArea]}),(0,w.jsx)(X.Z,{}),(0,w.jsx)(de,{container:!0,spacing:2,children:(0,w.jsx)(de,{item:!0,xs:12,md:12,sx:{mr:"10px"},children:(0,w.jsx)(me.Z,{children:S.map((function(n,a){return(0,w.jsxs)(ge.ZP,{divider:!0,secondaryAction:(0,w.jsx)(pe.Z,{edge:"end","aria-label":"delete",onClick:function(){return function(n){var a=(0,h.Z)(S);a.splice(n,1),y(Array.from(a)),e.setDefinedMappings(Array.from(a))}(a)},children:(0,w.jsx)(G.Z,{})}),children:[(0,w.jsx)(xe.Z,{primary:a+1}),(0,w.jsx)(xe.Z,{primary:n.dstArea}),(0,w.jsx)(xe.Z,{primary:n.rule}),(0,w.jsx)(xe.Z,{primary:"Morphology Scalar",secondary:JSON.stringify(n.morphologyScalar)}),(0,w.jsx)(xe.Z,{primary:"PSC Multiplier",secondary:n.pscMultiplier}),(0,w.jsx)(xe.Z,{primary:"Plasticity",secondary:JSON.stringify(n.plasticity)})]},a)}))})})})]})]})},Se=a(6151),ye=a(1286),je=a(5172),Me=a(911),we=(0,A.ZP)((function(e){return(0,w.jsx)(Me.Z,(0,f.Z)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var n=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:n.spacing(1),minWidth:180,color:"light"===n.palette.mode?"rgb(55, 65, 81)":n.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:n.palette.text.secondary,marginRight:n.spacing(1.5)},"&:active":{backgroundColor:(0,y.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}}}})),ke=function(e){var n=(0,t.useState)(null),a=(0,u.Z)(n,2),r=a[0],i=a[1],o=Boolean(r);return(0,w.jsxs)("div",{children:[(0,w.jsx)(Se.Z,{id:"customized-button","aria-controls":o?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){i(e.currentTarget)},endIcon:(0,w.jsx)(je.Z,{}),sx:{width:"175px"},children:e.label}),(0,w.jsx)(we,{id:"customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:r,open:o,onClose:function(){i(null)},children:(0,w.jsxs)(fe.Z,{onClick:function(){i(null),e.setDialogOpen(!0)},disableRipple:!0,children:[(0,w.jsx)(ye.Z,{}),"Define Mapping"]})})]})},Ce=function(e){var n=(0,t.useState)(!1),a=(0,u.Z)(n,2),r=a[0],i=a[1];return(0,w.jsxs)("div",{children:[(0,w.jsx)(ke,{label:e.label,setDialogOpen:i}),(0,w.jsx)(m.Z,{open:r,onClose:function(){i(!1)},fullWidth:!0,maxWidth:"md",children:(0,w.jsx)(g.Z,{children:(0,w.jsx)(be,{srcCorticalArea:e.label,definedMappings:e.definedMappings,setDefinedMappings:e.setDefinedMappings,availableMappingAreas:e.availableMappingAreas,defaultMorphologyScalarX:e.defaultMorphologyScalarX,defaultMorphologyScalarY:e.defaultMorphologyScalarY,defaultMorphologyScalarZ:e.defaultMorphologyScalarZ,defaultPscMultiplier:e.defaultPscMultiplier,defaultPlasticityFlag:e.defaultPlasticityFlag,defaultSynapseRules:e.defaultSynapseRules,setDialogOpen:i})})})]})},Pe=function(e){var n=(0,r.s0)(),a=function(e){var n=[];for(var a in e)for(var t in e[a]){n.push(t.slice(9,15));break}return n}(e.definedAreas);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d.Z,{variant:"h4",align:"center",sx:{p:4},component:"div",children:"Cortical Area Mapping"}),(0,w.jsx)(c.Z,{direction:"column",alignItems:"center",justifyContent:"center",spacing:12,sx:{mt:12,mb:24},children:Object.keys(e.definedAreas).map((function(n){return(0,w.jsx)(p.Z,{children:(0,w.jsx)(Ce,{definedMappings:e.definedMappings,setDefinedMappings:e.setDefinedMappings,availableMappingAreas:a,defaultMorphologyScalarX:e.defaultMorphologyScalarX,defaultMorphologyScalarY:e.defaultMorphologyScalarY,defaultMorphologyScalarZ:e.defaultMorphologyScalarZ,defaultPscMultiplier:e.defaultPscMultiplier,defaultPlasticityFlag:e.defaultPlasticityFlag,defaultSynapseRules:e.defaultSynapseRules,label:n,mode:"map"})},n)}))}),(0,w.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,sx:{mb:8},children:[(0,w.jsx)(s.Z,{title:"Back",children:(0,w.jsx)("span",{children:(0,w.jsx)(l.Z,{size:"large",color:"primary","aria-label":"add",sx:{m:1},disabled:!e.definedMappings,onClick:function(){n("/brain/editor")},children:(0,w.jsx)(i.Z,{})})})}),(0,w.jsx)(s.Z,{title:"Next",children:(0,w.jsx)("span",{children:(0,w.jsx)(l.Z,{size:"large",color:"primary","aria-label":"add",sx:{m:1},disabled:!e.definedMappings,onClick:function(){n("/genome/assemble")},children:(0,w.jsx)(o.Z,{})})})})]})]})}},5172:function(e,n,a){var t=a(5318);n.Z=void 0;var r=t(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");n.Z=o}}]);
//# sourceMappingURL=887.a8df8bfd.chunk.js.map