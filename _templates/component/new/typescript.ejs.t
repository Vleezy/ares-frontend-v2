---
to: components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.tsx
unless_exists: true
sh: yarn prettier --write "components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/*"
---
import s from "./<%= h.changeCase.pascal(h.path.basename(name)) %>.module.scss";

import React, { FC } from 'react';

export type Props = {};

export const <%= h.changeCase.pascal(h.path.basename(name)) %>: FC<Props> = ({
}) => {
    return (
        <div className="<%= h.changeCase.paramCase(h.path.basename(name)) %>">
            <%= h.changeCase.pascal(h.path.basename(name)) %> Works!
         </div>
    )
}