import React, { useState } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import Input from '../../components/Input';

import 'react-credit-cards/es/styles-compiled.css'
import Cards from 'react-credit-cards';

import { Payment } from './styles';

function Home() {
  const [ card, setCard ] = useState({
    holder_name: '',
    number: '',
    expiration_date: '',
    cvv: '',
    id: '',
  });

  function handleChangeCard(e) {
    const name = e.target.name.replace(/card_/, '');
    const value = e.target.value;

    setCard({ ...card, [name]: value, id: '' });
  }


  return (
    <>
      <Form onSubmit={() => {}}>
        <Payment id="PaymentForm">
          <div className="form-area">
            <Scope path="card">
              <Input name="card_holder_name" label="Nome no cartão" onChange={handleChangeCard} />
              <Input name="card_number" label="Número do cartão" onChange={handleChangeCard} />
              <div className="group">
                <div><Input name="card_expiration_date" label="Data de expiração" onChange={handleChangeCard} /> </div>
                <div><Input name="card_cvv" label="Código de segurança" onChange={handleChangeCard} /> </div>
              </div>
            </Scope>
          </div>
          <div className="credit-card">
            <Cards
              number={card.number}
              name={card.holder_name}
              expiry={card.expiration_date}
              cvc={card.cvv}
              focused={card.cvv}
            />
          </div>
        </Payment>
      </Form>
    </>
  );
}

export default Home;
