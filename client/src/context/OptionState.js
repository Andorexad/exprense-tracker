/*import React, { creatContext, createContext, useReducer } from 'react';
import OptionReducer from './OptionReducer';
//import axios from 'axios';


// initial state
const initialOpState = {
    options: [],
    //error: null,
    //loading: true
}



// create context
export const OptionContext = createContext(initialOpState)

// provider component
export const OptionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(OptionReducer, initialOpState);

    //actions
    async function getOptions(){
        try{
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'get_transactions',
                payload: res.data.data
            });
        }catch(err){
            dispatch({
                type: 'transaction_error',
                payload: err.response.data.error
            });

        }
    }


    async function deleteOption(id){
        try{
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type:"delete-transaction",payload: id,
            });
        }catch(err){
            dispatch({
                type: 'transaction_error',
                payload: err.response.data.error
            });

        }
        
    }

    async function addOption(transaction){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const res=await axios.post('/api/v1/transactions',transaction,config);
            dispatch({
                type:"add-transaction",payload: res.data.data
            });
        }catch(err){
            dispatch({
                type: 'transaction_error',
                payload: err.response.data.error
            });

        }
        
    }

    
        
    

    return (<OptionContext.Provider value = {{
        options: state.options,
        error: state.error,
        loading: state.loading,
        getOptions,
        deleteOption,
        addOption
    }}>
        {children}
    </OptionContext.Provider>);
}*/