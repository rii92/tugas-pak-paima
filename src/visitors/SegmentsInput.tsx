import * as React from 'react';
import { SelectArrayInput, SelectArrayInputProps } from 'react-admin';

const SegmentsInput = (props: SelectArrayInputProps) => (
    <SelectArrayInput
        {...props}
        source="groups"
        translateChoice
    />
);

export default SegmentsInput;
