import type { FC } from 'react';
import type { IFormProps } from '../../types/types';

export const Form: FC<IFormProps> = ({
    width,
    height,
    onSubmit,
    children
}) => {
    return (
        <form style={{ width, height }} onSubmit={onSubmit}>
            {children}
        </form>
    );

};

