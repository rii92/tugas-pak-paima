import * as React from 'react';
import { Stack, Chip } from '@mui/material';
import { FieldProps, useTranslate, useRecordContext } from 'react-admin';
import { Customer } from '../types';

const SegmentsField = (props: FieldProps) => {
    const record = useRecordContext<Customer>();
    if (!record || !record.groups) {
        return null;
    }
    return (
        <Stack direction="row" gap={1} flexWrap="wrap">
            {record.groups.map(segmentId => (
                <Chip
                    size="small"
                    key={segmentId}
                />
            ))}
        </Stack>
    );
};

export default SegmentsField;
