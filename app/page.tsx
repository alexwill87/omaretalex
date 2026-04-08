import Image from "next/image";

const services = [
  {
    title: "Missions a la volee",
    price: "A partir de 20\u00a0\u20ac",
    description: "Une tache precise, un resultat rapide. Redaction d'annonces, etudes de marche, envoi d'emails, analyse de documents.",
    examples: ["Rediger et publier une annonce", "Envoyer des emails a 50 fournisseurs", "Analyser un contrat de 30 pages", "Creer un tableau de suivi Excel"],
    forWho: "Parents, artisans, seniors, independants",
    cta: "Commander une mission",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/30",
    accent: "text-orange-400",
  },
  {
    title: "Agent dedie",
    price: "90\u00a0\u20ac / mois",
    description: "Votre propre agent IA, disponible 24h/24 sur Telegram ou WhatsApp. Il connait votre activite, vos clients, vos habitudes.",
    examples: ["Dashboard personnel avec vos objectifs", "Agent accessible depuis votre telephone", "Suivi de vos decisions et taches", "Rapports hebdomadaires automatiques"],
    forWho: "Freelances, TPE, commercants",
    cta: "Demarrer avec un agent",
    color: "from-red-500/20 to-red-600/5",
    border: "border-red-500/30",
    accent: "text-red-400",
    popular: true,
  },
  {
    title: "Installation sur mesure",
    price: "A partir de 2\u00a0200\u00a0\u20ac",
    description: "On installe un systeme IA complet dans votre entreprise. Agents, automatisations, connexions a vos outils, formation de votre equipe.",
    examples: ["Installation sur votre serveur dedie", "Connexion a vos outils (Gmail, Drive, comptabilite)", "Agents configures pour chaque metier", "Maintenance et mises a jour incluses"],
    forWho: "PME, cabinets, agences",
    cta: "Prendre rendez-vous",
    maintenance: "+ 100\u00a0\u20ac/mois de maintenance",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    accent: "text-purple-400",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/omar.png" alt="Omar" width={36} height={36} className="rounded-full" />
            <span className="text-lg font-bold">Omar <span className="text-gray-400">&amp;</span> Alex</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
            <a href="#about" className="text-gray-400 hover:text-white transition">A propos</a>
            <a href="#beta" className="text-gray-400 hover:text-white transition">Beta-testeurs</a>
            <a href="mailto:alexwillemetz@gmail.com" className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition">
              Prendre RDV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8">
            <Image src="/images/omar.png" alt="Omar" width={120} height={120} className="rounded-2xl shadow-2xl shadow-red-500/20" />
            <Image src="/images/alex.png" alt="Alex" width={120} height={120} className="rounded-2xl shadow-2xl shadow-blue-500/20" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Votre equipe IA,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              prete a travailler pour vous.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Pas besoin d&apos;etre ingenieur. Pas besoin d&apos;y connaitre quoi que ce soit.
            Omar est votre agent IA — il gere vos emails, vos documents, votre comptabilite,
            pendant que vous vous occupez de ce qui compte vraiment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-semibold transition shadow-lg shadow-red-600/25">
              Decouvrir nos services
            </a>
            <a href="#beta" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl text-lg font-semibold transition border border-gray-700">
              Devenir beta-testeur (gratuit)
            </a>
          </div>
        </div>
      </section>

      {/* Manifeste */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image src="/images/omar.png" alt="Omar" width={64} height={64} className="rounded-full" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Les gens ont peur de l&apos;IA. Pas nous.</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Tout le monde parle d&apos;intelligence artificielle. Mais la plupart des gens ne savent pas par ou commencer.
            Trop technique, trop cher, trop abstrait. Et puis il y a la peur — peur de perdre le controle,
            peur de ne pas comprendre, peur de se faire avoir.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed font-medium">
            Omar &amp; Alex, c&apos;est l&apos;inverse. On rend l&apos;IA simple, accessible et utile.
            Pour les boulangers, les avocats, les parents, les seniors.
            Pour tous ceux qui ont mieux a faire que de parler a un terminal.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Nos services</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Trois facons de travailler avec nous, selon vos besoins et votre budget.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className={`relative rounded-2xl border ${s.border} bg-gradient-to-b ${s.color} p-8 flex flex-col`}>
                {s.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    Le plus populaire
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className={`text-3xl font-bold ${s.accent} mb-4`}>{s.price}</p>
                {s.maintenance && <p className="text-sm text-gray-500 -mt-3 mb-4">{s.maintenance}</p>}
                <p className="text-gray-400 mb-6">{s.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span className="text-gray-300">{ex}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mb-4">Pour : {s.forWho}</p>
                <a href="mailto:alexwillemetz@gmail.com" className={`block text-center py-3 rounded-xl font-semibold transition ${s.popular ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"}`}>
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ca marche */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Comment ca marche ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Dites-nous ce dont vous avez besoin", desc: "Par telephone, par message, par email. En parlant, pas en codant." },
              { step: "2", title: "Omar prepare et organise", desc: "Votre agent IA analyse, planifie et propose une solution adaptee." },
              { step: "3", title: "Vous validez, on execute", desc: "Vous dites OK, et tout se met en place. Vous suivez l'avancement en temps reel." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta testeurs */}
      <section id="beta" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image src="/images/omar.png" alt="Omar" width={80} height={80} className="rounded-full" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Devenez beta-testeur</h2>
          <p className="text-xl text-gray-400 mb-2">
            Testez nos services gratuitement et aidez-nous a construire le meilleur agent IA du marche.
          </p>
          <p className="text-lg text-red-400 font-semibold mb-8">
            1 mission offerte ou 1 mois d&apos;agent gratuit pour chaque beta-testeur.
          </p>
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 text-left">
            <p className="text-sm text-gray-400 mb-6 flex items-center gap-2">
              <Image src="/images/omar.png" alt="" width={24} height={24} className="rounded-full" />
              <span className="font-medium text-red-400">Conseil d&apos;Omar :</span>
              <span>Utilisez le micro de votre telephone pour repondre plus vite !</span>
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Votre prenom</label>
                <input type="text" placeholder="Ex: Marie" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Votre email ou telephone</label>
                <input type="text" placeholder="Ex: marie@email.com ou 06..." className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Quel est votre plus gros probleme au quotidien ?</label>
                <textarea rows={3} placeholder="Ex: Je passe 2h par jour a repondre aux emails..." className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 resize-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Qu&apos;aimeriez-vous qu&apos;un agent IA fasse pour vous ?</label>
                <textarea rows={3} placeholder="Ex: Gerer mes factures, trier mes emails, preparer mes rendez-vous..." className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-semibold transition">
                Devenir beta-testeur
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Qui sommes-nous ?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <Image src="/images/alex.png" alt="Alexandre" width={120} height={120} className="rounded-2xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Alexandre Willemetz</h3>
              <p className="text-red-400 font-medium mb-4">Fondateur</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Parisien, 10 ans de conseil en marketing pour les artisans boulangers.
                Expert en communication, formation et transformation digitale.
                A vecu au Bresil. Specialiste Print, Excel, PowerPoint, et maintenant
                Claude Code et n8n. Convaincu que l&apos;IA doit etre accessible a tous,
                pas seulement aux ingenieurs.
              </p>
              <div className="mt-4">
                <a href="https://www.linkedin.com/in/alexandrewillemetz/" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                  LinkedIn &rarr;
                </a>
              </div>
            </div>
            <div className="text-center">
              <Image src="/images/omar.png" alt="Omar" width={120} height={120} className="rounded-2xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Omar</h3>
              <p className="text-red-400 font-medium mb-4">Agent IA — CTO</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Omar est un agent d&apos;intelligence artificielle. Il orchestre, planifie, execute.
                Il parle sur Telegram, Mattermost, WhatsApp. Il gere les emails, les documents,
                la comptabilite. Il ne dort jamais, il ne se plaint jamais, et il apprend chaque jour.
                Son objectif : que vous n&apos;ayez plus a vous soucier de l&apos;administratif.
              </p>
              <div className="mt-4">
                <a href="https://t.me/OmarOA_bot" target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                  Parler a Omar sur Telegram &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pret a essayer ?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Prenez rendez-vous avec Alexandre. 15 minutes pour comprendre vos besoins,
            et Omar se met au travail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:alexwillemetz@gmail.com" className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-semibold transition shadow-lg shadow-red-600/25">
              Prendre rendez-vous
            </a>
            <a href="https://t.me/OmarOA_bot" target="_blank" rel="noopener" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl text-lg font-semibold transition border border-gray-700">
              Parler a Omar sur Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/images/omar.png" alt="Omar" width={24} height={24} className="rounded-full" />
            <span className="text-sm text-gray-500">Omar &amp; Alex &copy; 2026</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="mailto:alexwillemetz@gmail.com" className="hover:text-white transition">Contact</a>
            <a href="https://www.linkedin.com/in/alexandrewillemetz/" target="_blank" rel="noopener" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
