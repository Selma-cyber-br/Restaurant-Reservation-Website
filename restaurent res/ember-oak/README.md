# Ember & Oak — Fine Dining Website

A luxury restaurant landing site with a dark amber aesthetic.

## File Structure

```
ember-oak/
├── index.html          ← Home page (hero, gallery, stats)
├── css/
│   └── style.css       ← All styles (tokens, navbar, sections, responsive)
├── js/
│   └── main.js         ← Navbar scroll, mobile menu, reveal animations, form
├── pages/
│   ├── menu.html       ← Full tabbed menu (Starters/Mains/Desserts/Drinks)
│   ├── experience.html ← About / dining experience section
│   └── contact.html    ← Reservation form + location info
└── images/             ← Drop real images here (currently embedded as base64)
```

## How to Run

Just open `index.html` in any browser — no build step needed.

## Swapping Images

Images are currently embedded as base64 in `index.html` for portability.
To use file references instead, place your JPGs in `images/` and replace
the `data:image/jpeg;base64,...` strings with e.g. `images/interior.jpg`.

## Palette
| Token         | Value     |
|---------------|-----------|
| `--dark`      | `#0E0C09` |
| `--dark-2`    | `#1A1712` |
| `--amber`     | `#C9923A` |
| `--amber-light` | `#E8B96A` |
| `--cream`     | `#F5EDD8` |
