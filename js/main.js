(function () {
  "use strict";

  var D = window.EVOLUTION;
  var C = D.config;
  var body = document.body;
  var BASE = body.dataset.base || "";

  var ICONS = {
    estetoscopio: '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
    raiox: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M12 6v12"/><path d="M8.5 9h7"/><path d="M8 12h8"/><path d="M8.5 15h7"/>',
    capacete: '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 6 6v3"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><rect x="2" y="15" width="20" height="4" rx="1"/>',
    seringa: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',
    bebe: '<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>',
    capsula: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
    pulso: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    mao: '<path d="M18 11V6a2 2 0 0 0-4 0"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    tesoura: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
    predio: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
    jaleco: '<path d="M8 3 4 5v16h16V5l-4-2"/><path d="m8 3 4 6 4-6"/><path d="M12 9v12"/><path d="M15 14h2"/>',
    fita: '<path d="M12 3c-2 0-3.5 1.6-3.5 3.6 0 2.4 1.7 5 3.5 7.4 1.8-2.4 3.5-5 3.5-7.4C15.5 4.6 14 3 12 3Z"/><path d="m9.7 11.5-4.2 9.5 3-1 1.5 2.5 3-7.5"/><path d="m14.3 11.5 4.2 9.5-3 1-1.5 2.5-3-7.5"/>',
    maos: '<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',
    relogio: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    calendario: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    telefone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    seta: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    certificado: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>'
  };
  var WA = '<path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41Z"/>';

  function icon(name, attrs) {
    if (name === "whatsapp") return '<svg viewBox="0 0 24 24" aria-hidden="true"' + (attrs || "") + ">" + WA + "</svg>";
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (attrs || "") + ">" + (ICONS[name] || "") + "</svg>";
  }

  var LEAF = "M100 114C48 96 50 22 100 4c50 18 52 92 0 110Z";
  var PETALS = [["p1", 0, "#7CCB8F"], ["p2", 90, "#22A39A"], ["p3", 180, "#1E4FA3"], ["p4", 270, "#3FA7D6"]];
  function mark(cls) {
    return '<svg class="mark ' + (cls || "") + '" viewBox="-6 -6 212 212" aria-hidden="true">' +
      PETALS.map(function (p) {
        return '<g transform="rotate(' + p[1] + ' 100 100)"><path class="petal ' + p[0] + '" d="' + LEAF + '" fill="' + p[2] + '" fill-opacity=".92"/></g>';
      }).join("") + "</svg>";
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function waLink(curso) {
    var msg = curso ? "Olá! Vim pelo site e quero saber sobre o curso de " + curso + "." : "Olá! Vim pelo site e quero saber mais sobre os cursos da Evolution.";
    return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg);
  }
  function tel() { return "tel:+55" + C.telefone.replace(/\D/g, ""); }
  function cursoUrl(c) { return BASE + "cursos/" + c.slug + ".html"; }
  function img(src) { return /^(https?:|\/|data:)/.test(src) ? src : BASE + src; }
  function cursoPorSlug(slug) { return D.cursos.filter(function (c) { return c.slug === slug; })[0]; }
  function duracao(c) { return c.cargaHoraria && c.cargaHoraria !== c.duracao ? c.duracao + ", " + c.cargaHoraria : c.duracao; }
  function $(s, ctx) { return (ctx || document).querySelector(s); }
  function $$(s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); }

  var TIPOS = { tecnico: "Curso técnico", livre: "Curso livre", especializacao: "Especialização" };
  var STATUS = { aberta: "Turma aberta", "em-breve": "Em breve" };

  function renderChrome() {
    var home = BASE + "index.html";
    var isHome = body.dataset.page === "home";
    var links = [["Cursos", "#cursos"], ["Na prática", "#pratica"], ["Sobre", "#sobre"], ["Depoimentos", "#depoimentos"], ["Contato", "#contato"]]
      .filter(function (l) { return l[1] !== "#depoimentos" || D.depoimentos.length; });
    var nav = links.map(function (l) { return '<a href="' + (isHome ? "" : home) + l[1] + '">' + l[0] + "</a>"; }).join("");

    var promo = "";
    if (D.promocao && D.promocao.ativa) {
      var pc = cursoPorSlug(D.promocao.curso);
      promo = '<div class="promo-bar"><div class="wrap"><strong>' + esc(D.promocao.texto) + "</strong><span>" + esc(D.promocao.detalhe || "") + "</span>" +
        (pc ? '<a href="' + cursoUrl(pc) + '">Ver o curso</a>' : "") + "</div></div>";
    }

    $("#site-header").outerHTML = promo +
      '<header class="site-header"><div class="wrap">' +
      '<a class="logo" href="' + home + '" aria-label="Página inicial"><img src="' + BASE + 'assets/logo.jpg" alt="Evolution Escola Técnica" width="100" height="100"></a>' +
      '<nav class="nav" aria-label="Principal">' + nav + "</nav>" +
      '<a class="btn btn-go btn-sm header-cta" href="' + waLink() + '" target="_blank" rel="noopener">' + icon("whatsapp") + "Quero me matricular</a>" +
      '<button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">' + icon("menu") + "</button>" +
      "</div></header>" +
      '<div class="mobile-nav" aria-hidden="true"><button class="close" aria-label="Fechar menu">' + icon("x", ' width="22" height="22"') + "</button>" + nav +
      '<a class="btn btn-go btn-block" href="' + waLink() + '" target="_blank" rel="noopener">' + icon("whatsapp") + "Quero me matricular</a></div>";

    function li(c) { return '<li><a href="' + cursoUrl(c) + '">' + esc(c.nome) + "</a></li>"; }
    var atual = body.dataset.curso ? cursoPorSlug(body.dataset.curso) : null;

    $("#site-footer").outerHTML =
      '<footer class="site-footer"><div class="wrap"><div class="footer-grid">' +
      '<div class="footer-brand"><a class="footer-logo" href="' + home + '"><img src="' + BASE + 'assets/logo.jpg" alt="Evolution Escola Técnica"></a>' +
      "<p>Ensino técnico e profissionalizante em Camocim desde " + C.desde + ".</p>" +
      '<div class="tagline">#VemSerEvolution</div></div>' +
      "<div><h4>Cursos técnicos</h4><ul>" + D.cursos.filter(function (c) { return c.tipo === "tecnico"; }).map(li).join("") + "</ul></div>" +
      "<div><h4>Cursos livres</h4><ul>" + D.cursos.filter(function (c) { return c.tipo !== "tecnico"; }).map(li).join("") + "</ul></div>" +
      "<div><h4>Contato</h4><ul>" +
      '<li><a href="' + waLink() + '" target="_blank" rel="noopener">WhatsApp ' + esc(C.whatsappExibicao) + "</a></li>" +
      '<li><a href="' + tel() + '">' + esc(C.telefone) + "</a></li>" +
      '<li><a href="https://instagram.com/' + C.instagram + '" target="_blank" rel="noopener">@' + esc(C.instagram) + "</a></li>" +
      (C.email ? '<li><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + "</a></li>" : "") +
      "<li>" + esc(C.endereco) + "</li></ul></div></div>" +
      '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " " + esc(C.nome) + "</span>" +
      '<span>Desenvolvido por <a href="#">AndersonDev</a></span></div></div></footer>' +
      '<a class="wa-float" href="' + waLink(atual ? atual.nome : "") + '" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">' + icon("whatsapp") + "</a>";

    var mnav = $(".mobile-nav"), tgl = $(".menu-toggle");
    function setMenu(open) {
      mnav.classList.toggle("open", open);
      mnav.setAttribute("aria-hidden", String(!open));
      tgl.setAttribute("aria-expanded", String(open));
      body.style.overflow = open ? "hidden" : "";
    }
    tgl.addEventListener("click", function () { setMenu(true); });
    $(".close", mnav).addEventListener("click", function () { setMenu(false); });
    $$("a", mnav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && mnav.classList.contains("open")) setMenu(false); });

    var hdr = $(".site-header");
    function onScroll() { hdr.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function courseRow(c) {
    var preco = c.preco ? "<small>a partir de</small><strong>" + esc(c.preco) + "</strong>" : "<small>valores</small><strong>Sob consulta</strong>";
    return '<li class="course-row" data-tipo="' + c.tipo + '"><a class="row-link" href="' + cursoUrl(c) + '">' +
      '<span class="leaf-ic">' + icon(c.icone) + "</span>" +
      '<div><div class="row-name"><h3>' + esc(c.nome) + '</h3><span class="row-kind">' + TIPOS[c.tipo] + "</span>" +
      '<span class="status ' + c.status + '">' + STATUS[c.status] + "</span>" +
      (c.promocao ? '<span class="promo-chip">' + esc(c.promocao) + "</span>" : "") + "</div>" +
      '<p class="row-desc">' + esc(c.resumo) + "</p></div>" +
      '<div class="row-meta">' +
      "<span>" + icon("relogio") + esc(duracao(c) === "Consulte" ? "Duração sob consulta" : duracao(c)) + "</span>" +
      "<span>" + icon("calendario") + esc(c.turmas.join(" ou ")) + "</span>" +
      (c.preco ? '<span class="m-price">' + icon("certificado") + "<span>a partir de <strong>" + esc(c.preco) + "</strong></span></span>" : "") +
      "</div>" +
      '<div class="row-price">' + preco + "</div>" +
      '<span class="row-go" aria-hidden="true">' + icon("seta") + "</span>" +
      "</a></li>";
  }

  function renderHome() {
    $("#hero-art").innerHTML = mark("animate") + (D.imagens.hero ? '<div class="hero-photo"><img src="' + img(D.imagens.hero) + '" alt="Aluna da Evolution em aula prática"></div>' : "");

    $("#f-formados").textContent = C.formados.toLocaleString("pt-BR");
    $("#f-cursos").textContent = D.cursos.length;
    $$("[data-petals]").forEach(function (el) { el.outerHTML = mark("petals-bg " + (el.dataset.petals === "dark" ? "on-dark" : "")); });

    var list = $("#catalog");
    list.innerHTML = D.cursos.map(courseRow).join("");
    var counts = { todos: D.cursos.length };
    D.cursos.forEach(function (c) { counts[c.tipo] = (counts[c.tipo] || 0) + 1; });
    $$(".filter").forEach(function (b) {
      var n = counts[b.dataset.filter] || 0;
      if (!n) { b.remove(); return; }
      b.insertAdjacentHTML("beforeend", '<span class="count">' + n + "</span>");
      b.addEventListener("click", function () {
        $$(".filter").forEach(function (x) { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
        b.classList.add("active"); b.setAttribute("aria-pressed", "true");
        $$(".course-row", list).forEach(function (r) {
          r.classList.toggle("hidden", b.dataset.filter !== "todos" && r.dataset.tipo !== b.dataset.filter);
        });
      });
    });

    if (D.promocao && D.promocao.ativa) {
      var pc = cursoPorSlug(D.promocao.curso);
      $("#promo-title").textContent = D.promocao.texto;
      $("#promo-text").textContent = D.promocao.detalhe || "";
      $("#promo-btn").href = waLink(pc ? pc.nome : "");
    } else {
      $("#promo").remove();
    }

    var gal = $("#gallery");
    gal.innerHTML = D.galeria.map(function (g, i) {
      return '<button type="button" class="tile' + (g.imagem ? " has-img" : "") + '" data-i="' + i + '" aria-label="Ampliar: ' + esc(g.titulo) + '">' +
        (g.imagem ? '<img src="' + img(g.imagem) + '" alt="' + esc(g.titulo) + '" loading="lazy">' : icon(g.icone || "camera", ' class="tile-ic"')) +
        '<span class="cap">' + esc(g.titulo) + "</span></button>";
    }).join("");
    lightbox(gal, D.galeria);

    if (D.imagens.sobre) $("#about-frame").innerHTML = '<img src="' + img(D.imagens.sobre) + '" alt="Estrutura da Evolution Escola Técnica" loading="lazy">';
    else { $(".about-art").remove(); $(".about").classList.add("no-art"); }

    $("#teachers").innerHTML = D.professores.map(function (p) {
      return '<div class="teacher"><div class="avatar">' + (p.foto ? '<img src="' + img(p.foto) + '" alt="' + esc(p.nome) + '" loading="lazy">' : esc(p.nome.charAt(0))) + "</div>" +
        "<div><h3>" + esc(p.nome) + "</h3><p>" + esc(p.area || "Professor") + "</p></div></div>";
    }).join("");

    if (!D.depoimentos.length) $("#depoimentos").remove();
    else $("#testimonials").innerHTML = D.depoimentos.map(function (t) {
      return '<figure class="testimonial"><blockquote>' + esc(t.texto) + "</blockquote><figcaption><strong>" + esc(t.nome) + "</strong><span>" + esc(t.curso) + "</span></figcaption></figure>";
    }).join("");

    $("#faq").innerHTML = D.faq.map(function (f) {
      return "<details><summary>" + esc(f.p) + '<span class="pm" aria-hidden="true"></span></summary><p>' + esc(f.r) + "</p></details>";
    }).join("");

    $("#contact-list").innerHTML =
      '<li><a href="' + waLink() + '" target="_blank" rel="noopener"><span class="ic wa">' + icon("whatsapp") + "</span><span><small>WhatsApp</small><strong>" + esc(C.whatsappExibicao) + "</strong></span></a></li>" +
      '<li><a href="' + tel() + '"><span class="ic">' + icon("telefone") + "</span><span><small>Telefone</small><strong>" + esc(C.telefone) + "</strong></span></a></li>" +
      '<li><a href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(C.mapaBusca) + '" target="_blank" rel="noopener"><span class="ic">' + icon("pin") + "</span><span><small>Endereço</small><strong>" + esc(C.endereco) + '</strong><span class="ref">' + esc(C.enderecoRef) + "</span></span></a></li>" +
      '<li><a href="https://instagram.com/' + C.instagram + '" target="_blank" rel="noopener"><span class="ic">' + icon("instagram") + "</span><span><small>Instagram</small><strong>@" + esc(C.instagram) + "</strong></span></a></li>" +
      (C.horario ? '<li><div class="item"><span class="ic">' + icon("relogio") + "</span><span><small>Atendimento</small><strong>" + esc(C.horario) + "</strong></span></div></li>" : "");

    var map = $("#map");
    function loadMap() {
      map.innerHTML = '<iframe title="Mapa: ' + esc(C.endereco) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=' + encodeURIComponent(C.mapaBusca) + '&z=17&output=embed"></iframe>';
    }
    if ("IntersectionObserver" in window) {
      var mo = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { loadMap(); mo.disconnect(); } }, { rootMargin: "400px" });
      mo.observe(map);
    } else loadMap();

    $$("[data-wa]").forEach(function (a) { a.href = waLink(a.dataset.wa); });
  }

  function lightbox(container, items) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.innerHTML = '<button class="lb-btn lb-close" aria-label="Fechar">×</button><button class="lb-btn lb-prev" aria-label="Anterior">‹</button>' +
      '<div class="lightbox-inner"><div class="lb-media"></div><div class="lightbox-cap"></div></div><button class="lb-btn lb-next" aria-label="Próxima">›</button>';
    body.appendChild(lb);
    var cur = 0, opener = null;
    function show(i) {
      cur = (i + items.length) % items.length;
      var g = items[cur];
      $(".lb-media", lb).innerHTML = g.imagem ? '<img src="' + img(g.imagem) + '" alt="' + esc(g.titulo) + '">' : '<div class="lb-empty">' + icon(g.icone || "camera") + "</div>";
      $(".lightbox-cap", lb).textContent = g.titulo;
    }
    function close() { lb.classList.remove("open"); body.style.overflow = ""; if (opener) opener.focus(); }
    container.addEventListener("click", function (e) {
      var b = e.target.closest("[data-i]");
      if (!b) return;
      opener = b; show(+b.dataset.i); lb.classList.add("open"); body.style.overflow = "hidden"; $(".lb-close", lb).focus();
    });
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-prev", lb).addEventListener("click", function () { show(cur - 1); });
    $(".lb-next", lb).addEventListener("click", function () { show(cur + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });
  }

  function renderCurso() {
    var c = cursoPorSlug(body.dataset.curso);
    var main = $("#curso");
    if (!c) { main.innerHTML = '<div class="wrap section"><h2>Curso não encontrado</h2><p><a class="btn btn-navy" href="' + BASE + 'index.html#cursos">Ver todos os cursos</a></p></div>'; return; }
    body.classList.add("has-mobile-enroll");

    function block(title, html) { return html ? '<section class="block"><h2>' + title + "</h2>" + html + "</section>" : ""; }
    var ask = duracao(c) === "Consulte";

    var ficha = [
      ["Duração", ask ? "Sob consulta" : duracao(c)],
      ["Turmas", c.turmas.join("; ")],
      ["Estágio e prática", c.estagio],
      ["Pré-requisitos", c.preRequisitos]
    ].filter(function (x) { return x[1]; });

    var outros = D.cursos.filter(function (x) { return x.slug !== c.slug && x.tipo === c.tipo; })
      .concat(D.cursos.filter(function (x) { return x.slug !== c.slug && x.tipo !== c.tipo; })).slice(0, 4);

    var price = c.preco
      ? "<small>a partir de</small><strong>" + esc(c.preco) + "</strong>" + (c.precoDetalhe ? '<span class="det">' + esc(c.precoDetalhe) + "</span>" : "")
      : '<small>Valores</small><strong class="ask">Sob consulta</strong><span class="det">Pergunte pela condição do mês no WhatsApp</span>';

    main.innerHTML =
      '<section class="course-hero"><div class="wrap">' +
      '<nav class="crumbs" aria-label="Você está em"><a href="' + BASE + 'index.html">Início</a> / <a href="' + BASE + 'index.html#cursos">Cursos</a> / ' + esc(c.nome) + "</nav>" +
      '<div class="text"><div class="tags"><span class="kind">' + TIPOS[c.tipo] + '</span><span class="status ' + c.status + '">' + STATUS[c.status] + "</span>" +
      (c.promocao ? '<span class="promo-chip">' + esc(c.promocao) + "</span>" : "") + "</div>" +
      "<h1>" + esc(c.nome) + "</h1>" +
      '<p class="lead">' + esc(c.frase) + "</p>" +
      '<div class="hero-actions"><a class="btn btn-go" href="' + waLink(c.nome) + '" target="_blank" rel="noopener">' + icon("whatsapp") + "Quero me matricular</a>" +
      '<a class="btn btn-line" href="#detalhes">Ver detalhes</a></div></div>' +
      '<div class="big-ic">' + icon(c.icone) + "</div>" +
      "</div></section>" +

      '<div class="wrap course-body" id="detalhes"><div>' +
      '<ul class="perks">' + c.destaques.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>" +
      block("O que faz o profissional", "<p>" + esc(c.oQueFaz) + "</p>") +
      block("Onde pode trabalhar", c.ondeTrabalha && c.ondeTrabalha.length ? '<ul class="places">' + c.ondeTrabalha.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
      block("O que você vai estudar", c.modulos && c.modulos.length ? '<ul class="modules">' + c.modulos.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + "</ul>" : "") +
      block("Como funciona", '<dl class="facts-table">' + ficha.map(function (x) { return "<div><dt>" + x[0] + "</dt><dd>" + esc(x[1]) + "</dd></div>"; }).join("") + "</dl>") +
      "</div>" +

      '<aside class="enroll"><div class="price">' + price + "</div>" +
      (c.promocao ? '<p class="deal">' + esc(c.promocao) + "</p>" : "") +
      "<ul>" +
      "<li>" + icon("relogio") + "<span>" + esc(ask ? "Duração sob consulta" : duracao(c)) + "</span></li>" +
      "<li>" + icon("calendario") + "<span>" + esc(c.turmas.join(" ou ")) + "</span></li>" +
      "<li>" + icon("pin") + "<span>" + esc(C.endereco) + "</span></li>" +
      "<li>" + icon("certificado") + "<span>Certificado ao concluir</span></li>" +
      "</ul>" +
      '<a class="btn btn-go btn-block" href="' + waLink(c.nome) + '" target="_blank" rel="noopener">' + icon("whatsapp") + "Garantir minha vaga</a>" +
      '<a class="btn btn-line btn-block" href="' + tel() + '">' + icon("telefone") + "Ligar para a escola</a>" +
      "</aside></div>" +

      '<section class="section ice"><div class="wrap"><div class="head"><h2>Outros cursos</h2></div>' +
      '<ul class="catalog">' + outros.map(courseRow).join("") + "</ul></div></section>" +

      '<section class="section"><div class="wrap"><div class="closing">' + mark("petals-bg on-dark") +
      "<h2>Não perca tempo adiando o seu futuro.</h2><p>Fale com a gente e garanta sua vaga em " + esc(c.nome) + ".</p>" +
      '<div class="hero-actions"><a class="btn btn-go" href="' + waLink(c.nome) + '" target="_blank" rel="noopener">' + icon("whatsapp") + "Falar no WhatsApp</a></div></div></div></section>" +

      '<div class="mobile-enroll"><div>' + (c.preco ? "<small>a partir de</small><strong>" + esc(c.preco) + "</strong>" : "<small>" + TIPOS[c.tipo] + "</small><strong>" + STATUS[c.status] + "</strong>") + "</div>" +
      '<a class="btn btn-go btn-sm" href="' + waLink(c.nome) + '" target="_blank" rel="noopener">' + icon("whatsapp") + "Quero me matricular</a></div>";
  }

  renderChrome();
  if (body.dataset.page === "home") renderHome();
  if (body.dataset.page === "curso") renderCurso();
})();
