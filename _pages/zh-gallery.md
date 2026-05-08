---
title: "ZidaLab - 相册"
layout: piclay
excerpt: "ZidaLab 相册"
permalink: /zh/gallery/
lang: zh
---

# 相册

<div class="gallery-intro" markdown="1">

这里记录了 ZidaLab 的实验、组会、聚餐、答辩和日常活动。相比论文和项目，这些照片展示的是课题组真实的工作氛围和成员之间的共同经历。

</div>

## 团队合影

<p class="gallery-section-note">课题组合影、外出活动、聚餐和共同完成的实验室时刻。</p>

{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/group_photos' %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row gallery-row">
{% endif %}

<div class="col-sm-3 clearfix">
{% assign image_title = image.name | split: '.' | first | replace: '_', ' ' | replace: '-', ' ' %}
<a class="gallery-card" href="{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" alt="{{ image_title }}" loading="{% if number_printed < 4 %}eager{% else %}lazy{% endif %}" fetchpriority="{% if number_printed < 4 %}high{% else %}auto{% endif %}" decoding="async" /><span class="gallery-card-caption">{{ image_title }}</span></a>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

## 答辩与毕业

<p class="gallery-section-note">论文答辩、毕业节点和重要里程碑。</p>

{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/defense_photos' %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row gallery-row">
{% endif %}

<div class="col-sm-3 clearfix">
{% assign image_title = image.name | split: '.' | first | replace: '_', ' ' | replace: '-', ' ' %}
<a class="gallery-card" href="{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" alt="{{ image_title }}" loading="lazy" decoding="async" /><span class="gallery-card-caption">{{ image_title }}</span></a>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

## 实验室日常

<p class="gallery-section-note">实验、组会、教学、维护和非正式活动中的瞬间。</p>

{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/other_photos' %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row gallery-row">
{% endif %}

<div class="col-sm-3 clearfix">
{% assign image_title = image.name | split: '.' | first | replace: '_', ' ' | replace: '-', ' ' %}
<a class="gallery-card" href="{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" alt="{{ image_title }}" loading="lazy" decoding="async" /><span class="gallery-card-caption">{{ image_title }}</span></a>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

