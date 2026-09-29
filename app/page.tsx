const WHATSAPP_URL =
  "https://wa.me/5522996133301?text=Ol%C3%A1%20D%C3%A9bora!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

const base = "/debora studio/";

const fotos = [
  "Captura de tela 2026-09-29 122657.png",
  "Captura de tela 2026-09-29 122726.png",
  "Captura de tela 2026-09-29 122751.png",
  "Captura de tela 2026-09-29 122856.png",
  "Captura de tela 2026-09-29 123112.png",
  "Captura de tela 2026-09-29 123153.png",
  "Captura de tela 2026-09-29 123222.png",
  "Captura de tela 2026-09-29 125531.png",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand">
            <span className="brand-script">Débora</span>
            <span className="brand-subtitle">STUDIO BELLAS UNHAS</span>
          </a>

          <nav className="desktop-nav">
            <a href="#inicio">Início</a>
            <a href="#sobre">O Studio</a>
            <a href="#servicos">Serviços</a>
            <a href="#trabalhos">Trabalhos</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="header-button"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={`${base}video hero.mp4`} type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="eyebrow">STUDIO BELLAS UNHAS</span>

          <h1>
            Beleza em cada
            <span> detalhe.</span>
          </h1>

          <p>
            Especialista em unhas em gel, com cuidado, delicadeza
            e acabamento pensado para você.
          </p>

          <div className="hero-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Agendar meu horário
            </a>

            <a href="#trabalhos" className="secondary-button">
              Ver trabalhos
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>Especialista em Gel</span>
          <span>•</span>
          <span>Atendimento personalizado</span>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="about section">
        <div className="about-image">
          <img
            src={`${base}ceo-debora.png`}
            alt="Débora - Studio Bellas Unhas"
          />
        </div>

        <div className="about-content">
          <span className="section-label">SOBRE O STUDIO</span>

          <h2>
            Um espaço pensado para
            <em> valorizar você.</em>
          </h2>

          <p>
            Um espaço dedicado ao cuidado e à beleza das suas unhas,
            com atendimento personalizado e atenção em cada detalhe.
          </p>

          <p>
            O Studio Bellas Unhas é especializado em técnicas com gel,
            buscando unir beleza, delicadeza e um acabamento impecável.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Quero conhecer o studio →
          </a>
        </div>
      </section>

      {/* IDENTIDADE DO STUDIO */}
      <section className="identity section">
        <div className="identity-image">
          <img
            src={`${base}descricao.png`}
            alt="Identidade do Studio Bellas Unhas"
          />
        </div>

        <div className="identity-content">
          <span className="section-label">A ESSÊNCIA DO STUDIO</span>

          <h2>
            Beleza, cuidado e
            <em> personalidade.</em>
          </h2>

          <p>
            Cada detalhe faz parte da experiência. Do primeiro contato
            ao resultado final, o objetivo é proporcionar um atendimento
            cuidadoso, delicado e feito especialmente para você.
          </p>

          <div className="identity-line" />

          <span className="identity-caption">
            STUDIO BELLAS UNHAS
          </span>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="services section">
        <div className="section-heading">
          <span className="section-label">ESPECIALIDADES</span>

          <h2>
            Cuidado que começa
            <em> nos detalhes.</em>
          </h2>

          <p>
            Técnicas e acabamentos para deixar suas unhas ainda mais bonitas.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <span className="service-number">01</span>
            <h3>Banho de Gel</h3>
            <p>
              Acabamento sofisticado e cuidado especial para suas unhas.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">02</span>
            <h3>Fibra de Vidro</h3>
            <p>
              Alongamento com visual delicado e acabamento elegante.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">03</span>
            <h3>Unhas em Gel</h3>
            <p>
              Estrutura e acabamento pensados para o seu estilo.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">04</span>
            <h3>Nail Art</h3>
            <p>
              Detalhes personalizados para deixar suas unhas únicas.
            </p>
          </article>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="trabalhos" className="gallery section">
        <div className="section-heading">
          <span className="section-label">PORTFÓLIO</span>

          <h2>
            Alguns trabalhos
            <em> do studio.</em>
          </h2>

          <p>
            Inspire-se em alguns dos trabalhos realizados pela Débora.
          </p>
        </div>

        <div className="gallery-grid">
          {fotos.map((foto, index) => (
            <div className="gallery-item" key={foto}>
              <img
                src={`${base}${foto}`}
                alt={`Trabalho de unhas ${index + 1} - Studio Bellas Unhas`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* AGENDAMENTO */}
      <section id="contato" className="booking">
        <div className="booking-inner">
          <div className="booking-photo">
            <img
              src={`${base}whats.png`}
              alt="Débora - atendimento pelo WhatsApp"
            />
          </div>

          <div className="booking-content">
            <span className="section-label">SEU PRÓXIMO HORÁRIO</span>

            <h2>
              Pronta para cuidar
              <br />
              <em>das suas unhas?</em>
            </h2>

            <p>
              Entre em contato pelo WhatsApp e consulte os horários
              disponíveis.
            </p>

            <div className="whatsapp-contact">
              <span className="whatsapp-label">AGENDAMENTOS</span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-number"
              >
                (22) 99613-3301
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <span className="footer-brand">DÉBORA</span>
          <span className="footer-subtitle">STUDIO BELLAS UNHAS</span>
        </div>

        <p>© {new Date().getFullYear()} Studio Bellas Unhas.</p>

        <a
          href="https://www.instagram.com/studiobellasunhas_ro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </footer>
    </main>
  );
}

