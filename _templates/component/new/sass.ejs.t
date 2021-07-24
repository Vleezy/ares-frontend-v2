---
to: components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.module.scss
unless_exists: true
---

.<%= h.changeCase.camel(h.path.basename(name)) %> {
    margin-top: 0;
}