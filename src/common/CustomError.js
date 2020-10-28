import _ from 'lodash';
import i18n from './I18n/language';

export default function CustomError (err){

   this.details = _.get(err, 'response.data.details');

   this.code = _.get(err, 'response.data.code');

   this.message = _.get(err, 'response.data.message') || err.message;

}