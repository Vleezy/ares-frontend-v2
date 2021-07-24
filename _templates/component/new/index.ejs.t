---
to: src/components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/index.ts
unless_exists: true
---
export {<%= h.changeCase.pascal(h.path.basename(name)) %>} from './<%= h.changeCase.pascal(h.path.basename(name)) %>';