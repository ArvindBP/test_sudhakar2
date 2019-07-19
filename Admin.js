import React, { useCallback } from 'react';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
//import FilePicker from './FilePicker';
//import MaterialTableDemo from './TrainingDataTable';
import OnDrop from './OnDrop';




const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    typography: { useNextVariants: true },
  });

 
  

export default class Admin extends React.Component{
    constructor() {
        super();

    this.state={
        fileName:'',
        division:'',
        description:'',
        
      
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json"
          
      }
    };
   
  axios({
      method: 'post',
      url: 'http://192.168.175.48:8080/trainmodels  ',
      data: this.state,axiosConfig

  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
}
  

  render() {
    
    return (


        <div className="FormCenter">
       


        <form onSubmit={this.handleSubmit} className="FormFields">
         
          
        
    
          <br />
          <MuiThemeProvider theme={theme}>
    
            <h1>Training Data </h1>
           
    
            
  <OnDrop />
  
          <TextField
            id="fileName"
            label="Name"
            
            value={this.state.fileName}
            onChange={this.handleChange('fileName')}
            margin="normal"
            variant="outlined"
          />
    
    <div className="FormField">
                <label className="FormField__Label" htmlFor="type">Division</label>
                <select id="type" className="FormField__Input"  name="type"  value={this.state.division} onChange={this.handleChange}>
              <option value="ADM">ADM</option>
                <option value="IDM">IDM</option>
                <option value="MiddleWare">Middleware</option>
                <option value="DataBase">DataBase</option>
                <option value="SAP">SAP</option>
                <option value="Others">Others</option>

              </select>         
               </div>
               

               <TextField
            id="description"
            label="Description"
           
            value={this.state.description}
            onChange={this.handleChange('description')}
            margin="normal"
            variant="outlined"
          />
    
    
          </MuiThemeProvider>
    
          <div className="FormField">
                  <button id="submit">Sign Up</button>
                  </div>
          
          
          
        </form>
        </div>
    
        
      );
}

}