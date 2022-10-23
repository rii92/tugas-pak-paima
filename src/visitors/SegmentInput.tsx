import * as React from 'react';
import { SelectInput, SelectInputProps } from 'react-admin';

const SegmentInput = (props: SelectInputProps) => (
    <SelectInput
        {...props}
        source="groups"
        translateChoice
    />
);

export default SegmentInput;
