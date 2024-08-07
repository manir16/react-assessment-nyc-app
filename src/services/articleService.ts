import httpClientInstance from './core/http-client';
import {ApiConst} from './../constants/apiconstant'
export const fetchMostPopularArticleData = async (period: string, ) => {
    try {

        const mapping: { [key: string]:string } = { '{period}': period }
        const apiUrl = ApiConst.mostPopularArticle.api.replace(/{period}/gi,(val)=>{
            return mapping[val]
        })
      
      const response = await httpClientInstance.get(apiUrl);
      return response.data;
    } catch (error) {
      // Handle error
      console.error('Error fetching user data', error);
      throw error;
    }
  };