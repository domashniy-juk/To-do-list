import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { addItem, deleteItem } from '../store/action'

const stateToProps = state => {
    return {
        date: state.date
    }

}
const actionProps = {
        addItem,
        deleteItem
}

class App extends React.Component{
    constructor(){
        super()
        this.state={
            page: 0
        }
        
    }
    del = (id) => {
        this.setState({date: this.state.date.filter(obj => id !== obj.id)})
    }
    add = (new_it) => {
        let new_obj = {id: this.state.date.length + 1, body: new_it}
        this.setState({date: [...this.state.date, new_obj]})
        
    }
    navigation = (index) => {
        (this.props.date[this.state.page + index]) ? this.setState({page: this.state.page + index}) : null
    }
    render() {
        const style = {
            margin: '5% 20%',
            width: '60%',
            border: '3px solid #2e3641',
            
            backgroundColor: '#2e3641',
        }
        return(
            <div style = {style}>
                {console.log(this.props.date)}
                <Header/>
                <Main date = {this.props.date.slice(this.state.page,this.state.page + 10)} del = {this.props.deleteItem}/>
                <Footer add = {this.props.addItem} navigation = {this.navigation} page = {this.state.page}/>
            </div>
            )
        }
} 


export default connect(stateToProps, actionProps)(App)