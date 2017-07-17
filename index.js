import React from 'react';
import co from 'co';
import { createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as effects from 'redux-saga/effects';
import { delay } from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(a=>a,{},compose(sagaMiddleware));

window.co = co;
window.run = (generatorFn)=>sagaMiddleware.run(generatorFn);
window.effects = effects;
window.dispatch = (action)=>store.dispatch(action);
window.delay = delay;

console.log('%c Redux Saga Sandbox', 'color: #333; font-weight: bold; font-size: 24px');