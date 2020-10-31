import axios from 'axios';
import _ from 'lodash';
// import { parse,compile } from 'path-to-regexp';
import CustomError from '../common/CustomError';
// import {  getStorage } from '../common/utils';

/* 30 sec timeout */
axios.defaults.timeout = 30000;

/**
 * request
 */
const fetch = (options) => {

   let { url } = options;
   const { data = {}, headers = {}, method } = options;

   // const token = _.get(getStorage('user'), 'token');

   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVwZGF0ZWRBdCI6IjIwMjAtMTAtMjJUMTE6MDQ6MzQuOTIyWiIsIl9pZCI6IjVmOTdkYjNhNzU2ZTNmNzZhN2E3M2E0ZSIsInVzZXJuYW1lIjoiWWJzd2VNYWkiLCJwYXNzd29yZCI6IiQyYiQxMCRRT283UEIyMW5LRm5YblNsd1l6TGRleWhZMTd0UE93V3pFTzZGck1PMDdOY1RaRzVHYS9pLiIsIm5pY2tuYW1lIjoiIiwiY3JlYXRlZEF0IjoiMjAyMC0xMC0yN1QwODozMjo1OC45MzBaIiwiX192IjowfSwiaWF0IjoxNjAzODgyNDU2LCJleHAiOjE2MDQxNDE2NTZ9.kzWi_kvW-9qs11LEHAnpddH02KzVX6RdDhS1TlLR9IA';

   if (token) {
      headers.Authorization = `${token}`;
   }

   headers['Content-Type'] = 'application/json';

   /* cache */
   headers['Cache-Control'] = 'no-cache';

   /* Clone request body data */
   const cloneData = _.cloneDeep(data);

   // try {
   //    let domin = '';

   //    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
   //       const { 0: val } = url.match(/[a-zA-z]+:\/\/[^/]*/);

   //       domin = val;
   //       url = url.slice(domin.length);
   //    }

   //    const match = parse(url);

   //    url = compile(url)(data);

   //    _.forEach(match, item => {

   //       if (item instanceof Object && item.name in cloneData) {
   //          delete cloneData[item.name];
   //       }
   //    });
   //    url = domin + url;

   // } catch (e) {

   //    console.log(e);
   //    _.noop();
   // }

   switch (_.toLower(method)) {
   case 'get':
      return axios.get(url, { params: cloneData, headers });
   case 'delete':
      return axios.delete(url, { data: cloneData, headers });
   case 'post':
      return axios.post(url, cloneData, { headers });
   case 'put':
      return axios.put(url, cloneData, { headers });
   case 'patch':
      return axios.patch(url, cloneData, { headers });
   default:
      return axios(options);
   }
};

/**
 * Default request function
 */
export default async function request (options) {

   try {
      const res = await fetch(options);
      let data = _.get(res, 'data', {});

      /* convert list to object */
      if (_.isArray(data)) {
         data = { list: data };
      }

      return data;
   } catch (error) {

      throw new CustomError(error);

   }
}
