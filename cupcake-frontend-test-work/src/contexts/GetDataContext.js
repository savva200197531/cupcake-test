import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";

const GetDataContext = React.createContext(undefined, undefined);

export const useGetData = () => useContext(GetDataContext);

export function GetDataProvider({ children }) {
  // data generated from config (in this case from here)
  let requests = [ 'first', 'second', 'third' ];
  let initialHeaders = [ 'Pair name/market', 'First', 'Second', 'Third' ];
  const currencyAttrs = [ 'RUB/CUPCAKE', 'USD/CUPCAKE', 'EUR/CUPCAKE', 'RUB/USD', 'RUB/EUR', 'EUR/USD' ];

  // state
  const [ currencies, setCurrencies ] = useState();
  const [ headers, setHeaders ] = useState(initialHeaders);

  // form request to api
  const getCurrencies = () => {
    const localRequests = requests.map(request => axios.get(`http://localhost:3000/api/v1/${request}`));
    return axios.all(localRequests);
  };

  const formCurrencies = () => {
    const newCurrencies = [];
    setHeaders(initialHeaders);

    getCurrencies().then(res => {
      currencyAttrs.forEach(attr => {
        fillNewCurrencies(newCurrencies, res, attr);
      });

      // iterate data and find lowest values
      newCurrencies.forEach(currency => {
        const currencyValues = [];
        requests.map(attribute => {
          currencyValues.push(currency[attribute].value)
          return attribute;
        }).forEach(attribute => {
          currency[attribute]['lowest'] = currency[attribute].value === lowestCurrency(currencyValues);
        });
      })

      setCurrencies(newCurrencies);

    }).finally(() => {
      // re-call function when data is get to get new data
      setTimeout(() => {
        formCurrencies();
      }, 5000);

    }).catch(error => {
      // catch error and set display it in header
      setCurrencies([]);
      setHeaders(headers => {
        return headers.map(() => 'Error');
      })
      console.error('error', error);
    })
  }

  // fill currencies with data
  const fillNewCurrencies = (newCurrencies, res, attr, row) => {
    const [ numerator, denominator ] = attr.split('/');

    const preparedRow = {};
    res.forEach((resItem, idx) => {

      const numeratorVal = resItem.data.rates[numerator],
        denominatorVal = resItem.data.rates[denominator];

      // check for existence of fields to avoid NaN fields
      if (!numeratorVal || !denominatorVal) return;
      preparedRow['name'] = attr;
      preparedRow[requests[idx]] = { value: pairCurrency(numeratorVal, denominatorVal) };
    });

    if (!Object.keys(preparedRow).length) return;
    // push the resulting objects to initial value;
    newCurrencies.push(preparedRow);
  }

  // find minimum currency value in arr
  const lowestCurrency = arr => arr.reduce((p, v) => (p < v ? p : v));

  // calculate the ratio of currency pairs
  const pairCurrency = (numerator, denominator) => Number((numerator / denominator).toFixed(2));

  useEffect(() => {
    formCurrencies();
  }, []);

  const value = {
    currencies,
    headers
  }

  return (
    <GetDataContext.Provider value={value}>
      {children}
    </GetDataContext.Provider>
  )
}
