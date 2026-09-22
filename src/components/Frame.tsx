import React, { ReactNode } from 'react';

interface FrameProps {
  children: ReactNode;
  borderWidth?: string;
}

export function WindowFrame({ children }: FrameProps) {
  return (
    <div className="windowFrame">
      {children}

      <img
        src="public/images/temporal/curtain.png"
        className="windowFrameOverlay"
        alt=""
      />
    </div>
  );
}


export default function Frame({ children, borderWidth = '2px' }: FrameProps) {
  return (
    <div style={{
      border: `${borderWidth} solid #333`,
      borderRadius: '8px',
      padding: '16px',
      margin: '12px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div className="frame-body">
        {children}
      </div>
    </div>
  );
}
