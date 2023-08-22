(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=e.parcelRequire1d24;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire1d24=s),s.register("4TDRm",(function(e,t){var r=s("1spnT"),i=s("ayrQ1"),n=s("h0q8T"),o=s("cwa76"),a=s("ch0Sn"),l=s("8vyAT"),h=s("8WLNB"),p=s("aKjue"),u=s("kVyW1"),c=s("dbGir"),f=s("gEqbg"),E=s("6sfS3"),m=s("S6Zjf"),v=s("hfSq3"),g=s("6Up9f"),$=s("dYujX"),I=s("UWVJX"),R=s("jMqbX"),d=s("8Hq6c"),T=s("5nm9j"),N=s("eTIXj"),O=s("iB4Tt"),w=s("hGJsl"),A=s("8G57F"),L=s("8mg5m"),S=s("jM7Ok"),y=s("6hJMa"),x=s("13ebk"),j=s("iOmDM"),P=s("iI21w"),b=s("lnKKH"),D=s("e1xBO"),M=s("fG3Sl"),G=s("iOAlU"),C=s("fNcJ1"),X=s("jTq75"),F=s("hKfqV"),U=s("duN3e"),q=s("j8tIK"),k=s("58XdY"),_=s("7Lpj6");e.exports={parse:a,valid:l,clean:h,inc:p,diff:u,major:c,minor:f,patch:E,prerelease:m,compare:v,rcompare:g,compareLoose:$,compareBuild:I,sort:R,rsort:d,gt:T,lt:N,eq:O,neq:w,gte:A,lte:L,cmp:S,coerce:y,Comparator:x,Range:j,satisfies:P,toComparators:b,maxSatisfying:D,minSatisfying:M,minVersion:G,validRange:C,outside:X,gtr:F,ltr:U,intersects:q,simplifyRange:k,subset:_,SemVer:n,re:r.re,src:r.src,tokens:r.t,SEMVER_SPEC_VERSION:i.SEMVER_SPEC_VERSION,RELEASE_TYPES:i.RELEASE_TYPES,compareIdentifiers:o.compareIdentifiers,rcompareIdentifiers:o.rcompareIdentifiers}})),s.register("1spnT",(function(e,t){var r=s("ayrQ1").MAX_SAFE_COMPONENT_LENGTH,i=s("9Xp41");const n=(t=e.exports={}).re=[],o=t.safeRe=[],a=t.src=[],l=t.t={};let h=0;const p=(e,t,r)=>{const s=t.split("\\s*").join("\\s{0,1}").split("\\s+").join("\\s"),p=h++;i(e,p,t),l[e]=p,a[p]=t,n[p]=new RegExp(t,r?"g":void 0),o[p]=new RegExp(s,r?"g":void 0)};p("NUMERICIDENTIFIER","0|[1-9]\\d*"),p("NUMERICIDENTIFIERLOOSE","[0-9]+"),p("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),p("MAINVERSION",`(${a[l.NUMERICIDENTIFIER]})\\.(${a[l.NUMERICIDENTIFIER]})\\.(${a[l.NUMERICIDENTIFIER]})`),p("MAINVERSIONLOOSE",`(${a[l.NUMERICIDENTIFIERLOOSE]})\\.(${a[l.NUMERICIDENTIFIERLOOSE]})\\.(${a[l.NUMERICIDENTIFIERLOOSE]})`),p("PRERELEASEIDENTIFIER",`(?:${a[l.NUMERICIDENTIFIER]}|${a[l.NONNUMERICIDENTIFIER]})`),p("PRERELEASEIDENTIFIERLOOSE",`(?:${a[l.NUMERICIDENTIFIERLOOSE]}|${a[l.NONNUMERICIDENTIFIER]})`),p("PRERELEASE",`(?:-(${a[l.PRERELEASEIDENTIFIER]}(?:\\.${a[l.PRERELEASEIDENTIFIER]})*))`),p("PRERELEASELOOSE",`(?:-?(${a[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[l.PRERELEASEIDENTIFIERLOOSE]})*))`),p("BUILDIDENTIFIER","[0-9A-Za-z-]+"),p("BUILD",`(?:\\+(${a[l.BUILDIDENTIFIER]}(?:\\.${a[l.BUILDIDENTIFIER]})*))`),p("FULLPLAIN",`v?${a[l.MAINVERSION]}${a[l.PRERELEASE]}?${a[l.BUILD]}?`),p("FULL",`^${a[l.FULLPLAIN]}$`),p("LOOSEPLAIN",`[v=\\s]*${a[l.MAINVERSIONLOOSE]}${a[l.PRERELEASELOOSE]}?${a[l.BUILD]}?`),p("LOOSE",`^${a[l.LOOSEPLAIN]}$`),p("GTLT","((?:<|>)?=?)"),p("XRANGEIDENTIFIERLOOSE",`${a[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),p("XRANGEIDENTIFIER",`${a[l.NUMERICIDENTIFIER]}|x|X|\\*`),p("XRANGEPLAIN",`[v=\\s]*(${a[l.XRANGEIDENTIFIER]})(?:\\.(${a[l.XRANGEIDENTIFIER]})(?:\\.(${a[l.XRANGEIDENTIFIER]})(?:${a[l.PRERELEASE]})?${a[l.BUILD]}?)?)?`),p("XRANGEPLAINLOOSE",`[v=\\s]*(${a[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[l.XRANGEIDENTIFIERLOOSE]})(?:${a[l.PRERELEASELOOSE]})?${a[l.BUILD]}?)?)?`),p("XRANGE",`^${a[l.GTLT]}\\s*${a[l.XRANGEPLAIN]}$`),p("XRANGELOOSE",`^${a[l.GTLT]}\\s*${a[l.XRANGEPLAINLOOSE]}$`),p("COERCE",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),p("COERCERTL",a[l.COERCE],!0),p("LONETILDE","(?:~>?)"),p("TILDETRIM",`(\\s*)${a[l.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",p("TILDE",`^${a[l.LONETILDE]}${a[l.XRANGEPLAIN]}$`),p("TILDELOOSE",`^${a[l.LONETILDE]}${a[l.XRANGEPLAINLOOSE]}$`),p("LONECARET","(?:\\^)"),p("CARETTRIM",`(\\s*)${a[l.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",p("CARET",`^${a[l.LONECARET]}${a[l.XRANGEPLAIN]}$`),p("CARETLOOSE",`^${a[l.LONECARET]}${a[l.XRANGEPLAINLOOSE]}$`),p("COMPARATORLOOSE",`^${a[l.GTLT]}\\s*(${a[l.LOOSEPLAIN]})$|^$`),p("COMPARATOR",`^${a[l.GTLT]}\\s*(${a[l.FULLPLAIN]})$|^$`),p("COMPARATORTRIM",`(\\s*)${a[l.GTLT]}\\s*(${a[l.LOOSEPLAIN]}|${a[l.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",p("HYPHENRANGE",`^\\s*(${a[l.XRANGEPLAIN]})\\s+-\\s+(${a[l.XRANGEPLAIN]})\\s*$`),p("HYPHENRANGELOOSE",`^\\s*(${a[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[l.XRANGEPLAINLOOSE]})\\s*$`),p("STAR","(<|>)?=?\\s*\\*"),p("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),p("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})),s.register("ayrQ1",(function(e,t){const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_INTEGER:r,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}})),s.register("9Xp41",(function(e,t){var r=s("4QUf5");const i=("object"==typeof r&&r.env,()=>{});e.exports=i})),s.register("h0q8T",(function(e,t){var r=s("9Xp41"),i=s("ayrQ1"),n=i.MAX_LENGTH,o=i.MAX_SAFE_INTEGER,a=s("1spnT"),l=a.safeRe,h=a.t,p=s("dOUEH"),u=s("cwa76").compareIdentifiers;class c{format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(r("SemVer.compare",this.version,this.options,e),!(e instanceof c)){if("string"==typeof e&&e===this.version)return 0;e=new c(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof c||(e=new c(e,this.options)),u(this.major,e.major)||u(this.minor,e.minor)||u(this.patch,e.patch)}comparePre(e){if(e instanceof c||(e=new c(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const s=this.prerelease[t],i=e.prerelease[t];if(r("prerelease compare",t,s,i),void 0===s&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===s)return-1;if(s!==i)return u(s,i)}while(++t)}compareBuild(e){e instanceof c||(e=new c(e,this.options));let t=0;do{const s=this.build[t],i=e.build[t];if(r("prerelease compare",t,s,i),void 0===s&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===s)return-1;if(s!==i)return u(s,i)}while(++t)}inc(e,t,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(r)?1:0;if(!t&&!1===r)throw new Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let s=this.prerelease.length;for(;--s>=0;)"number"==typeof this.prerelease[s]&&(this.prerelease[s]++,s=-2);if(-1===s){if(t===this.prerelease.join(".")&&!1===r)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let s=[t,e];!1===r&&(s=[t]),0===u(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}constructor(e,t){if(t=p(t),e instanceof c){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>n)throw new TypeError(`version is longer than ${n} characters`);r("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const s=e.trim().match(t.loose?l[h.LOOSE]:l[h.FULL]);if(!s)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<o)return t}return e})):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}}e.exports=c})),s.register("dOUEH",(function(e,t){const r=Object.freeze({loose:!0}),s=Object.freeze({});e.exports=e=>e?"object"!=typeof e?r:e:s})),s.register("cwa76",(function(e,t){const r=/^[0-9]+$/,s=(e,t)=>{const s=r.test(e),i=r.test(t);return s&&i&&(e=+e,t=+t),e===t?0:s&&!i?-1:i&&!s?1:e<t?-1:1};e.exports={compareIdentifiers:s,rcompareIdentifiers:(e,t)=>s(t,e)}})),s.register("ch0Sn",(function(e,t){var r=s("h0q8T");e.exports=(e,t,s=!1)=>{if(e instanceof r)return e;try{return new r(e,t)}catch(e){if(!s)return null;throw e}}})),s.register("8vyAT",(function(e,t){var r=s("ch0Sn");e.exports=(e,t)=>{const s=r(e,t);return s?s.version:null}})),s.register("8WLNB",(function(e,t){var r=s("ch0Sn");e.exports=(e,t)=>{const s=r(e.trim().replace(/^[=v]+/,""),t);return s?s.version:null}})),s.register("aKjue",(function(e,t){var r=s("h0q8T");e.exports=(e,t,s,i,n)=>{"string"==typeof s&&(n=i,i=s,s=void 0);try{return new r(e instanceof r?e.version:e,s).inc(t,i,n).version}catch(e){return null}}})),s.register("kVyW1",(function(e,t){var r=s("ch0Sn");e.exports=(e,t)=>{const s=r(e,null,!0),i=r(t,null,!0),n=s.compare(i);if(0===n)return null;const o=n>0,a=o?s:i,l=o?i:s,h=!!a.prerelease.length;if(!!l.prerelease.length&&!h)return l.patch||l.minor?a.patch?"patch":a.minor?"minor":"major":"major";const p=h?"pre":"";return s.major!==i.major?p+"major":s.minor!==i.minor?p+"minor":s.patch!==i.patch?p+"patch":"prerelease"}})),s.register("dbGir",(function(e,t){var r=s("h0q8T");e.exports=(e,t)=>new r(e,t).major})),s.register("gEqbg",(function(e,t){var r=s("h0q8T");e.exports=(e,t)=>new r(e,t).minor})),s.register("6sfS3",(function(e,t){var r=s("h0q8T");e.exports=(e,t)=>new r(e,t).patch})),s.register("S6Zjf",(function(e,t){var r=s("ch0Sn");e.exports=(e,t)=>{const s=r(e,t);return s&&s.prerelease.length?s.prerelease:null}})),s.register("hfSq3",(function(e,t){var r=s("h0q8T");e.exports=(e,t,s)=>new r(e,s).compare(new r(t,s))})),s.register("6Up9f",(function(e,t){var r=s("hfSq3");e.exports=(e,t,s)=>r(t,e,s)})),s.register("dYujX",(function(e,t){var r=s("hfSq3");e.exports=(e,t)=>r(e,t,!0)})),s.register("UWVJX",(function(e,t){var r=s("h0q8T");e.exports=(e,t,s)=>{const i=new r(e,s),n=new r(t,s);return i.compare(n)||i.compareBuild(n)}})),s.register("jMqbX",(function(e,t){var r=s("UWVJX");e.exports=(e,t)=>e.sort(((e,s)=>r(e,s,t)))})),s.register("8Hq6c",(function(e,t){var r=s("UWVJX");e.exports=(e,t)=>e.sort(((e,s)=>r(s,e,t)))})),s.register("5nm9j",(function(e,t){var r=s("hfSq3");e.exports=(e,t,s)=>r(e,t,s)>0})),s.register("eTIXj",(function(e,t){var r=s("hfSq3");e.exports=(e,t,s)=>r(e,t,s)<0})),s.register("iB4Tt",(function(e,t){var r=s("hfSq3");e.exports=(e,t,s)=>0===r(e,t,s)})),s.register("hGJsl",(function(e,t){var r=s("hfSq3");e.exports=(e,t,s)=>0!==r(e,t,s)})),s.register("8G57F",(function(e,t){var r=s("hfSq3");e.exports=(e,t,s)=>r(e,t,s)>=0})),s.register("8mg5m",(function(e,t){var r=s("hfSq3");e.exports=(e,t,s)=>r(e,t,s)<=0})),s.register("jM7Ok",(function(e,t){var r=s("iB4Tt"),i=s("hGJsl"),n=s("5nm9j"),o=s("8G57F"),a=s("eTIXj"),l=s("8mg5m");e.exports=(e,t,s,h)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof s&&(s=s.version),e===s;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof s&&(s=s.version),e!==s;case"":case"=":case"==":return r(e,s,h);case"!=":return i(e,s,h);case">":return n(e,s,h);case">=":return o(e,s,h);case"<":return a(e,s,h);case"<=":return l(e,s,h);default:throw new TypeError(`Invalid operator: ${t}`)}}})),s.register("6hJMa",(function(e,t){var r=s("h0q8T"),i=s("ch0Sn"),n=s("1spnT"),o=n.safeRe,a=n.t;e.exports=(e,t)=>{if(e instanceof r)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let s=null;if((t=t||{}).rtl){let t;for(;(t=o[a.COERCERTL].exec(e))&&(!s||s.index+s[0].length!==e.length);)s&&t.index+t[0].length===s.index+s[0].length||(s=t),o[a.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;o[a.COERCERTL].lastIndex=-1}else s=e.match(o[a.COERCE]);return null===s?null:i(`${s[2]}.${s[3]||"0"}.${s[4]||"0"}`,t)}})),s.register("13ebk",(function(e,t){const r=Symbol("SemVer ANY");class i{static get ANY(){return r}parse(e){const t=this.options.loose?a[l.COMPARATORLOOSE]:a[l.COMPARATOR],s=e.match(t);if(!s)throw new TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==s[1]?s[1]:"","="===this.operator&&(this.operator=""),s[2]?this.semver=new u(s[2],this.options.loose):this.semver=r}toString(){return this.value}test(e){if(p("Comparator.test",e,this.options.loose),this.semver===r||e===r)return!0;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}return h(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof i))throw new TypeError("a Comparator is required");return""===this.operator?""===this.value||new c(e.value,t).test(this.value):""===e.operator?""===e.value||new c(this.value,t).test(e.semver):(!(t=n(t)).includePrerelease||"<0.0.0-0"!==this.value&&"<0.0.0-0"!==e.value)&&(!(!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&(!(!this.operator.startsWith(">")||!e.operator.startsWith(">"))||(!(!this.operator.startsWith("<")||!e.operator.startsWith("<"))||(!(this.semver.version!==e.semver.version||!this.operator.includes("=")||!e.operator.includes("="))||(!!(h(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<"))||!!(h(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))))))}constructor(e,t){if(t=n(t),e instanceof i){if(e.loose===!!t.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),p("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===r?this.value="":this.value=this.operator+this.semver.version,p("comp",this)}}e.exports=i;var n=s("dOUEH"),o=s("1spnT"),a=o.safeRe,l=o.t,h=s("jM7Ok"),p=s("9Xp41"),u=s("h0q8T"),c=s("iOmDM")})),s.register("iOmDM",(function(e,t){class r{format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const t=((this.options.includePrerelease&&v)|(this.options.loose&&g))+":"+e,r=i.get(t);if(r)return r;const s=this.options.loose,n=s?p[u.HYPHENRANGELOOSE]:p[u.HYPHENRANGE];e=e.replace(n,j(this.options.includePrerelease)),a("hyphen replace",e),e=e.replace(p[u.COMPARATORTRIM],c),a("comparator trim",e);let l=(e=(e=e.replace(p[u.TILDETRIM],f)).replace(p[u.CARETTRIM],E)).split(" ").map((e=>d(e,this.options))).join(" ").split(/\s+/).map((e=>x(e,this.options)));s&&(l=l.filter((e=>(a("loose invalid filter",e,this.options),!!e.match(p[u.COMPARATORLOOSE]))))),a("range list",l);const h=new Map,m=l.map((e=>new o(e,this.options)));for(const e of m){if($(e))return[e];h.set(e.value,e)}h.size>1&&h.has("")&&h.delete("");const I=[...h.values()];return i.set(t,I),I}intersects(e,t){if(!(e instanceof r))throw new TypeError("a Range is required");return this.set.some((r=>R(r,t)&&e.set.some((e=>R(e,t)&&r.every((r=>e.every((e=>r.intersects(e,t)))))))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new l(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(P(this.set[t],e,this.options))return!0;return!1}constructor(e,t){if(t=n(t),e instanceof r)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new r(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map((e=>this.parseRange(e))).filter((e=>e.length)),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter((e=>!$(e[0]))),0===this.set.length)this.set=[e];else if(this.set.length>1)for(const e of this.set)if(1===e.length&&I(e[0])){this.set=[e];break}}this.format()}}e.exports=r;const i=new(s("9XsU9"))({max:1e3});var n=s("dOUEH"),o=s("13ebk"),a=s("9Xp41"),l=s("h0q8T"),h=s("1spnT"),p=h.safeRe,u=h.t,c=h.comparatorTrimReplace,f=h.tildeTrimReplace,E=h.caretTrimReplace,m=s("ayrQ1"),v=m.FLAG_INCLUDE_PRERELEASE,g=m.FLAG_LOOSE;const $=e=>"<0.0.0-0"===e.value,I=e=>""===e.value,R=(e,t)=>{let r=!0;const s=e.slice();let i=s.pop();for(;r&&s.length;)r=s.every((e=>i.intersects(e,t))),i=s.pop();return r},d=(e,t)=>(a("comp",e,t),e=w(e,t),a("caret",e),e=N(e,t),a("tildes",e),e=L(e,t),a("xrange",e),e=y(e,t),a("stars",e),e),T=e=>!e||"x"===e.toLowerCase()||"*"===e,N=(e,t)=>e.trim().split(/\s+/).map((e=>O(e,t))).join(" "),O=(e,t)=>{const r=t.loose?p[u.TILDELOOSE]:p[u.TILDE];return e.replace(r,((t,r,s,i,n)=>{let o;return a("tilde",e,t,r,s,i,n),T(r)?o="":T(s)?o=`>=${r}.0.0 <${+r+1}.0.0-0`:T(i)?o=`>=${r}.${s}.0 <${r}.${+s+1}.0-0`:n?(a("replaceTilde pr",n),o=`>=${r}.${s}.${i}-${n} <${r}.${+s+1}.0-0`):o=`>=${r}.${s}.${i} <${r}.${+s+1}.0-0`,a("tilde return",o),o}))},w=(e,t)=>e.trim().split(/\s+/).map((e=>A(e,t))).join(" "),A=(e,t)=>{a("caret",e,t);const r=t.loose?p[u.CARETLOOSE]:p[u.CARET],s=t.includePrerelease?"-0":"";return e.replace(r,((t,r,i,n,o)=>{let l;return a("caret",e,t,r,i,n,o),T(r)?l="":T(i)?l=`>=${r}.0.0${s} <${+r+1}.0.0-0`:T(n)?l="0"===r?`>=${r}.${i}.0${s} <${r}.${+i+1}.0-0`:`>=${r}.${i}.0${s} <${+r+1}.0.0-0`:o?(a("replaceCaret pr",o),l="0"===r?"0"===i?`>=${r}.${i}.${n}-${o} <${r}.${i}.${+n+1}-0`:`>=${r}.${i}.${n}-${o} <${r}.${+i+1}.0-0`:`>=${r}.${i}.${n}-${o} <${+r+1}.0.0-0`):(a("no pr"),l="0"===r?"0"===i?`>=${r}.${i}.${n}${s} <${r}.${i}.${+n+1}-0`:`>=${r}.${i}.${n}${s} <${r}.${+i+1}.0-0`:`>=${r}.${i}.${n} <${+r+1}.0.0-0`),a("caret return",l),l}))},L=(e,t)=>(a("replaceXRanges",e,t),e.split(/\s+/).map((e=>S(e,t))).join(" ")),S=(e,t)=>{e=e.trim();const r=t.loose?p[u.XRANGELOOSE]:p[u.XRANGE];return e.replace(r,((r,s,i,n,o,l)=>{a("xRange",e,r,s,i,n,o,l);const h=T(i),p=h||T(n),u=p||T(o),c=u;return"="===s&&c&&(s=""),l=t.includePrerelease?"-0":"",h?r=">"===s||"<"===s?"<0.0.0-0":"*":s&&c?(p&&(n=0),o=0,">"===s?(s=">=",p?(i=+i+1,n=0,o=0):(n=+n+1,o=0)):"<="===s&&(s="<",p?i=+i+1:n=+n+1),"<"===s&&(l="-0"),r=`${s+i}.${n}.${o}${l}`):p?r=`>=${i}.0.0${l} <${+i+1}.0.0-0`:u&&(r=`>=${i}.${n}.0${l} <${i}.${+n+1}.0-0`),a("xRange return",r),r}))},y=(e,t)=>(a("replaceStars",e,t),e.trim().replace(p[u.STAR],"")),x=(e,t)=>(a("replaceGTE0",e,t),e.trim().replace(p[t.includePrerelease?u.GTE0PRE:u.GTE0],"")),j=e=>(t,r,s,i,n,o,a,l,h,p,u,c,f)=>`${r=T(s)?"":T(i)?`>=${s}.0.0${e?"-0":""}`:T(n)?`>=${s}.${i}.0${e?"-0":""}`:o?`>=${r}`:`>=${r}${e?"-0":""}`} ${l=T(h)?"":T(p)?`<${+h+1}.0.0-0`:T(u)?`<${h}.${+p+1}.0-0`:c?`<=${h}.${p}.${u}-${c}`:e?`<${h}.${p}.${+u+1}-0`:`<=${l}`}`.trim(),P=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(a(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){const s=e[r].semver;if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0}})),s.register("9XsU9",(function(e,t){"use strict";var r=s("8TDvo");const i=Symbol("max"),n=Symbol("length"),o=Symbol("lengthCalculator"),a=Symbol("allowStale"),l=Symbol("maxAge"),h=Symbol("dispose"),p=Symbol("noDisposeOnSet"),u=Symbol("lruList"),c=Symbol("cache"),f=Symbol("updateAgeOnGet"),E=()=>1;const m=(e,t,r)=>{const s=e[c].get(t);if(s){const t=s.value;if(v(e,t)){if($(e,s),!e[a])return}else r&&(e[f]&&(s.value.now=Date.now()),e[u].unshiftNode(s));return t.value}},v=(e,t)=>{if(!t||!t.maxAge&&!e[l])return!1;const r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[l]&&r>e[l]},g=e=>{if(e[n]>e[i])for(let t=e[u].tail;e[n]>e[i]&&null!==t;){const r=t.prev;$(e,t),t=r}},$=(e,t)=>{if(t){const r=t.value;e[h]&&e[h](r.key,r.value),e[n]-=r.length,e[c].delete(r.key),e[u].removeNode(t)}};class I{constructor(e,t,r,s,i){this.key=e,this.value=t,this.length=r,this.now=s,this.maxAge=i||0}}const R=(e,t,r,s)=>{let i=r.value;v(e,i)&&($(e,r),e[a]||(i=void 0)),i&&t.call(s,i.value,i.key,e)};e.exports=class{set max(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number");this[i]=e||1/0,g(this)}get max(){return this[i]}set allowStale(e){this[a]=!!e}get allowStale(){return this[a]}set maxAge(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number");this[l]=e,g(this)}get maxAge(){return this[l]}set lengthCalculator(e){"function"!=typeof e&&(e=E),e!==this[o]&&(this[o]=e,this[n]=0,this[u].forEach((e=>{e.length=this[o](e.value,e.key),this[n]+=e.length}))),g(this)}get lengthCalculator(){return this[o]}get length(){return this[n]}get itemCount(){return this[u].length}rforEach(e,t){t=t||this;for(let r=this[u].tail;null!==r;){const s=r.prev;R(this,e,r,t),r=s}}forEach(e,t){t=t||this;for(let r=this[u].head;null!==r;){const s=r.next;R(this,e,r,t),r=s}}keys(){return this[u].toArray().map((e=>e.key))}values(){return this[u].toArray().map((e=>e.value))}reset(){this[h]&&this[u]&&this[u].length&&this[u].forEach((e=>this[h](e.key,e.value))),this[c]=new Map,this[u]=new r,this[n]=0}dump(){return this[u].map((e=>!v(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[u]}set(e,t,r){if((r=r||this[l])&&"number"!=typeof r)throw new TypeError("maxAge must be a number");const s=r?Date.now():0,a=this[o](t,e);if(this[c].has(e)){if(a>this[i])return $(this,this[c].get(e)),!1;const o=this[c].get(e).value;return this[h]&&(this[p]||this[h](e,o.value)),o.now=s,o.maxAge=r,o.value=t,this[n]+=a-o.length,o.length=a,this.get(e),g(this),!0}const f=new I(e,t,a,s,r);return f.length>this[i]?(this[h]&&this[h](e,t),!1):(this[n]+=f.length,this[u].unshift(f),this[c].set(e,this[u].head),g(this),!0)}has(e){if(!this[c].has(e))return!1;const t=this[c].get(e).value;return!v(this,t)}get(e){return m(this,e,!0)}peek(e){return m(this,e,!1)}pop(){const e=this[u].tail;return e?($(this,e),e.value):null}del(e){$(this,this[c].get(e))}load(e){this.reset();const t=Date.now();for(let r=e.length-1;r>=0;r--){const s=e[r],i=s.e||0;if(0===i)this.set(s.k,s.v);else{const e=i-t;e>0&&this.set(s.k,s.v,e)}}}prune(){this[c].forEach(((e,t)=>m(this,t,!1)))}constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[i]=e.max||1/0;const t=e.length||E;if(this[o]="function"!=typeof t?E:t,this[a]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw new TypeError("maxAge must be a number");this[l]=e.maxAge||0,this[h]=e.dispose,this[p]=e.noDisposeOnSet||!1,this[f]=e.updateAgeOnGet||!1,this.reset()}}})),s.register("8TDvo",(function(e,t){"use strict";function r(e){var t=this;if(t instanceof r||(t=new r),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var s=0,i=arguments.length;s<i;s++)t.push(arguments[s]);return t}function i(e,t,r){var s=t===e.head?new a(r,null,t,e):new a(r,t,t.next,e);return null===s.next&&(e.tail=s),null===s.prev&&(e.head=s),e.length++,s}function n(e,t){e.tail=new a(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function o(e,t){e.head=new a(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function a(e,t,r,s){if(!(this instanceof a))return new a(e,t,r,s);this.list=s,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}e.exports=r,r.Node=a,r.create=r,r.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t},r.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},r.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},r.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)n(this,arguments[e]);return this.length},r.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)o(this,arguments[e]);return this.length},r.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},r.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},r.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,s=0;null!==r;s++)e.call(t,r.value,s,this),r=r.next},r.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,s=this.length-1;null!==r;s--)e.call(t,r.value,s,this),r=r.prev},r.prototype.get=function(e){for(var t=0,r=this.head;null!==r&&t<e;t++)r=r.next;if(t===e&&null!==r)return r.value},r.prototype.getReverse=function(e){for(var t=0,r=this.tail;null!==r&&t<e;t++)r=r.prev;if(t===e&&null!==r)return r.value},r.prototype.map=function(e,t){t=t||this;for(var s=new r,i=this.head;null!==i;)s.push(e.call(t,i.value,this)),i=i.next;return s},r.prototype.mapReverse=function(e,t){t=t||this;for(var s=new r,i=this.tail;null!==i;)s.push(e.call(t,i.value,this)),i=i.prev;return s},r.prototype.reduce=function(e,t){var r,s=this.head;if(arguments.length>1)r=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");s=this.head.next,r=this.head.value}for(var i=0;null!==s;i++)r=e(r,s.value,i),s=s.next;return r},r.prototype.reduceReverse=function(e,t){var r,s=this.tail;if(arguments.length>1)r=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");s=this.tail.prev,r=this.tail.value}for(var i=this.length-1;null!==s;i--)r=e(r,s.value,i),s=s.prev;return r},r.prototype.toArray=function(){for(var e=new Array(this.length),t=0,r=this.head;null!==r;t++)e[t]=r.value,r=r.next;return e},r.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,r=this.tail;null!==r;t++)e[t]=r.value,r=r.prev;return e},r.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var s=new r;if(t<e||t<0)return s;e<0&&(e=0),t>this.length&&(t=this.length);for(var i=0,n=this.head;null!==n&&i<e;i++)n=n.next;for(;null!==n&&i<t;i++,n=n.next)s.push(n.value);return s},r.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var s=new r;if(t<e||t<0)return s;e<0&&(e=0),t>this.length&&(t=this.length);for(var i=this.length,n=this.tail;null!==n&&i>t;i--)n=n.prev;for(;null!==n&&i>e;i--,n=n.prev)s.push(n.value);return s},r.prototype.splice=function(e,t,...r){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var s=0,n=this.head;null!==n&&s<e;s++)n=n.next;var o=[];for(s=0;n&&s<t;s++)o.push(n.value),n=this.removeNode(n);null===n&&(n=this.tail),n!==this.head&&n!==this.tail&&(n=n.prev);for(s=0;s<r.length;s++)n=i(this,n,r[s]);return o},r.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;null!==r;r=r.prev){var s=r.prev;r.prev=r.next,r.next=s}return this.head=t,this.tail=e,this};try{s("dnMxl")(r)}catch(e){}})),s.register("dnMxl",(function(e,t){"use strict";e.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}})),s.register("iI21w",(function(e,t){var r=s("iOmDM");e.exports=(e,t,s)=>{try{t=new r(t,s)}catch(e){return!1}return t.test(e)}})),s.register("lnKKH",(function(e,t){var r=s("iOmDM");e.exports=(e,t)=>new r(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))})),s.register("e1xBO",(function(e,t){var r=s("h0q8T"),i=s("iOmDM");e.exports=(e,t,s)=>{let n=null,o=null,a=null;try{a=new i(t,s)}catch(e){return null}return e.forEach((e=>{a.test(e)&&(n&&-1!==o.compare(e)||(n=e,o=new r(n,s)))})),n}})),s.register("fG3Sl",(function(e,t){var r=s("h0q8T"),i=s("iOmDM");e.exports=(e,t,s)=>{let n=null,o=null,a=null;try{a=new i(t,s)}catch(e){return null}return e.forEach((e=>{a.test(e)&&(n&&1!==o.compare(e)||(n=e,o=new r(n,s)))})),n}})),s.register("iOAlU",(function(e,t){var r=s("h0q8T"),i=s("iOmDM"),n=s("5nm9j");e.exports=(e,t)=>{e=new i(e,t);let s=new r("0.0.0");if(e.test(s))return s;if(s=new r("0.0.0-0"),e.test(s))return s;s=null;for(let t=0;t<e.set.length;++t){const i=e.set[t];let o=null;i.forEach((e=>{const t=new r(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":o&&!n(t,o)||(o=t);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${e.operator}`)}})),!o||s&&!n(s,o)||(s=o)}return s&&e.test(s)?s:null}})),s.register("fNcJ1",(function(e,t){var r=s("iOmDM");e.exports=(e,t)=>{try{return new r(e,t).range||"*"}catch(e){return null}}})),s.register("jTq75",(function(e,t){var r=s("h0q8T"),i=s("13ebk");const{ANY:n}=i;var o=s("iOmDM"),a=s("iI21w"),l=s("5nm9j"),h=s("eTIXj"),p=s("8mg5m"),u=s("8G57F");e.exports=(e,t,s,c)=>{let f,E,m,v,g;switch(e=new r(e,c),t=new o(t,c),s){case">":f=l,E=p,m=h,v=">",g=">=";break;case"<":f=h,E=u,m=l,v="<",g="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,c))return!1;for(let r=0;r<t.set.length;++r){const s=t.set[r];let o=null,a=null;if(s.forEach((e=>{e.semver===n&&(e=new i(">=0.0.0")),o=o||e,a=a||e,f(e.semver,o.semver,c)?o=e:m(e.semver,a.semver,c)&&(a=e)})),o.operator===v||o.operator===g)return!1;if((!a.operator||a.operator===v)&&E(e,a.semver))return!1;if(a.operator===g&&m(e,a.semver))return!1}return!0}})),s.register("hKfqV",(function(e,t){var r=s("jTq75");e.exports=(e,t,s)=>r(e,t,">",s)})),s.register("duN3e",(function(e,t){var r=s("jTq75");e.exports=(e,t,s)=>r(e,t,"<",s)})),s.register("j8tIK",(function(e,t){var r=s("iOmDM");e.exports=(e,t,s)=>(e=new r(e,s),t=new r(t,s),e.intersects(t,s))})),s.register("58XdY",(function(e,t){var r=s("iI21w"),i=s("hfSq3");e.exports=(e,t,s)=>{const n=[];let o=null,a=null;const l=e.sort(((e,t)=>i(e,t,s)));for(const e of l){r(e,t,s)?(a=e,o||(o=e)):(a&&n.push([o,a]),a=null,o=null)}o&&n.push([o,null]);const h=[];for(const[e,t]of n)e===t?h.push(e):t||e!==l[0]?t?e===l[0]?h.push(`<=${t}`):h.push(`${e} - ${t}`):h.push(`>=${e}`):h.push("*");const p=h.join(" || "),u="string"==typeof t.raw?t.raw:String(t);return p.length<u.length?p:t}})),s.register("7Lpj6",(function(e,t){var r=s("iOmDM"),i=s("13ebk");const{ANY:n}=i;var o=s("iI21w"),a=s("hfSq3");const l=[new i(">=0.0.0-0")],h=[new i(">=0.0.0")],p=(e,t,r)=>{if(e===t)return!0;if(1===e.length&&e[0].semver===n){if(1===t.length&&t[0].semver===n)return!0;e=r.includePrerelease?l:h}if(1===t.length&&t[0].semver===n){if(r.includePrerelease)return!0;t=h}const s=new Set;let i,p,f,E,m,v,g;for(const t of e)">"===t.operator||">="===t.operator?i=u(i,t,r):"<"===t.operator||"<="===t.operator?p=c(p,t,r):s.add(t.semver);if(s.size>1)return null;if(i&&p){if(f=a(i.semver,p.semver,r),f>0)return null;if(0===f&&(">="!==i.operator||"<="!==p.operator))return null}for(const e of s){if(i&&!o(e,String(i),r))return null;if(p&&!o(e,String(p),r))return null;for(const s of t)if(!o(e,String(s),r))return!1;return!0}let $=!(!p||r.includePrerelease||!p.semver.prerelease.length)&&p.semver,I=!(!i||r.includePrerelease||!i.semver.prerelease.length)&&i.semver;$&&1===$.prerelease.length&&"<"===p.operator&&0===$.prerelease[0]&&($=!1);for(const e of t){if(g=g||">"===e.operator||">="===e.operator,v=v||"<"===e.operator||"<="===e.operator,i)if(I&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===I.major&&e.semver.minor===I.minor&&e.semver.patch===I.patch&&(I=!1),">"===e.operator||">="===e.operator){if(E=u(i,e,r),E===e&&E!==i)return!1}else if(">="===i.operator&&!o(i.semver,String(e),r))return!1;if(p)if($&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===$.major&&e.semver.minor===$.minor&&e.semver.patch===$.patch&&($=!1),"<"===e.operator||"<="===e.operator){if(m=c(p,e,r),m===e&&m!==p)return!1}else if("<="===p.operator&&!o(p.semver,String(e),r))return!1;if(!e.operator&&(p||i)&&0!==f)return!1}return!(i&&v&&!p&&0!==f)&&(!(p&&g&&!i&&0!==f)&&(!I&&!$))},u=(e,t,r)=>{if(!e)return t;const s=a(e.semver,t.semver,r);return s>0?e:s<0||">"===t.operator&&">="===e.operator?t:e},c=(e,t,r)=>{if(!e)return t;const s=a(e.semver,t.semver,r);return s<0?e:s>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,s={})=>{if(e===t)return!0;e=new r(e,s),t=new r(t,s);let i=!1;e:for(const r of e.set){for(const e of t.set){const t=p(r,e,s);if(i=i||null!==t,t)continue e}if(i)return!1}return!0}}))}();
//# sourceMappingURL=semver.339a6680.js.map
define=__define;})(window.define);