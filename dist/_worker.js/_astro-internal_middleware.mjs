globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_DOFPmBgy.mjs';
import './chunks/astro/server_BI0a8lKf.mjs';
import { s as sequence } from './chunks/index_BkXuaUqw.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
