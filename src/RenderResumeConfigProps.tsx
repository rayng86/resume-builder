import React from 'react';
import { ResumeProps } from './types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type RenderResumeConfigProps = {
  config: ResumeProps;
};

export const RenderResumeConfig = ({ config }: RenderResumeConfigProps) => {
  const codeString = `${JSON.stringify(config, null, ' ')}`;
  return (
    <div style={{ height: '300px', overflow: 'hidden', overflowY: 'auto' }}>
      <SyntaxHighlighter language="json" style={tomorrowNightEighties} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
