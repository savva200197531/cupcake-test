import React from "react";
import './Table.scss';
import { useGetData } from "../../contexts/GetDataContext";
import Loading from "../Loading/Loading";
import classnames from 'classnames';

const Table = () => {

  const { currencies, headers } = useGetData();

  return (
    <>
      {
        !currencies
          ? <Loading/>
          :
          <table className={'table'}>
            <thead>
            <tr>
              {headers.length && headers.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
            </thead>
            <tbody>
            {currencies && currencies.map((currency, idx) => (
              <tr key={idx}>
                <td>{currency.name}</td>
                <td className={classnames(currency.first.lowest && 'lowest-currency')}>{currency.first.value}</td>
                <td className={classnames(currency.second.lowest && 'lowest-currency')}>{currency.second.value}</td>
                <td className={classnames(currency.third.lowest && 'lowest-currency')}>{currency.third.value}</td>
              </tr>
            ))}
            </tbody>
          </table>
      }
    </>
  )
}

export default Table;
