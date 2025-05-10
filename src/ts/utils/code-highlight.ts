import hljs from 'highlight.js/lib/core';

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

export function registerTopLanguages(hljsInstance: typeof hljs) {
  hljsInstance.registerLanguage('python', python);
  hljsInstance.registerLanguage('py', python);
  hljsInstance.registerLanguage('javascript', javascript);
  hljsInstance.registerLanguage('js', javascript);

  hljsInstance.registerLanguage('typescript', typescript);
  hljsInstance.registerLanguage('ts', typescript);

  hljsInstance.registerLanguage('html', html);
  hljsInstance.registerLanguage('xml', html);

  hljsInstance.registerLanguage('css', css);

  hljsInstance.registerLanguage('json', json);

  hljsInstance.registerLanguage('yaml', yaml);
  hljsInstance.registerLanguage('yml', yaml);

  hljsInstance.registerLanguage('bash', bash);
  hljsInstance.registerLanguage('sh', bash);

  hljsInstance.registerLanguage('sql', sql);

  hljsInstance.registerLanguage('markdown', markdown);
  hljsInstance.registerLanguage('md', markdown);
}
