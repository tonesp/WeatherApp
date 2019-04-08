const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="weather-styles">
  <template>
  <style>
        div.blueTable {
          border: 1px solid #1C6EA4;
          background-color: #EEEEEE;
          width: 100%;
          text-align: left;
          border-collapse: collapse;
        }
		.divTitle{
			font-family:  Arial, Helvetica, sans-serif;
			font-size:    20px;	
			font-weight:  bold;
    }
		.divTable.blueTable .divTableCell, .divTable.blueTable .divTableHead {
          border: 1px solid #AAAAAA;
          padding: 3px 2px;
          font-family:  Arial, Helvetica, sans-serif;
          font-size:    15px;
        }
        .divTable.blueTable .divTableBody .divTableCell {
          font-size: 13px;
        }
        .divTable.blueTable .divTableRow:nth-child(even) {
          background: #D0E4F5;
        }
        .divTable.blueTable .divTableHeading {
          background: #1C6EA4;
          background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
          background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
          background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
          border-bottom: 2px solid #444444;
        }
        .divTable.blueTable .divTableHeading .divTableHead {
          font-size: 15px;
          font-weight: bold;
          color: #FFFFFF;
          border-left: 2px solid #D0E4F5;
        }
        .divTable.blueTable .divTableHeading .divTableHead:first-child {
          border-left: none;
        }
        .blueTable .tableFootStyle {
          font-size: 14px;
          font-weight: bold;
          color: #FFFFFF;
          background: #D0E4F5;
          background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
          background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
          background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
          border-top: 2px solid #444444;
        }
        .blueTable .tableFootStyle {
          font-size: 14px;
        }
        .blueTable .tableFootStyle .links {
          text-align: right;
        }
        .blueTable .tableFootStyle .links a{
          display: inline-block;
          background: #1C6EA4;
          color: #FFFFFF;
          padding: 2px 8px;
          border-radius: 5px;
        }
        .blueTable.outerTableFooter {
          border-top: none;
        }
        .blueTable.outerTableFooter .tableFootStyle {
          padding: 3px 5px; 
        }
        /* DivTable.com */
        .divTable{ display: table; }
        .divTableRow { display: table-row; }
        .divTableHeading { display: table-header-group;}
        .divTableCell, .divTableHead { display: table-cell;}
        .divTableHeading { display: table-header-group;}
        .divTableFoot { display: table-footer-group;}
        .divTableBody { display: table-row-group;}
        }
      </style>
    </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);