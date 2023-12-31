var convert = require("xml-js");
var xml = '<ENVELOPE>' +
        '    <HEADER>'+
        '        <TALLYREQUEST>Import Data</TALLYREQUEST>'+
        '    </HEADER>'+
        '    <BODY>'+
        '       <IMPORTDATA>'+
        '           <REQUESTDESC>'+
        '                  <REPORTNAME>All Masters</REPORTNAME>'+
        '                  <STATICVARIABLES>'+
        '                        <SVCURRENTCOMPANY>Test</SVCURRENTCOMPANY>'+
        '                  </STATICVARIABLES>'+
        '           </REQUESTDESC>'+
        '       <REQUESTDATA>'+
        '           <TALLYMESSAGE xmlns:UDF="TallyUDF">'+
        '           <LEDGER NAME="Test-Ledger1" Action = "Create">'+
        '               <STATENAME> Test state </STATENAME>'+
        '               <PARENT>Bank Accounts</PARENT>'+
        '               <OPENINGBALANCE> 1033 </OPENINGBALANCE>'+
        '               <LANGUAGENAME.LIST>'+
        '                   <NAME.LIST TYPE="String">'+
        '                       <NAME>Test-Ledger1</NAME>'+
        '                   </NAME.LIST>'+
        '               </LANGUAGENAME.LIST>'+
        '           </LEDGER>'+
        '           </TALLYMESSAGE>'+
        '       </REQUESTDATA> '+ 
        '       </IMPORTDATA>'+
        ' </BODY>'+
        '</ENVELOPE>'

var json = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(json);