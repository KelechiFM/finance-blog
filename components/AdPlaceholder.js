"use client";

import { useEffect, useState } from "react";

export default function AdPlaceholder({ name, className }) {
    // Ideally, this component would contain the actual Google AdSense script <ins> tag
    // For now, we render a hidden structure that preserves the slot for bots/crawlers
    // but remains invisible to users until an ad loads.

    return (
        <div className={`ad-slot ${className} hidden`} aria-hidden="true">
            {/* This div is hidden from users but exists in the DOM */}
            <div data-ad-slot={name} style={{ display: 'none' }}>
                {name}
            </div>
        </div>
    );
}
