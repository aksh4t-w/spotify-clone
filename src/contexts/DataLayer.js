import React, { createContext, useContext, useReducer } from 'react'

const DataLayerContext = createContext()

export const DataLayer = ({initialState, reducer, children}) => 
(
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
    // Remember to type Provider with capital 'P'
)

export const useDataLayer = () => useContext(DataLayerContext)
