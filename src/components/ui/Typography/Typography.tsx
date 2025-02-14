import { FC } from 'react';

import { WithChildren, WithClassName } from "../../../types/common.ts";
import { classnames } from "../../../utils/classnames.ts";



type Props = WithChildren &
    WithClassName & {
    variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
};

export const Typography: FC<Props> = ({
    variant,
    children,
    className = '',
    ...props
}: Props) => {
    const Component = variant ?? 'p';

    return (
        <Component
            className={classnames(
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
