import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Menu,
  X,
  ListChecks,
  Users,
  Handshake,
  Video,
  AlertTriangle,
  FileText,
  ChevronDown,
  Plus,
  Calendar,
  BarChart3,
  LayoutGrid,
  Briefcase,
  Shield,
  Target,
  Activity,
  CheckSquare,
  GitBranch,
} from "lucide-react";
import logo from "./assets/logo.png";
import calendarImg from "./assets/content-calendar.png";
import sheetImg from "./assets/content-sheet.png";
import dashboardImg from "./assets/admin-dashboard.png";
import salesOnboardingImg from "./assets/sales-onboarding.png";
import issueResolutionImg from "./assets/social-media-issue.png";
import contentCreationImg from "./assets/content-creation.png";
import f1Img from "./assets/1.png";
import f2Img from "./assets/2.png";
import f3Img from "./assets/3.png";
import f4Img from "./assets/4.png";
import f5Img from "./assets/5.png";
import f6Img from "./assets/6.png";
import f7Img from "./assets/7.png";
import f8Img from "./assets/8.png";
import f9Img from "./assets/9.png";
import f10Img from "./assets/10.png";

/* ── Brand Palette ── */
const P = {
  purple: "#6B21A8",
  purpleMid: "#7C3AED",
  purpleLight: "#A855F7",
  purplePale: "#F5F0FF",
  purpleFaint: "#FAF7FF",
  ink: "#0E0118",
  inkSoft: "#1C0A2E",
  slate: "#6B5F7A",
  line: "#EDE5F8",
  paper: "#FFFFFF",
  dark: "#130924",
  darkCard: "#1E0F35",
  accent: "#C084FC",
};

const NAV = [
  { label: "Product", id: "product" },
  { label: "Features", id: "features" },
  { label: "Workflows", id: "workflows" },
  { label: "Pricing", id: "pricing" },
];

function scrollTo(e, id) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ── Social Glyphs ── */
const Ig = ({ s = 20, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke={c} strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke={c} strokeWidth="2" />
    <circle cx="17.2" cy="6.8" r="1.1" fill={c} />
  </svg>
);
const Fb = ({ s = 20, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M15.5 8.5H18V5.08c-.6-.08-1.98-.2-3.2-.2-3.17 0-5.3 1.93-5.3 5.47V13H6.2v3.7h3.3V22h3.9v-5.3h3.16l.5-3.7h-3.66v-2.2c0-1.06.29-1.8 1.8-1.8Z" fill={c} />
  </svg>
);
const Li = ({ s = 20, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="4" y="9.5" width="3" height="9.5" fill={c} />
    <circle cx="5.5" cy="5.6" r="1.7" fill={c} />
    <path d="M11 9.5h3v1.4c.6-1 1.7-1.7 3.2-1.7 2.6 0 4 1.7 4 4.9V19h-3v-4.3c0-1.4-.5-2.4-1.9-2.4-1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1V19h-3V9.5Z" fill={c} />
  </svg>
);
const Yt = ({ s = 20, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="2.5" y="6" width="19" height="12" rx="4" stroke={c} strokeWidth="2" />
    <path d="M10.5 9.7v4.6l4-2.3-4-2.3Z" fill={c} />
  </svg>
);
const Tk = ({ s = 20, c = "#fff" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.03-8.6A8.28 8.28 0 0 0 21 8.41V5a4.85 4.85 0 0 1-1.41 1.69Z" fill={c} />
  </svg>
);

const PLATFORMS = [
  { Icon: Ig, label: "Instagram", bg: "linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)" },
  { Icon: Fb, label: "Facebook", bg: "#1877F2" },
  { Icon: Li, label: "LinkedIn", bg: "#0A66C2" },
  { Icon: Yt, label: "YouTube", bg: "#FF0000" },
  { Icon: Tk, label: "TikTok", bg: "#010101" },
];

const MORE_FEATURES = [
  { icon: ListChecks, title: "Tasks & assignments", copy: "Hand off a caption, a reel edit or a client reply and track it to done." },
  { icon: Users, title: "Team & roles", copy: "Give strategists, designers and account managers exactly the access they need." },
  { icon: Handshake, title: "Deals & proposals", copy: "Draft proposals, send them out and track which clients are still deciding." },
  { icon: Video, title: "Meetings", copy: "Keep every client review call and internal sync on one shared schedule." },
  { icon: AlertTriangle, title: "Client issues", copy: "Log a complaint or a fire drill once, and never lose track of who's fixing it." },
  { icon: FileText, title: "Reports", copy: "Export a clean monthly report per client without rebuilding it from scratch." },
];

/* ── All 10 README Features ── */
const ALL_FEATURES = [
  {
    img: f1Img,
    title: "Client & Contact Management",
    copy: "Centralized database for all client details, company info and contacts. Track status — Active, Inactive or Lead — and archive churned accounts cleanly.",
    tag: "CRM",
  },
  {
    img: f2Img,
    title: "Deal Pipeline",
    copy: "Kanban and list views of your sales pipeline. Track deal value, expected close dates and current stage. Convert won deals into active client workspaces in one click.",
    tag: "Sales",
  },
  {
    img: f3Img,
    title: "Task & Project Management",
    copy: "Assign tasks to team members or clients with status (To Do, In Progress, Review, Done), priority levels, and due dates for on-time delivery.",
    tag: "Productivity",
  },
  {
    img: f4Img,
    title: "Content Calendar",
    copy: "Plan and visualise content for Instagram, Facebook, LinkedIn, YouTube and TikTok in one shared calendar. See scheduled, pending and posted in a single view.",
    tag: "Scheduling",
  },
  {
    img: f5Img,
    title: "Content Approvals Pipeline",
    copy: "Streamline review between internal teams and clients. Set approval stages, collect sign-offs and publish — no more chasing approvals over WhatsApp.",
    tag: "Workflow",
  },
  {
    img: f6Img,
    title: "Meetings & Communication",
    copy: "Schedule client calls and internal syncs. Log agendas, minutes and participants so nothing from a meeting gets lost.",
    tag: "Communication",
  },
  {
    img: f7Img,
    title: "Proposals & Invoicing",
    copy: "Create professional proposals directly inside SocialNxt and export to PDF for client sharing — no external document tool needed.",
    tag: "Revenue",
  },
  {
    img: f8Img,
    title: "Issue Tracking",
    copy: "Log client complaints or internal bugs as tickets. Assign, track and resolve with a full timestamp trail so nothing falls through the cracks.",
    tag: "Support",
  },
  {
    img: f9Img,
    title: "Team & Access Control",
    copy: "Role-Based Access Control (RBAC) for Admin, Manager and Viewer roles. Invite team members via email and control exactly what each person can see or edit.",
    tag: "Security",
  },
  {
    img: f10Img,
    title: "Reports & Activity Logs",
    copy: "Visual analytics for team productivity and deal conversion, plus a comprehensive audit log capturing who did what and when for full accountability.",
    tag: "Analytics",
  },
];

/* ── Core Workflows from README ── */
const WORKFLOWS = [
  {
    title: "Sales to Onboarding",
    subtitle: "From first conversation to active client workspace.",
    icon: Briefcase,
    color: P.purpleLight,
    img: salesOnboardingImg,
    steps: [
      { n: "01", text: "Add new prospect to the Deals pipeline" },
      { n: "02", text: "Generate and send a branded Proposal" },
      { n: "03", text: "Move deal to 'Closed Won' once accepted" },
      { n: "04", text: "Convert the lead into an active Client workspace with onboarding checklist" },
    ],
  },
  {
    title: "Content Creation",
    subtitle: "From idea to published post, with every sign-off in between.",
    icon: LayoutGrid,
    color: P.accent,
    img: contentCreationImg,
    steps: [
      { n: "01", text: "Create a Task for the content piece with brief and references" },
      { n: "02", text: "Creator drafts copy and attaches assets" },
      { n: "03", text: "Move to 'In Review' for manager and client approval inside SocialNxt" },
      { n: "04", text: "Schedule approved content to the Calendar for publishing" },
    ],
  },
  {
    title: "Issue Resolution",
    subtitle: "Every client complaint gets logged, assigned and resolved.",
    icon: GitBranch,
    color: "#F97316",
    img: issueResolutionImg,
    steps: [
      { n: "01", text: "Client or team logs an Issue ticket with full context" },
      { n: "02", text: "Issue is assigned to the right team member" },
      { n: "03", text: "Updates are logged on the ticket as work progresses" },
      { n: "04", text: "Issue marked 'Resolved' — client notified and audit trail saved" },
    ],
  },
];

const STEPS = [
  { n: "01", title: "Add your client", copy: "Create a workspace, invite your team, and connect the platforms this client posts on." },
  { n: "02", title: "Plan the content", copy: "Drop topics, references and drafts into the content sheet as ideas come in." },
  { n: "03", title: "Approve & schedule", copy: "Clients and managers approve inside SocialNxt — no more chasing sign-off over email." },
  { n: "04", title: "Report the results", copy: "Pull revenue, workload and platform performance into one clean monthly view." },
];

const TESTIMONIALS = [
  {
    name: "Ananya Rao", role: "Founder, Loop Social", initials: "AR", color: P.purpleMid,
    quote: "We used to lose an afternoon every week just chasing approvals over WhatsApp. Now clients sign off inside the calendar and it's just done."
  },
  {
    name: "Devika Nair", role: "Ops Lead, Sundial Media", initials: "DN", color: P.purpleLight,
    quote: "The content sheet replaced four separate trackers we were juggling across clients. Onboarding a new account now takes minutes, not a full day."
  },
  {
    name: "Farhan Sheikh", role: "Partner, North Loop Agency", initials: "FS", color: P.purple,
    quote: "Reporting used to be a scramble at month-end. Now the dashboard is already there — we just walk the client through it."
  },
];

const PLANS = [
  {
    name: "Starter", price: "₹1,999", period: "/month", tagline: "For freelancers and small teams",
    features: ["Up to 3 clients", "Content calendar & sheet", "2 team members", "Email support"]
  },
  {
    name: "Growth", price: "₹4,999", period: "/month", popular: true, tagline: "For growing agencies",
    features: ["Up to 15 clients", "Full CRM & deal pipeline", "Full dashboard & reports", "10 team members", "Approvals & client portal", "Priority support"]
  },
  {
    name: "Agency", price: "Custom", period: "", tagline: "For multi-team agencies",
    features: ["Unlimited clients", "Custom roles & permissions", "Unlimited team members", "Proposals & invoicing", "Dedicated onboarding", "SLA-backed support"]
  },
];

const FAQS = [
  { q: "Can clients see the calendar directly?", a: "Yes. You can invite clients into a read-only or approval view of their own calendar and content sheet, without giving them access to any other client's workspace." },
  { q: "Does SocialNxt post directly to platforms?", a: "SocialNxt is built for planning, approval and reporting across Instagram, Facebook, LinkedIn, YouTube and TikTok. Scheduling handoff to your existing publishing tool is supported today, with direct publishing on our roadmap." },
  { q: "What happens if we outgrow the Starter plan?", a: "You can move to Growth or Agency at any point. Your clients, content sheet history and calendar carry over automatically — nothing needs to be rebuilt." },
  { q: "Is there a limit on team members per client?", a: "No. Team member limits are per-workspace, not per-client, so you can staff a single client with as many collaborators as the plan allows." },
  { q: "How does Role-Based Access Control work?", a: "SocialNxt supports Admin, Manager and Viewer roles. Admins control the full workspace and billing. Managers can create, edit and approve content. Viewers have read-only access — ideal for clients reviewing their own dashboards without touching anything else." },
  { q: "Can I track deals and convert them into client projects?", a: "Yes. The Deal Pipeline lets you manage your full sales process from first lead to closed won. Once a deal is marked won, you can convert it into a fully set-up client workspace in one action — all contact details carry over automatically." },
  { q: "What is captured in the Activity Log?", a: "Every action in SocialNxt — creating tasks, approving content, changing deal stages, sending proposals, updating client info — is recorded with a timestamp and user attribution. This gives you a full audit trail for accountability and transparency with clients." },
];

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function SocialNxtLanding() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: P.paper, color: P.ink, overflowX: "clip" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        a { text-decoration: none; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes panLeftRight { 0%, 100% { transform: translateX(0%); } 50% { transform: translateX(-20%); } }
        .pan-image { width: 140%; height: 100%; object-fit: cover; object-position: left top; max-width: none; animation: panLeftRight 15s ease-in-out infinite; transform-origin: left center; }
        .fadein { animation: fadeUp .7s ease both; }
        .float  { animation: float 5s ease-in-out infinite; }
        .hover-lift { transition: transform .2s ease, box-shadow .2s ease; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 48px -12px rgba(107,33,168,0.22); }
        .nav-a { position:relative; transition:color .2s; }
        .nav-a::after { content:''; position:absolute; left:0; right:0; bottom:-4px; height:2px; background:${P.purple}; transform:scaleX(0); transition:transform .2s; }
        .nav-a:hover::after { transform:scaleX(1); }
        .btn-p { transition:transform .15s, box-shadow .15s; }
        .btn-p:hover { transform:translateY(-2px); box-shadow:0 14px 28px -8px rgba(107,33,168,0.45); }
        .feature-card { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .feature-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px -12px rgba(107,33,168,0.18); border-color: ${P.purple} !important; }
        .workflow-step { transition: background .2s ease; }
        @media(max-width:860px) {
          .hide-m { display:none !important; }
          .hero-cols { grid-template-columns:1fr !important; }
          .grid-3 { grid-template-columns:1fr !important; }
          .grid-2 { grid-template-columns:1fr !important; }
          .bento-grid { grid-template-columns:1fr !important; }
          .grid-5 { grid-template-columns:repeat(3,1fr) !important; }
        }
        @media(max-width:520px) {
          .grid-5 { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>

      {/* ═══ NAV ═══ */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${P.line}` }}>
        <nav style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <img src={logo} alt="SocialNxt" style={{ height: 38, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

          {/* Links */}
          <div className="hide-m" style={{ display: "flex", gap: 32 }}>
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} onClick={e => scrollTo(e, n.id)}
                className="nav-a"
                style={{ fontSize: 14, fontWeight: 600, color: P.slate }}>
                {n.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hide-m" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button className="btn-p"
              onClick={() => setShowLeadForm(true)}
              style={{ background: P.purple, color: "#fff", border: "none", fontSize: 14, fontWeight: 700, padding: "10px 22px", borderRadius: 999, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              Get started <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setNavOpen(v => !v)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}
            className="show-m">
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        <style>{`@media(max-width:860px){ .show-m{display:inline-flex!important} }`}</style>

        {navOpen && (
          <div style={{ background: "#fff", borderTop: `1px solid ${P.line}`, padding: 16, display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`}
                onClick={e => { scrollTo(e, n.id); setNavOpen(false); }}
                style={{ padding: "12px 14px", fontWeight: 600, color: P.ink, borderRadius: 10, display: "block" }}>
                {n.label}
              </a>
            ))}
            <button onClick={() => { setShowLeadForm(true); setNavOpen(false); }}
              style={{ marginTop: 8, background: P.purple, color: "#fff", border: "none", padding: 14, borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
              Get started
            </button>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section id="product" style={{ maxWidth: 1120, margin: "0 auto", padding: "90px 24px 60px" }}>
        <div className="hero-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>

          {/* Left text */}
          <div className="fadein">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: P.purplePale, border: `1px solid ${P.line}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: P.purple, display: "inline-block" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: P.purple }}>Built for social & content agencies</span>
            </div>

            <h1 className="serif" style={{ fontSize: "clamp(42px,5vw,68px)", lineHeight: 1.1, fontWeight: 900, color: P.ink, letterSpacing: "-1px" }}>
              The easiest way<br />to <em style={{ color: P.purple, fontStyle: "italic" }}>manage</em> clients<br />and content.
            </h1>

            <p style={{ marginTop: 24, fontSize: 17, color: P.slate, lineHeight: 1.7, maxWidth: 460 }}>
              SocialNxt brings your CRM, content calendar, approvals and client reporting
              into one calm workspace — so nothing gets posted late, lost in email, or handled twice.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              <button className="btn-p"
                onClick={() => setShowLeadForm(true)}
                style={{ background: P.purple, color: "#fff", border: "none", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                Get started <ArrowRight size={16} />
              </button>
              <button onClick={e => scrollTo(e, "how-it-works")}
                style={{ background: "#fff", color: P.ink, border: `1.5px solid ${P.line}`, fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 999, cursor: "pointer" }}>
                See how it works
              </button>
            </div>

            <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
              {["5 platforms in one view", "Full CRM & pipeline", "Real-time approvals", "Clean monthly reports"].map(t => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: P.slate, fontWeight: 600 }}>
                  <CheckCircle2 size={15} color={P.purple} /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — bento hero cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 14 }}>
            {/* Big screenshot card */}
            <div className="hover-lift" style={{ gridColumn: "1/-1", borderRadius: 22, overflow: "hidden", border: `1.5px solid ${P.line}`, boxShadow: "0 24px 64px -16px rgba(107,33,168,0.18)" }}>
              <img src={dashboardImg} alt="Admin Dashboard" style={{ width: "100%", display: "block" }} />
            </div>
            {/* Stat cards */}
            <div style={{ background: P.dark, borderRadius: 20, padding: "22px 20px", color: "#fff" }}>
              <p style={{ fontSize: 38, fontWeight: 800, color: P.accent, lineHeight: 1 }}>100%</p>
              <p style={{ fontSize: 13, color: "#C4A8E8", marginTop: 6, lineHeight: 1.4 }}>content approval visibility</p>
            </div>
            <div style={{ background: P.purplePale, borderRadius: 20, padding: "22px 20px" }}>
              <p style={{ fontSize: 38, fontWeight: 800, color: P.purple, lineHeight: 1 }}>+18%</p>
              <p style={{ fontSize: 13, color: P.slate, marginTop: 6, lineHeight: 1.4 }}>avg. revenue growth for agencies</p>
            </div>
          </div>
        </div>

        {/* Platform logos strip */}
        <div style={{ marginTop: 70, borderTop: `1px solid ${P.line}`, paddingTop: 40 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: P.slate, textTransform: "uppercase", textAlign: "center", marginBottom: 32 }}>
            Works with every platform your clients post on
          </p>
          <div className="grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, maxWidth: 540, margin: "0 auto" }}>
            {PLATFORMS.map(({ Icon, label, bg }) => (
              <div key={label} className="hover-lift" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <div style={{ width: 60, height: 60, borderRadius: 18, background: bg, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px -8px rgba(0,0,0,0.28)" }}>
                  <Icon s={26} c="#fff" />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: P.slate }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — big text + bento ═══ */}
      <section id="features" style={{ background: P.dark, padding: "90px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 700, marginBottom: 56 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: P.accent, textTransform: "uppercase" }}>Inside SocialNxt</span>
            <h2 className="serif" style={{ fontSize: "clamp(36px,4vw,56px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginTop: 14, letterSpacing: "-0.5px" }}>
              Everything your agency runs on,<br />
              <em style={{ color: P.accent, fontStyle: "italic" }}>minus the chaos.</em>
            </h2>
          </div>

          {/* Bento grid */}
          <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {/* Content Calendar */}
            <div className="hover-lift" style={{ borderRadius: 24, background: "#fff", overflow: "hidden", border: `1px solid ${P.line}`, display: "flex", flexDirection: "column" }}>
              <div style={{ width: "100%", overflow: "hidden", height: 260, flexShrink: 0, position: "relative" }}>
                <img src={calendarImg} alt="Content Calendar" className="pan-image" style={{ display: "block" }} />
              </div>
              <div style={{ padding: "28px", flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: P.purple, textTransform: "uppercase" }}>Scheduling</span>
                <h3 className="serif" style={{ fontSize: 24, fontWeight: 800, color: P.ink, marginTop: 8 }}>Content Calendar</h3>
                <p style={{ fontSize: 14, color: P.slate, lineHeight: 1.65, marginTop: 10 }}>
                  See every scheduled, posted and pending piece of content across Instagram, Facebook, LinkedIn, YouTube and TikTok — in one shared view.
                </p>
              </div>
            </div>

            {/* Content Sheet */}
            <div className="hover-lift" style={{ borderRadius: 24, background: P.inkSoft, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "100%", overflow: "hidden", height: 260, flexShrink: 0, position: "relative" }}>
                <img src={sheetImg} alt="Content Sheet" className="pan-image" style={{ display: "block" }} />
              </div>
              <div style={{ padding: "28px", flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: P.accent, textTransform: "uppercase" }}>Collaboration</span>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginTop: 8 }}>Content Sheet</h3>
                <p style={{ fontSize: 13.5, color: "#C4A8E8", lineHeight: 1.65, marginTop: 10 }}>
                  Track topics, references, captions and final files in one spreadsheet your whole team can co-edit.
                </p>
              </div>
            </div>

            {/* Admin Dashboard */}
            <div className="hover-lift" style={{ borderRadius: 24, background: P.purplePale, overflow: "hidden", border: `1.5px solid ${P.line}`, display: "flex", flexDirection: "column" }}>
              <div style={{ width: "100%", overflow: "hidden", height: 260, flexShrink: 0, position: "relative" }}>
                <img src={dashboardImg} alt="Admin Dashboard" className="pan-image" style={{ display: "block" }} />
              </div>
              <div style={{ padding: "28px", flex: 1 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: P.purpleMid, textTransform: "uppercase" }}>Reporting</span>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 800, color: P.ink, marginTop: 8 }}>Admin Dashboard</h3>
                <p style={{ fontSize: 13.5, color: P.slate, lineHeight: 1.65, marginTop: 10 }}>
                  Revenue, team workload, platform mix and pending approvals — one dashboard per agency, always up to date.
                </p>
              </div>
            </div>

            {/* Stat card (Extended for uniformity) */}
            <div style={{ gridColumn: "1 / -1", borderRadius: 24, background: P.purple, padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
              <p style={{ fontSize: 52, fontWeight: 900, color: "#fff", lineHeight: 1 }}>5</p>
              <p style={{ fontSize: 20, color: "#E9D5FF", fontWeight: 600 }}>platforms tracked in one unified calendar.</p>
            </div>
          </div>

          {/* More features */}
          <div style={{ marginTop: 56 }}>
            <h3 className="serif" style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 28 }}>Plus everything else an agency needs</h3>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {MORE_FEATURES.map(f => (
                <div key={f.title} className="hover-lift" style={{ display: "flex", gap: 14, padding: "20px 22px", borderRadius: 18, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(168,85,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <f.icon size={18} color={P.accent} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{f.title}</h4>
                    <p style={{ fontSize: 13, color: "#9D8BB0", marginTop: 4, lineHeight: 1.55 }}>{f.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FULL FEATURE SUITE ═══ */}
      <section id="all-features" style={{ padding: "90px 24px", background: P.purpleFaint }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: P.purple, textTransform: "uppercase" }}>Full feature suite</span>
            <h2 className="serif" style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 900, color: P.ink, lineHeight: 1.15, marginTop: 14, letterSpacing: "-0.5px" }}>
              Ten features.<br /><em style={{ color: P.purple, fontStyle: "italic" }}>One platform.</em> Zero tab overload.
            </h2>
            <p style={{ color: P.slate, marginTop: 14, fontSize: 15.5, lineHeight: 1.7 }}>
              Every tool your agency needs to manage clients, content, deals and your team —
              built to work together, not in silos.
            </p>
          </div>

          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {ALL_FEATURES.map(f => (
              <div key={f.title} className="feature-card" style={{ display: "flex", gap: 24, padding: "26px 28px", borderRadius: 20, background: "#fff", border: `1.5px solid ${P.line}`, cursor: "default", alignItems: "center" }}>
                <div style={{ width: 140, flexShrink: 0 }}>
                  <img src={f.img} alt={f.title} style={{ width: "100%", display: "block", objectFit: "contain" }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                    <h4 style={{ fontSize: 15.5, fontWeight: 700, color: P.ink }}>{f.title}</h4>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: P.purple, textTransform: "uppercase", background: P.purplePale, padding: "3px 9px", borderRadius: 999, whiteSpace: "nowrap" }}>{f.tag}</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: P.slate, lineHeight: 1.65 }}>{f.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" style={{ padding: "90px 24px", background: P.paper }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="hero-cols">
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: P.purple, textTransform: "uppercase" }}>The workflow</span>
              <h2 className="serif" style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 900, color: P.ink, lineHeight: 1.1, marginTop: 14, letterSpacing: "-0.5px" }}>
                From new client<br />to published post,<br /><em style={{ color: P.purple, fontStyle: "italic" }}>in four steps.</em>
              </h2>
              <p style={{ marginTop: 20, fontSize: 15.5, color: P.slate, lineHeight: 1.7, maxWidth: 400 }}>
                SocialNxt is designed around the way agencies actually work — clients, content, approvals, reporting.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {STEPS.map((s, i) => (
                <div key={s.n} className="hover-lift"
                  style={{ display: "flex", gap: 20, padding: "22px 24px", borderRadius: 20, background: i % 2 === 0 ? P.purplePale : P.dark, border: `1.5px solid ${i % 2 === 0 ? P.line : "transparent"}` }}>
                  <span className="serif" style={{ fontSize: 36, fontWeight: 900, color: i % 2 === 0 ? P.purple : P.accent, opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{s.n}</span>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: i % 2 === 0 ? P.ink : "#fff" }}>{s.title}</h4>
                    <p style={{ fontSize: 13.5, color: i % 2 === 0 ? P.slate : "#C4A8E8", marginTop: 6, lineHeight: 1.55 }}>{s.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE WORKFLOWS ═══ */}
      <section id="workflows" style={{ background: P.dark, padding: "90px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: P.accent, textTransform: "uppercase" }}>Core workflows</span>
            <h2 className="serif" style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginTop: 14, letterSpacing: "-0.5px" }}>
              Three workflows your agency<br /><em style={{ color: P.accent, fontStyle: "italic" }}>runs on every day.</em>
            </h2>
            <p style={{ color: "#9D8BB0", marginTop: 14, fontSize: 15, lineHeight: 1.7 }}>
              SocialNxt connects every part of your operation — from closing a deal to delivering the report.
            </p>
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {WORKFLOWS.map(w => (
              <div key={w.title} className="hover-lift" style={{ borderRadius: 24, background: P.darkCard, border: "1px solid rgba(255,255,255,0.08)", padding: "32px 28px", display: "flex", flexDirection: "column" }}>
                {/* Optional Image at Top */}
                {w.img && (
                  <div style={{ marginBottom: 24, borderRadius: 16, overflow: "hidden", border: `1px solid ${w.color}40`, boxShadow: `0 8px 32px -8px ${w.color}25` }}>
                    <img src={w.img} alt={w.title} style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
                  </div>
                )}

                {/* Title */}
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 800, color: "#fff", marginBottom: 6 }}>{w.title}</h3>
                <p style={{ fontSize: 13, color: "#9D8BB0", lineHeight: 1.55, marginBottom: 26 }}>{w.subtitle}</p>

                {/* Steps */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {w.steps.map((step, i) => (
                    <div key={i} className="workflow-step" style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "10px 14px", borderRadius: 12, background: "rgba(255,255,255,0.04)" }}>
                      <span style={{ width: 28, height: 28, borderRadius: "50%", background: `${w.color}20`, border: `1.5px solid ${w.color}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: w.color, flexShrink: 0, fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.5px" }}>
                        {step.n}
                      </span>
                      <p style={{ fontSize: 13.5, color: "#C4A8E8", lineHeight: 1.55, paddingTop: 5 }}>{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM / STATS ═══ */}
      <section id="team" style={{ background: P.paper, padding: "90px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 48, alignItems: "center" }} className="hero-cols">
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: P.purple, textTransform: "uppercase" }}>Your team</span>
              <h2 className="serif" style={{ fontSize: "clamp(32px,4vw,50px)", fontWeight: 900, color: P.ink, lineHeight: 1.15, letterSpacing: "-0.5px", marginTop: 14 }}>
                Built for teams juggling<br /><em style={{ color: P.purple, fontStyle: "italic" }}>more clients</em><br />than hours in the day.
              </h2>
              <p style={{ color: P.slate, marginTop: 20, fontSize: 15.5, lineHeight: 1.7, maxWidth: 460 }}>
                Strategists, designers, editors and account managers all work from the same content sheet — so nothing lives in someone's DMs.
              </p>
              <div style={{ display: "flex", marginTop: 32, alignItems: "center", gap: 4 }}>
                {["P", "R", "M", "K"].map((l, i) => (
                  <div key={l} style={{ width: 44, height: 44, borderRadius: "50%", background: [P.purple, P.purpleLight, P.accent, "#22C55E"][i], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14, border: `3px solid ${P.paper}`, marginLeft: i === 0 ? 0 : -10 }}>{l}</div>
                ))}
                <span style={{ color: P.slate, fontSize: 13, marginLeft: 14 }}>Strategy, design, edit & review — together</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { n: "100%", l: "content approval visibility" },
                { n: "+18%", l: "avg. revenue growth for agencies" },
                { n: "5", l: "platforms tracked in one calendar" },
                { n: "10×", l: "faster client onboarding" },
              ].map(s => (
                <div key={s.l} className="hover-lift"
                  style={{ background: P.purplePale, borderRadius: 20, padding: "22px 24px", display: "flex", alignItems: "center", gap: 20, border: `1.5px solid ${P.line}` }}>
                  <span className="serif" style={{ fontSize: 36, fontWeight: 900, color: P.purple, minWidth: 80 }}>{s.n}</span>
                  <span style={{ color: P.ink, fontSize: 14 }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ padding: "90px 24px", background: P.dark }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: P.accent, textTransform: "uppercase" }}>What agencies say</span>
            <h2 className="serif" style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginTop: 14, letterSpacing: "-0.5px" }}>
              Fewer spreadsheets.<br /><em style={{ color: P.accent, fontStyle: "italic" }}>Fewer surprises</em> at review time.
            </h2>
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="hover-lift"
                style={{ borderRadius: 24, border: "1px solid rgba(255,255,255,0.1)", padding: "28px 26px", background: P.darkCard, display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: 3 }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill={P.accent}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: "#E2D9F3", lineHeight: 1.7, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13 }}>{t.initials}</div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.name}</p>
                    <p style={{ fontSize: 12.5, color: "#9D8BB0" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" style={{ padding: "90px 24px", background: P.paper }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 56px" }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: P.purple, textTransform: "uppercase" }}>Simple pricing</span>
            <h2 className="serif" style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 900, color: P.ink, lineHeight: 1.15, marginTop: 14, letterSpacing: "-0.5px" }}>
              Pick the plan that matches<br /><em style={{ color: P.purple, fontStyle: "italic" }}>your client list.</em>
            </h2>
            <p style={{ color: P.slate, marginTop: 12, fontSize: 15 }}>Upgrade or downgrade any time. No setup fees.</p>
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {PLANS.map(p => (
              <div key={p.name} className="hover-lift"
                style={{
                  borderRadius: 24, padding: "30px 28px", position: "relative",
                  border: p.popular ? `2px solid ${P.purple}` : `1.5px solid ${P.line}`,
                  background: p.popular ? P.purplePale : "#fff",
                  boxShadow: p.popular ? "0 24px 56px -16px rgba(107,33,168,0.25)" : "none"
                }}>
                {p.popular && (
                  <span style={{ position: "absolute", top: -14, left: 28, background: P.purple, color: "#fff", fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 999 }}>
                    Most popular
                  </span>
                )}
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 800, color: P.ink }}>{p.name}</h3>
                <p style={{ fontSize: 13.5, color: P.slate, marginTop: 4 }}>{p.tagline}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 20 }}>
                  <span className="serif" style={{ fontSize: 40, fontWeight: 900, color: P.ink }}>{p.price}</span>
                  <span style={{ fontSize: 13, color: P.slate }}>{p.period}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 24 }}>
                  {p.features.map(f => (
                    <span key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: P.ink }}>
                      <CheckCircle2 size={16} color={P.purple} /> {f}
                    </span>
                  ))}
                </div>
                <button className="btn-p"
                  style={{
                    marginTop: 28, width: "100%", padding: "13px", borderRadius: 14, fontWeight: 700, fontSize: 14, cursor: "pointer",
                    border: p.popular ? "none" : `1.5px solid ${P.line}`,
                    background: p.popular ? P.purple : "#fff",
                    color: p.popular ? "#fff" : P.ink
                  }}>
                  {p.price === "Custom" ? "Talk to us" : "Choose " + p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: "90px 24px", background: P.purpleFaint }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 className="serif" style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: P.ink, textAlign: "center", letterSpacing: "-0.5px", marginBottom: 40 }}>
            Questions, <em style={{ color: P.purple, fontStyle: "italic" }}>answered.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} style={{ background: "#fff", borderRadius: 18, overflow: "hidden", border: `1.5px solid ${isOpen ? P.purple : P.line}`, transition: "border-color .2s" }}>
                  <div onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", cursor: "pointer" }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: P.ink }}>{f.q}</span>
                    {isOpen ? <ChevronDown size={18} color={P.purple} /> : <Plus size={18} color={P.slate} />}
                  </div>
                  {isOpen && (
                    <div style={{ padding: "0 22px 20px", fontSize: 14, color: P.slate, lineHeight: 1.7 }}>{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: "90px 24px 100px", background: P.paper }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ background: P.dark, borderRadius: 32, padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32, position: "relative", overflow: "hidden" }}>
            {/* decorative blobs */}
            <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(168,85,247,0.35),transparent 70%)", top: -80, right: 80, pointerEvents: "none" }} />
            <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(107,33,168,0.4),transparent 70%)", bottom: -60, right: -40, pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 2, maxWidth: 520 }}>
              <h2 className="serif" style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.5px" }}>
                Ready to bring your entire<br /><em style={{ color: P.accent, fontStyle: "italic" }}>agency workflow</em> into one place?
              </h2>
              <p style={{ color: "#C4A8E8", marginTop: 14, fontSize: 15 }}>
                Set up your first client workspace in under five minutes. No credit card needed.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 28, flexWrap: "wrap" }}>
                {["CRM & pipeline", "Content calendar", "Approvals", "Reporting"].map(chip => (
                  <span key={chip} style={{ fontSize: 12, fontWeight: 600, color: P.accent, background: "rgba(192,132,252,0.15)", border: "1px solid rgba(192,132,252,0.25)", padding: "5px 13px", borderRadius: 999 }}>{chip}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative", zIndex: 2 }}>
              <button className="btn-p"
                onClick={() => setShowLeadForm(true)}
                style={{ background: "#fff", color: P.purple, border: "none", fontWeight: 800, fontSize: 15, padding: "18px 32px", borderRadius: 999, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                Get started <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: `1px solid ${P.line}`, padding: "52px 24px 36px", background: P.paper }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 32 }}>
            <div>
              <img src={logo} alt="SocialNxt" style={{ height: 36 }} />
              <p style={{ fontSize: 13.5, color: P.slate, marginTop: 16, maxWidth: 260, lineHeight: 1.7 }}>
                One workspace for CRM, content calendars, approvals and client reporting — built for agency teams.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: P.slate, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>Product</p>
              {["Content Calendar", "Content Sheet", "Deal Pipeline", "Task Management", "Proposals", "Reports & Logs"].map(l => (
                <p key={l} style={{ fontSize: 13.5, color: P.ink, marginTop: 10, cursor: "pointer" }}>{l}</p>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: P.slate, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>Company</p>
              {["About", "Careers", "Contact", "Pricing"].map(l => (
                <p key={l} style={{ fontSize: 13.5, color: P.ink, marginTop: 10, cursor: "pointer" }}>{l}</p>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: P.slate, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>Legal</p>
              {["Privacy", "Terms", "Security"].map(l => (
                <p key={l} style={{ fontSize: 13.5, color: P.ink, marginTop: 10, cursor: "pointer" }}>{l}</p>
              ))}
              <p style={{ fontSize: 11, fontWeight: 700, color: P.slate, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16, marginTop: 28 }}>Platforms</p>
              {["Instagram", "Facebook", "LinkedIn", "YouTube", "TikTok"].map(l => (
                <p key={l} style={{ fontSize: 13.5, color: P.ink, marginTop: 10, cursor: "pointer" }}>{l}</p>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 13, color: P.slate, marginTop: 44, borderTop: `1px solid ${P.line}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span>© 2026 SocialNxt. Built for agencies who ship on time.</span>
            <span>Designed and Developed by <a href="https://webnxt.co/" target="_blank" rel="noopener noreferrer" style={{ color: P.accent, fontWeight: 700, textDecoration: "none" }}>WebNxt</a></span>
          </p>
        </div>
      </footer>

      {/* ═══ LEAD FORM MODAL ═══ */}
      {showLeadForm && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(19, 9, 36, 0.4)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div className="fadein" style={{ background: "#fff", padding: "40px 32px", borderRadius: 24, width: "100%", maxWidth: 440, boxShadow: "0 24px 64px -16px rgba(107,33,168,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 className="serif" style={{ fontSize: 24, fontWeight: 800, color: P.ink }}>Get Started</h3>
              <button onClick={() => setShowLeadForm(false)} style={{ background: "none", border: "none", cursor: "pointer", color: P.slate }}>
                <X size={20} />
              </button>
            </div>
            <p style={{ fontSize: 14, color: P.slate, marginBottom: 24 }}>
              Tell us a little about yourself and we'll be in touch shortly.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: P.slate, marginBottom: 8 }}>Name</label>
                <input type="text" placeholder="Your Full Name" style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: `1.5px solid ${P.line}`, fontSize: 15, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: P.slate, marginBottom: 8 }}>Email address</label>
                <input type="email" placeholder="you@agency.com" style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: `1.5px solid ${P.line}`, fontSize: 15, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: P.slate, marginBottom: 8 }}>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: `1.5px solid ${P.line}`, fontSize: 15, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: P.slate, marginBottom: 8 }}>Requirement / Demand</label>
                <textarea rows="3" placeholder="Tell us what you're looking for..." style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: `1.5px solid ${P.line}`, fontSize: 15, outline: "none", resize: "vertical" }}></textarea>
              </div>
              <button className="btn-p" style={{ background: P.purple, color: "#fff", border: "none", fontWeight: 700, fontSize: 15, padding: "14px", borderRadius: 12, cursor: "pointer", marginTop: 8 }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}