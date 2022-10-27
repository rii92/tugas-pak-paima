import React, { useMemo, CSSProperties } from 'react';
import { useGetList, useGetRecordId } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
import { subDays, startOfDay } from 'date-fns';

import MonthlyRevenue from './MonthlyRevenue';
import NbNewOrders from './NbNewOrders';

import { Order } from '../types';

interface OrderStats {
    revenue: number;
    nbNewOrders: number;
    pendingOrders: Order[];
}

interface State {
    nbNewOrders?: number;
    pendingOrders?: Order[];
    recentOrders?: Order[];
    revenue?: string;
}

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Dashboard = () => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );
    const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

    const { data: orders } = useGetList<Order>('users', {});
    const users = useGetRecordId('users');
    const { data: todos } = useGetList<Order>('todos', {pagination: {page: 1, perPage: 300,}});

    let CountUser = orders?.length;
    let CountTodos = todos?.length;

    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as CSSProperties}>
                <MonthlyRevenue value={CountUser?.toString()} />
                <VerticalSpacer />
                <NbNewOrders value={CountTodos} />
                <VerticalSpacer />
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as CSSProperties}>
            <div style={styles.singleCol}>
            </div>
            <div style={styles.flex}>
                <MonthlyRevenue value={CountUser?.toString()} />
                <Spacer />
                <NbNewOrders value={CountTodos} />
            </div>
        </div>
    ) : (
        <>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <MonthlyRevenue value={CountUser?.toString()} />
                        <Spacer />
                        <NbNewOrders value={CountTodos} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
