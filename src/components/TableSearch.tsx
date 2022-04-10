import './component.css';
import {useState} from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {useDropzone} from 'react-dropzone';


const TableSearch= (props:any) => {
const toggle = props.toggle
const handleToggle =props.handleToggle
const [value, setValue] = useState<Date | null>(null);

const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
const files = acceptedFiles.map((file:any) => (
  
  <li key={file?.path}>
    {file?.path} - {file?.size} bytes
  </li>
));
    return (
     
        <div className="tableSearch">
            <div className="tableSearch__title">
                <h2>Post Table</h2>
            </div>
            <BsFillGrid3X3GapFill onClick={(e)=>handleToggle(e)} className= 'tableSearch-icon'/>
            <div className="tableSearch__searchbar">
                <button className="button-refresh">Refresh</button>
                <input type="text" placeholder="Search" />
            </div>

     <section className="dropzone">
      <div {...getRootProps({className: 'dropzone__container'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select Date"
        value={value}
        onChange={(newValue:any) => {
          setValue(newValue);
        }}
        renderInput={(params:any) => <TextField {...params} />}
      />
    </LocalizationProvider>
        </div>
    )
}
export default TableSearch;