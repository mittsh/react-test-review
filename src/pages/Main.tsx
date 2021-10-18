import React, { useReducer } from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import itemsReducer from '../reducers/ItemsReducer';

const MainPage: React.FC = () => {
    const [data, dispatch] = useReducer(itemsReducer, []);

    return (
        <main>
            <Header count={data.length} dispatch={dispatch} />
            <br />
            <Table
                data={data}
                onItemChecked={(id) => dispatch({ type: 'check', payload: { id } })}
                onItemUnchecked={(id) => dispatch({ type: 'uncheck', payload: { id } })}
            />
        </main>
    );
};

export default MainPage;
