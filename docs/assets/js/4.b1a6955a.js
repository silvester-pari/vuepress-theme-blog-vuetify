(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{435:function(t,a,n){var e=n(436),s=n(439)(e);t.exports=s},436:function(t,a,n){var e=n(437),s=n(176);t.exports=function(t,a){return t&&e(t,a,s)}},437:function(t,a,n){var e=n(438)();t.exports=e},438:function(t,a){t.exports=function(t){return function(a,n,e){for(var s=-1,i=Object(a),r=e(a),o=r.length;o--;){var u=r[t?o:++s];if(!1===n(i[u],u,i))break}return a}}},439:function(t,a,n){var e=n(127);t.exports=function(t,a){return function(n,s){if(null==n)return n;if(!e(n))return t(n,s);for(var i=n.length,r=a?i:-1,o=Object(n);(a?r--:++r<i)&&!1!==s(o[r],r,o););return n}}},440:function(t,a,n){var e=n(435),s=n(127);t.exports=function(t,a){var n=-1,i=s(t)?Array(t.length):[];return e(t,(function(t,e,s){i[++n]=a(t,e,s)})),i}},446:function(t,a,n){"use strict";var e=n(447),s=n.n(e);a.a={methods:{resolveTags:function(t,a){return s()(t,(function(t){return a[t]}))}}}},447:function(t,a,n){var e=n(177),s=n(175),i=n(440),r=n(39);t.exports=function(t,a){return(r(t)?e:i)(t,s(a,3))}},449:function(t,a,n){},450:function(t,a,n){},473:function(t,a,n){"use strict";var e=n(449);n.n(e).a},474:function(t,a,n){"use strict";var e=n(450);n.n(e).a},479:function(t,a,n){"use strict";n.r(a);var e=n(2),s=n(128),i=n.n(s),r={mixins:[n(446).a],props:{page:Object},methods:{resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat)}},computed:{tags:function(){return this.resolveTags(this.page.frontmatter.tags,this.$tag._metaMap)}}},o=(n(473),n(27)),u=Object(o.a)(r,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("article",{key:t.page.key,staticClass:"component-page-summary"},[n("header",{staticClass:"mb-1"},[n("div",{staticClass:"metadata"},[n("div",{staticClass:"d-flex"},[t.page.frontmatter.date?n("div",{staticClass:"published-at"},[n("i",{staticClass:"fa fa-clock"}),t._v(" "),n("time",{attrs:{datetime:t.page.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(t.page.frontmatter.date))+"\n          ")])]):t._e(),t._v(" "),t.page.lastUpdated?n("div",{staticClass:"updated-at ml-3"},[n("i",{staticClass:"fa fa-sync-alt"}),t._v(" "),n("time",{attrs:{datetime:t.page.lastUpdated}},[t._v("\n            "+t._s(t.resolvePostDate(t.page.lastUpdated))+"\n          ")])]):t._e(),t._v(" "),t.page.frontmatter.author?n("div",{staticClass:"author ml-3"},[n("span",{staticClass:"name"},[n("i",{staticClass:"fa fa-user"}),t._v(" "),n("router-link",{attrs:{to:"/author/"+t.page.frontmatter.author}},[t._v(t._s(t.page.frontmatter.author))])],1),t._v(" "),t.page.frontmatter.location?n("span",{staticClass:"location"},[t._v("\n            in "+t._s(t.page.frontmatter.location)+"\n          ")]):t._e()]):t._e()])]),t._v(" "),n("h2",{staticClass:"mt-1 mb-2"},[n("router-link",{attrs:{to:t.page.path}},[t._v(t._s(t.page.title))])],1),t._v(" "),this.tags.length?n("div",{staticClass:"tags"},t._l(this.tags,(function(a){return n("v-chip",{key:a.key,staticClass:"unstyled mr-1 mb-1",attrs:{"x-small":"",to:a.path}},[t._v("\n        "+t._s(a.key)+"\n      ")])})),1):t._e()]),t._v(" "),n("section",[t.page.frontmatter.summary?n("div",[t._v("\n      "+t._s(t.page.frontmatter.summary)+"\n    ")]):n("div",{domProps:{innerHTML:t._s(t.page.summary)}})])])}),[],!1,null,null,null).exports,c=n(240),p={components:{PageSummary:u},props:{pagination:Object},data:function(){return{paginationComponent:null,paginationComponentName:"VuetifyPagination"}},methods:{getPaginationComponent:function(){return e.default.component("VuetifyPagination")||c.a}},created:function(){this.paginationComponent=this.getPaginationComponent()},computed:{pages:function(){return this.pagination.pages}}},l=(n(474),Object(o.a)(p,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"component-page-list pb-12"},[this._l(this.pages,(function(t){return a("div",[t.summary?a("PageSummary",{staticClass:"page-summary",attrs:{page:t}}):a("Page",{staticClass:"page",attrs:{page:t}})],1)})),this._v(" "),this.pagination.length>1&&this.paginationComponent?a(this.paginationComponent,{tag:"component",staticClass:"d-flex justify-center mt-12",attrs:{"pagination-component-name":this.paginationComponentName}}):this._e()],2)}),[],!1,null,null,null));a.default=l.exports}}]);