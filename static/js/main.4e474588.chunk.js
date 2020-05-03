(this["webpackJsonphouse-analysis"]=this["webpackJsonphouse-analysis"]||[]).push([[0],{37:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),s=a.n(r),o=(a(42),a(18)),i=a(19),c=a(20),m=a(12),h=a(27),d=a(26),u=(a(43),a(5)),p=a(31),E=a(14),y=a(48),b=a(52),g=a(49),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={address:"",zip:"",price:0,loanAmount:0,interestRate:0,loanPeriod:0,rent:0,initialExpenses:0,monthlyExpenses:0},n.handleNumberChange=n.handleNumberChange.bind(Object(m.a)(n)),n.handleTextChange=n.handleTextChange.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleTextChange",value:function(e){e.preventDefault();var t=e.target.value;this.setState(Object(o.a)({},e.target.name,t)),this.props.updatePropertyInfo(e.target.name,t)}},{key:"handleNumberChange",value:function(e){e.preventDefault();var t=isNaN(e.target.value)?0:parseFloat(e.target.value);this.setState(Object(o.a)({},e.target.name,t)),this.props.updatePropertyInfo(e.target.name,t)}},{key:"render",value:function(){return l.a.createElement(u.a,{backgroundColor:"white",width:["80%","60%"],p:5,textAlign:["center","left"],className:"Card-Display"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(p.a,{flexWrap:"wrap",justifyContent:["center","space-between"]},l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"address"},"Address"),l.a.createElement(b.a,{name:"address",value:this.state.address,onChange:this.handleTextChange,type:"text",id:"address",placeholder:"42 Wallaby Way Sydney, Australia","aria-describedby":"address-helper-text"}),l.a.createElement(g.a,{id:"address-helper-text",mb:"0.5rem"},"Where is it located?")),l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"zip"},"Zip Code"),l.a.createElement(b.a,{name:"zip",value:this.state.zip,onChange:this.handleTextChange,type:"text",id:"zip",placeholder:"12345","aria-describedby":"zip-helper-text",maxLength:"5"}),l.a.createElement(g.a,{id:"zip-helper-text",mb:"0.5rem"},"The 5 digit neighborhood code.")),l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"price"},"Purchase Price"),l.a.createElement(b.a,{name:"price",onChange:this.handleNumberChange,type:"number",id:"price",placeholder:"120000","aria-describedby":"price-helper-text"}),l.a.createElement(g.a,{id:"zip-helper-text",mb:"0.5rem"},"Exclude commas and use US dollars.")),l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"loan"},"Loan Amount"),l.a.createElement(b.a,{name:"loanAmount",onChange:this.handleNumberChange,type:"number",id:"loan",placeholder:"100000","aria-describedby":"loan-helper-text"}),l.a.createElement(g.a,{id:"loan-helper-text",mb:"0.5rem"},"Round to the nearest whole number.")),l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"interestRate"},"Loan Interest Rate"),l.a.createElement(b.a,{name:"interestRate",onChange:this.handleNumberChange,type:"number",id:"interestRate",placeholder:"5","aria-describedby":"interest-helper-text"}),l.a.createElement(g.a,{id:"interest-helper-text",mb:"0.5rem"},"Rounded percentage rate.")),l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"loan-period"},"Loan Period"),l.a.createElement(b.a,{min:0,name:"loanPeriod",id:"loan-period",placeholder:"20","aria-describedby":"loan-period-helper-text",onChange:this.handleNumberChange,type:"number"}),l.a.createElement(g.a,{id:"loan-period-helper-text",mb:"0.5rem"},"Length of loan in years.")),l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"rent"},"Estimated Monthly Rent"),l.a.createElement(b.a,{name:"rent",onChange:this.handleNumberChange,type:"number",id:"rent",placeholder:"1200","aria-describedby":"rent-helper-text"}),l.a.createElement(g.a,{id:"rent-helper-text",mb:"0.5rem"},"Exclude commas and use US dollars.")),l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"initial-expenses"},"Estimated Initial Expenses"),l.a.createElement(b.a,{name:"initialExpenses",onChange:this.handleNumberChange,type:"number",id:"initial-expenses",placeholder:"17000","aria-describedby":"initial-expenses-helper-text"}),l.a.createElement(g.a,{id:"initial-expenses-helper-text",mb:"0.5rem"},"Closing costs, initial repairs, etc.")),l.a.createElement(E.a,null,l.a.createElement(y.a,{htmlFor:"monthly-expenses"},"Estimated Monthly Expenses"),l.a.createElement(b.a,{name:"monthlyExpenses",onChange:this.handleNumberChange,type:"number",id:"monthly-expenses",placeholder:"350","aria-describedby":"monthly-expenses-helper-text"}),l.a.createElement(g.a,{id:"monthly-expenses-helper-text",mb:"0.5rem"},"Recurring bills excluding mortgage.")))))}}]),a}(l.a.Component),C=a(35),f=a(53),v=a(50),w=a(17),P=a(51),R=a(54),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={address:"",zip:"",price:0,loanAmount:0,interestRate:0,loanPeriod:0,rent:0,initialExpenses:0,monthlyExpenses:0},n.calculateResults=n.calculateResults.bind(Object(m.a)(n)),n.updatePropertyInfo=n.updatePropertyInfo.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"updatePropertyInfo",value:function(e,t){this.setState(Object(o.a)({},e,t))}},{key:"calculateResults",value:function(){var e=this.state.price+this.state.initialExpenses,t=e-this.state.loanAmount,a=this.calculatedMonthlyMortgage(this.state.loanAmount,this.state.interestRate,this.state.loanPeriod),n=this.state.rent,l=this.state.monthlyExpenses+a,r=n-l,s=12*r/t*100,o=(this.state.price-this.state.initialExpenses-t)/t/this.state.loanPeriod*100;return{totalProjectCost:e,outOfPocketCosts:t,monthlyMortgagePayment:a,estimatedMonthlyIncome:n,estimatedInitialExpenses:this.state.initialExpenses,estimatedMonthlyExpenses:l,cashFlow:r,cocROI:Math.round(1e4*s)/1e4,totalROI:Math.round(1e4*o)/1e4}}},{key:"calculatedMonthlyMortgage",value:function(e,t,a){var n=12*a,l=t/100/12,r=(Math.pow(1+l,n)-1)/(l*Math.pow(1+l,n));return Math.round(e/r*100)/100}},{key:"render",value:function(){var e=this.calculateResults();return l.a.createElement(C.a,null,l.a.createElement(f.a,null),l.a.createElement(u.a,{className:"App",backgroundColor:"gray.50"},l.a.createElement(v.a,{textAlign:"center",mb:4},"Rental Property Analysis"),l.a.createElement(p.a,{className:"Anlysis-Display",alignItems:"center",justifyContent:"space-around",flexDir:"column"},l.a.createElement(x,{updatePropertyInfo:this.updatePropertyInfo,calculateResults:this.calculateResults}),l.a.createElement(M,{address:this.state.address,zip:this.state.zip,results:e})),l.a.createElement(u.a,{className:"Footer",py:6,mt:3},l.a.createElement("footer",null,l.a.createElement(w.a,{fontSize:"sm"},"Inspired by"," ",l.a.createElement(P.a,{color:"teal.500",href:"https://www.biggerpockets.com/buy_and_hold_results/new"},"Bigger Pockets Property Analysis Tool")),l.a.createElement(w.a,{fontSize:"sm"},"Copyright \xa9 ",(new Date).getFullYear()," Smith & Butler LLC")))))}}]),a}(l.a.Component);function M(e){var t=e.results,a=""===e.address&&""===e.zip?" ":"Showing Analysis for ".concat(e.address,", ").concat(e.zip);return l.a.createElement(u.a,{className:"Card-Display",p:5,width:["80%","40%"],my:6,backgroundColor:"white"},l.a.createElement(v.a,{textAlign:"center",as:"h2",size:"md",mb:6},a),l.a.createElement(R.b,{flexWrap:"wrap",alignContent:"center",align:"center",justifyContent:"space-evenly",whiteSpace:{lg:"nowrap",sm:"normal"},textAlign:"center"},l.a.createElement(R.a,{px:2},l.a.createElement(R.c,null,"Total Projected Cost"),l.a.createElement(R.d,null,"$",O(t.totalProjectCost))),l.a.createElement(R.a,{px:2},l.a.createElement(R.c,null,"Out of Pocket Cost"),l.a.createElement(R.d,null,"$",O(t.outOfPocketCosts))),l.a.createElement(R.a,{px:2},l.a.createElement(R.c,null,"Monthly Mortgage"),l.a.createElement(R.d,null,"$",O(t.monthlyMortgagePayment))),l.a.createElement(R.a,{px:2},l.a.createElement(R.c,null,"Estimated Monthly Income"),l.a.createElement(R.d,null,"$",O(t.estimatedMonthlyIncome))),l.a.createElement(R.a,{px:2},l.a.createElement(R.c,null,"Estimated Monthly Expenses"),l.a.createElement(R.d,null,"$",O(t.estimatedMonthlyExpenses))),l.a.createElement(R.a,{px:2},l.a.createElement(R.c,null,"Cash Flow"),l.a.createElement(R.d,null,"$",O(t.cashFlow))),l.a.createElement(R.a,{px:2},l.a.createElement(R.c,null,"Cash on Cash Return on Investment"),l.a.createElement(R.d,null,O(t.cocROI),"%")),l.a.createElement(R.a,{px:2},l.a.createElement(R.c,null,"Total Return on Investment"),l.a.createElement(R.d,null,O(t.totalROI),"%"))))}function O(e){return isFinite(e)?e.toLocaleString():"0"}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.4e474588.chunk.js.map