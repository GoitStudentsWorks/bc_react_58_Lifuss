import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import React from 'react';

const HomeTab = () => {
  return (
    <div>
      <TransactionsList />
      <ButtonAddTransactions />
      <ModalAddTransaction />
      <ModalEditTransaction />
      <AddTransactionForm />
      <EditTransactionForm />
    </div>
  );
};

export default HomeTab;
