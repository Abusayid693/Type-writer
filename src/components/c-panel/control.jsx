import React from 'react';
import "./control.css"
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


  const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: 'black',
        backgroundColor: 'white',
        padding: 10,
      }),

  }

class Container extends React.Component
{
    state = {
        selectedOption: null,
      };
   constructor(props){
       super(props);
   }
 
   
   componentDidMount() {
    this.initialize();
   }
  
   initialize() {
        // alert("script initialised")
   }

   handleChange = (selectedOption) => {
    this.setState({ selectedOption }, function(){
    var a = this.state.selectedOption;
    alert(a.value)
    });
  };





   render() {

  

      const { selectedOption } = this.state;
  
       return(
        <div className="panel">


        

       <Select styles={customStyles}
        className="drop"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Select fonts"
      />

    <Select styles={customStyles}
        className="drop"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Select fonts"
      />




        </div>
       );
   }
}


















export default Container