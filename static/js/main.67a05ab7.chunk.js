(this.webpackJsonpnought=this.webpackJsonpnought||[]).push([[0],{73:function(t,e,a){},89:function(t,e){},93:function(t,e,a){},94:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a(0),c=a.n(s),r=a(11),u=a.n(r),i=(a(73),a.p,a(14)),o=a(48),l=a.n(o),j=a(54),h=a(38),d=a(39),b=a(17),m=a(45),v=a(44),x=(a(53),a(8)),O=a(128),p=a(123),g=a(126),f=a(129),y=a(125),S=a(55),C=a.n(S),M=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t){return Object(h.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{data:[{x:[0,this.props.data[0][0]],y:[0,this.props.data[0][1]],z:[0,this.props.data[0][2]],type:"scatter3d",mode:"lines+markers",line:{width:6,color:"red",reversescale:!1},name:this.props.names[0]},{x:[0,this.props.data[1][0]],y:[0,this.props.data[1][1]],z:[0,this.props.data[1][2]],type:"scatter3d",mode:"lines+markers",line:{width:6,color:"blue",reversescale:!1},name:this.props.names[1]},{x:[0,this.props.data[2][0]],y:[0,this.props.data[2][1]],z:[0,this.props.data[2][2]],type:"scatter3d",mode:"lines+markers",line:{width:6,color:"pink",opacity:.5,reversescale:!1},name:this.props.names[2]}]})})}}]),a}(s.Component);function k(t){var e=Object(y.e)(t),a=Object(y.f)(e);return{squared:a,result:Object(y.d)(a)}}var I=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={dot:"",cross:[],arr1:"",arr2:"",numSum:{sumu:null,sumv:null},sqrtSum:{sumu:null,sumv:null},ucpy:{u1:"0",u2:"0",u3:"0"},vcpy:{v1:"0",v2:"0",v3:"0"},uComponents:{u1:"0",u2:"0",u3:"0"},vComponents:{v1:"0",v2:"0",v3:"0"},angle:null,crossMagnitude:{sqrtSum:null,numSum:null},add:[],sub:[],proj:{udotv:null,uMagSquared:null,result:[]},calculate:0},n.dotProduct=n.dotProduct.bind(Object(b.a)(n)),n.projuV=n.projuV.bind(Object(b.a)(n)),n.addAndSub=n.addAndSub.bind(Object(b.a)(n)),n.crossProduct=n.crossProduct.bind(Object(b.a)(n)),n.magnitude=n.magnitude.bind(Object(b.a)(n)),n.crossMagnitude=n.crossMagnitude.bind(Object(b.a)(n)),n.angleBetween=n.angleBetween.bind(Object(b.a)(n)),n.allCalculations=n.allCalculations.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"dotProduct",value:function(t,e){var a=Object(y.c)(t,e);this.setState({dot:"".concat(a)})}},{key:"projuV",value:function(t){var e=this.state.dot,a=this.state.numSum.sumu,n=e/a,s=[n*t[0],n*t[1],n*t[2]];this.setState({proj:{udotv:e,uMagSquared:a,result:s}})}},{key:"addAndSub",value:function(t,e){this.setState({add:[t[0]+e[0],t[1]+e[1],t[2]+e[2]],sub:[t[0]-e[0],t[1]-e[1],t[2]-e[2]]})}},{key:"crossProduct",value:function(t,e){var a=Object(y.b)(t,e);this.setState({cross:a})}},{key:"crossMagnitude",value:function(){var t=k(this.state.cross);this.setState({crossMagnitude:{numSum:t.squared,sqrtSum:t.result}})}},{key:"magnitude",value:function(t,e){var a=k(t),n=k(e);this.setState({numSum:{sumu:a.squared,sumv:n.squared},sqrtSum:{sumu:a.result,sumv:n.result}})}},{key:"angleBetween",value:function(){var t=this.state.sqrtSum,e=t.sumu,a=t.sumv;this.setState({angle:180/Math.PI*Object(y.a)(this.state.dot/(e*a))})}},{key:"allCalculations",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e,a,n,s,c,r,u,i,o,j;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({calculate:1}),e=this.state.uComponents,a=e.u1,n=e.u2,s=e.u3,c=this.state.vComponents,r=c.v1,u=c.v2,i=c.v3,this.setState({ucpy:{u1:a,u2:n,u3:s},vcpy:{v1:r,v2:u,v3:i}}),o=[parseInt(a),parseInt(n),parseInt(s)],j=[parseInt(r),parseInt(u),parseInt(i)],t.next=8,this.magnitude(o,j);case 8:return t.next=10,this.crossProduct(o,j);case 10:return t.next=12,this.dotProduct(o,j);case 12:return t.next=14,this.addAndSub(o,j);case 14:return t.next=16,this.projuV(o);case 16:return t.next=18,this.angleBetween();case 18:return t.next=20,this.crossMagnitude();case 20:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.ucpy,a=e.u1,s=e.u2,c=e.u3,r=this.state.vcpy,u=r.v1,o=r.v2,l=r.v3,j=this.state,h=j.numSum,d=j.sqrtSum,b=j.crossMagnitude,m=j.proj,v=Object(n.jsxs)("div",{children:[Object(n.jsxs)(O.a,{display:"flex",justifyContent:"center",marginTop:5,children:[Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:"\\vec{u} = \\langle i,j,k\\rangle =  "})," "]}),Object(n.jsxs)(O.a,{display:"flex",marginX:3,children:[Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:"\\langle"})," "]}),Object(n.jsx)(g.a,{label:Object(n.jsx)(x.InlineMath,{math:"\\text{input } i \\text{ here}"}),onChange:function(e){t.setState((function(t){return{uComponents:Object(i.a)(Object(i.a)({},t.uComponents),{},{u1:e.target.value})}}))},type:"number"}),Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:", "})," "]}),Object(n.jsx)(g.a,{label:Object(n.jsx)(x.InlineMath,{math:"\\text{input } j \\text{ here}"}),onChange:function(e){t.setState((function(t){return{uComponents:Object(i.a)(Object(i.a)({},t.uComponents),{},{u2:e.target.value})}}))},type:"number"}),Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:", "})," "]}),Object(n.jsx)(g.a,{label:Object(n.jsx)(x.InlineMath,{math:"\\text{input } k \\text{ here}"}),onChange:function(e){t.setState((function(t){return{uComponents:Object(i.a)(Object(i.a)({},t.uComponents),{},{u3:e.target.value})}}))},type:"number"}),Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:"\\rangle"})," "]})]})]}),Object(n.jsxs)(O.a,{display:"flex",justifyContent:"center",children:[Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:"\\vec{v} = \\langle l,m,n\\rangle =  "})," "]}),Object(n.jsxs)(O.a,{display:"flex",marginX:3,children:[Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:"\\langle"})," "]}),Object(n.jsx)(g.a,{label:Object(n.jsx)(x.InlineMath,{math:"\\text{input } l \\text{ here}"}),onChange:function(e){t.setState((function(t){return{vComponents:Object(i.a)(Object(i.a)({},t.vComponents),{},{v1:e.target.value})}}))},type:"number"}),Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:","})," "]}),Object(n.jsx)(g.a,{label:Object(n.jsx)(x.InlineMath,{math:"\\text{input } m \\text{ here}"}),onChange:function(e){t.setState((function(t){return{vComponents:Object(i.a)(Object(i.a)({},t.vComponents),{},{v2:e.target.value})}}))},type:"number"}),Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:","})," "]}),Object(n.jsx)(g.a,{label:Object(n.jsx)(x.InlineMath,{math:"\\text{input } n \\text{ here}"}),onChange:function(e){t.setState((function(t){return{vComponents:Object(i.a)(Object(i.a)({},t.vComponents),{},{v3:e.target.value})}}))},type:"number"}),Object(n.jsxs)(p.a,{variant:"h2",children:[Object(n.jsx)(x.InlineMath,{math:"\\rangle"})," "]})]})]}),Object(n.jsx)(O.a,{display:"flex",justifyContent:"center",marginTop:4,children:Object(n.jsx)(f.a,{color:"primary",variant:"contained",onClick:this.allCalculations,children:Object(n.jsx)(p.a,{variant:"h4",children:Object(n.jsx)(x.InlineMath,{math:"\\text{click to calculate}"})})})})]});return 0===this.state.calculate?Object(n.jsx)("div",{children:v}):Object(n.jsxs)("div",{children:[v,Object(n.jsx)(x.BlockMath,{math:"\\text{Given: } \\vec{u} =  \\langle".concat(a+", "+s+", "+c,"\\rangle \\ \\text{ and } \\  \\vec{v} =   \\langle").concat(u+", "+o+", "+l,"\\rangle")}),Object(n.jsx)(x.BlockMath,{math:"\\vec{u} + \\vec{v} = \\ \\langle".concat(this.state.add.toString(),"\\rangle")}),Object(n.jsx)(x.BlockMath,{math:"\\vec{u} - \\vec{v} = \\ \\langle".concat(this.state.sub.toString(),"\\rangle")}),Object(n.jsx)(x.BlockMath,{math:"|{\\vec{u}}| = \\sqrt{".concat(h.sumu,"} = ").concat(d.sumu," ")}),Object(n.jsx)(x.BlockMath,{math:"|{\\vec{v}}| = \\sqrt{".concat(h.sumv,"} = ").concat(d.sumv)}),Object(n.jsx)(x.BlockMath,{math:"\\hat{u} =\t\\frac{1}{\\sqrt{".concat(h.sumu,"}} \\langle").concat(a+", "+s+", "+c,"\\rangle")}),Object(n.jsx)(x.BlockMath,{math:"\\hat{v} =\t\\frac{1}{\\sqrt{".concat(h.sumv,"}} \\langle").concat(u+", "+o+", "+l,"\\rangle")}),Object(n.jsx)(x.BlockMath,{math:"\\vec{u} \\cdot \\vec{v} = \\ ".concat(this.state.dot)}),Object(n.jsx)(x.BlockMath,{math:"\\theta = cos^{-1}\\left(\\frac{".concat(this.state.dot,"}{\\sqrt{").concat(h.sumu*h.sumv,"}}\\right) = ").concat(this.state.angle,"^{\\circ} ")}),Object(n.jsx)(x.BlockMath,{math:"\\vec{u} \\times \\vec{v} = \\ \\langle".concat(this.state.cross.toString(),"\\rangle")}),Object(n.jsx)(x.BlockMath,{math:"|\\vec{u} \\times \\vec{v}| = \\sqrt{".concat(b.numSum,"} = ").concat(b.sqrtSum," ")}),Object(n.jsx)(x.BlockMath,{math:"\\text{proj}_u v = \\left(  \\frac{".concat(m.udotv,"}{").concat(m.uMagSquared,"} \\right) \\langle").concat(a+", "+s+", "+c," \\rangle  = \\langle").concat(m.result.toString()," \\rangle  ")}),Object(n.jsx)(O.a,{display:"flex",justifyContent:"center",children:Object(n.jsx)(M,{names:["Vector u","Vector v","Addition"],data:[[a,s,c],[u,o,l],this.state.add]})}),Object(n.jsx)(O.a,{display:"flex",justifyContent:"center",children:Object(n.jsx)(M,{names:["Vector u","Vector v","Subtraction"],data:[[a,s,c],[u,o,l],this.state.sub]})}),Object(n.jsx)(O.a,{display:"flex",justifyContent:"center",children:Object(n.jsx)(M,{names:["Vector u","Vector v","Unit Vector of Vector u"],data:[[a,s,c],[u,o,l],[a/d.sumu,s/d.sumu,c/d.sumu]]})}),Object(n.jsx)(O.a,{display:"flex",justifyContent:"center",children:Object(n.jsx)(M,{names:["Vector u","Vector v","Unit Vector of Vector v"],data:[[a,s,c],[u,o,l],[u/d.sumv,o/d.sumv,l/d.sumv]]})}),Object(n.jsx)(O.a,{display:"flex",justifyContent:"center",children:Object(n.jsx)(M,{names:["Vector u","Vector v","Vector Orthogonal to vector u and v"],data:[[a,s,c],[u,o,l],this.state.cross]})}),Object(n.jsx)(O.a,{display:"flex",justifyContent:"center",children:Object(n.jsx)(M,{names:["Vector u","Vector v","Vector v project onto Vector u"],data:[[a,s,c],[u,o,l],m.result]})})]})}}]),a}(s.Component);a(93);var V=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(I,{})})})},q=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,132)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),c(t),r(t)}))};u.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(V,{})}),document.getElementById("root")),q()}},[[94,1,2]]]);
//# sourceMappingURL=main.67a05ab7.chunk.js.map