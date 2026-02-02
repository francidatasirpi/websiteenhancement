import React from 'react';
import './AnimatedBackground.scss';

const AnimatedBackground = () => {
    return (
        <div className="animated-bg">
            <div className="grid-lines">
                {[...Array(8)].map((_, i) => (
                    <div key={`v-${i}`} className="grid-line vertical" style={{ left: `${(i + 1) * 12.5}%` }} />
                ))}
                {[...Array(6)].map((_, i) => (
                    <div key={`h-${i}`} className="grid-line horizontal" style={{ top: `${(i + 1) * 16.67}%` }} />
                ))}
            </div>
            <div className="floating-dots">
                <div className="dot dot-1" />
                <div className="dot dot-2" />
                <div className="dot dot-3" />
                <div className="dot dot-4" />
                <div className="dot dot-5" />
                <div className="dot dot-6" />
                <div className="dot dot-7" />
                <div className="dot dot-8" />
            </div>
            <div className="gradient-overlay" />
        </div>
    );
};

export default AnimatedBackground;
