

# 🎮 **ORIGINAL XBOX UI DESIGN SYSTEM (2001) — Recreated in Markdown**

> **Style:** Toxic green, black biotech, plasma-like movement, thick beveled UI, industrial yet organic transitions.

---

# 1. **Color System**

## 🎨 **Core Palette**

```md
### Primary Colors
- **Xbox Toxic Green** — `#9ACD32`  
- **Energy Neon Green** — `#76EE00`
- **Radioactive Glow** — `#00FF00`

### Secondary Colors
- **Deep Black** — `#000000`
- **Charcoal Black** — `#0A0A0A`
- **Slate Gray** — `#202020`
- **Smoke Green** — `#1A2E10`

### Highlight / FX Colors
- **Jewel Gloss Green** — `#5AFF4C`
- **Gridline Cyan-Green** — `#3CFFB5`
- **Menu Glow Yellow-Green** — `#C4FF6E`
```

---

# 2. **Typography**

```md
### Heading Font (Xbox-inspired)
- **Eurostile Extended / Microgramma**
- Usage: Titles, menus, HUD labels

### Body Font
- **Verdana / Arial**
- Usage: Descriptions, system text

### Number Font (for timers, memory blocks)
- **OCR-A / Bank Gothic**
```

---

# 3. **Grid & Layout System**

## 🟩 **Dashboard Layout (Xbox-Style)**

```md
### Base Layout Rules
- **Centered main focus panel** (never left-aligned)
- **4–6 Option Menu Wheel** (vertical stack)
- **Large margins** around all UI (breathing room for glow)
- Content max width: **960px**
- Padding: **32–48px**
```

### 📐 **Page Structure**

```
╔══════════════════════════════════╗
║  Background: animated green fog  ║
╠══════════════════════════════════╣
║      [ Main Title Text ]         ║
║                                  ║
║  > Menu Item 1 (selected)        ║
║    Menu Item 2                   ║
║    Menu Item 3                   ║
║    Menu Item 4                   ║
║                                  ║
║  [ Info Box / Slime Glow Panel ] ║
╚══════════════════════════════════╝
```

### Navigation Principles

* Highlighted item glows, pulses slowly
* Non-selected items dim at 60% brightness
* Title text always has radioactive drop shadow

---

# 4. **Xbox UI Components**

## 4.1 **Primary Button (OG-Xbox Style)**

```md
### Default Button
- Background: #1A2E10
- Border: 2px solid #3CFFB5
- Glow: Outer glow #00FF00 @ 20%
- Text: #C4FF6E (Eurostile Extended)

### Selected / Focused
- Scale: 1.05x
- Glow: #76EE00 at 50%
- Inner sheen gradient: top → bottom (10–30% white)
```

---

## 4.2 **Slime Panel / Info Box**

```md
### Panel Style
- Background: Black -> Green plasma gradient
- Border: Double-line neon green
- Inner distortion layer using noise-map
- Subtle 3D bevel: 2–4px
```

---

## 4.3 **Xbox “Memory Block” Cards**

```md
### Card Style
- Square (150px)
- Toxic green outline
- CRT-style scanline overlay
- Subtle jitter animation every 8–12 seconds
- Icon: monochrome green
```

---

## 4.4 **HUD Indicator Elements**

```md
- Crosshair circles
- Rotating rings
- Grid meshes
- Moving horizontal scanlines
- Animated corner brackets (L-shaped)
```

---

# 5. **Animations & Motion System**

OG Xbox UI is known for its **organic, living slime motion**.

## 5.1 **Motion Philosophy**

* Slow, viscous, organic
* Everything feels like **radioactive gel reacting to input**
* Movements continue even after the user stops

---

## 5.2 **Key Motion Behaviors**

### **A. Selection Pulse**

```md
- Scale: 1 → 1.05 → 1
- Duration: 900ms
- Curve: ease-in-out-cubic
- Glow increases on pulse peak
```

### **B. Menu Slide**

```md
- Direction: right → left (like being pulled in)
- Easing: ease-out-quart
- Background fog shifts with parallax
```

### **C. Plasma/Fog Background Motion**

```md
- Slow swirling patterns (noise-based)
- 5–15 second loops
- Slight hue shift between #1A2E10 and #76EE00
```

### **D. Grid Flicker**

```md
- Occasional dimming (2–5%)
- Random interval: 6–12 seconds
```

### **E. Jewel Shine**

```md
- Diagonal glossy sheen sweep every 10–20 seconds
```

---

# 6. **Backgrounds & FX Layers**

## Layer Stack:

```
Layer 1: Deep Black (#000000)
Layer 2: Fog/Slime noise animation (green)
Layer 3: Thin transparent grid
Layer 4: Neon scanlines (vertical + horizontal)
Layer 5: UI components (glowing panels)
Layer 6: Particles (heat shimmer, fog dots)
```

## Fog / Plasma Rules

* Color: #1A2E10 to #76EE00
* Displacement: 2–5px per frame
* Random bubbling highlights

---

# 7. **Sound Interaction (Optional for Web)**

While optional, the original Xbox UI used audio heavily.

```md
- Low hum drone (background)
- Soft clicking servo sounds for navigation
- Slime/bubble FX when opening menus
- Deep bass thump on confirmation
```

If you want, I can create a **free-to-use modern SFX pack** inspired by this.

---

# 8. **Modern Implementation Notes for Web**

## Recommended Tech Stack

* **Next.js 15**
* **TailwindCSS**
* **Framer Motion**
* **CSS GPGPU / shader effects (optional)**
* **ShadCN UI extended with neon skins**

## Example Tailwind Utilities

```css
/* Xbox Glow */
.xbox-glow {
  box-shadow:
    0 0 12px #00ff00,
    0 0 24px #76ee00 inset;
}

/* Scanlines */
.scanlines {
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.05) 0px,
    rgba(255,255,255,0.05) 1px,
    transparent 2px,
    transparent 4px
  );
}
```

---

# 9. **Prebuilt Component Examples**

(If you want, I can turn these into full React code)

## **9.1 Menu Item Component**

```md
- Height: 48px
- Letter spacing: +1.5px
- Glow: 15–20px green
- Hover: Smooth scale-up + outline burst
```

## **9.2 Slime Drawer**

```md
- Expands vertically like soft rubber
- Light wobble on open
- Noise distortion mask on edges
```

## **9.3 Jewel Header**

```md
- Large neon-green title text
- Gloss shader overlay
- Animated ring slowly rotating behind it
```

---

# 10. **Ready-to-Use ASSET PACK (Optional)**

I can generate:

* Toxic green background loops
* Plasma fog WebM loops
* Xbox-style neon button SVGs
* Memory block icons
* Original Xbox header font files
* Green gel animation overlays

Just say **"Generate asset pack"**.

---

# ✅ Want The Full Figma File?

I can recreate this into a **structured Figma Design System** including:

* Components
* Tokens
* Animations
* Dashboard templates
* Layout grid
* Glow/pulse presets
