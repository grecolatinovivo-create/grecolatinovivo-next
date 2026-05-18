# UX_SPEC — Centro Nazionale di Studi Classici «GrecoLatinoVivo»
## Specifiche di Design e Esperienza Utente

**Versione documento:** 1.0  
**Data:** 18 maggio 2026  
**Riferimento:** Decisioni del Council, `styles/globals.css`, componenti React esistenti

---

## 1. Principi di Design

Il sito del Centro Nazionale di Studi Classici «GrecoLatinoVivo» è un sito **istituzionale di alta qualità accademica**. Le scelte visive comunicano rigore, autorevolezza e serietà culturale, non intrattenimento o commercio di massa.

Quattro principi guidano ogni decisione:

1. **Istituzionalità.** Il design riflette la natura accademica del Centro: un ente accreditato MIM con 10 anni di storia. Nessuna estetizzazione pop, nessun linguaggio da startup.
2. **Leggibilità prima di tutto.** I testi sono la sostanza del sito. La tipografia, i contrasti e le spaziature sono calibrati per la lettura prolungata.
3. **Coerenza con il portale.** Il sito principale e `portale.grecolatinovivo.it` condividono font, colori e pattern di interazione. L'utente non deve percepire discontinuità.
4. **Accessibilità WCAG 2.1 AA.** Tutti i rapporti di contrasto colore devono rispettare il requisito minimo di 4.5:1 per il testo normale.

---

## 2. Palette Colori

### Colori primari

| Token | Hex | Uso |
|---|---|---|
| `--color-navy` | `#1B3A6B` | Colore primario istituzionale. Sfondi hero, pulsanti primari, accenti. |
| `--color-navy-dark` | `#122B52` | Variante scura del navy per hero homepage e hover su elementi navy. |
| `--color-navy-light` | `#2A5298` | Variante chiara per stati hover su sfondo chiaro. |

### Colori di sfondo

| Token | Hex | Uso |
|---|---|---|
| `--color-bg-white` | `#FFFFFF` | Sfondo principale della pagina. |
| `--color-bg-alt` | `#F4F6F8` | Sfondo sezioni alternate (ogni seconda sezione). |
| `--color-bg-dark` | `#1A1A1A` | Footer, header/navbar, sezioni hero su pagine interne. |

### Colore gold (uso vincolato)

| Token | Hex | Uso consentito | Uso vietato |
|---|---|---|---|
| `--color-gold` | `#C9A84C` | Logo ΓΛ su sfondo scuro, citazioni blockquote su sfondo scuro, numeri statistici su sfondo scuro, underline decorativo titoli su sfondo scuro, link hover nel footer. | Mai come colore di testo su sfondo bianco o chiaro. Mai come sfondo. |

### Colori semantici

| Token | Hex | Uso |
|---|---|---|
| `--color-text-primary` | `#1A1A1A` | Testo principale su sfondo bianco/chiaro. |
| `--color-text-secondary` | `#3A3A3A` | Corpo testo, descrizioni. |
| `--color-text-muted` | `#6B6B6B` | Testo secondario, note, metadati. |
| `--color-text-light` | `rgba(255,255,255,0.85)` | Testo su sfondi scuri (navbar, footer, hero). |
| `--color-text-faded` | `rgba(255,255,255,0.55)` | Testo secondario su sfondo scuro. |
| `--color-border` | `#E8E0D0` | Bordi card, divisori, mega-menu. |
| `--color-error` | `#C0392B` | Messaggi di errore form. |
| `--color-success` | `#27AE60` | Conferme, stati completati. |

### Rapporti di contrasto WCAG 2.1

| Coppia | Rapporto | Livello |
|---|---|---|
| `#1A1A1A` su `#FFFFFF` | 19.1:1 | AAA |
| `#3A3A3A` su `#FFFFFF` | 10.7:1 | AAA |
| `#6B6B6B` su `#FFFFFF` | 5.7:1 | AA |
| `#6B6B6B` su `#F4F6F8` | 5.4:1 | AA |
| `#FFFFFF` su `#1B3A6B` | 8.2:1 | AAA |
| `#FFFFFF` su `#1A1A1A` | 19.1:1 | AAA |
| `#C9A84C` su `#1A1A1A` | 7.4:1 | AAA |
| `#C9A84C` su `#1B3A6B` | 3.9:1 | AA (solo large text >= 18px) |

**Regola:** `#C9A84C` non deve mai essere usato come testo su sfondo bianco (`#FFFFFF`) — il rapporto è 2.5:1, insufficiente per WCAG AA.

---

## 3. Tipografia

### Font

Il progetto usa `next/font` (non Google Fonts CDN) per conformità GDPR e performance.

| Font | Categoria | Uso |
|---|---|---|
| Playfair Display | Serif (Google Fonts via next/font) | Titoli H1–H3, logo, citazioni, numeri statistici |
| Inter | Sans-serif (Google Fonts via next/font) | Body, label, caption, interfaccia, navigazione |

### Scala tipografica

| Elemento | Font | Peso | Dimensione | Line-height | Note |
|---|---|---|---|---|---|
| H1 | Playfair Display | 900 | `clamp(2.2rem, 4vw, 3rem)` | 1.15 | Solo una occorrenza per pagina |
| H2 | Playfair Display | 700 | `clamp(1.8rem, 3vw, 2.4rem)` | 1.2 | Titoli di sezione |
| H3 | Playfair Display | 700 | `1.2rem` | 1.35 | Titoli card, sotto-sezioni |
| H4 | Inter | 700 | `1rem` | 1.4 | Titoletti, label sezione |
| Body largo | Inter | 400 | `1.1rem` | 1.8 | Paragrafi introduttivi |
| Body standard | Inter | 400 | `1rem` | 1.7 | Testo corrente |
| Body small | Inter | 400 | `0.875rem` | 1.6 | Descrizioni secondarie |
| Caption | Inter | 400 | `0.8rem` | 1.5 | Metadati, note, timestamp |
| Label overline | Inter | 700 | `0.75rem` | 1.4 | Uppercase, letter-spacing 0.1em. Label di categoria, badge |
| Blockquote | Playfair Display | 400 italic | `1.05rem` | 1.6 | Citazioni istituzionali |

### Regole tipografiche

- I titoli di sezione (H2) sulla homepage hanno un underline decorativo dorato (`border-bottom: 2px solid #C9A84C`, `padding-bottom: 4px`) quando su sfondo bianco. L'underline diventa dorato `rgba(201,168,76,0.7)` su sfondo scuro.
- `font-weight: 900` è riservato esclusivamente a H1 e al marchio ΓΛ nel logo.
- Il logo usa il simbolo greco ΓΛ in Playfair Display 900 colore `#C9A84C` su sfondo scuro.
- Non usare corsivo (italic) se non in citazioni e nel titolo corsivo del Centro («GrecoLatinoVivo»).

---

## 4. Spaziatura (griglia a 8px)

| Token | Valore | Uso |
|---|---|---|
| `--space-1` | `4px` | Micro-spaziatura tra elementi inline |
| `--space-2` | `8px` | Gap minimo tra elementi UI |
| `--space-3` | `12px` | Padding interno componenti compatti |
| `--space-4` | `16px` | Spaziatura standard tra elementi |
| `--space-5` | `20px` | Gap tra card in griglia |
| `--space-6` | `24px` | Padding sezioni compatte, padding container mobile |
| `--space-8` | `32px` | Gap griglia principale |
| `--space-10` | `40px` | Spaziatura tra colonne footer |
| `--space-12` | `48px` | Padding verticale sezione standard |
| `--space-16` | `64px` | Padding sezione ampia |
| `--space-20` | `80px` | Padding sezione hero |

**Larghezza container:** `max-width: 1200px`, `margin: 0 auto`, `padding: 0 24px`.  
**Container narrow (testi):** `max-width: 760px`, usato per sezioni di testo esteso.

---

## 5. Componenti UI

### 5.1 Pulsanti

#### `btn-primary`
Pulsante di azione principale. Sfondo navy `#1B3A6B`, testo bianco.

```
background:    #1B3A6B
color:         #FFFFFF
font:          Inter, 0.9rem, weight 600
padding:       12px 28px
border-radius: 8px
border:        none
transition:    background 0.2s
hover:         background #122B52
focus:         outline 2px solid #1B3A6B, outline-offset 2px
```

Uso: CTA principale di sezione, azione di checkout, invio form contatti.

#### `btn-secondary`
Pulsante di azione secondaria. Bordo navy, sfondo trasparente.

```
background:    transparent
color:         #1B3A6B
border:        2px solid #1B3A6B
font:          Inter, 0.9rem, weight 600
padding:       10px 26px
border-radius: 8px
transition:    background 0.2s, color 0.2s
hover:         background #1B3A6B, color #FFFFFF
```

Uso: azioni secondarie, "Scopri di più", link a pagine di dettaglio.

#### `btn-ghost`
Pulsante fantasma, per contesti su sfondo scuro.

```
background:    transparent
color:         rgba(255,255,255,0.85)
border:        1px solid rgba(255,255,255,0.35)
font:          Inter, 0.9rem, weight 600
padding:       10px 26px
border-radius: 8px
transition:    background 0.2s, border-color 0.2s
hover:         border-color rgba(255,255,255,0.7), color #FFFFFF
```

Uso: CTA su sfondo hero scuro, sezioni navy.

#### `btn-sm`
Variante piccola applicabile a tutti i tipi di pulsante.

```
padding:    8px 16px
font-size:  0.8rem
```

Uso: navbar ("Portale studenti"), badge CTA in card.

---

### 5.2 Card

Card standard per corsi, docenti, eventi.

```
background:    #FFFFFF
border:        1px solid #E8E0D0
border-radius: 12px
padding:       24px
box-shadow:    0 2px 8px rgba(0,0,0,0.05)
transition:    box-shadow 0.2s, transform 0.2s
hover:         box-shadow 0 8px 24px rgba(0,0,0,0.10), transform translateY(-2px)
```

**Card grande (lingue Latino e Greco Antico):** `grid-column: span 2`, padding `32px`, H3 `1.4rem`. Occupano l'intera larghezza in griglie a 2 colonne.

**Card compatta (Egiziano, Ebraico, Sanscrito):** dimensione standard, padding `20px`, H3 `1.1rem`. In griglia a 3 colonne.

---

### 5.3 Badge

Badge di categoria per lingue e livelli.

```
font:            Inter, 0.7rem, weight 700
text-transform:  uppercase
letter-spacing:  0.1em
padding:         3px 10px
border-radius:   4px
display:         inline-block
```

| Tipo | Background | Colore testo |
|---|---|---|
| Latino | `#1B3A6B` | `#FFFFFF` |
| Greco Antico | `#1B3A6B` | `#FFFFFF` |
| Egiziano Antico | `#2C5F2E` (verde scuro) | `#FFFFFF` |
| Ebraico Biblico | `#5C3D2E` (marrone) | `#FFFFFF` |
| Sanscrito | `#4A1E6E` (viola scuro) | `#FFFFFF` |
| Livello (A1–C2) | `#F4F6F8` | `#3A3A3A` |
| "Piano preferito" | `#1B3A6B` | `#FFFFFF` |
| MIM Accreditato | `#1A5276` | `#FFFFFF` |

---

### 5.4 Input Form

```
background:    #FFFFFF
border:        1px solid #D0D7E0
border-radius: 8px
padding:       12px 16px
font:          Inter, 1rem, color #1A1A1A
transition:    border-color 0.15s, box-shadow 0.15s
focus:         border-color #1B3A6B, box-shadow 0 0 0 3px rgba(27,58,107,0.12), outline none
error:         border-color #C0392B
placeholder:   color rgba(26,26,26,0.4)
```

Label sopra ogni input, Inter 0.875rem weight 600 colore `#3A3A3A`, margin-bottom `6px`.

Messaggio di errore: Inter 0.8rem colore `#C0392B`, margin-top `4px`.

---

### 5.5 Topbar

Banda superiore alla navbar, altezza `40px`, sfondo `#1B3A6B`.

Contenuto (da sinistra a destra):
- Telefono: `+39 345 245 6696` — link `tel:`, Inter 0.8rem, colore `rgba(255,255,255,0.85)`
- Separatore `·`
- Email: `info@grecolatinovivo.it` — link `mailto:`, stessa formattazione
- (destra) Link "Portale studenti" → `https://portale.grecolatinovivo.it`

La Topbar si nasconde su mobile (viewport < 768px).

---

## 6. Navigazione

### 6.1 Struttura della Navbar

La navbar è sticky (posizione `fixed top: 0`), altezza `70px`, sfondo `rgba(26,26,26,0.97)` con `backdrop-filter: blur(8px)`, bordo inferiore `1px solid rgba(201,168,76,0.2)`.

**Gerarchia:**

```
[Logo ΓΛ + testo]    [Offerta Formativa ▾]  [Eventi]  [Abbonati]  [Chi siamo]  [Portale studenti →]
```

Il pulsante "Portale studenti" è un `btn-primary btn-sm` che apre `portale.grecolatinovivo.it` (stesso tab, no `target="_blank`).

### 6.2 Mega-Menu "Offerta Formativa"

Si apre on hover e on focus-within (CSS puro, nessun JavaScript). Sfondo bianco, `border-radius: 10px`, `box-shadow: 0 20px 60px rgba(0,0,0,0.15)`.

Struttura interna: griglia 2 colonne, `min-width: 480px`.

**Colonna sinistra — Corsi:**
- Corsi in Diretta → `/corsi/corsi-live`
- Corsi Asincroni → `/corsi/corsi-asincroni`
- Tutoraggio Individuale → `/corsi/lezioni-individuali`
- Corsi Brevi Tematici → `/corsi/minicorsi`
- Formazione Docenti MIM → `/corsi/formazione-docenti`

**Colonna destra — Lingue:**
- Latino → `/corsi/corsi-asincroni?lang=latino`
- Greco Antico → `/corsi/corsi-asincroni?lang=greco`
- Egiziano Antico → `/corsi/corsi-asincroni?lang=egiziano`
- Ebraico Biblico → `/corsi/corsi-asincroni?lang=ebraico`
- Sanscrito → `/corsi/corsi-asincroni?lang=sanscrito`

Intestazioni di colonna: Inter 0.7rem uppercase letterspacing 0.1em, colore `#8B1A1A` (bordeaux, usato solo come colore UI — non come sfondo esteso), bordo inferiore `1px solid #E8E0D0`.

### 6.3 Mobile (viewport <= 1024px)

La navbar mostra solo il logo e l'hamburger. Il menu mobile si apre in overlay verticale sotto la navbar, sfondo `rgba(26,26,26,0.98)`. I link mobile hanno padding verticale `14px` e separatori `1px solid rgba(255,255,255,0.08)`.

---

## 7. Wireframe Testuale Homepage (5 Sezioni)

### Sezione 1 — Hero

```
SFONDO: navy scuro (#122B52), altezza 100vh su desktop, min 600px su mobile

[TOPBAR navy sopra — Topbar component]
[NAVBAR sticky — Header component]

┌─────────────────────────────────────────────────────────┐
│                                                         │
│   [overline gold, uppercase]                            │
│   DAL 2015 · ACCREDITATO MIM                            │
│                                                         │
│   [H1 Playfair Display 900 bianco]                      │
│   Le lingue classiche                                   │
│   incontrate nella loro                                 │
│   forma viva                                            │
│                                                         │
│   [body Inter bianco 0.85 opacity, max-width 480px]    │
│   Centro Nazionale di Studi Classici                    │
│   fondato a Firenze nel 2015.                           │
│   Latino, Greco, Egiziano, Ebraico, Sanscrito.          │
│   5.000+ studenti formati.                              │
│                                                         │
│   [btn-primary "Scopri i corsi"]                        │
│   [btn-ghost "Chi siamo"]                               │
│                                                         │
│                    [DESTRA: griglia 2×3 numerica]       │
│                    5.000+ studenti formati              │
│                    6 dipartimenti linguistici           │
│                    5 sedi in Italia                     │
│                    15 studenti max per classe           │
│                    A1–C2 QCER                           │
│                    72h corso base                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Layout desktop: 2 colonne `1fr 1fr`, gap `60px`. Layout mobile: colonna unica, griglia numerica sotto il testo.

---

### Sezione 2 — Orientamento Linguistico

```
SFONDO: #FFFFFF

[overline, centrato]
L'OFFERTA FORMATIVA

[H2 Playfair, centrato]
Scegli la tua lingua classica

[sotto-testo Inter muted, centrato, max-width 600px]
Cinque dipartimenti, 56 corsi disponibili, livelli A1–C2.

┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [GRIGLIA 2 colonne + 3 colonne]                        │
│                                                          │
│  [CARD GRANDE — Latino]       [CARD GRANDE — Greco]     │
│  Badge LATINO                 Badge GRECO ANTICO        │
│  7 corsi · A1.1–B1.3         7 corsi · A1.1–B1.3       │
│  [descrizione breve]          [descrizione breve]       │
│  [btn-secondary "Vedi corsi"] [btn-secondary "Vedi"]    │
│                                                          │
│  [CARD — Egiziano]  [CARD — Ebraico]  [CARD — Sanscrito]│
│  Badge verde        Badge marrone     Badge viola       │
│  3 corsi            3 corsi           [DA INSERIRE]     │
│  [btn-ghost small]  [btn-ghost small] [btn-ghost small] │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

La griglia ha due righe: prima riga 2 colonne (Latino e Greco, card grandi), seconda riga 3 colonne (Egiziano, Ebraico, Sanscrito, card compatte). Le card grandi comunicano che Latino e Greco sono i percorsi principali e più sviluppati.

---

### Sezione 3 — Percorsi Formativi

```
SFONDO: #F4F6F8

[H2 centrato]
Come vuoi studiare?

[4 card in griglia 2×2 su desktop, 1 colonna su mobile]

┌─────────────────────┐  ┌─────────────────────┐
│ [icona SVG]         │  │ [icona SVG]         │
│ Corsi in Diretta    │  │ Corsi Asincroni     │
│ Lezioni live con    │  │ 56 corsi a tua      │
│ max 15 studenti     │  │ disposizione, 24/7  │
│ [→ Scopri]          │  │ [→ Scopri]          │
└─────────────────────┘  └─────────────────────┘

┌─────────────────────┐  ┌─────────────────────┐
│ [icona SVG]         │  │ [icona SVG]         │
│ Tutoraggio 1:1      │  │ Formazione Docenti  │
│ Sessioni private    │  │ Percorso MIM        │
│ con docente dedic.  │  │ accreditato         │
│ [→ Scopri]          │  │ [→ Scopri]          │
└─────────────────────┘  └─────────────────────┘
```

Ogni card ha un'icona SVG monocromatica navy, H3 Playfair, testo body Inter, link testuale con freccia.

---

### Sezione 4 — Metodologia

```
SFONDO: #1B3A6B (navy istituzionale)

[2 colonne: testo sinistra, blocco destra]

SINISTRA:
  [overline gold uppercase]
  IL METODO NATURA

  [H2 Playfair bianco]
  Non grammatica astratta.
  Lingua viva.

  [body Inter rgba(255,255,255,0.80)]
  Il Metodo Natura, ispirato all'approccio di
  Hans Henning Ørberg, guida lo studente
  attraverso testi autentici progressivamente
  più complessi: ascoltando, leggendo, parlando.
  Come si impara una lingua materna.

  [btn-ghost "La nostra metodologia"]

DESTRA:
  [blockquote su sfondo rgba(255,255,255,0.07)]
  bordo-sinistra gold
  «Le lingue classiche non sono morte:
  aspettano solo di essere incontrate
  nella loro forma viva.»

  [firma: Inter small gold]
  Giampiero Marchi
  Direttore, Centro Nazionale di Studi Classici
```

---

### Sezione 5 — CTA Abbonamento

```
SFONDO: #FFFFFF

[centrato, max-width 700px]

[H2 Playfair]
Inizia il tuo percorso

[body Inter muted]
Tre piani per ogni esigenza.
Accesso immediato a tutto il catalogo.

[3 card pricing in riga]

┌──────────────┐  ┌──────────────────┐  ┌──────────────┐
│ CULTURA      │  │ LINGUAE          │  │ ACCADEMIA    │
│              │  │ [badge: "Più     │  │              │
│ €5,90/mese   │  │  scelto"]        │  │ €19,90/mese  │
│ €49/anno     │  │ €12,90/mese      │  │ €179/anno    │
│              │  │ €99/anno         │  │              │
│ [feature 1]  │  │ [feature 1]      │  │ [feature 1]  │
│ [feature 2]  │  │ [feature 2]      │  │ [feature 2]  │
│ [feature 3]  │  │ [feature 3]      │  │ [feature 3]  │
│              │  │ [feature 4]      │  │ [feature 4]  │
│ [btn-second] │  │ [btn-primary]    │  │ [btn-second] │
└──────────────┘  └──────────────────┘  └──────────────┘

[toggle mensile / annuale sopra le card]
[nota: "Abbonamento gestito su portale.grecolatinovivo.it"]
```

La card centrale (Linguae) è evidenziata con `border: 2px solid #1B3A6B` e leggero `box-shadow` più ampio. Il badge "Più scelto" (o "Il preferito dai docenti MIM") è in `btn-primary` sopra il titolo.

---

## 8. Regole per le Cinque Lingue

### Latino e Greco Antico — Card Grandi

- Dimensione: `grid-column: span 2` in griglie a 4 colonne (occupano 2 unità ciascuna su desktop).
- Padding: `32px`.
- Titolo H3: `1.4rem`.
- Il badge di lingua occupa una riga intera, non è inline.
- Mostrare: numero di corsi, range di livelli (A1.1–B1.3), nome responsabile dipartimento.
- CTA: `btn-secondary` visibile.
- Motivazione: Latino e Greco sono i corsi con il maggior numero di studenti e l'offerta più strutturata (7 corsi ciascuno, livelli completi). La dimensione maggiore comunica priorità senza gerarchizzazione esplicita.

### Egiziano Antico, Ebraico Biblico, Sanscrito — Card Compatte

- Dimensione: `grid-column: span 1` in griglia a 3 colonne nella seconda riga.
- Padding: `20px`.
- Titolo H3: `1.1rem`.
- Il badge di lingua è inline accanto al nome.
- Mostrare: numero di corsi, eventuale nota sintetica.
- CTA: link testuale (`→ Vedi corsi`) senza box pulsante, per non sovrastare le CTA principali.
- Badge colori distinti: Egiziano `#2C5F2E`, Ebraico `#5C3D2E`, Sanscrito `#4A1E6E`. I colori distinti facilitano il riconoscimento rapido delle categorie.

---

## 9. Regole Tone of Voice

Il sito rappresenta un ente accademico istituzionale. Il tono è calibrato su tre registri combinati:

**1. Istituzionale e preciso.**  
I dati sono sempre esatti e verificati. Non si usa mai linguaggio di stima o approssimazione se i dati sono noti. Esempi corretti: "5.000+ studenti formati dal 2015", "Accreditato MIM", "Membro Associato ALTE". Esempi non corretti: "migliaia di studenti", "riconosciuto dalle istituzioni".

**2. Culturalmente elevato, non accademico in senso burocratico.**  
Il centro ha una missione culturale viva. Il testo riflette passione per le lingue classiche senza diventare arido. La citazione istituzionale ("Le lingue classiche non sono morte: aspettano solo di essere incontrate nella loro forma viva") è il punto di riferimento tonale.

**3. Diretto, non commerciale.**  
I pulsanti e le CTA usano un tono indicativo, non imperativo-commerciale. Esempi corretti: "Scopri i corsi", "La nostra metodologia", "Vedi il calendario". Esempi non corretti: "Acquista ora!", "Non perdere questa opportunità!", "Iscriviti subito!".

**Regole operative:**

- Nessuna emoji nei contenuti istituzionali.
- Nessun punto esclamativo nei titoli di sezione o nei pulsanti.
- I nomi delle lingue si scrivono sempre con iniziale maiuscola: Latino, Greco Antico, Egiziano Antico, Ebraico Biblico, Sanscrito.
- Il nome del Centro si scrive per esteso alla prima occorrenza in ogni pagina: Centro Nazionale di Studi Classici «GrecoLatinoVivo». Nelle occorrenze successive: il Centro, oppure GrecoLatinoVivo.
- I termini tecnici (QCER, MIM, ALTE, BES/DSA) si usano senza spiegazione nella navigazione e nei badge; si spiegano in nota la prima volta nei testi lunghi (chi-siamo, faq).
- Il Metodo si scrive "Metodo Natura" con iniziale maiuscola.
- Ørberg si scrive sempre con dieresi.

---

## 10. Footer

Il footer è a 4 colonne su sfondo `#1A1A1A` (nero istituzionale). Standard accademico: il footer scuro è mantenuto per tutta la vita del sito.

| Colonna | Contenuto |
|---|---|
| 1 — Brand | Logo ΓΛ + nome, tagline, citazione istituzionale in blockquote gold |
| 2 — Formazione | Link a tutti i tipi di corso + link abbonamento |
| 3 — Il Centro | Chi siamo, Docenti, Metodologia, Sedi, Eventi, FAQ |
| 4 — Contatti | Telefono, email, elenco 5 sedi |

Bottom bar: sfondo `#1A1A1A`, bordo superiore `1px solid rgba(255,255,255,0.08)`. A sinistra: copyright. A destra: Privacy Policy, Termini di servizio, Contatti.

Colori footer: intestazioni colonna Inter 0.7rem uppercase `rgba(255,255,255,0.5)`, link `rgba(255,255,255,0.65)` → hover `#FFFFFF`, testo secondario `rgba(255,255,255,0.4)`.

---

## 11. Animazioni e Interazioni

- **Scroll reveal:** gli elementi con classe `.reveal` diventano visibili (`opacity: 1, transform: translateY(0)`) quando entrano nel viewport (IntersectionObserver, threshold 0.1). Lo stato iniziale è `opacity: 0, transform: translateY(20px)`. La transizione è `0.6s ease-out`. Nessuna animazione per utenti con `prefers-reduced-motion: reduce`.
- **Hover su card:** `transform: translateY(-2px)` e `box-shadow` più intenso, transizione `0.2s ease`.
- **Hover su link navbar:** `background: rgba(255,255,255,0.08)`, transizione `0.15s`.
- **Nessuna animazione auto-play** (carousel, slideshow). Tutti i contenuti sono statici o interattivi su azione utente esplicita.

---

## 12. Responsive

| Breakpoint | Viewport | Comportamento |
|---|---|---|
| Desktop large | > 1280px | Layout a 2 colonne nelle sezioni principali |
| Desktop | 1025px – 1280px | Layout a 2 colonne, spaziatura ridotta |
| Tablet | 769px – 1024px | Navbar hamburger, griglie a 2 colonne, footer 2 colonne |
| Mobile large | 481px – 768px | Griglie a 1 colonna, Topbar nascosta, footer 1 colonna |
| Mobile | <= 480px | Sottotitolo logo nascosto, padding container 16px |

Le card delle 5 lingue su mobile diventano tutte uguali (1 colonna), eliminando la distinzione grande/compatta per non spezzare il layout verticale.
