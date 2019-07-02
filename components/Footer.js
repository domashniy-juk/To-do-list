import React, {Fragment} from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''};
    }
    submitHandler = (event) =>{
        event.preventDefault()
        this.props.add(this.state.value);
        this.setState({value: ''});
    }
    render(){
        return(
        <Fragment>
        <form onSubmit = {this.submitHandler}>
            <textarea value = {this.state.value} onChange = {event => this.setState({value: event.target.value})}/>
            <input type= "submit" value = {String.fromCharCode(9997)}></input>
        </form>
        <div className = 'nav'>
            <button onClick = {this.props.navigation.bind(null, -10)}> <span>{String.fromCharCode(171)}</span> </button> 
            <strong>{this.props.page / 10 + 1}</strong> 
            <button onClick = {this.props.navigation.bind(null, 10)}> <span>{String.fromCharCode(187)}</span> </button>
        </div>
        <style jsx>{`
            form {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
            }
            textarea {
                height: 50px;
                width: 70%;
                min-width: 200px;
                
            }
            input[type='submit'] {
                height: 56px;
                width: 75px;
            }
            textarea:focus {
                outline: none;
            }
            .nav {
                display: flex;
                height: 80px;
                justify-content: space-around;
                align-items: center;
            }
            strong {
                color: white;
                font-size: 30px
            }
            button {
                height: 45px;
                width: 80px;
                border-radius: 50%;
                font-size: 30px;
                text-align: center;
                background-color: white;
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                border: none;
            }
            button:focus, button:hover {
                outline: none;
                cursor: pointer;
            }
            button:hover {
                background-color: red;
                color: white;
            }
            span{
                position: relative;
                bottom: 2px;
            }

        `}
        </style>
        </Fragment>
        )
    }
}

export default Footer