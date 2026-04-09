import Image from "next/image";

const services = [
  {
    title: "Missions a la volee",
    price: "A partir de 20\u00a0\u20ac",
    description: "Une tache precise, un resultat rapide. Redaction d'annonces, etudes de marche, envoi d'emails, analyse de documents.",
    examples: ["Rediger et publier une annonce", "Envoyer des emails a 50 fournisseurs", "Analyser un contrat de 30 pages", "Creer un tableau de suivi Excel"],
    forWho: "Parents, artisans, seniors, independants",
    cta: "Commander une mission",
    color: "bg-orange-50",
    border: "border-orange-200",
    accent: "text-orange-600",
    btnClass: "bg-orange-500 hover:bg-orange-600 text-white",
    icon: "🚀",
  },
  {
    title: "Agent dedie",
    price: "90\u00a0\u20ac / mois",
    description: "Votre propre agent IA, disponible 24h/24 sur Telegram ou WhatsApp. Il connait votre activite, vos clients, vos habitudes.",
    examples: ["Dashboard personnel avec vos objectifs", "Agent accessible depuis votre telephone", "Suivi de vos decisions et taches", "Rapports hebdomadaires automatiques"],
    forWho: "Freelances, TPE, commercants",
    cta: "Demarrer avec un agent",
    color: "bg-red-50",
    border: "border-red-200",
    accent: "text-red-600",
    btnClass: "bg-red-600 hover:bg-red-700 text-white",
    popular: true,
    icon: "🤖",
  },
  {
    title: "Installation sur mesure",
    price: "A partir de 2\u00a0200\u00a0\u20ac",
    description: "On installe un systeme IA complet dans votre entreprise. Agents, automatisations, connexions a vos outils, formation de votre equipe.",
    examples: ["Installation sur votre serveur dedie", "Connexion a vos outils (Gmail, Drive, comptabilite)", "Agents configures pour chaque metier", "Maintenance et mises a jour incluses"],
    forWho: "PME, cabinets, agences",
    cta: "Prendre rendez-vous",
    maintenance: "+ 100\u00a0\u20ac/mois de maintenance",
    color: "bg-purple-50",
    border: "border-purple-200",
    accent: "text-purple-600",
    btnClass: "bg-purple-600 hover:bg-purple-700 text-white",
    icon: "🏗️",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/omar.png" alt="Omar" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold text-gray-900">Omar <span className="text-gray-400">&amp;</span> Alex</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-gray-600 hover:text-red-600 transition font-medium">Services</a>
            <a href="#how" className="text-gray-600 hover:text-red-600 transition font-medium">Comment ca marche</a>
            <a href="#about" className="text-gray-600 hover:text-red-600 transition font-medium">A propos</a>
            <a href="#beta" className="text-gray-600 hover:text-red-600 transition font-medium">Beta</a>
            <a href="mailto:alexwillemetz@gmail.com" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition shadow-md shadow-red-600/20">
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-red-50/60 via-orange-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
                <span>🦞</span> L&apos;IA accessible a tous — enfin !
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
                Votre equipe IA,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                  prete a bosser.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pas besoin d&apos;etre ingenieur. Omar gere vos emails, vos documents,
                votre comptabilite — pendant que vous faites ce qui compte vraiment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg font-semibold transition shadow-lg shadow-red-600/25 text-center">
                  Decouvrir nos services
                </a>
                <a href="#beta" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 rounded-full text-lg font-semibold transition border-2 border-gray-200 text-center">
                  Devenir beta-testeur ✨
                </a>
              </div>
            </div>
            {/* Illustrations */}
            <div className="flex justify-center relative">
              <div className="relative">
                <Image src="/images/omar.png" alt="Omar" width={220} height={220} className="rounded-3xl drop-shadow-2xl relative z-10" />
                <Image src="/images/alex.png" alt="Alex" width={180} height={180} className="rounded-3xl drop-shadow-2xl absolute -right-16 -bottom-8 z-20 border-4 border-white" />
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-orange-200 rounded-full opacity-60 -z-10" />
                <div className="absolute -bottom-4 -right-24 w-20 h-20 bg-red-200 rounded-full opacity-50 -z-10" />
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-yellow-300 rounded-full opacity-70 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau confiance */}
      <section className="py-8 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center text-sm text-gray-500">
          <div className="flex items-center gap-2"><span className="text-2xl">🔒</span> Vos donnees restent chez vous</div>
          <div className="flex items-center gap-2"><span className="text-2xl">⚡</span> Reponse en moins de 24h</div>
          <div className="flex items-center gap-2"><span className="text-2xl">🇫🇷</span> Equipe 100% francaise</div>
          <div className="flex items-center gap-2"><span className="text-2xl">🎯</span> Satisfait ou rembourse</div>
        </div>
      </section>

      {/* Manifeste */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <Image src="/images/omar.png" alt="Omar" width={200} height={200} className="rounded-3xl drop-shadow-xl" />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
                Les gens ont peur de l&apos;IA.{" "}
                <span className="text-red-600">Pas nous.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Tout le monde parle d&apos;intelligence artificielle. Mais la plupart des gens
                ne savent pas par ou commencer. Trop technique, trop cher, trop abstrait.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                Omar &amp; Alex, c&apos;est l&apos;inverse. On rend l&apos;IA simple, accessible et utile.
                Pour les boulangers, les avocats, les parents, les seniors.
                Pour <span className="text-red-600 font-bold">tous ceux qui ont mieux a faire que de parler a un terminal.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Nos services</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Trois facons de travailler avec nous, selon vos besoins et votre budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className={`relative rounded-3xl border-2 ${s.border} ${s.color} p-8 flex flex-col transition-transform hover:scale-[1.02] hover:shadow-xl`}>
                {s.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-red-600 text-white text-xs font-bold rounded-full shadow-md">
                    ⭐ Le plus populaire
                  </span>
                )}
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{s.title}</h3>
                <p className={`text-3xl font-extrabold ${s.accent} mb-1`}>{s.price}</p>
                {s.maintenance && <p className="text-sm text-gray-400 mb-4">{s.maintenance}</p>}
                {!s.maintenance && <div className="mb-4" />}
                <p className="text-gray-600 mb-6">{s.description}</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {s.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5 font-bold">✓</span>
                      <span className="text-gray-700">{ex}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mb-4 font-medium">Pour : {s.forWho}</p>
                <a href="mailto:alexwillemetz@gmail.com" className={`block text-center py-3.5 rounded-full font-semibold transition shadow-md ${s.btnClass}`}>
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ca marche */}
      <section id="how" className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Comment ca marche ?</h2>
            <p className="text-lg text-gray-500">Aussi simple que de passer un coup de fil.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "1", title: "Dites-nous ce dont vous avez besoin", desc: "Par telephone, par message, par email. En parlant, pas en codant.", illustration: "/images/alex.png", color: "bg-orange-100 text-orange-700" },
              { step: "2", title: "Omar prepare et organise", desc: "Votre agent IA analyse, planifie et propose une solution adaptee.", illustration: "/images/omar.png", color: "bg-red-100 text-red-700" },
              { step: "3", title: "Vous validez, on execute", desc: "Vous dites OK, et tout se met en place. Suivez l'avancement en temps reel.", illustration: "/images/omar-alex-team.png", color: "bg-green-100 text-green-700" },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition">
                <div className="flex justify-center mb-4">
                  <Image src={s.illustration} alt={s.title} width={100} height={100} className="rounded-2xl" />
                </div>
                <div className={`inline-flex w-10 h-10 rounded-full ${s.color} items-center justify-center text-xl font-bold mb-4`}>
                  {s.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Omar en action — illustration */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image src="/images/omar-work.png" alt="Omar au travail" width={400} height={400} className="rounded-3xl drop-shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Omar travaille pendant que vous dormez 💤
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "📧", text: "Il trie vos emails et repond aux plus urgents" },
                  { icon: "📊", text: "Il prepare vos rapports et tableaux de bord" },
                  { icon: "📅", text: "Il organise votre agenda et vos rendez-vous" },
                  { icon: "💰", text: "Il suit vos factures et relance les impayees" },
                  { icon: "📝", text: "Il redige vos courriers, annonces et documents" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temoignages / social proof placeholder */}
      <section className="py-16 px-6 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Marie L.", role: "Boulangere a Paris", quote: "Omar m'a fait gagner 2h par jour sur la gestion de mes fournisseurs. Je ne savais meme pas que c'etait possible.", avatar: "🧁" },
              { name: "Pierre D.", role: "Avocat independant", quote: "Enfin un service IA qui parle francais et qui comprend mes besoins sans jargon technique.", avatar: "⚖️" },
              { name: "Sophie R.", role: "Mere de famille", quote: "J'ai demande a Omar de m'aider pour mes impots. 30 minutes au lieu de 2 jours. Incroyable.", avatar: "👩‍👧" },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 text-left shadow-sm border border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{t.avatar}</span>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta testeurs */}
      <section id="beta" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <Image src="/images/omar.png" alt="Omar" width={80} height={80} className="rounded-full drop-shadow-lg" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Devenez beta-testeur</h2>
            <p className="text-xl text-gray-500 mb-2">
              Testez nos services gratuitement et aidez-nous a construire le meilleur agent IA.
            </p>
            <p className="text-lg text-red-600 font-bold">
              🎁 1 mission offerte ou 1 mois d&apos;agent gratuit !
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border-2 border-red-100 p-8">
            <p className="text-sm text-gray-500 mb-6 flex items-center gap-2 bg-white rounded-full px-4 py-2 w-fit">
              <Image src="/images/omar.png" alt="" width={24} height={24} className="rounded-full" />
              <span className="font-semibold text-red-600">Conseil d&apos;Omar :</span>
              <span>Utilisez le micro de votre telephone pour repondre plus vite !</span>
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1 font-medium">Votre prenom</label>
                <input type="text" placeholder="Ex: Marie" className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 font-medium">Votre email ou telephone</label>
                <input type="text" placeholder="Ex: marie@email.com ou 06..." className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 font-medium">Quel est votre plus gros probleme au quotidien ?</label>
                <textarea rows={3} placeholder="Ex: Je passe 2h par jour a repondre aux emails..." className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition resize-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1 font-medium">Qu&apos;aimeriez-vous qu&apos;un agent IA fasse pour vous ?</label>
                <textarea rows={3} placeholder="Ex: Gerer mes factures, trier mes emails, preparer mes rendez-vous..." className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 transition resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg font-bold transition shadow-lg shadow-red-600/20">
                🦞 Devenir beta-testeur
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">Qui sommes-nous ?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition">
              <Image src="/images/alex.png" alt="Alexandre" width={140} height={140} className="rounded-3xl mx-auto mb-6 drop-shadow-lg" />
              <h3 className="text-2xl font-bold mb-1 text-gray-900">Alexandre Willemetz</h3>
              <p className="text-red-600 font-semibold mb-4">Fondateur</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Parisien, 10 ans de conseil en marketing pour les artisans boulangers.
                Expert en communication, formation et transformation digitale.
                A vecu au Bresil. Specialiste Print, Excel, PowerPoint, et maintenant
                Claude Code et n8n. Convaincu que l&apos;IA doit etre accessible a tous,
                pas seulement aux ingenieurs.
              </p>
              <div className="mt-6">
                <a href="https://www.linkedin.com/in/alexandrewillemetz/" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-100 transition">
                  LinkedIn →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition">
              <Image src="/images/omar.png" alt="Omar" width={140} height={140} className="rounded-3xl mx-auto mb-6 drop-shadow-lg" />
              <h3 className="text-2xl font-bold mb-1 text-gray-900">Omar</h3>
              <p className="text-red-600 font-semibold mb-4">Agent IA — CTO</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Omar est un agent d&apos;intelligence artificielle. Il orchestre, planifie, execute.
                Il parle sur Telegram, Mattermost, WhatsApp. Il gere les emails, les documents,
                la comptabilite. Il ne dort jamais, il ne se plaint jamais, et il apprend chaque jour.
                Son objectif : que vous n&apos;ayez plus a vous soucier de l&apos;administratif.
              </p>
              <div className="mt-6">
                <a href="https://t.me/OmarOA_bot" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold hover:bg-red-100 transition">
                  🦞 Parler a Omar sur Telegram →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-8">
            <Image src="/images/omar.png" alt="Omar" width={80} height={80} className="rounded-2xl border-4 border-white/30 drop-shadow-lg" />
            <Image src="/images/alex.png" alt="Alex" width={80} height={80} className="rounded-2xl border-4 border-white/30 drop-shadow-lg" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Pret a essayer ?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Prenez rendez-vous avec Alexandre. 15 minutes pour comprendre vos besoins,
            et Omar se met au travail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:alexwillemetz@gmail.com" className="px-8 py-4 bg-white text-red-600 hover:bg-gray-50 rounded-full text-lg font-bold transition shadow-xl text-center">
              Prendre rendez-vous
            </a>
            <a href="https://t.me/OmarOA_bot" target="_blank" rel="noopener" className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full text-lg font-bold transition border-2 border-white/30 text-center">
              Parler a Omar sur Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/images/omar.png" alt="Omar" width={32} height={32} className="rounded-full" />
            <span className="text-sm font-medium">Omar &amp; Alex &copy; 2026 — Votre equipe IA</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="mailto:alexwillemetz@gmail.com" className="text-gray-400 hover:text-white transition">Contact</a>
            <a href="https://www.linkedin.com/in/alexandrewillemetz/" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="https://t.me/OmarOA_bot" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
