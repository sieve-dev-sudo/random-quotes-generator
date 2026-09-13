<div align="center">

# Random Quotes

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge)

</div>

---

## ✨ លក្ខណៈពិសេស

- ទាញខ្សែពួរ ដើម្បីបង្កើត quote ដោយចៃដន្យ
- មាន 6 categories: make, write, build, cook, start, quotes
- សរុប 60 ឃ្លា (10 ក្នុងមួយ category) ជាភាសាអង់គ្លេសសុទ្ធ
- មិនទាញឃ្លាដដែលៗជាប់គ្នាពីរដងទេ
- អំពូលមាន animation ញាប់ (charging) មុននឹងភ្លឺជាពណ៌មាស
- ចុចលើអំពូល ឬ switch ជាប់នឹងអំពូល ដើម្បី toggle បិទ / បើកភ្លើង
- Support ប្រើ keyboard (Tab + Enter/Space) សម្រាប់ toggle អំពូល
- មាន spark counter រាប់ចំនួនដងដែលបានទាញ ហើយរក្សាទុកឆ្លងកាត់ session (localStorage)
- ស្ថានភាពបិទ/បើកភ្លើងក៏រក្សាទុកដែរ នៅពេលបើកទំព័រម្តងទៀត
- Responsive ពេញលេញ (centered នៅលើ phone ផងដែរ) គ្មាន build step គ្មាន dependencies

---

## 📁 រចនាសម្ព័ន្ធ Project

```
Random-Quotes/
├── index.html      → រចនាសម្ព័ន្ធទំព័រ
├── style.css       → theme, animation អំពូល, card, layout
├── script.js       → IDEAS data, CAT_LABELS, logic ទាញ / toggle
└── README.md
```

---

## 🚀 របៀបប្រើ

1. Clone ឬ download repository នេះ:
   ```
   git clone <repo-url>
   ```
2. បើកឯកសារ `index.html` ដោយ browser ណាមួយ
3. ចុចប៊ូតុង **Pull the cord** ដើម្បីទាញរក quote ឬចុចលើអំពូលដើម្បីបិទ / បើកភ្លើង

---

## 🌐 English Summary

A tiny, dependency-free web app: pull a lightbulb's cord to reveal a random quote from one of 6 categories (make, write, build, cook, start, quotes). The bulb has a charging flicker animation before lighting up gold. Click or tap the bulb (or use Tab + Enter/Space) to turn the light off/on. A spark counter tracks how many times you've pulled, and both the counter and the light's on/off state persist across page reloads via `localStorage`. No build step, no dependencies: just open `index.html` in a browser.
