(this["webpackJsonphouse-analysis"]=this["webpackJsonphouse-analysis"]||[]).push([[0],{37:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),i=a.n(r),o=(a(42),a(27)),c=a(28),s=a(29),m=a(13),d=a(36),h=a(35),u=(a(43),a(6)),p=a(31),E=a(15),g=a(48),y=a(53),x=a(49);function b(e){return l.a.createElement(u.a,{backgroundColor:"white",width:["80%","60%"],p:5,textAlign:["center","left"],className:"Card-Display"},l.a.createElement("form",null,l.a.createElement(p.a,{flexWrap:"wrap",justifyContent:["center","space-between"]},l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"address"},"Address"),l.a.createElement(y.a,{name:"address",onChange:e.handleInputChange,type:"text",id:"address",placeholder:"21 Jump Street","aria-describedby":"address-helper-text"}),l.a.createElement(x.a,{id:"address-helper-text",mb:"0.5rem"},"Where is it located?")),l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"zip"},"Zip Code"),l.a.createElement(y.a,{name:"zip",onChange:e.handleInputChange,type:"text",id:"zip",placeholder:"91210","aria-describedby":"zip-helper-text",maxLength:"5"}),l.a.createElement(x.a,{id:"zip-helper-text",mb:"0.5rem"},"The 5 digit neighborhood code.")),l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"price"},"Purchase Price"),l.a.createElement(y.a,{name:"price",onChange:e.handleInputChange,type:"number",id:"price",placeholder:"120000","aria-describedby":"price-helper-text"}),l.a.createElement(x.a,{id:"zip-helper-text",mb:"0.5rem"},"Exclude commas and use US dollars.")),l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"loan"},"Loan Amount"),l.a.createElement(y.a,{name:"loanAmount",onChange:e.handleInputChange,type:"number",id:"loan",placeholder:"100000","aria-describedby":"loan-helper-text"}),l.a.createElement(x.a,{id:"loan-helper-text",mb:"0.5rem"},"Round to the nearest whole number.")),l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"interestRate"},"Loan Interest Rate"),l.a.createElement(y.a,{name:"interestRate",onChange:e.handleInputChange,type:"number",id:"interestRate",placeholder:"5","aria-describedby":"interest-helper-text"}),l.a.createElement(x.a,{id:"interest-helper-text",mb:"0.5rem"},"Rounded percentage rate.")),l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"loan-period"},"Loan Period"),l.a.createElement(y.a,{min:0,name:"loanPeriod",id:"loan-period",placeholder:"20","aria-describedby":"loan-period-helper-text",onChange:e.handleInputChange,type:"number"}),l.a.createElement(x.a,{id:"loan-period-helper-text",mb:"0.5rem"},"Length of loan in years.")),l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"rent"},"Estimated Monthly Rent"),l.a.createElement(y.a,{name:"rent",onChange:e.handleInputChange,type:"number",id:"rent",placeholder:"1200","aria-describedby":"rent-helper-text"}),l.a.createElement(x.a,{id:"rent-helper-text",mb:"0.5rem"},"Exclude commas and use US dollars.")),l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"initial-expenses"},"Estimated Initial Expenses"),l.a.createElement(y.a,{name:"initialExpenses",onChange:e.handleInputChange,type:"number",id:"initial-expenses",placeholder:"17000","aria-describedby":"initial-expenses-helper-text"}),l.a.createElement(x.a,{id:"initial-expenses-helper-text",mb:"0.5rem"},"Closing costs, initial repairs, etc.")),l.a.createElement(E.a,{width:["90%","45%","30%"]},l.a.createElement(g.a,{htmlFor:"monthly-expenses"},"Estimated Monthly Expenses"),l.a.createElement(y.a,{name:"monthlyExpenses",onChange:e.handleInputChange,type:"number",id:"monthly-expenses",placeholder:"350","aria-describedby":"monthly-expenses-helper-text"}),l.a.createElement(x.a,{id:"monthly-expenses-helper-text",mb:"0.5rem"},"Recurring bills excluding mortgage.")))))}var C=a(50),f=a(54),w=a(52),I=a(19);function P(e){var t=e.results,a=""===e.address&&""===e.zip?" ":"Showing Analysis for ".concat(e.address,", ").concat(e.zip);return l.a.createElement(u.a,{className:"Card-Display",p:5,width:["80%","40%"],my:6,backgroundColor:"white"},l.a.createElement(C.a,{textAlign:"center",as:"h2",size:"md",mb:6},a),l.a.createElement(f.b,{flexWrap:"wrap",alignContent:"center",align:"center",justifyContent:"space-evenly",whiteSpace:{lg:"nowrap",sm:"normal"},textAlign:"center"},l.a.createElement(f.a,{px:2,minW:"50%"},l.a.createElement(f.d,null,"Total Cost"),l.a.createElement(f.e,null,"$",v(t.totalProjectCost)),l.a.createElement(f.c,null,"Over Time")),l.a.createElement(f.a,{px:2,minW:"50"},l.a.createElement(f.d,null,"Cash Down"),l.a.createElement(f.e,null,"$",v(t.outOfPocketCosts)),l.a.createElement(f.c,null,"Out of Pocket")),l.a.createElement(f.a,{px:2,minW:"50%"},l.a.createElement(f.d,null,"Mortgage"),l.a.createElement(f.e,null,"$",v(t.monthlyMortgagePayment)),l.a.createElement(f.c,null,"Per Month")),l.a.createElement(f.a,{px:2,minW:"50%"},l.a.createElement(f.d,null,"Rent Income"),l.a.createElement(f.e,null,"$",v(t.estimatedMonthlyIncome)),l.a.createElement(f.c,null,"Per Month")),l.a.createElement(f.a,{px:2,minW:"50%"},l.a.createElement(f.d,null,"Total Expenses"),l.a.createElement(f.e,null,"$",v(t.estimatedMonthlyExpenses)),l.a.createElement(f.c,null,"Per Month")),l.a.createElement(f.a,{px:2,minW:"50%"},l.a.createElement(f.d,null,"Cash Flow"),l.a.createElement(f.e,null,"$",v(t.cashFlow)),l.a.createElement(f.c,null,"Per Month")),l.a.createElement(f.a,{px:2,minW:"50%"},l.a.createElement(f.d,null,"Selling Price"),l.a.createElement(f.e,null,"$",v(t.projectedSalesPrice)),l.a.createElement(f.c,null,"At time of Sale")),l.a.createElement(f.a,{px:2,minW:"50%"},l.a.createElement(f.d,null,"Selling Expenses"),l.a.createElement(f.e,null,"$",0===t.totalProjectCost?0:v(t.projectedSalesExpenses)),l.a.createElement(f.c,null,"At time of Sale")),l.a.createElement(f.a,{px:2,minW:"50%%"},l.a.createElement(f.d,null,"Cash on Cash"),l.a.createElement(f.e,null,v(t.cocROI),"%"),l.a.createElement(f.c,null,"ROI")),l.a.createElement(f.a,{px:2,minW:"50%"},l.a.createElement(f.d,null,"Total Return"),l.a.createElement(f.e,null,v(t.totalROI),"%"),l.a.createElement(f.c,null,"ROI"))),l.a.createElement(w.d,{"aria-label":"Holding Term",defaultValue:t.holdingTerm,onChange:e.handleSliderChange,min:1,max:50},l.a.createElement(w.c,null),l.a.createElement(w.a,{bg:"teal.500"}),l.a.createElement(w.b,null)),l.a.createElement(C.a,{textAlign:"center",as:"h3",size:"md"},"After Holding for"," ",l.a.createElement(I.a,{display:"inline",color:"teal.600",size:"md"},t.holdingTerm)," ",t.holdingTerm>1?"Years":"Year"," Before Selling"))}function v(e){return isFinite(e)?e.toLocaleString():"0"}var S=a(17),M=a(55),R=a(51),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={address:"",zip:"",price:0,loanAmount:0,interestRate:0,loanPeriod:0,rent:0,initialExpenses:0,monthlyExpenses:0,holdingTerm:20},n.updatePropertyInfo=n.updatePropertyInfo.bind(Object(m.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n)),n.handleSliderChange=n.handleSliderChange.bind(Object(m.a)(n)),n.calculateResults=n.calculateResults.bind(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"updatePropertyInfo",value:function(e,t){this.setState(Object(o.a)({},e,t))}},{key:"handleInputChange",value:function(e){var t;e.preventDefault(),t="text"===e.target.type?e.target.value:isNaN(e.target.value)?0:parseFloat(e.target.value),this.updatePropertyInfo(e.target.name,t)}},{key:"handleSliderChange",value:function(e){this.updatePropertyInfo("holdingTerm",e)}},{key:"calculateResults",value:function(){var e=this.state.price+this.state.initialExpenses,t=e-this.state.loanAmount,a=this.calculatedMonthlyMortgage(this.state.loanAmount,this.state.interestRate,this.state.loanPeriod),n=this.state.rent,l=this.state.monthlyExpenses+a,r=n-l,i=this.state.loanAmount-this.state.holdingTerm*a*12,o=this.calculatedHouseAppreciation(this.state.price,this.state.holdingTerm),c=Math.round(.06*o+.04*o+4e3),s=12*r/t*100,m=(o-c-i-t)/t/this.state.holdingTerm*100;return{totalProjectCost:e,outOfPocketCosts:t,monthlyMortgagePayment:a,estimatedMonthlyIncome:n,estimatedInitialExpenses:this.state.initialExpenses,estimatedMonthlyExpenses:l,cashFlow:r,cocROI:Math.round(100*s)/100,totalROI:Math.round(100*m)/100,holdingTerm:this.state.holdingTerm,projectedSalesPrice:o,projectedSalesExpenses:c}}},{key:"calculatedMonthlyMortgage",value:function(e,t,a){var n=12*a,l=t/100/12,r=(Math.pow(1+l,n)-1)/(l*Math.pow(1+l,n));return Math.round(e/r*100)/100}},{key:"calculatedHouseAppreciation",value:function(e,t){for(var a=e,n=0;n<t;n++)a+=.02*a;return Math.round(a)}},{key:"render",value:function(){var e=this.calculateResults();return l.a.createElement(S.a,null,l.a.createElement(M.a,null),l.a.createElement(u.a,{className:"App",backgroundColor:"gray.50"},l.a.createElement(C.a,{textAlign:"center",mb:4},"Rental Property Analysis"),l.a.createElement(p.a,{alignItems:"center",justifyContent:"space-around",flexDir:"column"},l.a.createElement(b,{handleInputChange:this.handleInputChange}),l.a.createElement(P,{address:this.state.address,zip:this.state.zip,results:e,handleSliderChange:this.handleSliderChange})),l.a.createElement(u.a,{className:"Footer",py:6,mt:3},l.a.createElement("footer",null,l.a.createElement(I.a,{fontSize:"sm"},"Inspired by"," ",l.a.createElement(R.a,{color:"teal.500",href:"https://www.biggerpockets.com/buy_and_hold_results/new"},"Bigger Pockets Property Analysis Tool")),l.a.createElement(I.a,{fontSize:"sm"},"Copyright \xa9 ",(new Date).getFullYear()," Smith & Butler LLC")))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e1c56bea.chunk.js.map