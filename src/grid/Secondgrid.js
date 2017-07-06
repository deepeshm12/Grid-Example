import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import DataGrid  from 'react-datagrid';

class MultiSelectTable extends React.Component {
	constructor(props){
		super(props);
		this.selectRowProp = {
 		 mode: 'checkbox',
		clickToSelect: false,  // click to select, default is false
      	clickToExpand: true  // click to expand row, default is false
};
this.options = {
  clearSearch: true,
  clearSearchBtn: this.createCustomClearButton,
  expandColumnHeaderText :'Active'
};
this.expandComponent= this.expandComponent.bind(this);
this.isExpandableRow =this.isExpandableRow.bind(this);
	}

	isExpandableRow(row) {
	// if(!row.id)
	 return true;
    // if (row.id < 3) return true;
    // else return false;
  }

  expandComponent(row) {
    return (
      <div>HI
	  </div>
    );
  }
   componentWillMount(){
   this._products = [{
        id: 1,
        name: "Product1",
        price: 120
    }, {
        id: 2,
        name: "Product2",
        price: 80
    },
    {
        id: 3,
        name: "Product2",
        price: 80
    },
    {
        id: 4,
        name: "Product2",
        price: 80
    },
    {
        id: 5,
        name: "Product2",
        price: 80
    },
    {
        id: 6,
        name: "Product2",
        price: 80
    },
    {
        id: 7,
        name: "Product2",
        price: 80
    },
    {
        id: 8,
        name: "Product2",
        price: 80
    },
    {
        id: 9,
        name: "Product2",
        price: 80
    },
    {
        id: 10,
        name: "Product2",
        price: 80
    },
    {
        id: 11,
        name: "Product2",
        price: 80
    },
    {
        id: 12,
        name: "Product2",
        price: 80
    }]; 

}
  render() {
    return (
      <BootstrapTable data={ this._products}  options={this.options} expandableRow={ this.isExpandableRow } 
        expandComponent={ this.expandComponent }
		expandColumnOptions={ { expandColumnVisible: true, 
		expandColumnBeforeSelectColumn: true } }
		selectRow={ this.selectRowProp }
		pagination>
		
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' headerTitle={ true } columnTitle={ true }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default MultiSelectTable;