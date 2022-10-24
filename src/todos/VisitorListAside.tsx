import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
import MailIcon from '@mui/icons-material/MailOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOfferOutlined';
import {
    FilterList,
    FilterListItem,
    FilterLiveSearch,
    SavedQueriesList,
} from 'react-admin';
import {
    endOfYesterday,
    startOfWeek,
    subWeeks,
    startOfMonth,
    subMonths,
} from 'date-fns';

const Aside = () => (
    <Card
        sx={{
            display: {
                xs: 'none',
                md: 'block',
            },
            order: -1,
            flex: '0 0 15em',
            mr: 2,
            mt: 8,
            alignSelf: 'flex-start',
        }}
    >
        <CardContent sx={{ pt: 1 }}>
            <FilterLiveSearch />

            <FilterList
                label="Has Completed"
                icon={<MonetizationOnIcon />}
            >
                <FilterListItem
                    label="ra.boolean.true"
                    value={{
                        completed: true
                    }}
                />
                <FilterListItem
                    label="ra.boolean.false"
                    value={{
                        completed: false
                    }}
                />
            </FilterList>
        </CardContent>
    </Card>
);

export default Aside;
