import '../component/book-list.js';

import DataSource from '../data/data-source.js';

const catalog = () => { 
    console.log("sadad");
   const renderResult = results => {
       heroListElement.heroes = results;
   };
 
   const fallbackResult = message => {
       heroListElement.renderError(message);
   };
 
    const result = DataSource();
    console.log(result)


};
 
export default catalog;