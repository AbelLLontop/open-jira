import { createContext } from 'react';
import { Entry } from '../../interfaces/entry';

//lo que el contexto expone
interface ContextProps{
    entries:Entry[];
    addNewEntry: (description: string) => void
    updateEntry:(entry:Entry,showSnackbar?:boolean)=>void
}


export const EntriesContext = createContext({} as ContextProps);