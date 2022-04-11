import './component.css';
import { useState } from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useDropzone } from 'react-dropzone';
import Moment from 'react-moment';
import 'moment-timezone';
import moment, { now } from 'moment'



const TableSearch = (props: any) => {
  const toggle = props.toggle
  const handleToggle = props.handleToggle
  const [value, setValue] = useState<any>(new Date());
  const [epoch, setEpoch] = useState<any>(null)
  const { acceptedFiles, getRootProps, getInputProps }
    = useDropzone();

  const files = acceptedFiles.map((file: any) => (

    <li key={file?.path}>
      {file?.path} - {file?.size} bytes
    </li>
  ));

  return (

    <div className="tableSearch">
      <div className="tableSearch__title">
        <h2>Post Table</h2>
      </div>
      <BsFillGrid3X3GapFill onClick={(e) => handleToggle(e)} className='tableSearch-icon' />
      <div className="tableSearch__searchbar">
        <button className="button-refresh">Refresh</button>
        <input type="text" placeholder="Search" />
      </div>

      <section className="dropzone">
        <div {...getRootProps({ className: 'dropzone__container' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>



      <p> Format : <Moment format="DD/MM/YYYY">
        {value}
      </Moment></p>


      <p>Format :  <Moment format="MM/DD/YYYY">
        {value}
      </Moment></p>

      <p>Format :      <Moment format="YYYY-MM-DDTHH:MM:SSZ" >
        {value}
      </Moment> </p>


      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
            let time = (moment(value, "M/D/YYYY H:mm").unix())
            setEpoch(time)
            console.log("epoch", epoch)
          }}
          renderInput={(params: any) => <TextField {...params} />}
        />


      </LocalizationProvider>
      <p>Epoch Time:{epoch}</p>
    </div>
  )
}
export default TableSearch;