import React, {Fragment} from 'react'


class Main extends React.Component{
    constructor(props){
        super(props)
        

    }
    render(){
        return(
            <Fragment>
            <ul>
           {this.props.date.map(it => 
           <li key = {it.id}>
               
               <div className="item">{it.body}</div>
               <div className = "del"><button onClick = {this.props.del.bind(null, it.id)}>{String.fromCharCode(215)}</button></div>
           </li>
           )}
           </ul>
           <style jsx>{`
                ul {
                    overflow: auto;
                    height: 500px;
                    padding: 0px;
                    background-color: white;
                    margin: 0px;
                }

                li {
                    list-style-type: none;
                    font-size: 1.4em;
                    display: flex;
                    width: 90%;
                    justify-content: space-between;
                    border-bottom: 1px solid black;
                    margin-left: 5%;
                    margin-right: 5%;
                    margin-top: 20px;
                }

                .item {
                    flex-basis: 90%;
                    
                }
                .del {
                    flex-basis: 10%;
                }
                button {
                    width: 30px;
                    height: 30px;
                    font-size: 30px;
                    text-align:  center;
                    background-color: white;
                    outline: none;
                    border: none;
                }
                button:focus, button:hover {
                    outline: none;
                    cursor: pointer;
                    color: red;
                }
                button:hover {
                    color: red;
                }

                

            `}</style>
            </Fragment>
        )
    }
}
export default Main