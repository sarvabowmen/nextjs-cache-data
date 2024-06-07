// components/page.js
'use server'
import { getTime } from '@/lib/getTime';
import React from 'react';

export const WithData = async(Component) => {
    return async (props) => {
        const data = await getTime();
        const newProps = { data: data, ...props };
        // props.data = data;
        console.log(JSON.stringify(newProps));
        // Render the component if the user is an admin
        return  <Component {...newProps} />; // Or a loading indicator or a "not authorized" message
    };
};


