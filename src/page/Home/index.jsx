/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useProvider } from '../../context/context';
import PROFILE_IMG from '../../assets/img/profile-pic.png';
import TRANSFER_IMG from '../../assets/img/icon/transfer.png';
import './style.css';

export default function Home() {
  const test = {
    email: 'Johny@email.com',
    password: '123456',
  };
  const [state, setState] = useProvider();
  const [isLoading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch(
      'http://localhost:3001/api/auth',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(test),
      },
    )
      .then((response) => response.json())
      .then((data) => { setState(data); setLoading(false); });
  }, []);
  return (
    isLoading ? <p>Loading..</p> : (
      <div className="App shadow-2xl">
        <header className="Header bg max-w-7x px-2.5 text-sm flex justify-center flex-col text-white">
          <div className="flex justify-start py-2.5 items-center profile">
            <img className="w-8 h-8 mr-2 rounded-full " src={PROFILE_IMG} alt="Profile" />
            <div>
              <p>Hello,</p>
              <p>{state.name}</p>
            </div>
          </div>
          <div className="p-2.5 balance font-semibold min-h-max">
            <p>Balance</p>
            <p>
              R$
              {' '}
              {state.Account.balance}
            </p>
          </div>
        </header>
        <main>
          <div className="main-container p-4 rounded-t-2xl flex items-center flex-col">
            <div className="w-20 h-20 rounded-md border-2 p-2 shadow-xl flex items-center flex-col justify-center ">
              <img className="w-8 h-8 " src={TRANSFER_IMG} alt="transfer" />
              Transfer
            </div>

            <h1 className="role text-2xl">{ state.role }</h1>
          </div>
        </main>
      </div>
    )
  );
}
