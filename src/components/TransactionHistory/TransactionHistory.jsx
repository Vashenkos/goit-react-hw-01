import s from "./TransactionHistory.module.css";



const TransactionHistory = ({ items }) => {  
      return (  
        <section>  
          <h2 className={s.title}>Transaction History</h2>  
          <table className="min-w-full border-collapse border border-gray-200">  
            <thead>  
              <tr>  
                <th className="border border-gray-300 p-2">Type</th>  
                <th className="border border-gray-300 p-2">Amount</th>  
                <th className="border border-gray-300 p-2">Currency</th>  
              </tr>  
            </thead>  
            <tbody>  
              {items.map((transaction) => (  
                <tr key={transaction.id}>  
                  <td className="border border-gray-300 p-2">{transaction.type}</td>  
                  <td className="border border-gray-300 p-2">{transaction.amount}</td>  
                  <td className="border border-gray-300 p-2">{transaction.currency}</td>  
                </tr>  
              ))}  
            </tbody>  
          </table>  
        </section>  
      );  
    };  

export default TransactionHistory;
