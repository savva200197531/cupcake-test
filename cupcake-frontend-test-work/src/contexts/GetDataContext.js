import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";

const GetDataContext = React.createContext(undefined, undefined);

export const useGetData = () => useContext(GetDataContext);

export function GetDataProvider({ children }) {

  const [ currencies, setCurrencies ] = useState([]);

  const getCurrencies = () => {
    let requests = [
      'first',
      // 'first/poll',
      'second',
      // 'second/poll',
      'third',
      // 'third/poll',
    ].map(request => axios.get(`http://localhost:3000/api/v1/${request}`));

    return axios.all(requests);
  };

  const formCurrencies = () => {

    const newCurrencies = [];

    getCurrencies().then(resItem => {
      if (!resItem) return;
      resItem.forEach(resItem => {
        const splitUrl = resItem.config.url.split('/');
        const row = splitUrl[splitUrl.length - 1];
        newCurrencies.push({
          data: resItem.data.rates,
          row
        });
      })
      console.log(newCurrencies)
      setCurrencies(newCurrencies);
    })


    // requestApi(requests).then(response => {
    //   if (!response) return;
    //   // newCurrencies.rub.push({
    //   //   value: response.data.rates.RUB,
    //   //   type: request,
    //   //   currency: 'RUB'
    //   // });
    //   // newCurrencies.usd.push({
    //   //   value: response.data.rates.USD,
    //   //   type: request,
    //   //   currency: 'USD'
    //   // });
    //   // newCurrencies.eur.push({
    //   //   value: response.data.rates.EUR,
    //   //   type: request,
    //   //   currency: 'EUR'
    //   // });
    //   console.log(response)
    // })
  }

  useEffect(() => {
    formCurrencies();
  }, []);

  const value = {
    currencies: currencies
  }

  return (
    <GetDataContext.Provider value={value}>
      {children}
    </GetDataContext.Provider>
  )
}
