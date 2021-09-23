import React from 'react'
import './visitsChat.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface VisitsChartProps {
    data: {
        _id: string,
        numberOfRequests: number
    }[]
}

export const VisitsChart: React.FC<VisitsChartProps> = ({ data }) => {
    return (
        <>
        <ResponsiveContainer width='95%' aspect={3/1}>
            <LineChart data={data}>
                <XAxis dataKey="_id" stroke='#5550bd' />
                <Line type="monotone" dataKey="numberOfRequests" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Tooltip/>
                <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
            </LineChart>
        </ResponsiveContainer>
        </>
    );
}