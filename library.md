---
title: Library
layout: root.liquid
---

{% for book in all %}
- [{{ book.Title }}]({{ book.Buy }})
{% endfor %}