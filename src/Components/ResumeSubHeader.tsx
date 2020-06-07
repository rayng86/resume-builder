import React from 'react';

type ResumeSubHeaderProps = {
  label: string;
};

export const ResumeSubHeader = ({ label }: ResumeSubHeaderProps) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ fontWeight: 500, textTransform: 'uppercase', margin: 0 }}>{label}</h2>
    <div className="md-divider-border md-divider-border--top" />
  </div>
);
