import hljs from 'highlight.js/lib/core';
import { createHighlightJsAdapter } from '@mantine/code-highlight';

import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import yaml from 'highlight.js/lib/languages/yaml';
import bash from 'highlight.js/lib/languages/bash';
import sql from 'highlight.js/lib/languages/sql';
import markdown from 'highlight.js/lib/languages/markdown';


hljs.registerLanguage('python', python);
hljs.registerLanguage('py', python);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);

hljs.registerLanguage('html', html);
hljs.registerLanguage('xml', html);

hljs.registerLanguage('css', css);

hljs.registerLanguage('json', json);

hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('yml', yaml);

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('sh', bash);

hljs.registerLanguage('sql', sql);

hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('md', markdown);
// prevents runtime error if the language specified is not included here
hljs.registerLanguage('plaintext', markdown);


export const highlightJsAdapter = createHighlightJsAdapter(hljs);