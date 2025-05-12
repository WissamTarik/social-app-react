import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";
import { persistStore, persistReducer,PAUSE,PERSIST,PURGE,FLUSH,REGISTER,REHYDRATE } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import { postsReducer } from "./Posts/PostSlice";
import { commentReducer } from "./Comments/commentSlice";
const authPersistConfig={
    key:"root",
    storage,
    whitelist:['token']
     
}
const rootReducer=combineReducers({
    authReducer:persistReducer(authPersistConfig,authReducer),
    postsReducer,
    commentReducer,
})
export const store=configureStore({
    reducer:rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[PAUSE,FLUSH,REHYDRATE,REGISTER,PERSIST,PURGE]
            }
        })
    },

})
export const persistor = persistStore(store)

export type dispatchType=typeof store.dispatch
export type storeType=ReturnType<typeof store.getState>