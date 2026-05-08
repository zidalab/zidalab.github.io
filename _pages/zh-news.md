---
title: "新闻"
layout: textlay
excerpt: "ZidaLab 新闻"
sitemap: false
permalink: /zh/news/
lang: zh
---

# 新闻

{% for article in site.data.news_zh %}
*{{ article.date }}* <br> {{ article.headline }}
{% endfor %}
