---
title: Home
layout: root.liquid
---

## Projects
{% for project in collections.project %}
- [{{ project.data.title }}]({{ project.url }})
{% endfor %}

## Writing
{% for writing in collections.writing %}
- [{{ writing.data.title }}]({{ writing.url }})
{% endfor %}

## Airtable
{% for item in all %}
- {{item.title}}
{% endfor %}