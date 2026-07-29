import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useScroll, useSpring } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  FaLinkedinIn, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDownload,
  FaChartLine, FaChartBar, FaCalculator, FaUniversity, FaMoneyBillWave, FaFileInvoiceDollar,
  FaArrowUp, FaBars, FaTimes, FaCheckCircle, FaBriefcase, FaGraduationCap, FaGlobe
} from 'react-icons/fa'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import './index.css'

const nav = ['About', 'Expertise', 'Experience', 'Services', 'Contact']
const competencies = [
  'Financial Accounting & Reporting','Bank & Balance Sheet Reconciliation','AP / AR & Supplier Reconciliation',
  'Cash Flow & Cash Management','Month-End Closing & Variance Analysis','Fintech Partner Settlements',
  'FX Margin & Commission Reconciliation','Tax & Withholding Tax','Chart of Accounts & Internal Controls',
  'ERP & Process Improvement','Management Reporting','Microsoft Excel'
]
const jobs = [
  {
    company:'PUKAT TECHNOLOGY PVT LTD', location:'Lahore, Pakistan', role:'Manager Finance & Accounts', period:'April 2021 – Present',
    bullets:[
      'Manage day-to-day finance and accounting operations, including AP, AR, general ledger and reconciliations.',
      'Prepare and review monthly, quarterly and annual financial reports and management accounts.',
      'Monitor cash flow, bank balances, payments and working capital to ensure effective fund management.',
      'Oversee budgeting, forecasting and variance analysis and provide management with financial insights.',
      'Ensure timely month-end and year-end closing, including account reconciliations and adjustments.',
      'Manage tax compliance, statutory filings and coordination with tax consultants and auditors.',
      'Maintain accurate financial records and ensure compliance with accounting standards, company policies and internal controls.',
      'Review invoices, expenses, payroll-related financial matters and vendor/customer balances.',
      'Coordinate with banks, auditors, tax agents, clients and other stakeholders on financial matters.',
      'Identify financial risks, improve accounting processes and support cost control and operational efficiency.',
      'Supervise and guide the Finance & Accounts team, ensuring timely completion of assigned tasks.',
      'Support senior management in financial planning, decision-making and business analysis.'
    ]
  },
  {
    company:"CR21G MAQBOOL CALSON'S JV", location:'Peshawar, Pakistan', role:'Accounts Officer – BRT Project, Reach 3', period:'February 2018 – October 2020',
    bullets:[
      'Supported implementation of Vision Plus ERP (Oracle-based) for the BRT Metro Peshawar project.',
      'Maintained Chart of Accounts and posted daily cash/financial transactions; prepared daily cash position reports.',
      'Verified subcontractor bills, maintained ledgers and supported payment processing and cash demands.',
      'Reviewed salary sheets, attendance and employee final settlements and supported payroll-related verification.',
      'Assisted with tax documentation, funds received/released schedules, machinery/labour cost reviews and management reporting.'
    ]
  },
  {
    company:'A.J TEXTILES MILLS LTD', location:'Peshawar, Pakistan', role:'Accountant', period:'February 2017 – February 2018',
    bullets:[
      'Recorded expenses and liabilities in SAP Business One and maintained/reconciled supplier ledgers.',
      'Prepared supplier and transporter payments with applicable withholding tax.',
      'Reviewed purchase orders against Last Purchase Rate (LPR) and reported price variances.',
      'Prepared landed cost, conversion cost/loss, yield and yield-loss reports and performed bank reconciliations.',
      'Conducted monthly stock verification and reconciled physical inventory with system records.'
    ]
  },
  { company:'A.J TEXTILES MILLS LTD', location:'Peshawar, Pakistan', role:'Trainee – Accounts', period:'November 2016 – February 2017', bullets:['Supported routine accounting, bank reconciliations, Excel-based reporting, online payments and cheque processing.'] }
]

function Counter({value, suffix=''}) {
  const [n,setN]=useState(0)
  useEffect(()=>{ let start=0; const end=value; const t=setInterval(()=>{start+=1;setN(start);if(start>=end)clearInterval(t)},55); return()=>clearInterval(t)},[value])
  return <span>{n}{suffix}</span>
}

function Dashboard(){
  const bars=[42,66,54,82,70,94,76]
  return <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.9}} className="dashboard-shell">
    <div className="dash-top"><div><span className="status-dot"/> Financial Overview</div><span>FY 2026</span></div>
    <div className="kpi-grid">
      {[['Revenue','+18.4%'],['Cash Position','Healthy'],['Variance','-3.2%']].map(([a,b],i)=><motion.div key={a} whileHover={{y:-5}} className="kpi"><small>{a}</small><strong>{b}</strong><em>{i===1?'Optimised':'vs prior period'}</em></motion.div>)}
    </div>
    <div className="chart-card">
      <div className="chart-head"><span>Management Reporting</span><HiOutlineArrowTrendingUp/></div>
      <div className="bar-chart">{bars.map((h,i)=><motion.i key={i} initial={{height:0}} animate={{height:`${h}%`}} transition={{delay:.5+i*.08,duration:.7}}/>)}</div>
      <svg className="line-chart" viewBox="0 0 400 130" preserveAspectRatio="none"><motion.path d="M0 100 C55 95,65 55,120 68 S190 98,240 42 S320 58,400 18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2,delay:.5}}/></svg>
    </div>
    <div className="payment-flow"><span><FaUniversity/> Bank</span><b>•••</b><span><FaMoneyBillWave/> Settlement</span><b>•••</b><span><FaFileInvoiceDollar/> Ledger</span></div>
  </motion.div>
}

function App(){
  const [open,setOpen]=useState(false)
  const {scrollYProgress}=useScroll(); const scaleX=useSpring(scrollYProgress,{stiffness:120,damping:30})
  useEffect(()=>{AOS.init({duration:750,once:true,offset:70})},[])
  return <div className="app">
    <motion.div className="scroll-progress" style={{scaleX}}/>
    <header><nav className="nav-wrap"><a href="#home" className="brand"><span>FS</span><div><b>Farhan Siddiqui</b><small>Finance & Accounts</small></div></a><button className="menu" onClick={()=>setOpen(!open)}>{open?<FaTimes/>:<FaBars/>}</button><div className={`navlinks ${open?'open':''}`}>{nav.map(n=><a key={n} onClick={()=>setOpen(false)} href={`#${n.toLowerCase()}`}>{n}</a>)}<a className="nav-cta" href="/farhan-portfolio/Muhammad_Farhan_Siddiqui_CV.pdf" download><FaDownload/> CV</a></div></nav></header>

    <main>
      <section id="home" className="hero section-bg hero-bg">
        <div className="ledger ledger-one"/><div className="ledger ledger-two"/>
        {['$','€','£','₨'].map((s,i)=><motion.span key={s} className={`currency c${i}`} animate={{y:[0,-18,0],rotate:[0,8,-5,0]}} transition={{duration:4+i,repeat:Infinity}}>{s}</motion.span>)}
        <div className="container hero-grid">
          <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{duration:.8}} className="hero-copy">
            <p className="eyebrow">Finance leadership • Reporting • Controls</p>
            <h1>Muhammad Farhan <span>Siddiqui</span></h1><h2>Manager Finance & Accounts</h2>
            <p className="lead">Helping organisations strengthen financial reporting, reconciliation, controls and management visibility through practical, business-focused finance.</p>
            <div className="actions"><a className="btn primary" href="/farhan-portfolio/Muhammad_Farhan_Siddiqui_CV.pdf" download><FaDownload/> Download CV</a><a className="btn secondary" href="#contact">Contact Me</a><a className="icon-btn" href="https://www.linkedin.com/in/fmh190" target="_blank" rel="noreferrer"><FaLinkedinIn/></a></div>
            <div className="tech-tags"><span>SAP Business One</span><span>One ERP</span><span>Xero</span><span>Advanced Excel</span></div>
          </motion.div>
          <div className="hero-visual"><Dashboard/><motion.div className="profile-float" animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity}}><img src="/farhan-portfolio/profile.jpg" alt="Muhammad Farhan Siddiqui"/><div><b>Muhammad Farhan Siddiqui</b><small><FaMapMarkerAlt/> Lahore, Pakistan</small></div></motion.div></div>
        </div>
      </section>

      <section id="about" className="section section-bg about-bg"><div className="container split"><div data-aos="fade-up"><p className="eyebrow">About Me</p><h2 className="section-title">Practical finance leadership backed by 9+ years of experience.</h2><p className="body-copy">Finance and Accounts professional with 9+ years of experience across fintech, technology, construction and textile industries, currently serving as Manager Finance & Accounts at Pukat Technology Pvt Ltd. Strong experience in financial accounting, management reporting, bank and balance sheet reconciliations, AP/AR, cash management, taxation, ERP operations and fintech partner settlements. Hands-on expertise in SAP Business One, Xero and One ERP systems.</p><div className="bio-grid"><span><FaMapMarkerAlt/><b>Lahore, Pakistan</b></span><span><FaBriefcase/><b>Manager Finance & Accounts</b></span><span><FaGraduationCap/><b>BBA (Hons) – Finance</b></span><span><FaGlobe/><b>English • Urdu • Pashto</b></span></div></div><div className="portrait-card" data-aos="zoom-in"><img src="/farhan-portfolio/profile.jpg" alt="Professional portrait"/><div className="portrait-badge"><FaChartLine/><span><b>9+ Years</b><small>Finance Experience</small></span></div></div></div></section>

      <section className="stats-strip"><div className="container stats">{[[9,'+','Years Experience'],[4,'','Industries'],[3,'','ERP Platforms'],[12,'+','Core Competencies']].map(([v,s,l])=><div key={l} data-aos="fade-up"><strong><Counter value={v} suffix={s}/></strong><span>{l}</span></div>)}</div></section>

      <section id="expertise" className="section section-bg expertise-bg"><div className="container"><div className="section-heading" data-aos="fade-up"><p className="eyebrow">Core Expertise</p><h2 className="section-title">Financial control, reporting and operational clarity.</h2></div><div className="competency-grid">{competencies.map((c,i)=><motion.div whileHover={{y:-8,scale:1.015}} className="competency" key={c} data-aos="fade-up" data-aos-delay={(i%4)*60}><span>{i%3===0?<FaChartBar/>:i%3===1?<FaCalculator/>:<FaCheckCircle/>}</span><b>{c}</b></motion.div>)}</div></div></section>

      <section id="experience" className="section section-bg experience-bg"><div className="container"><div className="section-heading" data-aos="fade-up"><p className="eyebrow">Professional Experience</p><h2 className="section-title">A career built across fintech, technology, construction and textile.</h2></div><div className="timeline">{jobs.map((j,i)=><article className="job" key={j.company+j.role} data-aos={i%2?'fade-left':'fade-right'}><div className="job-dot"/><div className="job-card"><div className="job-head"><div><h3>{j.company}</h3><p>{j.location}</p></div><span>{j.period}</span></div><h4>{j.role}</h4><ul>{j.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></article>)}</div></div></section>

      <section id="services" className="section section-bg services-bg"><div className="container"><div className="section-heading light" data-aos="fade-up"><p className="eyebrow">Siddiqui's Accounting Services</p><h2 className="section-title">Reliable accounting support for growing businesses.</h2><p>Professional accounting services designed to improve record accuracy, reporting quality and financial control.</p></div><div className="services-grid">{[
        ['Bookkeeping & Ledger Management','Organised transaction records, account classification and ledger review.',FaFileInvoiceDollar],
        ['Financial Statements & Reporting','Clear periodic reporting and management-friendly financial information.',FaChartLine],
        ['Bank & Balance Reconciliation','Timely reconciliation, variance investigation and corrective follow-up.',FaUniversity],
        ['Payroll & Tax Coordination','Payroll verification and organised documentation for tax and compliance matters.',FaMoneyBillWave],
        ['Finance Process Improvement','Practical workflows, responsibility matrices and stronger internal controls.',FaCalculator]
      ].map(([t,d,Icon],i)=><motion.div whileHover={{y:-10}} className="service" key={t} data-aos="fade-up" data-aos-delay={i*70}><span><Icon/></span><small>0{i+1}</small><h3>{t}</h3><p>{d}</p></motion.div>)}</div></div></section>

      <section className="section section-bg why-bg"><div className="container split align-center"><div data-aos="fade-right"><p className="eyebrow">Why Work With Me</p><h2 className="section-title">Detail-oriented execution with a management mindset.</h2></div><div className="checklist" data-aos="fade-left">{['More than nine years of cross-industry finance experience','Strong command of reconciliations and financial reporting','Hands-on ERP experience across SAP Business One, One ERP and Xero','Practical approach to controls, accountability and issue resolution','Clear communication with management, banks, partners and internal teams'].map(x=><p key={x}><FaCheckCircle/>{x}</p>)}</div></div></section>

      <section id="contact" className="section section-bg contact-bg"><div className="container contact-grid"><div data-aos="fade-right"><p className="eyebrow">Contact</p><h2 className="section-title">Let’s discuss your finance or accounting requirements.</h2><p className="body-copy">Available for professional opportunities, advisory assignments and accounting services.</p><div className="contact-list"><a href="mailto:farhan.acc365@gmail.com"><FaEnvelope/>farhan.acc365@gmail.com</a><a href="tel:+923159213353"><FaPhoneAlt/>+92 315 9213353</a><a href="https://wa.me/923159213353" target="_blank" rel="noreferrer"><FaWhatsapp/>WhatsApp Message</a><a href="https://www.linkedin.com/in/fmh190" target="_blank" rel="noreferrer"><FaLinkedinIn/>LinkedIn Profile</a><span><FaMapMarkerAlt/>Lahore, Pakistan</span></div></div><form data-aos="fade-left" onSubmit={(e)=>{e.preventDefault();const f=new FormData(e.currentTarget);location.href=`mailto:farhan.acc365@gmail.com?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`)}`}}><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Email address" required/><input name="subject" placeholder="Subject" required/><textarea name="message" rows="5" placeholder="Your message" required/><button className="btn primary" type="submit">Prepare Email</button><small>This form opens your default email application; no data is stored.</small></form></div></section>
    </main>
    <a className="whatsapp" href="https://wa.me/923159213353" target="_blank" rel="noreferrer"><FaWhatsapp/></a><button className="to-top" onClick={()=>scrollTo({top:0,behavior:'smooth'})}><FaArrowUp/></button>
    <footer><div className="container"><p>© {new Date().getFullYear()} Muhammad Farhan Siddiqui. All rights reserved.</p><p>Siddiqui's Accounting Services</p></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>)
