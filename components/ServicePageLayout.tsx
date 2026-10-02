'use client'
import { useState, type ReactElement, type CSSProperties } from 'react'
import { m } from 'framer-motion'
import Link from 'next/link'
import BreakpointImage from './BreakpointImage'
import Nav from './Nav'
import Footer from './Footer'
import AccordionItem from './AccordionItem'
import type { ServiceData } from '@/lib/services-data'
import { servicesData } from '@/lib/services-data'

/* ─── Feature card icon renderer ────────────────────────────────── */
function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const s = size
  const icons: Record<string, ReactElement> = {
    specialty:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    clock:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    integration: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6"/><rect x="14" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M10 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    modifier:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/></svg>,
    paper:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    track:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    priority:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6.5H22l-5.6 4.1 2.1 6.9L12 15.5 5.5 19.5l2.1-6.9L2 8.5h7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    phone:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.77 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    resubmit:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M1 4v6h6M23 20v-6h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 013.51 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    escalate:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    report:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M9 17V7M12 17v-5M15 17v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    protocol:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    alert:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    root:        <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.6"/><path d="M12 7v5M9 18c0-3 1.5-6 3-6s3 3 3 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M5 21c0-2 .5-5 4-5M19 21c0-2-.5-5-4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    letter:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    trend:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    prevent:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    lightning:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    eob:         <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 12h8M8 8h5M8 16h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    secondary:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="8" cy="12" r="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.6"/></svg>,
    reconcile:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3l6 18M15 21H5a2 2 0 01-2-2v-4m12 6h4a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    balance:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 7l10-5 10 5M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    accuracy:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    network:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.6"/><path d="M12 7v6M12 13l-5 4M12 13l5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    caqh:        <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.6"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.4"/></svg>,
    group:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    recred:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    provisional: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    dashboard:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/></svg>,
    payer:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M1 10h22" stroke="currentColor" strokeWidth="1.6"/></svg>,
    provider:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/></svg>,
    ar:          <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    custom:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    verify:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    submit:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    attach:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    retro:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M1 4v6h6M23 20v-6h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 013.51 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    appeal:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M16 18l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    benefits:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    coverage:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    cob:         <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="15" cy="12" r="5" stroke="currentColor" strokeWidth="1.6"/></svg>,
    batch:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    statement:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    plan:        <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M9 16l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    charity:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    dispute:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    hipaa:       <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    reminder:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    noshow:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M16 2v4M8 2v4M3 10h18M9.5 16l5-5M14.5 16l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    intake:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    referral:    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    message:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    google:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    seo:         <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6"/><path d="M21 21l-4.35-4.35M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    gbp:         <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6"/></svg>,
    review:      <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    landing:     <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 21h8M12 17v4M9 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    analytics:   <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  }
  return icons[name] ?? icons['track']
}

/* ─── Per-service large hero icons (64×64) ───────────────────────── */
const heroIcons: Record<string, ReactElement> = {
  'medical-billing': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'ar-follow-up': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'denial-management': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  'payment-posting': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M1 10h22" stroke="currentColor" strokeWidth="1.2"/></svg>,
  'credentialing': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'reporting-analytics': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M9 17V7M12 17v-5M15 17v-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  'prior-authorization': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'eligibility-verification': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.2"/><path d="M21 21l-4.35-4.35M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'patient-calling': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.77 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  'patient-scheduling': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  'patient-acquisition': <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
}

/* ─── Hero right-side graphic ────────────────────────────────────── */
function ServiceHeroGraphic({ service, heroImage, heroImageDesktop, heroImageTablet, heroImageMobile, heroObjectPosition = 'center center', heroFilter = 'brightness(0.9) saturate(1.1)' }: { service: ServiceData; heroImage?: string; heroImageDesktop?: string; heroImageTablet?: string; heroImageMobile?: string; heroObjectPosition?: string; heroFilter?: string }) {
  const icon = heroIcons[service.slug] ?? heroIcons['medical-billing']
  const stat1 = service.stats[0]
  const stat2 = service.stats[1]

  const effectiveDesktop = heroImageDesktop ?? heroImage
  const effectiveTablet  = heroImageTablet ?? heroImageMobile ?? heroImage
  const effectiveMobile  = heroImageMobile ?? heroImage

  /* ── Image variant ────────────────────────────────────────────── */
  if (effectiveDesktop || effectiveMobile) {
    return (
      <>
      {/* Mobile hero image — shown on small screens (< md) */}
      <div className="md:hidden relative w-full h-[280px] overflow-hidden my-4 mx-0">
        <BreakpointImage
          media="(max-width: 767px)"
          src={effectiveMobile!}
          alt={`${service.name} services — SwiftBilling RCM medical billing`}
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: heroObjectPosition, filter: heroFilter }}
        />
        <div className="absolute pointer-events-none" style={{ top: 0, left: 0, right: 0, height: '20%', zIndex: 2, background: 'linear-gradient(to bottom, #0d2137 0%, transparent 100%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: 0, left: 0, right: 0, height: '30%', zIndex: 2, background: 'linear-gradient(to top, #0d2137 0%, transparent 100%)' }} />
        <div className="absolute pointer-events-none" style={{ top: 0, left: 0, bottom: 0, width: '15%', zIndex: 2, background: 'linear-gradient(to right, #0d2137 0%, transparent 100%)' }} />
        {/* Floating stat badge */}
        <div className="absolute px-3 py-2 rounded-xl" style={{ top: '16px', right: '16px', zIndex: 20, background: 'rgba(5,18,38,0.85)', border: '1px solid rgba(46,196,182,0.3)', backdropFilter: 'blur(16px)' }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: '#2EC4B6' }}>{stat1.value}</div>
          <div className="text-[10px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat1.label}</div>
        </div>
      </div>

      {/* Tablet hero image — shown on md to lg screens */}
      <div className="hidden md:block lg:hidden relative w-full h-[320px] overflow-hidden my-4 mx-0">
        <BreakpointImage
          media="(min-width: 768px) and (max-width: 1023px)"
          src={effectiveTablet!}
          alt={`${service.name} services — SwiftBilling RCM medical billing`}
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: heroObjectPosition, filter: heroFilter }}
        />
        <div className="absolute pointer-events-none" style={{ top: 0, left: 0, right: 0, height: '20%', zIndex: 2, background: 'linear-gradient(to bottom, #0d2137 0%, transparent 100%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: 0, left: 0, right: 0, height: '30%', zIndex: 2, background: 'linear-gradient(to top, #0d2137 0%, transparent 100%)' }} />
        <div className="absolute pointer-events-none" style={{ top: 0, left: 0, bottom: 0, width: '15%', zIndex: 2, background: 'linear-gradient(to right, #0d2137 0%, transparent 100%)' }} />
        {/* Floating stat badge */}
        <div className="absolute px-3 py-2 rounded-xl" style={{ top: '16px', right: '16px', zIndex: 20, background: 'rgba(5,18,38,0.85)', border: '1px solid rgba(46,196,182,0.3)', backdropFilter: 'blur(16px)' }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: '#2EC4B6' }}>{stat1.value}</div>
          <div className="text-[10px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat1.label}</div>
        </div>
      </div>

      {/* Desktop hero image — absolutely covers the right half of the section */}
      <div className="hidden lg:block" />
      </>
    )
  }

  /* ── Icon/graphic variant (default) ──────────────────────────── */
  return (
    <div className="hidden lg:flex self-stretch py-8 xl:py-10 items-center justify-center">
      <m.div
        initial={{ opacity: 0, x: 40, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[380px]"
      >
        {/* Ambient teal glow */}
        <div
          className="absolute -inset-12 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 55% 50%, rgba(46,196,182,0.22) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Main icon card */}
        <div
          className="relative flex items-center justify-center h-[300px]"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(46,196,182,0.18)',
            borderRadius: '24px',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(46,196,182,1) 1px, transparent 1px), linear-gradient(90deg, rgba(46,196,182,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              borderRadius: '24px',
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-5">
            <div
              className="w-[112px] h-[112px] rounded-3xl flex items-center justify-center"
              style={{ background: 'rgba(46,196,182,0.1)', border: '1px solid rgba(46,196,182,0.25)', color: '#2EC4B6' }}
            >
              {icon}
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {service.badge}
            </span>
          </div>
        </div>

        {/* Floating stat — top right */}
        <m.div
          initial={{ opacity: 0, scale: 0.85, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute -top-5 -right-5 px-4 py-3 rounded-2xl"
          style={{ background: 'rgba(5,18,38,0.9)', border: '1px solid rgba(46,196,182,0.3)', backdropFilter: 'blur(16px)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
        >
          <div className="text-[22px] font-extrabold leading-none" style={{ color: '#2EC4B6' }}>{stat1.value}</div>
          <div className="text-[11px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat1.label}</div>
        </m.div>

        {/* Floating stat — bottom left */}
        <m.div
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="absolute -bottom-5 -left-5 px-4 py-3 rounded-2xl"
          style={{ background: 'rgba(5,18,38,0.9)', border: '1px solid rgba(46,196,182,0.3)', backdropFilter: 'blur(16px)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
        >
          <div className="text-[22px] font-extrabold leading-none" style={{ color: '#2EC4B6' }}>{stat2.value}</div>
          <div className="text-[11px] font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat2.label}</div>
        </m.div>
      </m.div>
    </div>
  )
}

/* ─── Service FAQ — visible copy of the FAQPage JSON-LD (same service.faqs) ─── */
function ServiceFAQ({ service }: { service: ServiceData }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="service-faq" className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Ambient glow top-right */}
      <div
        className="pointer-events-none absolute -top-16 right-0 w-[500px] h-[360px] opacity-40"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(46,196,182,0.09) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
                Common Questions
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
                Questions About{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {service.name}
                </span>
              </h2>
            </div>
            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-[360px] lg:text-right lg:pb-1">
              Straight answers to what practices ask us most about {service.name}.
            </p>
          </div>
          <div className="mt-7 h-px" style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.15), transparent)' }} />
        </m.div>

        <div className="flex flex-col gap-3 max-w-[880px]">
          {service.faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              idPrefix="service-faq-answer"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Main layout ────────────────────────────────────────────────── */
export default function ServicePageLayout({ service, heroImage, heroImageDesktop, heroImageTablet, heroImageMobile, heroObjectPosition, heroObjectPositionDesktop, heroImageStyleDesktop, heroTopFade, heroBottomFade, heroFilter, heroRevealDelay = 0 }: { service: ServiceData; heroImage?: string; heroImageDesktop?: string; heroImageTablet?: string; heroImageMobile?: string; heroObjectPosition?: string; heroObjectPositionDesktop?: string; heroImageStyleDesktop?: CSSProperties; heroTopFade?: string; heroBottomFade?: string; heroFilter?: string; heroRevealDelay?: number }) {
  const related = servicesData.filter(s => service.relatedSlugs.includes(s.slug))

  const baseUrl = 'https://www.swiftbillingrcm.com'
  const pageUrl = `${baseUrl}/services/${service.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ── BreadcrumbList ──────────────────────────────────────────
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',     item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
          { '@type': 'ListItem', position: 3, name: service.name, item: pageUrl },
        ],
      },
      // ── Service ─────────────────────────────────────────────────
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.name,
        description: service.description,
        url: pageUrl,
        serviceType: service.name,
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${baseUrl}/#business`,
          name: 'SwiftBilling RCM',
        },
        areaServed: { '@type': 'Country', name: 'United States' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: service.name,
          itemListElement: service.features.map(f => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: f.title, description: f.description },
          })),
        },
      },
      // ── FAQPage ─────────────────────────────────────────────────
      ...(service.faqs.length > 0 ? [{
        '@type': 'FAQPage',
        mainEntity: service.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }] : []),
    ],
  }

  /* ── Text reveal variants (staggered slide-up) ─────────────────── */
  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: heroRevealDelay + 0.3,
        staggerChildren: 0.3,
      },
    },
  }
  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 320,
        damping: 18,
        mass: 0.7,
      },
    },
  }

  return (
    <div className="min-h-screen" style={{ background: '#0d2137' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <section id="main-content" className="relative overflow-hidden" style={{ background: '#0d2137' }}>
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(46,196,182,1) 1px, transparent 1px), linear-gradient(90deg, rgba(46,196,182,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div
            className="absolute -top-40 -right-40 w-[900px] h-[900px]"
            style={{ background: 'radial-gradient(circle, rgba(46,196,182,0.12) 0%, transparent 60%)' }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, transparent 0%, #2EC4B6 30%, rgba(46,196,182,0.25) 70%, transparent 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 60% 70% at 0% 50%, rgba(0,210,150,0.04) 0%, transparent 100%)' }}
          />
        </div>

        {/* Desktop hero image — full-bleed, text overlaps on left like home page */}
        {(heroImageDesktop ?? heroImage) && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.15 }}
            className="hidden lg:block absolute inset-0 z-[1] pointer-events-none"
          >
            {/*
              Wrapper carries the custom offset (left/top/right/bottom).
              Next.js Image fill sets left:0 top:0 on the <img> relative to
              THIS wrapper — so the offset applies correctly without Next.js
              overriding it.
              Gradients stay in the outer absolute-inset-0 div so they always
              cover the full section regardless of image offset.
            */}
            <div style={{
              position: 'absolute',
              left:   (heroImageStyleDesktop?.left   as string) ?? '0',
              top:    (heroImageStyleDesktop?.top    as string) ?? '0',
              right:  (heroImageStyleDesktop?.right  as string) ?? '0',
              bottom: (heroImageStyleDesktop?.bottom as string) ?? '0',
            }}>
              <BreakpointImage
                media="(min-width: 1024px)"
                src={(heroImageDesktop ?? heroImage)!}
                alt={`${service.name} services — SwiftBilling RCM medical billing`}
                fill
                loading="eager"
                fetchPriority="high"
                className="object-cover"
                sizes="100vw"
                style={{
                  objectPosition: (heroImageStyleDesktop?.objectPosition as string) ?? heroObjectPositionDesktop ?? heroObjectPosition ?? 'left center',
                  filter: heroFilter ?? 'brightness(1.1)',
                }}
              />
            </div>
            {/* Left → right gradient: dark on left so text is readable, fades to reveal image */}
            <m.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: heroRevealDelay }}
              style={{ background: 'linear-gradient(to right, #0d2137 0%, #0d2137 26%, rgba(13,33,55,0.90) 40%, rgba(13,33,55,0.45) 56%, rgba(13,33,55,0.10) 72%, transparent 88%)', zIndex: 2 }}
            />
            {/* Top vignette */}
            <div className="absolute inset-x-0 top-0" style={{ height: heroTopFade ?? '12%', background: 'linear-gradient(to bottom, #0d2137 0%, transparent 100%)', zIndex: 2 }} />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0" style={{ height: heroBottomFade ?? '18%', background: 'linear-gradient(to top, #0d2137 0%, transparent 100%)', zIndex: 2 }} />

          </m.div>
        )}

        <div className="relative z-10 max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-stretch gap-6 lg:gap-10 xl:gap-14 pt-[96px] pb-10">

            {/* Left — text */}
            <m.div
              className="flex flex-col justify-center py-10 lg:py-14"
              variants={textContainer}
              initial="hidden"
              animate="visible"
            >

              {/* Breadcrumb */}
              <m.div
                variants={textItem}
                className="self-start"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50px',
                  padding: '7px 18px',
                  marginBottom: '28px',
                  fontSize: '14px',
                }}
              >
                <Link
                  href="/"
                  style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#2EC4B6')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  Home
                </Link>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: '#2EC4B6', flexShrink: 0 }}>
                  <path d="M3.5 2L6.5 5 3.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <Link
                  href="/services"
                  style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#2EC4B6')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  Services
                </Link>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: '#2EC4B6', flexShrink: 0 }}>
                  <path d="M3.5 2L6.5 5 3.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <span style={{ color: '#2EC4B6', fontWeight: 600 }}>
                  {service.name}
                </span>
              </m.div>

              {/* Badge */}
              <m.div
                variants={textItem}
                className="inline-flex self-start items-center gap-2 rounded-full px-3 py-[5px] mb-5"
                style={{ background: 'rgba(46,196,182,0.10)', border: '1px solid rgba(46,196,182,0.26)' }}
              >
                <span className={`w-[6px] h-[6px] rounded-full shrink-0 bg-[#2EC4B6] ${service.isNew ? 'animate-pulse' : ''}`} />
                <span className="text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-[#2EC4B6]">
                  {service.badge}
                </span>
              </m.div>

              {/* H1 */}
              <m.h1
                variants={textItem}
                className="font-extrabold leading-[1.04] tracking-[-0.028em] text-white mb-5"
                style={{ fontSize: 'clamp(36px, 5.5vw, 62px)' }}
              >
                {service.name}
              </m.h1>

              {/* Tagline */}
              <m.p
                variants={textItem}
                className="font-bold mb-6"
                style={{
                  fontSize: 'clamp(17px, 2vw, 21px)',
                  background: 'linear-gradient(92deg, #2EC4B6 0%, #80ece5 55%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {service.tagline}
              </m.p>

              {/* Description */}
              <m.p
                variants={textItem}
                className="text-[15px] md:text-[14.5px] leading-[1.75] max-w-[320px] mb-10"
                style={{ color: 'rgba(255,255,255,0.52)' }}
              >
                {service.description}
              </m.p>

              {/* Feature checklist */}
              <m.div
                variants={textItem}
                className="flex flex-col gap-3 mb-10"
              >
                {service.stats.slice(0, 3).map(stat => (
                  <div key={stat.label} className="flex items-center gap-3">
                    {/* Teal checkmark */}
                    <div className="shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(46,196,182,0.15)', border: '1px solid rgba(46,196,182,0.35)' }}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#2EC4B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                      <span className="font-extrabold text-white">{stat.value}</span>
                      {' '}{stat.label}
                    </span>
                  </div>
                ))}
              </m.div>

            </m.div>

            {/* Right — hero graphic */}
            <ServiceHeroGraphic service={service} heroImage={heroImage} heroImageDesktop={heroImageDesktop} heroImageTablet={heroImageTablet} heroImageMobile={heroImageMobile} heroObjectPosition={heroObjectPosition} heroFilter={heroFilter} />
          </div>
        </div>
      </section>

      {/* ══ 2. WHAT WE DO ════════════════════════════════════════════ */}
      <section className="py-[60px]" style={{ background: '#0a1e33' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] mb-2 text-[#2EC4B6]">What We Do</p>
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-white tracking-tight">
              Everything Included in {service.name}
            </h2>
            <p className="text-[15px] mt-2 max-w-[520px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Complete coverage of every step — nothing falls through the cracks.
            </p>
          </m.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((f, i) => (
              <m.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-6 flex flex-col gap-4 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(46,196,182,0.3)] hover:shadow-[0_8px_32px_rgba(46,196,182,0.12)] transition-all duration-300"
                style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[rgba(46,196,182,0.2)]"
                  style={{ background: 'rgba(46,196,182,0.1)', color: '#2EC4B6' }}
                >
                  <Icon name={f.icon} size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-white mb-2">{f.title}</h3>
                  <p className="text-[15px] md:text-[13.5px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {f.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. HOW IT WORKS ══════════════════════════════════════════ */}
      <section className="py-[60px]" style={{ background: '#0d2137' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] mb-2 text-[#2EC4B6]">Process</p>
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-white tracking-tight">How It Works</h2>
          </m.div>

          <div className={`grid gap-8 ${service.process.length <= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
            {service.process.map((step, i) => (
              <m.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < service.process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 h-[1px]"
                    style={{
                      left: 'calc(50% + 28px)',
                      right: '-50%',
                      background: 'linear-gradient(90deg, rgba(46,196,182,0.45), transparent)',
                    }}
                  />
                )}
                {/* Step circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 text-[13px] font-extrabold"
                  style={{
                    background: 'rgba(46,196,182,0.12)',
                    border: '1px solid rgba(46,196,182,0.3)',
                    color: '#2EC4B6',
                  }}
                >
                  {step.step}
                </div>
                <h3 className="text-[15px] font-extrabold text-white mb-2">{step.title}</h3>
                <p className="text-[15px] md:text-[13px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {step.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. WHY IT MATTERS ════════════════════════════════════════ */}
      <section className="py-[60px]" style={{ background: '#0a1e33' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl px-8 py-10 md:px-12 md:py-12"
            style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
          >
            {/* Left glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 50% 80% at 0% 50%, rgba(46,196,182,0.07) 0%, transparent 70%)' }}
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">

              {/* Key stat */}
              <div className="shrink-0 text-center md:text-left">
                <div
                  className="font-extrabold leading-none"
                  style={{
                    fontSize: 'clamp(52px, 8vw, 88px)',
                    background: 'linear-gradient(90deg, #2EC4B6, #80ece5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {service.stats[0].value}
                </div>
                <div className="text-[13px] font-semibold mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {service.stats[0].label}
                </div>
              </div>

              {/* Vertical rule */}
              <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.08)' }} />

              {/* Text */}
              <div>
                <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] mb-3 text-[#2EC4B6]">
                  Why It Matters
                </p>
                <h3
                  className="font-extrabold text-white mb-3 leading-tight"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
                >
                  {service.tagline}
                </h3>
                <p className="text-[15px] leading-[1.75] max-w-[540px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {service.problem}
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* ══ 5. RELATED SERVICES ══════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="py-[60px]" style={{ background: '#0d2137' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-8">
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] mb-2 text-[#2EC4B6]">Keep Exploring</p>
              <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-white tracking-tight">Related Services</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map(s => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-4 p-5 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(46,196,182,0.3)] hover:shadow-[0_8px_32px_rgba(46,196,182,0.08)] transition-all duration-300"
                  style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
                >
                  <div>
                    <p className="text-[14px] font-extrabold text-white group-hover:text-[#2EC4B6] transition-colors duration-200">
                      {s.name}
                    </p>
                    <p className="text-[15px] md:text-[12px] mt-1 leading-[1.5]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {s.shortDescription.slice(0, 58)}…
                    </p>
                  </div>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="shrink-0 opacity-30 group-hover:opacity-100 group-hover:text-[#2EC4B6] transition-all duration-200"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ 6. FAQ ═══════════════════════════════════════════════════ */}
      {service.faqs.length > 0 && <ServiceFAQ service={service} />}

      {/* ══ 7. CTA BANNER ════════════════════════════════════════════ */}
      <section
        className="py-[60px] relative overflow-hidden"
        style={{ background: '#0a1e33', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-40 -right-40 w-[700px] h-[700px]"
            style={{ background: 'radial-gradient(circle, rgba(46,196,182,0.09) 0%, transparent 60%)' }}
          />
        </div>
        <div className="relative z-10 max-w-[620px] mx-auto px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-[7px] mb-6"
              style={{ background: 'rgba(46,196,182,0.10)', border: '1px solid rgba(46,196,182,0.26)' }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-[#2EC4B6] animate-pulse shrink-0" />
              <span className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-[#2EC4B6]">
                Free — No Obligation
              </span>
            </div>

            <h2
              className="font-extrabold text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}
            >
              Ready to get started with{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #2EC4B6, #80ece5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {service.name}?
              </span>
            </h2>

            <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Get a free audit and see exactly how much revenue you&apos;re leaving on the table.
              Response within 24 hours — no pitch, just data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-extrabold text-[15px] px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#2EC4B6', color: '#0B3C5D', boxShadow: '0 6px 28px rgba(46,196,182,0.42)' }}
              >
                Get Free Audit in 24 Hours
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M3.5 9h11M9.5 4.5L14 9l-4.5 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-[14px] px-7 py-4 rounded-2xl text-white hover:bg-white/10 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.13)' }}
              >
                View All Services
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
