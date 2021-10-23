import React from "react";
import List from './List';
import Nhapthongtin from "./Nhapthongtin";
import { DataProvider } from './DataProvider';

export const Todo=() => {
    return (
    <DataProvider>
        <div className="Todo">
            <Nhapthongtin />
            <List />    
        </div>
    </DataProvider>
    );
}