'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, LockKeyhole, ShieldCheck, Skull } from 'lucide-react'

const fieldClass =
  'mt-2 h-12 w-full border border-[#66531d] bg-[#11130f] px-4 font-mono text-sm text-[#f6c94e] outline-none transition placeholder:text-[#6f683f] focus:border-[#e2ae2f] focus:ring-1 focus:ring-[#e2ae2f]'

export default function Page() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#191a16] text-[#f4efe0]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col border-x border-[#4e421e]">
        <header className="flex items-center justify-between border-b border-[#4e421e] px-5 py-5 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center border border-[#d5a629] bg-[#262418] text-[#d5a629]">
              <Skull aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#a99c6b]">SPD / COMMERCIAL DIVISION</p>
              <p className="text-sm font-semibold tracking-[0.12em] text-[#f6c94e]">SERPENT PERIMETER</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#a99c6b] sm:flex">
            <span className="size-2 rounded-full bg-[#b9d36a] shadow-[0_0_10px_#b9d36a]" />
            RESPONSE NETWORK ONLINE
          </div>
        </header>

        <section className="grid flex-1 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col justify-between border-b border-[#4e421e] px-5 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:py-20">
            <div>
              <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-[#d5a629]"><span className="h-px w-8 bg-[#d5a629]" /> SITE PROTECTION INTAKE / 01</p>
              <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-[#f7f1df] sm:text-7xl">Keep your perimeter <span className="text-[#d8aa2d]">silent.</span></h1>
              <p className="mt-8 max-w-md text-base leading-7 text-[#b6b09c]">A targeted pest defense plan for commercial grounds, residential estates, and multi-acre properties that cannot afford blind spots.</p>
            </div>
            <div className="mt-16 grid max-w-md grid-cols-2 gap-px border border-[#4e421e] bg-[#4e421e]">
              {['Multi-acre coverage', 'Rapid site response', 'Discreet operations', 'Certified technicians'].map((item, index) => (
                <div className="bg-[#1d1e19] p-4" key={item}><span className="mb-3 block font-mono text-[10px] text-[#6f683f]">0{index + 1}</span><span className="text-xs uppercase tracking-[0.12em] text-[#d8d0b9]">{item}</span></div>
              ))}
            </div>
          </div>

          <div className="bg-[#202119] px-5 py-12 sm:px-10 lg:py-20">
            <div className="mb-10 flex items-start justify-between gap-4">
              <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d5a629]">Inspection request</p><h2 className="mt-3 text-2xl font-bold uppercase tracking-[-0.02em]">Map your exposure.</h2></div>
              <div className="border border-[#66531d] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#a99c6b]">EST. 2008</div>
            </div>

            {submitted ? (
              <div className="border border-[#d5a629] bg-[#292917] p-8" role="status"><Check className="mb-6 text-[#d5a629]" /><h3 className="text-2xl font-bold uppercase">Request received.</h3><p className="mt-3 max-w-md leading-7 text-[#b6b09c]">A perimeter specialist will contact you shortly to schedule your confidential site assessment.</p></div>
            ) : (
              <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#b6b09c]">Contact name<input className={fieldClass} name="name" placeholder="FULL NAME" required /></label>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#b6b09c]">Company / estate<input className={fieldClass} name="company" placeholder="ORGANIZATION" required /></label>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#b6b09c]">Work email<input className={fieldClass} name="email" type="email" placeholder="NAME@DOMAIN.COM" required /></label>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#b6b09c]">Direct phone<input className={fieldClass} name="phone" type="tel" placeholder="(000) 000-0000" required /></label>
                </div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#b6b09c]">Property address<input className={fieldClass} name="address" placeholder="STREET / CITY / STATE" required /></label>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#b6b09c]">Approx. acreage<select className={`${fieldClass} appearance-none`} name="acreage" defaultValue=""><option value="" disabled>SELECT RANGE</option><option>1–5 ACRES</option><option>6–25 ACRES</option><option>26–100 ACRES</option><option>100+ ACRES</option></select></label>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#b6b09c]">Primary concern<select className={`${fieldClass} appearance-none`} name="concern" defaultValue=""><option value="" disabled>SELECT THREAT</option><option>RODENTS</option><option>WILDLIFE</option><option>INSECTS</option><option>UNKNOWN ACTIVITY</option></select></label>
                </div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#b6b09c]">Tell us what you&apos;re seeing<textarea className={`${fieldClass} h-28 resize-none py-3`} name="details" placeholder="ACTIVITY, TIMELINE, ACCESS NOTES..." /></label>
                <div className="flex flex-col gap-4 border border-[#66531d] bg-[#191a16] p-4 sm:flex-row sm:items-center sm:justify-between"><p className="flex gap-3 text-xs leading-5 text-[#b6b09c]"><LockKeyhole className="mt-0.5 shrink-0 text-[#d5a629]" /> <span><strong className="text-[#e6d9ad]">Your information stays here.</strong><br />No information is shared externally. Ever.</span></p><ShieldCheck className="hidden text-[#d5a629] sm:block" aria-hidden="true" /></div>
                <button className="group flex h-14 items-center justify-between bg-[#d5a629] px-5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#1b1c16] transition hover:bg-[#f0c64c]" type="submit">Request confidential inspection <ArrowRight className="transition-transform group-hover:translate-x-1" /></button>
                <p className="text-center font-mono text-[10px] uppercase tracking-wider text-[#6f683f]">No obligation · No automated sales calls · 24-hour response window</p>
              </form>
            )}
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-[#4e421e] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6f683f] sm:flex-row sm:items-center sm:justify-between sm:px-10"><span>Serpent Perimeter Pest Defense</span><span>Protected by protocol / SPD-SECURE-01</span></footer>
      </div>
    </main>
  )
}

