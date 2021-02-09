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

## [Currently Reading](https://airtable.com/shrujTwAp0e7xcc12)
{% for item in all %}
- [{{ item.Title }} by {{ item.Author }}]({{ item.Bookshop }})
{% for cover in item.Cover %}
    {%- for thumb in cover.thumbnails.small.url %}
    [![Cover]({{ thumb }})]({{ item.Bookshop }})
    {% endfor %}
{% endfor %}
{% endfor %}