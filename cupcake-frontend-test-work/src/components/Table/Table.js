import React, { useEffect } from "react";
import './Table.scss';
import { useGetData } from "../../contexts/GetDataContext";

const Table = () => {

  const { currencies } = useGetData();

  useEffect(() => {
    console.log(currencies);
  }, [ currencies ])

  return (
    <>
      <div className={'table'}>
        <div className={'table-row'}>
          <div className={'table-column'}>Pair name/market</div>
          <div className={'table-column'}>RUB</div>
          <div className={'table-column'}>USD</div>
          <div className={'table-column'}>EUR</div>
        </div>
        {
          currencies.map(currency => (
            <div className={'table-row'}>
              <div className={'table-column'}>{currency.row}</div>
              <div className={'table-column'}>{currency.data.RUB}</div>
              <div className={'table-column'}>{currency.data.USD}</div>
              <div className={'table-column'}>{currency.data.EUR}</div>
            </div>
          ))
        }
        {/*<div className={'table-row'}>*/}
        {/*  <div className={'table-column'}>First</div>*/}
        {/*  {currencies.rub && currencies.map(rub => (*/}
        {/*    <div className={'table-column'}>{rub.value}</div>*/}
        {/*  ))}*/}
        {/*</div>*/}
        {/*<div className={'table-row'}>*/}
        {/*  <div className={'table-column'}>Second</div>*/}
        {/*  {currencies.usd && currencies.map(usd => (*/}
        {/*    <div className={'table-column'}>{usd.value}</div>*/}
        {/*  ))}*/}
        {/*</div>*/}
        {/*<div className={'table-row'}>*/}
        {/*  <div className={'table-column'}>Third</div>*/}
        {/*  {currencies.eur && currencies.map(eur => (*/}
        {/*    <div className={'table-column'}>{eur.value}</div>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </>
  )
}

export default Table;
