
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';

function Main() {
    return (
        <BrowserRouter>
            <Route>
                <Route path="/" element={<App />}>
                    <Route index element={<Page1 />}></Route>
                    <Route path='page2' element={<Page2 />}></Route>
                </Route>
            </Route>
        </BrowserRouter>
    )
}

export default Main