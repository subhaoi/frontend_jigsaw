import React from 'react';
import axios from 'axios';
import { number } from 'prop-types';


export default class Table extends React.Component {
    
    constructor(props){
      super(props);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.phoneNumberClicked = this.phoneNumberClicked.bind(this);
      this.openConversation = this.openConversation.bind(this);
      this.state = {
        conversation_id: number
      };

    }
    
    getKeys = function(){
      return Object.keys(this.props.data[0]);
    }
    
    getRowsData = function(){
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index)=>{
        return (
          <tr className={row.read} onClick={()=>this.handleClick(row.phone_number)}><RenderRow key={index} data={row} keys={keys}/></tr>)
      })
    }
    
    handleClick= function(row) {
      this.phoneNumberClicked(row);
    }

    phoneNumberClicked = function(phone_number){ 
      axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/all_messages_for_phone_number_and_username', {
          username: 'test_user@test_user.com',
          "phone_number": phone_number
        })
        .then(response => {
          var receivedmessages = response.data.messages
          this.props.sendDataFromTableToSideBar(receivedmessages) 
          this.openConversation(Number(Object.keys(response.data.messages)))
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    openConversation = function(conversation_id){
      axios.post('http://ec2-18-209-60-130.compute-1.amazonaws.com/conversation_opened_by_user', {
        "conversation_id": conversation_id
        })
        .then(response => {
          console.log(response.data.message)
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    render() {
        return (
            <table>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          
        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    if(key =="phone_number"){
      return <td key={props.data[key]}><a>{props.data[key]}</a></td>
    }
  })
}