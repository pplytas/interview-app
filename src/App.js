import { useState } from 'react';
import Message from './Message';
import FeedbackForm from './FeedbackForm';

const App = () => {
  const [data, setData] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const onChange = () => {};
  const onSumbit = () => {};

  return (
    <div>
      <Message />
      <FeedbackForm />
    </div>
  );
};

export default App;
