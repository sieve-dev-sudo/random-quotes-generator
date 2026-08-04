## Idea Spark

ទំព័រតូចមួយ interactive សម្រាប់ទាញរកគំនិតច្នៃប្រឌិតដោយចៃដន្យ។ ទាញខ្សែពួរ (pull the cord) មើលអំពូលគំនូរដៃញាប់ភ្លឺឡើង រួចទទួលបានគំនិតថ្មីភ្លាមៗ។

---

## ✨ Features

- ទាញខ្សែពួរ ដើម្បីបង្កើតគំនិតដោយចៃដន្យ
- មាន 6 categories: make, write, build, cook, start, reflect
- ក្នុង **reflect** មានឃ្លាបែបលើកទឹកចិត្ត / ប្រស្នា ចំនួន 18 ឃ្លា
- អំពូលមាន animation ញាប់ (charging) មុននឹងភ្លឺជាពណ៌មាស
- ចុចលើអំពូល ឬ pull-ring ដើម្បី toggle បិទ / បើកភ្លើង
- មាន spark counter រាប់ចំនួនដងដែលបានទាញក្នុង session នេះ
- Responsive ពេញលេញ គ្មាន build step គ្មាន dependencies

---

## 📁 Project Structure

```
idea-spark/
├── index.html      → រចនាសម្ព័ន្ធទំព័រ
├── style.css       → theme, animation អំពូល, card, layout
├── script.js       → IDEAS data, CAT_LABELS, ​logic ទាញ / toggle
└── README.md
```

---

## 🚀 How to Run

1. Clone ឬ download repository នេះ:
   ```
   git clone <repo-url>
   ```
2. បើកឯកសារ `index.html` ដោយ browser ណាមួយ
3. ចុចប៊ូតុង **Pull the cord** ដើម្បីទាញរកគំនិត ឬចុចលើអំពូលដើម្បីបិទ / បើកភ្លើង