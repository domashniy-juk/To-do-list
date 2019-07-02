import React from 'react'
import App from '../components/App'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import {Reducer} from '../store/Reducer'




const store = createStore(Reducer)

store.subscribe(() => console.log(store))



const index = () => {
    return(
        <Provider store = {store} >
        <App/>
        </Provider>
    )
}




export default index