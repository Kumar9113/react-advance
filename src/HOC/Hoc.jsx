import React, { Component } from 'react'

 const Hoc= (Component,data)=>{
    return class extends React.Component{
        constructor(props) {
            super(props);
      
            this.state = {
              count: data,
            
            };
          }
      
          handleCLick = () => {
            this.setState({
              count: this.state.count + 1,
            });
          };
        render()
        {
            return <div>
                <Component
          username={this.state.name}
          CountNumber={this.state.count}
          handleCLick={this.handleCLick}
        />
            </div>
        }
    }
 
}
export default Hoc;
