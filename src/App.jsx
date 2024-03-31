import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';


export default function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="m-5">
        <Outlet />
      </main>
    </>
  );
}
