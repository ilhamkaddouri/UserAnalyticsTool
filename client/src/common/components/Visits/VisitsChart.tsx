import React from 'react'
import './visitsChat.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface VisitsChartProps {
    data: {
        month: string,
        visits: number
    }[]
}

export const VisitsChart: React.FC<VisitsChartProps> = ({ data }) => {
    return (
        <>
        <ResponsiveContainer width='100%' aspect={3/1}>
            <LineChart data={data}>
                <XAxis dataKey="month" stroke='#5550bd' />
                <Line type="monotone" dataKey="visits" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Tooltip/>
                <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
            </LineChart>
        </ResponsiveContainer>
        </>
    );
}