import './styles/App.css';
import { Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import Groups from './pages/Groups';

import {
  groups
} from './data/GroupsData';


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      {/* <Route path="*" element={<Index />} /> */}
      {
        groups().map((group, index) => {
          return (
            <Route 
              key={index}
              // path={group.path}
              path={group.randstr + group.id + group.randstr}
              element={<Groups data={group}/>} 
            />
          )
        })
      }
      {/* <Route path="/groups" element={<Groups data={groups()}/>} /> */}
    </Routes>
  );
}
