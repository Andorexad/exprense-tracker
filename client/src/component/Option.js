/*import React, { Component, useState, useContext , useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { OptionContext } from '../context/OptionState';



const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [];

export const Option = () => {
  const { options, getOptions } = useContext(OptionContext);
  const { addOption } = useContext(OptionContext)

  useEffect(()=>{
    getOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const [selectedOption, setSelectedOption] = useState({
    isLoading: false,
    options: options,
    value: undefined,
  });
    
  
  const handleChange = (newValue,actionMeta) => {
    setSelectedOption(...selectedOption,newValue);
  };
  
  const handleCreate = (inputValue) => {
    const newOption = createOption(inputValue);
    setSelectedOption({
      isLoading: false,
      options: [...options, newOption],
      value: newOption,
    });
    addOption(newOption);
  };
  
  //isLoading, options, value } = this.state;
  return (
    <CreatableSelect
      isClearable
      isDisabled={selectedOption.isLoading}
      isLoading={selectedOption.isLoading}
      onChange={this.handleChange}
      onCreateOption={this.handleCreate}
      options={selectedOption.options}
      value={selectedOption.value}
    />
  );
  
}*/