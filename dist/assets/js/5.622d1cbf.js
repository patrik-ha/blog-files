(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{242:function(t,a,s){},341:function(t,a,s){"use strict";var e=s(242);s.n(e).a},345:function(t,a,s){"use strict";s.r(a);var e=s(2),i=s(0),r=s.n(i),n=s(1),c=s(4),o=s(5),l=s(14);let f=class extends n.a{constructor(){super();var t=this.$root;console.log(this.article),this.article=o.a.toArticle(t.$page),console.log(this.article)}formatDate(t){if(t)return r()(t).format("YYYY-MM-DD")}};var u=f=e.a([Object(c.a)({components:{CalendarIcon:l.a}}),e.b("design:paramtypes",[])],f),h=(s(341),s(3)),d=Object(h.a)(u,function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md"},[a("span",{staticClass:"float-left"},[a("Calendar-Icon",{attrs:{size:20}}),a("span",{staticClass:"date"},[this._v(this._s(this.formatDate(this.article.frontmatterData.date)))])],1),this._v(" "),this._l(this.article.frontmatterData.tags,function(t){return a("span",{key:t,staticClass:"tag float-right"},[a("Tag",{attrs:{tag:t}})],1)})],2)])])},[],!1,null,"304263cd",null);a.default=d.exports}}]);