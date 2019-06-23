import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'


class App extends React.Component{
    constructor(){
        super()
        this.state={
            date:[
            {body: 'something0',id: 0},
            {body: 'something1',id: 1},
            {body: 'something2',id: 2},
            {body: 'something3',id: 3},
            {body: 'something4',id: 4}],
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
        (this.state.date[this.state.page + index]) ? this.setState({page: this.state.page + index}) : null
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
                <Header/>
                <Main date = {this.state.date.slice(this.state.page,this.state.page + 10)} del = {this.del}/>
                <Footer add = {this.add} navigation = {this.navigation} page = {this.state.page}/>
                
            </div>
           
            )
        }
} 

export default App