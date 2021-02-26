---
title: Library
layout: root.liquid
---

{% for book in all %}
- {{ book.title_pretty }}, {{ book.author }}
{% endfor %}