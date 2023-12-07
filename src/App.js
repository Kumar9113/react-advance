
import './App.css';
import EnhanceComment from './HOC/Comment';
import Comment from './HOC/Comment';
import EnhanceLike from './HOC/Like';
import Increment from './pureCompunde/Increment';
import Pure from './pureCompunde/Pure';

function App() {
  return (
    <div>
      {/* <Increment></Increment>
       <Pure></Pure> */}
       <EnhanceLike></EnhanceLike>
     <EnhanceComment></EnhanceComment>
         </div>
  );
}

export default App;
