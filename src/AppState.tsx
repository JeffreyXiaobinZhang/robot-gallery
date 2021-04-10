import React, { useState } from 'react'

// const aaContext = {name:'Jeffrey Zhang'}

// export const appContext = React.createContext(aaContext)
interface AppStateValue{
    username: string,
    shoppingCart: { items:{id:number,name:string}[] }
}

const aaContext: AppStateValue = {
    username:'Jeffrey Zhang',
    shoppingCart:{ items:[] }
};

export const appContext = React.createContext(aaContext)
export const appSetStateContext = React.createContext<
React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined)

export const AppStateProvider: React.FC = (props) => {
    const [state, setState] = useState(aaContext)
    return (
            <appContext.Provider value = {state}>
                <appSetStateContext.Provider value = {setState}>
                    {props.children}
                </appSetStateContext.Provider>
            </appContext.Provider>
            );
};
